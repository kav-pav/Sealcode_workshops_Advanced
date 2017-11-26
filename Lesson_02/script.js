//Things to fix:
// - iterattion task,

$(document).ready(function($) {
    var date = new Date();//dokonczyc z ta data
    var $h2 = $('h2');
    var $toDoList = $('.list');
    var iterationTask = 0;
    var $removeButton = $('.remove-button-task');
    var $addButton = $('.addButton');
    $h2.html(date);

    var newTask = function(taskToAdd){
                
        var $newLi = $("<li>"+ ++iterationTask + "</li>");
        var $newCheckBox = $("<input type='checkbox'</input>");
        var $newSpan = $("<span></span>");
        var $newRemoveButton = $("<button class = 'remove-button-task'>-</button>");

        $newLi.append($newCheckBox)
            .append($newSpan.html(taskToAdd))
            .append($newRemoveButton);

        return $newLi;
    }
    console.log($('.new-task'));
    console.log($('.new-task').length);
    
        $addButton.on('click', function(){
            var listItem = newTask($('.new-task').val());
            $toDoList.append(listItem);
        })

        $('.new-task').on('keypress',function(e){
            if(e.which == 13){
                $addButton.click();
            }

        })
    }
    $toDoList.on('click','.remove-button-task', function(){
        $(this).parent().remove();
    })



});