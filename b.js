const clickClose = document.querySelector(".close");
const clickOpen = document.querySelector(".open");

clickClose.addEventListener('click', () =>{
    if(clickOpen.classList.contains('open')){
        clickOpen.classList.add('active');
        clickClose.classList.remove('active');
    }
});

clickOpen.addEventListener('click', () =>{
    if(clickClose.classList.contains('close')){
        clickClose.classList.add('active');
        clickOpen.classList.remove('active');
    }
})

