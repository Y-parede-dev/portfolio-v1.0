import Developpeur from './Developpeur';
import Present from './Present';
import '../assets/css/Main.css';
const Main = ({ConnectApiUrl}) => {
    const profilDev = `${ConnectApiUrl}profil/1`
    
    return(
        <div className="component-main">
            <Developpeur connectApiUrlDev={profilDev}/>
            <Present/>
        </div>
    )
}
export default Main;