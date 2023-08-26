const express = require('express');
const multer = require('multer'); // for handling file uploads
const sqlite3 = require('sqlite3');

const app = express();
const port = 3001;

const db = new sqlite3.Database('database.db');

// Configure storage for file uploads
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
  const fileName = req.file.filename;
  
  db.run('INSERT INTO files (filename) VALUES (?)', [fileName], (err) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.sendStatus(200);
  });
});

app.get('/fileCount', (req, res) => {
  db.get('SELECT COUNT(*) AS count FROM files', (err, row) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.json({ count: row.count });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
