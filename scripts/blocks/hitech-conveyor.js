
const hitechConveyor = extendContent(Conveyor, "hitech-conveyor", {
});
hitechConveyor.buildType = () => extendContent(Conveyor.ConveyorBuild, hitechConveyor, {
    draw(){
        this.super$draw();
		Draw.rect(Core.atlas.find(hitechConveyor.name+"-top"), this.x, this.y);
    },
});