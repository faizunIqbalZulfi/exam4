import { ADD_PLACE, DELETE_PLACE, CREATE_DATA } from "./actionTypes";

export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    placeName: placeName
  };
};

// export const deletePlace = (items, uid) => {
//   var arrData = [];
//   var rawData = items.val();
//   console.log(rawData);

//   Object.keys(rawData).forEach(id => {
//     if (uid === rawData[i].uid) {
//       arrData.push({
//         key: id,
//         nama: rawData[id].nama,
//         usia: rawData[id].usia,
//         jabtan: rawData[id].jabtan,
//         image: {
//           uri:
//             "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
//         }
//       });
//     }
//   });
//   return {
//     type: DELETE_PLACE,
//     payload: arrData
//   };
// };

export const createData = items => {
  var arrData = [];
  var rawData = items.val();
  //   console.log(uid);

  if (rawData) {
    Object.keys(rawData).forEach(id => {
      arrData.push({
        key: id,
        nama: rawData[id].nama,
        usia: rawData[id].usia,
        jabatan: rawData[id].jabatan,
        image: {
          uri:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        }
      });
    });
  }

  return {
    type: CREATE_DATA,
    payload: arrData
  };
};
