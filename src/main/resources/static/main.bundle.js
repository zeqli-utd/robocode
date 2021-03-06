webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__robocode_robocode_component__ = __webpack_require__("../../../../../src/app/robocode/robocode.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__robocode_battle_battle_component__ = __webpack_require__("../../../../../src/app/robocode/battle/battle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__robocode_editor_editor_component__ = __webpack_require__("../../../../../src/app/robocode/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__robocode_create_create_component__ = __webpack_require__("../../../../../src/app/robocode/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__robocode_editor_new_robot_new_robot_component__ = __webpack_require__("../../../../../src/app/robocode/editor/new-robot/new-robot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__robocode_editor_legacy_robot_legacy_robot_component__ = __webpack_require__("../../../../../src/app/robocode/editor/legacy-robot/legacy-robot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__authentication_login_login_component__ = __webpack_require__("../../../../../src/app/authentication/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_guards_auth_guard__ = __webpack_require__("../../../../../src/app/shared/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_welcome_welcome_component__ = __webpack_require__("../../../../../src/app/shared/welcome/welcome.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_14__shared_welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__shared_guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'robocode', component: __WEBPACK_IMPORTED_MODULE_3__robocode_robocode_component__["a" /* RobocodeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__shared_guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'robocode/create', component: __WEBPACK_IMPORTED_MODULE_7__robocode_create_create_component__["a" /* CreateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__shared_guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'robocode/edit', component: __WEBPACK_IMPORTED_MODULE_6__robocode_editor_editor_component__["a" /* EditorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__shared_guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'robocode/edit/:id', component: __WEBPACK_IMPORTED_MODULE_9__robocode_editor_legacy_robot_legacy_robot_component__["a" /* LegacyRobotComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__shared_guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'robocode/edit/new/:package/:robotName', component: __WEBPACK_IMPORTED_MODULE_8__robocode_editor_new_robot_new_robot_component__["a" /* NewRobotComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__shared_guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'robocode/battle', component: __WEBPACK_IMPORTED_MODULE_5__robocode_battle_battle_component__["a" /* BattleComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__shared_guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'page-not-found', component: __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] },
    // { path: '',   redirectTo: '/', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__authentication_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_11__register_register_component__["a" /* RegisterComponent */] },
    { path: '**', redirectTo: 'page-not-found' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forRoot(appRoutes, { enableTracing: true })
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<app-navbar></app-navbar>\n<app-alert></app-alert>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__robocode_robocode_module__ = __webpack_require__("../../../../../src/app/robocode/robocode.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__robocode_robocode_service__ = __webpack_require__("../../../../../src/app/robocode/robocode.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_alert_alert_component__ = __webpack_require__("../../../../../src/app/shared/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_alert_alert_service__ = __webpack_require__("../../../../../src/app/shared/alert/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_guards_auth_guard__ = __webpack_require__("../../../../../src/app/shared/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_authentication_service__ = __webpack_require__("../../../../../src/app/shared/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_user_service__ = __webpack_require__("../../../../../src/app/shared/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_jwt_interceptor__ = __webpack_require__("../../../../../src/app/shared/jwt-interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__authentication_login_login_component__ = __webpack_require__("../../../../../src/app/authentication/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_global_events_manager_service__ = __webpack_require__("../../../../../src/app/shared/global-events-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_welcome_welcome_component__ = __webpack_require__("../../../../../src/app/shared/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_userinfo_service__ = __webpack_require__("../../../../../src/app/shared/userinfo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_10__shared_alert_alert_component__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_11__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_18__authentication_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_19__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_20__shared_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_22__shared_welcome_welcome_component__["a" /* WelcomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__robocode_robocode_module__["a" /* RobocodeModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_21__shared_global_events_manager_service__["a" /* GlobalEventsManagerService */],
            __WEBPACK_IMPORTED_MODULE_13__shared_guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_12__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_14__shared_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_15__shared_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_9__robocode_robocode_service__["a" /* RobocodeService */],
            __WEBPACK_IMPORTED_MODULE_23__shared_userinfo_service__["a" /* UserInfoService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                useClass: __WEBPACK_IMPORTED_MODULE_17__shared_jwt_interceptor__["a" /* JwtInterceptor */],
                multi: true
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n  <h2>Login</h2>\n  <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n      <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n      <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n    </div>\n    <div class=\"form-group\">\n      <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n      <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n      <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/authentication/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_alert_alert_service__ = __webpack_require__("../../../../../src/app/shared/alert/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_authentication_service__ = __webpack_require__("../../../../../src/app/shared/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_global_events_manager_service__ = __webpack_require__("../../../../../src/app/shared/global-events-manager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, alertService, globalEventsManager) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.globalEventsManager = globalEventsManager;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            if (data == null) {
                _this.alertService.error("Invalid username or password.");
                _this.loading = false;
                return;
            }
            _this.globalEventsManager.showNavBar(true);
            var redirectUrl = _this.returnUrl == '/' ? '/dashboard' : _this.returnUrl;
            _this.router.navigate([redirectUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/authentication/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authentication/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__shared_alert_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_alert_alert_service__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_global_events_manager_service__["a" /* GlobalEventsManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_global_events_manager_service__["a" /* GlobalEventsManagerService */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div>-->\n\n  <!--<ul>-->\n    <!--<li><a routerLink=\"/robocode\">Robocode Home</a></li>-->\n    <!--<li><a routerLink=\"/robocode/create\">Create Robot</a></li>-->\n    <!--<li><a routerLink=\"/robocode/edit\">Robot Editor</a></li>-->\n    <!--<li><a routerLink=\"/robocode/battle\">Play Battle</a></li>-->\n  <!--</ul>-->\n<!--</div>-->\n<div class=\"col-md-6 col-md-offset-3\">\n  <h1>Hi {{currentUser.username}} (Group {{currentUser.token.group.name}})!</h1>\n  <p>You're logged in Robocode !!</p>\n  <h3>All registered users:</h3>\n  <ul>\n    <li *ngFor=\"let user of users\">\n      {{user.username}}\n    </li>\n  </ul>\n  <p><a [routerLink]=\"['/login']\">Logout</a></p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_user__ = __webpack_require__("../../../../../src/app/shared/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_service__ = __webpack_require__("../../../../../src/app/shared/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_constant__ = __webpack_require__("../../../../../src/app/shared/constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__shared_constant__["a" /* Constant */].PRINCIPAL));
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    HomeComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).subscribe(function () { _this.loadAllUsers(); });
    };
    HomeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) {
            _this.users = [];
            users.forEach(function (u) {
                var newUser = new __WEBPACK_IMPORTED_MODULE_1__shared_models_user__["a" /* User */]();
                newUser.id = u.id;
                newUser.username = u.userID;
                _this.users.push((newUser));
            });
            _this.users.sort(function (a, b) {
                var nameA = a.username.toUpperCase(); // ignore upper and lowercase
                var nameB = b.username.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                // names must be equal
                return 0;
            });
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_user_service__["a" /* UserService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n  <h2>Register</h2>\n  <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n      <label for=\"firstName\">First Name</label>\n      <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" required />\n      <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">First Name is required</div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n      <label for=\"lastName\">Last Name</label>\n      <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required />\n      <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n      <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n      <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n    </div>\n\n    <div class=\"form-group\">\n      <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n      <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n      <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n    </div>\n\n\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_service__ = __webpack_require__("../../../../../src/app/shared/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__ = __webpack_require__("../../../../../src/app/shared/alert/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(router, userService, alertService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(function (data) {
            // set success message and pass true paramater to persist the message after redirecting to the login page
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__["a" /* AlertService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/robocode/battle/battle.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/robocode/battle/battle.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"battle-panel\" class=\"container\">\n  <!-- Robots Selection Tab -->\n  <div class=\"row\">\n    <div id=\"lineup\">\n      <div>\n        <h1>Robots</h1>\n        <hr>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <br>\n          <table>\n            <tr>\n              <!-- User Options -->\n              <td width=\"250px\">\n                <label>User</label>\n                <select class=\"form-control\" multiple name=\"domain_name\" id=\"domain_name\"\n                        [(ngModel)]=\"selectedUsers\"\n                        (ngModelChange)=\"userChanges($event)\">\n                  <option *ngFor=\"let user of userOptions\" [value]=\"user\">{{user}}</option>\n                </select>\n              </td>\n\n              <!-- Package Options -->\n              <td width=\"250px\">\n                <label>Package</label>\n                <select class=\"form-control\" multiple name=\"package\" id=\"package\"\n                        [(ngModel)]=\"selectedPackage\"\n                        (ngModelChange)=\"packageChange($event)\">\n                  <option *ngFor=\"let package of packageOptions\" [value]=\"package\">{{package}}</option>\n                </select>\n              </td>\n\n\n              <!-- Robot Options -->\n              <td width=\"250px\">\n                <label>Robots</label>\n                <select class=\"form-control\" multiple name=\"displayed-robots\"\n                        [(ngModel)]=\"selectedRobots\">\n                  <option *ngFor=\"let r of robotOptions\" [ngValue]=\"r\">{{r.robotId}}</option>\n                </select>\n\n              </td>\n              <td width=\"100px\" align=\"center\">\n                <button type=\"button\" (click)=\"addToChosen()\">Add</button>\n              </td>\n              <td width=\"250px\">\n                <label>Selected Robots</label>\n                <select class=\"form-control\" multiple name=\"selected-robots\"\n                        (ngModelChange)=\"selectedRobotsChange($event)\">\n                  <option *ngFor=\"let r of addedRobots\" [ngValue]=\"r\">{{r.robotId}}</option>\n                </select>\n              </td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n\n  <!-- Battle Properties Option Tab -->\n  <div class=\"row\">\n    <div id=\"rules\">\n      <div>\n        <h1>Rules</h1>\n        <hr>\n      </div>\n\n      <table>\n        <tr>\n          <td>\n            Number of Rounds: <br> (integer > 0)\n          </td>\n          <td>\n            <input type=\"text\" name=\"numRounds\" value=\"10\">\n          </td>\n        </tr>\n        <tr>\n          <td width=\"200px\">Gun Cooling Rate: <br> (>0 and <=0.7)</td>\n          <td>\n            <input type=\"text\" name=\"gunCool\" id=\"gunCool\" value=\"0.1\"></td>\n        </tr>\n        <tr>\n          <td>\n            Inactivity Time: <br> (integer >= 0)\n          </td>\n          <td><input type=\"text\" name=\"inactivity\" value=\"450\"></td>\n        </tr>\n        <tr>\n          <td>\n            Sentry Border Size: <br> (integer >= 50)\n          </td>\n          <td><input type=\"text\" name=\"sentryBorder\" id=\"sentryBorder\" value=\"100\"></td>\n        </tr>\n        <tr>\n          <td>\n            Hide Enemy Names:\n          </td>\n          <td><input type=\"checkbox\" name=\"enemy\" value=\"enemy\"></td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"container\">\n  <div id=\"page-wrapper\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <h1 class=\"page-header\">\n          <i class=\"fa fa-play\"></i>\n          <button type=\"button\"\n                  [disabled]=\"addedRobots == null || addedRobots.length == 0\"\n                  name=\"battlebutton\" id=\"battlebutton\"\n                  (click)=\"startBattle()\">Play Battle\n          </button>\n        </h1>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/robocode/battle/battle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BattleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__robocode_service__ = __webpack_require__("../../../../../src/app/robocode/robocode.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_userinfo_service__ = __webpack_require__("../../../../../src/app/shared/userinfo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_constant__ = __webpack_require__("../../../../../src/app/shared/constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BattleComponent = (function () {
    function BattleComponent(router, robocodeService, userInfoService) {
        this.router = router;
        this.robocodeService = robocodeService;
        this.userInfoService = userInfoService;
        this.hasPermission = true;
        this.hasRobotPlay = false;
        this.allRobots = [];
        this.userOptions = [];
        this.selectedUsers = [];
        this.packageOptions = [];
        this.selectedPackage = [];
        this.robotOptions = [];
        this.selectedRobots = [];
        this.addedRobots = [];
    }
    BattleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.userInfoService.getCurrentUser();
        // Admin cannot play
        if (this.currentUser.username.toUpperCase() == 'ADMIN') {
            this.hasPermission = false;
        }
        if (localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__shared_constant__["a" /* Constant */].ACCESS)) {
            var access = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__shared_constant__["a" /* Constant */].ACCESS));
            access.forEach(function (ac) {
                if (ac.name.toUpperCase() == 'Robot_Play'.toUpperCase()) {
                    _this.hasRobotPlay = true;
                }
            });
        }
        else {
            console.log("Missing access on create ");
        }
        if (!this.hasPermission) {
            this.router.navigate(['/dashboard']);
            return;
        }
        this.robocodeService.getAllRobots().subscribe(function (data) {
            _this.allRobots = data;
            var userOptionsUnique = [];
            _this.allRobots.forEach(function (robot) {
                if ((robot.userId.toUpperCase() == _this.currentUser.username.toUpperCase()
                    && robot.groupId == _this.currentUser.token.group.id) || _this.hasRobotPlay) {
                    userOptionsUnique.push(robot.userId);
                }
            });
            userOptionsUnique = __WEBPACK_IMPORTED_MODULE_3_underscore__["uniq"](userOptionsUnique);
            _this.userOptions = userOptionsUnique;
        });
    };
    BattleComponent.prototype.userChanges = function (newUsers) {
        var _this = this;
        console.log(newUsers);
        var packageOptionsRaw = [];
        this.allRobots.forEach(function (robot) {
            if (newUsers.indexOf(robot.userId) > -1 && ((robot.userId.toUpperCase() == _this.currentUser.username.toUpperCase()
                && robot.groupId == _this.currentUser.token.group.id) || _this.hasRobotPlay)) {
                packageOptionsRaw.push(robot.packageId);
            }
        });
        var packageOptionsUnique = __WEBPACK_IMPORTED_MODULE_3_underscore__["uniq"](packageOptionsRaw);
        this.packageOptions = packageOptionsUnique;
    };
    BattleComponent.prototype.packageChange = function (newObj) {
        var _this = this;
        console.log(newObj);
        this.robotOptions = __WEBPACK_IMPORTED_MODULE_3_underscore__["filter"](this.allRobots, function (r) {
            if (_this.selectedUsers.indexOf(r.userId) > -1 && _this.selectedPackage.indexOf(r.packageId) > -1 &&
                ((r.userId.toUpperCase() == _this.currentUser.username.toUpperCase()
                    && r.groupId == _this.currentUser.token.group.id) || _this.hasRobotPlay)) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    BattleComponent.prototype.selectedRobotsChange = function (newSelectedRobots) {
        console.log("Selected Robots Changed");
        console.log(newSelectedRobots);
    };
    BattleComponent.prototype.startBattle = function () {
        var idList = [];
        this.addedRobots.forEach(function (robot) { return idList.push(robot.id); });
        this.robocodeService.playBattle(this.addedRobots).subscribe(function (res) {
            console.log(res);
            window.location.href = res.redirectUrl;
        });
        // 1. Read Robots From Database
        // 2. Read Compiled Code / If not yet compiled, discard and notify
        // 3. Package them into jar
    };
    /**
     * Add robot to final selection
     */
    BattleComponent.prototype.addToChosen = function () {
        this.addedRobots = this.addedRobots.concat(this.selectedRobots);
    };
    return BattleComponent;
}());
BattleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-battle',
        template: __webpack_require__("../../../../../src/app/robocode/battle/battle.component.html"),
        styles: [__webpack_require__("../../../../../src/app/robocode/battle/battle.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__robocode_service__["a" /* RobocodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__robocode_service__["a" /* RobocodeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_userinfo_service__["a" /* UserInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_userinfo_service__["a" /* UserInfoService */]) === "function" && _c || Object])
], BattleComponent);

var _a, _b, _c;
//# sourceMappingURL=battle.component.js.map

/***/ }),

/***/ "../../../../../src/app/robocode/create/create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/robocode/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\n  <h2>New Robot</h2>\n\n  <div *ngIf=\"!hasPermission\">\n    <label>Robot_Write access needed to view this page. </label>\n  </div>\n\n  <div *ngIf=\"hasPermission\">\n    <form #robotForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"user-name\">Select User</label>\n        <select class=\"form-control\" id=\"user-name\" name=\"user-name\"\n                #selectUserElem\n                required\n                [(ngModel)]=\"userName\"\n                (change)=\"onSelectUser(selectUserElem.value)\">\n          <option value=\"\">Select User</option>\n          <option *ngFor=\"let user of users\" [value]=\"user\">{{user}}</option>\n        </select>\n      </div>\n\n\n      <div class=\"form-group\">\n        <label for=\"package-name\">Select Package</label>\n        <select class=\"form-control\" id=\"package-name\" name=\"package-name\"\n                required\n                #selectPackageElem\n                [(ngModel)]=\"packageName\">\n          <option value=\"\">Select Package</option>\n          <option *ngFor=\"let package of packages\" [value]=\"package\">{{package}}</option>\n        </select>\n      </div>\n\n\n      <div class=\"form-group\">\n        <p>Enter Robot Name</p>\n        <p>Example: MyFirstRobot. Must not contain spaces.</p>\n        <label>Robot Name</label>\n        <input class=\"form-control\" type=\"text\"\n               name=\"robot_name\" placeholder=\"Please enter a robot name\"\n               required\n               [(ngModel)]=\"robotName\">\n      </div>\n\n      <div class=\"form-group\">\n        <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!robotForm.form.valid\">Next</button>\n      </div>\n\n    </form>\n  </div>\n\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/robocode/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_codemirror_mode_clike_clike__ = __webpack_require__("../../../../codemirror/mode/clike/clike.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_codemirror_mode_clike_clike___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_codemirror_mode_clike_clike__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__robocode_service__ = __webpack_require__("../../../../../src/app/robocode/robocode.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__robot_model__ = __webpack_require__("../../../../../src/app/robocode/robot.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_constant__ = __webpack_require__("../../../../../src/app/shared/constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_userinfo_service__ = __webpack_require__("../../../../../src/app/shared/userinfo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CreateComponent = (function () {
    function CreateComponent(robocodeService, router, userInfoService) {
        this.robocodeService = robocodeService;
        this.router = router;
        this.userInfoService = userInfoService;
        this.hasPermission = true;
        this.hasRobotWrite = false;
    }
    CreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.userInfoService.getCurrentUser();
        if (this.currentUser.username.toUpperCase() == 'ADMIN') {
            this.hasPermission = false;
        }
        if (localStorage.getItem(__WEBPACK_IMPORTED_MODULE_7__shared_constant__["a" /* Constant */].ACCESS)) {
            var access = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_7__shared_constant__["a" /* Constant */].ACCESS));
            access.forEach(function (ac) {
                if (ac.name.toUpperCase() == 'Robot_Write'.toUpperCase()) {
                    _this.hasRobotWrite = true;
                }
            });
        }
        else {
            console.log("Missing access on create ");
        }
        if (!this.hasPermission) {
            this.router.navigate(['/dashboard']);
            return;
        }
        this.robocodeService.getRobotDomainInfo().subscribe(function (data) {
            _this.viewModel = new __WEBPACK_IMPORTED_MODULE_5__robot_model__["c" /* RobotViewModel */]();
            _this.viewModel.domains = [];
            _this.domainMap = {};
            data.forEach(function (value) {
                var userId = value.userID;
                // Robot owner and Robot_Write can see.
                if ((userId.toUpperCase() == _this.currentUser.username.toUpperCase()
                    && value.groupID == _this.currentUser.token.group.id) || _this.hasRobotWrite) {
                    var packageId = value.packageID;
                    if (_this.domainMap[userId] != null) {
                        _this.domainMap[userId].packages.push(packageId);
                    }
                    else {
                        _this.domainMap[userId] = {};
                        _this.domainMap[userId].name = userId;
                        _this.domainMap[userId].packages = [packageId];
                    }
                }
            });
            _this.viewModel.domains = [];
            _this.users = [];
            Object.keys(_this.domainMap).forEach(function (key) {
                _this.domainMap[key].packages = __WEBPACK_IMPORTED_MODULE_6_underscore__["uniq"](_this.domainMap[key].packages);
                var domain = new __WEBPACK_IMPORTED_MODULE_5__robot_model__["a" /* Domain */](_this.domainMap[key].name, _this.domainMap[key].packages);
                _this.viewModel.domains.push(domain);
                _this.users.push(_this.domainMap[key].name);
            });
        });
    };
    /**
     *
     * @param {String} value
     */
    CreateComponent.prototype.onSelectUser = function (value) {
        this.packages = this.domainMap[value].packages;
    };
    CreateComponent.prototype.onSubmit = function () {
        this.router.navigate(["robocode/edit/new", this.packageName, this.robotName]);
    };
    return CreateComponent;
}());
CreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create',
        template: __webpack_require__("../../../../../src/app/robocode/create/create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/robocode/create/create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__robocode_service__["a" /* RobocodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__robocode_service__["a" /* RobocodeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__shared_userinfo_service__["a" /* UserInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared_userinfo_service__["a" /* UserInfoService */]) === "function" && _c || Object])
], CreateComponent);

var _a, _b, _c;
//# sourceMappingURL=create.component.js.map

/***/ }),

/***/ "../../../../../src/app/robocode/editor/editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".CodeMirror  {\r\n  border: 1px solid #eee !important;\r\n  height: 100% !important;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/robocode/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <h2>View and Edit Robot</h2>\n\n  <form #robotForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"user-name\">Select User</label>\n      <select class=\"form-control\" id=\"user-name\" name=\"user-name\"\n              required\n              [(ngModel)]=\"selectedUsers\"\n              (ngModelChange)=\"userChanges($event)\">\n        <option value=\"\">Select User</option>\n        <option *ngFor=\"let user of userOptions\" [value]=\"user\">{{user}}</option>\n      </select>\n    </div>\n\n\n    <div class=\"form-group\">\n      <label for=\"package-name\">Select Package</label>\n      <select class=\"form-control\" id=\"package-name\" name=\"package-name\"\n              required\n              [(ngModel)]=\"selectedPackage\"\n              (ngModelChange)=\"packageChange($event)\">\n        <option value=\"\">Select Package</option>\n        <option *ngFor=\"let package of packageOptions\" [value]=\"package\">{{package}}</option>\n      </select>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"package-name\">Select Package</label>\n      <select class=\"form-control\" id=\"robot-name\" name=\"robot-name\"\n              required\n              [(ngModel)]=\"selectedRobots\"\n              (ngModelChange)=\"robotChange($event)\">\n        <option [value]=\"null\">Select Package</option>\n        <option *ngFor=\"let r of robotOptions\" [ngValue]=\"r\" >{{r.robotId}}</option>\n\n      </select>\n    </div>\n\n    <div class=\"form-group\">\n      <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!robotForm.form.valid\">Next</button>\n    </div>\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/robocode/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__robocode_service__ = __webpack_require__("../../../../../src/app/robocode/robocode.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_userinfo_service__ = __webpack_require__("../../../../../src/app/shared/userinfo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_constant__ = __webpack_require__("../../../../../src/app/shared/constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditorComponent = (function () {
    function EditorComponent(robocodeService, router, userInfoService) {
        this.robocodeService = robocodeService;
        this.router = router;
        this.userInfoService = userInfoService;
        this.hasPermission = true;
        this.hasRobotRead = false;
        this.allRobots = [];
        this.userOptions = [];
        this.selectedUsers = "";
        this.packageOptions = [];
        this.selectedPackage = "";
        this.robotOptions = [];
        this.selectedRobots = null;
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.userInfoService.getCurrentUser();
        if (localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__shared_constant__["a" /* Constant */].ACCESS)) {
            var access = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__shared_constant__["a" /* Constant */].ACCESS));
            access.forEach(function (ac) {
                if (ac.name.toUpperCase() == 'Robot_Read'.toUpperCase()) {
                    _this.hasRobotRead = true;
                }
            });
        }
        else {
            console.log("Missing access on editor ");
        }
        if (!this.hasPermission) {
            this.router.navigate(['/dashboard']);
            return;
        }
        this.robocodeService.getAllRobots().subscribe(function (data) {
            _this.allRobots = data;
            var userOptionsUnique = [];
            _this.allRobots.forEach(function (robot) {
                if ((robot.userId.toUpperCase() == _this.currentUser.username.toUpperCase()
                    && robot.groupId == _this.currentUser.token.group.id) || _this.hasRobotRead) {
                    userOptionsUnique.push(robot.userId);
                }
            });
            userOptionsUnique = __WEBPACK_IMPORTED_MODULE_3_underscore__["uniq"](userOptionsUnique);
            _this.userOptions = userOptionsUnique;
        });
    };
    EditorComponent.prototype.userChanges = function (newUsers) {
        var _this = this;
        console.log(newUsers);
        var packageOptionsRaw = [];
        this.allRobots.forEach(function (robot) {
            if (newUsers == robot.userId) {
                if ((robot.userId.toUpperCase() == _this.currentUser.username.toUpperCase()
                    && robot.groupId == _this.currentUser.token.group.id) || _this.hasRobotRead) {
                    packageOptionsRaw.push(robot.packageId);
                }
            }
        });
        var packageOptionsUnique = __WEBPACK_IMPORTED_MODULE_3_underscore__["uniq"](packageOptionsRaw);
        this.packageOptions = packageOptionsUnique;
    };
    EditorComponent.prototype.packageChange = function (newObj) {
        var _this = this;
        console.log(newObj);
        this.robotOptions = __WEBPACK_IMPORTED_MODULE_3_underscore__["filter"](this.allRobots, function (r) {
            if (_this.selectedUsers == r.userId && _this.selectedPackage == r.packageId && ((r.userId.toUpperCase() == _this.currentUser.username.toUpperCase()
                && r.groupId == _this.currentUser.token.group.id) || _this.hasRobotRead)) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    EditorComponent.prototype.robotChange = function (newRobot) {
        console.log(newRobot);
        console.log(this.robotOptions);
    };
    EditorComponent.prototype.onSubmit = function () {
        this.router.navigate(["robocode/edit", this.selectedRobots.id]);
    };
    return EditorComponent;
}());
EditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-editor',
        template: __webpack_require__("../../../../../src/app/robocode/editor/editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/robocode/editor/editor.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__robocode_service__["a" /* RobocodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__robocode_service__["a" /* RobocodeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_userinfo_service__["a" /* UserInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_userinfo_service__["a" /* UserInfoService */]) === "function" && _c || Object])
], EditorComponent);

