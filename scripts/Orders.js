import { getOrders } from "./database.js";

const buildOrderListItem = (order) => {
    return `<li> 
        ${order.id} ${order.type}
    </li>`
}