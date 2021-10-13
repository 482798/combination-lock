def on_button_pressed_a():
    global User_Input
    User_Input = "" + User_Input + "A"
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global User_Input
    if Password == User_Input:
        basic.show_icon(IconNames.YES)
        pins.servo_write_pin(AnalogPin.P0, 180)
        basic.pause(5000)
        pins.servo_write_pin(AnalogPin.P0, 0)
        User_Input = ""
        basic.clear_screen()
    else:
        pins.servo_write_pin(AnalogPin.P0, 0)
        basic.show_icon(IconNames.NO)
        basic.pause(100)
        User_Input = ""
        basic.clear_screen()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global User_Input
    User_Input = "" + User_Input + "B"
input.on_button_pressed(Button.B, on_button_pressed_b)

User_Input = ""
Password = ""
Password = "ABBAB"
User_Input = ""