import { Component, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BalanceService } from 'src/app/shared/services/balance.service';
import { CoinsService } from 'src/app/shared/services/coins.service';
import { TransactionsService } from 'src/app/shared/services/transactions.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnChanges {
  user: any;
  balance = [
    {
      qty: "",
      symbol: "",
      current_price: null
    }
  ];
  transactions: any;
  loading = true;
  coins = []

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

  // userImage: any;
  url = `${environment.apiUrl}/users/image`;
  constructor(router: Router, private authService: AuthService,
    private transactionService: TransactionsService, private coinsService: CoinsService,
    private balanceService: BalanceService) { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

 ngOnInit(): void {
   this.user = this.authService.getUser()
    this.balanceService.getUserBalance(localStorage.getItem("user_id")!).then(res => {
      this.balance = res.data
      this.transactionService.getTransactionsUser(localStorage.getItem("user_id")!).then(res => {
        this.transactions = res.data
        this.iterator()
        this.length = res.data.length
        this.coinsService.getCoins().then(res => this.coins = res.data)
        this.loading = false
      })
    })

    this.authService.onUser.subscribe(
      (lang) => {
        const user = this.authService.getUser();
        this.user = user
        this.balanceService.getUserBalance(this.user._id).then(res => {
          this.balance = res.data
          this.transactionService.getTransactionsUser(this.user._id).then(res => {
            this.transactions = res.data
            this.coinsService.getCoins().then(res => this.coins = res.data)
            this.iterator()
            this.length = res.data.length
            this.loading = false
          })
        })
      }
    );
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
    const part = this.transactions.slice(start, end);
    this.dataSource = part;
  }

}
