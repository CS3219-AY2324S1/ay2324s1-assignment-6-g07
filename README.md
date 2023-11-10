# Getting Started

In order to test the serverless function, you will need to

## Create a Database and Collection

You should be able to login into MongoDB Atlas [here](https://www.mongodb.com/cloud/atlas).

Next, create a Database in your free cluster with the following inputs.

1. Database name: `Assignment6`
2. Collection name: `questions`

![Setup MongoDB Atlas](./images/MongoDBCreateDatabase.png)

Click on `Create` and you should be able to see an empty Database in your cluster.

## Environment Variables

Clone the entire repository.

Create a `.env` file in the root directory using `touch .env`.

Copy the contents below into your `.env` file.

```
MONGO_URL='mongodb+srv://<username>:<password>@cluster0.j1a3k0n.mongodb.net/Assignment6?retryWrites=true&w=majority'
LEETCODE_ENDPOINT='https://leetcode.com/graphql'
```

Replace `<username>` with your own MongoDB username and `<password>` with your own MongoDB password.
