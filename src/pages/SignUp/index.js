import React, { useState, useEffect } from 'react';

import { PageArea } from './styles';
import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';
import useApi from '../../helpers/OlxAPI';
import { doLogin } from '../../helpers/AuthHandler';

export default function SignIn() {
    const api = useApi();
    const [name, setName] = useState('');
    const [stateLoc, setStateLoc] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    const [stateList, setStateList] = useState([]);

    useEffect(()=>{
        const getStates = async () => {
            const slist = await api.getStates();

            setStateList(slist);
        }

        getStates();
    }, [api]);

    async function handleSubmit(e) {
        e.preventDefault();
        setDisabled(true);

        setError('');

        if(password !== confirmPassword) {
            setError('Senhas não coincidem');
            setDisabled(false);
            return;
        }
        const json = await api.register(name, email, password, stateLoc);

        if (json.error) {
            setError(json.error);
        } else {
            doLogin(json.token)
            window.location.href = '/';
        }
    }

    return (
        <PageContainer>
            <PageTitle>Cadastro</PageTitle>
            <PageArea>
    {error && <ErrorMessage>{error}</ErrorMessage>}

                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">Nome Completo</div>
                        <div className="area--input">
                            <input 
                                value={name} 
                                onChange={e => 
                                setName(e.target.value)} 
                                type="text" 
                                disabled={disabled} 
                                required
                            />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Estado</div>
                        <div className="area--input">
                            <select required value={stateLoc} onChange={e => setStateLoc(e.target.value)}>
                                <option></option>
                                {stateList.map((i, k) => <option value={i.id} key={k}>{i.name}</option>)}
                            </select>
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input 
                                value={email} 
                                onChange={e => 
                                setEmail(e.target.value)} 
                                type="email" 
                                disabled={disabled} 
                                required
                            />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input 
                                value={password} 
                                onChange={e => setPassword(e.target.value)} 
                                type="password" 
                                disabled={disabled} 
                                required
                            />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Confirmar senha</div>
                        <div className="area--input">
                            <input 
                                value={confirmPassword} 
                                onChange={e => setConfirmPassword(e.target.value)} 
                                type="password" 
                                disabled={disabled} 
                                required
                            />
                        </div>
                    </label>
                    
                    <label className="area">
                        <div className="area--input submit">
                            <button disabled={disabled}>Fazer Cadastro</button>
                        </div>
                    </label>
                </form>
                <div>
                    
                </div>
            </PageArea>
        </PageContainer>
    );
}