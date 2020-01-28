let count_val = 0;
const slides = document.getElementsByClassName("slider__item");
$(slides[count_val]).fadeIn(0);
const slide = function (count) {
    $(slides[count_val]).fadeOut(500, () => {
        count_val = count_val + count;
        if (count_val < 0) {
            count_val = slides.length - 1;
        } else if (count_val > slides.length - 1) {
            count_val = 0;
        }
        $(slides[count_val]).fadeIn(500);
    });
}

function toggle_menu() {
    $('#main-menu').slideToggle(400);
    $('#main-menu').css({
        'overflow': 'inherit'
    });
    $('.angle').css({
        "transform": "rotate(270deg)"
    });
}

function show_inner(elem) {
    let list = elem.parentNode.children;
    let angle = elem.children;
    $(list[1]).slideToggle(400);
    let angle_position = angle[0].getAttribute('position');
    if (angle_position == 0) {
        $(angle[0]).css({
            "transform": "rotate(360deg)"
        });
        angle[0].setAttribute('position', '1');
    } else if (angle_position == 1) {
        $(angle[0]).css({
            "transform": "rotate(270deg)"
        });
        angle[0].setAttribute('position', '0');
    }
}