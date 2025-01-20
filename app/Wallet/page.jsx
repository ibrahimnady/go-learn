"use client"
import React, { useState } from 'react';
import { Typography, Button, Box, Paper, Divider, Table, TableBody, TableCell, TableHead, TableRow, useTheme } from '@mui/material';
import WalletIcon from '@mui/icons-material/Wallet';
import Grid from '@mui/material/Grid2';

const Wallet = () => {
    const theme = useTheme();
    const [balance, setBalance] = useState(0);
    const [transactions, setTransactions] = useState([
        { id: 1, status: 'deposit', amount: 100, date: '2023-02-20', type: "instapay" },
        { id: 1, status: 'withdrawal', amount: 100, date: '2023-02-20', type: "درس فزياء" },
        { id: 1, status: 'deposit', amount: 100, date: '2023-02-20', type: "vodavon cash" },
    ]);
    const handleCharge = () => {
        // هنا يمكنك إضافة المنطق الخاص بشحن المحفظة
        setBalance(balance + 100);
    };

    return (
        <Box sx={{ p: 3, mt: 8, width: '100%' }}>
            {/* <Typography variant="h4" sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold' }}>
                الرصيد
            </Typography> */}
            <Paper sx={{
                p: 2, mb: 2,
                borderRadius: 2,
                border: '5px solid #00000',
                bgcolor: theme.palette.background.bgWallet,
                color: theme.palette.Text.TXTWallet,
            }}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item size={{ xs: 12, md: 12, lg: 12 }}>
                        <Typography variant="h2" sx={{ mb: 1, textAlign: 'center' }}>
                            EGP : {balance}
                        </Typography>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 12, lg: 12 }}>
                        <Button
                            variant="contained"
                            startIcon={<WalletIcon />}
                            onClick={handleCharge}
                            sx={{
                                width: '100%',
                                py: 1,
                                bgcolor:  theme.palette.background.bgButton,
                                color: theme.palette.Text.TXTButton
                            }}
                        >
                            شحن المحفظة
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ mt: 2 }}>

                <Table sx={{ maxWidth: '100%', border: '2px solid ' }}>
                    <TableHead >
                        <TableRow sx={{
                            bgcolor: theme.palette.background.bgWallet,
                            color: theme.palette.Text.TXTWallet,
                        }}>
                            <TableCell sx={{
                                borderRight: '1px solid #ddd',
                                textAlign: 'center',
                                color: theme.palette.Text.TXTWallet,
                            }}
                            >التاريخ</TableCell>
                            <TableCell sx={{
                                borderRight: '1px solid #ddd',
                                textAlign: 'center',
                                color: theme.palette.Text.TXTWallet,
                            }}
                            >النوع</TableCell>
                            <TableCell sx={{
                                borderRight: '1px solid #ddd',
                                textAlign: 'center',
                                color: theme.palette.Text.TXTWallet,
                            }}
                            >الحالة</TableCell>
                            <TableCell sx={{ textAlign: 'center', color: theme.palette.Text.TXTWallet, }}>المبلغ</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactions.map((transaction) => (
                            <TableRow key={transaction.id}>
                                <TableCell sx={{ borderRight: '1px solid #ddd' }}>{transaction.date}</TableCell>
                                <TableCell sx={{ borderRight: '1px solid #ddd' }}>{transaction.type}</TableCell>
                                <TableCell sx={{ borderRight: '1px solid #ddd', textAlign: 'center' }}>{transaction.status === 'deposit' ? 'ايداع' : 'سحب'}</TableCell>
                                <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>{transaction.amount} EGP</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </Box>
    );
};

export default Wallet;