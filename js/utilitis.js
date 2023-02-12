function inputFieldById(input) { 




    const inputField = document.getElementById(input)
    const inputValue = inputField.value;


    
    const inputFinalValue = parseFloat (inputValue)

   

    inputField.value = "";


   
    return inputFinalValue;





}


function textFieldById(Text) { 


    const textField = document.getElementById(Text);
    const textValue = textField.innerText;
    const textFinalValue = parseFloat (textValue)


    return textFinalValue;






}

function setValue (valueId, value) { 


    const valueField = document.getElementById(valueId)

    valueField.innerText = value;






}