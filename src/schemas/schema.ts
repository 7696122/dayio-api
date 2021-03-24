import gql from "graphql-tag";
import { makeExecutableSchema } from "graphql-tools";
import { typeDef as Book } from "./book";

const Query = gql`
  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => {
      return [
        {
          title: "입 속의 검은 잎",
          author: "기형도",
        },
        {
          title: "City of Glass",
          author: "Paul Auster",
        },
      ];
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs: [Query, Book],
  resolvers,
});

export default schema;
