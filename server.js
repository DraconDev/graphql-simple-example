////* Basic setup
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
const app = express();

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'HelloWorld',
		fields: () => ({
			message: { type: GraphQLString, resolve: () => 'Hello world' },
		}),
	}),
});

// app.use(
// 	'/graphql',
// 	expressGraphQL({
// 		// schema: schema,
// 		graphiql: true,
// 	})
// );

// app.use(
// 	'/graphql',
// 	graphqlHTTP({
// 		schema: schema,
// 		graphiql: true,
// 	})
// );

app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		graphiql: true,
	})
);

app.listen(5000, () => console.log('server running'));
