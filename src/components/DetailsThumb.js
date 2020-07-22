import React from 'react';

export default function DetailsThumb({ src, setIndex }) {
    return (
        <div className="thumb">
            {
                src.map((src, index) => (
                    <img src={src} alt="" key={index}
                        onClick={() => setIndex(index)} />
                ))
            }
        </div>
    )
}