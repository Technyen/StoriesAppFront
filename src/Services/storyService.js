import axios from "axios";

const baseURL = `${process.env.API_BASEURL}/Stories`;

export async function createStoryAsync(title, category, ageSuggested, description, formFile) {
  try {
    let formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("ageSuggested", ageSuggested);
    formData.append("description", description);
    formData.append("formFile", formFile[0]);

    await axios.post(`${baseURL}/create`, formData);
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

export async function getStoriesAsync() {
  try {
    const result = await axios.get(`${baseURL}/getAll`);
    return result.data;
  } catch (error) {
    return "Unknown error";
  }
}

export async function getStoryAsync(id) {
  try {
    const result = await axios.get(`${baseURL}/${id}`);
    return result.data;
  } catch (error) {
    return "Unknown error";
  }
}

export async function editStoryAsync(id, title, category, ageSuggested, description, formFile, imageUrl) {
  try {
    let formData = new FormData();
    formData.append("id",id);
    formData.append("title", title);
    formData.append("category", category);
    formData.append("ageSuggested", ageSuggested);
    formData.append("description", description);
    formData.append("imageUrl",imageUrl)
    formData.append("formFile", formFile[0]);

    await axios.put(`${baseURL}/editStory`, formData);
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

export async function deleteStoryAsync(storId) {
  try {
    const result = await axios.delete(`${baseURL}/${storId}`);
    return result.data;

  } catch (error) {
    return "Unknown error";
  }

}