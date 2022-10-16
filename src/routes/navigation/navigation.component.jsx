import { Outlet } from 'react-router-dom';
import { NavigationContainer } from './navigation.styles';

const Nav = () => {
   return (
      <NavigationContainer>
         <Outlet/>
      </NavigationContainer>
   )
}

export default Nav;