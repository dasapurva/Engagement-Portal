import"./share.css";
import{PermMedia, Label,Room,EmojiEmotions} from"@mui/icons-material"

export default function Share(){
    return(
        <div className="share" >
                <div className="shareWrapper">
                    <div className="shareTop">
                        <img className="shareProfileImg" src="/assests/persons/1.jpg" alt=""/>
                        <input placeholder="Whats in your mind" className="shareInput" />
                    </div>

                    <hr className="shareHr"/>
                    <div className="shareBottom">
                        <div className="shareOptions">
                            <div className="shareOptions">
                                <PermMedia htmlColor="tomato" className="shareIcon"/>
                                <span className="shareOptionText">Photo or video</span>
                            </div>
                            <div className="shareOptions">
                                <Label htmlColor="blue"className="shareIcon"/>
                                <span className="shareOptionText">Tag</span>
                            </div>
                            <div className="shareOptions">
                                <Room htmlColor="Green"className="shareIcon"/>
                                <span className="shareOptionText">Locations</span>
                            </div>
                            <div className="shareOptions">
                                <EmojiEmotions htmlColor="gold"className="shareIcon"/>
                                <span className="shareOptionText">feelings</span>
                            </div>
                           
                        </div>
                        
                        <button className="shareButton">Share</button>
                    </div>
                    
                </div>
        </div>
    )
}