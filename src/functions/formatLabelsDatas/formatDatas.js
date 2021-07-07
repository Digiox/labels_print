import renameKey from "./renameKey"
export default function formatDatas (file) {
console.log(file)
const newDatas = file.content.data.map((el, i) => {
    var element = el
    const keysArray = Object.keys(element)
    for (let index = 0; index < keysArray.length; index++) {
        const newKeyName = keysArray[index].normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /gi, "_").replace(/'/gi,"").replace('.', '')
        element = renameKey(element, keysArray[index], newKeyName)

        
    }
    console.log(element)
})
}
// const formattedFieldName = fields[i].normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /gi, "_").replace(/'/gi,"").replace('.', '')