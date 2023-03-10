const buttons = document.getElementsByClassName('selectButton');
const playerList = document.getElementById('SelectedPlayerList');
var per_player_cost_given = true;
var manager_cost_given = true;
var Coach_cost_given = true;
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
        else {
            alert("5 Players Already selected!")
        }


    });

}

//Common Function to get input value
function getInputValue(ElementId) {

    const inputVal = document.getElementById(ElementId).value;
    return inputVal
}

//validate function
function inputvalidation(ElementId) {
    document.getElementById(ElementId).addEventListener('keyup', function () {
        console.log(document.getElementById(ElementId).value)
        if (isNaN(document.getElementById(ElementId).value)) {
            alert("Please Enter a Valid Number");
            document.getElementById(ElementId).value = ""
        }

    })
}
inputvalidation('Player_budget');
inputvalidation('Mangaer_cost');
inputvalidation('Coach_cost');

// empty validation
function is_empty(ElementId) {

    if (document.getElementById(ElementId).value == "") { return false; }
    else {
        return true;
    }



}



// calculate button
const calculate_button = document.getElementById('calculate_button');
const player_calculated_amount = document.getElementById('player_calculated_amount');
calculate_button.addEventListener('click', function () {
    per_player_cost_given = is_empty('Player_budget');
    if ((playerList.childNodes.length - 1) <= 0) {
        alert("No Players Selected !")
    }

    if (per_player_cost_given) {
        player_calculated_amount.innerText = getInputValue('Player_budget') * (playerList.childNodes.length - 1);
    }
    else {
        alert("Per Player Cost Input Field is Empty.Please Enter a number !")
    }


});

// Calculate Total Button
const calculate_total_button = document.getElementById('calculate_total');

calculate_total_button.addEventListener('click', function () {
    console.log(document.getElementById('player_calculated_amount').innerText)
    console.log(getInputValue('Mangaer_cost'))
    console.log(getInputValue('Coach_cost'))
    manager_cost_given = is_empty('Mangaer_cost');
    Coach_cost_given = is_empty('Coach_cost');

    if (manager_cost_given && Coach_cost_given) {
        const total_cost = parseInt(getInputValue('Player_budget') * (playerList.childNodes.length - 1)) + parseInt(getInputValue('Mangaer_cost')) + parseInt(getInputValue('Coach_cost'));
        document.getElementById('Total_cost').innerText = total_cost;
    }
    else {
        if (manager_cost_given == false) {
            alert(" Manager Cost Input Field is Empty.Please Enter a number !")

        }
        else if (Coach_cost_given == false) {
            alert(" Coach Cost Input Field is Empty.Please Enter a number !")
        }

    }








});
