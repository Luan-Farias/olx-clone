import styled from 'styled-components';

export const PageArea = styled.div`
    form {
        background-color: #fff;
        border-radius: 3px;
        padding: 10px;
        box-shadow: 0px 3px #999;

        .area {
            display: flex;
            align-items: center;
            padding: 10px;
            max-width: 500px;

            .area--title {
                width: 200px;
                text-align: right;
                font-weight: bold;
                padding-right: 20px;
                font-size: 14px;
            }
            .area--input {
                flex: 1;
                display: flex;

                &#checkbox--area {
                    justify-content: start;
                }

                &.submit {
                    justify-content: center;
                }

                input,
                select,
                textarea {
                    width: 100%;
                    font-size: 14px;
                    padding: 5px;
                    border: 1px solid #ddd;
                    border-radius: 3px;
                    outline: 0;
                    transition: all ease 0.4s;

                    &:focus {
                        border: 1px solid #333;
                        color: #333;
                    }
                    &#checkbox {
                        width: auto;
                    }
                }

                input[type='checkbox'] {
                    width: auto;
                }

                textarea {
                    height: 150px;
                    resize: none;
                }

                button {
                    background-color: #0089ff;
                    border: 0;
                    padding: 5px 10px;
                    border-radius: 4px;
                    outline: 0;
                    color: #fff;
                    font-size: 15px;
                    cursor: pointer;
                    margin-left: 20px;

                    &:hover {
                        background-color: #006fce;
                    }
                }
            }
        }
    }
`;
