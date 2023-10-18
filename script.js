import * as elements from "./elements.js"

function edit() {
  elements.brand.setAttribute("contenteditable", true)
  elements.plate.setAttribute("contenteditable", true)
  elements.year.setAttribute("contenteditable", true)
  elements.transmission.setAttribute("contenteditable", true)
  elements.km.setAttribute("contenteditable", true)
  elements.fuel.setAttribute("contenteditable", true)
  elements.details.setAttribute("contenteditable", true)
  elements.details2.setAttribute("contenteditable", true)
  elements.price.setAttribute("contenteditable", true)
  elements.conditions.setAttribute("contenteditable", true)
  elements.price.setAttribute("contenteditable", true)
  elements.optional.setAttribute("contenteditable", true)
  elements.comments.setAttribute("contenteditable", true)
}

document.querySelector("#edit").addEventListener("click", () => edit())
