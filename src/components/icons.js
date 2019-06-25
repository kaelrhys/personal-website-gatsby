
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowDown, faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { space, color } from 'styled-system'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
library.add(fab, faArrowDown, faArrowRight, faTimes)

const Icon = styled(FontAwesomeIcon)`
    ${space}
    ${color}
`;
 
export default Icon
