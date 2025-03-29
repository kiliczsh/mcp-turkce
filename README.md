# MCP Turkish Dictionary API (mcp-turkce)

Model Context Protocol Server for Turkish Language Foundation (TDK) API. This server provides access to Turkish dictionaries, including the main Turkish dictionary, etymology, dialects, and specialized terminology via Model Context Protocol (MCP).

This project is a wrapper for the official Turkish Language Foundation (TDK) dictionary API available at [https://sozluk.gov.tr/](https://sozluk.gov.tr/).

## Features

- **Main Dictionaries**
  - General Turkish Dictionary (GTS)
  - Western-origin words
  - Scanning dictionary
  - Compilation dictionary

- **Specialized Dictionaries**
  - Proverbs and idioms
  - Foreign words guide
  - Etymology dictionary
  - Origin information

- **Person Names Dictionaries**
  - Male names
  - Female names
  - Unisex names
  - Search by name meaning

- **Dialect Dictionaries**
  - Turkish dialects (Azerbaijani, Kazakh, etc.)

- **Science and Art Terminology**
  - Multiple specialized dictionaries (Medicine, Biology, etc.)
  - Nursing terminology
  - Pharmacy terminology
  - Metrology terminology
  - Veterinary terminology

## Installation

```bash
npm install mcp-turkce
```

Or to install globally:

```bash
npm install -g mcp-turkce
```

## Usage

### Running the MCP Server

```bash
npx mcp-turkce
```

Or if installed globally:

```bash
mcp-turkce
```

This will start the MCP server, which you can then use with your MCP client.

### Usage with Claude Desktop

1. Start the server using the command above
2. Add the server ID to Claude Desktop
3. Use the tools provided by the server to interact with Turkish dictionaries

#### Claude Integration Configuration

Add the following to your Claude configuration:

```json
{
    "sozluk": {
        "command": "npx",
        "args": ["-y", "mcp-turkce"]
    }
}
```

### API Example

If you want to use the API directly, you can import it in your own project:

```typescript
import { TurkishDictionaryAPI } from 'mcp-turkce/api';

async function main() {
  const api = new TurkishDictionaryAPI();
  
  // Search the main Turkish dictionary
  const result = await api.searchWord('adalet');
  console.log(result);
  
  // Search for proverbs and idioms
  const proverbs = await api.searchProverbsAndIdioms('göz');
  console.log(proverbs);
}

main();
```

Check the `test.ts` file for more comprehensive examples.

## Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run the test
npm run test

# Run the inspector for debugging
npm run inspector
```

## License

[MIT](LICENSE)

## Author

[kiliczsh](https://github.com/kiliczsh)
