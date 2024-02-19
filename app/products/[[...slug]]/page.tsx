import React from "react";

interface Props {
    params: { slug: string[] }
    searchParams: {sortOrder: string}
}

const ProductList = ({params: {slug}, searchParams: { sortOrder}}: Props) => {
    return (
        <>
            <h1>Product List</h1>
            <p>{slug}</p>
            <p>{sortOrder}</p>
        </>
    )
}

export default ProductList;