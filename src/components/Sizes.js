import React from 'react';

export default function Sizes({sizes}) {
    return (
        <div className="sizes">
            {
                sizes.map((sizes, index) => (
                    <button key={index}>{sizes}</button>
                ))
            }
        </div>
    )
}