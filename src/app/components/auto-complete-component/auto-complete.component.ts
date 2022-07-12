import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'auto-complete-select',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
})
export class AutocompleteComponent {
 autoCompleteCtrl:FormControl;
 @Input() data:any;
 @Output() itemSelect = new EventEmitter<any>();
 filteredOptions:Observable<any>;
 constructor(){
  this.autoCompleteCtrl = new FormControl();
  this.filteredOptions = this.autoCompleteCtrl.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value || '')),
  );
 }
  private _filter(value: string): any {
    const filterValue = value.toLowerCase();

    const data =  this.data.filter((option:any) => option?.name.toLowerCase().includes(filterValue));
    return data;
  }
  selectChange(event:any,option:any){
    if (event.source.selected) {
        this.itemSelect.emit(option?.name);
    }
  }
  search(){
    if(this.autoCompleteCtrl.value)
    {
      this.itemSelect.emit(this.autoCompleteCtrl.value);
    }
  }
}