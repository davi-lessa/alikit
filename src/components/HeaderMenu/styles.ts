import styled from 'styled-components';

export const Container = styled.div`
    grid-area: header;
    background-color: blue;
    display: flex;
    align-items: center;
    padding: 0 20px;
`;

export const HeaderContent = styled.div`
    max-width: var(--global-max-width);
    width: 100%;
    margin: 0 auto;
`;
