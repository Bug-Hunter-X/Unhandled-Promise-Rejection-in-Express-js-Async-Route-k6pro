const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Process the data asynchronously
  setTimeout(() => {
    // Simulate an error
    if (data.value < 10) {
      throw new Error('Value is too low');
    }
    res.send('Data processed successfully');
  }, 1000);
});
app.listen(3000, () => console.log('Server listening on port 3000'));