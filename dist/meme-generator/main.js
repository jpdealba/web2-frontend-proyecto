"use strict";
(self["webpackChunkmeme_generator"] = self["webpackChunkmeme_generator"] || []).push([["main"],{

/***/ 809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_coin_coin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/coin/coin.component */ 1604);
/* harmony import */ var _pages_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/forbidden/forbidden.component */ 1588);
/* harmony import */ var _pages_generator_private_generator_private_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/generator-private/generator-private.component */ 8092);
/* harmony import */ var _pages_generator_generator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/generator/generator.component */ 384);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ 1720);
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/profile/profile.component */ 7517);
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/signup/signup.component */ 6918);
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/guards/auth.guard */ 6608);
/* harmony import */ var _shared_guards_role_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/guards/role.guard */ 9683);
/* harmony import */ var _shared_guards_unauth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/guards/unauth.guard */ 8603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);













const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent, canActivate: [_shared_guards_unauth_guard__WEBPACK_IMPORTED_MODULE_9__.UnauthGuard] },
    { path: 'signup', component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__.SignupComponent, canActivate: [_shared_guards_unauth_guard__WEBPACK_IMPORTED_MODULE_9__.UnauthGuard] },
    { path: 'home', component: _pages_generator_generator_component__WEBPACK_IMPORTED_MODULE_3__.GeneratorComponent },
    { path: 'coin/:symbol', component: _pages_coin_coin_component__WEBPACK_IMPORTED_MODULE_0__.CoinComponent },
    { path: 'private', component: _pages_generator_private_generator_private_component__WEBPACK_IMPORTED_MODULE_2__.GeneratorPrivateComponent, canActivate: [_shared_guards_role_guard__WEBPACK_IMPORTED_MODULE_8__.RoleGuard], data: { roles: ["admin"] } },
    { path: 'profile', component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__.ProfileComponent, canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__.AuthGuard] },
    { path: 'forbidden', component: _pages_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_1__.ForbiddenComponent, canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__.AuthGuard] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(routes, { anchorScrolling: 'enabled' }), _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/header/header.component */ 6471);
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/footer/footer.component */ 616);





class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 0, consts: [[1, "example-container"], ["mode", "side"], [1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "main")(2, "mat-drawer-container", 0)(3, "mat-drawer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Drawer content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-drawer-content")(6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "app-footer");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatDrawerContent, _layout_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["main[_ngcontent-%COMP%] {\n  height: 0;\n  min-height: calc(100vh - 160px);\n}\nmain[_ngcontent-%COMP%]   mat-drawer-container[_ngcontent-%COMP%] {\n  min-height: 100%;\n}\nmat-drawer[_ngcontent-%COMP%] {\n  width: 250px;\n}\n.content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFNBQUE7RUFDQSwrQkFBQTtBQURKO0FBR0k7RUFDSSxnQkFBQTtBQURSO0FBS0E7RUFDSSxZQUFBO0FBRko7QUFLQTtFQUNJLGFBQUE7QUFGSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeTogZ29sZGVucm9kO1xuXG5tYWluIHtcbiAgICBoZWlnaHQ6IDA7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE2MHB4KTtcblxuICAgIG1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICB9XG59XG5cbm1hdC1kcmF3ZXIge1xuICAgIHdpZHRoOiAyNTBweDtcbn1cblxuLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDIwcHg7XG59Il19 */"] });


/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @abacritt/angularx-social-login */ 3218);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 4766);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 809);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/footer/footer.component */ 616);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/header/header.component */ 6471);
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/sidebar/sidebar.component */ 698);
/* harmony import */ var _modules_material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/material/material.module */ 8437);
/* harmony import */ var _pages_coin_coin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/coin/coin.component */ 1604);
/* harmony import */ var _pages_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/forbidden/forbidden.component */ 1588);
/* harmony import */ var _pages_generator_private_generator_private_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/generator-private/generator-private.component */ 8092);
/* harmony import */ var _pages_generator_generator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/generator/generator.component */ 384);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/login/login.component */ 1720);
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/profile/profile.component */ 7517);
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/signup/signup.component */ 6918);
/* harmony import */ var _shared_pipes_nl_to_br_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/pipes/nl-to-br.pipe */ 2521);
/* harmony import */ var _layout_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layout/file-upload/file-upload.component */ 6880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2560);






















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [{
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: true,
                providers: [
                    {
                        id: _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_17__.GoogleLoginProvider.PROVIDER_ID,
                        provider: new _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_17__.GoogleLoginProvider(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.googleId, { oneTapEnabled: false })
                    }
                ],
                onError: (err) => {
                    console.error("aqui", err);
                }
            },
        }], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _modules_material_material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
        _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_17__.SocialLoginModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _shared_pipes_nl_to_br_pipe__WEBPACK_IMPORTED_MODULE_14__.NlToBrPipe,
        _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__.SignupComponent,
        _pages_generator_generator_component__WEBPACK_IMPORTED_MODULE_10__.GeneratorComponent,
        _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__.ProfileComponent,
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__.LoginComponent,
        _pages_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_8__.ForbiddenComponent,
        _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent,
        _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent,
        _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__.SidebarComponent,
        _pages_generator_private_generator_private_component__WEBPACK_IMPORTED_MODULE_9__.GeneratorPrivateComponent,
        _pages_coin_coin_component__WEBPACK_IMPORTED_MODULE_7__.CoinComponent,
        _layout_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_15__.FileUploadComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _modules_material_material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
        _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_17__.SocialLoginModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule] }); })();


/***/ }),

/***/ 6880:
/*!*************************************************************!*\
  !*** ./src/app/layout/file-upload/file-upload.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploadComponent": () => (/* binding */ FileUploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_file_upload_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/file-upload.service */ 4571);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function FileUploadComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FileUploadComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.onUpload()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " send ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function FileUploadComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r1.shortLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.shortLink);
} }
function FileUploadComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class FileUploadComponent {
    // Inject service
    constructor(fileUploadService) {
        this.fileUploadService = fileUploadService;
        // Variable to store shortLink from api response
        this.shortLink = "";
        this.loading = false; // Flag variable
        this.file = null; // Variable to store file
    }
    ngOnInit() {
    }
    // On file Select
    onChange(event) {
        this.file = event.target.files[0];
        this.onUpload();
    }
    // OnClick of button Upload
    onUpload() {
        this.loading = !this.loading;
        this.fileUploadService.upload(this.file).subscribe((event) => {
            if (typeof (event) === 'object') {
                this.shortLink = event.link;
                this.loading = false;
                location.reload();
            }
        }, (error) => {
            this.loading = false;
            console.log(error);
        });
    }
}
FileUploadComponent.ɵfac = function FileUploadComponent_Factory(t) { return new (t || FileUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_file_upload_service__WEBPACK_IMPORTED_MODULE_0__.FileUploadService)); };
FileUploadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FileUploadComponent, selectors: [["app-file-upload"]], decls: 9, vars: 3, consts: [["rel", "stylesheet", "href", "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"], [1, "text-center"], ["for", "files", 1, "btn"], [1, "material-symbols-outlined"], ["id", "files", "type", "file", "accept", "image/png, image/jpeg, image/jpg", 1, "form-control", "btnform", 2, "visibility", "hidden", 3, "change"], ["class", "btn btn-success btnsend", 3, "click", 4, "ngIf"], ["class", "container text-center jumbotron", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "btn", "btn-success", "btnsend", 3, "click"], [1, "container", "text-center", "jumbotron"], [3, "href"], [1, "container"]], template: function FileUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "label", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "add_a_photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function FileUploadComponent_Template_input_change_5_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, FileUploadComponent_button_6_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, FileUploadComponent_div_7_Template, 4, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, FileUploadComponent_div_8_Template, 2, 0, "div", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.file);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.shortLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: [".btnsend[_ngcontent-%COMP%] {\n  display: none;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n}\n\ninput[_ngcontent-%COMP%]::file-selector-button {\n  font-weight: bold;\n  background: goldenrod;\n  color: black;\n  padding: 0.5em 1em;\n  padding-top: 1em;\n  border: thin solid white;\n  border-radius: 45px;\n  cursor: pointer;\n  margin-right: 50%;\n  margin-left: 25%;\n}\n\nspan[_ngcontent-%COMP%] {\n  background-color: goldenrod;\n  font-size: large;\n  padding: 6px;\n  padding-bottom: 7px;\n  padding-left: 7px;\n  border-radius: 50%;\n  color: black;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6ImZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bnNlbmR7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuaW5wdXR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxcHg7XG59XG5cbmlucHV0OjpmaWxlLXNlbGVjdG9yLWJ1dHRvbiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZDogZ29sZGVucm9kO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgcGFkZGluZy10b3A6IDFlbTtcbiAgICBib3JkZXI6IHRoaW4gc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbn0gXG5cbnNwYW57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"] });


/***/ }),

/***/ 616:
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer")(1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A9 ITESO 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  height: 40px;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n}\nfooter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: darkgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUVSIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogZGFya2dyYXk7XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 6471:
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @abacritt/angularx-social-login */ 3218);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 1026);
/* harmony import */ var src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/socket.service */ 2866);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);








function HeaderComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "LogIn");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function HeaderComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_13_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.logOut()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Log Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
class HeaderComponent {
    constructor(socialAuthService, router, authService, socketService) {
        this.socialAuthService = socialAuthService;
        this.router = router;
        this.authService = authService;
        this.socketService = socketService;
        this.user = this.authService.getUser();
        this.user_id = localStorage.getItem("user_id");
        socialAuthService.authState.subscribe(user => {
            if (user) {
                authService.postUserGoogle(user).subscribe((data) => {
                    authService.setUser({ ...data, token: user.idToken });
                    authService.setIsLoggedIn(true);
                    localStorage.setItem("method", "google");
                    // this.socketService.connect()
                    console.log("Usuario logueado", data);
                    localStorage.setItem("token", user.idToken);
                    var route = router.url == "/login" ? "/home" : router.url;
                    router.navigate([`${route}`]);
                }, (err) => console.log(err));
            }
        });
    }
    ngOnInit() {
        const token = localStorage.getItem("token");
        if (localStorage.getItem("token")) {
            if (localStorage.getItem("method") == "email") {
                this.authService.getToken(token).subscribe((data) => {
                    if (data.status == "Token Not Valid") {
                        localStorage.setItem("user_id", "");
                        this.authService.signOut();
                    }
                    else {
                        localStorage.setItem("user_id", data._id);
                        // this.socketService.connect()
                        this.authService.setUser(data);
                        this.user = data;
                        this.authService.setIsLoggedIn(true);
                    }
                }, (error) => {
                    localStorage.setItem("user_id", "");
                    this.authService.signOut();
                });
            }
            else {
                this.authService.getTokenGoogle(token).subscribe((data) => {
                    if (data.isvalid == false) {
                        localStorage.setItem("user_id", "");
                        this.authService.signOut();
                    }
                    else {
                        localStorage.setItem("user_id", data._id);
                        // this.socketService.connect()
                        this.authService.setUser(data);
                        this.user = data;
                        this.authService.setIsLoggedIn(true);
                    }
                }, (error) => {
                    localStorage.setItem("user_id", "");
                    this.authService.signOut();
                });
            }
        }
    }
    logOut() {
        this.authService.setUser({});
        localStorage.setItem("token", "");
        this.socialAuthService.signOut();
        this.authService.setIsLoggedIn(false);
        this.authService.signOut();
    }
    navigate() {
        this.router.navigate(["home"]);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_3__.SocialAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_1__.SocketService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 14, vars: 2, consts: [[1, "header__left"], [1, "logo", "dsk"], ["routerLink", "/home", 1, "dsk"], ["id", "site-logo", "src", "favicon.ico", "alt", "", "width", "32", "height", "32"], [1, "logo", "mbl"], [1, "divide"], [1, "head_right"], [4, "ngIf"], ["routerLink", "/login"], ["routerLink", "/profile"], [3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar")(1, "div", 0)(2, "div", 1)(3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Tamacoin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, HeaderComponent_div_12_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, HeaderComponent_div_13_Template, 5, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.authService.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbar], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  background-color: black;\n}\n\n.divide[_ngcontent-%COMP%] {\n  width: 85%;\n}\n\na[_ngcontent-%COMP%] {\n  margin-left: 4%;\n  text-decoration: none;\n  color: white;\n}\n\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-left: 4%;\n  font-family: \"Open Sans\", Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  background-color: goldenrod;\n  color: black;\n  border-radius: 45px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n  font-size: 18px;\n  font-weight: bold;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.mbl[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (max-width: 760px) {\n  .dsk[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mbl[_ngcontent-%COMP%] {\n    display: contents;\n  }\n  .divide[_ngcontent-%COMP%] {\n    width: 65%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQUE7RUFDRSxhQUFBO0FBR0Y7O0FBRkU7RUFDRSxrQkFBQTtBQUlKOztBQUFBO0VBQ0UsZUFBQTtFQUNBLDhGQUFBO0VBQ0UsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUdKOztBQUFBO0VBQ0UsYUFBQTtBQUdGOztBQUFBO0VBQ0U7SUFDSSxhQUFBO0VBR0o7RUFEQTtJQUNJLGlCQUFBO0VBR0o7RUFEQTtJQUNFLFVBQUE7RUFHRjtBQUNGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10b29sYmFye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLmRpdmlkZXtcbiAgd2lkdGg6IDg1JTtcbn1cbmF7XG4gIG1hcmdpbi1sZWZ0OiA0JTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubG9nbyBhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaW1ne1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxufVxuXG5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogNCU7XG4gIGZvbnQtZmFtaWx5OiAgJ09wZW4gU2FucycsIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNDVweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5tYmx7XG4gIGRpc3BsYXk6bm9uZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gIC5kc2t7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5tYmx7XG4gICAgICBkaXNwbGF5OmNvbnRlbnRzO1xuICB9XG4gIC5kaXZpZGV7XG4gICAgd2lkdGg6IDY1JTtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 698:
/*!*****************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 2, vars: 0, template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sidebar works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8437:
/*!*****************************************************!*\
  !*** ./src/app/modules/material/material.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);











class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__.MatSliderModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__.MatSliderModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule] }); })();


/***/ }),

/***/ 1604:
/*!**********************************************!*\
  !*** ./src/app/pages/coin/coin.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoinComponent": () => (/* binding */ CoinComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 1026);
/* harmony import */ var src_app_shared_services_transactions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/transactions.service */ 6111);
/* harmony import */ var src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/socket.service */ 2866);
/* harmony import */ var src_app_shared_services_coins_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/coins.service */ 2371);
/* harmony import */ var src_app_shared_services_balance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/balance.service */ 3558);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 8562);














