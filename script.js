window.onload = function(){
var maxElements = 1010;
var colors = ['#FF324A', '#31FFA6', '#206EFF', '#FFFF99'];

// var createElements = (function() {
//   var sectionEl = document.createElement('section');
//   for (var i = 0; i < maxElements; i++) {
//     var el = document.createElement('div');
//     el.style.background = colors[anime.random(0, 3)];
//     sectionEl.appendChild(el);
//   }
//   document.body.appendChild(sectionEl);
// })();1
// var anime1 = anime({
//   targets: 'div',
//   translateX: function() { return '130em'; },
//   scale: function() { return anime.random(10, 20) / 10; },
//   delay: function() { return 400 + anime.random(0, 1000); },
//   duration: function() { return anime.random(1000, 200); },
//   direction: 'alternate',
//   loop: true
// });
  var L = anime({
    targets: '.logos .L',
    translateX: function() {return -1000},
    opacity: {
      value: 0,
      duration: 100
    },
    delay: function(t, i) { return 2200 + (i * 75) },
    duration: 400,
    direction: 'reverse',
    easing: 'easeOutExpo'
  });

  var I_1 = anime({
    targets: '.logos .I_1',
    translateY: function() {return -1000},
    opacity: {
      value: 0,
      duration: 800
    },
    delay: function(t, i) { return 2200 + (i * 140) },
    duration: 1000,
    direction: 'reverse',
    easing: 'easeOutExpo'
  });

  var I_2 = anime({
    targets: '.logos .I_2',
    translateY: function() {return -21},
    opacity: {
      value: 0,
      duration: 2000
    },
    delay: function(t, i) { return 3000 + (i * 100) },
    duration: 3000,
    direction: 'reverse',
    easing: 'easeOutExpo'
  });

  var T = anime({
    targets: '.logos .T',
    translateX: function() {return -1000},
    opacity: {
      value: 0,
      duration: 2000
    },
    delay: function(t, i) { return 3000 + (i * 100) },
    duration: 500,
    direction: 'reverse',
    rotate: {
        value: 180,
        duration: 1500,
        easing: 'easeInOutQuad'
    },
  });

  var exc_1 = anime({
    targets: '.logos .exc_1',
    translateY: function() {return 1000},
    opacity: {
      value: 0,
      duration: 2000
    },
    delay: function(t, i) { return 4500 + (i * 100) },
    duration: 500,
    direction: 'reverse',
  });

  var exc_2 = anime({
    targets: '.logos .exc_2',
    translateY: function() {return -1000},
    opacity: {
      value: 0,
      duration: 2000
    },
    delay: function(t, i) { return 4500 + (i * 100) },
    duration: 400,
    direction: 'reverse',
  });

  var text = anime({
    targets: 'text',
    opacity: {
      value: 0,
      duration: 2000
    },
    delay: function(t, i) { return 5500 + (i * 100) },
    direction: 'reverse',
  });
}

// var katakanaStripes = anime({
//   targets: '.stripes path',
//   translateX: function(target) {
//     if (target.classList.contains('stripe-right')) return -1000;
//     return -1000;
//   },
//   opacity: {
//     value: 0,
//     duration: 100
//   },
//   fill: '#FFF',
//   delay: function(t, i) { return 2200 + (i * 75) },
//   duration: 400,
//   direction: 'reverse',
//   easing: 'easeOutExpo'
// });

// var katakanaFills = anime({
//   targets: '.katakana path',
//   d: function(target) { return [target.getAttribute('data-d')] },
//   opacity: {
//     value: 0,
//     duration: 100
//   },
//   fill: '#FFF',
//   delay: function(t, i) { return 2400 + (i * 120) },
//   duration: 1200,
//   direction: 'reverse',
//   easing: 'easeOutExpo'
// });

// var textFills = anime({
//   targets: '.text-fills path',
//   opacity: 0,
//   delay: function(t, i) { return 3200 + (anime.random(0, 450)) },
//   duration: 200,
//   fill: '#FFF',
//   direction: 'reverse',
//   easing: 'easeOutExpo',
//   complete: function() {
//     anime({
//       targets: '.line',
//       opacity: 0,
//       duration: 1500
//     })
//   }
// });

// var textpaths = anime({
//   targets: '.line',
//   translateX: function(target) {
//     var x = 1200;
//     if (target.classList.contains('hori')) return anime.random(0,1) === 1 ? x : -x;
//     if (target.classList.contains('diag-right')) return x / 3;
//     if (target.classList.contains('diag-left')) return x / 3;
//   },
//   translateY: function(target) {
//     var y = 1200;
//     if (target.classList.contains('vert')) return anime.random(0,1) === 1 ? y : -y;
//     if (target.classList.contains('diag-right')) return -y / 3;
//     if (target.classList.contains('diag-left')) return y / 3;
//   },
//   scale: {
//     value: 4,
//     duration: 500,
//   },
//   stroke: '#fff',
//   opacity: {
//     value: [1, 0],
//     duration: 100,
//   },
//   delay: function(t, i) { return 0 + (i * 25) },
//   duration: 500,
//   easing: 'easeInOutQuad',
//   direction: 'reverse',
//   speed: 1
// });
