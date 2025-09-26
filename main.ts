let Temperature = 0
input.onGesture(Gesture.Shake, function () {
    Temperature = input.temperature()
    basic.showNumber(Temperature)
    basic.pause(1000)
    if (Temperature < 20) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Sad)
    } else if (Temperature < 30) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.twinkle), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Happy)
    } else {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
        basic.showIcon(IconNames.Angry)
    }
})