var _a, _b, _c;
//# sourceMappingURL=editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/robocode/editor/legacy-robot/legacy-robot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".CodeMirror  {\r\n  border: 1px solid #eee !important;\r\n  height: 100% !important;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/robocode/editor/legacy-robot/legacy-robot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"form-group\">\n    <button type=\"button\" (click)=\"saveRobot()\" [disabled]=\"isSubmit\" >Save Robot</button>\n  </div>\n\n\n  <div class=\"form-group\">\n    <button type=\"button\" (click)=\"compileRobot()\" [disabled]=\"isSubmit\" >Compile Robot</button>\n  </div>\n\n\n  <div>\n    <label>{{responseMessage}}</label>\n  </div>\n  <div>\n    <codemirror [(ngModel)]=\"content\" [config]=\"config\"></codemirror>\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/robocode/editor/legacy-robot/legacy-robot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LegacyRobotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__robot_model__ = __webpack_require__("../../../../../src/app/robocode/robot.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__robocode_service__ = __webpack_require__("../../../../../src/app/robocode/robocode.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_userinfo_service__ = __webpack_require__("../../../../../src/app/shared/userinfo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_constant__ = __webpack_require__("../../../../../src/app/shared/constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LegacyRobotComponent = (function () {
    function LegacyRobotComponent(robocodeService, route, userInfoService, router) {
        this.robocodeService = robocodeService;
        this.route = route;
        this.userInfoService = userInfoService;
        this.router = router;
        this.isSubmit = false;
        this.hasRobotUpdate = false;
    }
    LegacyRobotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.userInfoService.getCurrentUser();
        if (localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__shared_constant__["a" /* Constant */].ACCESS)) {
            var access = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__shared_constant__["a" /* Constant */].ACCESS));
            access.forEach(function (ac) {
                if (ac.name.toUpperCase() == 'Robot_Update'.toUpperCase()) {
                    _this.hasRobotUpdate = true;
                }
            });
        }
        else {
            console.log("Missing access on editor ");
        }
        this.config = {
            lineNumbers: true,
            mode: 'text/x-java',
            matchBrackets: true,
            viewportMargin: Infinity
        };
        // if (this.robot != null) {
        //   this.content = this.robocodeService.generateRobotStub(this.robot.packageName, this.robot.robotName);
        // }
        this.id = this.route.snapshot.paramMap.get('id');
        this.robocodeService.getRobotById(this.id).subscribe(function (data) {
            _this.robot = new __WEBPACK_IMPORTED_MODULE_1__robot_model__["b" /* Robot */](data);
            if (!_this.hasRobotUpdate || !((_this.robot.userId.toUpperCase() == _this.currentUser.username.toUpperCase()
                && _this.robot.groupId == _this.currentUser.token.group.id))) {
                _this.router.navigate(['/dashboard']);
                return;
            }
            _this.content = _this.robot.robotSrcCode;
        });
    };
    LegacyRobotComponent.prototype.saveRobot = function () {
        var _this = this;
        this.robot.robotSrcCode = this.content;
        this.responseMessage = "";
        this.robocodeService.saveLegacyRobot(this.robot).subscribe(function (res) {
            _this.responseMessage = res.response;
        });
    };
    LegacyRobotComponent.prototype.compileRobot = function () {
        var _this = this;
        this.responseMessage = "";
        this.robocodeService.compileRobot(this.robot).subscribe(function (res) {
            _this.responseMessage = res.response;
        });
    };
    return LegacyRobotComponent;
}());
LegacyRobotComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-legacy-robot',
        template: __webpack_require__("../../../../../src/app/robocode/editor/legacy-robot/legacy-robot.component.html"),
        styles: [__webpack_require__("../../../../../src/app/robocode/editor/legacy-robot/legacy-robot.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__robocode_service__["a" /* RobocodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__robocode_service__["a" /* RobocodeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_userinfo_service__["a" /* UserInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_userinfo_service__["a" /* UserInfoService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _d || Object])
], LegacyRobotComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=legacy-robot.component.js.map

/***/ }),

