//Don't ask where I stol-copied this code from.
/* "tankLand" Unit path
*/
const tankLandAI = prov(() => {
    var u = extend(GroundAI, {
      updateMovement(){
      }
    });
    
    return u;
  });
  const tankLandT1 = extendContent(UnitType, "ma12", {
  });
  tankLandT1.constructor = () => extend(UnitEntity, {
  });
  //register(tankLandT1);
  tankLandT1.ammoType = AmmoTypes.powerHigh;
  tankLandT1.weapons.add();
  
  Blocks.groundFactory.plans.add(new UnitFactory.UnitPlan(tankLandT1, 60 * 20, ItemStack.with(Items.silicon, 25, Items.lead, 25, Items.graphite, 25)));
  
  const tankLandT2 = extendContent(UnitType, "pillar", {
  });
  tankLandT2.constructor = () => extend(UnitEntity, {});
  tankLandT2.ammoType = AmmoTypes.powerHigh;
  
  var upgradeA = new Seq([Vars.content.getByName(ContentType.unit, "beacons-yay-ma12"), Vars.content.getByName(ContentType.unit, "beacons-yay-pillar")]);
  Blocks.additiveReconstructor.upgrades.add(upgradeA.toArray(UnitType));
  
  const tankLandT3 = extendContent(UnitType, "rockhead", {
  });
  tankLandT3.constructor = () => extend(UnitEntity, {});
  tankLandT3.ammoType = AmmoTypes.powerHigh;
  
  var upgradeB = new Seq([Vars.content.getByName(ContentType.unit, "beacons-yay-pillar"), Vars.content.getByName(ContentType.unit, "beacons-yay-rockhead")]);
  Blocks.multiplicativeReconstructor.upgrades.add(upgradeB.toArray(UnitType));
  
  const tankLandT4 = extendContent(UnitType, "fatboy", {
  });
  tankLandT4.constructor = () => extend(UnitEntity, {});
  tankLandT4.ammoType = AmmoTypes.powerHigh;
  
  
  var upgradeC = new Seq([Vars.content.getByName(ContentType.unit, "beacons-yay-rockhead"), Vars.content.getByName(ContentType.unit, "beacons-yay-fatboy")]);
  Blocks.exponentialReconstructor.upgrades.add(upgradeC.toArray(UnitType));
  
  const tankLandT5 = extendContent(UnitType, "jackhammer", {
  });
  tankLandT5.constructor = () => extend(UnitEntity, {});
  tankLandT5.targetFlag = BlockFlag.core;
  tankLandT5.ammoType = AmmoTypes.powerHigh;
  
  var upgradeD = new Seq([Vars.content.getByName(ContentType.unit, "beacons-yay-fatboy"), Vars.content.getByName(ContentType.unit, "beacons-yay-jackhammer")]);
  Blocks.tetrativeReconstructor.upgrades.add(upgradeD.toArray(UnitType));
  