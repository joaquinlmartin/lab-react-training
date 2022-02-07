import Rating from "./Rating";

const DriverCard = ({name, rating, img, car}) => {
    const licensePlate = car.licensePlate;
    const model = car.model;
    return(
        <div className='cardDriver'>
        <img className='cardDriver-photo' src={img} alt='Driver' />
    
        <div className='infoDriver'>
            <h2>{name}</h2>
            
            <Rating>{rating}</Rating>
            
            <p>{model} {licensePlate}</p>
        </div>


    </div>
    )
}

export default DriverCard;