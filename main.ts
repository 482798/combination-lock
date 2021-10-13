input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    User_Input = "" + User_Input + "A"
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    if (Password == User_Input) {
        if (_1 > 4) {
            pins.servoWritePin(AnalogPin.P0, 0)
            basic.showIcon(IconNames.No)
            basic.pause(300)
            User_Input = ""
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.Yes)
            pins.servoWritePin(AnalogPin.P0, 180)
            basic.pause(5000)
            pins.servoWritePin(AnalogPin.P0, 0)
            User_Input = ""
            basic.clearScreen()
        }
        
    } else {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.showIcon(IconNames.No)
        _1 += 1
        basic.pause(300)
        User_Input = ""
        basic.clearScreen()
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    User_Input = "" + User_Input + "B"
})
let User_Input = ""
let Password = ""
let _1 = 0
Password = "ABBAB"
User_Input = ""
_1 = 0
basic.forever(function on_forever() {
    
    _1 = 0
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
})