/***/ "../../../../../src/app/robocode/editor/new-robot/new-robot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".CodeMirror  {\r\n  border: 1px solid #eee !important;\r\n  height: 100% !important;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/robocode/editor/new-robot/new-robot.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"form-group\">\n    <button type=\"button\" (click)=\"saveRobot()\" [disabled]=\"isSubmit\" >Save Robot</button>\n  </div>\n  <div>\n    <label>{{responseMessage}}</label>\n  </div>\n  <div>\n    <codemirror [(ngModel)]=\"content\" [config]=\"config\"></codemirror>\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/robocode/editor/new-robot/new-robot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewRobotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__robot_model__ = __webpack_require__("../../../../../src/app/robocode/robot.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__robocode_service__ = __webpack_require__("../../../../../src/app/robocode/robocode.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_constant__ = __webpack_require__("../../../../../src/app/shared/constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewRobotComponent = (function () {
    function NewRobotComponent(robocodeService, route) {
        this.robocodeService = robocodeService;
        this.route = route;
        this.isSubmit = false;
    }
    NewRobotComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_4__shared_constant__["a" /* Constant */].PRINCIPAL));
        this.config = {
            lineNumbers: true,
            mode: 'text/x-java',
            matchBrackets: true,
            viewportMargin: Infinity
        };
        this.robot = this.robocodeService.robot;
        // if (this.robot != null) {
        //   this.content = this.robocodeService.generateRobotStub(this.robot.packageName, this.robot.robotName);
        // }
        this.packageId = this.route.snapshot.paramMap.get('package');
        this.robotId = this.route.snapshot.paramMap.get('robotName');
        this.content = this.robocodeService.generateRobotStub(this.packageId, this.robotId);
    };
    NewRobotComponent.prototype.saveRobot = function () {
        var _this = this;
        this.isSubmit = true;
        var newRobot = new __WEBPACK_IMPORTED_MODULE_1__robot_model__["d" /* SimpleRobot */]();
        newRobot.packageId = this.packageId;
        newRobot.access = 'Y';
        newRobot.robotId = this.robotId;
        newRobot.robotSrcCode = this.content;
        newRobot.userId = this.currentUser.username;
        this.robocodeService.saveNewRobot(newRobot).subscribe(function (res) {
            _this.responseMessage = res.response;
        });
    };
    return NewRobotComponent;
}());
NewRobotComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-robot',
        template: __webpack_require__("../../../../../src/app/robocode/editor/new-robot/new-robot.component.html"),
        styles: [__webpack_require__("../../../../../src/app/robocode/editor/new-robot/new-robot.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__robocode_service__["a" /* RobocodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__robocode_service__["a" /* RobocodeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], NewRobotComponent);

var _a, _b;
//# sourceMappingURL=new-robot.component.js.map

/***/ }),

