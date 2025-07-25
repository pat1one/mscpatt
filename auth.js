
function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (user === "admin" && pass === "1234") {
    document.getElementById('login-status').textContent = "Успешный вход!";
  } else {
    document.getElementById('login-status').textContent = "Неверный логин или пароль.";
  }
  return false;
}
