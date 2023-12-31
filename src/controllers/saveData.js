import axios from "axios";

const saveData = async (data, handler) => {
  try {
    const response = await axios.post("http://localhost:3000/save", data);
    await handler(response.data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { saveData };
