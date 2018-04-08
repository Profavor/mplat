import { Pipe, PipeTransform } from '@angular/core';
import {DictionaryService} from "../services/dictionary.service";

@Pipe({name: 'dictionary', pure: false
})
export class DictionaryPipe implements PipeTransform {
    apiCall;
    constructor(
        private dictionaryService: DictionaryService        
    ){
    }

    private cachedData: string = '';
    private cachedDicId = '';
    private responseData: any = null;

    transform(dicId: string, defaultMessage: string){
        if (dicId !== this.cachedDicId) {
            this.cachedData = '';
            this.cachedDicId = dicId;
            this.dictionaryService.getTranslate(dicId).subscribe(
                response => {  
                  this.responseData = response;      
                  if(!this.responseData.success){
                    this.cachedData = defaultMessage;        
                  }else{                   
                        let dictionaryLang: Array<any> = this.responseData.obj.dictionaryLang;           
                        let data = '';   
                        dictionaryLang.forEach(function(value, index, array){
                            if(value.lang === localStorage.getItem('langCode')){                      
                                data = <string>value.message; 
                            }
                        });
                        this.cachedData = data;                                                  
                  }
                  return this.cachedData;
                },
                error => {
                    this.cachedData = defaultMessage;   
                    return this.cachedData;    
            }); 
        }
  }


  check(checkData){
    if(checkData != ''){
        return true;
    }else{
        return false;
    }
  }


}