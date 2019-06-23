import styled from "styled-components"
import { Link } from 'gatsby'

const ButtonLink = styled(Link)`
    display: inline-block;
    color: ${props => props.theme.colors.blue};
    padding: 0.75em 1em;
    border: 2px solid ${props => props.theme.colors.navy};
    font-weight: bold;
`;

export default ButtonLink
