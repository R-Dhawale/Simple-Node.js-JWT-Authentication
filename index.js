const express = require('express');
const jwt = require('jsonwebtoken');


const app = express();
app.use(express.json());

const users = [];

const JWT_SECRET = "USER_APP";

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html")
})

app.post('/signup', logger, (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (users.find(user => user.username === username)) {
        return res.status(400).send({
            message: "Username already exists"
        });
    }

    users.push({
        username,
        password
    })
    res.send({
        message:"You have signed up"
    })
});

app.post('/signin', logger, (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        const token = jwt.sign({
            username: user.username
        }, JWT_SECRET);

        res.send({
            token
        })
        console.log(users);
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
});

function auth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                res.status(401).send({
                    message: "Unauthorized"
                });
            } else {
                req.user = decoded;
                next();
            }
        });
    } else {
        res.status(401).send({
            message: "Unauthorized"
        });
    }
}

function logger(req, res, next) {
    console.log(`${req.method} request came`);
    next();
}

app.get("/me", logger, auth, (req, res) => {
    res.send({
        username: req.user.username
    });
});


app.listen(3000);