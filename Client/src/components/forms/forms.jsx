import { useState } from "react";
import imageForm from "../../img/rym.png"
import style from "./forms.module.css"

const Forms = () => {

    const [forms, setForms] = useState({
        email: '',
        password: ''
    })


    const [errors,setErrors] = useState({
        email: '',
        password: ''
        

    })

    const validate = () => {
        if(forms.email){
            setErrors({
                ...errors,
                email: 'por favor, revisa el email ingresado'
            })
        }else {setErrors({...errors, email:''})}

    }
       
    const handleOnSubmit = (event) => {
        event.preventDefault()
    }

    const handleOnChange = (event) => {
        setForms({
            ...forms,
            [event.target.name]: event.target.value


        })
        validate()

    }

    return (
        <section>
            <div className={style.form}>
                <img className={style.imgForm} src={imageForm} alt="form"/> 
                <div className={style.formText}>
                    <form onSubmit={handleOnSubmit}>
                        <h2>Login</h2>
                        <div className={style.inputbox}>
                            <label htmlFor="email">Email </label>
                            <input name="email" type="email" value={forms.email} onChange={handleOnChange} required></input>
                        </div>
                        <div className={style.inputbox}>
                            <label htmlFor="password">Password </label>
                            <input name='password' type="password" value={forms.password} onChange={handleOnChange} required></input>
                        </div>
                        <button className ={style.butLogin}type="submit" disabled={!forms.email || !forms.password || errors.email || errors.password}>Log in</button>
                    </form>
                </div>
            </div>
        </section>


    )
}
export default Forms;

