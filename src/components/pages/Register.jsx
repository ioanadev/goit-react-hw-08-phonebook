import "./Register.css"
export default function Register() {
    return (
      <div className="register">
        {/* <Helmet> */}
          <title>Registration</title>
         

          <form className="formregister"> 
             <h1 className="titleregister" >Sing up!</h1>
            <label className="labelregister">Username:</label>
              <br/>
              <input className="inputregister" placeholder=" Julia" type="text"/>
              <br/>
              <label className="labelregister">Email:</label>
              <br/>
              <input className="inputregister" placeholder="exemple@exemple.com" type="email"/>
              <br/>
              <label className="labelregister">Password:</label>
              <br/>
              <input className="inputregister" placeholder="password" type="password"/>
              <br/>
            <button type="button" className="buttonregister">CREATE ACCONT</button>
          </form>
        {/* </Helmet>
        <RegisterForm /> */}
      </div>
    );
  }
  