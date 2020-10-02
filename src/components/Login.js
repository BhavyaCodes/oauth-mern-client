import React from "react";

function Login() {
  return (
    <div>
      <a href="https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=https://oauth-mern-client.vercel.app/auth/google/callback&prompt=consent&response_type=code&client_id=463096576330-nurufe6fcucnrma5ab9iv0idtqev5ir9.apps.googleusercontent.com&scope=email%20openid%20profile&access_type=offline">
        <button className="btn btn-primary">Login with google</button>
      </a>
    </div>
  );
}

export default Login;
