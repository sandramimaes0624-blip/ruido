input.onButtonPressed(Button.A, function () {
    basic.showNumber(1)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Hello!")
})
basic.forever(function () {
    radio.setGroup(1)
})
