  const fs = require('fs')

  readHtml = function(res, filename) {
      fs.readFile(filename, function(err, data) {
          if (err) {
              res.writeHead(404, { 'content-type': 'text/html' })
              res.write("page non trouvé")
              return res.end()
          }
          res.writeHead(200, { 'content-type': 'text/html' })
          res.write(data)
          return res.end()
      });
  }


  module.exports = readHtml;