////* Basic setup
const books = require('./constants/books');
// import books from './constants/books';
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInt,
} = require('graphql');
const app = express();

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'HelloWorld',
		fields: () => ({
			message: { type: GraphQLString, resolve: () => 'Hello world' },
		}),
	}),
});

const BookType = new GraphQLObjectType({
	name: 'book',
	description: 'Description',
	fields: () => ({
		author: { type: GraphQLNonNull(GraphQLString) },
		country: { type: GraphQLNonNull(GraphQLString) },
		imageLink: { type: GraphQLNonNull(GraphQLString) },
		link: { type: GraphQLNonNull(GraphQLString) },
		pages: { type: GraphQLNonNull(GraphQLInt) },
		title: { type: GraphQLNonNull(GraphQLString) },
		year: { type: GraphQLNonNull(GraphQLInt) },
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
