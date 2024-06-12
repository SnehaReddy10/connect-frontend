import { createContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/user/userService';
import { TOKEN } from '../constants/Constants';

export const UserContext = createContext({});

export const UserProvider = ({ children }: any) => {
  const user = useSelector((s: any) => s.user?.currentUser);
  const dispatch = useDispatch();
  const getCurrentUser = async () => {
    await getUser(dispatch);
  };

  useEffect(() => {
    if (localStorage.getItem(TOKEN)) {
      getCurrentUser();
    }
  }, [localStorage.getItem(TOKEN)]);

  return (
    <UserContext.Provider value={user?._id}>{children}</UserContext.Provider>
  );
};
