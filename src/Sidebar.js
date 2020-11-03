import React from 'react';
import { useStateValue } from './StateProvider';
import SidebarRow from './SidebarRow';

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from '@material-ui/icons';

import './Sidebar.css';

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className='sidebar'>
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
            <SidebarRow
                Icon={LocalHospitalIcon}
                title='COVID-19 Information Center'
            />
            <SidebarRow Icon={PeopleIcon} title='Friends' />
            <SidebarRow Icon={SupervisedUserCircleRoundedIcon} title='Groups' />
            <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
            <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
            <SidebarRow Icon={ExpandMoreOutlined} title='See More' />
        </div>
    );
}

export default Sidebar;
