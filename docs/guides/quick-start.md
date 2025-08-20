---
sidebar_position: 1
---

# Quick Start Guide

This guide will help you get started with Illusio, the HyperEVM Transaction Simulator.

## Prerequisites

- Node.js 16.x or higher
- Docker (for running TxStudio backend)
- Git

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/0xNilesh/TxStudio.git
cd TxStudio
```

### 2. Setup Frontend (Illusio)

```bash
cd illusio
pnpm install
pnpm run dev
```

The frontend will be available at `http://localhost:3000`

### 3. Setup Backend (TxStudio)

```bash
cd TxStudio
cp env.example .env
docker-compose up -d
```

The backend API will be available at `http://localhost:8000`

## Your First Simulation

1. **Connect Your Wallet**
   - Open `http://localhost:3000/dashboard`
   - Click the "Connect Wallet" button
   - Choose your wallet provider

2. **Select a Contract**
   - Navigate to the Contracts section
   - Enter a contract address or select from saved contracts
   - The contract's ABI will be automatically fetched

3. **Configure Simulation**
   - Select the function you want to simulate
   - Fill in the required parameters
   - Adjust gas settings if needed

4. **Run Simulation**
   - Click "Simulate Transaction"
   - Review the simulation results
   - Check gas usage and potential state changes

## Next Steps

- Explore the [API Documentation](../api/overview)
- Check out [Example Simulations](../examples/basic-simulation)
- Learn about [Advanced Features](../guides/advanced-features)
