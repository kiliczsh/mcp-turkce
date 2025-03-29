// Example MCP client for Turkish Dictionary API
// Note: This is a conceptual example showing how to use the MCP server
// with a hypothetical TypeScript client implementation.

import { MCPClient } from '@modelcontextprotocol/client';

async function main() {
  // Create a client and connect to the server
  // The server ID will be shown when you start the server
  const client = new MCPClient({
    serverId: 'YOUR_SERVER_ID_HERE' // Replace with your actual server ID
  });

  try {
    // Connect to the server
    await client.connect();
    console.log('Connected to Turkish Dictionary MCP Server');

    // Search the main Turkish dictionary
    const gtsResult = await client.invoke('searchWord', {
      word: 'adalet'
    });
    console.log('GTS Search Result:', gtsResult);

    // Search for proverbs and idioms
    const proverbsResult = await client.invoke('searchProverbsAndIdioms', {
      word: 'göz'
    });
    console.log('Proverbs and Idioms Search Result:', proverbsResult);

    // Search for a female name
    const nameResult = await client.invoke('searchFemaleNames', {
      name: 'ayşe'
    });
    console.log('Female Name Search Result:', nameResult);

    // Search for a term in multiple science dictionaries
    const scienceResult = await client.invoke('searchAllTerminology', {
      word: 'hücre'
    });
    console.log('Science Terminology Search Result:', scienceResult);
  } catch (error) {
    console.error('Error using the MCP client:', error);
  } finally {
    // Disconnect from the server
    await client.disconnect();
    console.log('Disconnected from Turkish Dictionary MCP Server');
  }
}

main(); 