import axios from "axios";

const baseURL = `${process.env.REACT_APP_BASEURL}/Stories`;

export async function createStoryAsync(title, category, ageSuggested, description) {
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

export async function getStoriesAsync(){
  try {
    const result = await axios.get(`${baseURL}/getAll`);
    return result.data;
  } catch (error) {
    return "Unknown error";
  }
}

export async function getStoryAsync(id){
  try {
    const result = await axios.get(`${baseURL}/${id}`);
    return result.data;
  } catch (error) {
    return "Unknown error";
  }
}


export async function editStoryAsync(id, title, category, ageSuggested, description) {
  try {
    await axios.put(`${baseURL}/editStory`, {
      id,
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

export async function deleteStoryAsync( storId ){
  try {
    const result = await axios.delete(`${baseURL}/${storId}`);
    return result.data;

  } catch (error) {
    return "Unknown error";
  }

}