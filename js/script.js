$(document).ready(function(){

    $("img#menu-burger").on('click', function(){

        $(".menu ul").slideToggle();

    });


    $("button#more-details").on('click', function() {

        if($("#more-details").hasClass('active')) {
            $(".info-content-right").slideUp();
            $("button#more-details").html("MORE DETAILS");
            $("#more-details").removeClass('active');
        }

        else {
            $(".info-content-right").slideDown();
            $("button#more-details").html("LESS DETAILS");
            $("#more-details").addClass('active');
        }


    });






    });



