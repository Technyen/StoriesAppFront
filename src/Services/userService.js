import axios from "axios";

const baseURL = `${process.env.API_BASEURL}/Users`;
export async function registerUser(name, email, password) {
  try {
    await axios.post(`${baseURL}/register`, {
        name,
        email,
        password
      });
    return null;

  } catch (error) {
    if (error.response.status === 409) {
      return "User already exists";
    }
    else {
      return "Unknown error";
    }
  }
}

export async function loginUser(email, password) {
  try {
    await axios.post(`${baseURL}/login`, {
      email,
      password
    });
    return null;
  } catch (error) {
    if (error.response.status === 401) {
      return "Password incorrect";
    }
    else if (error.response.status === 404) {
      return "Email incorrect";
    }
    else {
      return "Unknown error";
    }
  }
}