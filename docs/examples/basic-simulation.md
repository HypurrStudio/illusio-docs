---
sidebar_position: 1
---

# Basic Transaction Simulation

This example demonstrates how to simulate a basic ERC20 token transfer using Illusio.

## Prerequisites

- Illusio frontend running locally
- TxStudio backend running in Docker
- MetaMask or another Web3 wallet installed

## Step-by-Step Guide

### 1. Connect Your Wallet

1. Open Illusio dashboard at `http://localhost:3000/dashboard`
2. Click "Connect Wallet" in the top right
3. Select MetaMask (or your preferred wallet)
4. Approve the connection

### 2. Set Up the Contract

```typescript
// Example ERC20 contract address on HyperEVM mainnet
const CONTRACT_ADDRESS = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';

// Example transfer parameters
const RECIPIENT = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';
const AMOUNT = '1000000000000000000'; // 1 token with 18 decimals
```

### 3. Simulate the Transfer

```typescript
// Using the TxStudio API directly
const response = await fetch('http://localhost:8000/api/simulate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    to: CONTRACT_ADDRESS,
    from: YOUR_ADDRESS,
    data: encodeFunctionCall('transfer', [RECIPIENT, AMOUNT]),
    value: '0',
    gas: '3000000',
    gasPrice: '1000000000'
  }),
});

const result = await response.json();
```

### 4. Analyze Results

The simulation will return:

```json
{
  "success": true,
  "result": {
    "gasUsed": "34562",
    "status": "0x1",
    "traces": [...],
    "stateChanges": [
      {
        "address": "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        "key": "0x...",
        "oldValue": "previous balance",
        "newValue": "new balance"
      }
    ],
    "events": [
      {
        "address": "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        "topics": [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x000000000000000000000000{from address}",
          "0x000000000000000000000000{to address}"
        ],
        "data": "0x..."
      }
    ]
  }
}
```

### 5. Understanding the Output

- **gasUsed**: Actual gas consumed by the transaction
- **status**: Success (0x1) or failure (0x0)
- **traces**: Detailed execution trace
- **stateChanges**: Storage changes in the contract
- **events**: Emitted events (Transfer in this case)

## Common Issues

1. **Insufficient Balance**
   ```json
   {
     "success": false,
     "error": {
       "code": "INSUFFICIENT_BALANCE",
       "message": "Account has insufficient balance for transfer"
     }
   }
   ```

2. **Invalid Address**
   ```json
   {
     "success": false,
     "error": {
       "code": "INVALID_ADDRESS",
       "message": "Invalid Ethereum address format"
     }
   }
   ```

## Next Steps

- Try simulating more complex transactions
- Explore contract interactions with multiple calls
- Check out the [API Documentation](../api/overview)
