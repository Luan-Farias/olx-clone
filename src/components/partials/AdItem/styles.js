import styled from 'styled-components';

export const Item = styled.div`
a {
    display: block;
    border: 1px solid #f8f9fa;
    margin: 10px;
    text-decoration: none;
    padding: 10px;
    color: #000;
    background-color: #f8f9fa;
    transition: all ease .4s;

    &:hover {
        background-color: #EEE;
        border: 1px solid #CCC;
    }

    .itemImage {
        img {
            width: 100%;
            border-radius: 5px;
        }
    }
    .itemName {
        font-weight: bold;
    }
}
`;
