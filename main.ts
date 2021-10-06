input.onButtonPressed(Button.A, function () {
    input2 = "" + input2 + "A"
})
input.onButtonPressed(Button.AB, function () {
    if (password == input2) {
        basic.showIcon(IconNames.Yes)
        music.playMelody("G B A G C5 B A B ", 120)
        basic.pause(500)
        input2 = ""
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(500)
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
