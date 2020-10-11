import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import RootQueryType from './../types/RootQueryType.js';
import RootMutationType from './../types/RootMutationType.js';

const schema2 = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'HelloWorld',
		fields: () => ({
			message: { type: GraphQLString, resolve: () => 'Hello world' },
		}),
	}),
});

const schema = new GraphQLSchema({
	query: RootQueryType,
	mutation: RootMutationType,
	// query: new GraphQLObjectType({
	// 	name: 'HelloWorld',
	// 	fields: () => ({
	// 		message: { type: GraphQLString, resolve: () => 'Hello world' },
	// 	}),
	// }),
});

export default schema;
