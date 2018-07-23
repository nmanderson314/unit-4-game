var defender = {
    card: "", //the value of this is the same as the id of each card
    name:"",
    hp: 0,
    attackBasePts: 0,
    attackPwr: 0,
    counterAttackPwr: 0,
    damageGained: 0,
    attackList:[],
    attack:"" //this will be the randomized selection of an element in attackList
};

var opponent = {
    card: "",
    name:"",
    hp: 0,
    attackBasePts: 0,
    attackPwr: 0,
    counterAttackPwr: 0,
    damageGained: 0,
    attackList: [],
    attack:"" //this will be the randomized selection of an element in attackList
};
//list of all possible characters
var characterList = ["GRAND MOFF TARKIN", "R2D2", "REY", "KYLO REN"];
//created outside of the opponent object so that it is maintained
var allPlayed=[];


//Methods: A method is a function stored as a property of an object


//low HP but medium attack
function grandMoffTarkin(choice){
    //attack names: cutting words , fascism, demonstrating full power of this station destruction of Alderaan
    choice.card = "card0";
    choice.name = "GRAND MOFF TARKIN";
    choice.hp = 100;
    choice.attackBasePts = 5;//what you start off with in attack if defender
    choice.counterAttackPwr = 10;// (is this necessary?)
    choice.attackList = ["CUTTING WORDS (and words hurt)", "FASCISM", "DEMONSTRATING THE FULL POWER OF THIS STATION", "O.G. CHARACTER"];
    //add player name to allPlayed to know when game is over
    allPlayed.push(choice.name);
    
};
//r2d2 is high HP but low attack points
function r2d2(choice){
    //blowing up death star
    choice.card = "card1";
    choice.name = "R2D2";
    choice.hp = 180;
    choice.attackBasePts = 5;
    choice.counterAttackPwr = 10;
    choice.attackList = ["LEGENDS NEVER DIE", "*HIGH PITCH SQUEAL*", "CO-PILOTING DESTRUCTION OF DEATHSTAR", "O.G. CHARACTER"];
    //add player name to allPlayed to know when game is over
    allPlayed.push(choice.name);
    
};

//lower hp but decent attack
function rey(choice){
    choice.card = "card2";
    choice.name = "REY";
    choice.hp = 120;
    choice.attackBasePts = 20;
    choice.counterAttackPwr = 10; 
    choice.attackList= ["*USES THE FORCE... TO BREAK GLASS CEILINGS*", "MYSTERIOUS PAST", "DISNEY", "TRIPLE BUNS"];
    //add player name to allPlayed to know when game is over
    allPlayed.push(choice.name);
    
};

//higher hp and decent attack
function kyloRen(choice){
    choice.card = "card3";
    choice.name = "KYLO REN";
    choice.hp = 150;
    choice.attackBasePts = 12;
    choice.counterAttackPwr = 10; 
    choice.attackList= ["EXTREME ANGST", "DADDY ISSUES", "DISNEY", "SWAGGER JACKIN' VADER"];
    //add player name to allPlayed to know when game is over
    allPlayed.push(choice.name);

};

function resetOpponent(){
    //clear dialog boxes  
    $('#opponentDialog').empty();
    $('#defenderDialog').empty();

    //show the opponent buttons
    for (var i =0; i < characterList.length; i++)
    {
        //show opponent buttons for all characters who are not played characters (defender and opponents)
        if(allPlayed.indexOf(characterList[i]) <= -1)   {
            $("#card"+i+"BtnOp").css("visibility", "visible");
        };
    };
};

function altStats(){
    //defender attackpwr goes up by base
    defender.attackPwr += defender.attackBasePts;
    //defender HP goes down due to opponent attack base
    defender.hp -= opponent.attackBasePts;
    //opponent HP goes down due to opponents attack POWER (which is set above)
    opponent.hp -= defender.attackPwr;

    //as soon as the stats are altered, need to check for a win/lose
    if(defender.hp <= 0 || opponent.hp <= 0){
        if(opponent.hp <= 0 && opponent.name !== ""){
            //need to mark the character as defeated IN THE CHARACTER BANK AND IN THE ARENA
            //update that card to have the defeated img
            $("#" + opponent.card + "Img").attr("src","assets/images/"+opponent.card+"Defeat.jpg");
            $("#opponentImg").attr("src","assets/images/"+opponent.card+"Defeat.jpg");

            //show the My Opponent buttons for "alive" characters
            resetOpponent();
        }
        else{
            //this will run if the defender.hp is <=0\
            //replace Attack button with Reset button
            $(".reset").css("visibility", "visible");
            $(".attack").css("visibility", "hidden");

            // $(".attack").html("RESET");
            // $(".attack").attr("class", "reset attack btn btn-lg btn-outline-warning col-sm-12");

            //show message
            $( "#defenderDialog" ).empty();
            $( "#defenderDialog" ).append( "<p>YOU WERE DEFEATED!</p><p>Click the reset button to start a new game.</p>");

        };
    };
};

