import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


function BookCard(props) {
    
    const cover = props['bookInfo']['book'].cover
    const addFav = ()=>{
        props.favorites(props['bookInfo']['book'].ISBN)
    }
    const deleteFav =()=>{
        props.delete(props['bookInfo']['book'].ISBN) 
    }     
    
    return(<article className="flex-shrink-0 w-52  mr-6 relative shadow-xl">
            {
              props.save(props['bookInfo']['book'].ISBN)?  <img src={cover} className="rounded-sm  brightness-50" alt="" /> : <img src={cover} className="rounded-sm shadow-sm" alt="" />
            }
            {
             props.save(props['bookInfo']['book'].ISBN)? <button className=" h-10 w-10 rounded-full absolute top-2 left-2 shadow-2xl bg-primary text-white" onClick={()=>deleteFav()} ><FontAwesomeIcon icon={faBookmark}  /></button>:<button className="bg-gray-200 h-10 w-10 rounded-full absolute top-2 left-2 shadow-2xl hover:bg-primary hover:text-white" onClick={()=>addFav()} ><FontAwesomeIcon icon={faBookmark}  /></button>
            }
            
        </article>)
}
export default BookCard