import React from 'react';

export default function TextArea({ id, value, onChange, className = '', rows = 4, required = false,disabled = false }) {
    return (
        <textarea
            id={id}
            value={value}
            onChange={onChange}
            className={`border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ${className}`}
            rows={rows}
            required={required}
            disabled={disabled}
        />
    );
}