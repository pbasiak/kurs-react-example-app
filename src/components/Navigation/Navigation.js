import React from 'react';
import {Link} from 'react-router-dom';

export default function Navigation() {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/product?name=awesome-book">Product > Awesome Book</Link>
            </li>
            <li>
                <Link to="/product?name=react-course">Product > React Course</Link>
            </li>
        </ul>
    );
}