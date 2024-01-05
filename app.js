setInterval(() => {
    let time = new Date();
    document.body.innerHTML = `<div><h1>${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}</h1></div>`
},500)