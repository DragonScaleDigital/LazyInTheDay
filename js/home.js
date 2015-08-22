$(document).ready(init);

function init ()
{
    $('#server-modpack-version')
        .popup({
            position    : 'bottom center',
            inline      : false,
            hoverable   : true,
            delay: {
                show: 300,
                hide: 800
            }
        })
    ;

    $('#welcome-typed')
        .typed({
            strings: ["Welcome to Adventure.", "^1000Release your Boundless Creativity.", "^1000Join an Amazing Community.", "^1000Welcome to Lazy in The Day"],
            cursorChar: "|",
            startDelay: 1300,
            callback: function() {
                return $('#welcome-typed').siblings('.typed-cursor').remove();
            }
            })
    ;
}

function welcomeArrow ()
{
    $('#welcome-arrow-circle').transition('fade down')
}

