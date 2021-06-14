export function getImageColorData(canvas) {
    const quality = 10;
    const filterRate = 0.025 / quality;
    
    // Retrieve all pixel's color information from image
    const pixelCount = canvas.width * canvas.height;
    const allPixelColorList = getImagePixelArrayFromCanvas(canvas, pixelCount, quality);
    
    // Convert [r, g, b] to #000000 array
    const allPixelColorNameList = allPixelColorList.map((rgbList) => rgb2hex(rgbList));
    
    // Grouped and count each colors
    const countedColorDataObject = allPixelColorNameList.reduce((total, value) => {
        total[value] = (total[value] || 0) + 1;
        return total;
    }, {});
    const countedColorDataList = Object.entries(countedColorDataObject).map(([color, count]) => ({color, count}))
    
    // Sort
    const countedColorDataListSorted = countedColorDataList.sort((a, b) => {
        return b.count - a.count;
    });
    // console.log(countedColorDataListSorted);
    // console.log(pixelCount);
    
    // Filter at least N% of area that color draw
    return countedColorDataListSorted.filter(v => v.count >= pixelCount * filterRate);
}

function getImagePixelArrayFromCanvas(canvas, pixelCount, quality) {
    const ctx = canvas.getContext('2d');
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    return createPixelArray(imgData.data, pixelCount, quality);
}

function createPixelArray(pixels, pixelCount, quality) {
    const pixelArray = [];
    
    for (let i = 0, offset, r, g, b, a; i < pixelCount; i = i + quality) {
        offset = i * 4;
        r = pixels[offset + 0];
        g = pixels[offset + 1];
        b = pixels[offset + 2];
        a = pixels[offset + 3]; // Unused because flag has no opaque... I think
        
        pixelArray.push([r, g, b]);
    }
    return pixelArray;
}

function rgb2hex(rgb) {
    return "#" + rgb.map(function (value) {
        return ("0" + value.toString(16)).slice(-2);
    }).join("");
}
