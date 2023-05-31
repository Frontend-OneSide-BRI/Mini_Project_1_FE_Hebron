// spotlight
const spotlight = document.querySelector("#spotlight")

const spotlightContainer = document.createElement("div")
spotlightContainer.className = "row"

fetch("./src/data/spotlight.json")
  .then((res) => res.json())
  .then((data) => {
    data.map((d, i) => {
      const div = document.createElement("div")

      switch (i) {
        case 0:
          div.className = "col-lg-3 col-md-4 col-sm-6 col-12"
          break
        case 1:
          div.className = "col-lg-3 col-md-4 col-sm-6 d-none d-sm-block"
          break
        case 2:
          div.className = "col-lg-3 col-md-4 d-none d-md-block"
          break
        case 3:
          div.className = "col-lg-3 d-none d-lg-block"
          break

        default:
          break
      }

      div.innerHTML = `<div class="collection-item">
        <img
          src=${d.image}
          alt=""
          class="w-100"
        />
        <div class="shadow-item">
          <h5>${d.title}</h5>
        </div>
      </div>`

      spotlightContainer.appendChild(div)
    })
  })
  .then(() => spotlight.appendChild(spotlightContainer))

// collection
const collection = document.querySelector("#collection")

const collectionContainer = document.createElement("div")
collectionContainer.className = "row g-3"

fetch("./src/data/data.json")
  .then((res) => res.json())
  .then((data) => {
    data.map((d) => {
      const div = document.createElement("div")
      div.className = "col-lg-3 col-md-4 col-sm-6 col-12 grid-item"

      div.innerHTML = `<div class="collection-item">
        <img
          src=${d.image}
          alt=""
          class="w-100"
        />
        <div class="shadow-item">
          <h5>${d.title}</h5>
        </div>
      </div>`

      collectionContainer.appendChild(div)
    })
  })
  .then(() => {
    collection.appendChild(collectionContainer)
    new Masonry(collectionContainer, {
      itemSelector: ".grid-item",
    })
  })

// handle bug masonry bootstrap on initial render
window.addEventListener("load", () => {
  setTimeout(() => {
    new Masonry(collectionContainer, {
      itemSelector: ".grid-item",
    })
  }, 500)
})