/***/ "../../../../../src/app/robocode/robocode.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/robocode/robocode.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"text-center\">\n  <div class=\"footer-above\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <!--  <div class=\"footer-col col-md-4\">-->\n        <h3>About Robocode</h3>\n        <p>\n          Robocode is a programming game where the goal is to code a robot\n          battle tank to compete against other robots in a battle arena. So\n          the name Robocode is a short for \"Robot code\". The player is the\n          programmer of the robot, who will have no direct influence on the\n          game. Instead, the player must write the AI of the robot telling\n          it how to behave and react on events occurring in the battle\n          arena. Battles are running in real-time and on-screen.\n        </p>\n        <!--  </div> -->\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-below\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">Copyright &copy; 2016</div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/robocode/robocode.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RobocodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RobocodeComponent = (function () {
    function RobocodeComponent() {
    }
    RobocodeComponent.prototype.ngOnInit = function () {
    };
    return RobocodeComponent;
}());
RobocodeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-robocode',
        template: __webpack_require__("../../../../../src/app/robocode/robocode.component.html"),
        styles: [__webpack_require__("../../../../../src/app/robocode/robocode.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RobocodeComponent);

//# sourceMappingURL=robocode.component.js.map

/***/ }),

/***/ "../../../../../src/app/robocode/robocode.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RobocodeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_create_component__ = __webpack_require__("../../../../../src/app/robocode/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editor_editor_component__ = __webpack_require__("../../../../../src/app/robocode/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__battle_battle_component__ = __webpack_require__("../../../../../src/app/robocode/battle/battle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__robocode_component__ = __webpack_require__("../../../../../src/app/robocode/robocode.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_codemirror__ = __webpack_require__("../../../../ng2-codemirror/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_codemirror___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_codemirror__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editor_new_robot_new_robot_component__ = __webpack_require__("../../../../../src/app/robocode/editor/new-robot/new-robot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__editor_legacy_robot_legacy_robot_component__ = __webpack_require__("../../../../../src/app/robocode/editor/legacy-robot/legacy-robot.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var RobocodeModule = (function () {
    function RobocodeModule() {
    }
    return RobocodeModule;
}());
RobocodeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_7_ng2_codemirror__["CodemirrorModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__robocode_component__["a" /* RobocodeComponent */],
            __WEBPACK_IMPORTED_MODULE_2__create_create_component__["a" /* CreateComponent */],
            __WEBPACK_IMPORTED_MODULE_3__editor_editor_component__["a" /* EditorComponent */],
            __WEBPACK_IMPORTED_MODULE_4__battle_battle_component__["a" /* BattleComponent */],
            __WEBPACK_IMPORTED_MODULE_8__editor_new_robot_new_robot_component__["a" /* NewRobotComponent */],
            __WEBPACK_IMPORTED_MODULE_9__editor_legacy_robot_legacy_robot_component__["a" /* LegacyRobotComponent */]
        ]
    })
], RobocodeModule);

