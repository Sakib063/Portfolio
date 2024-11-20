import Header from "../components/header.jsx";
import Scroll from "../components/Scroll.jsx";
import tech from "../assets/techkriti.jpg"
import eee from "../assets/eee.jpg"
import block from "../assets/block.jpg"
import mun from "../assets/mun.jpg"
import Animate from "../components/animate.jsx";
import ButtonCircle from "../components/button_circle.jsx";
const Stories=()=>{
    return(
        <>
            <Animate>
                <Header label={'MY STORIES'}/>
                <Scroll/>
                <div className='hidden text-white md:block fixed right-10 top-[30%] z-50'>
                    <ButtonCircle className='cursor-pointer' label={'HOME'} icon={'home-sharp'} link={'/'} page={false}/>
                </div>
                <div className='hidden text-white md:block fixed right-10 top-[40%] z-50'>
                    <ButtonCircle className='cursor-pointer' label={'ABOUT'} icon={'person-sharp'} link={'/about-me'} page={false}/>
                </div>
                <div className='hidden text-white md:block fixed right-10 top-[50%] z-50'>
                    <ButtonCircle className='cursor-pointer' label={'PROJECTS'} icon={'code-slash-sharp'} link={'/projects'} page={false}/>
                </div>
                <div className='hidden text-white md:block fixed right-10 top-[60%] z-50'>
                    <ButtonCircle className='cursor-pointer' label={'STORIES'} icon={'book-sharp'} page={true}/>
                </div>
                <div className='hidden text-white md:block fixed right-10 top-[70%] z-50'>
                    <ButtonCircle className='cursor-pointer' label={'CONTACT'} icon={'call-sharp'} link={'/contact'} page={false}/>
                </div>
                <h1 className='hidden md:block text-white text-6xl font-black text-center leading-[62px] mt-10'>
                    MY <span className='text-[#068BF7]'>STORIES</span>
                </h1>
                <div className='text-white my-24 md:mt-16 w-4/5 mx-auto'>
                    <h2 className='text-center text-4xl'>Team <span className='text-[#068BF7]'>Error Sage</span></h2>
                    <div className='flex flex-col my-10'>
                        <img src={eee} className='w-auto lg:w-3/4 h-auto mx-auto'/>
                        <div className='mt-8'>
                            <p>
                                On February, 2022 I took the course Electronics. That had a lab course and each student
                                in that class had to team up and make a group project. My university hosted a project
                                show
                                at the end of each semester which is an exhibition for each and every project from every
                                lab course. All the projects were graded by judges and top 3 project from each course
                                were
                                awarded. Electronics lab was among the lab courses which was part of the project show.
                                At
                                that time I knew nothing about how to make a project. Day one of that course I made a
                                five
                                member group with four of my friends. That group was given the name Error Sage. The
                                first
                                task was coming up with an idea for the project. We had thought about two ideas but the
                                day
                                we presented them, they were rejected. But within ten minutes or so one of my friend
                                came up
                                with the smart bike parking project idea. Funny thing was he was staring at a bike when
                                he
                                had thought about the idea. Based on that idea we developed and tweaked the features.
                                <br/>
                                After a month or so we begin making the project. The project had a hardware and software
                                side.
                                I mainly worked on the hardware side. It took us almost 2 weeks to completely finish the
                                project.
                                I hold dear to my heart the time we spent together as a team working on this project.
                                This
                                is where
                                our friendship grew. To this day I am very good friends with these 4 individual and we
                                have
                                gone to
                                more journeys together.
                                <br/>
                                Finally the day of the project show came. We presented the project and the idea behind
                                it to
                                the
                                judges. At the end of the day we sat at the award giving ceremony. I personally was not
                                confident
                                that we would win any prize. It was an utter surprise when the announcer said that our
                                team
                                was the
                                first runner up. That was the first time I personally won an academic award and it felt
                                really amazing.
                            </p>
                            <br/>
                            <br/>
                            <p>
                                As the name suggests this is a system where bikes can be parked in the designated stalls
                                and
                                they
                                will be protected from malicious intends and environmental hazards. This system has a
                                feature where
                                stalls available for parking is shown in a screen and also has the ability to store rain
                                water.
                                You can see more details in my github repo of this project.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='text-white my-24 md:mt-16 w-4/5 mx-auto'>
                    <h2 className='text-center text-4xl'>Journey To <span className='text-[#068BF7]'>Techkriti</span></h2>
                    <div className='flex flex-col my-10'>
                        <img src={tech} className='w-auto lg:w-3/4 h-auto mx-auto'/>
                        <div className='mt-8'>
                            <p>
                                Somewhere at the middle of February one of my friends told me about an international
                                contest in India called Techkriti. At that time it sounded like a dream to go to a
                                foreign country to participate in a contest. That night our team, Error Sage registered
                                in contest in the embedded systems segment and began to had a discussion on how we can
                                make things work out in our favor. Over the span of a few days we came up with some
                                ideas. One of my ideas was to build a home automation system for the physically
                                challenged
                                individuals and we proceeded with that idea.
                                <br/>
                                Over the course of three days we worked day and night to come up with a functional
                                prototype. We presented that prototype to our department heads and with this prototype
                                we
                                were able to
                                impress our department heads and they gave us with the much needed funding. Now comes
                                the
                                part of getting the passport and visa, most difficult part of this journey. Even
                                thinking
                                about these
                                events stresses me out. It was literally impossible to get our passports and visas in
                                such
                                short
                                notice but by the divine intervention of the Almighty Allah we managed to get the proper
                                documentations. And on 24 March, 2023 that dream was becoming reality. By the grace of
                                the
                                Almighty we set foot in India.
                                <br/>
                                After 30 hours of traveling over bus, taxi, plane and on foot carrying pounds of baggage
                                we
                                managed to get to our destination. After 5 hours of sleep we got to work again.
                                Over a day's of restless work we managed to build the project. But Even though our
                                project did not live up to the highest standards this was a unique adventure for me.
                                I learned a lot through this journey. It game me a new sense of confidence and self
                                reliance. Also I got to visit a country and explore a culture. And most of all I got
                                the chance to visit Kolkata, the city of Feluda. I am a huge fan of Feluda and
                                Sabyasachi Chakrabarty and visiting Kolkata was a tick off the bucketlist.
                            </p>
                            <br/>
                            <br/>
                            <p>
                                I am forever grateful to the people who have helped me throughout this great journey.
                                Thank you to Error Sage, you guys are awesome.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='text-white my-24 md:mt-16 w-4/5 mx-auto'>
                <h2 className='text-center text-4xl'><span className='text-[#068BF7]'>Blockchain</span> Saga</h2>
                    <div className='flex flex-col my-10'>
                        <img src={block} className='w-auto lg:w-3/4 h-auto mx-auto'/>
                        <div className='mt-8'>
                            <p>
                                At september 2023 I started my capstone course. It was a group project. I teamed
                                up with 3 of my friends from Error Sage. And once again we faced the challenge of
                                coming up with a unique and practical idea for the project. After some brainstorming
                                and discussing we came up with a plan to integrate blockchain and machine learning
                                in the medical field. And for the next 8 month we worked very hard on this project.
                                The first 4 months were spent on research. I was relatively new to the research area
                                so it took me a while to get the hang of it. But as always I prevailed and we were quite
                                satisfied with our research work.
                                <br/>
                                Now comes the most difficult time of my academic life. We had to make the actual system
                                based on all that research we did on paper. We struggled a lot at first on how to
                                actually
                                implement
                                blockchain. And we were working with permission blockchain which was much harder than
                                public
                                or private
                                blockchain technology. But thanks to my amazing teammates we discovered Multichain which
                                was
                                the
                                perfect tool for our project. At the same time we were also learning NextJs. We were
                                simultaneously learning
                                all the new technologies and working on developing our project.
                                <br/>
                                <br/>
                                At the end all our hard work paid off. Our project got a lot of praises. It even
                                featured on
                                the university screen for a day. I am very proud of the work that we did. I am once
                                again
                                very
                                grateful to the people who were involved in this project, especially my supervisor sir
                                and
                                course
                                teacher. My supervisor sir is an amazing person and I respect him a lot.
                            </p>
                            <br/>
                            <br/>
                            <p>
                                The system we developed is named Conveying Electronic Health Records and Synopsis
                                Repository(CEHRSR). This system utilizes permission blockchain to securely store
                                patient health records. A web application acts as an user interface for doctors to
                                view and store EHR(Electronic Health Record) information and patients to view their
                                EHR. This system also uses NLP to summarize EHR information for the ease of it's users
                                to view.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='text-white my-24 md:mt-16 w-4/5 mx-auto'>
                    <h2 className='text-center text-4xl text-[#068BF7]'>#Redefining<br className='md:hidden'/><span className='text-white'>Diplomacy</span></h2>
                    <div className='flex flex-col mt-10'>
                        <img src={mun} className='w-auto lg:w-3/4 h-auto mx-auto'/>
                        <div className='mt-8'>
                            <p>
                                Back in 2018 Model United Nations(MUN) was the most trending extra curricular activity
                                for
                                college and university students. One of my friends had attended a MUN at his college and
                                told me all about it. MUN is a simulation of United Nations conferences where each
                                students
                                works as the representative of a country and must solve a problem with other delegates
                                from
                                around the world. It emphasises on research, public speaking, debating, writing,
                                critical
                                thinking, teamwork and leadership. Typically a MUN would be hosted for three to five
                                days.
                                I was quite hyped when I heard about MUN and wanted to experience this event. I was
                                particularly excited because it was a formal event and everyone had to suit up for the
                                event.
                                <br/>
                                <br/>
                                After a couple of months later I registered in the NDC MUN which was a three day event.
                                I
                                was given the UNHCR committee and given the country the Republic of Croatia. That was
                                the
                                time
                                where Bangladesh was having a rohingya refugee crisis and the topic we were given was on
                                how
                                to solve
                                this crisis. It took a good amount of time for me to research all about Croatia's
                                foreign
                                and refugee
                                policies.
                            </p>
                            <br/>
                            <br/>
                        </div>
                    </div>
                    <p>
                        At that time I struggled with public speaking and speaking in english as I am not a native
                        english speaker. The first day when the dias chairman asked which countries would like to
                        present
                        their opening arguments I was quite nervous to raise my hand but I did it anyway. I stood up
                        nervously
                        when my name was called and gave my opening statements. And over the span of the event I spoke a
                        few more
                        times. Even though I was still nervous about speaking while standing amid all these other people
                        I
                        slowly gained confidence. And I made some good points on the issue.
                    </p>
                    <p>
                        All and all the event went well for me. I made a few friends at that event. At the ending
                        ceremony where the prizes were given I was quite surprised when I was given an honorable
                        mention.
                        It was an amazing experience.
                    </p>
                </div>
            </Animate>
        </>
    )
}
export default Stories