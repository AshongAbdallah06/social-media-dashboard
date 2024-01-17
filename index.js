let changeModeBtn = document.querySelector('.mode-button');
let slider = document.querySelector('.slider-right');
let overviewHeading = document.querySelector('.overview-heading');
let allContrainers = document.querySelectorAll('.container');


let bgIsWhite;
changeModeBtn.addEventListener('click', () => {
    if (!bgIsWhite) {
        bgIsWhite = true;

        document.body.classList.add('changed-body');
        allContrainers.forEach((container) => {
            container.classList.add('changed-containers');
        }) 

        overviewHeading.classList.add('changed-heading');

        changeModeBtn.classList.add('dark-mode');

        slider.classList.add('slider-left');
        slider.classList.remove('remove-slider-left');

    } else {
        bgIsWhite = false

        allContrainers.forEach((container) => {
            container.classList.remove('changed-containers');
        }) 
        document.body.classList.remove('changed-body');

        overviewHeading.classList.remove('changed-heading');

        changeModeBtn.classList.remove('dark-mode');

        slider.classList.add('remove-slider-left');
        slider.classList.remove('slider-left');


        // alert(bgIsWhite)
    }
})