function randompickerbtn() {
    let hexColor = "#";
    let hexValues = "123456789abcdef";
    for (let i = 0; i < 6; i++){
        let randNum = Math.floor((Math.random() * 15));
        hexColor += hexValues[randNum];
    }

    document.getElementById("randomPicker").style.backgroundColor = hexColor;
    document.getElementById("randomValuePara").innerText = hexColor;
}

function hexFindbtn() {
    const hexColor = document.getElementById("hexInput").value;
    if (hexColor.length == 4 || hexColor.length == 7){
        document.getElementById("color-box").style.backgroundColor = hexColor;
    }
}

function RGBFindbtn() {
    const red = Number(document.getElementById("RInput").value);
    const green = Number(document.getElementById("GInput").value);
    const blue = Number(document.getElementById("BInput").value);

    if (red >= 0 && green >= 0 && blue >= 0 && red <= 255 && green <= 255 && blue <= 255){
        document.getElementById("rgb-color-box").style.backgroundColor = `rgb(${red},${green},${blue})`;
    }
}

function RangeSelector() {
    const red = document.getElementById("RrInput").value;
    const green = document.getElementById("GrInput").value;
    const blue = document.getElementById("BrInput").value;
    document.getElementById("range-color-box").style.backgroundColor = `rgb(${red},${green},${blue})`;
}

// hex to rgb converter
String.prototype.convertToRGB = function () {
    const hex = this.toLowerCase();
    let rgbColor = "rgb(";

    if (hex.length == 6) {
        for (let i = 0; i < 6; i += 2) {
            let n = 1;
            for (let j = i; j < i + 2; j++) {
                if (hex[j] == 'a') {
                    n *= 10;
                }
                else if (hex[j] == 'b') {
                    n *= 11;
                }
                else if (hex[j] == 'c') {
                    n *= 12;
                }
                else if (hex[j] == 'd') {
                    n *= 13;
                }
                else if (hex[j] == 'e') {
                    n *= 14;
                }
                else if (hex[j] == 'f') {
                    n *= 15;
                }
                else {
                    n *= Number(hex[j]);
                }
            }

            rgbColor += n;
            if (i < 4) {
                rgbColor += ",";
            }

        }

        rgbColor += ")";

        return rgbColor;
    }
    else {
        return -1;
    }
};

function hexConvbtn() {
    const hexCInp = document.getElementById("hexCInp").value;
    const rgbColor = hexCInp.convertToRGB();
    if (rgbColor != -1) {
        document.getElementById("hexCOut").innerText = rgbColor;
    }
}


function rgbConvbtn() {
    const red = Number(document.getElementById("RCInput").value);
    const green = Number(document.getElementById("GCInput").value);
    const blue = Number(document.getElementById("BCInput").value);
    let hexColor = "#";

    if (red >= 0 && green >= 0 && blue >= 0 && red <= 255 && green <= 255 && blue <= 255){
        if (red > 15){
            hexColor += decimalToHex(red);
        }
        else{
            hexColor += "0" + decimalToHex(red);
        }

        if (green > 15){
            hexColor += decimalToHex(green);
        }
        else{
            hexColor += "0" + decimalToHex(green);
        }

        if (blue > 15){
            hexColor += decimalToHex(blue);
        }
        else {
            hexColor += "0" + decimalToHex(blue);
        }
        
        document.getElementById("rgbCOut").innerHTML = hexColor;
    }
}

function decimalToHex(decimal){
    let hex = "";

    while (decimal > 0){
        digit = decimal % 16;

        if (digit == 10){
            hex += 'a';
        }
        else if (digit == 11){
            hex += 'b';
        }
        else if (digit == 12){
            hex += 'c';
        }
        else if (digit == 13){
            hex += 'd';
        }
        else if (digit == 14){
            hex += 'e';
        }
        else if (digit == 15){
            hex += 'f';
        }
        else {
            hex += digit;
        }

        decimal = Math.floor(decimal / 16);
    }

    return hex;
}