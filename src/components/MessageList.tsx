import React, { useState } from 'react';
import { Box } from '@mui/material';
import Message from './Message';

interface Message {
  text: string;
  sender: string;
  timestamp: string;
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }: MessageListProps) => {
  const [ input, setInput ] = useState<Message[] | null>();

  const handleAddMessages = () => {
    if(input.trim() === '') return;
    
    const newMessage = {
      text: input,
      sender: 'You',
      timestamp: new Date().toLocaleTimeString(),
    };

    const updatedMessages = [ ...messages, newMessage ];
    setMessages(updatedMessages);
    setInput('');
  };

  return (
    <Box sx={{ padding: 2, maxHeight: '400px', overflowY: 'scroll' }}>
      { 
        try {
          messages.map((msg, index) => (
        <Message key={ index } text={ msg.text } sender={ msg.sender } timestamp={ msg.timestamp } />
        ))
        } catch(_) {
          ''
        }
      }
    </Box>
  );
};

export default MessageList;
