import { getInterior } from "./database";

const interior = interior()

document.addEventListener(
    "change",
    event => {

    }
)

export const interior = () => {
    let html = ""
    let html = "ul"

    for (const int of interior) {
        html += `<li>
            <input type="radio" name="metal" value="${int.id}" /> ${int.color} 
        </li>`
    }

}
