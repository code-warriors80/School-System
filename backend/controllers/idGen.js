const idGenerator = (len) => {
    if (len == 0) {
        const stfId = 'STF-00' + 1
        return stfId
    } else if (len > 0 && len <= 9) {
        console.log('less than 9')
        const stfId = 'STF-0' + len
        return stfId
    } else if (len > 9 && len < 100) {
        console.log('less than 100')
        const stfId = 'STF-0' + len
        return stfId
    } else {
        const stfId = 'STF-' + len
        return stfId
    }
    const stfId = 'STF-' + len
    return stfId
}

module.exports = idGenerator
