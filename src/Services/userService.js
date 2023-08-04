import axios from "axios";

const baseURL = "https://localhost:7078/Users";
export async function registerUser(name, email, password) {
  try {
    await axios.post(`${baseURL}/register`, {
        name: name,
        email: email,
        password: password
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
      email: email,
      password: password
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