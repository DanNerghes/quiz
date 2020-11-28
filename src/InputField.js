import React from "react";

export default function InputField({ field, inputProps }) {
    return (
        <div className="form-group">
            <label htmlFor={field}>
                {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
                type="text"
                className="form-control"
                id={field}
                {...inputProps}
            />
        </div>
    );
}
