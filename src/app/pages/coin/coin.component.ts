import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormGroupDirective, NgForm, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BalanceService } from 'src/app/shared/services/balance.service';
import { CoinsService } from 'src/app/shared/services/coins.service';
import { SocketService } from 'src/app/shared/services/socket.service';
import { TransactionsService } from 'src/app/shared/services/transactions.service';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})

export class CoinComponent implements OnInit {
  symbol: string = "";
  coin: any = {
    symbol: ""
  };
  balance: any;
  user: any;
  coins: any;
  tradeForm: UntypedFormGroup;
  selected: any = null;
  qty: number = 0;
  qtyTo: number = 0;
  transactions: Array<any> = []

  constructor(public authService: AuthService, private activatedRoute: ActivatedRoute,
    private transactionService: TransactionsService, private socketService: SocketService,
    private coinsService: CoinsService, private balanceService: BalanceService, private formBuilder: UntypedFormBuilder) {
    this.tradeForm = this.formBuilder.group({
      user: [{},[Validators.required]],
      to: [{},[Validators.required]],
      qty: [0.00, [Validators.required, Validators.min(0.001)]],
      qtyTo: [{ value: this.qtyTo, disabled: true }, [Validators.required, Validators.min(0.0001)]],
      from: ['', [Validators.required, Validators.minLength(1)]],
    }
    )
  }

  ngOnInit(): void {
    this.user = this.authService.getUser()
    this.balanceService.getUserBalance(localStorage.getItem("user_id")!).then(res => {
      this.balance = res.data
    })
    this.activatedRoute.params.subscribe((params) => {
      this.symbol = params["symbol"]
    })
    this.coinsService.getCoin(this.symbol).then(res => {
      this.coin = res.data
      this.socketService.connect()
      this.socketService.setRoom(res.data.symbol)
    })
    this.coinsService.getCoins().then(res => this.coins = res.data)
    this.transactionService.getTransactions(this.symbol).then(res => {
      this.transactions = res.data
    }).catch(err => console.log(err))
    this.authService.onUser.subscribe(
      (lang) => {
        this.user = this.authService.getUser();
        this.balanceService.getUserBalance(this.user._id).then(res => {
          this.balance = res.data
        })
      }
    );
  }


  trade() {
    const datos = this.tradeForm.getRawValue();
    if (this.tradeForm.valid) {
      this.transactionService.postTransaction({
        user_id: datos.user._id,
        symbol_from: this.balance[this.selected].symbol,
        symbol_to: datos.to.symbol,
        qty: datos.qty
      }).then(res => {
        // this.socketService.connect()
        // this.socketService.sendTransaction({
        //   user_id: datos.user._id,
        //   symbol_from: this.balance[this.selected].symbol,
        //   symbol_to: datos.to.symbol,
        //   qty: datos.qty
        // })
        // location.reload();
      }).catch(err => alert(err))
    }
  }

  updateSelected() {
    const selectedBalance = this.balance[this.selected]
    const qtyToSpend = this.qty
    var qtyFinal = 0
    const coinToPrice = this.coin.current_price
    const found = this.coins.find((coin: any) => coin.symbol == selectedBalance.symbol);
    const coinFromPrice = found.current_price
    this.qtyTo = ((qtyToSpend * coinFromPrice) / coinToPrice)
    this.tradeForm.controls['qtyTo'].setValue(this.qtyTo);
    this.tradeForm.controls['to'].setValue(this.coin);
    this.tradeForm.controls['user'].setValue(this.user);
    this.tradeForm.controls.qty.setValidators([
      Validators.required,
      (control: AbstractControl) => (Validators.max(selectedBalance.qty), Validators.min(0.001))(control)
    ]);
    this.tradeForm.updateValueAndValidity()
  }
}