const _c0 = function (a0, a1) { return { "positive": a0, "negative": a1 }; };
function CoinComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 20)(6, "div", 21)(7, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "h2", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 21)(14, "h3", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Low: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 21)(20, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "High: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](24, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 21)(26, "h3", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Market Cap: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](30, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 21)(32, "h3", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Circulating Supply: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](36, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r0.coin.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.coin.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](9, 10, ctx_r0.coin.current_price, "0.1-8"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](26, _c0, ctx_r0.coin.price_change_percentage_24h > 0, ctx_r0.coin.price_change_percentage_24h < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", ctx_r0.coin.price_change_percentage_24h > 0 ? "\u2191" : "\u2193", " ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](12, 13, ctx_r0.coin.price_change_percentage_24h / 100, "0.2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](18, 16, ctx_r0.coin.low_24h, "0.1-8"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](24, 19, ctx_r0.coin.high_24h, "0.1-8"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](30, 22, ctx_r0.coin.market_cap));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](36, 24, ctx_r0.coin.circulating_supply));
} }
function CoinComponent_div_5_ng_container_11_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const i_r6 = ctx_r8.index;
    const bal_r5 = ctx_r8.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", i_r6)("id", i_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-index", i_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", bal_r5.symbol.toUpperCase(), " - Balance: ", bal_r5.qty, " ");
} }
function CoinComponent_div_5_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CoinComponent_div_5_ng_container_11_option_1_Template, 2, 5, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const bal_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", bal_r5.symbol != ctx_r4.coin.symbol);
} }
function CoinComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "form", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function CoinComponent_div_5_Template_form_submit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.trade()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-form-field")(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "How Much");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CoinComponent_div_5_Template_input_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.updateSelected()); })("ngModelChange", function CoinComponent_div_5_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.qty = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field", 30)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CoinComponent_div_5_Template_select_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.selected = $event); })("change", function CoinComponent_div_5_Template_select_change_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.updateSelected()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, CoinComponent_div_5_ng_container_11_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-form-field")(14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-form-field", 30)(18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "select", 34)(21, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 36)(24, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Trade");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r1.tradeForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r1.coin.symbol.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.coin.symbol.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.tradeForm.invalid);
} }
function CoinComponent_ul_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul")(1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 41)(4, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 44)(11, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const transaction_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](transaction_r15.user_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", "/coin/" + transaction_r15.symbol_from);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", transaction_r15.symbol_from.length < 4 ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 8, transaction_r15.symbol_from) + "" : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 10, transaction_r15.symbol_from), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", transaction_r15.qty_from, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", "/coin/" + transaction_r15.symbol_to);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", transaction_r15.symbol_to.length < 4 ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 12, transaction_r15.symbol_to) + "" : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 14, transaction_r15.symbol_to), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](17, 16, transaction_r15.qty_to, "0.1-8"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](20, 19, transaction_r15.timestamp, "dd.MM.yyyy \u2192 HH:mm"));
} }
function CoinComponent_ul_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul")(1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 46)(5, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 47)(11, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const transaction_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", transaction_r17.user_id.length > 8 ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](3, 8, transaction_r17.user_id, 0, 8) + "..." : transaction_r17.user_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", "/coin/" + transaction_r17.symbol_from);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", transaction_r17.symbol_from.length < 4 ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 12, transaction_r17.symbol_from) + "" : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 14, transaction_r17.symbol_from), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", transaction_r17.qty_from, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", "/coin/" + transaction_r17.symbol_to);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", transaction_r17.symbol_to.length < 4 ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 16, transaction_r17.symbol_to) + "" : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 18, transaction_r17.symbol_to), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](16, 20, transaction_r17.qty_to, "0.1-5"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](19, 23, transaction_r17.timestamp, "dd.MM.yyyy"));
} }
class CoinComponent {
    constructor(authService, activatedRoute, router, transactionService, socketService, coinsService, balanceService, formBuilder) {
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.transactionService = transactionService;
        this.socketService = socketService;
        this.coinsService = coinsService;
        this.balanceService = balanceService;
        this.formBuilder = formBuilder;
        this.symbol = "";
        this.coin = {
            symbol: ""
        };
        this.selected = null;
        this.qty = 0;
        this.qtyTo = 0;
        this.transactions = [];
        this.tradeForm = this.formBuilder.group({
            user: [{}, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            to: [{}, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            qty: [0.00, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0.001)]],
            qtyTo: [{ value: this.qtyTo, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0.0001)]],
            from: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(1)]],
        });
        this._subscription = socketService.addTransaction.subscribe((data) => {
            console.log(data);
            this.transactions.push(data);
        });
    }
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
        this.user = this.authService.getUser();
        this.balanceService.getUserBalance(localStorage.getItem("user_id")).then(res => {
            this.balance = res.data;
        });
        this.activatedRoute.params.subscribe((params) => {
            this.symbol = params["symbol"];
        });
        this.coinsService.getCoin(this.symbol).then(res => {
            this.coin = res.data;
            this.socketService.connect();
            this.socketService.setRoom(res.data.symbol);
        });
        this.coinsService.getCoins().then(res => this.coins = res.data);
        this.transactionService.getTransactions(this.symbol).then(res => {
            this.transactions = res.data;
        }).catch(err => console.log(err));
        this.authService.onUser.subscribe((lang) => {
            this.user = this.authService.getUser();
            this.balanceService.getUserBalance(this.user._id).then(res => {
                this.balance = res.data;
            });
        });
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
                this.socketService.sendTransaction({
                    user_id: datos.user._id,
                    symbol_from: this.balance[this.selected].symbol,
                    symbol_to: datos.to.symbol,
                    qty_from: datos.qty,
                    qty_to: this.qtyTo,
                });
                location.reload();
            }).catch(err => alert(err));
        }
    }
    updateSelected() {
        const selectedBalance = this.balance[this.selected];
        console.log(typeof (selectedBalance.qty));
        this.tradeForm.controls.qty.setValidators([
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0.001),
            (control) => (_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(selectedBalance.qty))(control)
        ]);
        const qtyToSpend = this.qty;
        const coinToPrice = this.coin.current_price;
        const found = this.coins.find((coin) => coin.symbol == selectedBalance.symbol);
        const coinFromPrice = found.current_price;
        this.qtyTo = ((qtyToSpend * coinFromPrice) / coinToPrice);
        this.tradeForm.controls['qtyTo'].setValue(this.qtyTo);
        this.tradeForm.controls['to'].setValue(this.coin);
        this.tradeForm.controls['user'].setValue(this.user);
        this.tradeForm.updateValueAndValidity();
    }
}
CoinComponent.ɵfac = function CoinComponent_Factory(t) { return new (t || CoinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_transactions_service__WEBPACK_IMPORTED_MODULE_1__.TransactionsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_2__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_coins_service__WEBPACK_IMPORTED_MODULE_3__.CoinsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_balance_service__WEBPACK_IMPORTED_MODULE_4__.BalanceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder)); };
CoinComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CoinComponent, selectors: [["app-coin"]], decls: 38, vars: 4, consts: [["class", "banner", 4, "ngIf"], [2, "display", "flex", "flex-direction", "column", "align-items", "center"], [2, "color", "goldenrod"], [4, "ngIf"], [2, "color", "transparent"], [1, "desktop", 2, "margin", "auto", "width", "80%"], [1, "titles"], [1, "title", 2, "width", "18%", "text-align", "center"], [1, "title", 2, "width", "10%", "text-align", "right"], [1, "title", 2, "width", "20%", "text-align", "center"], [1, "title", 2, "width", "10%", "text-align", "left"], [4, "ngFor", "ngForOf"], [1, "mobile", 2, "width", "100%"], [1, "title", "test", 2, "width", "30%", "text-align", "left", "word-wrap", "break-word"], [1, "title", 2, "width", "20%", "text-align", "left", "word-wrap", "break-word"], [1, "title", 2, "width", "30%", "text-align", "center", "word-wrap", "break-word"], [1, "banner"], [1, "title", 2, "display", "flex", "margin-bottom", "3%"], [2, "text-align", "center", "width", "min-content", "margin-right", "5%", "font-weight", "600"], ["id", "image-logo", "alt", "", "width", "100%", "height", "auto", 3, "src"], [1, "data"], [2, "display", "flex"], [2, "margin-right", "10px"], [3, "ngClass"], [2, "margin-right", "1px", "font-weight", "500", "color", "red"], [2, "margin-left", "1px", "font-weight", "500", "word-wrap", "break-word"], [2, "font-weight", "500", "color", "green"], [2, "margin-right", "10px", "font-weight", "500", "color", "goldenrod"], [3, "formGroup", "submit"], ["id", "qty", "matInput", "", "type", "number", "formControlName", "qty", "autocomplete", "off", 3, "ngModel", "change", "ngModelChange"], ["appearance", "fill"], ["matNativeControl", "", "name", "from", "formControlName", "from", "id", "coin", 3, "ngModel", "ngModelChange", "change"], ["value", "-1", "selected", ""], ["matInput", "", "type", "number", "formControlName", "qtyTo", 3, "disabled"], ["matNativeControl", "", "disabled", "true"], [3, "value"], [2, "align-items", "center", "display", "flex", "flex-direction", "column"], ["mat-flat-button", "", "color", "success", "id", "swap", 3, "disabled"], [3, "value", "id", 4, "ngIf"], [3, "value", "id"], [2, "width", "18%", "text-align", "left", "word-wrap", "break-word"], [2, "width", "10%", "text-align", "right", "font-weight", "bold", "word-wrap", "break-word"], [3, "routerLink"], [2, "width", "20%", "text-align", "center", "word-wrap", "break-word"], [2, "width", "10%", "text-align", "left", "font-weight", "bold", "word-wrap", "break-word"], [1, "test", 2, "width", "30%", "text-align", "left", "word-wrap", "break-word", "word-wrap", "break-word"], [2, "width", "20%", "text-align", "left", "display", "flex", "flex-direction", "column", "word-wrap", "break-word"], [2, "width", "20%", "text-align", "left", "word-wrap", "break-word"], [2, "width", "30%", "text-align", "right", "word-wrap", "break-word"]], template: function CoinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CoinComponent_div_0_Template, 37, 29, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div")(2, "div", 1)(3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Trade");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, CoinComponent_div_5_Template, 26, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Trade");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5)(9, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ul", 6)(12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Wallet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " From ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " Quantity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " Quantity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, CoinComponent_ul_24_Template, 21, 22, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 12)(26, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "ul", 6)(29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, " Wallet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, " From ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, " To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, " Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, CoinComponent_ul_37_Template, 20, 26, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.coin);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.transactions);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.transactions);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.PercentPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: [".grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n}\n\n.grid-item[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  text-align: center;\n}\n\n.mat-raised-button.mat-success[_ngcontent-%COMP%], .mat-flat-button.mat-success[_ngcontent-%COMP%], .mat-fab.mat-success[_ngcontent-%COMP%], .mat-mini-fab.mat-success[_ngcontent-%COMP%] {\n  color: #f0fff3;\n  background-color: goldenrod;\n}\n\n.mat-mini-fab.mat-disabled[_ngcontent-%COMP%] {\n  color: #f0fff3;\n  background-color: lightgray;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: 700;\n  margin-bottom: 40px;\n  text-align: center;\n}\n\nul[_ngcontent-%COMP%] {\n  display: flex;\n}\n\nhr[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.balanz[_ngcontent-%COMP%] {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  width: 100%;\n  font-weight: bold;\n  text-align: right;\n}\n\n.balanz[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-align: right;\n  width: 50%;\n  margin-left: 25%;\n}\n\n.balanz[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.banner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 5%;\n  margin-top: 5%;\n}\n\n.banner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.banner[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  padding-left: 30%;\n  justify-content: center;\n}\n\n.positive[_ngcontent-%COMP%] {\n  color: green;\n  font-weight: 700;\n}\n\n.negative[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: 700;\n}\n\n.desktop[_ngcontent-%COMP%] {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  display: contents;\n  text-decoration: none;\n}\n\n.mobile[_ngcontent-%COMP%] {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  display: none;\n  text-align: right;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: goldenrod;\n}\n\n.titles[_ngcontent-%COMP%] {\n  background-color: goldenrod;\n  padding: 10px 5;\n  border-radius: 20px;\n  font-weight: bold;\n}\n\n.title[_ngcontent-%COMP%] {\n  padding: 5px 0px;\n}\n\n@media (max-width: 765px) {\n  .left_section[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    margin-bottom: 20%;\n  }\n  .balanz[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n  }\n  .balanz[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0%;\n    font-size: 15px;\n  }\n  .balanz[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n  .banner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-bottom: 5%;\n    margin-top: 5%;\n    width: 100%;\n  }\n  .banner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .banner[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n    padding-left: 0%;\n    width: 100%;\n  }\n  .test[_ngcontent-%COMP%] {\n    margin-left: -20px;\n  }\n  .section[_ngcontent-%COMP%] {\n    height: auto;\n    flex-direction: column;\n  }\n  .desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile[_ngcontent-%COMP%] {\n    display: contents;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBRUEscUNBQUE7QUFBRjs7QUFJQTtFQUNFLDBDQUFBO0VBQ0Esb0NBQUE7RUFHQSxrQkFBQTtBQUhGOztBQU1BOzs7O0VBSUUsY0FBQTtFQUNBLDJCQUFBO0FBSEY7O0FBS0E7RUFDRSxjQUFBO0VBQ0EsMkJBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxtSkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUZGOztBQU1BO0VBQ0UsYUFBQTtBQUhGOztBQU1BO0VBQ0UsVUFBQTtBQUhGOztBQU1BO0VBQ0UsbUpBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUhGOztBQUtFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBTUU7RUFDRSxhQUFBO0FBSko7O0FBU0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFORjs7QUFPRTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUxOOztBQU9FO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFMTjs7QUFTQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQU5GOztBQWlCQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQWRGOztBQXNCQTtFQUNFLG1KQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQW5CRjs7QUFzQkE7RUFDRSxtSkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQW5CRjs7QUFzQkE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBbkJGOztBQXNCQTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFuQkY7O0FBdUJBO0VBQ0UsZ0JBQUE7QUFwQkY7O0FBdUJBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VBcEJGO0VBdUJBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUFyQkY7RUF1QkU7SUFDRSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7RUFyQko7RUF3QkU7SUFDRSxVQUFBO0VBdEJKO0VBNkJBO0lBQ0Usc0JBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7SUFDQSxXQUFBO0VBM0JGO0VBNEJFO0lBQ0UsV0FBQTtFQTFCSjtFQTRCRTtJQUNFLGdCQUFBO0lBQ0EsV0FBQTtFQTFCSjtFQThCQTtJQUNFLGtCQUFBO0VBNUJGO0VBK0JBO0lBQ0UsWUFBQTtJQUNBLHNCQUFBO0VBN0JGO0VBZ0NBO0lBQ0UsYUFBQTtFQTlCRjtFQWlDQTtJQUNFLGlCQUFBO0VBL0JGO0FBQ0YiLCJmaWxlIjoiY29pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIC8vIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XG4gIC8vIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5ncmlkLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgLy8gcGFkZGluZzogMjBweDtcbiAgLy8gZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtc3VjY2Vzcyxcbi5tYXQtZmxhdC1idXR0b24ubWF0LXN1Y2Nlc3MsXG4ubWF0LWZhYi5tYXQtc3VjY2Vzcyxcbi5tYXQtbWluaS1mYWIubWF0LXN1Y2Nlc3Mge1xuICBjb2xvcjogI2YwZmZmMztcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xufVxuLm1hdC1taW5pLWZhYi5tYXQtZGlzYWJsZWQge1xuICBjb2xvcjogI2YwZmZmMztcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxudWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5ociB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5iYWxhbnoge1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgb2wge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIH1cblxuICBsaSB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxufVxuXG5cbi5iYW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIC50aXRsZSB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuZGF0YSB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBwYWRkaW5nLWxlZnQ6IDMwJTtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5cbi5wb3NpdGl2ZSB7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgLy8gYm9yZGVyLXJhZGl1czogMjAlO1xuICAvLyBjb2xvcjogd2hpdGU7XG4gIC8vIHBhZGRpbmc6IDMlIDUlO1xuICAvLyBwYWRkaW5nLXJpZ2h0OiA2JTtcbiAgLy8gcGFkZGluZy1sZWZ0OiA1JTtcbiAgLy8gcGFkZGluZy1yaWdodDogNSU7XG4gIC8vIHBhZGRpbmctdG9wOiAzJTtcbiAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmVnYXRpdmUge1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogNzAwO1xuICAvLyBib3JkZXItcmFkaXVzOiAyMCU7XG4gIC8vIGNvbG9yOiB3aGl0ZTtcbiAgLy8gcGFkZGluZzogMyUgNSU7XG4gIC8vIHBhZGRpbmctcmlnaHQ6IDYlO1xuICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kZXNrdG9wIHtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBjb250ZW50cztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubW9iaWxlIHtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBub25lO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGdvbGRlbnJvZDtcbn1cblxuLnRpdGxlcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcbiAgcGFkZGluZzogMTBweCA1O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcblxufVxuXG4udGl0bGUge1xuICBwYWRkaW5nOiA1cHggMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY1cHgpIHtcbiAgLmxlZnRfc2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDIwJTtcbiAgfVxuXG4gIC5iYWxhbnoge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcblxuICAgIG9sIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDAlO1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cblxuICAgIGxpIHtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxuXG5cblxuICB9XG5cbiAgLmJhbm5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAudGl0bGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5kYXRhIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICAudGVzdCB7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICB9XG5cbiAgLnNlY3Rpb24ge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLmRlc2t0b3Age1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubW9iaWxlIHtcbiAgICBkaXNwbGF5OiBjb250ZW50cztcbiAgfVxuXG5cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 1588:
/*!********************************************************!*\
  !*** ./src/app/pages/forbidden/forbidden.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForbiddenComponent": () => (/* binding */ ForbiddenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ForbiddenComponent {
    constructor() { }
    ngOnInit() {
    }
}
ForbiddenComponent.ɵfac = function ForbiddenComponent_Factory(t) { return new (t || ForbiddenComponent)(); };
ForbiddenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForbiddenComponent, selectors: [["app-forbidden"]], decls: 5, vars: 0, consts: [[1, "banner_image"], ["src", "../assets/404.png", "alt", ""]], template: function ForbiddenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Forbidden Access");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " You need to have an Administrator role to access this page\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".banner_image[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 100%;\n  text-align: center;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: 700;\n  margin-bottom: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmJpZGRlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDRTtFQUNFLFVBQUE7QUFFSjs7QUFDRTtFQUNFLGVBQUE7RUFDQSxtSkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFFSiIsImZpbGUiOiJmb3JiaWRkZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVyX2ltYWdle1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgaW1ne1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cblxuICBoMXtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC1mYW1pbHk6ICBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIH0iXX0= */"] });


