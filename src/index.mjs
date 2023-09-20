class Character {
  constructor(name, health = 10, power = 5) {
      this.name = name;
      this.health = health;
      this.power = power;
  }

  attack(enemy) {
      enemy.health -= this.power;
  }

  alive() {
      return this.health > 0;
  }

  print_status() {
      console.log(`${this.name} has ${this.health} health and ${this.power} power.`);
  }
}

class Hero extends Character {

}

class Goblin extends Character {

}

class Zombie extends Character {
  alive() {
      return true;
  }
}

const gawain = new Hero("Sir Gawain", 20, 8);
const green_knight = new Goblin("The Green Knight", 20, 5);
const zombie = new Zombie("Undead", 0, 2);
const enemies = [zombie, green_knight];

function main() {
  while (green_knight.alive() && gawain.alive()) {
      gawain.print_status();
      green_knight.print_status();
      console.log("What do you want to do?");
      console.log("1. fight goblin");
      console.log("2. do nothing");
      console.log("3. flee");
      console.log("> ");
      const user_input = Number(prompt("What is your choice?"));

      console.log("USER INPUT", user_input);
      // break;

      if (user_input === 1) {
          // Hero attacks goblin
          gawain.attack(green_knight);
          console.log(`You do ${gawain.power} damage to the goblin.`);
          if (!green_knight.alive()) {
              console.log("The goblin is dead.");
          }
      } 
      if (user_input === 2) {
          // Do nothing
      } 
      if (user_input === 3) {
          console.log("Goodbye.");
          break;
      }
      // This should really be a switch
      // } else {
      //     console.log(`Invalid input ${user_input}`);
      // }

      if (green_knight.health > 0) {
          const random_index = Math.floor(Math.random() * enemies.length);
          const enemy = enemies[random_index];
          enemy.attack(gawain);
          console.log(`The ${enemy.name} does ${enemy.power} damage to you.`);
          if (!gawain.alive()) {
              console.log("You are dead.");
          }
      }
  }
}

main();
