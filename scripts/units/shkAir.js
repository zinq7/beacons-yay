//Don't ask where I stol-copied this code from.
/* "shkAir" Unit path
*/
const shkAirAI = prov(() => {
  var u = extend(FlyingAI, {
    updateMovement(){
    }
  });
  
  return u;
});
const shkAirT1 = extendContent(UnitType, "strike", {
});
shkAirT1.constructor = () => extend(UnitEntity, {
});
//register(shkAirT1);
shkAirT1.ammoType = AmmoTypes.powerHigh;

Blocks.airFactory.plans.add(new UnitFactory.UnitPlan(shkAirT1, 60 * 20, ItemStack.with(Items.silicon, 10, Items.lead, 25, Items.copper, 15)));

const shkAirT2 = extendContent(UnitType, "storm", {
});
shkAirT2.constructor = () => extend(UnitEntity, {});
shkAirT2.ammoType = AmmoTypes.powerHigh;

var upgradeA = new Seq([Vars.content.getByName(ContentType.unit, "beacons-yay-strike"), Vars.content.getByName(ContentType.unit, "beacons-yay-storm")]);
Blocks.additiveReconstructor.upgrades.add(upgradeA.toArray(UnitType));

const shkAirT3 = extendContent(UnitType, "tempest", {
});
shkAirT3.constructor = () => extend(UnitEntity, {});
shkAirT3.ammoType = AmmoTypes.powerHigh;

var upgradeB = new Seq([Vars.content.getByName(ContentType.unit, "beacons-yay-storm"), Vars.content.getByName(ContentType.unit, "beacons-yay-tempest")]);
Blocks.multiplicativeReconstructor.upgrades.add(upgradeB.toArray(UnitType));

const shkAirT4 = extendContent(UnitType, "hurricane", {
});
shkAirT4.constructor = () => extend(UnitEntity, {});
shkAirT4.ammoType = AmmoTypes.powerHigh;


var upgradeC = new Seq([Vars.content.getByName(ContentType.unit, "beacons-yay-tempest"), Vars.content.getByName(ContentType.unit, "beacons-yay-hurricane")]);
Blocks.exponentialReconstructor.upgrades.add(upgradeC.toArray(UnitType));

const shkAirT5 = extendContent(UnitType, "purger", {
});
shkAirT5.constructor = () => extend(UnitEntity, {});
//register(shkAirT5);
shkAirT5.targetFlag = BlockFlag.core;
shkAirT5.ammoType = AmmoTypes.powerHigh;
const purgerPlasmaTrail = Effect(28, e => {
	Draw.color(Color.valueOf("#ffff00"), Color.valueOf("#ffffff"), e.fin());
    const ctdf = new Floatc2({get(x, y){
		Drawf.tri(e.x + x, e.y + y, 4 * e.fout(), 8 * e.fout(), Mathf.angle(x, y));
		Drawf.tri(e.x + x, e.y + y, 4 * e.fout(), 8 * e.fout(), Mathf.angle(x, y) + 90);
		Drawf.tri(e.x + x, e.y + y, 4 * e.fout(), 8 * e.fout(), Mathf.angle(x, y) + 180);
		Drawf.tri(e.x + x, e.y + y, 4 * e.fout(), 8 * e.fout(), Mathf.angle(x, y) + 270);
    }})
    Angles.randLenVectors(e.id, 6, 8 + 15 * e.finpow(), e.rotation, 360, ctdf);
    const ncrtnvyj = new Floatc2({get(x, y){
		Fill.circle(e.x + x, e.y + y, e.fout() * 4);
    }})
    Angles.randLenVectors(e.id + 1, 3, 12, e.rotation, 360, ncrtnvyj);
});
const purgerPlasmaExplosion = Effect(34, e => {
    Draw.color(Color.valueOf("#ffff66"), Color.valueOf("#999900"), e.fin());
    Lines.stroke(e.fout() * 12);
    const d = new Floatc2({get(x, y){
    Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), e.fslope() * 6 + 1 + e.fout() * 12);
    }}) 
    Angles.randLenVectors(e.id, 150, -20 + 120 * e.fin(), e.rotation, 360,d);
    Draw.color(Color.valueOf("#ffff00"), Color.valueOf("#ffffff"), Math.abs(-0.4 + e.fin() * 1.4));
    const g = new Floatc2({get(x, y){
    Fill.circle(e.x + x, e.y + y, e.fout() * 7.4);
    }}) 
    const h = new Floatc2({get(x, y){
    Fill.circle(e.x + x, e.y + y, e.fout() * 32);
    Angles.randLenVectors(e.id + 1, 3, -2 + 9 * e.fin(), e.rotation + Mathf.random(-180,180) * e.fin(), 360,g);
    }}) 
    Draw.color(Color.valueOf("#ffff66"), Color.valueOf("#bbbb00"), e.finpow());
    Angles.randLenVectors(e.id + 2, 25, -20 + 125 * e.fin(), e.rotation, 360,h);
    Lines.stroke(e.fout() * 9);
    Draw.color(Color.valueOf("#ffff00"), Color.valueOf("#ffffff"), e.finpow());
    Lines.circle(e.x, e.y, e.finpow() * 80);
});

var upgradeD = new Seq([Vars.content.getByName(ContentType.unit, "beacons-yay-hurricane"), Vars.content.getByName(ContentType.unit, "beacons-yay-purger")]);
Blocks.tetrativeReconstructor.upgrades.add(upgradeD.toArray(UnitType));