/***/ }),

/***/ 8092:
/*!************************************************************************!*\
  !*** ./src/app/pages/generator-private/generator-private.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneratorPrivateComponent": () => (/* binding */ GeneratorPrivateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 1026);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





function GeneratorPrivateComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 9);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.user.photo_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function GeneratorPrivateComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.user.username, "");
} }
function GeneratorPrivateComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.user.email);
} }
function GeneratorPrivateComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Wallet:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GeneratorPrivateComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.user._id);
} }
class GeneratorPrivateComponent {
    constructor(router, authService) {
        this.authService = authService;
    }
    ngOnChanges(changes) {
        throw new Error('Method not implemented.');
    }
    ngOnInit() {
        this.user = this.authService.getUser();
        this.authService.onUser.subscribe((lang) => {
            this.user = this.authService.getUser();
        });
    }
}
GeneratorPrivateComponent.ɵfac = function GeneratorPrivateComponent_Factory(t) { return new (t || GeneratorPrivateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
GeneratorPrivateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GeneratorPrivateComponent, selectors: [["app-generator-private"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 12, vars: 5, consts: [[1, "section"], [1, "left_section"], ["routerLink", "index.html"], ["alt", "", 3, "src", 4, "ngIf"], ["style", "font-weight:bold ;", 4, "ngIf"], [4, "ngIf"], ["style", "font-size:15px ;", 4, "ngIf"], [1, "banner_image"], ["src", "../assets/Tamacoin6.png", "alt", ""], ["alt", "", 3, "src"], [2, "font-weight", "bold"], [2, "font-size", "15px"]], template: function GeneratorPrivateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "This is an only admin section. Keep this info private pls.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0)(3, "div", 1)(4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, GeneratorPrivateComponent_img_5_Template, 1, 1, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, GeneratorPrivateComponent_p_6_Template, 2, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, GeneratorPrivateComponent_p_7_Template, 2, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, GeneratorPrivateComponent_p_8_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, GeneratorPrivateComponent_p_9_Template, 2, 1, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: [".section[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80vh;\n  display: flex;\n}\n\n.left_section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  margin: auto;\n  width: 40%;\n  height: 100%;\n  border-right: thin solid rgba(0, 0, 0, 0.178);\n}\n\n.left_section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 50%;\n  width: 119px;\n  height: 119px;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.left_section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 25px;\n  margin-top: 25px;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.banner_image[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  width: 60%;\n}\n\n.banner_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n  height: auto;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: red;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: 700;\n  margin-bottom: 30px;\n  margin-top: 20px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRvci1wcml2YXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQVFBLDZDQUFBO0FBTko7O0FBREk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNKLGFBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBR1I7O0FBQUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtSkFBQTtBQUVSOztBQUlBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBREo7O0FBRUk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQUFSOztBQUtBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxtSkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRkoiLCJmaWxlIjoiZ2VuZXJhdG9yLXByaXZhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgZGlzcGxheTpmbGV4XG59XG5cbi5sZWZ0X3NlY3Rpb257XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogNDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGltZ3tcbiAgICAgICAgbWFyZ2luLXRvcDogNTAlO1xuICAgICAgICB3aWR0aDogMTE5cHg7XG4gICAgaGVpZ2h0OiAxMTlweDtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICAgYm9yZGVyLXJpZ2h0OiB0aGluIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNzgpO1xuICAgIHB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICB9XG59XG5cblxuXG4uYmFubmVyX2ltYWdle1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBtYXJnaW46YXV0bztcbiAgICB3aWR0aDogNjAlO1xuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgaGVpZ2h0OmF1dG87XG4gICAgfVxufVxuXG5cbmgxe1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBjb2xvcjpyZWQ7XG4gICAgZm9udC1mYW1pbHk6ICBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuIl19 */"] });


/***/ }),

/***/ 384:
/*!********************************************************!*\
  !*** ./src/app/pages/generator/generator.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneratorComponent": () => (/* binding */ GeneratorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_coins_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/coins.service */ 2371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




const _c0 = function (a0, a1) { return { "positive": a0, "negative": a1 }; };
function GeneratorComponent_ul_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 22)(4, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 25)(7, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 26)(10, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 28)(26, "a", 29)(27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Trade");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const coin_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", coin_r2.market_cap_rank, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/coin/" + coin_r2.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", coin_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/coin/" + coin_r2.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", coin_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/coin/" + coin_r2.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 13, coin_r2.symbol), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 15, coin_r2.current_price), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 17, coin_r2.price_change_24h), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](24, _c0, coin_r2.price_change_percentage_24h > 0, coin_r2.price_change_percentage_24h < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](21, 19, coin_r2.price_change_percentage_24h / 100, "0.2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 22, coin_r2.market_cap), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/coin/" + coin_r2.symbol);
} }
function GeneratorComponent_ul_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 20)(1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 31)(4, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 32)(7, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 35)(17, "a", 29)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Trade");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const coin_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", coin_r4.market_cap_rank, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/coin/" + coin_r4.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", coin_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/coin/" + coin_r4.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 9, coin_r4.symbol), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 11, coin_r4.current_price), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](16, _c0, coin_r4.price_change_percentage_24h > 0, coin_r4.price_change_percentage_24h < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](15, 13, coin_r4.price_change_percentage_24h / 100, "0.2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/coin/" + coin_r4.symbol);
} }
class GeneratorComponent {
    constructor(coinsService, viewportScroller) {
        this.coinsService = coinsService;
        this.viewportScroller = viewportScroller;
        this.coins = [];
    }
    ngOnInit() {
        this.coinsService.getCoins().then(res => {
            this.coins = res.data;
        });
    }
    selectCoin(symbol) {
        this.coinsService.setSymbol(symbol);
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    Market() {
        document.getElementById("Market").scrollIntoView({ behavior: "smooth" });
    }
}
GeneratorComponent.ɵfac = function GeneratorComponent_Factory(t) { return new (t || GeneratorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_coins_service__WEBPACK_IMPORTED_MODULE_0__.CoinsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.ViewportScroller)); };
GeneratorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GeneratorComponent, selectors: [["app-generator"]], decls: 44, vars: 2, consts: [[1, "banner"], [1, "banner_content"], [1, "btn-action", 3, "click"], [1, "banner_image"], ["src", "../assets/Tamacoin2.png", "alt", ""], [1, "home"], ["id", "Market", 2, "visibility", "hidden"], [2, "color", "goldenrod", "margin-bottom", "150px"], [1, "desktop"], [1, "title", 2, "width", "3.666%", "text-align", "left"], [1, "title", 2, "width", "16%", "text-align", "left"], [1, "title", 2, "width", "13.666%", "text-align", "left"], [1, "title", 2, "width", "13%", "text-align", "left"], [1, "title", 2, "width", "16.666%", "text-align", "left"], ["style", "border-bottom: 1px solid black;", 4, "ngFor", "ngForOf"], [1, "mobile"], [1, "title", "test", 2, "width", "10%", "text-align", "left"], [1, "title", 2, "width", "25%", "text-align", "left"], [1, "title", 2, "width", "33%", "text-align", "left"], [1, "title", 2, "width", "30%", "text-align", "left"], [2, "border-bottom", "1px solid black"], [2, "width", "3%", "text-align", "left", "font-weight", "bold"], [2, "width", "5%", "text-align", "center", "font-weight", "bold"], [3, "routerLink"], [3, "src"], [2, "width", "16.666%", "text-align", "left", "font-weight", "bold"], [2, "width", "16.666%", "text-align", "left"], [2, "width", "16.666%", "text-align", "left", "font-weight", "bold", 3, "ngClass"], [1, "trd", 2, "width", "16.666%", "text-align", "right", "margin-bottom", "15px"], [1, "btn-action", 3, "routerLink"], [1, "test", 2, "width", "10%", "text-align", "left", "font-weight", "bold"], [2, "width", "13%", "text-align", "center", "font-weight", "bold"], [2, "width", "25%", "text-align", "left", "font-weight", "bold"], [2, "width", "47%", "text-align", "left"], [2, "width", "30%", "text-align", "left", "font-weight", "bold", 3, "ngClass"], [1, "trd", 2, "width", "30%", "text-align", "right", "margin-bottom", "15px"]], template: function GeneratorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Learn, buy & sell crypto easily");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Tamacoin is the easiest place to buy and sell cryptocurrency. Sign up and get started today.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GeneratorComponent_Template_a_click_6_listener() { return ctx.Market(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Start trading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5)(12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Market");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8)(17, "ul")(18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " # ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Symbol ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Last Price ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " 24h + / -");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " 24h % ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Market Cap ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, GeneratorComponent_ul_32_Template, 29, 27, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 15)(34, "ul")(35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " # ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Last Price ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " 24h % ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, GeneratorComponent_ul_43_Template, 20, 19, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.coins);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.coins);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_2__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.PercentPipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe], styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 64px;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: 700;\n  margin-bottom: 40px;\n  align-items: center;\n  margin-top: 20px;\n  line-height: normal;\n}\n\n.home[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.banner_content[_ngcontent-%COMP%] {\n  text-align: center;\n  min-height: auto;\n}\n\n.banner_content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 65px;\n  font-size: 20px;\n  letter-spacing: -0.2px;\n  margin-bottom: 40px;\n}\n\n.banner_image[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 50px;\n}\n\n.banner[_ngcontent-%COMP%] {\n  padding: 50px 0px;\n}\n\n.btn-action[_ngcontent-%COMP%] {\n  font-family: Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  background-color: goldenrod;\n  color: white;\n  border-radius: 90px;\n  padding: 15px;\n  font-size: 18px;\n  text-decoration: none;\n  cursor: pointer;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: auto;\n  height: 60vh;\n}\n\nul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  vertical-align: middle;\n  color: black;\n  display: flex;\n}\n\nul[_ngcontent-%COMP%]   .positive[_ngcontent-%COMP%] {\n  color: green;\n}\n\nul[_ngcontent-%COMP%]   .negative[_ngcontent-%COMP%] {\n  color: red;\n}\n\nul[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}\n\n.positive[_ngcontent-%COMP%] {\n  color: rgb(64, 201, 64);\n}\n\n.negative[_ngcontent-%COMP%] {\n  color: red;\n}\n\ndiv[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  background-color: goldenrod;\n  border-radius: 20px;\n  color: white;\n}\n\n.trd[_ngcontent-%COMP%]    > .btn-action[_ngcontent-%COMP%] {\n  font-family: Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  background-color: goldenrod;\n  color: white;\n  border-radius: 90px;\n  padding: 5px 10px;\n  font-size: 15px;\n  text-decoration: none;\n}\n\n.desktop[_ngcontent-%COMP%] {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  display: contents;\n  text-decoration: none;\n}\n\n.mobile[_ngcontent-%COMP%] {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  display: none;\n}\n\n@media (max-width: 760px) {\n  .desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile[_ngcontent-%COMP%] {\n    display: contents;\n  }\n  .test[_ngcontent-%COMP%] {\n    margin-left: -30px;\n  }\n}\n\n@media (max-width: 321px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 35px;\n    margin-top: 0px;\n  }\n  .home[_ngcontent-%COMP%] {\n    margin-top: 0%;\n  }\n  .banner[_ngcontent-%COMP%] {\n    padding: 20px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGVBQUE7RUFDQSxtSkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0FBREo7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBR0k7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFEUjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFLQTtFQUNJLGlCQUFBO0FBRko7O0FBS0E7RUFDSSx5RkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFGSjs7QUFLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRko7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRko7O0FBR0k7RUFDSSxZQUFBO0FBRFI7O0FBSUk7RUFDSSxVQUFBO0FBRlI7O0FBSUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUZSOztBQU1BO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FBSEo7O0FBT0E7RUFDSSx1QkFBQTtBQUpKOztBQU9BO0VBQ0ksVUFBQTtBQUpKOztBQU9BO0VBQ0ksMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFKSjs7QUFPQTtFQUNRLHlGQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUpSOztBQU9BO0VBQ0ksbUpBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBSko7O0FBT0U7RUFDRSxtSkFBQTtFQUNBLGFBQUE7QUFKSjs7QUFPQTtFQUNJO0lBQ0ksYUFBQTtFQUpOO0VBTUU7SUFDSSxpQkFBQTtFQUpOO0VBTUU7SUFDSSxrQkFBQTtFQUpOO0FBQ0Y7O0FBU0E7RUFDSTtJQUNJLGVBQUE7SUFDQSxlQUFBO0VBUE47RUFVRTtJQUNJLGNBQUE7RUFSTjtFQVdFO0lBQ0ksaUJBQUE7RUFUTjtBQUNGIiwiZmlsZSI6ImdlbmVyYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5oMXtcbiAgICBmb250LXNpemU6IDY0cHg7XG4gICAgZm9udC1mYW1pbHk6ICBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi5ob21le1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4uYmFubmVyX2NvbnRlbnR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gICAgcHtcbiAgICAgICAgcGFkZGluZzogMCA2NXB4O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgfVxufVxuXG4uYmFubmVyX2ltYWdle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uYmFubmVye1xuICAgIHBhZGRpbmc6IDUwcHggMHB4O1xufVxuXG4uYnRuLWFjdGlvbntcbiAgICBmb250LWZhbWlseTogIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA5MHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmltZ3tcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDYwdmg7XG59XG5cbnVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLnBvc2l0aXZlIHtcbiAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgIH1cbiAgICBcbiAgICAubmVnYXRpdmUge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgfVxufVxuXG5he1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjpibGFjaztcblxufVxuXG4ucG9zaXRpdmUge1xuICAgIGNvbG9yOiByZ2IoNjQsIDIwMSwgNjQpO1xufVxuXG4ubmVnYXRpdmUge1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbmRpdiA+IGJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi50cmQgPiAuYnRuLWFjdGlvbntcbiAgICAgICAgZm9udC1mYW1pbHk6ICBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTBweDtcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZGVza3RvcHtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgZGlzcGxheTogY29udGVudHM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIFxuICAubW9iaWxle1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBkaXNwbGF5Om5vbmU7XG4gIH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gICAgLmRlc2t0b3B7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5tb2JpbGV7XG4gICAgICAgIGRpc3BsYXk6Y29udGVudHM7XG4gICAgfVxuICAgIC50ZXN0e1xuICAgICAgICBtYXJnaW4tbGVmdDogLTMwcHg7XG4gICAgfVxuICAgIFxuXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzMjFweCkge1xuICAgIGgxe1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICB9XG5cbiAgICAuaG9tZXtcbiAgICAgICAgbWFyZ2luLXRvcDogMCU7XG4gICAgfVxuXG4gICAgLmJhbm5lcntcbiAgICAgICAgcGFkZGluZzogMjBweCAwcHg7XG4gICAgfVxuXG59XG4iXX0= */"] });


/***/ }),

