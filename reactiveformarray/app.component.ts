import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' 
})
export class AppComponent {
  dynamicForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.dynamicForm = this.formBuilder.group({
      choice: '',
      additionalFields: this.formBuilder.array([])
    });
  }

  get additionalFields(): FormArray {
    return this.dynamicForm.get('additionalFields') as FormArray;
  }

  addAdditionalField(): void {
    this.additionalFields.push(this.formBuilder.control(''));
  }
}

/*
The as FormArray is a type assertion in TypeScript that tells the compiler to treat the value as a FormArray type. It is used in the code snippet to ensure that the returned value from this.dynamicForm.get('additionalFields') is treated as a FormArray and allows access to the methods and properties specific to FormArray.

*/