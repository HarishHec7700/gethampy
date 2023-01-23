const authEndPt="https://accounts.spotify.com/authorize?",
clientId="693f93927eae4123ab9e0d8197ecc186",
redirUrl="http://localhost:3000",
scopes=["user-library-modify","user-library-read"]; 

export const loginEndpoint = `${authEndPt}client_id=${clientId}&redirect_uri=${redirUrl}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;