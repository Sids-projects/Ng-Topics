import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss'],
})
export class TableFilterComponent {
  filterForm: FormGroup = new FormGroup({
    filterValue: new FormControl('AllData'),
  });

  filterHead: any = ['AllData', 'Personal', 'Proof'];

  filterData: any = [
    {
      id: 1,
      userName: 'Peter',
      age: 22,
      location: 'Chennai',
      pan: 'ETYT1234',
      aadhar: 123456789012,
    },
    {
      id: 2,
      userName: 'Zoe',
      age: 25,
      location: 'Chennai',
      pan: 'ETYT1234',
      aadhar: 123456789012,
    },
    {
      id: 3,
      userName: 'Alex',
      age: 23,
      location: 'Chennai',
      pan: 'ETYT1234',
      aadhar: 123456789012,
    },
    {
      id: 4,
      userName: 'Tom',
      age: 27,
      location: 'Chennai',
      pan: 'ETYT1234',
      aadhar: 123456789012,
    },
    {
      id: 5,
      userName: 'Henry',
      age: 24,
      location: 'Chennai',
      pan: 'ETYT1234',
      aadhar: 123456789012,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      filterValue: new FormControl('AllData'),
    });
  }

  shouldShowColumn(column: string): boolean {
    const filterValue = this.filterForm.value.filterValue;

    if (
      (column === 'id' || column === 'userName') &&
      (filterValue === 'AllData' ||
        filterValue === 'Personal' ||
        filterValue === 'Proof')
    ) {
      return true;
    } else if (
      (column === 'age' || column === 'location') &&
      (filterValue === 'AllData' || filterValue === 'Personal')
    ) {
      return true;
    } else if (
      (column === 'pan' || column === 'aadhar') &&
      (filterValue === 'AllData' || filterValue === 'Proof')
    ) {
      return true;
    } else {
      return false;
    }
  }
}
