import { useDispatch } from "react-redux"
import { sortGames } from "../../../Redux/actions";
import styles from './Order.module.css'



export default function Order(){
    const dispatch = useDispatch();
    function handleSelectChange(e){
        console.log('Entro en select change')
        dispatch(sortGames(e.target.value))
    }

    return (
        <div className={styles.orderContainer}>
            <label className={styles.orderLabel}>Ordenar por:</label>
            <select name='select' onChange={handleSelectChange} className={styles.orderSelect}>
                <option className={styles.orderOption} value='default'>Default</option>
                <option className={styles.orderOption} value='A-Z'>A-Z</option>
                <option className={styles.orderOption} value='Z-A'>Z-A</option>
                <option className={styles.orderOption} value='1-5'>Rating: 1-5</option>
                <option className={styles.orderOption} value='5-1'>Rating: 5-1</option>
            </select>
        </div>
    )
}