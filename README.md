# Deployment and Best Practices

In this challenge, you will **deploy** an API to Heroku.

## Instructions

You are allowed, and **encouraged**, to collaborate with other peers. Please follow the twenty-minute rule, before seeking support.

### Task 1: Minimum Viable Product

- [ ] Build a simple API and deploy it to [Heroku](https://heroku.com):

  1. Create a `.gitignore` file executing `npx gitignore node`
  2. Create a `package.json` file executing `npm init --y`
  3. Add Eslint to the project executing `npx eslint --init`
  4. Edit the `package.json` file to add `"start"` and `"server"` scripts
  5. Install `express`, `dotenv`, `cors`
  6. Add support for environment variables using an `.env` file and the dotenv library
  7. Flesh out the API:

    | Method | URL           | Description                                                                                         |
    | ------ | ------------- | ----------------------------------------------------------------------------------------------      |
    | GET    | /api/users    | Returns an array users.                                                                             |
    | POST   | /api/register | Creates a user from { username, password } in the `request body`, responds with newly created user. |
    | POST   | /api/login    | Checks { username, password } in the `request body`, responds with a welcome message.               |

### Important Notes

- You can make your API totally dumb (hardcoded responses for all requests).
- Alternatively you can use an in-memory array to persist users and act as a database, and build database helpers that interact with the users array.
- If you persist users in an array database, know that storing passwords in plain text is a very bad practice from a security standpoint.

### Stretch Yourself

- Research how to avoid storing passwords in plain text in your array database.
- Research how to grant access to `GET /api/users` only those clients that are registered and logged in.
- Create a front-end piece inside the project containing a register/login form and the means to display users.