//# sourceMappingURL=robocode.module.js.map

/***/ }),

/***/ "../../../../../src/app/robocode/robocode.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RobocodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_StringUtil__ = __webpack_require__("../../../../../src/app/utils/StringUtil.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RobocodeService = (function () {
    function RobocodeService(http) {
        this.http = http;
        this.baseUrl = "api/v1/robocode/";
    }
    Object.defineProperty(RobocodeService.prototype, "robot", {
        get: function () {
            return this._robot;
        },
        set: function (robot) {
            this._robot = robot;
        },
        enumerable: true,
        configurable: true
    });
    RobocodeService.prototype.getUsers = function () {
        return this.http.get(this.baseUrl + 'users')
            .map(function (res) { return res.json(); });
    };
    RobocodeService.prototype.getRobotDomainInfo = function () {
        return this.http.get(this.baseUrl + 'domain-info')
            .map(function (res) { return res.json(); });
    };
    RobocodeService.prototype.saveNewRobot = function (newRobot) {
        return this.http.post(this.baseUrl + 'robot/new/save', newRobot)
            .map(function (res) { return res.json(); });
    };
    RobocodeService.prototype.saveLegacyRobot = function (robot) {
        return this.http.post(this.baseUrl + 'robot/save', robot)
            .map(function (res) { return res.json(); });
    };
    RobocodeService.prototype.getRobotById = function (id) {
        return this.http.get(this.baseUrl + 'robot/' + id)
            .map(function (res) { return res.json(); });
    };
    RobocodeService.prototype.getAllRobots = function () {
        return this.http.get(this.baseUrl + 'robots/all')
            .map(function (res) { return res.json(); });
    };
    RobocodeService.prototype.playBattle = function (robotList) {
        return this.http.post(this.baseUrl + 'battle/init', robotList)
            .map(function (res) { return res.json(); });
    };
    RobocodeService.prototype.compileRobot = function (robot) {
        return this.http.get(this.baseUrl + 'robot/' + robot.id + "/compile")
            .map(function (res) { return res.json(); });
    };
    RobocodeService.prototype.generateRobotStub = function (packageName, robotName) {
        robotName = Object(__WEBPACK_IMPORTED_MODULE_3__utils_StringUtil__["a" /* capitalize */])(robotName);
        return "\npackage " + packageName + ";\n\nimport robocode.*;\nimport robocode.HitByBulletEvent;\nimport robocode.Robot;\nimport robocode.ScannedRobotEvent;\n//import java.awt.Color;\n\n// API help: http://robocode.sourceforge.net/docs/robocode/robocode/Robot.html\n\n/**\n * " + robotName + "- a robot by User\n */\npublic class " + robotName + " extends Robot{\n\t/**\n\t * run: " + robotName + " default behavior\n\t */\n\tpublic void run() {\n\t// Initialization of the robot should be put here\n\n\t// After trying out your robot, try uncommenting the import at the top,\n\t// and the next line:\n\n\t// setColors(Color.red,Color.blue,Color.green); // body,gun,radar\n\n\t// Robot main loop\n\t\twhile(true) {\n\t\t\t// Replace the next 4 lines with any behavior you would like\n\t\t\tahead(100);\n\t\t\tturnGunRight(360);\n\t\t\tback(100);\n\t\t\tturnGunRight(360);\n\t\t}\n\t}\n\t/**\n\t * onScannedRobot: What to do when you see another robot\n\t */\n\tpublic void onScannedRobot(ScannedRobotEvent e) {\n\t\t// Replace the next line with any behavior you would like\n\t\tfire(1);\n\t}\n\n\t/**\n\t * onHitByBullet: What to do when you're hit by a bullet\n\t */\n\tpublic void onHitByBullet(HitByBulletEvent e) {\n\t\t// Replace the next line with any behavior you would like\n\t\tback(10);\n\t}\n\t\n\t/**\n\t * onHitWall: What to do when you hit a wall\n\t */\n\tpublic void onHitWall(HitWallEvent e) {\n\t\t// Replace the next line with any behavior you would like\n\t\tback(20);\n\t}\t\n}\n     ";
    };
    return RobocodeService;
}());
RobocodeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], RobocodeService);

