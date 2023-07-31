const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
const waitlistBtn = document.querySelector('.waitlistBtn');

const thankyouPopupBtn = document.querySelector('.thankyou-popupBtn');
const thankyouPopup = document.querySelector('.thankyou-popup');
const thankyouOverlay = document.querySelector('.thankyou-overlay');
const thankyouBtnClosePopup = document.querySelector('.thankyou-close');
const signUpForTheBeta = document.querySelector(".sign-up-for-the-beta");

waitlistBtn.addEventListener('click',(e)=>{
    overlay.classList.add('active');
    popup.classList.add('active');
})

overlay.addEventListener('click',()=>{
    overlay.classList.remove('active');
    popup.classList.remove('active');
})

signUpForTheBeta.addEventListener('click',(e)=>{
    overlay.classList.add('active');
    popup.classList.add('active');
})


const thankyouClosePopup = () => {
    thankyouPopup.classList.remove('active');
    thankyouOverlay.classList.remove('active');
}

// waitlistBtn.addEventListener('click', showPopup);
thankyouBtnClosePopup.addEventListener('click', thankyouClosePopup);
thankyouOverlay.addEventListener('click', thankyouClosePopup);





window.addEventListener("load", function () {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
            method: 'POST',
            body: data,
        })
            .then(() => {
                redirectToPage();
            })
    });
});

window.addEventListener("load", function () {
    const form = document.getElementById('my-form-2');
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
            method: 'POST',
            body: data,
        })
            .then(() => {
                redirectToPage();
            })
    });
});

function redirectToPage() {
    var url = "thankyou.html";
    window.location.href = url;
}