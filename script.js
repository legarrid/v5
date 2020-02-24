var wrapper = document.querySelector(".wrapper");

function startBattle() {
  wrapper.innerHTML = "";
  document.body.querySelector(".reset").innerHTML = "";
  var list = [
    {
      name: "Bob's",
      health: 10,
      damage: 2,
      type: "Attack type is fire"
    },
    {
      name: "Mavis's",
      health: 8,
      damage: 6,
      type: "Attack type is ice"
    },
    {
      name: "Morty's",
      health: 6,
      damage: 9,
      type: "Attack type is fire"
    },
     {
      name: "Shorty's",
      health: 10,
      damage: 2,
      type: "Attack type is ice"
    },
    {
      name: "Larry's",
      health: 10,
      damage: 2,
      type: "Attack type is fire"
    }
  ];

  var dragonHealth = 10;
  var dragonEle = document.createElement("div");
  dragonEle.innerHTML = dragonHealth;

  function createWarrior(wr) {
    var warrior = document.createElement("button");
    warrior.innerHTML = wr.name + wr.type;
    warrior.addEventListener("click",
                         
    function() {
      attackDragon(wr.damage, wr.type, wr, warrior);
    });
    wrapper.appendChild(warrior);
  }

  function attackDragon(dmg, type, obj, ele) {
    console.log(obj);
    if (type === "fire") {
      dragonHealth = dragonHealth - (dmg - 1);
    } else if (type === "ice") {
      dragonHealth = dragonHealth - (dmg + 1);
    } else {
      dragonHealth = dragonHealth - dmg;
    }

    console.log((obj.hp = obj.hp - 2));
    ele.innerHTML = obj.hp - 2;

    dragonEle.innerHTML = dragonHealth;

    if (dragonHealth <= 0) {
      document.body.querySelector(".reset").innerHTML = "You win! Try Kill the dragon again!";
      document.body
        .querySelector(".reset")
        .addEventListener("click", function() {
          startBattle();
        });
    } else if (list[0].hp <= 0 && list[1].hp <= 0 && list[2].hp <= 0) {
      document.body.querySelector(".reset").innerHTML = "You lost! Try again!";
      document.body
        .querySelector(".reset")
        .addEventListener("click", function() {
          startBattle();
        });
    }
  }

  for (var i = 0; i < list.length; i++) {
    createWarrior(list[i]);
  }

  wrapper.appendChild(dragonEle);
}

startBattle();