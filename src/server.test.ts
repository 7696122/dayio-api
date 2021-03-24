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

  expect(books[0].title).toEqual("입 속의 검은 잎");
  expect(books[0].author).toEqual("기형도");
});