var _a;
//# sourceMappingURL=robocode.service.js.map

/***/ }),

/***/ "../../../../../src/app/robocode/robot.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RobotModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RobotViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Domain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SimpleRobot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Robot; });
var RobotModel = (function () {
    function RobotModel(packageName, robotName) {
        this.packageName = packageName;
        this.robotName = robotName;
    }
    return RobotModel;
}());

var RobotViewModel = (function () {
    function RobotViewModel() {
    }
    return RobotViewModel;
}());

var Domain = (function () {
    function Domain(name, packages) {
        this.name = name;
        this.packages = packages;
    }
    return Domain;
}());

var SimpleRobot = (function () {
    function SimpleRobot() {
    }
    return SimpleRobot;
}());

var Robot = (function () {
    function Robot(param) {
        this.id = param.id;
        this.userId = param.userId;
        this.packageId = param.packageId;
        this.robotId = param.robotId;
        this.access = param.access;
        this.filePath = param.filePath;
        this.createdDate = param.createdDate;
        this.updatedDate = param.updatedDate;
        this.robotSrcCode = param.robotSrcCode;
        this.groupId = param.groupId;
    }
    return Robot;
}());

//# sourceMappingURL=robot.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/alert/alert.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\"\n     [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">\n  {{message.text}}\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_service__ = __webpack_require__("../../../../../src/app/shared/alert/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-alert',
        template: __webpack_require__("../../../../../src/app/shared/alert/alert.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/alert/alert.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__alert_service__["a" /* AlertService */]) === "function" && _a || Object])
], AlertComponent);

