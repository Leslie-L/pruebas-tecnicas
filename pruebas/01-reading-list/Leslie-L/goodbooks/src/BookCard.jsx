import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark} from '@fortawesome/free-solid-svg-icons'
import  useBookStore  from "./useStore.jsx"


function BookCard(props) {
    const {setActualBook,openModal} = useBookStore((state) => ({
        setActualBook:state.setActualBook,
        openModal:  state.openModal,   
    }))
    const cover = props['bookInfo']['book'].cover
    const addFav = ()=>{
        props.favorites(props['bookInfo']['book'].ISBN)
    }
    const deleteFav =()=>{
        props.delete(props['bookInfo']['book'].ISBN) 
    }
    function handleModal() {
        setActualBook(props['bookInfo']['book']),
        openModal()
    }     
    
    return(<article className="flex-shrink-0 w-52  mr-6 relative shadow-xl md:mr-0" onClick={handleModal}>
            {
              props.save(props['bookInfo']['book'].ISBN)?  <img src={cover} className="rounded-sm  brightness-50 h-72" alt="" /> : <img src={cover} className="rounded-sm shadow-sm h-72" alt="" />
            }
            {
             props.save(props['bookInfo']['book'].ISBN)? <button className=" h-10 w-10 rounded-full absolute top-2 left-2 shadow-2xl bg-primary text-white" onClick={()=>deleteFav()} ><FontAwesomeIcon icon={faBookmark}  /></button>:<button className="bg-gray-200 h-10 w-10 rounded-full absolute top-2 left-2 shadow-2xl hover:bg-primary hover:text-white" onClick={()=>addFav()} ><FontAwesomeIcon icon={faBookmark}  /></button>
            }
            
        </article>)
}
export default BookCard