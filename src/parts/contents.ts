
import { MyDisplay } from "../core/myDisplay";
import { Tween } from "../core/tween";

// -----------------------------------------
//
// -----------------------------------------
export class Contents extends MyDisplay {

  private _tg:HTMLElement;
  private _tgA:Array<HTMLElement> = [];
  private _tgB:Array<HTMLElement> = [];

  constructor(opt:any) {
    super(opt)

    const textA = '大きくなるテキスト。';
    const textB = '小さくなるテキスト。小さくなるテキスト。小さくなるテキスト。小さくなるテキスト。小さくなるテキスト。小さくなるテキスト。';

    let txtA = '';
    let txtB = '';
    let arrA = Array.from(textA);
    let arrB = Array.from(textB);
    for(let i = 0; i < Math.max(arrA.length, arrB.length); i++) {
      txtA += '<span class="innerA">' + arrA[i % arrA.length] + '</span>';
      txtB += '<span class="innerB">' + arrB[i % arrB.length] + '</span>';
    }
    // console.log(txt)

    this._tg = document.querySelector('.l-text > .inner') as HTMLElement;
    this._tg.innerHTML = txtA + '<br>' + txtB;
    // this._tg.innerHTML = txtA;

    document.querySelectorAll('.innerA').forEach((val) => {
      this._tgA.push(val as HTMLElement);
    });

    document.querySelectorAll('.innerB').forEach((val) => {
      this._tgB.push(val as HTMLElement);
    });
  }






  protected _update(): void {
    super._update();

    const zoomer = document.body.clientWidth / window.innerWidth;
    const baseSizeA = 25;
    const baseSizeB = 10;

    this._tgB.forEach((val) => {
      Tween.instance.set(val, {
        fontSize:(baseSizeA * (1 / zoomer)) + 'px'
      })
    })
    this._tgA.forEach((val) => {
      Tween.instance.set(val, {
        fontSize:(baseSizeB * zoomer) + 'px'
      })
    })

  }
}