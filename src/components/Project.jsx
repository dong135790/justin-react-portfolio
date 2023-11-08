// create array of objects to store data for each project, including url, image path, name, and github link
const projectData = [
  {
    name: 'AstronoME',
    image: '/assets/images/',
    github: 'https://github.com/cdgonzo23/astronoME',
    url: 'https://astronome-10022023-9058067b996b.herokuapp.com/',
  },
  {
    name: 'Swoldemort',
    image: '/assets/images/',
    github: 'https://github.com/dong135790/swoldemort',
    url: 'https://application-2023-07-31-69c69ce85b50.herokuapp.com/login',
  },
  {
    name: 'Digital Museum',
    image: '/assets/images/',
    github: 'https://github.com/swatson2000/Digital-Museum.git',
    url: 'https://swatson2000.github.io/Digital-Museum/',
  },
  {
    name: 'J.A.T.E.',
    image: '/assets/images/weather-dashboard.png',
    github: 'https://github.com/dong135790/pwa-text-editor',
    url: 'https://damp-thicket-22045-f9b7c3017935.herokuapp.com/',
  },
  {
    name: 'Weather Dashboard',
    image: '/assets/images/weather-dashboard.png',
    github: 'https://github.com/dong135790/weather-forecast-dashboard',
    url: 'https://dong135790.github.io/weather-forecast-dashboard/',
  },
  {
    name: 'Note Taker App',
    image: '/assets/images/weather-dashboard.png',
    github: 'https://github.com/dong135790/note-taker-express',
    url: 'https://fathomless-springs-33768-db9c5bfb0cd7.herokuapp.com/notes',
  },
]

function Project() {
  return (
    <>
      {projectData.map((item) => (
        // for each item, return the following output to display project cards using the properties of each item
        <div key={item.name} className="container relative h-64 w-auto m-4 overflow-hidden">
          <img className="aspect-square object-cover object-top rounded h-64 w-full z-10" src={item.image} alt={`image of ${item.name}`}></img>
          <div className="overlay opacity-0 hover:opacity-90 bg-gray-800 absolute top-0 h-64 w-full transition duration-300 ease-in-out">
              <div className="flex flex-col flex-wrap items-start justify-center h-64 w-full tracking-tight px-2 pb-8 leading-7">
                <p className="text-xl font-semibold underline underline-offset-4 decoration-1">{item.name}</p>
                <a target="_blank" rel="noreferrer" href={item.github} className="text-[#11f0b5] hover:text-[#057d69]">GitHub Repository</a>
                <a target="_blank" rel="noreferrer" href={item.url} className="text-[#11f0b5] hover:text-[#057d69]">Deployed Application</a>
              </div>
          </div>
        </div>
        ))}
    </>
        )}
        

export default Project