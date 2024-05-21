const { gql } = require("apollo-server");

// Define GraphQL schema
exports.typeDefs = gql`
  type Query {
    courses(filter: CourseFilterInput): [Course!]!
    course(id: ID!): Course
    genres: [Genre!]!
    genre(id: ID!): Genre
    numOfCourses: Int
    price: Float
    isTrainer: Boolean
  }

  type Course {
    id: ID!
    name: String!
    description: String!
    price: Float!
    discount: Boolean!
    genre: Genre
    reviews: [Review!]!
  }
  input CourseFilterInput {
    discount: Boolean
    avgRating: Int
  }
  type Genre {
    id: ID!
    name: String!
    courses(filter: CourseFilterInput): [Course!]!
  }
  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }
  type Mutation {
    addGenre(input: addGenreInput!): Genre!
    addCourse(input: AddCourseInput!): Course!
    addReview(input: AddReviewInput!): Review!
    deleteGenre(id: ID!): Boolean!
    deleteCourse(id: ID!): Boolean!
    deleteReview(id: ID!): Boolean!
    updateGenre(id: ID!, input: UpdateGenreInput!): Genre!
    updateCourse(id: ID!, input: UpdateCourseInput!): Course
    updateReview(id: ID!, input: UpdateReviewInput!): Review
  }
  input addGenreInput {
    name: String!
  }
  input AddCourseInput {
    name: String!
    description: String!
    price: Float!
    discount: Boolean!
    genreId: ID!
  }
  input UpdateCourseInput {
    name: String!
    description: String!
    price: Float!
    discount: Boolean!
    genreId: ID
  }
  input AddReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    courseId: ID!
  }
  input UpdateReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    courseId: ID!
  }
  input UpdateGenreInput {
    name: String!
  }
`;
