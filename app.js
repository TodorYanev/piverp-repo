var querystring = require('querystring')
var stream = require('stream')
var http = require('http')
var path = require('path')
var url = require('url')
var fs = require('fs')

http.createServer(function(request, response) {

    if (url.parse(request.url).path == '/') {

        Index()
    }

    if (url.parse(request.url).path == '/style.css') {

        Style()
    }

    if (url.parse(request.url).path == '/development.css') {

        StyleDebug()
    }

    

    if (url.parse(request.url).path == '/hen.png') {

        Image()
    }


    console.log(request.url)

    

    function Index() {
        
        fs.readFile(__dirname + '/views/index.html', (err, data) => {

            if (err) {
                console.log('error')
            } else {
                response.writeHead(200, null, {'Content-type' : 'text/html'})
                response.write(data)
                response.end(() => {

                })
            }
        })
    }

    function Style() {

        fs.readFile(__dirname + '/style/index.css', (err, data) => {

            if (err) {
                console.log('error')
            } else {
                response.writeHead(200, null, {'Content-type' : 'text/css'})
                response.write(data)
                response.end(() => {

                })
            }
        })
    }

    function StyleDebug() {

        fs.readFile(__dirname + '/style/development.css', (err, data) => {

            if (err) {
                console.log('error')
            } else {
                response.writeHead(200, null, {'Content-type' : 'text/css'})
                response.write(data)
                response.end(() => {

                })
            }
        })
    }

    function Image() {

        fs.readFile(__dirname + '/hen.png', (err, data) => {

            if (err) {
                console.log('error')
            } else {
                response.writeHead(200, null, {'Content-type' : 'image/png'})
                response.write(data)
                response.end(() => {

                })
            }
        })
    }

})
.listen(process.env.PORT | 5000)
