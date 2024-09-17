function Header(){
    return(
    <div className="login-container">
            <div className="login-box">
                <h2>User Login</h2>
                <form action="/submit-login" method="POST">
                    <div className="input-group">
                        <label htmlFor="username">Username:</label>
                        <input type="alphanumeric" id="alphanumeric" name="username" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div className="actions">
                        <button type="submit" className="btn">Login</button>
                    </div>
                </form>
                <p className="register-link">
                    Don’t have an account? <a href="/register">Register here</a>
                </p>
            </div>
        </div>
    
    );
}    

export default Header;