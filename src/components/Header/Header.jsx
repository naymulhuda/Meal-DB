import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="bg-blue-200 mb-7 h-12">
            
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/meals'>Meals</NavLink>

            </nav>
        </div>
    );
};

export default Header;