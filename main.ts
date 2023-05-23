/**
 * HECTOR MORENO
 * 
 * S2A
 */
let distancia = 0
basic.showLeds(`
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . # # # .
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . # # # .
    . # # # .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . # # # .
    . # # # .
    . # # # .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    # . . . #
    . # # # .
    . # # # .
    . # # # .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    # . . . #
    # # # # #
    . # # # .
    . # # # .
    `)
basic.showLeds(`
    # . # . #
    . # # # .
    # # # # #
    . # # # .
    # . # . #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    . . # . .
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    distancia = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (distancia != 0) {
        if (distancia <= 10) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.pause(100)
        } else if (distancia <= 20) {
            music.playTone(294, music.beat(BeatFraction.Whole))
            basic.pause(100)
        } else if (distancia <= 30) {
            music.playTone(330, music.beat(BeatFraction.Whole))
            basic.pause(100)
        } else if (distancia <= 40) {
            music.playTone(349, music.beat(BeatFraction.Whole))
            basic.pause(100)
        } else if (distancia <= 50) {
            music.playTone(392, music.beat(BeatFraction.Whole))
            basic.pause(100)
        } else if (distancia <= 60) {
            music.playTone(440, music.beat(BeatFraction.Whole))
            basic.pause(100)
        } else if (distancia <= 70) {
            music.playTone(494, music.beat(BeatFraction.Whole))
            basic.pause(100)
        } else if (distancia <= 80) {
            music.playTone(523, music.beat(BeatFraction.Whole))
            basic.pause(100)
        } else if (distancia <= 90) {
            music.playTone(587, music.beat(BeatFraction.Whole))
            basic.pause(100)
        } else if (distancia <= 100) {
            music.playTone(659, music.beat(BeatFraction.Whole))
            basic.pause(100)
        } else if (false) {
        	
        } else {
            basic.clearScreen()
            music.playMelody("C C D D E E F F ", 600)
        }
    }
})
