const BoxColor = ({ r, g, b, }) => {
    let cardColor = { backgroundColor: `rgb(${r}, ${g}, ${b})`, color: 'white', width: '1900px', height: '60px' };
    return (
        <div className="card" style={cardColor}>
            <p className="text-rgb">rgb({r}, {g}, {b})</p>
        </div>
    )
};

export default BoxColor;