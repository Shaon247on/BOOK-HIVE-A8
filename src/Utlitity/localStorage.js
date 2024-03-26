const getStoredItem = (value)=> {
    const storedItem = localStorage.getItem(value)
    if(storedItem){
        return JSON.parse(storedItem)
    }
    return []
}

const savedItem = (id, value) =>{
    const storedItems = getStoredItem(value)
    const exists = storedItems.find(item => item ===id)
    if(!exists){
        storedItems.push(id)
        localStorage.setItem(value, JSON.stringify(storedItems))
    }
}

export {getStoredItem, savedItem}