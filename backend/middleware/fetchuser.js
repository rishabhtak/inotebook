const jwt = require('jsonwebtoken');

const JWT_SECRET = "Rishabh";

const fetchuser = (req, res, next) => {
    //get the user from jwt token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).json({ error: 'Please authenticate with a vaild token' })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Please authenticate with a vaild token' })
    }
}

module.exports = fetchuser;