/***/ 1720:
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 4766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 1026);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @abacritt/angularx-social-login */ 3218);










class LoginComponent {
    constructor(router, http, authService, formBuilder) {
        this.router = router;
        this.http = http;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.logInForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]],
        });
    }
    ngOnInit() {
    }
    getUser(email, password) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/login`;
        return this.http.post(url, {
            email: email,
            password: password
        });
    }
    logUsuario() {
        const datos = this.logInForm.getRawValue();
        if (this.logInForm.valid) {
            this.getUser(datos.email, datos.password).subscribe((data) => {
                if (data.token) {
                    this.authService.setUser(data);
                    this.authService.setIsLoggedIn(true);
                    localStorage.setItem("method", "email");
                    localStorage.setItem("token", data.token);
                    this.router.navigate(["/"]);
                }
            }, (err) => console.log(err));
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 31, vars: 2, consts: [[1, "section"], [1, "banner_image"], ["src", "../assets/login10.png", "alt", ""], [1, "div-login"], [3, "formGroup", "submit"], ["matInput", "", "id", "email", "type", "email", "formControlName", "email"], ["email", ""], ["matInput", "", "id", "password", "type", "password", "formControlName", "password"], ["password", ""], [1, "botones"], ["id", "trigger", 1, "login", 3, "disabled"], ["trigger", ""], ["type", "button", 1, "cancel"], ["type", "standard", "size", "medium", 2, "margin-bottom", "15px"], ["routerLink", "/signup"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Welcome back! Log In now to start trading");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div")(9, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_9_listener() { return ctx.logUsuario(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-form-field")(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-form-field")(16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 9)(21, "button", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "asl-google-signin-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Create a new account \u2192 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.logInForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.logInForm.invalid);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_8__.GoogleSigninButtonDirective], styles: [".section[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  min-height: 80%;\n  position: fixed;\n  flex-direction: row;\n}\n\n.banner_image[_ngcontent-%COMP%] {\n  width: 50%;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  height: 75vh;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.div-login[_ngcontent-%COMP%] {\n  display: flex;\n  width: 50%;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 10px;\n  margin-bottom: 40px;\n}\n\n.botones[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.login[_ngcontent-%COMP%] {\n  font-family: Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  background-color: goldenrod;\n  color: white;\n  border-radius: 45px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 12px;\n  padding-right: 12px;\n  font-size: 18px;\n  font-weight: 400;\n  cursor: pointer;\n  text-decoration: none;\n  border-color: white;\n  border-width: 0ch;\n}\n\n.cancel[_ngcontent-%COMP%] {\n  font-family: Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  background-color: rgb(187, 58, 58);\n  color: white;\n  border-radius: 45px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 12px;\n  padding-right: 12px;\n  font-size: 18px;\n  font-weight: 400;\n  cursor: pointer;\n  border-width: 0ch;\n  border-color: white;\n  text-decoration: none;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: 700;\n  margin-bottom: 40px;\n}\n\n@media (max-width: 765px) {\n  .banner_image[_ngcontent-%COMP%] {\n    width: 90%;\n    height: 30vh;\n  }\n  .div-login[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .section[_ngcontent-%COMP%] {\n    text-align: center;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-left: -15px;\n  }\n  img[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n  button[_ngcontent-%COMP%] {\n    margin: 10px;\n    margin-bottom: 10px;\n  }\n}\n\n@media (max-width: 380px) {\n  .banner_image[_ngcontent-%COMP%] {\n    width: 90%;\n    height: 25vh;\n  }\n  .div-login[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  img[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n  p[_ngcontent-%COMP%] {\n    font-size: 10px;\n    margin: -10px;\n  }\n  .section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-bottom: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUVBLG1CQUFBO0FBQUY7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0FBRUY7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQyx1QkFBQTtBQUNGOztBQUVBO0VBQ0UseUZBQUE7RUFDRSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0UseUZBQUE7RUFDRSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFFQSxxQkFBQTtBQUFKOztBQUdBO0VBQ0UsZUFBQTtFQUNBLG1KQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsWUFBQTtFQUFGO0VBRUE7SUFDRSxVQUFBO0VBQUY7RUFFQTtJQUNFLGtCQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUFBRjtFQUVBO0lBQ0UsVUFBQTtFQUFGO0VBRUE7SUFDRSxZQUFBO0lBQ0EsbUJBQUE7RUFBRjtBQUNGOztBQUdBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsWUFBQTtFQURGO0VBR0E7SUFDRSxVQUFBO0VBREY7RUFHQTtJQUNFLFVBQUE7RUFERjtFQUdBO0lBQ0UsZUFBQTtJQUNBLGFBQUE7RUFERjtFQUdBO0lBQ0Usc0JBQUE7SUFDQSxrQkFBQTtFQURGO0FBQ0YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbntcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDgwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvL292ZXJmbG93LXk6c2Nyb2xsO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmJhbm5lcl9pbWFnZXtcbiAgd2lkdGg6IDUwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDo3NXZoO1xufVxuaW1ne1xuICB3aWR0aDogODAlO1xuXG59XG5cbi5kaXYtbG9naW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNTAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4uYm90b25lcyB7XG4gZGlzcGxheTogZmxleDtcbiBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxvZ2lue1xuICBmb250LWZhbWlseTogIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXdpZHRoOiAwY2g7XG59XG5cbi5jYW5jZWx7XG4gIGZvbnQtZmFtaWx5OiAgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg3LCA1OCwgNTgpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXdpZHRoOiAwY2g7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcblxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaDF7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC1mYW1pbHk6ICBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2NXB4KSB7XG4gIC5iYW5uZXJfaW1hZ2V7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6MzB2aDtcbiAgfVxuICAuZGl2LWxvZ2lue1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbiAgLnNlY3Rpb257XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIH1cbiAgaW1ne1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzgwcHgpIHtcbiAgLmJhbm5lcl9pbWFnZXtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDoyNXZoO1xuICB9XG4gIC5kaXYtbG9naW57XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICBpbWd7XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxuICBwe1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBtYXJnaW46IC0xMHB4O1xuICB9XG4gIC5zZWN0aW9ue1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICB9XG4gIFxufVxuIl19 */"] });


/***/ }),

/***/ 7517:
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 4766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 1026);
/* harmony import */ var src_app_shared_services_transactions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/transactions.service */ 6111);
/* harmony import */ var src_app_shared_services_balance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/balance.service */ 3558);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _layout_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layout/file-upload/file-upload.component */ 6880);









function ProfileComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 17);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r0.user.photo_url, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function ProfileComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.user.username, "");
} }
function ProfileComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.user.email);
} }
function ProfileComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Wallet:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProfileComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.user._id);
} }
function ProfileComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const bal_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 3, bal_r8.qty, "0.1-10"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", "/coin/" + bal_r8.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", bal_r8.symbol.length < 4 ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 6, bal_r8.symbol) + "" : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 8, bal_r8.symbol), " ");
} }
function ProfileComponent_ul_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul")(1, "div", 22)(2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 22)(9, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const transaction_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", "/coin/" + transaction_r10.symbol_from);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", transaction_r10.symbol_from.length < 4 ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 7, transaction_r10.symbol_from) + "" : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 9, transaction_r10.symbol_from), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", transaction_r10.qty_from, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", "/coin/" + transaction_r10.symbol_to);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", transaction_r10.symbol_to.length < 4 ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 11, transaction_r10.symbol_to) + "" : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 13, transaction_r10.symbol_to), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](15, 15, transaction_r10.qty_to, "0.1-8"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](18, 18, transaction_r10.timestamp, "dd.MM.yyyy \u2192 HH:mm"));
} }
function ProfileComponent_ul_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul")(1, "div", 25)(2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 25)(9, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const transaction_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", "/coin/" + transaction_r12.symbol_from);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", transaction_r12.symbol_from.length < 4 ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 7, transaction_r12.symbol_from) + "" : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 9, transaction_r12.symbol_from), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", transaction_r12.qty_from, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", "/coin/" + transaction_r12.symbol_to);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", transaction_r12.symbol_to.length < 4 ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 11, transaction_r12.symbol_to) + "" : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 13, transaction_r12.symbol_to), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](14, 15, transaction_r12.qty_to, "0.1-5"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](18, 18, transaction_r12.timestamp, "dd.MM.yyyy"));
} }
class ProfileComponent {
    constructor(router, authService, transactionService, balanceService) {
        this.authService = authService;
        this.transactionService = transactionService;
        this.balanceService = balanceService;
        // userImage: any;
        this.url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/users/image`;
    }
    ngOnChanges(changes) {
        throw new Error('Method not implemented.');
    }
    ngOnInit() {
        this.user = this.authService.getUser();
        //  this.user && this.userImage = this.user.photo_url.includes("https://") ? this.user.photo_url : this.url + "/" + this.user._id
        this.balanceService.getUserBalance(localStorage.getItem("user_id")).then(res => {
            this.balance = res.data;
        });
        this.transactionService.getTransactionsUser(localStorage.getItem("user_id")).then(res => {
            this.transactions = res.data;
        });
        this.authService.onUser.subscribe((lang) => {
            const user = this.authService.getUser();
            // this.userImage = user.photo_url.includes("https://") ? user.photo_url : this.url + "/" + user._id
            // console.log(this.userImage)
            this.user = user;
            this.balanceService.getUserBalance(this.user._id).then(res => {
                this.balance = res.data;
            });
            this.transactionService.getTransactionsUser(this.user._id).then(res => {
                this.transactions = res.data;
            });
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_transactions_service__WEBPACK_IMPORTED_MODULE_2__.TransactionsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_balance_service__WEBPACK_IMPORTED_MODULE_3__.BalanceService)); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]], decls: 41, vars: 8, consts: [[1, "section"], [1, "left_section"], ["alt", "", 3, "src", 4, "ngIf"], ["style", "font-weight:bold ;", 4, "ngIf"], ["style", "font-size:18px ;", 4, "ngIf"], ["style", "font-size:15px ;", 4, "ngIf"], [1, "balanz"], [2, "color", "goldenrod"], [4, "ngFor", "ngForOf"], [1, "desktop", 2, "margin", "auto", "width", "80%"], [1, "titles"], [1, "title", 2, "width", "10%", "text-align", "left"], [1, "title", 2, "width", "30%", "text-align", "left"], [1, "title", 2, "width", "15%", "text-align", "right"], [1, "mobile", 2, "margin", "auto", "width", "100%"], [1, "title", 2, "width", "40%", "text-align", "left"], [1, "title", 2, "width", "20%", "text-align", "right"], ["alt", "", 3, "src"], [2, "font-weight", "bold"], [2, "font-size", "18px"], [2, "font-size", "15px"], [3, "routerLink"], [2, "width", "10%", "text-align", "left", "font-weight", "bold"], [2, "width", "30%", "text-align", "left"], [2, "width", "15%", "text-align", "right"], [2, "width", "10%", "text-align", "left"], [2, "width", "25%", "text-align", "left"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ProfileComponent_img_3_Template, 1, 1, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-file-upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ProfileComponent_p_5_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ProfileComponent_p_6_Template, 2, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ProfileComponent_p_7_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ProfileComponent_p_8_Template, 2, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 6)(10, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, ProfileComponent_li_14_Template, 7, 10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 9)(16, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ul", 10)(19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " From ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Quantity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Quantity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, ProfileComponent_ul_29_Template, 19, 21, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 14)(31, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "ul", 10)(34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, " From ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, " To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, " Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, ProfileComponent_ul_40_Template, 19, 21, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.balance);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.transactions);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.transactions);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _layout_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_4__.FileUploadComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: ["html[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\n\n.section[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  margin-bottom: auto;\n}\n\n.left_section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  width: 40%;\n  height: 50%;\n}\n\n.left_section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  width: 119px;\n  height: 119px;\n  object-fit: cover;\n  border-radius: 50%;\n  margin-bottom: -20px;\n}\n\n.left_section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.banner_image[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  width: 10%;\n}\n\n.banner_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40%;\n  height: auto;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: 700;\n  margin-bottom: 40px;\n  text-align: center;\n}\n\nul[_ngcontent-%COMP%] {\n  display: flex;\n}\n\nhr[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.balanz[_ngcontent-%COMP%] {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  width: 100%;\n  font-weight: bold;\n  text-align: right;\n}\n\n.balanz[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-align: right;\n  width: 50%;\n  margin-left: 25%;\n}\n\n.balanz[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.desktop[_ngcontent-%COMP%] {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  display: contents;\n  text-decoration: none;\n}\n\n.mobile[_ngcontent-%COMP%] {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  display: none;\n  text-align: right;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: goldenrod;\n}\n\n.titles[_ngcontent-%COMP%] {\n  background-color: goldenrod;\n  padding: 10px 5;\n  border-radius: 20px;\n  font-weight: bold;\n}\n\n.title[_ngcontent-%COMP%] {\n  padding: 5px 0px;\n}\n\n@media (max-width: 765px) {\n  .left_section[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    margin-bottom: 20%;\n  }\n  .balanz[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n  }\n  .balanz[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0%;\n    font-size: 15px;\n  }\n  .balanz[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n  .section[_ngcontent-%COMP%] {\n    height: auto;\n    flex-direction: column;\n  }\n  .desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile[_ngcontent-%COMP%] {\n    display: contents;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQUY7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFFRTtFQUNFLGVBQUE7RUFFQSxtSkFBQTtBQURKOztBQVFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBTEY7O0FBT0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUxKOztBQVVBO0VBQ0UsZUFBQTtFQUNBLG1KQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBUEY7O0FBV0E7RUFDRSxhQUFBO0FBUkY7O0FBV0E7RUFDRSxVQUFBO0FBUkY7O0FBV0E7RUFDRSxtSkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBUkY7O0FBVUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFSSjs7QUFXRTtFQUNFLGFBQUE7QUFUSjs7QUFhQTtFQUNFLG1KQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQVZGOztBQWFBO0VBQ0UsbUpBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFWRjs7QUFhQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUFWRjs7QUFhQTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFWRjs7QUFhQTtFQUNFLGdCQUFBO0FBVkY7O0FBYUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUFWRjtFQVlBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUFWRjtFQVlFO0lBQ0UsV0FBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0VBVko7RUFhRTtJQUNFLFVBQUE7RUFYSjtFQWVBO0lBQ0UsWUFBQTtJQUNBLHNCQUFBO0VBYkY7RUFnQkE7SUFDRSxhQUFBO0VBZEY7RUFpQkE7SUFDRSxpQkFBQTtFQWZGO0FBQ0YiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuLnNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgLy8gaGVpZ2h0OiA4MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuXG4ubGVmdF9zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDUwJTtcblxuICBpbWcge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICB3aWR0aDogMTE5cHg7XG4gICAgaGVpZ2h0OiAxMTlweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XG4gIH1cbiAgcCB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIC8vbWFyZ2luLXRvcDogMjVweDtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gIH1cbn1cblxuXG5cblxuLmJhbm5lcl9pbWFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDEwJTtcblxuICBpbWcge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG5cblxuaDEge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbnVsIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuaHJ7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5iYWxhbnp7XG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiByaWdodDtcblxuICBvbHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICB9XG5cbiAgbGl7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxufVxuXG4uZGVza3RvcHtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBjb250ZW50cztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubW9iaWxle1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6bm9uZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbmF7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGdvbGRlbnJvZDtcbn1cblxuLnRpdGxlc3tcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xuICBwYWRkaW5nOjEwcHggNTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuLnRpdGxle1xuICBwYWRkaW5nOiA1cHggMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY1cHgpIHtcbiAgLmxlZnRfc2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDIwJTtcbiAgfVxuICAuYmFsYW56IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICBvbHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDAlO1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cblxuICAgIGxpe1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICB9XG5cbiAgfVxuICAuc2VjdGlvbntcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5kZXNrdG9we1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubW9iaWxle1xuICAgIGRpc3BsYXk6Y29udGVudHM7XG4gIH1cblxuXG59XG4iXX0= */"] });


/***/ }),

/***/ 6918:
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 1026);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @abacritt/angularx-social-login */ 3218);










class SignupComponent {
    constructor(formBuilder, http, router, authService) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
        this.authService = authService;
        this.signupForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(6)]],
            confirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(6)]],
            terms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.requiredTrue]
        });
    }
    ngOnInit() {
    }
    crearUsuario() {
        const datos = this.signupForm.getRawValue();
        if (this.signupForm.valid) {
            this.authService.postUser(datos.email, datos.password, datos.name, "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png").subscribe((res) => this.router.navigate(["login"]), (err) => console.log(err));
        }
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
SignupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 42, vars: 2, consts: [[1, "section"], [1, "banner_image"], ["src", "../assets/Login1.png", "alt", ""], [1, "div-login"], [2, "width", "100%"], [3, "formGroup", "submit"], [1, "formLayout"], ["matInput", "", "type", "text", "formControlName", "name"], ["matInput", "", "type", "email", "formControlName", "email"], ["matInput", "", "type", "password", "formControlName", "password"], ["matInput", "", "type", "password", "formControlName", "confirm"], ["formControlName", "terms"], ["type", "standard", "size", "medium", 2, "margin-bottom", "15px"], [1, "botones"], ["id", "trigger", 1, "login", 3, "disabled"], ["trigger", ""], ["type", "button", 1, "cancel"], ["routerLink", "/login"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Welcome! Sign Up now to start trading");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4)(9, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function SignupComponent_Template_form_submit_9_listener() { return ctx.crearUsuario(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6)(11, "mat-form-field")(12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Este campo es requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-form-field")(18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-form-field")(22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-form-field")(26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Confirmar Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-checkbox", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Acepto los terminos y condiciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "asl-google-signin-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 13)(33, "button", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Already Signed Up? \u2192 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.signupForm.invalid);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_8__.GoogleSigninButtonDirective], styles: [".section[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  min-height: 80%;\n  position: fixed;\n  overflow-y: scroll;\n}\n\n.banner_image[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 75vh;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.formLayout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.div-login[_ngcontent-%COMP%] {\n  display: flex;\n  width: 50%;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 10px !important;\n  margin-bottom: 40px !important;\n}\n\n.botones[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.login[_ngcontent-%COMP%] {\n  font-family: Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  background-color: goldenrod;\n  color: white;\n  border-radius: 45px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 12px;\n  padding-right: 12px;\n  font-size: 18px;\n  font-weight: 400;\n  cursor: pointer;\n  text-decoration: none;\n  border-color: white;\n  border-width: 0ch;\n}\n\n.cancel[_ngcontent-%COMP%] {\n  font-family: Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  background-color: rgb(187, 58, 58);\n  color: white;\n  border-radius: 45px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 12px;\n  padding-right: 12px;\n  font-size: 18px;\n  font-weight: 400;\n  cursor: pointer;\n  border-width: 0ch;\n  border-color: white;\n  text-decoration: none;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: 700;\n  margin-bottom: 40px;\n}\n\n@media (max-width: 765px) {\n  .banner_image[_ngcontent-%COMP%] {\n    width: 90%;\n    height: 30vh;\n  }\n  .div-login[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .section[_ngcontent-%COMP%] {\n    text-align: center;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-left: -15px;\n  }\n  button[_ngcontent-%COMP%] {\n    margin: 10px;\n    margin-bottom: 10px;\n  }\n}\n\n@media (max-width: 380px) {\n  .banner_image[_ngcontent-%COMP%] {\n    width: 90%;\n    height: 25vh;\n  }\n  .div-login[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  p[_ngcontent-%COMP%] {\n    font-size: 10px;\n    margin: -10px;\n  }\n  .section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-bottom: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLHVCQUFBO0VBQ0EsOEJBQUE7QUFBRjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREY7O0FBSUE7RUFDRSxVQUFBO0FBREY7O0FBSUE7RUFDRSx5RkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSx5RkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUVBLHFCQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsbUpBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBT0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxZQUFBO0VBSkY7RUFNQTtJQUNFLFVBQUE7RUFKRjtFQU1BO0lBQ0Usa0JBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQUpGO0VBT0E7SUFDRSxZQUFBO0lBQ0EsbUJBQUE7RUFMRjtBQUNGOztBQVFBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsWUFBQTtFQU5GO0VBUUE7SUFDRSxVQUFBO0VBTkY7RUFRQTtJQUNFLGVBQUE7SUFDQSxhQUFBO0VBTkY7RUFRQTtJQUNFLHNCQUFBO0lBQ0Esa0JBQUE7RUFORjtBQUNGIiwiZmlsZSI6InNpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDgwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5iYW5uZXJfaW1hZ2Uge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDc1dmg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5pbWcge1xuICB3aWR0aDogODAlO1xuXG59XG5cbi5mb3JtTGF5b3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kaXYtbG9naW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNTAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDQwcHggIWltcG9ydGFudDtcbn1cblxuXG4uYm90b25lcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA4MCVcbn1cblxuLmxvZ2luIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0NXB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci13aWR0aDogMGNoO1xufVxuXG4uY2FuY2VsIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODcsIDU4LCA1OCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNDVweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXdpZHRoOiAwY2g7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG5cbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2NXB4KSB7XG4gIC5iYW5uZXJfaW1hZ2V7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6MzB2aDtcbiAgfVxuICAuZGl2LWxvZ2lue1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbiAgLnNlY3Rpb257XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIH1cblxuICBidXR0b24ge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzODBweCkge1xuICAuYmFubmVyX2ltYWdle1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OjI1dmg7XG4gIH1cbiAgLmRpdi1sb2dpbntcbiAgICB3aWR0aDogOTAlO1xuICB9XG4gIHB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIG1hcmdpbjogLTEwcHg7XG4gIH1cbiAgLnNlY3Rpb257XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gIH1cbiAgXG59Il19 */"] });


