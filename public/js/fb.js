import { initializeApp } from 'firebase';

const fb_config = {

};

const app = initializeApp(fb_config);

export default function(){
    navigator.permissions.query({name:'geolocation'}).then(function(result) {
        if (result.state === 'granted') {
          showMap();
        } else if (result.state === 'prompt') {
          showButtonToEnableMap();
        }
        // Don't do anything if the permission was denied.
    });
    console.log("GETTING PERMISSIONS");
};