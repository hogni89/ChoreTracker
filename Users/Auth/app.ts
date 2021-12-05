import http = require('http');
import bcrypt = require('bcrypt');

const hostname = '0.0.0.0';
const port = 3000;

const saltRounds = 10;
const plainText = "Hello World";
const loginPassword = "Hello World";

async function hashPassword(password : string) { 
    const result = await bcrypt.hash(password, saltRounds)

    return result
} 

async function checkPassword(loginPassword : string, hashedPassword : string) { 
    return bcrypt.compareSync(loginPassword, hashedPassword)
} 

function main() { 
    hashPassword(plainText)
    .then(password => checkPassword(loginPassword, password)
    .then(result => console.log(result)))
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