/***/ }),

/***/ 6608:
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 1026);




class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route, state) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9683:
/*!*********************************************!*\
  !*** ./src/app/shared/guards/role.guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleGuard": () => (/* binding */ RoleGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/role.service */ 3135);





class RoleGuard {
    constructor(router, roleService) {
        this.router = router;
        this.roleService = roleService;
    }
    canActivate(route, state) {
        const requiredRole = route.data['roles'];
        const token = localStorage.getItem("token");
        const result = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        if (token) {
            this.roleService.getRoles(token).subscribe((user) => {
                if (user.roles) {
                    const found = requiredRole.some((r) => user.roles.indexOf(r) >= 0);
                    if (found) {
                        result.next(true);
                    }
                    else {
                        this.router.navigate(['/forbidden']);
                        result.next(false);
                    }
                }
                else {
                    this.router.navigate(['/forbidden']);
                    result.next(false);
                }
                result.complete();
            }, error => {
                this.router.navigate(['/forbidden']);
                result.next(false);
                result.complete();
            });
        }
        else {
            this.router.navigate(['/forbidden']);
            result.next(false);
            result.complete();
        }
        return result.asObservable();
    }
}
RoleGuard.ɵfac = function RoleGuard_Factory(t) { return new (t || RoleGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_role_service__WEBPACK_IMPORTED_MODULE_0__.RoleService)); };
RoleGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RoleGuard, factory: RoleGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8603:
/*!***********************************************!*\
  !*** ./src/app/shared/guards/unauth.guard.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnauthGuard": () => (/* binding */ UnauthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 1026);




class UnauthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route, state) {
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    }
}
UnauthGuard.ɵfac = function UnauthGuard_Factory(t) { return new (t || UnauthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
UnauthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UnauthGuard, factory: UnauthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2521:
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/nl-to-br.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NlToBrPipe": () => (/* binding */ NlToBrPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class NlToBrPipe {
    transform(value, ...args) {
        return value.replace(/\n/g, '<br>');
    }
}
NlToBrPipe.ɵfac = function NlToBrPipe_Factory(t) { return new (t || NlToBrPipe)(); };
NlToBrPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "nlToBr", type: NlToBrPipe, pure: true });


/***/ }),

/***/ 1026:
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 4766);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);






class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.loggedIn = false;
        this.onUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}`;
        this.loaduser();
    }
    loaduser() {
        const token = localStorage.getItem("token");
        if (localStorage.getItem("token")) {
            if (localStorage.getItem("method") == "email") {
                this.getToken(token).subscribe((data) => {
                    if (data.status == "Token Not Valid") {
                        this.signOut();
                    }
                    else {
                        this.setUser(data);
                        localStorage.setItem("user_id", data._id);
                        this.setIsLoggedIn(true);
                        this.onUser.emit(data);
                    }
                }, (error) => {
                    this.signOut();
                });
            }
            else {
                this.getTokenGoogle(token).subscribe((data) => {
                    console.log(data);
                    if (data.isvalid == false) {
                        localStorage.setItem("user_id", "");
                        this.signOut();
                    }
                    else {
                        this.setUser(data);
                        localStorage.setItem("user_id", data._id);
                        this.setIsLoggedIn(true);
                        this.onUser.emit(data);
                    }
                }, (error) => {
                    localStorage.setItem("user_id", "");
                    this.signOut();
                });
            }
        }
    }
    getTokenGoogle(token) {
        return this.http.get(`${this.url}/google/${token}`);
    }
    getToken(token) {
        return this.http.get(`${this.url}/api/login/${token}`);
    }
    signOut() {
        localStorage.setItem("token", "");
        localStorage.setItem("method", "");
        localStorage.setItem("user_id", "");
        this.setIsLoggedIn(false);
        this.router.navigate(["/login"]);
    }
    isLoggedIn() {
        return !!localStorage.getItem("token");
    }
    setIsLoggedIn(val) {
        this.loggedIn = val;
    }
    setUser(user) {
        var photo = "";
        if (user.photo_url) {
            photo = user.photo_url.includes("https://") ? user.photo_url : this.url + "/api/users/image/" + user._id;
        }
        else {
            photo = user.photo_url;
        }
        this.user = { ...user, photo_url: photo };
        localStorage.setItem("user_id", user._id);
    }
    getUser() {
        return this.user;
    }
    postUser(email, password, name, photo_url = "", method = "email") {
        return this.http.post(`${this.url}/api/users`, {
            name: name,
            username: name,
            photo_url: photo_url,
            email: email,
            password: password,
            method: method
        });
    }
    postUserGoogle(data) {
        return this.http.post(`${this.url}/api/users`, data);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3558:
/*!****************************************************!*\
  !*** ./src/app/shared/services/balance.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BalanceService": () => (/* binding */ BalanceService)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ 2111);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 4766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



class BalanceService {
    constructor() {
        this.url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/balance`;
        axios__WEBPACK_IMPORTED_MODULE_1__["default"].defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('token');
    }
    getUserBalance(id) {
        return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${this.url}/${id}`);
    }
}
BalanceService.ɵfac = function BalanceService_Factory(t) { return new (t || BalanceService)(); };
BalanceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BalanceService, factory: BalanceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2371:
/*!**************************************************!*\
  !*** ./src/app/shared/services/coins.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoinsService": () => (/* binding */ CoinsService)
/* harmony export */ });
/* harmony import */ var _Users_jpdealba_Documents_ITESO_otono_2022_web2_memes_proyecto_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ 2111);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 4766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






class CoinsService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/api/coins`;
    this.symbol = "";
    this.coins = [];
    this.httpOptions = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    };
    this.httpOptionsClient = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders(this.httpOptions)
    };
    this.coinsList = [];
    axios__WEBPACK_IMPORTED_MODULE_3__["default"].defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('token');
  }

  getCoins() {
    var _this = this;

    return (0,_Users_jpdealba_Documents_ITESO_otono_2022_web2_memes_proyecto_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const resp = yield axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(_this.url);
      _this.coins = resp.data;
      return resp;
    })();
  }

  getCoin(symbol) {
    return axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(`${this.url}/${symbol}`);
  }

  setSymbol(symbol) {
    this.symbol = symbol;
  }

  getSymbol() {
    return this.symbol;
  }

}

