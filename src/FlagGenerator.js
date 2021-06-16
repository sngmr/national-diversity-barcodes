import * as svgson from 'svgson';
import shuffle from 'shuffle-array';

const SVG_WIDTH = 1600;
const SVG_HEIGHT = 900;

// Root SVG element
const SVG_ROOT_TEMPLATE = {
    name: 'svg',
    type: 'element',
    value: '',
    attributes: {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        width: SVG_WIDTH,
        height: SVG_HEIGHT,
    },
    children: [
        {
            name: "rect",
            type: "element",
            value: '',
            attributes: {
                x: 0,
                y: 0,
                width: SVG_WIDTH,
                height: SVG_HEIGHT,
                fill: "#FFFFFF" // Background color is white
            },
            children: [],
        }
    ]
}

const SVG_RECT_TEMPLATE = {
    name: "rect",
    type: "element",
    value: '',
    attributes: null,
    children: [],
};

/**
 * Draw each color by same height and length without white
 */
export function generate1(isHorizontalBorder, colorList) {
    // Filter colors without white and shuffle colors
    const colors = shuffle(colorList.filter(v => v.toUpperCase() !== '#FFFFFF'));
    
    // Calculate white color size and each color's size
    const baseLength = isHorizontalBorder ? SVG_HEIGHT : SVG_WIDTH;
    const whiteColorLen = baseLength / colors.length * 0.25;
    const eachColorLen = (baseLength - (whiteColorLen * (colors.length - 1))) / colors.length;
    
    const root = deepCopy(SVG_ROOT_TEMPLATE);
    for (let i = 0; i < colors.length; i++) {
        const rect = deepCopy(SVG_RECT_TEMPLATE);
        rect.attributes = {
            x: isHorizontalBorder ? 0 : i * eachColorLen + i * whiteColorLen,
            y: isHorizontalBorder ? i * eachColorLen + i * whiteColorLen : 0,
            width: isHorizontalBorder ? SVG_WIDTH : eachColorLen,
            height: isHorizontalBorder ? eachColorLen : SVG_HEIGHT,
            fill: colors[i],
        };
        root.children.push(rect);
    }

    return svgson.stringify(root);
}

export function generate2(isHorizontalBorder, flagAndColorDataList) {
    // Retrieve color and filling rate on flag without white
    let colorAndAreaRateList = [];
    flagAndColorDataList.map((flagAndColorData) => {
        const colorDataList = flagAndColorData.colorData.filter(v => v.color.toUpperCase() !== '#FFFFFF');
        colorDataList.map((v) => {
            colorAndAreaRateList.push({color: v.color, area: v.area});
        });
    });
    colorAndAreaRateList = shuffle(colorAndAreaRateList);
    
    // Calculate white color length and another colors total length
    const baseLength = isHorizontalBorder ? SVG_HEIGHT : SVG_WIDTH;
    const whiteColorLen = baseLength / colorAndAreaRateList.length * 0.25;
    const colorsTotalLen = baseLength - (colorAndAreaRateList.length - 1) * whiteColorLen;
    
    // Calculate color fill rate
    const totalArea = colorAndAreaRateList.reduce((total, value) => total + value.area, 0);
    for (let i = 0; i < colorAndAreaRateList.length; i++) {
        colorAndAreaRateList[i].fillRate = colorAndAreaRateList[i].area / totalArea;
    }
    
    const root = deepCopy(SVG_ROOT_TEMPLATE);
    let colorLenTotal = 0;
    for (let i = 0; i < colorAndAreaRateList.length; i++) {
        const rect = deepCopy(SVG_RECT_TEMPLATE);
        const colorLen = Math.round(colorsTotalLen * colorAndAreaRateList[i].fillRate);
        rect.attributes = {
            x: isHorizontalBorder ? 0 : colorLenTotal + i * whiteColorLen,
            y: isHorizontalBorder ? colorLenTotal + i * whiteColorLen : 0,
            width: isHorizontalBorder ? SVG_WIDTH : colorLen,
            height: isHorizontalBorder ? colorLen : SVG_HEIGHT,
            fill: colorAndAreaRateList[i].color,
        };
        colorLenTotal += colorLen;
        root.children.push(rect);
    }
    
    return svgson.stringify(root);
}

export function tidyCanvasElement(canvas, width) {
    // Modify display size based on the canvas (=svg) size
    canvas.style.width = width + 'px';
    canvas.style.height = (canvas.height * width / canvas.width) + 'px';
    canvas.style.border = "1px solid gray";
}

function deepCopy(org) {
    return JSON.parse(JSON.stringify(org));
}
