const endpoint = "https://accounts.spotify.com/authorize";
const client_id = "7dfaad7a61304aa2ace36eb7e6bc32df";
const redirect_uri = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
];

const scope = scopes.join("%20");
console.log(scope);

export const loginURL = `${endpoint}?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scope}&state=34fFs29kd09&show_dialog=true`;

export const getToken = () => {
  const addUrl = new URL(window.location.href).hash;
  var urlParams = new URLSearchParams(addUrl);
  const token = urlParams.get("#access_token");
  console.log(token);
  return token;
};

getToken();
