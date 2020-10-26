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
  UPDATE_USER_LOCATION = gql`
    query updateUserLocation($location: String) {
      updateUserLocation(location: $location)
    }
  `;
  GET_USER_WITHOUT_AUTH = gql`
    query getUserWithoutAuth($id: String) {
      getUserWithoutAuth(id: $id) {
        id
        pictureUrl
        firstName
        lastName
        mobileNumber
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
        mobileNumber
        message
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
  SEARCH_USER_WITH_FILTER = gql`
    query searchUserWithFilter($services: [String]){
      searchUserWithFilter(services: $services){
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
          userTitle
          videoUrl
      }
    }
    }
  `;
  // Banks
  GET_USER_BANK_DETAILS = gql`
    query getUserBankDetails($id: String) {
      getUserBankDetails(id: $id) {
        accountNumber
        accountName
        paystackRSP
      }
    }
  `;
  ADD_USER_BANK_DETAILS = gql`
    mutation addUserBankDetails(
      $type: String
      $name: String
      $account_number: String
      $bank_code: String
      $currency: String
    ) {
      addUserBankDetails(
        type: $type
        name: $name
        account_number: $account_number
        bank_code: $bank_code
        currency: $currency
      ) {
        accountNumber
        accountName
        paystackRSP
        message
      }
    }
  `;

  PAY_WITH_PAYSTACK = gql`
    mutation payWithPaystack($amount: String, $email: String) {
      payWithPaystack(amount: $amount, email: $email)
    }
  `;

  TRANSFER_WITH_PAYSTACK = gql`
    mutation transferWithPaystack($amount: String, $userBank: String) {
      transferWithPaystack(amount: $amount, userBank: $userBank)
    }
  `;

  //  Job
  GET_AVALIABLE_JOBS = gql`
    query getAvaliableJobs($location: String) {
      getAvaliableJobs(location: $location) {
        id
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
  CREATE_JOB = gql`
    mutation createJob(
      $jobTitle: String
      $jobDescription: String
      $jobLocation: String
      $jobSpecification: [String]
      $locationSensitive: Boolean
      $isBudgetNegotiable: Boolean
      $jobBudget: Int
    ) {
      createJob(
        jobTitle: $jobTitle
        jobDescription: $jobDescription
        jobLocation: $jobLocation
        isBudgetNegotiable: $isBudgetNegotiable
        jobSpecification: $jobSpecification
        locationSensitive: $locationSensitive
        jobBudget: $jobBudget
      ) {
        jobTitle
        jobDescription
        jobSpecification
        locationSensitive
        jobBudget
      }
    }
  `;
  GET_JOB = gql`
    query getJob($id: String) {
      getJob(id: $id) {
        id
        jobTitle
        jobDescription
        locationSensitive
        jobBudget
        isBudgetNegotiable
        jobCompleted
        jobStatus
        jobLocation
        jobAddress
        createdAt
        jobSpecification
        assignedTo {
          # user {
          id
          firstName
          lastName

          # }
        }
        interestedUser {
          user {
            id
            firstName
            lastName
            pictureUrl
          }
          message
          negotiatedPrice
          createdAt
        }
        user {
          id
          firstName
          lastName
          # profileUrl
          userDetails {
            address
          }
          createdAt
        }
      }
    }
  `;
  GET_JOBS_ASSIGNED_TO_WITH_STATUS = gql` 
    query getJobsAssignedToWithStatus($status: String){
        getJobsAssignedToWithStatus(status: $status){
        id
        jobTitle
        jobDescription
        locationSensitive
        jobBudget
        isBudgetNegotiable
        jobCompleted
        jobStatus
        jobLocation
        jobAddress
        jobSpecification

        createdAt
    }
    }
  `;
  GET_JOBS_USER_POSTED_WITH_STATUS = gql` 
    query getJobsUserPostedWithStatus($status: String){
      getJobsUserPostedWithStatus(status: $status){
        id
        jobTitle
        jobDescription
        locationSensitive
        jobBudget
        isBudgetNegotiable
        jobCompleted
        jobStatus
        jobLocation
        jobAddress
        jobSpecification

        createdAt
    }
    }
  `;
  AVALIABLE_BALANCE = gql`
    query getUserAvaliableBalance {
      getUserAvaliableBalance {
        balance
      }
    }
  `;
  CAN_APPLY_FOR_JOB = gql`
    query canApplyForJob($jobId: String) {
      canApplyForJob(jobId: $jobId)
    }
  `;
  APPLY_FOR_JOB = gql`
    mutation applyForJob(
      $jobId: String
      $user: String
      $message: String
      $negotiatedPrice: String
    ) {
      applyForJob(
        jobId: $jobId
        user: $user
        message: $message
        negotiatedPrice: $negotiatedPrice
      ) {
        id
      }
    }
  `;

  CANCEL_JOB = gql`
    mutation cancelJob($jobId: String) {
      cancelJob(jobId: $jobId) {
        jobStatus
      }
    }
  `;
  GET_USER_ASSIGNED_TO_JOB = gql`
    query getUserAssignedToJob($jobId: String) {
      getUserAssignedToJob(jobId: $jobId) {
        user {
          id
          firstName
          lastName
        }
        message
        price
      }
    }
  `;
  ASSIGN_JOB = gql`
    mutation assignJob($jobId: String, $user: String) {
      assignJob(jobId: $jobId, user: $user)
    }
  `;
  async getAvaliableJobs(location) {
    return await client.query({
      query: this.GET_AVALIABLE_JOBS,
      variables: {
        location,
      },
      fetchPolicy: "network-only",
    });
  }

  START_OR_CONTINUE_CONVERSATION = gql`
    mutation startOrContinueConversation($participant: String, $job: String) {
      startOrContinueConversation(participant: $participant, job: $job) {
        id
        job
        participants {
          id
          firstName
          lastName
        }
        sender {
          id
          firstName
          lastName
        }
      }
    }
  `;
  PUSH_MESSAGE = gql`
    mutation pushMessage($message: String, $id: String) {
      pushMessage(message: $message, id: $id)
    }
  `;
  GET_CONVERSATION = gql`
    query getConversation($id: String) {
      getConversation(id: $id) {
        by
        message
      }
    }
  `;

  GET_USER_CONVERSATIONS = gql`
    query getUserConversations {
      getUserConversations {
        id
        job
        participants {
          id
          firstName
          lastName
          pictureUrl
        }
        sender {
          id
          firstName
          lastName
          pictureUrl
        }
      }
    }
  `;
  NEW_MESSAGE = gql`
    subscription newMessage($id: String) {
      newMessage(id: $id) {
        by
        message
      }
    }
  `;
  GET_REVIEW = gql`
    query getReview($jobId: String) {
      getReview(jobId: $jobId) {
        message
        review
        rating
      }
    }
  `;

  CREATE_REVIEW = gql`
    mutation createReview(
      $job: String
      $reviewer: String
      $reviewedUser: String
      $review: String
      $rating: Int
    ) {
      createReview(
        job: $job
        reviewer: $reviewer
        reviewedUser: $reviewedUser
        review: $review
        rating: $rating
      ) {
        id
        message
      }
    }
  `;
  async register(
    firstName,
    // middleName,
    lastName,
    password,
    confirmPassword,
    // address,
    mobileNumber,
    // email
  ) {
    return await client.mutate({
      mutation: this.REGISTER,
      variables: {
        firstName,
        // middleName,
        lastName,
        password,
        confirmPassword,
        // address,
        mobileNumber,
        // email,
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
  async updateUserLocation(location) {
    return await client.query({
      query: this.UPDATE_USER_LOCATION,
      variables: {
        location,
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

  async createJob({
    userId,
    jobTitle,
    jobDescription,
    jobLocation,
    jobSpecification,
    locationSensitive,
    isBudgetNegotiable,
    jobBudget,
  }) {
    return await client.mutate({
      mutation: this.CREATE_JOB,
      variables: {
        userId,
        jobTitle,
        jobDescription,
        jobLocation,
        jobSpecification,
        isBudgetNegotiable,
        locationSensitive,
        jobBudget,
      },
    });
  }
  async startOrContinueConversation({ participant, job }) {
    return await client.mutate({
      mutation: this.START_OR_CONTINUE_CONVERSATION,
      variables: {
        job,
        participant,
      },
    });
  }
}
const apolloHelper = new apollaHelperClass();
export default apollaHelperClass;
export { apolloHelper };
