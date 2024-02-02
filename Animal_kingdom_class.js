class Animal{
  constructor(name,backbone,habitant, species,characteristics){
    this.name=name;
    this.backbone=backbone,
    this.habitant=habitant;
    this.species=species;
    this.characteristics=characteristics
    if(this.constructor === Animal){
      throw new Error(" No Access")
    }
 }

 move(){
  console.log("Animals move")
 };
 reproduce(){
  console.log("Some Animals lay egg while some give birth to live off spring")
 }
}

class Arthropod extends Animal{
  constructor(name,backbone,habitant, species,characteristics){
    super(name,backbone,habitant, species,characteristics)
    this.arthropodArray=[];
  }
   move(animal){
   animal.arthropodArray.push(`Movement:  The flexible wings of the butterfly help it create a propulsive “clap” mechanism and moves it forward. The wings have a downstroke as well, which helps support their weight`);
 };
reproduce(animal){
  animal.arthropodArray.push(`Reproduction: They mate, joining the tips of their abdomens, and the male passes sperm to the female in order to fertilize her eggs. The female then lays her eggs on plants or on the ground`);
};
}

class Fish extends Animal{
  constructor(name,backbone,habitant, species,characteristics){
    super(name,backbone,habitant, species,characteristics)
    this.fishArray=[]
  }
  move(fish){
 fish.fishArray.push(" Movement:Fish also have strong muscles which make the front part of the body curve to one side and the tail fins part swing on the opposite side in the water")
  }
  reproduce(fish){
   fish.fishArray.push("Reproduction: by bearing live young or by laying eggs")
  }

}
class Amphibia extends Animal{
  constructor(name,backbone,habitant, species,characteristics){
    super(name,backbone,habitant, species,characteristics);
    this.amphibiaArray=[]
  }
  move(frog){
   frog.amphibiaArray.push(" Movement: Different frog species use several methods of moving around, including jumping, walking, running, climbing, swimming, burrowing, and gliding")
  }
  reproduce(frog){
   frog.amphibiaArray.push("Reproduction: All frogs reproduce sexually, and all hatch from eggs")
  }
}
class Reptiles extends Animal{
  constructor(name,backbone,habitant, species,characteristics){
    super(name,backbone,habitant, species,characteristics);
    this.reptilesarray=[];
  }
  move(tortoies){
    tortoies.reptilesarray.push("Movement: They have legs for movement");
  }
  reproduce(tortoies){
    tortoies.reptilesarray.push(" Reproduction: They lay egg");
  }
}
class AVES extends Animal{
  constructor(name,backbone,habitant, species,characteristics){
    super(name,backbone,habitant, species,characteristics);
    this.avesArray=[]
  }
  move(aves){
    aves.avesArray.push(" Movement:These large birds move through the landscape primarily by soaring—a style of flying where they hold their wings outward and rarely flap, saving them considerable energy")
  }
  reproduce(aves){
    aves.avesArray.push(" reprodection: They lay and hatch their eggs")
  }
}
class Mammal extends Animal{
  constructor(name,backbone,habitant, species,characteristics){
    super(name,backbone,habitant, species,characteristics)
    this.mammalArray=[];
  }
  move(cat){
    cat.mammalArray.push(" Movement: Cats are digitigrade; that is, they walk on their toes")
  }
  #reproduce(cat){
    cat.mammalArray.push("Reproduction: female cats are capable of induced ovulation. The female does not ovulate until the backward pointing spines on the male's penis stimulate the vagina")
  }
  accessReproduction(cat){
    this.#reproduce(cat)
  }
}

const butterfly= new Arthropod();
const butterfly1= new Arthropod("Butterfly","No backbone","Forests","Painted Lady","They have two pairs of membranous (transparent) wings that are covered with tiny scales which give colour, rigidity, and strengthIt consists of large compound eyes having many light-sensitive lenses, both the eyes have their own refractive system and each form its own portion of the imageIt generally has a clavated antenna and sometimes it can even have a clubbed antenna");
const fish= new Fish();
const fish1= new Fish("Fish","Backbones are Present","water","tilapia","Fish have gills that allow them to absorb oxygen from water and release carbon dioxide. Some fish in severely oxygen-depleted environments have developed lungs too. All fish also have a swim bladder - this is an organ filled with air that helps them maintain a stable buoyancy in the water (which means they do not sink!), it also allows them to sleep. Fins provide motion and manoeuvrability to fish, and the most common types are the tail fin, side fins, dorsal fins and anal fins.");
const frog= new Amphibia();
const frog1= new Amphibia("Frog","Backbone present","Water and Land","Rain Frog","frogs have protruding eyes, no tail, and strong, webbed hind feet that are adapted for leaping and swimming. They also possess smooth, moist skins. Many are predominantly aquatic, but some live on land, in burrows, or in trees");
const tortoies= new Reptiles();
const tortoies1= new Reptiles("Tortoies","Backbone present","Land","Tent Tortoise","A few other types of tortoise species can have nearly spherical shells with a flat base. The tortoise can be easily recognised by their unique hind-limb anatomy. Their hind-limbs are elephentine or cylindrical. Each digit in their forefeet and their hind feet contains two or fewer phalanges.");
const eagle= new AVES()
const eagle1= new AVES("Eagle","Backbone Present", "Mountains","Bald Head eagle","Eagles have powerful vision.Eagles are fearless.Eagles are tenacious.Eagles are high flyers.Eagles nurture their young.Eagles Nurture their younger one.Eagles posses Vitality.Eagles Never Eat Dead Meat.")
const cat= new Mammal();
const cat1= new Mammal("Cat","Backbone Present","Domastic","Orange cat","small size, social nature, obvious body language, love of play, and high intelligence. Captive Leopardus cats may also display affectionate behavior toward humans but were not domesticated")
butterfly.move(butterfly1);
butterfly.reproduce(butterfly1);
fish.move(fish1);
fish.reproduce(fish1);
frog.move(frog1);
frog.reproduce(frog1);
tortoies.move(tortoies1);
tortoies.reproduce(tortoies1);
eagle.move(eagle1);
eagle.reproduce(eagle1);
cat.move(cat1);
cat.accessReproduction(cat1);
console.log(butterfly1);
console.log(fish1);
console.log(frog1);
console.log(tortoies1);
console.log(eagle1);
console.log(cat1);