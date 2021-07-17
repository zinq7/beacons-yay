//wasp
const waspt1 = extend(UnitType, "waspt1", {
	draw(unit) {
		this.super$draw(unit);
	}
});

//leadguy
const leadguy = extend(UnitType, "leadguy", {
	draw(unit) {
		this.super$draw(unit);
	}
});


waspt1.constructor = () => extend(UnitEntity, {
});


leadguy.constructor = () => extend(UnitEntity, {
});