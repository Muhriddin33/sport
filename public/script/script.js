const parol = document.getElementById("parol");
const parols = document.getElementById("parols");

const eye = document.getElementById("eye1");
const eyes = document.getElementById("eyes");

const eyetwo = document.getElementById("eye2");
const eyees = document.getElementById("eyees");

const gender_m = document.getElementById("gender_m");
const gender_g = document.getElementById("gender_g");

const input = document.querySelectorAll("input");

eyetwo.style.display = "none";

eye.addEventListener("click", () => {
  if (parol.type === "password") {
    parol.type = "text";
    eyetwo.style.display = "block";
    eye.style.display = "none";
    eyetwo.addEventListener("click", () => {
      if (parol.type === "text") {
        parol.type = "password";
        eye.style.display = "block";
        eyetwo.style.display = "none";
      }
    });
  }
});

eyees.style.display = "none";

eyes.addEventListener("click", () => {
  if (parols.type === "password") {
    parols.type = "text";
    eyees.style.display = "block";
    eyes.style.display = "none";
    eyees.addEventListener("click", () => {
      if (parols.type === "text") {
        parols.type = "password";
        eyes.style.display = "block";
        eyees.style.display = "none";
      }
    });
  }
});

gender_g.style.background = "white";
gender_m.style.color = "#fff";
gender_g.style.color = "#414141";

gender_m.addEventListener("click", () => {
  gender_g.style.background = "white";
  gender_m.style.background = "#70c05b";
  gender_m.style.color = "#fff";
  gender_g.style.color = "#414141";
});
gender_g.addEventListener("click", () => {
  gender_m.style.background = "white";
  gender_g.style.background = "#70c05b";
  gender_m.style.color = "#414141";
  gender_g.style.color = "white";
});


// ====================== registration open

const reg = document.getElementsByClassName('form_bottom_btn');
const form = document.getElementsByClassName('form_sign');
const registr = document.getElementsByClassName('regstration')

reg.addEventListener('click', (e)=>{
  form.style.display = 'none'
  registr.style.display = 'block'
})