document.addEventListener("DOMContentLoaded", function () { 
    
    console.log("DOM fully loaded and parsed!"); 


    var button1 = document.getElementById('button-1');
    var button2 = document.getElementById('button-2');
    var button3 = document.getElementById('button-3');
    var shoppingList = document.getElementById('shopping-list');

    if (button1) {

        button1.addEventListener("click", function(event) {
                
            var li = document.createElement("li");
            li.appendChild(document.createTextNode("chleb"));
            shoppingList.appendChild(li);        

        });
    }

    if (button2) {

        button2.addEventListener("click", function(event) {
            
            shoppingList.removeChild(shoppingList.lastElementChild);       

        });

    }

    if (button3 && shoppingList.getElementsByTagName('li')[1]) {

        button3.addEventListener("click", function(event) {
            
            var clone = shoppingList.getElementsByTagName('li')[1].innerText;
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(clone));
            shoppingList.appendChild(li);       

        });

    }

}); 