import { useContext, useEffect, useState } from 'react';
import useSocket from '../hooks/useSocket';
import { TYPE_ID, TYPE_MESSAGE } from '../constants/Constants';
import { v4 as uuidv4 } from 'uuid';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../context/user.context';
import { getIssuesById } from '../redux/issue/issueService';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from './Spinner';

const Room = () => {
  const { pathname } = useLocation();
  const roomId = pathname.slice(6, pathname.length);
  const [targetId, setTargetId] = useState('');
  const [currentMessage, setCurrentMessage] = useState('');
  const [latestMessages, setLatestMessages] = useState<any[]>([]);
  const socket = useSocket(roomId);
  const userId = useContext(UserContext);
  const dispatch = useDispatch();
  const { loading, error, issue } = useSelector((s: any) => s.issue);

  useEffect(() => {
    getIssuesById(dispatch, roomId);

    if (socket) {
      socket.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);
        if (parsedData.type == TYPE_ID) {
          setTargetId(parsedData.id);
          setLatestMessages(() =>
            parsedData.messages.map((x: any) => {
              return {
                id: uuidv4(),
                message: x.message,
                mine: x.userId == userId,
              };
            })
          );
        } else if (parsedData.type == TYPE_MESSAGE) {
          setLatestMessages((m) => [
            ...m,
            { id: uuidv4(), message: parsedData.message, mine: false },
          ]);
        }
      };
    }

    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, [socket, userId, roomId]);

  if (!socket) {
    return <div>Connecting to server</div>;
  }

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className="relative">
        <div className="absolute end-4 animate-fade-in-out transition ease rounded-sm p-1 w-1/7 bg-red-400 text-white">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 animate-fadeIn">
      {issue && (
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-sans tracking-widest font-semibold uppercase">
            {issue.title}
          </h3>
          <p className="text-xxs text-slate-300">{issue.description}</p>
          <div className="relative border border-slate-300 min-h-screen p-4 rounded-md">
            {latestMessages.map((comment: any, i: number) => {
              return (
                <div
                  key={comment.id}
                  style={{ top: `${i * 3}rem` }}
                  className={`absolute bg-slate-800 flex gap-10 w-max items-center justify-between border border-slate-300 ${
                    comment.mine
                      ? `rounded-ee-xl rounded-l-xl end-4`
                      : 'rounded-es-xl rounded-r-xl start-4'
                  } p-3 m-1`}
                >
                  <div className="flex gap-2 items-center">
                    <h4 className="text-slate-300 text-xs px-6">
                      {comment.message}
                    </h4>
                  </div>
                </div>
              );
            })}

            <div className="absolute end-4 bottom-14 flex gap-3">
              <input
                onChange={(e) => setCurrentMessage(e.target.value)}
                className="px-4 py-1 bg-slate-200 text-black"
                type="text"
                value={currentMessage}
                placeholder="Message"
              />
              <button
                onClick={() => {
                  console.log({
                    userId: userId,
                    from: targetId,
                    roomId,
                    message: currentMessage,
                  });
                  socket.send(
                    JSON.stringify({
                      userId: userId,
                      from: targetId,
                      roomId,
                      message: currentMessage,
                    })
                  );
                  setLatestMessages((m) => [
                    ...m,
                    { id: uuidv4(), message: currentMessage, mine: true },
                  ]);
                  setCurrentMessage('');
                }}
                className="text-[0.55rem] font-sans font-bold px-4 py-1 rounded-sm bg-slate-500 hover:bg-slate-600"
              >
                SEND
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Room;
