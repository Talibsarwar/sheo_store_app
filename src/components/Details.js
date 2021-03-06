import React, { useContext, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DataContext } from './DataProvider';
import Colors from './Colors';
import Sizes from './Sizes';
import DetailsThumb from './DetailsThumb';

export default function Details() {
    const { id } = useParams();
    const [products] = useContext(DataContext);
    const [index, setIndex] = useState(0)
    const srcDiv = useRef();

    const details = products.filter((product, index) => {
        return product._id === id
    })

    const handleMouseMove = e => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        srcDiv.current.style.backgroundPosition = `${x}% ${y}%`
    }
    return (
        <>
            {
                details.map(product => (
                    <div className="details" key={product._id}>
                        <div className="img-container" onMouseMove={handleMouseMove}
                            style={{ backgroundImage: `url(${product.src[index]})` }} ref={srcDiv}
                            onMouseLeave={() => srcDiv.current.style.backgroundPosition = `center`} />
                        <div className="box-details">
                            <h2 title={product.title}>{product.title}</h2>
                            <h3>${product.price}</h3>
                            <Colors colors={product.colors} />
                            <Sizes sizes={product.sizes} />
                            <DetailsThumb src={product.src} setIndex={setIndex} />
                            <p>{product.description}</p>
                            <p>{product.content}</p>
                            <Link className="cart" to="/cart">Add to cart</Link>
                        </div>
                    </div>
                ))
            }
        </>
    )
}