CoinsService.ɵfac = function CoinsService_Factory(t) {
  return new (t || CoinsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};

CoinsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: CoinsService,
  factory: CoinsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4571:
/*!********************************************************!*\
  !*** ./src/app/shared/services/file-upload.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploadService": () => (/* binding */ FileUploadService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 4766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 1026);




class FileUploadService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        // API url
        this.baseApiUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/users/image`;
    }
    // Returns an observable
    upload(file) {
        // Create form data
        const formData = new FormData();
        const user = this.authService.getUser();
        // Store form name as "file" with file data
        formData.append("file", file, user._id + ".png");
        // Make http post request over api
        // with formData as req
        return this.http.post(this.baseApiUrl, formData);
    }
}
FileUploadService.ɵfac = function FileUploadService_Factory(t) { return new (t || FileUploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
FileUploadService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FileUploadService, factory: FileUploadService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3135:
/*!*************************************************!*\
  !*** ./src/app/shared/services/role.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleService": () => (/* binding */ RoleService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 4766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 1026);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class RoleService {
    constructor(authService, http) {
        this.authService = authService;
        this.http = http;
        this.url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}`;
    }
    getRoles(token) {
        return this.http.get(`${this.url}/api/login/${token}`);
    }
}
RoleService.ɵfac = function RoleService_Factory(t) { return new (t || RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
RoleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RoleService, factory: RoleService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2866:
/*!***************************************************!*\
  !*** ./src/app/shared/services/socket.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocketService": () => (/* binding */ SocketService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ 4769);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 4766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




class SocketService {
    constructor() {
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
        this.socket = null;
        this.room = '';
        this.addTransaction = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    setRoom(room) {
        this.socket.disconnect();
        this.socket = null;
        this.connect();
        this.room = room;
        this.socket.emit('join-room', room);
    }
    connect() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io(this.url);
        this.socket.on('connect', () => {
            console.log(`Connected to ${this.url}`);
            this.subscribeToChanges();
        });
    }
    subscribeToChanges() {
        this.socket.on("transaction-case", (data) => {
            if (data.symbol_from == this.room || data.symbol_to == this.room) {
                this.addTransaction.next(data);
            }
        });
    }
    sendTransaction(data) {
        this.socket.emit('transaction-case', this.room, data);
    }
}
SocketService.ɵfac = function SocketService_Factory(t) { return new (t || SocketService)(); };
SocketService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SocketService, factory: SocketService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6111:
/*!*********************************************************!*\
  !*** ./src/app/shared/services/transactions.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionsService": () => (/* binding */ TransactionsService)
/* harmony export */ });
/* harmony import */ var _Users_jpdealba_Documents_ITESO_otono_2022_web2_memes_proyecto_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ 2111);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 4766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






class TransactionsService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/api/transactions`;
    this.symbol = "";
    this.httpOptions = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    };
    this.httpOptionsClient = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders(this.httpOptions)
    };
    this.coinsList = [];
    axios__WEBPACK_IMPORTED_MODULE_3__["default"].defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('token');
  }

  postTransaction(data) {
    return axios__WEBPACK_IMPORTED_MODULE_3__["default"].post(this.url, data);
  }

  getTransactions(symbol) {
    var _this = this;

    return (0,_Users_jpdealba_Documents_ITESO_otono_2022_web2_memes_proyecto_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(`${_this.url}/${symbol}`);
    })();
  }

  getTransactionsUser(user_id) {
    var _this2 = this;

    return (0,_Users_jpdealba_Documents_ITESO_otono_2022_web2_memes_proyecto_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(`${_this2.url}/user/${user_id}`);
    })();
  }

}

TransactionsService.ɵfac = function TransactionsService_Factory(t) {
  return new (t || TransactionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};

TransactionsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: TransactionsService,
  factory: TransactionsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    googleId: "772161694402-eqfpaiarkiiupl0no2rilu21m7vfco0k.apps.googleusercontent.com",
    apiUrl: "http://localhost:3000"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map