require('dotenv').config();

const http = require('http');
const app = require('./app');
const connectDB = require('./src/config/db');

const PORT = process.env.PORT || 5000;

const start = async () => {
  await connectDB();

  const server = http.createServer(app);

  server.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`HRMS API running on port ${PORT}`);
  });

  process.on('unhandledRejection', (err) => {
    // eslint-disable-next-line no-console
    console.error('Unhandled rejection:', err);
    server.close(() => process.exit(1));
  });
};

start();

