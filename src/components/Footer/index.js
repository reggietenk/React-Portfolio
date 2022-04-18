import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {

    return (
        <footer className="FooterItems">
            <div>
                <FontAwesomeIcon icon={['fab', 'github']} size="2x"/>
                 <FontAwesomeIcon icon={['fab', 'facebook']} size="2x"/>
                 <FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/>
                 <FontAwesomeIcon icon={['fab', 'instagram']} size="2x"/>
            </div>

            </footer>
    )
    
}

export default Footer
