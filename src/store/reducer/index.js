
const INITIAL_STATE = {

    users: [{
        name: "Noman",
        email: "nomanmnasir@gmail.com"
    },
    {
        name: "Bast",
        email: "basit@gmail.com"
    }
    ]
}


export default (state = INITIAL_STATE, action) => {
    // console.log("action", action)
    switch (action.type) {
        case "SETDATA":
            return ({
                ...state,
                users: [...state.users, action.data]
            })
        default:
            return state;
    }
}