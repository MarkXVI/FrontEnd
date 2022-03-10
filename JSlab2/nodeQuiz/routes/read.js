const router = require('express').Router();
const path = require('path');

const fs = require('fs');

router.get('/dir', (req, res) => {
    let dirList = await new Promise((resolve, reject) => {
        fs.readdir(dpath, (err, contents) => {
          if (err) {
            reject(err);
          } else {
            resolve(contents);
          }
        });
      });
    
    res.send(files);
});

router.get('/file', (req, res) => {
    
});

module.exports = router;