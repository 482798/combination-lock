input.onButtonPressed(Button.A, function () {
    _1 = "" + _1 + "A"
})
input.onButtonPressed(Button.AB, function () {
    if (password == _1) {
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
        _1 = ""
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(500)
        _1 = ""
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    _1 = "" + _1 + "B"
})
let password = ""
let _1 = ""
password = "ABBAB"
_1 = ""
