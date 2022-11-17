const arrow = document.querySelector('.arrow')
const lenguageSelect = document.querySelector('.leng-list')

arrow.addEventListener('click', () =>{
    lenguageSelect.classList.toggle('active');
    arrow.classList.toggle('active')
    console.log(arrow)

})