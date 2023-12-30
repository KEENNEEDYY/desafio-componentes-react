import './styles.css';
import carImg from '../../assets/car.png';

export default function CatalogCard(){
    return(
        <div className="ctop-catalog-card">
            <img src={carImg} alt="Car" />
            <h3>Lorem ipsum dolor</h3>
        </div>
    )
}