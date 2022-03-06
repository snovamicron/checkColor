
const initialValue = ''

const BackgroundColorChange = (state = initialValue, action) => {
    switch (action.type) {
        case 'setColor':
            state = action.payload
            return state
        default: return state
    }
}

export default BackgroundColorChange