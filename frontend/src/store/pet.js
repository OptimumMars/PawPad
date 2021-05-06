import { fetch } from './csrf';


const SET_PETS = 'pets/setPets';
const SET_ACTIVE = 'pets/setActive'
// const REMOVE_PET = 'pets/removePet';

const setPets = (pets) => {
    return {
        type: SET_PETS,
        payload: pets,
    };
};

const setActive = (pet) => {
    return {
        type: SET_ACTIVE,
        payload: pet,
    };
};

// const removePet = () => {
//     return {
//         type: REMOVE_PET,
//     };
// };

export const getPets = (userId) => async (dispatch) => {
    const { data: pets } = await fetch(`/api/users/${userId}/pets`, {
        method: 'GET',
    })

    dispatch(setPets(pets));
}

export const removePet = (petId) => async () => {
    const response = await fetch(`/api/pets/${petId}`, {
        method: "DELETE",
    });
}

export const removeTodo = (todoId) => async () => {
    const response = await fetch(`/api/todos/${todoId}`, {
        method: "DELETE",
    });
}

export const removeNote = (noteId) => async () => {
    const response = await fetch(`/api/notes/${noteId}`, {
        method: "DELETE",
    });
}

export const getActivePet = (petId) => async (dispatch) => {
    const { data: pet } = await fetch(`/api/pets/${petId}`, {
        method: 'GET',
    })

    dispatch(setActive(pet));
}

export const newTodo = async (item, petId) => {
    const response = await fetch(`/api/todos/new`, {
        method: "POST",
        body: JSON.stringify({
            item,
            petId
        }),
    });
    return response.ok;
}

export const newNote = async (title, content, petId) => {
    const response = await fetch('/api/notes/new', {
        method: "POST",
        body: JSON.stringify({
            title,
            content,
            petId
        }),
    });
    return response.ok;
}

export const newPet = async (name, type, userId) => {
    const response = await fetch('/api/pets/new', {
        method: "POST",
        body: JSON.stringify({
            name,
            type,
            userId
        }),
    });
    return response.ok;
}

export const changeCheck = async (todoId, currentCheck) => {
    const checked = !currentCheck;

    const response = await fetch(`/api/todos/${todoId}/check`, {
        method: "PUT",
        body: JSON.stringify({
            checked
        }),
    });

    return response.ok;
}

const initialState = {};

const petReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_PETS:
            newState = Object.assign({}, state);
            newState.pets = action.payload;
            return newState;
        case SET_ACTIVE:
            newState = Object.assign({}, state);
            newState.active = action.payload;
            return newState;
        // case REMOVE_PET:
        //     newState = Object.assign({}, state);
        //     newState.pet = null;
        //     return newState;
        default:
            return state;
    }
};

export default petReducer;
