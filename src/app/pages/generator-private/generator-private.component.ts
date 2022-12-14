import { Component, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-generator-private',
  templateUrl: './generator-private.component.html',
  styleUrls: ['./generator-private.component.scss']
})
export class GeneratorPrivateComponent implements OnInit, OnChanges{
  user: any;
  constructor(router: Router, private authService: AuthService) {}
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.user = this.authService.getUser()
    this.authService.onUser.subscribe(
      (lang) => {
        this.user = this.authService.getUser();
      }
    );
  }

}
