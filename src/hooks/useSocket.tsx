import { useEffect, useState } from 'react';

function useSocket() {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const websocketInstance = new WebSocket('ws://localhost:8080');
    websocketInstance.onopen = () => {
      console.log('Web socket connection established');
    };

    websocketInstance.onclose = () => {
      console.log('Web socket connection closed');
    };

    websocketInstance.onerror = () => {
      console.log('Error in Web socket connection');
    };

    setSocket(websocketInstance);

    return () => {
      socket?.close();
    };
  });
  return socket;
}

export default useSocket;
