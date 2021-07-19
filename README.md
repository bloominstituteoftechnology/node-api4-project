# Deployment and Best Practices

In this challenge, you will build a simple Express app and deploy it to Heroku.

## Instructions

You are allowed, and **encouraged**, to collaborate with other peers. Please follow the twenty-minute rule, before seeking support.

### Task 1: Minimum Viable Product

- [ ] Build a simple API:

  - Create a `.gitignore` file executing `npx gitignore node`
  - Create a `package.json` file executing `npm init --y`
  - Add Eslint to the project executing `npx eslint --init`
  - Edit the `package.json` file to add `"start"` and `"server"` scripts
  - Install `express`, `dotenv`, `cors`
  - Add support for environment variables using an `.env` file and the dotenv library
  - Flesh out the API:

    | Method | URL           | Description                                                                                         |
    | ------ | ------------- | ----------------------------------------------------------------------------------------------      |
    | GET    | /api/users    | Returns an array users.                                                                             |
    | POST   | /api/register | Creates a user from { username, password } in the `request body`, responds with newly created user. |
    | POST   | /api/login    | Checks { username, password } in the `request body`, responds with a welcome message.               |

- [ ] Deploy your app to [Heroku](https://heroku.com).

### Important Notes

- You can make the API totally dumb and use hardcoded responses for the requests from clients.
- Alternatively you can use an in-memory array to persist users and act as a database, and build database helpers that interact with the users array.
- If you persist users in an array database, know that storing passwords in plain text is a very bad practice from a security standpoint.

### Stretch Yourself

- Research how to avoid storing passwords in plain text in your array database.
- Research how to grant access to `GET /api/users` only those clients that are registered and logged in.
- Create a front-end piece inside the project containing a register/login form and the means to display users.
