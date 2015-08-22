$(document).ready(init);


function init ()
{
    // Dropdown Menus
    $('.ui.dropdown')
        .dropdown({
            on: 'hover',
            transition : 'horizontal flip'
        })
    ;

    $('#copyright-statement')
        .popup({
            on: 'hover',
            duration: 200,
            position: 'top center'
        })
    ;


    console.log("Main Page Loaded")
}