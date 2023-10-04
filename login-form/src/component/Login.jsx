import '../styles/Login.css'
import img from '../images/signin-image.jpg'

export const SignIn = () =>{
    return (
        <div className="main">
            {/* Sing in  Form */}
            <section className="sign-in">
                <div className="container">
                <div className="signin-content">
                    <div className="signin-image">
                    <figure>
                        <img src={img} alt="sing up image" />
                    </figure>
                    <a href="#" className="signup-image-link">
                        Create an account
                    </a>
                    </div>
                    <div className="signin-form">
                    <h2 className="form-title">Sign up</h2>
                    <form method="" action="" className="register-form" id="login-form">    {/*Give action and method*/}
                        <div className="form-group">
                            <label htmlFor="username">
                                <i className="zmdi zmdi-account material-icons-name" />
                            </label>{" "}
                            <input
                                type="text"
                                name="username"
                                id="username"   //userName
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">
                                <i className="zmdi zmdi-lock" />
                            </label>{" "}
                            <input
                                type="password"
                                name="password" //password
                                id="password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="checkbox"
                                name="remember-me"
                                id="remember-me"
                                className="agree-term"
                            />{" "}
                            <label htmlFor="remember-me" className="label-agree-term">
                                <span>
                                <span />
                                </span>
                                Remember me
                            </label>
                        </div>
                        <div className="form-group form-button">
                            <input
                                type="submit"
                                name="signin"
                                id="signin"
                                className="form-submit"
                                Value="Log In"                                
                            />
                        </div>
                    </form>
                    <div className="social-login">
                        <span className="social-label">Or login with</span>
                        <ul className="socials">
                        <li>
                            <a href="#">
                                <i className="display-flex-center zmdi zmdi-facebook"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="display-flex-center zmdi zmdi-twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="display-flex-center zmdi zmdi-google" />
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
}