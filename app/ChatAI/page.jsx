'use client';
import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

const ChatAI = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, input]);
            setInput(''); // مسح حقل الإدخال بعد الإرسال
        }
    };

    return (
        <Container component="main" maxWidth="sm" sx={{ marginTop: '20px' }}>
            <Typography variant="h4" component="h1" gutterBottom>
                دردشة
            </Typography>
            <Box sx={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', height: '400px', overflowY: 'auto' }}>
                <List>
                    {messages.map((message, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={message} />
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box sx={{ display: 'flex', marginTop: '16px' }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="اكتب رسالتك هنا..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={handleSendMessage} sx={{ marginLeft: '8px' }}>
                    إرسال
                </Button>
            </Box>
            
        </Container>
    );
};

export default ChatAI;