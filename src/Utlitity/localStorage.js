const getStoredItem = ()=> {
    const storedItem = localStorage.getItem('read')
    if(storedItem){
        return JSON.parse(storedItem)
    }
    return []
}

const savedItem = id =>{
    const storedItems = getStoreditem()
    const exists = storedItems.find(item => item.id ===id)
    if(!exists){
        storedItems.push(id)
        localStorage.setItem('read', JSON.stringify(storedItems))
    }
}

export {getStoredItem, savedItem}