var _a;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/alert/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    return AlertService;
}());
AlertService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AlertService);

var _a;
//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__("../../../../../src/app/shared/constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__userinfo_service__ = __webpack_require__("../../../../../src/app/shared/userinfo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http, userInfoService) {
        this.http = http;
        this.userInfoService = userInfoService;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post('/api/authenticate', { username: username, password: password })
            .map(function (res) {
            if (!res || res.status != 'success') {
                return null;
            }
            // res = res.json();
            var user = res.data;
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* Constant */].PRINCIPAL, JSON.stringify(user));
            }
            // Retrieve access information.
            var rids = [];
            user.token.roles.forEach(function (role) { return rids.push(role.id); });
            if (localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* Constant */].ACCESS)) {
                return user;
            }
            _this.userInfoService.getAccessByRole(rids).subscribe(function (res) {
                localStorage.setItem(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* Constant */].ACCESS, JSON.stringify(res));
            });
            return user;
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* Constant */].ACCESS);
        localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* Constant */].PRINCIPAL);
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__userinfo_service__["a" /* UserInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__userinfo_service__["a" /* UserInfoService */]) === "function" && _b || Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constant; });
var Constant = (function () {
    function Constant() {
    }
    return Constant;
}());

Constant.PRINCIPAL = 'principal';
Constant.ACCESS = 'access';
//# sourceMappingURL=constant.js.map

