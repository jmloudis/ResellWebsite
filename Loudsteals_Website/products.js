if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready(){

    
    var addToCartButtons = document.getElementsByClassName('btn')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)


    }
}


function addToCartClicked(event) {
    var button = event.target
    var ShopItem = button.parentElement.parentElement
    var title = ShopItem.getElementsByClassName('row')
    console.log('clicked')
}

function addToCartButtons() {
    
}