function defenderDialog(){
    //empty the dialog box
    $('#defenderDialog').empty();

    //randomize attack message
    defender.attack = defender.attackList[(Math.floor(Math.random() * 4))]
    console.log("defender attack list index of "+ defender.attack)

    //create dialog
    $( "#defenderDialog" ).append( "<p>" + defender.name + " used attack:</p><p>" + defender.attack + "</p>");
    $( "#defenderDialog" ).append( "<p>" + opponent.name + " sustained damage of " + defender.attackPwr + "</p>");
    $( "#defenderDialog" ).append( "<p> HP: " + defender.hp + "</p>");
    $( "#defenderDialog" ).append( "<p><strong> +" + defender.attackBasePts + " pwr. </strong></p>");

};

function opponentDialog(){
    //empty the dialog box
    $('#opponentDialog').empty();

    //randomize attack message
    opponent.attack = opponent.attackList[(Math.floor(Math.random() * 4))]
    console.log("opponent attack list index of "+ opponent.attack)

    //create dialog
    $( "#opponentDialog" ).append( "<p>" + opponent.name + " used attack:</p><p>" + opponent.attack + "</p>");
    $( "#opponentDialog" ).append( "<p>" + defender.name + " sustained damage of " + opponent.attackBasePts + "</p>");
    $( "#opponentDialog" ).append( "<p> HP: " + opponent.hp + "</p>");
};




//*******************************************************
//*****************CHOOSING THE DEFENDER*****************
//*******************************************************
$("#card0BtnDef").click(function(){
    //sets the values of he object defender to the values described in kylo
    grandMoffTarkin(defender);

    //hide all other defender buttons - use css to target visibility?
    $("#card0BtnDef").css("visibility", "hidden");
    //hide all defender buttons (by class)
    $(".defender").css("visibility", "hidden");

    //update the defender img  in arena to this character defenderImg
    $("#defenderImg").attr("src","assets/images/GMTarkin.jpg");
});

$("#card1BtnDef").click(function(){
    //sets the values of he object defender to the values described in kylo
    r2d2(defender);
    
  //hide all other defender buttons - use css to target visibility?
  $("#card1BtnDef").css("visibility", "hidden");
  //hide all defender buttons (by class)
  $(".defender").css("visibility", "hidden");
    
  //update the defender img  in arena to this character defenderImg

  $("#defenderImg").attr("src","assets/images/R2D2.jpg");


});

$("#card2BtnDef").click(function(){
    //sets the values of he object defender to the values described in kylo
    rey(defender);


    //hide all other defender buttons - use css to target visibility?
    $("#card2BtnDef").css("visibility", "hidden");
    //hide all defender buttons (by class)
    $(".defender").css("visibility", "hidden");
    //update the defender img  in arena to this character defenderImg
    $("#defenderImg").attr("src","assets/images/rey.jpg");

});

$("#card3BtnDef").click(function(){
    //sets the values of he object defender to the values described in kylo
    kyloRen(defender);
    //hide this player's opponent button (by id)
    $("#card3BtnDef").css("visibility", "hidden");
    //hide all defender buttons (by class)
    $(".defender").css("visibility", "hidden");
 
    //update the defender img  in arena to this character defenderImg
    $("#defenderImg").attr("src","assets/images/KyloRen.jpg");
});

//*******************************************************
//*****************CHOOSING THE OPPONENT*****************
//*******************************************************

$("#card0BtnOp").click(function(){
    //sets the values of he object defender to the values described in kylo
    grandMoffTarkin(opponent);

    //hide all other defender buttons - use css to target visibility?
    $("#card0BtnOp").css("visibility", "hidden");
    //hide all defender buttons (by class)
    $(".opponent").css("visibility", "hidden");

    //update the defender img  in arena to this character defenderImg
    $("#opponentImg").attr("src","assets/images/GMTarkin.jpg");
});

