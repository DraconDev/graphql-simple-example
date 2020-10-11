import {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInt,
} from 'graphql';

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

export default BookType;
// module.exports = BookType;
// module.exports = BookType;
