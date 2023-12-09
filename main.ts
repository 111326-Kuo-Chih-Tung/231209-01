input.onButtonPressed(Button.A, function () {
    // 小蜜蜂第一段
    music.play(music.stringPlayable("G - E - E - - F ", 500), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("- D - D - - C - ", 500), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("D - E - F - G - ", 500), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G - G - - G - E ", 500), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("- E - - F - D - ", 500), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("D - - C - E - G ", 500), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("- G - C - - - - ", 500), music.PlaybackMode.UntilDone)
})
function 燈 (num: number) {
    if (num < 6) {
        X = num - 1
        Y = 0
    } else if (num >= 6 && num < 9) {
        X = 4
        Y = num - 5
    } else if (num >= 9 && num < 14) {
        X = 13 - num
        Y = 4
    } else if (num >= 14 && num < 17) {
        X = 0
        Y = 17 - num
    } else if (num >= 17 && num < 20) {
        X = num - 16
        Y = 1
    } else if (num == 20) {
        X = 3
        Y = 2
    } else if (num >= 21 && num < 24) {
        X = 4 - (num - 20)
        Y = 3
    } else if (num >= 24 && num < 26) {
        X = num - 23
        Y = 2
    }
    led.toggle(X, Y)
}
let Y = 0
let X = 0
basic.clearScreen()
let _ = 0
basic.forever(function () {
    for (let _2 = 0; _2 <= 25; _2++) {
        燈(_2)
        basic.pause(100)
    }
    for (let _2 = 0; _2 <= 25; _2++) {
        燈(25 - _2)
        basic.pause(100)
    }
})
