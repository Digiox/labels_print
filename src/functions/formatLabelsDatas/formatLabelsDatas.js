import preventMissingValues from "./preventMissingValues"
import duplicateDatas from "./duplicateDatas"

export default function formatLabelsDatas (file) {
    const fixedDataArray = preventMissingValues(file)
    const duplicatedDatas = duplicateDatas(fixedDataArray)
    

    return duplicatedDatas
}