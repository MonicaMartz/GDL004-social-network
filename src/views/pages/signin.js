export default() => {
    const signIn = `
        <h1 class="mainHeader">Our<i class="fab fa-suse"></i>Pets</h1>

        <form class="sign-in-form" id="signInForm">
            
                <label for="email-input">Email</label>
                <input name="userEmail" type="email" id="email-input" placeholder="Ingresa tu E-mail..."/>
        
                <label for="password-input">Password</label>
                <input name="userPassword" type="password" id="password-input" placeholder="Ingresa to password..."/>
            
                <button id="getInfo">Sign In</button>
<<<<<<< HEAD
        </form>
=======
        
        </form> 
>>>>>>> 64be396734d4f1baf58d75e0db2ffc7ca1455aef
        
                <p class="spacer"><i class="fas fa-bone"></i>OR<i class="fas fa-bone"></i></p>

                <p class="">Sign in with:</p>

                <ul class="social-sign-in">
                    <li><button id= "button-Google"><i class="fab fa-google"></i></button></li>
<<<<<<< HEAD
                    <li><button id= "button-Facebook"><i class="fab fa-facebook-f"></i></button></li>
                    <li><a href="#"><i class="fab fa-github"></i></a></i></li>
                </ul>
                
                <p>Don't have an account?<a href="#/register">SIGN UP</a></p>
        
=======
                    <li><i class="fab fa-github"></i></li>
                    <li><i class="fab fa-facebook-f"></i></li>
                </ul>
                
                <p>Don't have an account?<a href="#/register">SIGN UP</a></p>
       
>>>>>>> 64be396734d4f1baf58d75e0db2ffc7ca1455aef
    `;

    const divSignIn = document.createElement('div');
    divSignIn.innerHTML = signIn;
    return divSignIn;
};

