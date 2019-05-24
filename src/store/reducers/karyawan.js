import { ADD_PLACE, DELETE_PLACE, CREATE_DATA } from "../actions/actionTypes";

const initialState = {
  karyawan: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_PLACE:
    //   return {
    //     ...state,
    //     karyawan: state.karyawan.concat({
    //       key: Math.random().toString(),
    //       value: action.placeName,
    //       image: {
    //         uri:
    //           "https://freerangestock.com/sample/78746/halloween-cat-icon-means-trick-or-treat-and-autumn.jpg"
    //       }
    //     })
    //   };

    case DELETE_PLACE:
      return {
        ...state,
        karyawan: action.payload
      };

    case CREATE_DATA:
      return {
        ...state,
        karyawan: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
