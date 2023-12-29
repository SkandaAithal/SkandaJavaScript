function validation(e) {
  let localdata = JSON.parse(localStorage.getItem("data")) || [];
  let userName = document.getElementById("username");
  let phoneNumber = document.getElementById("phonenumber");
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  //   labels
  let one = document.getElementById("one");
  let two = document.getElementById("two");
  let three = document.getElementById("three");
  let four = document.getElementById("four");
  // values

  let userNamevalue = userName.value;
  let phoneNumbervalue = phoneNumber.value;
  let emailvalue = email.value;
  let passwordvalue = password.value;
  //   e.preventDefault();

  let userdetails = {};

  //   ^username validation
  if (userNamevalue == "") {
    one.innerText = "Invalid username";
    one.style.display = "block";
    userName.style.border = "2px solid red";
    return false;
  } else if (userNamevalue.length < 6) {
    one.innerText = "Nname should be more than 6 characters";
    one.style.display = "block";
    userName.style.border = "2px solid red";
    return false;
  } else if (userNamevalue.length > 20) {
    one.innerText = "Nname should be less than 20 characters";
    one.style.display = "block";
    userName.style.border = "2px solid red";
    return false;
  } else if (!/^[A-Za-z\s]+$/g.test(userNamevalue)) {
    one.innerText = "Username should only have alphabets";
    one.style.display = "block";
    userName.style.border = "2px solid red";
    return false;
  } else {
    one.style.display = "none";
    userdetails.name = `${userNamevalue}`;
    userName.style.border = "1px solid brown";
  }

  //^phone number validation

  if (phoneNumbervalue == "") {
    two.innerText = "Invalid Phonenumber";
    two.style.display = "block";
    phoneNumber.style.border = "2px solid red";
    return false;
  } else if (phoneNumbervalue.length < 10 || phoneNumbervalue.length > 10) {
    two.innerText = "Phonenumber should be 10 numbers";
    two.style.display = "block";
    phoneNumber.style.border = "2px solid red";
    return false;
  } else if (!/^[6-9][0-9]{9}$/.test(phoneNumbervalue)) {
    two.innerText = "Phonenumber should be only numbers";
    two.style.display = "block";
    phoneNumber.style.border = "2px solid red";
    return false;
  } else {
    two.style.display = "none";
    userdetails.phno = `${phoneNumbervalue}`;
    phoneNumber.style.border = "1px solid brown";
  }

  //   ^email
  if (emailvalue == "") {
    three.innerText = "Invalid email";
    three.style.display = "block";
    email.style.border = "2px solid red";
    return false;
  } else if (emailvalue.length < 15) {
    three.innerText = "email should have more than 15 characters";
    three.style.display = "block";
    email.style.border = "2px solid red";
    return false;
  } else if (
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      emailvalue
    )
  ) {
    three.innerText = "email format is wrong";
    three.style.display = "block";
    email.style.border = "2px solid red";
    return false;
  } else {
    three.style.display = "none";
    userdetails.email = emailvalue;
    email.style.border = "1px solid brown";
  }

  //   ^password
  if (passwordvalue == "") {
    four.innerText = "Invalid password";
    four.style.display = "block";
    password.style.border = "2px solid red";
    return false;
  } else if (passwordvalue.length < 8) {
    four.innerText = "password should be more than 8 characters";
    four.style.display = "block";
    password.style.border = "2px solid red";
    return false;
  } else if (passwordvalue.length > 15) {
    four.innerText = "password should be less than 15 characters";
    four.style.display = "block";
    password.style.border = "2px solid red";
    return false;
  } else if (!/^[A-Za-z0-9\@!#$%&*^?]+$/.test(passwordvalue)) {
    four.innerText = "password incorrect format";
    four.style.display = "block";
    password.style.border = "2px solid red";
    return false;
  } else {
    four.style.display = "none";
    userdetails.password = passwordvalue;
    password.style.border = "1px solid brown";
  }

  //   ^ Localstorage
  let count = 0;
  for (const { name, phno, email } of localdata) {
    if (
      name === userNamevalue ||
      phno === phoneNumbervalue ||
      email === emailvalue
    ) {
      count++;
      alert("data already exists");
      return false;
    }
  }
  if (count === 0) {
    localdata.push(userdetails);
    localStorage.setItem("data", JSON.stringify(localdata));
  } else {
    return false;
  }

  // if ((localStorage.getItem("data"))) {
  //   console.log("data already present");
  //   three.innerText = "email already exists";
  //   three.style.display = "block";
  //   email.style.border = "2px solid red";
  //   return false;
  // } else {
  //   three.style.display = "none";
  //   email.style.border = "1px solid brown";
  //   localStorage.setItem(emailvalue, JSON.stringify(userdetails));
  // }
}
