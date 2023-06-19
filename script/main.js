let leftBox = document.querySelector("#left")
let rightBox = document.querySelector("#right")

let lists = document.querySelectorAll(".list")
let selected = null;
let selected2 = null;

for (let el of lists) {
    el.addEventListener("dragstart", (e) => {
        selected = e.target;
        selected2 = e.target.id;
    })
    rightBox.addEventListener("dragover", (e) => {
        e.preventDefault();

        //함수
        startEffect(selected2)
    })
    rightBox.addEventListener("drop", function () {
        rightBox.prepend(selected)
    })
    leftBox.addEventListener("dragover", (e) => {
        e.preventDefault();
    })
    leftBox.addEventListener("drop", () => {
        leftBox.prepend(selected);
        //함수
        finishEffect(selected2)
    })
}

let str;

function startEffect(id) {
    str = id.substr(4, 1);
    //substr = 짜르는 메소드  (4,1) 인덱스 4에서 부터 하나만 짜른다는 의미

    let pages = document.querySelector(".page" + str)
    pages.style.transform = "scale(1)";

    let wrapDiv = document.querySelectorAll(".wrap div");
    for (let i = 0; i < wrapDiv.length; i++) {
        if (wrapDiv[i].contains(pages)) {
            wrapDiv[i].classList.add("on")
        } else {
            wrapDiv[i].classList.remove("on")
        }
    }
}

function finishEffect(id) {
    str = id.substr(4, 1);
    let pages = document.querySelector(".page" + str)
    pages.style.transform = "scale(0)";
}