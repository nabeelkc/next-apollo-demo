import { gql } from "@apollo/client";

export const FETCH_PERSONS = gql`
  query {
    getPeopleData {
      fullName
      email
      address
      phone
    }
  }
`;
