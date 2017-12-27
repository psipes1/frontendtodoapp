//if li is clicked - grey out and strike through
//need to run .on(), because .click only works on existing elements

$("ul").on("click", "li", function(){
$(this).toggleClass("completed");

});

//Click on X to delete todo

$("ul").on("click", "span", function(event){
$(this).parent().fadeOut(500, function(){
	
	$(this).remove();

	});
//stops the process at the span
event.stopPropagation();
});

//adding new ToDo to list

$("input[type = 'text']").keypress(function(e){
if(e.which === 13){
//grabbing new todo and assign to variable
var todoText = $(this).val();
$(this).val(" ");
//create new li and add to ul
$("ul").append("<li><span><i class= 'fa fa-trash'></i></span> " + todoText + "</li>")
}
});

//Toggle add new item

$(".fa-plus").click(function(){
$("input[type = 'text']").fadeToggle(500)
});

//Drop line thru to bottom of list


//Make text wrap and stay within borders

function average(scores){
    //add together foreach
    var total = 0;
    scores.forEach(function(score){
        total += score;
    });
    var avg = total/scores.length
    return Math.round(avg);
}

var scores = [90, 98, 89, 100, 100, 86, 94];

console.log(average(scores));

