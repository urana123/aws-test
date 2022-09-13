const dynamoose = require("dynamoose");
const AWS = require("aws-sdk");

const setDynamoDB = async () => {
    const ddb = new dynamoose.aws.ddb.DynamoDB({
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
        region: "us-east-1"
        // accessKeyId: "AKIAS4PFB2WS5CGLGRKG",
        // secretAccessKey: "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",
        // region: "us-east-1"
    });

    dynamoose.aws.ddb.set(ddb);
}

module.exports = { setDynamoDB }