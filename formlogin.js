function login(e) {
  e.preventDefault();
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  //   values
  let emailvalue = email.value;
  let passwordvalue = password.value;

  // labels
  let one = document.getElementById("one");
  let two = document.getElementById("two");

  //  ^ email
  if (emailvalue.length == "") {
    one.innerText = "Invalid password";
    one.style.display = "block";
    email.style.border = "2px solid red";
    return false;
  } else if (emailvalue.length < 15) {
    one.innerText = "email should have more than 15 characters";
    one.style.display = "block";
    email.style.border = "2px solid red";
    return false;
  } else if (
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      emailvalue
    )
  ) {
    one.innerText = "email format is wrong";
    one.style.display = "block";
    email.style.border = "2px solid red";
    return false;
  } else {
    one.style.display = "none";
    email.style.border = "1px solid brown";
  }

  // ^ password

  if (passwordvalue == "") {
    two.innerText = "Invalid password";
    two.style.display = "block";
    password.style.border = "2px solid red";
    return false;
  } else if (passwordvalue.length < 8) {
    two.innerText = "password should be more than 8 characters";
    two.style.display = "block";
    password.style.border = "2px solid red";
    return false;
  } else if (passwordvalue.length > 15) {
    two.innerText = "password should be less than 15 characters";
    two.style.display = "block";
    password.style.border = "2px solid red";
    return false;
  } else if (!/^[A-Za-z0-9\@!#$%&*^?]+$/.test(passwordvalue)) {
    two.innerText = "password incorrect format";
    two.style.display = "block";
    password.style.border = "2px solid red";
    return false;
  } else {
    two.style.display = "none";
    password.style.border = "1px solid brown";
  }

  //   ^Login validation
  let localdata = JSON.parse(localStorage.getItem("data")) || [];

  console.log(localdata);
  let check = false;
  for (const { email, password } of localdata) {
    if (email == emailvalue && password == passwordvalue) {
      check = true;
    }
  }
  if (check) {
    loginmsg.innerText = `Login succesfull`;
    loginmsg.style.color = "green";
  } else {
    loginmsg.innerText = `Login unsuccesfull`;
    loginmsg.style.color = "red";
  }

  // let loginmsg = document.getElementById("loginmsg");
  // if (localStorage.getItem(emailvalue)) {
  //   let user = JSON.parse(localStorage.getItem(emailvalue));
  //   if (user.email === emailvalue) {
  //     if (user.password === passwordvalue) {
  //       loginmsg.innerText = `Login succesfull`;
  //       loginmsg.style.color = "green";
  //     } else {
  //       loginmsg.innerText = `Login unsuccesfull`;
  //       loginmsg.style.color = "red";
  //     }
  //   }
  // } else {
  //   loginmsg.innerText = `Login unsuccesfull`;
  //   loginmsg.style.color = "red";
  // }
}
