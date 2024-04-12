function decreasePrice() {
    var priceInput = document.getElementById("price");
    var currentPrice = parseFloat(priceInput.value);
    var newPrice = currentPrice - 1;
    if (newPrice < 0) {
        newPrice = 0;
    }
    if (newPrice % 1 === 0) {
        priceInput.value = newPrice.toFixed(0);
    } else {
        priceInput.value = newPrice.toFixed(2);
    }
}

function increasePrice() {
    var priceInput = document.getElementById("price");
    var currentPrice = parseFloat(priceInput.value);
    var newPrice = currentPrice + 1; // Tăng giá 10 đơn vị, bạn có thể thay đổi giá trị này
    priceInput.value = newPrice.toFixed(2); // Giữ chỉ hai số sau dấu thập phân
}
//swiper
new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});

new Swiper(".entertainmentSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
});

new Swiper(".mySwiper1", {
    freeMode: true,
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
    breakpoints: {
        // Thiết lập cho màn hình nhỏ hơn 768px
        300: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        // Thiết lập cho màn hình từ 768px trở lên
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    }
});

function menuMobile() {
    document.getElementById("mobileMenu").classList.add('active');
    document.getElementsByClassName("opacity_menu")[0].classList.add('active');
}
function closeMobile() {
    document.getElementById("mobileMenu").classList.remove('active');
    document.getElementsByClassName("opacity_menu")[0].classList.remove('active');
}

function calculateTotal() {
    var quantity = parseFloat(document.getElementById('quantity').value);
    var price = parseFloat(document.getElementById('price').value);
    var total = quantity * price;
    document.getElementById('total').value = total.toFixed(2); // Giữ 2 chữ số thập phân
}