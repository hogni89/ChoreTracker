const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const saltRounds = 10;
const bcrypt = require('bcrypt');
const plainText = "Hello World";
const loginPassword = "Hello World";

async function hashPassword(password) { 
    const result = await bcrypt.hash(password, saltRounds)

    return result
} 

async function checkPassword(loginPassword, hashedPassword) { 
    const result = await bcrypt.compareSync(loginPassword, hashedPassword)

    return result
} 

function main() { 
    hashPassword(plainText, 10)
    .then(password => checkPassword(loginPassword, password)
    .then(result => console.log(result)))
    
    //console.log(checkPassword(loginPassword, hashedPassword))
}

if (require.main === module) {
    main();
}

/*

bcrypt.compare(loginPassword, hashedPassword)
    .then(result => {
        console.log(result);
    });

  */  

/*

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Mr. Beinisson!');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

*/