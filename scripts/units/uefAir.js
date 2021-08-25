//I don't know where I stol-copied this code from.
/* "uefAir" Unit path
*/
const uefAirAI = prov(() => {
  var u = extend(FlyingAI, {
    updateMovement(){}
  });
  
  return u;
  
});

// Add wasp 
const uefAirT1 = extendContent(UnitType, "wasp", {});
uefAirT1.constructor = () => extend(UnitEntity, {});

Blocks.airFactory.plans.add(new UnitFactory.UnitPlan(uefAirT1, 60 * 20, ItemStack.with(Items.silicon, 10, Items.lead, 25, Items.copper, 15)));

//Add Eagle Eye
const uefAirT2 = extendContent(UnitType, "eagle-eye", {});
uefAirT2.constructor = () => extend(UnitEntity, {});

var upgradeA = new Seq([Vars.content.getByName(ContentType.unit, "beacons-yay-wasp"), Vars.content.getByName(ContentType.unit, "beacons-yay-eagle-eye")]);
Blocks.additiveReconstructor.upgrades.add(upgradeA.toArray(UnitType));

//Add Broadsword
const uefAirT3 = extendContent(UnitType, "broadsword", {
});
uefAirT3.constructor = () => extend(UnitEntity, {});

var upgradeB = new Seq([Vars.content.getByName(ContentType.unit, "beacons-yay-eagle-eye"), Vars.content.getByName(ContentType.unit, "beacons-yay-broadsword")]);
Blocks.multiplicativeReconstructor.upgrades.add(upgradeB.toArray(UnitType));

//Add AC-1000 Terror
const uefAirT4 = extendContent(UnitType, "ac1k", {
});
uefAirT4.constructor = () => extend(UnitEntity, {});


var upgradeC = new Seq([Vars.content.getByName(ContentType.unit, "beacons-yay-broadsword"), Vars.content.getByName(ContentType.unit, "beacons-yay-ac1k")]);
Blocks.exponentialReconstructor.upgrades.add(upgradeC.toArray(UnitType));

//Add Mega Fortress
const uefAirT5 = extendContent(UnitType, "mega-fortress", {
});
uefAirT5.constructor = () => extend(UnitEntity, {});
uefAirT5.targetFlag = BlockFlag.core;

var upgradeD = new Seq([Vars.content.getByName(ContentType.unit, "beacons-yay-ac1k"), Vars.content.getByName(ContentType.unit, "beacons-yay-mega-fortress")]);
Blocks.tetrativeReconstructor.upgrades.add(upgradeD.toArray(UnitType));
