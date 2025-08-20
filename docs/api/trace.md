---
sidebar_position: 3
---

# Transaction Trace API

## GET /api/trace/:txHash

Get detailed execution traces for a transaction, including all internal calls, events, and state changes.

### Parameters

#### Path Parameters
- `txHash` - The hash of the transaction to trace

### Response

```json
{
  "success": true,
  "trace": {
    "hash": "0x...",
    "from": "0x...",
    "to": "0x...",
    "gasUsed": "34562",
    "status": true,
    "calls": [
      {
        "type": "CALL",
        "from": "0x...",
        "to": "0x...",
        "value": "0",
        "gas": "2300",
        "gasUsed": "2300",
        "input": "0x...",
        "output": "0x...",
        "calls": [] // Nested calls
      }
    ],
    "events": [
      {
        "address": "0x...",
        "topics": [
          "0x...", // Event signature
          "0x..." // Indexed parameter
        ],
        "data": "0x..." // Non-indexed parameters
      }
    ],
    "stateChanges": [
      {
        "address": "0x...",
        "slot": "0x...",
        "previousValue": "0x...",
        "newValue": "0x..."
      }
    ]
  }
}
```

### Response Fields

#### Trace Object
- `hash` - Transaction hash
- `from` - Transaction sender
- `to` - Target contract address
- `gasUsed` - Total gas consumed
- `status` - Transaction success status (true/false)

#### Call Object
- `type` - Type of call (CALL, STATICCALL, DELEGATECALL, CREATE, CREATE2)
- `from` - Caller address
- `to` - Target address
- `value` - ETH value transferred
- `gas` - Gas limit for this call
- `gasUsed` - Gas consumed by this call
- `input` - Input data
- `output` - Return data
- `calls` - Array of nested calls

#### Event Object
- `address` - Contract that emitted the event
- `topics` - Array of indexed parameters
- `data` - ABI-encoded non-indexed parameters

#### StateChange Object
- `address` - Contract address
- `slot` - Storage slot
- `previousValue` - Value before the transaction
- `newValue` - Value after the transaction

### Example Usage

```typescript
// Get trace for a transaction
const txHash = '0x123...';
const response = await fetch(`http://localhost:8000/api/trace/${txHash}`);
const data = await response.json();

if (data.success) {
  // Process trace data
  const { calls, events, stateChanges } = data.trace;
  
  // Analyze internal transactions
  calls.forEach(call => {
    console.log(`Call from ${call.from} to ${call.to}`);
    console.log(`Gas used: ${call.gasUsed}`);
  });
  
  // Process emitted events
  events.forEach(event => {
    console.log(`Event from ${event.address}`);
    console.log(`Topics: ${event.topics}`);
  });
  
  // Check state changes
  stateChanges.forEach(change => {
    console.log(`Contract ${change.address} storage slot ${change.slot} changed`);
    console.log(`From ${change.previousValue} to ${change.newValue}`);
  });
}
```

### Error Responses

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error description"
  }
}
```

Common error codes:
- `TX_NOT_FOUND`: Transaction hash not found
- `INVALID_TX_HASH`: Invalid transaction hash format
- `TRACE_FAILED`: Failed to generate trace
