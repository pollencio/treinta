import { dataRef } from 'services/firebase'

// AUTHENTICATION

export const changeMarkers = ({ action, value }) => {
  dataRef
    .doc('map')
    .get()
    .then((doc) => {
      let newList = doc.data().markers
      console.log(action, value)

      switch (action) {
        case 'ADD':
          newList.push(value)
          break
        case 'DELETE':
          newList.splice(value, 1)
          break
        default:
      }

      dataRef.doc('map').update({ markers: newList })
    })
}
