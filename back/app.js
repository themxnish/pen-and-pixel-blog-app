const express = require('express')
const app = express()
const port = 3000
const client = require('./database/connection')

app.use(express.json());

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

app.post('/', (req, res) => {
    res.send('Hello World!')  
})

app.get('/blog', async (req, res) => {
  const result = await client.query("SELECT * FROM blogs");
  res.json({'data':result.rows});
})

app.post('/blog', async (req, res) => {
  const result = await client.query("INSERT INTO blogs (title, image, post) VALUES ($1, $2, $3)", 
    [req.body.title, req.body.image, req.body.post]);
  res.send({'message':'Blog created successfully!',"description":result.rowCount});  
})

app.post('/blogimage', upload.single('file'), function (req, res, next) {
  res.json(req.file);
})

app.post('/', (req, res) => {
  res.send('Hello World!')  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})