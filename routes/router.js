const express = require('express');

const db = require('../data/db.js');

const router = express.Router();

router.get('/', (req, res) => {
   db 
   .find()
   .then(posts => {
       res.json({
           messageOfTheDay: process.env.MOTD,
           posts
        })
   })
   .catch(err => {
       res.status(500).json({ error: "The posts information could not be retrieved." })
   });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db
    .findById(id)
    .then(post => {
        if(post.length === 0){
            res.status(404).json({ message: "The post with the specified ID does not exist." })
        }
        res.status(200).json({post})
    })
    .catch(error => {
        res.status(500).json({ error: "The post information could not be retrieved." })
    });
});

router.post('/', (req, res) => {
     const newPost = req.body;
     console.log('request body:', newPost);
     db
     .insert(newPost)
     .then(posts => {
         res.status(201).json(posts)
     })
     .catch(err => {
         res.status(500).json({ error: "There was an error while saving the post to the database"  })
     });
});
 
router.delete('/:id', (req, res) => {
     const {id} = req.params;

     db
     .remove(id)
     .then(deleted => {
         if(deleted === 0) {
             res.status(404).json({ message: "The post with the specified ID does not exist." })
         return 
        } 
         res.status(200).json({ message: "Success" });
     })
     .catch(err => {
         res.status(500).json({ error: "The post could not be removed" })
     });
});

router.put('/:id', (req, res) => {
     const {id} = req.params;
     const post = req.body;

     if(!post.title || !post.contents)
        return res.status(400).json({ errorMessage: "Please provide title and contents for the post."  })
        .end();

    db
    .update(id, post)
    .then(post => {
        if(!post) {
            res.status(404).json({ message: "The post with the specified ID does not exist." });
        return
    }
        res.status(200).json(post);
    })
    .catch(err => {
        res.status(500).json({ error: "The post information could not be modified." })
    });
});


 module.exports = router;