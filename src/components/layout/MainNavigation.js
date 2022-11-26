import { Link, NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Planner</div>
            <nav className={classes.nav}>
                <ul className={classes.menu}>
                    <li>
                        <NavLink to='/todos' className={({isActive}) => isActive? classes.active: undefined}>Todos</NavLink>
                    </li>
                    <li>
                        <NavLink to='/diets' className={({isActive}) => isActive? classes.active: undefined}>Diets</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;