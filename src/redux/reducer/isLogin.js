
class account {
    constructor(userID, firstName, userName, groupID, statusLogin) {
        this.userID = userID;
        this.firstName = firstName;
        this.userName = userName;
        this.groupID = groupID;
        this.statusLogin = statusLogin;
    }
}

const defaultaccount = new account(0, '', '', 0, false);

const loginStateReducer = (state = defaultaccount, action) => {
    if (action.type === 'ISLOGINED') {
        const accountNew = new account(action.userID, action.firstName, action.userName, action.groupID, true);
        return accountNew;
    }
    if (action.type === 'ISLOGOFF') {
        const accountNew = new account(0, '', '', 0, false);
        return accountNew;
    }
    return state;
};

export default loginStateReducer;
