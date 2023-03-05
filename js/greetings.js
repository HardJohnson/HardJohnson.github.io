const loginForm = document.querySelector("#login-form");
const id = document.querySelector("#login-form #id");
const password = document.querySelector("#login-form #password");
const submit = document.querySelector('#login-form #submit');
const footer = document.querySelector('#left_footer');
const lifeQuotes = document.querySelector('#header span');

const HIDDEN_CLASSNAME = "hidden";
const USERID_KEY = "userid";
const USERPASSWORD_KEY = "userpassword";

function onLoginSubmit(event) {
  event.preventDefault(); //브라우저의 기본 동작을 멈춤

  const userId = id.value;
  const userPassword = password.value;

  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERID_KEY, userId);
  localStorage.setItem(USERPASSWORD_KEY, userPassword);
  footer.classList.remove(HIDDEN_CLASSNAME);
  lifeQuotes.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserId = localStorage.getItem(USERID_KEY);
const savedUserPassword = localStorage.getItem(USERPASSWORD_KEY);

if (savedUserId === null && savedUserPassword === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  footer.classList.remove(HIDDEN_CLASSNAME);
  lifeQuotes.classList.remove(HIDDEN_CLASSNAME);
}