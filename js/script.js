window.onload = function () {
    var imgArr = ["images/1.jpeg", "images/2.jpeg", "images/3.jpeg", "images/4.jpeg"]
    var number = 0;
    var img = document.querySelector("#banner");
    var time = document.querySelector(".time");
    setInterval(function () {
        number++;
        if (number > imgArr.length - 1) {
            number = 0
        }
        img.setAttribute("src", imgArr[number]);
    }, 2000);


    var navLi = document.querySelectorAll('.nav_list li');
    var navBox = document.querySelectorAll('.nav_list_box li');
    for (var i = 0; i < navLi.length; i++) {
        navLi[i].index = i;
        navLi[i].onmouseover = function () {
            for (var i = 0; i < navLi.length; i++) {
                navLi[i].classList.remove('active');
                navBox[i].classList.remove('active');
            }
            this.classList.add('active');
            navBox[this.index].classList.add('active');
        }
    }
}