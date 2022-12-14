import React from "react";
import App from "../App";

export default class EditToolbar extends React.Component {

    render() {
        const {canUndo, canRedo, canAddSong, canClose, addSongCallback, undoCallback, redoCallback, closeCallback} = this.props;
        let addSongClass = "toolbar-button";
        let undoClass = "toolbar-button";
        let redoClass = "toolbar-button";
        let closeClass = "toolbar-button";

        if (!canAddSong) addSongClass += " disabled" ;
        if (!canUndo) undoClass += " disabled";
        if (!canRedo) redoClass += " disabled";
        if (!canClose) closeClass += " disabled";
        
        return (
            <div id="edit-toolbar">
            <input 
                type="button" 
                id='add-song-button' 
                value="+" 
                disabled = {!canAddSong}
                className={addSongClass}
                onClick={addSongCallback}
            />
            <input 
                type="button" 
                id='undo-button' 
                value="⟲" 
                disabled = {!canUndo}
                className={undoClass} 
                onClick={undoCallback}
            />
            <input 
                type="button" 
                id='redo-button' 
                value="⟳" 
                disabled = {!canRedo}
                className={redoClass} 
                onClick={redoCallback}
            />
            <input 
                type="button" 
                id='close-button' 
                value="&#x2715;" 
                disabled = {!canClose}
                className={closeClass} 
                onClick={closeCallback}
            />
        </div>
        )
    }
}