let usuarioCorreto = prompt("Digite o seu usuario para logar");
let senhaCorreta = prompt("Digite sua senha para logar");

function fazerLogin() {
  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;

  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    alert("Login realizado com sucesso!");
    window.open("./home.html");
  } else {
    alert("Usuário ou senha incorretos!");
  }
}

function mostrarSenha() {
  const input = document.getElementById("senha");

  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}
