const register = require("beacons-yay/units/unitReg");
const t1wasp = extendContent(UnitType, "t1wasp", {
});
t1wasp.constructor = () => extend(UnitEntity, {
	update(){
		this.super$update();
		if (this.dead || this.health <= 0){
			this.destroy();
		}
	},

	classId: () => t1wasp.classId
});
register(t1wasp);
t1wasp.ammoType = AmmoTypes.power;
Blocks.airFactory.plans.add(new UnitFactory.UnitPlan(SuiAirT1, 60 * 5, ItemStack.with(Items.silicon, 5, Items.blastCompound, 1)));