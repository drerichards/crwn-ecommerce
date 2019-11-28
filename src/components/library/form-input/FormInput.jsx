import React from 'react'
import './form-input.scss'

const FormInput = ({handleChange, label, ...inputProps}) => {
    return (
        <div className="group">
            {label 
                ? (
                    <label className={`${inputProps.value.length
                        ? 'shrink'
                        : ''} form-input-label`}>
                            {label}
                    </label>
                ) : null}
            <input className="form-input" onChange={handleChange} {...inputProps} />
        </div>
    )
}

export default FormInput