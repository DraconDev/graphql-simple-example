////* Basic setup
import books from './src/constants/books';
import BookType from './src/types/bookType';

import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInt,
} from 'graphql';
const app = express();

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'HelloWorld',
		fields: () => ({
			message: { type: GraphQLString, resolve: () => 'Hello world' },
		}),
	}),
});

const RootQueryType = new GraphQLObjectType({
	name: 'Query',
	description: 'root query',
	fields: () => ({
		books: {
			type: new GraphQLList(BookType),
			description: 'List of All Books',
			resolve: () => books,
		},
	}),
});

const schema2 = new GraphQLSchema({
	query: RootQueryType,
});

app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema2,
		graphiql: true,
	})
);

app.listen(5000, () => console.log('server running'));
