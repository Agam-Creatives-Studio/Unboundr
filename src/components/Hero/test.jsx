import React, { useState } from 'react';
import './test.css';

const length = 8;
// const itemWidth = 500;
const z = 800;

const teamData = [
    {
        name: 'Alice Johnson',
        image: 'https://picsum.photos/id/1011/500/350',
        description: 'Creative and highly collaborative designer.',
    },
    {
        name: 'Brian Smith',
        image: 'https://picsum.photos/id/1012/500/350',
        description: 'An expert in branding and storytelling.',
    },
    {
        name: 'Clara Williams',
        image: 'https://picsum.photos/id/1013/500/350',
        description: 'Passionate about clean, modern interfaces.',
    },
    {
        name: 'David Lee',
        image: 'https://picsum.photos/id/1014/500/350',
        description: 'Strategic thinker with a focus on UX.',
    },
    {
        name: 'Eva Brown',
        image: 'https://picsum.photos/id/1015/500/350',
        description: 'Loves solving problems visually and intuitively.',
    },
    {
        name: 'Frank Green',
        image: 'https://picsum.photos/id/1016/500/350',
        description: 'Designs with clarity, simplicity, and purpose.',
    },
    {
        name: 'Grace Kim',
        image: 'https://picsum.photos/id/1017/500/350',
        description: 'Crafts meaningful brand experiences.',
    },
    {
        name: 'Henry Allen',
        image: 'https://picsum.photos/id/1018/500/350',
        description: 'Detail-oriented with a love for visual harmony.',
    },
];

const Test = () => {
    const [index, setIndex] = useState(0);

    const angle = (index / length) * -360;
    const transform = `translateZ(-${z}px) rotateY(${angle}deg)`;

    const getTransform = (id) => {
        const deg = id * (360 / length);
        return `rotateY(${deg}deg) translateZ(${z}px)`;
    };

    return (
        <div className="our-team-scene mb-md-5 mb-3">
            <div className="our-team-carousel" style={{ transform }}>
                {teamData.map((member, id) => (
                    <div
                        key={id}
                        className="our-team-item"
                        style={{ transform: getTransform(id), backgroundImage: `url(${member.image})` }}
                    >
                        <div className="our-team-overlay">
                            <h6 className="our-team-overlay-text text-end subTitleWhite">{member.name}</h6>
                            <p className="our-team-overlay-text text-end paraWhite">{member.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="our-team-controls row d-flex justify-content-center gap-20">
                <button onClick={() => setIndex((index - 1 + length) % length)}>‹</button>
                <button onClick={() => setIndex((index + 1) % length)}>›</button>
            </div>
        </div>
    );
};

export default Test;
