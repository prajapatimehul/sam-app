// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
const { DynamoDB } = require("aws-sdk")


const db = new DynamoDB.DocumentClient()
const TableName = process.env.TABLE_NAME

exports.lambdaHandler = async (event, context) => {
    try {
        const books = await db
            .scan({
                TableName,
            })
            .promise()

        return { statusCode: 200, body: JSON.stringify(books) }
    } catch (err) {
        console.log(err);
        return err;
    }

};
