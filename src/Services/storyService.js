import axios from "axios";

const baseEndpoint = "/Stories";

export async function createStoryAsync(title, category, ageSuggested, description, formFile) {
  try {
    let formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("ageSuggested", ageSuggested);
    formData.append("description", description);
    formData.append("formFile", formFile[0]);

    await axios.post(`${baseEndpoint}/create`, formData);
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
    const result = await axios.get(`${baseEndpoint}/getAll`);
    return result.data;
  } catch (error) {
    return "Unknown error";
  }
}

export async function getStoryAsync(id) {
  try {
    const result = await axios.get(`${baseEndpoint}/${id}`);
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

    await axios.put(`${baseEndpoint}/editStory`, formData);
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
    const result = await axios.delete(`${baseEndpoint}/${storId}`);
    return result.data;

  } catch (error) {
    return "Unknown error";
  }

}