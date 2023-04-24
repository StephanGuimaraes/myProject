import axios from "axios";

const ConexaoApi ={


checkUserAPI: async (userData) => {
  try {
    const response = await axios.post('http://localhost:5000/register', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
},

CheckLoginApi:async(userdata) =>{

  try {
    const response = await axios.post('http://localhost:5000/login',userdata);
    return response.data;
  }catch(error){
    throw new Error(error.response.data.message);
  }
}
}

export default ConexaoApi;