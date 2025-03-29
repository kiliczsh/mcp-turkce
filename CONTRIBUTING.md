# Contributing to MCP Turkish Dictionary API

We love your input! We want to make contributing to MCP Turkish Dictionary API as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

### Pull Requests

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

### Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/mcp-turkce.git

# Install dependencies
npm install

# Build the project
npm run build

# Run the test
npm run test

# Run the MCP inspector for debugging
npm run inspector
```

## Issues

### Bug Reports

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

### Feature Requests

We love feature requests! When submitting a feature request, please:

- Explain the problem that your feature solves
- Provide a clear description of the solution you'd like
- Be reasonable about the scope of the proposed feature

## Code Style

We use a mix of TypeScript and JavaScript in this project. Please follow the existing code style when contributing:

- Use 2 spaces for indentation
- Use semi-colons
- Use ES modules (`import`/`export`) rather than CommonJS (`require`/`module.exports`)
- Include appropriate JSDoc comments for public APIs
- Follow TypeScript best practices

## License

By contributing, you agree that your contributions will be licensed under the project's [MIT License](LICENSE). 