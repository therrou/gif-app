import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        // console.log(e.target.value)
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories( category => [inputValue, ...category]);
            setInputValue('')
        }
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input
                type='text'
                value = {inputValue}
                onChange = { handleChange }
                placeholder= 'Search for...'
            /> 
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
export default AddCategory;