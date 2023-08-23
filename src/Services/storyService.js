import axios from "axios";

const baseURL = `${process.env.REACT_APP_BASEURL}/Stories`;

export async function createStory(title, category, ageSuggested, description) {
  try {
    await axios.post(`${baseURL}/create`, {
      title,
      category,
      ageSuggested,
      description
    });
    return null;

  } catch (error) {
    if (error.response.status === 409) {
      return "Story already exists";
    }
    else {
      return "Unknown error";
    }
  }
}

export async function getStories(){
  try {
    const result = await axios.get(`${baseURL}/getAll`);
    return result.data;
  } catch (error) {
    return "Unknown error";
  }
}

export async function getStory(title){
  try {
    const result = await axios.get(`${baseURL}/${title}`);
    return result.data;
  } catch (error) {
    return "Unknown error";
  }
}


export async function editStory(title, category, ageSuggested, description) {
  try {
    await axios.put(`${baseURL}/editStory`, {
      title,
      category,
      ageSuggested,
      description
    });
    return null;

  } catch (error) {
    if (error.response.status === 404) {
      return "Story not found";
    }
    else {
      return "Unknown error";
    }
  }
}