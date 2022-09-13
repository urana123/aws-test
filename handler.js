"use strict";
const { setDynamoDB } = require('./dynamoDB.js')

const { userRouter } = require('./backend/routers/usersRouter.js')
const { dynamoRouter } = require('./backend/routers/dynamoRouter.js')
const { productsRouter } = require('./backend/routers/productsRouter.js')
const { uploadImgRouter } = require('./backend/routers/uploadImgRouter.js')

module.exports.api = async (event) => {
  setDynamoDB()

  const section = event.pathParameters.section;
  const method = event.requestContext.http.method;
  const id = event.pathParameters.id

  switch (section) {
    case "persons": return null;
    case "upload": return uploadImgRouter(JSON.parse(event.body))
    case "users": return userRouter({ method: method, body: JSON.parse(event.body) });
    case "person": return dynamoRouter({ method: method, body: JSON.parse(event.body), id: id })
    case "products": return productsRouter({ method: method, body: JSON.parse(event.body) });
  }

  return {
    statusCode: 400,
    body: JSON.stringify({ message: `sorry ${section} does't exist`, items: event }, null, 2),
  };
};

