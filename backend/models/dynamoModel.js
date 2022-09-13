const dynamoose = require("dynamoose");

const personsSchema = new dynamoose.Schema(
    {
        id: String,
        lastName: String,
        firstName: String,
    },
    {
        saveUnknown: true,
        timestamps: true,
    }
);

const Person = dynamoose.model("Person", personsSchema);
const PersonTable = new dynamoose.Table("PersonTable", [Person]);

const createTable = async () => {
    try {
        await PersonTable.create();
    } catch (e) { }
}
createTable()

module.exports = { Person };