$("#card1BtnOp").click(function(){
    //sets the values of he object defender to the values described in kylo
    r2d2(opponent);

  //hide all other defender buttons - use css to target visibility?
  $("#card1BtnOp").css("visibility", "hidden");
  //hide all defender buttons (by class)
  $(".opponent").css("visibility", "hidden");
    
  //update the defender img  in arena to this character defenderImg

  $("#opponentImg").attr("src","assets/images/R2D2.jpg");

});

$("#card2BtnOp").click(function(){
    //sets the values of he object defender to the values described in kylo
    rey(opponent);
    //hide all other defender buttons - use css to target visibility?
    $("#card2BtnOp").css("visibility", "hidden");
    //hide all defender buttons (by class)
    $(".opponent").css("visibility", "hidden");
    //update the defender img  in arena to this character defenderImg
    $("#opponentImg").attr("src","assets/images/rey.jpg");

});

$("#card3BtnOp").click(function(){
    //sets the values of he object defender to the values described in kylo
    kyloRen(opponent);
    //hide this player's opponent button (by id)
    $("#card3BtnOp").css("visibility", "hidden");
    //hide all defender buttons (by class)
    $(".opponent").css("visibility", "hidden");
 
    //update the defender img  in arena to this character defenderImg
    $("#opponentImg").attr("src","assets/images/KyloRen.jpg");
});



//*******************************************************
//*****************Showing the Attack Button*************
//*******************************************************
if ((opponent.name=="" && defender.name=="")||(opponent.hp =="" || opponent.hp < 0)){
    $(".attack").css("visibility","hidden");
}
$(".btn").click(function(){

    if ((opponent.name=="" && defender.name=="")||(opponent.hp =="" || opponent.hp < 0)){
        $(".attack").css("visibility","hidden");
    }
    else{
        $(".attack").css("visibility","visible");
    };
});

//*******************************************************
//*****************ON CLICK: FIRE AT WILL*****************
//*******************************************************

//display a random attack message for defender
//display a random attack message for opponent
//display the remaining HP for both
//display the attackPwr the defender has

//DO THE ABOVE until either the opponent or the defender has HP of <=0
//IF the defender has HP of <= 0 - loss & message to restart game
//If the opponent has HP of <= 0 and defender has HP of >0, then run the function resetOpponent()

$(".attack").click(function(){
    // if(defender.hp > 0 && opponent.hp > 0){
        altStats();
        defenderDialog();
        opponentDialog();
    // }
    // else if(opponent.hp <= 0 && opponent.name !== ""){
    //     //need to mark the character as defeated IN THE CHARACTER BANK AND IN THE ARENA
    //     //update that card to have the defeated img
    //     $("#" + opponent.card + "Img").attr("src","assets/images/"+opponent.card+"Defeat.jpg");
    //     $("#opponentImg").attr("src","assets/images/"+opponent.card+"Defeat.jpg");

    //     //show the My Opponent buttons for "alive" characters
    //     resetOpponent();
    // }
    // else{
    //     //this will run if the defender.hp is <=0\
    //     //replace Attack button with Reset button
    //     $(".reset").css("visibility", "visible");
    //     $(".attack").css("visibility", "hidden");

    //     // $(".attack").html("RESET");
    //     // $(".attack").attr("class", "reset attack btn btn-lg btn-outline-warning col-sm-12");

    //     //show message
    //     $( "#defenderDialog" ).empty();
    //     $( "#defenderDialog" ).append( "<p>YOU WERE DEFEATED!</p><p>Click the reset button to start a new game.</p>");
    // };
});


//*******************************************************
//*****************Action RESET button*******************
//*******************************************************
$(".reset").click(function(){
    location.reload(true);
});

//*******************************************************
//*****************Action RESET button*******************
//*******************************************************
$(".btn").click(function(){
    if(allPlayed.length === characterList.length && allPlayed.length > 0){
        $(".reset").css("visibility", "visible");
        $(".attack").css("visibility", "hidden");

        // $(".attack").html("RESET");
        // $(".attack").attr("class", "reset attack btn btn-lg btn-outline-warning col-sm-12");

        //show message
        $( "#defenderDialog" ).empty();
        $( "#defenderDialog" ).append( "<p>YOU WON!</p><p>Click RESET for a new game.</p>");
    };
});
