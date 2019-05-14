import styled from "styled-components"

const ButtonLink = styled('a')`
    display: inline-block;
    color: ${props => props.theme.colors.blue};
    padding: 0.75em 1em;
    border: 2px solid ${props => props.theme.colors.navy};
    font-weight: bold;
`;

export default ButtonLink
