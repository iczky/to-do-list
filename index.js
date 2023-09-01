import express from 'express';
import bodyParser from 'body-parser';
import date from 'date-and-time'

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

var today = new Date();
var fullDate = date.format(today, 'ddd, YYYY/MM/DD')
// var year = today.getFullYear();
// var month = String(today.getMonth() + 1).padStart(2, '0');
// var day = String(today.getDay()).padStart(2, '0');
// var fullDate = `${year} - ${month} - ${day}`;
console.log(fullDate);
// console.log(today);
// console.log(day);
// console.log(today.getDay());

app.get('/', (req, res) => {
  res.render('index.ejs', { fullDate });
});

var list_todo = [];
app.post('/submit', (req, res) => {
  let to_do = req.body['to_do'];
  console.log(to_do);
  list_todo.push(to_do);
  res.render('index.ejs', { to_do, list_todo, fullDate });
  console.log(list_todo.reverse());
});
console.log(list_todo);

app.listen(port, () => {
  console.log(`Server run in port ${port}`);
});
