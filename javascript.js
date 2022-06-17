document.getElementById("form-login").addEventListener("submit", (event) => {
    let form = document.getElementById("form-login");
    let notification = document.getElementById("form-not")
    let login = document.getElementById("userid_");
    let pass = document.getElementById("pass_");
    let mensagem="";
    if(login.value == "") {
        mensagem += "<p>O campo <b>Id de usuário</b> não pode estar vazio!</p>";
    }
    else if(login.value.length < 5) {
        mensagem += "<p>O <b>Id de usuário</b> precisa ter 5 caracteres ou mais!</p>";
    }
    if(pass.value == "") {
        mensagem += "<p>O campo <b>Senha</b> não pode estar vazio!</p>";
    }
    else if(pass.value.length < 8) {
        mensagem += "<p>A <b>Senha</b> precisa ter 8 caracteres ou mais!</p>";
    }
    if(mensagem) {
        (notification.classList.contains("not-success")) ? notification.classList.toggle("not-success") : null;
        (notification.classList.contains("not-error")) ? null : notification.classList.add("not-error");
        notification.innerHTML = mensagem;
        notification.style.opacity = "1";
    }
    else {
        (notification.classList.contains("not-error")) ? notification.classList.toggle("not-error") : null;
        (notification.classList.contains("not-success")) ? null : notification.classList.add("not-success");
        notification.innerHTML = "<p>Ocorreu tudo bem!</p>";
    }
    event.preventDefault();
});

document.getElementById("sp_").addEventListener("click", () => {
    let pass = document.getElementById("pass_");
    let status = (pass.getAttribute("type") == "password") ? true : false;
    if(status) {
        pass.setAttribute("type", "text");
    }
    else {
        pass.setAttribute("type", "password");
    }
});