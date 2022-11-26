import classes from './MainNavigation.module.css'

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Planner</div>
            <nav className={classes.nav}>
                <ul className={classes.menu}>
                    <li>Todos</li>
                    <li>Diets</li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;