import React from 'react';
import Story from './Story';

import './StoryReel.css';

function StoryReel() {
    return (
        <div className='storyReel'>
            {/* Story */}
            <Story
                image='https://images.unsplash.com/photo-1590508292979-a30664cfdb51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80'
                profileSrc='https://scontent.fceb1-1.fna.fbcdn.net/v/t1.0-9/103450743_112682167153515_2156102120350639905_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=ZnZ_m_0pvzQAX9T0K05&_nc_ht=scontent.fceb1-1.fna&oh=a78024c75e1070f85537e431e810043f&oe=5FC7B1CC'
                title='Charity Janine'
            />

            <Story
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBHC2s4NFdzXEsVzvBPGjkrSePQa-8XFuNtQ&usqp=CAU'
                profileSrc='https://avatars2.githubusercontent.com/u/17398401?s=400&u=8d80858a3ae29e9f959626483ebef0901c2bc230&v=4'
                title='Aaron Bernath'
            />

            <Story
                image='https://scontent.fceb1-1.fna.fbcdn.net/v/t1.0-9/87160228_196123158415762_6068907549388701696_o.jpg?_nc_cat=104&ccb=2&_nc_sid=a4a2d7&_nc_ohc=Eed6kuj_qyAAX9VjM0c&_nc_ht=scontent.fceb1-1.fna&oh=07d907f17512785437ebe00620ec4dfd&oe=5FC4FCA6'
                profileSrc='https://scontent.fceb1-1.fna.fbcdn.net/v/t1.0-9/72371954_137193040975441_3437499718421184512_o.jpg?_nc_cat=108&ccb=2&_nc_sid=a4a2d7&_nc_ohc=xQrsMBhwL4gAX8GWw2k&_nc_ht=scontent.fceb1-1.fna&oh=bd5ad52fbd0fbcff5df9d2cc64411e4a&oe=5FC7FD69'
                title='Nathally Gree G. Uytico'
            />

            <Story
                image='https://images.unsplash.com/photo-1529675804080-e12a8d5cef9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80'
                profileSrc='https://avatars3.githubusercontent.com/u/345913?s=400&u=8d1e1b4bdbe2b05c8b6b3800cf50a6743ef54042&v=4'
                title='Olivia Rose'
            />

            <Story
                image='https://images.unsplash.com/photo-1525500676653-40a099582c89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
                profileSrc='https://images.unsplash.com/photo-1484688493527-670f98f9b195?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2660&q=80'
                title='Jay Cruz'
            />
        </div>
    );
}

export default StoryReel;
