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
<<<<<<< HEAD
      model.registerUser(newUserFile);
      //registro en la nube 
    }, 

    initControlerGoogleUser:() =>{
      userView.InitAccessGoogle()
=======
      model.registerUser(newUserFile); 
      model.registerInCloud(newUserFile); 
    }, 

    initControlerGoogleUser: () => {
      userView.initAccessGoogle()
>>>>>>> 64be396734d4f1baf58d75e0db2ffc7ca1455aef
    },

    googleUser: (userGoogle) => {
      model.ingresoGoogle(userGoogle);
    },
<<<<<<< HEAD

    initControlerFacebookUser:() =>{
      userView.InitAccessFacebook ()
    },

    facebookUser: (userFacebook) => {
      model.ingresoFacebook(userFacebook);
    },


=======
>>>>>>> 64be396734d4f1baf58d75e0db2ffc7ca1455aef
  
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
<<<<<<< HEAD
                controler.initControlerFacebookUser()
=======
>>>>>>> 64be396734d4f1baf58d75e0db2ffc7ca1455aef
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