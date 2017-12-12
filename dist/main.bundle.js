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

/***/ "../../../../../src/app/_directives/dialog/dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 999;\n}\n\n.dialog {\n  z-index: 1000;\n  position: fixed;\n  right: 0;\n  left: 0;\n  top: 20px;\n  margin-right: auto;\n  margin-left: auto;\n  min-height: 200px;\n  width: 90%;\n  max-width: 720px;\n  background-color: #fff;\n  padding: 12px;\n  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\n}\n\n@media (min-width: 768px) {\n  .dialog {\n    top: 40px;\n  }\n}\n\n.dialog__close-btn {\n  border: 0;\n  background: none;\n  color: #2d2d2d;\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  font-size: 1.2em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_directives/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@dialog] *ngIf=\"visible\" class=\"dialog\">\n  <ng-content></ng-content>\n  <button *ngIf=\"closable\" (click)=\"close()\" aria-label=\"Close\" class=\"dialog__close-btn\">X</button>\n</div>\n<div *ngIf=\"visible\" class=\"overlay\" (click)=\"close()\"></div>"

/***/ }),

/***/ "../../../../../src/app/_directives/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogComponent = (function () {
    function DialogComponent() {
        this.closable = true;
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DialogComponent.prototype.ngOnInit = function () { };
    DialogComponent.prototype.close = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    return DialogComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DialogComponent.prototype, "closable", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], DialogComponent.prototype, "visible", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], DialogComponent.prototype, "visibleChange", void 0);
DialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dialog',
        template: __webpack_require__("../../../../../src/app/_directives/dialog/dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_directives/dialog/dialog.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('dialog', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* style */])({ transform: 'scale3d(.3, .3, .3)' }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(100)
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* transition */])('* => void', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(100, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* style */])({ transform: 'scale3d(.0, .0, .0)' }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], DialogComponent);

var _a;
//# sourceMappingURL=dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
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
    function AuthenticationService(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.apiLink = __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* appConfig */].apiUrl;
    }
    AuthenticationService.prototype.ngOnInit = function () {
        // Cookie.deleteAll();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
    };
    AuthenticationService.prototype.login = function (EmailID, Password) {
        var _this = this;
        // console.log('inside post')
        var body = { email: EmailID, password: Password };
        var data = JSON.stringify(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiLink + 'api/login', body, options).map(function (response) {
            var cookie = response.headers.get('x-csrf-token');
            // Cookie.set('x-csrf-token',cookie);
            // Cookie.set('jwt',cookie);
            sessionStorage.setItem('x-csrf-token', JSON.stringify(cookie));
            sessionStorage.setItem('jwt', JSON.stringify(cookie));
            return response.json();
        }).subscribe(function (res) {
            console.log(res);
            localStorage.setItem('currentUser', JSON.stringify(res.data));
            _this.router.navigate(['dashboard']);
        }, function (error) {
            console.log(error);
            if (error.status == 0) {
                alert('Internet is slow/down');
            }
            else {
                var err = JSON.parse(error['_body']);
                alert(err.reason);
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        // localstorage
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        this.email = this.user.email;
        this.role_type = this.user.role_type;
        var body = {
            "email": this.email,
            "role_type": this.role_type
        };
        // const csrf = Cookie.getAll();
        // const cook = csrf['x-csrf-token'];
        // console.log(cook);
        var cook = JSON.parse(sessionStorage.getItem('x-csrf-token'));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'X-CSRF-TOKEN': cook });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // console.log(options);
        return this.http.post(this.apiLink + 'api/logout', body, options).subscribe(function (response) {
            // console.log(response);
            // Cookie.deleteAll();
            sessionStorage.removeItem('x-csrf-token');
            sessionStorage.removeItem('jwt');
            _this.router.navigateByUrl('/login');
        }),
            function (error) {
                console.log("logout failed");
                alert("error");
            };
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["ActivatedRoute"]) === "function" && _c || Object])
], AuthenticationService);

var _a, _b, _c;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService() {
        this.messageSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.currentMessage = this.messageSource.asObservable();
    }
    DataService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], DataService);

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/function.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FunctionService; });
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

var FunctionService = (function () {
    function FunctionService() {
    }
    // function for avoid only space submit
    FunctionService.prototype.NoWhitespaceValidator = function (formName, inputName) {
        // console.log(formName,inputName);
        var isWhitespace = (formName.controls[inputName].value || '').trim().length === 0;
        var isValid = !isWhitespace;
        // console.log(isValid);
        if (!isValid) {
            formName.controls[inputName].setValue('');
        }
        return isValid ? null : { 'whitespace': true };
    };
    return FunctionService;
}());
FunctionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], FunctionService);

//# sourceMappingURL=function.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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
        this.apiLink = __WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiUrl;
        this.TokenNo = '';
    }
    // *********************************** USER SERVICES ******************************************//
    // get all token
    UserService.prototype.getCSRF = function () {
        // const csrf = Cookie.getAll();
        this.xcsrf = JSON.parse(sessionStorage.getItem('x-csrf-token'));
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'X-CSRF-TOKEN': this.xcsrf, 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    // User API
    // get list of admin,qe,ce and customer
    UserService.prototype.getUserList = function (role_type) {
        this.getCSRF();
        return this.http.get(this.apiLink + 'api/users?role_type=' + role_type, this.options)
            .map(function (response) { return response.json(); });
    };
    // Create User
    UserService.prototype.createUser = function (user) {
        this.getCSRF();
        var data = JSON.stringify(user);
        console.log(data);
        return this.http.post(this.apiLink + 'api/users', data, this.options)
            .map(function (response) { return response.json(); });
    };
    // Delete user
    UserService.prototype.deleteUser = function (id) {
        this.getCSRF();
        return this.http.delete(this.apiLink + 'api/users/' + id, this.options)
            .map(function (response) { return response; });
    };
    // Update User
    UserService.prototype.updateUser = function (user) {
        this.getCSRF();
        var id = user.id;
        delete user['id'];
        if (user.password == null) {
            delete user['password'];
        }
        var data = JSON.stringify(user);
        console.log(data);
        return this.http.put(this.apiLink + 'api/users/' + id, data, this.options)
            .map(function (response) { return response.json(); });
    };
    // Category
    // get list of main category ,category and sub category
    // for main category category_level =1 , category_level = 2
    UserService.prototype.getCategoryList = function (Level) {
        this.getCSRF();
        return this.http.get(this.apiLink + 'api/categories?category_level=' + Level, this.options)
            .map(function (response) { return response.json(); });
    };
    // get category list by category id
    UserService.prototype.getSubCategoryList = function (catID) {
        this.getCSRF();
        return this.http.get(this.apiLink + 'api/categories/' + catID, this.options)
            .map(function (response) { return response.json(); });
    };
    // Create Main category
    UserService.prototype.createMainCategory = function (category) {
        this.getCSRF();
        var data = JSON.stringify(category);
        console.log(data);
        return this.http.post(this.apiLink + 'api/categories', data, this.options).map(function (response) { return response.json(); });
    };
    // Create category form
    UserService.prototype.createCategoryForm = function (category) {
        console.log(category, "bhia cat");
        this.getCSRF();
        var id = category.category_id;
        delete category['category_id'];
        var data = JSON.stringify(category);
        console.log(data);
        return this.http.post(this.apiLink + 'api/categories/', data, this.options).map(function (response) { return response.json(); });
    };
    // Update Main category
    UserService.prototype.updateCategory = function (category) {
        var id = category.category_id;
        this.getCSRF();
        delete category['category_id'];
        delete category['ref_id'];
        var data = JSON.stringify(category);
        return this.http.put(this.apiLink + 'api/categories/' + id, data, this.options).map(function (response) { return response.json(); });
    };
    // Delete Category
    UserService.prototype.deleteCategory = function (id) {
        this.getCSRF();
        return this.http.delete(this.apiLink + 'api/categories/' + id, this.options).map(function (response) { return response; });
    };
    //Create colors
    UserService.prototype.createColor = function (category) {
        this.getCSRF();
        var data = JSON.stringify(category);
        console.log(data);
        return this.http.post(this.apiLink + 'api/colours', data, this.options).map(function (response) { return response.json(); });
    };
    //Get colors
    UserService.prototype.getColorList = function () {
        this.getCSRF();
        return this.http.get(this.apiLink + 'api/colours?status=1', this.options)
            .map(function (response) { return response.json(); });
    };
    // Update Color
    UserService.prototype.updateColor = function (category) {
        console.log(category, "colorId");
        var id = category.colour_id;
        this.getCSRF();
        delete category['colour_id'];
        var data = JSON.stringify(category);
        console.log(data);
        return this.http.put(this.apiLink + 'api/colours/' + id, data, this.options)
            .map(function (response) { return response.json(); });
    };
    // Delete Color
    UserService.prototype.deleteColor = function (category) {
        var id = category.colour_id;
        this.getCSRF();
        return this.http.delete(this.apiLink + 'api/colours/' + id, this.options).map(function (response) { return response.json(); });
    };
    // Create detail
    UserService.prototype.createDetail = function (category) {
        // get login user credentials from localstorage
        this.getCSRF();
        var data = JSON.stringify(category);
        console.log('final', data);
        return this.http.post(this.apiLink + 'api/detailtypes', data, this.options).map(function (response) { return response.json(); });
    };
    //get details
    UserService.prototype.getDetailList = function () {
        // get login user credentials from localstorage
        this.getCSRF();
        return this.http.get(this.apiLink + 'api/detailtypes', this.options)
            .map(function (response) { return response.json(); });
    };
    // Update details
    UserService.prototype.updateDetail = function (category) {
        var id = category.id;
        console.log(category, "updetail");
        this.getCSRF();
        delete category['type'];
        delete category['id'];
        var data = JSON.stringify(category);
        console.log(data);
        return this.http.put(this.apiLink + 'api/detailtypes/' + id, data, this.options).map(function (response) { return response.json(); });
    };
    // Delete detail
    UserService.prototype.deleteDetail = function (category) {
        var id = category.id;
        this.getCSRF();
        return this.http.delete(this.apiLink + 'api/detailtypes/' + id, this.options).map(function (response) { return response.json(); });
    };
    // Online Seller
    // get online seller list
    UserService.prototype.getOnlineSellerList = function () {
        this.getCSRF();
        return this.http.get(this.apiLink + 'api/onlineSeller', this.options)
            .map(function (response) { return response.json(); });
    };
    // Create online seller
    UserService.prototype.createOnlineSeller = function (OnlineSeller) {
        this.getCSRF();
        var data = JSON.stringify(OnlineSeller);
        console.log(data);
        return this.http.post(this.apiLink + 'api/onlineSeller', data, this.options).map(function (response) { return response.json(); });
    };
    // Delete online seller
    UserService.prototype.deleteOnlineSeller = function (sellerId) {
        this.getCSRF();
        return this.http.delete(this.apiLink + 'api/onlineSeller/' + sellerId, this.options).map(function (response) { return response.json(); });
    };
    // Update online seller
    UserService.prototype.updateOnlineSeller = function (OnlineSeller) {
        var sid = OnlineSeller.sid;
        this.getCSRF();
        delete OnlineSeller['sid'];
        var data = JSON.stringify(OnlineSeller);
        console.log(data);
        return this.http.put(this.apiLink + 'api/onlineSeller/' + sid, data, this.options).map(function (response) { return response.json(); });
    };
    // offline seller
    // get offline seller list
    UserService.prototype.getOfflineSellerList = function () {
        this.getCSRF();
        return this.http.get(this.apiLink + 'api/offlineSeller', this.options)
            .map(function (response) { return response.json(); });
    };
    // get offline seller list by query
    UserService.prototype.getOfflineSellerListByQuery = function (query) {
        this.getCSRF();
        return this.http.get(this.apiLink + 'api/offlineSeller?seller_name=' + query, this.options)
            .map(function (response) { return response.json(); });
    };
    // get details of offline seller by id
    UserService.prototype.getOfflineSellerDetailsbyID = function (ID) {
        this.getCSRF();
        return this.http.get(this.apiLink + 'api/offlineSeller/' + ID, this.options)
            .map(function (response) { return response.json(); });
    };
    // Create offline seller
    UserService.prototype.createOfflineSeller = function (OfflineSeller) {
        Object.keys(OfflineSeller).forEach(function (key) { return (OfflineSeller[key] == '' || OfflineSeller[key] == null) && delete OfflineSeller[key]; });
        this.getCSRF();
        var data = JSON.stringify(OfflineSeller);
        console.log(data);
        return this.http.post(this.apiLink + 'api/offlineSeller', data, this.options).map(function (response) { return response.json(); });
    };
    // Update offline seller
    UserService.prototype.updateOfflineSeller = function (OfflineSeller) {
        Object.keys(OfflineSeller).forEach(function (key) { return (OfflineSeller[key] == '' || OfflineSeller[key] == null) && delete OfflineSeller[key]; });
        var sid = OfflineSeller.sid;
        this.getCSRF();
        delete OfflineSeller['sid'];
        var data = JSON.stringify(OfflineSeller);
        console.log(data);
        return this.http.put(this.apiLink + 'api/offlineSeller/' + sid, data, this.options).map(function (response) { return response.json(); });
    };
    // Delete offline seller
    UserService.prototype.deleteOfflineSeller = function (sellerId) {
        this.getCSRF();
        return this.http.delete(this.apiLink + 'api/offlineSeller/' + sellerId, this.options).map(function (response) { return response; });
    };
    // Brand
    // get All brand list
    UserService.prototype.getAllBrandList = function (off) {
        this.getCSRF();
        return this.http.get(this.apiLink + 'api/brands?limit=50&offset=' + off, this.options)
            .map(function (response) { return response.json(); });
    };
    // get active brand list
    UserService.prototype.getBrandList = function () {
        this.getCSRF();
        return this.http.get(this.apiLink + 'api/brands?status=1', this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.getBrandListByCategory = function (catID) {
        this.getCSRF();
        return this.http.get(this.apiLink + 'api/brands?category_id=' + catID + '&status=1', this.options)
            .map(function (response) { return response.json(); });
    };
    // Create Brand
    UserService.prototype.createBrand = function (brand) {
        this.getCSRF();
        var data = JSON.stringify(brand);
        console.log(data);
        return this.http.post(this.apiLink + 'api/brands', data, this.options).map(function (response) { return response.json(); });
    };
    // Delete brand
    UserService.prototype.deleteBrand = function (brandId) {
        this.getCSRF();
        return this.http.delete(this.apiLink + 'api/brands/' + brandId, this.options).map(function (response) { return response; });
    };
    // get details of brand by id
    UserService.prototype.getBrandDetailsbyID = function (ID) {
        this.getCSRF();
        return this.http.get(this.apiLink + 'api/brands/' + ID, this.options)
            .map(function (response) { return response.json(); });
    };
    // Update brand
    UserService.prototype.updateBrand = function (dataa, arr) {
        // console.log
        var id = dataa.brand_id;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].id == "") {
                arr[i].id = undefined;
            }
        }
        this.getCSRF();
        delete dataa['brand_id'];
        var data = JSON.stringify(dataa);
        console.log(data);
        return this.http.put(this.apiLink + 'api/brands/' + id, data, this.options).map(function (response) { return response.json(); });
    };
    //remove brand details
    UserService.prototype.removeBrandDetails = function (asc, center) {
        console.log(asc.id);
        // const center_id=center.id;
        var id = asc.id;
        this.getCSRF();
        return this.http.delete(this.apiLink + 'api/brands/' + center + '/details/' + id, this.options)
            .map(function (response) { return response.json(); });
    };
    // get authorized service center list
    UserService.prototype.getAuthorizedServiceCenterList = function (off) {
        this.getCSRF();
        return this.http.get(this.apiLink + 'api/servicecenters?limit=100&offset=' + off, this.options)
            .map(function (response) { return response.json(); });
    };
    // Create authorized service center
    UserService.prototype.createAuthorizedServiceCenter = function (asc) {
        this.getCSRF();
        var data = JSON.stringify(asc);
        console.log(data);
        return this.http.post(this.apiLink + 'api/servicecenters', data, this.options).map(function (response) { return response.json(); });
    };
    // Delete authorized service center
    UserService.prototype.DeleteAuthorizedServiceCenter = function (center_id) {
        this.getCSRF();
        return this.http.delete(this.apiLink + 'api/servicecenters/' + center_id, this.options).map(function (response) { return response; });
    };
    // get details of authorized service center by id
    UserService.prototype.getAuthorizedServiceCenterByID = function (ID) {
        this.getCSRF();
        return this.http.get(this.apiLink + 'api/servicecenters/' + ID, this.options)
            .map(function (response) { return response.json(); });
    };
    // Update authorized service center
    UserService.prototype.updateAuthorizedServiceCenter = function (asc, arr) {
        console.log(asc, arr, "seller online");
        var id = asc.center_id;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].id == "") {
                arr[i].id = undefined;
            }
        }
        this.getCSRF();
        delete asc['center_id'];
        var data = JSON.stringify(asc);
        console.log(data);
        return this.http.put(this.apiLink + 'api/servicecenters/' + id, data, this.options)
            .map(function (response) { return response.json(); });
    };
    //remove asc details
    UserService.prototype.removeAscDetails = function (asc, center) {
        console.log(asc.id);
        var center_id = center.id;
        var id = asc.id;
        this.getCSRF();
        return this.http.delete(this.apiLink + 'api/servicecenters/' + center_id + '/details/' + id, this.options)
            .map(function (response) { return response.json(); });
    };
    // get list of new,under-progress and completed list
    // get admin list
    UserService.prototype.getAdminJobList = function (BillType, off) {
        this.getCSRF();
        return this.http.get(this.apiLink + 'api/jobs?admin_status=' + BillType + '&limit=20&offset=' + off, this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.getFilteredJobList = function (BillType, filter) {
        this.getCSRF();
        return this.http.get(this.apiLink + 'api/jobs?admin_status=' + BillType + filter, this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.getDayLeftJobList = function (BillType, day) {
        this.getCSRF();
        return this.http.get(this.apiLink + 'api/jobs?admin_status=' + BillType + '&job_day=' + day, this.options)
            .map(function (response) { return response.json(); });
    };
    // getFilteredQEJobList(BillType: Number, id) {
    //         this.getCSRF();
    //         return this.http.get(this.apiLink + 'api/jobs?admin_status=' + BillType + '&assigned_to_qe=' + id, this.options)
    //                 .map((response: Response) => response.json());
    // }
    // get CE JOB list
    UserService.prototype.getCEJobList = function (BillType, id, off) {
        console.log(BillType, id, "bill type");
        this.getCSRF();
        return this.http.get(this.apiLink + 'api/jobs?ce_status=' + BillType + '&assigned_to_ce=' + id + '&limit=20&offset=' + off, this.options)
            .map(function (response) { return response.json(); });
    };
    // get CE JOB list
    UserService.prototype.getQEJobList = function (BillType, id, off) {
        this.getCSRF();
        return this.http.get(this.apiLink + 'api/jobs?qe_status=' + BillType + '&assigned_to_qe=' + id + '&limit=20&offset=' + off, this.options)
            .map(function (response) { return response.json(); });
    };
    // discard job
    UserService.prototype.discardConsumerJOB = function (req) {
        this.getCSRF();
        var jobID = req['id'];
        delete req['id'];
        return this.http.put(this.apiLink + 'api/jobs/' + jobID + '/discard', req, this.options)
            .map(function (response) { return response.json(); });
    };
    // Assign job to CE
    UserService.prototype.assignJobCE = function (task) {
        console.log(task, "task");
        this.getCSRF();
        // const id=task['id']
        var jobID = task['jobId'];
        var ceID = task['UID'];
        delete task['BID'];
        delete task['UID'];
        var data = JSON.stringify(task);
        console.log(data);
        return this.http.put(this.apiLink + 'api/jobs/' + jobID + '/ce/' + ceID, data, this.options)
            .map(function (response) { return response.json(); });
    };
    // Assign job to QE
    UserService.prototype.assignJobQE = function (task) {
        console.log(task, "task");
        this.getCSRF();
        var jobID = task['jobId'];
        var qeID = task['UID'];
        delete task['BID'];
        delete task['UID'];
        var data = JSON.stringify(task);
        console.log(data);
        return this.http.put(this.apiLink + 'api/jobs/' + jobID + '/qe/' + qeID, data, this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.completeJobByAdmin = function (jobId, comment) {
        this.getCSRF();
        var data = { 'comments': comment };
        return this.http.put(this.apiLink + 'api/jobs/' + jobId + '/complete', data, this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.getJobByID = function (billID) {
        this.getCSRF();
        return this.http.get(this.apiLink + 'api/jobs/' + billID, this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.createBill = function (bill) {
        console.log(bill);
        Object.keys(bill).forEach(function (key) { return (bill[key] == '' || bill[key] == null) && delete bill[key]; });
        this.getCSRF();
        var data = JSON.stringify(bill);
        console.log(data);
        return this.http.post(this.apiLink + 'api/bills', data, this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.verifyBill = function (bill_id) {
        this.getCSRF();
        var data = { 'status_type': 5 };
        return this.http.put(this.apiLink + 'api/bills/' + bill_id, data, this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.deleteBill = function (billId) {
        this.getCSRF();
        return this.http.delete(this.apiLink + 'api/bills/' + billId, this.options)
            .map(function (response) { return response; });
    };
    UserService.prototype.getProductList = function (userId) {
        this.getCSRF();
        return this.http.get(this.apiLink + 'api/products?user_id=' + userId, this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.getCustomProductList = function (userId) {
        this.getCSRF();
        return this.http.get(this.apiLink + 'api/products?user_id=' + userId + '&status_type=11', this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.getProductDetailById = function (pid) {
        this.getCSRF();
        return this.http.get(this.apiLink + 'api/products/' + pid, this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.createProduct = function (prod) {
        this.getCSRF();
        var billId = prod.billId;
        delete prod['billId'];
        Object.keys(prod).forEach(function (key) { return (prod[key] == '' || prod[key] == null) && delete prod[key]; });
        var data = JSON.stringify(prod);
        console.log(data);
        return this.http.post(this.apiLink + 'api/bills/' + billId + '/products', data, this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.updateProduct = function (prod) {
        console.log("prod", prod);
        this.getCSRF();
        var billId = prod.billId;
        var prodId = prod.productId;
        delete prod['billId'];
        delete prod['productId'];
        Object.keys(prod).forEach(function (key) { return (prod[key] == '' || prod[key] == null) && delete prod[key]; });
        var data = JSON.stringify(prod);
        console.log(data);
        return this.http.put(this.apiLink + 'api/bills/' + billId + '/products/' + prodId, data, this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.linkProduct = function (jobId, billId, prodId) {
        this.getCSRF();
        return this.http.put(this.apiLink + 'api/bills/' + null + '/products/' + prodId, { 'bill_id': billId, 'job_id': jobId }, this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.unLinkProduct = function (prodId) {
        this.getCSRF();
        return this.http.put(this.apiLink + 'api/products/' + prodId + '/unlink', {}, this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.deleteProduct = function (billId, id) {
        this.getCSRF();
        return this.http.delete(this.apiLink + 'api/bills/' + billId + '/products/' + id, this.options)
            .map(function (response) { return response; });
    };
    UserService.prototype.verifyProduct = function (bill_id, product_id) {
        this.getCSRF();
        var data = { 'status_type': 5 };
        return this.http.put(this.apiLink + 'api/bills/' + bill_id + '/products/' + product_id, data, this.options)
            .map(function (response) { return response.json(); });
    };
    /* UnverifyProduct
    *  @author: Shubham Nigam
    *  lastWorkedOn: 12/12/2017
    */
    UserService.prototype.unverifyProduct = function (product_id) {
        this.getCSRF();
        var data = { 'status_type': 11 };
        return this.http.put(this.apiLink + 'api/products/' + product_id + '/unverify', data, this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.productMetaData = function (billId, prodId) {
        this.getCSRF();
        // console.log(billId,prodId);
        return this.http.get(this.apiLink + 'api/bills/' + billId + '/products/' + prodId, this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.createWarranty = function (war) {
        this.getCSRF();
        var product_id = war.product_id;
        delete war['product_id'];
        Object.keys(war).forEach(function (key) { return (war[key] == '' || war[key] == null) && delete war[key]; });
        var data = JSON.stringify(war);
        console.log(data);
        return this.http.post(this.apiLink + 'api/products/' + product_id + '/warranties', data, this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.updateWarranty = function (war) {
        this.getCSRF();
        var warId = war['warrantyId'];
        var product_id = war.product_id;
        delete war['product_id'];
        delete war['warrantyId'];
        Object.keys(war).forEach(function (key) { return (war[key] == '' || war[key] == null) && delete war[key]; });
        var data = JSON.stringify(war);
        console.log(data);
        return this.http.put(this.apiLink + 'api/products/' + product_id + '/warranties/' + warId, data, this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.deleteWarranty = function (product_id, id) {
        this.getCSRF();
        return this.http.delete(this.apiLink + 'api/products/' + product_id + '/warranties/' + id, this.options)
            .map(function (response) { return response; });
    };
    UserService.prototype.verifyWarranty = function (product_id, warId) {
        this.getCSRF();
        var data = { 'status_type': 5 };
        return this.http.put(this.apiLink + 'api/products/' + product_id + '/warranties/' + warId, data, this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.updateInsurance = function (ins) {
        this.getCSRF();
        var insId = ins['insuranceId'];
        var product_id = ins.product_id;
        delete ins['product_id'];
        delete ins['insuranceId'];
        Object.keys(ins).forEach(function (key) { return (ins[key] == '' || ins[key] == null) && delete ins[key]; });
        var data = JSON.stringify(ins);
        console.log(data);
        return this.http.put(this.apiLink + 'api/products/' + product_id + '/insurances/' + insId, data, this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.deleteInsurance = function (product_id, id) {
        this.getCSRF();
        return this.http.delete(this.apiLink + 'api/products/' + product_id + '/insurances/' + id, this.options)
            .map(function (response) { return response; });
    };
    UserService.prototype.verifyInsurance = function (product_id, insId) {
        this.getCSRF();
        var data = { 'status_type': 5 };
        return this.http.put(this.apiLink + 'api/products/' + product_id + '/insurances/' + insId, data, this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.createInsurance = function (ins) {
        this.getCSRF();
        var product_id = ins.product_id;
        delete ins['product_id'];
        Object.keys(ins).forEach(function (key) { return (ins[key] == '' || ins[key] == null) && delete ins[key]; });
        var data = JSON.stringify(ins);
        console.log(data);
        return this.http.post(this.apiLink + 'api/products/' + product_id + '/insurances', data, this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.createAmc = function (amc) {
        this.getCSRF();
        var product_id = amc.product_id;
        delete amc['product_id'];
        Object.keys(amc).forEach(function (key) { return (amc[key] == '' || amc[key] == null) && delete amc[key]; });
        var data = JSON.stringify(amc);
        console.log(data);
        return this.http.post(this.apiLink + 'api/products/' + product_id + '/amcs', data, this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.updateAmc = function (amc) {
        this.getCSRF();
        var amcId = amc['amcId'];
        var product_id = amc.product_id;
        delete amc['product_id'];
        delete amc['amcId'];
        Object.keys(amc).forEach(function (key) { return (amc[key] == '' || amc[key] == null) && delete amc[key]; });
        var data = JSON.stringify(amc);
        console.log(data);
        return this.http.put(this.apiLink + 'api/products/' + product_id + '/amcs/' + amcId, data, this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.deleteAmc = function (product_id, id) {
        this.getCSRF();
        return this.http.delete(this.apiLink + 'api/products/' + product_id + '/amcs/' + id, this.options)
            .map(function (response) { return response; });
    };
    UserService.prototype.verifyAmc = function (product_id, amcId) {
        this.getCSRF();
        var data = { 'status_type': 5 };
        return this.http.put(this.apiLink + 'api/products/' + product_id + '/amcs/' + amcId, data, this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.createRepair = function (rep) {
        this.getCSRF();
        var product_id = rep.product_id;
        delete rep['product_id'];
        Object.keys(rep).forEach(function (key) { return (rep[key] == '' || rep[key] == null) && delete rep[key]; });
        var data = JSON.stringify(rep);
        console.log(data);
        return this.http.post(this.apiLink + 'api/products/' + product_id + '/repairs', data, this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.updateRepair = function (rep) {
        this.getCSRF();
        var repairId = rep['repairId'];
        var product_id = rep.product_id;
        delete rep['product_id'];
        delete rep['repairId'];
        Object.keys(rep).forEach(function (key) { return (rep[key] == '' || rep[key] == null) && delete rep[key]; });
        var data = JSON.stringify(rep);
        console.log(data);
        return this.http.put(this.apiLink + 'api/products/' + product_id + '/repairs/' + repairId, data, this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.deleteRepair = function (product_id, id) {
        this.getCSRF();
        return this.http.delete(this.apiLink + 'api/products/' + product_id + '/repairs/' + id, this.options)
            .map(function (response) { return response; });
    };
    UserService.prototype.verifyRepair = function (product_id, repairId) {
        this.getCSRF();
        var data = { 'status_type': 5 };
        return this.http.put(this.apiLink + 'api/products/' + product_id + '/repairs/' + repairId, data, this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.updateBill = function (bill) {
        this.getCSRF();
        Object.keys(bill).forEach(function (key) { return (bill[key] == '' || bill[key] == null) && delete bill[key]; });
        var billId = bill.id;
        delete bill['id'];
        var data = JSON.stringify(bill);
        console.log(data);
        return this.http.put(this.apiLink + 'api/bills/' + billId, data, this.options)
            .map(function (response) { return response.json(); });
    };
    // final JOB complete
    UserService.prototype.completeJob = function (jobID, ceID) {
        this.getCSRF();
        var data = {};
        return this.http.put(this.apiLink + 'api/jobs/' + jobID + '/ce/' + ceID + '/complete', data, this.options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.completeJobQE = function (jobID, ceID) {
        this.getCSRF();
        var data = {};
        return this.http.put(this.apiLink + 'api/jobs/' + jobID + '/qe/' + ceID + '/complete', data, this.options)
            .map(function (response) { return response.json(); });
    };
    //  JOB reassigned
    UserService.prototype.reassignJob = function (jobID, data) {
        this.getCSRF();
        return this.http.put(this.apiLink + 'api/jobs/' + jobID + '/reassign', data, this.options)
            .map(function (response) { return response.json(); });
    };
    // get list of active ce
    UserService.prototype.ActiveCE = function () {
        this.getCSRF();
        return this.http.get(this.apiLink + 'api/users?status=1&role_type=4', this.options)
            .map(function (response) { return response.json(); });
    };
    // get list of active qe
    UserService.prototype.ActiveQE = function () {
        this.getCSRF();
        return this.http.get(this.apiLink + 'api/users?status=1&role_type=3', this.options)
            .map(function (response) { return response.json(); });
    };
    //discard bill image
    UserService.prototype.discardConsumerBillImage = function (req) {
        console.log(req);
        this.getCSRF();
        var jobId = req.BID;
        var fileId = req.ImageID;
        delete req['BID'];
        delete req['ImageID'];
        var data = JSON.stringify(req);
        console.log(data);
        return this.http.put(this.apiLink + 'api/jobs/' + jobId + '/files/' + fileId, data, this.options)
            .map(function (response) { return response.json(); });
    };
    //*******************************OLD API ***************************************************/
    // get different type of user
    UserService.prototype.getAllUser = function () {
        // get login user credentials from localstorage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.TokenNo = this.currentUser.token;
        this.UserType = this.currentUser.UserType;
        var body = { TokenNo: this.TokenNo, UserType: this.UserType };
        var data = JSON.stringify(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // console.log(data);
        return this.http.post(this.apiLink + 'Services/UserTypeList', data, options).map(function (response) { return response.json(); });
    };
    // get list of admin,qe,ce and customer
    UserService.prototype.getConsumerList = function (offset, limit) {
        // get login user credentials from localstorage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.TokenNo = this.currentUser.token;
        this.UserType = this.currentUser.UserType;
        var body = { TokenNo: this.TokenNo, OffSet: offset, Limit: limit };
        var data = JSON.stringify(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // console.log(data);
        return this.http.post(this.apiLink + 'Services/ConsumerList', data, options)
            .map(function (response) { return response.json(); });
    };
    // **^ category Services ^** //
    // get category form
    UserService.prototype.getCategoryFormByID = function (ID) {
        // get login user credentials from localstorage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.TokenNo = this.currentUser.token;
        this.UserType = this.currentUser.UserType;
        var body = { TokenNo: this.TokenNo, ID: ID };
        var data = JSON.stringify(body);
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // console.log(data);
        return this.http.post(this.apiLink + 'Services/CategoryFormByID', data, options)
            .map(function (response) { return response.json(); });
    };
    // get list of main category ,category and sub category
    UserService.prototype.getCategoryListbyID = function (ID) {
        // get login user credentials from localstorage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.TokenNo = this.currentUser.token;
        this.UserType = this.currentUser.UserType;
        var body = { TokenNo: this.TokenNo, ID: ID };
        var data = JSON.stringify(body);
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // console.log(data);
        return this.http.post(this.apiLink + 'Services/CategoryFormByID', data, options)
            .map(function (response) { return response.json(); });
    };
    //  get category list after select main category
    UserService.prototype.getCategoryListbyRefID = function (RefID) {
        // get login user credentials from localstorage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.TokenNo = this.currentUser.token;
        this.UserType = this.currentUser.UserType;
        var body = { TokenNo: this.TokenNo, RefID: RefID };
        var data = JSON.stringify(body);
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // console.log(data);
        return this.http.post(this.apiLink + 'Services/CategoryList', data, options)
            .map(function (response) { return response.json(); });
    };
    // Create category
    UserService.prototype.editCategoryForm = function (category) {
        // get login user credentials from localstorage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.TokenNo = this.currentUser.token;
        this.UserType = this.currentUser.UserType;
        category['TokenNo'] = this.TokenNo;
        var data = JSON.stringify(category);
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiLink + 'Services/EditCategoryForm', data, options).map(function (response) { return response.json(); });
    };
    // get brand list
    UserService.prototype.getBrandList2 = function (offset, limit) {
        // get login user credentials from localstorage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.TokenNo = this.currentUser.token;
        this.UserType = this.currentUser.UserType;
        var body = { TokenNo: this.TokenNo, OffSet: offset, Limit: limit };
        var data = JSON.stringify(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(data);
        return this.http.post(this.apiLink + 'Services/BrandList', data, options)
            .map(function (response) { return response.json(); });
    };
    // **^ online seller Services ^** //
    // get details of online seller by id
    UserService.prototype.getOnlineSellerDetailsbyID = function (ID) {
        // get login user credentials from localstorage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.TokenNo = this.currentUser.token;
        this.UserType = this.currentUser.UserType;
        var body = { TokenNo: this.TokenNo, ID: ID };
        var data = JSON.stringify(body);
        // console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // console.log(data);
        return this.http.post(this.apiLink + 'Services/OnlineSellerByID', data, options)
            .map(function (response) { return response.json(); });
    };
    // **^ offline seller Services ^** //
    // **^ Inclusions Services ^** //
    // get list of inclusions
    UserService.prototype.getInclusionsList = function () {
        // get login user credentials from localstorage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.TokenNo = this.currentUser.token;
        this.UserType = this.currentUser.UserType;
        var body = { TokenNo: this.TokenNo };
        var data = JSON.stringify(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // console.log(data);
        return this.http.post(this.apiLink + 'Services/InclusionsList', data, options)
            .map(function (response) { return response.json(); });
    };
    // get list of inclusions by category id
    UserService.prototype.getInclusionsListbyCategoryID = function (RefID) {
        // get login user credentials from localstorage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.TokenNo = this.currentUser.token;
        this.UserType = this.currentUser.UserType;
        var body = { TokenNo: this.TokenNo, RefID: RefID };
        var data = JSON.stringify(body);
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // console.log(data);
        return this.http.post(this.apiLink + 'Services/InclusionsListByCategoryID', data, options)
            .map(function (response) { return response.json(); });
    };
    // Create category
    UserService.prototype.createInclusions = function (category) {
        // get login user credentials from localstorage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.TokenNo = this.currentUser.token;
        this.UserType = this.currentUser.UserType;
        category['TokenNo'] = this.TokenNo;
        var data = JSON.stringify(category);
        console.log('final', data);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiLink + 'Services/AddInclusions', data, options).map(function (response) { return response.json(); });
    };
    // Update category
    UserService.prototype.updateInclusions = function (category) {
        // get login user credentials from localstorage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.TokenNo = this.currentUser.token;
        this.UserType = this.currentUser.UserType;
        category['TokenNo'] = this.TokenNo;
        var data = JSON.stringify(category);
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiLink + 'Services/EditInclusions', data, options).map(function (response) { return response.json(); });
    };
    // Delete Category
    UserService.prototype.deleteInclusions = function (category) {
        // get login user credentials from localstorage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.TokenNo = this.currentUser.token;
        this.UserType = this.currentUser.UserType;
        category['TokenNo'] = this.TokenNo;
        var data = JSON.stringify(category);
        console.log('final data', data);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiLink + 'Services/DeleteInclusions', data, options).map(function (response) { return response.json(); });
    };
    // **^ Exclusion Services ^** //
    // get list of main category ,category and sub category
    // get list of exclusions by category id
    UserService.prototype.getExclusionsListbyCategoryID = function (RefID) {
        // get login user credentials from localstorage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.TokenNo = this.currentUser.token;
        this.UserType = this.currentUser.UserType;
        var body = { TokenNo: this.TokenNo, RefID: RefID };
        var data = JSON.stringify(body);
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // console.log(data);
        return this.http.post(this.apiLink + 'Services/ExclusionsListByCategoryID', data, options)
            .map(function (response) { return response.json(); });
    };
    // **^ authorized service center Services ^** //
    // **^ Bill  Services ^** //
    // **^ Bill Form  Services ^** //
    UserService.prototype.editBill = function (bill) {
        // get login user credentials from localstorage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.TokenNo = this.currentUser.token;
        this.UserType = this.currentUser.UserType;
        bill['TokenNo'] = this.TokenNo;
        var data = JSON.stringify(bill);
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiLink + 'Services/EditConsumerBill', data, options);
    };
    UserService.prototype.getConsumerBillDetailsByID = function (billID) {
        // get login user credentials from localstorage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.TokenNo = this.currentUser.token;
        this.UserType = this.currentUser.UserType;
        var body = { TokenNo: this.TokenNo, ID: billID };
        var data = JSON.stringify(body);
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiLink + 'Services/ConsumerBillDetailByID', data, options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.serachProduct = function (search) {
        // get login user credentials from localstorage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.TokenNo = this.currentUser.token;
        this.UserType = this.currentUser.UserType;
        search['TokenNo'] = this.TokenNo;
        var data = JSON.stringify(search);
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiLink + 'Services/ConsumerProductSearch', data, options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.addConsumerProduct = function (data) {
        // get login user credentials from localstorage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.TokenNo = this.currentUser.token;
        this.UserType = this.currentUser.UserType;
        data['TokenNo'] = this.TokenNo;
        var body = JSON.stringify(data);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiLink + 'Services/AddConsumerProduct', body, options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.consumerBillProductByID = function (id) {
        // get login user credentials from localstorage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.TokenNo = this.currentUser.token;
        this.UserType = this.currentUser.UserType;
        var body = { TokenNo: this.TokenNo, ID: id };
        var data = JSON.stringify(body);
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiLink + 'Services/ConsumerBillProductByID', data, options)
            .map(function (response) { return response.json(); });
    };
    // **^ QE  Services ^** //
    UserService.prototype.taskCompleteQE = function (billID) {
        // get login user credentials from localstorage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.TokenNo = this.currentUser.token;
        this.UserType = this.currentUser.UserType;
        var body = { TokenNo: this.TokenNo, BID: billID };
        var data = JSON.stringify(body);
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiLink + 'Services/TaskCompleteQE', data, options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.qeAssignCE = function (req) {
        // get login user credentials from localstorage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.TokenNo = this.currentUser.token;
        this.UserType = this.currentUser.UserType;
        req['TokenNo'] = this.TokenNo;
        var data = JSON.stringify(req);
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiLink + 'Services/QEAssignedCE', data, options)
            .map(function (response) { return response.json(); });
    };
    // discardConsumerBillImage(req: any) {
    //         // get login user credentials from localstorage
    //         this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //         this.TokenNo = this.currentUser.token;
    //         this.UserType = this.currentUser.UserType;
    //         req['TokenNo'] = this.TokenNo;
    //         const data = JSON.stringify(req);
    //         console.log(data);
    //         const headers = new Headers({ 'Content-Type': 'application/json' });
    //         const options = new RequestOptions({ headers: headers });
    //         return this.http.post(this.apiLink + 'Services/DiscardConsumerBillImage', data, options)
    //                 .map((response: Response) => response.json());
    // }
    // get image of consumer
    UserService.prototype.getConsumerImage = function (imageID) {
        // get login user credentials from localstorage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.TokenNo = this.currentUser.token;
        this.UserType = this.currentUser.UserType;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'image/jpeg', 'Authorization': this.TokenNo });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers, responseType: __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* ResponseContentType */].Blob });
        return this.http.get(this.apiLink + 'bill-copies/' + imageID + '/files', options)
            .map(function (res) {
            return res.blob();
        });
    };
    UserService.prototype.deleteCategoryForm = function (formID) {
        // get login user credentials from localstorage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.TokenNo = this.currentUser.token;
        this.UserType = this.currentUser.UserType;
        var body = { TokenNo: this.TokenNo, FormID: formID, DeleteAll: true };
        var data = JSON.stringify(body);
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiLink + 'Services/DeleteCategoryForm', data, options)
            .map(function (response) { return response.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_data_panel_job_management_bill_view_bill_view_bill_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/job-management/bill/view-bill/view-bill.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_data_panel_job_management_discarded_discarded_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/job-management/discarded/discarded.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_data_panel_job_management_bill_create_bill_create_bill_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/job-management/bill/create-bill/create-bill.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_data_panel_job_management_completed_completed_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/job-management/completed/completed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_data_panel_job_management_under_progress_under_progress_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/job-management/under-progress/under-progress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_data_panel_job_management_new_new_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/job-management/new/new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_data_panel_service_center_management_service_center_list_service_center_list_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/service-center-management/service-center-list/service-center-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_data_panel_service_center_management_add_service_center_add_service_center_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/service-center-management/add-service-center/add-service-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_data_panel_list_management_list_management_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/list-management/list-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_data_panel_seller_management_online_seller_list_online_seller_list_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/seller-management/online-seller-list/online-seller-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_data_panel_seller_management_add_online_seller_add_online_seller_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/seller-management/add-online-seller/add-online-seller.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_data_panel_seller_management_offline_seller_list_offline_seller_list_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/seller-management/offline-seller-list/offline-seller-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_data_panel_seller_management_add_offline_seller_add_offline_seller_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/seller-management/add-offline-seller/add-offline-seller.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_data_panel_brand_brand_list_brand_list_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/brand/brand-list/brand-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_data_panel_brand_add_brand_add_brand_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/brand/add-brand/add-brand.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dashboard_data_panel_category_sub_category_sub_category_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/category/sub-category/sub-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dashboard_data_panel_category_category_category_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/category/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dashboard_data_panel_category_main_category_main_category_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/category/main-category/main-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dashboard_data_panel_user_management_admin_admin_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/user-management/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__dashboard_data_panel_user_management_add_user_add_user_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/user-management/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__dashboard_data_panel_user_management_qe_qe_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/user-management/qe/qe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__dashboard_data_panel_user_management_ce_ce_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/user-management/ce/ce.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__dashboard_data_panel_user_management_customer_customer_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/user-management/customer/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__dashboard_data_panel_home_home_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__dashboard_data_panel_color_color_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/color/color.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__sign_in_sign_in_component__ = __webpack_require__("../../../../../src/app/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























// routers
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_27__sign_in_sign_in_component__["a" /* SignInComponent */], pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_27__sign_in_sign_in_component__["a" /* SignInComponent */], pathMatch: 'full' },
    {
        path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_25__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]], children: [{ path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_24__dashboard_data_panel_home_home_component__["a" /* HomeComponent */] },
            { path: 'new', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_data_panel_job_management_new_new_component__["a" /* NewComponent */] },
            { path: 'new/create/:id', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_data_panel_job_management_bill_create_bill_create_bill_component__["a" /* CreateBillComponent */] },
            { path: 'new/view/:id', component: __WEBPACK_IMPORTED_MODULE_0__dashboard_data_panel_job_management_bill_view_bill_view_bill_component__["a" /* ViewBillComponent */] },
            { path: 'underProgress', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_data_panel_job_management_under_progress_under_progress_component__["a" /* UnderProgressComponent */] },
            { path: 'underProgress/create/:id', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_data_panel_job_management_bill_create_bill_create_bill_component__["a" /* CreateBillComponent */] },
            { path: 'underProgress/view/:id', component: __WEBPACK_IMPORTED_MODULE_0__dashboard_data_panel_job_management_bill_view_bill_view_bill_component__["a" /* ViewBillComponent */] },
            { path: 'completed', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_data_panel_job_management_completed_completed_component__["a" /* CompletedComponent */] },
            { path: 'completed/view/:id', component: __WEBPACK_IMPORTED_MODULE_0__dashboard_data_panel_job_management_bill_view_bill_view_bill_component__["a" /* ViewBillComponent */] },
            { path: 'discarded', component: __WEBPACK_IMPORTED_MODULE_1__dashboard_data_panel_job_management_discarded_discarded_component__["a" /* DiscardedComponent */] },
            { path: 'AddUser', component: __WEBPACK_IMPORTED_MODULE_19__dashboard_data_panel_user_management_add_user_add_user_component__["a" /* AddUserComponent */] },
            { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_18__dashboard_data_panel_user_management_admin_admin_component__["a" /* AdminComponent */] },
            { path: 'customer', component: __WEBPACK_IMPORTED_MODULE_22__dashboard_data_panel_user_management_customer_customer_component__["a" /* CustomerComponent */] },
            { path: 'ce', component: __WEBPACK_IMPORTED_MODULE_21__dashboard_data_panel_user_management_ce_ce_component__["a" /* CeComponent */] },
            { path: 'qe', component: __WEBPACK_IMPORTED_MODULE_20__dashboard_data_panel_user_management_qe_qe_component__["a" /* QeComponent */] },
            { path: 'mainCategory', component: __WEBPACK_IMPORTED_MODULE_17__dashboard_data_panel_category_main_category_main_category_component__["a" /* MainCategoryComponent */] },
            { path: 'category', component: __WEBPACK_IMPORTED_MODULE_16__dashboard_data_panel_category_category_category_component__["a" /* CategoryComponent */] },
            { path: 'subCategory', component: __WEBPACK_IMPORTED_MODULE_15__dashboard_data_panel_category_sub_category_sub_category_component__["a" /* SubCategoryComponent */] },
            { path: 'addBrand', component: __WEBPACK_IMPORTED_MODULE_14__dashboard_data_panel_brand_add_brand_add_brand_component__["a" /* AddBrandComponent */] },
            { path: 'brandList', component: __WEBPACK_IMPORTED_MODULE_13__dashboard_data_panel_brand_brand_list_brand_list_component__["a" /* BrandListComponent */] },
            { path: 'addOffline', component: __WEBPACK_IMPORTED_MODULE_12__dashboard_data_panel_seller_management_add_offline_seller_add_offline_seller_component__["a" /* AddOfflineSellerComponent */] },
            { path: 'offlineList', component: __WEBPACK_IMPORTED_MODULE_11__dashboard_data_panel_seller_management_offline_seller_list_offline_seller_list_component__["a" /* OfflineSellerListComponent */] },
            { path: 'addOnline', component: __WEBPACK_IMPORTED_MODULE_10__dashboard_data_panel_seller_management_add_online_seller_add_online_seller_component__["a" /* AddOnlineSellerComponent */] },
            { path: 'onlineList', component: __WEBPACK_IMPORTED_MODULE_9__dashboard_data_panel_seller_management_online_seller_list_online_seller_list_component__["a" /* OnlineSellerListComponent */] },
            { path: 'color', component: __WEBPACK_IMPORTED_MODULE_26__dashboard_data_panel_color_color_component__["a" /* ColorComponent */] },
            { path: 'addServiceCenter', component: __WEBPACK_IMPORTED_MODULE_7__dashboard_data_panel_service_center_management_add_service_center_add_service_center_component__["a" /* AddServiceCenterComponent */] },
            { path: 'serviceCenterList', component: __WEBPACK_IMPORTED_MODULE_6__dashboard_data_panel_service_center_management_service_center_list_service_center_list_component__["a" /* ServiceCenterListComponent */] },
            { path: 'list-details', component: __WEBPACK_IMPORTED_MODULE_8__dashboard_data_panel_list_management_list_management_component__["a" /* ListManagementComponent */] }
        ]
    }
    // otherwise redirect to home
    // { path: '**', redirectTo: 'login' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_29__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_28__angular_router__["RouterModule"].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_28__angular_router__["RouterModule"]]
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

module.exports = "        <router-outlet></router-outlet>\n\n"

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
    AppComponent.prototype.ngOnInit = function () {
    };
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

/***/ "../../../../../src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appConfig; });
var appConfig = {
    apiUrl: 'https://admin-stage.binbill.com/',
    // apiUrl: 'https://admin-prod.binbill.com/',
    // apiUrl: 'https://admin.binbill.com/',
    // apiUrl: 'https://192.168.0.66:8080/',
    // apiUrl: ' http://de759f5d.ngrok.io/',
    imageUrl: 'https://consumer-dev.binbill.com/'
    // imageUrl :'https://consumer.binbill.com/'
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_function_service__ = __webpack_require__("../../../../../src/app/_services/function.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/_services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_data_panel_service_center_management_service_center_list_service_center_list_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/service-center-management/service-center-list/service-center-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_data_panel_service_center_management_add_service_center_add_service_center_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/service-center-management/add-service-center/add-service-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_left_panel_left_panel_items_left_panel_items_component__ = __webpack_require__("../../../../../src/app/dashboard/left-panel/left-panel-items/left-panel-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_data_panel_home_home_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__sign_in_sign_in_component__ = __webpack_require__("../../../../../src/app/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dashboard_header_header_component__ = __webpack_require__("../../../../../src/app/dashboard/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__dashboard_left_panel_left_panel_component__ = __webpack_require__("../../../../../src/app/dashboard/left-panel/left-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__dashboard_data_panel_data_panel_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/data-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__dashboard_data_panel_user_management_customer_customer_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/user-management/customer/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__dashboard_data_panel_user_management_ce_ce_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/user-management/ce/ce.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__dashboard_data_panel_user_management_qe_qe_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/user-management/qe/qe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__dashboard_data_panel_user_management_add_user_add_user_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/user-management/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__dashboard_data_panel_user_management_admin_admin_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/user-management/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__directives_dialog_dialog_component__ = __webpack_require__("../../../../../src/app/_directives/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__dashboard_data_panel_category_category_category_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/category/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__dashboard_data_panel_category_main_category_main_category_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/category/main-category/main-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__dashboard_data_panel_category_sub_category_sub_category_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/category/sub-category/sub-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__dashboard_data_panel_brand_add_brand_add_brand_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/brand/add-brand/add-brand.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__dashboard_data_panel_brand_brand_list_brand_list_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/brand/brand-list/brand-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__dashboard_data_panel_seller_management_add_offline_seller_add_offline_seller_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/seller-management/add-offline-seller/add-offline-seller.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__dashboard_data_panel_seller_management_add_online_seller_add_online_seller_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/seller-management/add-online-seller/add-online-seller.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__dashboard_data_panel_seller_management_online_seller_list_online_seller_list_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/seller-management/online-seller-list/online-seller-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__dashboard_data_panel_seller_management_offline_seller_list_offline_seller_list_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/seller-management/offline-seller-list/offline-seller-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__dashboard_data_panel_color_color_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/color/color.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__dashboard_data_panel_job_management_new_new_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/job-management/new/new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__dashboard_data_panel_job_management_completed_completed_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/job-management/completed/completed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__dashboard_data_panel_job_management_under_progress_under_progress_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/job-management/under-progress/under-progress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_angular2_useful_swiper__ = __webpack_require__("../../../../angular2-useful-swiper/lib/swiper.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_angular2_useful_swiper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40_angular2_useful_swiper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_mydatepicker__ = __webpack_require__("../../../../mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__dashboard_data_panel_job_management_discarded_discarded_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/job-management/discarded/discarded.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_angular2_draggable__ = __webpack_require__("../../../../angular2-draggable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_ng2_modal__ = __webpack_require__("../../../../ng2-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_ng2_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_45_ng2_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_ng2_order_pipe__ = __webpack_require__("../../../../ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_46_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_47_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48_ng2_select__ = __webpack_require__("../../../../ng2-select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48_ng2_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_48_ng2_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__dashboard_data_panel_list_management_list_management_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/list-management/list-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__dashboard_data_panel_job_management_bill_create_bill_create_bill_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/job-management/bill/create-bill/create-bill.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__dashboard_data_panel_job_management_bill_view_bill_view_bill_component__ = __webpack_require__("../../../../../src/app/dashboard/data-panel/job-management/bill/view-bill/view-bill.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// import { MdButtonModule, MdCheckboxModule } from '@angular/material';



































// import { JobManagementComponent } from './dashboard/data-panel/job-management/job-management.component';



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_13__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_15__sign_in_sign_in_component__["a" /* SignInComponent */],
            __WEBPACK_IMPORTED_MODULE_17__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_18__dashboard_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_19__dashboard_left_panel_left_panel_component__["a" /* LeftPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_20__dashboard_data_panel_data_panel_component__["a" /* DataPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_data_panel_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__dashboard_left_panel_left_panel_items_left_panel_items_component__["a" /* LeftPanelItemsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__dashboard_data_panel_user_management_customer_customer_component__["a" /* CustomerComponent */],
            __WEBPACK_IMPORTED_MODULE_22__dashboard_data_panel_user_management_ce_ce_component__["a" /* CeComponent */],
            __WEBPACK_IMPORTED_MODULE_23__dashboard_data_panel_user_management_qe_qe_component__["a" /* QeComponent */],
            __WEBPACK_IMPORTED_MODULE_24__dashboard_data_panel_user_management_add_user_add_user_component__["a" /* AddUserComponent */],
            __WEBPACK_IMPORTED_MODULE_25__dashboard_data_panel_user_management_admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_26__directives_dialog_dialog_component__["a" /* DialogComponent */],
            __WEBPACK_IMPORTED_MODULE_27__dashboard_data_panel_category_category_category_component__["a" /* CategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_28__dashboard_data_panel_category_main_category_main_category_component__["a" /* MainCategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_29__dashboard_data_panel_category_sub_category_sub_category_component__["a" /* SubCategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_30__dashboard_data_panel_brand_add_brand_add_brand_component__["a" /* AddBrandComponent */],
            __WEBPACK_IMPORTED_MODULE_31__dashboard_data_panel_brand_brand_list_brand_list_component__["a" /* BrandListComponent */],
            __WEBPACK_IMPORTED_MODULE_32__dashboard_data_panel_seller_management_add_offline_seller_add_offline_seller_component__["a" /* AddOfflineSellerComponent */],
            __WEBPACK_IMPORTED_MODULE_33__dashboard_data_panel_seller_management_add_online_seller_add_online_seller_component__["a" /* AddOnlineSellerComponent */],
            __WEBPACK_IMPORTED_MODULE_34__dashboard_data_panel_seller_management_online_seller_list_online_seller_list_component__["a" /* OnlineSellerListComponent */],
            __WEBPACK_IMPORTED_MODULE_35__dashboard_data_panel_seller_management_offline_seller_list_offline_seller_list_component__["a" /* OfflineSellerListComponent */],
            __WEBPACK_IMPORTED_MODULE_36__dashboard_data_panel_color_color_component__["a" /* ColorComponent */],
            // ExclusionsComponent,
            // InclusionsComponent,
            __WEBPACK_IMPORTED_MODULE_3__dashboard_data_panel_service_center_management_add_service_center_add_service_center_component__["a" /* AddServiceCenterComponent */],
            __WEBPACK_IMPORTED_MODULE_2__dashboard_data_panel_service_center_management_service_center_list_service_center_list_component__["a" /* ServiceCenterListComponent */],
            __WEBPACK_IMPORTED_MODULE_37__dashboard_data_panel_job_management_new_new_component__["a" /* NewComponent */],
            __WEBPACK_IMPORTED_MODULE_38__dashboard_data_panel_job_management_completed_completed_component__["a" /* CompletedComponent */],
            __WEBPACK_IMPORTED_MODULE_39__dashboard_data_panel_job_management_under_progress_under_progress_component__["a" /* UnderProgressComponent */],
            __WEBPACK_IMPORTED_MODULE_43__dashboard_data_panel_job_management_discarded_discarded_component__["a" /* DiscardedComponent */],
            // JobManagementComponent,
            __WEBPACK_IMPORTED_MODULE_49__dashboard_data_panel_list_management_list_management_component__["a" /* ListManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_50__dashboard_data_panel_job_management_bill_create_bill_create_bill_component__["a" /* CreateBillComponent */],
            __WEBPACK_IMPORTED_MODULE_51__dashboard_data_panel_job_management_bill_view_bill_view_bill_component__["a" /* ViewBillComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["ReactiveFormsModule"],
            // MdButtonModule,
            // MdCheckboxModule,
            __WEBPACK_IMPORTED_MODULE_12__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_16__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_40_angular2_useful_swiper__["SwiperModule"],
            __WEBPACK_IMPORTED_MODULE_41_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_42_mydatepicker__["MyDatePickerModule"],
            __WEBPACK_IMPORTED_MODULE_44_angular2_draggable__["a" /* AngularDraggableModule */],
            __WEBPACK_IMPORTED_MODULE_45_ng2_modal__["ModalModule"],
            __WEBPACK_IMPORTED_MODULE_46_ng2_order_pipe__["Ng2OrderModule"],
            __WEBPACK_IMPORTED_MODULE_47_ng2_search_filter__["Ng2SearchPipeModule"],
            __WEBPACK_IMPORTED_MODULE_48_ng2_select__["SelectModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_0__services_function_service__["a" /* FunctionService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section.content{\n    margin: 100px 15px 0 210px !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"{{theme}}\">\n  <app-header></app-header>\n  <section>\n    <app-left-panel></app-left-panel>\n  </section>\n  <section class=\"content\">\n    <app-data-panel></app-data-panel>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // console.log(currentUser); 
        if (currentUser.role_type == '1') {
            this.theme = 'theme-teal';
        }
        else if (currentUser.role_type == '2') {
            this.theme = 'theme-teal';
        }
        else if (currentUser.role_type == '4') {
            this.theme = 'theme-deep-purple';
        }
        else if (currentUser.role_type == '3') {
            this.theme = 'theme-green';
        }
        else if (currentUser.role_type == '5') {
            this.theme = 'theme-teal';
        }
        else if (currentUser.role_type == '6') {
            this.theme = 'theme-teal';
        }
        else if (currentUser.role_type == '7') {
            this.theme = 'theme-teal';
        }
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/brand/add-brand/add-brand.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin-right{\n    margin-right: 25px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/brand/add-brand/add-brand.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"header\">\n    <h2>\n      Add New Brand\n    </h2>\n  </div>\n  <div class=\"body\">\n    <form class=\"form-horizontal\" [formGroup]='brandForm' (ngSubmit)=\"createBrand(brandForm.value)\">\n      <div class=\"row clearfix\">\n        <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n          <label for=\"name\">Name</label>\n        </div>\n        <div class=\"col-lg-10 col-md-10 col-sm-8 col-xs-7\">\n          <div class=\"form-group\">\n            <div class=\"form-line\">\n              <input type=\"text\" formControlName=\"brand_name\" class=\"form-control\" placeholder=\"Enter brand name here\" (keyup)=\"avoidSpace('brand_name')\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row clearfix\">\n        <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n          <label for=\"description\">Description</label>\n        </div>\n        <div class=\"col-lg-10 col-md-10 col-sm-8 col-xs-7\">\n          <div class=\"form-group\">\n            <div class=\"form-line\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"brand_description\" placeholder=\"Enter description of brand\" (keyup)=\"avoidSpace('brand_description')\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- template for add row  -->\n      <div class=\"row clearfix\">\n        <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n          <label for=\"Details\">Details</label>\n        </div>\n        <div class=\"pull-right margin-right\">\n          <button type=\"button\" class=\"btn btn-info m-t-15 waves-effect\" (click)=\"addItem()\">Add More Deatils</button>\n        </div>\n      </div>\n      <div class=\"panel panel-default\">\n        <div formArrayName=\"details\" *ngFor=\"let item of brandForm.controls.details['controls']; let i = index;\">\n          <br>\n          <div class=\"row clearfix\" [formGroupName]=\"i\">\n            <div class=\"col-md-3 col-lg-3 col-md-offset-1\">\n            <label>\n                Category\n            </label>\n              <select class=\"form-control dropdown\" formControlName=\"category_id\">\n                <option>Select</option>\n                <option *ngFor=\"let list of cat?.data\" [ngValue]=\"list.category_id\">{{ list.category_name }}</option>\n              </select>\n            </div>\n            <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6 \">\n              <label>\n                    Detail Type\n                </label>\n              <select class=\"form-control dropdown\" formControlName=\"detail_type\">\n                    <option selected>Select</option>\n                    <option *ngFor=\"let list of detailType?.data\" [ngValue]=\"list.id\">{{ list?.title }}</option>                    \n            </select>\n            </div>\n            <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6 \">\n              <label>\n                    Value\n                </label>\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"text\" class=\"form-control\" formControlName=\"value\" placeholder=\"Enter display name\">\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-6\">\n              <button type=\"button\" class=\"btn btn-danger m-t-15 waves-effect\" *ngIf=\"brandForm.controls['details'].length > 1\" (click)=\"removeDetails(i)\">Remove</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- template for add row end  -->\n      <div class=\"row clearfix\">\n        <div class=\" col-lg-3 col-md-3 col-lg-offset-8 col-md-offset-8 col-sm-offset-4 col-xs-offset-5\">\n          <button type=\"submit\" class=\"btn btn-lg btn-success btn-block m-t-15 waves-effect\" [disabled]=\"!brandForm.valid\">Submit</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/brand/add-brand/add-brand.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBrandComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_function_service__ = __webpack_require__("../../../../../src/app/_services/function.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddBrandComponent = (function () {
    // items: Brand [] = [];
    function AddBrandComponent(userService, fb, functionService) {
        this.userService = userService;
        this.fb = fb;
        this.functionService = functionService;
    }
    AddBrandComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.brandForm = this.fb.group({
            'brand_name': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            'brand_description': '',
            details: this.fb.array([this.createItem(),])
        });
        // get list of category
        this.userService.getCategoryList(2) // 2 for category refer to api doc
            .subscribe(function (getCat) {
            _this.cat = getCat;
            console.log(getCat, "category list");
        });
        // get list of detail type
        this.userService.getDetailList()
            .subscribe(function (detail_type) {
            _this.detailType = detail_type;
            console.log(_this.detailType);
        });
    };
    AddBrandComponent.prototype.createItem = function () {
        return this.fb.group({
            'category_id': '',
            'detail_type': '',
            'value': ''
        });
    };
    AddBrandComponent.prototype.addItem = function () {
        var control = this.brandForm.controls['details'];
        control.push(this.createItem());
    };
    AddBrandComponent.prototype.removeDetails = function (i) {
        var control = this.brandForm.controls['details'];
        control.removeAt(i);
    };
    AddBrandComponent.prototype.createBrand = function (data) {
        var _this = this;
        console.log(data);
        this.userService.createBrand(data)
            .subscribe(function (res) {
            console.log(res);
            alert('New Brand added succesfully');
            _this.brandForm.reset();
        }, function (error) {
            console.log(error);
            var err = JSON.parse(error['_body']);
            alert(err.reason);
        });
    };
    // function for avoid only space submit
    AddBrandComponent.prototype.avoidSpace = function (e) {
        console.log(e);
        this.functionService.NoWhitespaceValidator(this.brandForm, e);
    };
    return AddBrandComponent;
}());
AddBrandComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-add-brand',
        template: __webpack_require__("../../../../../src/app/dashboard/data-panel/brand/add-brand/add-brand.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/data-panel/brand/add-brand/add-brand.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_function_service__["a" /* FunctionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_function_service__["a" /* FunctionService */]) === "function" && _c || Object])
], AddBrandComponent);

var _a, _b, _c;
//# sourceMappingURL=add-brand.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/brand/brand-list/brand-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin-right{\n    margin-right: 25px;\n}\n.pager{\n    text-align: right;\n}\n.disabled{\n    display: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/brand/brand-list/brand-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"showBrandList\">\n    <div class=\"header\">\n      <h2>\n        Brand List\n        <small> For change the Brand details click on the edit button</small>\n      </h2>\n    </div>\n    <div class=\"body table-responsive\">\n      <nav>\n        <ul class=\"pager\">\n          <li [ngClass]=\"{ 'disabled': leftFlag }\"><a class=\"waves-effect\" (click)=\"left()\" >Previous</a></li>\n          <li [ngClass]=\"{ 'disabled': rightFlag }\"><a class=\"waves-effect\" (click)=\"right()\">Next</a></li>\n        </ul>\n      </nav>\n      <table class=\"table table-condensed table-bordered\" *ngIf=\"!noData; else elseBlock\">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>Name</th>\n            <th>Description</th>\n            <th>Status</th>\n            <th>Action</th>\n          </tr>\n        </thead>\n        <tbody *ngFor=\"let list of brands?.data; let i = index\">\n          <tr>\n            <th scope=\"row\">{{ i+1+offset}}</th>\n            <td>{{ list?.brand_name }}</td>\n            <td>{{ list?.brand_description }}</td>\n            <td *ngIf=\"list?.status_type=='1'\"><span class=\"label bg-green\">Active</span></td>\n            <td *ngIf=\"list?.status_type=='2'\"><span class=\"label bg-red\">InActive</span></td>\n            <td><span class=\"btn btn-info btn-circle waves-effect waves-circle waves-float\" (click)=\"openBrandModel(list)\" title=\"Edit\"><i class=\"material-icons\" >mode_edit</i></span><span class=\"btn btn-danger btn-circle waves-effect waves-circle waves-float\" (click)=\"deleteBrand(list?.brand_id)\" title=\"Delete\"><i class=\"material-icons\">delete</i></span></td>            \n            <!-- <td><span class=\"btn btn-info btn-circle waves-effect waves-circle waves-float\" (click)=\"openBrandModel(list)\" title=\"Edit\"><i class=\"material-icons\" >mode_edit</i></span></td> -->\n          </tr>\n        </tbody>\n      </table>\n      <ng-template #elseBlock>\n        <h4> No Data Available </h4>\n        </ng-template>\n    </div>\n</div>\n<div class=\"card\" *ngIf=\"!showBrandList\">\n    <div class=\"modal-header\">\n      <button class=\"btn bg-blue\" (click)=\"back()\">Back</button>\n      <hr>\n      <h4 class=\"modal-title text-center bg-grey\" id=\"smallModalLabel\">Edit Brand</h4>\n    </div>\n    <div class=\"modal-body\">\n      <form class=\"form-horizontal\" [formGroup]='editBrandForm' (ngSubmit)=\"updateBrand(editBrandForm.value)\">\n        <div class=\"row clearfix\">\n          <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n            <label for=\"name\">Name</label>\n          </div>\n          <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n            <div class=\"form-group\">\n              <div class=\"form-line\">\n                <input type=\"text\" formControlName=\"brand_name\" class=\"form-control\" placeholder=\"Enter brand name here\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row clearfix\">\n          <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n            <label for=\"description\">Description</label>\n          </div>\n          <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n            <div class=\"form-group\">\n              <div class=\"form-line\">\n                <input type=\"text\" class=\"form-control\" formControlName=\"brand_description\" placeholder=\"Enter description of brand\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- template for add row  -->\n        <div class=\"row clearfix\">\n          <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n            <label for=\"Details\">Details</label>\n          </div>\n          <div class=\"pull-right margin-right\">\n            <button type=\"button\" class=\"btn btn-info m-t-15 waves-effect\" (click)=\"addItem()\">Add More</button>\n          </div>\n        </div>\n        <br>\n        <div class=\"panel panel-default\">\n          <div formArrayName=\"details\" *ngFor=\"let item of editBrandForm.controls.details['controls']; let i = index;\">\n            <br>\n            <div class=\"row clearfix\" [formGroupName]=\"i\">\n              <div class=\"col-md-3 col-lg-3 col-md-offset-1\">\n              <label>\n                  Category\n              </label>\n                <select class=\"form-control dropdown\" formControlName=\"category_id\">\n                  <option>Select</option>\n                  <option *ngFor=\"let list of cat?.data\" [ngValue]=\"list.category_id\">{{ list?.category_name }}</option>\n                </select>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6 \">\n                <label>\n                      Detail Type\n                  </label>\n                <select class=\"form-control dropdown\" formControlName=\"detail_type\">\n                      <option selected>Select</option>\n                      <option *ngFor=\"let list of detailType?.data\" [ngValue]=\"list.id\">{{ list?.title }}</option>                    \n              </select>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6 \">\n                <label>\n                      Value\n                  </label>\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <input type=\"text\" class=\"form-control\" formControlName=\"value\" placeholder=\"Enter display name\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-6\">\n                <button type=\"button\" class=\"btn btn-danger m-t-15 waves-effect\" *ngIf=\"editBrandForm.controls['details'].length > 1\" (click)=\"removeDetails(i);removeItem(item,editBrandForm.value)\">Remove</button>\n              </div>\n            </div>\n            <br>\n          </div>\n        </div>\n        <!-- template for add row end  -->\n        <div class=\"row clearfix\">\n          <div class=\" col-lg-3 col-md-3 col-lg-offset-8 col-md-offset-8 col-sm-offset-4 col-xs-offset-5\">\n            <button type=\"submit\" class=\"btn btn-lg btn-success btn-block m-t-15 waves-effect\" [disabled]=\"!editBrandForm.valid\">Submit</button>\n          </div>\n        </div>\n      </form>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/brand/brand-list/brand-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrandListComponent = (function () {
    function BrandListComponent(userService, fb) {
        this.userService = userService;
        this.fb = fb;
        this.offset = 0;
        this.leftFlag = true;
        this.rightFlag = false;
        this.noData = false;
        this.showBrandList = true;
        this.center = [];
    }
    BrandListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get list of category
        this.userService.getCategoryList(2) // 2 for category refer to api doc
            .subscribe(function (getCat) {
            _this.cat = getCat;
            console.log('category is ' + getCat);
        });
        this.editBrandForm = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormGroup"]({
            brand_name: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"](''),
            brand_description: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"](''),
            brand_id: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"](''),
            details: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormArray"]([])
        });
        this.userService.getAllBrandList(this.offset)
            .subscribe(function (brandList) {
            _this.brands = brandList;
            console.log(_this.brands);
        });
        // get list of detail type
        this.userService.getDetailList()
            .subscribe(function (detail_type) {
            _this.detailType = detail_type;
            console.log(_this.detailType);
        });
    };
    // function for pagination
    BrandListComponent.prototype.left = function () {
        var _this = this;
        this.leftFlag = true;
        this.rightFlag = false;
        this.noData = false;
        if (this.offset > 1) {
            this.offset = this.offset - 50;
            this.leftFlag = false;
        }
        this.userService.getAllBrandList(this.offset)
            .subscribe(function (brandList) {
            console.log(brandList.statusCode);
            _this.rightFlag = false;
            _this.brands = brandList;
            console.log(_this.brands);
        });
    };
    BrandListComponent.prototype.right = function () {
        var _this = this;
        this.noData = false;
        this.leftFlag = false;
        this.offset = this.offset + 50;
        this.userService.getAllBrandList(this.offset)
            .subscribe(function (brandList) {
            console.log(brandList, "brandlist");
            if (brandList.data.length == 0) {
                _this.rightFlag = true;
                _this.noData = true;
            }
            _this.brands = brandList;
            console.log(_this.brands);
        });
    };
    // function for add row in detials field
    BrandListComponent.prototype.createItem = function () {
        return this.fb.group({
            'id': [null],
            'category_id': [null],
            'detail_type': [null],
            'value': [null]
        });
    };
    BrandListComponent.prototype.addItem = function () {
        var control = this.editBrandForm.controls['details'];
        control.push(this.createItem());
    };
    BrandListComponent.prototype.removeDetails = function (i) {
        var control = this.editBrandForm.controls['details'];
        control.removeAt(i);
    };
    BrandListComponent.prototype.removeItem = function (item, data) {
        console.log(data, "bhai data");
        console.log(item, data, "brandsssss");
        this.center = data.brand_id;
        console.log(item, item['_value'], "catId");
        this.brand = item['_value'];
        this.userService.removeBrandDetails(this.brand, this.center)
            .subscribe(function (res) {
            console.log(res);
            alert('Detail deleted successfully');
        });
    };
    // passs current brand id as argument and open the popup
    BrandListComponent.prototype.openBrandModel = function (item) {
        var _this = this;
        console.log(item);
        // reset  editBrand form
        this.editBrandForm = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormGroup"]({
            brand_name: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"](''),
            brand_description: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"](''),
            brand_id: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"](''),
            details: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormArray"]([])
        });
        // get information of current selected brand
        this.userService.getBrandDetailsbyID(item.brand_id)
            .subscribe(function (res) {
            console.log(res);
            _this.showBrandList = false;
            // prop autofill data to form
            _this.editBrandForm.controls['brand_id'].setValue(res.data.brand_id);
            _this.editBrandForm.controls['brand_name'].setValue(res.data.brand_name);
            _this.editBrandForm.controls['brand_description'].setValue(res.data.brand_description);
            res.data.details.forEach(function (po) {
                _this.editBrandForm.controls['details'].push(_this.createDetailsFormGroup(po));
            });
        });
    };
    BrandListComponent.prototype.createDetailsFormGroup = function (payOffObj) {
        console.log(payOffObj);
        return new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormGroup"]({
            id: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"](payOffObj.id),
            category_id: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"](payOffObj.category_id),
            detail_type: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"](payOffObj.detail_type),
            value: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"](payOffObj.value)
        });
    };
    BrandListComponent.prototype.updateBrand = function (data) {
        var _this = this;
        console.log(data);
        this.center = data.details;
        console.log(this.center, "senter details");
        this.userService.updateBrand(data, this.center)
            .subscribe(function (res) {
            // console.log(res);
            alert('brand updated successfully');
            _this.showBrandList = true;
            _this.userService.getAllBrandList(_this.offset)
                .subscribe(function (brandList) {
                _this.brands = brandList;
                console.log(_this.brands);
            });
        });
    };
    // delete brand
    BrandListComponent.prototype.deleteBrand = function (brandId) {
        var _this = this;
        this.userService.deleteBrand(brandId)
            .subscribe(function (res) {
            // console.log(res);
            alert('brand deleted successfully');
            _this.userService.getAllBrandList(_this.offset)
                .subscribe(function (brandList) {
                _this.brands = brandList;
                console.log(_this.brands);
            });
        });
    };
    BrandListComponent.prototype.back = function () {
        this.showBrandList = true;
    };
    return BrandListComponent;
}());
BrandListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-brand-list',
        template: __webpack_require__("../../../../../src/app/dashboard/data-panel/brand/brand-list/brand-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/data-panel/brand/brand-list/brand-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormBuilder"]) === "function" && _b || Object])
], BrandListComponent);

var _a, _b;
//# sourceMappingURL=brand-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/category/category/category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown{\n    border:1px solid #ccc;\n}\n.margin-right{\n    margin-right: 25px;\n}\n.fix-margin{\n    margin-bottom: -20px !important;  \n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/category/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"!showCategoryEdit\">\n    <div class=\"header\">\n       <h2>\n          Create Category\n       </h2>\n    </div>\n    <!-- <pre>{{createCategoryForm.value | json}}</pre> -->\n    <div class=\"body\">\n       <form [formGroup]='createCategoryForm' (ngSubmit)=\"createCategory(createCategoryForm.value)\">\n       <div class=\"row clearfix\">\n          <div class=\"col-lg-4 col-lg-offset-1  col-md-4 col-md-offset-1 col-sm-4 col-xs-6\">\n             <label>\n             Select Main Category\n             </label>\n             <div class=\"form-group\">\n                <select class=\"form-control dropdown\" formControlName=\"ref_id\" (change)=\"onSelectMainCat2($event.target.value)\">\n                <option *ngFor=\"let mainCategoryList of mainCat?.data\" [value]=\"mainCategoryList?.category_id\">{{ mainCategoryList?.category_name }}</option>\n                </select>\n             </div>\n          </div>\n          <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-6\">\n             <label>\n             Category Name\n             </label>\n             <div class=\"form-group\">\n                <div class=\"form-line\">\n                   <input type=\"text\" class=\"form-control\" formControlName=\"category_name\" (keyup)=\"avoidSpace('category_name')\">\n                </div>\n                <p class=\"text-danger\" *ngIf=\"!createCategoryForm.controls['category_name'].valid && createCategoryForm.controls['category_name'].touched\">Name is required</p>\n             </div>\n          </div>\n       </div>\n       <!-- template for add form  -->\n       <div class=\"row clearfix\">\n          <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n             <label for=\"Details\">Form</label>\n          </div>\n          <div class=\"pull-right margin-right\">\n             <button type=\"button\" class=\"btn btn-info m-t-15 waves-effect\" (click)=\"addItem()\">Add More</button>\n          </div>\n       </div>\n       <div class=\"panel panel-default\">\n          <!-- main form array start -->\n          <div formArrayName=\"category_forms\">\n             <div [formGroupName]=\"i\" *ngFor=\"let item of createCategoryForm.controls.category_forms['controls']; let i = index;\">\n             <br>\n             <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-6 col-md-offset-1 col-sm-offset-1 col-lg-offset-1\">\n                   <label>\n                   Form Type\n                   </label>\n                   <select class=\"form-control dropdown\" [(ngModel)]=\"this['Dropdown'+i]\" placeholder=\"select type\" formControlName=\"form_type\">\n                      <option>Select</option>\n                      <option value=1>Input</option>\n                      <option value=2>Dropdown</option>\n                      <option value=3>Calender</option>\n                      <option value=4>Numeric</option>\n                      \n                   </select>\n                </div>\n                <div *ngIf=\"this['Dropdown'+i] >  0\">\n                   <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6\">\n                      <label>\n                      Input Name\n                      </label>\n                      <div class=\"form-group\">\n                         <div class=\"form-line\">\n                            <input type=\"text\" class=\"form-control\" formControlName=\"title\" placeholder=\"Enter display name\">\n                         </div>\n                      </div>\n                   </div>\n                </div>\n                <!--Dropdown value array start -->\n                <div *ngIf=\"this['Dropdown'+i] == 2\">\n                   <div formArrayName=\"drop_downs\">\n                      <div [formGroupName]=\"j\" *ngFor=\"let item2 of item.controls.drop_downs.controls; let j = index;\">\n                      <div class=\"col-lg-6 col-md-6 col-sm-6 \" *ngIf=\"j!=0\">\n                      </div>\n                      <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6 fix-margin\">\n                         <label *ngIf=\"j==0\">\n                         Dropdown Name\n                         </label>\n                         <div class=\"form-group\">\n                            <div class=\"form-line\">\n                               <input type=\"text\" class=\"form-control\" formControlName=\"title\" placeholder=\"Enter display name\">\n                            </div>\n                         </div>\n                      </div>\n                      <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-6 \">\n                         <button type=\"button\" class=\"btn btn-success  btn-xs\" (click)=\"addValues(i)\" *ngIf=\"j==0\">Add value</button>\n                         <p></p>\n                         <button type=\"button\" class=\"btn btn-xs\" *ngIf=\"item.controls['drop_downs'].length > 1\" (click)=\"removeValues(i)\">X</button>\n                      </div>\n                   </div>\n                </div>\n             </div>\n             <!--Dropdown value array end  -->\n             <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-6\">\n                <button type=\"button\" class=\"btn btn-danger m-t-15 waves-effect\" *ngIf=\"createCategoryForm.controls['category_forms'].length > 1\" (click)=\"removeItem(i)\">Remove</button>\n             </div>\n          </div>\n          <div *ngIf='i>=0'>\n             <hr>\n          </div>\n       </div>\n    </div>\n    <!-- template for add row end  -->\n </div>\n <div class=\"row clearfix\">\n    <div class=\"col-lg-3 col-lg-offset-9  col-md-3 col-md-offset-9 col-sm-4 col-xs-6\">\n       <input type=\"submit\" value=\"CREATE\" class=\"btn btn-success m-t-15 waves-effect\" [disabled]=\"!createCategoryForm.valid\">\n    </div>\n </div>\n </form>\n </div>\n </div>\n <div class=\"card\" *ngIf=\"!showCategoryEdit\">\n    <div class=\"header\">\n       <div class=\"row\">\n          <div class=\"col-md-6\">\n             <h2>\n                Category List\n                <small> For change the category details click on the edit button</small>\n             </h2>\n          </div>\n          <div class=\"col-md-3 col-md-offset-3 right\">\n             <!-- <b>\n                <p>Search Category</p>\n             </b> -->\n             <!-- <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"term\"> -->\n          </div>\n       </div>\n    </div>\n    <div class=\"row\">\n       <div class=\"col-md-4 col-md-offset-1\">\n          <label>\n          Select Main Category\n          </label>\n          <div class=\"form-group\">\n             <select class=\"form-control dropdown\" (change)=\"onSelectMainCat($event.target.value)\">\n             <option *ngFor=\"let mainCategoryList of mainCat?.data\" [value]=\"mainCategoryList?.category_id\">{{ mainCategoryList?.category_name }}</option>\n             </select>\n          </div>\n       </div>\n       <div class=\"col-md-4 col-md-offset-1\">\n          <label>\n          Select Category\n          </label>\n          <div class=\"form-group\">\n             <select class=\"form-control dropdown\" (change)=\"onSelectCat($event.target.value)\">\n             <option>Select</option>\n             <option *ngFor=\"let categoryList of cat\" [value]=\"categoryList?.category_id\">{{ categoryList?.category_name }}</option>\n             </select>\n          </div>\n       </div>\n       <!-- <div class=\"col-md-2\" *ngIf=\"showEdit\">\n         <label>\n           Edit Category Form\n         </label>\n         <div class=\"form-group\">\n            <button class=\"btn btn-info\">Edit</button>            \n         </div>\n       </div> -->\n    </div>\n    <div *ngFor=\"let form of catForm; let i = index\">\n       <div class=\"row clearfix\">\n          <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-5 form-control-label\">\n             <small>\n             <b>{{ form?.title}}</b>\n             </small>\n          </div>\n          <div class=\"col-lg-4 col-md-4\" *ngIf=\"form?.form_type == 1\">\n              <div class=\"form-group\">\n                 <div class=\"form-line\">\n                    <input type=\"text\" name=\"{{form.id}}\" class=\"form-control input_fix\">\n                 </div>\n              </div>\n           </div>\n          <div class=\"col-lg-4 col-md-4\" *ngIf=\"form?.form_type == 2\">\n             <select class=\"form-control dropdown\" name=\"{{form.id}}\" ngModel>\n                <ng-container *ngFor=\"let droplist of form?.dropDowns\">\n                   <option ngValue=\"{{droplist.id}}\">{{droplist?.title}}</option>\n                </ng-container>\n             </select>\n             <p></p>\n          </div>\n          <div class=\"col-lg-4 col-md-4\" *ngIf=\"form?.form_type == 3\">\n              <div class=\"form-group\">\n                 <div class=\"form-line\">\n                    <input type=\"date\" name=\"{{form.id}}\" class=\"form-control input_fix\">\n                 </div>\n              </div>\n           </div>\n           <div class=\"col-lg-4 col-md-4\" *ngIf=\"form?.form_type == 4\">\n              <div class=\"form-group\">\n                 <div class=\"form-line\">\n                    <input type=\"number\" name=\"{{form.id}}\" class=\"form-control input_fix\">\n                 </div>\n              </div>\n           </div>\n       </div>\n    </div>\n    <app-dialog [(visible)]=\"viewCat\">\n    <div class=\"modal-header\">\n       <h4 class=\"modal-title\" id=\"smallModalLabel\">View Category</h4>\n    </div>\n    <div class=\"modal-body\">\n       <div class=\"row clearfix\">\n          <div class=\"col-md-4 col-md-offset-2\">\n             Category :-\n          </div>\n          <div class=\"row clearfix\">\n             <div class=\"col-md-4\">\n                {{ productMainForm?.Category[0].Name}}\n             </div>\n          </div>\n       </div>\n       <div>\n          <h5>\n             <u>Product Form</u>\n          </h5>\n          <div *ngFor=\"let form of productMainForm?.category_forms; let i = index\">\n             <div class=\"row clearfix\">\n                <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-5 form-control-label\">\n                   <small>\n                   <b>{{ form.title}}</b>\n                   </small>\n                </div>\n                <div class=\"col-lg-4 col-md-4\" *ngIf=\"form?.form_type == 1\">\n                   <div class=\"form-group\">\n                      <div class=\"form-line\">\n                         <input type=\"text\" name=\"{{form.FormID}}\" class=\"form-control input_fix\">\n                      </div>\n                   </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4\" *ngIf=\"form?.form_type == 4\">\n                    <div class=\"form-group\">\n                       <div class=\"form-line\">\n                          <input type=\"number\" name=\"{{form.FormID}}\" class=\"form-control input_fix\">\n                       </div>\n                    </div>\n                 </div>\n                <div class=\"col-lg-4 col-md-4\" *ngIf=\"form?.form_type == 2\">\n                   <select class=\"form-control dropdown\" name=\"{{form.FormID}}\" ngModel>\n                      <ng-container *ngFor=\"let droplist of form?.drop_downs\">\n                         <option *ngIf=\"form.FormID == droplist.FormID\" ngValue=\"{{droplist.DropdownID}}\">{{droplist.title}}</option>\n                      </ng-container>\n                   </select>\n                </div>\n             </div>\n          </div>\n       </div>\n    </div>\n    </app-dialog>\n </div>\n <!-- edit  -->\n <div class=\"card\" *ngIf=\"showCategoryEdit\">\n    <div class=\"modal-header\">\n       <button class=\"btn bg-blue\" (click)=\"back()\">Back</button>\n       <hr>\n       <h4 class=\"modal-title text-center bg-grey\" id=\"smallModalLabel\">Edit Category Form</h4>\n    </div>\n    <!-- <pre>form value: <br>{{editCategoryForm.value | json}}</pre> -->\n    <div class=\"modal-body\">\n       <form [formGroup]='editCategoryForm' (ngSubmit)=\"updateCategory(editCategoryForm.value)\">\n       <div class=\"row clearfix\">\n          <div class=\"col-lg-4 col-lg-offset-1  col-md-4 col-md-offset-1 col-sm-4 col-xs-6\">\n             <label>\n             Select Main Category\n             </label>\n             <div class=\"form-group\">\n                <select class=\"form-control dropdown\" formControlName=\"RefID\">\n                <option *ngFor=\"let mainCategoryList of mainCat?.CategoryList\" [ngValue]=\"mainCategoryList.ID\">{{ mainCategoryList.Name }}</option>\n                </select>\n             </div>\n          </div>\n          <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-6\">\n             <label>\n             Category Name\n             </label>\n             <div class=\"form-group\">\n                <div class=\"form-line\">\n                   <input type=\"text\" class=\"form-control\" formControlName=\"Name\" (keyup)=\"avoidSpace('Name')\">\n                </div>\n                <p class=\"text-danger\" *ngIf=\"!editCategoryForm.controls['Name'].valid && editCategoryForm.controls['Name'].touched\">Name is required</p>\n             </div>\n          </div>\n       </div>\n       <!-- template for add form  -->\n       <div class=\"row clearfix\">\n          <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n             <label for=\"Details\">Form</label>\n          </div>\n          <div class=\"pull-right margin-right\">\n             <button type=\"button\" class=\"btn btn-info m-t-15 waves-effect\" (click)=\"addItem2()\">Add More</button>\n          </div>\n       </div>\n       <div class=\"panel panel-default\">\n          <!-- main form array start -->\n          <div formArrayName=\"category_forms\">\n             <div [formGroupName]=\"i\" *ngFor=\"let item of editCategoryForm.controls.category_forms['controls']; let i = index;\">\n             <br>\n             <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-6 col-md-offset-1 col-sm-offset-1 col-lg-offset-1\">\n                   <label>\n                   Form Type\n                   </label>\n                   <select class=\"form-control dropdown\" [(ngModel)]=\"this['Dropdown'+i]\" placeholder=\"select type\" formControlName=\"form_type\">\n                   <option value=1>Input</option>\n                   <option value=2>Dropdown</option>\n                   <option value=3>Calender</option>\n                   <option value=4>Numeric</option>\n                   </select>\n                </div>\n                <div>\n                   <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6\">\n                      <label>\n                      Input Name\n                      </label>\n                      <div class=\"form-group\">\n                         <div class=\"form-line\">\n                            <input type=\"text\" class=\"form-control\" formControlName=\"title\" placeholder=\"Enter display name\">\n                         </div>\n                      </div>\n                   </div>\n                </div>\n                <!--Dropdown value array start -->\n                <div *ngIf=\"this['Dropdown'+i] == 2\">\n                   <div formArrayName=\"drop_downs\">\n                      <div [formGroupName]=\"j\" *ngFor=\"let item2 of item.controls.drop_downs.controls; let j = index;\">\n                      <div class=\"col-lg-6 col-md-6 col-sm-6 \" *ngIf=\"j!=0\">\n                      </div>\n                      <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6 fix-margin\">\n                         <label *ngIf=\"j==0\">\n                         Dropdown Name\n                         </label>\n                         <div class=\"form-group\">\n                            <div class=\"form-line\">\n                               <input type=\"text\" class=\"form-control\" formControlName=\"title\" placeholder=\"Enter display name\">\n                            </div>\n                         </div>\n                      </div>\n                      <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-6 \">\n                         <button type=\"button\" class=\"btn btn-success  btn-xs\" (click)=\"addValues2(i)\" *ngIf=\"j==0\">Add value</button>\n                         <p></p>\n                         <button type=\"button\" class=\"btn btn-xs\" *ngIf=\"item.controls['drop_downs'].length > 1\" (click)=\"removeValues2(i)\">X</button>\n                      </div>\n                   </div>\n                </div>\n             </div>\n             <!--Dropdown value array end  -->\n             <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-6\">\n                <button type=\"button\" class=\"btn btn-danger m-t-15 waves-effect\" *ngIf=\"editCategoryForm.controls['category_forms'].length > 1\" (click)=\"removeItem2(i);deleteForm(item._value.FormID)\">Remove</button>\n             </div>\n          </div>\n          <div *ngIf='i>=0'>\n             <hr>\n          </div>\n       </div>\n    </div>\n    <!-- template for add row end  -->\n </div>\n <div class=\"row clearfix\">\n    <div class=\"col-lg-3 col-lg-offset-9  col-md-3 col-md-offset-9 col-sm-4 col-xs-6\">\n       <input type=\"submit\" value=\"CREATE\" class=\"btn btn-success m-t-15 waves-effect\" [disabled]=\"!editCategoryForm.valid\">\n    </div>\n </div>\n </form>\n </div>\n </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/category/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_function_service__ = __webpack_require__("../../../../../src/app/_services/function.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryComponent = (function () {
    function CategoryComponent(userService, fb, functionService) {
        this.userService = userService;
        this.fb = fb;
        this.functionService = functionService;
        this.showDialog = false;
        this.viewCat = false;
        this.createCat = {};
        this.del = {};
        this.showCategoryEdit = false;
        this.order = 'category';
        this.showEdit = false;
        // edit main category form
        this.editCategoryForm = this.fb.group({
            category_name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            ID: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            ref_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            category_forms: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormArray"]([])
        });
        // create main category form
        this.createCategoryForm = this.fb.group({
            'category_name': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'ref_id': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'category_id': [null],
            'category_level': 2,
            category_forms: this.fb.array([this.createItem(),])
        });
    }
    // for push new list
    CategoryComponent.prototype.createItem = function () {
        return this.fb.group({
            'form_type': '',
            'title': '',
            drop_downs: this.fb.array([this.createValues(),])
        });
    };
    // for push new sub list
    CategoryComponent.prototype.createValues = function () {
        return this.fb.group({
            'title': null
        });
    };
    // add array
    CategoryComponent.prototype.addItem = function () {
        var control = this.createCategoryForm.controls['category_forms'];
        control.push(this.createItem());
    };
    // add sub array
    CategoryComponent.prototype.addValues = function (id) {
        console.log(id, "id after");
        var control = this.createCategoryForm.get(['category_forms', id, 'drop_downs']);
        control.push(this.createValues());
    };
    // remove array
    CategoryComponent.prototype.removeItem = function (i) {
        console.log(i);
        var control = this.createCategoryForm.controls['category_forms'];
        console.log(control);
        control.removeAt(i);
    };
    // remove sub array
    CategoryComponent.prototype.removeValues = function (j) {
        var control = this.createCategoryForm.get(['category_forms', j, 'drop_downs']);
        console.log(control);
        control.removeAt(j);
    };
    // add array
    CategoryComponent.prototype.addItem2 = function () {
        var control = this.editCategoryForm.controls['category_forms'];
        control.push(this.createItem());
    };
    // add sub array
    CategoryComponent.prototype.addValues2 = function (id) {
        var control = this.editCategoryForm.get(['category_forms', id, 'drop_downs']);
        control.push(this.createValues());
    };
    // remove array
    CategoryComponent.prototype.removeItem2 = function (i) {
        console.log(i);
        var control = this.editCategoryForm.controls['category_forms'];
        console.log(control);
        control.removeAt(i);
    };
    // remove sub array
    CategoryComponent.prototype.removeValues2 = function (j) {
        var control = this.editCategoryForm.get(['category_forms', j, 'drop_downs']);
        console.log(control);
        control.removeAt(j);
    };
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get list of main category
        this.userService.getCategoryList(1) // 1 for main category refer to api doc
            .subscribe(function (mainCat) {
            _this.mainCat = mainCat;
            console.log(mainCat);
        });
    };
    CategoryComponent.prototype.onSelectMainCat2 = function (catId) {
        console.log(catId, "id");
        this.catId = catId;
        // this.createCategoryForm.setValue({
        //   category_id: catId
        // });
    };
    // after select main category show list of category
    CategoryComponent.prototype.onSelectMainCat = function (catID) {
        var _this = this;
        this.userService.getSubCategoryList(catID)
            .subscribe(function (res) {
            _this.cat = res.data.subCategories;
            console.log(res, "category");
        });
    };
    // after select category show  category form
    CategoryComponent.prototype.onSelectCat = function (catID) {
        var _this = this;
        this.showEdit = true;
        console.log(catID);
        this.userService.getSubCategoryList(catID)
            .subscribe(function (res) {
            _this.catForm = res.data.categoryForms;
            console.log(_this.catForm, "category form");
        });
    };
    // create category
    CategoryComponent.prototype.createCategory = function (category) {
        var _this = this;
        console.log(category, "data hai kya");
        this.createCat =
            {
                'category_id': this.catId,
                'category_level': 2,
                'ref_id': category.ref_id,
                'category_name': category.category_name,
                'category_forms': category.category_forms
            };
        console.log(this.createCat);
        this.userService.createCategoryForm(this.createCat)
            .subscribe(function (res) {
            // console.log(res);
            alert('New Category added succesfully');
            // this.createCategoryForm.reset();
            // reset  editCategory form
            _this.editCategoryForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
                Name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
                ID: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
                RefID: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
                category_forms: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormArray"]([])
            });
            _this.userService.getCategoryList(2) // list update after createcat
                .subscribe(function (res) {
                _this.cat = res.CategoryList;
                // console.log(res,"category")
            });
        }, function (err) {
            console.log(err);
            var errMsg = JSON.parse(err['_body']);
            alert(errMsg.reason);
        });
    };
    // passs current user as argument and open the popup
    CategoryComponent.prototype.openCategoryModel = function (item) {
        // console.log('open cat is ',item);
        var _this = this;
        // reset  editCategory form
        this.editCategoryForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            Name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            ID: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            RefID: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            category_forms: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormArray"]([])
        });
        this.userService.getCategoryListbyID(item.ID)
            .subscribe(function (res) {
            _this.showCategoryEdit = true; // for show dialog
            console.log(res);
            _this.editCategoryForm.controls['ID'].setValue(res.Category[0].ID);
            _this.editCategoryForm.controls['RefID'].setValue(res.Category[0].RefID);
            _this.editCategoryForm.controls['Name'].setValue(res.Category[0].Name);
            res.category_forms.forEach(function (po) {
                _this.editCategoryForm.controls['category_forms'].push(_this.createDetailsFormGroup(po));
            });
        });
    };
    CategoryComponent.prototype.createDetailsFormGroup = function (payOffObj) {
        console.log(payOffObj, 'pay');
        return new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            form_type: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](payOffObj.form_type),
            FormID: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](payOffObj.FormID),
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](payOffObj.title),
            drop_downs: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](payOffObj.drop_downs[0])
        });
    };
    CategoryComponent.prototype.updateCategory = function (category) {
        var _this = this;
        // category = { Name:category.Name, ID:category.ID, RefID: category.RefID}
        console.log("category", category);
        this.userService.editCategoryForm(category)
            .subscribe(function (res) {
            console.log(res);
            alert('category updated successfully');
            _this.showDialog = false;
            _this.userService.getCategoryList(2) // list update after edit
                .subscribe(function (getCat) {
                _this.cat = getCat.CategoryList;
                // console.log(getCat);
            });
        });
    };
    CategoryComponent.prototype.deleteCategory = function (category) {
        var _this = this;
        this.del = { 'ID': category.ID };
        this.userService.deleteCategory(this.del)
            .subscribe(function (res) {
            console.log(res);
            alert("Deleted Successfully");
            _this.userService.getCategoryList(2) // list update after delete
                .subscribe(function (getCat) {
                _this.cat = getCat.CategoryList;
                // console.log(getCat);
            });
        });
    };
    CategoryComponent.prototype.viewCategory = function (data) {
        var _this = this;
        console.log(data);
        this.userService.getCategoryListbyID(data.ID)
            .subscribe(function (res) {
            _this.productMainForm = res;
            _this.viewCat = true; // for show dialog
            console.log(res);
        });
    };
    // function for avoid only space submit
    CategoryComponent.prototype.avoidSpace = function (e) {
        // console.log(e);
        this.functionService.NoWhitespaceValidator(this.createCategoryForm, e);
    };
    CategoryComponent.prototype.back = function () {
        this.showCategoryEdit = false;
    };
    CategoryComponent.prototype.deleteForm = function (drop) {
        console.log(drop, "drop");
        this.userService.deleteCategoryForm(drop)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-category',
        template: __webpack_require__("../../../../../src/app/dashboard/data-panel/category/category/category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/data-panel/category/category/category.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_function_service__["a" /* FunctionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_function_service__["a" /* FunctionService */]) === "function" && _c || Object])
], CategoryComponent);

var _a, _b, _c;
//# sourceMappingURL=category.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/category/main-category/main-category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/category/main-category/main-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"header\">\n    <h2>\n      Create Main Category\n    </h2>\n  </div>\n  <div class=\"body\">\n    <form [formGroup]='createCategoryForm' (ngSubmit)=\"createCategory(createCategoryForm.value)\">\n      <div class=\"row clearfix\">\n        <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6 form-control-label\">\n          <label>Main Category Name</label>\n        </div>\n        <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6\">\n          <div class=\"form-group\">\n            <div class=\"form-line\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"category_name\" (keyup)=\"avoidSpace('category_name')\">\n            </div>\n            <p class=\"text-danger\" *ngIf=\"!createCategoryForm.controls['category_name'].valid && createCategoryForm.controls['category_name'].touched\">Name is required</p>\n          </div>\n        </div>\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n          <input type=\"submit\" value=\"CREATE\" class=\"btn btn-success  m-t-15 waves-effect\" [disabled]=\"!createCategoryForm.valid\">\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n<div class=\"card\">\n  <div class=\"header\">\n    <h2>\n      Main Category List\n      <small> For change the category details click on the edit button</small>\n    </h2>\n  </div>\n  <div class=\"body table-responsive\">\n    <table class=\"table table-condensed\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Name</th>\n          <th>Status</th>\n          <th>Action</th>\n        </tr>\n      </thead>\n      <tbody *ngFor=\"let list of mainCategory?.data; let i = index\">\n        <tr>\n          <th scope=\"row\">{{ i+1 }}</th>\n          <td>{{ list?.category_name }}</td>\n          <td *ngIf=\"list?.status_type=='1'\">\n            <span class=\"label bg-green\">Active</span>\n          </td>\n          <td *ngIf=\"list?.status_type=='2'\">\n            <span class=\"label bg-red\">InActive</span>\n          </td>\n          <td>\n            <span class=\"btn btn-info btn-circle waves-effect waves-circle waves-float\" (click)=\"openCategoryModel(list)\" title=\"Edit\">\n              <i class=\"material-icons\">mode_edit</i>\n            </span>\n            <span class=\"btn btn-danger btn-circle waves-effect waves-circle waves-float\" (click)=\"deleteCategory(list)\" title=\"Delete\">\n              <i class=\"material-icons\">delete</i>\n            </span>\n          </td>\n          <!-- <td><span class=\"btn btn-info btn-circle waves-effect waves-circle waves-float\" (click)=\"openCategoryModel(list)\" title=\"Edit\"><i class=\"material-icons\" >mode_edit</i></span></td> -->\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <app-dialog [(visible)]=\"showDialog\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"smallModalLabel\">Edit Main Category</h4>\n    </div>\n    <div class=\"modal-body\">\n      <form class=\"form-horizontal\" [formGroup]='editCategoryForm' (ngSubmit)=\"updateCategory(editCategoryForm.value)\">\n        <div class=\"row clearfix\">\n          <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n            <label for=\"name\">Name</label>\n          </div>\n          <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n            <div class=\"form-group\">\n              <div class=\"form-line\">\n                <input type=\"text\" class=\"form-control\" formControlName=\"category_name\" placeholder=\"Enter your name\">\n              </div>\n              <p class=\"text-danger\" *ngIf=\"!editCategoryForm.controls['category_name'].valid && editCategoryForm.controls['category_name'].touched\">Name is required</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                <label for=\"name\">Status</label>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n                <div class=\"form-group\">\n                    <select class=\"form-control dropdown\" formControlName=\"status_type\">\n                <option [ngValue]=\"1\"> Active</option>\n                <option [ngValue]=\"2\"> InActive</option>\n            </select>\n                </div>\n            </div>\n        </div>\n        <div class=\"row clearfix\">\n          <div class=\"col-lg-offset-9 col-md-offset-9 col-sm-offset-4 col-xs-offset-5\">\n            <input type=\"submit\" value=\"Save Changes\" class=\"btn btn-success  m-t-15 waves-effect\" [disabled]=\"!editCategoryForm.valid\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </app-dialog>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/category/main-category/main-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_function_service__ = __webpack_require__("../../../../../src/app/_services/function.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainCategoryComponent = (function () {
    function MainCategoryComponent(userService, fb, functionService) {
        this.userService = userService;
        this.fb = fb;
        this.functionService = functionService;
        this.showDialog = false;
        this.createCat = {};
        this.del = {};
        // edit main category form
        this.editCategoryForm = this.fb.group({
            'category_name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'category_id': [null],
            'ref_id': [null],
            'status_type': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
        // create main category form
        this.createCategoryForm = this.fb.group({
            'category_name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    }
    MainCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get list of main category
        this.userService.getCategoryList(1) // 1 for main category refer to api doc
            .subscribe(function (mainCategory) {
            _this.mainCategory = mainCategory;
            console.log(mainCategory);
        });
    };
    // passs current user as argument and open the popup
    MainCategoryComponent.prototype.openCategoryModel = function (item) {
        this.cat_id = item.category_id;
        // console.log(this.cat_id, item, "categoty_id")
        this.showDialog = true;
        // this.editCategoryForm.setValue()
        // populate prefilled value in form
        this.editCategoryForm.setValue({
            category_name: item.category_name,
            category_id: item.category_id,
            ref_id: item.ref_id,
            status_type: item.status_type
        });
    };
    // create new main category
    MainCategoryComponent.prototype.createCategory = function (category) {
        var _this = this;
        console.log(category);
        this.createCat = { 'category_level': 1, 'ref_id': null, 'category_name': category.category_name, 'category_forms': [] };
        this.userService.createMainCategory(this.createCat)
            .subscribe(function (res) {
            console.log(res, "category");
            alert("Main Category Created");
            _this.createCategoryForm.reset();
            _this.userService.getCategoryList(1) // list update after create new category
                .subscribe(function (mainCategory) {
                _this.mainCategory = mainCategory;
            });
        }, function (error) {
            console.log(error);
            var err = JSON.parse(error['_body']);
            alert(err.reason);
        });
    };
    // update existing main category
    MainCategoryComponent.prototype.updateCategory = function (category) {
        var _this = this;
        if (category.status_type == 1) {
            console.log(category, "cat");
            this.userService.updateCategory(category)
                .subscribe(function (res) {
                console.log(res);
                alert('category updated successfully');
                _this.showDialog = false;
                _this.userService.getCategoryList(1) // list update after edit
                    .subscribe(function (mainCategory) {
                    _this.mainCategory = mainCategory;
                    // console.log(users);
                });
            });
        }
        else {
            alert("Please Active first then update");
        }
    };
    // delete main category
    MainCategoryComponent.prototype.deleteCategory = function (category) {
        var _this = this;
        console.log(category);
        this.userService.deleteCategory(category.category_id)
            .subscribe(function (res) {
            console.log(res);
            alert('Deleted');
            _this.userService.getCategoryList(1) // list update after delete
                .subscribe(function (mainCategory) {
                _this.mainCategory = mainCategory;
            });
        }, function (error) {
            console.log(error);
        });
    };
    // function for avoid only space submit
    MainCategoryComponent.prototype.avoidSpace = function (e) {
        this.functionService.NoWhitespaceValidator(this.createCategoryForm, e);
    };
    return MainCategoryComponent;
}());
MainCategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-main-category',
        template: __webpack_require__("../../../../../src/app/dashboard/data-panel/category/main-category/main-category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/data-panel/category/main-category/main-category.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_function_service__["a" /* FunctionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_function_service__["a" /* FunctionService */]) === "function" && _c || Object])
], MainCategoryComponent);

var _a, _b, _c;
//# sourceMappingURL=main-category.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/category/sub-category/sub-category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown{\n    border:1px solid #ccc;\n}\n.margin-right{\n    margin-right: 25px;\n}\n.fix-margin{\n    margin-bottom: -20px !important;  \n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/category/sub-category/sub-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"!showCategoryEdit\">\n  <div class=\"header\">\n    <h2>\n      Create Category\n    </h2>\n  </div>\n  <!-- <pre>{{createCategoryForm.value | json}}</pre> -->\n  <div class=\"body\">\n    <form [formGroup]='createCategoryForm' (ngSubmit)=\"createCategory(createCategoryForm.value)\">\n      <div class=\"row clearfix\">\n        <div class=\"col-lg-4 col-lg-offset-1  col-md-4 col-md-offset-1 col-sm-4 col-xs-6\">\n          <label>\n              Select Main Category\n            </label>\n          <div class=\"form-group\">\n            <select class=\"form-control dropdown\" formControlName=\"RefID\">\n                <option *ngFor=\"let mainCategoryList of mainCat?.CategoryList\" [ngValue]=\"mainCategoryList.ID\">{{ mainCategoryList.Name }}</option>\n              </select>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-6\">\n          <label>\n              Category Name\n            </label>\n          <div class=\"form-group\">\n            <div class=\"form-line\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"Name\" (keyup)=\"avoidSpace('Name')\">\n            </div>\n            <p class=\"text-danger\" *ngIf=\"!createCategoryForm.controls['Name'].valid && createCategoryForm.controls['Name'].touched\">Name is required</p>\n          </div>\n        </div>\n      </div>\n      <!-- template for add form  -->\n      <div class=\"row clearfix\">\n        <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n          <label for=\"Details\">Form</label>\n        </div>\n        <div class=\"pull-right margin-right\">\n          <button type=\"button\" class=\"btn btn-info m-t-15 waves-effect\" (click)=\"addItem()\">Add More</button>\n        </div>\n      </div>\n      <div class=\"panel panel-default\">\n        <!-- main form array start -->\n        <div formArrayName=\"FormList\">\n          <div [formGroupName]=\"i\" *ngFor=\"let item of createCategoryForm.controls.FormList['controls']; let i = index;\">\n            <br>\n            <div class=\"row clearfix\">\n              <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-6 col-md-offset-1 col-sm-offset-1 col-lg-offset-1\">\n                <label>\n                    Type\n                  </label>\n                <select class=\"form-control dropdown\" [(ngModel)]=\"this['Dropdown'+i]\" placeholder=\"select type\" formControlName=\"Type\">\n                    <option value=\"1\">Input</option>\n                    <option value=\"2\">Dropdown</option>\n                  </select>\n              </div>\n              <div *ngIf=\"this['Dropdown'+i] >  0\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6\">\n                  <label>\n                      Input Name\n                    </label>\n                  <div class=\"form-group\">\n                    <div class=\"form-line\">\n                      <input type=\"text\" class=\"form-control\" formControlName=\"ElementName\" placeholder=\"Enter display name\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <!--Dropdown value array start -->\n              <div *ngIf=\"this['Dropdown'+i] == 2\">\n                <div formArrayName=\"List\">\n                  <div [formGroupName]=\"j\" *ngFor=\"let item2 of item.controls.List.controls; let j = index;\">\n                    <div class=\"col-lg-6 col-md-6 col-sm-6 \" *ngIf=\"j!=0\">\n\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6 fix-margin\">\n                      <label *ngIf=\"j==0\">\n                          Dropdown Name\n                        </label>\n                      <div class=\"form-group\">\n                        <div class=\"form-line\">\n                          <input type=\"text\" class=\"form-control\" formControlName=\"DropdownName\" placeholder=\"Enter display name\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-6 \">\n                      <button type=\"button\" class=\"btn btn-success  btn-xs\" (click)=\"addValues(i)\" *ngIf=\"j==0\">Add value</button>\n                      <p></p>\n                      <button type=\"button\" class=\"btn btn-xs\" *ngIf=\"item.controls['List'].length > 1\" (click)=\"removeValues(i)\">X</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!--Dropdown value array end  -->\n              <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-6\">\n                <button type=\"button\" class=\"btn btn-danger m-t-15 waves-effect\" *ngIf=\"createCategoryForm.controls['FormList'].length > 1\"\n                  (click)=\"removeItem(i)\">Remove</button>\n              </div>\n            </div>\n            <div *ngIf='i>=0'>\n              <hr>\n            </div>\n          </div>\n        </div>\n        <!-- template for add row end  -->\n      </div>\n      <div class=\"row clearfix\">\n        <div class=\"col-lg-3 col-lg-offset-9  col-md-3 col-md-offset-9 col-sm-4 col-xs-6\">\n          <input type=\"submit\" value=\"CREATE\" class=\"btn btn-success m-t-15 waves-effect\" [disabled]=\"!createCategoryForm.valid\">\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n<div class=\"card\" *ngIf=\"!showCategoryEdit\">\n  <div class=\"header\">\n    <h2>\n      Category List\n      <small> For change the category details click on the edit button</small>\n    </h2>\n  </div>\n  <div class=\"body table-responsive\">\n    <table class=\"table table-condensed table-bordered\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Main Category Name</th>\n          <th>Category Name</th>\n          <th>Action</th>\n        </tr>\n      </thead>\n      <!-- <pre>{{ cat | json}}</pre> -->\n      <tbody *ngFor=\"let list of cat; let i = index\">\n        <tr>\n          <th scope=\"row\">{{ i+1 }}</th>\n          <td>{{ list.maincategory }}</td>\n          <td>{{ list.category }}</td>\n          <td><span class=\"btn btn-info btn-circle waves-effect waves-circle waves-float\" (click)=\"openCategoryModel(list)\" title=\"Edit\"><i class=\"material-icons\" >mode_edit</i></span>            <span class=\"btn btn-danger btn-circle waves-effect waves-circle waves-float\" (click)=\"deleteCategory(list)\"\n              title=\"Delete\"><i class=\"material-icons\">delete</i></span> <span class=\"btn btn-warning btn-circle waves-effect waves-circle waves-float\"\n              (click)=\"viewCategory(list)\" title=\"Delete\"><i class=\"material-icons\">visibility</i></span>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <app-dialog [(visible)]=\"viewCat\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"smallModalLabel\">View Category</h4>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"row clearfix\">\n        <div class=\"col-md-4 col-md-offset-2\">\n          Category :-\n        </div>\n        <div class=\"row clearfix\">\n          <div class=\"col-md-4\">\n            {{ productMainForm?.Category[0].Name}}\n          </div>\n        </div>\n      </div>\n      <div>\n        <h5>\n          <u>Product Form</u>\n        </h5>\n        <div *ngFor=\"let form of productMainForm?.FormList; let i = index\">\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-5 form-control-label\">\n              <small><b>{{ form.ElementName}}</b></small>\n            </div>\n            <div class=\"col-lg-4 col-md-4\" *ngIf=\"form?.Type == 1\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"text\" name=\"{{form.FormID}}\" class=\"form-control input_fix\">\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4\" *ngIf=\"form?.Type == 2\">\n              <select class=\"form-control dropdown\" name=\"{{form.FormID}}\" ngModel>\n                  <ng-container *ngFor=\"let droplist of form?.List\">\n                    <option *ngIf=\"form.FormID == droplist.FormID\" ngValue=\"{{droplist.DropdownID}}\">{{droplist.DropdownName}}</option>\n                  </ng-container>\n                </select>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </app-dialog>\n</div>\n<div class=\"card\" *ngIf=\"editCatModel\">\n  <div class=\"header\">\n    <button class=\"btn bg-blue\" (click)=\"back()\">Back</button>\n    <hr>\n    <h2>\n      Edit Category\n    </h2>\n  </div>\n  <!-- <pre>{{ editCategoryFormData | json}}</pre> -->\n  <div class=\"body\">\n    <form #editCategoryForm=\"ngForm\" (ngSubmit)=\"editFormData(editCategoryForm)\">\n      <div class=\"row clearfix\">\n        <div class=\"col-md-4 col-md-offset-2\">\n          <label>\n                  Select Main Category\n                </label>\n          <div class=\"form-group\">\n            <select class=\"form-control dropdown\" name=\"RefID\" ngModel=\"{{editCategoryFormData?.Category[0]?.RefID}}\">\n            <option *ngFor=\"let mainCategoryList of mainCat?.CategoryList\" ngValue=\"{{mainCategoryList.ID}}\">{{ mainCategoryList.Name }}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <label>\n                  Category Name\n                </label>\n          <div class=\"form-group\">\n            <div class=\"form-line\">\n              <input type=\"text\" class=\"form-control\" name=\"Name\" ngModel=\"{{editCategoryFormData?.Category[0]?.Name}}\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row clearfix\">\n        <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n          <label for=\"Details\">Form</label>\n        </div>\n        <div class=\"pull-right margin-right\">\n          <button type=\"button\" class=\"btn btn-info m-t-15 waves-effect\" (click)=\"addItem()\">Add More</button>\n        </div>\n      </div>\n      <div class=\"panel panel-default\">\n        <div class=\"row clearfix\" *ngFor=\"let form of editCategoryFormData?.FormList\">\n          <div class=\"col-md-2 col-md-offset-1\" >\n              <label>\n                  <!-- Type {{form | json}} -->\n                </label>\n              <select class=\"form-control dropdown\" name=\"Type\" ngModel=\"{{form?.Type}}\">\n                  <option ngValue=1>Input</option>\n                  <option ngValue=2>Dropdown</option>\n                </select>\n            </div>\n        </div>\n      </div>  \n      <div class=\"row clearfix\">\n        <div class=\"col-md-12\">\n          <button class=\"btn bg-orange btn-block btn-lg\" type=\"submit\">Update</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/category/sub-category/sub-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_function_service__ = __webpack_require__("../../../../../src/app/_services/function.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubCategoryComponent = (function () {
    function SubCategoryComponent(userService, fb, functionService) {
        this.userService = userService;
        this.fb = fb;
        this.functionService = functionService;
        this.showDialog = false;
        this.viewCat = false;
        this.createCat = {};
        this.del = {};
        this.showCategoryEdit = false;
        this.editCatModel = false;
        // create main category form
        this.createCategoryForm = this.fb.group({
            'Name': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'RefID': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            FormList: this.fb.array([this.createItem(),])
        });
    }
    // for push new list
    SubCategoryComponent.prototype.createItem = function () {
        return this.fb.group({
            'Type': '',
            'ElementName': '',
            List: this.fb.array([this.createValues(),])
        });
    };
    // for push new sub list
    SubCategoryComponent.prototype.createValues = function () {
        return this.fb.group({
            'DropdownName': null
        });
    };
    // add array
    SubCategoryComponent.prototype.addItem = function () {
        var control = this.createCategoryForm.controls['FormList'];
        control.push(this.createItem());
    };
    // add sub array
    SubCategoryComponent.prototype.addValues = function (id) {
        var control = this.createCategoryForm.get(['FormList', id, 'List']);
        control.push(this.createValues());
    };
    // remove array
    SubCategoryComponent.prototype.removeItem = function (i) {
        console.log(i);
        var control = this.createCategoryForm.controls['FormList'];
        console.log(control);
        control.removeAt(i);
    };
    // remove sub array
    SubCategoryComponent.prototype.removeValues = function (j) {
        var control = this.createCategoryForm.get(['FormList', j, 'List']);
        console.log(control);
        control.removeAt(j);
    };
    SubCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get list of main category
        this.userService.getCategoryList(1) // 1 for category refer to api doc
            .subscribe(function (mainCat) {
            _this.mainCat = mainCat;
            // console.log('mainCat' + mainCat);
        });
        // get list of category
        this.userService.getCategoryList(2) // 2 for category refer to api doc
            .subscribe(function (res) {
            _this.cat = res.CategoryList;
            // console.log('category is ' + res);
        });
    };
    // create category
    SubCategoryComponent.prototype.createCategory = function (category) {
        var _this = this;
        console.log(category);
        this.createCat = { 'Level': 2, 'RefID': category.RefID, 'Name': category.Name, 'FormList': category.FormList };
        console.log(this.createCat);
        this.userService.createCategoryForm(this.createCat)
            .subscribe(function (res) {
            // console.log(res);
            alert('New Category added succesfully');
            // this.createCategoryForm.reset();
            // reset  editCategory form
            _this.userService.getCategoryList(2) // list update after createcat
                .subscribe(function (res) {
                _this.cat = res.CategoryList;
                // console.log(res,"category")
            });
        });
    };
    SubCategoryComponent.prototype.createDetailsFormGroup = function (payOffObj) {
        console.log(payOffObj, 'pay');
        return new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            Type: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](payOffObj.Type),
            ElementName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](payOffObj.ElementName),
            List: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](payOffObj.List)
        });
    };
    SubCategoryComponent.prototype.updateCategory = function (category) {
        var _this = this;
        console.log("caregory", category);
        category = { Name: category.Name, ID: category.ID, RefID: category.RefID };
        this.userService.updateCategory(category)
            .subscribe(function (res) {
            // console.log(res);
            alert('category updated successfully');
            _this.showDialog = false;
            _this.userService.getCategoryList(2) // list update after edit
                .subscribe(function (getCat) {
                _this.cat = getCat.CategoryList;
                // console.log(getCat);
            });
        });
    };
    SubCategoryComponent.prototype.deleteCategory = function (category) {
        var _this = this;
        this.del = { 'ID': category.ID };
        this.userService.deleteCategory(this.del)
            .subscribe(function (res) {
            console.log(res);
            alert("Deleted Successfully");
            _this.userService.getCategoryList(2) // list update after delete
                .subscribe(function (getCat) {
                _this.cat = getCat.CategoryList;
                // console.log(getCat);
            });
        });
    };
    SubCategoryComponent.prototype.viewCategory = function (data) {
        var _this = this;
        console.log(data);
        this.userService.getCategoryListbyID(data.ID)
            .subscribe(function (res) {
            _this.productMainForm = res;
            _this.viewCat = true; // for show dialog
            console.log(res);
        });
    };
    // function for avoid only space submit
    SubCategoryComponent.prototype.avoidSpace = function (e) {
        console.log(e);
        this.functionService.NoWhitespaceValidator(this.createCategoryForm, e);
    };
    SubCategoryComponent.prototype.back = function () {
        this.showCategoryEdit = false;
    };
    SubCategoryComponent.prototype.openCategoryModel = function (req) {
        var _this = this;
        // console.log(req);
        this.userService.getCategoryListbyID(req.ID)
            .subscribe(function (res) {
            _this.editCategoryFormData = res;
            // this.editCategoryFormList = res.FormList
            _this.showCategoryEdit = true; // for show dialog
            console.log(res);
            _this.editCatModel = true;
        });
    };
    return SubCategoryComponent;
}());
SubCategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-sub-category',
        template: __webpack_require__("../../../../../src/app/dashboard/data-panel/category/sub-category/sub-category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/data-panel/category/sub-category/sub-category.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_function_service__["a" /* FunctionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_function_service__["a" /* FunctionService */]) === "function" && _c || Object])
], SubCategoryComponent);

var _a, _b, _c;
//# sourceMappingURL=sub-category.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/color/color.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group .form-control {\n    border-bottom: 1px solid #ddd !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/color/color.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"header\">\n        <h2>\n            Create Color\n        </h2>\n    </div>\n    <div class=\"body\">\n        <form [formGroup]='colorForm' (ngSubmit)=\"createColor(colorForm.value)\">\n            <div class=\"row clearfix\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6 form-control-label\">\n                    <label>\n                            Color Name\n                        </label>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <input type=\"text\" class=\"form-control\" formControlName=\"colour_name\" (keyup)=\"avoidSpace('colour_name')\">\n                        </div>\n                        <p class=\"text-danger\" *ngIf=\"!colorForm.controls['colour_name'].valid && colorForm.controls['colour_name'].touched\">Color Name is required</p>\n                    </div>\n                </div>\n                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n                    <input type=\"submit\" value=\"CREATE\" class=\"btn btn-success  m-t-15 waves-effect\" [disabled]=\"!colorForm.valid\">\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n<div class=\"card\">\n    <div class=\"header\">\n        <h2>\n            Color List\n            <small> For change the color details click on the edit button</small>\n        </h2>\n    </div>\n    <div class=\"body table-responsive\">\n        <table class=\"table table-condensed\">\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Name</th>\n                    <th>Action</th>\n                </tr>\n            </thead>\n            <tbody *ngFor=\"let list of color?.data; let i = index\">\n                <tr>\n                    <th scope=\"row\">{{ i+1 }}</th>\n                    <td>{{ list?.colour_name }}</td>\n                    <td *ngIf=\"list?.status_type=='1'\"><span class=\"label bg-green\">Active</span></td>\n                    <td *ngIf=\"list?.status_type=='2'\"><span class=\"label bg-red\">InActive</span></td>\n                    <td><span class=\"btn btn-info btn-circle waves-effect waves-circle waves-float\" (click)=\"openCategory(list)\"\n                            title=\"Edit\"><i class=\"material-icons\">mode_edit</i></span>\n                        <span class=\"btn btn-danger btn-circle waves-effect waves-circle waves-float\" (click)=\"deleteCategory(list)\" title=\"Delete\"><i class=\"material-icons\">delete</i></span></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n    <app-dialog [(visible)]=\"showDialog\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"smallModalLabel\">Edit Color List</h4>\n        </div>\n        <div class=\"modal-body\">\n            <form class=\"form-horizontal\" [formGroup]='editCategoryForm' (ngSubmit)=\"updateCategory(editCategoryForm.value)\">\n                <div class=\"row clearfix\">\n                    <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                        <label for=\"name\">Name</label>\n                    </div>\n                    <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n                        <div class=\"form-group\">\n                            <div class=\"form-line\">\n                                <input type=\"text\" class=\"form-control\" formControlName=\"colour_name\" placeholder=\"Enter your name\">\n                            </div>\n                            <p class=\"text-danger\" *ngIf=\"!editCategoryForm.controls['colour_name'].valid && editCategoryForm.controls['colour_name'].touched\">Name is required</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row clearfix\">\n                    <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                        <label for=\"name\">Status</label>\n                    </div>\n                    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n                        <div class=\"form-group\">\n                            <select class=\"form-control dropdown\" formControlName=\"status_type\">\n                                <option [ngValue]=\"1\"> Active</option>\n                                <option [ngValue]=\"2\"> InActive</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row clearfix\">\n                    <div class=\"col-lg-offset-9 col-md-offset-9 col-sm-offset-4 col-xs-offset-5\">\n                        <input type=\"submit\" value=\"Save Changes\" class=\"btn btn-success  m-t-15 waves-effect\" [disabled]=\"!editCategoryForm.valid\">\n                    </div>\n                </div>\n            </form>\n        </div>\n    </app-dialog>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/color/color.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_function_service__ = __webpack_require__("../../../../../src/app/_services/function.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ColorComponent = (function () {
    function ColorComponent(userService, fb, functionService) {
        this.userService = userService;
        this.fb = fb;
        this.functionService = functionService;
        this.del = {};
        this.showDialog = false;
        // main color form
        this.colorForm = this.fb.group({
            'colour_name': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
        this.editCategoryForm = this.fb.group({
            'colour_name': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'colour_id': [null],
            'status_type': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
    }
    ColorComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get list of main category
        this.userService.getColorList()
            .subscribe(function (color) {
            _this.color = color;
            console.log(color);
        });
    };
    // create new color
    ColorComponent.prototype.createColor = function (col) {
        var _this = this;
        console.log(col);
        this.userService.createColor(col)
            .subscribe(function (res) {
            console.log(res);
            alert('Color added successfully');
            _this.userService.getColorList() // list update after create new category
                .subscribe(function (color) {
                _this.color = color;
                _this.colorForm.reset();
            });
        });
    };
    ColorComponent.prototype.openCategory = function (col) {
        this.colorId = col.colour_id;
        console.log(this.colorId, col.status_type);
        this.showDialog = true;
        // if (col.user_status_type === 'Active') {
        //   this.statusCode = 1;
        // } else {
        //   this.statusCode = 2;
        // }
        this.editCategoryForm.setValue({
            colour_name: col.colour_name,
            colour_id: col.colour_id,
            status_type: col.status_type
        });
    };
    ColorComponent.prototype.updateCategory = function (col) {
        var _this = this;
        if (col.status_type == 1) {
            this.userService.updateColor(col)
                .subscribe(function (res) {
                _this.showDialog = false;
                console.log(res);
                alert('Color Update Successfylly');
                _this.userService.getColorList() // list update after delete
                    .subscribe(function (color) {
                    _this.color = color;
                });
            });
        }
        else {
            alert("Please Active first then update");
        }
    };
    // delete color
    ColorComponent.prototype.deleteCategory = function (col) {
        var _this = this;
        console.log(col);
        // this.del = { 'ID': col.ID };
        this.userService.deleteColor(col)
            .subscribe(function (res) {
            console.log(res);
            alert('Color Deleted Successfully');
            _this.userService.getColorList() // list update after delete
                .subscribe(function (color) {
                _this.color = color;
                // console.log(users);
            });
        }, function (error) {
            error._body = error;
            console.log(error);
        });
    };
    // function for avoid only space submit
    ColorComponent.prototype.avoidSpace = function (e) {
        this.functionService.NoWhitespaceValidator(this.colorForm, e);
    };
    return ColorComponent;
}());
ColorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-color',
        template: __webpack_require__("../../../../../src/app/dashboard/data-panel/color/color.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/data-panel/color/color.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_function_service__["a" /* FunctionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_function_service__["a" /* FunctionService */]) === "function" && _c || Object])
], ColorComponent);

var _a, _b, _c;
//# sourceMappingURL=color.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/data-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/data-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/data-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataPanelComponent; });
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

var DataPanelComponent = (function () {
    function DataPanelComponent() {
    }
    DataPanelComponent.prototype.ngOnInit = function () {
    };
    return DataPanelComponent;
}());
DataPanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-data-panel',
        template: __webpack_require__("../../../../../src/app/dashboard/data-panel/data-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/data-panel/data-panel.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DataPanelComponent);

//# sourceMappingURL=data-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"block-header\">\n        <h2>DASHBOARD</h2>\n    </div>\n    <!-- Widgets -->\n    <div class=\"row clearfix\">\n        <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n            <div class=\"info-box bg-pink hover-expand-effect\">\n                <div class=\"icon\">\n                    <i class=\"material-icons\">playlist_add_check</i>\n                </div>\n                <div class=\"content\">\n                    <div class=\"text\">NEW TASKS</div>\n                    <div class=\"number count-to\" data-from=\"0\" data-to=\"125\" data-speed=\"15\" data-fresh-interval=\"20\"></div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n            <div class=\"info-box bg-cyan hover-expand-effect\">\n                <div class=\"icon\">\n                    <i class=\"material-icons\">help</i>\n                </div>\n                <div class=\"content\">\n                    <div class=\"text\">NEW TICKETS</div>\n                    <div class=\"number count-to\" data-from=\"0\" data-to=\"257\" data-speed=\"1000\" data-fresh-interval=\"20\"></div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n            <div class=\"info-box bg-light-green hover-expand-effect\">\n                <div class=\"icon\">\n                    <i class=\"material-icons\">forum</i>\n                </div>\n                <div class=\"content\">\n                    <div class=\"text\">NEW COMMENTS</div>\n                    <div class=\"number count-to\" data-from=\"0\" data-to=\"243\" data-speed=\"1000\" data-fresh-interval=\"20\"></div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n            <div class=\"info-box bg-orange hover-expand-effect\">\n                <div class=\"icon\">\n                    <i class=\"material-icons\">person_add</i>\n                </div>\n                <div class=\"content\">\n                    <div class=\"text\">NEW VISITORS</div>\n                    <div class=\"number count-to\" data-from=\"0\" data-to=\"1225\" data-speed=\"1000\" data-fresh-interval=\"20\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- #END# Widgets -->\n    <div class=\"row clearfix\">\n        <!-- Visitors -->\n        <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n            <div class=\"card\">\n                <div class=\"body bg-pink\">\n                    <ul class=\"dashboard-stat-list\">\n                        <li>\n                            TODAY\n                            <span class=\"pull-right\"><b>12</b> <small>TICKETS</small></span>\n                        </li>\n                        <li>\n                            YESTERDAY\n                            <span class=\"pull-right\"><b>15</b> <small>TICKETS</small></span>\n                        </li>\n                        <li>\n                            LAST WEEK\n                            <span class=\"pull-right\"><b>90</b> <small>TICKETS</small></span>\n                        </li>\n                        <li>\n                            LAST MONTH\n                            <span class=\"pull-right\"><b>342</b> <small>TICKETS</small></span>\n                        </li>\n                        <li>\n                            LAST YEAR\n                            <span class=\"pull-right\"><b>4 225</b> <small>TICKETS</small></span>\n                        </li>\n                        <li>\n                            ALL\n                            <span class=\"pull-right\"><b>8 752</b> <small>TICKETS</small></span>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <!-- #END# Visitors -->\n        <!-- Latest Social Trends -->\n        <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n            <div class=\"card\">\n                <div class=\"body bg-cyan\">\n                    <div class=\"m-b--35 font-bold\">LATEST SOCIAL TRENDS</div>\n                    <ul class=\"dashboard-stat-list\">\n                        <li>\n                            #socialtrends\n                            <span class=\"pull-right\">\n                                <i class=\"material-icons\">trending_up</i>\n                            </span>\n                        </li>\n                        <li>\n                            #materialdesign\n                            <span class=\"pull-right\">\n                                <i class=\"material-icons\">trending_up</i>\n                            </span>\n                        </li>\n                        <li>#adminbsb</li>\n                        <li>#freeadmintemplate</li>\n                        <li>#bootstraptemplate</li>\n                        <li>\n                            #freehtmltemplate\n                            <span class=\"pull-right\">\n                                <i class=\"material-icons\">trending_up</i>\n                            </span>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <!-- #END# Latest Social Trends -->\n        <!-- Answered Tickets -->\n        <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n            <div class=\"card\">\n                <div class=\"body bg-teal\">\n                    <div class=\"font-bold m-b--35\">ANSWERED TICKETS</div>\n                    <ul class=\"dashboard-stat-list\">\n                        <li>\n                            TODAY\n                            <span class=\"pull-right\"><b>12</b> <small>TICKETS</small></span>\n                        </li>\n                        <li>\n                            YESTERDAY\n                            <span class=\"pull-right\"><b>15</b> <small>TICKETS</small></span>\n                        </li>\n                        <li>\n                            LAST WEEK\n                            <span class=\"pull-right\"><b>90</b> <small>TICKETS</small></span>\n                        </li>\n                        <li>\n                            LAST MONTH\n                            <span class=\"pull-right\"><b>342</b> <small>TICKETS</small></span>\n                        </li>\n                        <li>\n                            LAST YEAR\n                            <span class=\"pull-right\"><b>4 225</b> <small>TICKETS</small></span>\n                        </li>\n                        <li>\n                            ALL\n                            <span class=\"pull-right\"><b>8 752</b> <small>TICKETS</small></span>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <!-- #END# Answered Tickets -->\n    </div>\n\n    <div class=\"row clearfix\">\n        <!-- Task Info -->\n        <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\n            <div class=\"card\">\n                <div class=\"header\">\n                    <h2>TASK INFOS</h2>\n                    <ul class=\"header-dropdown m-r--5\">\n                        <li class=\"dropdown\">\n                            <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <i class=\"material-icons\">more_vert</i>\n                            </a>\n                            <ul class=\"dropdown-menu pull-right\">\n                                <li><a href=\"javascript:void(0);\">Action</a></li>\n                                <li><a href=\"javascript:void(0);\">Another action</a></li>\n                                <li><a href=\"javascript:void(0);\">Something else here</a></li>\n                            </ul>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"body\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table table-hover dashboard-task-infos\">\n                            <thead>\n                                <tr>\n                                    <th>#</th>\n                                    <th>Task</th>\n                                    <th>Status</th>\n                                    <th>Manager</th>\n                                    <th>Progress</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>1</td>\n                                    <td>Task A</td>\n                                    <td><span class=\"label bg-green\">Doing</span></td>\n                                    <td>John Doe</td>\n                                    <td>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar bg-green\" role=\"progressbar\" aria-valuenow=\"62\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 62%\"></div>\n                                        </div>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>2</td>\n                                    <td>Task B</td>\n                                    <td><span class=\"label bg-blue\">To Do</span></td>\n                                    <td>John Doe</td>\n                                    <td>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar bg-blue\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\"></div>\n                                        </div>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>3</td>\n                                    <td>Task C</td>\n                                    <td><span class=\"label bg-light-blue\">On Hold</span></td>\n                                    <td>John Doe</td>\n                                    <td>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar bg-light-blue\" role=\"progressbar\" aria-valuenow=\"72\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 72%\"></div>\n                                        </div>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>4</td>\n                                    <td>Task D</td>\n                                    <td><span class=\"label bg-orange\">Wait Approvel</span></td>\n                                    <td>John Doe</td>\n                                    <td>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar bg-orange\" role=\"progressbar\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 95%\"></div>\n                                        </div>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>5</td>\n                                    <td>Task E</td>\n                                    <td>\n                                        <span class=\"label bg-red\">Suspended</span>\n                                    </td>\n                                    <td>John Doe</td>\n                                    <td>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar bg-red\" role=\"progressbar\" aria-valuenow=\"87\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 87%\"></div>\n                                        </div>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- #END# Task Info -->\n        <!-- Browser Usage -->\n        <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n        </div>\n        <!-- #END# Browser Usage -->\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/dashboard/data-panel/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/data-panel/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/job-management/bill/create-bill/create-bill.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card .header {\n    padding-bottom: 4px;\n    padding-top: 10px;\n  }\n  \n  .form-group {\n    margin-bottom: 0px !important;\n  }\n  \n  .btn-circle {\n    margin-top: 16px;\n    margin-right: 5px;\n  }\n  \n  .dropdown {\n    border: 1px solid #ccc;\n  }\n  input[type=number]::-webkit-inner-spin-button, \n  input[type=number]::-webkit-outer-spin-button { \n      -webkit-appearance: none;\n      -moz-appearance: none;\n      /* appearance: none; */\n      margin: 0; \n  }\n  .right{\n    float: right;\n  }\n  .fix_image{\n    width: 150px;\n    height: 150px;\n  }\n  .font-small{\n      font-size: smaller;\n  }\n.dropDown .ui-select-choices .dropdown-menu{\n  margin-top:0px !important;\n}\n.text-red{\n  color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/job-management/bill/create-bill/create-bill.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"row clearfix\">\n    <!--**********************************************IMAGE****************************************** -->\n\n    <!-- Image Panel Start -->\n    <div class=\"col-md-6\">\n      <p></p>\n      <div class=\"row\">\n        <div class=\"col-md-2 col-md-offset-1\">\n          <button class=\"btn btn-info btn-xs btn-block\" *ngIf=\"imageArrayLength>1\" (click)=\"prevImage()\">Prev</button>\n        </div>\n        <div class=\"col-md-2\">\n          <button class=\"btn btn-warning btn-xs btn-warning\" (click)=\"rotate()\">Rotate</button>\n        </div>\n        <div class=\"col-md-2\">\n          <button class=\"btn btn-success btn-xs btn-block\" (click)=\"selectImage()\">Select</button>\n        </div>\n        <div class=\"col-md-2\">\n          <a href=\"{{images[imageIndex]}}\" download style=\"text-decoration: none;\"><button class=\"btn btn-danger btn-xs btn-block\">Download</button></a>\n        </div>\n        <div class=\"col-md-2\">\n          <button class=\"btn btn-info btn-xs btn-block\" *ngIf=\"imageArrayLength>1\" (click)=\"nextImage()\">Next</button>\n        </div>\n      </div>\n      <hr>\n      <p class=\"text-center\">Image {{imageIndex+1}} of {{imageArrayLength}}</p>\n\t\t\t<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" style=\"width: 100%; min-width: 320px;overflow:hidden\">\n        <tr>\n          <td style=\"padding: 10px\">\n            <div class=\"imagelist\" align=\"center\">\n              <img class=\"zoom img-responsive\" [src]=\"images[imageIndex]\" [style.transform]=\"'rotate(' + imagerotation + 'deg)'\" width=\"100%\" style=\"    -webkit-logical-width: auto;border: 3px solid #555; padding:2px;\" />\n              <!-- <p *ngIf=\"imageArray.file_type==='pdf'\">This file format is PDF<br> {{imageArray[imageIndex].copyUrl}}</p> -->\n            </div>\n          </td>\n        </tr>\n      </table>\n    </div>\n    <!-- Image Panel End -->\n\n    <!--**********************************************DATA ****************************************** -->\n    <div class=\"col-md-6\">\n      <!-- JOB Details Start -->\n      <div *ngIf=\"jobDetailsShow\">\n        <h5 class=\"\">JOB Details</h5>\n        <div style=\"border :1px solid grey\">\n          <div class=\"row clearfix\" style=\"margin:10px 5px 5px 5px\">\n            <div class=\"col-md-6\">\n              <p><b>JOB ID : </b>{{jobDetails?.job_id}}</p>\n              <p><b>Name : </b>{{ jobDetails?.user?.full_name }}</p>\n              <p><b>Date of JOB : </b>{{jobDetails?.updated_at | date}}</p>\n            </div>\n            <div class=\"col-md-6\">\n              <p><b>Email : </b>{{ jobDetails?.user?.email }}</p>\n              <p><b>Phone No : </b>{{ jobDetails?.user?.mobile_no }}</p>\n              <p><b>Comments : </b>{{ jobDetails?.comments }}</p>\n            </div>\n          </div>\n        </div>\n        <br>\n        <div class=\"card\" *ngIf=\"jobDetails?.bills?.length > 0\">\n          <div class=\"header padding_fix\">\n            <p><b>\n                Current JOB Bills\n                </b>\n            </p>\n          </div>\n          <div class=\"body table-responsive\">\n            <table class=\"table table-condensed\">\n              <thead>\n                <tr>\n                  <th><small>Bill ID</small></th>\n                  <th><small>Doc Number</small></th>\n                  <th><small>Name</small></th>\n                  <th><small>Phone</small></th>\n                  <th><small>Document Date</small></th>\n\t\t\t\t          <th><small>Action</small></th>\n\t\t\t\t          <th><small>Delete</small></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let bill of jobDetails?.bills\">\n                  <th><small>{{ bill?.id }}</small></th>\n                  <th><small>{{ bill?.document_number }}</small></th>\n                  <th><small>{{ bill?.consumer_name }}</small></th>\n                  <th><small>{{ bill?.consumer_phone_no }}</small></th>\n                  <th><small>{{ bill?.document_date | date }}</small></th>\n                  <th><small><span class=\"btn btn-info btn-xs\"  title=\"Make Product\" (click)=\"makeProduct(bill)\"><i class=\"material-icons\" >insert_drive_file</i></span></small></th>\n\t\t\t\t          <th><small><span class=\"btn btn-danger btn-xs\"  title=\"Delete \" (click)=\"deleteBill(bill?.id)\"><i class=\"material-icons\" >delete_forever</i></span></small></th>\n\t\t\t\t        </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <br>\n        <div class=\"card\" *ngIf=\"jobDetails?.products?.length > 0\">\n          <div class=\"header padding_fix\">\n            <p><b>\n                Product Lists\n                </b>\n            </p>\n          </div>\n          <div class=\"body table-responsive\">\n            <table class=\"table table-condensed\">\n              <thead>\n                <tr>\n                  <th><small>Job ID</small></th>\n                  <th><small>Bill ID</small></th>\n                  <th><small>Product ID</small></th>\n                  <th><small>Product Name</small></th>\n                  <th><small>Document Date</small></th>\n\t\t\t\t          <th><small>Action</small></th>\n\t\t\t\t          <th *ngIf=\"ceId < 2\"><small>Delete</small></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let prod of jobDetails?.products\">\n                  <th><small>{{ prod?.job_id }}</small></th>\n                  <th><small>{{ prod?.bill_id }}</small></th>\n                  <th><small>{{ prod?.id }}</small></th>\n                  <th><small>{{ prod?.product_name }}</small></th>\n                  <th><small>{{ prod?.document_date | date }}</small></th>\n                  <th><small><span class=\"btn btn-info btn-xs\"  title=\"Make Product\" (click)=\"addAddons(prod)\"><i class=\"material-icons\" >insert_drive_file</i></span></small></th>\n\t\t\t\t          <th *ngIf=\"ceId < 2\"><small><span class=\"btn btn-danger btn-xs\"  title=\"Delete \" (click)=\"deleteCall(list);deleteJob=true;\"><i class=\"material-icons\" >delete_forever</i></span></small></th>\n\t\t\t\t        </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"row clearfix\">\n          <div class=\"col-md-4\">\n            <button class=\"btn bg-orange btn-block btn-lg\" (click)=\"openProductList()\">User Product List</button>\n          </div>\n          <div class=\"col-md-4\">\n            <button class=\"btn bg-indigo btn-block btn-lg\" (click)=\"openBillForm()\">Add Bill</button>\n          </div>\n          <div class=\"col-md-4\">\n            <button class=\"btn bg-green btn-block btn-lg\" (click)=\"completeJobDialog=true;\"> Complete Job</button>\n          </div>\n        </div>\n        <br>\n      </div>\n      <!-- JOB Details End -->\n\n      <!--complete job popup -->\n      <app-dialog [(visible)]=\"completeJobDialog\">\n        <div class=\"modal-header\">\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\n              <h3>Are You sure you want to complete the job?</h3>\n            </div>\n\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n            </div>\n            <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\n\n              <button class=\"btn bg-green btn-block btn-lg\" type=\"submit\" (click)=\"completeJob();completeJobDialog=false;\">YES</button>\n            </div>\n            <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\n              <button class=\"btn bg-red btn-block btn-lg\" type=\"submit\" (click)=\"completeJobDialog=false;\">NO</button>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-offset-4 col-xs-4\">\n            </div>\n          </div>\n        </div>\n      </app-dialog>\n\n      <!-- BILL General Info Start-->\n      <div *ngIf=\"billGeneralInfo\">\n        <form #billGeneralInfoForm=\"ngForm\" (ngSubmit)=\"billGeneralInfoFormData(billGeneralInfoForm)\">\n          <h4>\n            <u>Bill</u>\n            <u>General</u>\n            <u>Information </u>\n          </h4>\n          <div style=\"border: 1px solid grey;padding:30px\">\n            <div class=\"row clearfix\">\n              <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                <label class=\"font-small\">Name</label>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <input type=\"text\" name=\"consumer_name\" class=\"form-control\" ngModel=\"{{jobDetails?.user?.full_name}}\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row clearfix\">\n              <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                <label class=\"font-small\">Phone</label>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <input type=\"number\" name=\"consumer_phone_no\" class=\"form-control\" ngModel=\"{{jobDetails?.user?.mobile_no}}\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row clearfix\">\n              <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                <label class=\"font-small\">Email</label>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <input type=\"text\" name=\"consumer_email\" class=\"form-control\" ngModel=\"{{ jobDetails?.user?.email}}\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row clearfix\">\n              <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                <label class=\"font-small\">Document Number</label>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <input type=\"text\" name=\"document_number\" class=\"form-control\" ngModel>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row clearfix\">\n              <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                <label class=\"font-small\"><span style=\"color:red\">*</span> Document Date</label>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <input type=\"date\" name=\"document_date\" class=\"form-control\" ngModel>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row clearfix\">\n              <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                <label class=\"font-small\">Online Seller</label>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n                <div class=\"form-group\">\n                  <select class=\"form-control dropdown\" name=\"seller_id\" ngModel>\n                    <option value=\"\">Select</option>\n                    <option *ngFor = \"let seller of onlineSeller?.data\" value=\"{{seller.sid}}\">{{ seller.seller_name }}</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <br>\n            <div class=\"row clearfix\">\n              <div class=\"col-md-4 col-md-offset-3\">\n                <button class=\"btn bg-orange btn-block btn-lg\" type=\"button\" (click)=\"backTojobDetailsShow()\">Back</button>\n              </div>\n              <div class=\"col-md-4\">\n                <button class=\"btn bg-green btn-block btn-lg\" type=\"submit\">Create Bill</button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <!-- BILL General Info End-->\n\n      <!-- Product Buttons Start -->\n      <div *ngIf=\"cockpit\">\n        <p></p>\n        <div class=\"row clearfix\">\n          <div class=\"col-md-4\">\n            <button class=\"btn btn-block btn-xs bg-indigo waves-effect m-b-15\" (click)=\"backTojobDetailsShow()\">Back</button>\n          </div>\n          <div class=\"col-md-4\" >\n            <button class=\"btn bg-cyan btn-block btn-xs waves-effect m-b-15\" (click)=\"showbillGeneralInfoEditForm()\">Bill General Info</button>\n          </div>\n          <div class=\"col-md-4\">\n            <button class=\"btn bg-pink btn-xs btn-block waves-effect m-b-15\" (click)=\"showAddSellerForm()\">Add Offline Seller</button>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\" >\n            <button class=\"btn bg-teal btn-xs btn-block waves-effect m-b-15\" (click)=\"showAddProductForm()\">Add Product</button>\n          </div>\n          <div class=\"col-md-6\" >\n            <button class=\"btn bg-teal btn-xs btn-block waves-effect m-b-15\" (click)=\"showSelectProductForm()\">Select Product</button>\n          </div>\n        </div>\n        <div *ngIf=\"jobDetails?.products?.length > 0\">\n          <div class=\"body table-responsive\" style=\"padding-bottom:0px;\">\n            <table class=\"table table-condensed\">\n              <thead>\n                <tr>\n                  <th><small>Bill ID</small></th>\n                  <th><small>Product ID</small></th>\n                  <th><small>Name</small></th>\n                  <th><small>Purchase Cost</small></th>\n                  <th><small>Document Date</small></th>\n                  <th><small>Create</small></th>\n                  <th><small>Delete</small></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let list of jobDetails?.products\">\n                  <th *ngIf=\"list?.bill_id==billId\"><small>{{ list?.bill_id }}</small></th>\n                  <th *ngIf=\"list?.bill_id==billId\"><small>{{ list?.id }}</small></th>\n                  <th *ngIf=\"list?.bill_id==billId\"><small>{{ list?.product_name }}</small></th>\n                  <th *ngIf=\"list?.bill_id==billId\"><small>{{ list?.purchase_cost }}</small></th>\n                  <th *ngIf=\"list?.bill_id==billId\"><small>{{ list?.document_date | date }}</small></th>\n                  <th *ngIf=\"list?.bill_id==billId\"><small><span class=\"btn btn-info btn-xs\"  title=\"Add Additional Info\" (click)=\"addAddons(list)\"><i class=\"material-icons\" >insert_drive_file</i></span></small></th>\n                  <th *ngIf=\"list?.bill_id==billId\"><small><span class=\"btn btn-danger btn-xs\"  title=\"Delete \" (click)=\"deleteCall(list);\"><i class=\"material-icons\" >delete_forever</i></span></small></th>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n      <!-- Product Buttons End -->\n      <!-- Product List Buttons Start -->\n      <div *ngIf=\"cockpit2\">\n        <p></p>\n        <div class=\"row clearfix\">\n          <div class=\"col-md-6\">\n            <button class=\"btn btn-block btn-xs bg-indigo waves-effect m-b-15\" (click)=\"backTojobDetailsShow()\">Back</button>\n          </div>\n          <!-- <div class=\"col-md-3\">\n            <button class=\"btn bg-cyan btn-block btn-xs waves-effect m-b-15\" (click)=\"showbillGeneralInfoEditForm()\">Bill General Info</button>\n          </div>\n          <div class=\"col-md-3\">\n            <button class=\"btn bg-teal btn-xs btn-block waves-effect m-b-15\" (click)=\"showAddProductForm()\">Add Product</button>\n          </div> -->\n          <div class=\"col-md-6\">\n            <button class=\"btn bg-pink btn-xs btn-block waves-effect m-b-15\" (click)=\"showAddSellerForm()\">Add Offline Seller</button>\n          </div>\n        </div>\n        <div>\n          <div class=\"body table-responsive\" style=\"padding-bottom:0px;\">\n            <table class=\"table table-condensed\">\n              <thead>\n                <tr>\n                  <th><small>Bill ID</small></th>\n                  <th><small>Product ID</small></th>\n                  <th><small>Name</small></th>\n                  <th><small>Purchase Cost</small></th>\n                  <th><small>Document Date</small></th>\n                  <th><small>Create</small></th>\n                  <!-- <th><small>Delete</small></th> -->\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let list of productList?.data\">\n                  <th><small>{{ list?.bill_id }}</small></th>\n                  <th><small>{{ list?.id }}</small></th>\n                  <th><small>{{ list?.product_name }}</small></th>\n                  <th><small>{{ list?.purchase_cost }}</small></th>\n                  <th><small>{{ list?.document_date | date }}</small></th>\n                  <th><small><span class=\"btn btn-info btn-xs\"  title=\"Add Additional Info\" (click)=\"addAddons(list)\"><i class=\"material-icons\" >insert_drive_file</i></span></small></th>\n                  <!-- <th><small><span class=\"btn btn-danger btn-xs\"  title=\"Delete \" (click)=\"deleteCall(list);deleteJob=true;\"><i class=\"material-icons\" >delete_forever</i></span></small></th> -->\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n      <!-- Product List Buttons End -->\n      <!--delete job popup -->\n      <app-dialog [(visible)]=\"deleteJob\">\n        <div class=\"modal-header\">\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\n              <h3>Are You sure you want to delete the job?</h3>\n            </div>\n\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n            </div>\n            <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\n\n              <button class=\"btn bg-green btn-block btn-lg\" type=\"submit\" (click)=\"deleteProduct();deleteJob=false;\">YES</button>\n            </div>\n            <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\n              <button class=\"btn bg-red btn-block btn-lg\" type=\"submit\" (click)=\"deleteJob=false;\">NO</button>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-offset-4 col-xs-4\">\n            </div>\n          </div>\n        </div>\n      </app-dialog>\n      <!-- BILL General Info Edit Start-->\n      <div *ngIf=\"billGeneralInfoEdit\">\n        <form #billGeneralInfoEditForm=\"ngForm\" (ngSubmit)=\"billGeneralInfoEditFormData(billGeneralInfoEditForm)\">\n          <h4>\n            <u>Bill</u>\n            <u>General</u>\n            <u>Information </u>\n          </h4>\n          <div style=\"border: 1px solid grey;padding:30px\">\n            <div class=\"row clearfix\">\n              <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                <label class=\"font-small\">Name</label>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <input type=\"text\" name=\"consumer_name\" class=\"form-control\" ngModel=\"{{billGeneralInfoFormObjectForBind?.consumer_name}}\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row clearfix\">\n              <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                <label class=\"font-small\">Phone</label>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <input type=\"number\" name=\"consumer_phone_no\" class=\"form-control\" ngModel=\"{{billGeneralInfoFormObjectForBind?.consumer_phone_no}}\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row clearfix\">\n              <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                <label class=\"font-small\">Email</label>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <input type=\"text\" name=\"consumer_email\" class=\"form-control\" ngModel=\"{{ billGeneralInfoFormObjectForBind?.consumer_email}}\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row clearfix\">\n              <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                <label class=\"font-small\">Document Number</label>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <input type=\"text\" name=\"document_number\" class=\"form-control\" ngModel=\"{{billGeneralInfoFormObjectForBind?.document_number}}\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row clearfix\">\n              <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                <label class=\"font-small\"><span style=\"color:red\">*</span> Document Date</label>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <input type=\"date\" name=\"document_date\" class=\"form-control\" ngModel=\"{{billGeneralInfoFormObjectForBind?.document_date | date:'yyyy-MM-dd'}}\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row clearfix\">\n              <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                <label class=\"font-small\">Online Seller</label>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n                <div class=\"form-group\">\n                  <select class=\"form-control dropdown\" name=\"seller_id\" ngModel=\"{{ billGeneralInfoFormObjectForBind?.seller_id}}\">\n                    <option value=\"\">Select</option>\n                    <option *ngFor = \"let seller of onlineSeller?.data\" value=\"{{seller.sid}}\">{{ seller.seller_name }}</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <br>\n            <div class=\"row clearfix\">\n              <div class=\"col-md-4 col-md-offset-4\">\n                <button class=\"btn bg-green btn-block btn-lg\" type=\"submit\">Update Bill</button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <!-- BILL General Info Edit End-->\n      <!-- product List start -->\n      <div *ngIf=\"showProductList\">\n        <div class=\"card\">\n          <div class=\"row\">\n            <div class=\"col-md-3 col-md-offset-1\">\n              <label class=\"font-small\">Choose Product</label>\n            </div>\n            <div class=\"col-md-8\">\n                <div class=\"form-group\">\n                  <select class=\"form-control dropdown\" name=\"product_id\" (change)=\"onSelectProductList($event.target.value)\" ngModel>\n                    <option value=\"\">Select</option>\n                    <option *ngFor=\"let list of customProductList?.data\" [value]=\"list?.id\">{{ list?.id}} | {{list?.product_name }}</option>                  \n                  </select>\n                </div>\n            </div>\n          </div>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-md-3 col-md-offset-8\">\n              <button class=\"btn btn btn-info \" (click)=\"bindProductWithBill()\">Select Product</button>\n            </div>\n          </div>\n          <br>\n        </div>\n      </div>\n      <!-- Product List End -->\n      <!-- Ask category Start -->\n      <div *ngIf=\"askMainCategory\">\n          <div class=\"card\">\n              <small><u><b>Seller Info</b></u></small>\n              <div class=\"row\">\n                <div class=\"col-md-2 col-md-offset-1\"><small><b>Name</b></small></div>\n                <div class=\"col-md-9\"><small>{{sellerObject?.data?.seller_name}}</small></div>\n              </div>  \n              <div class=\"row\">\n                  <div class=\"col-md-2 col-md-offset-1\"><small><b>Address</b></small></div>\n                  <div class=\"col-md-9\" style=\"min-height:40px\"><small>{{sellerObject?.data?.address}}</small></div>\n              </div>\n            </div> \n        <div class=\"row clearfix\">\n          <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n            <label class=\"font-small\">Offline Seller</label>\n          </div>\n          <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7 dropDown\">\n            <div class=\"form-group\" (mouseover)=\"focused($event.target.innerText)\">\n                <ng-select [allowClear]=\"true\"\n                [items]=\"offlineSellerArray\"\n                [disabled]=\"disabled\"\n                (selected)=\"selected($event)\"\n                (removed)=\"removed($event)\"\n                (typed)=\"typed($event)\"\n                placeholder=\"No Seller selected\">\n                </ng-select>\n            </div>\n            <!-- <button class=\"btn btn-block btn-info\" (click)=\"sellerInfo()\">Seller Info</button> -->\n           \n          </div>\n        </div>\n        <p></p>\n        <div class=\"row clearfix\">\n          <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n            <label class=\"font-small\">Main Category</label>\n          </div>\n          <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n            <div class=\"form-group\">\n              <select class=\"form-control dropdown\" name=\"ref_id\" (change)=\"onSelectMainCat($event.target.value)\" ngModel>\n                  <option value=\"\">Select</option>\n                  <option *ngFor=\"let mainCategoryList of mainCat?.data\" [value]=\"mainCategoryList?.category_id\">{{ mainCategoryList?.category_name }}</option>                  \n                </select>\n            </div>\n          </div>\n        </div>\n        <p></p>\n        <div class=\"row clearfix\">\n          <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n            <label class=\"font-small\">Category</label>\n          </div>\n          <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n            <div class=\"form-group\">\n              <select class=\"form-control dropdown\" name=\"ref_id\" (change)=\"onSelectCat($event.target.value)\" ngModel>\n                  <option value=\"\">Select</option>\n                  <option *ngFor=\"let categoryList of cat\" [value]=\"categoryList?.category_id\">{{ categoryList?.category_name }}</option>\n                </select>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- Ask Category End -->\n\n      <!-- Product Form Start -->\n      <div *ngIf=\"showProductForm\">\n        <form #productForm=\"ngForm\" (ngSubmit)=\"productFormData(productForm)\">\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Image</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\" *ngIf=\"selectedImageArray?.length > 0;else elseBlock\">\n                <button class=\"btn btn-md bg-red\" *ngFor=\"let image of selectedImageArray;let i = index\" (click)=\"removeImage(i)\">{{i+1}}</button>\n                <span *ngFor=\"let image of selectedImageArray;\">\n                    <img  src=\"{{imageUrl}}api/{{image?.copyUrl}}\" height=\"40px\" width=\"25px\">\n                </span>\n                <p></p>\n              </div>\n              <ng-template #elseBlock>\n                <p> No Image Selected </p>\n              </ng-template>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\"><span class=\"text-red\"> * </span>Product Name</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"text\" name=\"product_name\" class=\"form-control\" ngModel>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Purchase Cost</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"number\" name=\"purchase_cost\" class=\"form-control\" ngModel>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\"><span class=\"text-red\"> * </span>Taxes</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"number\" name=\"taxes\" class=\"form-control\" ngModel>\n                </div>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Brand</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <select class=\"form-control dropdown\" name=\"brand_id\" ngModel>\n                  <option value=\"\">Select</option>\n                  <option *ngFor = \"let brand of brands?.data\" value=\"{{brand?.brand_id}}\">{{ brand.brand_name }}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Colour</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <select class=\"form-control dropdown\" name=\"colour_id\" ngModel>\n                  <option value=\"\">Select</option>\n                  <option *ngFor = \"let list of colours?.data\" value=\"{{list?.colour_id}}\">{{ list?.colour_name }}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <p class=\"font-small text-center\"><b><u>Product Meta Data</u></b></p>\n          <div *ngFor=\"let form of catForm\">\n            <div class=\"row clearfix\">\n              <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                <label class=\"font-small\">{{ form?.title}}</label>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n                <div class=\"form-group\" *ngIf=\"form?.form_type == 1\">\n                  <div class=\"form-line\">\n                    <input type=\"text\" name=\"{{form?.id}}\" class=\"form-control\" ngModel>\n                  </div>\n                </div>\n                <p></p>\n                <div class=\"form-group\" *ngIf=\"form?.form_type == 2\">\n                  <select class=\"form-control dropdown\" name=\"{{form?.id}}\" ngModel>\n                    <option value=\"\">Select</option>\n                    <option *ngFor = \"let list of form?.dropDowns\" value=\"{{list?.id}}\">{{ list?.title }}</option>\n                  </select>\n                </div>\n                <div class=\"form-group\" *ngIf=\"form?.form_type == 3\">\n                  <div class=\"form-line\">\n                    <input type=\"date\" name=\"{{form?.id}}\" class=\"form-control\" ngModel>\n                  </div>\n                </div>\n                <div class=\"form-group\" *ngIf=\"form?.form_type == 4\">\n                  <div class=\"form-line\">\n                    <input type=\"number\" name=\"{{form?.id}}\" class=\"form-control\" ngModel>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <br>\n          <div class=\"row clearfix\">\n            <div class=\"col-md-4 col-md-offset-7\">\n              <button class=\"btn bg-green btn-block btn-lg\" type=\"submit\">Create Product</button>\n            </div>\n          </div>\n          <br>\n        </form>\n      </div>\n      <!-- Product Form End -->\n\n      <!-- Product Form  Edit Start -->\n      <div *ngIf=\"productFormEdit\">\n        <button class=\"btn btn-md btn-warning\" (click)=\"backtoAddons()\">Back</button>\n        <form #productEditForm=\"ngForm\" (ngSubmit)=\"productEditFormData(productEditForm)\">\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Main Category</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <select class=\"form-control dropdown\" name=\"main_category_id\" (change)=\"onSelectMainCat($event.target.value)\" ngModel=\"{{productFormObjectForBind?.main_category_id}}\" disabled>\n                  <option value=\"\">Select</option>\n                  <option *ngFor=\"let mainCategoryList of mainCat?.data\" [value]=\"mainCategoryList?.category_id\">{{ mainCategoryList?.category_name }}</option>                  \n                </select>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Category</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <select class=\"form-control dropdown\" name=\"category_id\" (change)=\"onSelectCat2($event.target.value)\" ngModel=\"{{productFormObjectForBind?.category_id}}\" disabled>\n                  <option value=\"\">Select</option>\n                  <option *ngFor=\"let categoryList of cat\" [value]=\"categoryList?.category_id\">{{ categoryList?.category_name }}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Image</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\" *ngIf=\"selectedImageArray?.length > 0;else elseBlock\">\n                <button class=\"btn btn-md bg-red\" *ngFor=\"let image of selectedImageArray;let i = index\" (click)=\"removeImage(i)\">{{i+1}}</button>\n                <span *ngFor=\"let image of selectedImageArray;\">\n                    <img  src=\"{{imageUrl}}api/{{image?.copyUrl}}\" height=\"40px\" width=\"25px\">\n                </span>\n                <p></p>\n              </div>\n              <ng-template #elseBlock>\n                <p> No Image Selected </p>\n              </ng-template>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Product Name</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"text\" name=\"product_name\" class=\"form-control\" ngModel=\"{{productFormObjectForBind?.product_name}}\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Purchase Cost</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"number\" name=\"purchase_cost\" class=\"form-control\" ngModel=\"{{productFormObjectForBind?.purchase_cost}}\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Taxes</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"number\" name=\"taxes\" class=\"form-control\" ngModel=\"{{productFormObjectForBind?.taxes}}\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Brand</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <select class=\"form-control dropdown\" name=\"brand_id\" ngModel=\"{{productFormObjectForBind?.brand_id}}\">\n                  <option value=\"\">Select</option>\n                  <option *ngFor = \"let brand of brands?.data\" value=\"{{brand?.brand_id}}\">{{ brand.brand_name }}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Colour</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <select class=\"form-control dropdown\" name=\"colour_id\" ngModel=\"{{productFormObjectForBind?.colour_id}}\">\n                  <option value=\"\">Select</option>\n                  <option *ngFor = \"let list of colours?.data\" value=\"{{list?.colour_id}}\">{{ list?.colour_name }}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Offline Seller</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <select class=\"form-control dropdown\" name=\"seller_id\" ngModel=\"{{productFormObjectForBind?.seller_id}}\">\n                  <option value=\"\">Select</option>\n                  <option *ngFor = \"let list of offlineSeller?.data\" value=\"{{list?.sid}}\">{{ list?.seller_name }}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <p class=\"font-small text-center\"><b><u>Product Meta Data</u></b></p>\n          <!-- <pre>{{ productMetaDataForBind | json }}</pre> -->\n          <div *ngFor=\"let form of catForm; let i = index\">\n            <div class=\"row clearfix\">\n              <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                <label class=\"font-small\">{{ form?.title}}</label>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n                <div class=\"form-group\" *ngIf=\"form?.form_type == 1\">\n                  <div class=\"form-line\">\n                    <input type=\"text\" name=\"{{productMetaDataForBind[i]?.id || 'flag-'+form?.id }}\" class=\"form-control\" ngModel=\"{{ productMetaDataForBind && productMetaDataForBind[i]?.form_value}}\">\n                  </div>\n                </div>\n                <p></p>\n                <div class=\"form-group\" *ngIf=\"form?.form_type == 2\">\n                  <select class=\"form-control dropdown\" name=\"{{productMetaDataForBind[i]?.id || 'flag-'+form?.id}}\" ngModel=\"{{ productMetaDataForBind && productMetaDataForBind[i]?.form_value}}\">\n                    <option value=\"\">Select</option>\n                    <option *ngFor = \"let list of form?.dropDowns\" value=\"{{list?.id}}\">{{ list?.title }}</option>\n                  </select>\n                </div>\n                <div class=\"form-group\" *ngIf=\"form?.form_type == 3\">\n                  <div class=\"form-line\">\n                    <input type=\"date\" name=\"{{productMetaDataForBind[i]?.id || 'flag-'+form?.id}}\" class=\"form-control\" ngModel=\"{{ productMetaDataForBind && productMetaDataForBind[i]?.form_value}}\">\n                  </div>\n                </div>\n                <div class=\"form-group\" *ngIf=\"form?.form_type == 4\">\n                  <div class=\"form-line\">\n                    <input type=\"number\" name=\"{{productMetaDataForBind[i]?.id || 'flag-'+form?.id}}\" class=\"form-control\" ngModel=\"{{ productMetaDataForBind && productMetaDataForBind[i]?.form_value}}\">\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <br>\n          <div class=\"row clearfix\">\n            <div class=\"col-md-4 col-md-offset-7\">\n              <button class=\"btn bg-green btn-block btn-lg\" type=\"submit\">Update Product</button>\n            </div>\n          </div>\n          <br>\n        </form>\n      </div>\n      <!-- Product Form  Edit End -->\n\n      <!-- Seller Form Start -->\n      <div *ngIf=\"showSellerForm\">\n        <form class=\"form-horizontal\" [formGroup]='offlineSellerForm' (ngSubmit)=\"createOfflineSeller(offlineSellerForm.value)\">\n          <h4 class=\"text-center\">\n            <u>Offline Seller</u>\n          </h4>\n          <h4>\n            <u><small>Information </small></u>\n          </h4>\n          <hr>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\"><span style=\"color:red\">*</span>Name</label>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"text\" formControlName=\"seller_name\" class=\"form-control\" (keyup)=\"avoidSpace('seller_name')\">\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Owner Name</label>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"text\" formControlName=\"owner_name\" class=\"form-control\" (keyup)=\"avoidSpace('owner_name')\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\"><span style=\"color:red\">*</span>Gstin No</label>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"text\" formControlName=\"gstin\" class=\"form-control\" (keyup)=\"avoidSpace('gstin')\">\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Pan No</label>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"text\" formControlName=\"pan_no\" class=\"form-control\" (keyup)=\"avoidSpace('pan_no')\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Reg No</label>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"text\" formControlName=\"reg_no\" class=\"form-control\" (keyup)=\"avoidSpace('reg_no')\">\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">is Service?</label>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <select class=\"form-control dropdown\" formControlName=\"is_service\">\n                        <option [ngValue]=\"true\" class=\"font-small\"> Yes</option>\n                        <option [ngValue]=\"false\" class=\"font-small\"> No</option>\n                    </select>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Is Onboarded?</label>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <select class=\"form-control dropdown\" formControlName=\"is_onboarded\">\n                    <option [ngValue]=\"true\" class=\"font-small\"> Yes</option>\n                    <option [ngValue]=\"false\" class=\"font-small\"> No</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n          <h4>\n            <u><small>Address </small></u>\n          </h4>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Address</label>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"text\" formControlName=\"address\" class=\"form-control\" (keyup)=\"avoidSpace('address')\">\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\"><span style=\"color:red\">*</span> City</label>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"text\" formControlName=\"city\" class=\"form-control\" (keyup)=\"avoidSpace('city')\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\"><span style=\"color:red\">*</span> State</label>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"text\" formControlName=\"state\" class=\"form-control\" (keyup)=\"avoidSpace('state')\">\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\"><span style=\"color:red\">*</span> PinCode</label>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"text\" formControlName=\"pincode\" class=\"form-control\" (keyup)=\"avoidSpace('pincode')\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Latitude</label>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"text\" formControlName=\"latitude\" class=\"form-control\" (keyup)=\"avoidSpace('latitude')\">\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Longitude</label>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"text\" formControlName=\"longitude\" class=\"form-control\" (keyup)=\"avoidSpace('longitude')\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">URL</label>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"text\" formControlName=\"url\" class=\"form-control\" (keyup)=\"avoidSpace('url')\">\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Email</label>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"text\" formControlName=\"email\" class=\"form-control\" (keyup)=\"avoidSpace('email')\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Contact No.</label>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"text\" formControlName=\"contact_no\" class=\"form-control\" (keyup)=\"avoidSpace('contact_no')\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\" col-lg-3 col-md-3 col-lg-offset-8 col-md-offset-8 col-sm-offset-4 col-xs-offset-5\">\n              <button type=\"submit\" class=\"btn btn-md btn-success btn-block m-t-15 waves-effect\" [disabled]=\"!offlineSellerForm.valid\">Submit</button>\n            </div>\n          </div>\n          <br>\n        </form>\n      </div>\n      <!-- Seller Form End -->\n      <!-- Addons Buttons Start -->\n      <div *ngIf=\"addons\">\n        <p></p>\n        <div class=\"row clearfix\">\n          <div class=\"col-md-6\">\n            <button class=\"btn btn-block btn-xs bg-orange waves-effect m-b-15\" (click)=\"backToCockpit()\">Back</button>\n          </div>\n          <div class=\"col-md-6\">\n            <button class=\"btn bg-green btn-block btn-xs waves-effect m-b-15\" (click)=\"showbillProductInfoEditForm()\">Product General Info</button>\n          </div>\n        </div>\n        <div class=\"row clearfix\">\n          <div class=\"col-md-3\">\n            <button class=\"btn bg-teal btn-xs btn-block waves-effect m-b-15\" (click)=\"showAddWarrantyForm()\">Add Warranty</button>\n          </div>\n          <div class=\"col-md-3\">\n            <button class=\"btn bg-pink btn-xs btn-block waves-effect m-b-15\" (click)=\"showAddInsuranceForm()\">Add Insurance</button>\n          </div>\n          <div class=\"col-md-3\">\n            <button class=\"btn bg-indigo btn-xs btn-block waves-effect m-b-15\" (click)=\"showAddAmcForm()\">Add AMC</button>\n          </div>\n          <div class=\"col-md-3\">\n            <button class=\"btn bg-red btn-xs btn-block waves-effect m-b-15\" (click)=\"showAddRepairForm()\">Add Repair</button>\n          </div>\n        </div>\n        <div class=\"row clearfix\">\n          <div class=\"col-md-6\" style=\"border: 1px solid black;width:48%\">\n            <div *ngIf=\"productData?.warranties?.length > 0\">\n              <div class=\"body table-responsive\" style=\"padding-bottom:0px;\">\n                <table class=\"table table-condensed\">\n                  <thead>\n                    <tr>\n                      <th><small>Warranty ID</small></th>\n                      <th><small>Product ID</small></th>\n                      <th><small>Add</small></th>\n                      <th><small>Delete</small></th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let list of productData?.warranties\">\n                      <th *ngIf=\"list?.product_id==productId\"><small>{{ list?.id }}</small></th>\n                      <th *ngIf=\"list?.product_id==productId\"><small>{{ list?.product_id }}</small></th>\n                      <th *ngIf=\"list?.product_id==productId\"><small><span class=\"btn btn-info btn-xs\"  title=\"Warranty Info\" (click)=\"editWarrantyForm(list)\"><i class=\"material-icons\" >insert_drive_file</i></span></small></th>\n                      <th *ngIf=\"list?.product_id==productId\"><small><span class=\"btn btn-danger btn-xs\"  title=\"Warranty Info\" (click)=\"deleteWarr(list);deleteWarrantyy=true;\"><i class=\"material-icons\" >delete_forever</i></span></small></th>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n\n\n\n\n          <div class=\"col-md-6\" style=\"border: 1px solid black;width:48%\">\n            <div *ngIf=\"productData?.insurances?.length > 0\">\n              <div class=\"body table-responsive\" style=\"padding-bottom:0px;\">\n                <table class=\"table table-condensed\">\n                  <thead>\n                    <tr>\n                      <th><small>Insurance ID</small></th>\n                      <th><small>Product ID</small></th>\n                      <th><small>Add</small></th>\n                      <th><small>Delete</small></th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let list of productData?.insurances\">\n                      <th *ngIf=\"list?.product_id==productId\"><small>{{ list?.id }}</small></th>\n                      <th *ngIf=\"list?.product_id==productId\"><small>{{ list?.product_id }}</small></th>\n                      <th *ngIf=\"list?.product_id==productId\"><small><span class=\"btn btn-info btn-xs\"  title=\"Insurance Info\" (click)=\"editInsuranceForm(list)\"><i class=\"material-icons\" >insert_drive_file</i></span></small></th>\n                      <th *ngIf=\"list?.product_id==productId\"><small><span class=\"btn btn-danger btn-xs\"  title=\"Warranty Info\" (click)=\"deleteInsure(list);deleteInsurances=true;\"><i class=\"material-icons\" >delete_forever</i></span></small></th>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n        <div class=\"row clearfix\">\n          <div class=\"col-md-6\" style=\"border: 1px solid black;width:48%\">\n            <div *ngIf=\"productData?.amcs?.length > 0\">\n              <div class=\"body table-responsive\" style=\"padding-bottom:0px;\">\n                <table class=\"table table-condensed\">\n                  <thead>\n                    <tr>\n                      <th><small>AMC <br>ID</small></th>\n                      <th><small>Product ID</small></th>\n                      <th><small>Add</small></th>\n                      <th><small>Delete</small></th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let list of productData?.amcs\">\n                      <th *ngIf=\"list?.product_id==productId\"><small>{{ list?.id }}</small></th>\n                      <th *ngIf=\"list?.product_id==productId\"><small>{{ list?.product_id }}</small></th>\n                      <th *ngIf=\"list?.product_id==productId\"><small><span class=\"btn btn-info btn-xs\"  title=\"AMC Info\" (click)=\"editAmcForm(list)\"><i class=\"material-icons\" >insert_drive_file</i></span></small></th>\n                      <th *ngIf=\"list?.product_id==productId\"><small><span class=\"btn btn-danger btn-xs\"  title=\"Warranty Info\" (click)=\"deleteAMC(list);deleteAmcs=true;\"><i class=\"material-icons\" >delete_forever</i></span></small></th>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n\n\n\n\n          <div class=\"col-md-6\" style=\"border: 1px solid black;width:48%\">\n            <div *ngIf=\"productData?.repairs?.length > 0\">\n              <div class=\"body table-responsive\" style=\"padding-bottom:0px;\">\n                <table class=\"table table-condensed\">\n                  <thead>\n                    <tr>\n                      <th><small>Repair ID</small></th>\n                      <th><small>Product ID</small></th>\n                      <th><small>Add</small></th>\n                      <th><small>Delete</small></th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let list of productData?.repairs\">\n                      <th *ngIf=\"list?.product_id==productId\"><small>{{ list?.id }}</small></th>\n                      <th *ngIf=\"list?.product_id==productId\"><small>{{ list?.product_id }}</small></th>\n                      <th *ngIf=\"list?.product_id==productId\"><small><span class=\"btn btn-info btn-xs\"  title=\"Repair Info\" (click)=\"editRepairForm(list)\"><i class=\"material-icons\" >insert_drive_file</i></span></small></th>\n                      <th *ngIf=\"list?.product_id==productId\"><small><span class=\"btn btn-danger btn-xs\"  title=\"Warranty Info\" (click)=\"deleteRep(list);deleteRepairs=true;\"><i class=\"material-icons\" >delete_forever</i></span></small></th>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n      <!-- Addons Buttons End -->\n\n      <!-- Warranty Form Start -->\n      <div *ngIf=\"showWarrantyForm\">\n        <form #warrantyForm=\"ngForm\" (ngSubmit)=\"warrantyFormData(warrantyForm)\">\n          <p></p>\n          <p class=\"badge bg-teal\">Warranty</p>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Image</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\" *ngIf=\"selectedWarrantyImageArray?.length > 0;else elseBlock\">\n                <button class=\"btn btn-md bg-red\" *ngFor=\"let image of selectedWarrantyImageArray;let i = index\" (click)=\"removeImage(i)\">{{i+1}}</button>\n                <span *ngFor=\"let image of selectedWarrantyImageArray;\">\n                    <img  src=\"{{imageUrl}}api/{{image?.copyUrl}}\" height=\"40px\" width=\"25px\">\n                </span>\n                <p></p>\n              </div>\n              <ng-template #elseBlock>\n                <p> No Image Selected </p>\n              </ng-template>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Document Number</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"text\" name=\"document_number\" class=\"form-control\" ngModel>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Renewal Cost</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"number\" name=\"renewal_cost\" class=\"form-control\" ngModel>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Renewal Taxes</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"number\" name=\"renewal_taxes\" class=\"form-control\" ngModel>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Document Date</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"date\" name=\"document_date\" class=\"form-control\" ngModel>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Renewal Type</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <select class=\"form-control dropdown\" name=\"renewal_type\" ngModel>\n                  <option value=\"\">Select</option>\n                  <option value=1>Yearly</option>\n                  <option value=2>Half Yearly</option>\n                  <option value=3>Quarterly</option>\n                  <option value=4>Monthly</option>\n                  <option value=5>5 Yearly</option>\n                  <option value=6>10 Yearly</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Effective Date</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"date\" name=\"effective_date\" class=\"form-control\" ngModel>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Expiry Date</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"date\" name=\"expiry_date\" class=\"form-control\" ngModel>\n                </div>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Offline Seller</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <select class=\"form-control dropdown\" name=\"seller_id\" ngModel>\n                  <option value=\"\">Select</option>\n                  <option *ngFor = \"let list of offlineSeller?.data\" value=\"{{list?.sid}}\">{{ list?.seller_name }}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Online Seller</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <select class=\"form-control dropdown\" name=\"online_seller_id\" ngModel>\n                  <option value=\"\">Select</option>\n                  <option *ngFor = \"let list of onlineSeller?.data\" value=\"{{list?.sid}}\">{{ list?.seller_name }}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row clearfix\">\n            <div class=\"col-md-4 col-md-offset-7\">\n              <button class=\"btn bg-green btn-block btn-lg\" type=\"submit\">Add Warranty</button>\n            </div>\n          </div>\n          <br>\n        </form>\n      </div>\n      <!-- Warranty Form End -->\n\n      <!-- Warranty Edit Form Start -->\n      <div *ngIf=\"showWarrantyEditForm\">\n        <button class=\"btn btn-md btn-warning\" (click)=\"backtoAddons()\">Back</button>\n        <form #warrantyEditForm=\"ngForm\" (ngSubmit)=\"warrantyEditFormData(warrantyEditForm)\">\n          <p></p>\n          <p class=\"badge bg-teal\">Warranty</p>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Image</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\" *ngIf=\"selectedEditWarrantyImageArray?.length > 0;else elseBlock\">\n                <button class=\"btn btn-md bg-red\" *ngFor=\"let image of selectedEditWarrantyImageArray;let i = index\" (click)=\"removeImage(i)\">{{i+1}}</button>\n                <span *ngFor=\"let image of selectedEditWarrantyImageArray;\">\n                    <img  src=\"{{imageUrl}}api/{{image?.copyUrl}}\" height=\"40px\" width=\"25px\">\n                </span>\n                <p></p>\n              </div>\n              <ng-template #elseBlock>\n                <p> No Image Selected </p>\n              </ng-template>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Document Number</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"text\" name=\"document_number\" class=\"form-control\" ngModel=\"{{warrantyFormObjectForBind?.document_number}}\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Renewal Cost</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"number\" name=\"renewal_cost\" class=\"form-control\" ngModel=\"{{warrantyFormObjectForBind?.renewal_cost}}\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Renewal Taxes</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"number\" name=\"renewal_taxes\" class=\"form-control\" ngModel=\"{{warrantyFormObjectForBind?.renewal_taxes}}\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Document Date</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"date\" name=\"document_date\" class=\"form-control\" ngModel=\"{{warrantyFormObjectForBind?.document_date | date:'yyyy-MM-dd'}}\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Renewal Type</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <select class=\"form-control dropdown\" name=\"renewal_type\" ngModel=\"{{warrantyFormObjectForBind?.renewal_type}}\">\n                  <option value=\"\">Select</option>\n                  <option value=1>Yearly</option>\n                  <option value=2>Half Yearly</option>\n                  <option value=3>Quarterly</option>\n                  <option value=4>Monthly</option>\n                  <option value=5>5 Yearly</option>\n                  <option value=6>10 Yearly</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Effective Date</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"date\" name=\"effective_date\" class=\"form-control\" ngModel=\"{{warrantyFormObjectForBind?.effective_date | date:'yyyy-MM-dd'}}\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Expiry Date</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"date\" name=\"expiry_date\" class=\"form-control\" ngModel=\"{{warrantyFormObjectForBind?.expiry_date | date:'yyyy-MM-dd'}}\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Offline Seller</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <select class=\"form-control dropdown\" name=\"seller_id\" ngModel=\"{{warrantyFormObjectForBind?.seller_id}}\">\n                  <option value=\"\">Select</option>\n                  <option *ngFor = \"let list of offlineSeller?.data\" value=\"{{list?.sid}}\">{{ list?.seller_name }}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Online Seller</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <select class=\"form-control dropdown\" name=\"online_seller_id\" ngModel=\"{{warrantyFormObjectForBind?.online_seller_id}}\">\n                  <option value=\"\">Select</option>\n                  <option *ngFor = \"let list of onlineSeller?.data\" value=\"{{list?.sid}}\">{{ list?.seller_name }}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row clearfix\">\n            <div class=\"col-md-4 col-md-offset-7\">\n              <button class=\"btn bg-green btn-block btn-lg\" type=\"submit\">Update Warranty</button>\n            </div>\n          </div>\n          <br>\n        </form>\n      </div>\n      <!-- Warranty Edit Form End -->\n\n      <!-- Insurance Form Start -->\n      <div *ngIf=\"showInsuranceForm\">\n        <form #insuranceForm=\"ngForm\" (ngSubmit)=\"insuranceFormData(insuranceForm)\">\n          <p></p>\n          <p class=\"badge bg-pink\">Insurance</p>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Image</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\" *ngIf=\"selectedInsuranceImageArray?.length > 0;else elseBlock\">\n                <button class=\"btn btn-md bg-red\" *ngFor=\"let image of selectedInsuranceImageArray;let i = index\" (click)=\"removeImage(i)\">{{i+1}}</button>\n                <span *ngFor=\"let image of selectedInsuranceImageArray;\">\n                    <img  src=\"{{imageUrl}}api/{{image?.copyUrl}}\" height=\"40px\" width=\"25px\">\n                </span>\n                <p></p>\n              </div>\n              <ng-template #elseBlock>\n                <p> No Image Selected </p>\n              </ng-template>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Document Number</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"text\" name=\"document_number\" class=\"form-control\" ngModel>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Renewal Cost</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"number\" name=\"renewal_cost\" class=\"form-control\" ngModel>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Renewal Taxes</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"number\" name=\"renewal_taxes\" class=\"form-control\" ngModel>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Document Date</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"date\" name=\"document_date\" class=\"form-control\" ngModel>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Renewal Type</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <select class=\"form-control dropdown\" name=\"renewal_type\" ngModel>\n                  <option value=\"\">Select</option>\n                  <option value=1>Yearly</option>\n                  <option value=2>Half Yearly</option>\n                  <option value=3>Quarterly</option>\n                  <option value=4>Monthly</option>\n                  <option value=5>5 Yearly</option>\n                  <option value=6>10 Yearly</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Effective Date</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"date\" name=\"effective_date\" class=\"form-control\" ngModel>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Expiry Date</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"date\" name=\"expiry_date\" class=\"form-control\" ngModel>\n                </div>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Offline Seller</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <select class=\"form-control dropdown\" name=\"seller_id\" ngModel>\n                  <option value=\"\">Select</option>\n                  <option *ngFor = \"let list of offlineSeller?.data\" value=\"{{list?.sid}}\">{{ list?.seller_name }}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Online Seller</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <select class=\"form-control dropdown\" name=\"online_seller_id\" ngModel>\n                  <option value=\"\">Select</option>\n                  <option *ngFor = \"let list of onlineSeller?.data\" value=\"{{list?.sid}}\">{{ list?.seller_name }}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row clearfix\">\n            <div class=\"col-md-4 col-md-offset-7\">\n              <button class=\"btn bg-green btn-block btn-lg\" type=\"submit\">Add Insurance</button>\n            </div>\n          </div>\n          <br>\n        </form>\n      </div>\n      <!-- Insurance Form End -->\n\n      <!-- Insurance Edit Form Start -->\n      <div *ngIf=\"showInsuranceEditForm\">\n        <button class=\"btn btn-md btn-warning\" (click)=\"backtoAddons()\">Back</button>\n        <form #insuranceEditForm=\"ngForm\" (ngSubmit)=\"insuranceEditFormData(insuranceEditForm)\">\n          <p></p>\n          <p class=\"badge bg-pink\">Insurance</p>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Image</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\" *ngIf=\"selectedEditInsuranceImageArray?.length > 0;else elseBlock\">\n                <button class=\"btn btn-md bg-red\" *ngFor=\"let image of selectedEditInsuranceImageArray;let i = index\" (click)=\"removeImage(i)\">{{i+1}}</button>\n                <span *ngFor=\"let image of selectedEditInsuranceImageArray;\">\n                    <img  src=\"{{imageUrl}}api/{{image?.copyUrl}}\" height=\"40px\" width=\"25px\">\n                </span>\n                <p></p>\n              </div>\n              <ng-template #elseBlock>\n                <p> No Image Selected </p>\n              </ng-template>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Document Number</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"text\" name=\"document_number\" class=\"form-control\" ngModel=\"{{insuranceFormObjectForBind?.document_number}}\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Renewal Cost</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"number\" name=\"renewal_cost\" class=\"form-control\" ngModel=\"{{insuranceFormObjectForBind?.renewal_cost}}\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Renewal Taxes</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"number\" name=\"renewal_taxes\" class=\"form-control\" ngModel=\"{{insuranceFormObjectForBind?.renewal_taxes}}\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Document Date</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"date\" name=\"document_date\" class=\"form-control\" ngModel=\"{{insuranceFormObjectForBind?.document_date | date:'yyyy-MM-dd'}}\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Renewal Type</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <select class=\"form-control dropdown\" name=\"renewal_type\" ngModel=\"{{insuranceFormObjectForBind?.renewal_type}}\">\n                  <option value=\"\">Select</option>\n                  <option value=1>Yearly</option>\n                  <option value=2>Half Yearly</option>\n                  <option value=3>Quarterly</option>\n                  <option value=4>Monthly</option>\n                  <option value=5>5 Yearly</option>\n                  <option value=6>10 Yearly</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Effective Date</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"date\" name=\"effective_date\" class=\"form-control\" ngModel=\"{{insuranceFormObjectForBind?.effective_date | date:'yyyy-MM-dd'}}\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Expiry Date</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"date\" name=\"expiry_date\" class=\"form-control\" ngModel=\"{{insuranceFormObjectForBind?.expiry_date | date:'yyyy-MM-dd'}}\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Offline Seller</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <select class=\"form-control dropdown\" name=\"seller_id\" ngModel=\"{{insuranceFormObjectForBind?.seller_id}}\">\n                  <option value=\"\">Select</option>\n                  <option *ngFor = \"let list of offlineSeller?.data\" value=\"{{list?.sid}}\">{{ list?.seller_name }}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Online Seller</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <select class=\"form-control dropdown\" name=\"online_seller_id\" ngModel=\"{{insuranceFormObjectForBind?.online_seller_id}}\">\n                  <option value=\"\">Select</option>\n                  <option *ngFor = \"let list of onlineSeller?.data\" value=\"{{list?.sid}}\">{{ list?.seller_name }}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row clearfix\">\n            <div class=\"col-md-4 col-md-offset-7\">\n              <button class=\"btn bg-green btn-block btn-lg\" type=\"submit\">Update Insurance</button>\n            </div>\n          </div>\n          <br>\n        </form>\n      </div>\n      <!-- Insurance Edit Form End -->\n\n      <!-- AMC Form Start -->\n      <div *ngIf=\"showAmcForm\">\n        <form #amcForm=\"ngForm\" (ngSubmit)=\"amcFormData(amcForm)\">\n          <p></p>\n          <p class=\"badge bg-indigo\">AMC</p>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Image</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\" *ngIf=\"selectedAmcImageArray?.length > 0;else elseBlock\">\n                <button class=\"btn btn-md bg-red\" *ngFor=\"let image of selectedAmcImageArray;let i = index\" (click)=\"removeImage(i)\">{{i+1}}</button>\n                <span *ngFor=\"let image of selectedAmcImageArray;\">\n                    <img  src=\"{{imageUrl}}api/{{image?.copyUrl}}\" height=\"40px\" width=\"25px\">\n                </span>\n                <p></p>\n              </div>\n              <ng-template #elseBlock>\n                <p> No Image Selected </p>\n              </ng-template>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Document Number</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"text\" name=\"document_number\" class=\"form-control\" ngModel>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Renewal Cost</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"number\" name=\"renewal_cost\" class=\"form-control\" ngModel>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Renewal Taxes</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"number\" name=\"renewal_taxes\" class=\"form-control\" ngModel>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Document Date</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"date\" name=\"document_date\" class=\"form-control\" ngModel>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Renewal Type</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <select class=\"form-control dropdown\" name=\"renewal_type\" ngModel>\n                  <option value=\"\">Select</option>\n                  <option value=1>Yearly</option>\n                  <option value=2>Half Yearly</option>\n                  <option value=3>Quarterly</option>\n                  <option value=4>Monthly</option>\n                  <option value=5>5 Yearly</option>\n                  <option value=6>10 Yearly</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Effective Date</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"date\" name=\"effective_date\" class=\"form-control\" ngModel>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Expiry Date</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"date\" name=\"expiry_date\" class=\"form-control\" ngModel>\n                </div>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Offline Seller</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <select class=\"form-control dropdown\" name=\"seller_id\" ngModel>\n                  <option value=\"\">Select</option>\n                  <option *ngFor = \"let list of offlineSeller?.data\" value=\"{{list?.sid}}\">{{ list?.seller_name }}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Online Seller</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <select class=\"form-control dropdown\" name=\"online_seller_id\" ngModel>\n                  <option value=\"\">Select</option>\n                  <option *ngFor = \"let list of onlineSeller?.data\" value=\"{{list?.sid}}\">{{ list?.seller_name }}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row clearfix\">\n            <div class=\"col-md-4 col-md-offset-7\">\n              <button class=\"btn bg-green btn-block btn-lg\" type=\"submit\">Add AMC</button>\n            </div>\n          </div>\n          <br>\n        </form>\n      </div>\n      <!-- AMC Form End -->\n\n      <!-- AMC Edit Form Start -->\n      <div *ngIf=\"showAmcEditForm\">\n        <button class=\"btn btn-md btn-warning\" (click)=\"backtoAddons()\">Back</button>\n        <form #amcEditForm=\"ngForm\" (ngSubmit)=\"amcEditFormData(amcEditForm)\">\n          <p></p>\n          <p class=\"badge bg-indigo\">AMC</p>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Image</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\" *ngIf=\"selectedEditAmcImageArray?.length > 0;else elseBlock\">\n                <button class=\"btn btn-md bg-red\" *ngFor=\"let image of selectedEditAmcImageArray;let i = index\" (click)=\"removeImage(i)\">{{i+1}}</button>\n                <span *ngFor=\"let image of selectedEditAmcImageArray;\">\n                    <img  src=\"{{imageUrl}}api/{{image?.copyUrl}}\" height=\"40px\" width=\"25px\">\n                </span>\n                <p></p>\n              </div>\n              <ng-template #elseBlock>\n                <p> No Image Selected </p>\n              </ng-template>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Document Number</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"text\" name=\"document_number\" class=\"form-control\" ngModel=\"{{amcFormObjectForBind?.document_number}}\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Renewal Cost</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"number\" name=\"renewal_cost\" class=\"form-control\" ngModel=\"{{amcFormObjectForBind?.renewal_cost}}\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Renewal Taxes</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"number\" name=\"renewal_taxes\" class=\"form-control\" ngModel=\"{{amcFormObjectForBind?.renewal_taxes}}\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Document Date</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"date\" name=\"document_date\" class=\"form-control\" ngModel=\"{{amcFormObjectForBind?.document_date | date:'yyyy-MM-dd'}}\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Renewal Type</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <select class=\"form-control dropdown\" name=\"renewal_type\" ngModel=\"{{amcFormObjectForBind?.renewal_type}}\">\n                  <option value=\"\">Select</option>\n                  <option value=1>Yearly</option>\n                  <option value=2>Half Yearly</option>\n                  <option value=3>Quarterly</option>\n                  <option value=4>Monthly</option>\n                  <option value=5>5 Yearly</option>\n                  <option value=6>10 Yearly</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Effective Date</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"date\" name=\"effective_date\" class=\"form-control\" ngModel=\"{{amcFormObjectForBind?.effective_date | date:'yyyy-MM-dd'}}\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Expiry Date</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"date\" name=\"expiry_date\" class=\"form-control\" ngModel=\"{{amcFormObjectForBind?.expiry_date | date:'yyyy-MM-dd'}}\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Offline Seller</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <select class=\"form-control dropdown\" name=\"seller_id\" ngModel=\"{{amcFormObjectForBind?.seller_id}}\">\n                  <option value=\"\">Select</option>\n                  <option *ngFor = \"let list of offlineSeller?.data\" value=\"{{list?.sid}}\">{{ list?.seller_name }}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Online Seller</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <select class=\"form-control dropdown\" name=\"online_seller_id\" ngModel=\"{{amcFormObjectForBind?.online_seller_id}}\">\n                  <option value=\"\">Select</option>\n                  <option *ngFor = \"let list of onlineSeller?.data\" value=\"{{list?.sid}}\">{{ list?.seller_name }}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row clearfix\">\n            <div class=\"col-md-4 col-md-offset-7\">\n              <button class=\"btn bg-green btn-block btn-lg\" type=\"submit\">Update AMC</button>\n            </div>\n          </div>\n          <br>\n        </form>\n      </div>\n      <!-- AMC Edit Form End -->\n\n      <!-- Repair Form Start -->\n      <div *ngIf=\"showRepairForm\">\n        <form #repairForm=\"ngForm\" (ngSubmit)=\"repairFormData(repairForm)\">\n          <p></p>\n          <p class=\"badge bg-red\">Repair</p>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Image</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\" *ngIf=\"selectedRepairImageArray?.length > 0;else elseBlock\">\n                <button class=\"btn btn-md bg-red\" *ngFor=\"let image of selectedRepairImageArray;let i = index\" (click)=\"removeImage(i)\">{{i+1}}</button>\n                <span *ngFor=\"let image of selectedRepairImageArray;\">\n                    <img  src=\"{{imageUrl}}api/{{image?.copyUrl}}\" height=\"40px\" width=\"25px\">\n                </span>\n                <p></p>\n              </div>\n              <ng-template #elseBlock>\n                <p> No Image Selected </p>\n              </ng-template>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Document Number</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"text\" name=\"document_number\" class=\"form-control\" ngModel>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Repair Cost</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"number\" name=\"repair_cost\" class=\"form-control\" ngModel>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Repair Taxes</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"number\" name=\"repair_taxes\" class=\"form-control\" ngModel>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Document Date</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"date\" name=\"document_date\" class=\"form-control\" ngModel>\n                </div>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Offline Seller</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <select class=\"form-control dropdown\" name=\"seller_id\" ngModel>\n                  <option value=\"\">Select</option>\n                  <option *ngFor = \"let list of offlineSeller?.data\" value=\"{{list?.sid}}\">{{ list?.seller_name }}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Online Seller</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <select class=\"form-control dropdown\" name=\"online_seller_id\" ngModel>\n                  <option value=\"\">Select</option>\n                  <option *ngFor = \"let list of onlineSeller?.data\" value=\"{{list?.sid}}\">{{ list?.seller_name }}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row clearfix\">\n            <div class=\"col-md-4 col-md-offset-7\">\n              <button class=\"btn bg-green btn-block btn-lg\" type=\"submit\">Add Repair</button>\n            </div>\n          </div>\n          <br>\n        </form>\n      </div>\n      <!-- Repair Form End -->\n\n      <!-- Repair Edit Form Start -->\n      <div *ngIf=\"showRepairEditForm\">\n        <button class=\"btn btn-md btn-warning\" (click)=\"backtoAddons()\">Back</button>\n        <form #repairEditForm=\"ngForm\" (ngSubmit)=\"repairEditFormData(repairEditForm)\">\n          <p></p>\n          <p class=\"badge bg-red\">Repair</p>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Image</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\" *ngIf=\"selectedEditRepairImageArray?.length > 0;else elseBlock\">\n                <button class=\"btn btn-md bg-red\" *ngFor=\"let image of selectedEditRepairImageArray;let i = index\" (click)=\"removeImage(i)\">{{i+1}}</button>\n                <span *ngFor=\"let image of selectedEditRepairImageArray;\">\n                    <img  src=\"{{imageUrl}}api/{{image?.copyUrl}}\" height=\"40px\" width=\"25px\">\n                </span>\n                <p></p>\n              </div>\n              <ng-template #elseBlock>\n                <p> No Image Selected </p>\n              </ng-template>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Document Number</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"text\" name=\"document_number\" class=\"form-control\" ngModel=\"{{repairFormObjectForBind?.document_number}}\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Repair Cost</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"number\" name=\"repair_cost\" class=\"form-control\" ngModel=\"{{repairFormObjectForBind?.repair_cost}}\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Repair Taxes</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"number\" name=\"repair_taxes\" class=\"form-control\" ngModel=\"{{repairFormObjectForBind?.repair_taxes}}\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Document Date</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <div class=\"form-line\">\n                  <input type=\"date\" name=\"document_date\" class=\"form-control\" ngModel=\"{{repairFormObjectForBind?.document_date | date:'yyyy-MM-dd'}}\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Offline Seller</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <select class=\"form-control dropdown\" name=\"seller_id\" ngModel=\"{{repairFormObjectForBind?.seller_id}}\">\n                  <option value=\"\">Select</option>\n                  <option *ngFor = \"let list of offlineSeller?.data\" value=\"{{list?.sid}}\">{{ list?.seller_name }}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n              <label class=\"font-small\">Online Seller</label>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n              <div class=\"form-group\">\n                <select class=\"form-control dropdown\" name=\"online_seller_id\" ngModel=\"{{repairFormObjectForBind?.online_seller_id}}\">\n                  <option value=\"\">Select</option>\n                  <option *ngFor = \"let list of onlineSeller?.data\" value=\"{{list?.sid}}\">{{ list?.seller_name }}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row clearfix\">\n            <div class=\"col-md-4 col-md-offset-7\">\n              <button class=\"btn bg-green btn-block btn-lg\" type=\"submit\">Update Repair</button>\n            </div>\n          </div>\n          <br>\n        </form>\n      </div>\n      <!-- Repair Edit Form End -->\n    </div>\n  </div>\n</div>\n\n\n<app-dialog [(visible)]=\"deleteWarrantyy\">\n  <div class=\"modal-header\">\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\n        <h3>Are You sure you want to delete the Warranty?</h3>\n      </div>\n\n    </div>\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n      </div>\n      <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\n\n        <button class=\"btn bg-green btn-block btn-lg\" type=\"submit\" (click)=\"deleteWarranty();deleteWarrantyy=false;\">YES</button>\n      </div>\n      <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\n        <button class=\"btn bg-red btn-block btn-lg\" type=\"submit\" (click)=\"deleteWarrantyy=false;\">NO</button>\n      </div>\n      <div class=\"col-lg-4 col-md-4 col-sm-offset-4 col-xs-4\">\n      </div>\n    </div>\n  </div>\n</app-dialog>\n\n\n<app-dialog [(visible)]=\"deleteInsurances\">\n  <div class=\"modal-header\">\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\n        <h3>Are You sure you want to delete the Insurance?</h3>\n      </div>\n\n    </div>\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n      </div>\n      <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\n\n        <button class=\"btn bg-green btn-block btn-lg\" type=\"submit\" (click)=\"deleteInsurance();deleteInsurances=false;\">YES</button>\n      </div>\n      <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\n        <button class=\"btn bg-red btn-block btn-lg\" type=\"submit\" (click)=\"deleteInsurances=false;\">NO</button>\n      </div>\n      <div class=\"col-lg-4 col-md-4 col-sm-offset-4 col-xs-4\">\n      </div>\n    </div>\n  </div>\n</app-dialog>\n\n\n<app-dialog [(visible)]=\"deleteAmcs\">\n  <div class=\"modal-header\">\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\n        <h3>Are You sure you want to delete the AMC?</h3>\n      </div>\n\n    </div>\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n      </div>\n      <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\n\n        <button class=\"btn bg-green btn-block btn-lg\" type=\"submit\" (click)=\"deleteAmc();deleteAmcs=false;\">YES</button>\n      </div>\n      <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\n        <button class=\"btn bg-red btn-block btn-lg\" type=\"submit\" (click)=\"deleteAmcs=false;\">NO</button>\n      </div>\n      <div class=\"col-lg-4 col-md-4 col-sm-offset-4 col-xs-4\">\n      </div>\n    </div>\n  </div>\n</app-dialog>\n\n<app-dialog [(visible)]=\"deleteRepairs\">\n  <div class=\"modal-header\">\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\n        <h3>Are You sure you want to delete the Repair?</h3>\n      </div>\n\n    </div>\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n      </div>\n      <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\n\n        <button class=\"btn bg-green btn-block btn-lg\" type=\"submit\" (click)=\"deleteRepair();deleteRepairs=false;\">YES</button>\n      </div>\n      <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\n        <button class=\"btn bg-red btn-block btn-lg\" type=\"submit\" (click)=\"deleteRepairs=false;\">NO</button>\n      </div>\n      <div class=\"col-lg-4 col-md-4 col-sm-offset-4 col-xs-4\">\n      </div>\n    </div>\n  </div>\n</app-dialog>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/job-management/bill/create-bill/create-bill.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateBillComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_function_service__ = __webpack_require__("../../../../../src/app/_services/function.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateBillComponent = (function () {
    function CreateBillComponent(route, router, userService, fb, functionService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.fb = fb;
        this.functionService = functionService;
        this.imageArray = [];
        this.selectedImageArray = [];
        this.selectedWarrantyImageArray = [];
        this.selectedEditWarrantyImageArray = [];
        this.selectedInsuranceImageArray = [];
        this.selectedEditInsuranceImageArray = [];
        this.selectedAmcImageArray = [];
        this.selectedEditAmcImageArray = [];
        this.selectedRepairImageArray = [];
        this.selectedEditRepairImageArray = [];
        this.images = [];
        this.imageUrl = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* appConfig */].apiUrl;
        this.imageIndex = 0;
        this.offlineSellerArray = [];
        this.productFromMetaData = [];
        this.productEditFromMetaData = [];
        //******************Hide and Show Variables  ****************************//
        this.jobDetailsShow = true;
        this.billGeneralInfo = false;
        this.billGeneralInfoEdit = false;
        this.cockpit = false;
        this.cockpit2 = false;
        this.addons = false;
        this.askMainCategory = false;
        this.showProductForm = false;
        this.showSellerForm = false;
        this.showWarrantyForm = false;
        this.showWarrantyEditForm = false;
        this.showInsuranceForm = false;
        this.showInsuranceEditForm = false;
        this.showAmcForm = false;
        this.showAmcEditForm = false;
        this.showRepairForm = false;
        this.showRepairEditForm = false;
        this.productFormEdit = false;
        this.imagerotation = 0;
        this.deleteRepairs = false;
        this.deleteAmcs = false;
        this.deleteInsurances = false;
        this.deleteWarrantyy = false;
        this.deleteJob = false;
        this.completeJobDialog = false;
        this.showSellerInfo = false;
        this.caseButton = false;
        this.showProductList = false;
        this.jobId = route.snapshot.params.id;
        var info = JSON.parse(localStorage.getItem('currentUser'));
        this.ceId = info.id;
    }
    CreateBillComponent.prototype.ngOnInit = function () {
        this.getDetailsOfJob();
        webGlObject.init();
    };
    // get details of current job
    CreateBillComponent.prototype.getDetailsOfJob = function () {
        var _this = this;
        this.userService.getJobByID(this.jobId)
            .subscribe(function (res) {
            _this.jobDetails = res.data;
            console.log('job details', _this.jobDetails);
            _this.userId = res.data.user_id;
            _this.imageArray = res.data.copies;
            console.log(_this.imageArray, "image array");
            // console.log(this.imageArray,"image ka array");
            _this.imageArrayLength = _this.imageArray.length;
            // console.log(this.imageArrayLength, "image length")
            if (_this.imageArray.length == 0) {
                alert("There is no image in this bill please contact Admin");
            }
            for (var _i = 0, _a = _this.imageArray; _i < _a.length; _i++) {
                var i = _a[_i];
                _this.images.push(_this.imageUrl + 'api/' + i.copyUrl);
            }
        }, function (error) {
            console.log(error);
        });
    };
    // prev image
    CreateBillComponent.prototype.prevImage = function () {
        if (this.imageIndex > 0) {
            this.imageIndex = this.imageIndex - 1;
        }
    };
    // next image
    CreateBillComponent.prototype.nextImage = function () {
        if (this.imageIndex < this.imageArrayLength - 1) {
            this.imageIndex = this.imageIndex + 1;
        }
    };
    CreateBillComponent.prototype.rotate = function () {
        this.imagerotation = this.imagerotation + 90;
    };
    //**********************************Bill General Info**********************************//
    // create new bill
    CreateBillComponent.prototype.billGeneralInfoFormData = function (form) {
        var _this = this;
        this.billGeneralInfoFormObject = form.value;
        this.billGeneralInfoFormObject['job_id'] = this.jobId;
        this.billGeneralInfoFormObject['user_id'] = this.userId;
        console.log(this.billGeneralInfoFormObject);
        this.userService.createBill(this.billGeneralInfoFormObject)
            .subscribe(function (res) {
            console.log(res);
            alert("Bill Created Successfully");
            _this.backTojobDetailsShow();
            _this.getDetailsOfJob();
        }, function (error) {
            console.log(error);
            var err = JSON.parse(error['_body']);
            alert(err.reason);
        });
    };
    // update bill
    CreateBillComponent.prototype.billGeneralInfoEditFormData = function (form) {
        var _this = this;
        this.billGeneralInfoEditFormObject = form.value;
        this.billGeneralInfoEditFormObject['id'] = this.billId;
        console.log(this.billGeneralInfoEditFormObject);
        this.userService.updateBill(this.billGeneralInfoEditFormObject)
            .subscribe(function (res) {
            console.log(res);
            alert("Bill Updated Successfully");
            // this.backTojobDetailsShow();
            _this.getDetailsOfJob();
        }, function (error) {
            console.log(error);
            var err = JSON.parse(error['_body']);
            alert(err.reason);
        });
    };
    // delete bill
    CreateBillComponent.prototype.deleteBill = function (req) {
        var _this = this;
        console.log(req);
        this.userService.deleteBill(req)
            .subscribe(function (res) {
            console.log(res);
            alert("Bill Deleted");
            _this.getDetailsOfJob();
        }, function (err) {
            console.log(err);
        });
    };
    CreateBillComponent.prototype.showbillGeneralInfoEditForm = function () {
        this.billGeneralInfoEdit = true;
        this.askMainCategory = false;
        this.showProductForm = false;
        this.showSellerForm = false;
        this.showProductList = false;
    };
    CreateBillComponent.prototype.showbillProductInfoEditForm = function () {
        this.addons = false;
        this.productFormEdit = true;
        this.showWarrantyForm = false;
        this.showInsuranceForm = false;
        this.showAmcForm = false;
        this.showRepairForm = false;
    };
    // complete job
    CreateBillComponent.prototype.completeJob = function () {
        var _this = this;
        this.userService.completeJob(this.jobId, this.ceId)
            .subscribe(function (res) {
            console.log(res);
            alert("JOB Completed Successfully");
            _this.router.navigateByUrl('/dashboard/new');
        }, function (error) {
            console.log(error);
            var err = JSON.parse(error['_body']);
            alert(err.reason);
        });
    };
    //********************************* Product Functions***********************************//
    CreateBillComponent.prototype.deleteCall = function (req) {
        var _this = this;
        console.log(req);
        if (req.status_type == 11) {
            this.deleteJob = false;
            this.userService.unLinkProduct(req.id)
                .subscribe(function (res) {
                console.log(res);
                alert("Product Un-linked");
                _this.getDetailsOfJob();
                // this.openProductList();
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.deleteJob = true;
            this.requestId = req.id;
            this.billId = req.bill_id;
            console.log(this.billId, "bill id");
        }
    };
    CreateBillComponent.prototype.makeProduct = function (bill) {
        this.billId = bill.id;
        this.onlineSellerList();
        this.billGeneralInfoFormObjectForBind = bill;
        console.log(bill, "bill wala ");
        this.cockpit = true;
        this.cockpit2 = false;
        this.jobDetailsShow = false;
    };
    CreateBillComponent.prototype.deleteProduct = function () {
        var _this = this;
        this.userService.deleteProduct(this.billId, this.requestId)
            .subscribe(function (res) {
            console.log(res);
            alert("Product Deleted");
            _this.getDetailsOfJob();
            // this.openProductList();
        }, function (err) {
            console.log(err);
        });
    };
    // create product 
    CreateBillComponent.prototype.productFormData = function (form) {
        var _this = this;
        // console.log(form.value);
        this.productObject = {
            'category_id': this.catId,
            'main_category_id': this.mainCatId,
            'product_name': form.value.product_name,
            'purchase_cost': form.value.purchase_cost,
            'copies': this.selectedImageArray,
            'taxes': form.value.taxes,
            'brand_id': form.value.brand_id,
            'colour_id': form.value.colour_id,
            'seller_id': this.sellerId,
            'user_id': this.userId,
            'job_id': this.jobId,
            'billId': this.billId
        };
        // console.log(this.productObject);
        var filterData = form.value;
        delete filterData['product_name'];
        delete filterData['purchase_cost'];
        delete filterData['taxes'];
        delete filterData['brand_id'];
        delete filterData['colour_id'];
        delete filterData['seller_id'];
        this.productFromMetaData = [];
        for (var val in filterData) {
            this.productFromMetaData.push({ 'category_form_id': val, 'form_value': filterData[val] });
        }
        this.productObject['metaData'] = this.productFromMetaData;
        // console.log(this.productFromMetaData);
        console.log(this.productObject);
        this.userService.createProduct(this.productObject)
            .subscribe(function (res) {
            console.log(res);
            alert("Product Added");
            _this.askMainCategory = false;
            _this.showProductForm = false;
            _this.getDetailsOfJob();
        }, function (error) {
            console.log(error);
            var err = JSON.parse(error['_body']);
            alert(err.reason);
        });
    };
    // edit product form
    CreateBillComponent.prototype.productEditFormData = function (form) {
        var _this = this;
        // console.log(form.value);
        this.productEditObject = {
            'category_id': form.value.category_id,
            'main_category_id': form.value.main_category_id,
            'product_name': form.value.product_name,
            'purchase_cost': form.value.purchase_cost,
            'copies': this.selectedImageArray,
            'taxes': form.value.taxes,
            'brand_id': form.value.brand_id,
            'colour_id': form.value.colour_id,
            'seller_id': form.value.seller_id,
            'user_id': this.userId,
            'job_id': this.jobId,
            'billId': this.billId,
            'productId': this.productId
        };
        console.log(this.productEditObject);
        var editFilterData = form.value;
        console.log("Edit Filter Data", editFilterData);
        delete editFilterData['product_name'];
        delete editFilterData['purchase_cost'];
        delete editFilterData['taxes'];
        delete editFilterData['brand_id'];
        delete editFilterData['colour_id'];
        delete editFilterData['seller_id'];
        delete editFilterData['main_category_id'];
        delete editFilterData['category_id'];
        this.productEditFromMetaData = [];
        for (var val in editFilterData) {
            if (val.includes('flag')) {
                this.productEditFromMetaData.push({ 'category_form_id': val.split('-')[1], 'form_value': editFilterData[val] });
            }
            else {
                this.productEditFromMetaData.push({ 'id': val, 'form_value': editFilterData[val] });
            }
        }
        this.productEditObject['metaData'] = this.productEditFromMetaData;
        console.log(this.productEditObject);
        this.userService.updateProduct(this.productEditObject)
            .subscribe(function (res) {
            console.log(res);
            alert("Product Updated");
            _this.getDetailsOfJob();
            _this.cockpit = true;
            _this.productFormEdit = false;
        }, function (error) {
            console.log(error);
            var err = JSON.parse(error['_body']);
            alert(err.reason);
        });
    };
    // get list of main category
    CreateBillComponent.prototype.mainCategoryList = function () {
        var _this = this;
        this.cat = [];
        this.userService.getCategoryList(1) // 1 for main category refer to api doc
            .subscribe(function (mainCat) {
            _this.mainCat = mainCat;
            // console.log(mainCat);
        });
    };
    // after select main category show list of category
    CreateBillComponent.prototype.onSelectMainCat = function (catID) {
        var _this = this;
        this.mainCatId = catID;
        this.cat = [];
        this.userService.getSubCategoryList(catID)
            .subscribe(function (res) {
            _this.cat = res.data.subCategories;
            // console.log(res, "category");
        });
    };
    // after select category show  category form
    CreateBillComponent.prototype.onSelectCat = function (catID) {
        var _this = this;
        this.catId = catID;
        this.userService.getSubCategoryList(catID)
            .subscribe(function (res) {
            _this.catForm = res.data.categoryForms;
            console.log(_this.catForm, "category form");
            _this.showProductForm = true;
            _this.getBrandListByCategory(catID);
            _this.getColorList();
        });
    };
    // after select category show  category form
    CreateBillComponent.prototype.onSelectCat2 = function (catID) {
        var _this = this;
        // console.log("cat id", catID);
        this.catId = catID;
        this.userService.getSubCategoryList(catID)
            .subscribe(function (res) {
            _this.catForm = res.data.categoryForms;
            console.log(_this.catForm, "category form");
            // this.showProductForm = true;
            _this.getColorList();
            _this.getOfflineSellerList();
            _this.getBrandListByCategory(catID);
        });
    };
    // brand list
    CreateBillComponent.prototype.getBrandList = function () {
        var _this = this;
        this.userService.getBrandList()
            .subscribe(function (brandList) {
            _this.brands = brandList;
            // console.log(this.brands,"brands");
        });
    };
    // brand list by category
    CreateBillComponent.prototype.getBrandListByCategory = function (catID) {
        var _this = this;
        this.userService.getBrandListByCategory(catID)
            .subscribe(function (brandList) {
            _this.brands = brandList;
            console.log(_this.brands, "brands");
        });
    };
    // color list
    CreateBillComponent.prototype.getColorList = function () {
        var _this = this;
        this.userService.getColorList()
            .subscribe(function (color) {
            _this.colours = color;
            // console.log(this.colours),"colors";
        });
    };
    // offline seller list
    CreateBillComponent.prototype.getOfflineSellerList = function () {
        var _this = this;
        this.userService.getOfflineSellerList()
            .subscribe(function (offlineSellerList) {
            _this.offlineSeller = offlineSellerList;
        });
    };
    // get offline seller by search
    CreateBillComponent.prototype.typed = function (value) {
        var _this = this;
        // console.log('New search input: ', value);
        this.userService.getOfflineSellerListByQuery(value)
            .subscribe(function (res) {
            // console.log(res);
            _this.offlineSellerArray = [];
            for (var i = 0; i < res.data.length; i++) {
                var pushValue = res.data[i].seller_name;
                var pushId = res.data[i].sid;
                // console.log(pushId);
                var push = '[' + pushId + '] ' + pushValue;
                _this.offlineSellerArray.push(push);
            }
            console.log(_this.offlineSellerArray);
        });
    };
    CreateBillComponent.prototype.selected = function (value) {
        console.log('Selected value is: ', value);
        // if(value.includes('[')){
        //   const val = value.text.split('[').pop().split(']').shift();
        //   console.log(val);
        //   this.sellerId = val;
        // }
        // this.sellerId = 
    };
    CreateBillComponent.prototype.focused = function (value) {
        console.log('focus value is:', value);
        if (value.includes('[')) {
            var val = value.split('[').pop().split(']').shift();
            console.log(val);
            this.sellerId = val;
            this.sellerInfo();
        }
    };
    CreateBillComponent.prototype.sellerInfo = function () {
        var _this = this;
        this.showSellerInfo = !this.showSellerInfo;
        this.userService.getOfflineSellerDetailsbyID(this.sellerId)
            .subscribe(function (res) {
            console.log(res);
            _this.sellerObject = res;
        });
    };
    CreateBillComponent.prototype.removed = function (value) {
        console.log('Removed value is: ', value);
    };
    // open product list
    CreateBillComponent.prototype.openProductList = function () {
        var _this = this;
        this.caseButton = false;
        this.userService.getProductList(this.userId)
            .subscribe(function (res) {
            console.log(res);
            _this.jobDetailsShow = false;
            _this.cockpit2 = true;
            _this.productList = res;
        }, function (err) {
            console.log(err);
        });
    };
    // get product list of status 11 
    CreateBillComponent.prototype.getCustomProductList = function () {
        var _this = this;
        this.userService.getCustomProductList(this.userId)
            .subscribe(function (res) {
            _this.customProductList = res;
            console.log("custom", res);
        }, function (err) {
            console.log(err);
        });
    };
    CreateBillComponent.prototype.onSelectProductList = function (id) {
        console.log(this.jobId);
        console.log(this.billId);
        console.log(id);
        this.productId = id;
    };
    CreateBillComponent.prototype.bindProductWithBill = function () {
        var _this = this;
        this.userService.linkProduct(this.jobId, this.billId, this.productId)
            .subscribe(function (res) {
            console.log(res);
            alert("Product Linked with bill");
            _this.getDetailsOfJob();
            _this.showProductList = false;
        }, function (err) {
            console.log(err);
        });
    };
    //********************************* Warranty Functions***********************************//
    CreateBillComponent.prototype.warrantyFormData = function (form) {
        var _this = this;
        console.log(form.value);
        this.warrantyObject = {
            'document_date': form.value.document_date,
            'document_number': form.value.document_number,
            'effective_date': form.value.effective_date,
            'expiry_date': form.value.expiry_date,
            'online_seller_id': form.value.online_seller_id,
            'renewal_cost': form.value.renewal_cost,
            'renewal_taxes': form.value.renewal_taxes,
            'renewal_type': form.value.renewal_type,
            'seller_id': form.value.seller_id,
            'user_id': this.userId,
            'job_id': this.jobId,
            'product_id': this.productId,
            'copies': this.selectedWarrantyImageArray
        };
        console.log(this.warrantyObject);
        this.userService.createWarranty(this.warrantyObject)
            .subscribe(function (res) {
            console.log(res);
            alert("Warranty Added");
            _this.getDetailsOfJob();
            _this.fillProductForm(_this.productId);
            _this.showWarrantyForm = false;
        }, function (error) {
            console.log(error);
            var err = JSON.parse(error['_body']);
            alert(err.reason);
        });
    };
    CreateBillComponent.prototype.editWarrantyForm = function (war) {
        this.getOfflineSellerList();
        this.warrantyId = war.id;
        this.selectedEditWarrantyImageArray = war.copies;
        this.warrantyFormObjectForBind = war;
        console.log(war);
        this.addons = false;
        this.showWarrantyEditForm = true;
        this.showWarrantyForm = false;
        this.showInsuranceForm = false;
        this.showAmcForm = false;
        this.showRepairForm = false;
    };
    CreateBillComponent.prototype.deleteWarr = function (req) {
        this.deleWarr = req.id;
    };
    CreateBillComponent.prototype.deleteWarranty = function () {
        var _this = this;
        this.userService.deleteWarranty(this.productId, this.deleWarr)
            .subscribe(function (res) {
            console.log(res);
            alert("Warranty Deleted");
            _this.getDetailsOfJob();
            _this.fillProductForm(_this.productId);
        }, function (err) {
            console.log(err);
        });
    };
    CreateBillComponent.prototype.warrantyEditFormData = function (form) {
        var _this = this;
        console.log(form.value);
        this.warrantyEditFormObject = {
            'document_date': form.value.document_date,
            'document_number': form.value.document_number,
            'effective_date': form.value.effective_date,
            'expiry_date': form.value.expiry_date,
            'online_seller_id': form.value.online_seller_id,
            'renewal_cost': form.value.renewal_cost,
            'renewal_taxes': form.value.renewal_taxes,
            'renewal_type': form.value.renewal_type,
            'seller_id': form.value.seller_id,
            'user_id': this.userId,
            'job_id': this.jobId,
            'warrantyId': this.warrantyId,
            'product_id': this.productId,
            'copies': this.selectedEditWarrantyImageArray
        };
        this.userService.updateWarranty(this.warrantyEditFormObject)
            .subscribe(function (res) {
            console.log(res);
            alert("Warranty Updated");
            _this.getDetailsOfJob();
            _this.fillProductForm(_this.productId);
            _this.addons = true;
            _this.showWarrantyEditForm = false;
        }, function (error) {
            console.log(error);
            var err = JSON.parse(error['_body']);
            alert(err.reason);
        });
    };
    //********************************* Insurance Functions***********************************//
    CreateBillComponent.prototype.insuranceFormData = function (form) {
        var _this = this;
        // console.log(form.value);
        this.insuranceObject = {
            'document_date': form.value.document_date,
            'document_number': form.value.document_number,
            'effective_date': form.value.effective_date,
            'expiry_date': form.value.expiry_date,
            'online_seller_id': form.value.online_seller_id,
            'renewal_cost': form.value.renewal_cost,
            'renewal_taxes': form.value.renewal_taxes,
            'renewal_type': form.value.renewal_type,
            'seller_id': form.value.seller_id,
            'user_id': this.userId,
            'job_id': this.jobId,
            'product_id': this.productId,
            'copies': this.selectedInsuranceImageArray
        };
        console.log(this.insuranceObject);
        this.userService.createInsurance(this.insuranceObject)
            .subscribe(function (res) {
            console.log(res);
            alert("Insurance Added");
            _this.showInsuranceForm = false;
            _this.getDetailsOfJob();
            _this.fillProductForm(_this.productId);
        }, function (error) {
            console.log(error);
            var err = JSON.parse(error['_body']);
            alert(err.reason);
        });
    };
    CreateBillComponent.prototype.editInsuranceForm = function (ins) {
        this.getOfflineSellerList();
        this.insuranceId = ins.id;
        this.selectedEditInsuranceImageArray = ins.copies;
        this.insuranceFormObjectForBind = ins;
        this.addons = false;
        this.showInsuranceEditForm = true;
        this.showWarrantyForm = false;
        this.showInsuranceForm = false;
        this.showAmcForm = false;
        this.showRepairForm = false;
    };
    CreateBillComponent.prototype.deleteInsure = function (req) {
        this.delInsuranc = req.id;
    };
    CreateBillComponent.prototype.deleteInsurance = function () {
        var _this = this;
        this.userService.deleteInsurance(this.productId, this.delInsuranc)
            .subscribe(function (res) {
            console.log(res);
            alert("Insurance Deleted");
            _this.getDetailsOfJob();
            _this.fillProductForm(_this.productId);
        }, function (err) {
            console.log(err);
        });
    };
    CreateBillComponent.prototype.insuranceEditFormData = function (form) {
        var _this = this;
        console.log(form.value);
        this.insuranceEditFormObject = {
            'document_date': form.value.document_date,
            'document_number': form.value.document_number,
            'effective_date': form.value.effective_date,
            'expiry_date': form.value.expiry_date,
            'online_seller_id': form.value.online_seller_id,
            'renewal_cost': form.value.renewal_cost,
            'renewal_taxes': form.value.renewal_taxes,
            'renewal_type': form.value.renewal_type,
            'seller_id': form.value.seller_id,
            'user_id': this.userId,
            'job_id': this.jobId,
            'product_id': this.productId,
            'insuranceId': this.insuranceId,
            'copies': this.selectedEditInsuranceImageArray
        };
        this.userService.updateInsurance(this.insuranceEditFormObject)
            .subscribe(function (res) {
            console.log(res);
            alert("Insurance Updated");
            _this.getDetailsOfJob();
            _this.fillProductForm(_this.productId);
            _this.addons = true;
            _this.showInsuranceEditForm = false;
        }, function (error) {
            console.log(error);
            var err = JSON.parse(error['_body']);
            alert(err.reason);
        });
    };
    //********************************* AMC Functions***********************************//
    CreateBillComponent.prototype.amcFormData = function (form) {
        var _this = this;
        // console.log(form.value);
        this.amcObject = {
            'document_date': form.value.document_date,
            'document_number': form.value.document_number,
            'effective_date': form.value.effective_date,
            'expiry_date': form.value.expiry_date,
            'online_seller_id': form.value.online_seller_id,
            'renewal_cost': form.value.renewal_cost,
            'renewal_taxes': form.value.renewal_taxes,
            'renewal_type': form.value.renewal_type,
            'seller_id': form.value.seller_id,
            'user_id': this.userId,
            'job_id': this.jobId,
            'product_id': this.productId,
            'copies': this.selectedAmcImageArray
        };
        console.log(this.amcObject);
        this.userService.createAmc(this.amcObject)
            .subscribe(function (res) {
            console.log(res);
            alert("AMC Added");
            _this.showAmcForm = false;
            _this.getDetailsOfJob();
            _this.fillProductForm(_this.productId);
        }, function (error) {
            console.log(error);
            var err = JSON.parse(error['_body']);
            alert(err.reason);
        });
    };
    CreateBillComponent.prototype.editAmcForm = function (amc) {
        this.getOfflineSellerList();
        this.amcId = amc.id;
        this.selectedEditAmcImageArray = amc.copies;
        this.amcFormObjectForBind = amc;
        this.addons = false;
        this.showAmcEditForm = true;
        this.showWarrantyForm = false;
        this.showInsuranceForm = false;
        this.showAmcForm = false;
        this.showRepairForm = false;
    };
    CreateBillComponent.prototype.deleteAMC = function (req) {
        this.delAmc = req.id;
    };
    CreateBillComponent.prototype.deleteAmc = function () {
        var _this = this;
        this.userService.deleteAmc(this.productId, this.delAmc)
            .subscribe(function (res) {
            console.log(res);
            alert("AMC Deleted");
            _this.getDetailsOfJob();
            _this.fillProductForm(_this.productId);
        }, function (err) {
            console.log(err);
        });
    };
    CreateBillComponent.prototype.amcEditFormData = function (form) {
        var _this = this;
        console.log(form.value);
        this.amcEditFormObject = {
            'document_date': form.value.document_date,
            'document_number': form.value.document_number,
            'effective_date': form.value.effective_date,
            'expiry_date': form.value.expiry_date,
            'online_seller_id': form.value.online_seller_id,
            'renewal_cost': form.value.renewal_cost,
            'renewal_taxes': form.value.renewal_taxes,
            'renewal_type': form.value.renewal_type,
            'seller_id': form.value.seller_id,
            'user_id': this.userId,
            'job_id': this.jobId,
            'product_id': this.productId,
            'amcId': this.amcId,
            'copies': this.selectedEditAmcImageArray
        };
        this.userService.updateAmc(this.amcEditFormObject)
            .subscribe(function (res) {
            console.log(res);
            alert("AMC Updated");
            _this.getDetailsOfJob();
            _this.fillProductForm(_this.productId);
            _this.addons = true;
            _this.showAmcEditForm = false;
        }, function (error) {
            console.log(error);
            var err = JSON.parse(error['_body']);
            alert(err.reason);
        });
    };
    //********************************* Repair Functions***********************************//
    CreateBillComponent.prototype.repairFormData = function (form) {
        var _this = this;
        // console.log(form.value);
        this.repairObject = {
            'document_date': form.value.document_date,
            'document_number': form.value.document_number,
            'online_seller_id': form.value.online_seller_id,
            'repair_cost': form.value.repair_cost,
            'repair_taxes': form.value.repair_taxes,
            'seller_id': form.value.seller_id,
            'user_id': this.userId,
            'job_id': this.jobId,
            'product_id': this.productId,
            'copies': this.selectedRepairImageArray
        };
        console.log(this.repairObject);
        this.userService.createRepair(this.repairObject)
            .subscribe(function (res) {
            console.log(res);
            alert("Repair Added");
            _this.showRepairForm = false;
            _this.getDetailsOfJob();
            _this.fillProductForm(_this.productId);
        }, function (error) {
            console.log(error);
            var err = JSON.parse(error['_body']);
            alert(err.reason);
        });
    };
    CreateBillComponent.prototype.editRepairForm = function (rep) {
        this.getOfflineSellerList();
        this.repairId = rep.id;
        this.selectedEditRepairImageArray = rep.copies;
        this.repairFormObjectForBind = rep;
        this.addons = false;
        this.showRepairEditForm = true;
        this.showWarrantyForm = false;
        this.showInsuranceForm = false;
        this.showAmcForm = false;
        this.showRepairForm = false;
    };
    CreateBillComponent.prototype.deleteRep = function (req) {
        this.delRep = req.id;
    };
    CreateBillComponent.prototype.deleteRepair = function () {
        var _this = this;
        this.userService.deleteRepair(this.productId, this.delRep)
            .subscribe(function (res) {
            console.log(res);
            alert("Repair Deleted");
            _this.getDetailsOfJob();
            _this.fillProductForm(_this.productId);
        }, function (err) {
            console.log(err);
        });
    };
    CreateBillComponent.prototype.repairEditFormData = function (form) {
        var _this = this;
        this.repairEditFormObject = {
            'document_date': form.value.document_date,
            'document_number': form.value.document_number,
            'online_seller_id': form.value.online_seller_id,
            'repair_cost': form.value.repair_cost,
            'repair_taxes': form.value.repair_taxes,
            'seller_id': form.value.seller_id,
            'user_id': this.userId,
            'job_id': this.jobId,
            'product_id': this.productId,
            'repairId': this.repairId,
            'copies': this.selectedEditRepairImageArray
        };
        this.userService.updateRepair(this.repairEditFormObject)
            .subscribe(function (res) {
            console.log(res);
            alert("Repair Updated");
            _this.getDetailsOfJob();
            _this.fillProductForm(_this.productId);
            _this.addons = true;
            _this.showRepairEditForm = false;
        }, function (error) {
            console.log(error);
            var err = JSON.parse(error['_body']);
            alert(err.reason);
        });
    };
    //********************************* Addons Functions***********************************//
    CreateBillComponent.prototype.addAddons = function (prod) {
        this.getBrandList();
        this.getColorList();
        this.getOfflineSellerList();
        this.mainCategoryList();
        this.onSelectMainCat(prod.main_category_id);
        this.onSelectCat2(prod.category_id);
        // console.log(prod, "pro");
        this.productId = prod.id;
        this.selectedImageArray = prod.copies;
        this.fillProductForm(this.productId);
        this.productFormObjectForBind = prod;
        this.addons = true;
        this.cockpit = false;
        this.cockpit2 = false;
        this.showSellerForm = false;
        this.showProductForm = false;
        this.askMainCategory = false;
        this.billGeneralInfoEdit = false;
        this.showWarrantyForm = false;
        this.showAmcForm = false;
        this.showInsuranceForm = false;
        this.showRepairForm = false;
        this.jobDetailsShow = false;
        this.showProductList = false;
    };
    CreateBillComponent.prototype.fillProductForm = function (prodID) {
        var _this = this;
        this.userService.productMetaData(this.billId, prodID)
            .subscribe(function (res) {
            console.log(res, "actual product");
            _this.productData = res.data;
            _this.productMetaDataForBind = res.data.metaData;
            console.log("meta data", _this.productMetaDataForBind);
        }, function (err) {
            console.log(err);
        });
    };
    //********************************* Seller Functions***********************************//
    // get online seller list
    CreateBillComponent.prototype.onlineSellerList = function () {
        var _this = this;
        this.userService.getOnlineSellerList()
            .subscribe(function (onlineSellerList) {
            _this.onlineSeller = onlineSellerList;
            // console.log(this.onlineSeller);
        });
    };
    // create offline seller using form builder
    CreateBillComponent.prototype.offlineSellerFB = function () {
        this.offlineSellerForm = this.fb.group({
            'seller_name': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            'owner_name': '',
            'gstin': '',
            'pan_no': '',
            'reg_no': '',
            'is_service': '',
            'is_onboarded': '',
            'address': '',
            'city': '',
            'state': '',
            'pincode': '',
            'latitude': '',
            'longitude': '',
            'url': '',
            'email': '',
            'contact_no': ''
        });
    };
    CreateBillComponent.prototype.createOfflineSeller = function (data) {
        var _this = this;
        console.log(data);
        this.userService.createOfflineSeller(data)
            .subscribe(function (res) {
            console.log(res);
            alert('Offline Seller added succesfully');
            _this.offlineSellerForm.reset();
        });
    };
    // ******************************** Small Functions ***********************************//
    //select image 
    CreateBillComponent.prototype.selectImage = function () {
        if (this.selectedImageArray.includes(this.imageArray[this.imageIndex])) {
            console.log("Image Already Added 1");
        }
        else {
            this.selectedImageArray.push(this.imageArray[this.imageIndex]);
        }
        if (this.selectedWarrantyImageArray.includes(this.imageArray[this.imageIndex])) {
            console.log("Image Already Added 2");
        }
        else {
            this.selectedWarrantyImageArray.push(this.imageArray[this.imageIndex]);
        }
        if (this.selectedEditWarrantyImageArray.includes(this.imageArray[this.imageIndex])) {
            console.log("Image Already Added 3");
        }
        else {
            this.selectedEditWarrantyImageArray.push(this.imageArray[this.imageIndex]);
        }
        if (this.selectedInsuranceImageArray.includes(this.imageArray[this.imageIndex])) {
            console.log("Image Already Added 4");
        }
        else {
            this.selectedInsuranceImageArray.push(this.imageArray[this.imageIndex]);
        }
        if (this.selectedEditInsuranceImageArray.includes(this.imageArray[this.imageIndex])) {
            console.log("Image Already Added 5");
        }
        else {
            this.selectedEditInsuranceImageArray.push(this.imageArray[this.imageIndex]);
        }
        if (this.selectedAmcImageArray.includes(this.imageArray[this.imageIndex])) {
            console.log("Image Already Added 6");
        }
        else {
            this.selectedAmcImageArray.push(this.imageArray[this.imageIndex]);
        }
        if (this.selectedEditAmcImageArray.includes(this.imageArray[this.imageIndex])) {
            console.log("Image Already Added 7");
        }
        else {
            this.selectedEditAmcImageArray.push(this.imageArray[this.imageIndex]);
        }
        if (this.selectedRepairImageArray.includes(this.imageArray[this.imageIndex])) {
            console.log("Image Already Added 8");
        }
        else {
            this.selectedRepairImageArray.push(this.imageArray[this.imageIndex]);
        }
        if (this.selectedEditRepairImageArray.includes(this.imageArray[this.imageIndex])) {
            console.log("Image Already Added 9");
        }
        else {
            this.selectedEditRepairImageArray.push(this.imageArray[this.imageIndex]);
        }
    };
    // remove image
    CreateBillComponent.prototype.removeImage = function (i) {
        this.selectedImageArray.splice(i, 1);
        this.selectedWarrantyImageArray.splice(i, 1);
        this.selectedEditWarrantyImageArray.splice(i, 1);
        this.selectedInsuranceImageArray.splice(i, 1);
        this.selectedEditInsuranceImageArray.splice(i, 1);
        this.selectedAmcImageArray.splice(i, 1);
        this.selectedEditAmcImageArray.splice(i, 1);
        this.selectedRepairImageArray.splice(i, 1);
        this.selectedEditRepairImageArray.splice(i, 1);
    };
    // open bill general form
    CreateBillComponent.prototype.openBillForm = function () {
        this.jobDetailsShow = false;
        this.billGeneralInfo = true;
        this.onlineSellerList(); //call seller list at time of bill info
    };
    // back To jobDetails Show 
    CreateBillComponent.prototype.backTojobDetailsShow = function () {
        this.showSellerForm = false;
        this.showProductForm = false;
        this.askMainCategory = false;
        this.jobDetailsShow = true;
        this.billGeneralInfo = false;
        this.billGeneralInfoEdit = false;
        this.cockpit = false;
        this.cockpit2 = false;
        this.showProductList = false;
    };
    // show add product form
    CreateBillComponent.prototype.showAddProductForm = function () {
        this.billGeneralInfoEdit = false;
        this.showProductList = false;
        this.askMainCategory = true;
        this.showSellerForm = false;
        this.mainCategoryList(); // call function for get main category
        this.getOfflineSellerList();
        this.onlineSellerList();
    };
    // show select product
    CreateBillComponent.prototype.showSelectProductForm = function () {
        this.billGeneralInfoEdit = false;
        this.askMainCategory = false;
        this.showSellerForm = false;
        this.showProductList = true;
        this.getCustomProductList();
    };
    // show add offline seller form
    CreateBillComponent.prototype.showAddSellerForm = function () {
        this.billGeneralInfoEdit = false;
        this.showSellerForm = true;
        this.askMainCategory = false;
        this.showProductForm = false;
        this.showProductList = false;
        this.offlineSellerFB();
    };
    CreateBillComponent.prototype.backToCockpit = function () {
        this.addons = false;
        this.cockpit = true;
        // this.cockpit2 = true;
        this.showWarrantyForm = false;
        this.showInsuranceForm = false;
        this.showAmcForm = false;
        this.showRepairForm = false;
    };
    CreateBillComponent.prototype.showAddWarrantyForm = function () {
        this.getOfflineSellerList();
        this.onlineSellerList();
        this.showWarrantyForm = true;
        this.showAmcForm = false;
        this.showInsuranceForm = false;
        this.showRepairForm = false;
        // this.addons = false;
    };
    CreateBillComponent.prototype.showAddInsuranceForm = function () {
        this.getOfflineSellerList();
        this.onlineSellerList();
        this.showWarrantyForm = false;
        this.showAmcForm = false;
        this.showInsuranceForm = true;
        this.showRepairForm = false;
    };
    CreateBillComponent.prototype.showAddAmcForm = function () {
        this.getOfflineSellerList();
        this.onlineSellerList();
        this.showWarrantyForm = false;
        this.showAmcForm = true;
        this.showInsuranceForm = false;
        this.showRepairForm = false;
    };
    CreateBillComponent.prototype.showAddRepairForm = function () {
        this.getOfflineSellerList();
        this.onlineSellerList();
        this.showWarrantyForm = false;
        this.showAmcForm = false;
        this.showInsuranceForm = false;
        this.showRepairForm = true;
    };
    CreateBillComponent.prototype.backtoAddons = function () {
        this.addons = true;
        this.showWarrantyEditForm = false;
        this.showInsuranceEditForm = false;
        this.showAmcEditForm = false;
        this.showRepairEditForm = false;
        this.productFormEdit = false;
    };
    // function for avoid only space submit
    CreateBillComponent.prototype.avoidSpace = function (e) {
        this.functionService.NoWhitespaceValidator(this.offlineSellerForm, e);
    };
    return CreateBillComponent;
}());
CreateBillComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-create-bill',
        template: __webpack_require__("../../../../../src/app/dashboard/data-panel/job-management/bill/create-bill/create-bill.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/data-panel/job-management/bill/create-bill/create-bill.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__services_function_service__["a" /* FunctionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_function_service__["a" /* FunctionService */]) === "function" && _e || Object])
], CreateBillComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=create-bill.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/job-management/bill/view-bill/view-bill.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".textareaDitto{\n    height:100px;\n    width:500px;\n    word-break: break-word;\n}\n.card .header {\n    padding-bottom: 4px;\n    padding-top: 10px;\n  }\n  \n  .form-group {\n    margin-bottom: 0px !important;\n  }\n  \n  .btn-circle {\n    margin-top: 16px;\n    margin-right: 5px;\n  }\n  \n  .dropdown {\n    border: 1px solid #ccc;\n  }\n  input[type=number]::-webkit-inner-spin-button, \n  input[type=number]::-webkit-outer-spin-button { \n      -webkit-appearance: none;\n      -moz-appearance: none;\n      /* appearance: none; */\n      margin: 0; \n  }\n  .right{\n    float: right\n  }\n  .fix_image{\n    width: 150px;\n    height: 150px;\n  }\n  .font-small{\n      font-size: smaller;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/job-management/bill/view-bill/view-bill.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n\t<div class=\"row clearfix\">\n\t\t<!--**********************************************IMAGE****************************************** -->\n\n\t\t<!-- Image Panel Start -->\n\t\t<div class=\"col-md-6\">\n\t\t\t<p></p>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-2 col-md-offset-1\">\n\t\t\t\t\t<button class=\"btn btn-info btn-xs btn-block\" (click)=\"prevImage()\">Prev</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t<button class=\"btn btn-warning btn-xs btn-warning\" (click)=\"rotate()\">Rotate</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t<button class=\"btn btn-success btn-xs btn-block\" (click)=\"selectImage()\">Select</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t<a href=\"{{images[imageIndex]}}\" download style=\"text-decoration: none;\">\n\t\t\t\t\t\t<button class=\"btn btn-danger btn-xs btn-block\">Download</button>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t<button class=\"btn btn-info btn-xs btn-block\" (click)=\"nextImage()\">Next</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<hr>\n\t\t\t<p class=\"text-center\">Image {{imageIndex+1}} of {{imageArrayLength}}</p>\n\t\t\t<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" style=\"width: 100%; min-width: 320px;overflow:scroll\">\n\t\t\t\t<tr>\n\t\t\t\t\t<td style=\"padding: 10px\">\n\t\t\t\t\t\t<div class=\"imagelist\" align=\"center\">\n\t\t\t\t\t\t\t<img class=\"zoom img-responsive\" [src]=\"images[imageIndex]\" [style.transform]=\"'rotate(' + imagerotation + 'deg)'\" width=\"100%\"\n\t\t\t\t\t\t\t style=\"    -webkit-logical-width: auto;border: 3px solid #555; padding:2px;\" />\n\t\t\t\t\t\t\t<!-- <p *ngIf=\"imageArray.file_type==='pdf'\">This file format is PDF<br> {{imageArray[imageIndex].copyUrl}}</p> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</div>\n\t\t<!-- Image Panel End -->\n\n\t\t<!--**********************************************DATA ****************************************** -->\n\t\t<div class=\"col-md-6\">\n\t\t\t<!-- JOB Details Start -->\n\t\t\t<div *ngIf=\"jobDetailsShow\">\n\t\t\t\t<h5 class=\"\">JOB Details</h5>\n\t\t\t\t<div style=\"border :1px solid grey\">\n\t\t\t\t\t<div class=\"row clearfix\" style=\"margin:10px 5px 5px 5px\">\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<b>JOB ID : </b>{{jobDetails?.job_id}}</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<b>Name : </b>{{ jobDetails?.user?.full_name }}</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<b>Date of JOB : </b>{{jobDetails?.user?.created_at | date}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<b>Email : </b>{{ jobDetails?.user?.email }}</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<b>Phone No : </b>{{ jobDetails?.user?.mobile_no }}</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<b>Comments : </b>{{ jobDetails?.comments }}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<div class=\"card\" *ngIf=\"jobDetails?.bills?.length > 0\">\n\t\t\t\t\t<div class=\"header padding_fix\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\t\tCurrent JOB Bills\n\t\t\t\t\t\t\t</b>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"body table-responsive\">\n\t\t\t\t\t\t<table class=\"table table-condensed\">\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t<small>Bill ID</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t<small>Doc Number</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t<small>Name</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t<small>Phone</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t<small>Document Date</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t<small>Action</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let bill of jobDetails?.bills\">\n\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t<small>{{ bill?.id }}</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t<small>{{ bill?.document_number }}</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t<small>{{ bill?.consumer_name }}</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t<small>{{ bill?.consumer_phone_no }}</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t<small>{{ bill?.document_date | date }}</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn btn-info btn-xs\" title=\"View Product\" (click)=\"makeProduct(bill)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">insert_drive_file</i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card\" *ngIf=\"jobDetails?.products?.length > 0\">\n\t\t\t\t\t<div class=\"header padding_fix\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\t\tProduct Lists\n\t\t\t\t\t\t\t</b>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"body table-responsive\">\n\t\t\t\t\t\t<table class=\"table table-condensed\">\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t<small>Job ID</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t<small>Bill ID</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t<small>Product ID</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t<small>Product Name</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t<small>Document Date</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t<small>Action</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th *ngIf=\"ceId < 2\">\n\t\t\t\t\t\t\t\t\t\t<small>Delete</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let prod of jobDetails?.products\">\n\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t<small>{{ prod?.job_id }}</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t<small>{{ prod?.bill_id }}</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t<small>{{ prod?.id }}</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t<small>{{ prod?.product_name }}</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t<small>{{ prod?.document_date | date }}</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn btn-info btn-xs\" title=\"Make Product\" (click)=\"addAddons(prod)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">insert_drive_file</i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th *ngIf=\"ceId < 2\">\n\t\t\t\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn btn-danger btn-xs\" title=\"Delete \" (click)=\"deleteCall(list);deleteJob=true;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">delete_forever</i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- If bill and product is not present in job -->\n\t\t\t\t<div *ngIf=\"jobDetails?.bills?.length == 0\">\n\t\t\t\t\t<h5>Addons</h5>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<p></p>\n\t\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t\t<div class=\"col-md-5\" style=\"border: 1px solid black;width:48%\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"productData?.warranties?.length > 0\">\n\t\t\t\t\t\t\t\t\t<div class=\"body table-responsive\" style=\"padding-bottom:0px;\">\n\t\t\t\t\t\t\t\t\t\t<table class=\"table table-condensed\">\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>Warranty ID</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>Product ID</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>Action</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let list of jobDetails?.warranties\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>{{ list?.id }}</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>{{ list?.product_id }}</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn btn-info btn-xs\" title=\"Warranty Info\" (click)=\"editWarrantyForm(list)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">insert_drive_file</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-5\" style=\"border: 1px solid black;width:48%\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"jobDetails?.insurances?.length > 0\">\n\t\t\t\t\t\t\t\t\t<div class=\"body table-responsive\" style=\"padding-bottom:0px;\">\n\t\t\t\t\t\t\t\t\t\t<table class=\"table table-condensed\">\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>Insurance ID</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>Product ID</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>Action</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let list of jobDetails?.insurances\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>{{ list?.id }}</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>{{ list?.product_id }}</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn btn-info btn-xs\" title=\"Insurance Info\" (click)=\"editInsuranceForm(list)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">insert_drive_file</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t\t<div class=\"col-md-5\" style=\"border: 1px solid black;width:48%\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"jobDetails?.amcs?.length > 0\">\n\t\t\t\t\t\t\t\t\t<div class=\"body table-responsive\" style=\"padding-bottom:0px;\">\n\t\t\t\t\t\t\t\t\t\t<table class=\"table table-condensed\">\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>AMC\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>ID</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>Product ID</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>Action</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let list of jobDetails?.amcs\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>{{ list?.id }}</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>{{ list?.product_id }}</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn btn-info btn-xs\" title=\"AMC Info\" (click)=\"editAmcForm(list)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">insert_drive_file</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-5\" style=\"border: 1px solid black;width:48%\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"jobDetails?.repairs?.length > 0\">\n\t\t\t\t\t\t\t\t\t<div class=\"body table-responsive\" style=\"padding-bottom:0px;\">\n\t\t\t\t\t\t\t\t\t\t<table class=\"table table-condensed\">\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>Repair ID</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>Product ID</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>Action</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let list of jobDetails?.repairs\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>{{ list?.id }}</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>{{ list?.product_id }}</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn btn-info btn-xs\" title=\"Repair Info\" (click)=\"editRepairForm(list)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">insert_drive_file</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<div class=\"row clearfix\" *ngIf=\"userType==3\">\n\t\t\t\t\t<div class=\"col-md-3 col-md-offset-1\">\n\t\t\t\t\t\t<button class=\"btn bg-blue btn-block btn-lg\" (click)=\"backClicked()\"> Back</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<button class=\"btn bg-orange btn-block btn-lg\" (click)=\"reassignJobPopUp()\"> Reassign Job</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3 \">\n\t\t\t\t\t\t<button class=\"btn bg-green btn-block btn-lg\" (click)=\"completeJobDialog=true;\"> Complete Job</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row clearfix\" *ngIf=\"userType<=2\">\n\t\t\t\t\t<div class=\"col-md-3 col-md-offset-8\">\n\t\t\t\t\t\t<button class=\"btn bg-blue btn-block btn-lg\" (click)=\"backClicked()\"> Back</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t</div>\n\n\t\t\t<!--complete job popup -->\n\t\t\t<app-dialog [(visible)]=\"completeJobDialog\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t<h3>Are You sure you want to complete the job?</h3>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\n\n\t\t\t\t\t\t\t<button class=\"btn bg-green btn-block btn-lg\" type=\"submit\" (click)=\"completeJob();completeJobDialog=false;\">YES</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\n\t\t\t\t\t\t\t<button class=\"btn bg-red btn-block btn-lg\" type=\"submit\" (click)=\"completeJobDialog=false;\">NO</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-offset-4 col-xs-4\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</app-dialog>\n\n\t\t\t<!-- JOB Details End -->\n\t\t\t<!-- Reassign Start -->\n\t\t\t<app-dialog [(visible)]=\"reassignDialog\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<h4 class=\"modal-title\" id=\"smallModalLabel\">Reassign JOB</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<form #reassignForm=\"ngForm\" (ngSubmit)=\"reassignJob(reassignForm)\">\n\t\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t\t<label for=\"name\">Comments</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t\t<input name=\"comments\" type=\"text\" class=\"textareaDitto\" ngModel>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t\t<div class=\"col-lg-offset-10 col-md-offset-10 col-sm-offset-4 col-xs-offset-5\">\n\t\t\t\t\t\t\t\t<button class=\"btn bg-green btn-block btn-lg\" type=\"submit\">Reassign JOB</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</app-dialog>\n\t\t\t<!-- Reassign End -->\n\n\t\t\t<!-- Product Buttons Start -->\n\t\t\t<div *ngIf=\"cockpit\">\n\t\t\t\t<p></p>\n\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t<div class=\"col-md-5 col-md-offset-1\">\n\t\t\t\t\t\t<button class=\"btn btn-block btn-xs bg-indigo waves-effect m-b-15\" (click)=\"backTojobDetailsShow()\">Back</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t\t<button class=\"btn bg-cyan btn-block btn-xs waves-effect m-b-15\" (click)=\"showbillGeneralInfoForm()\">Bill General Info</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- <div class=\"col-md-4\">\n\t\t\t\t\t\t\t<button class=\"btn bg-pink btn-xs btn-block waves-effect m-b-15\" (click)=\"showAddSellerForm()\">Offline Seller</button>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"jobDetails?.products?.length > 0\">\n\t\t\t\t\t<div class=\"body table-responsive\" style=\"padding-bottom:0px;\">\n\t\t\t\t\t\t<table class=\"table table-condensed\">\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t<small>Bill ID</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t<small>Product ID</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t<small>Name</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t<small>Purchase Cost</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t<small>Document Date</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t<small>Action</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let list of jobDetails?.products\">\n\t\t\t\t\t\t\t\t\t<th *ngIf=\"list?.bill_id==billId\">\n\t\t\t\t\t\t\t\t\t\t<small>{{ list?.bill_id }}</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th *ngIf=\"list?.bill_id==billId\">\n\t\t\t\t\t\t\t\t\t\t<small>{{ list?.id }}</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th *ngIf=\"list?.bill_id==billId\">\n\t\t\t\t\t\t\t\t\t\t<small>{{ list?.product_name }}</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th *ngIf=\"list?.bill_id==billId\">\n\t\t\t\t\t\t\t\t\t\t<small>{{ list?.purchase_cost }}</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th *ngIf=\"list?.bill_id==billId\">\n\t\t\t\t\t\t\t\t\t\t<small>{{ list?.document_date | date }}</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th *ngIf=\"list?.bill_id==billId\">\n\t\t\t\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn btn-info btn-xs\" title=\"Add Additional Info\" (click)=\"addAddons(list)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">insert_drive_file</i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Product Buttons End -->\n\t\t\t<!-- BILL General Info Edit Start-->\n\t\t\t<div *ngIf=\"billGeneralInfoEdit\">\n\t\t\t\t<form #billGeneralInfoEditForm=\"ngForm\" (ngSubmit)=\"verifyBillGeneral(billGeneralInfoEditForm)\">\n\t\t\t\t\t<h4>\n\t\t\t\t\t\t<u>Bill</u>\n\t\t\t\t\t\t<u>General</u>\n\t\t\t\t\t\t<u>Information </u>\n\t\t\t\t\t</h4>\n\t\t\t\t\t<div style=\"border: 1px solid grey;padding:30px\">\n\t\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t\t<label class=\"font-small\">Name</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"consumer_name\" class=\"form-control\" ngModel=\"{{billGeneralInfoFormObjectForBind?.consumer_name}}\"\n\t\t\t\t\t\t\t\t\t\t disabled>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t\t<label class=\"font-small\">Phone</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\" name=\"consumer_phone_no\" class=\"form-control\" ngModel=\"{{billGeneralInfoFormObjectForBind?.consumer_phone_no}}\"\n\t\t\t\t\t\t\t\t\t\t disabled>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t\t<label class=\"font-small\">Email</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"consumer_email\" class=\"form-control\" ngModel=\"{{ billGeneralInfoFormObjectForBind?.consumer_email}}\"\n\t\t\t\t\t\t\t\t\t\t disabled>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t\t<label class=\"font-small\">Document Number</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"document_number\" class=\"form-control\" ngModel=\"{{billGeneralInfoFormObjectForBind?.document_number}}\"\n\t\t\t\t\t\t\t\t\t\t disabled>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t\t<label class=\"font-small\">\n\t\t\t\t\t\t\t\t\t<span style=\"color:red\">*</span> Document Date</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"date\" name=\"document_date\" class=\"form-control\" ngModel=\"{{billGeneralInfoFormObjectForBind?.document_date | date:'yyyy-MM-dd'}}\"\n\t\t\t\t\t\t\t\t\t\t disabled>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t\t<label class=\"font-small\">Online Seller</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<select class=\"form-control dropdown\" name=\"seller_id\" ngModel=\"{{ billGeneralInfoFormObjectForBind?.seller_id}}\" disabled>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">Select</option>\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let seller of onlineSeller?.data\" value=\"{{seller.sid}}\">{{ seller.seller_name }}</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<div class=\"row clearfix\" *ngIf=\"userType!=4\">\n\t\t\t\t\t\t\t<div class=\"col-md-4 col-md-offset-4\">\n\t\t\t\t\t\t\t\t<button class=\"btn bg-primary btn-block btn-lg\" type=\"submit\" *ngIf=\"billGeneralInfoFormObjectForBind?.status_type!=5\">Verify Bill</button>\n\t\t\t\t\t\t\t\t<p class=\"badge bg-green\" style=\"padding:10px;\" *ngIf=\"billGeneralInfoFormObjectForBind?.status_type==5\">Verified by Admin / QE</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<!-- BILL General Info Edit End-->\n\n\t\t\t<!-- Seller Form Start -->\n\t\t\t<div *ngIf=\"showSellerForm\">\n\t\t\t\t<form class=\"form-horizontal\" [formGroup]='offlineSellerForm' (ngSubmit)=\"createOfflineSeller(offlineSellerForm.value)\">\n\t\t\t\t\t<h4 class=\"text-center\">\n\t\t\t\t\t\t<u>Offline Seller</u>\n\t\t\t\t\t</h4>\n\t\t\t\t\t<h4>\n\t\t\t\t\t\t<u>\n\t\t\t\t\t\t\t<small>Information </small>\n\t\t\t\t\t\t</u>\n\t\t\t\t\t</h4>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">\n\t\t\t\t\t\t\t\t<span style=\"color:red\">*</span>Name</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"seller_name\" class=\"form-control\" (keyup)=\"avoidSpace('seller_name')\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Owner Name</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"owner_name\" class=\"form-control\" (keyup)=\"avoidSpace('owner_name')\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">\n\t\t\t\t\t\t\t\t<span style=\"color:red\">*</span>Gstin No</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"gstin\" class=\"form-control\" (keyup)=\"avoidSpace('gstin')\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Pan No</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"pan_no\" class=\"form-control\" (keyup)=\"avoidSpace('pan_no')\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Reg No</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"reg_no\" class=\"form-control\" (keyup)=\"avoidSpace('reg_no')\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">is Service?</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<select class=\"form-control dropdown\" formControlName=\"is_service\">\n\t\t\t\t\t\t\t\t\t\t<option [ngValue]=\"true\" class=\"font-small\"> Yes</option>\n\t\t\t\t\t\t\t\t\t\t<option [ngValue]=\"false\" class=\"font-small\"> No</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Is Onboarded?</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<select class=\"form-control dropdown\" formControlName=\"is_onboarded\">\n\t\t\t\t\t\t\t\t\t\t<option [ngValue]=\"true\" class=\"font-small\"> Yes</option>\n\t\t\t\t\t\t\t\t\t\t<option [ngValue]=\"false\" class=\"font-small\"> No</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<h4>\n\t\t\t\t\t\t<u>\n\t\t\t\t\t\t\t<small>Address </small>\n\t\t\t\t\t\t</u>\n\t\t\t\t\t</h4>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Address</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"address\" class=\"form-control\" (keyup)=\"avoidSpace('address')\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">\n\t\t\t\t\t\t\t\t<span style=\"color:red\">*</span> City</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"city\" class=\"form-control\" (keyup)=\"avoidSpace('city')\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">\n\t\t\t\t\t\t\t\t<span style=\"color:red\">*</span> State</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"state\" class=\"form-control\" (keyup)=\"avoidSpace('state')\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">\n\t\t\t\t\t\t\t\t<span style=\"color:red\">*</span> PinCode</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"pincode\" class=\"form-control\" (keyup)=\"avoidSpace('pincode')\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Latitude</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"latitude\" class=\"form-control\" (keyup)=\"avoidSpace('latitude')\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Longitude</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"longitude\" class=\"form-control\" (keyup)=\"avoidSpace('longitude')\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">URL</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"url\" class=\"form-control\" (keyup)=\"avoidSpace('url')\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Email</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"email\" class=\"form-control\" (keyup)=\"avoidSpace('email')\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Contact No.</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"contact_no\" class=\"form-control\" (keyup)=\"avoidSpace('contact_no')\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\" col-lg-3 col-md-3 col-lg-offset-8 col-md-offset-8 col-sm-offset-4 col-xs-offset-5\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-md btn-success btn-block m-t-15 waves-effect\" [disabled]=\"!offlineSellerForm.valid\">Submit</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<br>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<!-- Seller Form End -->\n\t\t\t<!-- Addons Buttons Start -->\n\t\t\t<div *ngIf=\"addons && jobDetails?.products?.length != 0\">\n\t\t\t\t<p></p>\n\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<button class=\"btn btn-block btn-xs bg-orange waves-effect m-b-15\" (click)=\"backToCockpit()\">Back</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<button class=\"btn bg-green btn-block btn-xs waves-effect m-b-15\" (click)=\"showProductInfo()\">Product General Info</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t<div class=\"col-md-6\" style=\"border: 1px solid black;width:48%\">\n\t\t\t\t\t\t<div *ngIf=\"productData?.warranties?.length > 0\">\n\t\t\t\t\t\t\t<div class=\"body table-responsive\" style=\"padding-bottom:0px;\">\n\t\t\t\t\t\t\t\t<table class=\"table table-condensed\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t<small>Warranty ID</small>\n\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t<small>Product ID</small>\n\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t<small>Action</small>\n\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let list of productData?.warranties\">\n\t\t\t\t\t\t\t\t\t\t\t<th *ngIf=\"list?.product_id==productId\">\n\t\t\t\t\t\t\t\t\t\t\t\t<small>{{ list?.id }}</small>\n\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t<th *ngIf=\"list?.product_id==productId\">\n\t\t\t\t\t\t\t\t\t\t\t\t<small>{{ list?.product_id }}</small>\n\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t<th *ngIf=\"list?.product_id==productId\">\n\t\t\t\t\t\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn btn-info btn-xs\" title=\"Warranty Info\" (click)=\"editWarrantyForm(list)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">insert_drive_file</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6\" style=\"border: 1px solid black;width:48%\">\n\t\t\t\t\t\t<div *ngIf=\"productData?.insurances?.length > 0\">\n\t\t\t\t\t\t\t<div class=\"body table-responsive\" style=\"padding-bottom:0px;\">\n\t\t\t\t\t\t\t\t<table class=\"table table-condensed\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t<small>Insurance ID</small>\n\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t<small>Product ID</small>\n\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t<small>Action</small>\n\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let list of productData?.insurances\">\n\t\t\t\t\t\t\t\t\t\t\t<th *ngIf=\"list?.product_id==productId\">\n\t\t\t\t\t\t\t\t\t\t\t\t<small>{{ list?.id }}</small>\n\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t<th *ngIf=\"list?.product_id==productId\">\n\t\t\t\t\t\t\t\t\t\t\t\t<small>{{ list?.product_id }}</small>\n\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t<th *ngIf=\"list?.product_id==productId\">\n\t\t\t\t\t\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn btn-info btn-xs\" title=\"Insurance Info\" (click)=\"editInsuranceForm(list)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">insert_drive_file</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t<div class=\"col-md-6\" style=\"border: 1px solid black;width:48%\">\n\t\t\t\t\t\t<div *ngIf=\"productData?.amcs?.length > 0\">\n\t\t\t\t\t\t\t<div class=\"body table-responsive\" style=\"padding-bottom:0px;\">\n\t\t\t\t\t\t\t\t<table class=\"table table-condensed\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t<small>AMC\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>ID</small>\n\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t<small>Product ID</small>\n\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t<small>Action</small>\n\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let list of productData?.amcs\">\n\t\t\t\t\t\t\t\t\t\t\t<th *ngIf=\"list?.product_id==productId\">\n\t\t\t\t\t\t\t\t\t\t\t\t<small>{{ list?.id }}</small>\n\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t<th *ngIf=\"list?.product_id==productId\">\n\t\t\t\t\t\t\t\t\t\t\t\t<small>{{ list?.product_id }}</small>\n\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t<th *ngIf=\"list?.product_id==productId\">\n\t\t\t\t\t\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn btn-info btn-xs\" title=\"AMC Info\" (click)=\"editAmcForm(list)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">insert_drive_file</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6\" style=\"border: 1px solid black;width:48%\">\n\t\t\t\t\t\t<div *ngIf=\"productData?.repairs?.length > 0\">\n\t\t\t\t\t\t\t<div class=\"body table-responsive\" style=\"padding-bottom:0px;\">\n\t\t\t\t\t\t\t\t<table class=\"table table-condensed\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t<small>Repair ID</small>\n\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t<small>Product ID</small>\n\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t<small>Action</small>\n\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let list of productData?.repairs\">\n\t\t\t\t\t\t\t\t\t\t\t<th *ngIf=\"list?.product_id==productId\">\n\t\t\t\t\t\t\t\t\t\t\t\t<small>{{ list?.id }}</small>\n\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t<th *ngIf=\"list?.product_id==productId\">\n\t\t\t\t\t\t\t\t\t\t\t\t<small>{{ list?.product_id }}</small>\n\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t<th *ngIf=\"list?.product_id==productId\">\n\t\t\t\t\t\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn btn-info btn-xs\" title=\"Repair Info\" (click)=\"editRepairForm(list)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">insert_drive_file</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Addons Buttons End -->\n\t\t\t<!-- Ask category Start -->\n\t\t\t<div *ngIf=\"askMainCategory\">\n\t\t\t\t<button class=\"btn btn-md btn-warning\" (click)=\"backtoAddons()\">Back</button>\n\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t<label class=\"font-small\">Main Category</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<select class=\"form-control dropdown\" name=\"ref_id\" (change)=\"onSelectMainCat($event.target.value)\" ngModel=\"{{productFormObjectForBind?.main_category_id}}\"\n\t\t\t\t\t\t\t disabled>\n\t\t\t\t\t\t\t\t<option value=\"\">Select</option>\n\t\t\t\t\t\t\t\t<option *ngFor=\"let mainCategoryList of mainCat?.data\" [value]=\"mainCategoryList?.category_id\">{{ mainCategoryList?.category_name }}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<p></p>\n\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t<label class=\"font-small\">Category</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<select class=\"form-control dropdown\" name=\"ref_id\" (change)=\"onSelectCat($event.target.value)\" ngModel=\"{{productFormObjectForBind?.category_id}}\"\n\t\t\t\t\t\t\t disabled>\n\t\t\t\t\t\t\t\t<option value=\"\">Select</option>\n\t\t\t\t\t\t\t\t<option *ngFor=\"let categoryList of cat\" [value]=\"categoryList?.category_id\">{{ categoryList?.category_name }}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Ask Category End -->\n\n\t\t\t<!-- Product Form Start -->\n\t\t\t<div *ngIf=\"showProductForm\">\n\t\t\t\t<form #productForm=\"ngForm\" (ngSubmit)=\"verifyProductFormData(productForm)\">\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Image</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\" *ngIf=\"selectedImageArray?.length > 0;else elseBlock\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-md bg-red\" disabled=\"disabled\" *ngFor=\"let image of selectedImageArray;let i = index\" (click)=\"removeImage(i)\">{{i+1}}</button>\n\t\t\t\t\t\t\t\t<span *ngFor=\"let image of selectedImageArray;\">\n\t\t\t\t\t\t\t\t\t<img src=\"{{imageUrl}}api/{{image?.copyUrl}}\" height=\"40px\" width=\"25px\">\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<p></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ng-template #elseBlock>\n\t\t\t\t\t\t\t\t<p> No Image Selected </p>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Product Name</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"product_name\" class=\"form-control\" ngModel=\"{{productFormObjectForBind?.product_name}}\" disabled>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Purchase Cost</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"number\" name=\"purchase_cost\" class=\"form-control\" ngModel=\"{{productFormObjectForBind?.purchase_cost}}\" disabled>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Taxes</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"number\" name=\"taxes\" class=\"form-control\" ngModel=\"{{productFormObjectForBind?.taxes}}\" disabled>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p></p>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Brand</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<select class=\"form-control dropdown\" name=\"brand_id\" ngModel=\"{{productFormObjectForBind?.brand_id}}\" disabled>\n\t\t\t\t\t\t\t\t\t<option value=\"\">Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let brand of brands?.data\" value=\"{{brand?.brand_id}}\">{{ brand.brand_name }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p></p>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Colour</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<select class=\"form-control dropdown\" name=\"colour_id\" ngModel=\"{{productFormObjectForBind?.colour_id}}\" disabled>\n\t\t\t\t\t\t\t\t\t<option value=\"\">Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let list of colours?.data\" value=\"{{list?.colour_id}}\">{{ list?.colour_name }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p></p>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Offline Seller</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<select class=\"form-control dropdown\" name=\"seller_id\" ngModel=\"{{productFormObjectForBind?.seller_id}}\" disabled>\n\t\t\t\t\t\t\t\t\t<option value=\"\">Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let list of offlineSeller?.data\" value=\"{{list?.sid}}\">{{ list?.seller_name }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p></p>\n\t\t\t\t\t<p class=\"font-small text-center\">\n\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\t<u>Product Meta Data</u>\n\t\t\t\t\t\t</b>\n\t\t\t\t\t</p>\n\t\t\t\t\t<div *ngFor=\"let form of catForm; let i = index\">\n\t\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t\t<label class=\"font-small\">{{ form?.title}}</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\" *ngIf=\"form?.form_type == 1\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"{{form?.id}}\" class=\"form-control\" ngModel=\"{{ productMetaDataForBind && productMetaDataForBind[i]?.form_value}}\"\n\t\t\t\t\t\t\t\t\t\t disabled>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<p></p>\n\t\t\t\t\t\t\t\t<div class=\"form-group\" *ngIf=\"form?.form_type == 2\">\n\t\t\t\t\t\t\t\t\t<select class=\"form-control dropdown\" name=\"{{form?.id}}\" ngModel=\"{{ productMetaDataForBind && productMetaDataForBind[i]?.form_value}}\"\n\t\t\t\t\t\t\t\t\t disabled>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">Select</option>\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let list of form?.dropDowns\" value=\"{{list?.id}}\">{{ list?.title }}</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\" *ngIf=\"form?.form_type == 3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"date\" name=\"{{form?.id}}\" class=\"form-control\" ngModel=\"{{ productMetaDataForBind && productMetaDataForBind[i]?.form_value}}\"\n\t\t\t\t\t\t\t\t\t\t disabled>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\" *ngIf=\"form?.form_type == 4\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\" name=\"{{form?.id}}\" class=\"form-control\" ngModel=\"{{ productMetaDataForBind && productMetaDataForBind[i]?.form_value}}\"\n\t\t\t\t\t\t\t\t\t\t disabled>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<br>\n\t\t\t\t\t<div class=\"row clearfix\" *ngIf=\"userType!=4\">\n\t\t\t\t\t\t<div class=\"col-md-8 col-md-offset-3\">\n\t\t\t\t\t\t\t<button class=\"btn bg-primary pull-right btn-lg\" type=\"submit\" *ngIf=\"productFormObjectForBind?.status_type!=5\">Verify Product</button>\n\t\t\t\t\t\t\t<p class=\"badge bg-gray\" style=\"padding:13px;\" *ngIf=\"productFormObjectForBind?.status_type==5\">Verified by Admin / QE</p>\n\t\t\t\t\t\t\t<button class=\"btn bg-primary pull-right btn-lg\" type=\"button\" (click)=\"unverifyProduct()\" *ngIf=\"productFormObjectForBind?.status_type == 5\">Un-verify Product</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<br>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<!-- Product Form End -->\n\n\t\t\t<!-- Warranty Edit Form Start -->\n\t\t\t<div *ngIf=\"showWarrantyEditForm\">\n\t\t\t\t<button class=\"btn btn-md btn-warning\" (click)=\"backtoAddons()\">Back</button>\n\t\t\t\t<button *ngIf=\"jobDetails?.bills?.length == 0\" class=\"btn btn-md btn-primary\" (click)=\"addonProductInfo(warrantyFormObjectForBind.product_id)\">Product Info</button>\n\t\t\t\t<form #warrantyEditForm=\"ngForm\" (ngSubmit)=\"verifyWarranty(warrantyEditForm)\">\n\t\t\t\t\t<p></p>\n\t\t\t\t\t<p class=\"badge bg-primary\">Warranty</p>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Image</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\" *ngIf=\"selectedEditWarrantyImageArray?.length > 0;else elseBlock\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-md bg-red\" disabled=\"disabled\" *ngFor=\"let image of selectedEditWarrantyImageArray;let i = index\">{{i+1}}</button>\n\t\t\t\t\t\t\t\t<span *ngFor=\"let image of selectedEditWarrantyImageArray;\">\n\t\t\t\t\t\t\t\t\t<img src=\"{{imageUrl}}api/{{image?.copyUrl}}\" height=\"40px\" width=\"25px\">\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<p></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ng-template #elseBlock>\n\t\t\t\t\t\t\t\t<p> No Image Selected </p>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Document Number</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"document_number\" class=\"form-control\" ngModel=\"{{warrantyFormObjectForBind?.document_number}}\" disabled>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Renewal Cost</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"number\" name=\"renewal_cost\" class=\"form-control\" ngModel=\"{{warrantyFormObjectForBind?.renewal_cost}}\" disabled>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Renewal Taxes</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"number\" name=\"renewal_taxes\" class=\"form-control\" ngModel=\"{{warrantyFormObjectForBind?.renewal_taxes}}\" disabled>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Document Date</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"date\" name=\"document_date\" class=\"form-control\" ngModel=\"{{warrantyFormObjectForBind?.document_date | date:'yyyy-MM-dd'}}\"\n\t\t\t\t\t\t\t\t\t disabled>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Renewal Type</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<select class=\"form-control dropdown\" name=\"renewal_type\" ngModel=\"{{warrantyFormObjectForBind?.renewal_type}}\" disabled>\n\t\t\t\t\t\t\t\t\t<option value=\"\">Select</option>\n\t\t\t\t\t\t\t\t\t<option value=1>Yearly</option>\n\t\t\t\t\t\t\t\t\t<option value=2>Half Yearly</option>\n\t\t\t\t\t\t\t\t\t<option value=3>Quarterly</option>\n\t\t\t\t\t\t\t\t\t<option value=4>Monthly</option>\n\t\t\t\t\t\t\t\t\t<option value=5>5 Yearly</option>\n\t\t\t\t\t\t\t\t\t<option value=6>10 Yearly</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Effective Date</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"date\" name=\"effective_date\" class=\"form-control\" ngModel=\"{{warrantyFormObjectForBind?.effective_date | date:'yyyy-MM-dd'}}\"\n\t\t\t\t\t\t\t\t\t disabled>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Expiry Date</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"date\" name=\"expiry_date\" class=\"form-control\" ngModel=\"{{warrantyFormObjectForBind?.expiry_date | date:'yyyy-MM-dd'}}\"\n\t\t\t\t\t\t\t\t\t disabled>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p></p>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Offline Seller</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<select class=\"form-control dropdown\" name=\"seller_id\" ngModel=\"{{warrantyFormObjectForBind?.seller_id}}\" disabled>\n\t\t\t\t\t\t\t\t\t<option>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let list of offlineSeller?.data\" value=\"{{list?.sid}}\">{{ list?.seller_name }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p></p>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Online Seller</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<select class=\"form-control dropdown\" name=\"online_seller_id\" ngModel=\"{{warrantyFormObjectForBind?.online_seller_id}}\" disabled>\n\t\t\t\t\t\t\t\t\t<option>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let list of onlineSeller?.data\" value=\"{{list?.sid}}\">{{ list?.seller_name }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p></p>\n\t\t\t\t\t<div class=\"row clearfix\" *ngIf=\"userType!=4\">\n\t\t\t\t\t\t<div class=\"col-md-4 col-md-offset-7\">\n\t\t\t\t\t\t\t<button class=\"btn bg-primary btn-block btn-lg\" type=\"submit\" *ngIf=\"warrantyFormObjectForBind?.status_type!=5\">Verify Warranty</button>\n\t\t\t\t\t\t\t<p class=\"badge bg-green\" style=\"padding:10px;\" *ngIf=\"warrantyFormObjectForBind?.status_type==5\">Verified by Admin / QE</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<br>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<!-- Warranty Edit Form End -->\n\n\t\t\t<!-- Insurance Edit Form Start -->\n\t\t\t<div *ngIf=\"showInsuranceEditForm\">\n\t\t\t\t<button class=\"btn btn-md btn-warning\" (click)=\"backtoAddons()\">Back</button>\n\t\t\t\t<button *ngIf=\"jobDetails?.bills?.length == 0 && jobDetails?.products?.length == 0\" class=\"btn btn-md btn-primary\" (click)=\"addonProductInfo(insuranceFormObjectForBind.product_id)\">Product Info</button>\n\t\t\t\t<form #insuranceEditForm=\"ngForm\" (ngSubmit)=\"verifyInsurance(insuranceEditForm)\">\n\t\t\t\t\t<p></p>\n\t\t\t\t\t<p class=\"badge bg-pink\">Insurance</p>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Image</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\" *ngIf=\"selectedEditInsuranceImageArray?.length > 0;else elseBlock\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-md bg-red\" disabled=\"disabled\" *ngFor=\"let image of selectedEditInsuranceImageArray;let i = index\">{{i+1}}</button>\n\t\t\t\t\t\t\t\t<span *ngFor=\"let image of selectedEditInsuranceImageArray;\">\n\t\t\t\t\t\t\t\t\t<img src=\"{{imageUrl}}api/{{image?.copyUrl}}\" height=\"40px\" width=\"25px\">\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<p></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ng-template #elseBlock>\n\t\t\t\t\t\t\t\t<p> No Image Selected </p>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Document Number</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"document_number\" class=\"form-control\" ngModel=\"{{insuranceFormObjectForBind?.document_number}}\"\n\t\t\t\t\t\t\t\t\t disabled>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Renewal Cost</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"number\" name=\"renewal_cost\" class=\"form-control\" ngModel=\"{{insuranceFormObjectForBind?.renewal_cost}}\" disabled>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Renewal Taxes</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"number\" name=\"renewal_taxes\" class=\"form-control\" ngModel=\"{{insuranceFormObjectForBind?.renewal_taxes}}\" disabled>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Document Date</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"date\" name=\"document_date\" class=\"form-control\" ngModel=\"{{insuranceFormObjectForBind?.document_date | date:'yyyy-MM-dd'}}\"\n\t\t\t\t\t\t\t\t\t disabled>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Renewal Type</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<select class=\"form-control dropdown\" name=\"renewal_type\" ngModel=\"{{insuranceFormObjectForBind?.renewal_type}}\" disabled>\n\t\t\t\t\t\t\t\t\t<option value=\"\">Select</option>\n\t\t\t\t\t\t\t\t\t<option value=1>Yearly</option>\n\t\t\t\t\t\t\t\t\t<option value=2>Half Yearly</option>\n\t\t\t\t\t\t\t\t\t<option value=3>Quarterly</option>\n\t\t\t\t\t\t\t\t\t<option value=4>Monthly</option>\n\t\t\t\t\t\t\t\t\t<option value=5>5 Yearly</option>\n\t\t\t\t\t\t\t\t\t<option value=6>10 Yearly</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Effective Date</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"date\" name=\"effective_date\" class=\"form-control\" ngModel=\"{{insuranceFormObjectForBind?.effective_date | date:'yyyy-MM-dd'}}\"\n\t\t\t\t\t\t\t\t\t disabled>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Expiry Date</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"date\" name=\"expiry_date\" class=\"form-control\" ngModel=\"{{insuranceFormObjectForBind?.expiry_date | date:'yyyy-MM-dd'}}\"\n\t\t\t\t\t\t\t\t\t disabled>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p></p>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Offline Seller</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<select class=\"form-control dropdown\" name=\"seller_id\" ngModel=\"{{insuranceFormObjectForBind?.seller_id}}\" disabled>\n\t\t\t\t\t\t\t\t\t<option>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let list of offlineSeller?.data\" value=\"{{list?.sid}}\">{{ list?.seller_name }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p></p>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Online Seller</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<select class=\"form-control dropdown\" name=\"online_seller_id\" ngModel=\"{{insuranceFormObjectForBind?.online_seller_id}}\"\n\t\t\t\t\t\t\t\t disabled>\n\t\t\t\t\t\t\t\t\t<option>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let list of onlineSeller?.data\" value=\"{{list?.sid}}\">{{ list?.seller_name }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p></p>\n\t\t\t\t\t<div class=\"row clearfix\" *ngIf=\"userType!=4\">\n\t\t\t\t\t\t<div class=\"col-md-4 col-md-offset-7\">\n\t\t\t\t\t\t\t<button class=\"btn bg-primary btn-block btn-lg\" type=\"submit\" *ngIf=\"insuranceFormObjectForBind?.status_type!=5\">Verify Insurance</button>\n\t\t\t\t\t\t\t<p class=\"badge bg-green\" style=\"padding:10px;\" *ngIf=\"insuranceFormObjectForBind?.status_type==5\">Verified by Admin / QE</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<br>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<!-- Insurance Edit Form End -->\n\n\t\t\t<!-- AMC Edit Form Start -->\n\t\t\t<div *ngIf=\"showAmcEditForm\">\n\t\t\t\t<button class=\"btn btn-md btn-warning\" (click)=\"backtoAddons()\">Back</button>\n\t\t\t\t<button *ngIf=\"jobDetails?.bills?.length == 0\" class=\"btn btn-md btn-primary\" (click)=\"addonProductInfo(amcFormObjectForBind.product_id)\">Product Info</button>\n\t\t\t\t<form #amcEditForm=\"ngForm\" (ngSubmit)=\"verifyAmc(amcEditForm)\">\n\t\t\t\t\t<p></p>\n\t\t\t\t\t<p class=\"badge bg-indigo\">AMC</p>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Image</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\" *ngIf=\"selectedEditAmcImageArray?.length > 0;else elseBlock\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-md bg-red\" disabled=\"disabled\" *ngFor=\"let image of selectedEditAmcImageArray;let i = index\">{{i+1}}</button>\n\t\t\t\t\t\t\t\t<span *ngFor=\"let image of selectedEditAmcImageArray;\">\n\t\t\t\t\t\t\t\t\t<img src=\"{{imageUrl}}api/{{image?.copyUrl}}\" height=\"40px\" width=\"25px\">\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<p></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ng-template #elseBlock>\n\t\t\t\t\t\t\t\t<p> No Image Selected </p>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Document Number</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"document_number\" class=\"form-control\" ngModel=\"{{amcFormObjectForBind?.document_number}}\" disabled>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Renewal Cost</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"number\" name=\"renewal_cost\" class=\"form-control\" ngModel=\"{{amcFormObjectForBind?.renewal_cost}}\" disabled>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Renewal Taxes</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"number\" name=\"renewal_taxes\" class=\"form-control\" ngModel=\"{{amcFormObjectForBind?.renewal_taxes}}\" disabled>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Document Date</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"date\" name=\"document_date\" class=\"form-control\" ngModel=\"{{amcFormObjectForBind?.document_date | date:'yyyy-MM-dd'}}\"\n\t\t\t\t\t\t\t\t\t disabled>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Renewal Type</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<select class=\"form-control dropdown\" name=\"renewal_type\" ngModel=\"{{amcFormObjectForBind?.renewal_type}}\" disabled>\n\t\t\t\t\t\t\t\t\t<option value=\"\">Select</option>\n\t\t\t\t\t\t\t\t\t<option value=1>Yearly</option>\n\t\t\t\t\t\t\t\t\t<option value=2>Half Yearly</option>\n\t\t\t\t\t\t\t\t\t<option value=3>Quarterly</option>\n\t\t\t\t\t\t\t\t\t<option value=4>Monthly</option>\n\t\t\t\t\t\t\t\t\t<option value=5>5 Yearly</option>\n\t\t\t\t\t\t\t\t\t<option value=6>10 Yearly</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Effective Date</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"date\" name=\"effective_date\" class=\"form-control\" ngModel=\"{{amcFormObjectForBind?.effective_date | date:'yyyy-MM-dd'}}\"\n\t\t\t\t\t\t\t\t\t disabled>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Expiry Date</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"date\" name=\"expiry_date\" class=\"form-control\" ngModel=\"{{amcFormObjectForBind?.expiry_date | date:'yyyy-MM-dd'}}\"\n\t\t\t\t\t\t\t\t\t disabled>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p></p>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Offline Seller</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<select class=\"form-control dropdown\" name=\"seller_id\" ngModel=\"{{amcFormObjectForBind?.seller_id}}\" disabled>\n\t\t\t\t\t\t\t\t\t<option>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let list of offlineSeller?.data\" value=\"{{list?.sid}}\">{{ list?.seller_name }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p></p>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Online Seller</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<select class=\"form-control dropdown\" name=\"online_seller_id\" ngModel=\"{{amcFormObjectForBind?.online_seller_id}}\" disabled>\n\t\t\t\t\t\t\t\t\t<option>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let list of onlineSeller?.data\" value=\"{{list?.sid}}\">{{ list?.seller_name }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p></p>\n\t\t\t\t\t<div class=\"row clearfix\" *ngIf=\"userType!=4\">\n\t\t\t\t\t\t<div class=\"col-md-4 col-md-offset-7\">\n\t\t\t\t\t\t\t<button class=\"btn bg-primary btn-block btn-lg\" type=\"submit\" *ngIf=\"amcFormObjectForBind?.status_type!=5\">Verify AMC</button>\n\t\t\t\t\t\t\t<p class=\"badge bg-green\" style=\"padding:10px;\" *ngIf=\"amcFormObjectForBind?.status_type==5\">Verified by Admin / QE</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<br>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<!-- AMC Edit Form End -->\n\t\t\t<!-- Repair Edit Form Start -->\n\t\t\t<div *ngIf=\"showRepairEditForm\">\n\t\t\t\t<button class=\"btn btn-md btn-warning\" (click)=\"backtoAddons()\">Back</button>\n\t\t\t\t<button *ngIf=\"jobDetails?.bills?.length == 0\" class=\"btn btn-md btn-primary\" (click)=\"addonProductInfo(repairFormObjectForBind.product_id)\">Product Info</button>\n\t\t\t\t<form #repairEditForm=\"ngForm\" (ngSubmit)=\"verifyRepair(repairEditForm)\">\n\t\t\t\t\t<p></p>\n\t\t\t\t\t<p class=\"badge bg-red\">Repair</p>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Image</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\" *ngIf=\"selectedEditRepairImageArray?.length > 0;else elseBlock\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-md bg-red\" disabled=\"disabled\" *ngFor=\"let image of selectedEditRepairImageArray;let i = index\">{{i+1}}</button>\n\t\t\t\t\t\t\t\t<span *ngFor=\"let image of selectedEditRepairImageArray;\">\n\t\t\t\t\t\t\t\t\t<img src=\"{{imageUrl}}api/{{image?.copyUrl}}\" height=\"40px\" width=\"25px\">\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<p></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ng-template #elseBlock>\n\t\t\t\t\t\t\t\t<p> No Image Selected </p>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Document Number</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"document_number\" class=\"form-control\" ngModel=\"{{repairFormObjectForBind?.document_number}}\" disabled>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Repair Cost</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"number\" name=\"repair_cost\" class=\"form-control\" ngModel=\"{{repairFormObjectForBind?.repair_cost}}\" disabled>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Repair Taxes</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"number\" name=\"repair_taxes\" class=\"form-control\" ngModel=\"{{repairFormObjectForBind?.repair_taxes}}\" disabled>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Document Date</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"date\" name=\"document_date\" class=\"form-control\" ngModel=\"{{repairFormObjectForBind?.document_date | date:'yyyy-MM-dd'}}\"\n\t\t\t\t\t\t\t\t\t disabled>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p></p>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Offline Seller</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<select class=\"form-control dropdown\" name=\"seller_id\" ngModel=\"{{repairFormObjectForBind?.seller_id}}\" disabled>\n\t\t\t\t\t\t\t\t\t<option>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let list of offlineSeller?.data\" value=\"{{list?.sid}}\">{{ list?.seller_name }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p></p>\n\t\t\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t\t\t<label class=\"font-small\">Online Seller</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<select class=\"form-control dropdown\" name=\"online_seller_id\" ngModel=\"{{repairFormObjectForBind?.online_seller_id}}\" disabled>\n\t\t\t\t\t\t\t\t\t<option>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let list of onlineSeller?.data\" value=\"{{list?.sid}}\">{{ list?.seller_name }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p></p>\n\t\t\t\t\t<div class=\"row clearfix\" *ngIf=\"userType!=4\">\n\t\t\t\t\t\t<div class=\"col-md-4 col-md-offset-7\">\n\t\t\t\t\t\t\t<button class=\"btn bg-primary btn-block btn-lg\" type=\"submit\" *ngIf=\"repairFormObjectForBind?.status_type!=5\">Verify Repair</button>\n\t\t\t\t\t\t\t<p class=\"badge bg-green\" style=\"padding:10px;\" *ngIf=\"repairFormObjectForBind?.status_type==5\">Verified by Admin / QE</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<br>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<!-- Repair Edit Form End -->\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/job-management/bill/view-bill/view-bill.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewBillComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_function_service__ = __webpack_require__("../../../../../src/app/_services/function.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewBillComponent = (function () {
    function ViewBillComponent(_location, route, router, userService, fb, functionService) {
        this._location = _location;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.fb = fb;
        this.functionService = functionService;
        this.imageArray = [];
        this.selectedImageArray = [];
        this.selectedWarrantyImageArray = [];
        this.selectedEditWarrantyImageArray = [];
        this.selectedInsuranceImageArray = [];
        this.selectedEditInsuranceImageArray = [];
        this.selectedAmcImageArray = [];
        this.selectedEditAmcImageArray = [];
        this.selectedRepairImageArray = [];
        this.selectedEditRepairImageArray = [];
        this.images = [];
        this.imageUrl = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* appConfig */].apiUrl;
        this.imageIndex = 0;
        this.productFromMetaData = [];
        //******************Hide and Show Variables  ****************************//
        this.jobDetailsShow = true;
        this.billGeneralInfo = false;
        this.billGeneralInfoEdit = false;
        this.cockpit = false;
        this.addons = false;
        this.askMainCategory = false;
        this.showProductForm = false;
        this.showSellerForm = false;
        this.reassignDialog = false;
        this.showWarrantyEditForm = false;
        this.showInsuranceEditForm = false;
        this.showAmcEditForm = false;
        this.showRepairEditForm = false;
        this.completeJobDialog = false;
        this.imagerotation = 0;
        this.jobId = route.snapshot.params.id;
        var info = JSON.parse(localStorage.getItem('currentUser'));
        this.userType = info.role_type;
        this.ceId = info.id;
    }
    ViewBillComponent.prototype.ngOnInit = function () {
        this.getDetailsOfJob();
        webGlObject.init();
    };
    // get details of current job
    ViewBillComponent.prototype.getDetailsOfJob = function () {
        var _this = this;
        this.userService.getJobByID(this.jobId)
            .subscribe(function (res) {
            _this.jobDetails = res.data;
            console.log('job details', _this.jobDetails);
            _this.userId = res.data.user_id;
            _this.imageArray = res.data.copies;
            // console.log(this.imageArray,"image ka array");
            _this.imageArrayLength = _this.imageArray.length;
            if (_this.imageArray.length == 0) {
                alert("There is no image in this bill please contact Admin");
            }
            for (var _i = 0, _a = _this.imageArray; _i < _a.length; _i++) {
                var i = _a[_i];
                _this.images.push(_this.imageUrl + 'api/' + i.copyUrl);
            }
            _this.showProductForm = true;
        }, function (error) {
            console.log(error);
        });
    };
    // prev image
    ViewBillComponent.prototype.prevImage = function () {
        // $("#image").remove();
        if (this.imageIndex > 0) {
            this.imageIndex = this.imageIndex - 1;
            // $("#image").imgViewer2();
        }
    };
    // next image
    ViewBillComponent.prototype.nextImage = function () {
        // $("#image").remove();
        if (this.imageIndex < this.imageArray.length - 1) {
            this.imageIndex = this.imageIndex + 1;
            // $("#image").imgViewer2();
        }
    };
    ViewBillComponent.prototype.rotate = function () {
        this.imagerotation = this.imagerotation + 90;
    };
    //**********************************Bill General Info**********************************//
    // update bill
    ViewBillComponent.prototype.verifyBillGeneral = function (form) {
        var _this = this;
        console.log(this.billId);
        this.userService.verifyBill(this.billId)
            .subscribe(function (res) {
            alert("verified");
            console.log(res);
            _this.getDetailsOfJob();
            _this.billGeneralInfoEdit = false;
        }, function (err) {
            console.log(err);
        });
    };
    ViewBillComponent.prototype.showbillGeneralInfoForm = function () {
        this.billGeneralInfoEdit = true;
        this.askMainCategory = false;
        this.showProductForm = false;
        this.showSellerForm = false;
    };
    // complete job
    ViewBillComponent.prototype.completeJob = function () {
        var _this = this;
        this.userService.completeJobQE(this.jobId, this.ceId)
            .subscribe(function (res) {
            console.log(res);
            alert("JOB Completed Successfully");
            _this.router.navigateByUrl('/dashboard/new');
        }, function (error) {
            console.log(error);
            var err = JSON.parse(error['_body']);
            alert(err.reason);
        });
    };
    // reassignjob
    ViewBillComponent.prototype.reassignJobPopUp = function () {
        this.reassignDialog = true;
    };
    ViewBillComponent.prototype.reassignJob = function (form) {
        var _this = this;
        console.log(form.value);
        var data = form.value;
        this.userService.reassignJob(this.jobId, data)
            .subscribe(function (res) {
            console.log(res);
            alert("JOB Reassigned Successfully");
            _this.router.navigateByUrl('/dashboard/new');
        }, function (error) {
            console.log(error);
        });
    };
    //********************************* Product Functions***********************************//
    ViewBillComponent.prototype.makeProduct = function (bill) {
        this.billId = bill.id;
        this.onlineSellerList();
        this.billGeneralInfoFormObjectForBind = bill;
        console.log(bill, "bill wala ");
        this.cockpit = true;
        this.jobDetailsShow = false;
    };
    ViewBillComponent.prototype.showProductInfo = function () {
        this.askMainCategory = true;
        this.showProductForm = true;
        this.addons = false;
    };
    ViewBillComponent.prototype.addonProductInfo = function (pid) {
        var _this = this;
        // console.log(pid);
        this.userService.getProductDetailById(pid)
            .subscribe(function (res) {
            console.log(res);
            _this.askMainCategory = true;
            _this.showProductForm = true;
            _this.showWarrantyEditForm = false;
            _this.showInsuranceEditForm = false;
            _this.showAmcEditForm = false;
            _this.showRepairEditForm = false;
            _this.getBrandList();
            _this.getColorList();
            _this.getOfflineSellerList();
            _this.mainCategoryList();
            _this.onSelectMainCat(res.data.main_category_id);
            _this.onSelectCat(res.data.category_id);
            _this.fillProductForm(pid);
            _this.selectedImageArray = res.data.copies;
            _this.productFormObjectForBind = res.data;
        }, function (err) {
            console.log(err);
        });
    };
    // verify Product
    ViewBillComponent.prototype.verifyProductFormData = function () {
        var _this = this;
        this.showProductForm = false;
        this.askMainCategory = false;
        this.userService.verifyProduct(this.billId, this.productId)
            .subscribe(function (res) {
            alert(" Product verified");
            _this.showProductInfo();
            _this.cockpit = true;
            console.log(res);
            _this.getDetailsOfJob();
            _this.fillProductForm(_this.productId);
            _this.productFormObjectForBind.status_type = 5;
        }, function (err) {
            console.log(err);
        });
    };
    /* Unverify Product
    *  @author: Shubham Nigam
    *  lastWorkedOn: 12/12/2017
    */
    ViewBillComponent.prototype.unverifyProduct = function () {
        var _this = this;
        this.showProductForm = false;
        this.askMainCategory = false;
        this.userService.unverifyProduct(this.productId)
            .subscribe(function (res) {
            alert(" Product un-verified successfully");
            _this.showProductInfo();
            _this.cockpit = true;
            console.log(res);
            _this.productFormObjectForBind.status_type = 11;
            _this.getDetailsOfJob();
            _this.fillProductForm(_this.productId);
        }, function (err) {
            console.log(err);
        });
    };
    // get list of main category
    ViewBillComponent.prototype.mainCategoryList = function () {
        var _this = this;
        this.userService.getCategoryList(1) // 1 for main category refer to api doc
            .subscribe(function (mainCat) {
            _this.mainCat = mainCat;
            // console.log(mainCat);
        });
    };
    // after select main category show list of category
    ViewBillComponent.prototype.onSelectMainCat = function (catID) {
        var _this = this;
        this.mainCatId = catID;
        this.userService.getSubCategoryList(catID)
            .subscribe(function (res) {
            _this.cat = res.data.subCategories;
            // console.log(res, "category");
        });
    };
    // after select category show  category form
    ViewBillComponent.prototype.onSelectCat = function (catID) {
        var _this = this;
        this.catId = catID;
        this.userService.getSubCategoryList(catID)
            .subscribe(function (res) {
            _this.catForm = res.data.categoryForms;
            // console.log(this.catForm, "category form");
            // this.showProductForm = true;
            _this.getBrandList();
            _this.getColorList();
            _this.getOfflineSellerList();
        });
    };
    // brand list
    ViewBillComponent.prototype.getBrandList = function () {
        var _this = this;
        this.userService.getBrandList()
            .subscribe(function (brandList) {
            _this.brands = brandList;
            // console.log(this.brands,"brands");
        });
    };
    // color list
    ViewBillComponent.prototype.getColorList = function () {
        var _this = this;
        this.userService.getColorList()
            .subscribe(function (color) {
            _this.colours = color;
            // console.log(this.colours),"colors";
        });
    };
    // offline seller list
    ViewBillComponent.prototype.getOfflineSellerList = function () {
        var _this = this;
        this.userService.getOfflineSellerList()
            .subscribe(function (offlineSellerList) {
            _this.offlineSeller = offlineSellerList;
            // console.log(this.offlineSeller,"offline seller");
        });
    };
    //********************************* Warranty Functions***********************************//
    ViewBillComponent.prototype.editWarrantyForm = function (war) {
        console.log(war);
        this.warrantyId = war.id;
        this.getOfflineSellerList();
        this.showWarrantyEditForm = true;
        this.addons = false;
        this.jobDetailsShow = false;
        this.selectedEditWarrantyImageArray = war.copies;
        this.warrantyFormObjectForBind = war;
        this.productId = war.product_id;
    };
    ViewBillComponent.prototype.verifyWarranty = function (form) {
        var _this = this;
        this.userService.verifyWarranty(this.productId, this.warrantyId)
            .subscribe(function (res) {
            alert("verified");
            console.log(res);
            _this.getDetailsOfJob();
            _this.fillProductForm(_this.productId);
            _this.showWarrantyEditForm = false;
            _this.addons = true;
            if (_this.jobDetails.bills.length == 0 && _this.jobDetails.products.length == 0) {
                _this.addons = false;
                _this.jobDetailsShow = true;
            }
        }, function (err) {
            console.log(err);
        });
    };
    //********************************* Insurance Functions***********************************//
    ViewBillComponent.prototype.editInsuranceForm = function (ins) {
        console.log(ins);
        this.insuranceId = ins.id;
        this.getOfflineSellerList();
        this.showInsuranceEditForm = true;
        this.addons = false;
        this.jobDetailsShow = false;
        this.selectedEditInsuranceImageArray = ins.copies;
        this.insuranceFormObjectForBind = ins;
        this.productId = ins.product_id;
    };
    ViewBillComponent.prototype.verifyInsurance = function (form) {
        var _this = this;
        this.userService.verifyInsurance(this.productId, this.insuranceId)
            .subscribe(function (res) {
            alert("verified");
            console.log(res);
            _this.getDetailsOfJob();
            _this.fillProductForm(_this.productId);
            _this.showInsuranceEditForm = false;
            _this.addons = true;
            if (_this.jobDetails.bills.length == 0 && _this.jobDetails.products.length == 0) {
                _this.addons = false;
                _this.jobDetailsShow = true;
            }
        }, function (err) {
            console.log(err);
        });
    };
    //********************************* AMC Functions***********************************//
    ViewBillComponent.prototype.editAmcForm = function (amc) {
        console.log(amc);
        this.amcId = amc.id;
        this.getOfflineSellerList();
        this.showAmcEditForm = true;
        this.addons = false;
        this.jobDetailsShow = false;
        this.selectedEditAmcImageArray = amc.copies;
        this.amcFormObjectForBind = amc;
        this.productId = amc.product_id;
    };
    ViewBillComponent.prototype.verifyAmc = function (form) {
        var _this = this;
        this.userService.verifyAmc(this.productId, this.amcId)
            .subscribe(function (res) {
            alert("verified");
            console.log(res);
            _this.getDetailsOfJob();
            _this.fillProductForm(_this.productId);
            _this.showAmcEditForm = false;
            _this.addons = true;
            if (_this.jobDetails.bills.length == 0 && _this.jobDetails.products.length == 0) {
                _this.addons = false;
                _this.jobDetailsShow = true;
            }
        }, function (err) {
            console.log(err);
        });
    };
    //********************************* Repair Functions***********************************//
    ViewBillComponent.prototype.editRepairForm = function (rep) {
        console.log(rep);
        this.repairId = rep.id;
        this.getOfflineSellerList();
        this.showRepairEditForm = true;
        this.addons = false;
        this.jobDetailsShow = false;
        this.selectedEditRepairImageArray = rep.copies;
        this.repairFormObjectForBind = rep;
        this.productId = rep.product_id;
    };
    ViewBillComponent.prototype.verifyRepair = function (form) {
        var _this = this;
        this.userService.verifyRepair(this.productId, this.repairId)
            .subscribe(function (res) {
            alert("verified");
            console.log(res);
            _this.getDetailsOfJob();
            _this.fillProductForm(_this.productId);
            _this.showRepairEditForm = false;
            _this.addons = true;
            if (_this.jobDetails.bills.length == 0 && _this.jobDetails.products.length == 0) {
                _this.addons = false;
                _this.jobDetailsShow = true;
            }
        }, function (err) {
            console.log(err);
        });
    };
    //********************************* Addons Functions***********************************//
    ViewBillComponent.prototype.addAddons = function (prod) {
        this.getBrandList();
        this.getColorList();
        this.getOfflineSellerList();
        this.mainCategoryList();
        this.onSelectMainCat(prod.main_category_id);
        this.onSelectCat(prod.category_id);
        this.selectedImageArray = prod.copies;
        console.log(prod, "pro");
        this.productFormObjectForBind = prod;
        console.log("here");
        console.log(this.productFormObjectForBind, "final");
        this.productId = prod.id;
        this.fillProductForm(this.productId);
        this.addons = true;
        this.cockpit = false;
        this.showSellerForm = false;
        this.showProductForm = false;
        this.askMainCategory = false;
        this.billGeneralInfoEdit = false;
        this.jobDetailsShow = false;
    };
    ViewBillComponent.prototype.fillProductForm = function (prodID) {
        var _this = this;
        this.userService.productMetaData(this.billId, prodID)
            .subscribe(function (res) {
            _this.productData = res.data;
            _this.productMetaDataForBind = res.data.metaData;
            console.log(_this.productMetaDataForBind, "productMetaDataForBind");
        }, function (err) {
            console.log(err);
        });
    };
    //********************************* Seller Functions***********************************//
    // get online seller list
    ViewBillComponent.prototype.onlineSellerList = function () {
        var _this = this;
        this.userService.getOnlineSellerList()
            .subscribe(function (onlineSellerList) {
            _this.onlineSeller = onlineSellerList;
            // console.log(this.onlineSeller);
        });
    };
    // create offline seller using form builder
    ViewBillComponent.prototype.offlineSellerFB = function () {
        this.offlineSellerForm = this.fb.group({
            'seller_name': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            'owner_name': '',
            'gstin': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            'pan_no': '',
            'reg_no': '',
            'is_service': '',
            'is_onboarded': '',
            'address': '',
            'city': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            'state': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            'pincode': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            'latitude': '',
            'longitude': '',
            'url': '',
            'email': '',
            'contact_no': ''
        });
    };
    ViewBillComponent.prototype.createOfflineSeller = function (data) {
        var _this = this;
        console.log(data);
        this.userService.createOfflineSeller(data)
            .subscribe(function (res) {
            console.log(res);
            alert('Offline Seller added succesfully');
            _this.offlineSellerForm.reset();
        });
    };
    // ******************************** Small Functions ***********************************//
    //select image 
    ViewBillComponent.prototype.selectImage = function () {
        console.log("can't add image by qe");
    };
    // open bill general form
    ViewBillComponent.prototype.openBillForm = function () {
        this.jobDetailsShow = false;
        this.billGeneralInfo = true;
        this.onlineSellerList(); //call seller list at time of bill info
    };
    // back To jobDetails Show 
    ViewBillComponent.prototype.backTojobDetailsShow = function () {
        this.showSellerForm = false;
        this.showProductForm = false;
        this.askMainCategory = false;
        this.jobDetailsShow = true;
        this.billGeneralInfo = false;
        this.billGeneralInfoEdit = false;
        this.cockpit = false;
    };
    // show add product form
    ViewBillComponent.prototype.showAddProductForm = function () {
        this.billGeneralInfoEdit = false;
        this.askMainCategory = true;
        this.showSellerForm = false;
        this.mainCategoryList(); // call function for get main category
    };
    // show add offline seller form
    ViewBillComponent.prototype.showAddSellerForm = function () {
        alert("Ruk Jao Bhai Bna rahe");
        this.billGeneralInfoEdit = false;
        this.showSellerForm = false;
        this.askMainCategory = false;
        this.showProductForm = false;
        this.offlineSellerFB();
    };
    ViewBillComponent.prototype.backToCockpit = function () {
        this.addons = false;
        this.cockpit = true;
    };
    ViewBillComponent.prototype.backtoAddons = function () {
        this.addons = true;
        if (this.jobDetails.bills.length == 0) {
            this.addons = false;
            this.jobDetailsShow = true;
        }
        this.showWarrantyEditForm = false;
        this.showInsuranceEditForm = false;
        this.showAmcEditForm = false;
        this.showRepairEditForm = false;
        this.askMainCategory = false;
        this.showProductForm = false;
    };
    // function for avoid only space submit
    ViewBillComponent.prototype.avoidSpace = function (e) {
        this.functionService.NoWhitespaceValidator(this.offlineSellerForm, e);
    };
    ViewBillComponent.prototype.backClicked = function () {
        this._location.back();
    };
    return ViewBillComponent;
}());
ViewBillComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-view-bill',
        template: __webpack_require__("../../../../../src/app/dashboard/data-panel/job-management/bill/view-bill/view-bill.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/data-panel/job-management/bill/view-bill/view-bill.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__services_function_service__["a" /* FunctionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_function_service__["a" /* FunctionService */]) === "function" && _f || Object])
], ViewBillComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=view-bill.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/job-management/completed/completed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pager{\n    text-align: right;\n}\n.disabled{\n    display: none;\n}\n.comment{\n    max-width:250px;\n    overflow-wrap: break-word;\n  }\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/job-management/completed/completed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"header\">\n    <h2>\n      Completed JOB List\n      <small> For assign  the job click on the assign button</small>\n    </h2>\n  </div>\n  <div class=\"body table-responsive\">\n    <nav>\n      <ul class=\"pager\">\n        <li [ngClass]=\"{ 'disabled': leftFlag }\"><a class=\"waves-effect\" (click)=\"left()\">Previous</a></li>\n        <li [ngClass]=\"{ 'disabled': rightFlag }\"><a class=\"waves-effect\" (click)=\"right()\">Next</a></li>\n      </ul>\n    </nav>\n    <table class=\"table table-condensed\" *ngIf=\"!noData; else elseBlock\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Bill No.</th>\n          <th>Name</th>\n          <th>Phone No.</th>\n          <th>Email ID</th>\n          <th>JOB Date</th>\n          <th>Comments</th>\n          <th>View JOB</th>\n          <th *ngIf=\"userType <=2\">View Bill</th>\n        </tr>\n      </thead>\n      <tbody *ngFor=\"let bill of billList?.data; let i = index\">\n        <tr>\n          <th scope=\"row\">{{ i+1+prev }} </th>\n          <td *ngIf=\"userType==1 || userType==2\">{{ bill.job_id}}</td>\n          <td *ngIf=\"userType==3\">{{ bill.job_id}}</td>\n          <td *ngIf=\"userType==4\">{{ bill.job_id}}</td>\n          \n          <td *ngIf=\"userType==1 || userType==2\">{{ bill.user.full_name}}</td>\n          <td *ngIf=\"userType==3\">{{ bill.user.full_name}}</td>\n          <td *ngIf=\"userType==4\">{{ bill.user.full_name}}</td>\n          \n          <td *ngIf=\"userType==1 || userType==2\">{{ bill.user.mobile_no}}</td>\n          <td *ngIf=\"userType==3\">{{ bill.user.mobile_no}}</td>\n          <td *ngIf=\"userType==4\">{{ bill.user.mobile_no}}</td>       \n          \n          <td *ngIf=\"userType==1 || userType==2\">{{ bill.user.email}}</td>\n          <td *ngIf=\"userType==3\">{{ bill.user.email}}</td>\n          <td *ngIf=\"userType==4\">{{ bill.user.email}}</td> \n\n          <td *ngIf=\"userType==1 || userType==2\">{{ bill.user.updated_at | date}}</td>\n          <td *ngIf=\"userType==3\">{{ bill.qe.updated_at | date}}</td>\n          <td *ngIf=\"userType==4\">{{ bill.ce.updated_at | date}}</td>\n\n          \n          <td *ngIf=\"userType==1 || userType==2\">{{ bill?.comments}}</td>\n          <td *ngIf=\"userType==3\">{{ bill.qe.comments}}</td>\n          <td *ngIf=\"userType==4\">{{ bill.ce.comments}}</td>\n          \n          <td><button type=\"button\" class=\"btn bg-green waves-effect\" (click)=\"imageView.open();openImageModel(bill)\">View</button></td>\n          <td *ngIf=\"userType <=2\"><button type=\"button\" class=\"btn bg-cyan waves-effect\" routerLink=\"view/{{ bill.id }}\"\n            >View Bill</button></td>\n        </tr>\n      </tbody>\n    </table>\n    <ng-template #elseBlock>\n      <h4> No Data Available </h4>\n    </ng-template>\n  </div>\n</div>\n<modal #imageView [closeOnOutsideClick]=\"true\" modalClass=\"modal-lg\">\n  <modal-content>\n    <div *ngIf=\"!loader\">\n      <div class=\"body\">\n        <div class=\"row clearfix\" style=\"overflow:scroll\">\n          <div class=\"col-md-12\" style=\"text-align:center;\">\n            <img [src]=\"images[imageIndex]\" [style.transform]=\"'rotate(' + imagerotation + 'deg)'\">\n            <p></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"caption\">\n        <p class=\"text-center\">\n          <button type=\"button\" class=\"btn btn-info btn-sm waves-effect\" (click)=\"prevImage()\"><i class=\"material-icons\">skip_previous</i><span>Prev</span></button>\n          <button type=\"button\" class=\"btn btn-warning btn-sm waves-effect\" (click)=\"rotate()\"><i class=\"material-icons\">rotate_right</i><span>Rotate</span></button>\n          <a href=\"{{images[imageIndex]}}\" download><button type=\"button\" class=\"btn btn-success btn-sm waves-effect\"><i class=\"material-icons\">file_download</i><span>Download</span></button></a>\n          <!-- <button type=\"button\" class=\"btn btn-danger btn-sm waves-effect\" (click)=\"discardBillImage();imageView.close()\"><i class=\"material-icons\">clear</i><span>Discard Image</span></button> -->\n          <button type=\"button\" class=\"btn btn-info btn-sm waves-effect\" (click)=\"nextImage()\"><i class=\"material-icons\">skip_next</i><span>Next</span></button>\n          <span style=\"margin-left:5px\"><b>Image {{imageIndex+1}} of {{arrayLength}}</b></span>\n        </p>\n      </div>\n    </div>\n    <div class=\"text-center\" *ngIf=\"loader\">\n      <h1>Please Wait ...</h1>\n      <img src=\"../../../assets/images/loader.gif\" alt=\"\">\n    </div>\n  </modal-content>\n</modal>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/job-management/completed/completed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompletedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompletedComponent = (function () {
    function CompletedComponent(userservice) {
        this.userservice = userservice;
        this.imageUrl = __WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiUrl;
        this.showImageDialog = false;
        this.prev = 0;
        this.next = 10;
        this.offset = 0;
        this.leftFlag = true;
        this.rightFlag = false;
        this.noData = false;
        this.images = ['../../../assets/images/loader.gif'];
        this.imageArray = [];
        this.imageIndex = 0;
        this.imagerotation = 0;
        this.loader = false;
        // get userType from local Storage
        var info = JSON.parse(localStorage.getItem('currentUser'));
        this.userType = info.role_type;
        this.userId = info.id;
        // console.log("userType", this.userType)
    }
    CompletedComponent.prototype.ngOnInit = function () {
        var _this = this;
        // if userType is Admin/SuperAdmin get list of new bills
        if (this.userType === 1 || this.userType === 2) {
            this.userservice.getAdminJobList(5, this.offset) // completed = 5 refer api doc
                .subscribe(function (bill) {
                _this.billList = bill;
                console.log(_this.billList);
            });
        }
        else if (this.userType === 4) {
            this.userservice.getCEJobList(5, this.userId, this.offset) // completed = 5 refer api doc
                .subscribe(function (bill) {
                _this.billList = bill;
                console.log(_this.billList);
            });
        }
        else if (this.userType === 3) {
            this.userservice.getQEJobList(5, this.userId, this.offset) // completed = 5  refer api doc
                .subscribe(function (bill) {
                _this.billList = bill;
                console.log(_this.billList);
            });
        }
    };
    // function for pagination
    CompletedComponent.prototype.left = function () {
        var _this = this;
        this.leftFlag = true;
        this.rightFlag = false;
        this.noData = false;
        if (this.offset > 1) {
            this.offset = this.offset - 20;
            this.leftFlag = false;
        }
        if (this.userType === 1 || this.userType === 2) {
            this.userservice.getAdminJobList(5, this.offset)
                .subscribe(function (bills) {
                console.log(bills);
                _this.billList = bills;
                console.log(_this.billList);
            });
        }
        else if (this.userType === 3) {
            this.userservice.getCEJobList(5, this.userId, this.offset) // 4 for qe refer to api doc
                .subscribe(function (bills) {
                _this.billList = bills;
                console.log(bills);
            });
        }
    };
    CompletedComponent.prototype.right = function () {
        var _this = this;
        this.noData = false;
        this.leftFlag = false;
        this.offset = this.offset + 20;
        if (this.userType === 1 || this.userType === 2) {
            this.userservice.getAdminJobList(5, this.offset)
                .subscribe(function (bills) {
                console.log(bills);
                if (bills.data.length == 0) {
                    _this.rightFlag = true;
                    _this.noData = true;
                }
                _this.billList = bills;
                console.log(_this.billList);
            });
        }
        else if (this.userType === 3) {
            this.userservice.getCEJobList(5, this.userId, this.offset) // 4 for qe refer to api doc
                .subscribe(function (bills) {
                console.log(bills);
                if (bills.data.length == 0) {
                    _this.rightFlag = true;
                    _this.noData = true;
                }
                _this.billList = bills;
                console.log(_this.billList);
            });
        }
    };
    // for view image
    CompletedComponent.prototype.openImageModel = function (req) {
        var _this = this;
        this.images = [];
        this.imageIndex = 0;
        this.showImageDialog = true;
        this.loader = true;
        console.log(req, "reqqq");
        this.billId = req.BID;
        this.images = [];
        this.imageArray = [];
        this.userservice.getJobByID(req.id)
            .subscribe(function (res) {
            console.log(res, "images");
            _this.imageArray = res.data.copies;
            console.log(_this.imageArray);
            console.log(_this.imageArray.length, "length of array");
            _this.arrayLength = _this.imageArray.length;
            for (var _i = 0, _a = _this.imageArray; _i < _a.length; _i++) {
                var i = _a[_i];
                _this.images.push(_this.imageUrl + 'api/' + i.copyUrl);
            }
            _this.loader = false;
        });
        // this.discardBillImage(req.BID);
    };
    // prev image
    CompletedComponent.prototype.prevImage = function () {
        if (this.imageIndex > 0) {
            this.imageIndex = this.imageIndex - 1;
        }
        // console.log(this.imageIndex ,'prev')
    };
    // next image
    CompletedComponent.prototype.nextImage = function () {
        if (this.imageIndex < this.imageArray.length - 1) {
            this.imageIndex = this.imageIndex + 1;
            // console.log(this.imageIndex)
        }
        // console.log(this.imageIndex ,'next')
    };
    // rotete image
    CompletedComponent.prototype.rotate = function () {
        this.imagerotation = this.imagerotation + 90;
    };
    return CompletedComponent;
}());
CompletedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-completed',
        template: __webpack_require__("../../../../../src/app/dashboard/data-panel/job-management/completed/completed.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/data-panel/job-management/completed/completed.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], CompletedComponent);

var _a;
//# sourceMappingURL=completed.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/job-management/discarded/discarded.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown{\n    border-bottom:1px solid #ccc;\n}\n.pager{\n    text-align: right;\n}\n.disabled{\n    display: none;\n}\n.comment{\n    max-width:250px;\n    overflow-wrap: break-word;\n  }\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/job-management/discarded/discarded.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"header\">\n        <h2>\n            Discarded JOB List\n            <small> For assign  the job click on the assign button</small>\n        </h2>\n    </div>\n    <div class=\"body table-responsive\">\n          <nav>\n                  <ul class=\"pager\">\n                    <li [ngClass]=\"{ 'disabled': leftFlag }\"><a class=\"waves-effect\" (click)=\"left()\" >Previous</a></li>\n                    <li [ngClass]=\"{ 'disabled': rightFlag }\"><a class=\"waves-effect\" (click)=\"right()\">Next</a></li>\n                  </ul>\n                </nav>\n        <table class=\"table table-condensed\" *ngIf=\"!noData; else elseBlock\">\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Job ID</th>\n                    <th>Name</th>\n                    <th>Phone No.</th>\n                    <th>Email ID</th>\n                    <th>JOB Date</th>\n                    <th>Comments</th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody *ngFor=\"let bill of billList?.data; let i = index\">\n                <tr>\n                    <th scope=\"row\">{{ i+offset }} </th>\n                    <td>{{ bill?.job_id}}</td>\n                    <td>{{ bill?.user.full_name}}</td>\n                    <td>{{ bill?.user.mobile_no}}</td>\n                    <td>{{ bill?.user.email}}</td>\n                    <td>{{ bill?.user.created_at | date}}</td>\n                    <td class=\"comment\">{{ bill?.comments}}</td>\n                </tr>\n            </tbody>\n        </table>\n        <ng-template #elseBlock>\n              <h4> No Data Available </h4>\n             </ng-template>\n    </div>\n          <app-dialog [(visible)]=\"showDialog\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\" id=\"smallModalLabel\">Assign Bill</h4>\n          </div>\n          <div class=\"modal-body\">\n              <form class=\"form-horizontal\" [formGroup]='assignForm' (ngSubmit) = \"assignBill(assignForm.value)\">\n                  <div class=\"row clearfix\">\n                      <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                          <label for=\"email_address_2\">Select CE</label>\n                      </div>\n                      <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n                          <div class=\"form-group\">\n                          <select class=\"form-control dropdown\" formControlName=\"UID\">\n                              <option *ngFor=\"let user of users?.UserList\" [ngValue]=\"user.ID\" >{{ user.Name }}</option>\n                          </select>\n                          </div>\n                      </div>  \n                  </div>\n                  <br>\n                  <div class=\"row clearfix\">\n                      <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                          <label for=\"name\">Comments</label>\n                      </div>\n                      <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n                          <div class=\"form-group\">\n                              <div class=\"form-line\">\n                                  <textarea rows=\"5\" cols=\"52\" formControlName=\"Comments\"></textarea>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"row clearfix\">\n                      <div class=\"col-lg-offset-9 col-md-offset-9 col-sm-offset-4 col-xs-offset-5\">\n                          <input type=\"submit\" value=\"Assign\" class=\"btn btn-success  m-t-15 waves-effect\" [disabled]=\"!assignForm.valid\" >\n                      </div>\n                  </div>\n              </form>\n          </div>\n      </app-dialog>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/job-management/discarded/discarded.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscardedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DiscardedComponent = (function () {
    function DiscardedComponent(userservice, fb) {
        this.userservice = userservice;
        this.fb = fb;
        this.showDialog = false;
        this.item = {}; // object for single user
        this.offset = 0;
        this.leftFlag = true;
        this.rightFlag = false;
        this.noData = false;
        // get userType from local Storage
        var info = JSON.parse(localStorage.getItem('currentUser'));
        this.userType = info.role_type;
        this.userId = info.id;
        // console.log("userType", this.userType)
        this.assignForm = this.fb.group({
            'UID': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'Comments': '',
            'BID': ''
        });
    }
    DiscardedComponent.prototype.ngOnInit = function () {
        var _this = this;
        // if userType is Admin/SuperAdmin get list of new bills
        if (this.userType === 1 || this.userType === 2) {
            this.userservice.getAdminJobList(9, this.offset) // new = 4 refer api doc
                .subscribe(function (bill) {
                _this.billList = bill;
                console.log(_this.billList);
            });
        }
        else if (this.userType === 3) {
            this.userservice.getCEJobList(9, this.userId, this.offset) // new = 4 refer api doc
                .subscribe(function (bill) {
                _this.billList = bill;
                console.log(_this.billList);
            });
        }
        else if (this.userType === 4) {
            this.userservice.getQEJobList(9, this.userId, this.offset) // new = 4 refer api doc
                .subscribe(function (bill) {
                _this.billList = bill;
                console.log(_this.billList);
            });
        }
        // get list of ce
        this.userservice.getUserList(4) // 4 for ce refer to api doc
            .subscribe(function (users) {
            _this.users = users;
            console.log(users);
        });
    };
    // function for pagination
    DiscardedComponent.prototype.left = function () {
        var _this = this;
        this.leftFlag = true;
        this.rightFlag = false;
        this.noData = false;
        if (this.offset > 1) {
            this.offset = this.offset - 20;
            this.leftFlag = false;
        }
        if (this.userType === 1 || this.userType === 2) {
            this.userservice.getAdminJobList(9, this.offset)
                .subscribe(function (bills) {
                console.log(bills);
                _this.billList = bills;
                console.log(_this.billList);
            });
        }
        else if (this.userType === 3) {
            this.userservice.getCEJobList(9, this.userId, this.offset) // 4 for qe refer to api doc
                .subscribe(function (bills) {
                _this.billList = bills;
                console.log(bills);
            });
        }
    };
    DiscardedComponent.prototype.right = function () {
        var _this = this;
        this.noData = false;
        this.leftFlag = false;
        this.offset = this.offset + 20;
        if (this.userType === 1 || this.userType === 2) {
            this.userservice.getAdminJobList(9, this.offset)
                .subscribe(function (bills) {
                console.log(bills);
                if (bills.data.length == 0) {
                    _this.rightFlag = true;
                    _this.noData = true;
                }
                _this.billList = bills;
                console.log(_this.billList);
            });
        }
        else if (this.userType === 3) {
            this.userservice.getCEJobList(9, this.userId, this.offset) // 4 for qe refer to api doc
                .subscribe(function (bills) {
                console.log(bills);
                if (bills.data.length == 0) {
                    _this.rightFlag = true;
                    _this.noData = true;
                }
                _this.billList = bills;
                console.log(_this.billList);
            });
        }
    };
    // passs current user as argument and open the popup
    DiscardedComponent.prototype.openModel = function (item) {
        console.log(item);
        this.showDialog = true; // for show dialog
        this.assignForm.setValue({
            BID: item.BID,
            UID: '',
            Comments: ''
        });
    };
    DiscardedComponent.prototype.assignBill = function (item) {
        var _this = this;
        console.log(item);
        this.userservice.assignJobCE(item)
            .subscribe(function (res) {
            console.log(res);
            alert('assign successfull');
            _this.showDialog = false;
            _this.userservice.getAdminJobList(10, _this.offset) // new = 4 refer api doc
                .subscribe(function (bill) {
                _this.billList = bill;
                console.log(_this.billList);
            });
        });
    };
    return DiscardedComponent;
}());
DiscardedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-discarded',
        template: __webpack_require__("../../../../../src/app/dashboard/data-panel/job-management/discarded/discarded.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/data-panel/job-management/discarded/discarded.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _b || Object])
], DiscardedComponent);

var _a, _b;
//# sourceMappingURL=discarded.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/job-management/new/new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown{\n    border-bottom:1px solid #ccc;\n}\n.pager{\n    text-align: right;\n}\n.textareaDitto{\n    height:100px;\n    width:500px;\n    word-break: break-word;\n}\n.disabled{\n    display: none;\n}\n.modal .modal-content{\n    height: 600px !important;\n}\n.comment{\n  max-width:250px;\n  overflow-wrap: break-word;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/job-management/new/new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"header\">\n    <h2>\n      New JOB List\n      <small> For assign  the job click on the assign button</small>\n    </h2>\n  </div>\n  <div class=\"body table-responsive\">\n    <nav>\n      <ul class=\"pager\">\n        <li [ngClass]=\"{ 'disabled': leftFlag }\"><a class=\"waves-effect\" (click)=\"left()\">Previous</a></li>\n        <li [ngClass]=\"{ 'disabled': rightFlag }\"><a class=\"waves-effect\" (click)=\"right()\">Next</a></li>\n      </ul>\n    </nav>\n    <table class=\"table table-condensed\" *ngIf=\"!noData; else elseBlock\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Job ID</th>\n          <th>Name</th>\n          <th>Phone No.</th>\n          <th>Email ID</th>\n          <th>JOB Date</th>\n          <th>Comments</th>\n          <th>Action</th>\n        </tr>\n      </thead>\n      <tbody *ngFor=\"let bill of billList?.data; let i = index\">\n        <tr>\n          <th scope=\"row\">{{ i+1+prev }} </th>\n          <td><button *ngIf=\"bill?.isFirstTimeUser==true\" type=\"button\" class=\"btn bg-green btn-circle waves-effect waves-circle waves-float\">\n              <i class=\"material-icons\">verified_user</i>\n          </button> {{ bill?.job_id}}</td>\n          <td>{{ bill?.user.full_name}}</td>\n          <td>{{ bill?.user.mobile_no}}</td>\n          <td>{{ bill?.user.email}}</td>\n          <td>{{ bill?.updated_at | date}}</td>\n          <td class=\"comment\">{{ bill?.comments}}</td>\n          <td><button type=\"button\" class=\"btn bg-indigo waves-effect\" (click)=\"openModel(bill)\" *ngIf=\"userType <=2\">Assign</button><button type=\"button\" class=\"btn bg-cyan waves-effect\" routerLink=\"create/{{ bill.id }}\" *ngIf=\"userType ==4 \">Add Bill</button><button type=\"button\" class=\"btn bg-cyan waves-effect\" routerLink=\"view/{{ bill.id }}\"\n              *ngIf=\"userType ==3\">View Bill</button></td>\n          <td><button type=\"button\" class=\"btn bg-green waves-effect\" (click)=\"imageView.open();openImageModel(bill)\" *ngIf=\"userType <=2 \">View</button></td>\n          <td><button class=\"btn btn-danger\" (click)=\"discard(bill)\" *ngIf=\"userType <=2\">Discard</button></td>\n        </tr>\n      </tbody>\n    </table>\n    <ng-template #elseBlock>\n      <h4> No Data Available </h4>\n    </ng-template>\n  </div>\n  <!-- assign to ce model -->\n  <app-dialog [(visible)]=\"showDialog\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"smallModalLabel\">Assign Bill</h4>\n    </div>\n    <div class=\"modal-body\">\n      <form class=\"form-horizontal\" [formGroup]='assignForm' (ngSubmit)=\"assignBill(assignForm.value)\">\n        <div class=\"row clearfix\">\n          <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n            <label for=\"email_address_2\">Select CE</label>\n          </div>\n          <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n            <div class=\"form-group\">\n              <select class=\"form-control dropdown\" formControlName=\"UID\">\n                  <option>Select</option>                  \n                  <option *ngFor=\"let user of users?.data\" [ngValue]=\"user.id\" >{{ user?.email }}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <br>\n        <div class=\"row clearfix\">\n          <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n            <label for=\"name\">Comments</label>\n          </div>\n          <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n            <div class=\"form-group\">\n              <div class=\"form-line\">\n                <textarea rows=\"5\" cols=\"52\" formControlName=\"comments\"></textarea>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row clearfix\">\n          <div class=\"col-lg-offset-9 col-md-offset-9 col-sm-offset-4 col-xs-offset-5\">\n            <input type=\"submit\" value=\"Assign\" class=\"btn btn-success  m-t-15 waves-effect\" [disabled]=\"!assignForm.valid\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </app-dialog>\n  <!-- for discard model -->\n  <app-dialog [(visible)]=\"discardDialog\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"smallModalLabel\">Discard JOB</h4>\n    </div>\n    <div class=\"modal-body\">\n      <form class=\"form-horizontal\" [formGroup]='discardForm' (ngSubmit)=\"discardBill(discardForm.value)\">\n        <div class=\"row clearfix\">\n          <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n            <label for=\"name\">Comments</label>\n          </div>\n          <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n            <div class=\"form-group\">\n              <div class=\"form-line\">\n                <input formControlName=\"comments\" type=\"text\" class=\"textareaDitto\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row clearfix\">\n          <div class=\"col-lg-offset-10 col-md-offset-10 col-sm-offset-4 col-xs-offset-5\">\n            <input type=\"submit\" value=\"Discard\" class=\"btn btn-danger  m-t-15 waves-effect\" [disabled]=\"!discardForm.valid\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </app-dialog>\n</div>\n<modal #imageView [closeOnOutsideClick]=\"true\" modalClass=\"modal-lg\">\n  <modal-content>\n    <div *ngIf=\"!loader\">\n      <div class=\"body\">\n        <div class=\"row clearfix\">\n          <div class=\"col-md-12\" style=\"text-align:center;\">\n            <img [src]=\"images[imageIndex]\" style=\"width:100%;\" [style.transform]=\"'rotate(' + imagerotation + 'deg)'\">\n            <p></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"caption\">\n        <p class=\"text-center\">\n          <button type=\"button\" class=\"btn btn-info btn-sm waves-effect\" (click)=\"prevImage()\"><i class=\"material-icons\">skip_previous</i><span>Prev</span></button>\n          <button type=\"button\" class=\"btn btn-warning btn-sm waves-effect\" (click)=\"rotate()\"><i class=\"material-icons\">rotate_right</i><span>Rotate</span></button>\n          <a href=\"{{images[imageIndex]}}\" download><button type=\"button\" class=\"btn btn-success btn-sm waves-effect\"><i class=\"material-icons\">file_download</i><span>Download</span></button></a>\n          <button type=\"button\" class=\"btn btn-danger btn-sm waves-effect\" (click)=\"alertBox.open();imageView.close()\"><i class=\"material-icons\">clear</i><span>Discard Image</span></button>\n          <button type=\"button\" class=\"btn btn-info btn-sm waves-effect\" (click)=\"nextImage()\"><i class=\"material-icons\">skip_next</i><span>Next</span></button>\n          <span style=\"margin-left:5px\"><b>Image {{imageIndex+1}} of {{arrayLength}}</b></span>\n        </p>\n      </div>\n    </div>\n    <div class=\"text-center\" *ngIf=\"loader\">\n      <h1>Please Wait ...</h1>\n      <img src=\"../../../assets/images/loader.gif\" alt=\"\">\n    </div>\n  </modal-content>\n</modal>\n<modal #alertBox [closeOnOutsideClick]=\"true\" modalClass=\"modal-md\">\n  <modal-content>\n    <div class=\"body\">\n      <div class=\"row\">\n          <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                  <div class=\"form-line\">\n                      <input type=\"text\" class=\"form-control\" name=\"Comments\" placeholder=\"Enter Comment\"  #commentInput>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12 text-right\">\n            <button class=\"btn bg-red btn-md btn-lg\" type=\"submit\" (click)=\"commentBoxData(commentInput.value);alertBox.close()\">Discard Image</button>    \n        </div>\n      </div>\n    </div>\n  </modal-content>\n</modal>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/job-management/new/new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewComponent = (function () {
    function NewComponent(userservice, fb) {
        this.userservice = userservice;
        this.fb = fb;
        this.showDialog = false;
        this.showImageDialog = false;
        this.item = {}; // object for single user
        this.prev = 0;
        this.next = 10;
        this.offset = 0;
        this.leftFlag = true;
        this.rightFlag = false;
        this.noData = false;
        this.imageArray = [];
        this.images = ['../../../assets/images/loader.gif'];
        this.imageIndex = 0;
        this.discardDialog = false;
        this.imagerotation = 0;
        this.loader = false;
        this.imageUrl = __WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiUrl;
        // get userType from local Storage
        var info = JSON.parse(localStorage.getItem('currentUser'));
        this.userType = info.role_type;
        this.userId = info.id;
        console.log(this.userId, "user id");
        // console.log("userType", this.userType)
        this.assignForm = this.fb.group({
            'UID': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'comments': '',
            'jobId': ''
        });
        this.discardForm = this.fb.group({
            'id': '',
            'comments': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    }
    NewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // if userType is Admin/SuperAdmin get list of new bills
        if (this.userType === 1 || this.userType === 2) {
            this.getCEList();
            this.userservice.getAdminJobList(4, this.offset) // new = 4 refer api doc
                .subscribe(function (bill) {
                _this.billList = bill;
                console.log(_this.billList);
            });
        }
        else if (this.userType === 4) {
            this.userservice.getCEJobList(4, this.userId, this.offset) // new = 4 refer api doc // 8 for under progress
                .subscribe(function (bill) {
                _this.billList = bill;
                console.log(_this.billList);
            });
        }
        else if (this.userType === 3) {
            this.userservice.getQEJobList(4, this.userId, this.offset) // new = 4 refer api doc
                .subscribe(function (bill) {
                _this.billList = bill;
                console.log(_this.billList);
            });
        }
    };
    // function for pagination
    NewComponent.prototype.left = function () {
        var _this = this;
        this.leftFlag = true;
        this.rightFlag = false;
        this.noData = false;
        if (this.offset > 1) {
            this.offset = this.offset - 20;
            this.leftFlag = false;
        }
        if (this.userType === 1 || this.userType === 2) {
            this.userservice.getAdminJobList(4, this.offset)
                .subscribe(function (bills) {
                console.log(bills);
                _this.billList = bills;
                console.log(_this.billList);
            });
        }
        else if (this.userType === 3) {
            this.userservice.getCEJobList(4, this.userId, this.offset) // 4 for qe refer to api doc
                .subscribe(function (bills) {
                _this.billList = bills;
                console.log(bills);
            });
        }
    };
    NewComponent.prototype.right = function () {
        var _this = this;
        this.noData = false;
        this.leftFlag = false;
        this.offset = this.offset + 20;
        if (this.userType === 1 || this.userType === 2) {
            this.userservice.getAdminJobList(4, this.offset)
                .subscribe(function (bills) {
                console.log(bills);
                if (bills.data.length == 0) {
                    _this.rightFlag = true;
                    _this.noData = true;
                }
                _this.billList = bills;
                console.log(_this.billList);
            });
        }
        else if (this.userType === 3) {
            this.userservice.getCEJobList(4, this.userId, this.offset) // 4 for qe refer to api doc
                .subscribe(function (bills) {
                console.log(bills);
                if (bills.data.length == 0) {
                    _this.rightFlag = true;
                    _this.noData = true;
                }
                _this.billList = bills;
                console.log(_this.billList);
            });
        }
    };
    // passs current user as argument and open the popup
    NewComponent.prototype.openModel = function (item) {
        console.log(item);
        this.showDialog = true; // for show dialog
        this.assignForm.setValue({
            jobId: item.id,
            UID: '',
            comments: ''
        });
    };
    NewComponent.prototype.assignBill = function (item) {
        var _this = this;
        console.log(item);
        this.userservice.assignJobCE(item)
            .subscribe(function (res) {
            console.log(res);
            alert('assign successfull');
            _this.showDialog = false;
            _this.userservice.getAdminJobList(4, _this.offset) // new = 4 refer api doc
                .subscribe(function (bill) {
                _this.billList = bill;
                console.log(_this.billList);
            });
        });
    };
    // for view image
    NewComponent.prototype.openImageModel = function (req) {
        var _this = this;
        this.imageIndex = 0;
        this.loader = true;
        this.showImageDialog = true;
        // console.log(req, "image req");
        this.billId = req.id;
        this.images = [];
        this.imageArray = [];
        this.userservice.getJobByID(req.id)
            .subscribe(function (res) {
            // console.log(res, "image");
            _this.imageArray = res.data.copies;
            console.log(_this.imageArray);
            console.log(_this.imageArray.length, "length of array");
            _this.arrayLength = _this.imageArray.length;
            for (var _i = 0, _a = _this.imageArray; _i < _a.length; _i++) {
                var i = _a[_i];
                _this.images.push(_this.imageUrl + 'api' + i.copyUrl);
            }
            console.log(_this.images);
            _this.loader = false;
        });
        // this.discardBillImage(req.BID);
    };
    // prev image
    NewComponent.prototype.prevImage = function () {
        if (this.imageIndex > 0) {
            this.imageIndex = this.imageIndex - 1;
        }
        // console.log(this.imageIndex ,'prev')
    };
    // next image
    NewComponent.prototype.nextImage = function () {
        if (this.imageIndex < this.imageArray.length - 1) {
            this.imageIndex = this.imageIndex + 1;
        }
        // console.log(this.imageIndex ,'next')
    };
    // rotete image
    NewComponent.prototype.rotate = function () {
        this.imagerotation = this.imagerotation + 90;
    };
    // get list of ce users 
    NewComponent.prototype.getCEList = function () {
        var _this = this;
        this.userservice.getUserList(4) // 4 for ce refer to api doc
            .subscribe(function (users) {
            _this.users = users;
            console.log(users, "users");
        });
    };
    // opn model for discard bills
    NewComponent.prototype.discard = function (item) {
        console.log(item);
        this.discardDialog = true;
        this.discardForm.setValue({
            id: item.id,
            comments: '',
        });
    };
    NewComponent.prototype.discardBill = function (item) {
        var _this = this;
        console.log(item);
        this.userservice.discardConsumerJOB(item)
            .subscribe(function (res) {
            console.log(res);
            alert("Bill Discarded");
            _this.discardDialog = false;
            _this.userservice.getAdminJobList(4, _this.offset) // new = 4 refer api doc
                .subscribe(function (bill) {
                _this.billList = bill;
                console.log(_this.billList);
            });
        }, function (error) {
            console.log(error);
        });
    };
    // discard bill image
    NewComponent.prototype.commentBoxData = function (comment) {
        var _this = this;
        console.log(comment, "comment");
        var imageID = this.imageArray[this.imageIndex].copyId;
        this.discardImage = {
            'BID': this.billId,
            'ImageID': imageID,
            'comments': comment
        };
        console.log(this.discardImage);
        this.userservice.discardConsumerBillImage(this.discardImage)
            .subscribe(function (res) {
            console.log(res);
            alert('Image discarded');
            // this.showImageDialog = false;
            // if userType is Admin/SuperAdmin get list of new bills
            if (_this.userType === 1 || _this.userType === 2) {
                _this.userservice.getAdminJobList(4, _this.offset) // new = 4 refer api doc
                    .subscribe(function (bill) {
                    _this.billList = bill;
                    console.log(_this.billList);
                });
            }
        });
    };
    return NewComponent;
}());
NewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-new',
        template: __webpack_require__("../../../../../src/app/dashboard/data-panel/job-management/new/new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/data-panel/job-management/new/new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _b || Object])
], NewComponent);

var _a, _b;
//# sourceMappingURL=new.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/job-management/under-progress/under-progress.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown{\n    border-bottom:1px solid #ccc;\n}\n.pager{\n    text-align: right;\n}\n.textareaDitto{\n    height:100px;\n    width:500px;\n    word-break: break-word;\n}\n.disabled{\n    display: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/job-management/under-progress/under-progress.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"header\">\n    <h2>\n      Under Progress JOB List\n      <small> For assign  the job click on the assign button</small>\n    </h2>\n  </div>\n  <div class=\"row clearfix\" *ngIf=\"userType <= 2\">\n    <div class=\"col-md-2 form-control-label\">\n      <label for=\"email_address_2\">Select User Type</label>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <select class=\"form-control dropdown\" (change)=onSelectType($event.target.value)>\n            <option>Select</option>\n            <option value=\"ce\">CE</option>\n            <option value=\"qe\">QE</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-md-1 form-control-label\">\n      <label for=\"email_address_2\">Select User</label>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <select class=\"form-control dropdown\" (change)=onSelectUser($event.target.value)>\n            <option value=\"\">Select</option>\n            <option *ngFor=\"let user of activeUser?.data\" value=\"{{user.id}}\" >{{ user.email }}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <label for=\"\">Jobs of last </label>\n    </div>\n    <div class=\"col-md-1\">\n      <input type=\"number\" name=\"job_day\" style=\"margin-top:2px;\" #dayInput>\n    </div>\n    <div class=\"col-md-1\">\n      <button class=\"btn btn-info btn-block\" (click)=\"jobDay(dayInput.value)\">Days</button>\n    </div>\n  </div>\n  <div class=\"text-center\" *ngIf=\"loader\">\n    <h1>Please Wait ...</h1>\n    <img src=\"../../../assets/images/loader.gif\" alt=\"\">\n  </div>\n  <div class=\"body table-responsive\">\n    <nav>\n      <ul class=\"pager\">\n        <li [ngClass]=\"{ 'disabled': leftFlag }\"><a class=\"waves-effect\" (click)=\"left()\">Previous</a></li>\n        <li [ngClass]=\"{ 'disabled': rightFlag }\"><a class=\"waves-effect\" (click)=\"right()\">Next</a></li>\n      </ul>\n    </nav>\n    <table class=\"table table-condensed table-bordered\" *ngIf=\"!noData; else elseBlock\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Job ID</th>\n          <th>Name</th>\n          <th>Phone No.</th>\n          <th>JOB Date</th>\n          <th *ngIf=\"userType==4\">Comment</th>          \n          <th *ngIf=\"userType==4\">Email</th>\n          <th *ngIf=\"userType!=4\">Customer Executive</th>\n          <th *ngIf=\"userType!=4\">Quality Executive</th>\n          <th *ngIf=\"userType!=4\">View</th>\n          <th *ngIf=\"userType!=4\">Discard</th>\n          <th *ngIf=\"userType!=3\">Action</th>\n          <th *ngIf=\"userType==1 || userType==2\">Complete Job</th>\n        </tr>\n      </thead>\n      <tbody *ngFor=\"let bill of bills?.data; let i = index\">\n        <tr>\n          <th scope=\"row\">{{ i+1+offset }} </th>\n          <td><button *ngIf=\"bill?.isFirstTimeUser==true\" type=\"button\" class=\"btn bg-green btn-circle waves-effect waves-circle waves-float\">\n              <i class=\"material-icons\">verified_user</i>\n          </button> {{ bill?.job_id}}</td>\n          <td>{{ bill.user.full_name}}</td>\n          <td>{{ bill.user.mobile_no}}</td>\n          <td>{{ bill?.created_at | date}}</td>\n          <td *ngIf=\"userType==4\">{{bill?.comments}}</td>          \n          <td *ngIf=\"userType==4\">{{bill?.user?.email}}</td>\n          <td *ngIf=\"userType!=4\"><strong>Name : </strong>{{ bill.ce.full_name}}<br>\n            <strong>Email ID : </strong>{{ bill.ce.email}}<br>\n            <strong>Task Date: </strong>{{ bill?.ce_task_date | date}}<br>\n            <strong>Status : </strong><span class=\"badge bg-orange\" *ngIf=\"bill?.ce_status== 4\">New</span>\n            <span class=\"badge bg-orange\" *ngIf=\"bill?.ce_status== 5\">Complete</span>\n            <span class=\"badge bg-orange\" *ngIf=\"bill?.ce_status== 7\">Reassigned</span>            \n            <span class=\"badge bg-orange\" *ngIf=\"bill?.ce_status== 8\">In-progress</span><br><br>\n            <span class=\"pull-right\" *ngIf=\"bill.ce_status != 5\"><button type=\"button\" class=\"btn btn-xs bg-purple waves-effect\" (click)=\"openModel(bill)\">\n              <i class=\"material-icons\">replay</i><span>Re-Assign</span></button>\n            </span>\n          </td>\n          <td *ngIf=\"userType!=4\"><span *ngIf=\"bill.qe_status == 4 || bill.qe_status==5\"><strong>Name : </strong>{{ bill.qe?.full_name}}<br>\n                    <strong>Email ID : </strong>{{ bill.qe?.email}}<br>\n                    <strong>Task Date: </strong>{{ bill?.qe_task_date | date}}<br>\n                    <strong>Status : </strong><span class=\"badge bg-orange\" *ngIf=\"bill?.qe_status== 4\">New</span>\n                      <span class=\"badge bg-orange\" *ngIf=\"bill?.qe_status== 5\">Complete</span>\n                      <span class=\"badge bg-orange\" *ngIf=\"bill?.qe_status== 8\">In-progress</span>\n                    </span><br><br>\n            <span *ngIf=\"bill.ce_status == 5 && bill.qe_status !=5\"><button type=\"button\" class=\"btn btn-xs bg-indigo waves-effect\" (click)=\"assignQE(bill)\">\n              <i class=\"material-icons\">done</i><span>Assign / Re-Assign</span></button>\n            </span>\n          </td>\n          <td *ngIf=\"userType!=4\"><button type=\"button\" class=\"btn btn-xs bg-green waves-effect\" (click)=\"imageView.open();openImageModel(bill)\" *ngIf=\"userType <=2 \">View Job</button></td>\n          <td *ngIf=\"userType!=4\"><span class=\"btn btn-xs  btn-danger\" (click)=\"discard(bill)\" *ngIf=\"userType <=2\">Discard</span></td>\n          <td *ngIf=\"userType==4\"><span class=\"btn btn-xs btn-danger\" routerLink=\"create/{{ bill.id }}\" >Add Bill</span></td>  \n          <td *ngIf=\"userType <=2\"><button type=\"button\" class=\"btn btn-xs bg-cyan waves-effect\" routerLink=\"view/{{ bill.id }}\"\n            >View Bill</button><div style=\"margin-top:10px;\"><span class=\"btn btn-warning btn-xs\" (click)=\"assignQE(bill)\" *ngIf=\"bill?.qe_status==5\">Assign TO QE</span></div></td>\n          <td><span *ngIf=\"userType<=2 && bill.qe_status==5\" class=\"btn btn-success\" (click)=\"commentBox.open();getJobId(bill.id)\">Complete JOB</span></td>                    \n        </tr>\n      </tbody>\n    </table>\n    <ng-template #elseBlock>\n      <h4> No Data Available </h4>\n    </ng-template>\n  </div>\n  <app-dialog [(visible)]=\"showDialog\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"smallModalLabel\">Assign Bill (CE)</h4>\n    </div>\n    <div class=\"modal-body\">\n      <form class=\"form-horizontal\" [formGroup]='assignForm' (ngSubmit)=\"assignBillCE(assignForm.value)\">\n        <div class=\"row clearfix\">\n          <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n            <label for=\"email_address_2\">Select CE</label>\n          </div>\n          <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n            <div class=\"form-group\">\n              <select class=\"form-control dropdown\" formControlName=\"UID\">\n                  <option>Select</option>\n                  <option *ngFor=\"let user of activeCE?.data\" [ngValue]=\"user.id\" >{{ user.email }}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <br>\n        <div class=\"row clearfix\">\n          <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n            <label for=\"name\">Comments</label>\n          </div>\n          <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n            <div class=\"form-group\">\n              <div class=\"form-line\">\n                <textarea rows=\"5\" cols=\"60\" formControlName=\"comments\"></textarea>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row clearfix\">\n          <div class=\"col-lg-offset-9 col-md-offset-9 col-sm-offset-4 col-xs-offset-5\">\n            <input type=\"submit\" value=\"Assign\" class=\"btn btn-success  m-t-15 waves-effect\" [disabled]=\"!assignForm.valid\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </app-dialog>\n  <!-- for qe model  -->\n  <app-dialog [(visible)]=\"showQeDialog\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"smallModalLabel\">Assign Bill (QE)</h4>\n    </div>\n    <div class=\"modal-body\">\n      <form class=\"form-horizontal\" [formGroup]='assignQeForm' (ngSubmit)=\"assignBillQE(assignQeForm.value)\">\n        <div class=\"row clearfix\">\n          <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n            <label for=\"email_address_2\">Select QE</label>\n          </div>\n          <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n            <div class=\"form-group\">\n              <select class=\"form-control dropdown\" formControlName=\"UID\">\n                <option>Select</option>                  \n                <option *ngFor=\"let user of activeQE?.data\" [ngValue]=\"user.id\" >{{ user.email }}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <br>\n        <div class=\"row clearfix\">\n          <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n            <label for=\"name\">Comments</label>\n          </div>\n          <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n            <div class=\"form-group\">\n              <div class=\"form-line\">\n                <textarea rows=\"5\" cols=\"60\" formControlName=\"comments\"></textarea>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row clearfix\">\n          <div class=\"col-lg-offset-10 col-md-offset-10 col-sm-offset-4 col-xs-offset-5\">\n            <input type=\"submit\" value=\"Assign\" class=\"btn btn-success  m-t-15 waves-effect\" [disabled]=\"!assignQeForm.valid\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </app-dialog>\n  <!-- for discard model -->\n  <app-dialog [(visible)]=\"discardDialog\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"smallModalLabel\">Discard JOB</h4>\n    </div>\n    <div class=\"modal-body\">\n      <form class=\"form-horizontal\" [formGroup]='discardForm' (ngSubmit)=\"discardBill(discardForm.value)\">\n        <div class=\"row clearfix\">\n          <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n            <label for=\"name\">Comments</label>\n          </div>\n          <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n            <div class=\"form-group\">\n              <div class=\"form-line\">\n                <input formControlName=\"comments\" type=\"text\" class=\"textareaDitto\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row clearfix\">\n          <div class=\"col-lg-offset-10 col-md-offset-10 col-sm-offset-4 col-xs-offset-5\">\n            <input type=\"submit\" value=\"Discard\" class=\"btn btn-danger  m-t-15 waves-effect\" [disabled]=\"!discardForm.valid\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </app-dialog>\n</div>\n<modal #imageView [closeOnOutsideClick]=\"true\" modalClass=\"modal-lg\">\n    <modal-content>\n        <div *ngIf=\"!loader\">\n    <div class=\"body\">\n      <div class=\"row clearfix\" style=\"overflow:scroll\">\n          <div class=\"col-md-12\">\n              <img  [src]=\"images[imageIndex]\" class=\"img-responsive\" [style.transform]=\"'rotate(' + imagerotation + 'deg)'\">\n              <p></p>\n          </div>\n      </div>\n    </div>\n    <div class=\"caption\">\n      <p class=\"text-center\">\n        <button type=\"button\" class=\"btn btn-info btn-xs waves-effect\" (click)=\"prevImage()\"><i class=\"material-icons\">skip_previous</i><span>Prev</span></button>\n        <button type=\"button\" class=\"btn btn-warning btn-xs waves-effect\" (click)=\"rotate()\"><i class=\"material-icons\">rotate_right</i><span>Rotate</span></button>\n        <a href=\"{{images[imageIndex]}}\" download><button type=\"button\" class=\"btn btn-success btn-xs waves-effect\"><i class=\"material-icons\">file_download</i><span>Download</span></button></a>\n        <button type=\"button\" class=\"btn btn-danger btn-xs waves-effect\" (click)=\"alertBox.open();imageView.close()\"><i class=\"material-icons\">clear</i><span>Discard Image</span></button>\n        <button type=\"button\" class=\"btn btn-info btn-xs waves-effect\" (click)=\"nextImage()\"><i class=\"material-icons\">skip_next</i><span>Next</span></button>\n        <span style=\"margin-left:5px\"><b>Image {{imageIndex+1}} of {{arrayLength}}</b></span>\n      </p>\n    </div>\n    </div>\n    <div class=\"text-center\" *ngIf=\"loader\">\n      <h1>Please Wait ...</h1>\n        <img src=\"../../../assets/images/loader.gif\" alt=\"\">\n      </div>\n  </modal-content>\n</modal>\n<modal #alertBox [closeOnOutsideClick]=\"true\" modalClass=\"modal-md\">\n    <modal-content>\n      <div class=\"body\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                    <div class=\"form-line\">\n                        <input type=\"text\" class=\"form-control\" name=\"comments\" placeholder=\"Enter Comment\"  #comment>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12 text-right\">\n              <button class=\"btn bg-red btn-xs btn-lg\" type=\"submit\" (click)=\"commentBoxData(comment.value);alertBox.close()\">Discard Image</button>    \n          </div>\n        </div>\n      </div>\n    </modal-content>\n  </modal>\n  <modal #commentBox [closeOnOutsideClick]=\"true\" modalClass=\"modal-md\">\n    <modal-content>\n      <div class=\"body\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                    <div class=\"form-line\">\n                        <input type=\"text\" class=\"form-control\" name=\"comments\" placeholder=\"Enter Comment\"  #commentInput>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12 text-right\">\n              <button class=\"btn bg-indigo btn-xs btn-lg\" type=\"submit\" (click)=\"commentBoxDataAdmin(commentInput.value);commentBox.close()\">Complete JOB</button>    \n          </div>\n        </div>\n      </div>\n    </modal-content>\n  </modal>"

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/job-management/under-progress/under-progress.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnderProgressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UnderProgressComponent = (function () {
    function UnderProgressComponent(userservice, fb) {
        this.userservice = userservice;
        this.fb = fb;
        this.imageLink = __WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].imageUrl;
        this.showDialog = false;
        this.showQeDialog = false;
        this.discardDialog = false;
        this.item = {}; // object for single user
        this.offset = 0;
        this.leftFlag = true;
        this.rightFlag = false;
        this.noData = false;
        this.showImageDialog = false;
        this.imageArray = [];
        this.images = [];
        this.imagerotation = 0;
        this.imageIndex = 0;
        this.loader = false;
        this.imageUrl = __WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiUrl;
        var info = JSON.parse(localStorage.getItem('currentUser'));
        this.userType = info.role_type;
        this.userId = info.id;
        console.log("userType", this.userType);
        this.assignForm = this.fb.group({
            'UID': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'comments': '',
            'jobId': ''
        });
        this.assignQeForm = this.fb.group({
            'UID': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'comments': '',
            'jobId': ''
        });
        this.discardForm = this.fb.group({
            'comments': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'id': '',
        });
    }
    UnderProgressComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.userType === 1 || this.userType === 2) {
            this.userservice.getAdminJobList(8, this.offset) // incomplete = 6 refer api doc
                .subscribe(function (bills) {
                _this.bills = bills;
                console.log(_this.bills);
            });
            this.userservice.ActiveCE()
                .subscribe(function (res) {
                _this.activeCE = res;
                console.log(res);
            });
            this.userservice.ActiveQE()
                .subscribe(function (res) {
                _this.activeQE = res;
                console.log(res);
            });
        }
        else if (this.userType === 4) {
            this.userservice.getCEJobList(8, this.userId, this.offset) // 4 for qe refer to api doc
                .subscribe(function (bills) {
                _this.bills = bills;
                console.log(bills);
            });
        }
        else if (this.userType === 3) {
            this.userservice.getQEJobList(8, this.userId, this.offset) // 4 for qe refer to api doc
                .subscribe(function (bills) {
                _this.bills = bills;
                console.log(bills);
            });
        }
    };
    // function for pagination
    UnderProgressComponent.prototype.left = function () {
        var _this = this;
        this.leftFlag = true;
        this.rightFlag = false;
        this.noData = false;
        if (this.offset > 1) {
            this.offset = this.offset - 20;
            this.leftFlag = false;
        }
        if (this.userType === 1 || this.userType === 2) {
            this.userservice.getAdminJobList(8, this.offset)
                .subscribe(function (bills) {
                console.log(bills);
                _this.bills = bills;
                console.log(_this.bills);
            });
        }
        else if (this.userType === 4) {
            this.userservice.getCEJobList(8, this.userId, this.offset) // 4 for qe refer to api doc
                .subscribe(function (bills) {
                _this.bills = bills;
                console.log(bills);
            });
        }
    };
    UnderProgressComponent.prototype.right = function () {
        var _this = this;
        this.noData = false;
        this.leftFlag = false;
        this.offset = this.offset + 20;
        if (this.userType === 1 || this.userType === 2) {
            this.userservice.getAdminJobList(8, this.offset)
                .subscribe(function (bills) {
                console.log(bills);
                if (bills.data.length == 0) {
                    _this.rightFlag = true;
                    _this.noData = true;
                }
                _this.bills = bills;
                console.log(_this.bills);
            });
        }
        else if (this.userType === 4) {
            this.userservice.getCEJobList(8, this.userId, this.offset) // 4 for qe refer to api doc
                .subscribe(function (bills) {
                console.log(bills);
                if (bills.data.length == 0) {
                    _this.rightFlag = true;
                    _this.noData = true;
                }
                _this.bills = bills;
                console.log(_this.bills);
            });
        }
    };
    // passs current user as argument and open the popup
    UnderProgressComponent.prototype.openModel = function (item) {
        var _this = this;
        console.log(item, "item data");
        this.assignForm.setValue({
            jobId: item.id,
            UID: '',
            comments: ''
        });
        this.userservice.ActiveCE()
            .subscribe(function (res) {
            _this.activeCE = res;
            console.log(res);
        });
        this.showDialog = true; // for show dialog
    };
    UnderProgressComponent.prototype.assignBillCE = function (item) {
        var _this = this;
        console.log(item);
        this.userservice.assignJobCE(item)
            .subscribe(function (res) {
            console.log(res);
            alert('assign successfull');
            _this.showDialog = false;
            _this.userservice.getAdminJobList(8, _this.offset) // incomplete = 6 refer api doc
                .subscribe(function (bill) {
                _this.bills = bill;
                console.log(_this.bills);
            });
        });
    };
    // open model for qe assign
    UnderProgressComponent.prototype.assignQE = function (item) {
        var _this = this;
        this.assignQeForm.setValue({
            jobId: item.id,
            UID: '',
            comments: ''
        });
        this.userservice.ActiveQE()
            .subscribe(function (res) {
            _this.activeQE = res;
            console.log(res);
        });
        this.showQeDialog = true; // for shoe qe popup
    };
    // assign bill to QE
    UnderProgressComponent.prototype.assignBillQE = function (item) {
        var _this = this;
        // console.log(item);
        this.userservice.assignJobQE(item)
            .subscribe(function (res) {
            console.log(res);
            alert('assign successfull');
            _this.showQeDialog = false;
            _this.userservice.getAdminJobList(8, _this.offset) // incomplete = 6 refer api doc
                .subscribe(function (bill) {
                _this.bills = bill;
                console.log(_this.bills);
            });
        });
    };
    // // opn model for discard bills
    // discard(item:any){
    //   console.log(item);
    //   this.discardDialog = true;
    //   this.discardForm.setValue({
    //     BID: item.BID,
    //     UID: item.UID,
    //     Comments:'',
    //   });
    // } 
    // discardBill(item:any){
    //   console.log(item);
    //   this.userservice.discardConsumerBill(item)
    //     .subscribe(res=>{
    //       console.log(res);
    //       alert("Bill Discarded");
    //       this.discardDialog = false;
    //       this.userservice.getAdminJobList(8,this.prev,this.next) // incomplete = 6 refer api doc
    //       .subscribe(bill => {
    //         this.bills = bill;
    //         console.log(this.bills);
    //       });
    //     })
    // }
    // for view image
    UnderProgressComponent.prototype.openImageModel = function (req) {
        var _this = this;
        this.imageIndex = 0;
        this.loader = true;
        this.showImageDialog = true;
        console.log(req, "array data");
        this.jobId = req.id;
        console.log(this.jobId, "jobId");
        this.images = [];
        this.imageArray = [];
        this.userservice.getJobByID(req.id)
            .subscribe(function (res) {
            _this.imageArray = res.data.copies;
            console.log(_this.imageArray, "need this array");
            console.log(_this.imageArray.length, "length of array");
            _this.arrayLength = _this.imageArray.length;
            for (var _i = 0, _a = _this.imageArray; _i < _a.length; _i++) {
                var i = _a[_i];
                _this.images.push(_this.imageUrl + 'api/' + i.copyUrl);
            }
            console.log(_this.images, "images url links");
            _this.loader = false;
        });
    };
    // prev image
    UnderProgressComponent.prototype.prevImage = function () {
        if (this.imageIndex > 0) {
            this.imageIndex = this.imageIndex - 1;
        }
    };
    // next image
    UnderProgressComponent.prototype.nextImage = function () {
        if (this.imageIndex < this.imageArray.length - 1) {
            this.imageIndex = this.imageIndex + 1;
            // console.log(this.imageIndex)
        }
        // console.log(this.imageIndex ,'next')
    };
    // rotete image
    UnderProgressComponent.prototype.rotate = function () {
        this.imagerotation = this.imagerotation + 90;
    };
    UnderProgressComponent.prototype.discard = function (item) {
        console.log(item, "discard item");
        this.discardDialog = true;
        this.discardForm.setValue({
            id: item.id,
            comments: '',
        });
    };
    UnderProgressComponent.prototype.discardBill = function (item) {
        var _this = this;
        console.log(item, "item id");
        this.userservice.discardConsumerJOB(item)
            .subscribe(function (res) {
            console.log(res);
            alert("Bill Discarded");
            _this.discardDialog = false;
            _this.userservice.getAdminJobList(8, _this.offset) // incomplete = 6 refer api doc
                .subscribe(function (bills) {
                _this.bills = bills;
                console.log(_this.bills);
            });
        });
    };
    // discard bill image
    UnderProgressComponent.prototype.commentBoxData = function (comment) {
        var _this = this;
        console.log(comment, "commeents");
        var imageID = this.imageArray[this.imageIndex].copyId;
        console.log(imageID, "image id ");
        this.discardImage = {
            'BID': this.jobId,
            'ImageID': imageID,
            'comments': comment
        };
        console.log(this.discardImage);
        this.userservice.discardConsumerBillImage(this.discardImage)
            .subscribe(function (res) {
            console.log(res);
            alert('Image discarded');
            // this.showImageDialog = false;
            // if userType is Admin/SuperAdmin get list of new bills
            _this.userservice.getAdminJobList(8, _this.offset) // incomplete = 6 refer api doc
                .subscribe(function (bills) {
                _this.bills = bills;
                console.log(_this.bills);
            });
        }, function (error) {
            console.log(error);
            var err = JSON.parse(error['_body']);
            alert(err.reason);
        });
    };
    UnderProgressComponent.prototype.getJobId = function (jid) {
        this.jobId = jid;
    };
    // complete job by admin 
    UnderProgressComponent.prototype.commentBoxDataAdmin = function (comment) {
        var _this = this;
        console.log(comment);
        this.userservice.completeJobByAdmin(this.jobId, comment)
            .subscribe(function (res) {
            console.log(res);
            alert("JOB Complete !! Enjoy !!");
            _this.userservice.getAdminJobList(8, _this.offset) // under progress = 8 refer api doc
                .subscribe(function (bills) {
                _this.bills = bills;
                console.log(_this.bills);
            });
        }, function (err) {
            console.log(err);
            var errMsg = JSON.parse(err['_body']);
            alert(errMsg.reason);
        });
    };
    // Filter   '&assigned_to_ce='
    UnderProgressComponent.prototype.onSelectType = function (type) {
        var _this = this;
        console.log(type);
        this.type = type;
        if (type == 'ce') {
            this.userservice.ActiveCE()
                .subscribe(function (res) {
                _this.activeUser = res;
                console.log(res);
            });
        }
        else {
            this.userservice.ActiveQE()
                .subscribe(function (res) {
                _this.activeUser = res;
                console.log(res);
            });
        }
    };
    UnderProgressComponent.prototype.onSelectUser = function (id) {
        var _this = this;
        console.log(id);
        if (this.type == 'ce') {
            this.filter = '&assigned_to_ce=' + id;
        }
        else {
            this.filter = '&assigned_to_qe=' + id;
        }
        this.loader = true;
        this.userservice.getFilteredJobList(8, this.filter) // incomplete = 6 refer api doc
            .subscribe(function (bills) {
            _this.bills = bills;
            _this.loader = false;
            console.log(_this.bills);
        });
    };
    UnderProgressComponent.prototype.jobDay = function (day) {
        var _this = this;
        console.log(day);
        this.loader = true;
        this.userservice.getDayLeftJobList(8, day) // incomplete = 6 refer api doc
            .subscribe(function (bills) {
            _this.bills = bills;
            _this.loader = false;
            console.log(_this.bills);
        });
    };
    return UnderProgressComponent;
}());
UnderProgressComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-under-progress',
        template: __webpack_require__("../../../../../src/app/dashboard/data-panel/job-management/under-progress/under-progress.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/data-panel/job-management/under-progress/under-progress.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object])
], UnderProgressComponent);

var _a, _b;
//# sourceMappingURL=under-progress.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/list-management/list-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown{\n    border:1px solid #ccc;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/list-management/list-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"header\">\n        <h2>Add Detail Type</h2>\n    </div>\n    <div class=\"body\">\n        <form [formGroup]='createExclusionForm' (ngSubmit)=\"createCategory(createExclusionForm.value)\">\n            <div class=\"row clearfix\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6\">\n                    <label>\n                    Select Type\n                  </label>\n                    <div class=\"form-group\">\n                        <select class=\"form-control dropdown\" formControlName=\"type\" (change)=\"onSelect($event.target.value)\">\n                        <option [ngValue]=\"1\"> URL</option>\n                        <option [ngValue]=\"2\"> Email ID</option>\n                        <option [ngValue]=\"3\"> Phone Number</option>\n                    </select>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6\">\n                    <label>\n                    Display Name\n                  </label>\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <input type=\"text\" class=\"form-control\" formControlName=\"title\" (keyup)=\"avoidSpace('title')\">\n                        </div>\n                        <p class=\"text-danger\" *ngIf=\"!createExclusionForm.controls['title'].valid && createExclusionForm.controls['title'].touched\">Name is required</p>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                    <input type=\"submit\" value=\"ADD\" class=\"btn btn-success  m-t-15 waves-effect\" [disabled]=\"!createExclusionForm.valid\">\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n<div class=\"card\">\n    <div class=\"header\">\n        <h2>\n            Detail Type List\n            <small> For change the detail type click on the edit button</small>\n        </h2>\n    </div>\n    <div class=\"body table-responsive\">\n        <table class=\"table table-condensed table-bordered\">\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Type</th>\n                    <th>Name</th>\n                    <th>Action</th>\n                </tr>\n            </thead>\n            <tbody *ngFor=\"let list of detail?.data; let i = index\">\n                <tr>\n                    <th scope=\"row\">{{ i+1 }}</th>\n                    <td>{{ list.title}}</td>\n                    <td *ngIf=\"list?.status_type=='1'\"><span class=\"label bg-green\">Active</span></td>\n                    <td *ngIf=\"list?.status_type=='2'\"><span class=\"label bg-red\">InActive</span></td>                    \n                    <td><span class=\"btn btn-info btn-circle waves-effect waves-circle waves-float\" (click)=\"openCategoryModel(list)\" title=\"Edit\"><i class=\"material-icons\" >mode_edit</i></span>  \n                        <span class=\"btn btn-danger btn-circle waves-effect waves-circle waves-float\" (click)=\"deleteCategory(list)\" title=\"Delete\"><i class=\"material-icons\">delete</i></span>\n                    </td>                  \n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <app-dialog [(visible)]=\"showDialog\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"smallModalLabel\">Edit Detail Type </h4>\n        </div>\n        <div class=\"modal-body\">\n            <form class=\"form-horizontal\" [formGroup]='editExclusionForm' (ngSubmit)=\"updateExclusions(editExclusionForm.value)\">\n                <div class=\"row clearfix\">\n                    <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                        <label for=\"name\">Name</label>\n                    </div>\n                    <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n                        <div class=\"form-group\">\n                            <div class=\"form-line\">\n                                <input type=\"text\" class=\"form-control\" formControlName=\"title\" placeholder=\"Enter your name\">\n                            </div>\n                            <p class=\"text-danger\" *ngIf=\"!editExclusionForm.controls['title'].valid && editExclusionForm.controls['title'].touched\">Name is required</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row clearfix\">\n                        <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                            <label for=\"name\">Status</label>\n                        </div>\n                        <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n                            <div class=\"form-group\">\n                                <select class=\"form-control dropdown\" formControlName=\"status_type\">\n                            <option [ngValue]=\"1\"> Active</option>\n                            <option [ngValue]=\"2\"> InActive</option>\n                        </select>\n                            </div>\n                        </div>\n                    </div>\n                <div class=\"row clearfix\">\n                    <div class=\"col-lg-offset-9 col-md-offset-9 col-sm-offset-4 col-xs-offset-5\">\n                        <input type=\"submit\" value=\"Save Changes\" class=\"btn btn-success  m-t-15 waves-effect\" [disabled]=\"!editExclusionForm.valid\">\n                    </div>\n                </div>\n            </form>\n        </div>\n    </app-dialog>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/list-management/list-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_function_service__ = __webpack_require__("../../../../../src/app/_services/function.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListManagementComponent = (function () {
    function ListManagementComponent(userService, fb, functionService) {
        this.userService = userService;
        this.fb = fb;
        this.functionService = functionService;
        this.showDialog = false;
        this.createCat = {};
        this.del = {};
        // edit main category form
        this.editExclusionForm = this.fb.group({
            'title': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'type': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'status_type': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'id': [null]
        });
        // create main category form
        this.createExclusionForm = this.fb.group({
            'title': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'type': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
    }
    ListManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get list of main category
        // this.userService.getCategoryList(1) // 1 for category refer to api doc
        // .subscribe(mainCat => {
        //   this.mainCat = mainCat;
        //   console.log(mainCat);
        // });
        //   // get list of category
        // this.userService.getCategoryList(2) // 2 for category refer to api doc
        // .subscribe(getSubCatList => {
        //   console.log(getSubCatList);
        //   this.getSubCatList = getSubCatList;
        //   console.log(getSubCatList);
        // });
        // get list of exclusion list
        this.userService.getDetailList()
            .subscribe(function (detailList) {
            _this.detail = detailList;
            console.log(detailList);
        });
    };
    // get list after select main category
    ListManagementComponent.prototype.onSelect = function (id) {
        // console.log(id);
        // const res = id.split(' ');
        // console.log(res[1]);
        // this.userService.getCategoryListbyRefID(res[1])
        // .subscribe(getSubCatList => {
        //   this.getSubCatList = getSubCatList;
        //   console.log(getSubCatList);
        // });
    };
    // create exclusion list
    ListManagementComponent.prototype.createCategory = function (category) {
        var _this = this;
        console.log(category);
        // this.createCat = { 'CatID': category.CatID, 'Name': category.Name};
        this.userService.createDetail(category)
            .subscribe(function (res) {
            console.log(res);
            alert('Added');
            _this.createExclusionForm.reset();
            _this.userService.getDetailList() // list update after delete
                .subscribe(function (detailList) {
                _this.detail = detailList;
                console.log(detailList);
            });
        }, function (err) {
            console.log(err);
        });
    };
    // passs current user as argument and open the popup
    ListManagementComponent.prototype.openCategoryModel = function (category) {
        console.log(category);
        this.showDialog = true; // for show dialog
        // populate prefilled value in form
        this.editExclusionForm.setValue({
            title: category.title,
            type: category.type,
            status_type: category.status_type,
            id: category.id
        });
    };
    ListManagementComponent.prototype.updateExclusions = function (category) {
        var _this = this;
        if (category.status_type == 1) {
            // console.log(category);
            this.userService.updateDetail(category)
                .subscribe(function (res) {
                console.log(res);
                _this.showDialog = false;
                alert('Detail Type List updated successfully');
                _this.showDialog = false;
                _this.userService.getDetailList() // list update after edit
                    .subscribe(function (detailList) {
                    _this.detail = detailList;
                    console.log(detailList);
                });
            });
        }
        else {
            alert("Please Active first then update");
        }
    };
    ListManagementComponent.prototype.deleteCategory = function (category) {
        var _this = this;
        // console.log(category);
        // this.del = { 'ID': category.ID };
        // confirm('Confirm');
        this.userService.deleteDetail(category)
            .subscribe(function (res) {
            console.log(res);
            alert('deleted !!');
            _this.userService.getDetailList() // list update after delete
                .subscribe(function (detailList) {
                _this.detail = detailList;
                console.log(detailList);
            }, function (error) {
                alert("somenthing went wrong");
            });
        });
    };
    // function for avoid only space submit
    ListManagementComponent.prototype.avoidSpace = function (e) {
        // console.log(e);
        this.functionService.NoWhitespaceValidator(this.createExclusionForm, e);
    };
    return ListManagementComponent;
}());
ListManagementComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-list-management',
        template: __webpack_require__("../../../../../src/app/dashboard/data-panel/list-management/list-management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/data-panel/list-management/list-management.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_function_service__["a" /* FunctionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_function_service__["a" /* FunctionService */]) === "function" && _c || Object])
], ListManagementComponent);

var _a, _b, _c;
//# sourceMappingURL=list-management.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/seller-management/add-offline-seller/add-offline-seller.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin-right{\n    margin-right: 25px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/seller-management/add-offline-seller/add-offline-seller.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"header\">\n    <h2>\n      Add Offline Seller\n    </h2>\n  </div>\n  <div class=\"body\">\n    <form class=\"form-horizontal\" [formGroup]='offlineSellerForm' (ngSubmit)=\"createOfflineSeller(offlineSellerForm.value)\">\n      <h4>\n        <u>Information </u>\n      </h4>\n      <hr>\n      <div class=\"row clearfix\">\n        <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n          <label for=\"name\"><span style=\"color:red\">*</span> Name</label>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n          <div class=\"form-group\">\n            <div class=\"form-line\">\n              <input type=\"text\" formControlName=\"seller_name\" class=\"form-control\" placeholder=\"EnterName here\" (keyup)=\"avoidSpace('seller_name')\">\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n          <label for=\"name\">Owner Name</label>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n          <div class=\"form-group\">\n            <div class=\"form-line\">\n              <input type=\"text\" formControlName=\"owner_name\" class=\"form-control\" placeholder=\"Enter Owner Name here\" (keyup)=\"avoidSpace('owner_name')\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row clearfix\">\n        <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n          <label for=\"name\">Gstin No</label>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n          <div class=\"form-group\">\n            <div class=\"form-line\">\n              <input type=\"text\" formControlName=\"gstin\" class=\"form-control\" placeholder=\"Enter GstinNo here\" (keyup)=\"avoidSpace('gstin')\">\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n          <label for=\"name\">Pan No</label>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n          <div class=\"form-group\">\n            <div class=\"form-line\">\n              <input type=\"text\" formControlName=\"pan_no\" class=\"form-control\" placeholder=\"Enter Pan No here\" (keyup)=\"avoidSpace('pan_no')\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row clearfix\">\n        <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n          <label for=\"name\">Reg No</label>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n          <div class=\"form-group\">\n            <div class=\"form-line\">\n              <input type=\"text\" formControlName=\"reg_no\" class=\"form-control\" placeholder=\"Enter RegNo here\" (keyup)=\"avoidSpace('reg_no')\">\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n          <label for=\"name\">is Service?</label>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n          <div class=\"form-group\">\n            <div class=\"form-line\">\n                <select class=\"form-control dropdown\" formControlName=\"is_service\">\n                    <option [ngValue]=\"true\"> Yes</option>\n                    <option [ngValue]=\"false\"> No</option>\n                </select>          \n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row clearfix\">\n        <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n          <label for=\"name\">Is Onboarded?</label>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n          <div class=\"form-group\">\n            <div class=\"form-line\">\n              <select class=\"form-control dropdown\" formControlName=\"is_onboarded\">\n                <option [ngValue]=\"true\"> Yes</option>\n                <option [ngValue]=\"false\"> No</option>\n              </select>   \n            </div>\n          </div>\n        </div>\n      </div>\n      <h4>\n        <u>Address </u>\n      </h4>\n      <hr>\n      <div class=\"row clearfix\">\n        <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n          <label for=\"name\">Address</label>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n          <div class=\"form-group\">\n            <div class=\"form-line\">\n              <input type=\"text\" formControlName=\"address\" class=\"form-control\" placeholder=\"Enter House No here\" (keyup)=\"avoidSpace('address')\">\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n          <label for=\"name\">City</label>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n          <div class=\"form-group\">\n            <div class=\"form-line\">\n              <input type=\"text\" formControlName=\"city\" class=\"form-control\" placeholder=\"Enter City Name here\" (keyup)=\"avoidSpace('city')\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row clearfix\">\n        <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n          <label for=\"name\">State</label>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n          <div class=\"form-group\">\n            <div class=\"form-line\">\n              <input type=\"text\" formControlName=\"state\" class=\"form-control\" placeholder=\"Enter State Name here\" (keyup)=\"avoidSpace('state')\">\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n          <label for=\"name\">PinCode</label>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n          <div class=\"form-group\">\n            <div class=\"form-line\">\n              <input type=\"text\" formControlName=\"pincode\" class=\"form-control\" placeholder=\"Enter PinCode here\" (keyup)=\"avoidSpace('pincode')\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row clearfix\">\n        <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n          <label for=\"name\">Latitude</label>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n          <div class=\"form-group\">\n            <div class=\"form-line\">\n              <input type=\"text\" formControlName=\"latitude\" class=\"form-control\" placeholder=\"Enter Lattitude Name here\" (keyup)=\"avoidSpace('latitude')\">\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n          <label for=\"name\">Longitude</label>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n          <div class=\"form-group\">\n            <div class=\"form-line\">\n              <input type=\"text\" formControlName=\"longitude\" class=\"form-control\" placeholder=\"Enter Longitude here\" (keyup)=\"avoidSpace('longitude')\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row clearfix\">\n        <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n          <label for=\"name\">URL</label>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n          <div class=\"form-group\">\n            <div class=\"form-line\">\n              <input type=\"text\" formControlName=\"url\" class=\"form-control\" placeholder=\"Enter URL here\" (keyup)=\"avoidSpace('url')\">\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n          <label for=\"name\">Email</label>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n          <div class=\"form-group\">\n            <div class=\"form-line\">\n              <input type=\"text\" formControlName=\"email\" class=\"form-control\" placeholder=\"Enter Email here\" (keyup)=\"avoidSpace('email')\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row clearfix\">\n        <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n          <label for=\"name\">Contact No.</label>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n          <div class=\"form-group\">\n            <div class=\"form-line\">\n              <input type=\"text\" formControlName=\"contact_no\" class=\"form-control\" placeholder=\"Enter Phone No. here\" (keyup)=\"avoidSpace('contact_no')\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row clearfix\">\n        <div class=\" col-lg-3 col-md-3 col-lg-offset-8 col-md-offset-8 col-sm-offset-4 col-xs-offset-5\">\n          <button type=\"submit\" class=\"btn btn-lg btn-success btn-block m-t-15 waves-effect\" [disabled]=\"!offlineSellerForm.valid\">Submit</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/seller-management/add-offline-seller/add-offline-seller.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOfflineSellerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_function_service__ = __webpack_require__("../../../../../src/app/_services/function.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddOfflineSellerComponent = (function () {
    function AddOfflineSellerComponent(userService, fb, functionService) {
        this.userService = userService;
        this.fb = fb;
        this.functionService = functionService;
        this.items = [];
    }
    AddOfflineSellerComponent.prototype.ngOnInit = function () {
        this.offlineSellerForm = this.fb.group({
            'seller_name': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'owner_name': '',
            'gstin': '',
            'pan_no': '',
            'reg_no': '',
            'is_service': '',
            'is_onboarded': '',
            'address': '',
            'city': '',
            'state': '',
            'pincode': '',
            'latitude': '',
            'longitude': '',
            'url': '',
            'email': '',
            'contact_no': ''
        });
    };
    AddOfflineSellerComponent.prototype.createOfflineSeller = function (data) {
        var _this = this;
        console.log(data);
        this.userService.createOfflineSeller(data)
            .subscribe(function (res) {
            console.log(res);
            alert('Offline Seller added succesfully');
            _this.offlineSellerForm.reset();
        }, function (error) {
            console.log(error);
            var err = JSON.parse(error['_body']);
            alert(err.reason);
        });
    };
    // function for avoid only space submit
    AddOfflineSellerComponent.prototype.avoidSpace = function (e) {
        this.functionService.NoWhitespaceValidator(this.offlineSellerForm, e);
    };
    return AddOfflineSellerComponent;
}());
AddOfflineSellerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-add-offline-seller',
        template: __webpack_require__("../../../../../src/app/dashboard/data-panel/seller-management/add-offline-seller/add-offline-seller.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/data-panel/seller-management/add-offline-seller/add-offline-seller.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_function_service__["a" /* FunctionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_function_service__["a" /* FunctionService */]) === "function" && _c || Object])
], AddOfflineSellerComponent);

var _a, _b, _c;
//# sourceMappingURL=add-offline-seller.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/seller-management/add-online-seller/add-online-seller.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin-right{\n    margin-right: 25px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/seller-management/add-online-seller/add-online-seller.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"header\">\n        <h2>\n            Add Online Seller\n        </h2>\n        <p><span style=\"color:red\">*</span> is required.</p>\n    </div>\n    <div class=\"body\">\n      <form class=\"form-horizontal\" [formGroup]='onlineSellerForm' (ngSubmit) = \"createOnlineSeller(onlineSellerForm.value)\">\n        <div class=\"row clearfix\">\n            <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                <label for=\"name\"><span style=\"color:red\">*</span> Name</label>\n            </div>\n            <div class=\"col-lg-10 col-md-10 col-sm-8 col-xs-7\">\n                <div class=\"form-group\">\n                    <div class=\"form-line\">\n                        <input type=\"text\" formControlName=\"seller_name\" class=\"form-control\" placeholder=\"Enter Seller name here\" (keyup)=\"avoidSpace('seller_name')\">\n                    </div>\n                    <!-- <div *ngIf=\"onlineSellerForm.hasError('whitespace')\">Please enter Valid Data</div> -->\n                </div>\n            </div>\n        </div>\n        <div class=\"row clearfix\">\n            <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                <label for=\"description\"><span style=\"color:red\">*</span> URL</label>\n            </div>\n            <div class=\"col-lg-10 col-md-10 col-sm-8 col-xs-7\">\n                <div class=\"form-group\">\n                    <div class=\"form-line\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"url\" placeholder=\"Enter url of online seller\" (keyup)=\"avoidSpace('url')\">\n                    </div>\n                </div>\n            </div>\n        </div>\n         <div class=\"row clearfix\">\n            <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                <label for=\"description\"><span style=\"color:red\">*</span> GstinNo</label>\n            </div>\n            <div class=\"col-lg-10 col-md-10 col-sm-8 col-xs-7\">\n                <div class=\"form-group\">\n                    <div class=\"form-line\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"gstin\" placeholder=\"Enter GstinNo of online seller\" (keyup)=\"avoidSpace('gstin')\">\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row clearfix\">\n            <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                <label for=\"description\">Contact</label>\n            </div>\n            <div class=\"col-lg-10 col-md-10 col-sm-8 col-xs-7\">\n                <div class=\"form-group\">\n                    <div class=\"form-line\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"contact\" placeholder=\"Enter contact of online seller\" (keyup)=\"avoidSpace('contact')\">\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row clearfix\">\n            <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                <label for=\"description\">Email ID</label>\n            </div>\n            <div class=\"col-lg-10 col-md-10 col-sm-8 col-xs-7\">\n                <div class=\"form-group\">\n                    <div class=\"form-line\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"email\" placeholder=\"Enter email of online seller\" (keyup)=\"avoidSpace('email')\">\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row clearfix\">\n            <div class=\" col-lg-3 col-md-3 col-lg-offset-8 col-md-offset-8 col-sm-offset-4 col-xs-offset-5\">\n                <button type=\"submit\" class=\"btn btn-lg btn-success btn-block m-t-15 waves-effect\" [disabled]=\"!onlineSellerForm.valid\">Submit</button>\n            </div>\n        </div>\n      </form>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/seller-management/add-online-seller/add-online-seller.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOnlineSellerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_function_service__ = __webpack_require__("../../../../../src/app/_services/function.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddOnlineSellerComponent = (function () {
    function AddOnlineSellerComponent(userService, fb, functionService) {
        this.userService = userService;
        this.fb = fb;
        this.functionService = functionService;
        this.items = [];
    }
    AddOnlineSellerComponent.prototype.ngOnInit = function () {
        this.onlineSellerForm = this.fb.group({
            'seller_name': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'url': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'gstin': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'contact': '',
            'email': ''
        });
    };
    //  create online seller function
    AddOnlineSellerComponent.prototype.createOnlineSeller = function (data) {
        var _this = this;
        // console.log(data);
        this.userService.createOnlineSeller(data)
            .subscribe(function (res) {
            console.log(res);
            alert('New Online Seller added succesfully');
            _this.onlineSellerForm.reset();
        });
    };
    // function for avoid only space submit
    AddOnlineSellerComponent.prototype.avoidSpace = function (e) {
        this.functionService.NoWhitespaceValidator(this.onlineSellerForm, e);
    };
    return AddOnlineSellerComponent;
}());
AddOnlineSellerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-add-online-seller',
        template: __webpack_require__("../../../../../src/app/dashboard/data-panel/seller-management/add-online-seller/add-online-seller.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/data-panel/seller-management/add-online-seller/add-online-seller.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_function_service__["a" /* FunctionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_function_service__["a" /* FunctionService */]) === "function" && _c || Object])
], AddOnlineSellerComponent);

var _a, _b, _c;
//# sourceMappingURL=add-online-seller.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/seller-management/offline-seller-list/offline-seller-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/seller-management/offline-seller-list/offline-seller-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"showOfflineSellerList\">\n    <div class=\"header\">\n        <h2>\n            Offline Seller List\n            <small> For change the Offline Seller details click on the edit button</small>\n        </h2>\n    </div>\n    <div class=\"body table-responsive\">\n        <table class=\"table table-condensed table-bordered\">\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Name</th>\n                    <th>Address</th>\n                    <th>City</th>\n                    <th>State</th>\n                    <th>Status</th>\n                    <th>Action</th>\n                </tr>\n            </thead>\n            <tbody *ngFor=\"let list of offlineSeller?.data; let i = index\">\n                <tr>\n                    <th scope=\"row\">{{ i+1 }}</th>\n                    <td>{{ list.seller_name }}</td>\n                    <td>{{ list.address }}</td>\n                    <td>{{ list.city }}</td>\n                    <td>{{ list.state }}</td>\n                    <td *ngIf=\"list?.status_type=='1'\">\n                        <span class=\"label bg-green\">Active</span>\n                    </td>\n                    <td *ngIf=\"list?.status_type=='2'\">\n                        <span class=\"label bg-red\">InActive</span>\n                    </td>\n                    <td>\n                        <span class=\"btn btn-info btn-circle waves-effect waves-circle waves-float\" (click)=\"openOfflineSellerModel(list)\"\n                            title=\"Edit\">\n                            <i class=\"material-icons\">mode_edit</i>\n                        </span>\n                        <span class=\"btn btn-danger btn-circle waves-effect waves-circle waves-float\" (click)=\"deleteOfflineSeller(list.sid)\"\n                            title=\"Delete\">\n                            <i class=\"material-icons\">delete</i>\n                        </span>\n                    </td>\n                    <!-- <td><span class=\"btn btn-info btn-circle waves-effect waves-circle waves-float\" (click)=\"openOfflineSellerModel(list.ID)\" title=\"Edit\"><i class=\"material-icons\" >mode_edit</i></span></td> -->\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n<div class=\"card\" *ngIf=\"!showOfflineSellerList\">\n    <div class=\"modal-header\">\n        <button class=\"btn bg-blue\" (click)=\"back()\">Back</button>\n        <hr>\n        <h4 class=\"modal-title\" id=\"smallModalLabel\">Edit Offline Seller</h4>\n    </div>\n    <div class=\"modal-body\">\n        <form class=\"form-horizontal\" [formGroup]='offlineSellerForm' (ngSubmit)=\"updateOfflineSeller(offlineSellerForm.value)\">\n            <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"name\">\n                        <span style=\"color:red\">*</span> Name</label>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <input type=\"text\" formControlName=\"seller_name\" class=\"form-control\" placeholder=\"EnterName here\" (keyup)=\"avoidSpace('seller_name')\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"name\">Owner Name</label>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <input type=\"text\" formControlName=\"owner_name\" class=\"form-control\" placeholder=\"Enter Owner Name here\" (keyup)=\"avoidSpace('owner_name')\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"name\">\n                    Gstin No</label>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <input type=\"text\" formControlName=\"gstin\" class=\"form-control\" placeholder=\"Enter GstinNo here\" (keyup)=\"avoidSpace('gstin')\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"name\">Pan No</label>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <input type=\"text\" formControlName=\"pan_no\" class=\"form-control\" placeholder=\"Enter Pan No here\" (keyup)=\"avoidSpace('pan_no')\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"name\">Reg No</label>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <input type=\"text\" formControlName=\"reg_no\" class=\"form-control\" placeholder=\"Enter RegNo here\" (keyup)=\"avoidSpace('reg_no')\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"name\">is Service?</label>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <select class=\"form-control dropdown\" formControlName=\"is_service\">\n                                <option [ngValue]=\"true\"> Yes</option>\n                                <option [ngValue]=\"false\"> No</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"name\">Is Onboarded?</label>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <select class=\"form-control dropdown\" formControlName=\"is_onboarded\">\n                                <option [ngValue]=\"true\"> Yes</option>\n                                <option [ngValue]=\"false\"> No</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <h4>\n                <u>Address </u>\n            </h4>\n            <hr>\n            <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"name\">Address</label>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <input type=\"text\" formControlName=\"address\" class=\"form-control\" placeholder=\"Enter House No here\" (keyup)=\"avoidSpace('address')\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"name\"> City</label>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <input type=\"text\" formControlName=\"city\" class=\"form-control\" placeholder=\"Enter City Name here\" (keyup)=\"avoidSpace('city')\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"name\">\n                    State</label>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <input type=\"text\" formControlName=\"state\" class=\"form-control\" placeholder=\"Enter State Name here\" (keyup)=\"avoidSpace('state')\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"name\">\n                        PinCode</label>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <input type=\"text\" formControlName=\"pincode\" class=\"form-control\" placeholder=\"Enter PinCode here\" (keyup)=\"avoidSpace('pincode')\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"name\">Latitude</label>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <input type=\"text\" formControlName=\"latitude\" class=\"form-control\" placeholder=\"Enter Lattitude Name here\" (keyup)=\"avoidSpace('latitude')\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"name\">Longitude</label>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <input type=\"text\" formControlName=\"longitude\" class=\"form-control\" placeholder=\"Enter Longitude here\" (keyup)=\"avoidSpace('longitude')\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"name\">URL</label>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <input type=\"text\" formControlName=\"url\" class=\"form-control\" placeholder=\"Enter URL here\" (keyup)=\"avoidSpace('url')\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"name\">Email</label>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <input type=\"text\" formControlName=\"email\" class=\"form-control\" placeholder=\"Enter Email here\" (keyup)=\"avoidSpace('email')\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"name\">Contact No.</label>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <input type=\"text\" formControlName=\"contact_no\" class=\"form-control\" placeholder=\"Enter Phone No. here\" (keyup)=\"avoidSpace('contact_no')\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"Status\">Status</label>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <select class=\"form-control dropdown\" formControlName=\"status_type\">\n                                <option [ngValue]=\"1\"> Active</option>\n                                <option [ngValue]=\"2\"> InActive</option>\n                            </select>  \n                          </div> \n                    </div>\n                </div>\n            </div>\n            <div class=\"row clearfix\">\n                <div class=\" col-lg-3 col-md-3 col-lg-offset-8 col-md-offset-8 col-sm-offset-4 col-xs-offset-5\">\n                    <button type=\"submit\" class=\"btn btn-lg btn-success btn-block m-t-15 waves-effect\" [disabled]=\"!offlineSellerForm.valid\">Submit</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/seller-management/offline-seller-list/offline-seller-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfflineSellerListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_function_service__ = __webpack_require__("../../../../../src/app/_services/function.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OfflineSellerListComponent = (function () {
    function OfflineSellerListComponent(userService, fb, functionService) {
        this.userService = userService;
        this.fb = fb;
        this.functionService = functionService;
        this.showDialog = false;
        this.showOfflineSellerList = true; // for toggle form
    }
    OfflineSellerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.offlineSellerForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            sid: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            seller_name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            owner_name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            gstin: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            pan_no: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            reg_no: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            is_service: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            is_onboarded: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            address: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            city: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            state: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            pincode: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            latitude: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            longitude: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            url: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            contact_no: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            status_type: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('')
        });
        this.userService.getOfflineSellerList()
            .subscribe(function (offlineSellerList) {
            _this.offlineSeller = offlineSellerList;
            console.log(_this.offlineSeller);
        });
    };
    // passs current brand id as argument and open the popup
    OfflineSellerListComponent.prototype.openOfflineSellerModel = function (item) {
        console.log('item is ', item);
        this.showOfflineSellerList = false; // for show dialog
        // reset  editBrand form
        this.offlineSellerForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            sid: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            seller_name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            owner_name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            gstin: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            pan_no: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            reg_no: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            is_service: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            is_onboarded: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            address: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            city: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            state: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            pincode: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            latitude: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            longitude: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            url: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            contact_no: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            status_type: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('')
        });
        // prop autofill data to form
        this.offlineSellerForm.setValue({
            sid: item.sid,
            owner_name: item.owner_name,
            seller_name: item.seller_name,
            gstin: item.gstin,
            pan_no: item.pan_no,
            reg_no: item.reg_no,
            is_service: item.is_service,
            is_onboarded: item.is_onboarded,
            address: item.address,
            city: item.city,
            state: item.state,
            pincode: item.pincode,
            latitude: item.latitude,
            longitude: item.longitude,
            url: item.url,
            email: item.email,
            contact_no: item.contact_no,
            status_type: item.status_type,
        });
    };
    // update offline seller
    OfflineSellerListComponent.prototype.updateOfflineSeller = function (req) {
        var _this = this;
        console.log(req);
        if (req.status_type == 1) {
            this.userService.updateOfflineSeller(req)
                .subscribe(function (res) {
                // console.log(res);
                alert('Offline Seller updated successfully');
                _this.showOfflineSellerList = true;
                _this.userService.getOfflineSellerList() // list update after edit
                    .subscribe(function (offlineSellerList) {
                    _this.offlineSeller = offlineSellerList;
                });
            });
        }
        else {
            alert("Please Active first then update");
        }
    };
    // delete offline seller
    OfflineSellerListComponent.prototype.deleteOfflineSeller = function (sellerId) {
        var _this = this;
        this.userService.deleteOfflineSeller(sellerId)
            .subscribe(function (res) {
            // console.log(res);
            alert('Offline Seller deleted successfully');
            _this.userService.getOfflineSellerList() // list update after edit
                .subscribe(function (offlineSellerList) {
                _this.offlineSeller = offlineSellerList;
            });
        });
    };
    // back button 
    OfflineSellerListComponent.prototype.back = function () {
        this.showOfflineSellerList = true;
    };
    // function for avoid only space submit
    OfflineSellerListComponent.prototype.avoidSpace = function (e) {
        this.functionService.NoWhitespaceValidator(this.offlineSellerForm, e);
    };
    return OfflineSellerListComponent;
}());
OfflineSellerListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-offline-seller-list',
        template: __webpack_require__("../../../../../src/app/dashboard/data-panel/seller-management/offline-seller-list/offline-seller-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/data-panel/seller-management/offline-seller-list/offline-seller-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_function_service__["a" /* FunctionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_function_service__["a" /* FunctionService */]) === "function" && _c || Object])
], OfflineSellerListComponent);

var _a, _b, _c;
//# sourceMappingURL=offline-seller-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/seller-management/online-seller-list/online-seller-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/seller-management/online-seller-list/online-seller-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"showOnlineSellerList\">\n  <div class=\"header\">\n    <h2>\n      Online Seller List\n      <small> For change the Online Seller details click on the edit button</small>\n    </h2>\n  </div>\n  <div class=\"body table-responsive\">\n    <table class=\"table table-condensed table-bordered\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Name</th>\n          <th>URL</th>\n          <th>GstinNo</th>\n          <th>Status</th>\n          <th>Action</th>\n        </tr>\n      </thead>\n      <tbody *ngFor=\"let list of onlineSeller?.data; let i = index\">\n        <tr>\n          <th scope=\"row\">{{ i+1 }}</th>\n          <td>{{ list?.seller_name }}</td>\n          <td>{{ list?.url }}</td>\n          <td>{{ list?.gstin}}</td>\n          <td *ngIf=\"list?.status_type=='1'\"><span class=\"label bg-green\">Active</span></td>\n          <td *ngIf=\"list?.status_type=='2'\"><span class=\"label bg-red\">InActive</span></td>\n          <td><span class=\"btn btn-info btn-circle waves-effect waves-circle waves-float\" (click)=\"openOnlineSellerModel(list)\" title=\"Edit\"><i class=\"material-icons\" >mode_edit</i></span>  <span class=\"btn btn-danger btn-circle waves-effect waves-circle waves-float\" (click)=\"deleteOnlineSeller(list.sid)\" title=\"Delete\"><i class=\"material-icons\">delete</i></span></td>                  \n          <!-- <td><span class=\"btn btn-info btn-circle waves-effect waves-circle waves-float\" (click)=\"openOnlineSellerModel(list)\"\n              title=\"Edit\"><i class=\"material-icons\" >mode_edit</i></span> </td> -->\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<div class=\"card\" *ngIf=\"!showOnlineSellerList\">\n  <div class=\"modal-header\">\n    <button class=\"btn bg-blue\" (click)=\"back()\">Back</button>\n    <hr>\n    <h4 class=\"modal-title\" id=\"smallModalLabel\">Edit Online Seller</h4>\n    <div class=\"modal-body\">\n      <form class=\"form-horizontal\" [formGroup]='onlineSellerForm' (ngSubmit)=\"updateOnlineSeller(onlineSellerForm.value)\">\n        <div class=\"row clearfix\">\n          <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n            <label for=\"name\"><span style=\"color:red\">*</span> Name</label>\n          </div>\n          <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n            <div class=\"form-group\">\n              <div class=\"form-line\">\n                <input type=\"text\" formControlName=\"seller_name\" class=\"form-control\" placeholder=\"Enter brand name here\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row clearfix\">\n          <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n            <label for=\"description\"><span style=\"color:red\">*</span> URL</label>\n          </div>\n          <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n            <div class=\"form-group\">\n              <div class=\"form-line\">\n                <input type=\"text\" class=\"form-control\" formControlName=\"url\" placeholder=\"Enter URL of online Seller\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row clearfix\">\n          <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n            <label for=\"description\"><span style=\"color:red\">*</span> GstinNo</label>\n          </div>\n          <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n            <div class=\"form-group\">\n              <div class=\"form-line\">\n                <input type=\"text\" class=\"form-control\" formControlName=\"gstin\" placeholder=\"Enter GstinNo of online seller\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                <label for=\"description\">Contact</label>\n            </div>\n            <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n                <div class=\"form-group\">\n                    <div class=\"form-line\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"contact\" placeholder=\"Enter contact of online seller\" (keyup)=\"avoidSpace('contact')\">\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                <label for=\"description\">Email ID</label>\n            </div>\n            <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n                <div class=\"form-group\">\n                    <div class=\"form-line\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"email\" placeholder=\"Enter email of online seller\" (keyup)=\"avoidSpace('email')\">\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                <label for=\"description\">Status</label>\n            </div>\n            <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n                <div class=\"form-group\">\n                    <div class=\"form-line\">\n                      <select class=\"form-control dropdown\" formControlName=\"status_type\">\n                          <option [ngValue]=\"1\"> Active</option>\n                          <option [ngValue]=\"2\"> InActive</option>\n                      </select>  \n                    </div>    \n                </div>\n            </div>\n        </div>\n        <div class=\"row clearfix\">\n          <div class=\" col-lg-3 col-md-3 col-lg-offset-8 col-md-offset-8 col-sm-offset-4 col-xs-offset-5\">\n            <button type=\"submit\" class=\"btn btn-lg btn-success btn-block m-t-15 waves-effect\" [disabled]=\"!onlineSellerForm.valid\">Submit</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/seller-management/online-seller-list/online-seller-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlineSellerListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_function_service__ = __webpack_require__("../../../../../src/app/_services/function.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OnlineSellerListComponent = (function () {
    function OnlineSellerListComponent(userService, fb, functionService) {
        this.userService = userService;
        this.fb = fb;
        this.functionService = functionService;
        this.showDialog = false;
        this.showOnlineSellerList = true; // for toggle form
    }
    OnlineSellerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onlineSellerForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            seller_name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            url: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            gstin: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            contact: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            status_type: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            sid: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('')
        });
        // get online seller list
        this.userService.getOnlineSellerList()
            .subscribe(function (onlineSellerList) {
            _this.onlineSeller = onlineSellerList;
            console.log(_this.onlineSeller);
        });
    };
    // passs current brand id as argument and open the next page model
    OnlineSellerListComponent.prototype.openOnlineSellerModel = function (item) {
        console.log('item is ', item);
        this.showOnlineSellerList = false;
        // reset edit online Seller form
        this.onlineSellerForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            seller_name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            url: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            gstin: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            contact: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            status_type: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            sid: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('')
        });
        // populate prefilled value in form
        this.onlineSellerForm.setValue({
            seller_name: item.seller_name,
            url: item.url,
            gstin: item.gstin,
            contact: item.contact,
            email: item.email,
            status_type: item.status_type,
            sid: item.sid
        });
    };
    // update online seller
    OnlineSellerListComponent.prototype.updateOnlineSeller = function (req) {
        var _this = this;
        console.log(req);
        if (req.status_type == 1) {
            this.userService.updateOnlineSeller(req)
                .subscribe(function (res) {
                // console.log(res);
                alert('Online Seller updated successfully');
                _this.showOnlineSellerList = true;
                _this.userService.getOnlineSellerList() // list update after edit
                    .subscribe(function (onlineSeller) {
                    _this.onlineSeller = onlineSeller;
                });
            });
        }
        else {
            alert("Please Active first then update");
        }
    };
    // delete online seller
    OnlineSellerListComponent.prototype.deleteOnlineSeller = function (sellerId) {
        var _this = this;
        this.userService.deleteOnlineSeller(sellerId)
            .subscribe(function (res) {
            // console.log(res);
            alert('Online Seller deleted successfully');
            _this.userService.getOnlineSellerList() // list update after edit
                .subscribe(function (onlineSeller) {
                _this.onlineSeller = onlineSeller;
            });
        });
    };
    // back button 
    OnlineSellerListComponent.prototype.back = function () {
        this.showOnlineSellerList = true;
    };
    // function for avoid only space submit
    OnlineSellerListComponent.prototype.avoidSpace = function (e) {
        this.functionService.NoWhitespaceValidator(this.onlineSellerForm, e);
    };
    return OnlineSellerListComponent;
}());
OnlineSellerListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-online-seller-list',
        template: __webpack_require__("../../../../../src/app/dashboard/data-panel/seller-management/online-seller-list/online-seller-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/data-panel/seller-management/online-seller-list/online-seller-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_function_service__["a" /* FunctionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_function_service__["a" /* FunctionService */]) === "function" && _c || Object])
], OnlineSellerListComponent);

var _a, _b, _c;
//# sourceMappingURL=online-seller-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/service-center-management/add-service-center/add-service-center.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown{\n    border:1px solid #ccc;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/service-center-management/add-service-center/add-service-center.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"header\">\n        <h2>\n            Add Service Center\n        </h2>\n    </div>\n    <div class=\"body\">\n        <form class=\"form-horizontal\" [formGroup]='addserviceCenterForm' (ngSubmit)=\"createASC(addserviceCenterForm.value)\">\n            <h4>\n                <u>Information </u>\n            </h4>\n            <hr>\n            <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"name\">Name</label>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <input type=\"text\" formControlName=\"center_name\" class=\"form-control\" placeholder=\"Enter Name  here\" (keyup)=\"avoidSpace('center_name')\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"name\">Select Brand</label>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <select class=\"form-control dropdown\" formControlName=\"center_brands\" multiple>\n                    <option *ngFor=\"let brandList of brands?.data\" [ngValue]=\"brandList.brand_id\">{{ brandList.brand_name }}</option>\n                  </select>\n                    </div>\n                </div>\n            </div>\n            <h4>\n                <u>Address </u>\n            </h4>\n            <hr>\n            <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"name\">Address</label>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <input type=\"text\" formControlName=\"center_address\" class=\"form-control\" placeholder=\"Enter Address here\" (keyup)=\"avoidSpace('center_address')\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"name\">City</label>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <input type=\"text\" formControlName=\"center_city\" class=\"form-control\" placeholder=\"Enter City Name here\" (keyup)=\"avoidSpace('center_city')\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"name\">State</label>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <input type=\"text\" formControlName=\"center_state\" class=\"form-control\" placeholder=\"Enter State Name here\" (keyup)=\"avoidSpace('center_state')\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"name\">Pin Code</label>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <input type=\"text\" formControlName=\"center_pin\" class=\"form-control\" placeholder=\"Enter Pin Code here\" (keyup)=\"avoidSpace('center_pin')\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"name\">Latitude</label>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <input type=\"text\" formControlName=\"center_latitude\" class=\"form-control\" placeholder=\"Enter Latitude here\" (keyup)=\"avoidSpace('center_latitude')\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"name\">Longitude</label>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <input type=\"text\" formControlName=\"center_longitude\" class=\"form-control\" placeholder=\"Enter Longitude here\" (keyup)=\"avoidSpace('center_longitude')\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"name\">Country</label>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <input type=\"text\" formControlName=\"center_country\" class=\"form-control\" placeholder=\"Enter Country Name here\" (keyup)=\"avoidSpace('center_country')\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"name\">OpenDays</label>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <input type=\"text\" formControlName=\"center_days\" class=\"form-control\" placeholder=\"Enter OpenDays  here\" (keyup)=\"avoidSpace('center_days')\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"name\">Timings</label>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <input type=\"text\" formControlName=\"center_timings\" class=\"form-control\" placeholder=\"Enter Timing here\" (keyup)=\"avoidSpace('center_timings')\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- template for add row  -->\n            <h4>\n                <u>Details </u>\n            </h4>\n            <div class=\"row clearfix\">\n                <div class=\"pull-right margin-right\">\n                    <button type=\"button\" class=\"btn btn-info m-t-15 waves-effect\" (click)=\"addItem()\">Add More Deatils</button>\n                    <p>&nbsp;</p>\n                </div>\n            </div>\n            <div class=\"panel panel-default\">\n                <div formArrayName=\"center_details\" *ngFor=\"let item of addserviceCenterForm.controls.center_details['controls']; let i = index;\">\n                    <br>\n                    <div class=\"row clearfix\" [formGroupName]=\"i\">\n                        <div class=\"col-md-2 col-lg-2 col-md-offset-1\">\n                            <label> Category </label>\n                            <select class=\"form-control dropdown\" formControlName=\"category_id\">\n                            <option selected>Select</option>                            \n                        <option *ngFor=\"let list of cat?.data\" [ngValue]=\"list.category_id\">{{ list.category_name }}</option>\n                    </select>\n                        </div>\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-6\">\n                            <label>\nDetail Type\n                </label>\n                            <select class=\"form-control dropdown\" formControlName=\"detail_type\">\n                            <option selected>Select</option>                            \n                        <option *ngFor=\"let list of detailType?.data\" [ngValue]=\"list.id\">{{ list?.title }}</option>                    \n                        \n                    </select>\n                        </div>\n\n                        <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6 \">\n                            <label>\n                    Value\n                </label>\n                            <div class=\"form-group\">\n                                <div class=\"form-line\">\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"value\" placeholder=\"Enter display name\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-6\">\n                            <button type=\"button\" class=\"btn btn-danger m-t-15 waves-effect\" *ngIf=\"addserviceCenterForm.controls['center_details'].length > 1\"\n                                (click)=\"removeDetails(i)\">Remove</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- template for add row end  -->\n            <div class=\"row clearfix\">\n                <div class=\" col-lg-3 col-md-3 col-lg-offset-8 col-md-offset-8 col-sm-offset-4 col-xs-offset-5\">\n                    <button type=\"submit\" class=\"btn btn-lg btn-success btn-block m-t-15 waves-effect\" [disabled]=\"!addserviceCenterForm.valid\">Submit</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/service-center-management/add-service-center/add-service-center.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddServiceCenterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_function_service__ = __webpack_require__("../../../../../src/app/_services/function.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddServiceCenterComponent = (function () {
    function AddServiceCenterComponent(userService, fb, functionService) {
        this.userService = userService;
        this.fb = fb;
        this.functionService = functionService;
    }
    AddServiceCenterComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get list of category
        this.userService.getCategoryList(2) // 2 for category refer to api doc
            .subscribe(function (getCat) {
            _this.cat = getCat;
            console.log(getCat, "category list");
        });
        // get list of detail type
        this.userService.getDetailList()
            .subscribe(function (detail_type) {
            _this.detailType = detail_type;
            console.log(_this.detailType);
        });
        // get list of detail type
        this.userService.getBrandList()
            .subscribe(function (brandList) {
            _this.brands = brandList;
            console.log(_this.detailType);
        });
        this.addserviceCenterForm = this.fb.group({
            'center_name': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'center_brands': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'center_city': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'center_state': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'center_pin': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'center_country': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'center_address': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'center_latitude': '',
            'center_longitude': '',
            'center_days': '',
            'center_timings': '',
            center_details: this.fb.array([this.createItem(),])
        });
    };
    AddServiceCenterComponent.prototype.createItem = function () {
        return this.fb.group({
            'category_id': '',
            'detail_type': '',
            'value': '',
        });
    };
    AddServiceCenterComponent.prototype.addItem = function () {
        var control = this.addserviceCenterForm.controls['center_details'];
        control.push(this.createItem());
    };
    AddServiceCenterComponent.prototype.removeDetails = function (i) {
        var control = this.addserviceCenterForm.controls['center_details'];
        control.removeAt(i);
    };
    AddServiceCenterComponent.prototype.createASC = function (data) {
        var _this = this;
        console.log(data);
        if (data.center_details.category_id == null) {
            data.center_details = [];
        }
        this.userService.createAuthorizedServiceCenter(data)
            .subscribe(function (res) {
            console.log(res);
            alert('New Service center added succesfully');
            _this.addserviceCenterForm.reset();
        }, function (error) {
            console.log(error);
            var err = JSON.parse(error['_body']);
            alert(err.reason);
        });
    };
    // function for avoid only space submit
    AddServiceCenterComponent.prototype.avoidSpace = function (e) {
        console.log(e);
        this.functionService.NoWhitespaceValidator(this.addserviceCenterForm, e);
    };
    return AddServiceCenterComponent;
}());
AddServiceCenterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-add-service-center',
        template: __webpack_require__("../../../../../src/app/dashboard/data-panel/service-center-management/add-service-center/add-service-center.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/data-panel/service-center-management/add-service-center/add-service-center.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_function_service__["a" /* FunctionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_function_service__["a" /* FunctionService */]) === "function" && _c || Object])
], AddServiceCenterComponent);

var _a, _b, _c;
//# sourceMappingURL=add-service-center.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/service-center-management/service-center-list/service-center-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pager{\n    text-align: right;\n}\n.disabled{\n    display: none;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/service-center-management/service-center-list/service-center-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"showASCList\">\n\t<div class=\"header\">\n\t\t<h2>\n\t\t\tAuthorized Service Center list\n\t\t\t<small> For change the Authorized Service Center details click on the edit button</small>\n\t\t</h2>\n\t</div>\n\t<div class=\"body table-responsive\">\n\t\t<nav>\n\t\t\t<ul class=\"pager\">\n\t\t\t\t<li [ngClass]=\"{ 'disabled': leftFlag }\"><a class=\"waves-effect\" (click)=\"left()\">Previous</a> </li>\n\t\t\t\t<li [ngClass]=\"{ 'disabled': rightFlag }\"><a class=\"waves-effect\" (click)=\"right()\">Next</a> </li>\n\t\t\t</ul>\n\t\t</nav>\n\t\t<table class=\"table table-condensed table-bordered\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>#</th>\n\t\t\t\t\t<th>Name</th>\n\t\t\t\t\t<th>Address</th>\n\t\t\t\t\t<th>City</th>\n\t\t\t\t\t<th>State</th>\n\t\t\t\t\t<th>Status</th>\n\t\t\t\t\t<th>Action</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody *ngFor=\"let list of authorizedServiceCenter?.data; let i = index\">\n\t\t\t\t<tr>\n\t\t\t\t\t<th scope=\"row\">{{ i+1+offset }}</th>\n\t\t\t\t\t<td>{{ list.center_name }}</td>\n\t\t\t\t\t<td>{{ list.center_address }}</td>\n\t\t\t\t\t<td>{{ list.center_city}}</td>\n\t\t\t\t\t<td>{{ list.center_state}}</td>\n\t\t\t\t\t<td *ngIf=\"list?.status_type=='1'\"><span class=\"label bg-green\">Active</span> </td>\n\t\t\t\t\t<td *ngIf=\"list?.status_type=='2'\"><span class=\"label bg-red\">InActive</span> </td>\n\t\t\t\t\t<td><span class=\"btn btn-info btn-circle waves-effect waves-circle waves-float\" (click)=\"openModel(list)\" title=\"Edit\"><i class=\"material-icons\" >mode_edit</i></span>\t\t\t\t\t\t<span class=\"btn btn-danger btn-circle waves-effect waves-circle waves-float\" (click)=\"deleteAuthorizedServiceCenter(list?.center_id)\"\n\t\t\t\t\t\t title=\"Delete\"><i class=\"material-icons\">delete</i></span> </td>\n\t\t\t\t\t<!-- <td><span class=\"btn btn-info btn-circle waves-effect waves-circle waves-float\" (click)=\"openModel(list)\" title=\"Edit\"><i class=\"material-icons\" >mode_edit</i></span></td> -->\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t\t<ng-template #elseBlock>\n\t\t\t<h4> No Data Available </h4>\n\t\t</ng-template>\n\t</div>\n</div>\n<!--form new -->\n<div class=\"card\" *ngIf=\"!showASCList\">\n\t<div class=\"modal-header\">\n\t\t<button class=\"btn bg-blue\" (click)=\"back()\">Back</button>\n\t\t<hr>\n\t\t<h4 class=\"modal-title\" id=\"smallModalLabel\">Edit Service Center</h4>\n\t</div>\n\t<div class=\"modal-body\">\n\t\t<form class=\"form-horizontal\" [formGroup]='authorizedServiceCenterForm' (ngSubmit)=\"updateAuthService(authorizedServiceCenterForm.value)\">\n\t\t\t<h4>\n\t\t\t\t<u>Information </u>\n\t\t\t</h4>\n\t\t\t<hr>\n\t\t\t<div class=\"row clearfix\">\n\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t<label for=\"name\">Name</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"center_name\" class=\"form-control\" placeholder=\"Enter Name  here\" (keyup)=\"avoidSpace(center_name)\">\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t<label for=\"name\">Select Brand</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<select class=\"form-control dropdown\" multiple>\n                    \t\t<option *ngFor=\"let brandList of brands?.data\" [ngValue]=\"brandList.brand_id\">{{ brandList.brand_name }}</option>\n                  \t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<h4>\n\t\t\t\t<u>Address </u>\n\t\t\t</h4>\n\t\t\t<hr>\n\t\t\t<div class=\"row clearfix\">\n\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t<label for=\"name\">Address</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"center_address\" class=\"form-control\" placeholder=\"Enter Address here\" (keyup)=\"avoidSpace('center_address')\">\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t<label for=\"name\">City</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"center_city\" class=\"form-control\" placeholder=\"Enter City Name here\" (keyup)=\"avoidSpace('center_city')\">\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row clearfix\">\n\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t<label for=\"name\">State</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"center_state\" class=\"form-control\" placeholder=\"Enter State Name here\" (keyup)=\"avoidSpace('center_state')\">\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t<label for=\"name\">Pin Code</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"center_pin\" class=\"form-control\" placeholder=\"Enter Pin Code here\" (keyup)=\"avoidSpace('center_pin')\">\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row clearfix\">\n\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t<label for=\"name\">Latitude</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"center_latitude\" class=\"form-control\" placeholder=\"Enter Latitude here\" (keyup)=\"avoidSpace('center_latitude')\">\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t<label for=\"name\">Longitude</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"center_longitude\" class=\"form-control\" placeholder=\"Enter Longitude here\" (keyup)=\"avoidSpace('center_longitude')\">\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row clearfix\">\n\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t<label for=\"name\">Country</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"center_country\" class=\"form-control\" placeholder=\"Enter Country Name here\" (keyup)=\"avoidSpace('center_country')\">\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row clearfix\">\n\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t<label for=\"name\">OpenDays</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"center_days\" class=\"form-control\" placeholder=\"Enter OpenDays  here\" (keyup)=\"avoidSpace('center_days')\">\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n\t\t\t\t\t<label for=\"name\">Timings</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-8 col-xs-7\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"center_timings\" class=\"form-control\" placeholder=\"Enter Timing here\" (keyup)=\"avoidSpace('center_timings')\">\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- template for add row  -->\n\t\t\t<h4>\n\t\t\t\t<u>Details </u>\n\t\t\t</h4>\n\t\t\t<div class=\"row clearfix\">\n\t\t\t\t<div class=\"pull-right margin-right\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-info m-t-15 waves-effect\" (click)=\"addItem()\">Add More Details</button>\n\t\t\t\t\t<p>&nbsp;</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t<div formArrayName=\"center_details\" *ngFor=\"let item of authorizedServiceCenterForm.controls.center_details['controls']; let i = index;\">\n\t\t\t\t\t<br>\n\t\t\t\t\t<div class=\"row clearfix\" [formGroupName]=\"i\">\n\t\t\t\t\t\t<div class=\"col-md-2 col-lg-2 col-md-offset-1\">\n\t\t\t\t\t\t\t<label> Category </label>\n\t\t\t\t\t\t\t<select class=\"form-control dropdown\" formControlName=\"category_id\">\n\t\t\t\t\t\t\t\t\t<option selected>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let list of cat?.data\" [ngValue]=\"list.category_id\">{{ list.category_name }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-6\">\n\t\t\t\t\t\t\t<label> Detail Type </label>\n\t\t\t\t\t\t\t<select class=\"form-control dropdown\" formControlName=\"detail_type\">\n\t\t\t\t\t\t\t\t\t<option selected>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let list of detailType?.data\" [ngValue]=\"list.id\">{{ list?.title }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6 \">\n\t\t\t\t\t\t\t<label> Value </label>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-line\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"value\" placeholder=\"Enter display name\"> </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-6\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger m-t-15 waves-effect\" *ngIf=\"authorizedServiceCenterForm.controls['center_details'].length > 1\"\n\t\t\t\t\t\t\t (click)=\"removeDetails(i);removeItem(item,authorizedServiceCenterForm.value)\">Remove</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- template for add row end  -->\n\t\t\t<div class=\"row clearfix\">\n\t\t\t\t<div class=\" col-lg-3 col-md-3 col-lg-offset-8 col-md-offset-8 col-sm-offset-4 col-xs-offset-5\">\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-lg btn-success btn-block m-t-15 waves-effect\" [disabled]=\"!authorizedServiceCenterForm.valid\">Submit</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/service-center-management/service-center-list/service-center-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceCenterListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_function_service__ = __webpack_require__("../../../../../src/app/_services/function.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServiceCenterListComponent = (function () {
    function ServiceCenterListComponent(userService, fb, functionService) {
        this.userService = userService;
        this.fb = fb;
        this.functionService = functionService;
        this.showDialog = false;
        this.offset = 0;
        this.leftFlag = true;
        this.rightFlag = false;
        this.noData = false;
        this.showASCList = true;
        this.center = [];
    }
    ServiceCenterListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get list of category
        this.userService.getCategoryList(2) // 2 for category refer to api doc
            .subscribe(function (getCat) {
            _this.cat = getCat;
            // console.log(getCat);
        });
        // get brand list
        this.userService.getBrandList()
            .subscribe(function (res) {
            _this.brands = res;
            console.log(_this.brands);
        });
        // this.userService.getBrandList()
        // .subscribe(brandList =>{
        //   this.brands = brandList;
        //   console.log(this.detailType);
        // })
        this.authorizedServiceCenterForm = this.fb.group({
            'center_id': '',
            'center_name': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'center_brands': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'center_address': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'center_city': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'center_state': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'center_pin': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'center_country': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'center_latitude': '',
            'center_longitude': '',
            'center_days': '',
            'center_timings': '',
            details: this.fb.array([this.createItem(),])
        });
        this.userService.getAuthorizedServiceCenterList(this.offset)
            .subscribe(function (authorizedServiceCenterList) {
            _this.authorizedServiceCenter = authorizedServiceCenterList;
            console.log(_this.authorizedServiceCenter, "asc");
        });
        // get list of detail type
        this.userService.getDetailList()
            .subscribe(function (detail_type) {
            _this.detailType = detail_type;
            console.log(_this.detailType);
        });
    };
    // function for add row in detials field
    ServiceCenterListComponent.prototype.createItem = function () {
        return this.fb.group({
            'id': '',
            'category_id': '',
            'detail_type': '',
            'value': '',
        });
    };
    ServiceCenterListComponent.prototype.addItem = function () {
        var control = this.authorizedServiceCenterForm.controls['center_details'];
        control.push(this.createItem());
    };
    ServiceCenterListComponent.prototype.removeDetails = function (i) {
        var control = this.authorizedServiceCenterForm.controls['center_details'];
        control.removeAt(i);
    };
    ServiceCenterListComponent.prototype.removeItem = function (item, data) {
        this.center = data.center_details;
        console.log(item, item['_value'], "catId");
        this.ascDetail = item['_value'];
        this.userService.removeAscDetails(this.ascDetail, this.center)
            .subscribe(function (res) {
            // console.log(res);
            alert('Detail deleted successfully');
        });
    };
    // passs current brand id as argument and open the popup
    ServiceCenterListComponent.prototype.openModel = function (item) {
        var _this = this;
        console.log(item);
        this.userService.getBrandList()
            .subscribe(function (brandList) {
            _this.brands = brandList;
            // console.log(this.brands, "brand hai bhia ye");
        });
        // reset  editBrand form
        this.authorizedServiceCenterForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            center_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            center_id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            center_brands: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormArray"]([]),
            center_address: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            center_city: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            center_state: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            center_country: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            center_pin: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            center_latitude: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            center_longitude: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            center_days: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            center_timings: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            center_details: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormArray"]([])
        });
        // get information of current selected brand
        this.userService.getAuthorizedServiceCenterByID(item.center_id)
            .subscribe(function (res) {
            // console.log(res, "bhai response")
            _this.showASCList = false; // for show dialog
            // prop autofill data to form
            _this.authorizedServiceCenterForm.controls['center_id'].setValue(res.data.center_id);
            _this.authorizedServiceCenterForm.controls['center_name'].setValue(res.data.center_name);
            // this.authorizedServiceCenterForm.controls['center_brands'].setValue(res.data.center_brands);
            _this.authorizedServiceCenterForm.controls['center_address'].setValue(res.data.center_address);
            _this.authorizedServiceCenterForm.controls['center_city'].setValue(res.data.center_city);
            _this.authorizedServiceCenterForm.controls['center_state'].setValue(res.data.center_state);
            _this.authorizedServiceCenterForm.controls['center_country'].setValue(res.data.center_country);
            _this.authorizedServiceCenterForm.controls['center_pin'].setValue(res.data.center_pin);
            _this.authorizedServiceCenterForm.controls['center_latitude'].setValue(res.data.center_latitude);
            _this.authorizedServiceCenterForm.controls['center_longitude'].setValue(res.data.center_longitude);
            _this.authorizedServiceCenterForm.controls['center_days'].setValue(res.data.center_days);
            _this.authorizedServiceCenterForm.controls['center_timings'].setValue(res.data.center_timings);
            res.data.details.forEach(function (po) {
                _this.authorizedServiceCenterForm.controls['center_details'].push(_this.createDetailsFormGroup(po));
            });
        });
    };
    ServiceCenterListComponent.prototype.createDetailsFormGroup = function (payOffObj) {
        // console.log(payOffObj, "payyoff obj")
        return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            category_id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](payOffObj.category_id),
            detail_type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](payOffObj.detail_type),
            value: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](payOffObj.value),
            id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](payOffObj.id)
        });
    };
    // update
    // updateOnlineSeller( asc: any) {
    //   // console.log(asc,"ssss");
    //   this.userService.updateAuthorizedServiceCenter(asc)
    //     .subscribe( res => {
    //       // console.log(res);
    //       alert('service center updated successfully');
    //       this.showDialog = false ;
    //       this.userService.getAuthorizedServiceCenterList() // list update after edit
    //         .subscribe(authorizedServiceCenterList => {
    //         this.authorizedServiceCenter = authorizedServiceCenterList;
    //       });
    //   });
    // }
    // delete ASC
    ServiceCenterListComponent.prototype.deleteAuthorizedServiceCenter = function (center_id) {
        var _this = this;
        this.userService.DeleteAuthorizedServiceCenter(center_id)
            .subscribe(function (res) {
            // console.log(res);
            alert('Authorization Service Center deleted successfully');
            _this.userService.getAuthorizedServiceCenterList(_this.offset) // list update after delete
                .subscribe(function (authorizedServiceCenterList) {
                _this.authorizedServiceCenter = authorizedServiceCenterList;
            });
        });
    };
    ServiceCenterListComponent.prototype.updateAuthService = function (data) {
        var _this = this;
        console.log(data, "bhia data");
        this.center = data.center_details;
        console.log(this.center, "ds");
        this.userService.updateAuthorizedServiceCenter(data, this.center)
            .subscribe(function (res) {
            console.log("response", res);
            _this.showDialog = false;
            alert("Updated successfully");
            _this.userService.getAuthorizedServiceCenterList(_this.offset) // list update after edit
                .subscribe(function (authorizedServiceCenterList) {
                _this.authorizedServiceCenter = authorizedServiceCenterList;
            }, function (err) {
                console.log(err);
            });
        }, function (error) {
            console.log(error, "error");
            var err = JSON.parse(error['_body']);
            alert(err.reason);
        });
    };
    // function for pagination
    ServiceCenterListComponent.prototype.left = function () {
        var _this = this;
        this.leftFlag = true;
        this.rightFlag = false;
        this.noData = false;
        if (this.offset > 1) {
            this.offset = this.offset - 100;
            this.leftFlag = false;
        }
        this.userService.getAuthorizedServiceCenterList(this.offset)
            .subscribe(function (authorizedServiceCenterList) {
            console.log(_this.authorizedServiceCenter);
            _this.rightFlag = false;
            _this.authorizedServiceCenter = authorizedServiceCenterList;
            console.log(_this.authorizedServiceCenter);
        });
    };
    ServiceCenterListComponent.prototype.right = function () {
        var _this = this;
        this.noData = false;
        this.leftFlag = false;
        this.offset = this.offset + 100;
        this.userService.getAuthorizedServiceCenterList(this.offset)
            .subscribe(function (authorizedServiceCenterList) {
            console.log(_this.authorizedServiceCenter);
            if (authorizedServiceCenterList.data.length == 0) {
                _this.rightFlag = true;
                _this.noData = true;
            }
            _this.authorizedServiceCenter = authorizedServiceCenterList;
            console.log(_this.authorizedServiceCenter);
        });
    };
    ServiceCenterListComponent.prototype.back = function () {
        this.showASCList = true;
    };
    ServiceCenterListComponent.prototype.avoidSpace = function (e) {
        console.log(e);
        if (e != undefined) {
            this.functionService.NoWhitespaceValidator(this.authorizedServiceCenterForm, e);
        }
    };
    return ServiceCenterListComponent;
}());
ServiceCenterListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-service-center-list',
        template: __webpack_require__("../../../../../src/app/dashboard/data-panel/service-center-management/service-center-list/service-center-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/data-panel/service-center-management/service-center-list/service-center-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_function_service__["a" /* FunctionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_function_service__["a" /* FunctionService */]) === "function" && _c || Object])
], ServiceCenterListComponent);

var _a, _b, _c;
//# sourceMappingURL=service-center-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/user-management/add-user/add-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown{\n    border-bottom:1px solid #ccc;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/user-management/add-user/add-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"header\">\n        <h2>\n            Add New User\n        </h2>\n    </div>\n    <!-- <pre>{{newUserForm.value | json}}</pre> -->\n    <div class=\"body\">\n        <form class=\"form-horizontal\" [formGroup]='newUserForm' (ngSubmit)=\"addNewUser(newUserForm.value)\">\n            <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"email_address_2\">Select User Type</label>\n                </div>\n                <div class=\"col-lg-10 col-md-10 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <select class=\"form-control dropdown\" formControlName=\"role_type\">\n                            <option [ngValue]=\"2\"> Admin</option>\n                            <option [ngValue]=\"3\"> Quality Executive</option>\n                            <option [ngValue]=\"4\"> Customer Executive</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"name\">Name</label>\n                </div>\n                <div class=\"col-lg-10 col-md-10 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Enter your name\">\n                        </div>\n                        <p class=\"text-danger\" *ngIf=\"!newUserForm.controls['name'].valid && newUserForm.controls['name'].touched\">Name is required</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"email_address_2\">Email ID</label>\n                </div>\n                <div class=\"col-lg-10 col-md-10 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <input type=\"text\" class=\"form-control\" formControlName=\"email\" placeholder=\"Enter your email address\" required>\n                        </div>\n                        <p class=\"text-danger\" *ngIf=\"!newUserForm.controls['email'].valid && newUserForm.controls['email'].touched\">email is required</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label\">\n                    <label for=\"password_2\">password</label>\n                </div>\n                <div class=\"col-lg-10 col-md-10 col-sm-8 col-xs-7\">\n                    <div class=\"form-group\">\n                        <div class=\"form-line\">\n                            <input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Enter your password\" required>\n                        </div>\n                        <p class=\"text-danger\" *ngIf=\"!newUserForm.controls['password'].valid && newUserForm.controls['password'].touched\">password is required</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row clearfix\">\n                <div class=\"col-lg-offset-2 col-md-offset-2 col-sm-offset-4 col-xs-offset-5\">\n                    <input type=\"submit\" value=\"SUBMIT\" class=\"btn btn-primary m-t-15 waves-effect\" [disabled]=\"!newUserForm.valid\">\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/user-management/add-user/add-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddUserComponent = (function () {
    function AddUserComponent(userService, fb) {
        this.userService = userService;
        this.fb = fb;
        this.UserType = '';
        this.name = '';
        this.email = '';
        this.password = '';
        // form validators
        this.newUserForm = this.fb.group({
            'role_type': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'name': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
    }
    AddUserComponent.prototype.ngOnInit = function () {
    };
    AddUserComponent.prototype.addNewUser = function (post) {
        var _this = this;
        console.log(post);
        this.userService.createUser(post)
            .subscribe(function (data) {
            console.log(data);
            if (data.success == true) {
                alert('User successfully added !!');
                _this.newUserForm.reset();
            }
        }, function (error) {
            console.log(error);
            var err = JSON.parse(error['_body']);
            alert(err.reason);
        });
    };
    return AddUserComponent;
}());
AddUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-add-user',
        template: __webpack_require__("../../../../../src/app/dashboard/data-panel/user-management/add-user/add-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/data-panel/user-management/add-user/add-user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object])
], AddUserComponent);

var _a, _b;
//# sourceMappingURL=add-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/user-management/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown{\n    border-bottom:1px solid #ccc;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/user-management/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"header\">\n        <h2>\n            List of Admins\n            <small> For change the admin details click on the edit button</small>\n        </h2>\n    </div>\n    <div class=\"body table-responsive\">\n        <table class=\"table table-condensed\">\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Name</th>\n                    <th>Email ID</th>\n                    <th>Status</th>\n                    <th>Action</th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody *ngFor=\"let user of users?.data; let i=index\">\n                <tr>\n                    <th scope=\"row\">{{ i+1 }} </th>\n                    <td>{{ user?.full_name}}</td>\n                    <td>{{ user?.email}}</td>\n                    <td *ngIf=\"user?.user_status_type=='1'\"><span class=\"label bg-green\">Active</span></td>\n                    <td *ngIf=\"user?.user_status_type=='2'\"><span class=\"label bg-red\">InActive</span></td>                    \n                    <td><span class=\"btn btn-info btn-circle waves-effect waves-circle waves-float\" (click)=\"openUserModel(user)\" title=\"Edit\"><i class=\"material-icons\" >mode_edit</i></span>  <span class=\"btn btn-danger btn-circle waves-effect waves-circle waves-float\" (click)=\"deleteUser(user)\" title=\"Delete\"><i class=\"material-icons\">delete</i></span></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <app-dialog [(visible)]=\"showDialog\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"smallModalLabel\">Edit User</h4>\n        </div>\n        <div class=\"modal-body\">\n            <form class=\"form-horizontal\" [formGroup]='editUserForm' (ngSubmit) = \"updateUser(editUserForm.value)\">\n                <div class=\"row clearfix\">\n                    <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                        <label for=\"email_address_2\">User Type</label>\n                    </div>\n                    <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n                        <div class=\"form-group\">\n                            <select class=\"form-control dropdown\" formControlName=\"role_type\">\n                                <option [ngValue]=\"2\"> Admin</option>\n                                <option [ngValue]=\"3\"> Quality Executive</option>\n                                <option [ngValue]=\"4\"> Customer Executive</option>\n                            </select>\n                        </div>\n                    </div>  \n                </div>\n                <div class=\"row clearfix\">\n                    <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                        <label for=\"name\">Name</label>\n                    </div>\n                    <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n                        <div class=\"form-group\">\n                            <div class=\"form-line\">\n                                <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Enter your name\">\n                            </div>\n                            <p class=\"text-danger\" *ngIf=\"!editUserForm.controls['name'].valid && editUserForm.controls['name'].touched\">Name is required</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row clearfix\">\n                    <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                        <label for=\"email_address_2\">Email ID</label>\n                    </div>\n                    <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n                        <div class=\"form-group\">\n                            <div class=\"form-line\">\n                                <input type=\"text\" class=\"form-control\" formControlName=\"email\" placeholder=\"Enter your email address\" required>\n                            </div>\n                            <p class=\"text-danger\" *ngIf=\"!editUserForm.controls['email'].valid && editUserForm.controls['email'].touched\">email is required</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row clearfix\">\n                    <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                        <label for=\"password_2\">Password</label>\n                    </div>\n                    <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n                        <div class=\"form-group\">\n                            <div class=\"form-line\">\n                                <input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Enter your password\">\n                            </div>\n                            <!-- <p class=\"text-danger\" *ngIf=\"!editUserForm.controls['Password'].valid && editUserForm.controls['Password'].touched\">Password is required</p> -->\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row clearfix\">\n                    <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                        <label for=\"status\">Status</label>\n                    </div>\n                    <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n                        <div class=\"form-group\">\n                        <select class=\"form-control dropdown\" formControlName=\"user_status_type\">\n                            <!-- <option>Please Select</option> -->\n                            <option [ngValue]=\"1\">Active</option>\n                            <option [ngValue]=\"2\">Inactive</option>\n                        </select>\n                        </div>\n                    </div>  \n                </div>\n                <div class=\"row clearfix\">\n                    <div class=\"col-lg-offset-9 col-md-offset-9 col-sm-offset-4 col-xs-offset-5\">\n                        <input type=\"submit\" value=\"Save Changes\" class=\"btn btn-success  m-t-15 waves-effect\" [disabled]=\"!editUserForm.valid\" >\n                    </div>\n                </div>\n            </form>\n        </div>\n        <!-- <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-link waves-effect\">SAVE CHANGES</button>\n            <button (click)=\"showDialog = !showDialog\" type=\"button\" class=\"btn btn-link waves-effect\" data-dismiss=\"modal\">CLOSE</button>\n        </div> -->\n        <!-- <button (click)=\"showDialog = !showDialog\" class=\"btn\">Close</button> -->\n    </app-dialog>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/user-management/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = (function () {
    function AdminComponent(userService, fb) {
        this.userService = userService;
        this.fb = fb;
        this.item = {}; // object for single user
        this.del = {};
        this.showDialog = false;
        this.name = '';
        this.editUserForm = this.fb.group({
            'role_type': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'name': null,
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'user_status_type': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'id': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'password': null
        });
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get list of admin
        this.userService.getUserList(2) // 2 for admin refer to api doc
            .subscribe(function (users) {
            _this.users = users;
            console.log(users);
        }, (function (error) {
            console.log(error);
        }));
    };
    // passs current user as argument and open the popup
    AdminComponent.prototype.openUserModel = function (item) {
        console.log(item);
        this.showDialog = true; // for show dialog
        this.item = item;
        if (item.user_status_type === 'Active') {
            this.statusCode = 1;
        }
        else {
            this.statusCode = 2;
        }
        // populate prefilled value in form
        this.editUserForm.setValue({
            role_type: 2,
            name: item.full_name,
            email: item.email,
            user_status_type: item.user_status_type,
            id: item.id,
            password: null
        });
    };
    AdminComponent.prototype.updateUser = function (user) {
        var _this = this;
        console.log(user);
        this.userService.updateUser(user)
            .subscribe(function (res) {
            // console.log(res);
            alert('User updated successfully');
            _this.showDialog = false;
            _this.userService.getUserList(2) // list update after edit
                .subscribe(function (users) {
                _this.users = users;
                // console.log(users);
            });
        }, function (error) {
            console.log(error);
            var err = JSON.parse(error['_body']);
            alert(err.reason);
        });
    };
    AdminComponent.prototype.deleteUser = function (user) {
        var _this = this;
        console.log(user);
        this.userService.deleteUser(user.id)
            .subscribe(function (res) {
            console.log(res);
            if (res.status == 204) {
                alert("Deleted Successfully");
                _this.userService.getUserList(2) // list update after edit
                    .subscribe(function (users) {
                    _this.users = users;
                });
            }
        }),
            (function (error) {
                console.log(error);
            });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/dashboard/data-panel/user-management/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/data-panel/user-management/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object])
], AdminComponent);

var _a, _b;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/user-management/ce/ce.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/user-management/ce/ce.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"header\">\n        <h2>\n            List of Customer Executive\n            <small> For change the Customer Executive details click on the edit button</small>\n        </h2>\n    </div>\n    <div class=\"body table-responsive\">\n        <table class=\"table table-condensed\">\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Name</th>\n                    <th>Email ID</th>\n                    <th>Status</th>\n                    <th>Action</th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody *ngFor=\"let user of users?.data; let i = index\">\n                <tr>\n                    <th scope=\"row\">{{ i+1 }} </th>\n                    <td>{{ user?.full_name}}</td>\n                    <td>{{ user?.email}}</td>\n                    <td *ngIf=\"user?.user_status_type=='1'\"><span class=\"label bg-green\">Active</span></td>\n                    <td *ngIf=\"user?.user_status_type=='2'\"><span class=\"label bg-red\">InActive</span></td>     \n                    <td><span class=\"btn btn-info btn-circle waves-effect waves-circle waves-float\" (click)=\"openUserModel(user)\" title=\"Edit\"><i class=\"material-icons\" >mode_edit</i></span>  <span class=\"btn btn-danger btn-circle waves-effect waves-circle waves-float\" (click)=\"deleteUser(user)\" title=\"Delete\"><i class=\"material-icons\">delete</i></span></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <app-dialog [(visible)]=\"showDialog\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"smallModalLabel\">Edit User</h4>\n        </div>\n        <div class=\"modal-body\">\n            <form class=\"form-horizontal\" [formGroup]='editUserForm' (ngSubmit) = \"updateUser(editUserForm.value)\">\n                <div class=\"row clearfix\">\n                    <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                        <label for=\"email_address_2\">User Type</label>\n                    </div>\n                    <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n                        <div class=\"form-group\">\n                        <select class=\"form-control dropdown\" formControlName=\"role_type\">\n                            <!-- <option>Please Select</option> -->\n                            <option [ngValue]=\"2\"> Admin</option>\n                            <option [ngValue]=\"3\"> Quality Executive</option>\n                            <option [ngValue]=\"4\"> Customer Executive</option>    \n                        </select>\n                        </div>\n                    </div>  \n                </div>\n                <div class=\"row clearfix\">\n                    <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                        <label for=\"name\">Name</label>\n                    </div>\n                    <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n                        <div class=\"form-group\">\n                            <div class=\"form-line\">\n                                <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Enter your name\">\n                            </div>\n                            <p class=\"text-danger\" *ngIf=\"!editUserForm.controls['name'].valid && editUserForm.controls['name'].touched\">Name is required</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row clearfix\">\n                    <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                        <label for=\"email_address_2\">Email ID</label>\n                    </div>\n                    <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n                        <div class=\"form-group\">\n                            <div class=\"form-line\">\n                                <input type=\"text\" class=\"form-control\" formControlName=\"email\" placeholder=\"Enter your email address\" required>\n                            </div>\n                            <p class=\"text-danger\" *ngIf=\"!editUserForm.controls['email'].valid && editUserForm.controls['email'].touched\">EmailID is required</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row clearfix\">\n                    <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                        <label for=\"password_2\">Password</label>\n                    </div>\n                    <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n                        <div class=\"form-group\">\n                            <div class=\"form-line\">\n                                <input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Enter your password\">\n                            </div>\n                            <!-- <p class=\"text-danger\" *ngIf=\"!editUserForm.controls['Password'].valid && editUserForm.controls['Password'].touched\">Password is required</p> -->\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row clearfix\">\n                    <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                        <label for=\"status\">Status</label>\n                    </div>\n                    <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n                        <div class=\"form-group\">\n                        <select class=\"form-control dropdown\" formControlName=\"user_status_type\">\n                            <!-- <option>Please Select</option> -->\n                            <option [ngValue]=\"1\">Active</option>\n                            <option [ngValue]=\"2\">Inactive</option>\n                        </select>\n                        </div>\n                    </div>  \n                </div>\n                <div class=\"row clearfix\">\n                    <div class=\"col-lg-offset-9 col-md-offset-9 col-sm-offset-4 col-xs-offset-5\">\n                        <input type=\"submit\" value=\"Save Changes\" class=\"btn btn-success  m-t-15 waves-effect\" [disabled]=\"!editUserForm.valid\" >\n                    </div>\n                </div>\n            </form>\n        </div>\n        <!-- <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-link waves-effect\">SAVE CHANGES</button>\n            <button (click)=\"showDialog = !showDialog\" type=\"button\" class=\"btn btn-link waves-effect\" data-dismiss=\"modal\">CLOSE</button>\n        </div> -->\n        <!-- <button (click)=\"showDialog = !showDialog\" class=\"btn\">Close</button> -->\n    </app-dialog>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/user-management/ce/ce.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CeComponent = (function () {
    function CeComponent(userService, fb) {
        this.userService = userService;
        this.fb = fb;
        this.item = {}; // object for single user
        this.del = {};
        this.showDialog = false;
        this.name = '';
        this.editUserForm = this.fb.group({
            'role_type': [null, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required],
            'name': null,
            'email': [null, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required],
            'user_status_type': [null, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required],
            'id': [null, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required],
            'password': null
        });
    }
    CeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get list of ce
        this.userService.getUserList(4) // 4 for ce refer to api doc
            .subscribe(function (users) {
            _this.users = users;
            console.log(users);
        }, (function (error) {
            console.log(error);
        }));
    };
    // passs current user as argument and open the popup
    CeComponent.prototype.openUserModel = function (item) {
        console.log(item);
        this.showDialog = true; // for show dialog
        this.item = item;
        if (item.user_status_type === 'Active') {
            this.statusCode = 1;
        }
        else {
            this.statusCode = 2;
        }
        // populate prefilled value in form
        this.editUserForm.setValue({
            role_type: 4,
            name: item.full_name,
            email: item.email,
            user_status_type: item.user_status_type,
            id: item.id,
            password: null
        });
    };
    CeComponent.prototype.updateUser = function (user) {
        var _this = this;
        console.log(user);
        this.userService.updateUser(user)
            .subscribe(function (res) {
            // console.log(res);
            alert('User updated successfully');
            _this.showDialog = false;
            _this.userService.getUserList(4) // list update after edit
                .subscribe(function (users) {
                _this.users = users;
                // console.log(users);
            });
        }, function (error) {
            console.log(error);
            var err = JSON.parse(error['_body']);
            alert(err.reason);
        });
    };
    CeComponent.prototype.deleteUser = function (user) {
        var _this = this;
        console.log(user);
        this.userService.deleteUser(user.id)
            .subscribe(function (res) {
            console.log(res);
            if (res.status == 204) {
                alert("Deleted Successfully");
                _this.userService.getUserList(4) // list update after edit
                    .subscribe(function (users) {
                    _this.users = users;
                });
            }
        }),
            (function (error) {
                console.log(error);
            });
    };
    return CeComponent;
}());
CeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-ce',
        template: __webpack_require__("../../../../../src/app/dashboard/data-panel/user-management/ce/ce.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/data-panel/user-management/ce/ce.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormBuilder"]) === "function" && _b || Object])
], CeComponent);

var _a, _b;
//# sourceMappingURL=ce.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/user-management/customer/customer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pager{\n    text-align: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/user-management/customer/customer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n        <div class=\"header\">\n            <h2>\n                List of Customers\n                <small> For change the Customer details click on the edit button</small>\n            </h2>\n        </div>\n        <div class=\"body table-responsive\">\n            <nav>\n                <ul class=\"pager\">\n                    <li [ngClass]=\"{ 'disabled': leftFlag }\"><a class=\"waves-effect\" (click)=\"left()\" >Previous</a></li>\n                    <li [ngClass]=\"{ 'disabled': rightFlag }\"><a class=\"waves-effect\" (click)=\"right()\">Next</a></li>\n                </ul>\n            </nav>\n            <table class=\"table table-condensed\" *ngIf=\"!noData; else elseBlock\">\n                <thead>\n                    <tr>\n                        <th>#</th>\n                        <th>Name</th>\n                        <th>Email ID</th>\n                        <th>Phone </th>\n                        <th>Status</th>\n                        <th>Action</th>\n                        <th></th>\n                    </tr>\n                </thead>\n                <tbody *ngFor=\"let user of users?.ConsumerList; let i = index\">\n                    <tr>\n                        <th scope=\"row\">{{ i+1 }} </th>\n                        <td>{{ user.Name}}</td>\n                        <td>{{ user.EmailID}}</td>\n                        <td>{{user.PhoneNo}}</td>\n                        <td><span class=\"label bg-green\">{{ user.Status }}</span></td>\n                        <td> <span class=\"btn btn-danger btn-circle waves-effect waves-circle waves-float\" (click)=\"deleteUser(user)\" title=\"Delete\"><i class=\"material-icons\">delete</i></span></td>\n                    </tr>\n                </tbody>\n            </table>\n            <ng-template #elseBlock>\n                    <h4> No Data Available </h4>\n                   </ng-template>\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/user-management/customer/customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerComponent = (function () {
    function CustomerComponent(userService) {
        this.userService = userService;
        this.item = {}; // object for single user
        this.del = {};
        this.showDialog = false;
        this.name = '';
        this.prev = 0;
        this.next = 10;
        this.leftFlag = true;
        this.rightFlag = false;
        this.noData = false;
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get list of ce
        this.userService.getConsumerList(this.prev, this.next)
            .subscribe(function (users) {
            _this.users = users;
            console.log(users);
        });
        // get dropdown list
        this.userService.getAllUser()
            .subscribe(function (users) {
            _this.dropdownUser = users;
            console.log(users);
        });
    };
    CustomerComponent.prototype.deleteUser = function (user) {
        var _this = this;
        console.log(user);
        this.del = { 'ID': user.ID };
        this.userService.deleteUser(this.del)
            .subscribe(function (res) {
            console.log(res);
            alert('Deleted');
            _this.userService.getConsumerList(_this.prev, _this.next)
                .subscribe(function (users) {
                _this.users = users;
                // console.log(users);
            });
        });
    };
    // function for pagination
    CustomerComponent.prototype.left = function () {
        var _this = this;
        this.noData = false;
        this.prev = this.prev - 10;
        if (this.prev == 0) {
            this.leftFlag = true;
        }
        this.userService.getConsumerList(this.prev, this.next)
            .subscribe(function (users) {
            console.log(users.statusCode);
            if (users.statusCode == 100) {
                _this.rightFlag = false;
            }
            _this.users = users;
            console.log(_this.users);
        });
    };
    CustomerComponent.prototype.right = function () {
        var _this = this;
        this.noData = false;
        this.leftFlag = false;
        this.prev = this.prev + 10;
        console.log(this.prev);
        console.log(this.next);
        this.userService.getConsumerList(this.prev, this.next)
            .subscribe(function (users) {
            console.log(users.statusCode);
            if (users.statusCode == 105) {
                _this.rightFlag = true;
                _this.noData = true;
            }
            _this.users = users;
            console.log(_this.users);
        });
    };
    return CustomerComponent;
}());
CustomerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-customer',
        template: __webpack_require__("../../../../../src/app/dashboard/data-panel/user-management/customer/customer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/data-panel/user-management/customer/customer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], CustomerComponent);

var _a;
//# sourceMappingURL=customer.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/user-management/qe/qe.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/user-management/qe/qe.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"header\">\n        <h2>\n            List of Quality Executive\n            <small> For change the Customer Executive details click on the edit button</small>\n        </h2>\n    </div>\n    <div class=\"body table-responsive\">\n        <table class=\"table table-condensed\">\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Name</th>\n                    <th>Email ID</th>\n                    <th>Status</th>\n                    <th>Action</th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody *ngFor=\"let user of users?.data; let i = index\">\n                <tr>\n                    <th scope=\"row\">{{ i+1 }} </th>\n                    <td>{{ user?.full_name}}</td>\n                    <td>{{ user?.email}}</td>\n                    <td *ngIf=\"user?.user_status_type=='1'\"><span class=\"label bg-green\">Active</span></td>\n                    <td *ngIf=\"user?.user_status_type=='2'\"><span class=\"label bg-red\">InActive</span></td>     \n                    <td><span class=\"btn btn-info btn-circle waves-effect waves-circle waves-float\" (click)=\"openUserModel(user)\" title=\"Edit\"><i class=\"material-icons\" >mode_edit</i></span>  <span class=\"btn btn-danger btn-circle waves-effect waves-circle waves-float\" (click)=\"deleteUser(user)\" title=\"Delete\"><i class=\"material-icons\">delete</i></span></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <app-dialog [(visible)]=\"showDialog\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"smallModalLabel\">Edit User</h4>\n        </div>\n        <div class=\"modal-body\">\n            <form class=\"form-horizontal\" [formGroup]='editUserForm' (ngSubmit) = \"updateUser(editUserForm.value)\">\n                <div class=\"row clearfix\">\n                    <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                        <label for=\"email_address_2\">User Type</label>\n                    </div>\n                    <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n                        <div class=\"form-group\">\n                            <select class=\"form-control dropdown\" formControlName=\"role_type\">\n                                <!-- <option>Please Select</option> -->\n                                <option [ngValue]=\"2\"> Admin</option>\n                                <option [ngValue]=\"3\"> Quality Executive</option>\n                                <option [ngValue]=\"4\"> Customer Executive</option>    \n                            </select>\n                        </div>\n                    </div>  \n                </div>\n                <div class=\"row clearfix\">\n                    <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                        <label for=\"name\">Name</label>\n                    </div>\n                    <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n                        <div class=\"form-group\">\n                            <div class=\"form-line\">\n                                <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Enter your name\">\n                            </div>\n                            <p class=\"text-danger\" *ngIf=\"!editUserForm.controls['name'].valid && editUserForm.controls['name'].touched\">Name is required</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row clearfix\">\n                    <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                        <label for=\"email_address_2\">Email ID</label>\n                    </div>\n                    <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n                        <div class=\"form-group\">\n                            <div class=\"form-line\">\n                                <input type=\"text\" class=\"form-control\" formControlName=\"email\" placeholder=\"Enter your email address\" required>\n                            </div>\n                            <p class=\"text-danger\" *ngIf=\"!editUserForm.controls['email'].valid && editUserForm.controls['email'].touched\">EmailID is required</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row clearfix\">\n                    <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                        <label for=\"password_2\">Password</label>\n                    </div>\n                    <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n                        <div class=\"form-group\">\n                            <div class=\"form-line\">\n                                <input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Enter your password\">\n                            </div>\n                            <!-- <p class=\"text-danger\" *ngIf=\"!editUserForm.controls['Password'].valid && editUserForm.controls['Password'].touched\">Password is required</p> -->\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row clearfix\">\n                    <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5 form-control-label\">\n                        <label for=\"status\">Status</label>\n                    </div>\n                    <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-7\">\n                        <div class=\"form-group\">\n                        <select class=\"form-control dropdown\" formControlName=\"user_status_type\">\n                            <!-- <option>Please Select</option> -->\n                            <option [ngValue]=\"1\">Active</option>\n                            <option [ngValue]=\"2\">Inactive</option>\n                        </select>\n                        </div>\n                    </div>  \n                </div>\n                <div class=\"row clearfix\">\n                    <div class=\"col-lg-offset-9 col-md-offset-9 col-sm-offset-4 col-xs-offset-5\">\n                        <input type=\"submit\" value=\"Save Changes\" class=\"btn btn-success  m-t-15 waves-effect\" [disabled]=\"!editUserForm.valid\" >\n                    </div>\n                </div>\n            </form>\n        </div>\n        <!-- <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-link waves-effect\">SAVE CHANGES</button>\n            <button (click)=\"showDialog = !showDialog\" type=\"button\" class=\"btn btn-link waves-effect\" data-dismiss=\"modal\">CLOSE</button>\n        </div> -->\n        <!-- <button (click)=\"showDialog = !showDialog\" class=\"btn\">Close</button> -->\n    </app-dialog>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/data-panel/user-management/qe/qe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QeComponent = (function () {
    function QeComponent(userService, fb) {
        this.userService = userService;
        this.fb = fb;
        this.item = {}; // object for single user
        this.del = {};
        this.showDialog = false;
        this.name = '';
        this.editUserForm = this.fb.group({
            'role_type': [null, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required],
            'name': null,
            'email': [null, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required],
            'user_status_type': [null, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required],
            'id': [null, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required],
            'password': null
        });
    }
    QeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get list of admin
        this.userService.getUserList(3) // 3 for QE refer to api doc
            .subscribe(function (users) {
            _this.users = users;
            console.log(users);
        }, (function (error) {
            console.log(error);
        }));
        // get dropdown list
    };
    // passs current user as argument and open the popup
    QeComponent.prototype.openUserModel = function (item) {
        console.log(item);
        this.showDialog = true; // for show dialog
        this.item = item;
        if (item.user_status_type === 'Active') {
            this.statusCode = 1;
        }
        else {
            this.statusCode = 2;
        }
        // populate prefilled value in form
        this.editUserForm.setValue({
            role_type: 3,
            name: item.full_name,
            email: item.email,
            user_status_type: item.user_status_type,
            id: item.id,
            password: null
        });
    };
    QeComponent.prototype.updateUser = function (user) {
        var _this = this;
        console.log(user);
        this.userService.updateUser(user)
            .subscribe(function (res) {
            // console.log(res);
            alert('User updated successfully');
            _this.showDialog = false;
            _this.userService.getUserList(3) // list update after edit
                .subscribe(function (users) {
                _this.users = users;
                // console.log(users);
            });
        }, function (error) {
            console.log(error);
            var err = JSON.parse(error['_body']);
            alert(err.reason);
        });
    };
    QeComponent.prototype.deleteUser = function (user) {
        var _this = this;
        console.log(user);
        this.userService.deleteUser(user.id)
            .subscribe(function (res) {
            console.log(res);
            if (res.status == 204) {
                alert("Deleted Successfully");
                _this.userService.getUserList(3) // list update after edit
                    .subscribe(function (users) {
                    _this.users = users;
                });
            }
        }),
            (function (error) {
                console.log(error);
            });
    };
    return QeComponent;
}());
QeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-qe',
        template: __webpack_require__("../../../../../src/app/dashboard/data-panel/user-management/qe/qe.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/data-panel/user-management/qe/qe.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormBuilder"]) === "function" && _b || Object])
], QeComponent);

var _a, _b;
//# sourceMappingURL=qe.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar{\n    /* z-index: 99999 !important; */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <!-- Overlay For Sidebars -->\n    <div class=\"overlay\"></div>\n    <!-- #END# Overlay For Sidebars -->\n    <!-- Search Bar -->\n    <div class=\"search-bar\">\n        <div class=\"search-icon\">\n            <i class=\"material-icons\">search</i>\n        </div>\n        <input type=\"text\" placeholder=\"START TYPING...\">\n        <div class=\"close-search\">\n            <i class=\"material-icons\">close</i>\n        </div>\n    </div>\n    <!-- #END# Search Bar -->\n    <!-- Top Bar -->\n    <nav class=\"navbar\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n                <a href=\"javascript:void(0);\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\" aria-expanded=\"false\"></a>\n                <a href=\"javascript:void(0);\" class=\"bars\"></a>\n                <a class=\"navbar-brand\" href=\"index.html\"><b>BinBill Admin Panel</b></a>\n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <!-- Call Search -->\n                    <li><a href=\"javascript:void(0);\" class=\"js-search\" data-close=\"true\"><i class=\"material-icons\">search</i></a></li>\n                    <!-- #END# Call Search -->\n                    <!-- Notifications -->\n                    <li class=\"dropdown\">\n                        <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\">\n                            <i class=\"material-icons\">notifications</i>\n                            <span class=\"label-count\">7</span>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li class=\"header\">NOTIFICATIONS</li>\n                            <li class=\"body\">\n                                <ul class=\"menu\">\n                                    <li>\n                                        <a href=\"javascript:void(0);\">\n                                            <div class=\"icon-circle bg-light-green\">\n                                                <i class=\"material-icons\">person_add</i>\n                                            </div>\n                                            <div class=\"menu-info\">\n                                                <h4>12 new members joined</h4>\n                                                <p>\n                                                    <i class=\"material-icons\">access_time</i> 14 mins ago\n                                                </p>\n                                            </div>\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a href=\"javascript:void(0);\">\n                                            <div class=\"icon-circle bg-cyan\">\n                                                <i class=\"material-icons\">add_shopping_cart</i>\n                                            </div>\n                                            <div class=\"menu-info\">\n                                                <h4>4 sales made</h4>\n                                                <p>\n                                                    <i class=\"material-icons\">access_time</i> 22 mins ago\n                                                </p>\n                                            </div>\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a href=\"javascript:void(0);\">\n                                            <div class=\"icon-circle bg-red\">\n                                                <i class=\"material-icons\">delete_forever</i>\n                                            </div>\n                                            <div class=\"menu-info\">\n                                                <h4><b>Nancy Doe</b> deleted account</h4>\n                                                <p>\n                                                    <i class=\"material-icons\">access_time</i> 3 hours ago\n                                                </p>\n                                            </div>\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a href=\"javascript:void(0);\">\n                                            <div class=\"icon-circle bg-orange\">\n                                                <i class=\"material-icons\">mode_edit</i>\n                                            </div>\n                                            <div class=\"menu-info\">\n                                                <h4><b>Nancy</b> changed name</h4>\n                                                <p>\n                                                    <i class=\"material-icons\">access_time</i> 2 hours ago\n                                                </p>\n                                            </div>\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a href=\"javascript:void(0);\">\n                                            <div class=\"icon-circle bg-blue-grey\">\n                                                <i class=\"material-icons\">comment</i>\n                                            </div>\n                                            <div class=\"menu-info\">\n                                                <h4><b>John</b> commented your post</h4>\n                                                <p>\n                                                    <i class=\"material-icons\">access_time</i> 4 hours ago\n                                                </p>\n                                            </div>\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a href=\"javascript:void(0);\">\n                                            <div class=\"icon-circle bg-light-green\">\n                                                <i class=\"material-icons\">cached</i>\n                                            </div>\n                                            <div class=\"menu-info\">\n                                                <h4><b>John</b> updated status</h4>\n                                                <p>\n                                                    <i class=\"material-icons\">access_time</i> 3 hours ago\n                                                </p>\n                                            </div>\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a href=\"javascript:void(0);\">\n                                            <div class=\"icon-circle bg-purple\">\n                                                <i class=\"material-icons\">settings</i>\n                                            </div>\n                                            <div class=\"menu-info\">\n                                                <h4>Settings updated</h4>\n                                                <p>\n                                                    <i class=\"material-icons\">access_time</i> Yesterday\n                                                </p>\n                                            </div>\n                                        </a>\n                                    </li>\n                                </ul>\n                            </li>\n                            <li class=\"footer\">\n                                <a href=\"javascript:void(0);\">View All Notifications</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <!-- #END# Notifications -->\n                    <!-- Tasks -->\n                    <li class=\"dropdown\">\n                        <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\">\n                            <i class=\"material-icons\">flag</i>\n                            <span class=\"label-count\">9</span>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li class=\"header\">TASKS</li>\n                            <li class=\"body\">\n                                <ul class=\"menu tasks\">\n                                    <li>\n                                        <a href=\"javascript:void(0);\">\n                                            <h4>\n                                                Footer display issue\n                                                <small>32%</small>\n                                            </h4>\n                                            <div class=\"progress\">\n                                                <div class=\"progress-bar bg-pink\" role=\"progressbar\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 32%\">\n                                                </div>\n                                            </div>\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a href=\"javascript:void(0);\">\n                                            <h4>\n                                                Make new buttons\n                                                <small>45%</small>\n                                            </h4>\n                                            <div class=\"progress\">\n                                                <div class=\"progress-bar bg-cyan\" role=\"progressbar\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 45%\">\n                                                </div>\n                                            </div>\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a href=\"javascript:void(0);\">\n                                            <h4>\n                                                Create new dashboard\n                                                <small>54%</small>\n                                            </h4>\n                                            <div class=\"progress\">\n                                                <div class=\"progress-bar bg-teal\" role=\"progressbar\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 54%\">\n                                                </div>\n                                            </div>\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a href=\"javascript:void(0);\">\n                                            <h4>\n                                                Solve transition issue\n                                                <small>65%</small>\n                                            </h4>\n                                            <div class=\"progress\">\n                                                <div class=\"progress-bar bg-orange\" role=\"progressbar\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 65%\">\n                                                </div>\n                                            </div>\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a href=\"javascript:void(0);\">\n                                            <h4>\n                                                Answer GitHub questions\n                                                <small>92%</small>\n                                            </h4>\n                                            <div class=\"progress\">\n                                                <div class=\"progress-bar bg-purple\" role=\"progressbar\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 92%\">\n                                                </div>\n                                            </div>\n                                        </a>\n                                    </li>\n                                </ul>\n                            </li>\n                            <li class=\"footer\">\n                                <a href=\"javascript:void(0);\">View All Tasks</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <!-- #END# Tasks -->\n                </ul>\n            </div>\n        </div>\n    </nav>\n    <!-- #Top Bar -->"

/***/ }),

/***/ "../../../../../src/app/dashboard/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
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

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/dashboard/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/left-panel/left-panel-items/left-panel-items.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".display {\n    display: block !important\n}\n.scroll{\n    height: 60vh;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/left-panel/left-panel-items/left-panel-items.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"menu scroll\">\n    <ul class=\"list\">\n        <li class=\"header\">MAIN NAVIGATION</li>\n        <li *ngFor=\"let item of LeftPanelItems\" routerLinkActive=\"active\">\n            <a routerLink=\"{{ item.link }}\" class=\"{{ item.class }}\" (click)=\"this[item.handler](item)\" [ngClass]=\"item.addClass\">\n                <i class=\"material-icons\">{{ item.icon }}</i>\n                <span>{{ item.name }}</span>\n            </a>\n            <ul class=\"ml-menu\" [ngClass]=\" item.addSubClass \">\n                <li *ngFor=\"let d_item of item.dropdownList\" routerLinkActive=\"active\">\n                    <a routerLink=\"{{ d_item.d_link }}\"><span class=\"material-icons\">{{ d_item.d_icon }}</span>&nbsp;{{ d_item.d_name }}</a>\n                </li>\n            </ul>\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/left-panel/left-panel-items/left-panel-items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftPanelItemsComponent; });
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

var LeftPanelItemsComponent = (function () {
    function LeftPanelItemsComponent() {
        this.superAdmin = [
            {
                'name': 'Dashboard',
                'icon': 'dashboard',
                'link': 'home',
                'handler': 'doNothing',
                'class': '',
            },
            {
                'name': 'Job',
                'icon': 'work',
                'link': '*',
                'class': 'menu-toggle',
                'handler': 'toggleState',
                'addClass': 'none',
                'addSubClass': 'none',
                'dropdownList': [
                    {
                        'd_name': 'New',
                        'd_icon': 'arrow_downward',
                        'd_link': 'new'
                    },
                    {
                        'd_name': 'Under Progress',
                        'd_icon': 'more_horiz',
                        'd_link': 'underProgress'
                    },
                    {
                        'd_name': 'Completed',
                        'd_icon': 'check',
                        'd_link': 'completed'
                    },
                    {
                        'd_name': 'Discarded',
                        'd_icon': 'clear',
                        'd_link': 'discarded'
                    }
                ]
            },
            {
                'name': 'User ',
                'icon': 'accessibility',
                'link': '#',
                'class': 'menu-toggle',
                'handler': 'toggleState',
                'addClass': 'none',
                'addSubClass': 'none',
                'dropdownList': [
                    {
                        'd_name': 'Add User',
                        'd_icon': 'add_box',
                        'd_link': 'AddUser'
                    },
                    {
                        'd_name': 'Admin',
                        'd_icon': 'build',
                        'd_link': 'admin'
                    },
                    // {
                    //   'd_name': 'Customer',
                    //   'd_icon': 'account_box',
                    //   'd_link': 'customer'
                    // },
                    {
                        'd_name': 'Customer Executive',
                        'd_icon': 'headset_mic',
                        'd_link': 'ce'
                    },
                    {
                        'd_name': 'Quality Executive',
                        'd_icon': 'insert_emoticon',
                        'd_link': 'qe'
                    }
                ]
            },
            {
                'name': 'Category ',
                'icon': 'menu',
                'link': '#',
                'class': 'menu-toggle',
                'handler': 'toggleState',
                'addActive': 'none',
                'addClass': 'none',
                'addSubClass': 'none',
                'dropdownList': [
                    {
                        'd_name': 'Main Category',
                        'd_icon': 'looks_one',
                        'd_link': 'mainCategory'
                    },
                    {
                        'd_name': 'Category',
                        'd_icon': 'looks_two',
                        'd_link': 'category'
                    }
                    // {
                    //   'd_name': 'SubCategory',
                    //   'd_icon': 'looks_3',
                    //   'd_link': 'subCategory'
                    // }
                ]
            },
            {
                'name': 'Brand ',
                'icon': 'loyalty',
                'link': '#',
                'class': 'menu-toggle',
                'handler': 'toggleState',
                'addActive': 'none',
                'addClass': 'none',
                'addSubClass': 'none',
                'dropdownList': [
                    {
                        'd_name': 'Add Brand',
                        'd_icon': 'add',
                        'd_link': 'addBrand'
                    },
                    {
                        'd_name': 'Brand List',
                        'd_icon': 'format_list_numbered',
                        'd_link': 'brandList'
                    }
                ]
            },
            {
                'name': 'Seller ',
                'icon': 'shop_two',
                'link': '#',
                'class': 'menu-toggle',
                'handler': 'toggleState',
                'addActive': 'none',
                'addClass': 'none',
                'addSubClass': 'none',
                'dropdownList': [
                    {
                        'd_name': 'Add Offline Seller',
                        'd_icon': 'add',
                        'd_link': 'addOffline'
                    },
                    {
                        'd_name': 'Offline Seller List',
                        'd_icon': 'format_list_numbered',
                        'd_link': 'offlineList'
                    },
                    {
                        'd_name': 'Add Online Seller',
                        'd_icon': 'add',
                        'd_link': 'addOnline'
                    },
                    {
                        'd_name': 'Online Seller List',
                        'd_icon': 'format_list_numbered',
                        'd_link': 'onlineList'
                    }
                ]
            },
            {
                'name': 'Detail Type',
                'icon': 'menu',
                'link': 'list-details',
                'handler': 'doNothing',
                'class': '',
            },
            {
                'name': 'ASC ',
                'icon': 'receipt',
                'link': '#',
                'class': 'menu-toggle',
                'handler': 'toggleState',
                'addActive': 'none',
                'addClass': 'none',
                'addSubClass': 'none',
                'dropdownList': [
                    {
                        'd_name': 'Add Service Center',
                        'd_icon': 'add',
                        'd_link': 'addServiceCenter'
                    },
                    {
                        'd_name': 'Service Center List',
                        'd_icon': 'format_list_numbered',
                        'd_link': 'serviceCenterList'
                    }
                ]
            },
            {
                'name': 'Color',
                'icon': 'format_color_fill',
                'link': 'color',
                'handler': 'doNothing',
                'class': '',
            },
        ];
        this.admin = [
            {
                'name': 'Dashboard',
                'icon': 'dashboard',
                'link': 'home',
                'handler': 'doNothing',
                'class': '',
            },
            {
                'name': 'Job ',
                'icon': 'work',
                'link': '*',
                'class': 'menu-toggle',
                'handler': 'toggleState',
                'addClass': 'none',
                'addSubClass': 'none',
                'dropdownList': [
                    {
                        'd_name': 'New',
                        'd_icon': 'arrow_downward',
                        'd_link': 'new'
                    },
                    {
                        'd_name': 'Under Progress',
                        'd_icon': 'more_horiz',
                        'd_link': 'underProgress'
                    },
                    {
                        'd_name': 'Completed',
                        'd_icon': 'check',
                        'd_link': 'completed'
                    },
                    {
                        'd_name': 'Discarded',
                        'd_icon': 'clear',
                        'd_link': 'discarded'
                    }
                ]
            },
            {
                'name': 'Category ',
                'icon': 'menu',
                'link': '#',
                'class': 'menu-toggle',
                'handler': 'toggleState',
                'addActive': 'none',
                'addClass': 'none',
                'addSubClass': 'none',
                'dropdownList': [
                    {
                        'd_name': 'Main Category',
                        'd_icon': 'looks_one',
                        'd_link': 'mainCategory'
                    },
                    {
                        'd_name': 'Category',
                        'd_icon': 'looks_two',
                        'd_link': 'category'
                    }
                    // {
                    //   'd_name': 'SubCategory',
                    //   'd_icon': 'looks_3',
                    //   'd_link': 'subCategory'
                    // }
                ]
            },
            {
                'name': 'Brand ',
                'icon': 'loyalty',
                'link': '#',
                'class': 'menu-toggle',
                'handler': 'toggleState',
                'addActive': 'none',
                'addClass': 'none',
                'addSubClass': 'none',
                'dropdownList': [
                    {
                        'd_name': 'Add Brand',
                        'd_icon': 'add',
                        'd_link': 'addBrand'
                    },
                    {
                        'd_name': 'Brand List',
                        'd_icon': 'format_list_numbered',
                        'd_link': 'brandList'
                    }
                ]
            },
            {
                'name': 'Seller ',
                'icon': 'shop_two',
                'link': '#',
                'class': 'menu-toggle',
                'handler': 'toggleState',
                'addActive': 'none',
                'addClass': 'none',
                'addSubClass': 'none',
                'dropdownList': [
                    {
                        'd_name': 'Add Offline Seller',
                        'd_icon': 'add',
                        'd_link': 'addOffline'
                    },
                    {
                        'd_name': 'Offline Seller List',
                        'd_icon': 'format_list_numbered',
                        'd_link': 'offlineList'
                    },
                    {
                        'd_name': 'Add Online Seller',
                        'd_icon': 'add',
                        'd_link': 'addOnline'
                    },
                    {
                        'd_name': 'Online Seller List',
                        'd_icon': 'format_list_numbered',
                        'd_link': 'onlineList'
                    }
                ]
            },
            {
                'name': 'Detail Type',
                'icon': 'menu',
                'link': 'list-details',
                'handler': 'doNothing',
                'class': '',
            },
            {
                'name': 'ASC ',
                'icon': 'receipt',
                'link': '#',
                'class': 'menu-toggle',
                'handler': 'toggleState',
                'addActive': 'none',
                'addClass': 'none',
                'addSubClass': 'none',
                'dropdownList': [
                    {
                        'd_name': 'Add Service Center',
                        'd_icon': 'add',
                        'd_link': 'addServiceCenter'
                    },
                    {
                        'd_name': 'Service Center List',
                        'd_icon': 'format_list_numbered',
                        'd_link': 'serviceCenterList'
                    }
                ]
            },
            {
                'name': 'Color',
                'icon': 'format_color_fill',
                'link': 'color',
                'handler': 'doNothing',
                'class': '',
            },
        ];
        this.ce_qe = [
            {
                'name': 'Dashboard',
                'icon': 'dashboard',
                'link': 'home',
                'handler': 'doNothing',
                'class': '',
            },
            {
                'name': 'Job ',
                'icon': 'work',
                'link': '*',
                'class': 'menu-toggle',
                'handler': 'toggleState',
                'addClass': 'none',
                'addSubClass': 'none',
                'dropdownList': [
                    {
                        'd_name': 'New',
                        'd_icon': 'arrow_downward',
                        'd_link': 'new'
                    },
                    {
                        'd_name': 'Under Progress',
                        'd_icon': 'more_horiz',
                        'd_link': 'underProgress'
                    },
                    {
                        'd_name': 'Completed',
                        'd_icon': 'check',
                        'd_link': 'completed'
                    }
                ]
            },
        ];
        var info = JSON.parse(localStorage.getItem('currentUser'));
        // console.log("info", info)
        this.role_type = info.role_type;
        // console.log("role_type", this.role_type)
        if (this.role_type === 1) {
            this.LeftPanelItems = this.superAdmin;
            // console.log(this.superAdmin)
        }
        else if (this.role_type === 2) {
            this.LeftPanelItems = this.admin;
            // console.log(this.admin)
        }
        else if (this.role_type === 3 || this.role_type === 4) {
            this.LeftPanelItems = this.ce_qe;
        }
    }
    LeftPanelItemsComponent.prototype.ngOnInit = function () {
    };
    LeftPanelItemsComponent.prototype.toggleState = function (e) {
        console.log(e);
        if (e.addClass === 'none') {
            e.addClass = 'toggled';
            e.addSubClass = 'display';
        }
        else {
            e.addClass = 'none';
            e.addSubClass = 'none';
        }
        // this.isIn = bool === false ? true : false;
    };
    LeftPanelItemsComponent.prototype.doNothing = function () {
        // console.log('do nothing');
    };
    return LeftPanelItemsComponent;
}());
LeftPanelItemsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-left-panel-items',
        template: __webpack_require__("../../../../../src/app/dashboard/left-panel/left-panel-items/left-panel-items.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/left-panel/left-panel-items/left-panel-items.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LeftPanelItemsComponent);

//# sourceMappingURL=left-panel-items.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/left-panel/left-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar{\n    width:200px!important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/left-panel/left-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Left Sidebar -->\n<aside id=\"leftsidebar\" class=\"sidebar\">\n    <!-- User Info -->\n    <div class=\"user-info\">\n        <div class=\"image\">\n            <img src=\"assets/images/user.png\" width=\"48\" height=\"48\" alt=\"User\" />\n        </div>\n        <div class=\"info-container\">\n            <div class=\"name\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{userTypeName}}</div>\n            <div class=\"email\">{{emailID}}</div>\n            <div class=\"btn-group user-helper-dropdown\" (click)=\"toggleState()\" [ngClass]=\"{ 'open': isIn }\">\n                <i class=\"material-icons\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">keyboard_arrow_down</i>\n                <ul class=\"dropdown-menu pull-right\">\n                    <li><a href=\"javascript:void(0);\"><i class=\"material-icons\">person</i>Profile</a></li>\n                    <li role=\"seperator\" class=\"divider\"></li>\n                    <li><a href=\"javascript:void(0);\"><i class=\"material-icons\">mode_edit</i>Edit Profile</a></li>\n                    <li><a (click)=\"logoutFun()\"><i class=\"material-icons\">input</i>Sign Out</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n<!-- #User Info -->\n    <!-- Menu -->\n        <app-left-panel-items></app-left-panel-items>\n    <!-- #Menu -->\n    <!-- Footer -->\n    <div class=\"legal\">\n        <div class=\"copyright\">\n            &copy; 2017 <a href=\"javascript:void(0);\">BinBill</a>.\n        </div>\n        <div class=\"version\">\n            <b>Version: </b> 2.0.0\n        </div>\n    </div>\n    <!-- #Footer -->\n</aside>\n<!-- End Left Sidebar -->"

/***/ }),

/***/ "../../../../../src/app/dashboard/left-panel/left-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/ng2-cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LeftPanelComponent = (function () {
    function LeftPanelComponent(authservice, router) {
        this.authservice = authservice;
        this.router = router;
        this.isIn = false; // store state
        var info = JSON.parse(localStorage.getItem('currentUser'));
        // console.log("info", info);
        this.emailID = info.email;
        if (info.role_type == '1') {
            this.userTypeName = 'Super Admin';
        }
        else if (info.role_type == '2') {
            this.userTypeName = 'Admin';
        }
        else if (info.role_type == '3') {
            this.userTypeName = 'Qualitive Executive';
        }
        else if (info.role_type == '4') {
            this.userTypeName = 'Customer Executive';
        }
        else if (info.role_type == '5') {
            this.userTypeName = 'Consumer';
        }
        else if (info.role_type == '6') {
            this.userTypeName = 'Date Manager';
        }
        else if (info.role_type == '7') {
            this.userTypeName = 'Merchant';
        }
    }
    LeftPanelComponent.prototype.ngOnInit = function () {
    };
    LeftPanelComponent.prototype.toggleState = function () {
        var bool = this.isIn;
        this.isIn = bool === false ? true : false;
    };
    LeftPanelComponent.prototype.logoutFun = function () {
        this.authservice.logout();
        __WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__["Cookie"].deleteAll();
    };
    return LeftPanelComponent;
}());
LeftPanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-left-panel',
        template: __webpack_require__("../../../../../src/app/dashboard/left-panel/left-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/left-panel/left-panel.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]) === "function" && _b || Object])
], LeftPanelComponent);

var _a, _b;
//# sourceMappingURL=left-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/sign-in/sign-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-page{\n    max-height: 340px;\n    overflow-x: visible;\n    margin-top: 7%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sign-in/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n    <div class=\"login-box\">\n        <div class=\"logo\">\n            <a href=\"javascript:void(0);\">Bin<b>Bill</b></a>\n            <small>Admin Panel - super admin</small>\n        </div>\n        <div class=\"card\">\n            <div class=\"body\">\n                <form [formGroup]='rForm' (ngSubmit) = \"signIN(rForm.value)\">\n                    <div class=\"msg\">Sign in to start your session</div>\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\">\n                            <i class=\"material-icons\">person</i>\n                        </span>\n                        <div class=\"form-line\">\n                            <input type=\"text\" class=\"form-control\" formControlName=\"EmailID\" placeholder=\"EmailID\" required autofocus>                            \n                        </div>\n                        <p class=\"text-danger\" *ngIf=\"!rForm.controls['EmailID'].valid && rForm.controls['EmailID'].touched\">EmailID is required</p>\n                    </div>\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\">\n                            <i class=\"material-icons\">lock</i>\n                        </span>\n                        <div class=\"form-line\">\n                            <input type=\"password\" onpaste=\"return false\" class=\"form-control\" formControlName=\"Password\" placeholder=\"Password\" required>\n                        </div>\n                        <p class=\"text-danger\" *ngIf=\"!rForm.controls['Password'].valid && rForm.controls['Password'].touched\">Password is required</p>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xs-8 p-t-5\">\n                            <!-- <input type=\"checkbox\" name=\"rememberme\" id=\"rememberme\" class=\"filled-in chk-col-pink\"> -->\n                            <!-- <label for=\"rememberme\">Remember Me</label> -->\n                        </div>\n                        <div class=\"col-xs-4\">\n                            <input class=\"btn btn-block bg-pink\" type=\"submit\" value=\"SIGN IN\" [disabled]=\"!rForm.valid\">\n                        </div>\n                    </div>\n                    <!-- <div class=\"row m-t-15 m-b--20\">\n                        <div class=\"col-xs-6\">\n                            <a href=\"sign-up.html\">Register Now!</a>\n                        </div>\n                        <div class=\"col-xs-6 align-right\">\n                            <a href=\"forgot-password.html\">Forgot Password?</a>\n                        </div>\n                    </div> -->\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/sign-in/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignInComponent = (function () {
    function SignInComponent(fb, authenticationService, route, router) {
        this.fb = fb;
        this.authenticationService = authenticationService;
        this.route = route;
        this.router = router;
        this.EmailID = '';
        this.Password = '';
        // form validators
        this.rForm = fb.group({
            'EmailID': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'Password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
    }
    SignInComponent.prototype.ngOnInit = function () {
        // reset login status
        // this.authenticationService.logout();
        // here we can set our default page after login if we want  e.g category instead of returnURL
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
    };
    // form data after submit
    SignInComponent.prototype.signIN = function (post) {
        this.EmailID = post.EmailID;
        this.Password = post.Password;
        this.authenticationService.login(this.EmailID, this.Password);
        // this.router.navigate(['dashboard']);
    };
    return SignInComponent;
}());
SignInComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-sign-in',
        template: __webpack_require__("../../../../../src/app/sign-in/sign-in.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sign-in/sign-in.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _d || Object])
], SignInComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=sign-in.component.js.map

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
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map