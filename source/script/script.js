const arrow = document.querySelector('.arrow');
const lenguageSelect = document.querySelector('.leng-list');

arrow.addEventListener('click', () =>{
    lenguageSelect.classList.toggle('active-len');
    arrow.classList.toggle('active');
    console.log(arrow);

});

const buttonSingin = document.querySelector('.btn-sin');
const windAuth = document.querySelector('.wrap-in');
const windReg = document.querySelector('.reg-wind');
const windSin = document.querySelector('.sin-wind');
const body = document.querySelector('body');
const btnExit = document.querySelectorAll('.exit');
const fstBtnReg = document.querySelector('.fstreg');
const twoBtnReg = document.querySelector('.reg');
const btnin = document.querySelector('.regin');

// console.log(btnReg);

fstBtnReg.addEventListener('click', () => {
    ifRemove('disabled', windAuth);
    ifRemove('disabled', windReg);
    ifAdd('disabled', windSin)
});

twoBtnReg.addEventListener('click', () => {
    ifRemove('disabled', windAuth);
    ifRemove('disabled', windReg);
    ifAdd('disabled', windSin)
});

btnin.addEventListener('click', () => {
    windSin.classList.remove('disabled');
    windReg.classList.add('disabled');
});

buttonSingin.addEventListener('click', () => {
    ifRemove('disabled', windAuth);
    ifRemove('disabled', windReg);
});
// for (let i = 0; i<buttonSingin.length; i++) {
//     console.log(buttonSingin[i])
//     buttonSingin[i].addEventListener('click', () => {
//         windAuth.classList.remove('disabled');
//     });
// };

const stok = () => {
    ifAdd('disabled', windAuth);
    ifAdd('disabled', windSin);
    ifAdd('disabled', windReg);
    // windAuth.classList.add('disabled');
    // windSin.classList.remove('disabled');
    // windReg.classList.remove('disabled');
    // windReg.classList.add('disabled');
};

const ifAdd = (className, el) => {
    if (!el.classList.contains(className)){
        el.classList.add(className);
    }
}
const ifRemove = (className, el) => {
    if (el.classList.contains(className)){
        el.classList.remove(className);
    }
}

for (let i = 0; i<btnExit.length; i++) {
    btnExit[i].addEventListener('click', stok);
};

document.querySelector('#more').addEventListener('click', () =>{
    document.querySelector('.mobile').classList.toggle('active')
})

document.querySelector('#chat').addEventListener('click', () =>{
    document.querySelector('.mobile-chat').classList.toggle('active');
    document.querySelector('.chat-wrap').classList.toggle('active')
});

const col = document.querySelector('#two').style.width = 0;
const moreElem = document.querySelector('.btn-more');

let open = false;
const chatWidth = document.querySelector('.chat-top').getBoundingClientRect().width;
moreElem.addEventListener('click', () => {
    let elWidth = document.querySelector('#width').getBoundingClientRect().width;
    
    if (open){
        document.querySelector('#two').style.width = 0;
        document.querySelector('.chat-top').style.width = `${chatWidth}px`
        open = false;
    }else{
        document.querySelector('#two').style.width = `${elWidth}px`;
        document.querySelector('.chat-top').style.width = `${elWidth}px`
        open = true;
    }
    console.log(elWidth)
});

// btnExit.addEventListener('click', stok);