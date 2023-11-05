// create function to return About section 
export default function About() {
  return (
    <>
      <div className='mb-8 flex flex-col items-start'>  
        <h3 className='text-3xl font-semibold'>About Me</h3>
        <img className='rounded-full w-28 aspect-square object-cover object-top mt-8' src="/assets/images/profile-img.jpeg" alt="headshot photo"></img>
      </div>
      <div>
        <p className="leading-7">As a full-stack web developer based in Corbin, KY, I possess a deep passion for transforming concepts into visually appealing applications that not only provide an excellent user experience but also deliver innovative solutions to real-world challenges. My unwavering commitment to continuous learning is rooted in the belief that the field of web development offers limitless possibilities for enhancement. This mindset has enabled me to adeptly cultivate and sustain my proficiency in responsive full-stack web design. Most recently, I&apos;ve been augmenting my skills and knowledge while pursuing a Full Stack Web Development Certificate through Vanderbilt University&apos;s Web Development Bootcamp.</p>
      </div>
    </>
  )
}
