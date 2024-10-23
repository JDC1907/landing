let ready = () => {
    console.log('DOM está listo')
    // debugger
}

let loaded = () => {

    let myform = document.getElementById('form');
    myform.addEventListener('submit', (eventSubmit) => { //colbag
        eventSubmit.preventDefault();

        var emailElement = document.querySelector('.form-control-lg');
        var emailText = emailElement.value;

        if (emailText.length === 0) {
            emailElement.focus()
        }

        emailElement.animate(
            [
                { transform: "translateX(0)" },
                { transform: "translateX(50px)" },
                { transform: "translateX(-50px)" },
                { transform: "translateX(0)" }
            ],
            {
                duration: 400,
                easing: "linear",
            }
        )
        //debugger; //Punto de interrupcion
    })
    //debugger;
    // debugger
    // console.log('Iframes e Images cargadas')
}

window.addEventListener("DOMContentLoaded", ready);
window.addEventListener("load", loaded)
