/* Vercel serverless entry point: exports the Express app.
   Vercel routes all requests here (see backend/vercel.json). */
const app = require("../server");

module.exports = app;
