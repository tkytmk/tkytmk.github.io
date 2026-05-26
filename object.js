let game = {

    startTime: null,
    stopTime: null,
    second: null,
    displayArea: document.getElementById(`display_area`),

    start: function () {
        game.displayArea.innerText = `計測中`;
        game.startTime = Date.now();
    },

    stop: function () {
        game.stopTime = Date.now();
        game.second = (game.stopTime - game.startTime) / 1000

        if (9.5 <= game.second && game.second <= 10.5) {
            game.displayArea.innerText = game.second + `秒でした。すごい！`;
        } else {
            game.displayArea.innerText = game.second + `秒でした。残念……`;
        }
    },

}

if (confirm(`OKを押して、ちょうど10秒経ったと思ったら何かキーを押してください`)) {
    game.start()
    let option = {
        once: true,
    }
    document.body.addEventListener(
        `keydown`,
        game.stop,
        option
    )
}