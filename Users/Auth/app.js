const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const saltRounds = 10;
const bcrypt = require('bcrypt');
const plainText = "Hello World";
const loginPassword = "Hello World";

function hashPassword(password) { 
    return bcrypt.hashSync(password, saltRounds);
} 

function checkPassword(loginPassword, hashedPassword) { 
    return bcrypt.compareSync(loginPassword, hashedPassword);
} 

function main() { 
    const hashedPassword = hashPassword(plainText, 10);
    console.log(checkPassword(loginPassword, hashedPassword))
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