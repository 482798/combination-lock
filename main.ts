let _1 = 0
input.onButtonPressed(Button.A, function () {
    _1 += 1
})
input.onButtonPressed(Button.AB, function () {
    if (_1 == 7) {
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
        _1 = 0
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(500)
        _1 = 0
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    _1 += 2
})
