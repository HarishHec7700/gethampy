import axios from "axios";

const authEndPt="https://accounts.spotify.com/authorize?",
clientId="693f93927eae4123ab9e0d8197ecc186",
redirUrl="http://localhost:3000/home",
scopes=["user-library-modify","user-library-read"]; 

export const loginEndpoint = `${authEndPt}client_id=${clientId}&redirect_uri=${redirUrl}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient=axios.create({
  baseURL:"https://api.spotify.com/v1/",
});


export const setClientToken=(token)=>{
  // Interceptors in axios is used to customize the request and response with our desired datas i.e like headers or tokens 
  apiClient.interceptors.request.use(async function(config){
    // Instead of adding token got from the link in each request header we are creating a const with a header itself for that purpose we are using the Authorization property.   
    config.headers.Authorization= "Bearer "+token;
    return config;
  } )
};

export default apiClient;

