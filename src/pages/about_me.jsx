import styles from '../styles/about_me.module.css'
const AboutMe=()=>{
    return(
        <>
            <div className={styles.content_parent}>
                <h1 className={styles.big_text}>
                    ABOUT ME
                </h1>
                <table className={styles.content_table}>
                    <thead>
                        <tr>
                            <th colSpan='2'>Personal Information</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className={styles.text_left}>Fullname: Saadman Sakib Mihad</td>
                        <td className={styles.text_left}>Address: Mirpur-1, Dhaka-1216, Bangladesh</td>
                    </tr>
                    <tr>
                        <td className={styles.text_left}>Nationality: Bangladeshi</td>
                        <td className={styles.text_left}>Languages: English, Bangla</td>
                    </tr>
                    <tr>
                        <td className={styles.text_left}>Email: saadmansakib275@gmail.com</td>
                        <td className={styles.text_left}>Phone: +8801635028005</td>
                    </tr>
                    <tr>
                        <td className={styles.text_left}>Language: English, Bangla</td>
                        <td className={styles.text_left}></td>
                    </tr>
                    <tr>
                        <td className={styles.text_left}><a href='https://www.linkedin.com/in/saadman-sakib-mihad-507000279/'>LinkedIn</a></td>
                        <td className={styles.text_left}><a href='https://github.com/Sakib063/'>Github</a></td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AboutMe