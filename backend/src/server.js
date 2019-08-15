const { GraphQLServer } = require('graphql-yoga')
const path = require('path')
const resolvers = require('./resolvers')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://usuarioadm:hCAunEyWbX0RV5FS@teste-7rrep.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'), // Chama o schema
    resolvers // Chama os controles
})

console.log('http://localhost:4000')
server.start();
