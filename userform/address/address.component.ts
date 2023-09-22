import { Component } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
})
export class AddressComponent {
  selectedCountry = 'Canada'; // Default country
  postalCode: string = '';
  postalCodeError: boolean = false;

  constructor() {}

  validatePostalCode() {
    if (this.selectedCountry === 'Canada') {
      const canadianPostalCodePattern = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;
      if (!canadianPostalCodePattern.test(this.postalCode)) {
        this.postalCodeError = true;
      } else {
        this.postalCodeError = false;
      }
    } else if (this.selectedCountry === 'USA') {
      const usZipCodePattern = /^\d{5}$/;
      if (!usZipCodePattern.test(this.postalCode)) {
        this.postalCodeError = true;
      } else {
        this.postalCodeError = false;
      }
    }
  }
}
