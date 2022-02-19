import axios from "axios";

const github = axios.create({
  baseURL: "https://api.github.com",
});

//get users fit searching criteria
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const res = await github.get(`/search/users?${params}`);

  return res.data.items;
};

//get single user and their repos
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};
