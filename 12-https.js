const http= require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our homepage')
    }
    if(req.url === '/about'){
        res.end('About Us')
    }
    res.end(`
    <h1>Oop!</h1>
    <p>Error 404</p>
    <a href="/">Back</a>
    `)
})

server.listen(5000)