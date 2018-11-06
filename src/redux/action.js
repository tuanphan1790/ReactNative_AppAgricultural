export const loginedStatus = (userID, firstName, userName, groupID) =>
({ type: 'ISLOGINED', userID, firstName, userName, groupID });
export const logoffStatus = () => ({ type: 'ISLOGOFF' });