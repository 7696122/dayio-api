const books = [
  {
    title: "입 속의 검은 잎",
    author: "기형도",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

export default resolvers;
