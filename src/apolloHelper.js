import {
  gql
} from "@apollo/client";
import {
  client
} from './index'
export const GET_DOGS = gql `
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;
//login logic
const LOGIN = gql `
  mutation login($userId: String, $userPassword: String) {
    login(userId: $userId, userPassword: $userPassword) {
      token
      message
    }
  }
`;
export async function login(userId, userPassword) {
  return await client.mutate({
    mutation: LOGIN,
    variables: {
      userId,
      userPassword
    }
  })
}


//register logic
const REGISTER = gql `
  mutation register($firstName: String, $middleName:String, $lastName:String, $password: String, $confirmPassword:String, $address:String, $mobileNumber:Int, $email:String, ) {
    register(firstName: $firstName,middleName:$middleName lastName: $lastName, password: $password,confirmPassword:$confirmPassword, address: $address, mobileNumber:$mobileNumber,email:$email) {
      id
      firstName
      middleName
      lastName
      userDetail
    }
  }
`;
export async function register(firstName, lastName, password, confirmPassword, address, mobileNumber, email) {
  return await client.mutate({
    mutation: REGISTER,
    variables: {
      firstName,
      lastName,
      password,
      confirmPassword,
      address,
      mobileNumber,
      email
    }
  })
}