import React from 'react'

const About = () => {
  return (
    <div 
      name="about" 
      className=' w-full h-full bg-gradient-to-b from-gray-800 to-black text-white '>

        <div  className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-screen'>

          <div className=' pb-8'>

            <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>About</p>

            </div> 

            <p className=' text-xl'>
              Hello, I'm Tremaine Cousar, a dedicated and ambitious software developer from Greensboro. I am currently pursuing a degree in Computer Science at Chapel Hill through the C-STEP program. As an African American student, I take pride in breaking barriers and setting new standards in the tech industry. Over the past two years, I have immersed myself in the world of coding, developing a deep passion for creating innovative solutions and enhancing user experiences. My journey in software development has been driven by hard work, motivation, and a relentless pursuit of excellence.

            </p>
           
            <br />

            <p className='text-xl'>
              In my two years of coding, I have gained expertise in a wide range of technologies, including React, JavaScript, Next.js, HTML, CSS, Tailwind, Bootstrap, REST API, Node.js, Prisma, and JSON. I have successfully completed numerous projects that showcase my skills and dedication to quality. My accomplishments include developing dynamic web applications, creating responsive and user-friendly interfaces, and implementing efficient back-end solutions. I am constantly learning and evolving, always striving to stay ahead of industry trends and deliver top-notch results. My commitment to excellence and my passion for technology make me a valuable asset to any team.
            </p>
          </div>
    </div>
  )
}

export default About
