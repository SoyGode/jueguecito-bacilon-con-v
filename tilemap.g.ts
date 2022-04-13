// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a0008000101010101010101020101020101010101020101010101010101010201010102010101010101010101010101020101010101010101010101010101010101020101010102010101010101010101010101`, img`
. . . . . . . . 2 . 
. 2 . . . . . 2 . . 
. . . . . . . 2 . . 
. 2 . . . . . . . . 
. . . . 2 . . . . . 
. . . . . . . . . . 
. . 2 . . . . 2 . . 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
