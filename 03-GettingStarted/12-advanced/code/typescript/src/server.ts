import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";

import { tools } from './tools/index.js';

// Create an MCP server
export const server = new Server({
  name: "Demo",
  version: "1.0.0"
}, {
    capabilities: {
        "tools": {}
    }
});

server.setRequestHandler(ListToolsRequestSchema, async (request) => {
  // Return the list of registered tools
  return {
    tools: tools
  };
    // return {
    //     tools: [{
    //         name: "add",
    //         description: "Add two numbers",
    //         inputSchema: {
    //             "type": "object", 
    //             "properties": {
    //                 "a": {"type": "number"},
    //                 "b": {"type": "number" }
    //             }
    //         }
    //     }]
    // }

});

const transport = new StdioServerTransport();

export async function start() {
    console.log("Starting server...");
    await server.connect(transport);
}