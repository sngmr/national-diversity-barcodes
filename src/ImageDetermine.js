export function getImagePixelArrayFromCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixelCount = canvas.width * canvas.height;
    return createPixelArray(imgData.data, pixelCount, 2);
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
