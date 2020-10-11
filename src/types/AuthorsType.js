import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

const AuthorsType = new GraphQLObjectType({
	name: 'authors',
	fields: () => ({
		key: { type: GraphQLNonNull(GraphQLString) },
		givenname: { type: GraphQLNonNull(GraphQLString) },
		familyname: { type: GraphQLNonNull(GraphQLString) },
	}),
});

export default AuthorsType;
