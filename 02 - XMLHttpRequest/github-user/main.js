let input = document.querySelector("input");
let form = document.querySelector("form");
let profile = document.querySelector(".profile");

function search(event) {
  event.preventDefault();

  var username = input.value;
  console.log(username);
  var nReq = new XMLHttpRequest();
  nReq.open("GET", `https://api.github.com/users/${username}`);
  nReq.onload = function() {
    if (this.status == 404) {
      console.log("user not found");
      notUi();
    } else {
      var data = JSON.parse(nReq.response);
      // console.log(data, "data");
      // console.log(data.login, "your username");
      // console.log(data.id, "your id");
      // console.log(data.bio, "your bio");
      // console.log(data.avatar_url);
      profileUi(data);
    }
  };
  nReq.send();
}
function profileUi(data) {
  profile.innerHTML = "";
  let box = document.createElement("div");
  box.classList.add("profileBox");
  let imgdiv = document.createElement("div");
  imgdiv.classList.add("imgbox");
  let img = document.createElement("img");
  img.setAttribute("src", data.avatar_url);
  imgdiv.append(img);
  let ul = document.createElement("ul");
  ul.classList.add("info");
  let user = document.createElement("li");
  user.classList.add("name");
  user.innerText = `Username : ${data.login}`;
  let id = document.createElement("li");
  id.classList.add("userid");
  id.innerText = `ID : ${data.id}`;
  let bio = document.createElement("li");
  bio.classList.add("userbio");
  bio.innerText = `BIO : ${data.bio}`;
  ul.append(user, id, bio);
  box.append(imgdiv, ul);
  profile.append(box);
}
function notUi() {
  profile.innerHTML = "";
  let found = document.createElement("p");
  found.classList.add("not");
  found.innerText = "User was not found! :(";
  profile.append(found);
}

form.addEventListener("submit", search);
