import { 
    DETAILS_OPEN, 
    DETAILS_CLOSE
} from './../constants/actiontypes';


export const openDetails = payload => {
    return {
        type: DETAILS_OPEN,
        payload
    }
}
export const closeDetails = () => {
    return {
        type: DETAILS_CLOSE
    }
}