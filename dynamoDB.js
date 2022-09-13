const dynamoose = require("dynamoose");
const AWS = require("aws-sdk");

const setDynamoDB = async () => {
    const ddb = new dynamoose.aws.ddb.DynamoDB({
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
        region: "us-east-1"
    });

    dynamoose.aws.ddb.set(ddb);
}

module.exports = { setDynamoDB }