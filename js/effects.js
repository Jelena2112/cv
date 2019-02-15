

$(document).ready(function() {


    $('.hingeAnimation').mouseenter(function() {

        // proveravamo da li imamo klasu hinge
        if( $(this).hasClass('hinge') ) {
            return false;
        }

        $(this).addClass('hinge');

        setTimeout(function(){
            $(".secondFont").removeClass("hinge");
        }, 2500);

    });

    $(".navItem").mouseenter(function() {
        $(this).find("i").hide();
        $(this).find(".iconText").removeClass('hidden');
    });
    $(".navItem").mouseleave(function() {
        $(this).find(".iconText").addClass('hidden');
        $(this).find("i").show();
    });

    /** Navigation **/
    $(".burgerNav").click(function() {
        if( $(".navMob").hasClass("mobDispNone") )
        {
            $(".navMob").removeClass("mobDispNone");
        }
        else
        {
            $(".navMob").addClass("mobDispNone");
        }


    });


    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });



    /* Toma anim */
    var fontOriginalSize = 0;
    var previousColor = 1;
    var fontOriginalSize = $(".elasticAnim").css("font-size");

    $('.elasticAnim').mouseleave(function() {
        $(this).animate({"font-size":fontOriginalSize, "color":"white"}, 500);
    });

    $('.elasticAnim').mouseenter(function() {
        var element = $(this);
        $(element).animate({"font-size":"25px", "color":generateRandomColor()},500, function() {
            $(element).animate({"font-size":fontOriginalSize, "color":"white"}, 500);
        });
    });


    function generateRandomColor()
    {
        var randNumber = Math.floor((Math.random() * 3) + 1);
        var color = "";
        while(previousColor == randNumber)
        {
            randNumber = Math.floor((Math.random() * 3) + 1);
        }
        if(randNumber == 1)
        {
            color = "rgb(255, 0, 0)";
        }
        else if(randNumber == 2)
        {
            color = "rgb(0, 255, 0)";
        }
        else
        {
            color = "rgb(0, 0, 255)";
        }
        previousColor = randNumber;
        return color;
    }



});




