import { model } from '../model/index.js';
import { components, userView} from '../views/index.js';

export const controler = {
    initControlerSignIn: () => {
        userView.initSignIn()
    },

    newSession: (newSignIn) => {
      model.verifyUser(newSignIn);  
    }, 

    initControlerRegister: () =>{
        userView.initRegister()
    },

    newUser: (newUserFile) => {

      model.registerUser(newUserFile); 
     // model.registerInCloud(newUserFile); 
    }, 

    initControlerGoogleUser: () => {
      userView.initAccessGoogle()

    },

    googleUser: (userGoogle) => {
      model.ingresoGoogle(userGoogle);
    },

    initControlerFacebookUser:() =>{
      userView.InitAccessFacebook ()
    },

    facebookUser: (userFacebook) => {
      model.ingresoFacebook(userFacebook);
    },
  
     changeTmp: (hash) => {
      const sectionMain = document.getElementById('sectionPages');
      sectionMain.innerHTML = '';
  
      switch (hash) {
          case '':
          case '#':
          case '#/home':  
                sectionMain.appendChild(components.home());
              break;
          case '#/signin':
                sectionMain.appendChild(components.signIn());
                controler.initControlerSignIn()
                controler.initControlerGoogleUser()
                controler.initControlerFacebookUser()
              break;  
          case '#/register':
                sectionMain.appendChild(components.register())
                controler.initControlerRegister()
              break;
          case '#/profile':
                sectionMain.appendChild(components.profile());
              break;
          // case '#/lugares':
              // { sectionMain.appendChild(components[id]()); }
             // break;
              default:
                sectionMain.appendChild(components.different())
      }
    }
  }