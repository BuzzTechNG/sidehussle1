import { gql } from "@apollo/client";
import { client } from './index'
export const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;
 const LOGIN = gql`
  mutation login($userId: String, $userPassword: String) {
    login(userId: $userId, userPassword: $userPassword) {
      token
      message
    }
  }
`;
export async function login(userId,userPassword){ 
 return await client.mutate({
    mutation: LOGIN,
    variables: { userId, userPassword }
  })
}