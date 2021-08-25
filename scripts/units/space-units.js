Events.on(ContentInitEvent, () => {
      //items
     const zinc =  Vars.content.getByName(ContentType.item, "beacons-yay-zinq")

    //space units
    const satellite = Vars.content.getByName(ContentType.unit, "beacons-yay-satellite");
    const asteroid = Vars.content.getByName(ContentType.unit, "beacons-yay-asteroid");
    const comet = Vars.content.getByName(ContentType.unit, "beacons-yay-comet");
    const nebula = Vars.content.getByName(ContentType.unit, "beacons-yay-nebula");
    const supernova = Vars.content.getByName(ContentType.unit, "beacons-yay-supernova"); 
    //space upgrades
    const first = Seq.with(satellite, asteroid).toArray(UnitType);
    const second = Seq.with(asteroid, comet).toArray(UnitType);
    const third = Seq.with(comet, nebula).toArray(UnitType);
    const fourth = Seq.with(nebula, supernova).toArray(UnitType); 
    //factory 
    Blocks.airFactory.plans.addAll(
        new UnitFactory.UnitPlan(satellite, 2100, ItemStack.with(Items.silicon, 50, Items.metaglass, 30, zinc, 20)),
      );
      Blocks.airFactory.init(); 
    //reconstructors
    Blocks.additiveReconstructor.upgrades.addAll(first);
    Blocks.multiplicativeReconstructor.upgrades.addAll(second);
    Blocks.exponentialReconstructor.upgrades.addAll(third);
    Blocks.tetrativeReconstructor.upgrades.addAll(fourth);
    //Experimental reconstructor (special reconstructor)
  });