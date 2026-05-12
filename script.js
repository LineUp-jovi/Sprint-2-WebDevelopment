let usuarioCorreto = prompt("Digite o seu usuario para logar");
let senhaCorreta = prompt("Digite sua senha para logar");

function fazerLogin() {

  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;


  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    alert("Login realizado com sucesso!")

  } else {
    alert("Usuário ou senha incorretos!")
  }
}