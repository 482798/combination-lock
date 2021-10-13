input.onButtonPressed(Button.A, function () {
    User_Input = "" + User_Input + "A"
})
input.onButtonPressed(Button.AB, function () {
    if (Password == User_Input) {
        basic.showIcon(IconNames.Yes)
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(5000)
        pins.servoWritePin(AnalogPin.P0, 0)
        User_Input = ""
        basic.clearScreen()
    } else {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.showIcon(IconNames.No)
        basic.pause(500)
        User_Input = ""
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    User_Input = "" + User_Input + "B"
})
let User_Input = ""
let Password = ""
Password = "ABBAB"
User_Input = ""
