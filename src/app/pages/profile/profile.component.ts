import { Component, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BalanceService } from 'src/app/shared/services/balance.service';
import { TransactionsService } from 'src/app/shared/services/transactions.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnChanges {
  user: any;
  balance: any;
  transactions: any;
  // userImage: any;
  url = `${environment.apiUrl}/users/image`;
  constructor(router: Router, private authService: AuthService, private transactionService: TransactionsService,
    private balanceService: BalanceService) { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

 ngOnInit(): void {
   this.user = this.authService.getUser()
  //  this.user && this.userImage = this.user.photo_url.includes("https://") ? this.user.photo_url : this.url + "/" + this.user._id
    this.balanceService.getUserBalance(localStorage.getItem("user_id")!).then(res => {
      this.balance = res.data
    })
   this.transactionService.getTransactionsUser(localStorage.getItem("user_id")!).then(res => {
      this.transactions = res.data
    })
    this.authService.onUser.subscribe(
      (lang) => {
        const user = this.authService.getUser();
        // this.userImage = user.photo_url.includes("https://") ? user.photo_url : this.url + "/" + user._id
        // console.log(this.userImage)
        this.user = user
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
