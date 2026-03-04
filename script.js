document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const button = document.querySelector('.cta-button');
    const originalText = button.innerHTML;
    
    // Feedback visual de carga
    button.innerHTML = '<span>PROCESANDO...</span>';
    button.style.opacity = '0.7';
    button.disabled = true;

    setTimeout(() => {
        alert('¡Registro exitoso! Bienvenido al Lab.');
        button.innerHTML = originalText;
        button.style.opacity = '1';
        button.disabled = false;
    }, 2000);
});

// Validación visual rápida
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value !== "") {
            input.style.borderBottomColor = "rgba(79, 172, 254, 0.5)";
        }
    });
});


const container = document.getElementById('auth-container');
const btnToLogin = document.getElementById('to-login');
const btnToSignup = document.getElementById('to-signup');

// Cambiar a Login
btnToLogin.addEventListener('click', () => {
    container.classList.remove('show-signup');
    container.classList.add('show-login');
});

// Cambiar a Sign Up
btnToSignup.addEventListener('click', () => {
    container.classList.remove('show-login');
    container.classList.add('show-signup');
});

// Prevenir envíos de formulario para el demo
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => e.preventDefault());
});



const openCode = document.getElementById('openCode');
const closeCode = document.getElementById('closeCode');
const codeWrapper = document.getElementById('codeWrapper');
const codeDisplay = document.getElementById('codeDisplay');

const htmlCode = document.documentElement.outerHTML;

async function getCSS() {
    const response = await fetch("style.css");
    return await response.text();
}

async function getJS() {
    const response = await fetch("script.js");
    return await response.text();
}

openCode.addEventListener('click', () => {
    codeWrapper.style.display = "flex";
});

closeCode.addEventListener('click', () => {
    codeWrapper.style.display = "none";
});

const buttons = document.querySelectorAll(".code-tabs button");

buttons.forEach(button => {
    button.addEventListener("click", async () => {

        const type = button.dataset.code;

        if (type === "html") {
            codeDisplay.textContent = document.documentElement.outerHTML;
        }

        if (type === "css") {
            const response = await fetch("style.css");
            const css = await response.text();
            codeDisplay.textContent = css;
        }

        if (type === "js") {
            const response = await fetch("script.js");
            const js = await response.text();
            codeDisplay.textContent = js;
        }

    });
});