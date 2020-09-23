let 랜덤수 = 0
input.onButtonPressed(Button.A, function () {
    if (랜덤수 % 2 == 1) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    랜덤수 = randint(10, 99)
    basic.showNumber(랜덤수)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (랜덤수 % 2 == 0) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
