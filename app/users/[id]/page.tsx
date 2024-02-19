import { notFound } from "next/navigation";
import React from "react";

interface Props {
    params:{id: number}
}

const UserDetailsPage = (props:Props) => {
    if(props.params.id > 100) notFound()
    return (
        <>
            <h1>User Details</h1>
            <p>id: {props.params.id}</p>
        </>
    )
}

export default UserDetailsPage;