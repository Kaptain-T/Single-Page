const company = document.querySelector("#company");
const sublist2 = document.querySelector("#sublist2");
const features = document.querySelector("#features");
const sublist1 = document.querySelector("#sublist1");
const body = document.querySelector("#body");

const mobileCompany = document.querySelector("#mobileCompany");
const mobileSublist2 = document.querySelector("#mobileSublist2");
const mobileFeatures = document.querySelector("#mobileFeatures");
const mobileSublist1 = document.querySelector("#mobileSublist1");

const hamburger = document.querySelector('#hamburger')
const arrow = document.querySelector('.arrow')
const arrowTwo = document.querySelector('.arrow2')
const mobileToggle = document.querySelector("#mobileToggle")
const mobileNav = document.querySelector("#mobileNav")

company.onmouseover = function() {mouseOver()};
company.onmouseout = function() {mouseOut()};
function mouseOver() {
    sublist2.classList.remove('hidden')   
}
function mouseOut() {
    sublist2.classList.add('hidden')
}
// company.addEventListener("click", function(){
//     if (sublist2.classList.contains('hidden')) {
//         sublist2.classList.remove('hidden')
//         arrowTwo.setAttribute('src', '/images/icon-arrow-up.svg')
        
//     } else {
//         sublist2.classList.add('hidden')
//         arrowTwo.setAttribute('src', '/images/icon-arrow-down.svg')
        
//     }
// })
mobileCompany.addEventListener("click", function(){
    if (mobileSublist2.classList.contains('hidden')) {
        mobileSublist2.classList.remove('hidden')
        arrowTwo.setAttribute('src', 'images/icon-arrow-up.svg')
        
    } else {
        mobileSublist2.classList.add('hidden')
        arrowTwo.setAttribute('src', 'images/icon-arrow-down.svg')
        
    }
})
features.onmouseover = function() {mouseOverFeatures()};
features.onmouseout = function() {mouseOutFeatures()};
function mouseOverFeatures() {
    sublist1.classList.remove('hidden')   
}
function mouseOutFeatures() {
    sublist1.classList.add('hidden')
}
// features.addEventListener("click", function(){
//     if (sublist1.classList.contains('hidden')) {
//         sublist1.classList.remove('hidden')
//         arrow.setAttribute('src', '/images/icon-arrow-up.svg')
//     } else {
//         sublist1.classList.add('hidden')
//         arrow.setAttribute('src', '/images/icon-arrow-down.svg')
//     }
// })
mobileFeatures.addEventListener("click", function(){
    if (mobileSublist1.classList.contains('hidden')) {
        mobileSublist1.classList.remove('hidden')
        arrow.setAttribute('src', 'images/icon-arrow-up.svg')
    } else {
        mobileSublist1.classList.add('hidden')
        arrow.setAttribute('src', 'images/icon-arrow-down.svg')
    }
})

mobileToggle.addEventListener("click", function(){
    if (mobileNav.classList.contains('hidden')) {
        mobileNav.classList.remove('hidden')
    } else {
        mobileNav.classList.add('hidden')
    }
})
hamburger.addEventListener("click", function(){
    if (mobileNav.classList.contains('hidden')) {
        mobileNav.classList.remove('hidden');
        mobileSublist1.classList.add('hidden')
        mobileSublist2.classList.add('hidden')
    } else {
        mobileNav.classList.add('hidden')
    }
})

