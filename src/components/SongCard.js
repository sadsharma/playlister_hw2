import React from "react";

export default class SongCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDragging: false,
            draggedTo: false,
            number : null,
            songTitle: null
        }
    }
    handleDragStart = (event) => {
        event.dataTransfer.setData("song", event.target.id);
        this.setState(prevState => ({
            isDragging: true,
            draggedTo: prevState.draggedTo
        }));
    }
    handleDragOver = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragEnter = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragLeave = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: false
        }));
    }
    handleDrop = (event) => {
        event.preventDefault();
        let target = event.target;
        let targetId = target.id;
        targetId = targetId.substring(target.id.indexOf("-") + 1);
        let sourceId = event.dataTransfer.getData("song");
        sourceId = sourceId.substring(sourceId.indexOf("-") + 1);
        
        this.setState(prevState => ({
            isDragging: false,
            draggedTo: false
        }));

        // ASK THE MODEL TO MOVE THE DATA
        this.props.moveCallback(sourceId, targetId);
    }

    handleDeleteSong = () => {
        this.props.deleteCallback(this.getItemNum(), this.state.songTitle);

    }

    handleEditSong = () => {
        this.props.editSongCallback(this.getItemNum());
    }

    getItemNum = () => {
        return this.props.id.substring("playlist-song-".length);
    }

    render() {
        const {song} = this.props;
        let num = this.getItemNum();
        this.state.songTitle = song.title;
        console.log(this.state.songTitle);
        console.log("num: " + num);
        let itemClass = "playlister-song";
        const link = "https://www.youtube.com/watch?v=" + song.youTubeId
        if (this.state.draggedTo) {
            itemClass = "playlister-song-dragged-to";
        }
        return (
            <div
                id={'song-' + num}
                className={itemClass}
                onDragStart={this.handleDragStart}
                onDragOver={this.handleDragOver}
                onDragEnter={this.handleDragEnter}
                onDragLeave={this.handleDragLeave}
                onDrop={this.handleDrop}
                onDoubleClick={this.handleEditSong}
                draggable="true"
            >
                <span> {num}. </span>
                <a href= {link} id={'song' + num} target="_blank" rel="noopener noreferrer" >{song.title} by {song.artist}</a>
                <input
                        type="button"
                        id={"delete-song-" + num}
                        className="delete-song-button"
                        onClick={this.handleDeleteSong}
                        value="&#x2715;" />
            </div>
        )
    }
}