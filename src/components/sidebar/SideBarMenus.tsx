import React, {useEffect} from "react";
import { AppState } from '../../store/AppState'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faRegistered,
//   faSignInAlt,
//   faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { UserProfileSetType } from "../../store/user/Reducer";


const SideBarMenus = () => {

    /**We use the useSelector and useDispatch Hooks to access Redux's
capabilities: */
    const user = useSelector((state: AppState) => state.user);

    const dispatch = useDispatch();

    /**we use a useEffect Hook to call, dispatch, and update our UserProfile
object. */
    useEffect(() => {
        dispatch({
            type: UserProfileSetType,
            payload: {
                id: 1,
                userName: 'test user'
            }
        })
    }, [dispatch])

    return (
        <React.Fragment>
            <ul>
                {/* we must add a FontAwesome font for the UserProfile and then show the
current username */}
               <li>
               <FontAwesomeIcon icon={faUser} />
                    <span className="menu-name">{user?.userName}</span>
               </li>
               <li>
                    <FontAwesomeIcon icon={faRegistered} />
                    <span className="menu-name">register</span>
               </li>
            </ul>
        </React.Fragment>
    )
}

export default SideBarMenus;