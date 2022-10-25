// hamburger menu toggle
const btnHamburger = document.querySelector('#btnHamburger');
const mobileMenu = document.querySelector('.mobile-nav');
btnHamburger.addEventListener('click', function(){
    if(btnHamburger.classList.contains('open')) {
        btnHamburger.classList.remove('open');
       
    } else {
        btnHamburger.classList.add('open');
    };
    btnHamburger.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
})


// main section animation
document.addEventListener('DOMContentLoaded', function(event) {
    var dataText = ["Hi, This is", "Shan Li.", "She / her.", "A Web Developer.", ];

    function typewriter(text, i, fnCallback) {
        if (i < (text.length)) {
            document.querySelector(".type").innerHTML = 
            text.substring(0, i+1) + '<span aria-hidden = "true></span>';

            setTimeout(function() {
                typewriter(text, i + 1, fnCallback)
            }, 100);
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 500);
        }
    }

    function StartTextAnimation(i) {
        if(typeof dataText[i] === 'undefined') {
            setTimeout(function() {
                StartTextAnimation(0);
            }, 20000);
        }
        if (i < dataText[i].length) {
            typewriter(dataText[i], 0, function() {
                StartTextAnimation(i + 1);
            });
        }
    }
    StartTextAnimation(0);
});


// back to top button
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
