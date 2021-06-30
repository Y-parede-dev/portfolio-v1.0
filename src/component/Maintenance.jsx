import logoMaintenance from './../assets/images/marteau_piqueur.gif';

const Maintenance = () => {

    return (
        <div className='maintenance'>
            <img src={logoMaintenance} className="App-logo" alt="logo de maintenance" />
            <div className="in-progress">
                <p className="en-cours-de-creation">
                En cours de création 
                <span className="one">.</span>
                <span className="two">.</span>
                <span className="three">.</span>
                </p>
            </div>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
        </div>
    );
}
export default Maintenance;