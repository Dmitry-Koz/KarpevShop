const arrow = document.querySelector('.arrow');
const lenguageSelect = document.querySelector('.leng-list');

arrow.addEventListener('click', () =>{
    lenguageSelect.classList.toggle('active');
    arrow.classList.toggle('active');
    console.log(arrow);

});

const buttonSingin = document.querySelector('.btn-sin');
const windAuth = document.querySelector('.wrap-in');
const windReg = document.querySelector('.reg-wind');
const windSin = document.querySelector('.sin-wind');
const body = document.querySelector('body');
const btnExit = document.querySelectorAll('.exit');
const btnReg = document.querySelector('.reg');
const btnin = document.querySelector('.regin');

btnReg.addEventListener('click', () => {
    windReg.classList.remove('disabled');
    windSin.classList.add('disabled');
});

btnin.addEventListener('click', () => {
    windSin.classList.remove('disabled');
    windReg.classList.add('disabled');
});
console.log(buttonSingin)
buttonSingin.addEventListener('click', () => {
    windAuth.classList.remove('disabled');
});
// for (let i = 0; i<buttonSingin.length; i++) {
//     console.log(buttonSingin[i])
//     buttonSingin[i].addEventListener('click', () => {
//         windAuth.classList.remove('disabled');
//     });
// };

const stok = () => {
    windAuth.classList.add('disabled');
    windSin.classList.remove('disabled');
    windReg.classList.remove('disabled');
    windReg.classList.add('disabled');
};

for (let i = 0; i<btnExit.length; i++) {
    btnExit[i].addEventListener('click', stok);
};

document.querySelector('#more').addEventListener('click', () =>{
    document.querySelector('.mobile').classList.toggle('active')
})

document.querySelector('#chat').addEventListener('click', () =>{
    document.querySelector('.mobile-chat').classList.toggle('active')
})


// btnExit.addEventListener('click', stok);