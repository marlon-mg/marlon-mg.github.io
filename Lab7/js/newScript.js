function init(){
// add your javascript code below
// Create a variable to store button object content
    var button = document.getElementById("myButton");

    function myFunction() {
        var message = document.getElementById("myTextbox").value;
        alert(message);
        document.getElementById("myHeading").textContent = message;
    }

    button.addEventListener("click", myFunction);
}
window.addEventListener('load', init);
