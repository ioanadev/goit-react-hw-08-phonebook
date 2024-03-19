import "./Login.css"
export default function Login() {
    return (
      <div className="login">
      {/* <Helmet> */}
        <title>Log in</title>
       

        <form className="formlogin"> 
           <h1 className="titlelogin" >Log in!</h1>
            <label className="labellogin">Email:</label>
            <br/>
            <input className="inputlogin" placeholder="exemple@exemple.com" type="email"/>
            <br/>
            <label className="labellogin">Password:</label>
            <br/>
            <input className="inputlogin" placeholder="password" type="password"/>
            <br/>
          <button type="button" className="buttonlogin">LOG IN</button>
        </form>
      {/* </Helmet>
      <RegisterForm /> */}
    </div>
    );
  }