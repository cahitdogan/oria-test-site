// Optimized JavaScript code
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.overlay');
    const popup = document.querySelector('.popup');
    const waitlistBtn = document.querySelector('.waitlistBtn');
    const thankyouPopupBtn = document.querySelector('.thankyou-popupBtn');
    const thankyouPopup = document.querySelector('.thankyou-popup');
    const thankyouOverlay = document.querySelector('.thankyou-overlay');
    const thankyouBtnClosePopup = document.querySelector('.thankyou-close');
    const signUpForTheBeta = document.querySelector(".sign-up-for-the-beta");

    const showPopup = () => {
        overlay.classList.add('active');
        popup.classList.add('active');
    };

    const hidePopup = () => {
        overlay.classList.remove('active');
        popup.classList.remove('active');
    };

    const thankyouClosePopup = () => {
        thankyouPopup.classList.remove('active');
        thankyouOverlay.classList.remove('active');
    };

    // Event delegation for waitlist and signup buttons
    document.addEventListener('click', (e) => {
        if (e.target === waitlistBtn || e.target === signUpForTheBeta) {
            showPopup();
        } else if (e.target === overlay || e.target === thankyouOverlay) {
            hidePopup();
            thankyouClosePopup();
        } else if (e.target === thankyouBtnClosePopup || e.target === thankyouPopupBtn) {
            thankyouClosePopup();
        }
    });
});






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