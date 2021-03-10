import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import { PageArea } from './styles';
import {
    PageContainer,
    PageTitle,
    ErrorMessage,
} from '../../components/MainComponents';
import useApi from '../../helpers/OlxAPI';

export default function AddAd() {
    const api = useApi();
    const history = useHistory();

    const fileField = useRef(null);

    const [categories, setCategories] = useState([]);

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [priceNegotiable, setPriceNegotiable] = useState(false);
    const [desc, setDesc] = useState('');

    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        async function getCategories() {
            const categoriesList = await api.getCategories();
            setCategories(categoriesList);
        }
        getCategories();
    }, [api]);

    async function handleSubmit(e) {
        e.preventDefault();
        setDisabled(true);
        setError('');

        const errors = [];

        if (!title.trim()) errors.push('Sem título');

        if (!category) errors.push('Sem categoria');

        if (errors.length !== 0) {
            setError(errors.join('\n'));
            setDisabled(false);
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('price', price);
        formData.append('priceneg', priceNegotiable);
        formData.append('desc', desc);
        formData.append('cat', category);

        if (fileField.current.files.length > 0) {
            for (let i = 0; i < fileField.current.files.length; i++) {
                formData.append('img', fileField.current.files[i]);
            }
        }

        const json = await api.addAd(formData);

        if (!json.error) return history.push(`/ads/${json.id}`);

        setError(json.error);
        setDisabled(false);
    }

    const priceMask = createNumberMask({
        prefix: 'R$ ',
        includeThousandsSeparator: true,
        thousandsSeparatorSymbol: '.',
        allowDecimal: true,
        decimalSymbol: ',',
    });

    return (
        <PageContainer>
            <PageTitle>Postar um anuncio</PageTitle>
            <PageArea>
                {error && <ErrorMessage>{error}</ErrorMessage>}

                <form onSubmit={handleSubmit}>
                    <label className='area'>
                        <div className='area--title'>Título</div>
                        <div className='area--input'>
                            <input
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                type='text'
                                disabled={disabled}
                                required
                            />
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area--title'>Categoria</div>
                        <div className='area--input'>
                            <select
                                disabled={disabled}
                                onChange={e => setCategory(e.target.value)}
                                required
                            >
                                <option></option>

                                {categories &&
                                    categories.map(category => (
                                        <option
                                            key={category._id}
                                            value={category._id}
                                        >
                                            {category.name}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area--title'>Preço</div>
                        <div className='area--input'>
                            <MaskedInput
                                mask={priceMask}
                                placeholder='R$ '
                                disabled={disabled || priceNegotiable}
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                            />
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area--title'>Preço Negociável</div>
                        <div className='area--input'>
                            <input
                                type='checkbox'
                                disabled={disabled}
                                checked={priceNegotiable}
                                onChange={e =>
                                    setPriceNegotiable(!priceNegotiable)
                                }
                            />
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area--title'>Descrição</div>
                        <div className='area--input'>
                            <textarea
                                disabled={disabled}
                                value={desc}
                                onChange={e => setDesc(e.target.value)}
                            ></textarea>
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area--title'>imagens (1 ou mais)</div>
                        <div className='area--input'>
                            <input
                                type='file'
                                disabled={disabled}
                                ref={fileField}
                                multiple
                            />
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area--input submit'>
                            <button disabled={disabled}>
                                Adicionar anúncio
                            </button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    );
}
