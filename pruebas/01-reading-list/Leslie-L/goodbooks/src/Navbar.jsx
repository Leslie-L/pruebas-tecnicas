import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { faBookmark} from '@fortawesome/free-solid-svg-icons'
import { faSuitcase} from '@fortawesome/free-solid-svg-icons'
import { faEllipsisV} from '@fortawesome/free-solid-svg-icons'
import { faHeadphones} from '@fortawesome/free-solid-svg-icons'
import { faBook} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
    <nav className="w-full h-20 px-6 flex justify-between items-center font-font2">
        <p className='text-2xl font-semibold text-brown-700'>GoodBooks</p>
        <div>
          <a href="#home" className="mr-6 p-2 bg-primary rounded-xl"> <FontAwesomeIcon  className='mr-2' icon={faBook} /> Books</a>
          <a href="#"><FontAwesomeIcon  className='mr-2' icon={faHeadphones} /> AudiBooks</a>
        </div>
        <div>
          <a href="#favorite" className='mr-4'><FontAwesomeIcon icon={faBookmark} /></a>
          <FontAwesomeIcon className='mr-4' icon={faSuitcase} />
          <FontAwesomeIcon className='mr-4' icon={faUser} />
          <FontAwesomeIcon  className='mr-2' icon={faEllipsisV} />
        </div>
    </nav>
    )
}
export default Navbar;