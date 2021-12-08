
const initialState = {
    notes: [
        {id: "1", title: 'my first note', content: "blah blah blah"},
        {id: "2", title: 'my second note', content: "blah blah blah"},
        {id: "3", title: 'my third note', content: "blah blah blah"}
    ]
}

const noteReducer = (state = initialState, action) =>{
    return state
}

export default noteReducer