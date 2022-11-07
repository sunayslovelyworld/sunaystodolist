const addSign = document.querySelector(".add-sign");
addSign.addEventListener("click", () => {
    input.style.display = "block";
});
const text = document.querySelector(".text");
const input = document.querySelector(".input");
const span = document.querySelectorAll("span");
const ul = document.querySelector("ul");
function process() {
    if (input.value == "" || input.value == " ") {
        alert("Please add something...");
        input.style.display = "none";
    } else {
        input.style.display = "none";
        const li = document.createElement("li");
        li.innerText = input.value;
        let span = document.createElement("span");
        let img = document.createElement("img");
        img.setAttribute("src", "./assets/img/delete.png");
        img.setAttribute("class", "remove");
        li.style.listStyleType = "none";
        span.append(img);
        li.append(span);
        ul.append(li);
        input.value = "";
    };
};
text.addEventListener("click", process);
const myList = document.getElementById("myList");
myList.addEventListener("mouseover", (e) => {
    if (e.target.tagName = "img") {
        e.target.src = "./assets/img/deleteblue.png";
    };
});
myList.addEventListener("mouseout", (e) => {
    if (e.target.tagName = "img") {
        e.target.src = "./assets/img/delete.png";
    };
});
// Delete
myList.addEventListener("click", (e) => {
    if (e.target.tagName = "img") {
        e.target.parentElement.parentElement.remove();
    };
});
// Sort
const photo = document.querySelector(".image1");
photo.addEventListener("click", () => {
    photo.style.display = "none";
    photo1.style.display = "block";
    let arr = [];
    const info = [...myList?.children];
    info.forEach(item => {
        arr.push(item.innerHTML);
    });
    arr.sort();
    myList.innerHTML = "";
    arr.forEach(item => {
        let liS = `<li>${item}</li>`;
        myList.innerHTML += liS;
    });
});
photo.addEventListener("mouseover", () => {
    photo.src = "./assets/img/dark1.png";
});
photo.addEventListener("mouseout", () => {
    photo.src = "./assets/img/gray1.png";
});
const photo1 = document.querySelector(".image2");
image2.addEventListener("click", () => {
    photo1.style.display = "none";
    photo.style.display = "block";
    let arr = [];
    const info = [...myList?.children];
    info.forEach(item => {
        arr.push(item.innerHTML);
    });
    arr.sort();
    arr.reverse();
    myList.innerHTML = "";
    arr.forEach(item => {
        let liS = `<li>${item}</li>`;
        myList.innerHTML += liS;
    });
});
photo1.addEventListener("mouseover", () => {
    photo1.src = "./assets/img/dark2.png";
});
photo1.addEventListener("mouseout", () => {
    photo1.src = "./assets/img/gray2.png";
});
