import React, { useState } from 'react';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase';

import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import './MessageSender.css';

function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        });

        setInput('');
        setImageUrl('');
    };

    return (
        <div className='messageSender'>
            <div className='messageSender__top'>
                <Avatar src={user.photoURL} />

                <form>
                    <input
                        value={input}
                        onChange={event => setInput(event.target.value)}
                        type='text'
                        placeholder={`What's on your mind, ${user.displayName}?`}
                        className='messageSender__input'
                    />
                    <input
                        value={imageUrl}
                        onChange={event => setImageUrl(event.target.value)}
                        type='text'
                        placeholder='Image URL (Optional)'
                    />

                    <button onClick={handleSubmit} type='submit'>
                        Hidden Submit
                    </button>
                </form>
            </div>

            <div className='messageSender__bottom'>
                <div className='messageSender__option'>
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>

                <div className='messageSender__option'>
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>

                <div className='messageSender__option'>
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    );
}

export default MessageSender;
