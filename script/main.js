
let submit = document.getElementById(`btn-submit`);
let copy = document.getElementById(`copy`);

const date = ()=>{
    let today = new Date();
    let year = today.getFullYear();
    copy.innerHTML = `${year}`;
}

date();



const send = () =>{
    submit.addEventListener(`clikc`, ()=>{
        Swal.fire("Enviado", "Su mensaje fue enviado correctamente", "success");
    })
}

send();



let check = document.getElementById(`check`);

check.addEventListener(`click`, ()=>{
    let id = check.checked;
    console.log(check.checked);
    id ? location.href = `../es/index.html` : location.href = `../index.html`;

});


let toggle = document.getElementById(`darkMode`);

let body = document.querySelector(`body`)

toggle.addEventListener(`click`, () =>{
    toggle.classList.toggle(`active`);
    body.classList.toggle(`active`);
})

// const saveLocalStorage = () =>{
//     sessionStorage.setItem("mode", JSON.stringify(toggle));
// }

// saveLocalStorage();

// const obetenerLocalStorage = () =>{

//     if ( sessionStorage.getItem("mode") ) {
//         let mode = sessionStorage.getItem("mode");
//         console.log(mode);
//     } else{
//         console.log("no");
//     }
// }

// obetenerLocalStorage();