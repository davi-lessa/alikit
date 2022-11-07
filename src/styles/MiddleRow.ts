import styled from 'styled-components';

export const MiddleRow = styled.div`
    grid-area: middlerow;
    display: grid;
    grid-template-columns: 1fr 300px;
    grid-template-rows: 1fr;
    grid-template-areas: "mainframe rightbar";
    width: 100%;
    max-width: var(--global-max-width);
    margin: 0 auto;
`