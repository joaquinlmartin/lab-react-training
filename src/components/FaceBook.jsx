export default function FaceBook(props) {
    return (
      <div className="face">
        <img src={props.img} alt="image" />
        <p>First name:{props.firstName}</p>
        <p>Last name:{props.lastName}</p>
        <p>Country:{props.country}</p>
        <p>Type:{props.isStudent}</p>
      </div>
    );
  }
  