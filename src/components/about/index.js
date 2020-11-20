import React from 'react';

class About extends React.Component{
    // sample comment to keep the code un altered
    constructor(){
        super()
        this.state = {
            teamNum: 0,
            teamBios: [
                {
                    name: 'David Pinedo',
                    title: 'Lead UX Designer',
                    
                    email: 'david@cityofwinddesign.com',
                    image: './images/rocky-wallpaper.jpg'
                },
                {
                    name: 'Valentine Ubaldo',
                    title: 'Lead UX Designer',
                    email: 'vtine.ubaldo@gmail.com',
                    image: './images/rocky-wallpaper.jpg'
                },
                {
                    name: 'Alexandra Grochowski',
                    title: 'UX/UI Designer',
                    email: 'agrochowski132@gmail.com',
                    image: './images/rocky-wallpaper.jpg'
                },
                {
                    name: 'Chelsea Kennedy',
                    title: 'UX/UI Designer',
                    email: 'chelsea.aline.kennedy@gmail.com',
                    image: './images/rocky-wallpaper.jpg'
                },
                {
                    name: 'Pippa Nardie-Warner',
                    title: 'UX/UI Designer',
                    email: 'pnardiewarner@gmail.com',
                    image: './images/rocky-wallpaper.jpg'
                },
                {
                    name: 'Alejandro Linan',
                    title: 'Lead In House Software Engineer',
                    email: 'jandrolinan@gmail.com',
                    image: './images/rocky-wallpaper.jpg'
                },
                {
                    name: 'Ingrid Pohl',
                    title: 'UX Researcher',
                    email: 'ingpohl@gmail.com',
                    image: './images/rocky-wallpaper.jpg'
                },
                {
                    name: 'Stephanie Zou',
                    title: 'Full Stack Developer',
                    email: '',
                    image: './images/rocky-wallpaper.jpg'
                },
                {
                    name: 'Nora Villar',
                    title: 'Service Designer',
                    email: 'noravillarc@gmail.com',
                    image: './images/rocky-wallpaper.jpg'
                },
                {
                    name: 'Titania Veda',
                    title: 'lead Service Designer',
                    email: 'vedaimpactdesigns@gmail.com',
                    image: './images/rocky-wallpaper.jpg'
                },
                {
                    name: 'Andrea Wilson',
                    title: 'Service Designer',
                    email: 'andreawi2@gmail.com',
                    image: './images/rocky-wallpaper.jpg'
                },
                {
                    name: 'Ayesha Ather',
                    title: 'UX Researcher',
                    email: 'ayesha.ath@gmail.com',
                    image: './images/rocky-wallpaper.jpg'
                },
                {
                    name: 'Summer',
                    title: 'UX/UI Designer',
                    email: 'summer.elliott.ux@gmail.com',
                    image: './images/rocky-wallpaper.jpg'
                },
                {
                    name: 'Alexandra Sevareid',
                    title: 'UI Designer',
                    email: 'alexandra@sevareid.com',
                    image: './images/rocky-wallpaper.jpg'
                },
                {
                    name: 'Celia Kim',
                    title: 'UX/UI Designer',
                    email: 'hi@celiaskim.design',
                    image: './images/rocky-wallpaper.jpg'
                },
                {
                    name: 'June Tang',
                    title: 'UX/UI Designer',
                    email: 'ttkhanhdung@gmail.com',
                    image: './images/rocky-wallpaper.jpg'
                },
                {
                    name: 'Vanessa Guerrero Barragan',
                    title: 'Design Intern',
                    email: 'vamarilug@gmail.com',
                    image: './images/rocky-wallpaper.jpg'
                },
                {
                    name: 'Auden Robertson',
                    title: 'Full Stack Developer',
                    email: 'audenrobertson@gmail.com',
                    image: './images/rocky-wallpaper.jpg'
                }
            ]
        }
    }

    teamBio = () => {
        let index = this.state.teamNum
        let num = this.state.teamBios.length
        let list = []

        this.state.teamBios.forEach((person, ind) => {
            if(index === ind ){
                list.push(
                    <div className='about__team-card fade'>
                        <img className='about__team-img' src={require(`${person.image}`)} alt='placeholder' />
                        <h5 className='about__team-member-name'>{person.name}</h5>
                        <p className='about__team-member-job'>{person.title}</p>
                        <p className='about__team-member-email'>{person.email}</p>
                    </div>
                )
            }
        });

        return list
    }

