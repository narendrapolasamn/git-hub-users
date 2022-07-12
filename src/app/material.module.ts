import { NgModule } from '@angular/core'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

const MODULES = [
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule   
]

@NgModule({
  declarations: [
    
  ],
  imports: [
    ...MODULES
  ],
  exports:[
    ...MODULES
  ]

})
export class MaterialModule { }