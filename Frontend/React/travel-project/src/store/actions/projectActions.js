export const createProject = (Tours) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('Tours')
        dispatch({ type: 'CREATE_PROJECT', Tours})
    }
}