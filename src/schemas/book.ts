import gql from "graphql-tag";

export const typeDef = gql`
  type Book {
    title: String
    author: String
  }
`;
