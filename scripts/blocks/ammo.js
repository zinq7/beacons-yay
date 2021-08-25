
//available items and liquids
const nukeItem = Vars.content.getByName(ContentType.item, "beacons-yay-nuke");
const bulletItem = Vars.content.getByName(ContentType.item, "beacons-yay-bullet");
const zincItem = Vars.content.getByName(ContentType.item, "beacons-yay-zinq");
const zinqItem = Vars.content.getByName(ContentType.item, "beacons-yay-zinq-good");
const jungleJuiceLiquid = Vars.content.getByName(ContentType.item, "beacons-yay-jungle-juice");
//salvo with Bullet
const bulletSalvo = extend(BasicBulletType, {});
bulletSalvo.height = 12;
bulletSalvo.width = 14;
bulletSalvo.lifetime = 60;
bulletSalvo.speed = 4;
bulletSalvo.ammoMultiplier = 6;
bulletSalvo.damage = 20;
bulletSalvo.frontColor = "d3d3d3";
bulletSalvo.backColor = "d3d3d3";

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

//testing
const nukeduo = Seq.with(nukeItem,standardNuke).toArray(ammoTypes);
//regestering the ammos
Blocks.duo.ammoTypes.addAll(nukeduo);
Blocks.salvo.ammoTypes.addAll(bulletItem,bulletSalvo);