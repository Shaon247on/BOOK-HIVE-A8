const getStoredItemWishlist = ()=> {
    const storedItem = localStorage.getItem('wishlist')
    if(storedItem){
        return JSON.parse(storedItem)
    }
    return []
}

const savedItemWishlist = id =>{
    const storedItems = getStoredItemWishlist()
    const exists = storedItems.find(item => item ===id)
    if(!exists){
        storedItems.push(id)
        localStorage.setItem('wishlist', JSON.stringify(storedItems))
    }
}

export {getStoredItemWishlist, savedItemWishlist}