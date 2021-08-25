Events.on(ContentInitEvent, () => {
    //space units
    const ma12 = Vars.content.getByName(ContentType.unit, "beacons-yay-satellite");
    const pillar = Vars.content.getByName(ContentType.unit, "beacons-yay-asteroid");
    const rockhead = Vars.content.getByName(ContentType.unit, "beacons-yay-comet");
    const fatboy = Vars.content.getByName(ContentType.unit, "beacons-yay-nebula");
    const jackhammer = Vars.content.getByName(ContentType.unit, "beacons-yay-supernova"); 
    //space upgrades
    const first = Seq.with(satellite, asteroid).toArray(UnitType);
    const second = Seq.with(asteroid, comet).toArray(UnitType);
    const third = Seq.with(comet, nebula).toArray(UnitType);
    const fourth = Seq.with(nebula, supernova).toArray(UnitType);   
    //reconstructors only (special factory)
    Blocks.additiveReconstructor.upgrades.addAll(first);
    Blocks.multiplicativeReconstructor.upgrades.addAll(second);
    Blocks.exponentialReconstructor.upgrades.addAll(third);
    Blocks.tetrativeReconstructor.upgrades.addAll(fourth);
    //Experimental reconstructor (special reconstructor)
  });