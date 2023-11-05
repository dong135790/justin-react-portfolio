// import PropTypes to define/validate props 
import { PropTypes } from 'prop-types';
import Navigation from './Navigation'

// function to render Header component
function Header ({setCurrentPage, currentPage}) {
  
  return (
    <div className='lg:flex lg:flex-row items-end'>
      <div className="mx-auto container lg:mx-0 col-span-12 lg:col-span-6">
        <h1 className="drop-shadow-3xl text-3xl font-medium md:text-5xl">Chesney Julian</h1>
        <h3 className="mt-6 text-xl md:text-2xl">
          Full Stack Web Developer
        </h3>
      </div>
      <Navigation setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </div>
  )

}

Header.propTypes = {
  setCurrentPage: PropTypes.func,
  currentPage: PropTypes.string
}

export default Header;
