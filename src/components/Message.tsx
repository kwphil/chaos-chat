import React from 'react';
import { Box, Typography, Avatar, Paper } from '@mui/material';

interface MessageProps {
  text: string;
  sender: string;
  timestamp: string;
}

const Message: React.FC<MessageProps> = ({ text, sender, timestamp }: MessageProps) => {
  return (
    <Paper sx={{ padding: 2, marginBottom: 2, display: 'flex', alignItems: 'flex-start' }}>
      <Avatar>{sender[0]}</Avatar>
      <Box sx={{ marginLeft: 2 }}>
        <Typography variant="body1">{text}</Typography>
        <Typography variant="caption" color="textSecondary">{sender} - {timestamp}</Typography>
      </Box>
    </Paper>
  );
};

export default Message;
