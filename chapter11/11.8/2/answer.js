class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}


async function loadJson(url){
  let fetched = await fetch(url);

  if(fetched.status === 200){
    return await fetched.json();
  }

  throw new HttpError(fetched);
}

async function demoGithubUser() {
  let user;
  while(true) {
    let name = prompt("Введите логин?", "iliakan");
    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break;
    } catch(e) {
      if (e instanceof HttpError && e.response.status == 404) {
        console.log("Такого пользователя не существует, пожалуйста, повторите ввод.");
      } else {
        throw e;
      }
    }
  }

  console.log(`Полное имя: ${user.name}.`);
  return user;
}

demoGithubUser();