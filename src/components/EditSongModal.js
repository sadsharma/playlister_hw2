import React, { Component } from 'react';

export default class EditSongModal extends Component {
    render() {
        const {editSongCallback, hideEditSongModalCallback } = this.props;
        return (
            <div 
                className="modal" 
                id="edit-song-modal" 
                data-animation="slideInOutLeft">
                    <div className="modal-root" id='verify-edit-song-root'>
                        <div className="modal-north">
                            Edit song:
                        </div>
                        <div className="modal-center">
                            <div className="modal-center-content">
                            <div>Song name:</div>
                            <input type="text" id="title" name="title"></input>
                            <div>Artist name:</div>
                            <input type="text" id="artist" name="artist"></input>
                            <div>Youtube ID:</div>
                            <input type="text" id="youTubeId" name ="youtubeID"></input>
                            </div>
                        </div>
                        <div className="modal-south">
                            <input type="button" 
                                id="edit-song-confirm-button" 
                                className="modal-button" 
                                onClick={editSongCallback}
                                value='Confirm' />
                            <input type="button" 
                                id="edit-song-cancel-button" 
                                className="modal-button" 
                                onClick={hideEditSongModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}