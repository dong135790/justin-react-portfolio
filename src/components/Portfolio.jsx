// import Project component
import Project from './Project';

export default function Portfolio() {
  return (
    <>
      <div className='mb-12'>  
        <h3 className='text-3xl font-semibold'>Portfolio</h3>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {/* render Project component */}
       <Project />
      </div>
    </>
  )
}