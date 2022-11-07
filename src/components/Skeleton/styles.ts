import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: yellow;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px 1fr;
    grid-template-areas: "header"
                         "middlerow";
`;