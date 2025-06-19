function login() {
  const user = document.getElementById('user').value.trim()
  const pass = document.getElementById('pass').value.trim()
  const error = document.getElementById('errorMsg')

  if (user === 'Pabloadm' && pass === 'h123') {
    window.location.href = 'dashboard.html'
  } else {
    error.textContent = 'Usuário ou senha incorretos.'
  }
}
