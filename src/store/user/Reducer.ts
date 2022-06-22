/**create an action type called UserProfileSetType so that our
UserProfileReducer can be distinguished from other reducers. */
export const UserProfileSetType = 'USER_PROFILE_SET';

/**we must create a payload type called UserProfilePayload. This is the
data that will be in our actions when they are dispatched later. */
export interface UserProfilePayload {
    id: string;
    userName: string
}

/**we must create the UserProfileAction interface, which is of the action
type. This is used to distinguish an action for UserProfiles from some other action
type. */
export interface UserProfileAction {
    type: string;
    payload: UserProfilePayload | null;
}

export const UserProfileReducer = (
    state: any = null,
    action: UserProfileAction
): UserProfilePayload | null => {
    switch (action.type) {
        case UserProfileSetType:
            return action.payload
        default:
            return state
    }
}