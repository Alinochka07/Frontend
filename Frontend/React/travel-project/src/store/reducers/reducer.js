 

















// import {LOAD_TOURS_ERROR, LOAD_TOURS_LOADING, LOAD_TOURS_SUCCESS} from "./actions";



// const initialState = {
//    data: [],
//    loading: false,
//    error: ''
// };
// export default function reduxThunkReducer(state = initialState, action) {
//    switch (action.type) {
//        case LOAD_TOURS_LOADING: {
//            return {
//                ...state,
//                loading: true,
//                error:''
//            };
//        }
//        case LOAD_TOURS_SUCCESS: {
//            return {
//                ...state,
//                data: action.data,
//                loading: false
//            }
//        }
//        case LOAD_TOURS_ERROR: {
//            return {
//                ...state,
//                loading: false,
//                error: action.error
//            };
//        }
//        default: {
//            return state;
//        }
//    }
// }