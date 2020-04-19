const express = require('express');
const expressGraphQL = require('express-graphql');
var port = 8600;
const cors = require('cors');
const app = express();
const schema = require('./schema/schema');

app.use(cors())

app.use('/graphql',expressGraphQL({
    schema,
    graphiql:true
}))


app.listen(port,() => {
    console.log(`App is running on port ${port}`)
})