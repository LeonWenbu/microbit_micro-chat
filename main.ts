input.onButtonPressed(Button.A, function () {
    radio.sendString("abc")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
