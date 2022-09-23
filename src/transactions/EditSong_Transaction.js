import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * MoveSong_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, oldName, oldArtist, oldYoutubeID, newName, newArtist, newYoutubeId ) {
        super();
        this.app = initApp;
        this.oldName = oldName;
        this.oldArtist = oldArtist;
        this.oldYoutubeID = oldYoutubeID;
        this.newArtist = newArtist;
        this.newName = newName;
        this.newYoutubeId = newYoutubeId;
    }

    doTransaction() {
        this.app.moveSong(this.oldSongIndex, this.newSongIndex);
    }
    
    undoTransaction() {
        this.app.moveSong(this.newSongIndex, this.oldSongIndex);
    }
}