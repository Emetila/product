function imgSlider(anything){
    document.querySelector('.African_Print_Tops___Grass-Fields__1_-removebg-preview.png').src = anything;
}

const wrapper = document.querySelector ('wrapper')
const loginLink = document.querySelector ('register-link')
const registerLink = document.querySelector ('login-link')
const btnSignup = document.querySelector ('btn')


register-link.addEventlistener('click', ()=> {
    wrapper.classList.add('active');
});

login-link.addEventlistener('click', ()=> {
    wrapper.classList.remove('active');
});

btnSignup.addEventlistener('click', ()=> {
    wrapper.classList.remove('active popup');
});