import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { changeCheck } from "../../store/pet";
import "./CheckBox.css"

const CheckBox = ({ todo }) => {
    const dispatch = useDispatch()

    let defaultCheck = todo.checked
    let todoId = todo.id

    const [currentCheck, setCurrentCheck] = useState(defaultCheck)

    const updateCheck = async () => {
        await setCurrentCheck(!currentCheck);

        try {
            changeCheck(todoId, currentCheck)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <input
            type="checkbox"
            checked={currentCheck}
            onChange={updateCheck}
        />
    )
}

export default CheckBox
