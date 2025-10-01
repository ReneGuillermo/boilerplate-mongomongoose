# MongoDB & Mongoose - FreeCodeCamp Challenges

## Overview
This is a FreeCodeCamp MongoDB and Mongoose challenge boilerplate project. It's a Node.js/Express application that demonstrates various MongoDB operations using Mongoose ODM.

## Project Structure
- `server.js` - Main Express server with API endpoints
- `myApp.js` - MongoDB/Mongoose challenge implementations
- `views/index.html` - Simple frontend page
- `package.json` - Node.js dependencies

## Configuration
- **Port**: 5000 (configured for Replit)
- **Host**: 0.0.0.0 (allows Replit proxy)
- **Database**: MongoDB (requires MONGO_URI secret)

## Setup Instructions
1. Add a secret named `MONGO_URI` with your MongoDB connection string
2. The application will automatically start on port 5000
3. Access the web interface through the Replit webview

## Important Notes
- This project requires a MongoDB database connection
- Set the `MONGO_URI` secret in the Secrets tab
- The API endpoints are available at `/_api/*` routes
- The main challenge implementations are in `myApp.js`

## Deployment
- Configured for autoscale deployment
- Runs with `npm start` command
- Suitable for stateless web applications

## Date
- Imported: October 01, 2025
