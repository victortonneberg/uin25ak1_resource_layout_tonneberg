//Hente main-elementet fra index.html slik at jeg kan legge til dynamisk innhold i det:
const mainElement = document.getElementById("mainElement")

//Funksjon for å skrive ut dynamisk innhold:
function displayResources(category) {
    //Variabel for å filtrere ressurser basert på kategori:
    const resourcesFilter = resources.filter(resource => resource.category === category)

    //Generere HTML dynamisk:
    let resourceHTML = ""

    resourcesFilter.map((resource) => resourceHTML +=
        `<article class="resources">
        <h2>${resource.category}</h2>
        <p>${resource.text}</p>
            <ul>
                ${resource.sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join("")}
            </ul>
        </article>`
    )

    //Oppdatere main med det dynamiske innholdet:
    mainElement.innerHTML = resourceHTML
}



//Kaller funksjonen for generere dynamisk innhold:
displayResources("HTML")
