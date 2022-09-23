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
export default class RemoveSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, oldIndex, song) {
        super();
        this.oldIndex = oldIndex;
        this.song = song;
        this.app = initApp;
    }

    doTransaction() {
        this.app.removeSong();
    }
    
    undoTransaction() {
        this.app.addSongAtIndex(this.song, this.oldIndex);
    }
}