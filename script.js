const slides = document.querySelector('.slides');
const nxt = document.querySelector('.nxt');
const prev = document.querySelector('.prev');
const slide = document.querySelector('.pic');
const pict = ['div0.jpg', 'div1.jpg', 'div2.jpg', 'div3.jpg'];
let index = 0;

nxt.onclick = function (e) {
    e.preventDefault();
    if (index == pict.length - 1) {
        index = -1;
    }

    index = index + 1;
    slide.src = "images/" + pict[index];
    console.log(slide.src);
};

prev.onclick = function (e) {
    e.preventDefault();
    if (index == 0) {
        index = pict.length;
    }

    index = index - 1;
    slide.src = "images/" + pict[index];
    console.log(slide.src);
}
