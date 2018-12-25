setInterval((arg) => {

    

  // document.querySelector('header').appendChild(myEl)

}, 1000, 'Hello World');

fetch('/component/homebutton')
    .then((response)=> {

        document.querySelectorAll('p').forEach((htmlElement) => {

            response.text().then((textResponse) => {

                document.querySelector('header').appendChild(htmlToElement(textResponse))

            })            

        })
        
    }, (reason) => {

        console.log(reason)
    }).catch((reason) => {

        console.log(reason)
    })

function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}
