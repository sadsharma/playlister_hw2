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
    constructor(initApp, index, oldName, oldArtist, oldYoutubeID, newName, newArtist, newYoutubeId ) {
        super();
        this.app = initApp;
        this.oldName = oldName;
        this.oldArtist = oldArtist;
        this.oldYoutubeID = oldYoutubeID;
        this.newArtist = newArtist;
        this.newName = newName;
        this.newYoutubeId = newYoutubeId;
        this.index = index;
    }

    doTransaction() {
        this.app.completeEditingSong(this.index, this.newName, this.newArtist, this.newYoutubeId);
    }
    
    undoTransaction() {
        this.app.completeEditingSong(this.index, this.oldName, this.oldArtist, this.oldYoutubeID);
    }
}