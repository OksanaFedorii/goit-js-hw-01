'use strict';
function getElementWidth(content, padding, border) {
    const borderBox = Number.parseInt(content) + Number.parseInt(padding) * 2  + Number.parseFloat(border) * 2;
    console.log (borderBox);
}

getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");