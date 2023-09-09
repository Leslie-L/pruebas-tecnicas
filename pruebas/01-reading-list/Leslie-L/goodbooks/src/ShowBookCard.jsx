import  useBookStore  from "./useStore.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose} from '@fortawesome/free-solid-svg-icons'
import { faBookmark} from '@fortawesome/free-solid-svg-icons'

function ShowBookCard() {
    
    const {modal,closeModal,actualBook,isFavorite,deleteFavorites,addFavorites} = useBookStore((state) => ({
        modal:  state.modal,
        closeModal:state.closeModal,
        actualBook: state.actualBook,
        isFavorite:state.isFavorite,
        deleteFavorites: state.deleteFavorites,
        addFavorites:state.addFavorites
    }))
    function handleDeleteFav() {
        deleteFavorites(actualBook.ISBN)
    }
    function handleAddFav() {
        addFavorites(actualBook.ISBN)
    }
    return (
        <aside className={`fixed top-0 left-0 right-0 z-50 w-full h-full bg-transparent	 ${modal?'flex':'hidden'} flex flex-col justify-center items-center`}>
            
            <div className="w-[90%] h-auto bg-secondary rounded-md shadow-xl md:w-2/4 p-4">
                <div className="mt-2 w-full h-auto flex justify-end">
                    <FontAwesomeIcon 
                     className='w-6 h-6 mr-4 shadow-2xl hover:text-primary' 
                     icon={faClose}
                     onClick={closeModal} />
                </div>
            <div className="flex flex-col md:flex-row gap-3">
                <div className="relative">
                        <img src={actualBook?.cover} alt={actualBook?.title} className="h-72 w-60 rounded-md"  />
                       {isFavorite(actualBook?.ISBN) ? <button className=" h-10 w-10 rounded-full absolute top-2 left-2 shadow-2xl bg-primary text-white" onClick={()=>handleDeleteFav()} ><FontAwesomeIcon icon={faBookmark}  /></button>:<button className="bg-gray-200 h-10 w-10 rounded-full absolute top-2 left-2 shadow-2xl hover:bg-primary hover:text-white" onClick={()=>handleAddFav()} ><FontAwesomeIcon icon={faBookmark}  /></button> }   
                </div>
                    <div>
                        <h2 className="font-bold text-lg">{actualBook?.title}</h2>
                        <p><strong>Author:</strong> </p>
                        <p><strong>Genre</strong> {actualBook?.genre}</p>
                        <p><strong>Pages:</strong> {actualBook?.pages}</p>
                        <p><strong>Year:</strong> {actualBook?.year}</p>
                        <p className="w-[90%]">{actualBook?.synopsis}</p>
                    </div>
            </div>
            </div>
        </aside>
    );
}
export default ShowBookCard;
