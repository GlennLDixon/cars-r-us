import { CarPackage } from "./CarPackage.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = CarPackage()
}

document.addEventListener('stateChanged', event => {
    console.log("This has changed")
    renderAllHTML()
})

renderAllHTML()