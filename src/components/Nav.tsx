import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";
import './Nav.css'
import ReactModal from "react-modal";
import SideBarMenus from "./sidebar/SideBarMenus";
import { useWindowDimensions } from '../hooks/WindowDimensions'

// props thw child is expected to receive
interface ChildProps  {
    className: string;
    children: React.ReactNode;
}

const Nav: React.FC<ChildProps> = () => {
    /**we will see we have a new local state called
showMenu. We'll use this to control whether we show or hide our modal menu. */
    const [showMenu, setShowMenu] = useState(false);
    const { width } = useWindowDimensions();

    /**getMobileMenu to handle the logic of deciding what JSX to return. If we
are not running a mobile device, it returns nothing; otherwise, it returns the
FontAwesome icon for the hamburger menu: */
    const getMobileMenu = () => {
        if (width <= 768) {
            return (
                <FontAwesomeIcon 
                onClick={onClickToggle}
                icon={faBars} 
                size='lg' 
                className="nav-mobile-menu" />
            )
        }
        return null;
    }
/**when any request to close comes into the component, we
need to set the state controlling display so that it can be explicitly set to false;
otherwise, the modal will not go away. This is what onRequestClose does. The
shouldCloseOnOverlayClick property allows us to close the modal, even
when we click anywhere outside it. This is a commonly expected behavior by users,
so it's good to have. */
    const onClickToggle = (e: React.MouseEvent<Element, MouseEvent>) => {
        setShowMenu(!showMenu)
    }

    const onRequestClose = (
        e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
    ) => {
        setShowMenu(false)
    }
    return (
        <>
        <ReactModal
            className='modal-menu'
            isOpen={showMenu}
            onRequestClose={onRequestClose}
            shouldCloseOnOverlayClick={true}
            >
                <SideBarMenus />
        </ReactModal>
     <nav className="navigation">
       {getMobileMenu()}
       <strong>SuperForum</strong>
    </nav>;
        </>
    )

};
export default Nav;