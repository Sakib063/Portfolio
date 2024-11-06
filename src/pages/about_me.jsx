import styles from '../styles/about_me.module.css'
import laravel from '../assets/laravel.png'
import php from '../assets/php.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import c from '../assets/c.png'
import cpp from '../assets/C++.png'
import java from '../assets/java.png'
import react from '../assets/react.png'
import next from '../assets/next.png'
const AboutMe=()=>{
    return(
        <>
            <div className={styles.content_parent}>
                <h1 className={styles.big_text}>
                    ABOUT ME
                </h1>
                <p className={styles.text_th}>Personal Information</p>
                <table className={styles.table_one}>
                    <tbody className={styles.text_left}>
                    <tr>
                        <td>Fullname: Saadman Sakib Mihad</td>
                        <td>Address: Mirpur-1, Dhaka</td>
                    </tr>
                    <tr>
                        <td>Nationality: Bangladeshi</td>
                        <td>Languages: English, Bangla</td>
                    </tr>
                    <tr>
                        <td>Email: saadmansakib275@gmail.com</td>
                        <td>Phone: +8801635028005</td>
                    </tr>
                    <tr>
                        <td>Language: English, Bangla</td>
                        <td>Country: Bangladesh</td>
                    </tr>
                    <tr>
                        <td><a href='https://www.linkedin.com/in/saadman-sakib-mihad-507000279/'>LinkedIn</a></td>
                        <td><a href='https://github.com/Sakib063/'>Github</a></td>
                    </tr>
                    </tbody>
                </table>
                <hr/>
                <p className={styles.p1}>MY SKILLS</p>
                <div className={styles.div_images}>
                    <img src={c} className={styles.image}/>
                    <img src={cpp} className={styles.cpp}/>
                    <img src={java} className={styles.image}/>
                    <img src={html} className={styles.image}/>
                    <img src={css} className={styles.css}/>
                    <img src={php} className={styles.php}/>
                    <img src={laravel} className={styles.image}/>
                    <img src={next} className={styles.next}/>
                    <img src={react} className={styles.image}/>
                </div>
                <hr/>
                <p className={styles.p1}>Education & Experience</p>
                <table className={styles.table_two}>
                    <tbody>
                        <tr>
                            <td>
                                <small className={styles.text_small}>2024</small>
                                <br/>
                                B.Sc in CSE
                                <br/>
                                United International University
                                <br/>
                                Major: Software Engineer
                                <br/>
                                CGPA: 3.45
                            </td>
                            <td>
                                <small className={styles.text_small}>May,2024-August,2024</small>
                                <br/>
                                Laravel Developer Intern
                                <br/>
                                Mircodeft
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <small className={styles.text_small}>2019</small>
                                <br/>
                                Higher Secondary (School) Certificate (H.S.C)
                                <br/>
                                Monipur High School & College
                                <br/>
                                GPA: 4.00
                            </td>
                            <td>
                                <small className={styles.text_small}>2021-2022</small>
                                <br/>
                                IT Support
                                <br/>
                                Quantabit
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <small className={styles.text_small}>2017</small>
                                <br/>
                                Secondary School Certificate (S.S.C)
                                <br/>
                                Monipur High School & College
                                <br/>
                                GPA: 5.00
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AboutMe