function bug(o) {
    console.log(util.format('Bug: %s', o))
}

function warning(o)
{
    console.log(util.format('Warning: %s', o))
}

var AccountAccess = false

var Paths = {
    data: __dirname + '/nano.json',
    icon: __dirname + '/favicon.ico',
    login: __dirname + '/views/login.html',
    view404: __dirname + '/views/404.html',
    asd: __dirname + '/views/asd.html',
    index: __dirname + '/views/index.html',
    js: __dirname + '/views/like_button.js',

    sitestyle: __dirname + '/style/sitestyle.css',
    sitereact: __dirname + '/react/sitereact.js',

    Fonts: {

        BirdCherryLite: __dirname + '/fonts/Bird-cherry-lite.ttf'

    },

    Components: {
        
        HomeButton: __dirname + '/components/HomeButton.html'

    }
}

var body = ''

const querystring = require('querystring')
const util = require('util');
const crypto = require('crypto')
const stream = require('stream')
const http = require('http')
const path = require('path')
const url = require('url')
const fs = require('fs')

function encrypt(text){
    var cipher = crypto.createCipher('aes-256-cbc','d6F3Efeq')
    var crypted = cipher.update(text,'utf8','hex')
    crypted += cipher.final('hex');
    return crypted;
}

function decrypt(text){
var decipher = crypto.createDecipher('aes-256-cbc','d6F3Efeq')
var dec = decipher.update(text,'hex','utf8')
dec += decipher.final('utf8');
return dec;
}

http.createServer(function(request, response) {

    const siteUrl = url.parse(request.url)

    request.on('close', () => {

        bug('Request is being closed!')
    })

    request.on('error', (err) => {

        bug('Request is being not-well!')
    })

    request.on('data', (chunk) => {
        body += chunk

        bug('Request is being chunked!')
    });

    request.on('end', () => {

        

        bug('Request is being ended! At: ' + siteUrl.path + '   With: ' + request.method + '    And: ' + '[[' + body + ']]')
        
    })

    response.on('close', () => {

        bug('Response is being closed!')
    })

    response.on('drain', () => {

        bug('Response is being drained!')
    })

    response.on('error', () => {

        bug('Response is being not-well!')
    })

    response.on('finish', () => {
        
        response.end()

        bug('Response is being finished!')
    })

    response.on('pipe', (src) => {

        bug('Response is being piped!')
    })

    response.on('unpipe', (src) => {

        body = ''

        bug('Response is being unpiped!')
    })

    if (siteUrl.path == '/favicon.ico') {

        fs.createReadStream(Paths.icon, null).pipe(response)

    } else if (siteUrl.path == '/sitereact') {

        fs.createReadStream(Paths.sitereact, null).pipe(response)

    } else if (siteUrl.path == '/sitestyle') {
        
        fs.createReadStream(Paths.sitestyle, null).pipe(response)

    } else if (siteUrl.path == '/login') {

        fs.createReadStream(Paths.login, null).pipe(response)
        
    } else if (siteUrl.path == '/index') {

        fs.createReadStream(Paths.index, null).pipe(response)

    } else if (siteUrl.path == '/component/homebutton') {

        fs.createReadStream(Paths.Components.HomeButton, null).pipe(response)

    } else if (siteUrl.path == '/BirdCherryLite') {
        
        fs.createReadStream(Paths.Fonts.BirdCherryLite, null).pipe(response)

    } else {

        
        //fs.createReadStream(Paths.view404, null).pipe(response)
    }

})
.listen(process.env.PORT | 5000)