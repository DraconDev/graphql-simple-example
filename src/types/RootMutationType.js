import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql';
import BookType from './BookType.js';
import { books } from './../constants/books.js';

const RootMutationType = new GraphQLObjectType({
	name: 'Mutation',
	description: 'root mutation',
	fields: () => ({
		addBook: {
			type: BookType,
			description: 'Add a book',
			args: {
				author: { type: GraphQLNonNull(GraphQLString) },
				title: { type: GraphQLNonNull(GraphQLString) },
			},
			resolve: (parents, args) => {
				const book = {
					id: books.length + 1,
					author: args.author,
					title: args.title,
				};
				books.push(book);
				return book;
			},
		},
	}),
});

export default RootMutationType;
