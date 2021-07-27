
const slowerregen = 1 / 55;
const slowregen = 1 / 45;
const normalregen = 1 / 35;
const fastregen = 1 / 25;

const zincwall = extendContent(Wall, "zinc-wall", {
});
zincwall.buildType = () => extendContent(Wall.WallBuild, zincwall, {
    updateTile() {
        //when health is lower than max health
        if ((this.healthf() < 1) && (Mathf.chance(slowerregen))) {
            this.heal(10);
        }
    },
});
const ZincWallLarge = extendContent(Wall, "zinc-wall-large", {
});
ZincWallLarge.buildType = () => extendContent(Wall.WallBuild, ZincWallLarge, {
    updateTile() {
        //when health is lower than max health
        if ((this.healthf() < 1) && (Mathf.chance(slowerregen))) {
            this.heal(10);
        }
    },
});

















