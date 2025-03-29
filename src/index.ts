#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { TurkishDictionaryAPI } from './api.js';
import { PersonNameType, PersonNameSearchType, ScienceArtDict, TurkishDialect } from './types.js';

// Create API instance
const turkishDictAPI = new TurkishDictionaryAPI();

// Create MCP Server
const server = new McpServer({
  name: 'TDK Turkish Dictionary',
  version: '1.0.2',
  description: 'Access Turkish Language Foundation dictionaries, including the main Turkish dictionary, etymology, dialects, and specialized terminology.'
});

// Main Dictionary Tools
server.tool("searchWord",
  { word: z.string().describe('The Turkish word to search for') },
  async ({ word }) => {
    const result = await turkishDictAPI.searchWord(word);
    return { content: [{ type: "text", text: JSON.stringify(result) }] };
  }
);

server.tool("searchWesternOrigin",
  { word: z.string().describe('The Turkish word to search for') },
  async ({ word }) => {
    const result = await turkishDictAPI.searchWesternOrigin(word);
    return { content: [{ type: "text", text: JSON.stringify(result) }] };
  }
);

server.tool("searchScanning",
  { word: z.string().describe('The Turkish word to search for') },
  async ({ word }) => {
    const result = await turkishDictAPI.searchScanning(word);
    return { content: [{ type: "text", text: JSON.stringify(result) }] };
  }
);

server.tool("searchCompilation",
  { word: z.string().describe('The Turkish word to search for') },
  async ({ word }) => {
    const result = await turkishDictAPI.searchCompilation(word);
    return { content: [{ type: "text", text: JSON.stringify(result) }] };
  }
);

// Specialized Dictionary Tools
server.tool("searchProverbsAndIdioms",
  { word: z.string().describe('The Turkish word to search for') },
  async ({ word }) => {
    const result = await turkishDictAPI.searchProverbsAndIdioms(word);
    return { content: [{ type: "text", text: JSON.stringify(result) }] };
  }
);

server.tool("searchForeignWordsGuide",
  { word: z.string().describe('The Turkish word to search for') },
  async ({ word }) => {
    const result = await turkishDictAPI.searchForeignWordsGuide(word);
    return { content: [{ type: "text", text: JSON.stringify(result) }] };
  }
);

server.tool("searchEtymology",
  { word: z.string().describe('The Turkish word to search for') },
  async ({ word }) => {
    const result = await turkishDictAPI.searchErenEtymology(word);
    return { content: [{ type: "text", text: JSON.stringify(result) }] };
  }
);

server.tool("searchOriginInfo",
  { word: z.string().describe('The Turkish word to search for') },
  async ({ word }) => {
    const result = await turkishDictAPI.searchOriginInfo(word);
    return { content: [{ type: "text", text: JSON.stringify(result) }] };
  }
);

// Person Names Tools
server.tool("searchMaleNames",
  { name: z.string().describe('The male name to search for') },
  async ({ name }) => {
    const result = await turkishDictAPI.searchMaleNames(name);
    return { content: [{ type: "text", text: JSON.stringify(result) }] };
  }
);

server.tool("searchFemaleNames",
  { name: z.string().describe('The female name to search for') },
  async ({ name }) => {
    const result = await turkishDictAPI.searchFemaleNames(name);
    return { content: [{ type: "text", text: JSON.stringify(result) }] };
  }
);

server.tool("searchUnisexNames",
  { name: z.string().describe('The unisex name to search for') },
  async ({ name }) => {
    const result = await turkishDictAPI.searchUnisexNames(name);
    return { content: [{ type: "text", text: JSON.stringify(result) }] };
  }
);

server.tool("searchByNameMeaning",
  { 
    meaning: z.string().describe('The meaning to search for'),
    type: z.nativeEnum(PersonNameType).describe('The type of name (male, female, or unisex)')
  },
  async ({ meaning, type }) => {
    const result = await turkishDictAPI.searchByNameMeaning(meaning, type);
    return { content: [{ type: "text", text: JSON.stringify(result) }] };
  }
);

// Dialect Tools
server.tool("searchDialects",
  { 
    word: z.string().describe('The word to search in dialect dictionaries'),
    dialect: z.nativeEnum(TurkishDialect).optional().describe('The dialect to search in (defaults to Azerbaijani)')
  },
  async ({ word, dialect }) => {
    const result = await turkishDictAPI.searchDialects(word, dialect);
    return { content: [{ type: "text", text: JSON.stringify(result) }] };
  }
);

// Science and Art Terminology Tools
server.tool("searchScienceArt",
  { 
    word: z.string().describe('The term to search for'),
    dictionary: z.nativeEnum(ScienceArtDict).optional().describe('The specific science or art dictionary to search in')
  },
  async ({ word, dictionary }) => {
    const result = await turkishDictAPI.searchScienceArt(word, dictionary);
    return { content: [{ type: "text", text: JSON.stringify(result) }] };
  }
);

server.tool("searchAllTerminology",
  { word: z.string().describe('The Turkish word to search for') },
  async ({ word }) => {
    const result = await turkishDictAPI.searchAllTerminology(word);
    return { content: [{ type: "text", text: JSON.stringify(result) }] };
  }
);

// Simplified methods for common science dictionaries
server.tool("searchNursing",
  { word: z.string().describe('The Turkish word to search for') },
  async ({ word }) => {
    const result = await turkishDictAPI.searchNursing(word);
    return { content: [{ type: "text", text: JSON.stringify(result) }] };
  }
);

server.tool("searchPharmacy",
  { word: z.string().describe('The Turkish word to search for') },
  async ({ word }) => {
    const result = await turkishDictAPI.searchPharmacy(word);
    return { content: [{ type: "text", text: JSON.stringify(result) }] };
  }
);

server.tool("searchMetrology",
  { word: z.string().describe('The Turkish word to search for') },
  async ({ word }) => {
    const result = await turkishDictAPI.searchMetrology(word);
    return { content: [{ type: "text", text: JSON.stringify(result) }] };
  }
);

server.tool("searchVeterinary",
  { word: z.string().describe('The Turkish word to search for') },
  async ({ word }) => {
    const result = await turkishDictAPI.searchVeterinary(word);
    return { content: [{ type: "text", text: JSON.stringify(result) }] };
  }
);

// Start the server with stdio transport
async function startServer() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.log('Turkish Dictionary MCP Server is running');
}

startServer().catch(error => {
  console.error('Error starting server:', error);
  process.exit(1);
});
