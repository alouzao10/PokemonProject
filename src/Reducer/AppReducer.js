export default (state, payload) => {
    switch(payload.action){
        case 'ADD_CARD':
            let newCard = payload.data.newCard;
            let userID = payload.data.userID;
            // Add the new card to the current trainer and return updates
            // Use the PUT method, see example from crash course

            break;
        default:
        break;
    }
}