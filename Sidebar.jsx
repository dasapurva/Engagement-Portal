import "./sidebar.css"
import{RssFeed} from "@mui/icons-material"
import{School}from "@mui/icons-material"
import{Chat}from "@mui/icons-material"
import{Event}from "@mui/icons-material"
import{Bookmark}from "@mui/icons-material"
import{WorkOutline}from "@mui/icons-material"
import{HelpOutline}from "@mui/icons-material"
import{PlayCircleFilledOutlined}from "@mui/icons-material"
import{Group}from "@mui/icons-material"

import{ Users} from "../../dummyData";


export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <RssFeed className="sidebarIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                    <Chat className="sidebarIcon"/>
                    <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                    <PlayCircleFilledOutlined className="sidebarIcon"/>
                    <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                    <Group className="sidebarIcon"/>
                    <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                    <Bookmark className="sidebarIcon"/>
                    <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                    <HelpOutline className="sidebarIcon"/>
                    <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                    <WorkOutline className="sidebarIcon"/>
                    <span className="sidebarListItemText">Alumni</span>
                    </li>
                    <li className="sidebarListItem">
                    <Event className="sidebarIcon"/>
                    <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                    <School className="sidebarIcon"/>
                    <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>

                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    {Users.map((u=>(
                        <closeFriend key={u.id} user={u}/>
                    )
                ))}

                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assests/persons/2.jpg" alt=""/>
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assests/persons/1.jpg" alt=""/>
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assests/persons/3.jpg" alt=""/>
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assests/persons/4.jpg" alt=""/>
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assests/persons/5.jpg" alt=""/>
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assests/persons/6.jpg" alt=""/>
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assests/persons/2.jpg" alt=""/>
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assests/persons/4.jpg" alt=""/>
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assests/persons/4.jpg" alt=""/>
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assests/persons/4.jpg" alt=""/>
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assests/persons/4.jpg" alt=""/>
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assests/persons/4.jpg" alt=""/>
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assests/persons/4.jpg" alt=""/>
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assests/persons/4.jpg" alt=""/>
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assests/persons/4.jpg" alt=""/>
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assests/persons/4.jpg" alt=""/>
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assests/persons/4.jpg" alt=""/>
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assests/persons/4.jpg" alt=""/>
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assests/persons/4.jpg" alt=""/>
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assests/persons/4.jpg" alt=""/>
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assests/persons/4.jpg" alt=""/>
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assests/persons/4.jpg" alt=""/>
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assests/persons/4.jpg" alt=""/>
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assests/persons/4.jpg" alt=""/>
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assests/persons/4.jpg" alt=""/>
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}