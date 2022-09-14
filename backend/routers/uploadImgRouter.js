const AWS = require('aws-sdk')

const uploadImgRouter = async (event) => {
    const s3 = new AWS.S3();

    AWS.config.update({
        accessKeyId: process.env.ACCESS_KEY_Id,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
        region: "us-east-1",
        signatureVersion: "v4",
    });

    const myBucket = "aws-back";
    const myKey = "file-name1223.pdf";
    const signedUrlExpireSeconds = 3000;

    // const getUrl = await s3.getSignedUrl('putObject', {
    //     Bucket: myBucket,
    //     Key: myKey,
    //     Expires: signedUrlExpireSeconds,
    // })
    const getUrl = await s3.getSignedUrl('getObject', {
        Bucket: myBucket,
        Key: myKey,
        Expires: signedUrlExpireSeconds,
    })

    return {
        statusCode: 201,
        body: JSON.stringify({
            getUrl: getUrl,
        }),
    }
}

module.exports = { uploadImgRouter }