import {
	GraphQLInt,
	GraphQLList,
	GraphQLObjectType,
	GraphQLString,
} from 'graphql';
import BookType from './BookType.js';
import authors from './../constants/authors.js';
import AuthorsType from './AuthorsType.js';
import { books } from './../constants/books.js';

const RootQueryType = new GraphQLObjectType({
	name: 'RootQuery',
	description: 'root query',
	fields: () => ({
		book: {
			type: BookType,
			// description: 'List of All Books',
			args: {
				id: { type: GraphQLInt },
			},
			resolve: (parents, args) => books.find((book) => book.id === args.id),
		},
		books: {
			type: new GraphQLList(BookType),
			// description: 'List of All Books',
			resolve: () => books,
		},
		authors: { type: new GraphQLList(AuthorsType), resolve: () => authors },
		author: {
			type: AuthorsType,
			args: {
				name: { type: GraphQLString },
			},
			resolve: (parent, args) =>
				authors.find((author) => author.givenname === args.name),
		},
	}),
});

export default RootQueryType;
