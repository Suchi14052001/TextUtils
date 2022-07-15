import React from 'react'

export default function Alert(props){
    const capitalise = (value) => {
        const lower = value.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };

    return (
        props.alert && // If this one evaluates to NULL, second one won't even be evaluated
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalise(props.alert.type)}:</strong> {props.alert.msg}
        </div>
    );
}