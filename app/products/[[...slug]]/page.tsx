import React from "react";

interface Props {
    params: { slug: string[] }
}

const ProductList = ({params: {slug}}: Props) => {
    return (
        <>
            <h1>Product List</h1>
            <p>{slug}</p>
        </>
    )
}

export default ProductList;