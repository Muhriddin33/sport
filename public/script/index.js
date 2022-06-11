const formBtn = document.querySelector(".form_btn");
const closeForm = document.querySelectorAll(".form_close");
const form = document.querySelector(".form");
const formsubmit = document.querySelector(".sunmit_form_btn");
const formClass = document.querySelector(".form_sign");
const telephone = document.querySelector(".input_telephone");
const formPassword = document.querySelector(".form_password");
const reslut = document.querySelector(".error_result");
const trueUser = document.querySelector(".true_user p");
const inpP = document.querySelector(".input_password");
const accept = document.querySelector(".password_accept");
const body = document.querySelector("body");
const parol = document.getElementById("parol");
const eye = document.getElementById("eye1");
const eyetwo = document.getElementById("eye2");

formClass.addEventListener("submit", (e) => {
  e.preventDefault();
});

formPassword.addEventListener("submit", (e) => {
  e.preventDefault();
});

accept.addEventListener("click", () => {
  users();
});

formBtn.addEventListener("click", () => {
  form.style.display = "flex";
  body.style.overflow = "hidden";
});

for (let i = 0; i < closeForm.length; i++) {
  closeForm[i].addEventListener("click", () => {
    form.style.display = "none";
    formPassword.style.display = "none";
    body.style.overflow = "auto";
  });
}

formsubmit.addEventListener("click", () => {
  users();
});

const users = async () => {
  let users = await fetch("/data/users");
  const data = await users.json();

  data.forEach((user) => {
    if (user.telephone === telephone.value) {
      form.style.display = "none";
      formPassword.style.display = "flex";
    } else if (user.telephone != telephone.value) {
      reslut.style.display = "block";
      telephone.style.borderColor = "red";
    }

    if (user.password === inpP.value) {
      formPassword.style.display = "none";
      formBtn.style.display = "none";
      trueUser.style.display = "block";
      localStorage.setItem("userPhone", user.telephone);
      location.reload();
    }
  });
};

let user = localStorage.getItem("userPhone");
function local() {
  if (user) {
    formBtn.style.display = "none";
    trueUser.innerHTML = user;
    trueUser.style.display = "block";
    console.log(user);
  } else {
    formBtn.style.display = "flex";
  }
}
// console.log(user);

local();