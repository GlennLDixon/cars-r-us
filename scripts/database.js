const database = {
    orderBuilder: {

    },
    paintColor: [
        {
            id: 1,
            name: "Silver",
            price: 1100
        },
        {
            id: 2,
            name: "Midnight Blue",
            price: 799
        },
        {
            id: 3,
            name: "Firebrick Red",
            price: 1599
        },
        {
            id: 4,
            name: "Spring Green",
            price: 650
        }
    ],
    interior: [
        {
            id: 1,
            name: "Beige Fabric",
            price: 373
        },
        {
            id: 2,
            name: "Charcoal Fabric",
            price: 499
        },
        {
            id: 3,
            name: "White Leather",
            price: 1099
        },
        {
            id: 4,
            name: "Black leather",
            price: 899
        }
    ],
    technology: [
        {
            id: 1,
            name: "Basic Package (basic sound system)",
            price: 999
        },
        {
            id: 2,
            name: "Navigation Package (includes integrated navigation controls)",
            price: 1599
        },
        {
            id: 3,
            name: "Visibility Package (includes side and reat cameras)",
            price: 1999
        },
        {
            id: 4,
            name: "Ultra Package (includes navigation and visibility packages)",
            price: 2599
        }
    ],
    wheels: [
        {
            id: 1,
            name: "17-inch pair Radial",
            price: 399
        },
        {
            id: 2,
            name: "17-inch pair Radial Black",
            price: 599
        },
        {
            id: 3,
            name: "18-inch pair Spoke Silver",
            price: 899
        },
        {
            id: 4,
            name: "18-inch pair Spoke Black",
            price: 1099
        }
    ],
    customOrders: [
        {
            id: 1,
            paintId: 2,
            interiorId: 4,
            techId: 1,
            wheelId: 3,
            timeStamp: 1216548215145
        }
    ]
}


// Getter functions
export const getPaintColor = () => {
    return database.paintColor.map(paint => ({...paint}))
}

export const getInterior = () => {
    return database.interior.map(fabric => ({...fabric}))
}

export const getTechnology = () => {
    return database.technology.map(tech => ({...tech}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}


// Setter functions
export const setPaintColor = (id) => {
    database.paintColor.paintId = id
}

export const setInterior = (id) => {
    database.interior.interiorId = id
}

export const setTechnology = (id) => {
    database.technology.techId = id
}
export const setWheels = (id) => {
    database.wheels.wheelId = id
}

export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}

    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    newOrder.timesStamp = Date.now()

    database.customOrders.push(newOrder)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}