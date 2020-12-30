export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = 'http://localhost:3000/callback';
const clientId = "7dfaad7a61304aa2ace36eb7e6bc32df";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;