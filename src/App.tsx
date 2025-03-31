import React, { useState } from 'react';
import { Container, Box, AppBar, Toolbar, Typography } from '@mui/material';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';

const App: React.FC = () => {
  const [ messages, setMessages ] = useState([]);

  const handleSendMessage = (message: string) => {
    const newMessage = {
      text: message,
      sender: 'You',
      timestamp: new Date().toLocaleTimeString(),
    };
    
    setMessages([ ...messages, newMessage ]);
  };

  return (
    <Box sx= {{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">Chat</Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <MessageList messages={ messages } />
        <MessageList onSendMessage={ handleSendMessage } />
      </Container>
    </Box>
  );
};

export default App;
