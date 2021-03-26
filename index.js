const http = require('http')

const readHtml = require('./readHtml')
const url = require('url')

http.createServer(function(req, res) {
    const q = url.parse(req.url, true)
    const filename = "." + q.pathname
    console.log(filename)
    if (filename === "./") {
        readHtml(res, "./index.html")
    } else {
        readHtml(res, filename);

    }

}).listen(8080)