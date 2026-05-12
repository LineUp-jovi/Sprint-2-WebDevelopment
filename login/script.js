const usuarioCorreto = prompt("Digite o seu usuario para logar");
const senhaCorreta = prompt("Digite sua senha para logar");

function fazerLogin() {

  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;


  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    alert("Login realizado com sucesso!")
    window.location.href = "home.html";

  } else {
    alert("Usuário ou senha incorretos!")
    window.location.replace()
  }
}