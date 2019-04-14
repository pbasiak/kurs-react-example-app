import styled from 'styled-components';

export const PageHeading = styled.h1`
    background-color: ${props => props.variant === 'secondary' ? '#508aff' : '#282c34'};
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

export const LargePageHeading = styled(PageHeading)`
    min-height: 50vh;
`;
