let header = document.querySelector('.header');
let site = document.querySelector('.site');
let siteInfo = document.querySelector('.site-info');
let cta = document.querySelector('.cta');

let imageContainer = document.querySelector('.image-container');
let imageOverlay = document.querySelector('.image-container').children[1];
let mainImage = document.querySelector('.image-container').children[2];

let links = Array.from(document.querySelectorAll('.link'));


const animate = () => {
    setTimeout(() => {
        imageOverlay.style.animation = 'slide 1s forwards';
        mainImage.style.animation = 'slide-perm 1s forwards';

    }, 1000)

    setTimeout(() => {
        site.classList.add('active');
        siteInfo.classList.add('active');
        cta.classList.add('active');
        imageContainer.style.background = '#20130f';
    }, 2000)

    setTimeout(() => {
        header.classList.add('active');
    }, 2500);

    links.forEach((link, idx) => {
        setTimeout(() => {
            link.classList.add('active');
        }, (idx * 200) + 2000);
    })
}

animate();


let visionaryNugget = document.querySelector('.visionary-nugget');
let visionaryNuggerArr = ["Your existence is proof of the solution you are to the world. Don't trade your miracle because of unbelief","It doesn't have to be popular to be possible; it only needs to be imagined!", "The beginning, destination, journey and reward of our christian experience is CHRIST"];
visionaryNugget.innerHTML = visionaryNuggerArr[0]

// const slideshow = () => {
//     let i = 0;
//     while (i < visionaryNuggerArr.length) {
//         visionaryNugget.innerHTML = visionaryNuggerArr[i]
//         i++;
//         if (i == visionaryNuggerArr.length) {
//             i = 0;
//         }
//     };

//     setTimeout(slideshow, 5000);
// };

// slideshow()