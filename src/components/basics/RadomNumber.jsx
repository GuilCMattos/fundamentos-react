import React from "react";

export default ({max, min}) => {
   
    const NumRadom = parseInt(Math.random() * (max - min) + min)

    return(
        <>
        <h2>{NumRadom}</h2>
        </>
    );
}