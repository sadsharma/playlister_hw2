import React, { Component } from 'react';

export default class EditSongModal extends Component {
    render() {
        const {deleteSongCallback, hideDeleteSongModalCallback } = this.props;
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
                            <span>Song name:</span>
                            <input type="text" id="title" name="title"></input>
                            <span>Artist name:</span>
                            <input type="text" id="artist" name="artist"></input>
                            <span>Youtube ID:</span>
                            <input type="text" id="youTubeId" name ="youtubeID"></input>
                            </div>
                        </div>
                        <div className="modal-south">
                            <input type="button" 
                                id="edit-song-confirm-button" 
                                className="modal-button" 
                                onClick={deleteSongCallback}
                                value='Confirm' />
                            <input type="button" 
                                id="edit-song-cancel-button" 
                                className="modal-button" 
                                onClick={hideDeleteSongModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}