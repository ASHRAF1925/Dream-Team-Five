const buttons = document.getElementsByClassName('selectButton');
const playerList = document.getElementById('SelectedPlayerList');
//  Adding Selected Players to the list 
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        console.log(playerList.childNodes.length);
        if (playerList.childNodes.length < 6) {
            event.target.disabled = true;
            console.log(event.target.parentNode.childNodes[1].innerText);
            const new_li = document.createElement('li');
            new_li.innerText = event.target.parentNode.childNodes[1].innerText;
            playerList.appendChild(new_li)


        }


    });

}

//Common Function to get input value
function getInputValue(ElementId) {
    // Selecting the input element and get its value 
    var inputVal = document.getElementById(ElementId).value;

    // Displaying the value
    alert(inputVal);
}
