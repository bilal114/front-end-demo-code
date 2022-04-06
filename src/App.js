import logo from './logo.svg';
import './App.css';
import axios from "axios"

import SocialButton from './components/SocialButton';

// import SocialLogin from 'react-social-login';
function App() {


  const handleGoogleSocialLogin = (user) => {
    
    if(user){
      console.log(user._token,user._token.accessToken,' test results');  
      axios.get('http://localhost:8000/api/googlelogin?accessToken='+user._token.accessToken).
      then((res) => {
        console.log(res, res?.data);
      })
    }
  };

  const handleFacebookSocialLogin = (user) => {
    
    if(user){
      console.log(user._token,user._token.accessToken,' test results');  
      axios.get('http://localhost:8000/api/facebooklogin?accessToken='+user._token.accessToken).
      then((res) => {
        console.log(res, res?.data);
      })
    }
  };
  
  const handleSocialLoginFailure = (err) => {
    console.error(err);
  };

  return (
    <div className="App">
      <header className="App-header">
       

        <SocialButton 
        provider='google'
        appId={'909620573866-d41cl74d8r75imtrjdmegjjahio3ct7e.apps.googleusercontent.com'}
        onLoginSuccess={handleGoogleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
        >
          Login with Google
        </SocialButton>
        <SocialButton 
        provider='facebook'
        appId={'357207563015590'}
        onLoginSuccess={handleFacebookSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
        >
          Login with Facebook
        </SocialButton>
        {/* <SocialButton 
          provider='instagram'
          appId={'496941435488709'}
          onLoginSuccess={handleSocialLogin}
          onLoginFailure={handleSocialLoginFailure}
          redirect={'https://pure-bastion-94421.herokuapp.com/auth'}
        >
          Login with Instagram
        </SocialButton> */}
      </header>
    </div>
  );
}

export default App;
