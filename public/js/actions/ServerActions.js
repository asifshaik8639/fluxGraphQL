import AppDispatcher from "../AppDispatcher";
//import ActionTypes from "../Constants";

let ServerActions = {
    recieveLinks(links) {
        console.log('in ServerActions');
        AppDispatcher.dispatch({
            actionType:'RECIEVE_LINKS',
            links
        })
    
    }
};

export default ServerActions;