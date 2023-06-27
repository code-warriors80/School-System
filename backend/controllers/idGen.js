const idGenerator = (len) => {
    len += 1
    if (len <= 0) {
        const stfId = 'STF-00' + 1
        return stfId
    } else if (len > 0 && len <= 9) {
        const stfId = 'STF-00' + len
        return stfId
    } else if (len > 9 && len < 100) {
        const stfId = 'STF-0' + len + 1
        return stfId
    } else {
        const stfId = 'STF-' + len + 1
        return stfId
    }
    const stfId = 'STF-' + len
    return stfId
}

module.exports = idGenerator
