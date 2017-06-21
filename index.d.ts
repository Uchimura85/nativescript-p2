import { View } from "ui/core/view";
import { Color } from "color";

export class DrawingPad extends View {
    android: any;
    ios: any;

    /**
     * Gets/sets the drawing color of the pen.
     */
    penColor: any;
    /**
     * Gets/sets the drawing width of the pen.
     */
    penWidth: any;
    /**
     * Returns native image.
     */
    getDrawing(): Promise<any>;

    /**
     * Returns a bitmap with a transparent background *** ANDROID ONLY ***
     */
    getTransparentDrawing(): Promise<any>;

    /**
     * Returns a Scalable Vector Graphics document
     */
    getDrawingSvg(): Promise<string>;

    /**
     * Clears the drawing from the DrawingPad.
     */
    clearDrawing(): void;

    setPts(arr: any): any;
    setHrtMark(index, str): any;
    addPoint(point): any;
    update(): any;
    setGraphType(_type: number): any;
}
