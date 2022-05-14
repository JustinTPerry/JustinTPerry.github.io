
export default function Contact() {
    return (
        <div className="contact">
            <div className="col-sm-6">
                <div className="card bg-dark" id="contact--socials">
                    <div className="card-body">
                        <ul className="contact--list">
                            <li><a href="https://github.com/JustinTPerry"><img className="contact--image" src={require("../images/github.png")} alt="Github" /></a></li>
                            <li><a href="https://linkedin.com/in/justin-t-perry"><img className="contact--image" src={require("../images/linkedin.png")} alt="LinkedIn" /></a></li>
                            <li><a href="mailto: justin.taylor.perry@gmail.com">
                                <img className="contact--image" id="contact--email" src={require("../images/email.png")} alt="Email" />
                            </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}