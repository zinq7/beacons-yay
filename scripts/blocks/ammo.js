
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
Blocks.salvo.ammoTypes.put(bulletItem,bulletSalvo);