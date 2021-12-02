import { getInterior, setInterior} from "./database.js";

const interior = getInterior()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)

export const Interior = () => {
    let html = ""
    html = "<ul>"

    for (const int of interior) {
        html += `<li>
            <input type="radio" name="interior" value="${int.id}" /> ${int.color} 
        </li>`
    }

    html += "</ul>"
    return html

}
