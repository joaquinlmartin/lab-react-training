import visa from './../assets/images/visa.png';
import masterCard from './../assets/images/master-card.svg';

const CreditCard = (props) => {
    let {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props
    let properties = {backgroundColor: `${bgColor}`, color: `${color}`, width: '350px', height: '200px'}

    let numberCreditCard = number;
    let arrayNumbers = numberCreditCard.toString().split('');
    let digits = arrayNumbers.slice(12,16).join('').toString();

    return(
        <div className='creditCard' style={properties}>
            <h4>{type === 'Visa' ? <img className='logo' src={visa} alt='visaImage'/> : <img className='logo' src={masterCard} alt='masterCardImage'/>}</h4>
            <br />
            <h1 className='number'>**** **** **** {digits}</h1>
            <br />
            <h4>Expires {expirationMonth}/{expirationYear} {bank}</h4>
            <h4>{owner}</h4>
        </div>
        
    )
}
export default CreditCard;