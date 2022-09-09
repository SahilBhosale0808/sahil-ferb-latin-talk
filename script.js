var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json";
function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandling(error) {
  alert("Uh oh,Error,Try again later");
}

function translateEvent() {
  document.querySelector("#txt-message").textContent = "Ferb🌽 nods and says";

  var Inputtext = txtInput.value;

  fetch(getTranslationURL(Inputtext))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      txtOutput.innerHTML = translatedText;
    })
    .catch(errorHandling);
}

btnTranslate.addEventListener("click", translateEvent);
