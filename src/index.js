function displayPoem(response) {
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor:""
      });


}


function generatePoem(event) {
    event.preventDefault();
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "993a6b7650e8d3940tof6da3ca59d8f7";
    let prompt = `User instructions: Generate a french poem about ${instructionsInput.value}`;
    let context = `You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br/>. Sign off the poem with "SheCodes AI" wrapped in a <strong> element. Do not add a title. Make sure to follow the user instructions.`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    let poemElement = document.querySelector("#poem");
    
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="blink">⌛Generating a French poem about ${instructionsInput.value}</div>`;

    axios.get(apiURL).then(displayPoem);

}

let generatorFormElement = document.querySelector("#generator-form");
generatorFormElement.addEventListener("submit", generatePoem);