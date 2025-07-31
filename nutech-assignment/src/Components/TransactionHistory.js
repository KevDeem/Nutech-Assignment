import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TransactionHistory() {
    const [transactions, setTransactions] = useState([]);
    const fetchTransactions = async () => {
        axios.get('transactions.json', {
            headers: {
                'Content-Type': 'application/json',
            },
        })

    return (
        <div>
            <h1>Transaction History</h1>
            <p>This is the transaction history content.</p>

        </div>
    );
}

export default TransactionHistory;
