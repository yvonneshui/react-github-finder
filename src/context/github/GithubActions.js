//get users fit searching criteria
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const res = await fetch(`https://api.github.com/search/users?${params}`);

  const { items } = await res.json();

  return items;
};
