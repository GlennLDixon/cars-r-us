import { getInterior, setInterior} from "./database.js";

const interior = getInterior()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInterior(parseInt(event.target.value))
            let intId = parseInt(event.target.value)
            for (const int of interior) {
                if (intId === int.id) {
                    setInterior(int.color)
                }
            }
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
