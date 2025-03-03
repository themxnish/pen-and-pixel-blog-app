const express = require('express')
const app = express()
const port = 3000
const client = require('./database/connection')
const cors = require('cors');
const path = require('path');

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}` +'-'+ file.originalname)
  }
})
const upload = multer({ storage: storage })

app.get('/', (req, res) => {
  res.json({'message':'Hello World of manish!'})
})


app.get('/blog/:category', async (req, res) => {
  const result = await client.query(
    req.params.category !== 'all' ? `SELECT * FROM blogs WHERE category = '${req.params.category}'` : "SELECT * FROM blogs");
  res.json({'data':result.rows});
})

app.post('/blog', async (req, res) => {
  const result = await client.query("INSERT INTO blogs (title, image, post, category) VALUES ($1, $2, $3, $4)", 
    [req.body.title, req.body.image, req.body.post, req.body.category]);
  res.send({'message':'Blog created successfully!',"description":result.rowCount});  
})

app.get('/blogbyid/:id', async (req, res) => {
  const result = await client.query('SELECT * FROM blogs WHERE id = $1', [req.params.id]);
  res.json({'data':result.rows});
})

app.post('/blogimage', upload.single('file'), function (req, res, next) {
  res.json(req.file);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})