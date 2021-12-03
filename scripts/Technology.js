import { getTechnology, setTechnology } from "./database.js"

const technology = getTechnology()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTechnology(parseInt(event.target.value))
            let techId = parseInt(event.target.value)
            for (const tech of technology) {
                if (techId === tech.id) {
                    setTechnology(tech.name)
                }
            }
        }
    }
)

export const Technology = () => {
    let html = ""
    html = "<ul>"

    for (const tech of technology) {
        html += `<li>
            <input type="radio" name="technology" value="${tech.id}" /> ${tech.name} 
        </li>`
    }

    html += "</ul>"
    return html

}