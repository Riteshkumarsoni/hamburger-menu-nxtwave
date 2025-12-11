import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <nav className="Header-bg-container">
    <div className="header-sub-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button data-testid="hamburgerIconButton" type="button">
            <GiHamburgerMenu className="menu-icon" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <button
              data-testid="closeButton"
              className="close-button"
              type="button"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <ul className="menu-items-container">
              <Link to="/">
                <li className="icon-heading-section">
                  <AiFillHome className="menu-icon" />
                  <h1 className="menu-heading">Home</h1>
                </li>
              </Link>
              <Link to="/about">
                <li className="icon-heading-section">
                  <BsInfoCircleFill className="menu-icon" />
                  <h1 className="menu-heading">About</h1>
                </li>
              </Link>
            </ul>
          </>
        )}
      </Popup>
    </div>
  </nav>
)

export default Header
