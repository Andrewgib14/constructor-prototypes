//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog(color, hungry) {
    this.color = color;
    this.status = "normal";
    this.hungry = hungry;
}

let sadie = new Dog("black", false);
let moonshine = new Dog("brown", true);
let atticus = new Dog("blonde", false);

// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human(cool) {
    this.pet = (dog) => {
        dog.status = "happy";
    }
    this.feed = (dog) => {
        dog.hungry = false
    }
    this.cool = cool
}
let mason = new Human(false);
let julia = new Human(true);

// Instances of Human
// Needed: mason, julia
