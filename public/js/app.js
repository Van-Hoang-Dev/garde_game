const controlers = document.querySelectorAll(".btn-f");
const pots = document.querySelectorAll(".pot");
const cash = document.querySelector("#cash");
let images = ["public/images/f1.png", "public/images/f2.png", "public/images/f3.png"];
let temp;
let cost = 0;
let flower;
console.log(controlers);
controlers.forEach(control => {
    control.addEventListener("click", function () {
        if (control.textContent.replaceAll(" ", "") == 200) {
            temp = images[0];
            cost = 200;
        }
        else {
            if (control.textContent.replaceAll(" ", "") == 300) {
                temp = images[1];
                cost = 300;
            }
            else {
                if (control.textContent.replaceAll(" ", "") == 500) {
                    temp = images[2];
                    cost = 500;
                }
                else {
                    temp = "";
                }
            }
        }
    });

});
pots.forEach(pot => {
    pot.addEventListener("click", function () {
        flower = pot.querySelector(".flower");
        if (temp == "") {
            let kiemTra = flower.getAttribute("src");
            if (kiemTra == images[0]) {
                flower.setAttribute("src", temp);
                cash.textContent = parseInt(cash.textContent) + 200;
            }
            else {
                if (kiemTra == images[1]) {
                    flower.setAttribute("src", temp);
                    cash.textContent = parseInt(cash.textContent) + 300;
                }
                else {
                    if (kiemTra == images[2]) {
                        flower.setAttribute("src", temp);
                        cash.textContent = parseInt(cash.textContent) + 500;
                    }
                }
            }
        } else {
            for (let i = 0; i < images.length; i++) {
                if (flower.getAttribute("src") == images[i]) {
                    console.log(flower.getAttribute("src") == images[i]);
                    alert("Không thể đặt chậu hoa ở đây!");
                    return;
                }
            }
            if (parseInt(cash.textContent) - cost < 0) {
                alert("Bạn đã hết tiền, không thể thêm cây được nữa!");
                return;
            }
            else {
                cash.textContent = parseInt(cash.textContent) - cost;
                flower.setAttribute("src", temp);
            }
        }
    })
});

