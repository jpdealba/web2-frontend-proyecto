import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit, VERSION, ViewChild } from '@angular/core';
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
  constructor(private coinsService: CoinsService,private viewportScroller: ViewportScroller){}
  ngOnInit() {
    this.coinsService.getCoins().then(res => {
      this.coins = res.data
      this.loading = false
    })
  }

  selectCoin(symbol: string) {
    this.coinsService.setSymbol(symbol)
  }

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  Market() {
  document.getElementById("Market")!.scrollIntoView({behavior: "smooth"});
}
}

