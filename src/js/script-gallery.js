const categoryContainer = document.querySelector("#category-container")

fetch("./src/data/data.json")
  .then((res) => res.json())
  .then((data) => {
    data.map((d) => {
      const div = document.createElement("div")
      div.className = "col-lg-3 col-md-4 col-sm-6 col-12 "

      div.innerHTML = `<div class="category-item w-100 ratio ratio-1x1">
        <img
          src=${d.image}
          alt=""
          class="w-100"
        />
        <div class="shadow-item">
          <h5>${d.title}</h5>
        </div>
      </div>`

      div.setAttribute("data-bs-toggle", "offcanvas")
      div.setAttribute("data-bs-target", "#offcanvasExample")

      div.addEventListener("click", () => {
        const offCanvas = document.querySelector("#offcanvasExample")

        offCanvas.innerHTML = `<div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">Detail Photo</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <img src=${d.image} class="w-100"/>
          <h5 class="m-2">${d.title}</h5>
        </div>`
      })

      categoryContainer.appendChild(div)
    })
  })

//   filter
const categoryOption = document.querySelectorAll(".category-option")
const form = document.querySelector(".form")

categoryOption.forEach((cat) => {
  cat.addEventListener("click", (e) => {
    e.preventDefault()
    categoryContainer.innerHTML = ""

    filterByCategory(cat)
  })
})

form.addEventListener("submit", (e) => {
  e.preventDefault()
  categoryContainer.innerHTML = ""
  const input = form.querySelector("input")

  filterBySearch(input.value)
})

function filterBySearch(keyword) {
  fetch("./src/data/data.json")
    .then((res) => res.json())
    .then((data) => {
      data
        .filter((d) => d.category.toLowerCase().includes(keyword) || d.title.toLowerCase().includes(keyword))
        .map((d) => {
          const div = document.createElement("div")
          div.className = "col-lg-3 col-md-4 col-sm-6 col-12 "

          div.innerHTML = `<div class="category-item w-100 ratio ratio-1x1">
            <img
              src=${d.image}
              alt=""
              class="w-100"
            />
            <div class="shadow-item">
              <h5>${d.title}</h5>
            </div>
          </div>`

          div.setAttribute("data-bs-toggle", "offcanvas")
          div.setAttribute("data-bs-target", "#offcanvasExample")

          div.addEventListener("click", () => {
            const offCanvas = document.querySelector("#offcanvasExample")

            offCanvas.innerHTML = `<div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExampleLabel">Detail Photo</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>  
            <div class="offcanvas-body">
              <img src=${d.image} class="w-100"/>
              <h5 class="m-2">${d.title}</h5>
            </div>`
          })

          categoryContainer.appendChild(div)
        })
    })
}

function filterByCategory(category) {
  fetch("./src/data/data.json")
    .then((res) => res.json())
    .then((data) => {
      if (category.dataset.category === "all") {
        data.map((d) => {
          const div = document.createElement("div")
          div.className = "col-lg-3 col-md-4 col-sm-6 col-12 "

          div.innerHTML = `<div class="category-item w-100 ratio ratio-1x1">
            <img
            src=${d.image}
            alt=""
            class="w-100"
            />
            <div class="shadow-item">
            <h5>${d.title}</h5>
            </div>
        </div>`

          div.setAttribute("data-bs-toggle", "offcanvas")
          div.setAttribute("data-bs-target", "#offcanvasExample")

          div.addEventListener("click", () => {
            const offCanvas = document.querySelector("#offcanvasExample")

            offCanvas.innerHTML = `<div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Detail Photo</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>  
          <div class="offcanvas-body">
            <img src=${d.image} class="w-100"/>
            <h5 class="m-2">${d.title}</h5>
          </div>`
          })

          categoryContainer.appendChild(div)
        })

        return
      }

      data
        .filter((d) => d.category === category.dataset.category)
        .map((d) => {
          const div = document.createElement("div")
          div.className = "col-lg-3 col-md-4 col-sm-6 col-12 "

          div.innerHTML = `<div class="category-item w-100 ratio ratio-1x1">
            <img
            src=${d.image}
            alt=""
            class="w-100"
            />
            <div class="shadow-item">
            <h5>${d.title}</h5>
            </div>
        </div>`

        div.setAttribute("data-bs-toggle", "offcanvas")
          div.setAttribute("data-bs-target", "#offcanvasExample")

          div.addEventListener("click", () => {
            const offCanvas = document.querySelector("#offcanvasExample")

            offCanvas.innerHTML = `<div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExampleLabel">Detail Photo</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>  
            <div class="offcanvas-body">
              <img src=${d.image} class="w-100"/>
              <h5 class="m-2">${d.title}</h5>
            </div>`
          })

          categoryContainer.appendChild(div)
        })
    })
}
