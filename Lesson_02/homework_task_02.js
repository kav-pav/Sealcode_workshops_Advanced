document.addEventListener("DOMContentLoaded", function(event) {
    var textArea = document.querySelector("textarea");
    var addButton = document.querySelector(".addButton");
    var taskList = document.querySelector(".list");
    

    var iterationTask = 0;

    console.log(textArea); 
    console.log(addButton);
    console.log(addTask);



    function addTask(){
        if (textArea.value !== null){
            var newLi = document.createElement("li");
            var newInput = document.createElement("input");
            
            taskList.innerHTML += '<li><input type="checkbox"><span>' + ++iterationTask + '.' + textArea.value + '</span><button class = "remove-button-task"></button></li>';
        }
    }

    addButton.addEventListener('click', addTask,false);

    var removeButtons = document.querySelectorAll("remove-button-task");
    console.log(removeButtons);

    function removeTask(){
        // var removeButton = document.querySelector("remove-button-task");
    }
    
// jQuery i JS    
    
});