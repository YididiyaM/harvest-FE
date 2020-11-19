import React, { useEffect } from 'react';
import ChatApi from '../../api/ChatApi';
import ChatPage from './ChatPage';

function ThreadPage() {
  useEffect(() => {
    const getThreads = async () => {
      const response = await ChatApi.getAllThread();
      console.log(response);
    };
    getThreads();
  }, []);

  return <div></div>;
}

export default ThreadPage;