const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;


app.get('*', (req, res) => {
  const requestedPath = path.join(__dirname, req.path);

  if (fs.existsSync(requestedPath)) {
    const stats = fs.statSync(requestedPath);

    if (stats.isDirectory()) {
      fs.readdir(requestedPath, (err, files) => {
        if (err) {
          res.status(500).send('Server Error');
          return;
        }

        let fileListing = `<h1>Directory listing for ${req.path}</h1><ul>`;
        files.forEach(file => {
          const filePath = path.join(req.path, file);
          const fileStat = fs.statSync(path.join(requestedPath, file));
          const icon = fileStat.isDirectory() ? '📁' : '📄';
          fileListing += `<li>${icon} <a href="${filePath}">${file}</a></li>`;
        });
        fileListing += '</ul>';
        res.send(fileListing);
      });
    } else {
      res.sendFile(requestedPath);
    }
  } else {
    res.status(404).send('404 Not Found');
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
});
