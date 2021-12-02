import { Interior } from "./Interior.js"
import { PaintColor } from "./PaintColor.js"
// import { technology } from "./Technology.js"
// import { wheels } from "./Wheels.js"

document.addEventListener(
    "click",
    event => {

    }
)

export const CarPackage = () => {
    return `
        <h1>Cars R Us</h1>

        <article class="choices">
                <section class="choices__paint options">
                    <h2>Paint Color</h2>
                    ${PaintColor()}
                </section>
                <section class="choices__interior options">
                    <h2>Interior</h2>
                    ${Interior()}
                </section>
                <section class="choices__tech options">
                    <h2>Technology</h2>
                </section>
                <section class="choices__wheels options">
                    <h2>Wheels</h2>
                </section>
            </article>

            <article>
                <button id="orderButton">Create Custom Order</button>
            </article>
            
            <article class="customOrders">
                <h2>Card Package Orders</h2>
            </article>
    `
}