/***/ }),

/***/ "../../../../../src/app/shared/global-events-manager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalEventsManagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalEventsManagerService = (function () {
    function GlobalEventsManagerService() {
        this._showNavBar = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.showNavBarEmitter = this._showNavBar.asObservable();
    }
    GlobalEventsManagerService.prototype.showNavBar = function (ifShow) {
        this._showNavBar.next(ifShow);
    };
    return GlobalEventsManagerService;
}());
GlobalEventsManagerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], GlobalEventsManagerService);

//# sourceMappingURL=global-events-manager.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_events_manager_service__ = __webpack_require__("../../../../../src/app/shared/global-events-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant__ = __webpack_require__("../../../../../src/app/shared/constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(router, globalEventsManager) {
        this.router = router;
        this.globalEventsManager = globalEventsManager;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__constant__["a" /* Constant */].PRINCIPAL)) {
            // Logged in
            var currentUser = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__constant__["a" /* Constant */].PRINCIPAL));
            this.globalEventsManager.showNavBar(true);
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__global_events_manager_service__["a" /* GlobalEventsManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__global_events_manager_service__["a" /* GlobalEventsManagerService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/shared/jwt-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__("../../../../../src/app/shared/constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var JwtInterceptor = (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* Constant */].PRINCIPAL));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    return JwtInterceptor;
}());
JwtInterceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], JwtInterceptor);

//# sourceMappingURL=jwt-interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* unused harmony export Token */
/* unused harmony export Group */
/* unused harmony export Role */
var User = (function () {
    function User() {
        this.id = null;
        this.username = '';
        this.password = '';
        this.firstName = '';
        this.lastName = '';
        this.token = null;
    }
    return User;
}());

var Token = (function () {
    function Token() {
    }
    return Token;
}());

var Group = (function () {
    function Group() {
    }
    return Group;
}());

var Role = (function () {
    function Role() {
    }
    return Role;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"showNavBar\" class=\"navbar navbar-expand-sm navbar-inverse\">\n\n    <a class=\"navbar-brand mb-0\" href=\"#\">Robocode</a>\n\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/dashboard\">Dashboard</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/robocode\">About Robocode</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/robocode/create\">Create Robot</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/robocode/edit\">Robot Editor</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/robocode/battle\">Play Battle</a></li>\n    </ul>\n\n    <ul class=\"nav navbar-nav navbar-right\">\n      <!--<li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>-->\n      <li> <a [routerLink]=\"['/login']\"><span class=\"glyphicon glyphicon-log-out\"></span> Logout</a></li>\n    </ul>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_events_manager_service__ = __webpack_require__("../../../../../src/app/shared/global-events-manager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(globalEventsManager) {
        var _this = this;
        this.globalEventsManager = globalEventsManager;
        this.showNavBar = false;
        this.globalEventsManager.showNavBarEmitter.subscribe(function (mode) {
            _this.showNavBar = mode;
        });
    }
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__global_events_manager_service__["a" /* GlobalEventsManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global_events_manager_service__["a" /* GlobalEventsManagerService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get('/api/v1/users');
    };
    UserService.prototype.getById = function (id) {
        return this.http.get('/api/v1/users/' + id);
    };
    UserService.prototype.create = function (user) {
        return this.http.post('/api/v1/users', user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put('/api/v1/users/' + user.id, user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete('/api/users/' + id);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/userinfo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__("../../../../../src/app/shared/constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserInfoService = (function () {
    function UserInfoService(http) {
        this.http = http;
    }
    UserInfoService.prototype.getAccessByRole = function (rids) {
        if (rids === void 0) { rids = []; }
        var body = {};
        body['rids'] = rids;
        return this.http.post('/api/accesses', body);
    };
    UserInfoService.prototype.getCurrentUser = function () {
        return JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* Constant */].PRINCIPAL));
    };
    return UserInfoService;
}());
UserInfoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], UserInfoService);

var _a;
//# sourceMappingURL=userinfo.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = (function () {
    function WelcomeComponent() {
        this.title = 'Robocode';
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-welcome',
        template: "\n\n    <nav class=\"navbar navbar-inverse\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand\" href=\"#\">Robocode</a>\n        </div>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <!--<li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>-->\n          <li>\n            <a [routerLink]=\"['/login']\"><span class=\"glyphicon glyphicon-log-out\"></span> Login</a></li>\n        </ul>\n      </div>\n    </nav>\n    \n    <div style=\"text-align:center\">\n      <h1>\n        Welcome to {{title}}!\n      </h1>\n    </div>\n  ",
        styles: [__webpack_require__("../../../../../src/app/shared/welcome/welcome.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WelcomeComponent);

//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ "../../../../../src/app/utils/StringUtil.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return capitalize; });
var capitalize = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
//# sourceMappingURL=StringUtil.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map