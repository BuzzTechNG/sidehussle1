import { gql } from "@apollo/client";
import { client } from "./index";

class apollaHelperClass {
  GOOGLE = "googleId";
  FACEBOOK = "facebookId";
  GET_USER = gql`
    query getUser($id: String) {
      getUser(id: $id) {
        id
        pictureUrl
        firstName
        lastName
        userDetails {
          logAndLat
          address
          userPricePerHour
          userInfo
          languages {
            language
            proficiency
          }
          userTitle
          videoUrl
          avaliability
          education {
            school
            from
            to
            desc
            areaOfStudy
          }
          services
          accountDetails {
            accountNumber
            accountName
            paystackRSP
          }
        }
      }
    }
  `;
  GET_USER_WITHOUT_AUTH = gql`
    query getUserWithoutAuth($id: String) {
      getUserWithoutAuth(id: $id) {
        id
        pictureUrl
        firstName
        lastName
      }
    }
  `;

  //login logic
  LOGIN = gql`
    mutation login($userId: String, $userPassword: String) {
      login(userId: $userId, userPassword: $userPassword) {
        token
        message
      }
    }
  `;

  async login(userId, userPassword) {
    return await client.mutate({
      mutation: this.LOGIN,
      variables: {
        userId,
        userPassword,
      },
    });
  }
  VERFITY_USER_MOBILE = gql`
    mutation verifyUserMobile($id: String, $mobileNumber: String) {
      verifyUserMobile(id: $id, mobileNumber: $mobileNumber) {
        message
      }
    }
  `;
  COMFIRM_USER_MOBILE = gql`
    mutation comfirmUserMobile(
      $user: String
      $token: String
      $tokenType: String
    ) {
      comfirmUserMobile(user: $user, tokenType: $tokenType, token: $token) {
        message
        token
      }
    }
  `;
  //register logic
  REGISTER = gql`
    mutation register(
      $firstName: String
      $middleName: String
      $lastName: String
      $password: String
      $confirmPassword: String
      $address: String
      $mobileNumber: String
      $email: String
    ) {
      register(
        firstName: $firstName
        middleName: $middleName
        lastName: $lastName
        password: $password
        confirmPassword: $confirmPassword
        address: $address
        mobileNumber: $mobileNumber
        email: $email
      ) {
        id
        firstName
        middleName
        lastName
      }
    }
  `;
  SOCIAL_AUTH = gql`
    mutation socialAuth(
      $firstName: String
      $lastName: String
      $socialId: String
      $pictureUrl: String
      $socialMail: String
      $socialType: String
    ) {
      socialAuth(
        firstName: $firstName
        lastName: $lastName
        socialId: $socialId
        pictureUrl: $pictureUrl
        socialMail: $socialMail
        socialType: $socialType
      ) {
        message
        id
        token
      }
    }
  `;
  //update modal logic
  UPDATE_USER = gql`
    mutation updateUser(
      $address: String
      $logAndLat: String
      $services: [String]
      $languages: [LanguageInput]
      $videoUrl: String
      $education: [EducationInput]
      $userTitle: String
      $userPricePerHour: String
      $userInfo: String
    ) {
      updateUser(
        address: $address
        logAndLat: $logAndLat
        services: $services
        languages: $languages
        videoUrl: $videoUrl
        education: $education
        userTitle: $userTitle
        userPricePerHour: $userPricePerHour
        userInfo: $userInfo
      ) {
        id
        firstName
        middleName
        lastName
        pictureUrl
        userDetails {
          logAndLat
          address
          userPricePerHour
          userInfo
          languages {
            language
            proficiency
          }
          userTitle
          videoUrl
          avaliability
          education {
            school
            from
            to
            desc
            areaOfStudy
          }
          services
          accountDetails {
            accountNumber
            accountName
            paystackRSP
          }
        }
      }
    }
  `;
  //  Job
  GET_AVALIABLE_JOBS = gql`
    query getAvaliableJobs($location: String) {
      getAvaliableJobs(location: $location) {
        jobTitle
        jobDescription
        locationSensitive
        jobBudget
        isBudgetNegotiable
        jobCompleted
        jobStatus
        jobLocation
        jobSpecification
        user {
          firstName
          lastName
        }
      }
    }
  `;
  async getAvaliableJobs(location) {
    return await client.query({
      query: this.GET_AVALIABLE_JOBS,
      variables: {
        location,
      },
    });
  }
  async register(
    firstName,
    middleName,
    lastName,
    password,
    confirmPassword,
    address,
    mobileNumber,
    email
  ) {
    return await client.mutate({
      mutation: this.REGISTER,
      variables: {
        firstName,
        middleName,
        lastName,
        password,
        confirmPassword,
        address,
        mobileNumber,
        email,
      },
    });
  }

  async socialAuth({
    firstName,
    lastName,
    pictureUrl,
    socialId,
    socialType,
    socialMail,
  }) {
    return await client.mutate({
      mutation: this.SOCIAL_AUTH,
      variables: {
        firstName,
        lastName,
        pictureUrl,
        socialId,
        socialType,
        socialMail,
      },
    });
  }
  async getUser(id) {
    return await client.query({
      query: this.GET_USER,
      variables: {
        id,
      },
    });
  }
  async getUserwithoutAuth(id) {
    return await client.query({
      query: this.GET_USER_WITHOUT_AUTH,
      variables: {
        id,
      },
    });
  }
  async verifyUserMobile({ id, mobileNumber }) {
    return await client.mutate({
      mutation: this.VERFITY_USER_MOBILE,
      variables: {
        id,
        mobileNumber,
      },
    });
  }
  async comfirmUserMobile({ user, token }) {
    const tokenType = "MOBILE_VERIFICATION";
    return await client.mutate({
      mutation: this.COMFIRM_USER_MOBILE,
      variables: {
        user,
        token,
        tokenType,
      },
    });
  }

  async updateUser({
    address,
    logAndLat,
    services,
    languages,
    videoUrl,
    education,
    userTitle,
    userPricePerHour,
    userInfo,
  }) {
    return await client.mutate({
      mutation: this.UPDATE_USER,
      variables: {
        address,
        logAndLat,
        services,
        languages,
        videoUrl,
        education,
        userTitle,
        userPricePerHour,
        userInfo,
      },
    });
  }
}
const apolloHelper = new apollaHelperClass()
export default apollaHelperClass;
export { apolloHelper }
