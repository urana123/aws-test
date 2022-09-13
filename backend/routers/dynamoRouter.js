const { Person } = require('../models/dynamoModel.js')

const dynamoRouter = async ({ method, body, id }) => {
    switch (method) {
        case 'GET': return _findPerson({ id })
        case "POST": return _creasePerson({ body })
        case "PATCH": return _updatePerson({ body, id })
        case "COPY": return _getAllPerson()
    }
}

const _getAllPerson = async () => {
    const response = await Person.scan().exec();

    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }
}

const _creasePerson = async ({ body }) => {
    let res = await Person.create(body);
    return {
        statusCode: 201,
        body: JSON.stringify(res)
    }
}

const _updatePerson = async ({ body, id }) => {
    let res = await Person.update({ id: id }, { ...body });

    return {
        statusCode: 200,
        body: JSON.stringify(res)
    }
}

const _findPerson = async ({ id }) => {
    console.log(id);
    const person = await Person.query("id").eq(id).exec();
    console.log(person);

    if (!person) {
        return {
            statusCode: 404,
            body: "user not found",
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify(person.toJSON()),
    }
}



module.exports = { dynamoRouter }