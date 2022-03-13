const router = require('express').Router();
const path = require('path');

const fs = require('fs');

router.get('/dir', async (req, res) => {
  let dirList = await new Promise((resolve, reject) => {
    fs.readdir(path.resolve(__dirname, '../resources'), (err, contents) => {
      if (err) {
        reject(err);
      } else {
        res.send(contents);
      };
    });
  });
});

router.get('/file', (req, res) => {
    
});

module.exports = router;