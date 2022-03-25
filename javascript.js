document.getElementById("form-login").addEventListener("submit", (event) => {
    let login = document.getElementById("userid_");
    let pass = document.getElementById("pass_");
    let mensagem="";
    if(login.value == "") {
        mensagem += "O campo Id de usuário não pode estar vazio!\n";
    }
    else if(login.value.length < 5) {
        mensagem += "O Id de usuário precisa ter 5 caracteres ou mais!\n";
    }
    if(pass.value == "") {
        mensagem += "O campo Senha não pode estar vazio!\n";
    }
    else if(pass.value.length < 8) {
        mensagem += "A Senha precisa ter 8 caracteres ou mais!\n";
    }
    if(mensagem) {
        event.preventDefault();
        alert(mensagem);
    }
});