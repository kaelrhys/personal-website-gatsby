import styled from "styled-components"
import { Link } from 'gatsby'


const ButtonLink = styled(Link)`
    display: inline-block;
    color: ${props => props.theme.colors.blue};
    padding: 12px 18px;
    border: 3px solid ${props => props.theme.colors.navy};
    font-weight: bold;
`;
 
export default ButtonLink
