const initState = {
    tours: [
        {id: 1, title: "Maldives Islands", price: 1299},
        {id: 2, title: "Turkey", price: 1299},
        {id: 3, title: "Georgia", price: 1299},
        {id: 4, title: "United Arab Emirates", price: 1299}
    ]
}

const tourReducer = (state = initState, action) => {
    return state
}

export default tourReducer;