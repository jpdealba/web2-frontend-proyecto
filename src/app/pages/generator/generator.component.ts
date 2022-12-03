import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit, VERSION, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { toJpeg } from 'html-to-image';
import { CoinsService } from 'src/app/shared/services/coins.service';
@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {
  coins: Array<any> = []
  loading = true;

  dataSource: any;

  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent: any;

  constructor(private coinsService: CoinsService,private viewportScroller: ViewportScroller){}
  ngOnInit() {
    this.coinsService.getCoins().then(res => {
      this.length = res.data.length
      this.coins = res.data
      this.loading = false
      this.iterator()
    })
  }

  selectCoin(symbol: string) {
    this.coinsService.setSymbol(symbol)
  }

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

    setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.iterator();
  }

  private iterator() {
    const end = (this.pageIndex + 1) * this.pageSize;
    const start = this.pageIndex * this.pageSize;
    const part = this.coins.slice(start, end);
    this.dataSource = part;
  }


  Market() {
  document.getElementById("Market")!.scrollIntoView({behavior: "smooth"});
}
}

