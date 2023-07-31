import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { INSTAGRAM_LINK, TIKTOK_LINK, YOUTUBE_LINK, EMAIL_ADDRESS } from '../constants'

export function SocialIcons() {
  return (
    <ul className="home-about-social-links">
      <li className="social-icons">
        <a
          href={INSTAGRAM_LINK}
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <AiFillInstagram />
        </a>
      </li>
      <li className="social-icons">
        <a
          href={YOUTUBE_LINK}
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <AiFillYoutube />
        </a>
      </li>
      <li className="social-icons">
        <a
          href={TIKTOK_LINK}
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <FontAwesomeIcon icon={faTiktok} />
        </a>
      </li>
      <li className="social-icons">
        <a
          href={`mailto:${EMAIL_ADDRESS}`}
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
    </ul>
  )
}
