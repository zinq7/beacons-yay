//I don't know where I stol-copied this code from.
/* "uefAir" Unit path
*/
const spaceAirAI = prov(() => {
  var u = extend(FlyingAI, {
    updateMovement(){}
  });
  
  return u;
  
});

// Add satellite 
const spaceAirT1 = extendContent(UnitType, "beacons-yay-satellite", {});
uefAirT1.constructor = () => extend(UnitEntity, {});

Blocks.airFactory.plans.add(new UnitFactory.UnitPlan(uefAirT1, 60 * 20, ItemStack.with(Items.silicon, 20, Items.titanium, 15)));

//Add asteroid
const uefAirT2 = extendContent(UnitType, "beacons-yay-asteroid", {});
uefAirT2.constructor = () => extend(UnitEntity, {});

var upgradeA = new Seq([Vars.content.getByName(ContentType.unit, "beacons-yay-satellite"), Vars.content.getByName(ContentType.unit, "beacons-yay-asteroid")]);
Blocks.additiveReconstructor.upgrades.add(upgradeA.toArray(UnitType));

//Add comet
const uefAirT3 = extendContent(UnitType, "beacons-yay-comet", {});
uefAirT3.constructor = () => extend(UnitEntity, {});

var upgradeB = new Seq([Vars.content.getByName(ContentType.unit, "beacons-yay-asteroid"), Vars.content.getByName(ContentType.unit, "beacons-yay-comet")]);
Blocks.multiplicativeReconstructor.upgrades.add(upgradeB.toArray(UnitType));

//Add nebula
const uefAirT4 = extendContent(UnitType, "beacons-yay-nebula", {});
uefAirT4.constructor = () => extend(UnitEntity, {});


var upgradeC = new Seq([Vars.content.getByName(ContentType.unit, "beacons-yay-comet"), Vars.content.getByName(ContentType.unit, "beacons-yay-nebula")]);
Blocks.exponentialReconstructor.upgrades.add(upgradeC.toArray(UnitType));

//Add supernova
const uefAirT5 = extendContent(UnitType, "beacons-yay-supernova", {
});
uefAirT5.constructor = () => extend(UnitEntity, {});
uefAirT5.targetFlag = BlockFlag.core;

var upgradeD = new Seq([Vars.content.getByName(ContentType.unit, "beacons-yay-nebula"), Vars.content.getByName(ContentType.unit, "beacons-yay-supernova")]);
Blocks.tetrativeReconstructor.upgrades.add(upgradeD.toArray(UnitType));
