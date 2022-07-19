import {Link, link} from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation(){
    return <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li><Link to='/'> All meetups </Link></li>
                    <li><Link to='/new-meetup'> Add new meetup </Link></li>
                    <li><Link to='/favorites'> My favorites </Link></li>
                </ul>
            </nav>
    </header>
}

export default MainNavigation;