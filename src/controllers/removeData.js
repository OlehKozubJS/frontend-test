import axios from "axios";

const removeData = async (index, handler) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/remove/${index}`
    );
    await handler(response.data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { removeData };
