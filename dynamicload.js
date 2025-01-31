//Hente main-elementet fra index.html slik at jeg kan legge til dynamisk innhold i det:
const mainElement = document.getElementById("mainElement")

//Funksjon for å skrive ut dynamisk innhold og vise ressurser basert på category:
function displayResources(category) {
    //Variabel for å filtrere ressurser basert på kategori.
    //Sørger for at parameteren som sendes med ved kall av funksjonen er riktig:
    const resourcesFilter = resources.filter(resource => resource.category === category)

    //Oppretter variabel som holder på en string, slik at den kan lagre det dynamisk genererte innholdet:
    let resourceHTML = ""

    //Bruker .map for å iterere gjennom de filtrerte ressuresene og generere HTML for hver ressurs:
    resourcesFilter.map((resource) => resourceHTML +=
        `<article class="resources">
        <h2>${resource.category}</h2>
        <p>${resource.text}</p>
            <ul>
                <!-Itererer gjennom sources for ressursen og lager en liste med lenker
                .join kombinerer alle li-elementene til 1 sammenhengende streng i ul-listen.
                Kilde: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
                ->
                ${resource.sources.map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join("")}
            </ul>
        </article>`
    )

    //Oppdatere main med det dynamiske innholdet lagret i resourceHTML:
    mainElement.innerHTML = resourceHTML
}

//Funksjon som behandler onclick jeg har lagt på buttons i HTML. Den oppdaterer innhold basert på den klikkede kategorien.
//button representerer HTML-elementet (parameteren "this") som utløser funksjonen.
//content er en streng som sendes med onclick slik at riktig kategori vises, og riktige CSS-klasser legges til og fjernes:
function buttonClick(button, content) {
    //Finner den nåværende aktive knappen ved å hente CSS klassen "active":
    const activeButton = document.querySelector(".subject.active")

    //Fjerner klassen "active" fra den nåværende aktive knappen, hvis den finnes. Det sørger for at det bare kan være 1 knapp om gangen med klassen "active":
    if(activeButton) {
        activeButton.classList.remove("active")
    }

    //Legger til klassen "active" på den knappen som er klikket på:
    button.classList.add("active")

    //Kaller funksjonen for å generere dynamisk innhold basert på hvilken knapp som blir klikket på:
    displayResources(content)
}

//Kaller funksjonen for generere dynamisk innhold
//Sender med parameteren "HTML" for at funksjonen skal skrive ut HTML fra ressurser.js ved første lasting av siden:
displayResources("HTML")
