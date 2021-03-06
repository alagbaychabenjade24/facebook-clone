import React from 'react';
import { useStateValue } from './StateProvider';

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './Header.css';

function Header() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className='header'>
            <div className='header__left'>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png'
                    alt='rounded facebook logo'
                    title='rounded facebook logo'
                />

                <div className='header__input'>
                    <SearchIcon />
                    <input
                        type='text'
                        placeholder='Search Facebook Clone'
                        name='user.search'
                        id='user.search'
                    />
                </div>
            </div>

            <div className='header__center'>
                <div className='header__option header__option--active'>
                    <HomeIcon fontSize='large' />
                </div>

                <div className='header__option'>
                    <SubscriptionsOutlinedIcon fontSize='large' />
                </div>

                <div className='header__option'>
                    <StorefrontOutlinedIcon fontSize='large' />
                </div>

                <div className='header__option'>
                    <SupervisedUserCircleIcon fontSize='large' />
                </div>

                <div className='header__option'>
                    <DashboardOutlinedIcon fontSize='large' />
                </div>
            </div>

            <div className='header__right'>
                <div className='header__info'>
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <AddIcon className='dark' />
                </IconButton>

                <IconButton>
                    <ForumIcon className='dark' />
                </IconButton>

                <IconButton>
                    <NotificationsActiveIcon className='dark' />
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon className='dark' />
                </IconButton>
            </div>
        </div>
    );
}

export default Header;
