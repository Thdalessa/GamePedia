import {useEffect} from 'react';
import { useDispatch, useSelector} from "react-redux"
import { filterGamesbyGenre, getGenres } from "../../../Redux/actions";
import styles from './FilterByGenre.module.css'



export default function FilterByGenre(){
    const dispatch = useDispatch();
    let genres = useSelector((state)=> state.genres)
    useEffect(() => {
        dispatch(getGenres())
      },[])
    function handleSelectChange(e){
        dispatch(filterGamesbyGenre(e.target.value))
    }

    

    return (
        <div className={styles.filter2Container}>
            <label className={styles.filter2Label}>Filtrar por genero: </label>
            <select name='select' onChange={handleSelectChange} className={styles.filter2Select}>
                <option className={styles.filter2Option} value='default'>Default</option>
                {genres?.map((genre) => {
                    return <option key={genre.id }className={styles.filter2Option} value={genre.name}>{genre.name}</option>
                })}
            </select>
        </div>
    )
}