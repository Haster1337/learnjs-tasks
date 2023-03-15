async function getUsers(names) {
  let users = [];

  for(let name of names) {
    let user = fetch(`https://api.github.com/users/${name}`).then(
      success => {
        if (success.status !== 200) {
          return null;
        } else {
          return success.json();
        }
      })
      .catch(
        fail => {
          return null;
        }
      );

    users.push(user);
  }

  return await Promise.all(users);
}