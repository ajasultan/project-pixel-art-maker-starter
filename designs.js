// defining the constant values
const canvasTable = document.querySelector('#pixelCanvas');
const boxStyle =  'border: solid black; width:1em; height: 1em;';


/* makeGrid is a function that takes the input from the user input and creates
 a canvas of size inputWidth x inputHeight */
function makeGrid(){
    //Store Input Height
    var pickedHeight = document.querySelector('#inputHeight').value;
    //Store Input Width
    var pickedWidth = document.querySelector('#inputWidth').value;
    //Create a Canvas of Column = width & Row = Height
    for(var column = 0; column < pickedHeight; column++){
        // Create Column in HTML Table by Tag 'tr'
        var customColumn = document.createElement('tr');
        canvasTable.appendChild(customColumn);
        for (var row = 0; row < pickedWidth; row++){
            // Create row in HTML Table by Tag 'th'
            var customRow = document.createElement('th');
            customColumn.appendChild(customRow);
            customColumn.style.cssText = boxStyle;
            customRow.style.cssText = boxStyle;
        }
    }
}
