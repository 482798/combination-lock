_1 = 0

def on_button_pressed_a():
    global _1
    _1 += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global _1
    if _1 == 7:
        basic.show_icon(IconNames.YES)
        basic.pause(500)
        _1 = 0
        basic.clear_screen()
    else:
        basic.show_icon(IconNames.NO)
        basic.pause(500)
        _1 = 0
        basic.clear_screen()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global _1
    _1 += 2
input.on_button_pressed(Button.B, on_button_pressed_b)
