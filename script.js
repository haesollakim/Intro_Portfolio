$('svg text').attr('y', '70%');


setTimeout(function () {
    $('.myNameIsHaesollaKim').css({
        'height': '200px'
    });
    $('.main_section').fadeIn(1000);
}, 3000);

setTimeout(function () {
    $('body').css({
        'display': 'grid',
        'grid-template-rows': '200px 1fr'
    });
}, 5000);







// // 호버하면 돌아가는 문자
// const $FPS = 10;
// const $DURATION = 300;
// const $CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const TEXT = 'PORTFOLIO';
// const $DELAY = ~~(300 / $FPS);
// const $FRAME_COUNT = ~~($DURATION / 300) * $FPS
// const $ELEMENT = document.getElementById('text');
// let frameIndex = 0;
// let timeoutId = undefined;

// function resetText() {
//   if (timeoutId !== undefined) clearTimeout(timeoutId);
//   frameIndex = 0;
//   $ELEMENT.innerText = TEXT;
// }

// function setRandomText() {
//   const text = Array.from({length: TEXT.length}).map(() => $CHARACTERS[~~(Math.random() * $CHARACTERS.length)]);
//   $ELEMENT.innerText = text.join('');
// }

// function animate() {
//   if (frameIndex >= $FRAME_COUNT) {
//     resetText();
//   } else {
//     frameIndex += 1;
//     setRandomText();
//     timeoutId = setTimeout(animate, $DELAY);
//   }
// }

// $ELEMENT.addEventListener('mouseenter', animate);
// $ELEMENT.addEventListener('mouseout', resetText);

// resetText();

