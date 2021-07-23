import './App.css';
import SignIn from './comps/SignIn';
import Chat from './comps/Chat';
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from './firebase';

function App() {
  const [user] = useAuthState(auth)
  return (
    <>
    {user ? <Chat/> : <SignIn/>}
    </>
  );
}

export default App;
