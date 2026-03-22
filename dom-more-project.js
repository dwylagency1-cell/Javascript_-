
function when_click_button(which_button) {
    if (document.querySelector(`${which_button}`).classList.contains('js-gaming-css')) {
        document.querySelector(`${which_button}`).classList.remove('js-gaming-css')

    }
    else{
        document.querySelector(`${which_button}`).classList.add('js-gaming-css')
    }
}

function either_of_the_button(buttonClicked) {
    if (buttonClicked.classList.contains('Male')) {
        document.querySelector('.Female').classList.remove('js-either_of_the_button')
        document.querySelector('.prefer_not_to_say').classList.remove('js-either_of_the_button')
        if (document.querySelector('.Male').classList.contains('js-either_of_the_button')) {
            document.querySelector('.Male').classList.remove('js-either_of_the_button')
        }
        else{
            document.querySelector('.Male').classList.add('js-either_of_the_button')
        }
    }
    else if (buttonClicked.classList.contains('Female')) {
        document.querySelector('.Male').classList.remove('js-either_of_the_button')
        document.querySelector('.prefer_not_to_say').classList.remove('js-either_of_the_button')
        if (document.querySelector('.Female').classList.contains('js-either_of_the_button')) {
            document.querySelector('.Female').classList.remove('js-either_of_the_button')
        }
        else{
            document.querySelector('.Female').classList.add('js-either_of_the_button')
        }


    }
    else if (buttonClicked.classList.contains('prefer_not_to_say')) {
        document.querySelector('.Male').classList.remove('js-either_of_the_button')
        document.querySelector('.Female').classList.remove('js-either_of_the_button')
        if (document.querySelector('.prefer_not_to_say').classList.contains('js-either_of_the_button')) {
            document.querySelector('.prefer_not_to_say').classList.remove('js-either_of_the_button')
        }
        else{
            document.querySelector('.prefer_not_to_say').classList.add('js-either_of_the_button')
        }


    }

}