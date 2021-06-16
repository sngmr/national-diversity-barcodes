import * as svgson from 'svgson';
import shuffle from 'shuffle-array';

const SVG_WIDTH = 1600;
const SVG_HEIGHT = 900;
const SVG_WHITE_COLOR_RATE = 0.25;

export function generate1(isHorizontalBorder, colorList) {
    // console.log(colorList);
    
    // root SVG element
    const root = {
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
    
    // Filter colors without white
    const colors = shuffle(colorList.filter(v => v.toUpperCase() !== '#FFFFFF'));
    
    // Calculate white color size
    const baseLength = isHorizontalBorder ? SVG_HEIGHT : SVG_WIDTH;
    const whiteColorLen = baseLength / colors.length * SVG_WHITE_COLOR_RATE;
    const eachColorLen = (baseLength - (whiteColorLen * (colors.length - 1))) / colors.length;
    
    const rectTemplate = {
        name: "rect",
        type: "element",
        value: '',
        attributes: null,
        children: [],
    };
    
    for (let i = 0; i < colors.length; i++) {
        const rect = Object.create(rectTemplate);
        if (isHorizontalBorder) {
            rect.attributes = {
                x: 0,
                y: i * eachColorLen + i * whiteColorLen,
                width: SVG_WIDTH,
                height: eachColorLen,
                fill: colors[i],
            };
        } else {
            rect.attributes = {
                x: i * eachColorLen + i * whiteColorLen,
                y: 0,
                width: eachColorLen,
                height: SVG_HEIGHT,
                fill: colors[i],
            };
        }
        root.children.push(rect);
    }
    
    // console.log(root);
    
    return svgson.stringify(root);
}

export function tidyCanvasElement(canvas, width) {
    // Modify display size based on the canvas (=svg) size
    canvas.style.width = width + 'px';
    canvas.style.height = (canvas.height * width / canvas.width) + 'px';
    canvas.style.border = "1px solid gray";
}
