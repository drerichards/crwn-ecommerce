import DIRECTORY_DATA from '../../data/directoryData'

const INITIAL_STATE = {
    sections: DIRECTORY_DATA
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default directoryReducer