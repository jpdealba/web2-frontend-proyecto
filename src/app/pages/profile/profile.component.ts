import { Component, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BalanceService } from 'src/app/shared/services/balance.service';
import { TransactionsService } from 'src/app/shared/services/transactions.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnChanges {
  user: any;
  balance: any;
  transactions: any;
  constructor(router: Router, private authService: AuthService, private transactionService: TransactionsService,
    private balanceService: BalanceService) { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

 ngOnInit(): void {
   this.user = this.authService.getUser()
    this.balanceService.getUserBalance(localStorage.getItem("user_id")!).then(res => {
      this.balance = res.data
    })
   this.transactionService.getTransactionsUser(localStorage.getItem("user_id")!).then(res => {
      this.transactions = res.data
    })
    this.authService.onUser.subscribe(
      (lang) => {
        this.user = this.authService.getUser();
        this.balanceService.getUserBalance(this.user._id).then(res => {
          this.balance = res.data
        })
        this.transactionService.getTransactionsUser(this.user._id).then(res => {
          this.transactions = res.data
        })
      }
    );
  }



}
