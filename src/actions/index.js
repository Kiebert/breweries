export const openDetails = payload => {
    return {
        type: 'DETAILS_OPEN',
        payload
    }
}
export const closeDetails = () => {
    return {
        type: 'DETAILS_CLOSE'
    }
}