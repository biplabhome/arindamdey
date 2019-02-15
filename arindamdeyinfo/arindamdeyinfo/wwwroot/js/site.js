$(function () {
    carousel3d();
    calculateExperience();

});
function calculateExperience() {

    //in js date start from 0 so august is 7 not 8
    var careerStartDate = new Date(2010, 9);
    var scrumCareerStartDate = new Date(2010, 9);
    var agileCoachCareerStartDate = new Date(2018, 6);
    var techArchCareerStartDate = new Date(2013, 3);
    var scrumCareerGap = 3 * 365;//in days

    var totalexperience = dateDiff(careerStartDate);
    var scrumExperience = dateDiff(scrumCareerStartDate, scrumCareerGap);
    var agileCoacgExperience = dateDiff(agileCoachCareerStartDate);
    var techArchExperience = dateDiff(techArchCareerStartDate);

    $('.totalexperience').html(totalexperience);
    $('.scrumExperience').html(scrumExperience);
    $('.agileCoacgExperience').html(agileCoacgExperience);
    $('.techArchExperience').html(techArchExperience);
}
//it takes javascript Date() as input
function dateDiff(date1, gapinDays) {
    if (gapinDays === undefined) {
        gapinDays = 0;
    }
    var date2 = new Date();
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var days = Math.ceil(timeDiff / (1000 * 3600 * 24)) - gapinDays; 
    var years = Math.floor(days / 365);
    var daysRemainsAfterYear = Math.floor(days % 365);
    var months = Math.ceil(daysRemainsAfterYear / 30);
    //days = Math.floor(daysRemainsAfterYear % 30);

    var message = '';
    if (years !== 0) {
        message += years + " years ";
        message += months + " months ";
    }
    else if (years === 0) {
        if (months > 7) {
            message += " 1 year ";
        }
        else {
            message += " Nearly a year ";
        }
    }

    //message += days + " days ";
    return message;
}
function carousel3d() {
    //3D Carasoul start

    var carouselrotateCount = 0;
    var numberofitem = $('.item').length;
    var opposite = Number($('.container:has(.carousel)').width() * 0.55) / 2;
    var degreeToRotate = 360 / numberofitem;
    var degree = 360 / (numberofitem * 2);
    var tanDegree = Math.tan(degree * Math.PI / 180);
    var adjascent = opposite / tanDegree;
    $.each($('.item'), function (i, obj) {
        if (i === 0) {
            $(obj).addClass('currentItem');
        }
        $(obj).css('transform', 'rotateY(' + i * degreeToRotate + 'deg) translateZ(' + adjascent + 'px)');
        $(obj).attr('data-degree', i * degreeToRotate);
    });

    //alert('tan degree = opposite/adjascent\r\nadjascent=opposite/tan degree\r\ndegree = 360/(number of item * 2)\r\nopposite = ' + opposite
    //    + '\r\nnumber of item = ' + numberofitem + '\r\ndegree = ' + degree + '\r\ntan ' + degree.toString() + ' = ' + tanDegree
    //    + '\r\nadjascent = ' + adjascent);

    var carousel = $(".carousel"),
        currdeg = 0;

    $(".next").on("click", { d: "n" }, rotate);
    $(".prev").on("click", { d: "p" }, rotate);

    function rotate(e) {
        if (e.data.d == "n") {
            currdeg = currdeg - 60;
        }
        if (e.data.d == "p") {
            currdeg = currdeg + 60;
        }

        carousel.css({
            "-webkit-transform": "rotateY(" + currdeg + "deg)",
            "-moz-transform": "rotateY(" + currdeg + "deg)",
            "-o-transform": "rotateY(" + currdeg + "deg)",
            "transform": "rotateY(" + currdeg + "deg)"
        });
        $('.item').removeClass('currentItem');
        $('.item[data-degree="' + Math.abs(currdeg) + '"]').addClass('currentItem');
        carouselrotateCount += 1;
        if (carouselrotateCount === numberofitem) {
            carouselrotateCount = 0;
            currdeg = 0;
            $('.carousel').css('transform', 'rotateY(0deg)');
        }
    }
    //3D Carasoul END
}