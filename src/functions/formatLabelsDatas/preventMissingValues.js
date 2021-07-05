export default function preventMissingValues(file) {
    return file.content.data.filter(el => {
        var isValueMissing = false
        const keys = Object.keys(el)
        if (keys < 8) {
            isValueMissing = true
        }
        for (let i = 0; i < file.content.meta.fields.length; i++) {
            if (el[file.content.meta.fields[i]] === " " || el[file.content.meta.fields[i]] === "") {
                isValueMissing = true
            }
        }
        if (isValueMissing) {
            return false
        } else {
            return true
        }
    })
}