# AR CLUB

A student-driven initiative connecting campus talent directly with industry leaders in AR, AI, and emerging tech. From grassroots hackathons to global communities and founder networks.

This repository contains the full source code for the AR Club website, featuring a modern React frontend and a robust Node.js Express backend.

## Architecture

The project has been restructured into two clearly separated directories for a clean, maintainable codebase:

- **`frontend/`**: A modern Single Page Application (SPA) built with React, Vite, and Tailwind CSS.
- **`backend/`**: A Node.js Express server that serves the compiled frontend and provides a JSON API for dynamic content and form submissions.

## Prerequisites

- Node.js (v18 or higher)
- npm

## Getting Started

### 1. Install Dependencies

First, install the backend dependencies in the root directory:
```bash
npm install
```

Then, install the frontend dependencies:
```bash
npm run frontend:install
```

### 2. Development

To build the frontend and run the backend server in one step:
```bash
npm run dev
```
The website will be available at `http://localhost:3000`.

*Note: For frontend development with Hot Module Replacement (HMR), you can run the frontend dev server independently:*
```bash
# Terminal 1: Start the backend server
npm start

# Terminal 2: Start the Vite dev server
npm run frontend:dev
```
The Vite frontend will be available at `http://localhost:5173`.

### 3. Production Build

To build the frontend for production and start the server:
```bash
npm run build
npm start
```
The frontend build is automatically compiled into `backend/public/dist`, which the Express server is configured to serve statically.

## Backend Features

The backend uses industry-standard middlewares for security and reliability:
- **`helmet`**: Sets secure HTTP response headers.
- **`express-rate-limit`**: Protects endpoints (like contact forms) from spam and brute-force attacks.
- **`morgan`**: Logs HTTP requests for easy debugging.

Content and submissions are managed via local JSON files located in `backend/data/`.

## Contact & Location

**Email:** arclub@jmit.ac.in  
**Location:** IT-117 JMIT Radaur

## License

MIT License
