//get users fit searching criteria
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const res = await fetch(`https://api.github.com/search/users?${params}`);

  const { items } = await res.json();

  return items;
};

//get single user
export const getUser = async (login) => {
  const res = await fetch(`https://api.github.com/users/${login}`);

  if (res.status === 404) {
    window.location = "./notfound";
  } else {
    const data = await res.json();

    return data;
  }
};
//Get user's repo
export const getUserRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });

  const res = await fetch(
    `https://api.github.com/users/${login}/repos?${params}`
  );

  if (res.status === 404) {
    window.location = "./notfound";
  } else {
    const data = await res.json();
    return data;
  }
};
