//Hente main-elementet fra index.html slik at jeg kan legge til dynamisk innhold i det:
const mainElement = document.getElementById("mainElement")

//Funksjon for å skrive ut dynamisk innhold:
function displayResources(category) {
    //Variabel for å filtrere ressurser basert på kategori:
    //Sørger for at parameteren som sendes med ved kall av funksjonen er riktig. 
    const resourcesFilter = resources.filter(resource => resource.category === category)

    //Generere HTML dynamisk:
    let resourceHTML = ""

    //Bruker .map for å iterere gjennom de filtrerte ressuresene og generere HTML for hver ressurs:
    resourcesFilter.map((resource) => resourceHTML +=
        `<article class="resources">
        <h2>${resource.category}</h2>
        <p>${resource.text}</p>
            <ul>
                <!-Itererer gjennom sources for ressursen og lager en liste med lenker->
                ${resource.sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join("")}
            </ul>
        </article>`
    )

    //Oppdatere main med det dynamiske innholdet:
    mainElement.innerHTML = resourceHTML
}

//Hente alle knappene med klassen "subject".
const buttons = document.querySelectorAll('.subject')

//Setter første button (index = 0) som aktiv ved første lasting av siden:
buttons[0].classList.add("active")
// displayResources(buttons[0].innerHTML);

//Legger til eventlistener på alle knappene:
buttons.forEach(button => {
    button.addEventListener("click", () => {
        //Henter klassen/klassene til button:
        const activeButton = document.querySelector(".subject.active")

        //hvis det er en aktiv button, fjern klassen "active":
        if(activeButton) {
            activeButton.classList.remove("active") 
        }

        //Legger til klassen "active" på den buttonen som er klikket på:
        button.classList.add("active")

        //Kaller funksjonen for å generere dynamisk innhold basert på hvilken button som blir klikket på:
        displayResources(button.innerHTML)
    }) 
})


//Kaller funksjonen for generere dynamisk innhold
//Sender med parameteren "HTML" for at funksjonen skal skrive ut HTML fra ressurser.js ved første lasting av siden:
displayResources("HTML")
