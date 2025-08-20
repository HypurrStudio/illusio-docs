---
sidebar_position: 2
---

# Transaction Simulation

## POST /api/simulate

Simulates a transaction and returns detailed information about its execution.

### Request Body

```json
{
  "to": "0x...",            // Target contract address
  "from": "0x...",          // Sender address
  "data": "0x...",          // Encoded function call data
  "value": "0",             // Amount of ETH to send (in wei)
  "gas": "3000000",         // Gas limit
  "gasPrice": "1000000000"  // Gas price in wei
}
```

### Response

```json
{
  "success": true,
  "result": {
    "gasUsed": "34562",
    "status": "0x1",
    "traces": [
      {
        "type": "call",
        "from": "0x...",
        "to": "0x...",
        "value": "0",
        "gas": "2300",
        "input": "0x...",
        "output": "0x..."
      }
    ],
    "stateChanges": [
      {
        "address": "0x...",
        "key": "0x...",
        "oldValue": "0x...",
        "newValue": "0x..."
      }
    ],
    "events": [
      {
        "address": "0x...",
        "topics": ["0x..."],
        "data": "0x..."
      }
    ]
  }
}
```

### Example

```typescript
const response = await fetch('http://localhost:8000/api/simulate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    to: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    from: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    data: '0xa9059cbb000000000000000000000000742d35cc6634c0532925a3b844bc454e4438f44e0000000000000000000000000000000000000000000000000000000000000001',
    value: '0',
    gas: '3000000',
    gasPrice: '1000000000'
  }),
});

const result = await response.json();
console.log(result);
```

### Error Codes

- `INVALID_ADDRESS`: Invalid Ethereum address format
- `INSUFFICIENT_GAS`: Gas limit too low
- `CONTRACT_ERROR`: Error in contract execution
- `SIMULATION_FAILED`: General simulation failure
