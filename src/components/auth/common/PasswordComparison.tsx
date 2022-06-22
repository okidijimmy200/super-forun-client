import React, {FC} from 'react'
import { allowSubmit } from './Helpers'
import {
    isPasswordValid,
    PasswordTestResult
} from '../../../common/validators/PasswordValidator'

interface PasswordComparisonProps {
    dispatch: React.Dispatch<any>;
    password: string;
    passwordConfirm: string
}

const PasswordComparison: FC<PasswordComparisonProps> = ({
    dispatch,
    password,
    passwordConfirm
}) => {
    /**onChangePassword function is used to set the password and validate
whether registration is allowed to continue: */
    const onChangePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ payload: e.target.value, type: 'password' });
        const passwordCheck: PasswordTestResult = isPasswordValid(e.target.value)

        if(!passwordCheck.isValid) {
            allowSubmit(dispatch, passwordCheck.message, true);
            return;
        }
        passwordsSame(passwordConfirm, e.target.value);
    };
    /**onChangedPasswordConfirm function is used to set passwordConfirm
and validate whether registration is allowed to continue: */
    const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ payload: e.target.value, type: 'passwordConfirm'})
        passwordsSame(password, e.target.value);
    }
/**we use passwordsSame to check
whether the password and the confirmation password are equal. */
    const passwordsSame = (passwordVal: string, passwordConfirmVal: string) => {
        if (passwordVal !== passwordConfirmVal) {
            allowSubmit(dispatch, 'Passwords do not match', true);
            return false
        } else {
            allowSubmit(dispatch, '', false);
            return true
        }
    };
    return (
        <React.Fragment>
            <div>
                <label>password</label>
                <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={onChangePassword}
                />
            </div>
            <div>
                <label>password confirmation</label>
                <input
                type='password'
                placeholder='Password Confirmation'
                value={passwordConfirm}
                onChange={onChangePasswordConfirm}
                />
            </div>
        </React.Fragment>
    )
}

export default PasswordComparison