$(".submit").click(function(){
    $(".story").show();
    $(".H").show();
});

$(".H").hide();


































//DO NOT TOUCH CODE BELOW! 
let storiesCreated=0;
$("button").click(function(){
storiesCreated = storiesCreated + 1;
    let name = $(".name-input").val();
   let transport = $(".transport-input").val();
    let adjective = $(".adjective-input").val();
    let time = $(".number-input").val();
    $(".story").append("<p>One day my friend " + name + " and I decided to take a trip to the bar, so we put on make up and dress and took the " + transport + " over.It was a " + adjective + " day at the bar! We ended up staying for " + time + " days!</p>");
    $(".count").text(storiesCreated);
});
 