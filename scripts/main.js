import { CarPackage } from "./CarPackage.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = CarPackage()
}

document.addEventListener('stateChange', () => {
    renderAllHTML()
})

renderAllHTML()