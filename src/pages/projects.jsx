import styles from '../styles/projects.module.css'
const Projects=()=>{
    return(
        <>
            <h1 className={styles.big_text}>MY PROJECTS</h1>
            <div className={styles.card_container}>
                <div className={styles.card}>
                    <h1 className={styles.cehrsr}>CEHRSR</h1>
                    <p className={styles.text}>
                        <p><small>Multichain, Nextjs 14, Prisma, PostgreSQL, spaCy, Tailewind CSS</small></p>
                        A permission blockchain based web-application for patients and doctors
                        to enter and store patient medical data as well as summarize patient
                        medical history using NLP.
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.easy}>Easy E-Waste</h1>
                    <p className={styles.text}>
                        <p><small>Laravel, Blade, HTML, CSS, MySQL</small></p>
                        A web-application for electrical and electronics device manufacturing
                        companies to manage their electronic waste by recycling, reusing and
                        reducing it.
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.auto}>AutoCare</h1>
                    <p className={styles.text}>
                        <p><small>PHP, HTML, CSS, Bootstrap, MySQL</small></p>
                        A web-application that creates a bridge between car owners and car
                        service providers by allowing car owners to make appointments for car
                        servicing to the service providers. It also has an online marketplace for
                        car accessories.
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.uiu}>UIU Content Bank</h1>
                    <p className={styles.text}>
                        <p><small>Java, JavaFX</small></p>
                        A javafx software to store, share and download study materials such as
                        pdf, images and papers.
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.fund}>Funding Future</h1>
                    <p className={styles.text}>
                        <p><small>PHP, HTML, CSS, Bootstrap, MySQL, JavaScript</small></p>
                        A web-application to create donation campaign and donate money to
                        selected campaigns using mobile or online banking.
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.tech}>Home Automation For The Physically Challenged</h1>
                    <p className={styles.text}>
                        <p><small>Arduino, ESP32, JavaScript</small></p>
                        An iot based embedded automated system for physically challenged
                        people to navigate with ease at their home with a web-application as an
                        interface for family members to monitor.
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.bike}>Bike Parking System</h1>
                    <p className={styles.text}>
                        <p><small>Arduino, C++</small></p>
                        An arduino based embedded system that eases bike
                        parking and strengthens bike’s security against malicious
                        intends and environmental hazards. This system also has the feature
                        to store rain water in a designated container for maliciousness use.
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.fire}>FireFighting Robot</h1>
                    <p className={styles.text}>
                        <p><small>Arduino, ESP32-CAM, Yolov8</small></p>
                        A four wheeled iot based robot that detects fire using
                        computer vision and extinguishes fire via water pump. An Arduino and ESP32 Cam
                        has been used to build this robot.
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.uiu}>Covid Registration System</h1>
                    <p className={styles.text}>
                        <p><small>Laravel, Blade</small></p>
                        A web application for patients to register and select their desired vaccine centers
                        and an automated mail notification system. This system implements Laravel Task Scheduling
                        and a custom Artisan command. <b>This is an ongoing project.</b>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Projects