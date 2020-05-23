import React, { useState, useEffect } from 'react';

import { PageArea, SearchArea } from './styles';
import { PageContainer } from '../../components/MainComponents';
import useApi from '../../helpers/OlxAPI';
export default function SignIn() {
    const api = useApi();

    return (
        <>
            <SearchArea>
                <PageContainer>
                    <div className='searchBox'>
                        <form method="GET" action="/ads">
                            <input name="q" type="text" placeholder="O que você procura?" />
                            <select name="state">

                            </select>
                            <button>Pesquisar</button>
                        </form>
                    </div>
                    <div className='categoryList'></div>
                </PageContainer>
            </SearchArea>
            
            <PageContainer>
                <PageArea>
                    ...
                </PageArea>
            </PageContainer>
        </>
    );
}