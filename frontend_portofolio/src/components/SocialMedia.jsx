import React from 'react';
import {BsTwitter,BsInstagram} from 'react-icons/bs';
import {FaFacebook} from 'react-icons/fa';
import {ImLinkedin} from 'react-icons/im';


export const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <FaFacebook/>
        </div>
        <div>
            <BsInstagram/>
        </div>
        <div>
            <ImLinkedin/>
        </div>
        <div>
            <BsTwitter/>
        </div>
    </div>
  )
}
export default SocialMedia