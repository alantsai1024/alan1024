/* 
    網頁設計:個人網站
    作者:蔡宇倫
    v1.00 2022.12.03 
*/
window.onload = function () {
    var words = ['我來自南崁高中'],
        part,
        i = 0,
        offset = 0,
        len = words.length,
        forwards = true,
        skip_count = 0,
        skip_delay = 15,
        speed = 100;
    var wordflick = function () {
        setInterval(function () {
            if (forwards) {
                if (offset >= words[i].length) {
                    ++skip_count;
                    if (skip_count == skip_delay) {
                        forwards = false;
                        skip_count = 0;
                    }
                }
            }
            else {
                if (offset == 0) {
                    forwards = true;
                    i++;
                    offset = 0;
                    if (i >= len) {
                        i = 0;
                    }
                }
            }
            part = words[i].substr(0, offset);
            if (skip_count == 0) {
                if (forwards) {
                    offset++;
                }
                else {
                    offset--;
                }
            }
            $('.word').text(part);
        }, speed);
    };

    $(document).ready(function () {
        wordflick();
    });


    /*===================切換頁面========================== */
    var my = document.getElementById("my");
    var interest = document.getElementById("interest");
    var introduce = document.getElementById("introduce");
    var about = document.getElementById("about");
    var skill = document.getElementById("skill");

    var content = document.getElementById("content");
    var content2 = document.getElementById("content2");
    var content3 = document.getElementById("content3");
    var content4 = document.getElementById("content4");
    var content5 = document.getElementById("content5");

    my.addEventListener("click", function () {
        content.style.opacity = 1;
        content.style.transition = "1s";
        content2.style.opacity = 0;
        content3.style.opacity = 0;
        content4.style.opacity = 0;
        content5.style.opacity = 0;
        content3.style.zIndex= -1;
    })

    interest.addEventListener("click", function () {
        content.style.opacity = 0;
        content2.style.opacity = 1;
        content2.style.transition = "1s";
        content3.style.opacity = 0;
        content4.style.opacity = 0;
        content5.style.opacity = 0;
        content3.style.zIndex= -1;
    })

    introduce.addEventListener("click", function () {
        content.style.opacity = 0;
        content2.style.opacity = 0;
        content3.style.opacity = 1;
        content3.style.transition = "1s";
        content4.style.opacity = 0;
        content5.style.opacity = 0;
        content3.style.zIndex= 99;
    })

    about.addEventListener("click", function () {
        content.style.opacity = 0;
        content2.style.opacity = 0;
        content3.style.opacity = 0;
        content4.style.opacity = 1;
        content4.style.transition = "1s";
        content5.style.opacity = 0;
        content3.style.zIndex= -1;
    })

    skill.addEventListener("click", function () {
        content.style.opacity = 0;
        content2.style.opacity = 0;
        content3.style.opacity = 0;
        content4.style.opacity = 0;
        content5.style.opacity = 1;
        content5.style.transition = "1s";
        content5.style.background='#222';
        content3.style.zIndex= -1;
       
    })

    var name3 = document.getElementById("name3");
        name3.addEventListener("click", function () {
            window.location.href = "https://alantsai1024.github.io/";
    })
}