    teamLeftArrow = () => {
        if (this.state.teamNum === 0){
            this.setState(prevState => {
                return {
                    ...prevState,
                    teamNum: prevState.teamBios.length - 1
                }
            })
        } else {
            this.setState(prevState => {
                return {
                    ...prevState,
                    teamNum: prevState.teamNum - 1
                }
            })
        }
    }

    teamRightArrow = () => {
        if ((this.state.teamBios.length - 1) > this.state.teamNum ){
            this.setState(prevState => {
                return {
                    ...prevState,
                    teamNum: prevState.teamNum + 1
                }
            })
        } else{
            this.setState({
                ...this.state,
                teamNum: 0
            })
        }
    }


    render(){
        return(
            <section className='about'>

                <div className='about__main-title'>
                    <h2>In the City of Wind...</h2>
                </div>

                <div className='about__intro'>
                    <div className='about__intro-title'>
                        <h4>What we<br></br> 
                        believe
                        </h4>
                    </div>
                    <div className='about__intro-info'>
                        <p>
                            viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis
                        </p>
                        <p>
                            viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis
                        </p>
                    </div>
                </div>

                <div>
                    <div className='about__team'>
                        <h3 className='about__team-title'>Our Team</h3>
                        <p className='about__team-arrow' onClick={this.teamLeftArrow}>{'<--'}</p>
                        <p className='about__team-arrow' onClick={this.teamRightArrow}>{ '-->' }</p>
                    </div>

                    <div className='about__team'>
                        { this.teamBio() }
                    </div>
                </div>

                <div>
                    <div className='about__tools'>
                        <h3 className='about__tools-title'>Tools/Inspiration</h3>
                        <p className='about__tools-info'>
                            viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis
                        </p>
                    </div>
                    
                    <div className='about__tools_slides'>
                        <img className='about__tools_slides-one' src={require(`./images/rocky-wallpaper.jpg`)} alt='placeholder' />
                        <img className='about__tools_slides-two' src={require(`./images/rocky-wallpaper.jpg`)} alt='placeholder' />
                        <img className='about__tools_slides-three' src={require(`./images/rocky-wallpaper.jpg`)} alt='placeholder' />
                        <img className='about__tools_slides-four' src={require(`./images/rocky-wallpaper.jpg`)} alt='placeholder' />
                    </div>
                </div>

                <div>
                    <h3 className='about__services-title'>Services</h3>
                    <div className='about__services_slides'>
                        <img className='about__services_slides-one' src={require(`./images/rocky-wallpaper.jpg`)} alt='placeholder' />
                        <img className='about__services_slides-two' src={require(`./images/rocky-wallpaper.jpg`)} alt='placeholder' />
                        <img className='about__services_slides-three' src={require(`./images/rocky-wallpaper.jpg`)} alt='placeholder' />
                    </div>
                    
                    <div className='about__services'>
                        <div className='about__services-one'>
                            <h5 className='about__services-name'>Strategy & Organization</h5>
                            <p className='about__services-description'>lorem this is the description la lorem i dont have it for react lorem</p>
                            <p className='about__services-read'>Read More</p>
                        </div>
                        <div className='about__services-two'>
                            <h5 className='about__services-name'>Brand & Advertising</h5>
                            <p className='about__services-description'>lorem this is the description la lorem i dont have it for react lorem</p>
                            <p className='about__services-read'>Read More</p>
                        </div>
                        <div className='about__services-three'>
                            <h5 className='about__services-name'>Design & Technology</h5>
                            <p className='about__services-description'>lorem this is the description la lorem i dont have it for react lorem</p>
                            <p className='about__services-read'>Read More</p>
                        </div>
                    </div>
                    
                </div>

                {/* <div className='about__contact'>
                    <h1 className='about__contact-us'>Contact Us</h1>
                    <div className='about__contact-text'>
                        <p>
                            lorem this is the description la lorem i dont have it for react lorem.lorem this is the description la lorem i dont have it for react lorem
                        </p>
                        <ul className='about__contact-list'>
                            <li>lorem ipsum dolor sit amet</li>
                            <li>lorem ipsum dolor sit amet</li>
                            <li>lorem ipsum dolor sit amet</li>
                        </ul>
                    </div>
                </div> */}
            </section>
        )
    }
}

export default About;