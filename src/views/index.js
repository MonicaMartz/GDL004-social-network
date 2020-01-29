import Home from './pages/home.js';
import SignIn from './pages/signin.js';
import Register from './pages/register.js';
import Profile from './pages/profile.js';
import { controler } from '../controler/index.js';


const components = {
    signIn: SignIn,
    register: Register,
    profile: Profile,
    home: Home
}

const userView = {

    initSignIn: () => {
        const userData = document.getElementById('signInForm');
        console.log(userData);

        userData.addEventListener('submit', (e) => {
          e.preventDefault();
          const newSignIn = {
            email: userData.userEmail.value,
            pass: userData.userPassword.value
          }
          console.log(newSignIn);
          userData.reset();
          controler.newSession(newSignIn);
          //crear un metodo  que mande newSignIn a controler y que model envie a firecloud
        })
     
    },


    initRegister: () => {
        const userInput = document.getElementById('register-form');
        console.log(userInput);

        userInput.addEventListener('submit', (e) => {
          e.preventDefault();
          const newUserFile = {
            userEmail: userInput.newEmail.value,
            userPass: userInput.newPassword.value
          }
          console.log(newUserFile);
          userInput.reset();
          controler.newUser(newUserFile);
        });
    },

<<<<<<< HEAD
    InitAccessGoogle: () => {
      const userGoogle = document.getElementById("button-Google");
      
      userGoogle.addEventListener("click",() => {
        controler.googleUser(userGoogle);
      });
     
   },
=======

    initAccessGoogle: () => {
      const userGoogle = document.getElementById("button-Google");
      
      userGoogle.addEventListener("click", () => {
        controler.googleUser(userGoogle);
      });
    },


   
>>>>>>> 64be396734d4f1baf58d75e0db2ffc7ca1455aef

    InitAccessFacebook: () => {
    const userFacebook = document.getElementById("button-Facebook");
    
    userFacebook.addEventListener("click",() => {
      controler.facebookUser(userFacebook);
    });
    
   },


}

/*accessGoogle: () => {
 // const userGoogle = document.getElementById("button-Google");
  
  userGoogle.addEventListener("click",ingresoGoogle);
 // return userGoogle;
  controler.newUser(newUserFile);
*/
export { components, userView };