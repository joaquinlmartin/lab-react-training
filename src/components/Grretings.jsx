const Greetings = ({ lang, children }) => {

    let greeting = '';
    switch (lang) {
        case 'es':
            greeting = 'Hola ';
            break;
        case 'it':
            greeting = 'Ciao ';
            break;   
        case 'en':
            greeting = 'Hello ';
            break;
        case 'de':
            greeting = 'Hallo ';
            break;
        case 'fr':
            greeting = 'Bonjour ';
            break;
        default:
            greeting = 'Hola ';
            break;
    }
    return (
        <div className="card">
            {greeting}
            {children}
        </div>
    )
}
export default Greetings;