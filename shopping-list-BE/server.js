const express = require('express');
const app = express();
const port = 4000;
const listdetailRoute = require('./listdetailRoute');

app.use(express.static('public'));

// Definujte cestu, která zobrazí React komponentu
app.get('/', (req, res) => {
  res.sendFile(__dirname + '../shopping-list-FE/public/index.html'); // Upravte cestu k HTML souboru
});



// Připojení route k aplikaci
app.use('/', listdetailRoute);  


app.listen(port, () => {
  console.log(`Aplikace běží na portu ${port}`);
});
