let typing_effect = document.getElementById("typing-effect");
let typing_effect_texts = ["ben tettmar", "developer", "student"]
let text_index = 0;
let i = 0;

function type_writer() {
    let text = typing_effect_texts[text_index];

    if (i < text.length) {
        typing_effect.innerHTML += text.charAt(i);
        i++;
        setTimeout(type_writer, 150);
    } else {
        setTimeout(() => {
            typing_effect.innerHTML = "";
            i = 0;
            text_index++;
            if (text_index >= typing_effect_texts.length) {
                text_index = 0;
            }
            type_writer();
        }, 2500);
    }
}

type_writer();