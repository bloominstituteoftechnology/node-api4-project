# Deployment and Best Practices

In this challenge, you will build a simple Express app and deploy it to Heroku.

## Instructions

### Task 1: Project Setup and Submission

Your assignment page on Canvas should contain instructions for submitting this project. If you are still unsure, reach out to School Staff.

### Task 2: Minimum Viable Product

- [ ] Build a simple API:

  - Create a `.gitignore` file executing `npx gitignore node`
  - Create a `package.json` file executing `npm init --y`
  - Add Eslint to the project executing `npx eslint --init`
  - Edit the `package.json` file to add `"start"` and `"server"` scripts
  - Install `express`, `dotenv`, `cors`
  - Add support for environment variables using an `.env` file and the dotenv library, providing fallbacks in the code
  - Flesh out the API:

    | Method | URL           | Description                                                                                         |
    | ------ | ------------- | ----------------------------------------------------------------------------------------------      |
    | GET    | /api/users    | Returns an array users.                                                                             |
    | POST   | /api/register | Creates a user from { username, password } in the `request body`, responds with newly created user. |
    | POST   | /api/login    | Checks { username, password } in the `request body`, responds with a welcome message.               |

- [ ] Deploy your app to [Heroku](https://heroku.com). The link to the deployed API is your submission deliverable

### Important Notes

- You can make the API return totally hardcoded responses for the requests from clients (no database).
- Alternatively you can use an in-memory array to persist users and act as a database, and build database helpers that interact with the users array.
- If you persist users in an array database, know that storing passwords in plain text is a very bad practice from a security standpoint.

### Stretch Yourself

- Research how to avoid storing passwords as is in your array database.
- Research how to grant access to `GET /api/users` only those clients that are registered and logged in.
- Create a front-end piece inside the project containing a register/login form and the means to display users.
