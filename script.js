// SVG 텍스트의 y축 속성값 설정
$("svg text").attr("y", "70%");

// 3초 후에 실행
setTimeout(function () {
    $(".myNameIsHaesollaKim").css({
        height: "200px",
    });
    $(".intro_section").fadeIn(1000);
}, 3000);

// 5초 후에 실행
setTimeout(function () {
    $("body").css({
        display: "grid",
        "grid-template-rows": "200px 1fr",
    });
}, 5000);
