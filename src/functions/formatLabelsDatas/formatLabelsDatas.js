import preventMissingValues from "./preventMissingValues"
import duplicateDatas from "./duplicateDatas"
import formatDatas from "./formatDatas"

export default function formatLabelsDatas (file) {
    const formattedDatas = formatDatas(file)
    const fixedDataArray = preventMissingValues(formattedDatas)
    const duplicatedDatas = duplicateDatas(fixedDataArray)
    console.log(duplicatedDatas)

    return duplicatedDatas
}