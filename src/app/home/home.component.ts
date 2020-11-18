import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userName = new FormControl('', [Validators.required]);
  submitted = false;
  toggleTheme = new FormControl(false);

  constructor(private _renderer: Renderer2) {}

  ngOnInit() {
    // let storedTheme = localStorage.getItem('v-lis-theme');
    // if (!storedTheme) {
    //   this.setTheme();
    // }
    // this._renderer.addClass(document.body, storedTheme);

    this.toggleTheme.valueChanges.subscribe((toggleValue) => {
      if (toggleValue === true) {
        localStorage.setItem('v-lis-theme', 'dark-theme');
        this._renderer.addClass(document.body, 'dark-theme');
        this._renderer.removeClass(document.body, 'light-theme');
      } else {
        localStorage.setItem('v-lis-theme', 'light-theme');
        this._renderer.addClass(document.body, 'light-theme');
        this._renderer.removeClass(document.body, 'dark-theme');
      }
    });
  }

  // setTheme() {
  //   this.toggleTheme.valueChanges.subscribe((toggleValue) => {
  //     if (toggleValue === true) {
  //       localStorage.setItem('v-lis-theme', 'dark-theme');
  //       this._renderer.addClass(document.body, 'dark-theme');
  //       this._renderer.removeClass(document.body, 'light-theme');
  //     } else {
  //       localStorage.setItem('v-lis-theme', 'light-theme');
  //       this._renderer.addClass(document.body, 'light-theme');
  //       this._renderer.removeClass(document.body, 'dark-theme');
  //     }
  //   });
  // }

  clear() {
    this.userName.reset();
    this.submitted = false;
  }

  submit() {
    this.submitted = true;
  }
}
