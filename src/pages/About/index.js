import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Home() {
    return (
        <Container>
            <h1>Página Sobre</h1>
            <Link to="/">Home</Link>
        </Container>
    );
}