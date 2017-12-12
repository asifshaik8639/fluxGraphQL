import {get, post} from 'jquery';
import ServerActions from './actions/ServerActions';

let API = {
    fetchLinks() {
        console.log('In fetch Links');
        get("/data/links").done(resp => {
            console.log('in Api resp',resp);
            ServerActions.recieveLinks(resp);
        });        
    },
    InsertData() {
        console.log('In Insert data');
         post("/post/data/links").done(resp => {
            console.log('In Insert data response ',resp);
            fetchLinks();
            
        });  
    }
};

export default API;