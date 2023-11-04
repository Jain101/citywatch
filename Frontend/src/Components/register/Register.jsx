import UploadImage from "./UploadImage";
import './Register.css';
function Register() {
    return (
        <div className="body2">
            <p>
                <title>Slide Navbar</title>
                <link rel="stylesheet" type="text/css" href="slide navbar style.css" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap"
                    rel="stylesheet"
                />
            </p>
            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true" />
                <div className="signup">
                    <form>
                        <label htmlFor="chk" aria-hidden="true">
                            Enter Details
                        </label>
                        <input
                            type="text"
                            name="txt"
                            placeholder="Title"
                            required
                            style={{ height: "28px", width: "80%" }}
                        />
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            style={{ height: "28px", width: "80%" }}
                        />
                        <div>
                            <UploadImage />
                        </div>
                    </form>
                </div>
                <div className="login">
                    <form>
                        <label htmlFor="chk" aria-hidden="true">
                            <div style={{ font: "10px" }}>Submit Report</div>
                        </label>
                    </form>
                </div>
            </div>
            <p />
        </div>
    );
}

export default Register;