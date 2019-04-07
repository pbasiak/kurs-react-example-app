import React from 'react';

import './Heading.scss';

export function Heading(props) {
    return (
        <h1 className="page-heading">
            {props.title}
        </h1>
    );
}
