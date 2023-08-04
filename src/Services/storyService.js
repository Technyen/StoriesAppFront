import axios from "axios";

const baseURL = "https://localhost:7078/Stories";

export async function createStory(title, category, ageAppropiate, description) {
  try {
    await axios.post(`${baseURL}/create`, {
      title: title,
      category: category,
      ageAppropiate: ageAppropiate,
      description: description
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
