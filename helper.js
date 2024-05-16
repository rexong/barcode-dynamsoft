/** Given an array of length 4, return the center of the 4 coordinates */
function getCenter(arr) {
    let sumX = 0, sumY = 0;

    for (let coord of arr) {
        sumX += coord.x;
        sumY += coord.y;
    }

    const centerX = sumX / arr.length;
    const centerY = sumY / arr.length;
    return { x: centerX, y: centerY };
}

function getEuclideanDist(coord1, coord2) {
    return Math.sqrt((coord1.x - coord2.x) ** 2 + (coord1.y - coord2.y) ** 2);
}

/**
 * Finds the SKU with the nearest center point to the given IMEI barcode.
 * 
 * @param {Object[][]} skuArr - An array of SKU barcodes, with each element containing the array of 4 coordinates of the 4 corners of the barcode.
 * @param {Object[]} imei - An object representing the coordinates of the 4 corners of the IMEI barcode.
 * @returns {Object[]} - The SKU barcode with the nearest center point to the IMEI barcode.
 */
function nearestPair(skuArr, imei) {
    let idx = -1, minDist = Number.MAX_VALUE;
    const imeiCenter = getCenter(imei);
    for (let i = 0; i < skuArr.length; ++i) {
        const dist = getEuclideanDist(getCenter(skuArr[i]), imeiCenter);
        if (dist < minDist) {
        minDist = dist;
        idx = i;
        }
    }
    return idx;
}