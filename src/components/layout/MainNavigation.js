import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Planner</div>
            <nav className={classes.nav}>
                <ul className={classes.menu}>
                    <li>
                        <Link to='/todos'>Todos</Link>
                    </li>
                    <li>
                        <Link to='diets'>Diets</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;