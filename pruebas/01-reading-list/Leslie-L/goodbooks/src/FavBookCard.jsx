import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft} from '@fortawesome/free-solid-svg-icons'

function FavBookCard(book) {
    const cover = book['book']['book'].cover;
    const title = book['book']['book'].title;
    const name= book['book']['book']['author']['name']
    return(
        <article className="w-60 h-32 flex mr-8 flex-shrink-0 justify-between">
            <img src={cover} className="rounded-sm mr-1" alt="" />
            <div className="w-38 h-full flex flex-col">
                <FontAwesomeIcon  className='place-self-end shadow-2xl hover:text-primary' icon={faDeleteLeft} onClick={()=>book.delete(book['book']['book'].ISBN)}/>
                <p className="font-semibold  text-center">{title}</p>
                <p className="text-center">{name}</p>
                <button className="bg-primary w-25 h-6 mt-2 rounded-xl" >Informacion</button>
            </div>
        </article>
    )
}
export default FavBookCard