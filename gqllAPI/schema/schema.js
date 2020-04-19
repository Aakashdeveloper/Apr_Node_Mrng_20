const graphql = require('graphql');
const axios = require('axios');

const{
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat,
    GraphQLSchema
}= graphql

const ProductType = new GraphQLObjectType({
    name:'Product',
    fields:{
        id: {type:GraphQLInt},
        name: {type:GraphQLString},
        city: {type:GraphQLString},
        locality_verbose:{type:GraphQLString},
        thumb: {type:GraphQLString},
        aggregate_rating: {type:GraphQLFloat},
        rating_text: {type:GraphQLString},
    }
})

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        Product:{
            type:ProductType,
            args:{id:{type:GraphQLInt}},
            resolve(parentValue, args){
                return axios.get(`http://localhost:8900/zomato/${args.id}`)
                .then((res) => res.data)
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query:RootQuery
})

