import { getWheels, setWheels } from "./database.js"

const tires = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheels") {
            setWheels(parseInt(event.target.value))
        }
    }
)

export const Wheels = () => {
    let html = ""
    html = "<ul>"

    for (const tire of tires) {
        html += `<li>
            <input type="radio" name="wheels" value="${tire.id}" /> ${tire.type} 
        </li>`
    }

    html += "</ul>"
    return html

}