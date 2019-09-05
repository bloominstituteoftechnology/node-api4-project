const express = require('express');
const userDb = require('./userDb.js');
const postDb = require('./posts/postDb.js');

const router = express.Router();
router.use(express.json());

//adding a user
router.post('/', (req, res) => {
const user = req.body;

userDb.insert(user)
    .then(addedUser => {
        res.status(201).json(addedUser)
    })
    .catch(error => {
        res.status(500).json({
            error: 'There was an error adding the user.'
        })
    })
});

//adding a post to a user
router.post('/:id/posts', (req, res) => {
const post = req.body;

postDb.insert(post)
    .then(userPost => {
        res.status(201).json(post);
    })
    .catch(error => {
        res.status(500).json({
            error: 'There was an error adding a post.'
        })
    })
});

//get users
router.get('/', (req, res) => {
userDb.get()
    .then(allUsers => {
        res.status.apply(200).json(allUsers)
    })
    .catch(error => {
        res.status(500).json({
            error: 'There was an error retrieving the users.'
        })
    })
});

//get user by ID
router.get('/:id', validateUserId, (req, res) => {
const id = req.params.id;
userDb.getById(id)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(error => {
        res.status(500).json({
            error: 'There was an error retrieving the user information.'
        })
    })
});

//get user's posts
router.get('/:id/posts', (req, res) => {
const id = req.params.id;
userDb.getUserPosts(id)
    .then(posts => {
        res.status(200).json(posts)
    })
    .catch(error => {
        res.status(500).json({
            error: 'There was an error retrieving user posts.'
        })
    })
});

//delete user
router.delete('/:id', (req, res) => {
const id = req.params.id;
userDb.remove(id)
    .then()
});

//edit user
router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {
const userId = req.params.id;

userDb.getById(userId)
    .then(response => {
        if (response === undefined) {
            res.status(400).json({
                error: 'invalid user id.'
            })
        }
        else {
            req.user = response
            next();
        }
    })
};

function validateUser(req, res, next) {
if (!req.body) {
    res.status(400).json({ 
        error: 'missing user data.'
    })
} 
else {
    if (req.body.name) {
        next();
    }
    else {
        res.status(400).json({
            error: 'missing required name field.'
        })
    }
}  
};

function validatePost(req, res, next) {

};

module.exports = router;
