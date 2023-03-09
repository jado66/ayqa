import { signIn } from "next-auth/react"

const SignIn = (props) =>{
    return(
        <form>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            {Object.values(props.providers).map((provider) => (
                <div key={provider.name}>
                <button className="w-100 btn btn-lg btn-primary" onClick={() => signIn(provider.id)}>
                    Sign in with {provider.name}
                </button>
                </div>
            ))}
            {/* <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" data-keeper-lock-id="k-lp9fk5p3fw"/>
                <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" data-keeper-lock-id="k-zx771m3htn"/>
                <label for="floatingPassword">Password</label>
            </div> */}

            {/* <div className="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me"/> Remember me
            </label>
            </div> */}
            {/* <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button> */}
            <p className="mt-5 mb-3 text-muted text-center">AYQA © 2023-2025</p>
        </form>
    )
}

export default SignIn