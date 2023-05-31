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

      categoryContainer.appendChild(div)
    })
  })

//   filter
const categoryOption = document.querySelectorAll(".category-option")

categoryOption.forEach((cat) => {
  cat.addEventListener("click", (e) => {
    e.preventDefault()
    categoryContainer.innerHTML = ""

    fetch("./src/data/data.json")
      .then((res) => res.json())
      .then((data) => {
        if(cat.dataset.category === 'all') {
          data
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

            categoryContainer.appendChild(div)
          })
        }

        data
          .filter((d) => d.category === cat.dataset.category)
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

            categoryContainer.appendChild(div)
          })
      })
  })
})
