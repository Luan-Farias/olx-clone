import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { PageArea, SearchArea } from './styles';
import { PageContainer } from '../../components/MainComponents';
import AdItem from '../../components/partials/AdItem';
import useApi from '../../helpers/OlxAPI';
export default function SignIn() {
    const api = useApi();
 
    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);

    useEffect(() => {
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    }, [api]);

    useEffect(() => {
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
    }, [api]);

    useEffect(() => {
        const getRecentAds = async () => {
            const json = await api.getAds({
                sort: 'desc',
                limit: 8
            });
            setAdList(json.ads);
        }
        getRecentAds();
    }, [api]);

   return (
        <>
            <SearchArea>
                <PageContainer>
                    <div className='searchBox'>
                        <form method="GET" action="/ads">
                            <input name="q" type="text" placeholder="O que você procura?" />
                            <select name="state">
                                {stateList.map((i, k) => <option value={i.id} key={k}>{i.name}</option>)}
                            </select>
                            <button>Pesquisar</button>
                        </form>
                    </div>
                    <div className='categoryList'>
                        {categories.map((i, k) => (
                            <Link 
                                key={k} 
                                to={`/ads/?cat=${i.slug}`} 
                                className="categoryItem"
                            >
                                <img src={i.img} alt="" />
                                <span>{i.name}</span>
                            </Link>
                        ))}
                    </div>
                </PageContainer>
            </SearchArea>
            
            <PageContainer>
                <PageArea>
                    <h2>Anúncios recentes</h2>

                    <div className="list">
                        {adList.map((i, k) => <AdItem key={k} data={i} />)}
                    </div>

                    <Link to="/ads" className="seeAllLink">Ver todos</Link>

                    <hr/>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo ex ut justo ornare ultricies. Morbi vitae hendrerit tortor. Pellentesque imperdiet laoreet lorem, et viverra nibh tristique et. In vel turpis sit amet felis eleifend sollicitudin. Sed diam mauris, egestas ut finibus in, egestas in nisl. Etiam justo massa, egestas ac vestibulum vel, venenatis in augue. Praesent vestibulum quis purus id elementum.
                </PageArea>
            </PageContainer>
        </>
    );
}