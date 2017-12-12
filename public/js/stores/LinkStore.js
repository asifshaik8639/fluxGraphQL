import AppDispatcher from '../AppDispatcher';
import {EventEmitter} from "events";

let _links = [];

class LinkStore extends EventEmitter {
    
    constructor(props) {
        super(props);
        AppDispatcher.register(action => {
            switch(action.actionType) {
                   case 'RECIEVE_LINKS':
                       console.log("in switch case boss");
                       _links = action.links;
                        this.emit("change");
                        break;                    
                default:
           }
        });        
        
    }
    
    
    getAll() {
        return _links;
    }
    
}

export default new LinkStore();