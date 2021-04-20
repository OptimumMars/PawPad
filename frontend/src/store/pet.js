const SET_PETS = 'session/setPets';
const REMOVE_PET = 'session/removePet';

const setPets = (pets) => {
    return {
        type: SET_PETS,
        payload: pets,
    };
};

const removePet = () => {
    return {
        type: REMOVE_PET,
    };
};

export const getPets = (userId) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/pets`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    const pets = await response.json();
    dispatch(setPets(pets));
}

const initialState = { pets: null };

const petReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_PETS:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        case REMOVE_PET:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        default:
            return state;
    }
};

export default petReducer;
