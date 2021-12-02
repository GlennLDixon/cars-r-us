import { getPaintColor, setPaintColor } from "./database.js"

const paintColor = getPaintColor()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paintColor") {
            setPaintColor(parseInt(event.target.value))
            let paintId = parseInt(event.target.value)
            for (const paint of paintColor) {
                if (paintId === paint.id) {
                    setWheels(paint.color)
                }
            }
        }
    }
)

export const PaintColor = () => {
    let html = ""
    html = "<ul>"

    for (const color of paintColor) {
        html += `<li>
            <input type="radio" name="paintColor" value="${color.id}" /> ${color.color} 
        </li>`
    }

    html += "</ul>"
    return html

}