export default function duplicatedDatas (data) {
    const newArray = []
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].QUANTITEE_RECUE; j++) {
            newArray.push(data[i])
            
        }
        
    }
    return newArray
}