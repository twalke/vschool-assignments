var rs = require("readline-sync");

//BUISNESS LOGIC
function Player(name) {
  this.name = name;
  this.hp = 100;
  this.inventory = [];
  this.attack = 30;
  this.aid = [];
}

var enemyTypes = ["Self Doubt", "Lack of Follow Through", "Ineptitude"];
var confidenceItems = ["self confidence", "hope", "drive"];

function getRandom(arr) {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function Enemy() {
  this.name = getRandom(enemyTypes);
  this.hp = Math.floor(Math.random() * 31) + 50;
  this.attack = Math.floor(Math.random() * 11) + 25;
  this.aid = getRandom(confidenceItems);
}

//GAME LOGIC

var name = rs.question("\n\n\nWhat is your name, traveler?\n");
var player = new Player(name);
player.inventory.push("cow", "hat", "shirt", "pants");

var input = rs.question("\nA wizened old man stands in front of you.\nHello " + name +" it's good that you are finally here. Come this way.\nPress 'w' to walk, press 'i' for inventory.\n");
if (input == "i") {
  console.log(player.inventory);
} else if(input == "w") {
  var sword = rs.question("\nYou walk up to the chruch. 'um, just tie your cow up outside I guess' the old man says before walking through the doors and into the church.\nYou walk into the church and see a massive broadsword sticking out of a large stone in the middle of the building.\n\ 'p' to pull sword from stone, 'd' to do nothing\n");
  while (sword != "p") {
    console.log("You continue standing in the building doing nothing.\n");
    sword = rs.question("\nYou are standing in a church. You see a massive broadsword sticking out of a large stone in the middle of the building.\n\'p' to pull sword from stone, 'd' to do nothing\n");
  }
  if (sword == "p") {
    console.log("You pull on the hilt of the sword. After a couple of hard tugs, the sword snaps right around the spot where the blade meets the stone. \n 'WHAT DO YOU THINK YOU'RE DOING!' Screams the old man. 'YOU WERE JUST HIRED TO CLEAN THE CHURCH AND NOW YOU HAVE DESTROYED OUR MOST PRECIOUS ARTIFACT!'\nAll the yelling attracted an entire group of imporrtant looking old men. This is not your day.\n\nTWO DAYS LATER\n\nThe wizened old man enters the cell where you have been staying while your fate was decided.");
    console.log("'The sword you destroyed has stood in this church for a 1000 years awaiting the promised hero that will pull it from the stone during our darkest hour. And you have destroyed it. Normally we would have you executed for such a horrible crime, but as you may have noticed we are just a bunch of wizened old men and can't make the important journey to the capitol to inform the king of this disaster and possibly find a remedy. So we have decided to let you live provided you complete this task for us.'\n 'Is the way dangerous?', you ask.\n 'Nah we are just old and don't want to walk all the way to the capitol.\n")
  }
}
var enemiesKilled = 0;
var distanceTraveled = 0;
while (true) {
  var isWalking = rs.keyInYN("Would you like to journey toward the capitol?\n");
  if (isWalking) {
    distanceTraveled++;
    var encountersEnemy = Math.random() <.33333333;
    if (encountersEnemy) {
      var enemy = new Enemy();
      console.log("you encountered " + enemy.name + "!\n");
      var fight = rs.keyInYN("Would you like to stand and fight?\n");
      if(fight) {
        //handle fight
        while (true) {
          var playerAttack = Math.random();
          var enemyAttack = Math.random();
          if(playerAttack + (player.aid.length * .1) > enemyAttack) {
            enemy.hp = enemy.hp - player.attack;
            console.log("enemy" + enemy.hp + "\n");
          } else {
            player.hp = player.hp - enemy.attack;
            console.log("player" +player.hp + "\n");
          }
          if(enemy.hp <= 0) {
            console.log("Number of enemies killed" + enemiesKilled);
            enemiesKilled++;
            player.aid.push(enemy.aid);
            console.log("You defeated " + enemy.name + " and recieved more " + enemy.aid + " in the process!\n")
            break;
          }
          if(player.hp <= 0) {
            console.log("You sunk into a depressive state and failed at your task. The world might end now because of your failure. Or maybe not. Who cares.");
            break;
          }
        }
      } else {
        var escape = Math.random();
        if(escape < .5) {
          console.log("You can't run away from your problems this time!");
          while (true) {
            var playerAttack = Math.random();
            var enemyAttack = Math.random();
            if(playerAttack + (player.aid.length * .1) > enemyAttack) {
              enemy.hp = enemy.hp - player.attack;
              console.log("Enemy hit!Enemy health: " + enemy.hp + "\n");
            } else {
              player.hp = player.hp - enemy.attack;
              console.log("Player hit! Player health: " +player.hp + "\n");
            }
            if(enemy.hp <= 0) {
              enemiesKilled++;
              console.log("Number of enemies killed: " + enemiesKilled);
              player.aid.push(enemy.aid);
              console.log("You defeated " + enemy.name + " and recieved more " + enemy.aid + " in the process!\n")
              break;
            }
            if(player.hp <= 0) {
              console.log("You sunk into a depressive state and failed at your task. The world might end now because of your failure. Or maybe not. Who cares.");
              break;
            }
          }
        } else {
          player.hp = player.hp - 5;
          console.log("You took a 5 point hit to your psyche for running from your problems, but otherwise escape");
          continue;
        }
      }
    }
  }
  if(player.hp <= 0){
    break;
  }
  if(enemiesKilled == 3) {
    console.log("player HP " + player.hp);
    console.log("Enemies killed: " + enemiesKilled);
    console.log("You did it" + player.name + "! You overcame all the obsticals in your path and delivered the sword. Because you caused this whole situation to begin with, you aren't rewarded. But you also aren't executed. So at least there's that.");
    break;
  } else if(distanceTraveled == 20) {
    console.log("You did it " + player.name + "! You overcame all the obsticals in your path and delivered the sword. Because you caused this whole situation to begin with, you aren't rewarded. But you also aren't executed. So at least there's that.");
    break;
  }
}
