import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [ message, setMessage ] = useState('');

  const handleSendMessage = () => {
    if(message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
      <TextField
        fullWidth
        variant="outlines"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <Button sx={{ marginLeft: 2 }} variant="contained" color="primary" onClick={handleSendMessage}>
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;
