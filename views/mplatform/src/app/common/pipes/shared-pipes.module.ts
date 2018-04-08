import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DictionaryPipe, ExponentialStrengthPipe} from '.';
import {DictionaryService} from "../services/dictionary.service";

@NgModule({ 
      declarations: [
        DictionaryPipe, ExponentialStrengthPipe
      ],
      providers: [
        DictionaryService
      ],
      exports: [
        DictionaryPipe, ExponentialStrengthPipe
      ]
})
export class SharedPipesModule { 
    static forRoot() {
        return {
            ngModule: SharedPipesModule,
            providers: [],
        };
     }
  

}
