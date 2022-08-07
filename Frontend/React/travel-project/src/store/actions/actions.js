// import Api from "../api";



// export const LOAD_TOURS_LOADING = 'REDUX_THUNK_LOAD_TOURS_LOADING';
// export const LOAD_TOURS_SUCCESS = 'REDUX_THUNK_LOAD_TOURS_SUCCESS';
// export const LOAD_TOURS_ERROR = 'REDUX_THUNK_LOAD_TOURS_ERROR';
// export const loadTours = () => dispatch => {
//    dispatch({ type: LOAD_TOURS_LOADING });
//    Api.getTours()
//        .then(response => response.json())
//        .then(
//            data => dispatch({ type: LOAD_TOURS_SUCCESS, data }),
//            error => dispatch({ type: LOAD_TOURS_ERROR, error: error.message || 'Unexpected Error!!!' })
//        )
// };