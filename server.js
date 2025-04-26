const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('form');
});

app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`
    <h2 style="color:green;">Submission Successful</h2>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <a href="/">Back</a>
  `);
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
