import { CLICK_ON_TILE } from '../actionTypes/tileActionTypes';

const clickOnTile = (tileNumber)=> {
    return {
        type: CLICK_ON_TILE,
        tileNumber: tileNumber
    }
}

export default clickOnTile;