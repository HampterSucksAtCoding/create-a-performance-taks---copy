namespace SpriteKind {
    export const Dealer = SpriteKind.create()
    export const Weapon = SpriteKind.create()
}
function Start () {
    Jeferry = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        .......ff...ff......
        ......f22f.f22f.....
        .....f2322f2222f....
        .....f232222222f....
        .....f222222222f....
        ......f22222b2f.....
        .......f222b2f......
        ........f222f.......
        .........f2f........
        ..........f.........
        ....................
        ....................
        ....................
        ....................
        ....................
        `, SpriteKind.Player)
    controller.moveSprite(Jeferry)
    Experience_orb = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 7 7 f . . . . . . 
        . . . . . f 7 9 9 7 f . . . . . 
        . . . . f 7 9 6 6 9 7 f . . . . 
        . . . f 7 9 6 8 8 6 9 7 f . . . 
        . . . f 7 9 6 8 8 6 9 7 f . . . 
        . . . . f 7 9 6 6 9 7 f . . . . 
        . . . . . f 7 9 9 7 f . . . . . 
        . . . . . . f 7 7 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    info.setScore(0)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Dealer, function (sprite, otherSprite) {
    Jeferry.setPosition(340, 60)
    Weapon_1 = sprites.create(list[0], SpriteKind.Weapon)
    Weapon_2 = sprites.create(list[1], SpriteKind.Weapon)
    Weapon_3 = sprites.create(list[2], SpriteKind.Weapon)
    Weapon_4 = sprites.create(list[3], SpriteKind.Weapon)
    Weapon_1.setPosition(380, 80)
    Weapon_2.setPosition(400, 80)
    Weapon_3.setPosition(420, 80)
    Weapon_4.setPosition(440, 80)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterEast1, function (sprite, location) {
    info.changeScoreBy(5)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(Experience_orb, effects.confetti, 500)
    info.changeScoreBy(1)
    Experience_orb = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 7 7 f . . . . . . 
        . . . . . f 7 9 9 7 f . . . . . 
        . . . . f 7 9 6 6 9 7 f . . . . 
        . . . f 7 9 6 8 8 6 9 7 f . . . 
        . . . f 7 9 6 8 8 6 9 7 f . . . 
        . . . . f 7 9 6 6 9 7 f . . . . 
        . . . . . f 7 9 9 7 f . . . . . 
        . . . . . . f 7 7 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnRandomTile(Experience_orb, sprites.dungeon.floorLight0)
})
info.onScore(20, function () {
    Jeferry.setPosition(360, 46)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let Weapon_4: Sprite = null
let Weapon_3: Sprite = null
let Weapon_2: Sprite = null
let Weapon_1: Sprite = null
let list: Image[] = []
let Experience_orb: Sprite = null
let Jeferry: Sprite = null
Start()
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(Jeferry)
tiles.placeOnRandomTile(Experience_orb, sprites.dungeon.floorLight0)
let Evil_Heart = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ......fff...fff.....
    .....fdddf.fddcf....
    ....fdddddfddbccf...
    ....fdddddddbbccf...
    ....fddddddbbcccf...
    .....fddddbbcccf....
    ......ffdbbcccf.....
    .......fcccccf......
    ........fcccf.......
    .........fcf........
    ..........f.........
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.Enemy)
Evil_Heart.follow(Jeferry, 85)
Evil_Heart.setPosition(148, 5)
let Sand_Underman = sprites.create(img`
    ................................
    ........................9999999.
    .......................999999999
    ......................99999999..
    ......................999999999.
    ......................99999999..
    ......................999999f...
    .....fffff...........9999999ff..
    ....ffffffff........9999999fff..
    ...fffffffffff......999999ffff..
    ...fffffffff1ff....f8999ffffff..
    ...ffffffff111f...f8889ffff.....
    .....fffffff11f...f8888ff.......
    .......ffffffff....ffff.........
    ................................
    ................................
    ................................
    ................................
    ................................
    ...ff........................f..
    ...f1ffffffffffff..........ffff.
    ...f11f11f11f11fffffffffffff11f.
    ...ff1f11f11f11f11f11f11f11f11f.
    ....fff11f11f11f11f11f11f11f1ff.
    .....fff1f11f11f11f11f11f11fff..
    .......fff11f11f11f11f11f1ff....
    ........fffffffffffffffffff.....
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Dealer)
Sand_Underman.setPosition(390, 22)
list = [
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . c c 7 . . . 
    . . . . . . . . . c b b 7 . . . 
    . . . . . . . . c b b b 7 . . . 
    . . . . . . . c b b b 7 . . . . 
    . . . . . . c b b b 7 . . . . . 
    . . . . . c b b b 7 . . . . . . 
    . . . . c b b b 7 . . . . . . . 
    . . . c b b b 7 . . . . . . . . 
    . . . c b b 7 . . . . . . . . . 
    . . c c b 7 . . . . . . . . . . 
    . c f c 7 . . . . . . . . . . . 
    . c c . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . c c b b . . . 
    . . . . . . . . c c 2 2 b . . . 
    . . . . . . . c c 2 2 2 b . . . 
    . . . . . . c c 2 2 2 b . . . . 
    . . . . . c c 2 2 2 b . . . . . 
    . . . . c c 2 2 2 b . . . . . . 
    . . . c c 2 2 2 b . . . . . . . 
    . c c c 2 2 2 b . . . . . . . . 
    c c c 2 2 2 b . . . . . . . . . 
    c . c 2 2 b . . . . . . . . . . 
    c . c 2 b . . . . . . . . . . . 
    c c c c . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 7 7 . . . 
    . . . . . . . . . . 7 e 7 7 . . 
    . . . . . . . . . . e e 7 7 . . 
    . . . . . . . . 7 e e 7 . . . . 
    . . . . . . . . e e e . . . . . 
    . . . . 7 7 . e e e 7 . . . . . 
    . . . 7 e e 7 e e e e e . . . . 
    . . . . 7 e e e . e e e e . . . 
    . . . . e e e 7 . . . . . . . . 
    . . . e e 7 . . . . . . . . . . 
    . . e e 7 . . . . . . . . . . . 
    . . e e . . . . . . . . . . . . 
    . e e . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . b . . . 
    . . . . . . . . . . . 6 b . . . 
    . . . . . . . . . . 6 6 b . . . 
    . . . . . . . . . 6 6 b . . . . 
    . . . . . . . . 6 6 b . . . . . 
    . . . . . . . 6 6 b . . . . . . 
    . . . . . . 6 6 b . . . . . . . 
    . . . . 6 6 6 b . . . . . . . . 
    . . . 6 6 b b . . . . . . . . . 
    . . b b b b . . . . . . . . . . 
    . . b b b . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
]
if (Jeferry.overlapsWith(sprites.create(list[0], SpriteKind.Weapon))) {
	
} else if (Jeferry.overlapsWith(sprites.create(list[1], SpriteKind.Weapon))) {
	
} else if (Jeferry.overlapsWith(sprites.create(list[2], SpriteKind.Weapon))) {
	
} else if (Jeferry.overlapsWith(sprites.create(list[3], SpriteKind.Weapon))) {
	
}
