let usersss = document.getElementById("users");

// ^ api fetch
let githubUsers = fetch("https://api.github.com/users");
githubUsers
  .then((data) => data.json())
  .then((users) => {
    console.log(users);
    users.map(({ login, id, avatar_url, html_url }) => {
      usersss.innerHTML += `
      <div class="user">
      <h2>${id}</h2>
      <h1>${login}</h1>
      <img src=${avatar_url} alt="" />
      <a href="${html_url}">Github link</a>
    </div>`;
    });
  })
  .catch((error) => {
    console.log("no data found", error);
  });
