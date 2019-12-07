document.addEventListener("DOMContentLoaded", function () { 
    
    console.log("DOM fully loaded and parsed!"); 

    var buttons = document.getElementsByTagName('button');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(event) {
            var innerText = this.dataset.text;
            document.getElementById('container').innerText = innerText;

        });
        
    }

}); 


 
 