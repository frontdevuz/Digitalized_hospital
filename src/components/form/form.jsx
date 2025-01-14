import "./form.scss";

import Logo from "../../assets/svg/logo.svg";

function Form(params) {
    return (
        <div className="login">
            <div className="login__form">
                <img className="login__logo" src={Logo} alt="logo" width={180} height={80} />
                <h3 className="login__title">Saytga kirish</h3>
                <input className="login__input" type="text" placeholder="Telfon Raqam" />
                <input className="login__input" type="text" placeholder="Parol"/>
                <button className="login__btn">Kirish</button>
            </div>
        </div>
    )
}

export default Form