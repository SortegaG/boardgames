// Contexto de usuario
//import { UserContext } from "../../context/UserContext";
import Nav from './Nav'

const Header = () => {

  //const navigate = useNavigate();
  // // Consume el nombre del contexto
  // //const { username, updateUsername } = useContext(UserContext);


  // const handleOnClick = () => {
  //   navigate('/');
  // };
  return (
    // <div>
    //   <p>Header</p>
    // </div>
  //   <Header>

  //     {username?
  //     <>
  //       <span>Hola, {username}</span>
  //       <button onClick={() => updateUsername("")}>Logout</button>
  //     </>
  //     :<button onClick={()=>handleOnClick()}>Login</button>}
    <div>
    <Nav />
    <p>header jaja</p>
    </div>
  );
};

export default Header;