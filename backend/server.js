const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Replace with your actual translation logic (e.g., using a translation API)
function translateContent(content) {
  // Simulate translation for demo purposes
  return content.toUpperCase();
}

app.use(bodyParser.json());

app.post('/translate', (req, res) => {
  const { tags, content } = req.body;
  const translatedContent = content.map(translateContent).join("");
  const translatedData = { translatedContent: tags.concat(translatedContent) };
  res.json(translatedData);
});

app.listen(3000, () => console.log('Server listening on port 3000'));
