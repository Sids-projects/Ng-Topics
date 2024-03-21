import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
})
export class PracticeComponent {
  totalCount: number = 10005;
  vendorList: any = [
    { vendor: 'Vendor One', ratio: 1, limit: 100, value: 0 },
    { vendor: 'Vendor Two', ratio: 1, limit: 50, value: 0 },
    { vendor: 'Vendor Three', ratio: 1, limit: 20, value: 0 },
    { vendor: 'Vendor Four', ratio: 1, limit: 80, value: 0 },
    { vendor: 'Vendor Five', ratio: 1, limit: 50, value: 0 },
  ];
  totalRatioSum: number = 0;
  calculateRatio: number = 0;
  ratioArr: any = [];
  roundValue: any = [];

  ngOnInit() {
    for (let i = 0; i < this.vendorList.length; i++) {
      this.totalRatioSum = this.totalRatioSum + this.vendorList[i].ratio;
    }

    for (let i = 0; i < this.vendorList.length; i++) {
      this.calculateRatio =
        (this.vendorList[i].ratio / this.totalRatioSum) * this.totalCount;
      this.ratioArr.push(this.calculateRatio);
      this.vendorList[i].value = Math.round(this.ratioArr[i]);
    }
  }
}
