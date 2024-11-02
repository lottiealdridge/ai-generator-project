function generatePoem(event) {
    event.preventDefault();
    let poemElement = document.querySelector("#poem");
    new Typewriter('#poem', {
        strings: "The poem will be posted here",
        autoStart: true,
        delay: 1,
        cursor:""
      });

}

let generatorFormElement = document.querySelector("#generator-form");
generatorFormElement.addEventListener("submit", generatePoem);