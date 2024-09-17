// server.js (Node.js with Express)
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Define a route
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
// server.js (Node.js with Express)
const cors = require('cors');
app.use(cors());
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

// WebSocket connection
io.on('connection', (socket) => {
  console.log('User connected');

  // Emit event update (could come from a database or admin panel)
  setInterval(() => {
    socket.emit('eventUpdate', {
      title: 'Event Update',
      message: 'A new event has been added!'
    });
  }, 10000); // Every 10 seconds

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
}); 

app.post('/order/shipped', (req, res) => {
    const { email, trackingNumber } = req.body;
  
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Shipping Confirmation',
      text: `Your order has been shipped! Tracking number: ${trackingNumber}`
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send('Error sending email');
      }
      res.send('Shipping details sent!');
    });
  });
  