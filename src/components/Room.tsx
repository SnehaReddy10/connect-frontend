import { useState } from 'react';

const issue = {
  id: 7,
  title: 'Fix something random',
  category: 'finance',
  description: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
  likes: 5,
  comments: [
    { message: 'that would be great', likes: 2, liked: true, replies: [] },
    { message: 'that would be great', likes: 2, liked: false, replies: [] },
  ],
};

const Room = () => {
  const [liked, setLiked] = useState([]);
  return (
    <div className="mt-10">
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-sans tracking-widest font-semibold uppercase">
          {issue.title}
        </h3>
        <p className="text-xxs text-slate-300">{issue.description}</p>
        {issue.comments.map((comment: any, i: number) => (
          <div className="flex justify-between">
            <h4 className="text-slate-300 text-xs">{comment.message}</h4>
            <div className="flex gap-2">
              <div
                className="flex gap-1"
                onClick={() => {
                  console.log(comment.liked);
                  comment.liked = !comment.liked;
                  console.log(comment.liked);
                }}
              >
                {liked ? (
                  <img
                    src="/assets/icons/like-outline.png"
                    alt="like"
                    className="h-3 w-3"
                  />
                ) : (
                  <img
                    src="/assets/icons/like-full.png"
                    alt="like"
                    className="h-3 w-3"
                  />
                )}
                <p className="text-xxs">{comment.likes}</p>
              </div>
              <div className="flex gap-1">
                <img
                  src="/assets/icons/bubble-chat.png"
                  alt="like"
                  className="h-3 w-3"
                />
                <p className="text-xxs">{comment.replies.length}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Room;
