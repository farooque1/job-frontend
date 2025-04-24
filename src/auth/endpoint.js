export const APIUrlStrings = {
    login: "/login",
    logout: "/logout",
    jobDetails: "/job-details",
    jobList: "/job-listing",
    jobLocation: "/job-location",
  };

  // function that make the phone number validation start with 6, 7, 8, 9 and length of 10 if not 10 return false
export const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[6789]\d{9}$/;
    return phoneRegex.test(phoneNumber);
  }   