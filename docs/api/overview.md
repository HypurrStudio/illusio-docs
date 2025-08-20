---
sidebar_position: 1
---

# API Overview

## Introduction

The TxStudio API provides powerful endpoints for simulating and analyzing transactions on HyperEVM. This documentation will help you integrate transaction simulation capabilities into your applications.

## Base URL

```
http://localhost:8000
```

For production deployments, replace with your production URL.

## Authentication

The API currently doesn't require authentication for local development. For production deployments, appropriate authentication mechanisms should be implemented based on your security requirements.

## Request Format

All API requests should use JSON for request bodies and will receive JSON responses. Make sure to include the appropriate headers:

```http
Content-Type: application/json
```

## Response Format

Successful responses follow this general format:

```json
{
  "success": true,
  "result": {
    // Response data specific to the endpoint
  }
}
```

Error responses follow this format:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error description"
  }
}
```

## Rate Limiting

- Default: 100 requests per minute
- Simulation endpoints: 20 requests per minute

Headers included in responses:
- `X-RateLimit-Limit`
- `X-RateLimit-Remaining`
- `X-RateLimit-Reset`

## Available Endpoints

- [Transaction Simulation](./simulation)
- [Transaction Trace](./trace)

## SDK

A TypeScript SDK is available for easy integration. Check out the SDK Documentation for more details.
