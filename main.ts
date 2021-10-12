input.onButtonPressed(Button.A, function () {
    user_input = "" + user_input + "A"
})
input.onButtonPressed(Button.AB, function () {
    if (password == user_input) {
        basic.showIcon(IconNames.Yes)
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(5000)
        pins.servoWritePin(AnalogPin.P0, 0)
        user_input = ""
        basic.clearScreen()
    } else {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.showIcon(IconNames.No)
        basic.pause(500)
        user_input = ""
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    user_input = "" + user_input + "B"
})
let user_input = ""
let password = ""
password = "ABBAB"
user_input = ""
