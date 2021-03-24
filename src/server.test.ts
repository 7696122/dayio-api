import { query, mutate } from "./testserver";
import gql from "graphql-tag";

it("books", async () => {
  const GET_USERS = gql`
    query {
      books {
        title
        author
      }
    }
  `;

  const {
    data: { books },
  } = await query({ query: GET_USERS });

  expect(books[0].title).toEqual("The Awakening");
  expect(books[0].author).toEqual("Kate Chopin");
});
