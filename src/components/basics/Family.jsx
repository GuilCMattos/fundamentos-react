import React from "react";

import MemberFamily from "./MemberFamily";



export default (props) => { 
    return ( 
        <div>
            <MemberFamily name="Pedro" sobrenome={props.sobrenome} /> <br />
            <MemberFamily name='João' {...props} /> <br />
            <MemberFamily name="Joana" sobrenome="Ferreira" /> <br />
            <MemberFamily name="Maria" {...props} />
        </div>
    ) 
}