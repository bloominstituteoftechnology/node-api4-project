const express = require('express');

const Hubs = require('./hubs-model.js');
const Messages = require('../messages/messages-model.js');

const router = express.Router();

// middleware
const checkHubId = async (req, res, next) => {
  const {id} = req.params;

  try {
    const hub = await Hubs.findById(id);

    if (!hub) {
      res.status(404).json({message: `no hub ${id}, error`})
    } else {
      req.hub = hub; // take the request object and make a new property inside it 
      next();
    }

  } catch(e) {
    res.status(500).json({message: e.message})
  }
}

const checkMessage = (req, res, next) => { // middleware to check the payload
  if (!req.body.sender || !req.body.text) {
    res.status(400).json("message and sender required")
  } else {
    next();
  }
}

router.get('/', (req, res, next) => {
  Hubs.find(req.query)
    .then(hubs => {
      res.status(200).json(hubs);
    })
    .catch(error => {
      // log error to server
      next(error)
    });
});

router.get('/:id', checkHubId, (req, res, next) => {
  res.status(200).json(req.hub); // this is from the new property we just made in the middleware
});

router.post('/', (req, res) => {
  Hubs.add(req.body)
    .then(hub => {
      res.status(201).json(hub);
    })
    .catch(error => {
      // log error to server
      next(error)
    });
});

router.delete('/:id', checkHubId, (req, res, next) => {
  Hubs.remove(req.params.id)
    .then(() => {
      res.status(200).json({ message: 'The hub has been nuked' });
    })
    .catch(error => {
      // log error to server when we try to delete the hub, after we already checked the id
      next(error)
    });
});

router.put('/:id', checkHubId, (req, res, next) => {
  Hubs.update(req.params.id, req.body)
    .then(hub => {
      res.status(200).json(hub);
    })
    .catch(error => {
      // log error to server
      next(error)
    });
});

router.get('/:id/messages', checkHubId, (req, res, next) => {
  Hubs.findHubMessages(req.params.id)
    .then(messages => {
      res.status(200).json(messages);
    })
    .catch(error => {
      // log error to server
      next(error)
    });
});

router.post('/:id/messages', checkHubId, checkMessage, (req, res, next) => {
  const messageInfo = { ...req.body, hub_id: req.params.id };

  Messages.add(messageInfo)
    .then(message => {
      res.status(210).json(message);
    })
    .catch(error => {
      // log error to server
      next(error)
    });
});

// ERROR ENDPOINT
// ERROR ENDPOINT
// ERROR ENDPOINT
router.use((err, req, res, next) => {
  res.status(500).json({
    message: 'Error somewhere in there my dude',
    error: err.message
  });
})

module.exports = router;
