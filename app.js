class SpeechRecognition {
    constructor(option) {
        const SpeechToText = window.SpeechRecognition || window.webkitSpeechRecognition;
        this.speechApi = new SpeechToText();
        this.output = option.output ? option.output : document.createElement("div");
        this.speechApi.continuous = true;
        this.speechApi.interimResult = false;
        this.speechApi.onresult = (event) => {
            var resultIndex = event.resultIndex;
            var transcript = event.results[resultIndex][0].transcript;
            this.output.textContent += transcript;
        }
    }

    init() {
        this.speechApi.start();
    }
    stop() {
        this.speechApi.stop();
    }
}

window.onload = function () {
    var speech = new SpeechRecognition({
        output: document.querySelector(".output")
    });

    document.querySelector(".btn-start").addEventListener("click", () => {
        speech.init();

    });

    document.querySelector(".btn-end").addEventListener("click", () => {
        speech.stop();
    })
}