function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
}

async function loadJsonAsync(url){
  let fetched = await fetch(url);

  if(fetched.status === 200){
    return await fetched.json();
  }

  throw new Error(fetched.status);
}



loadJson('no-such-user.json') // (3)
  .catch(alert); // Error: 404