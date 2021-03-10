import React, { useState } from 'react';

import { PageArea } from './styles';
import {
    PageContainer,
    PageTitle,
    ErrorMessage,
} from '../../components/MainComponents';
import useApi from '../../helpers/OlxAPI';
import { doLogin } from '../../helpers/AuthHandler';

export default function SignIn() {
    const api = useApi();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        setDisabled(true);
        setError('');

        const json = await api.login(email, password);

        if (json.error) {
            setError(json.error);
            setDisabled(false);
        } else {
            doLogin(json.token, rememberPassword);
            window.location.href = '/';
        }
    }

    return (
        <PageContainer>
            <PageTitle>Login</PageTitle>
            <PageArea>
                {error && <ErrorMessage>{error}</ErrorMessage>}

                <form onSubmit={handleSubmit}>
                    <label className='area'>
                        <div className='area--title'>E-mail</div>
                        <div className='area--input'>
                            <input
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                type='email'
                                disabled={disabled}
                                required
                            />
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area--title'>Senha</div>
                        <div className='area--input'>
                            <input
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type='password'
                                disabled={disabled}
                                required
                            />
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area--title'>Lembrar Senha</div>
                        <div className='area--input'>
                            <input
                                checked={rememberPassword}
                                onChange={() =>
                                    setRememberPassword(!rememberPassword)
                                }
                                type='checkbox'
                                disabled={disabled}
                                id='checkbox'
                            />
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area--input submit'>
                            <button disabled={disabled}>Fazer login</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    );
}
