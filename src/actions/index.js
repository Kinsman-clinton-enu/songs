//Action creator
export const selectSong = song =>{
    //Action
    return {
        type: 'SONG_SELECTED',
        playload: song
    };
};