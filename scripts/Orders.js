import { getOrders } from "./database.js";

const buildOrderListItem = (order) => {
    return `<li> 
        Order #${order.id} placed at ${order.timeStamp}
    </li>`
}

export const Orders = () => {
    const orders = getOrders()
    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}