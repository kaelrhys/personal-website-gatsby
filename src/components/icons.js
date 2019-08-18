
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowDown, faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { space, color } from 'styled-system'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
library.add(faArrowDown, faArrowRight, faTimes, faTwitter, faInstagram, faLinkedinIn, faGithub)

const Icon = styled(FontAwesomeIcon)`
    ${space}
    ${color}
`;
 
export default Icon
