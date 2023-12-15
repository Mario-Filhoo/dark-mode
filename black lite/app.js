let botao = document.getElementById('botao')
let conteudo = document.getElementById('conteudo');
let login = document.getElementById('login')
let userName = document.getElementById('userName');

login.addEventListener('clik', () => {
    let usuario = prompt('Seu usuario:');
    localStorage.setItem('userName', usuario);
    username.innerHTML = usuario
})

window.addEventListener('load', () => {
    let darkMode = localStorage.getItem('darkMode');

    if (darkMode == 'ativado') {
        ativaDarkMode();
    } else {
        desativaDarkMode();
    }

    let usuario = localStorage.getItem('userName')
    userName.innerHTML = usuario
})

window.addEventListener('load' , () => {
    let darkMode = localStorage.getItem('darkMode');

    if (darkMode == 'ativado') {
        ativaDarkMode();
    } else {
        desativaDarkMode();
    }
})

botao.addEventListener('click', () => {
    let darkMode = localStorage.getItem('darkMode');
    if (darkMode == 'ativado') {
        desativaDarkMode();
    } else {
        ativaDarkMode();
    }
})

function ativaDarkMode() {
    localStorage.setItem('darkMode' , 'ativado')
    conteudo.classList.remove('white-mode');
    conteudo.classList.add('dark-mode');
}

function desativaDarkMode() {
    localStorage.setItem('darkMode' , 'desativado')
    conteudo.classList.remove('dark-mode');
    conteudo.classList.add('white-mode');
}