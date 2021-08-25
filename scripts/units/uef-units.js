//...

Events.on(ContentInitEvent, () => {
  //items
  const zinc =  Vars.content.getByName(ContentType.item, "beacons-yay-zinq")

  //air units
  const wasp = Vars.content.getByName(ContentType.unit, "beacons-yay-wasp");
  const eagle = Vars.content.getByName(ContentType.unit, "beacons-yay-eagle-eye");
  const broadsword = Vars.content.getByName(ContentType.unit, "beacons-yay-broadsword");
  const ac1k = Vars.content.getByName(ContentType.unit, "beacons-yay-ac1k");
  const megafort = Vars.content.getByName(ContentType.unit, "beacons-yay-mega-fortress");
  //air upgrades
  const waspUp = Seq.with(wasp, eagle).toArray(UnitType);
  const eaglUp = Seq.with(eagle, broadsword).toArray(UnitType);
  const bdsdUp = Seq.with(broadsword, ac1k).toArray(UnitType);
  const ac1kUp = Seq.with(ac1k, megafort).toArray(UnitType);
  //land units
  const ma12 = Vars.content.getByName(ContentType.unit, "beacons-yay-ma12");
  const pillar = Vars.content.getByName(ContentType.unit, "beacons-yay-pillar");
  const rockhead = Vars.content.getByName(ContentType.unit, "beacons-yay-rockhead");
  const fatboy = Vars.content.getByName(ContentType.unit, "beacons-yay-fatboy");
  const jackhammer = Vars.content.getByName(ContentType.unit, "beacons-yay-jackhammer");
  //land updgrades
  const ma12Up = Seq.with(ma12, pillar).toArray(UnitType);
  const pillUp = Seq.with(pillar, rockhead).toArray(UnitType);
  const rockUp = Seq.with(rockhead, fatboy).toArray(UnitType);
  const fatbUp = Seq.with(fatboy, jackhammer).toArray(UnitType);
  //factories
  Blocks.airFactory.plans.addAll(
    new UnitFactory.UnitPlan(wasp, 2000, ItemStack.with(Items.silicon, 30, Items.lead, 20, Items.graphite, 10)),
  );
  Blocks.airFactory.init();

  Blocks.groundFactory.plans.addAll(
    new UnitFactory.UnitPlan(ma12, 2500, ItemStack.with(Items.silicon, 30, zinc, 20)),
  );
  Blocks.groundFactory.init();
  //reconstructors
  Blocks.additiveReconstructor.upgrades.addAll(waspUp, ma12Up);
  Blocks.multiplicativeReconstructor.upgrades.addAll(eaglUp, pillUp);
  Blocks.exponentialReconstructor.upgrades.addAll(bdsdUp, rockUp);
  Blocks.tetrativeReconstructor.upgrades.addAll(ac1kUp, fatbUp);
  //Experimental reconstructor (TODO)
});