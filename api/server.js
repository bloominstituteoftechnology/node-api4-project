const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan')

const server = express()

server.use(helmet())
server.use(express.json())
server.use(morgan('dev'))

server.get('/', (req, res) => {
    res.send(`<h2>IT'S ALIVE!!!!</h2>`);
  });

  const users = [
      {
          user: 'donovan',
          password: 'purplerockets'
      },
      {
          user: 'patrick',
          password: 'lovebrother'
      },
      {
          user: 'jane',
          password: 'loveteaching'
      },
      {
          user: 'brian',
          password: 'thatsronald'
      }
  ]

  const register = [
      {
          user: 'cynthia',
          password: 'lovefamily'
      }
  ]

  const login = [
      {
          user: 'cynthia',
          password: 'lovefamily'
      }
  ]

  server.get('/api/users', (req,res) => {
      res.status(200).json(users)
  })
  server.post('/api/register', (req, res) => {
    res.status(201).json(register)
  })
  server.post('api/login', (req, res) => {
     if(!login){
        res.status(404).json({
            message: 'Please enter correct credentials'
        })
     }else{
         res.status(200).json({
             message: 'Welcome'
         })
     }
  })

module.exports = server
