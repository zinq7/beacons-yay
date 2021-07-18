

const t1wasp = extendContent(UnitType, "t1wasp", {
});
t1wasp.constructor = () => extend(UnitEntity, {
});

Blocks.airFactory.plans.add(new UnitFactory.UnitPlan(t1wasp, 60 * 20, ItemStack.with(Items.metaglass, 30, Items.titanium, 20)));