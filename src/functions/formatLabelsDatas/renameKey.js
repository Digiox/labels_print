export default function renameKey (object, actualKey, newKey) {
    const clone = obj => Object.assign({}, obj)

    const clonedObj = clone(object)
    const targetKey = clonedObj[actualKey]

    delete clonedObj[actualKey]
    clonedObj[newKey] = targetKey
    return clonedObj
}