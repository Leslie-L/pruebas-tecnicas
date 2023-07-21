import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark} from '@fortawesome/free-solid-svg-icons'

function BookCard(bookInfo,save) {
    const cover = bookInfo['book']['book'].cover
   
    if(save){
       return(<article className="flex-shrink-0 w-52  mr-6 relative shadow-xl">
            <img src={cover} className="rounded-sm shadow-sm" alt="" />
            <button className="bg-gray-200 h-10 w-10 rounded-full absolute top-2 left-2 shadow-2xl hover:bg-primary hover:text-white"><FontAwesomeIcon icon={faBookmark}  /></button>
        </article>)
    }
    return(
    <article className="flex-shrink-0 w-52  mr-6 relative shadow-xl">
        <img src={cover} className="rounded-sm  brightness-50" alt="" />
        <button className=" h-10 w-10 rounded-full absolute top-2 left-2 shadow-2xl bg-primary text-white"><FontAwesomeIcon icon={faBookmark}  /></button>
    </article>
    )
    
}
export default BookCard