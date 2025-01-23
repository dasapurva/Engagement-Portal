import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div>
      {/* Top Logo Bar */}
      <div className="logoBar">
        <div className="logo">
          <div className="logo-text">MIT</div>
          <div className="divider"></div>
          <div className="subtext">
            <span>School of</span>
            <span style={{ marginLeft: "1px" }}>Distance Education</span>
          </div>
        </div>
      </div>

      {/* Original Topbar */}
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">Engage360</span>
        </div>

        <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchicon" />
            <input
              placeholder="Search for friends, post or videos"
              className="searchinput"
            />
          </div>
        </div>

        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topLink">Homepage  </span>
            <span className="topLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <img
            src="/assests/persons/1.jpg"
            alt="profile"
            className="topbarImg"
          />
        </div>
      </div>
    </div>
  );
}
