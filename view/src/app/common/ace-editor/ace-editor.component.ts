/**
 * Created by profa on 2017-02-07.
 */
import {Component} from '@angular/core';


@Component({
  selector: 'code-editor',
  templateUrl: 'ace-editor.component.html'
})
export class AceCmp {
  text:string = "";
  options:any = {maxLines: 1000, printMargin: false};

  onChange(code) {
    //console.log("new code", code);
  }
}
