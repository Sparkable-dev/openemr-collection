---
title: MCP Integration
description: Connect AI agents to OpenEMR via the Model Context Protocol
---

## What is MCP?

The **Model Context Protocol (MCP)** is an open protocol developed by Anthropic that enables AI agents like Claude to interact with external systems in a controlled, secure way.

## mcp-healthcare

**mcp-healthcare** is a separate project that provides MCP server integration for OpenEMR. It allows AI agents to:

- Query patient records
- Search encounters and clinical data
- Read medications, allergies, and immunizations
- Access FHIR resources through natural language

## How It Works

```
AI Agent (Claude) → MCP Client → mcp-healthcare Server → OpenEMR API
```

The MCP server acts as a bridge, translating AI agent requests into OpenEMR API calls and returning structured results.

## Getting Started

```bash
# Clone the mcp-healthcare repository
git clone https://github.com/your-org/mcp-healthcare.git

# Install dependencies
cd mcp-healthcare
npm install

# Configure OpenEMR connection
cp .env.example .env
# Edit .env with your OpenEMR credentials

# Start the MCP server
npm start
```

## Configuration

Configure your MCP client to connect to the healthcare server:

```json
{
  "mcpServers": {
    "healthcare": {
      "command": "node",
      "args": ["path/to/mcp-healthcare/server.js"],
      "env": {
        "BASE_URL": "http://localhost:8300",
        "TOKEN": "your_access_token"
      }
    }
  }
}
```

## Resources

- [MCP Specification](https://modelcontextprotocol.io/)
- [mcp-healthcare Repository](https://github.com/your-org/mcp-healthcare)
- [OpenEMR API Docs](/)
