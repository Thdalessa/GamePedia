import { useDispatch } from "react-redux"
import { filterGamesbyGames } from "../../../Redux/actions";
import styles from './FilterByGame.module.css'



export default function FilterByGames(){
    const dispatch = useDispatch();
    function handleSelectChange(e){
        console.log('Entro en select change')
        dispatch(filterGamesbyGames(e.target.value))
    }

    return (
        <div className={styles.filterContainer}>
            <label className={styles.filterLabel}>Filtrar por juego:</label>
            <select name='select' onChange={handleSelectChange} className={styles.filterSelect}>
                <option className={styles.filterOption} value='default'>Default</option>
                <option className={styles.filterOption} value='database'>Creados</option>
                <option className={styles.filterOption} value='api'>Existentes</option>
            </select>
        </div>
    )
}