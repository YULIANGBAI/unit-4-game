console.log("123");
$(document).ready(function(){
    var wins=0;
    var lost=0;
    var score=0;


    var computerGuess=Math.floor(Math.random()*120+19);
    $("#randomNumber").html(computerGuess);
    $("#score").html();

    var white=Math.floor(Math.random()*12+1);
    console.log(white);
    var red=Math.floor(Math.random()*12+1);
    var purple=Math.floor(Math.random()*12+1);
    var green=Math.floor(Math.random()*12+1);

    function reset(){
        score=0;
        console.log(score);
        $("#score").html(score);
        computerGuess=Math.floor(Math.random()*120+19);
        $("#randomNumber").html(computerGuess);

        white=Math.floor(Math.random()*12+1);
        console.log(white);
        red=Math.floor(Math.random()*12+1);
        purple=Math.floor(Math.random()*12+1);
        green=Math.floor(Math.random()*12+1);
    }

    $("#white").on("click",function(){
        score=score + white;
        console.log(score);
        $("#score").html(score);
        if(score==computerGuess){
            checkifwin();}
        else if(score>computerGuess){
            checkifwin()};
    })

    $("#red").on("click",function(){
        score=score+red;
        $("#score").html(score);
        if(score==computerGuess){
            checkifwin();}
        else if(score>computerGuess){
            checkifwin()};
    })

    $("#purple").on("click",function(){
        score=score+purple;
        $("#score").html(score);
        if(score==computerGuess){
            checkifwin();}
        else if(score>computerGuess){
            checkifwin()};
    })

    $("#green").on("click",function(){
        score=score+green;
        $("#score").html(score);
        if(score==computerGuess){
            checkifwin();}
        else if(score>computerGuess){
            checkifwin()};
    })
    function checkifwin(){
        if(score===computerGuess){
            wins++;
            $("#win").html("wins:"+wins);
            reset();
        }
        else if(score>computerGuess){
            lost++;
            $("#lost").html("losses"+lost)
            reset()
        }
    }


    
})