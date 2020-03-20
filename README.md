# Web API IV Challenge

In this challenge, you will **deploy** an API of your choosing to `heroku`.

## Instructions

You are allowed, and **encouraged**, to collaborate with other peers. Please follow the twenty-minute rule, before seeking support from your PM and Instructor.

## Minimum Viable Product

Pick any API, could be one of your past projects, and deploy it to `heroku`. Once deployed, send the URL to the TL for your group.

## Stretch Goal

- add support for environment variables using `.env` files. You can use the [dotenv](https://www.npmjs.com/package/dotenv) npm module.

## Node Project 2 API

Base URL: https://rf-node-project2.herokuapp.com/


POST to /api/posts

Takes an object that includes:

```
{
    "title": "burger",
    "contents": "cheese"
}
```


POST to /api/posts/:id/comments

Take an object that includes:

```
{
    "text": "Final Comment",
	"post_id": 18, this integer should be grabbed from the :id
}
```


Example Output:

```
{
    "id": 1,
    "title": "I wish the ring had never come to me. I wish none of this had happened.",
    "contents": "Guess who said this",
    "created_at": "2019-05-11 01:55:52",
    "updated_at": "2019-05-11 01:55:52"
}
```

