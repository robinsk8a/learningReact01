import { useState } from "react";



export function TwitterFollowCard({children, userProfile, initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    
    const text = isFollowing ? 'Unfollow' : 'Follow'
    const buttonClassName = isFollowing ? 
        "tw-followCard-button is-following" :
        "tw-followCard-button"
    
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    
    return (
        <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img
            className="tw-followCard-avatar"
            src="https://unavatar.io/github/mdo"
            alt="Some random internet guy"
            />
            <div className="tw-followCard-info">
            <strong>{children}</strong>
            <span className="tw-followCard-infoUserName">@{userProfile}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName}  onClick={handleClick}>{text}</button>
        </aside>
        </article>
    );
    }
