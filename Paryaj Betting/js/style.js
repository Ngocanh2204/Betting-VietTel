// OPEN - CLOSE MENU
function menu() {
    document.getElementById("menu").classList.add('active');
    document.getElementsByClassName("close_menu")[0].classList.add('active');
}
function closeMenu() {
    document.getElementById("menu").classList.remove('active');
    document.getElementsByClassName("close_menu")[0].classList.remove('active');
}



// OPEN - CLOSE METHOD
function openMethod() {
    document.getElementById("list-method").classList.add('active');
    document.getElementsByClassName("close-method")[0].classList.add('active');
}
function closeMethod() {
    document.getElementById("list-method").classList.remove('active');
    document.getElementsByClassName("close-method")[0].classList.remove('active');
}

// document.addEventListener('DOMContentLoaded', function() {
//     var myModal = new bootstrap.Modal(document.getElementById('adModal'));
//     myModal.show();
// });
//
// document.addEventListener('DOMContentLoaded', function() {
//     var myModal = new bootstrap.Modal(document.getElementById('Notification'));
//     myModal.show();
// });




// OPEN - CLOSE SIGNIN
function openSignIn() {
    document.getElementById("popup-LogIn").classList.add('active');
    document.getElementsByClassName("close_signIn")[0].classList.add('active');
}
function closeLogIn() {
    document.getElementById("popup-LogIn").classList.remove('active');
    document.getElementsByClassName("close_signIn")[0].classList.remove('active');
}



new Swiper(".popupSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

new Swiper(".notificationSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


new Swiper(".swiperBanner", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

document.addEventListener("DOMContentLoaded", function() {
    var paragraphs = document.querySelectorAll(".textDown");

    paragraphs.forEach(function(paragraph) {
        var text = paragraph.textContent.trim();
        var words = text.split(" ");

        if (words.length > 2) {
            var firstTwoWords = words.slice(0, 2).join(" ");
            var remainingText = words.slice(2).join(" ");
            paragraph.innerHTML = `<span class="first-two-words">${firstTwoWords}</span> ${remainingText}`;
        }
    });
});