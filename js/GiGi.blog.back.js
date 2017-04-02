/*
 *
 * Author: Austin Jiang;  // ab12ab12@outlook.com
 * Date: 2017/03/31;
 * Project: China's Price Project;  // zhangguocpp.163.com
 *
 */


/*launch highlight.js*/
hljs.initHighlightingOnLoad();


//particles
particlesJS.load('particles-js', 'https://austinjiangh.github.io/GiGi/js/particles.json', function() {
    console.log('callback - particles.js config loaded');
});


////mobile menu
var bars = document.querySelector('.bars');
var cross = document.querySelector('.cross');
var mobileMenu = document.querySelector('.mobile-menu');
bars.addEventListener('click', function () {
    classie.remove(mobileMenu, 'slide-out');
    classie.add(mobileMenu, 'slide-in');
});
cross.addEventListener('click', function () {
    classie.remove(mobileMenu, 'slide-in');
    classie.add(mobileMenu, 'slide-out');
});
