const Random = ({min, max}) => {
    let randomNumber = Math.floor(Math.random() * max + min);
    return (
        <div className="card">
            Random value between {min} and {max} = {randomNumber}
        </div>
    )
};

export default Random;