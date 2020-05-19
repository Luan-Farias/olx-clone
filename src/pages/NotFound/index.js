import React from 'react';
import { Link } from "react-router-dom";
const NotFound = () => (
    <div>
        <h1>Pagína não encontrada</h1>

        <Link to="/">Voltar para HOME</Link>
    </div>
);

export default NotFound;