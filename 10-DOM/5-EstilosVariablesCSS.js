const $linkDOM = document.querySelector(".link-dom")
console.log($linkDOM.style)
console.log($linkDOM.getAttribute("style"));

console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);

// console.log(window.getComputedStyle($linkDOM));
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration","none") //modificando una propiedad de CSS.

$linkDOM.style.setProperty("display","block");
$linkDOM.style.width = "50%";

$linkDOM.style.textAling = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style)
console.log($linkDOM.getAttribute("style"));

//variables CSS - Custom Properties:

//como acceder a esas variables:
const $html = document.documentElement,
    $body = document.body;

    let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
    let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor,varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color","#0af");

varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color",varDarkColor);

