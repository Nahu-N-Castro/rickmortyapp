import imageMe from "../../img/me-byn.jpg"
import style from "./About.module.css"

const About = () => {
    return (
        <section className={style.about}>
            <div className={style.div}>
                <img className={style.imgMe} src={imageMe} alt="NahuCastro"/>
                <div className={style.abText}>
                    <h1 className={style.h1}>About Us</h1>
                    <h5>Nahuel Castro | Full Stack Developer </h5>
                    <p>i am a fronted web developer. i can provide clean code and pixel perfect design. i also make the website more & more interactive with web animations. i can provide clean coode and pixel perfect desing. i responsive design makes your website accesible to all users, regardless of their device</p>
                </div>
            </div>
        </section>
    )
}
export default About;