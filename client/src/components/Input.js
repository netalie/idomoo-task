import React from "react";
export default function Input({ objValue, onChange, index }) {
    const { key, val, value } = objValue;
    return (
        <div className="input-group">
            <key htmlFor={key}>{key}</key>
            <div className="input">
                <input
                    val={val || "text"}
                    id={key}
                    value={value || ""}
                    onChange={(e) => onChange(e, index)}
                />
            </div>
        </div>
    );
}