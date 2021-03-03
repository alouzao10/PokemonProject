export default (state, payload) => {
    switch(payload.action){
        case 'ADD_CARD':
            let newCard = payload.data;
            // Add the new pet and return new Pets
            fetch('http://localhost:5000/trainers/', {
              method: 'POST',
              headers: { 'Content-type': 'application/json' },
              body: JSON.stringify(newCard),
            })
              .then((res) => res.json())
              .then((data) => {
                return [...state.trainers, data];
              });
            break;
        default:
        break;
    }
}