/*
this is some javascript code in order to attempt to override the DUO with a new ammo (nuke)
at the moment it's not working in the slightest, i'm focusing my efforts on other things for now


Events.on(ContentInitEvent, () => {
    //available items and liquids
    const nukeItem = Vars.content.getByName(ContentType.item, "beacons-yay-nuke");
    const bulletItem = Vars.content.getByName(ContentType.item, "beacons-yay-bullet");
    const zincItem = Vars.content.getByName(ContentType.item, "beacons-yay-zinq");
    const zinqItem = Vars.content.getByName(ContentType.item, "beacons-yay-zinq-good");
    const jungleJuiceLiquid = Vars.content.getByName(ContentType.item, "beacons-yay-jungle-juice");
});

Events.on(WorldLoadEvent, e => {
    extend(Block, "duo", {
        init() {
            this.super$init();
            //duo with Nuke
            const standardNuke = extend(BasicBulletType, {});
            standardNuke.height = 12;
            standardNuke.width = 14;
            standardNuke.lifetime = 60;
            standardNuke.speed = 4;
            standardNuke.ammoMultiplier = 10;
            standardNuke.damage = 20;
            standardNuke.splashDamage = 200;
            standardNuke.splashDamageRadius = 20;
            standardNuke.frontColor = "d3d3d3";
            standardNuke.backColor = "d3d3d3";
            const nukeItem = Vars.content.getByName(ContentType.item, "beacons-yay-nuke");
            Blocks.duo.ammo.add(nukeItem, standardNuke)
            Blocks.duo.init();
        }
    });
}); */