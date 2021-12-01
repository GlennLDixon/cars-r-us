import { getInterior } from "./database.js";

const interior = getInterior()

document.addEventListener(
    "change",
    event => {

    }
)

export const Interior = () => {
    let html = ""
    html = "<ul>"

    for (const int of interior) {
        html += `<li>
            <input type="radio" name="metal" value="${int.id}" /> ${int.color} 
        </li>`
    }

    html = "</ul>"
    return html

}
