export function selectBook(book) {
    //selectBook is actionCreator, it needs to return an action an object with type property
    //It can have 2 values, type and payload
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}