input.onButtonPressed(Button.A, function () {
    input2 = "" + input2 + "A"
})
input.onButtonPressed(Button.AB, function () {
    if (password == input2) {
        basic.showIcon(IconNames.Yes)
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(5000)
        pins.servoWritePin(AnalogPin.P0, 0)
        input2 = ""
        basic.clearScreen()
    } else {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.showIcon(IconNames.No)
        basic.pause(5000)
        input2 = ""
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    input2 = "" + input2 + "B"
})
let input2 = ""
let password = ""
password = "ABBAB"
input2 = ""
