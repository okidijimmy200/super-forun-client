import React, {FC, useReducer} from "react";
import ReactModal from "react-modal";
import './Registration.css'
import ModalProps from "../types/ModalProps";
import userReducer from "./common/UserReducer";
import { allowSubmit } from "./common/Helpers";
import PasswordComparison from "./common/PasswordComparison";

// The isOpen prop controls how the modal is displayed,
const Registration: FC<ModalProps> = ({isOpen, onClickToggle}) => {
    /**we have the isRegisterDisabled local state value, which disables the
register button if the given values are not correct, and, of course, our local reducer,
userReducer: */
    const [
        {userName, password, email, passwordConfirm, resultMsg, isSubmitDisabled},
        dispatch,
    ] = useReducer(userReducer, {
        userName: 'davec',
        password: '',
        email: 'admin@admin.com',
        passwordConfirm: '',
        resultMsg: '',
        isSubmitDisabled: true
    });

    /**onChangeUserName function is used to set a userName and validate
whether registration is allowed to continue: */
    const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ payload: e.target.value, type: 'userName' });
        if(!e.target.value)
            allowSubmit(dispatch, 'Username cannot be empty', true);
        else allowSubmit(dispatch, '', false)
    };
    /**onChangeEmail function is used to set the email and validate whether
registration is allowed to continue: */
    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ payload: e.target.value, type:'email' });
        if(!e.target.value) allowSubmit(dispatch, 'Email cannot be empty', true)
        else allowSubmit(dispatch, '', false)
    }
    /**onClickRegister and onClickCancel. The
onClickRegister button click handler will submit the attempted registration */
    const onClickRegister = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        onClickToggle(e);
    };

    const onClickCancel = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        onClickToggle(e)
    };

    return (
        <ReactModal
          className="modal-menu"
          isOpen={isOpen}
          onRequestClose={onClickToggle}
          shouldCloseOnOverlayClick={true}
        >
          <form>
            <div className="reg-inputs">
              <div>
                <label>username</label>
                <input type="text" value={userName} onChange={onChangeUserName} />
              </div>
              <div>
                <label>email</label>
                <input type="text" value={email} onChange={onChangeEmail} />
              </div>
              <div>
                <PasswordComparison
                  dispatch={dispatch}
                  password={password}
                  passwordConfirm={passwordConfirm}
                />
              </div>
            </div>
            <div className="form-buttons">
              <div className="form-btn-left">
                <button
                  style={{ marginLeft: ".5em" }}
                  className="action-btn"
                  disabled={isSubmitDisabled}
                  onClick={onClickRegister}
                >
                  Register
                </button>
                <button
                  style={{ marginLeft: ".5em" }}
                  className="cancel-btn"
                  onClick={onClickCancel}
                >
                  Close
                </button>
              </div>
              <span className="form-btn-right">
                <strong>{resultMsg}</strong>
              </span>
            </div>
          </form>
        </ReactModal>
      );

}

export default Registration;