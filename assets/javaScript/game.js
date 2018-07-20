var defender = {
    name:"",
    hp: 0,
    attackBase: 0,
    attackPwr: 0,
    counterAttackPwr: 0,
    damageGained: 0,
    attackList:[],
    attack:"",
};

var opponent = {
    name:"",
    hp: 0,
    attackBase: 0,
    attackPwr: 0,
    counterAttackPwr: 0,
    damageGained: 0,
    attackList: [],
    attack:"",
    
};

//Methods: A method is a function stored as a property

function grandMoffTarkin(choice){
    //attack names: cutting words , fascism, demonstrating full power of this station destruction of Alderaan
    choice.name = "Grand Moff Tarkin";
    choice.hp = 100;
    choice.attackBase = 10;
    choice.counterAttackPwr = 10; 
    choice.attackList = ["CUTTING WORDS (and words hurt)", "FASCISM", "DEMONSTRATING THE FULL POWER OF THIS STATION", "O.G. CHARACTER"];
};

function r2d2(choice){
    //blowing up death star
    choice.name = "R2D2";
    choice.hp = 100;
    choice.attackBase = 10;
    choice.counterAttackPwr = 10;
    choice.attackList = ["LEGENDS NEVER DIE", "*HIGH PITCH SQUEAL*", "CO-PILOTING DESTRUCTION OF DEATHSTAR", "O.G. CHARACTER"];
};

function rey(choice){
    //crazy chess skills
    choice.name = "REY";
    choice.hp = 100;
    choice.attackBase = 10;
    choice.counterAttackPwr = 10; 
    choice.attackList= ["*BREAKS GLASS CEILING WITH THE FORCE*", "MYSTERIOUS PAST", "DISNEY", "TRIPLE BUNS"];
};

function kyloRen(choice){
    choice.name = "KYLO REN";
    choice.hp = 100;
    choice.attackBase = 10;
    choice.counterAttackPwr = 10; 
    choice.attackList= ["EXTREME ANGST", "DADDY ISSUES", "DISNEY", "SWAGGER JACKER"];
};


