"use strict";
(self["webpackChunkstellvertretung"] = self["webpackChunkstellvertretung"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 1416);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ 2993);
/* harmony import */ var _unauthenticated_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unauthenticated.component */ 1249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: 'substitutions',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_substitutions_substitutions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./substitutions/substitutions.module */ 976)).then((m) => m.SubstitutionsModule),
    },
    { path: 'unauthenticated', component: _unauthenticated_component__WEBPACK_IMPORTED_MODULE_2__.UnauthenticatedComponent },
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
        pathMatch: 'full',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
                useHash: true,
            }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 8109:
/*!*********************************************!*\
  !*** ./src/app/app-standalone.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppStandaloneComponent": () => (/* binding */ AppStandaloneComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 4514);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 6799);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/services/auth.service */ 629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_services_i18n_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/i18n.service */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_services_teacher_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/teacher-resource.service */ 622);
/* harmony import */ var _shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/teacher-substitution.service */ 8893);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 3935);













const _c0 = function () { return ["substitutions", "admin"]; };
function AppStandaloneComponent_div_2_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, "navigation.item-admin"));
} }
const _c1 = function () { return ["substitutions", "execute"]; };
const _c2 = function () { return ["substitutions", "assign"]; };
function AppStandaloneComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6)(1, "button", 7)(2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 9)(5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AppStandaloneComponent_div_2_a_11_Template, 3, 5, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](11, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 5, "navigation.item-execute"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](12, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 7, "navigation.item-assign"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 9, ctx_r0.isAdmin$));
} }
function AppStandaloneComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div");
} }
function AppStandaloneComponent_div_9_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 20)(8, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppStandaloneComponent_div_9_div_9_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r7.stopSubstitution(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 22)(19, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppStandaloneComponent_div_9_div_9_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r9.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 6, "navigation.user.signed-in-as"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 8, ctx_r5.substitutionName$));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 10, "navigation.user.stop-button-label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 12, "navigation.user.substituted-by"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 14, ctx_r5.userName$));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 16, "navigation.user.logout-button-label"));
} }
function AppStandaloneComponent_div_9_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 22)(8, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppStandaloneComponent_div_9_div_11_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r10.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "navigation.user.signed-in-as"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 4, ctx_r6.userName$));
} }
function AppStandaloneComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "button", 13)(2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 15)(8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AppStandaloneComponent_div_9_div_9_Template, 22, 18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AppStandaloneComponent_div_9_div_11_Template, 10, 6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 3, ctx_r2.userName$));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 5, ctx_r2.isSubstitutionActive$));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 7, ctx_r2.isSubstitutionActive$) == false);
} }
function AppStandaloneComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppStandaloneComponent_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "navigation.user.login-button-label"), " ");
} }
class AppStandaloneComponent {
    constructor(router, i18n, auth, location, teacherResourceService, teacherSubstitutionService) {
        this.router = router;
        this.auth = auth;
        this.location = location;
        this.teacherResourceService = teacherResourceService;
        this.teacherSubstitutionService = teacherSubstitutionService;
        this.isAdmin$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(auth.hasRole(_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.SUBSTITUTE_ADMINISTRATOR_ROLE));
        this.isLoggedIn$ = auth.personId$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(v => !!v));
        this.userName$ = auth.holderId$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(v => this.auth.personName));
        this.isSubstitutionActive$ = auth.substitutionId$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(v => !!v));
        this.substitutionName$ = auth.holderId$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(v => {
            console.log('load', v);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(v => this.teacherResourceService.getTeacherName(v)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.share)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(v => {
            console.log('name', v);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.onErrorResumeNext)());
    }
    stopSubstitution() {
        if (this.auth.substitutionId != null) {
            this.teacherSubstitutionService.stop(this.auth.substitutionId).subscribe(v => null);
        }
    }
    login() {
        this.auth.login();
    }
    logout() {
        this.auth.logout();
    }
}
AppStandaloneComponent.ɵfac = function AppStandaloneComponent_Factory(t) { return new (t || AppStandaloneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_i18n_service__WEBPACK_IMPORTED_MODULE_1__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_teacher_resource_service__WEBPACK_IMPORTED_MODULE_2__.TeacherResourceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_3__.TeacherSubstitutionService)); };
AppStandaloneComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppStandaloneComponent, selectors: [["app-standalone"]], decls: 14, vars: 15, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-primary", "mb-3"], [1, "container-fluid"], ["class", "dropdown main-menu", 4, "ngIf"], [4, "ngIf"], ["href", "#", 1, "navbar-brand", "text-light"], ["class", "dropdown", 4, "ngIf"], [1, "dropdown", "main-menu"], ["type", "button", "id", "dropdownMenuButton", "data-bs-toggle", "dropdown", 1, "btn", "btn-primary"], [1, "material-icons"], [1, "dropdown-menu"], ["routerLinkActive", "active", 1, "dropdown-item", 3, "routerLink"], ["class", "dropdown-item", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-bs-toggle", "dropdown", 1, "btn", "btn-primary", "text-nowrap", "d-flex", "flex-row"], [1, "ms-2", "d-none", "d-md-block"], [1, "dropdown-menu", "dropdown-menu-end"], ["class", "m-2", 4, "ngIf"], [1, "m-2"], [1, "text-muted"], [1, "text-nowrap"], [1, "text-end"], [1, "btn", "btn-secondary", 3, "click"], [1, "text-end", "mt-2"], [1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function AppStandaloneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AppStandaloneComponent_div_2_Template, 13, 13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AppStandaloneComponent_div_4_Template, 1, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AppStandaloneComponent_div_9_Template, 13, 9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AppStandaloneComponent_div_11_Template, 4, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "app");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 5, ctx.isLoggedIn$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 7, ctx.isLoggedIn$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 9, "navigation.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 11, ctx.isLoggedIn$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 13, ctx.isLoggedIn$));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbNavbar, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkActive, _app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe], styles: ["[_ngcontent-%COMP%]:root {\n  --stellvertretung-primary: #005189;\n  --stellvertretung-primary-hover: #004272;\n  --stellvertretung-secondary: #8a8a8a;\n  --stellvertretung-secondary-hover: #747474;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  font-size: 1.2rem !important;\n}\n\n@media (min-width: 768px) {\n  .main-menu[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50px;\n    left: 0;\n    right: 0;\n    height: 50px;\n    display: flex;\n    flex-direction: row;\n    justify-content: left;\n    background: #4d4d4d;\n  }\n\n  .main-menu[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(.dropdown-menu) {\n    display: none;\n  }\n\n  .main-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%] {\n    display: contents;\n  }\n\n  .main-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    width: min-content;\n    padding: 0 1rem;\n    line-height: 50px;\n    color: #ffffff;\n  }\n\n  .main-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:first-child {\n    padding-left: 1.5rem;\n  }\n\n  .main-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%], .main-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:active {\n    background: none !important;\n    color: #ef7c00;\n  }\n\n  .main-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .main-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n    background: #3d3d3d !important;\n  }\n\n  nav.navbar[_ngcontent-%COMP%] {\n    margin-bottom: 64px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxib290c3RyYXAtdmFyaWFibGVzLnNjc3MiLCJhcHAtc3RhbmRhbG9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7RUFBQTtBQTREQTtFQUNJLGtDQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDBDQUFBO0FDM0RKO0FEdUVBOztFQUFBO0FDN0VBO0VBQ0UsNEJBQUE7QUFZRjtBQVRBLHVDQUFBO0FBQ0E7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7RUFZRjs7RUFWQTtJQUNFLGFBQUE7RUFhRjs7RUFYQTtJQUNFLGlCQUFBO0VBY0Y7O0VBWkE7SUFDRSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7RUFlRjs7RUFiQTtJQUNFLG9CRHFCZ0I7RUNMbEI7O0VBYkE7O0lBRUUsMkJBQUE7SUFDQSxjRG5CSztFQ21DUDs7RUFiQTs7SUFFRSw4QkFBQTtFQWdCRjs7RUFiQTtJQUNFLDhCQUFBO0VBZ0JGO0FBQ0YiLCJmaWxlIjoiYXBwLXN0YW5kYWxvbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwic2FzczptYXRoXCI7XHJcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XHJcblxyXG4vKipcclxuICogQm9vdHN0cmFwIHZhcmlhYmxlcyBvdmVycmlkZXNcclxuICovXHJcblxyXG4vLyBkaXNhYmxlIHJlc3BvbnNpemUgZm9udCBzaXplc1xyXG4kZW5hYmxlLXJmczogZmFsc2U7XHJcblxyXG4vLyBjb250YWluZXIgcGFkZGluZ1xyXG4kY29udGFpbmVyLXBhZGRpbmcteDogMS41cmVtO1xyXG5cclxuLy8jMGRjYWYwLCAjMTdhMmI4XHJcblxyXG4vLyBDb2xvcnNcclxuJGJvZHktYmc6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuJGJvZHktY29sb3I6IHJnYig5NiwgOTYsIDk2KTtcclxuJHllbGxvdzogcmdiKDI1NSwgMTY4LCAyMCk7XHJcbiRvcmFuZ2U6IHJnYigyMzksIDEyNCwgMCk7XHJcbiRibHVlOiByZ2IoNjUsIDExOCwgMTQ1KTtcclxuJHRlYWw6IHJnYigxOSwgNjksIDk3KTtcclxuJGdyYXk6IHJnYigxMzgsIDEzOCwgMTM4KTtcclxuJGdyYXktZGFyazogcmdiKDUxLCA1MSwgNTEpO1xyXG4kY3lhbjogIzE3YTJiODtcclxuXHJcbiRibHVlOiAjMDA1MTg5O1xyXG4kYmx1ZS1ob3ZlcjogIzAwNDI3MjtcclxuJGdyYXktaG92ZXI6IHJnYigxMTYsIDExNiwgMTE2KTtcclxuXHJcbiRwcmVzZW50LWNvbG9yOiAjMjhhNzQ1O1xyXG4kYWJzZW50LWNvbG9yOiAjZGMzNTQ1O1xyXG4kdW5hcHByb3ZlZC1jb2xvcjogJHllbGxvdztcclxuXHJcbi8vIEZvbnRcclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuXHJcbi8vIFJvb3QgRm9udCBTaXplXHJcbiRyb290LWZvbnQtc2l6ZS1zY2FsZTogMS4wOyAvLyByZWxhdGl2ZSB0byB0aGUgc3RhbmRhcmQgMTZweCBmb250IHNpemUgb2YgYSBicm93c2VyXHJcbiRmb250LXNpemUtYmFzZTogbWF0aC5kaXYoMS4wLCAkcm9vdC1mb250LXNpemUtc2NhbGUpICogMXJlbTtcclxuJHJlbS1zY2FsZTogbWF0aC5kaXYoJGZvbnQtc2l6ZS1iYXNlLCAxcmVtKTtcclxuLy8gQWRqdXN0IHNwYWNpbmdzIGFuZCBwYWRkaW5ncyB0byBjb21wZW5zYXRlIGZvciBhZGp1c3RlZCByb290LWZvbnQtc2NhbGVcclxuJHNwYWNlcjogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kdGFibGUtY2VsbC1wYWRkaW5nLXk6ICAgICRyZW0tc2NhbGUgKiAwLjcgKiAuNXJlbTtcclxuJHRhYmxlLWNlbGwtcGFkZGluZy14OiAgICAkcmVtLXNjYWxlICogMC43ICogLjVyZW07XHJcbiR0YWJsZS1jZWxsLXBhZGRpbmcteS1zbTogJHJlbS1zY2FsZSAqIDAuNyAqIC4yNXJlbTtcclxuJHRhYmxlLWNlbGwtcGFkZGluZy14LXNtOiAkcmVtLXNjYWxlICogMC43ICogLjI1cmVtO1xyXG4kdGFibGUtY2VsbC1wYWRkaW5nLXktbWQ6ICRyZW0tc2NhbGUgKiAwLjcgKiAuMjVyZW07XHJcbiR0YWJsZS1jZWxsLXBhZGRpbmcteC1tZDogJHJlbS1zY2FsZSAqIDAuNyAqIC4yNXJlbTtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15OiAkcmVtLXNjYWxlICogMC43ICogLjM3NXJlbTtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXg6ICRyZW0tc2NhbGUgKiAwLjcgKiAuNzVyZW07XHJcblxyXG4kZ3JpZC1ndXR0ZXItd2lkdGg6ICRyZW0tc2NhbGUgKiAxLjVyZW07XHJcblxyXG4vLyBCdXR0b25zXHJcbiRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbi8vIEljb25zXHJcbiRlcnotaWNvbi1zaXplOiAoJGZvbnQtc2l6ZS1iYXNlICogMS40NjY2NjY2KTtcclxuXHJcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XHJcblxyXG46cm9vdCB7XHJcbiAgICAtLXN0ZWxsdmVydHJldHVuZy1wcmltYXJ5OiAjeyRibHVlfTtcclxuICAgIC0tc3RlbGx2ZXJ0cmV0dW5nLXByaW1hcnktaG92ZXI6ICN7JGJsdWUtaG92ZXJ9O1xyXG4gICAgLS1zdGVsbHZlcnRyZXR1bmctc2Vjb25kYXJ5OiAjeyRncmF5fTtcclxuICAgIC0tc3RlbGx2ZXJ0cmV0dW5nLXNlY29uZGFyeS1ob3ZlcjogI3skZ3JheS1ob3Zlcn07XHJcbn1cclxuXHJcbi8vIERyb3Bkb3duXHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAkZ3JheS0yMDA7XHJcblxyXG4vLyBUYWJsZXNcclxuJHRhYmxlLWhlYWQtYmc6ICR0YWJsZS1ib3JkZXItY29sb3I7XHJcbiR0YWJsZS1oZWFkLWNvbG9yOiAkZ3JheS02MDA7XHJcbiR0YWJsZS1ncm91cC1zZXBhcmF0b3ItY29sb3I6ICR0YWJsZS1ib3JkZXItY29sb3I7XHJcbiR0YWJsZS10aC1mb250LXdlaWdodDogbm9ybWFsO1xyXG5cclxuLyoqXHJcbiAqIEN1c3RvbSBWYXJpYWJsZXNcclxuICovXHJcblxyXG4vLyBDdXN0b20gdmFyaWFibGVzXHJcbiRlcnotY29udGFpbmVyLW1heC13aWR0aDogOTYwcHg7XHJcbiRlcnotY29udGFpbmVyLXBhZGRpbmcteDogJHNwYWNlcjtcclxuJGVyei1jb250YWluZXItcGFkZGluZy15OiAkc3BhY2VyO1xyXG4kZXJ6LXByZXNlbmNlLWNvbnRyb2wtZW50cnktbWluLXdpZHRoOiA0MDBweDtcclxuIiwiQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC12YXJpYWJsZXNcIjtcclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gIGZvbnQtc2l6ZTogKCRmb250LXNpemUtYmFzZSoxLjIpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHNtKSB7Ki9cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLm1haW4tbWVudSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIGJhY2tncm91bmQ6ICM0ZDRkNGQ7XHJcbiAgfVxyXG4gIC5tYWluLW1lbnUgPiA6bm90KC5kcm9wZG93bi1tZW51KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAubWFpbi1tZW51ID4gLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgfVxyXG4gIC5tYWluLW1lbnUgPiAuZHJvcGRvd24tbWVudSA+IGEge1xyXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xyXG4gICAgcGFkZGluZzogMCAkc3BhY2VyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgLm1haW4tbWVudSA+IC5kcm9wZG93bi1tZW51ID4gYTpmaXJzdC1jaGlsZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6ICRncmlkLWd1dHRlci13aWR0aDtcclxuICB9XHJcblxyXG4gIC5tYWluLW1lbnUgPiAuZHJvcGRvd24tbWVudSA+IGEuYWN0aXZlLFxyXG4gIC5tYWluLW1lbnUgPiAuZHJvcGRvd24tbWVudSA+IGE6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAkb3JhbmdlO1xyXG4gIH1cclxuXHJcbiAgLm1haW4tbWVudSA+IC5kcm9wZG93bi1tZW51ID4gYTpob3ZlcixcclxuICAubWFpbi1tZW51ID4gLmRyb3Bkb3duLW1lbnUgPiBhOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6ICMzZDNkM2QgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIG5hdi5uYXZiYXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjRweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6439);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ 8029);
/* harmony import */ var _shared_utils_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/utils/decode */ 8108);
/* harmony import */ var _shared_tokens_dom_apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/tokens/dom-apis */ 1261);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/auth.service */ 629);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_services_i18n_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/i18n.service */ 2741);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 4101);












class AppComponent {
    constructor(router, auth, location, i18n, toastrService, settings, navigator) {
        this.router = router;
        this.auth = auth;
        this.location = location;
        this.toastrService = toastrService;
        this.settings = settings;
        this.navigator = navigator;
        this.router.initialNavigation();
        i18n.initialize();
        this.checkSettings();
    }
    checkSettings() {
        (0,_shared_utils_decode__WEBPACK_IMPORTED_MODULE_1__.decode)(_settings__WEBPACK_IMPORTED_MODULE_0__.Settings)(this.settings)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            console.error(String(error));
            this.toastrService.error('Please check the contents of the settings.js file (see Console output for more details).', 'Invalid Settings');
            return rxjs__WEBPACK_IMPORTED_MODULE_6__.EMPTY;
        }))
            .subscribe();
    }
    ngOnInit() {
        var _a;
        let params = new URLSearchParams(window.location.search);
        let accessToken = params.get('access_token');
        let moduleRedirectUrl = params.get('moduleRedirectUrl');
        let hash = ((_a = window.location.hash) !== null && _a !== void 0 ? _a : '').replace(/^\#\/?/, '');
        if (accessToken) {
            console.log('set token');
            this.auth.setToken(accessToken);
        }
        if (moduleRedirectUrl) {
            window.location.hash = `#${moduleRedirectUrl}`;
            //this.router.navigate([moduleRedirectUrl]);
        }
        else if (!hash) {
            console.log('navigate to assign');
            this.router.navigate(['substitutions', 'assign']);
        }
        if (accessToken || moduleRedirectUrl) {
            params.delete('access_token');
            params.delete('moduleRedirectUrl');
            window.location.search = params.toString();
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_i18n_service__WEBPACK_IMPORTED_MODULE_4__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_tokens_dom_apis__WEBPACK_IMPORTED_MODULE_2__.NAVIGATOR)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app"]], decls: 2, vars: 0, consts: [[1, "mt-2", "pb-3"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdFLFdBQUE7QUFERiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLy8gU29tZWhvdyB0aGUgYXBwIGVsZW1lbnQgaXMgbm90IGZ1bGwgd2lkdGgsIGVuc3VyZSBpdCBpcyBmdWxsIHdpZHRoXHJcbiAgLy8gdG8gYmUgYWJsZSB0byBjZW50ZXIgdGhlIHNwaW5uZXIgd2l0aGluIHRoZSBhdmFpbGFibGUgc3BhY2UuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_common_locales_de_CH__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/locales/de-CH */ 2110);
/* harmony import */ var _angular_common_locales_fr_CH__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/locales/fr-CH */ 2343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/elements */ 7616);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _global_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global-error-handler */ 9544);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ 1416);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings */ 8029);
/* harmony import */ var _shared_services_i18n_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/i18n.service */ 2741);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _unauthenticated_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./unauthenticated.component */ 1249);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-select/ng-select */ 8660);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _app_standalone_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-standalone.component */ 8109);



























// AoT requires an exported function for factories
function HttpLoaderFactory(http, settings) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__.TranslateHttpLoader(http, `${settings.scriptsAndAssetsPath}/assets/locales/`, '.json');
}
(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.registerLocaleData)(_angular_common_locales_de_CH__WEBPACK_IMPORTED_MODULE_0__["default"]);
(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.registerLocaleData)(_angular_common_locales_fr_CH__WEBPACK_IMPORTED_MODULE_1__["default"]);
class AppModule {
    constructor(injector) {
        this.injector = injector;
        const appElement = (0,_angular_elements__WEBPACK_IMPORTED_MODULE_13__.createCustomElement)(_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, {
            injector: this.injector,
        });
        customElements.define('substitution-app', appElement);
        const appStandaloneElement = (0,_angular_elements__WEBPACK_IMPORTED_MODULE_13__.createCustomElement)(_app_standalone_component__WEBPACK_IMPORTED_MODULE_10__.AppStandaloneComponent, {
            injector: this.injector,
        });
        customElements.define('substitution-app-standalone', appStandaloneElement);
        console.log('init module');
    }
    ngDoBootstrap(appRef) { }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.Injector)); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ErrorHandler, useClass: _global_error_handler__WEBPACK_IMPORTED_MODULE_4__.GlobalErrorHandler },
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_14__.LOCALE_ID,
            useFactory: (i18nService) => i18nService.detectLanguage(),
            deps: [_shared_services_i18n_service__WEBPACK_IMPORTED_MODULE_7__.I18nService],
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClient, _settings__WEBPACK_IMPORTED_MODULE_6__.SETTINGS],
                },
            }),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_20__.ToastrModule.forRoot({
                positionClass: 'toast-bottom-right',
                preventDuplicates: true,
            }),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_21__.NgSelectModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent,
        _app_standalone_component__WEBPACK_IMPORTED_MODULE_10__.AppStandaloneComponent,
        _home_component__WEBPACK_IMPORTED_MODULE_5__.HomeComponent,
        _unauthenticated_component__WEBPACK_IMPORTED_MODULE_9__.UnauthenticatedComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_20__.ToastrModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_21__.NgSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbModule] }); })();


/***/ }),

/***/ 2993:
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/services/auth.service */ 629);



class AuthGuard {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    canActivate(next, state) {
        if (!this.auth.isAuthenticated) {
            this.router.navigate(['/unauthenticated']);
            return false;
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9544:
/*!*****************************************!*\
  !*** ./src/app/global-error-handler.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalErrorHandler": () => (/* binding */ GlobalErrorHandler)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 3935);




class GlobalErrorHandler {
    constructor(ngZone, injector, translate) {
        this.ngZone = ngZone;
        this.injector = injector;
        this.translate = translate;
    }
    handleError(error) {
        console.error(String(error));
        if (!(error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpErrorResponse)) {
            this.notifyError();
        }
    }
    notifyError() {
        // Inject and use ToastrService within ngZone, see:
        // https://github.com/scttcper/ngx-toastr/issues/179
        this.ngZone.run(() => {
            this.toastr.error(this.translate.instant('global.app-errors.exception-message'), this.translate.instant('global.app-errors.exception-title'));
        });
    }
    get toastr() {
        return this.injector.get(ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService);
    }
}
GlobalErrorHandler.ɵfac = function GlobalErrorHandler_Factory(t) { return new (t || GlobalErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService)); };
GlobalErrorHandler.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GlobalErrorHandler, factory: GlobalErrorHandler.ɵfac });


/***/ }),

/***/ 1416:
/*!***********************************!*\
  !*** ./src/app/home.component.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/services/auth.service */ 629);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);





function HomeComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "h2")(2, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const section_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/" + section_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, section_r1 + ".title"), " ");
} }
class HomeComponent {
    constructor(route, authService, router, location, changeDetector) {
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.location = location;
        this.changeDetector = changeDetector;
        this.sections = [
            'substitutions/execute',
            'substitutions/assign',
            //'substitutions',
            //'substitutions/current'
        ];
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["erz-home"]], decls: 2, vars: 1, consts: [[1, "mt-3"], [4, "ngFor", "ngForOf"], [3, "routerLink"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_li_1_Template, 5, 4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sections);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8413:
/*!******************************************!*\
  !*** ./src/app/rest-auth-interceptor.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestAuthInterceptor": () => (/* binding */ RestAuthInterceptor)
/* harmony export */ });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ 8029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/auth.service */ 629);




class RestAuthInterceptor {
    constructor(auth, settings) {
        this.auth = auth;
        this.settings = settings;
    }
    /**
     * Adds the CLX-Authorization HTTP header to API requests.
     */
    intercept(req, next) {
        if (req.url.startsWith(this.settings.apiUrl) && this.auth.accessToken) {
            const headers = req.headers.set('CLX-Authorization', `token_type=urn:ietf:params:oauth:token-type:jwt-bearer, access_token=${this.auth.accessToken}`);
            return next.handle(req.clone({ headers }));
        }
        return next.handle(req);
    }
}
RestAuthInterceptor.ɵfac = function RestAuthInterceptor_Factory(t) { return new (t || RestAuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS)); };
RestAuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RestAuthInterceptor, factory: RestAuthInterceptor.ɵfac });


/***/ }),

/***/ 3367:
/*!*******************************************!*\
  !*** ./src/app/rest-error-interceptor.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestErrorInterceptor": () => (/* binding */ RestErrorInterceptor),
/* harmony export */   "withConfig": () => (/* binding */ withConfig)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 3935);







function withConfig(config, params = {}) {
    let httpParams;
    if (params instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams) {
        httpParams = params;
    }
    else {
        httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({ fromObject: params });
    }
    return httpParams.set('restConfig', JSON.stringify(config));
}
function extractConfig(params) {
    return {
        config: JSON.parse(params.get('restConfig') || '{}'),
        params: params.delete('restConfig'),
    };
}
class RestErrorInterceptor {
    constructor(router, toastr, translate) {
        this.router = router;
        this.toastr = toastr;
        this.translate = translate;
    }
    /**
     * Displays an error notification for all error status codes.
     *
     * It is possible to disable error handling for all status codes by
     * setting the config option `skipErrorHandling` to `true`:
     *
     *   const params = withConfig(
     *     { disableErrorHandling: true },
     *     { myParam: 'foobar' }
     *   );
     *   this.http.get('/', { params }).pipe(catchError( handle request errors here... ))
     *
     * To disable error handling of only certain error codes, the option
     * `skipErrorHandlingForStatus` can be set to an array of status
     * codes like this:
     *
     *   const params = withConfig(
     *     { disableErrorHandlingForStatus: [403, 404] },
     *     { myParam: 'foobar' }
     *   );
     *   this.http.get('/', { params }).pipe(catchError( handle 403/404 here... ))
     */
    intercept(req, next) {
        // TODO: there might be better ways of passing options to the
        // interceptor in the future, see:
        // https://github.com/angular/angular/issues/18155
        const { config, params } = extractConfig(req.params);
        return next
            .handle(req.clone({ params }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.getErrorHandler(config)));
    }
    getErrorHandler(config) {
        // tslint:disable-next-line
        return (error, caught) => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpErrorResponse &&
                !config.disableErrorHandling &&
                (!config.disableErrorHandlingForStatus ||
                    !config.disableErrorHandlingForStatus.includes(error.status))) {
                switch (error.status) {
                    case 401 /* UNAUTHORIZED */:
                        this.notifyError('noaccess');
                        this.router.navigate(['/unauthenticated']);
                        throw error.error;
                    //return EMPTY;
                    case 403 /* FORBIDDEN */:
                        this.notifyError('noaccess');
                        throw error.error;
                    //return EMPTY;
                    case 404 /* NOT_FOUND */:
                        this.notifyError('notfound');
                        throw error.error;
                    //return EMPTY;
                    case 0 /* UNKNOWN */:
                    case 503 /* SERVICE_UNAVAILABLE */:
                    case 504 /* GATEWAY_TIMEOUT */:
                        this.notifyError('unavailable');
                        throw error.error;
                    //return EMPTY;
                    case 409 /* CONFLICT */: // Validation error
                        //this.notifyError('conflict');
                        throw error.error;
                    //return EMPTY;
                    default:
                        this.notifyError('server');
                        throw error.error;
                    //return EMPTY;
                }
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
        };
    }
    notifyError(messageKey) {
        this.toastr.error(this.translate.instant(`global.rest-errors.${messageKey}-message`), this.translate.instant(`global.rest-errors.${messageKey}-title`));
    }
}
RestErrorInterceptor.ɵfac = function RestErrorInterceptor_Factory(t) { return new (t || RestErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService)); };
RestErrorInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: RestErrorInterceptor, factory: RestErrorInterceptor.ɵfac });


/***/ }),

/***/ 8029:
/*!*****************************!*\
  !*** ./src/app/settings.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SETTINGS": () => (/* binding */ SETTINGS),
/* harmony export */   "Settings": () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var io_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! io-ts */ 9450);


const Settings = io_ts__WEBPACK_IMPORTED_MODULE_0__.type({
    apiUrl: io_ts__WEBPACK_IMPORTED_MODULE_0__.string,
    oAuthUrl: io_ts__WEBPACK_IMPORTED_MODULE_0__.string,
    oAuthRedirectUrl: io_ts__WEBPACK_IMPORTED_MODULE_0__.union([io_ts__WEBPACK_IMPORTED_MODULE_0__.string, io_ts__WEBPACK_IMPORTED_MODULE_0__.undefined]),
    clientId: io_ts__WEBPACK_IMPORTED_MODULE_0__.union([io_ts__WEBPACK_IMPORTED_MODULE_0__.string, io_ts__WEBPACK_IMPORTED_MODULE_0__.undefined]),
    instanceId: io_ts__WEBPACK_IMPORTED_MODULE_0__.string,
    appScope: io_ts__WEBPACK_IMPORTED_MODULE_0__.string,
    scriptsAndAssetsPath: io_ts__WEBPACK_IMPORTED_MODULE_0__.string,
});

const SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('Application Settings', {
    providedIn: 'root',
    factory: () => window.stellvertretung.settings,
});


/***/ }),

/***/ 7871:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/avatar/avatar.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarComponent": () => (/* binding */ AvatarComponent)
/* harmony export */ });
/* harmony import */ var src_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/settings */ 8029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/storage.service */ 1303);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);






class AvatarComponent {
    constructor(settings, storageService) {
        this.settings = settings;
        this.storageService = storageService;
        this.avatarStyles = {};
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (changes.studentId) {
            this.avatarStyles = this.buildAvatarStyles(this.studentId);
        }
    }
    buildAvatarStyles(studentId) {
        return {
            'background-image': [
                this.buildAvatarUrl(studentId),
                this.fallbackAvatarUrl,
            ]
                .map((url) => `url(${url})`)
                .join(', '),
        };
    }
    buildAvatarUrl(studentId) {
        const accessToken = this.storageService.getAccessToken() || '';
        return `${this.settings.apiUrl}/Files\/personPictures/${studentId}?token=${accessToken}`;
    }
    get fallbackAvatarUrl() {
        return `${this.settings.scriptsAndAssetsPath}/assets/images/avatar-placeholder.png`;
    }
}
AvatarComponent.ɵfac = function AvatarComponent_Factory(t) { return new (t || AvatarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService)); };
AvatarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AvatarComponent, selectors: [["erz-avatar"]], inputs: { studentId: "studentId", link: "link", linkParams: "linkParams" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 5, consts: [[1, "avatar", 3, "routerLink", "queryParams", "ngStyle"]], template: function AvatarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "a", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("disabled", !ctx.link);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx.link)("queryParams", ctx.linkParams)("ngStyle", ctx.avatarStyles);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle], styles: ["[_ngcontent-%COMP%]:root {\n  --stellvertretung-primary: #005189;\n  --stellvertretung-primary-hover: #004272;\n  --stellvertretung-secondary: #8a8a8a;\n  --stellvertretung-secondary-hover: #747474;\n}\n\n[_nghost-%COMP%] {\n  display: flex;\n}\n.small[_nghost-%COMP%] {\n  width: 40px;\n  min-width: 40px;\n  height: 50px;\n}\n.large[_nghost-%COMP%] {\n  width: 100px;\n  min-width: 100px;\n  height: 130px;\n}\n.avatar[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1px solid rgba(96, 96, 96, 0.25);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\na.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib290c3RyYXAtdmFyaWFibGVzLnNjc3MiLCJhdmF0YXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7O0VBQUE7QUE0REE7RUFDSSxrQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtBQzNESjtBRHVFQTs7RUFBQTtBQzdFQTtFQUNFLGFBQUE7QUFZRjtBQVRBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBWUY7QUFUQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFZRjtBQVRBO0VBQ0UsT0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBWUY7QUFUQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQVlGIiwiZmlsZSI6ImF2YXRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgXCJzYXNzOm1hdGhcIjtcclxuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnNcIjtcclxuXHJcbi8qKlxyXG4gKiBCb290c3RyYXAgdmFyaWFibGVzIG92ZXJyaWRlc1xyXG4gKi9cclxuXHJcbi8vIGRpc2FibGUgcmVzcG9uc2l6ZSBmb250IHNpemVzXHJcbiRlbmFibGUtcmZzOiBmYWxzZTtcclxuXHJcbi8vIGNvbnRhaW5lciBwYWRkaW5nXHJcbiRjb250YWluZXItcGFkZGluZy14OiAxLjVyZW07XHJcblxyXG4vLyMwZGNhZjAsICMxN2EyYjhcclxuXHJcbi8vIENvbG9yc1xyXG4kYm9keS1iZzogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4kYm9keS1jb2xvcjogcmdiKDk2LCA5NiwgOTYpO1xyXG4keWVsbG93OiByZ2IoMjU1LCAxNjgsIDIwKTtcclxuJG9yYW5nZTogcmdiKDIzOSwgMTI0LCAwKTtcclxuJGJsdWU6IHJnYig2NSwgMTE4LCAxNDUpO1xyXG4kdGVhbDogcmdiKDE5LCA2OSwgOTcpO1xyXG4kZ3JheTogcmdiKDEzOCwgMTM4LCAxMzgpO1xyXG4kZ3JheS1kYXJrOiByZ2IoNTEsIDUxLCA1MSk7XHJcbiRjeWFuOiAjMTdhMmI4O1xyXG5cclxuJGJsdWU6ICMwMDUxODk7XHJcbiRibHVlLWhvdmVyOiAjMDA0MjcyO1xyXG4kZ3JheS1ob3ZlcjogcmdiKDExNiwgMTE2LCAxMTYpO1xyXG5cclxuJHByZXNlbnQtY29sb3I6ICMyOGE3NDU7XHJcbiRhYnNlbnQtY29sb3I6ICNkYzM1NDU7XHJcbiR1bmFwcHJvdmVkLWNvbG9yOiAkeWVsbG93O1xyXG5cclxuLy8gRm9udFxyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gUm9vdCBGb250IFNpemVcclxuJHJvb3QtZm9udC1zaXplLXNjYWxlOiAxLjA7IC8vIHJlbGF0aXZlIHRvIHRoZSBzdGFuZGFyZCAxNnB4IGZvbnQgc2l6ZSBvZiBhIGJyb3dzZXJcclxuJGZvbnQtc2l6ZS1iYXNlOiBtYXRoLmRpdigxLjAsICRyb290LWZvbnQtc2l6ZS1zY2FsZSkgKiAxcmVtO1xyXG4kcmVtLXNjYWxlOiBtYXRoLmRpdigkZm9udC1zaXplLWJhc2UsIDFyZW0pO1xyXG4vLyBBZGp1c3Qgc3BhY2luZ3MgYW5kIHBhZGRpbmdzIHRvIGNvbXBlbnNhdGUgZm9yIGFkanVzdGVkIHJvb3QtZm9udC1zY2FsZVxyXG4kc3BhY2VyOiAkZm9udC1zaXplLWJhc2U7XHJcbiR0YWJsZS1jZWxsLXBhZGRpbmcteTogICAgJHJlbS1zY2FsZSAqIDAuNyAqIC41cmVtO1xyXG4kdGFibGUtY2VsbC1wYWRkaW5nLXg6ICAgICRyZW0tc2NhbGUgKiAwLjcgKiAuNXJlbTtcclxuJHRhYmxlLWNlbGwtcGFkZGluZy15LXNtOiAkcmVtLXNjYWxlICogMC43ICogLjI1cmVtO1xyXG4kdGFibGUtY2VsbC1wYWRkaW5nLXgtc206ICRyZW0tc2NhbGUgKiAwLjcgKiAuMjVyZW07XHJcbiR0YWJsZS1jZWxsLXBhZGRpbmcteS1tZDogJHJlbS1zY2FsZSAqIDAuNyAqIC4yNXJlbTtcclxuJHRhYmxlLWNlbGwtcGFkZGluZy14LW1kOiAkcmVtLXNjYWxlICogMC43ICogLjI1cmVtO1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6ICRyZW0tc2NhbGUgKiAwLjcgKiAuMzc1cmVtO1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteDogJHJlbS1zY2FsZSAqIDAuNyAqIC43NXJlbTtcclxuXHJcbiRncmlkLWd1dHRlci13aWR0aDogJHJlbS1zY2FsZSAqIDEuNXJlbTtcclxuXHJcbi8vIEJ1dHRvbnNcclxuJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuLy8gSWNvbnNcclxuJGVyei1pY29uLXNpemU6ICgkZm9udC1zaXplLWJhc2UgKiAxLjQ2NjY2NjYpO1xyXG5cclxuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbjpyb290IHtcclxuICAgIC0tc3RlbGx2ZXJ0cmV0dW5nLXByaW1hcnk6ICN7JGJsdWV9O1xyXG4gICAgLS1zdGVsbHZlcnRyZXR1bmctcHJpbWFyeS1ob3ZlcjogI3skYmx1ZS1ob3Zlcn07XHJcbiAgICAtLXN0ZWxsdmVydHJldHVuZy1zZWNvbmRhcnk6ICN7JGdyYXl9O1xyXG4gICAgLS1zdGVsbHZlcnRyZXR1bmctc2Vjb25kYXJ5LWhvdmVyOiAjeyRncmF5LWhvdmVyfTtcclxufVxyXG5cclxuLy8gRHJvcGRvd25cclxuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICRncmF5LTIwMDtcclxuXHJcbi8vIFRhYmxlc1xyXG4kdGFibGUtaGVhZC1iZzogJHRhYmxlLWJvcmRlci1jb2xvcjtcclxuJHRhYmxlLWhlYWQtY29sb3I6ICRncmF5LTYwMDtcclxuJHRhYmxlLWdyb3VwLXNlcGFyYXRvci1jb2xvcjogJHRhYmxlLWJvcmRlci1jb2xvcjtcclxuJHRhYmxlLXRoLWZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblxyXG4vKipcclxuICogQ3VzdG9tIFZhcmlhYmxlc1xyXG4gKi9cclxuXHJcbi8vIEN1c3RvbSB2YXJpYWJsZXNcclxuJGVyei1jb250YWluZXItbWF4LXdpZHRoOiA5NjBweDtcclxuJGVyei1jb250YWluZXItcGFkZGluZy14OiAkc3BhY2VyO1xyXG4kZXJ6LWNvbnRhaW5lci1wYWRkaW5nLXk6ICRzcGFjZXI7XHJcbiRlcnotcHJlc2VuY2UtY29udHJvbC1lbnRyeS1taW4td2lkdGg6IDQwMHB4O1xyXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYm9vdHN0cmFwLXZhcmlhYmxlc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbjpob3N0LnNtYWxsIHtcclxuICB3aWR0aDogNDBweDtcclxuICBtaW4td2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG46aG9zdC5sYXJnZSB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMzBweDtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgZmxleDogMTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRib2R5LWNvbG9yLCAwLjI1KTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG5hLmRpc2FibGVkIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 2859:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/date-select/date-select.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateSelectComponent": () => (/* binding */ DateSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ 8684);
/* harmony import */ var _services_date_parser_formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/date-parser-formatter */ 8568);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 3935);








class DateSelectComponent {
    constructor() {
        this.error = false;
        //@Input() 
        //get value():Option<Date> { return this.ngbDate; }
        //set value(val:Option<Date>) { this.ngbDate = val != null ? {year: val.getFullYear(), month: val.getMonth() + 1, day: val.getDate()} : null; }
        this.value = null;
        this.placeholder = 'shared.date-select.default-placeholder';
        this.minDate = null;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.componentId = (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])('erz-date-select-');
    }
    // The NgbDateNativeAdapter does not seem to be used for minDate on the
    // date-picker component. As a workaround, we convert to an NgbDate.
    get minNgbDate() {
        if (this.minDate) {
            let date = this.minDate;
            return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
        }
        else {
            return null;
        }
    }
    ngOnInit() { }
    change(ngbDate) {
        this.valueChange.emit(ngbDate);
        return;
        if (ngbDate != null) {
            //this.valueChange.emit(new Date(Date.UTC(ngbDate.year, ngbDate.month - 1, ngbDate.day)));
            this.valueChange.emit(ngbDate);
        }
        else {
            this.valueChange.emit(null);
        }
    }
}
DateSelectComponent.ɵfac = function DateSelectComponent_Factory(t) { return new (t || DateSelectComponent)(); };
DateSelectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DateSelectComponent, selectors: [["erz-date-select"]], inputs: { error: "error", value: "value", placeholder: "placeholder", minDate: "minDate" }, outputs: { valueChange: "valueChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDateAdapter, useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDateNativeAdapter },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDateParserFormatter, useClass: _services_date_parser_formatter__WEBPACK_IMPORTED_MODULE_0__.DateParserFormatter },
        ])], decls: 8, vars: 12, consts: [[1, "input-group"], [1, "input-group-text", 3, "id"], [1, "material-icons"], ["type", "text", "ngbDatepicker", "", 1, "form-control", 3, "minDate", "ngModel", "click", "ngModelChange"], ["dp", "ngbDatepicker"]], template: function DateSelectComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "span", 1)(2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "calendar_today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DateSelectComponent_Template_input_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); return _r0.toggle(); })("ngModelChange", function DateSelectComponent_Template_input_ngModelChange_4_listener($event) { return ctx.change($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.componentId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minDate", ctx.minNgbDate)("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 8, ctx.placeholder))("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 10, ctx.placeholder))("aria-describedby", ctx.componentId);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbInputDatepicker, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRlLXNlbGVjdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 8781:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/multiselect/multiselect.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiselectComponent": () => (/* binding */ MultiselectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-select/ng-select */ 8660);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);






function MultiselectComponent_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiselectComponent_ng_template_2_div_0_Template_span_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r6 = restoredCtx.$implicit; const clear_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().clear; return clear_r4(item_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6.Value, " ");
} }
function MultiselectComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiselectComponent_ng_template_2_div_0_Template, 4, 1, "div", 4);
} if (rf & 2) {
    const items_r3 = ctx.items;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r3);
} }
function MultiselectComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
} if (rf & 2) {
    const item_r10 = ctx.item;
    const item$_r11 = ctx.item$;
    const index_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "item-", index_r12, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item$_r11.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r10.Group, " ");
} }
function MultiselectComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
} if (rf & 2) {
    const item_r13 = ctx.item;
    const item$_r14 = ctx.item$;
    const index_r15 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "item-", index_r15, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item$_r14.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r13.Value, " ");
} }
class MultiselectComponent {
    constructor() {
        this.options = [];
        this.values = [];
        this.valuesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    itemsChanged() {
        this.valuesChange.emit(this.values);
    }
}
MultiselectComponent.ɵfac = function MultiselectComponent_Factory(t) { return new (t || MultiselectComponent)(); };
MultiselectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MultiselectComponent, selectors: [["erz-multiselect"]], inputs: { options: "options", values: "values" }, outputs: { valuesChange: "valuesChange" }, decls: 5, vars: 10, consts: [["groupBy", "Group", "bindValue", "Key", "bindLabel", "Value", "dropdownPosition", "bottom", 1, "multiselect", 3, "items", "multiple", "selectableGroup", "selectableGroupAsModel", "closeOnSelect", "ngModel", "placeholder", "clearable", "ngModelChange", "click", "clear"], ["ng-multi-label-tmp", ""], ["ng-optgroup-tmp", ""], ["ng-option-tmp", ""], ["class", "ng-value", 4, "ngFor", "ngForOf"], [1, "ng-value"], ["aria-hidden", "true", 1, "ng-value-icon", "right", 3, "click"], ["type", "checkbox", 3, "id", "ngModel"]], template: function MultiselectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiselectComponent_Template_ng_select_ngModelChange_0_listener($event) { return ctx.values = $event; })("click", function MultiselectComponent_Template_ng_select_click_0_listener() { return ctx.itemsChanged(); })("clear", function MultiselectComponent_Template_ng_select_clear_0_listener() { return ctx.itemsChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiselectComponent_ng_template_2_Template, 1, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MultiselectComponent_ng_template_3_Template, 2, 3, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MultiselectComponent_ng_template_4_Template, 2, 3, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 8, "shared.select.empty-option"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.options)("multiple", true)("selectableGroup", true)("selectableGroupAsModel", false)("closeOnSelect", false)("ngModel", ctx.values)("clearable", true);
    } }, directives: [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_1__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_1__.NgMultiLabelTemplateDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_1__.NgOptgroupTemplateDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_1__.NgOptionTemplateDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtdWx0aXNlbGVjdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 368:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/resettable-input/resettable-input.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResettableInputComponent": () => (/* binding */ ResettableInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);



function ResettableInputComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResettableInputComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.valueChange.emit(""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
class ResettableInputComponent {
    constructor() {
        this.value = '';
        this.disabled = false;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() { }
}
ResettableInputComponent.ɵfac = function ResettableInputComponent_Factory(t) { return new (t || ResettableInputComponent)(); };
ResettableInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResettableInputComponent, selectors: [["erz-resettable-input"]], inputs: { value: "value", disabled: "disabled", placeholder: "placeholder", label: "label" }, outputs: { valueChange: "valueChange" }, decls: 7, vars: 5, consts: [[1, "input-group"], [1, "input-group-prepend"], ["id", "resettable-input", 1, "input-group-text"], [1, "material-icons"], ["type", "text", "aria-describedby", "resettable-input", 1, "form-control", 3, "value", "disabled", "keyup"], ["class", "btn btn-link text-decoration-none", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-link", "text-decoration-none", 3, "click"]], template: function ResettableInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2)(3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ResettableInputComponent_Template_input_keyup_5_listener($event) { return ctx.valueChange.emit($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ResettableInputComponent_button_6_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("placeholder", ctx.placeholder)("aria-label", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.value);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["input[_ngcontent-%COMP%] {\n  padding-right: 2.5em;\n}\n\nbutton[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  z-index: 3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0dGFibGUtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQUNGIiwiZmlsZSI6InJlc2V0dGFibGUtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XHJcbiAgcGFkZGluZy1yaWdodDogMi41ZW07XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 9092:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/select/select.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectComponent": () => (/* binding */ SelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 3935);







function SelectComponent_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "shared.select.empty-option"), " ");
} }
function SelectComponent_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", option_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r2.Value, " ");
} }
class SelectComponent {
    constructor() {
        this.options = [];
        this.allowEmpty = true;
        this.value = null;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.options$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.rawValue$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        this.value$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([this.rawValue$, this.options$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(([rawValue, options]) => (options && options.find((o) => o.Key === rawValue)) || null));
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (changes.value) {
            this.rawValue$.next(changes.value.currentValue);
        }
        if (changes.options) {
            this.options$.next(changes.options.currentValue);
        }
    }
}
SelectComponent.ɵfac = function SelectComponent_Factory(t) { return new (t || SelectComponent)(); };
SelectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectComponent, selectors: [["erz-select"]], inputs: { options: "options", allowEmpty: "allowEmpty", value: "value" }, outputs: { valueChange: "valueChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 5, consts: [[1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngIf"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SelectComponent_Template_select_ngModelChange_0_listener($event) { return ctx.valueChange.emit($event && $event.Key); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SelectComponent_option_2_Template, 3, 4, "option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SelectComponent_option_3_Template, 2, 2, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " >\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.value$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allowEmpty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2925:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/spinner/spinner.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class SpinnerComponent {
    constructor() { }
    ngOnInit() { }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["erz-spinner"]], decls: 4, vars: 0, consts: [[1, "spinner-container"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: ["[_ngcontent-%COMP%]:root {\n  --stellvertretung-primary: #005189;\n  --stellvertretung-primary-hover: #004272;\n  --stellvertretung-secondary: #8a8a8a;\n  --stellvertretung-secondary-hover: #747474;\n}\n\n.spinner-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n[_nghost-%COMP%]:not(.inline)   .spinner-container[_ngcontent-%COMP%] {\n  top: -131px;\n  min-height: 200px;\n}\n.spinner-border[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n}\n[_nghost-%COMP%]:not(.inline)   .spinner-border[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib290c3RyYXAtdmFyaWFibGVzLnNjc3MiLCJzcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOztFQUFBO0FBNERBO0VBQ0ksa0NBQUE7RUFDQSx3Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7QUMzREo7QUR1RUE7O0VBQUE7QUM3RUE7RUFDRSxrQkFBQTtBQVlGO0FBWEU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFhSjtBQVRBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFZRjtBQVZFO0VBQ0UsaUJBQUE7QUFZSiIsImZpbGUiOiJzcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSBcInNhc3M6bWF0aFwiO1xyXG5AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9uc1wiO1xyXG5cclxuLyoqXHJcbiAqIEJvb3RzdHJhcCB2YXJpYWJsZXMgb3ZlcnJpZGVzXHJcbiAqL1xyXG5cclxuLy8gZGlzYWJsZSByZXNwb25zaXplIGZvbnQgc2l6ZXNcclxuJGVuYWJsZS1yZnM6IGZhbHNlO1xyXG5cclxuLy8gY29udGFpbmVyIHBhZGRpbmdcclxuJGNvbnRhaW5lci1wYWRkaW5nLXg6IDEuNXJlbTtcclxuXHJcbi8vIzBkY2FmMCwgIzE3YTJiOFxyXG5cclxuLy8gQ29sb3JzXHJcbiRib2R5LWJnOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiRib2R5LWNvbG9yOiByZ2IoOTYsIDk2LCA5Nik7XHJcbiR5ZWxsb3c6IHJnYigyNTUsIDE2OCwgMjApO1xyXG4kb3JhbmdlOiByZ2IoMjM5LCAxMjQsIDApO1xyXG4kYmx1ZTogcmdiKDY1LCAxMTgsIDE0NSk7XHJcbiR0ZWFsOiByZ2IoMTksIDY5LCA5Nyk7XHJcbiRncmF5OiByZ2IoMTM4LCAxMzgsIDEzOCk7XHJcbiRncmF5LWRhcms6IHJnYig1MSwgNTEsIDUxKTtcclxuJGN5YW46ICMxN2EyYjg7XHJcblxyXG4kYmx1ZTogIzAwNTE4OTtcclxuJGJsdWUtaG92ZXI6ICMwMDQyNzI7XHJcbiRncmF5LWhvdmVyOiByZ2IoMTE2LCAxMTYsIDExNik7XHJcblxyXG4kcHJlc2VudC1jb2xvcjogIzI4YTc0NTtcclxuJGFic2VudC1jb2xvcjogI2RjMzU0NTtcclxuJHVuYXBwcm92ZWQtY29sb3I6ICR5ZWxsb3c7XHJcblxyXG4vLyBGb250XHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcblxyXG4vLyBSb290IEZvbnQgU2l6ZVxyXG4kcm9vdC1mb250LXNpemUtc2NhbGU6IDEuMDsgLy8gcmVsYXRpdmUgdG8gdGhlIHN0YW5kYXJkIDE2cHggZm9udCBzaXplIG9mIGEgYnJvd3NlclxyXG4kZm9udC1zaXplLWJhc2U6IG1hdGguZGl2KDEuMCwgJHJvb3QtZm9udC1zaXplLXNjYWxlKSAqIDFyZW07XHJcbiRyZW0tc2NhbGU6IG1hdGguZGl2KCRmb250LXNpemUtYmFzZSwgMXJlbSk7XHJcbi8vIEFkanVzdCBzcGFjaW5ncyBhbmQgcGFkZGluZ3MgdG8gY29tcGVuc2F0ZSBmb3IgYWRqdXN0ZWQgcm9vdC1mb250LXNjYWxlXHJcbiRzcGFjZXI6ICRmb250LXNpemUtYmFzZTtcclxuJHRhYmxlLWNlbGwtcGFkZGluZy15OiAgICAkcmVtLXNjYWxlICogMC43ICogLjVyZW07XHJcbiR0YWJsZS1jZWxsLXBhZGRpbmcteDogICAgJHJlbS1zY2FsZSAqIDAuNyAqIC41cmVtO1xyXG4kdGFibGUtY2VsbC1wYWRkaW5nLXktc206ICRyZW0tc2NhbGUgKiAwLjcgKiAuMjVyZW07XHJcbiR0YWJsZS1jZWxsLXBhZGRpbmcteC1zbTogJHJlbS1zY2FsZSAqIDAuNyAqIC4yNXJlbTtcclxuJHRhYmxlLWNlbGwtcGFkZGluZy15LW1kOiAkcmVtLXNjYWxlICogMC43ICogLjI1cmVtO1xyXG4kdGFibGUtY2VsbC1wYWRkaW5nLXgtbWQ6ICRyZW0tc2NhbGUgKiAwLjcgKiAuMjVyZW07XHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogJHJlbS1zY2FsZSAqIDAuNyAqIC4zNzVyZW07XHJcbiRpbnB1dC1idG4tcGFkZGluZy14OiAkcmVtLXNjYWxlICogMC43ICogLjc1cmVtO1xyXG5cclxuJGdyaWQtZ3V0dGVyLXdpZHRoOiAkcmVtLXNjYWxlICogMS41cmVtO1xyXG5cclxuLy8gQnV0dG9uc1xyXG4kaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4vLyBJY29uc1xyXG4kZXJ6LWljb24tc2l6ZTogKCRmb250LXNpemUtYmFzZSAqIDEuNDY2NjY2Nik7XHJcblxyXG5AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5cclxuOnJvb3Qge1xyXG4gICAgLS1zdGVsbHZlcnRyZXR1bmctcHJpbWFyeTogI3skYmx1ZX07XHJcbiAgICAtLXN0ZWxsdmVydHJldHVuZy1wcmltYXJ5LWhvdmVyOiAjeyRibHVlLWhvdmVyfTtcclxuICAgIC0tc3RlbGx2ZXJ0cmV0dW5nLXNlY29uZGFyeTogI3skZ3JheX07XHJcbiAgICAtLXN0ZWxsdmVydHJldHVuZy1zZWNvbmRhcnktaG92ZXI6ICN7JGdyYXktaG92ZXJ9O1xyXG59XHJcblxyXG4vLyBEcm9wZG93blxyXG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogJGdyYXktMjAwO1xyXG5cclxuLy8gVGFibGVzXHJcbiR0YWJsZS1oZWFkLWJnOiAkdGFibGUtYm9yZGVyLWNvbG9yO1xyXG4kdGFibGUtaGVhZC1jb2xvcjogJGdyYXktNjAwO1xyXG4kdGFibGUtZ3JvdXAtc2VwYXJhdG9yLWNvbG9yOiAkdGFibGUtYm9yZGVyLWNvbG9yO1xyXG4kdGFibGUtdGgtZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHJcbi8qKlxyXG4gKiBDdXN0b20gVmFyaWFibGVzXHJcbiAqL1xyXG5cclxuLy8gQ3VzdG9tIHZhcmlhYmxlc1xyXG4kZXJ6LWNvbnRhaW5lci1tYXgtd2lkdGg6IDk2MHB4O1xyXG4kZXJ6LWNvbnRhaW5lci1wYWRkaW5nLXg6ICRzcGFjZXI7XHJcbiRlcnotY29udGFpbmVyLXBhZGRpbmcteTogJHNwYWNlcjtcclxuJGVyei1wcmVzZW5jZS1jb250cm9sLWVudHJ5LW1pbi13aWR0aDogNDAwcHg7XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9ib290c3RyYXAtdmFyaWFibGVzXCI7XHJcblxyXG4uc3Bpbm5lci1jb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICA6aG9zdDpub3QoLmlubGluZSkgJiB7XHJcbiAgICB0b3A6IC0xMzFweDtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNwaW5uZXItYm9yZGVyIHtcclxuICB3aWR0aDogJHJlbS1zY2FsZSAqIDRyZW07XHJcbiAgaGVpZ2h0OiAkcmVtLXNjYWxlICogNHJlbTtcclxuXHJcbiAgOmhvc3Q6bm90KC5pbmxpbmUpICYge1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6628:
/*!********************************************************************!*\
  !*** ./src/app/shared/components/typeahead/typeahead.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeaheadComponent": () => (/* binding */ TypeaheadComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 4661);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ 8684);
/* harmony import */ var _utils_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/filter */ 3978);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 3935);









function TypeaheadComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TypeaheadComponent_button_8_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.modelChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function TypeaheadComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} }
const FETCH_DEBOUNCE_TIME = 300;
const MINIMAL_TERM_LENGTH = 3;
class TypeaheadComponent {
    constructor() {
        this.selectedItem$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.error = false;
        this.placeholder = 'shared.typeahead.default-placeholder';
        this.valueChange = this.selectedItem$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((item) => (item ? item.Key : null)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)());
        this.componentId = (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"])('erz-typeahead-');
        this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
        this.search = (term$) => {
            return term$.pipe(processTerm(MINIMAL_TERM_LENGTH, FETCH_DEBOUNCE_TIME), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(this.fetchItems.bind(this)));
        };
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (changes.value &&
            changes.value.currentValue &&
            changes.value.currentValue !== this.selectedItemId) {
            this.fetchItem(changes.value.currentValue).subscribe((item) => {
                this.modelChange(item);
            });
        }
    }
    format(item) {
        return item.Value;
    }
    modelChange(value) {
        this.selectedItem$.next(value instanceof Object ? value : null);
    }
    get selectedItemId() {
        return this.selectedItem$.value ? this.selectedItem$.value.Key : null;
    }
    fetchItems(term) {
        this.loading$.next(true);
        return this.typeaheadService
            .getTypeaheadItems(term, this.additionalHttpParams)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this.loading$.next(false)));
    }
    fetchItem(id) {
        this.loading$.next(true);
        return this.typeaheadService
            .getTypeaheadItemById(id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this.loading$.next(false)));
    }
}
TypeaheadComponent.ɵfac = function TypeaheadComponent_Factory(t) { return new (t || TypeaheadComponent)(); };
TypeaheadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TypeaheadComponent, selectors: [["erz-typeahead"]], inputs: { error: "error", typeaheadService: "typeaheadService", placeholder: "placeholder", value: "value", additionalHttpParams: "additionalHttpParams" }, outputs: { valueChange: "valueChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 11, vars: 20, consts: [[1, "input-group"], [1, "input-group-text", 3, "id"], [1, "material-icons"], ["type", "text", 1, "form-control", 3, "ngbTypeahead", "inputFormatter", "resultFormatter", "ngModel", "ngModelChange", "input"], ["class", "btn btn-link text-decoration-none typeahead-clear", "type", "button", 3, "click", 4, "ngIf"], ["class", "spinner-container", 4, "ngIf"], ["type", "button", 1, "btn", "btn-link", "text-decoration-none", "typeahead-clear", 3, "click"], [1, "spinner-container"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], [1, "visually-hidden"]], template: function TypeaheadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "span", 1)(2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TypeaheadComponent_Template_input_ngModelChange_4_listener($event) { return ctx.modelChange($event); })("input", function TypeaheadComponent_Template_input_input_4_listener($event) { return $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TypeaheadComponent_button_8_Template, 3, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TypeaheadComponent_div_9_Template, 4, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.componentId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbTypeahead", ctx.search)("inputFormatter", ctx.format)("resultFormatter", ctx.format)("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 16, ctx.selectedItem$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 12, ctx.placeholder))("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 14, ctx.placeholder))("aria-describedby", ctx.componentId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedItemId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 18, ctx.loading$));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbTypeahead, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe], styles: ["[_ngcontent-%COMP%]:root {\n  --stellvertretung-primary: #005189;\n  --stellvertretung-primary-hover: #004272;\n  --stellvertretung-secondary: #8a8a8a;\n  --stellvertretung-secondary-hover: #747474;\n}\n\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n}\n.spinner-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0.75rem;\n  display: flex;\n  align-items: center;\n  z-index: 1001;\n}\n.spinner-border[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\ninput[_ngcontent-%COMP%] {\n  padding-right: 2.5em;\n}\nbutton.typeahead-clear[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  z-index: 3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib290c3RyYXAtdmFyaWFibGVzLnNjc3MiLCJ0eXBlYWhlYWQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7O0VBQUE7QUE0REE7RUFDSSxrQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtBQzNESjtBRHVFQTs7RUFBQTtBQzdFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQVlGO0FBVEE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFZRjtBQVZBO0VBQ0UsY0NIUztBRGdCWDtBQVZBO0VBQ0Usb0JBQUE7QUFhRjtBQVZBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQWFGIiwiZmlsZSI6InR5cGVhaGVhZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgXCJzYXNzOm1hdGhcIjtcclxuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnNcIjtcclxuXHJcbi8qKlxyXG4gKiBCb290c3RyYXAgdmFyaWFibGVzIG92ZXJyaWRlc1xyXG4gKi9cclxuXHJcbi8vIGRpc2FibGUgcmVzcG9uc2l6ZSBmb250IHNpemVzXHJcbiRlbmFibGUtcmZzOiBmYWxzZTtcclxuXHJcbi8vIGNvbnRhaW5lciBwYWRkaW5nXHJcbiRjb250YWluZXItcGFkZGluZy14OiAxLjVyZW07XHJcblxyXG4vLyMwZGNhZjAsICMxN2EyYjhcclxuXHJcbi8vIENvbG9yc1xyXG4kYm9keS1iZzogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4kYm9keS1jb2xvcjogcmdiKDk2LCA5NiwgOTYpO1xyXG4keWVsbG93OiByZ2IoMjU1LCAxNjgsIDIwKTtcclxuJG9yYW5nZTogcmdiKDIzOSwgMTI0LCAwKTtcclxuJGJsdWU6IHJnYig2NSwgMTE4LCAxNDUpO1xyXG4kdGVhbDogcmdiKDE5LCA2OSwgOTcpO1xyXG4kZ3JheTogcmdiKDEzOCwgMTM4LCAxMzgpO1xyXG4kZ3JheS1kYXJrOiByZ2IoNTEsIDUxLCA1MSk7XHJcbiRjeWFuOiAjMTdhMmI4O1xyXG5cclxuJGJsdWU6ICMwMDUxODk7XHJcbiRibHVlLWhvdmVyOiAjMDA0MjcyO1xyXG4kZ3JheS1ob3ZlcjogcmdiKDExNiwgMTE2LCAxMTYpO1xyXG5cclxuJHByZXNlbnQtY29sb3I6ICMyOGE3NDU7XHJcbiRhYnNlbnQtY29sb3I6ICNkYzM1NDU7XHJcbiR1bmFwcHJvdmVkLWNvbG9yOiAkeWVsbG93O1xyXG5cclxuLy8gRm9udFxyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gUm9vdCBGb250IFNpemVcclxuJHJvb3QtZm9udC1zaXplLXNjYWxlOiAxLjA7IC8vIHJlbGF0aXZlIHRvIHRoZSBzdGFuZGFyZCAxNnB4IGZvbnQgc2l6ZSBvZiBhIGJyb3dzZXJcclxuJGZvbnQtc2l6ZS1iYXNlOiBtYXRoLmRpdigxLjAsICRyb290LWZvbnQtc2l6ZS1zY2FsZSkgKiAxcmVtO1xyXG4kcmVtLXNjYWxlOiBtYXRoLmRpdigkZm9udC1zaXplLWJhc2UsIDFyZW0pO1xyXG4vLyBBZGp1c3Qgc3BhY2luZ3MgYW5kIHBhZGRpbmdzIHRvIGNvbXBlbnNhdGUgZm9yIGFkanVzdGVkIHJvb3QtZm9udC1zY2FsZVxyXG4kc3BhY2VyOiAkZm9udC1zaXplLWJhc2U7XHJcbiR0YWJsZS1jZWxsLXBhZGRpbmcteTogICAgJHJlbS1zY2FsZSAqIDAuNyAqIC41cmVtO1xyXG4kdGFibGUtY2VsbC1wYWRkaW5nLXg6ICAgICRyZW0tc2NhbGUgKiAwLjcgKiAuNXJlbTtcclxuJHRhYmxlLWNlbGwtcGFkZGluZy15LXNtOiAkcmVtLXNjYWxlICogMC43ICogLjI1cmVtO1xyXG4kdGFibGUtY2VsbC1wYWRkaW5nLXgtc206ICRyZW0tc2NhbGUgKiAwLjcgKiAuMjVyZW07XHJcbiR0YWJsZS1jZWxsLXBhZGRpbmcteS1tZDogJHJlbS1zY2FsZSAqIDAuNyAqIC4yNXJlbTtcclxuJHRhYmxlLWNlbGwtcGFkZGluZy14LW1kOiAkcmVtLXNjYWxlICogMC43ICogLjI1cmVtO1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6ICRyZW0tc2NhbGUgKiAwLjcgKiAuMzc1cmVtO1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteDogJHJlbS1zY2FsZSAqIDAuNyAqIC43NXJlbTtcclxuXHJcbiRncmlkLWd1dHRlci13aWR0aDogJHJlbS1zY2FsZSAqIDEuNXJlbTtcclxuXHJcbi8vIEJ1dHRvbnNcclxuJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuLy8gSWNvbnNcclxuJGVyei1pY29uLXNpemU6ICgkZm9udC1zaXplLWJhc2UgKiAxLjQ2NjY2NjYpO1xyXG5cclxuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbjpyb290IHtcclxuICAgIC0tc3RlbGx2ZXJ0cmV0dW5nLXByaW1hcnk6ICN7JGJsdWV9O1xyXG4gICAgLS1zdGVsbHZlcnRyZXR1bmctcHJpbWFyeS1ob3ZlcjogI3skYmx1ZS1ob3Zlcn07XHJcbiAgICAtLXN0ZWxsdmVydHJldHVuZy1zZWNvbmRhcnk6ICN7JGdyYXl9O1xyXG4gICAgLS1zdGVsbHZlcnRyZXR1bmctc2Vjb25kYXJ5LWhvdmVyOiAjeyRncmF5LWhvdmVyfTtcclxufVxyXG5cclxuLy8gRHJvcGRvd25cclxuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICRncmF5LTIwMDtcclxuXHJcbi8vIFRhYmxlc1xyXG4kdGFibGUtaGVhZC1iZzogJHRhYmxlLWJvcmRlci1jb2xvcjtcclxuJHRhYmxlLWhlYWQtY29sb3I6ICRncmF5LTYwMDtcclxuJHRhYmxlLWdyb3VwLXNlcGFyYXRvci1jb2xvcjogJHRhYmxlLWJvcmRlci1jb2xvcjtcclxuJHRhYmxlLXRoLWZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblxyXG4vKipcclxuICogQ3VzdG9tIFZhcmlhYmxlc1xyXG4gKi9cclxuXHJcbi8vIEN1c3RvbSB2YXJpYWJsZXNcclxuJGVyei1jb250YWluZXItbWF4LXdpZHRoOiA5NjBweDtcclxuJGVyei1jb250YWluZXItcGFkZGluZy14OiAkc3BhY2VyO1xyXG4kZXJ6LWNvbnRhaW5lci1wYWRkaW5nLXk6ICRzcGFjZXI7XHJcbiRlcnotcHJlc2VuY2UtY29udHJvbC1lbnRyeS1taW4td2lkdGg6IDQwMHB4O1xyXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYm9vdHN0cmFwLXZhcmlhYmxlc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNwaW5uZXItY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMC43NSAqICRzcGFjZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6ICR6aW5kZXgtZHJvcGRvd24gKyAxO1xyXG59XHJcbi5zcGlubmVyLWJvcmRlciB7XHJcbiAgY29sb3I6ICRncmF5LTYwMDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIuNWVtO1xyXG59XHJcblxyXG5idXR0b24udHlwZWFoZWFkLWNsZWFyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMztcclxufVxyXG4iLCIvLyBWYXJpYWJsZXNcbi8vXG4vLyBWYXJpYWJsZXMgc2hvdWxkIGZvbGxvdyB0aGUgYCRjb21wb25lbnQtc3RhdGUtcHJvcGVydHktc2l6ZWAgZm9ybXVsYSBmb3Jcbi8vIGNvbnNpc3RlbnQgbmFtaW5nLiBFeDogJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yIGFuZCAkbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzLlxuXG4vLyBDb2xvciBzeXN0ZW1cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGdyYXktY29sb3ItdmFyaWFibGVzXG4kd2hpdGU6ICAgICNmZmYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICNmOGY5ZmEgIWRlZmF1bHQ7XG4kZ3JheS0yMDA6ICNlOWVjZWYgIWRlZmF1bHQ7XG4kZ3JheS0zMDA6ICNkZWUyZTYgIWRlZmF1bHQ7XG4kZ3JheS00MDA6ICNjZWQ0ZGEgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICNhZGI1YmQgIWRlZmF1bHQ7XG4kZ3JheS02MDA6ICM2Yzc1N2QgIWRlZmF1bHQ7XG4kZ3JheS03MDA6ICM0OTUwNTcgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICMzNDNhNDAgIWRlZmF1bHQ7XG4kZ3JheS05MDA6ICMyMTI1MjkgIWRlZmF1bHQ7XG4kYmxhY2s6ICAgICMwMDAgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGdyYXktY29sb3ItdmFyaWFibGVzXG5cbi8vIGZ1c3YtZGlzYWJsZVxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGdyYXktY29sb3JzLW1hcFxuJGdyYXlzOiAoXG4gIFwiMTAwXCI6ICRncmF5LTEwMCxcbiAgXCIyMDBcIjogJGdyYXktMjAwLFxuICBcIjMwMFwiOiAkZ3JheS0zMDAsXG4gIFwiNDAwXCI6ICRncmF5LTQwMCxcbiAgXCI1MDBcIjogJGdyYXktNTAwLFxuICBcIjYwMFwiOiAkZ3JheS02MDAsXG4gIFwiNzAwXCI6ICRncmF5LTcwMCxcbiAgXCI4MDBcIjogJGdyYXktODAwLFxuICBcIjkwMFwiOiAkZ3JheS05MDBcbikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGdyYXktY29sb3JzLW1hcFxuLy8gZnVzdi1lbmFibGVcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGNvbG9yLXZhcmlhYmxlc1xuJGJsdWU6ICAgICMwZDZlZmQgIWRlZmF1bHQ7XG4kaW5kaWdvOiAgIzY2MTBmMiAhZGVmYXVsdDtcbiRwdXJwbGU6ICAjNmY0MmMxICFkZWZhdWx0O1xuJHBpbms6ICAgICNkNjMzODQgIWRlZmF1bHQ7XG4kcmVkOiAgICAgI2RjMzU0NSAhZGVmYXVsdDtcbiRvcmFuZ2U6ICAjZmQ3ZTE0ICFkZWZhdWx0O1xuJHllbGxvdzogICNmZmMxMDcgIWRlZmF1bHQ7XG4kZ3JlZW46ICAgIzE5ODc1NCAhZGVmYXVsdDtcbiR0ZWFsOiAgICAjMjBjOTk3ICFkZWZhdWx0O1xuJGN5YW46ICAgICMwZGNhZjAgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGNvbG9yLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgY29sb3JzLW1hcFxuJGNvbG9yczogKFxuICBcImJsdWVcIjogICAgICAgJGJsdWUsXG4gIFwiaW5kaWdvXCI6ICAgICAkaW5kaWdvLFxuICBcInB1cnBsZVwiOiAgICAgJHB1cnBsZSxcbiAgXCJwaW5rXCI6ICAgICAgICRwaW5rLFxuICBcInJlZFwiOiAgICAgICAgJHJlZCxcbiAgXCJvcmFuZ2VcIjogICAgICRvcmFuZ2UsXG4gIFwieWVsbG93XCI6ICAgICAkeWVsbG93LFxuICBcImdyZWVuXCI6ICAgICAgJGdyZWVuLFxuICBcInRlYWxcIjogICAgICAgJHRlYWwsXG4gIFwiY3lhblwiOiAgICAgICAkY3lhbixcbiAgXCJ3aGl0ZVwiOiAgICAgICR3aGl0ZSxcbiAgXCJncmF5XCI6ICAgICAgICRncmF5LTYwMCxcbiAgXCJncmF5LWRhcmtcIjogICRncmF5LTgwMFxuKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgY29sb3JzLW1hcFxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdGhlbWUtY29sb3ItdmFyaWFibGVzXG4kcHJpbWFyeTogICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICAgICRncmVlbiAhZGVmYXVsdDtcbiRpbmZvOiAgICAgICAgICAkY3lhbiAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAkeWVsbG93ICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICAgICRyZWQgIWRlZmF1bHQ7XG4kbGlnaHQ6ICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGRhcms6ICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdGhlbWUtY29sb3ItdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB0aGVtZS1jb2xvcnMtbWFwXG4kdGhlbWUtY29sb3JzOiAoXG4gIFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeSxcbiAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnksXG4gIFwic3VjY2Vzc1wiOiAgICAkc3VjY2VzcyxcbiAgXCJpbmZvXCI6ICAgICAgICRpbmZvLFxuICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXG4gIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLFxuICBcImxpZ2h0XCI6ICAgICAgJGxpZ2h0LFxuICBcImRhcmtcIjogICAgICAgJGRhcmtcbikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHRoZW1lLWNvbG9ycy1tYXBcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHRoZW1lLWNvbG9ycy1yZ2JcbiR0aGVtZS1jb2xvcnMtcmdiOiBtYXAtbG9vcCgkdGhlbWUtY29sb3JzLCB0by1yZ2IsIFwiJHZhbHVlXCIpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB0aGVtZS1jb2xvcnMtcmdiXG5cbi8vIFRoZSBjb250cmFzdCByYXRpbyB0byByZWFjaCBhZ2FpbnN0IHdoaXRlLCB0byBkZXRlcm1pbmUgaWYgY29sb3IgY2hhbmdlcyBmcm9tIFwibGlnaHRcIiB0byBcImRhcmtcIi4gQWNjZXB0YWJsZSB2YWx1ZXMgZm9yIFdDQUcgMi4wIGFyZSAzLCA0LjUgYW5kIDcuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL1dDQUcyMC8jdmlzdWFsLWF1ZGlvLWNvbnRyYXN0LWNvbnRyYXN0XG4kbWluLWNvbnRyYXN0LXJhdGlvOiAgIDQuNSAhZGVmYXVsdDtcblxuLy8gQ3VzdG9taXplIHRoZSBsaWdodCBhbmQgZGFyayB0ZXh0IGNvbG9ycyBmb3IgdXNlIGluIG91ciBjb2xvciBjb250cmFzdCBmdW5jdGlvbi5cbiRjb2xvci1jb250cmFzdC1kYXJrOiAgICAgICRibGFjayAhZGVmYXVsdDtcbiRjb2xvci1jb250cmFzdC1saWdodDogICAgICR3aGl0ZSAhZGVmYXVsdDtcblxuLy8gZnVzdi1kaXNhYmxlXG4kYmx1ZS0xMDA6IHRpbnQtY29sb3IoJGJsdWUsIDgwJSkgIWRlZmF1bHQ7XG4kYmx1ZS0yMDA6IHRpbnQtY29sb3IoJGJsdWUsIDYwJSkgIWRlZmF1bHQ7XG4kYmx1ZS0zMDA6IHRpbnQtY29sb3IoJGJsdWUsIDQwJSkgIWRlZmF1bHQ7XG4kYmx1ZS00MDA6IHRpbnQtY29sb3IoJGJsdWUsIDIwJSkgIWRlZmF1bHQ7XG4kYmx1ZS01MDA6ICRibHVlICFkZWZhdWx0O1xuJGJsdWUtNjAwOiBzaGFkZS1jb2xvcigkYmx1ZSwgMjAlKSAhZGVmYXVsdDtcbiRibHVlLTcwMDogc2hhZGUtY29sb3IoJGJsdWUsIDQwJSkgIWRlZmF1bHQ7XG4kYmx1ZS04MDA6IHNoYWRlLWNvbG9yKCRibHVlLCA2MCUpICFkZWZhdWx0O1xuJGJsdWUtOTAwOiBzaGFkZS1jb2xvcigkYmx1ZSwgODAlKSAhZGVmYXVsdDtcblxuJGluZGlnby0xMDA6IHRpbnQtY29sb3IoJGluZGlnbywgODAlKSAhZGVmYXVsdDtcbiRpbmRpZ28tMjAwOiB0aW50LWNvbG9yKCRpbmRpZ28sIDYwJSkgIWRlZmF1bHQ7XG4kaW5kaWdvLTMwMDogdGludC1jb2xvcigkaW5kaWdvLCA0MCUpICFkZWZhdWx0O1xuJGluZGlnby00MDA6IHRpbnQtY29sb3IoJGluZGlnbywgMjAlKSAhZGVmYXVsdDtcbiRpbmRpZ28tNTAwOiAkaW5kaWdvICFkZWZhdWx0O1xuJGluZGlnby02MDA6IHNoYWRlLWNvbG9yKCRpbmRpZ28sIDIwJSkgIWRlZmF1bHQ7XG4kaW5kaWdvLTcwMDogc2hhZGUtY29sb3IoJGluZGlnbywgNDAlKSAhZGVmYXVsdDtcbiRpbmRpZ28tODAwOiBzaGFkZS1jb2xvcigkaW5kaWdvLCA2MCUpICFkZWZhdWx0O1xuJGluZGlnby05MDA6IHNoYWRlLWNvbG9yKCRpbmRpZ28sIDgwJSkgIWRlZmF1bHQ7XG5cbiRwdXJwbGUtMTAwOiB0aW50LWNvbG9yKCRwdXJwbGUsIDgwJSkgIWRlZmF1bHQ7XG4kcHVycGxlLTIwMDogdGludC1jb2xvcigkcHVycGxlLCA2MCUpICFkZWZhdWx0O1xuJHB1cnBsZS0zMDA6IHRpbnQtY29sb3IoJHB1cnBsZSwgNDAlKSAhZGVmYXVsdDtcbiRwdXJwbGUtNDAwOiB0aW50LWNvbG9yKCRwdXJwbGUsIDIwJSkgIWRlZmF1bHQ7XG4kcHVycGxlLTUwMDogJHB1cnBsZSAhZGVmYXVsdDtcbiRwdXJwbGUtNjAwOiBzaGFkZS1jb2xvcigkcHVycGxlLCAyMCUpICFkZWZhdWx0O1xuJHB1cnBsZS03MDA6IHNoYWRlLWNvbG9yKCRwdXJwbGUsIDQwJSkgIWRlZmF1bHQ7XG4kcHVycGxlLTgwMDogc2hhZGUtY29sb3IoJHB1cnBsZSwgNjAlKSAhZGVmYXVsdDtcbiRwdXJwbGUtOTAwOiBzaGFkZS1jb2xvcigkcHVycGxlLCA4MCUpICFkZWZhdWx0O1xuXG4kcGluay0xMDA6IHRpbnQtY29sb3IoJHBpbmssIDgwJSkgIWRlZmF1bHQ7XG4kcGluay0yMDA6IHRpbnQtY29sb3IoJHBpbmssIDYwJSkgIWRlZmF1bHQ7XG4kcGluay0zMDA6IHRpbnQtY29sb3IoJHBpbmssIDQwJSkgIWRlZmF1bHQ7XG4kcGluay00MDA6IHRpbnQtY29sb3IoJHBpbmssIDIwJSkgIWRlZmF1bHQ7XG4kcGluay01MDA6ICRwaW5rICFkZWZhdWx0O1xuJHBpbmstNjAwOiBzaGFkZS1jb2xvcigkcGluaywgMjAlKSAhZGVmYXVsdDtcbiRwaW5rLTcwMDogc2hhZGUtY29sb3IoJHBpbmssIDQwJSkgIWRlZmF1bHQ7XG4kcGluay04MDA6IHNoYWRlLWNvbG9yKCRwaW5rLCA2MCUpICFkZWZhdWx0O1xuJHBpbmstOTAwOiBzaGFkZS1jb2xvcigkcGluaywgODAlKSAhZGVmYXVsdDtcblxuJHJlZC0xMDA6IHRpbnQtY29sb3IoJHJlZCwgODAlKSAhZGVmYXVsdDtcbiRyZWQtMjAwOiB0aW50LWNvbG9yKCRyZWQsIDYwJSkgIWRlZmF1bHQ7XG4kcmVkLTMwMDogdGludC1jb2xvcigkcmVkLCA0MCUpICFkZWZhdWx0O1xuJHJlZC00MDA6IHRpbnQtY29sb3IoJHJlZCwgMjAlKSAhZGVmYXVsdDtcbiRyZWQtNTAwOiAkcmVkICFkZWZhdWx0O1xuJHJlZC02MDA6IHNoYWRlLWNvbG9yKCRyZWQsIDIwJSkgIWRlZmF1bHQ7XG4kcmVkLTcwMDogc2hhZGUtY29sb3IoJHJlZCwgNDAlKSAhZGVmYXVsdDtcbiRyZWQtODAwOiBzaGFkZS1jb2xvcigkcmVkLCA2MCUpICFkZWZhdWx0O1xuJHJlZC05MDA6IHNoYWRlLWNvbG9yKCRyZWQsIDgwJSkgIWRlZmF1bHQ7XG5cbiRvcmFuZ2UtMTAwOiB0aW50LWNvbG9yKCRvcmFuZ2UsIDgwJSkgIWRlZmF1bHQ7XG4kb3JhbmdlLTIwMDogdGludC1jb2xvcigkb3JhbmdlLCA2MCUpICFkZWZhdWx0O1xuJG9yYW5nZS0zMDA6IHRpbnQtY29sb3IoJG9yYW5nZSwgNDAlKSAhZGVmYXVsdDtcbiRvcmFuZ2UtNDAwOiB0aW50LWNvbG9yKCRvcmFuZ2UsIDIwJSkgIWRlZmF1bHQ7XG4kb3JhbmdlLTUwMDogJG9yYW5nZSAhZGVmYXVsdDtcbiRvcmFuZ2UtNjAwOiBzaGFkZS1jb2xvcigkb3JhbmdlLCAyMCUpICFkZWZhdWx0O1xuJG9yYW5nZS03MDA6IHNoYWRlLWNvbG9yKCRvcmFuZ2UsIDQwJSkgIWRlZmF1bHQ7XG4kb3JhbmdlLTgwMDogc2hhZGUtY29sb3IoJG9yYW5nZSwgNjAlKSAhZGVmYXVsdDtcbiRvcmFuZ2UtOTAwOiBzaGFkZS1jb2xvcigkb3JhbmdlLCA4MCUpICFkZWZhdWx0O1xuXG4keWVsbG93LTEwMDogdGludC1jb2xvcigkeWVsbG93LCA4MCUpICFkZWZhdWx0O1xuJHllbGxvdy0yMDA6IHRpbnQtY29sb3IoJHllbGxvdywgNjAlKSAhZGVmYXVsdDtcbiR5ZWxsb3ctMzAwOiB0aW50LWNvbG9yKCR5ZWxsb3csIDQwJSkgIWRlZmF1bHQ7XG4keWVsbG93LTQwMDogdGludC1jb2xvcigkeWVsbG93LCAyMCUpICFkZWZhdWx0O1xuJHllbGxvdy01MDA6ICR5ZWxsb3cgIWRlZmF1bHQ7XG4keWVsbG93LTYwMDogc2hhZGUtY29sb3IoJHllbGxvdywgMjAlKSAhZGVmYXVsdDtcbiR5ZWxsb3ctNzAwOiBzaGFkZS1jb2xvcigkeWVsbG93LCA0MCUpICFkZWZhdWx0O1xuJHllbGxvdy04MDA6IHNoYWRlLWNvbG9yKCR5ZWxsb3csIDYwJSkgIWRlZmF1bHQ7XG4keWVsbG93LTkwMDogc2hhZGUtY29sb3IoJHllbGxvdywgODAlKSAhZGVmYXVsdDtcblxuJGdyZWVuLTEwMDogdGludC1jb2xvcigkZ3JlZW4sIDgwJSkgIWRlZmF1bHQ7XG4kZ3JlZW4tMjAwOiB0aW50LWNvbG9yKCRncmVlbiwgNjAlKSAhZGVmYXVsdDtcbiRncmVlbi0zMDA6IHRpbnQtY29sb3IoJGdyZWVuLCA0MCUpICFkZWZhdWx0O1xuJGdyZWVuLTQwMDogdGludC1jb2xvcigkZ3JlZW4sIDIwJSkgIWRlZmF1bHQ7XG4kZ3JlZW4tNTAwOiAkZ3JlZW4gIWRlZmF1bHQ7XG4kZ3JlZW4tNjAwOiBzaGFkZS1jb2xvcigkZ3JlZW4sIDIwJSkgIWRlZmF1bHQ7XG4kZ3JlZW4tNzAwOiBzaGFkZS1jb2xvcigkZ3JlZW4sIDQwJSkgIWRlZmF1bHQ7XG4kZ3JlZW4tODAwOiBzaGFkZS1jb2xvcigkZ3JlZW4sIDYwJSkgIWRlZmF1bHQ7XG4kZ3JlZW4tOTAwOiBzaGFkZS1jb2xvcigkZ3JlZW4sIDgwJSkgIWRlZmF1bHQ7XG5cbiR0ZWFsLTEwMDogdGludC1jb2xvcigkdGVhbCwgODAlKSAhZGVmYXVsdDtcbiR0ZWFsLTIwMDogdGludC1jb2xvcigkdGVhbCwgNjAlKSAhZGVmYXVsdDtcbiR0ZWFsLTMwMDogdGludC1jb2xvcigkdGVhbCwgNDAlKSAhZGVmYXVsdDtcbiR0ZWFsLTQwMDogdGludC1jb2xvcigkdGVhbCwgMjAlKSAhZGVmYXVsdDtcbiR0ZWFsLTUwMDogJHRlYWwgIWRlZmF1bHQ7XG4kdGVhbC02MDA6IHNoYWRlLWNvbG9yKCR0ZWFsLCAyMCUpICFkZWZhdWx0O1xuJHRlYWwtNzAwOiBzaGFkZS1jb2xvcigkdGVhbCwgNDAlKSAhZGVmYXVsdDtcbiR0ZWFsLTgwMDogc2hhZGUtY29sb3IoJHRlYWwsIDYwJSkgIWRlZmF1bHQ7XG4kdGVhbC05MDA6IHNoYWRlLWNvbG9yKCR0ZWFsLCA4MCUpICFkZWZhdWx0O1xuXG4kY3lhbi0xMDA6IHRpbnQtY29sb3IoJGN5YW4sIDgwJSkgIWRlZmF1bHQ7XG4kY3lhbi0yMDA6IHRpbnQtY29sb3IoJGN5YW4sIDYwJSkgIWRlZmF1bHQ7XG4kY3lhbi0zMDA6IHRpbnQtY29sb3IoJGN5YW4sIDQwJSkgIWRlZmF1bHQ7XG4kY3lhbi00MDA6IHRpbnQtY29sb3IoJGN5YW4sIDIwJSkgIWRlZmF1bHQ7XG4kY3lhbi01MDA6ICRjeWFuICFkZWZhdWx0O1xuJGN5YW4tNjAwOiBzaGFkZS1jb2xvcigkY3lhbiwgMjAlKSAhZGVmYXVsdDtcbiRjeWFuLTcwMDogc2hhZGUtY29sb3IoJGN5YW4sIDQwJSkgIWRlZmF1bHQ7XG4kY3lhbi04MDA6IHNoYWRlLWNvbG9yKCRjeWFuLCA2MCUpICFkZWZhdWx0O1xuJGN5YW4tOTAwOiBzaGFkZS1jb2xvcigkY3lhbiwgODAlKSAhZGVmYXVsdDtcblxuJGJsdWVzOiAoXG4gIFwiYmx1ZS0xMDBcIjogJGJsdWUtMTAwLFxuICBcImJsdWUtMjAwXCI6ICRibHVlLTIwMCxcbiAgXCJibHVlLTMwMFwiOiAkYmx1ZS0zMDAsXG4gIFwiYmx1ZS00MDBcIjogJGJsdWUtNDAwLFxuICBcImJsdWUtNTAwXCI6ICRibHVlLTUwMCxcbiAgXCJibHVlLTYwMFwiOiAkYmx1ZS02MDAsXG4gIFwiYmx1ZS03MDBcIjogJGJsdWUtNzAwLFxuICBcImJsdWUtODAwXCI6ICRibHVlLTgwMCxcbiAgXCJibHVlLTkwMFwiOiAkYmx1ZS05MDBcbikgIWRlZmF1bHQ7XG5cbiRpbmRpZ29zOiAoXG4gIFwiaW5kaWdvLTEwMFwiOiAkaW5kaWdvLTEwMCxcbiAgXCJpbmRpZ28tMjAwXCI6ICRpbmRpZ28tMjAwLFxuICBcImluZGlnby0zMDBcIjogJGluZGlnby0zMDAsXG4gIFwiaW5kaWdvLTQwMFwiOiAkaW5kaWdvLTQwMCxcbiAgXCJpbmRpZ28tNTAwXCI6ICRpbmRpZ28tNTAwLFxuICBcImluZGlnby02MDBcIjogJGluZGlnby02MDAsXG4gIFwiaW5kaWdvLTcwMFwiOiAkaW5kaWdvLTcwMCxcbiAgXCJpbmRpZ28tODAwXCI6ICRpbmRpZ28tODAwLFxuICBcImluZGlnby05MDBcIjogJGluZGlnby05MDBcbikgIWRlZmF1bHQ7XG5cbiRwdXJwbGVzOiAoXG4gIFwicHVycGxlLTEwMFwiOiAkcHVycGxlLTIwMCxcbiAgXCJwdXJwbGUtMjAwXCI6ICRwdXJwbGUtMTAwLFxuICBcInB1cnBsZS0zMDBcIjogJHB1cnBsZS0zMDAsXG4gIFwicHVycGxlLTQwMFwiOiAkcHVycGxlLTQwMCxcbiAgXCJwdXJwbGUtNTAwXCI6ICRwdXJwbGUtNTAwLFxuICBcInB1cnBsZS02MDBcIjogJHB1cnBsZS02MDAsXG4gIFwicHVycGxlLTcwMFwiOiAkcHVycGxlLTcwMCxcbiAgXCJwdXJwbGUtODAwXCI6ICRwdXJwbGUtODAwLFxuICBcInB1cnBsZS05MDBcIjogJHB1cnBsZS05MDBcbikgIWRlZmF1bHQ7XG5cbiRwaW5rczogKFxuICBcInBpbmstMTAwXCI6ICRwaW5rLTEwMCxcbiAgXCJwaW5rLTIwMFwiOiAkcGluay0yMDAsXG4gIFwicGluay0zMDBcIjogJHBpbmstMzAwLFxuICBcInBpbmstNDAwXCI6ICRwaW5rLTQwMCxcbiAgXCJwaW5rLTUwMFwiOiAkcGluay01MDAsXG4gIFwicGluay02MDBcIjogJHBpbmstNjAwLFxuICBcInBpbmstNzAwXCI6ICRwaW5rLTcwMCxcbiAgXCJwaW5rLTgwMFwiOiAkcGluay04MDAsXG4gIFwicGluay05MDBcIjogJHBpbmstOTAwXG4pICFkZWZhdWx0O1xuXG4kcmVkczogKFxuICBcInJlZC0xMDBcIjogJHJlZC0xMDAsXG4gIFwicmVkLTIwMFwiOiAkcmVkLTIwMCxcbiAgXCJyZWQtMzAwXCI6ICRyZWQtMzAwLFxuICBcInJlZC00MDBcIjogJHJlZC00MDAsXG4gIFwicmVkLTUwMFwiOiAkcmVkLTUwMCxcbiAgXCJyZWQtNjAwXCI6ICRyZWQtNjAwLFxuICBcInJlZC03MDBcIjogJHJlZC03MDAsXG4gIFwicmVkLTgwMFwiOiAkcmVkLTgwMCxcbiAgXCJyZWQtOTAwXCI6ICRyZWQtOTAwXG4pICFkZWZhdWx0O1xuXG4kb3JhbmdlczogKFxuICBcIm9yYW5nZS0xMDBcIjogJG9yYW5nZS0xMDAsXG4gIFwib3JhbmdlLTIwMFwiOiAkb3JhbmdlLTIwMCxcbiAgXCJvcmFuZ2UtMzAwXCI6ICRvcmFuZ2UtMzAwLFxuICBcIm9yYW5nZS00MDBcIjogJG9yYW5nZS00MDAsXG4gIFwib3JhbmdlLTUwMFwiOiAkb3JhbmdlLTUwMCxcbiAgXCJvcmFuZ2UtNjAwXCI6ICRvcmFuZ2UtNjAwLFxuICBcIm9yYW5nZS03MDBcIjogJG9yYW5nZS03MDAsXG4gIFwib3JhbmdlLTgwMFwiOiAkb3JhbmdlLTgwMCxcbiAgXCJvcmFuZ2UtOTAwXCI6ICRvcmFuZ2UtOTAwXG4pICFkZWZhdWx0O1xuXG4keWVsbG93czogKFxuICBcInllbGxvdy0xMDBcIjogJHllbGxvdy0xMDAsXG4gIFwieWVsbG93LTIwMFwiOiAkeWVsbG93LTIwMCxcbiAgXCJ5ZWxsb3ctMzAwXCI6ICR5ZWxsb3ctMzAwLFxuICBcInllbGxvdy00MDBcIjogJHllbGxvdy00MDAsXG4gIFwieWVsbG93LTUwMFwiOiAkeWVsbG93LTUwMCxcbiAgXCJ5ZWxsb3ctNjAwXCI6ICR5ZWxsb3ctNjAwLFxuICBcInllbGxvdy03MDBcIjogJHllbGxvdy03MDAsXG4gIFwieWVsbG93LTgwMFwiOiAkeWVsbG93LTgwMCxcbiAgXCJ5ZWxsb3ctOTAwXCI6ICR5ZWxsb3ctOTAwXG4pICFkZWZhdWx0O1xuXG4kZ3JlZW5zOiAoXG4gIFwiZ3JlZW4tMTAwXCI6ICRncmVlbi0xMDAsXG4gIFwiZ3JlZW4tMjAwXCI6ICRncmVlbi0yMDAsXG4gIFwiZ3JlZW4tMzAwXCI6ICRncmVlbi0zMDAsXG4gIFwiZ3JlZW4tNDAwXCI6ICRncmVlbi00MDAsXG4gIFwiZ3JlZW4tNTAwXCI6ICRncmVlbi01MDAsXG4gIFwiZ3JlZW4tNjAwXCI6ICRncmVlbi02MDAsXG4gIFwiZ3JlZW4tNzAwXCI6ICRncmVlbi03MDAsXG4gIFwiZ3JlZW4tODAwXCI6ICRncmVlbi04MDAsXG4gIFwiZ3JlZW4tOTAwXCI6ICRncmVlbi05MDBcbikgIWRlZmF1bHQ7XG5cbiR0ZWFsczogKFxuICBcInRlYWwtMTAwXCI6ICR0ZWFsLTEwMCxcbiAgXCJ0ZWFsLTIwMFwiOiAkdGVhbC0yMDAsXG4gIFwidGVhbC0zMDBcIjogJHRlYWwtMzAwLFxuICBcInRlYWwtNDAwXCI6ICR0ZWFsLTQwMCxcbiAgXCJ0ZWFsLTUwMFwiOiAkdGVhbC01MDAsXG4gIFwidGVhbC02MDBcIjogJHRlYWwtNjAwLFxuICBcInRlYWwtNzAwXCI6ICR0ZWFsLTcwMCxcbiAgXCJ0ZWFsLTgwMFwiOiAkdGVhbC04MDAsXG4gIFwidGVhbC05MDBcIjogJHRlYWwtOTAwXG4pICFkZWZhdWx0O1xuXG4kY3lhbnM6IChcbiAgXCJjeWFuLTEwMFwiOiAkY3lhbi0xMDAsXG4gIFwiY3lhbi0yMDBcIjogJGN5YW4tMjAwLFxuICBcImN5YW4tMzAwXCI6ICRjeWFuLTMwMCxcbiAgXCJjeWFuLTQwMFwiOiAkY3lhbi00MDAsXG4gIFwiY3lhbi01MDBcIjogJGN5YW4tNTAwLFxuICBcImN5YW4tNjAwXCI6ICRjeWFuLTYwMCxcbiAgXCJjeWFuLTcwMFwiOiAkY3lhbi03MDAsXG4gIFwiY3lhbi04MDBcIjogJGN5YW4tODAwLFxuICBcImN5YW4tOTAwXCI6ICRjeWFuLTkwMFxuKSAhZGVmYXVsdDtcbi8vIGZ1c3YtZW5hYmxlXG5cbi8vIENoYXJhY3RlcnMgd2hpY2ggYXJlIGVzY2FwZWQgYnkgdGhlIGVzY2FwZS1zdmcgZnVuY3Rpb25cbiRlc2NhcGVkLWNoYXJhY3RlcnM6IChcbiAgKFwiPFwiLCBcIiUzY1wiKSxcbiAgKFwiPlwiLCBcIiUzZVwiKSxcbiAgKFwiI1wiLCBcIiUyM1wiKSxcbiAgKFwiKFwiLCBcIiUyOFwiKSxcbiAgKFwiKVwiLCBcIiUyOVwiKSxcbikgIWRlZmF1bHQ7XG5cbi8vIE9wdGlvbnNcbi8vXG4vLyBRdWlja2x5IG1vZGlmeSBnbG9iYWwgc3R5bGluZyBieSBlbmFibGluZyBvciBkaXNhYmxpbmcgb3B0aW9uYWwgZmVhdHVyZXMuXG5cbiRlbmFibGUtY2FyZXQ6ICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXJvdW5kZWQ6ICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1zaGFkb3dzOiAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyYWRpZW50czogICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtdHJhbnNpdGlvbnM6ICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXJlZHVjZWQtbW90aW9uOiAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1zbW9vdGgtc2Nyb2xsOiAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtZ3JpZC1jbGFzc2VzOiAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLWNzc2dyaWQ6ICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtYnV0dG9uLXBvaW50ZXJzOiAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXJmczogICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS12YWxpZGF0aW9uLWljb25zOiAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtbmVnYXRpdmUtbWFyZ2luczogICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS1kZXByZWNhdGlvbi1tZXNzYWdlczogdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtaW1wb3J0YW50LXV0aWxpdGllczogIHRydWUgIWRlZmF1bHQ7XG5cbi8vIFByZWZpeCBmb3IgOnJvb3QgQ1NTIHZhcmlhYmxlc1xuXG4kdmFyaWFibGUtcHJlZml4OiAgICAgICAgICAgICBicy0gIWRlZmF1bHQ7XG5cbi8vIEdyYWRpZW50XG4vL1xuLy8gVGhlIGdyYWRpZW50IHdoaWNoIGlzIGFkZGVkIHRvIGNvbXBvbmVudHMgaWYgYCRlbmFibGUtZ3JhZGllbnRzYCBpcyBgdHJ1ZWBcbi8vIFRoaXMgZ3JhZGllbnQgaXMgYWxzbyBhZGRlZCB0byBlbGVtZW50cyB3aXRoIGAuYmctZ3JhZGllbnRgXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdmFyaWFibGUtZ3JhZGllbnRcbiRncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgkd2hpdGUsIC4xNSksIHJnYmEoJHdoaXRlLCAwKSkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHZhcmlhYmxlLWdyYWRpZW50XG5cbi8vIFNwYWNpbmdcbi8vXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXG4vLyB2YXJpYWJsZXMuIE1vc3RseSBmb2N1c2VkIG9uIHNwYWNpbmcuXG4vLyBZb3UgY2FuIGFkZCBtb3JlIGVudHJpZXMgdG8gdGhlICRzcGFjZXJzIG1hcCwgc2hvdWxkIHlvdSBuZWVkIG1vcmUgdmFyaWF0aW9uLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgc3BhY2VyLXZhcmlhYmxlcy1tYXBzXG4kc3BhY2VyOiAxcmVtICFkZWZhdWx0O1xuJHNwYWNlcnM6IChcbiAgMDogMCxcbiAgMTogJHNwYWNlciAqIC4yNSxcbiAgMjogJHNwYWNlciAqIC41LFxuICAzOiAkc3BhY2VyLFxuICA0OiAkc3BhY2VyICogMS41LFxuICA1OiAkc3BhY2VyICogMyxcbikgIWRlZmF1bHQ7XG5cbiRuZWdhdGl2ZS1zcGFjZXJzOiBpZigkZW5hYmxlLW5lZ2F0aXZlLW1hcmdpbnMsIG5lZ2F0aXZpZnktbWFwKCRzcGFjZXJzKSwgbnVsbCkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHNwYWNlci12YXJpYWJsZXMtbWFwc1xuXG4vLyBQb3NpdGlvblxuLy9cbi8vIERlZmluZSB0aGUgZWRnZSBwb3NpdGlvbmluZyBhbmNob3JzIG9mIHRoZSBwb3NpdGlvbiB1dGlsaXRpZXMuXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBwb3NpdGlvbi1tYXBcbiRwb3NpdGlvbi12YWx1ZXM6IChcbiAgMDogMCxcbiAgNTA6IDUwJSxcbiAgMTAwOiAxMDAlXG4pICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBwb3NpdGlvbi1tYXBcblxuLy8gQm9keVxuLy9cbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cblxuJGJvZHktYmc6ICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kYm9keS10ZXh0LWFsaWduOiAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuLy8gVXRpbGl0aWVzIG1hcHNcbi8vXG4vLyBFeHRlbmRzIHRoZSBkZWZhdWx0IGAkdGhlbWUtY29sb3JzYCBtYXBzIHRvIGhlbHAgY3JlYXRlIG91ciB1dGlsaXRpZXMuXG5cbi8vIENvbWUgdjYsIHdlJ2xsIGRlLWR1cGUgdGhlc2UgdmFyaWFibGVzLiBVbnRpbCB0aGVuLCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgd2Uga2VlcCB0aGVtIHRvIHJlYXNzaWduLlxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHV0aWxpdGllcy1jb2xvcnNcbiR1dGlsaXRpZXMtY29sb3JzOiAkdGhlbWUtY29sb3JzLXJnYiAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdXRpbGl0aWVzLWNvbG9yc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdXRpbGl0aWVzLXRleHQtY29sb3JzXG4kdXRpbGl0aWVzLXRleHQ6IG1hcC1tZXJnZShcbiAgJHV0aWxpdGllcy1jb2xvcnMsXG4gIChcbiAgICBcImJsYWNrXCI6IHRvLXJnYigkYmxhY2spLFxuICAgIFwid2hpdGVcIjogdG8tcmdiKCR3aGl0ZSksXG4gICAgXCJib2R5XCI6IHRvLXJnYigkYm9keS1jb2xvcilcbiAgKVxuKSAhZGVmYXVsdDtcbiR1dGlsaXRpZXMtdGV4dC1jb2xvcnM6IG1hcC1sb29wKCR1dGlsaXRpZXMtdGV4dCwgcmdiYS1jc3MtdmFyLCBcIiRrZXlcIiwgXCJ0ZXh0XCIpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB1dGlsaXRpZXMtdGV4dC1jb2xvcnNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHV0aWxpdGllcy1iZy1jb2xvcnNcbiR1dGlsaXRpZXMtYmc6IG1hcC1tZXJnZShcbiAgJHV0aWxpdGllcy1jb2xvcnMsXG4gIChcbiAgICBcImJsYWNrXCI6IHRvLXJnYigkYmxhY2spLFxuICAgIFwid2hpdGVcIjogdG8tcmdiKCR3aGl0ZSksXG4gICAgXCJib2R5XCI6IHRvLXJnYigkYm9keS1iZylcbiAgKVxuKSAhZGVmYXVsdDtcbiR1dGlsaXRpZXMtYmctY29sb3JzOiBtYXAtbG9vcCgkdXRpbGl0aWVzLWJnLCByZ2JhLWNzcy12YXIsIFwiJGtleVwiLCBcImJnXCIpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB1dGlsaXRpZXMtYmctY29sb3JzXG5cbi8vIExpbmtzXG4vL1xuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxuXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJpbWFyeSAhZGVmYXVsdDtcbiRsaW5rLWRlY29yYXRpb246ICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZSAhZGVmYXVsdDtcbiRsaW5rLXNoYWRlLXBlcmNlbnRhZ2U6ICAgICAgICAgICAgICAgICAgIDIwJSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0LWNvbG9yKCRsaW5rLWNvbG9yLCAkbGluay1zaGFkZS1wZXJjZW50YWdlKSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246ICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiRzdHJldGNoZWQtbGluay1wc2V1ZG8tZWxlbWVudDogICAgICAgICAgIGFmdGVyICFkZWZhdWx0O1xuJHN0cmV0Y2hlZC1saW5rLXotaW5kZXg6ICAgICAgICAgICAgICAgICAgMSAhZGVmYXVsdDtcblxuLy8gUGFyYWdyYXBoc1xuLy9cbi8vIFN0eWxlIHAgZWxlbWVudC5cblxuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAgIDFyZW0gIWRlZmF1bHQ7XG5cblxuLy8gR3JpZCBicmVha3BvaW50c1xuLy9cbi8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZ3JpZC1icmVha3BvaW50c1xuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHgsXG4gIHh4bDogMTQwMHB4XG4pICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBncmlkLWJyZWFrcG9pbnRzXG5cbkBpbmNsdWRlIF9hc3NlcnQtYXNjZW5kaW5nKCRncmlkLWJyZWFrcG9pbnRzLCBcIiRncmlkLWJyZWFrcG9pbnRzXCIpO1xuQGluY2x1ZGUgX2Fzc2VydC1zdGFydHMtYXQtemVybygkZ3JpZC1icmVha3BvaW50cywgXCIkZ3JpZC1icmVha3BvaW50c1wiKTtcblxuXG4vLyBHcmlkIGNvbnRhaW5lcnNcbi8vXG4vLyBEZWZpbmUgdGhlIG1heGltdW0gd2lkdGggb2YgYC5jb250YWluZXJgIGZvciBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgY29udGFpbmVyLW1heC13aWR0aHNcbiRjb250YWluZXItbWF4LXdpZHRoczogKFxuICBzbTogNTQwcHgsXG4gIG1kOiA3MjBweCxcbiAgbGc6IDk2MHB4LFxuICB4bDogMTE0MHB4LFxuICB4eGw6IDEzMjBweFxuKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgY29udGFpbmVyLW1heC13aWR0aHNcblxuQGluY2x1ZGUgX2Fzc2VydC1hc2NlbmRpbmcoJGNvbnRhaW5lci1tYXgtd2lkdGhzLCBcIiRjb250YWluZXItbWF4LXdpZHRoc1wiKTtcblxuXG4vLyBHcmlkIGNvbHVtbnNcbi8vXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cblxuJGdyaWQtY29sdW1uczogICAgICAgICAgICAgICAgMTIgIWRlZmF1bHQ7XG4kZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7XG4kZ3JpZC1yb3ctY29sdW1uczogICAgICAgICAgICA2ICFkZWZhdWx0O1xuXG4kZ3V0dGVyczogJHNwYWNlcnMgIWRlZmF1bHQ7XG5cbi8vIENvbnRhaW5lciBwYWRkaW5nXG5cbiRjb250YWluZXItcGFkZGluZy14OiAkZ3JpZC1ndXR0ZXItd2lkdGggKiAuNSAhZGVmYXVsdDtcblxuXG4vLyBDb21wb25lbnRzXG4vL1xuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgYm9yZGVyLXZhcmlhYmxlc1xuJGJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xuJGJvcmRlci13aWR0aHM6IChcbiAgMTogMXB4LFxuICAyOiAycHgsXG4gIDM6IDNweCxcbiAgNDogNHB4LFxuICA1OiA1cHhcbikgIWRlZmF1bHQ7XG5cbiRib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgYm9yZGVyLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgYm9yZGVyLXJhZGl1cy12YXJpYWJsZXNcbiRib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgIC4ycmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgLjNyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1waWxsOiAgICAgICAgICA1MHJlbSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgYm9yZGVyLXJhZGl1cy12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGJveC1zaGFkb3ctdmFyaWFibGVzXG4kYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC4xNSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1zbTogICAgICAgICAgICAgICAwIC4xMjVyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LWxnOiAgICAgICAgICAgICAgIDAgMXJlbSAzcmVtIHJnYmEoJGJsYWNrLCAuMTc1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LWluc2V0OiAgICAgICAgICAgIGluc2V0IDAgMXB4IDJweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGJveC1zaGFkb3ctdmFyaWFibGVzXG5cbiRjb21wb25lbnQtYWN0aXZlLWNvbG9yOiAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjb21wb25lbnQtYWN0aXZlLWJnOiAgICAgICAgICRwcmltYXJ5ICFkZWZhdWx0O1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgY2FyZXQtdmFyaWFibGVzXG4kY2FyZXQtd2lkdGg6ICAgICAgICAgICAgICAgICAuM2VtICFkZWZhdWx0O1xuJGNhcmV0LXZlcnRpY2FsLWFsaWduOiAgICAgICAgJGNhcmV0LXdpZHRoICogLjg1ICFkZWZhdWx0O1xuJGNhcmV0LXNwYWNpbmc6ICAgICAgICAgICAgICAgJGNhcmV0LXdpZHRoICogLjg1ICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBjYXJldC12YXJpYWJsZXNcblxuJHRyYW5zaXRpb24tYmFzZTogICAgICAgICAgICAgYWxsIC4ycyBlYXNlLWluLW91dCAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWZhZGU6ICAgICAgICAgICAgIG9wYWNpdHkgLjE1cyBsaW5lYXIgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3Mtc3RhcnQgY29sbGFwc2UtdHJhbnNpdGlvblxuJHRyYW5zaXRpb24tY29sbGFwc2U6ICAgICAgICAgaGVpZ2h0IC4zNXMgZWFzZSAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWNvbGxhcHNlLXdpZHRoOiAgIHdpZHRoIC4zNXMgZWFzZSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgY29sbGFwc2UtdHJhbnNpdGlvblxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSBmdW5jdGlvbi1kaXNhbGxvd2VkLWxpc3Rcbi8vIHNjc3MtZG9jcy1zdGFydCBhc3BlY3QtcmF0aW9zXG4kYXNwZWN0LXJhdGlvczogKFxuICBcIjF4MVwiOiAxMDAlLFxuICBcIjR4M1wiOiBjYWxjKDMgLyA0ICogMTAwJSksXG4gIFwiMTZ4OVwiOiBjYWxjKDkgLyAxNiAqIDEwMCUpLFxuICBcIjIxeDlcIjogY2FsYyg5IC8gMjEgKiAxMDAlKVxuKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgYXNwZWN0LXJhdGlvc1xuLy8gc3R5bGVsaW50LWVuYWJsZSBmdW5jdGlvbi1kaXNhbGxvd2VkLWxpc3RcblxuLy8gVHlwb2dyYXBoeVxuLy9cbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9udC12YXJpYWJsZXNcbi8vIHN0eWxlbGludC1kaXNhYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgICAgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgXCJMaWJlcmF0aW9uIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogICAgICAgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1lbmFibGUgdmFsdWUta2V5d29yZC1jYXNlXG4kZm9udC1mYW1pbHktYmFzZTogICAgICAgICAgICB2YXIoLS0jeyR2YXJpYWJsZS1wcmVmaXh9Zm9udC1zYW5zLXNlcmlmKSAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1jb2RlOiAgICAgICAgICAgIHZhcigtLSN7JHZhcmlhYmxlLXByZWZpeH1mb250LW1vbm9zcGFjZSkgIWRlZmF1bHQ7XG5cbi8vICRmb250LXNpemUtcm9vdCBhZmZlY3RzIHRoZSB2YWx1ZSBvZiBgcmVtYCwgd2hpY2ggaXMgdXNlZCBmb3IgYXMgd2VsbCBmb250IHNpemVzLCBwYWRkaW5ncywgYW5kIG1hcmdpbnNcbi8vICRmb250LXNpemUtYmFzZSBhZmZlY3RzIHRoZSBmb250IHNpemUgb2YgdGhlIGJvZHkgdGV4dFxuJGZvbnQtc2l6ZS1yb290OiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7IC8vIEFzc3VtZXMgdGhlIGJyb3dzZXIgZGVmYXVsdCwgdHlwaWNhbGx5IGAxNnB4YFxuJGZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogLjg3NSAhZGVmYXVsdDtcbiRmb250LXNpemUtbGc6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1saWdodGVyOiAgICAgICAgIGxpZ2h0ZXIgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbGlnaHQ6ICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiAgICAgICAgICA0MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZDogICAgICAgICAgICA3MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZGVyOiAgICAgICAgICBib2xkZXIgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1iYXNlOiAgICAgICAgICAgICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG5cbiRsaW5lLWhlaWdodC1iYXNlOiAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1zbTogICAgICAgICAgICAgIDEuMjUgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICAyICFkZWZhdWx0O1xuXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyLjUgIWRlZmF1bHQ7XG4kaDItZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyICFkZWZhdWx0O1xuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS43NSAhZGVmYXVsdDtcbiRoNC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDtcbiRoNS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kaDYtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvbnQtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb250LXNpemVzXG4kZm9udC1zaXplczogKFxuICAxOiAkaDEtZm9udC1zaXplLFxuICAyOiAkaDItZm9udC1zaXplLFxuICAzOiAkaDMtZm9udC1zaXplLFxuICA0OiAkaDQtZm9udC1zaXplLFxuICA1OiAkaDUtZm9udC1zaXplLFxuICA2OiAkaDYtZm9udC1zaXplXG4pICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb250LXNpemVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBoZWFkaW5ncy12YXJpYWJsZXNcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAgICAgICRzcGFjZXIgKiAuNSAhZGVmYXVsdDtcbiRoZWFkaW5ncy1mb250LWZhbWlseTogICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtZm9udC1zdHlsZTogICAgICAgICBudWxsICFkZWZhdWx0O1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAgICAgICAgNTAwICFkZWZhdWx0O1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAgICAgICAgMS4yICFkZWZhdWx0O1xuJGhlYWRpbmdzLWNvbG9yOiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgaGVhZGluZ3MtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBkaXNwbGF5LWhlYWRpbmdzXG4kZGlzcGxheS1mb250LXNpemVzOiAoXG4gIDE6IDVyZW0sXG4gIDI6IDQuNXJlbSxcbiAgMzogNHJlbSxcbiAgNDogMy41cmVtLFxuICA1OiAzcmVtLFxuICA2OiAyLjVyZW1cbikgIWRlZmF1bHQ7XG5cbiRkaXNwbGF5LWZvbnQtd2VpZ2h0OiAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheS1saW5lLWhlaWdodDogJGhlYWRpbmdzLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBkaXNwbGF5LWhlYWRpbmdzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB0eXBlLXZhcmlhYmxlc1xuJGxlYWQtZm9udC1zaXplOiAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRsZWFkLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcblxuJHNtYWxsLWZvbnQtc2l6ZTogICAgICAgICAgICAgLjg3NWVtICFkZWZhdWx0O1xuXG4kc3ViLXN1cC1mb250LXNpemU6ICAgICAgICAgICAuNzVlbSAhZGVmYXVsdDtcblxuJHRleHQtbXV0ZWQ6ICAgICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kaW5pdGlhbGlzbS1mb250LXNpemU6ICAgICAgICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xuXG4kYmxvY2txdW90ZS1tYXJnaW4teTogICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJGJsb2NrcXVvdGUtZm9udC1zaXplOiAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRibG9ja3F1b3RlLWZvb3Rlci1jb2xvcjogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRibG9ja3F1b3RlLWZvb3Rlci1mb250LXNpemU6ICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XG5cbiRoci1tYXJnaW4teTogICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG4kaHItY29sb3I6ICAgICAgICAgICAgICAgICAgICBpbmhlcml0ICFkZWZhdWx0O1xuJGhyLWhlaWdodDogICAgICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRoci1vcGFjaXR5OiAgICAgICAgICAgICAgICAgIC4yNSAhZGVmYXVsdDtcblxuJGxlZ2VuZC1tYXJnaW4tYm90dG9tOiAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kbGVnZW5kLWZvbnQtc2l6ZTogICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7XG4kbGVnZW5kLWZvbnQtd2VpZ2h0OiAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kbWFyay1wYWRkaW5nOiAgICAgICAgICAgICAgICAuMmVtICFkZWZhdWx0O1xuXG4kZHQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcblxuJG5lc3RlZC1rYmQtZm9udC13ZWlnaHQ6ICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG5cbiRsaXN0LWlubGluZS1wYWRkaW5nOiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kbWFyay1iZzogICAgICAgICAgICAgICAgICAgICAjZmNmOGUzICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB0eXBlLXZhcmlhYmxlc1xuXG5cbi8vIFRhYmxlc1xuLy9cbi8vIEN1c3RvbWl6ZXMgdGhlIGAudGFibGVgIGNvbXBvbmVudCB3aXRoIGJhc2ljIHZhbHVlcywgZWFjaCB1c2VkIGFjcm9zcyBhbGwgdGFibGUgdmFyaWF0aW9ucy5cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHRhYmxlLXZhcmlhYmxlc1xuJHRhYmxlLWNlbGwtcGFkZGluZy15OiAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kdGFibGUtY2VsbC1wYWRkaW5nLXg6ICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteS1zbTogICAgIC4yNXJlbSAhZGVmYXVsdDtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteC1zbTogICAgIC4yNXJlbSAhZGVmYXVsdDtcblxuJHRhYmxlLWNlbGwtdmVydGljYWwtYWxpZ246ICAgdG9wICFkZWZhdWx0O1xuXG4kdGFibGUtY29sb3I6ICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiR0YWJsZS1iZzogICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJHRhYmxlLWFjY2VudC1iZzogICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiR0YWJsZS10aC1mb250LXdlaWdodDogICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiR0YWJsZS1zdHJpcGVkLWNvbG9yOiAgICAgICAgICR0YWJsZS1jb2xvciAhZGVmYXVsdDtcbiR0YWJsZS1zdHJpcGVkLWJnLWZhY3RvcjogICAgIC4wNSAhZGVmYXVsdDtcbiR0YWJsZS1zdHJpcGVkLWJnOiAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAkdGFibGUtc3RyaXBlZC1iZy1mYWN0b3IpICFkZWZhdWx0O1xuXG4kdGFibGUtYWN0aXZlLWNvbG9yOiAgICAgICAgICAkdGFibGUtY29sb3IgIWRlZmF1bHQ7XG4kdGFibGUtYWN0aXZlLWJnLWZhY3RvcjogICAgICAuMSAhZGVmYXVsdDtcbiR0YWJsZS1hY3RpdmUtYmc6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAkdGFibGUtYWN0aXZlLWJnLWZhY3RvcikgIWRlZmF1bHQ7XG5cbiR0YWJsZS1ob3Zlci1jb2xvcjogICAgICAgICAgICR0YWJsZS1jb2xvciAhZGVmYXVsdDtcbiR0YWJsZS1ob3Zlci1iZy1mYWN0b3I6ICAgICAgIC4wNzUgIWRlZmF1bHQ7XG4kdGFibGUtaG92ZXItYmc6ICAgICAgICAgICAgICByZ2JhKCRibGFjaywgJHRhYmxlLWhvdmVyLWJnLWZhY3RvcikgIWRlZmF1bHQ7XG5cbiR0YWJsZS1ib3JkZXItZmFjdG9yOiAgICAgICAgIC4xICFkZWZhdWx0O1xuJHRhYmxlLWJvcmRlci13aWR0aDogICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiR0YWJsZS1zdHJpcGVkLW9yZGVyOiAgICAgICAgIG9kZCAhZGVmYXVsdDtcblxuJHRhYmxlLWdyb3VwLXNlcGFyYXRvci1jb2xvcjogY3VycmVudENvbG9yICFkZWZhdWx0O1xuXG4kdGFibGUtY2FwdGlvbi1jb2xvcjogICAgICAgICAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcblxuJHRhYmxlLWJnLXNjYWxlOiAgICAgICAgICAgICAgLTgwJSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdGFibGUtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB0YWJsZS1sb29wXG4kdGFibGUtdmFyaWFudHM6IChcbiAgXCJwcmltYXJ5XCI6ICAgIHNoaWZ0LWNvbG9yKCRwcmltYXJ5LCAkdGFibGUtYmctc2NhbGUpLFxuICBcInNlY29uZGFyeVwiOiAgc2hpZnQtY29sb3IoJHNlY29uZGFyeSwgJHRhYmxlLWJnLXNjYWxlKSxcbiAgXCJzdWNjZXNzXCI6ICAgIHNoaWZ0LWNvbG9yKCRzdWNjZXNzLCAkdGFibGUtYmctc2NhbGUpLFxuICBcImluZm9cIjogICAgICAgc2hpZnQtY29sb3IoJGluZm8sICR0YWJsZS1iZy1zY2FsZSksXG4gIFwid2FybmluZ1wiOiAgICBzaGlmdC1jb2xvcigkd2FybmluZywgJHRhYmxlLWJnLXNjYWxlKSxcbiAgXCJkYW5nZXJcIjogICAgIHNoaWZ0LWNvbG9yKCRkYW5nZXIsICR0YWJsZS1iZy1zY2FsZSksXG4gIFwibGlnaHRcIjogICAgICAkbGlnaHQsXG4gIFwiZGFya1wiOiAgICAgICAkZGFyayxcbikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHRhYmxlLWxvb3BcblxuXG4vLyBCdXR0b25zICsgRm9ybXNcbi8vXG4vLyBTaGFyZWQgdmFyaWFibGVzIHRoYXQgYXJlIHJlYXNzaWduZWQgdG8gYCRpbnB1dC1gIGFuZCBgJGJ0bi1gIHNwZWNpZmljIHZhcmlhYmxlcy5cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGlucHV0LWJ0bi12YXJpYWJsZXNcbiRpbnB1dC1idG4tcGFkZGluZy15OiAgICAgICAgIC4zNzVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteDogICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtZmFtaWx5OiAgICAgICBudWxsICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LXNpemU6ICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1saW5lLWhlaWdodDogICAgICAgJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tZm9jdXMtd2lkdGg6ICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb2N1cy1jb2xvci1vcGFjaXR5OiAuMjUgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvY3VzLWNvbG9yOiAgICAgICAgIHJnYmEoJGNvbXBvbmVudC1hY3RpdmUtYmcsICRpbnB1dC1idG4tZm9jdXMtY29sb3Itb3BhY2l0eSkgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvY3VzLWJsdXI6ICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6ICAgIDAgMCAkaW5wdXQtYnRuLWZvY3VzLWJsdXIgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAkaW5wdXQtYnRuLWZvY3VzLWNvbG9yICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1zbTogICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteC1zbTogICAgICAuNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplLXNtOiAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAgICAgIC41cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGc6ICAgICAgMXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplLWxnOiAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tYm9yZGVyLXdpZHRoOiAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGlucHV0LWJ0bi12YXJpYWJsZXNcblxuXG4vLyBCdXR0b25zXG4vL1xuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBidG4tdmFyaWFibGVzXG4kYnRuLXBhZGRpbmcteTogICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy14OiAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14ICFkZWZhdWx0O1xuJGJ0bi1mb250LWZhbWlseTogICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LWZhbWlseSAhZGVmYXVsdDtcbiRidG4tZm9udC1zaXplOiAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplICFkZWZhdWx0O1xuJGJ0bi1saW5lLWhlaWdodDogICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodCAhZGVmYXVsdDtcbiRidG4td2hpdGUtc3BhY2U6ICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7IC8vIFNldCB0byBgbm93cmFwYCB0byBwcmV2ZW50IHRleHQgd3JhcHBpbmdcblxuJGJ0bi1wYWRkaW5nLXktc206ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteC1zbTogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRidG4tZm9udC1zaXplLXNtOiAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLXNtICFkZWZhdWx0O1xuXG4kYnRuLXBhZGRpbmcteS1sZzogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy14LWxnOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJGJ0bi1mb250LXNpemUtbGc6ICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtbGcgIWRlZmF1bHQ7XG5cbiRidG4tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG4kYnRuLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xuJGJ0bi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgaW5zZXQgMCAxcHggMCByZ2JhKCR3aGl0ZSwgLjE1KSwgMCAxcHggMXB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcbiRidG4tZm9jdXMtd2lkdGg6ICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kYnRuLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kYnRuLWRpc2FibGVkLW9wYWNpdHk6ICAgICAgICAuNjUgIWRlZmF1bHQ7XG4kYnRuLWFjdGl2ZS1ib3gtc2hhZG93OiAgICAgICBpbnNldCAwIDNweCA1cHggcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xuXG4kYnRuLWxpbmstY29sb3I6ICAgICAgICAgICAgICAkbGluay1jb2xvciAhZGVmYXVsdDtcbiRidG4tbGluay1ob3Zlci1jb2xvcjogICAgICAgICRsaW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0O1xuJGJ0bi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4vLyBBbGxvd3MgZm9yIGN1c3RvbWl6aW5nIGJ1dHRvbiByYWRpdXMgaW5kZXBlbmRlbnRseSBmcm9tIGdsb2JhbCBib3JkZXIgcmFkaXVzXG4kYnRuLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICRib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG5cbiRidG4tdHJhbnNpdGlvbjogICAgICAgICAgICAgIGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuJGJ0bi1ob3Zlci1iZy1zaGFkZS1hbW91bnQ6ICAgICAgIDE1JSAhZGVmYXVsdDtcbiRidG4taG92ZXItYmctdGludC1hbW91bnQ6ICAgICAgICAxNSUgIWRlZmF1bHQ7XG4kYnRuLWhvdmVyLWJvcmRlci1zaGFkZS1hbW91bnQ6ICAgMjAlICFkZWZhdWx0O1xuJGJ0bi1ob3Zlci1ib3JkZXItdGludC1hbW91bnQ6ICAgIDEwJSAhZGVmYXVsdDtcbiRidG4tYWN0aXZlLWJnLXNoYWRlLWFtb3VudDogICAgICAyMCUgIWRlZmF1bHQ7XG4kYnRuLWFjdGl2ZS1iZy10aW50LWFtb3VudDogICAgICAgMjAlICFkZWZhdWx0O1xuJGJ0bi1hY3RpdmUtYm9yZGVyLXNoYWRlLWFtb3VudDogIDI1JSAhZGVmYXVsdDtcbiRidG4tYWN0aXZlLWJvcmRlci10aW50LWFtb3VudDogICAxMCUgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGJ0bi12YXJpYWJsZXNcblxuXG4vLyBGb3Jtc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9ybS10ZXh0LXZhcmlhYmxlc1xuJGZvcm0tdGV4dC1tYXJnaW4tdG9wOiAgICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRmb3JtLXRleHQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xuJGZvcm0tdGV4dC1mb250LXN0eWxlOiAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kZm9ybS10ZXh0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRmb3JtLXRleHQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZm9ybS10ZXh0LXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9ybS1sYWJlbC12YXJpYWJsZXNcbiRmb3JtLWxhYmVsLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRmb3JtLWxhYmVsLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGZvcm0tbGFiZWwtZm9udC1zdHlsZTogICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kZm9ybS1sYWJlbC1mb250LXdlaWdodDogICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRmb3JtLWxhYmVsLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb3JtLWxhYmVsLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9ybS1pbnB1dC12YXJpYWJsZXNcbiRpbnB1dC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRpbnB1dC1mb250LWZhbWlseTogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1iYXNlICFkZWZhdWx0O1xuJGlucHV0LWxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXktc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXgtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemUtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteS1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteC1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZS1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLWxnICFkZWZhdWx0O1xuXG4kaW5wdXQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGlucHV0LWRpc2FibGVkLWJvcmRlci1jb2xvcjogICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiRpbnB1dC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAkZ3JheS00MDAgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kaW5wdXQtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgJGJveC1zaGFkb3ctaW5zZXQgIWRlZmF1bHQ7XG5cbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1zbSAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcblxuJGlucHV0LWZvY3VzLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICB0aW50LWNvbG9yKCRjb21wb25lbnQtYWN0aXZlLWJnLCA1MCUpICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy13aWR0aDogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRpbnB1dC1wbGFpbnRleHQtY29sb3I6ICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodC1ib3JkZXI6ICAgICAgICAgICAgICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggKiAyICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0LWlubmVyOiAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIDFlbSwgJGlucHV0LXBhZGRpbmcteSAqIDIpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1pbm5lci1oYWxmOiAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAuNWVtLCAkaW5wdXQtcGFkZGluZy15KSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtaW5uZXItcXVhcnRlcjogICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogLjI1ZW0sICRpbnB1dC1wYWRkaW5nLXkgKiAuNSkgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtLCBhZGQoJGlucHV0LXBhZGRpbmcteSAqIDIsICRpbnB1dC1oZWlnaHQtYm9yZGVyLCBmYWxzZSkpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAxZW0sIGFkZCgkaW5wdXQtcGFkZGluZy15LXNtICogMiwgJGlucHV0LWhlaWdodC1ib3JkZXIsIGZhbHNlKSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIDFlbSwgYWRkKCRpbnB1dC1wYWRkaW5nLXktbGcgKiAyLCAkaW5wdXQtaGVpZ2h0LWJvcmRlciwgZmFsc2UpKSAhZGVmYXVsdDtcblxuJGlucHV0LXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cbiRmb3JtLWNvbG9yLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICAzcmVtICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb3JtLWlucHV0LXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9ybS1jaGVjay12YXJpYWJsZXNcbiRmb3JtLWNoZWNrLWlucHV0LXdpZHRoOiAgICAgICAgICAgICAgICAgIDFlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLW1pbi1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuJGZvcm0tY2hlY2stcGFkZGluZy1zdGFydDogICAgICAgICAgICAgICAgJGZvcm0tY2hlY2staW5wdXQtd2lkdGggKyAuNWVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2stbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAgLjEyNXJlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWxhYmVsLWNvbG9yOiAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1sYWJlbC1jdXJzb3I6ICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGZvcm0tY2hlY2stdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJGZvcm0tY2hlY2staW5wdXQtYWN0aXZlLWZpbHRlcjogICAgICAgICAgYnJpZ2h0bmVzcyg5MCUpICFkZWZhdWx0O1xuXG4kZm9ybS1jaGVjay1pbnB1dC1iZzogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1ib3JkZXI6ICAgICAgICAgICAgICAgICAxcHggc29saWQgcmdiYSgkYmxhY2ssIC4yNSkgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAuMjVlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLXJhZGlvLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDUwJSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LWZvY3VzLWJvcmRlcjogICAgICAgICAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtY29sb3I6ICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1iZy1jb2xvcjogICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJvcmRlci1jb2xvcjogICAkZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJnLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1iZy1pbWFnZTogICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjAgMjAnPjxwYXRoIGZpbGw9J25vbmUnIHN0cm9rZT0nI3skZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWNvbG9yfScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzMnIGQ9J002IDEwbDMgM2w2LTYnLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1yYWRpby1jaGVja2VkLWJnLWltYWdlOiAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCc+PGNpcmNsZSByPScyJyBmaWxsPScjeyRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtY29sb3J9Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuXG4kZm9ybS1jaGVjay1pbnB1dC1pbmRldGVybWluYXRlLWNvbG9yOiAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LWluZGV0ZXJtaW5hdGUtYmctY29sb3I6ICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtaW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6ICAgJGZvcm0tY2hlY2staW5wdXQtaW5kZXRlcm1pbmF0ZS1iZy1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LWluZGV0ZXJtaW5hdGUtYmctaW1hZ2U6ICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDIwIDIwJz48cGF0aCBmaWxsPSdub25lJyBzdHJva2U9JyN7JGZvcm0tY2hlY2staW5wdXQtaW5kZXRlcm1pbmF0ZS1jb2xvcn0nIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPSczJyBkPSdNNiAxMGg4Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuXG4kZm9ybS1jaGVjay1pbnB1dC1kaXNhYmxlZC1vcGFjaXR5OiAgICAgICAgLjUgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1sYWJlbC1kaXNhYmxlZC1vcGFjaXR5OiAgICAgICAgJGZvcm0tY2hlY2staW5wdXQtZGlzYWJsZWQtb3BhY2l0eSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWJ0bi1jaGVjay1kaXNhYmxlZC1vcGFjaXR5OiAgICAkYnRuLWRpc2FibGVkLW9wYWNpdHkgIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlubGluZS1tYXJnaW4tZW5kOiAgICAxcmVtICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb3JtLWNoZWNrLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9ybS1zd2l0Y2gtdmFyaWFibGVzXG4kZm9ybS1zd2l0Y2gtY29sb3I6ICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4yNSkgIWRlZmF1bHQ7XG4kZm9ybS1zd2l0Y2gtd2lkdGg6ICAgICAgICAgICAgICAgMmVtICFkZWZhdWx0O1xuJGZvcm0tc3dpdGNoLXBhZGRpbmctc3RhcnQ6ICAgICAgICRmb3JtLXN3aXRjaC13aWR0aCArIC41ZW0gIWRlZmF1bHQ7XG4kZm9ybS1zd2l0Y2gtYmctaW1hZ2U6ICAgICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctNCAtNCA4IDgnPjxjaXJjbGUgcj0nMycgZmlsbD0nI3skZm9ybS1zd2l0Y2gtY29sb3J9Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJGZvcm0tc3dpdGNoLWJvcmRlci1yYWRpdXM6ICAgICAgICRmb3JtLXN3aXRjaC13aWR0aCAhZGVmYXVsdDtcbiRmb3JtLXN3aXRjaC10cmFuc2l0aW9uOiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uIC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cbiRmb3JtLXN3aXRjaC1mb2N1cy1jb2xvcjogICAgICAgICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tc3dpdGNoLWZvY3VzLWJnLWltYWdlOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nLTQgLTQgOCA4Jz48Y2lyY2xlIHI9JzMnIGZpbGw9JyN7JGZvcm0tc3dpdGNoLWZvY3VzLWNvbG9yfScvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcblxuJGZvcm0tc3dpdGNoLWNoZWNrZWQtY29sb3I6ICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tc3dpdGNoLWNoZWNrZWQtYmctaW1hZ2U6ICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nLTQgLTQgOCA4Jz48Y2lyY2xlIHI9JzMnIGZpbGw9JyN7JGZvcm0tc3dpdGNoLWNoZWNrZWQtY29sb3J9Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJGZvcm0tc3dpdGNoLWNoZWNrZWQtYmctcG9zaXRpb246IHJpZ2h0IGNlbnRlciAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZm9ybS1zd2l0Y2gtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBpbnB1dC1ncm91cC12YXJpYWJsZXNcbiRpbnB1dC1ncm91cC1hZGRvbi1wYWRkaW5nLXk6ICAgICAgICAgICAkaW5wdXQtcGFkZGluZy15ICFkZWZhdWx0O1xuJGlucHV0LWdyb3VwLWFkZG9uLXBhZGRpbmcteDogICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kaW5wdXQtZ3JvdXAtYWRkb24tZm9udC13ZWlnaHQ6ICAgICAgICAgJGlucHV0LWZvbnQtd2VpZ2h0ICFkZWZhdWx0O1xuJGlucHV0LWdyb3VwLWFkZG9uLWNvbG9yOiAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgaW5wdXQtZ3JvdXAtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLXNlbGVjdC12YXJpYWJsZXNcbiRmb3JtLXNlbGVjdC1wYWRkaW5nLXk6ICAgICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtcGFkZGluZy14OiAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy14ICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWZvbnQtZmFtaWx5OiAgICAgICAgICAgJGlucHV0LWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWZvbnQtc2l6ZTogICAgICAgICAgICAgJGlucHV0LWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZzogICAgICRmb3JtLXNlbGVjdC1wYWRkaW5nLXggKiAzICFkZWZhdWx0OyAvLyBFeHRyYSBwYWRkaW5nIGZvciBiYWNrZ3JvdW5kLWltYWdlXG4kZm9ybS1zZWxlY3QtZm9udC13ZWlnaHQ6ICAgICAgICAgICAkaW5wdXQtZm9udC13ZWlnaHQgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtbGluZS1oZWlnaHQ6ICAgICAgICAgICAkaW5wdXQtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtY29sb3I6ICAgICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtYmc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtZGlzYWJsZWQtY29sb3I6ICAgICAgICBudWxsICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWRpc2FibGVkLWJnOiAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWRpc2FibGVkLWJvcmRlci1jb2xvcjogJGlucHV0LWRpc2FibGVkLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1iZy1wb3NpdGlvbjogICAgICAgICAgIHJpZ2h0ICRmb3JtLXNlbGVjdC1wYWRkaW5nLXggY2VudGVyICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWJnLXNpemU6ICAgICAgICAgICAgICAgMTZweCAxMnB4ICFkZWZhdWx0OyAvLyBJbiBwaXhlbHMgYmVjYXVzZSBpbWFnZSBkaW1lbnNpb25zXG4kZm9ybS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yOiAgICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtaW5kaWNhdG9yOiAgICAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNic+PHBhdGggZmlsbD0nbm9uZScgc3Ryb2tlPScjeyRmb3JtLXNlbGVjdC1pbmRpY2F0b3ItY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nMicgZD0nTTIgNWw2IDYgNi02Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuXG4kZm9ybS1zZWxlY3QtZmVlZGJhY2staWNvbi1wYWRkaW5nLWVuZDogJGZvcm0tc2VsZWN0LXBhZGRpbmcteCAqIDIuNSArICRmb3JtLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZyAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1mZWVkYmFjay1pY29uLXBvc2l0aW9uOiAgICBjZW50ZXIgcmlnaHQgJGZvcm0tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWZlZWRiYWNrLWljb24tc2l6ZTogICAgICAgICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGYgIWRlZmF1bHQ7XG5cbiRmb3JtLXNlbGVjdC1ib3JkZXItd2lkdGg6ICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWJvcmRlci1jb2xvcjogICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtYm9yZGVyLXJhZGl1czogICAgICAgJGlucHV0LWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtYm94LXNoYWRvdzogICAgICAgICAgJGJveC1zaGFkb3ctaW5zZXQgIWRlZmF1bHQ7XG5cbiRmb3JtLXNlbGVjdC1mb2N1cy1ib3JkZXItY29sb3I6ICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWZvY3VzLXdpZHRoOiAgICAgICAgICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1mb2N1cy1ib3gtc2hhZG93OiAgICAwIDAgMCAkZm9ybS1zZWxlY3QtZm9jdXMtd2lkdGggJGlucHV0LWJ0bi1mb2N1cy1jb2xvciAhZGVmYXVsdDtcblxuJGZvcm0tc2VsZWN0LXBhZGRpbmcteS1zbTogICAgICAgICRpbnB1dC1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtcGFkZGluZy14LXNtOiAgICAgICAgJGlucHV0LXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1mb250LXNpemUtc206ICAgICAgICAkaW5wdXQtZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWJvcmRlci1yYWRpdXMtc206ICAgICRpbnB1dC1ib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xuXG4kZm9ybS1zZWxlY3QtcGFkZGluZy15LWxnOiAgICAgICAgJGlucHV0LXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1wYWRkaW5nLXgtbGc6ICAgICAgICAkaW5wdXQtcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWZvbnQtc2l6ZS1sZzogICAgICAgICRpbnB1dC1mb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtYm9yZGVyLXJhZGl1cy1sZzogICAgJGlucHV0LWJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG5cbiRmb3JtLXNlbGVjdC10cmFuc2l0aW9uOiAgICAgICAgICAkaW5wdXQtdHJhbnNpdGlvbiAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZm9ybS1zZWxlY3QtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLXJhbmdlLXZhcmlhYmxlc1xuJGZvcm0tcmFuZ2UtdHJhY2std2lkdGg6ICAgICAgICAgIDEwMCUgIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10cmFjay1oZWlnaHQ6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10cmFjay1jdXJzb3I6ICAgICAgICAgcG9pbnRlciAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRyYWNrLWJnOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10cmFjay1ib3JkZXItcmFkaXVzOiAgMXJlbSAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRyYWNrLWJveC1zaGFkb3c6ICAgICAkYm94LXNoYWRvdy1pbnNldCAhZGVmYXVsdDtcblxuJGZvcm0tcmFuZ2UtdGh1bWItd2lkdGg6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10aHVtYi1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgJGZvcm0tcmFuZ2UtdGh1bWItd2lkdGggIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10aHVtYi1iZzogICAgICAgICAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10aHVtYi1ib3JkZXI6ICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRodW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdGh1bWItYm94LXNoYWRvdzogICAgICAgICAgICAgIDAgLjFyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgMCAwIDAgMXB4ICRib2R5LWJnLCAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRodW1iLWZvY3VzLWJveC1zaGFkb3ctd2lkdGg6ICAkaW5wdXQtZm9jdXMtd2lkdGggIWRlZmF1bHQ7IC8vIEZvciBmb2N1cyBib3ggc2hhZG93IGlzc3VlIGluIEVkZ2VcbiRmb3JtLXJhbmdlLXRodW1iLWFjdGl2ZS1iZzogICAgICAgICAgICAgICB0aW50LWNvbG9yKCRjb21wb25lbnQtYWN0aXZlLWJnLCA3MCUpICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdGh1bWItZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICRncmF5LTUwMCAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRodW1iLXRyYW5zaXRpb246ICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvcm0tcmFuZ2UtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLWZpbGUtdmFyaWFibGVzXG4kZm9ybS1maWxlLWJ1dHRvbi1jb2xvcjogICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tZmlsZS1idXR0b24tYmc6ICAgICAgICAgICAgICRpbnB1dC1ncm91cC1hZGRvbi1iZyAhZGVmYXVsdDtcbiRmb3JtLWZpbGUtYnV0dG9uLWhvdmVyLWJnOiAgICAgICBzaGFkZS1jb2xvcigkZm9ybS1maWxlLWJ1dHRvbi1iZywgNSUpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb3JtLWZpbGUtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLWZsb2F0aW5nLXZhcmlhYmxlc1xuJGZvcm0tZmxvYXRpbmctaGVpZ2h0OiAgICAgICAgICAgIGFkZCgzLjVyZW0sICRpbnB1dC1oZWlnaHQtYm9yZGVyKSAhZGVmYXVsdDtcbiRmb3JtLWZsb2F0aW5nLWxpbmUtaGVpZ2h0OiAgICAgICAxLjI1ICFkZWZhdWx0O1xuJGZvcm0tZmxvYXRpbmctcGFkZGluZy14OiAgICAgICAgICRpbnB1dC1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kZm9ybS1mbG9hdGluZy1wYWRkaW5nLXk6ICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRmb3JtLWZsb2F0aW5nLWlucHV0LXBhZGRpbmctdDogICAxLjYyNXJlbSAhZGVmYXVsdDtcbiRmb3JtLWZsb2F0aW5nLWlucHV0LXBhZGRpbmctYjogICAuNjI1cmVtICFkZWZhdWx0O1xuJGZvcm0tZmxvYXRpbmctbGFiZWwtb3BhY2l0eTogICAgIC42NSAhZGVmYXVsdDtcbiRmb3JtLWZsb2F0aW5nLWxhYmVsLXRyYW5zZm9ybTogICBzY2FsZSguODUpIHRyYW5zbGF0ZVkoLS41cmVtKSB0cmFuc2xhdGVYKC4xNXJlbSkgIWRlZmF1bHQ7XG4kZm9ybS1mbG9hdGluZy10cmFuc2l0aW9uOiAgICAgICAgb3BhY2l0eSAuMXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAuMXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvcm0tZmxvYXRpbmctdmFyaWFibGVzXG5cbi8vIEZvcm0gdmFsaWRhdGlvblxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9ybS1mZWVkYmFjay12YXJpYWJsZXNcbiRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6ICAgICAgICAgICRmb3JtLXRleHQtbWFyZ2luLXRvcCAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogICAgICAgICAgICRmb3JtLXRleHQtZm9udC1zaXplICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stZm9udC1zdHlsZTogICAgICAgICAgJGZvcm0tdGV4dC1mb250LXN0eWxlICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3I6ICAgICAgICAgJHN1Y2Nlc3MgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yOiAgICAgICAkZGFuZ2VyICFkZWZhdWx0O1xuXG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yOiAgICAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQ6ICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yfScgZD0nTTIuMyA2LjczTC42IDQuNTNjLS40LTEuMDQuNDYtMS40IDEuMS0uOGwxLjEgMS40IDMuNC0zLjhjLjYtLjYzIDEuNi0uMjcgMS4yLjdsLTQgNC42Yy0uNDMuNS0uOC40LTEuMS4xeicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcjogICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQ6ICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMiAxMicgd2lkdGg9JzEyJyBoZWlnaHQ9JzEyJyBmaWxsPSdub25lJyBzdHJva2U9JyN7JGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yfSc+PGNpcmNsZSBjeD0nNicgY3k9JzYnIHI9JzQuNScvPjxwYXRoIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGQ9J001LjggMy42aC40TDYgNi41eicvPjxjaXJjbGUgY3g9JzYnIGN5PSc4LjInIHI9Jy42JyBmaWxsPScjeyRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcn0nIHN0cm9rZT0nbm9uZScvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZm9ybS1mZWVkYmFjay12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXNcbiRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiAoXG4gIFwidmFsaWRcIjogKFxuICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IsXG4gICAgXCJpY29uXCI6ICRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWRcbiAgKSxcbiAgXCJpbnZhbGlkXCI6IChcbiAgICBcImNvbG9yXCI6ICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3IsXG4gICAgXCJpY29uXCI6ICRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZFxuICApXG4pICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb3JtLXZhbGlkYXRpb24tc3RhdGVzXG5cbi8vIFotaW5kZXggbWFzdGVyIGxpc3Rcbi8vXG4vLyBXYXJuaW5nOiBBdm9pZCBjdXN0b21pemluZyB0aGVzZSB2YWx1ZXMuIFRoZXkncmUgdXNlZCBmb3IgYSBiaXJkJ3MgZXllIHZpZXdcbi8vIG9mIGNvbXBvbmVudHMgZGVwZW5kZW50IG9uIHRoZSB6LWF4aXMgYW5kIGFyZSBkZXNpZ25lZCB0byBhbGwgd29yayB0b2dldGhlci5cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHppbmRleC1zdGFja1xuJHppbmRleC1kcm9wZG93bjogICAgICAgICAgICAgICAgICAgMTAwMCAhZGVmYXVsdDtcbiR6aW5kZXgtc3RpY2t5OiAgICAgICAgICAgICAgICAgICAgIDEwMjAgIWRlZmF1bHQ7XG4kemluZGV4LWZpeGVkOiAgICAgICAgICAgICAgICAgICAgICAxMDMwICFkZWZhdWx0O1xuJHppbmRleC1vZmZjYW52YXMtYmFja2Ryb3A6ICAgICAgICAgMTA0MCAhZGVmYXVsdDtcbiR6aW5kZXgtb2ZmY2FudmFzOiAgICAgICAgICAgICAgICAgIDEwNDUgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsLWJhY2tkcm9wOiAgICAgICAgICAgICAxMDUwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbDogICAgICAgICAgICAgICAgICAgICAgMTA1NSAhZGVmYXVsdDtcbiR6aW5kZXgtcG9wb3ZlcjogICAgICAgICAgICAgICAgICAgIDEwNzAgIWRlZmF1bHQ7XG4kemluZGV4LXRvb2x0aXA6ICAgICAgICAgICAgICAgICAgICAxMDgwICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB6aW5kZXgtc3RhY2tcblxuXG4vLyBOYXZzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBuYXYtdmFyaWFibGVzXG4kbmF2LWxpbmstcGFkZGluZy15OiAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRuYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kbmF2LWxpbmstZm9udC1zaXplOiAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJG5hdi1saW5rLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRuYXYtbGluay1jb2xvcjogICAgICAgICAgICAgICAgICAgICRsaW5rLWNvbG9yICFkZWZhdWx0O1xuJG5hdi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAgJGxpbmstaG92ZXItY29sb3IgIWRlZmF1bHQ7XG4kbmF2LWxpbmstdHJhbnNpdGlvbjogICAgICAgICAgICAgICBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG5hdi10YWJzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICAkZ3JheS0yMDAgJGdyYXktMjAwICRuYXYtdGFicy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRncmF5LTMwMCAkZ3JheS0zMDAgJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kbmF2LXBpbGxzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRuYXYtcGlsbHMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdi1waWxscy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIG5hdi12YXJpYWJsZXNcblxuXG4vLyBOYXZiYXJcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IG5hdmJhci12YXJpYWJsZXNcbiRuYXZiYXItcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICRzcGFjZXIgKiAuNSAhZGVmYXVsdDtcbiRuYXZiYXItcGFkZGluZy14OiAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiRuYXZiYXItbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kbmF2YmFyLWJyYW5kLWZvbnQtc2l6ZTogICAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xuLy8gQ29tcHV0ZSB0aGUgbmF2YmFyLWJyYW5kIHBhZGRpbmcteSBzbyB0aGUgbmF2YmFyLWJyYW5kIHdpbGwgaGF2ZSB0aGUgc2FtZSBoZWlnaHQgYXMgbmF2YmFyLXRleHQgYW5kIG5hdi1saW5rXG4kbmF2LWxpbmstaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAkbGluZS1oZWlnaHQtYmFzZSArICRuYXYtbGluay1wYWRkaW5nLXkgKiAyICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1oZWlnaHQ6ICAgICAgICAgICAgICAgJG5hdmJhci1icmFuZC1mb250LXNpemUgKiAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcbiRuYXZiYXItYnJhbmQtcGFkZGluZy15OiAgICAgICAgICAgICgkbmF2LWxpbmstaGVpZ2h0IC0gJG5hdmJhci1icmFuZC1oZWlnaHQpICogLjUgIWRlZmF1bHQ7XG4kbmF2YmFyLWJyYW5kLW1hcmdpbi1lbmQ6ICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kbmF2YmFyLXRvZ2dsZXItcGFkZGluZy15OiAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kbmF2YmFyLXRvZ2dsZXItcGFkZGluZy14OiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kbmF2YmFyLXRvZ2dsZXItZm9udC1zaXplOiAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLWJvcmRlci1yYWRpdXM6ICAgICAgJGJ0bi1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLWZvY3VzLXdpZHRoOiAgICAgICAgJGJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci10cmFuc2l0aW9uOiAgICAgICAgIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgbmF2YmFyLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgbmF2YmFyLXRoZW1lLXZhcmlhYmxlc1xuJG5hdmJhci1kYXJrLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkd2hpdGUsIC41NSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstaG92ZXItY29sb3I6ICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjc1KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1hY3RpdmUtY29sb3I6ICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1kaXNhYmxlZC1jb2xvcjogICAgICAgIHJnYmEoJHdoaXRlLCAuMjUpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLXRvZ2dsZXItaWNvbi1iZzogICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzAgMzAnPjxwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWRhcmstY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay10b2dnbGVyLWJvcmRlci1jb2xvcjogIHJnYmEoJHdoaXRlLCAuMSkgIWRlZmF1bHQ7XG5cbiRuYXZiYXItbGlnaHQtY29sb3I6ICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuNTUpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1ob3Zlci1jb2xvcjogICAgICAgICAgcmdiYSgkYmxhY2ssIC43KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yOiAgICAgICAgIHJnYmEoJGJsYWNrLCAuOSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWRpc2FibGVkLWNvbG9yOiAgICAgICByZ2JhKCRibGFjaywgLjMpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC10b2dnbGVyLWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzAgMzAnPjxwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWxpZ2h0LWNvbG9yfScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LXRvZ2dsZXItYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuXG4kbmF2YmFyLWxpZ2h0LWJyYW5kLWNvbG9yOiAgICAgICAgICAgICAgICAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWJyYW5kLWNvbG9yOiAgICAgICAgICAgICAgICAgJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1icmFuZC1ob3Zlci1jb2xvcjogICAgICAgICAgICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIG5hdmJhci10aGVtZS12YXJpYWJsZXNcblxuXG4vLyBEcm9wZG93bnNcbi8vXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBkcm9wZG93bi12YXJpYWJsZXNcbiRkcm9wZG93bi1taW4td2lkdGg6ICAgICAgICAgICAgICAgIDEwcmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLXBhZGRpbmcteDogICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLXNwYWNlcjogICAgICAgICAgICAgICAgICAgLjEyNXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1jb2xvcjogICAgICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJnOiAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xNSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kZHJvcGRvd24taW5uZXItYm9yZGVyLXJhZGl1czogICAgICBzdWJ0cmFjdCgkZHJvcGRvd24tYm9yZGVyLXJhZGl1cywgJGRyb3Bkb3duLWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGl2aWRlci1iZzogICAgICAgICAgICAgICAkZHJvcGRvd24tYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRpdmlkZXItbWFyZ2luLXk6ICAgICAgICAgJHNwYWNlciAqIC41ICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgJGJveC1zaGFkb3cgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgIHNoYWRlLWNvbG9yKCRkcm9wZG93bi1saW5rLWNvbG9yLCAxMCUpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAkZ3JheS01MDAgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogICAgICAgICAgICRzcGFjZXIgKiAuMjUgIWRlZmF1bHQ7XG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6ICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuXG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24taGVhZGVyLXBhZGRpbmc6ICAgICAgICAgICAkZHJvcGRvd24tcGFkZGluZy15ICRkcm9wZG93bi1pdGVtLXBhZGRpbmcteCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZHJvcGRvd24tdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBkcm9wZG93bi1kYXJrLXZhcmlhYmxlc1xuJGRyb3Bkb3duLWRhcmstY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRhcmstYmc6ICAgICAgICAgICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRhcmstYm9yZGVyLWNvbG9yOiAgICAgICAgJGRyb3Bkb3duLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1kYXJrLWRpdmlkZXItYmc6ICAgICAgICAgICRkcm9wZG93bi1kaXZpZGVyLWJnICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRhcmstYm94LXNoYWRvdzogICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRkcm9wZG93bi1kYXJrLWxpbmstY29sb3I6ICAgICAgICAgICRkcm9wZG93bi1kYXJrLWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRhcmstbGluay1ob3Zlci1jb2xvcjogICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRhcmstbGluay1ob3Zlci1iZzogICAgICAgcmdiYSgkd2hpdGUsIC4xNSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGFyay1saW5rLWFjdGl2ZS1jb2xvcjogICAkZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGFyay1saW5rLWFjdGl2ZS1iZzogICAgICAkZHJvcGRvd24tbGluay1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGFyay1saW5rLWRpc2FibGVkLWNvbG9yOiAkZ3JheS01MDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGFyay1oZWFkZXItY29sb3I6ICAgICAgICAkZ3JheS01MDAgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGRyb3Bkb3duLWRhcmstdmFyaWFibGVzXG5cblxuLy8gUGFnaW5hdGlvblxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgcGFnaW5hdGlvbi12YXJpYWJsZXNcbiRwYWdpbmF0aW9uLXBhZGRpbmcteTogICAgICAgICAgICAgIC4zNzVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktc206ICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtc206ICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1sZzogICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1sZzogICAgICAgICAgIDEuNXJlbSAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tY29sb3I6ICAgICAgICAgICAgICAgICAgJGxpbmstY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1iZzogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLXJhZGl1czogICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1tYXJnaW4tc3RhcnQ6ICAgICAgICAgICAtJHBhZ2luYXRpb24tYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLWNvbG9yOiAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1mb2N1cy1jb2xvcjogICAgICAgICAgICAkbGluay1ob3Zlci1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWZvY3VzLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWZvY3VzLW91dGxpbmU6ICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICRsaW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcjogICAgJHBhZ2luYXRpb24tYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLXRyYW5zaXRpb246ICAgICAgICAgICAgICBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWJvcmRlci1yYWRpdXMtc206ICAgICAgICRib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLXJhZGl1cy1sZzogICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHBhZ2luYXRpb24tdmFyaWFibGVzXG5cblxuLy8gUGxhY2Vob2xkZXJzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBwbGFjZWhvbGRlcnNcbiRwbGFjZWhvbGRlci1vcGFjaXR5LW1heDogICAgICAgICAgIC41ICFkZWZhdWx0O1xuJHBsYWNlaG9sZGVyLW9wYWNpdHktbWluOiAgICAgICAgICAgLjIgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHBsYWNlaG9sZGVyc1xuXG4vLyBDYXJkc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgY2FyZC12YXJpYWJsZXNcbiRjYXJkLXNwYWNlci15OiAgICAgICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG4kY2FyZC1zcGFjZXIteDogICAgICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJGNhcmQtdGl0bGUtc3BhY2VyLXk6ICAgICAgICAgICAgICAgJHNwYWNlciAqIC41ICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGNhcmQtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRjYXJkLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIHN1YnRyYWN0KCRjYXJkLWJvcmRlci1yYWRpdXMsICRjYXJkLWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG4kY2FyZC1jYXAtcGFkZGluZy15OiAgICAgICAgICAgICAgICAkY2FyZC1zcGFjZXIteSAqIC41ICFkZWZhdWx0O1xuJGNhcmQtY2FwLXBhZGRpbmcteDogICAgICAgICAgICAgICAgJGNhcmQtc3BhY2VyLXggIWRlZmF1bHQ7XG4kY2FyZC1jYXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjAzKSAhZGVmYXVsdDtcbiRjYXJkLWNhcC1jb2xvcjogICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kY2FyZC1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGNhcmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRjYXJkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjYXJkLWltZy1vdmVybGF5LXBhZGRpbmc6ICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG4kY2FyZC1ncm91cC1tYXJnaW46ICAgICAgICAgICAgICAgICAkZ3JpZC1ndXR0ZXItd2lkdGggKiAuNSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgY2FyZC12YXJpYWJsZXNcblxuLy8gQWNjb3JkaW9uXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBhY2NvcmRpb24tdmFyaWFibGVzXG4kYWNjb3JkaW9uLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGFjY29yZGlvbi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRhY2NvcmRpb24tY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGFjY29yZGlvbi1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGFjY29yZGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xuJGFjY29yZGlvbi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICBzdWJ0cmFjdCgkYWNjb3JkaW9uLWJvcmRlci1yYWRpdXMsICRhY2NvcmRpb24tYm9yZGVyLXdpZHRoKSAhZGVmYXVsdDtcblxuJGFjY29yZGlvbi1ib2R5LXBhZGRpbmcteTogICAgICAgICAgICAgICAgJGFjY29yZGlvbi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWJvZHktcGFkZGluZy14OiAgICAgICAgICAgICAgICAkYWNjb3JkaW9uLXBhZGRpbmcteCAhZGVmYXVsdDtcblxuJGFjY29yZGlvbi1idXR0b24tcGFkZGluZy15OiAgICAgICAgICAgICAgJGFjY29yZGlvbi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWJ1dHRvbi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAkYWNjb3JkaW9uLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRhY2NvcmRpb24tYnV0dG9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICRhY2NvcmRpb24tY29sb3IgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWJ1dHRvbi1iZzogICAgICAgICAgICAgICAgICAgICAkYWNjb3JkaW9uLWJnICFkZWZhdWx0O1xuJGFjY29yZGlvbi10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICAgJGJ0bi10cmFuc2l0aW9uLCBib3JkZXItcmFkaXVzIC4xNXMgZWFzZSAhZGVmYXVsdDtcbiRhY2NvcmRpb24tYnV0dG9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgIHRpbnQtY29sb3IoJGNvbXBvbmVudC1hY3RpdmUtYmcsIDkwJSkgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWJ1dHRvbi1hY3RpdmUtY29sb3I6ICAgICAgICAgICBzaGFkZS1jb2xvcigkcHJpbWFyeSwgMTAlKSAhZGVmYXVsdDtcblxuJGFjY29yZGlvbi1idXR0b24tZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRhY2NvcmRpb24tYnV0dG9uLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICRidG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJGFjY29yZGlvbi1pY29uLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRhY2NvcmRpb24taWNvbi1jb2xvcjogICAgICAgICAgICAgICAgICAgICRhY2NvcmRpb24tYnV0dG9uLWNvbG9yICFkZWZhdWx0O1xuJGFjY29yZGlvbi1pY29uLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICAgJGFjY29yZGlvbi1idXR0b24tYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGFjY29yZGlvbi1pY29uLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgdHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dCAhZGVmYXVsdDtcbiRhY2NvcmRpb24taWNvbi10cmFuc2Zvcm06ICAgICAgICAgICAgICAgIHJvdGF0ZSgtMTgwZGVnKSAhZGVmYXVsdDtcblxuJGFjY29yZGlvbi1idXR0b24taWNvbjogICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNicgZmlsbD0nI3skYWNjb3JkaW9uLWljb24tY29sb3J9Jz48cGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xLjY0NiA0LjY0NmEuNS41IDAgMCAxIC43MDggMEw4IDEwLjI5M2w1LjY0Ni01LjY0N2EuNS41IDAgMCAxIC43MDguNzA4bC02IDZhLjUuNSAwIDAgMS0uNzA4IDBsLTYtNmEuNS41IDAgMCAxIDAtLjcwOHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWJ1dHRvbi1hY3RpdmUtaWNvbjogIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE2IDE2JyBmaWxsPScjeyRhY2NvcmRpb24taWNvbi1hY3RpdmUtY29sb3J9Jz48cGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xLjY0NiA0LjY0NmEuNS41IDAgMCAxIC43MDggMEw4IDEwLjI5M2w1LjY0Ni01LjY0N2EuNS41IDAgMCAxIC43MDguNzA4bC02IDZhLjUuNSAwIDAgMS0uNzA4IDBsLTYtNmEuNS41IDAgMCAxIDAtLjcwOHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGFjY29yZGlvbi12YXJpYWJsZXNcblxuLy8gVG9vbHRpcHNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHRvb2x0aXAtdmFyaWFibGVzXG4kdG9vbHRpcC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJHRvb2x0aXAtbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgMjAwcHggIWRlZmF1bHQ7XG4kdG9vbHRpcC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kdG9vbHRpcC1iZzogICAgICAgICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiR0b29sdGlwLW9wYWNpdHk6ICAgICAgICAgICAgICAgICAgIC45ICFkZWZhdWx0O1xuJHRvb2x0aXAtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgJHNwYWNlciAqIC4yNSAhZGVmYXVsdDtcbiR0b29sdGlwLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICRzcGFjZXIgKiAuNSAhZGVmYXVsdDtcbiR0b29sdGlwLW1hcmdpbjogICAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cbiR0b29sdGlwLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIC44cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjRyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkdG9vbHRpcC1iZyAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdG9vbHRpcC12YXJpYWJsZXNcblxuLy8gRm9ybSB0b29sdGlwcyBtdXN0IGNvbWUgYWZ0ZXIgcmVndWxhciB0b29sdGlwc1xuLy8gc2Nzcy1kb2NzLXN0YXJ0IHRvb2x0aXAtZmVlZGJhY2stdmFyaWFibGVzXG4kZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteTogICAgICR0b29sdGlwLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtcGFkZGluZy14OiAgICAgJHRvb2x0aXAtcGFkZGluZy14ICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1mb250LXNpemU6ICAgICAkdG9vbHRpcC1mb250LXNpemUgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLWxpbmUtaGVpZ2h0OiAgIG51bGwgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLW9wYWNpdHk6ICAgICAgICR0b29sdGlwLW9wYWNpdHkgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLWJvcmRlci1yYWRpdXM6ICR0b29sdGlwLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHRvb2x0aXAtZmVlZGJhY2stdmFyaWFibGVzXG5cblxuLy8gUG9wb3ZlcnNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHBvcG92ZXItdmFyaWFibGVzXG4kcG9wb3Zlci1mb250LXNpemU6ICAgICAgICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJHBvcG92ZXItYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBvcG92ZXItbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgMjc2cHggIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4yKSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJHBvcG92ZXItaW5uZXItYm9yZGVyLXJhZGl1czogICAgICAgc3VidHJhY3QoJHBvcG92ZXItYm9yZGVyLXJhZGl1cywgJHBvcG92ZXItYm9yZGVyLXdpZHRoKSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICRib3gtc2hhZG93ICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1oZWFkZXItYmc6ICAgICAgICAgICAgICAgICBzaGFkZS1jb2xvcigkcG9wb3Zlci1iZywgNiUpICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTogICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1ib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvZHktcGFkZGluZy15OiAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib2R5LXBhZGRpbmcteDogICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJHBvcG92ZXItYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkcG9wb3Zlci1iZyAhZGVmYXVsdDtcblxuJHBvcG92ZXItYXJyb3ctb3V0ZXItY29sb3I6ICAgICAgICAgZmFkZS1pbigkcG9wb3Zlci1ib3JkZXItY29sb3IsIC4wNSkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHBvcG92ZXItdmFyaWFibGVzXG5cblxuLy8gVG9hc3RzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB0b2FzdC12YXJpYWJsZXNcbiR0b2FzdC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAgIDM1MHB4ICFkZWZhdWx0O1xuJHRvYXN0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHRvYXN0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAuODc1cmVtICFkZWZhdWx0O1xuJHRvYXN0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiR0b2FzdC1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuODUpICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHRvYXN0LWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgJGJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kdG9hc3Qtc3BhY2luZzogICAgICAgICAgICAgICAgICAgICAkY29udGFpbmVyLXBhZGRpbmcteCAhZGVmYXVsdDtcblxuJHRvYXN0LWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHRvYXN0LWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgcmdiYSgkd2hpdGUsIC44NSkgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICByZ2JhKCRibGFjaywgLjA1KSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdG9hc3QtdmFyaWFibGVzXG5cblxuLy8gQmFkZ2VzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBiYWRnZS12YXJpYWJsZXNcbiRiYWRnZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgIC43NWVtICFkZWZhdWx0O1xuJGJhZGdlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG4kYmFkZ2UtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuMzVlbSAhZGVmYXVsdDtcbiRiYWRnZS1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIC42NWVtICFkZWZhdWx0O1xuJGJhZGdlLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGJhZGdlLXZhcmlhYmxlc1xuXG5cbi8vIE1vZGFsc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgbW9kYWwtdmFyaWFibGVzXG4kbW9kYWwtaW5uZXItcGFkZGluZzogICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuXG4kbW9kYWwtZm9vdGVyLW1hcmdpbi1iZXR3ZWVuOiAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJG1vZGFsLWRpYWxvZy1tYXJnaW46ICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kbW9kYWwtZGlhbG9nLW1hcmdpbi15LXNtLXVwOiAgICAgICAxLjc1cmVtICFkZWZhdWx0O1xuXG4kbW9kYWwtdGl0bGUtbGluZS1oZWlnaHQ6ICAgICAgICAgICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcblxuJG1vZGFsLWNvbnRlbnQtY29sb3I6ICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJnOiAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvcjogICAgICAgIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGg6ICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1pbm5lci1ib3JkZXItcmFkaXVzOiBzdWJ0cmFjdCgkbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzLCAkbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14czogICAgICAgJGJveC1zaGFkb3ctc20gIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXNtLXVwOiAgICAkYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJG1vZGFsLWJhY2tkcm9wLWJnOiAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJG1vZGFsLWJhY2tkcm9wLW9wYWNpdHk6ICAgICAgICAgICAgLjUgIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I6ICAgICAgICAgJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aDogICAgICAgICAkbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtZm9vdGVyLWJvcmRlci13aWR0aDogICAgICAgICAkbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZy15OiAgICAgICAgICAgICRtb2RhbC1pbm5lci1wYWRkaW5nICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6ICAgICAgICAgICAgJG1vZGFsLWlubmVyLXBhZGRpbmcgIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmc6ICAgICAgICAgICAgICAkbW9kYWwtaGVhZGVyLXBhZGRpbmcteSAkbW9kYWwtaGVhZGVyLXBhZGRpbmcteCAhZGVmYXVsdDsgLy8gS2VlcCB0aGlzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuXG4kbW9kYWwtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAzMDBweCAhZGVmYXVsdDtcbiRtb2RhbC1tZDogICAgICAgICAgICAgICAgICAgICAgICAgIDUwMHB4ICFkZWZhdWx0O1xuJG1vZGFsLWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgODAwcHggIWRlZmF1bHQ7XG4kbW9kYWwteGw6ICAgICAgICAgICAgICAgICAgICAgICAgICAxMTQwcHggIWRlZmF1bHQ7XG5cbiRtb2RhbC1mYWRlLXRyYW5zZm9ybTogICAgICAgICAgICAgIHRyYW5zbGF0ZSgwLCAtNTBweCkgIWRlZmF1bHQ7XG4kbW9kYWwtc2hvdy10cmFuc2Zvcm06ICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xuJG1vZGFsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIC4zcyBlYXNlLW91dCAhZGVmYXVsdDtcbiRtb2RhbC1zY2FsZS10cmFuc2Zvcm06ICAgICAgICAgICAgIHNjYWxlKDEuMDIpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBtb2RhbC12YXJpYWJsZXNcblxuXG4vLyBBbGVydHNcbi8vXG4vLyBEZWZpbmUgYWxlcnQgY29sb3JzLCBib3JkZXIgcmFkaXVzLCBhbmQgcGFkZGluZy5cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGFsZXJ0LXZhcmlhYmxlc1xuJGFsZXJ0LXBhZGRpbmcteTogICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJGFsZXJ0LXBhZGRpbmcteDogICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJGFsZXJ0LW1hcmdpbi1ib3R0b206ICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kYWxlcnQtYmctc2NhbGU6ICAgICAgICAgICAgICAgIC04MCUgIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXNjYWxlOiAgICAgICAgICAgIC03MCUgIWRlZmF1bHQ7XG4kYWxlcnQtY29sb3Itc2NhbGU6ICAgICAgICAgICAgIDQwJSAhZGVmYXVsdDtcbiRhbGVydC1kaXNtaXNzaWJsZS1wYWRkaW5nLXI6ICAgJGFsZXJ0LXBhZGRpbmcteCAqIDMgIWRlZmF1bHQ7IC8vIDN4IGNvdmVycyB3aWR0aCBvZiB4IHBsdXMgZGVmYXVsdCBwYWRkaW5nIG9uIGVpdGhlciBzaWRlXG4vLyBzY3NzLWRvY3MtZW5kIGFsZXJ0LXZhcmlhYmxlc1xuXG5cbi8vIFByb2dyZXNzIGJhcnNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHByb2dyZXNzLXZhcmlhYmxlc1xuJHByb2dyZXNzLWhlaWdodDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIC43NSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iZzogICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHByb2dyZXNzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgJGJveC1zaGFkb3ctaW5zZXQgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWNvbG9yOiAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWJnOiAgICAgICAgICAgICAgICAgICAkcHJpbWFyeSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItYW5pbWF0aW9uLXRpbWluZzogICAgIDFzIGxpbmVhciBpbmZpbml0ZSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItdHJhbnNpdGlvbjogICAgICAgICAgIHdpZHRoIC42cyBlYXNlICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBwcm9ncmVzcy12YXJpYWJsZXNcblxuXG4vLyBMaXN0IGdyb3VwXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBsaXN0LWdyb3VwLXZhcmlhYmxlc1xuJGxpc3QtZ3JvdXAtY29sb3I6ICAgICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYmc6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteTogICAgICAgICAkc3BhY2VyICogLjUgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteDogICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtaXRlbS1iZy1zY2FsZTogICAgICAgICAgLTgwJSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWl0ZW0tY29sb3Itc2NhbGU6ICAgICAgIDQwJSAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRsaXN0LWdyb3VwLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJGxpc3QtZ3JvdXAtYmcgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvcjogICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1jb2xvcjogICAgICRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvciAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjogICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOiAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGxpc3QtZ3JvdXAtdmFyaWFibGVzXG5cblxuLy8gSW1hZ2UgdGh1bWJuYWlsc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdGh1bWJuYWlsLXZhcmlhYmxlc1xuJHRodW1ibmFpbC1wYWRkaW5nOiAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHRodW1ibmFpbC1iZzogICAgICAgICAgICAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci13aWR0aDogICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAkYm94LXNoYWRvdy1zbSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdGh1bWJuYWlsLXZhcmlhYmxlc1xuXG5cbi8vIEZpZ3VyZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGZpZ3VyZS12YXJpYWJsZXNcbiRmaWd1cmUtY2FwdGlvbi1mb250LXNpemU6ICAgICAgICAgICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XG4kZmlndXJlLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZpZ3VyZS12YXJpYWJsZXNcblxuXG4vLyBCcmVhZGNydW1ic1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgYnJlYWRjcnVtYi12YXJpYWJsZXNcbiRicmVhZGNydW1iLWZvbnQtc2l6ZTogICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItcGFkZGluZy14OiAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWl0ZW0tcGFkZGluZy14OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItbWFyZ2luLWJvdHRvbTogICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWJnOiAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyOiAgICAgICAgICAgICAgICBxdW90ZShcIi9cIikgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyLWZsaXBwZWQ6ICAgICAgICAkYnJlYWRjcnVtYi1kaXZpZGVyICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgYnJlYWRjcnVtYi12YXJpYWJsZXNcblxuLy8gQ2Fyb3VzZWxcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGNhcm91c2VsLXZhcmlhYmxlc1xuJGNhcm91c2VsLWNvbnRyb2wtY29sb3I6ICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLXdpZHRoOiAgICAgICAgICAgICAxNSUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1vcGFjaXR5OiAgICAgICAgICAgLjUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1ob3Zlci1vcGFjaXR5OiAgICAgLjkgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC10cmFuc2l0aW9uOiAgICAgICAgb3BhY2l0eSAuMTVzIGVhc2UgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1pbmRpY2F0b3Itd2lkdGg6ICAgICAgICAgICAzMHB4ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1oZWlnaHQ6ICAgICAgICAgIDNweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItaGl0LWFyZWEtaGVpZ2h0OiAxMHB4ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1zcGFjZXI6ICAgICAgICAgIDNweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3Itb3BhY2l0eTogICAgICAgICAuNSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWFjdGl2ZS1vcGFjaXR5OiAgMSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItdHJhbnNpdGlvbjogICAgICBvcGFjaXR5IC42cyBlYXNlICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY2FwdGlvbi13aWR0aDogICAgICAgICAgICAgNzAlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jYXB0aW9uLXBhZGRpbmcteTogICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGNhcm91c2VsLWNhcHRpb24tc3BhY2VyOiAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jb250cm9sLWljb24td2lkdGg6ICAgICAgICAycmVtICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9JyN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9Jz48cGF0aCBkPSdNMTEuMzU0IDEuNjQ2YS41LjUgMCAwIDEgMCAuNzA4TDUuNzA3IDhsNS42NDcgNS42NDZhLjUuNSAwIDAgMS0uNzA4LjcwOGwtNi02YS41LjUgMCAwIDEgMC0uNzA4bDYtNmEuNS41IDAgMCAxIC43MDggMHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9JyN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9Jz48cGF0aCBkPSdNNC42NDYgMS42NDZhLjUuNSAwIDAgMSAuNzA4IDBsNiA2YS41LjUgMCAwIDEgMCAuNzA4bC02IDZhLjUuNSAwIDAgMS0uNzA4LS43MDhMMTAuMjkzIDggNC42NDYgMi4zNTRhLjUuNSAwIDAgMSAwLS43MDh6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtdHJhbnNpdGlvbi1kdXJhdGlvbjogICAgICAgLjZzICFkZWZhdWx0O1xuJGNhcm91c2VsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAkY2Fyb3VzZWwtdHJhbnNpdGlvbi1kdXJhdGlvbiBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gRGVmaW5lIHRyYW5zZm9ybSB0cmFuc2l0aW9uIGZpcnN0IGlmIHVzaW5nIG11bHRpcGxlIHRyYW5zaXRpb25zIChlLmcuLCBgdHJhbnNmb3JtIDJzIGVhc2UsIG9wYWNpdHkgLjVzIGVhc2Utb3V0YClcblxuJGNhcm91c2VsLWRhcmstaW5kaWNhdG9yLWFjdGl2ZS1iZzogICRibGFjayAhZGVmYXVsdDtcbiRjYXJvdXNlbC1kYXJrLWNhcHRpb24tY29sb3I6ICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtZGFyay1jb250cm9sLWljb24tZmlsdGVyOiAgaW52ZXJ0KDEpIGdyYXlzY2FsZSgxMDApICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBjYXJvdXNlbC12YXJpYWJsZXNcblxuXG4vLyBTcGlubmVyc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgc3Bpbm5lci12YXJpYWJsZXNcbiRzcGlubmVyLXdpZHRoOiAgICAgICAgICAgMnJlbSAhZGVmYXVsdDtcbiRzcGlubmVyLWhlaWdodDogICAgICAgICAgJHNwaW5uZXItd2lkdGggIWRlZmF1bHQ7XG4kc3Bpbm5lci12ZXJ0aWNhbC1hbGlnbjogIC0uMTI1ZW0gIWRlZmF1bHQ7XG4kc3Bpbm5lci1ib3JkZXItd2lkdGg6ICAgIC4yNWVtICFkZWZhdWx0O1xuJHNwaW5uZXItYW5pbWF0aW9uLXNwZWVkOiAuNzVzICFkZWZhdWx0O1xuXG4kc3Bpbm5lci13aWR0aC1zbTogICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kc3Bpbm5lci1oZWlnaHQtc206ICAgICAgICRzcGlubmVyLXdpZHRoLXNtICFkZWZhdWx0O1xuJHNwaW5uZXItYm9yZGVyLXdpZHRoLXNtOiAuMmVtICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBzcGlubmVyLXZhcmlhYmxlc1xuXG5cbi8vIENsb3NlXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBjbG9zZS12YXJpYWJsZXNcbiRidG4tY2xvc2Utd2lkdGg6ICAgICAgICAgICAgMWVtICFkZWZhdWx0O1xuJGJ0bi1jbG9zZS1oZWlnaHQ6ICAgICAgICAgICAkYnRuLWNsb3NlLXdpZHRoICFkZWZhdWx0O1xuJGJ0bi1jbG9zZS1wYWRkaW5nLXg6ICAgICAgICAuMjVlbSAhZGVmYXVsdDtcbiRidG4tY2xvc2UtcGFkZGluZy15OiAgICAgICAgJGJ0bi1jbG9zZS1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kYnRuLWNsb3NlLWNvbG9yOiAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRidG4tY2xvc2UtYmc6ICAgICAgICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9JyN7JGJ0bi1jbG9zZS1jb2xvcn0nPjxwYXRoIGQ9J00uMjkzLjI5M2ExIDEgMCAwMTEuNDE0IDBMOCA2LjU4NiAxNC4yOTMuMjkzYTEgMSAwIDExMS40MTQgMS40MTRMOS40MTQgOGw2LjI5MyA2LjI5M2ExIDEgMCAwMS0xLjQxNCAxLjQxNEw4IDkuNDE0bC02LjI5MyA2LjI5M2ExIDEgMCAwMS0xLjQxNC0xLjQxNEw2LjU4NiA4IC4yOTMgMS43MDdhMSAxIDAgMDEwLTEuNDE0eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRidG4tY2xvc2UtZm9jdXMtc2hhZG93OiAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGJ0bi1jbG9zZS1vcGFjaXR5OiAgICAgICAgICAuNSAhZGVmYXVsdDtcbiRidG4tY2xvc2UtaG92ZXItb3BhY2l0eTogICAgLjc1ICFkZWZhdWx0O1xuJGJ0bi1jbG9zZS1mb2N1cy1vcGFjaXR5OiAgICAxICFkZWZhdWx0O1xuJGJ0bi1jbG9zZS1kaXNhYmxlZC1vcGFjaXR5OiAuMjUgIWRlZmF1bHQ7XG4kYnRuLWNsb3NlLXdoaXRlLWZpbHRlcjogICAgIGludmVydCgxKSBncmF5c2NhbGUoMTAwJSkgYnJpZ2h0bmVzcygyMDAlKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgY2xvc2UtdmFyaWFibGVzXG5cblxuLy8gT2ZmY2FudmFzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBvZmZjYW52YXMtdmFyaWFibGVzXG4kb2ZmY2FudmFzLXBhZGRpbmcteTogICAgICAgICAgICAgICAkbW9kYWwtaW5uZXItcGFkZGluZyAhZGVmYXVsdDtcbiRvZmZjYW52YXMtcGFkZGluZy14OiAgICAgICAgICAgICAgICRtb2RhbC1pbm5lci1wYWRkaW5nICFkZWZhdWx0O1xuJG9mZmNhbnZhcy1ob3Jpem9udGFsLXdpZHRoOiAgICAgICAgNDAwcHggIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLXZlcnRpY2FsLWhlaWdodDogICAgICAgICAzMHZoICFkZWZhdWx0O1xuJG9mZmNhbnZhcy10cmFuc2l0aW9uLWR1cmF0aW9uOiAgICAgLjNzICFkZWZhdWx0O1xuJG9mZmNhbnZhcy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG9mZmNhbnZhcy1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG9mZmNhbnZhcy10aXRsZS1saW5lLWhlaWdodDogICAgICAgJG1vZGFsLXRpdGxlLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuJG9mZmNhbnZhcy1iZy1jb2xvcjogICAgICAgICAgICAgICAgJG1vZGFsLWNvbnRlbnQtYmcgIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLWNvbG9yOiAgICAgICAgICAgICAgICAgICAkbW9kYWwtY29udGVudC1jb2xvciAhZGVmYXVsdDtcbiRvZmZjYW52YXMtYm94LXNoYWRvdzogICAgICAgICAgICAgICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMgIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLWJhY2tkcm9wLWJnOiAgICAgICAgICAgICAkbW9kYWwtYmFja2Ryb3AtYmcgIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLWJhY2tkcm9wLW9wYWNpdHk6ICAgICAgICAkbW9kYWwtYmFja2Ryb3Atb3BhY2l0eSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgb2ZmY2FudmFzLXZhcmlhYmxlc1xuXG4vLyBDb2RlXG5cbiRjb2RlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XG4kY29kZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAkcGluayAhZGVmYXVsdDtcblxuJGtiZC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgLjJyZW0gIWRlZmF1bHQ7XG4ka2JkLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAuNHJlbSAhZGVmYXVsdDtcbiRrYmQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICRjb2RlLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRrYmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRrYmQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcblxuJHByZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiJdfQ== */"], changeDetection: 0 });
function processTerm(minimalTermLength, fetchDebounceTime) {
    return (source$) => source$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(fetchDebounceTime), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(normalizeTerm), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)((0,_utils_filter__WEBPACK_IMPORTED_MODULE_0__.longerOrEqual)(minimalTermLength)));
}
function normalizeTerm(term) {
    return term.trim().toLowerCase();
}


/***/ }),

/***/ 1104:
/*!****************************************************!*\
  !*** ./src/app/shared/directives/let.directive.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LetContext": () => (/* binding */ LetContext),
/* harmony export */   "LetDirective": () => (/* binding */ LetDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class LetContext {
    constructor() {
        this.$implicit = null;
        this.erzLet = null;
    }
}
class LetDirective {
    constructor(vcr, templateRef) {
        this.vcr = vcr;
        this.templateRef = templateRef;
        this.context = new LetContext();
    }
    set erzLet(value) {
        this.context.$implicit = this.context.erzLet = value;
    }
    ngOnInit() {
        this.vcr.createEmbeddedView(this.templateRef, this.context);
    }
}
LetDirective.ɵfac = function LetDirective_Factory(t) { return new (t || LetDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
LetDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LetDirective, selectors: [["", "erzLet", ""]], inputs: { erzLet: "erzLet" } });


/***/ }),

/***/ 5030:
/*!***********************************************!*\
  !*** ./src/app/shared/models/common-types.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalDateFromString": () => (/* binding */ LocalDateFromString),
/* harmony export */   "LocalDateTimeFromString": () => (/* binding */ LocalDateTimeFromString),
/* harmony export */   "Maybe": () => (/* binding */ Maybe),
/* harmony export */   "Option": () => (/* binding */ Option),
/* harmony export */   "OptionalReference": () => (/* binding */ OptionalReference),
/* harmony export */   "Reference": () => (/* binding */ Reference)
/* harmony export */ });
/* harmony import */ var io_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! io-ts */ 9450);
/* harmony import */ var fp_ts_es6_Either__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fp-ts/es6/Either */ 1633);
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/date */ 6316);



function Option(optionalType) {
    return io_ts__WEBPACK_IMPORTED_MODULE_1__.union([io_ts__WEBPACK_IMPORTED_MODULE_1__["null"], optionalType]);
}
function Maybe(maybeType) {
    return io_ts__WEBPACK_IMPORTED_MODULE_1__.union([io_ts__WEBPACK_IMPORTED_MODULE_1__["null"], io_ts__WEBPACK_IMPORTED_MODULE_1__.undefined, maybeType]);
}
const Reference = io_ts__WEBPACK_IMPORTED_MODULE_1__.type({ Id: io_ts__WEBPACK_IMPORTED_MODULE_1__.number, HRef: Option(io_ts__WEBPACK_IMPORTED_MODULE_1__.string) });

const OptionalReference = io_ts__WEBPACK_IMPORTED_MODULE_1__.type({
    Id: Option(io_ts__WEBPACK_IMPORTED_MODULE_1__.number),
    HRef: Option(io_ts__WEBPACK_IMPORTED_MODULE_1__.string),
});

const LocalDateTimeFromString = new io_ts__WEBPACK_IMPORTED_MODULE_1__.Type('LocalDateTimeFromString', (u) => u instanceof Date, (u, c) => fp_ts_es6_Either__WEBPACK_IMPORTED_MODULE_2__.either.chain(io_ts__WEBPACK_IMPORTED_MODULE_1__.string.validate(u, c), (s) => {
    const d = (0,_utils_date__WEBPACK_IMPORTED_MODULE_0__.parseISOLocalDateTime)(s);
    return isNaN(d.getTime()) ? io_ts__WEBPACK_IMPORTED_MODULE_1__.failure(u, c) : io_ts__WEBPACK_IMPORTED_MODULE_1__.success(d);
}), (a) => (0,_utils_date__WEBPACK_IMPORTED_MODULE_0__.formatISOLocalDateTime)(a));
const LocalDateFromString = new io_ts__WEBPACK_IMPORTED_MODULE_1__.Type('LocalDateTimeFromString', (u) => u instanceof Date, (u, c) => fp_ts_es6_Either__WEBPACK_IMPORTED_MODULE_2__.either.chain(io_ts__WEBPACK_IMPORTED_MODULE_1__.string.validate(u, c), (s) => {
    const d = (0,_utils_date__WEBPACK_IMPORTED_MODULE_0__.parseISOLocalDate)(s);
    return isNaN(d.getTime()) ? io_ts__WEBPACK_IMPORTED_MODULE_1__.failure(u, c) : io_ts__WEBPACK_IMPORTED_MODULE_1__.success(d);
}), (a) => (0,_utils_date__WEBPACK_IMPORTED_MODULE_0__.formatISOLocalDate)(a));


/***/ }),

/***/ 4743:
/*!*********************************************************!*\
  !*** ./src/app/shared/models/teacher-resource.model.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherResource": () => (/* binding */ TeacherResource)
/* harmony export */ });
/* harmony import */ var io_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! io-ts */ 9450);
/* harmony import */ var _common_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-types */ 5030);


const TeacherResource = io_ts__WEBPACK_IMPORTED_MODULE_1__.type({
    Id: io_ts__WEBPACK_IMPORTED_MODULE_1__.Int,
    TeacherId: io_ts__WEBPACK_IMPORTED_MODULE_1__.Int,
    FullName: io_ts__WEBPACK_IMPORTED_MODULE_1__.string,
    Acronym: (0,_common_types__WEBPACK_IMPORTED_MODULE_0__.Option)(io_ts__WEBPACK_IMPORTED_MODULE_1__.string),
    Status: io_ts__WEBPACK_IMPORTED_MODULE_1__.string,
    StatusId: io_ts__WEBPACK_IMPORTED_MODULE_1__.Int,
});



/***/ }),

/***/ 6263:
/*!*************************************************************!*\
  !*** ./src/app/shared/models/teacher-substitution.model.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherSubstitution": () => (/* binding */ TeacherSubstitution)
/* harmony export */ });
/* harmony import */ var io_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! io-ts */ 9450);
/* harmony import */ var io_ts_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! io-ts-types */ 2296);
/* harmony import */ var _common_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-types */ 5030);



const TeacherSubstitution = io_ts__WEBPACK_IMPORTED_MODULE_1__.type({
    Id: io_ts__WEBPACK_IMPORTED_MODULE_1__.Int,
    HolderId: io_ts__WEBPACK_IMPORTED_MODULE_1__.Int,
    Holder: io_ts__WEBPACK_IMPORTED_MODULE_1__.string,
    SubstituteId: io_ts__WEBPACK_IMPORTED_MODULE_1__.Int,
    Substitute: io_ts__WEBPACK_IMPORTED_MODULE_1__.string,
    DateFrom: io_ts_types__WEBPACK_IMPORTED_MODULE_2__.DateFromISOString,
    DateTo: io_ts_types__WEBPACK_IMPORTED_MODULE_2__.DateFromISOString,
    Remarks: (0,_common_types__WEBPACK_IMPORTED_MODULE_0__.Option)(io_ts__WEBPACK_IMPORTED_MODULE_1__.string),
});



/***/ }),

/***/ 264:
/*!************************************************!*\
  !*** ./src/app/shared/pipes/add-space.pipe.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSpacePipe": () => (/* binding */ AddSpacePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_i18n_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/i18n.service */ 2741);


class AddSpacePipe {
    constructor(i18n) {
        this.i18n = i18n;
    }
    transform(value, chars) {
        const lang = this.i18n.detectLanguage();
        switch (lang) {
            case 'fr-CH':
                Array.from(chars).map((c) => (value = value.replace(c, ' '.concat(c))));
                return value;
            default:
                return value;
        }
    }
}
AddSpacePipe.ɵfac = function AddSpacePipe_Factory(t) { return new (t || AddSpacePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_i18n_service__WEBPACK_IMPORTED_MODULE_0__.I18nService, 16)); };
AddSpacePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "addSpace", type: AddSpacePipe, pure: true });


/***/ }),

/***/ 8266:
/*!******************************************************!*\
  !*** ./src/app/shared/pipes/days-difference.pipe.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DaysDifferencePipe": () => (/* binding */ DaysDifferencePipe)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 6323);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);



class DaysDifferencePipe {
    constructor(translate) {
        this.translate = translate;
    }
    transform(input) {
        if (!input) {
            return '';
        }
        const difference = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(input, new Date());
        return this.translate.instant(`shared.daysDifference.${this.getKey(difference)}`, {
            count: Math.abs(difference),
        });
    }
    getKey(daysDifference) {
        if (daysDifference === 0) {
            return 'today';
        }
        else if (daysDifference === 1) {
            return 'tomorrow';
        }
        else if (daysDifference === -1) {
            return 'yesterday';
        }
        else if (daysDifference > 0) {
            return 'in';
        }
        return 'ago';
    }
}
DaysDifferencePipe.ɵfac = function DaysDifferencePipe_Factory(t) { return new (t || DaysDifferencePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService, 16)); };
DaysDifferencePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "erzDaysDifference", type: DaysDifferencePipe, pure: true });


/***/ }),

/***/ 4316:
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/person-email.pipe.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonEmailPipe": () => (/* binding */ PersonEmailPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PersonEmailPipe {
    transform(input) {
        return (input === null || input === void 0 ? void 0 : input.DisplayEmail) || (input === null || input === void 0 ? void 0 : input.Email) || (input === null || input === void 0 ? void 0 : input.Email2) || null;
    }
}
PersonEmailPipe.ɵfac = function PersonEmailPipe_Factory(t) { return new (t || PersonEmailPipe)(); };
PersonEmailPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "erzPersonEmail", type: PersonEmailPipe, pure: true });


/***/ }),

/***/ 8246:
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/safe.pipe.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafePipe": () => (/* binding */ SafePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 318);


/* based on https://medium.com/@swarnakishore/angular-safe-pipe-implementation-to-bypass-domsanitizer-stripping-out-content-c1bf0f1cc36b */
class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
SafePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });


/***/ }),

/***/ 9528:
/*!******************************************!*\
  !*** ./src/app/shared/pipes/xss.pipe.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XssPipe": () => (/* binding */ XssPipe)
/* harmony export */ });
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xss */ 5830);
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class XssPipe {
    transform(value, options) {
        return xss__WEBPACK_IMPORTED_MODULE_0___default()(value, options);
    }
}
XssPipe.ɵfac = function XssPipe_Factory(t) { return new (t || XssPipe)(); };
XssPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "xss", type: XssPipe, pure: true });


/***/ }),

/***/ 629:
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService),
/* harmony export */   "SUBSTITUTE_ADMINISTRATOR_ROLE": () => (/* binding */ SUBSTITUTE_ADMINISTRATOR_ROLE)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9361);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 4514);
/* harmony import */ var src_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/settings */ 8029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ 1303);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8784);








const SUBSTITUTE_ADMINISTRATOR_ROLE = 'SubstituteAdministratorRole';
class AuthService {
    constructor(storage, route, router, settings, 
    //private location: Location,
    http) {
        this.storage = storage;
        this.route = route;
        this.router = router;
        this.settings = settings;
        this.http = http;
        this.personId$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.holderId$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.substitutionId$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.personId$.next(this.personId);
        this.substitutionId$.next(this.substitutionId);
        this.holderId$.next(this.holderId);
    }
    get isAuthenticated() {
        return Boolean(this.accessToken);
    }
    get accessToken() {
        return this.storage.getAccessToken();
    }
    get personId() {
        if (this.accessToken == null)
            return null;
        let stringId = this.parseJwt(this.accessToken).id_person;
        if (stringId == null)
            return null;
        return parseInt(stringId);
    }
    get personName() {
        if (this.accessToken == null)
            return null;
        return this.parseJwt(this.accessToken).fullname;
    }
    get substitutionId() {
        if (this.accessToken == null)
            return null;
        let substitutionId = this.parseJwt(this.accessToken).substitution_id;
        if (substitutionId == null)
            return substitutionId;
        return parseInt(substitutionId);
    }
    get holderId() {
        if (this.accessToken == null)
            return null;
        let substitutionId = this.parseJwt(this.accessToken).holder_id;
        if (substitutionId == null)
            return substitutionId;
        return parseInt(substitutionId);
    }
    get oAuthUrl() {
        if (this.accessToken == null)
            return null;
        return this.parseJwt(this.accessToken).iss;
    }
    get roles() {
        var _a;
        if (this.accessToken == null)
            return [];
        let rolesString = (_a = this.parseJwt(this.accessToken).roles) !== null && _a !== void 0 ? _a : "";
        return rolesString.split(';');
    }
    hasRole(role) {
        return this.roles.includes(role);
    }
    setTokenResponse(tokenResponse) {
        this.storage.setToken(tokenResponse["access_token"], tokenResponse["refresh_token"]);
        this.personId$.next(this.personId);
        this.substitutionId$.next(this.substitutionId);
        this.holderId$.next(this.holderId);
    }
    setToken(accessToken) {
        this.storage.setToken(accessToken, "");
        this.personId$.next(this.personId);
        this.substitutionId$.next(this.substitutionId);
        this.holderId$.next(this.holderId);
    }
    parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    }
    ;
    login() {
        let oAuthUrl = this.settings.oAuthUrl;
        let instanceId = this.settings.instanceId;
        let clientId = this.settings.clientId;
        let redirectUrl = this.settings.oAuthRedirectUrl;
        let appScope = this.settings.appScope;
        let params = new URLSearchParams();
        if (!clientId) {
            console.error('clientId is not configured');
            return;
        }
        params.append('clientId', clientId);
        params.append('application_scope', appScope);
        if (redirectUrl) {
            params.append('redirectUrl', redirectUrl);
        }
        let loginUrl = `${oAuthUrl}/authorization/${instanceId}/login?${params.toString()}`;
        window.location.href = loginUrl;
    }
    logout() {
        var _a;
        let oAuthUrl = this.settings.oAuthUrl;
        let instanceId = this.settings.instanceId;
        let body = `access_token=${encodeURIComponent((_a = this.accessToken) !== null && _a !== void 0 ? _a : "")}`;
        let logoutUrl = `${oAuthUrl}/authorization/${instanceId}/logout`;
        let result = this.http.post(logoutUrl, body, { responseType: 'text' }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(v => {
            console.log('response', v);
            this.personId$.next(null);
            this.holderId$.next(null);
            this.substitutionId$.next(null);
            this.storage.setToken(null, null);
            this.router.navigate(['/']);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mapTo)(undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.share)());
        result.subscribe(v => console.log('success', v), v => console.log('errror', v));
        return result;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_settings__WEBPACK_IMPORTED_MODULE_0__.SETTINGS), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8568:
/*!**********************************************************!*\
  !*** ./src/app/shared/services/date-parser-formatter.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateParserFormatter": () => (/* binding */ DateParserFormatter)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 4876);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 6712);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);



class DateParserFormatter extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__.NgbDateParserFormatter {
    /**
     * The default implementation uses non-strict type checking and expects `null` to be returned if the value can't be parsed.
     */
    parse(value) {
        const date = value ? (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(value, 'dd.MM.yyyy', new Date()) : null;
        if (date) {
            return {
                year: date.getFullYear(),
                month: date.getMonth() + 1,
                day: date.getDate(),
            };
        }
        return null;
    }
    /**
     * The default implementation uses non-strict type checking and expects an empty string to be returned if the given date is `null`.
     */
    format(date) {
        return date
            ? (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(date.year, date.month - 1, date.day), 'dd.MM.yyyy')
            : '';
    }
}
DateParserFormatter.ɵfac = /*@__PURE__*/ function () { let ɵDateParserFormatter_BaseFactory; return function DateParserFormatter_Factory(t) { return (ɵDateParserFormatter_BaseFactory || (ɵDateParserFormatter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](DateParserFormatter)))(t || DateParserFormatter); }; }();
DateParserFormatter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DateParserFormatter, factory: DateParserFormatter.ɵfac });


/***/ }),

/***/ 2741:
/*!*************************************************!*\
  !*** ./src/app/shared/services/i18n.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I18nService": () => (/* binding */ I18nService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ 1303);



const LANGUAGES = ['de-CH', 'fr-CH'];
const FALLBACK_LANGUAGE = LANGUAGES[0];
class I18nService {
    constructor(translate, storage) {
        this.translate = translate;
        this.storage = storage;
    }
    initialize() {
        this.translate.setDefaultLang(FALLBACK_LANGUAGE);
        this.translate.use(this.detectLanguage());
    }
    /**
     * Detect the user's language using the following priorities:
     *   1. Document's HTML lang attribute
     *   2. Language provided in localStorage
     *   3. Browser's language
     *   4. Fallback language
     */
    detectLanguage() {
        if (!this.detectedLanguage) {
            this.detectedLanguage =
                this.getDocumentLanguage() ||
                    this.getStoredLanguage() ||
                    this.getBrowserLanguage() ||
                    FALLBACK_LANGUAGE;
        }
        return this.detectedLanguage;
    }
    getLocalizedLanguage(language) {
        language = LANGUAGES.find((l) => l === `${(language || '').toLowerCase()}-CH`);
        return language ? language : FALLBACK_LANGUAGE;
    }
    getDocumentLanguage() {
        const langElement = document.querySelector('[lang]');
        return this.normalizeLanguage(langElement && langElement.lang);
    }
    getStoredLanguage() {
        return this.normalizeLanguage(this.storage.getLanguage());
    }
    getBrowserLanguage() {
        return this.normalizeLanguage(this.translate.getBrowserLang());
    }
    normalizeLanguage(lang) {
        lang = (lang || '').split('-')[0];
        return (lang && LANGUAGES.find((l) => lang === l.split('-')[0])) || null;
    }
}
I18nService.ɵfac = function I18nService_Factory(t) { return new (t || I18nService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService)); };
I18nService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: I18nService, factory: I18nService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2024:
/*!****************************************************!*\
  !*** ./src/app/shared/services/loading-service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1555);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 2647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 2787);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 2428);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 4661);
/* harmony import */ var _utils_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/observable */ 1558);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);




const DEFAULT_CONTEXT = 'default';
class LoadingService {
    constructor() {
        this.action$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.loadingCounts$ = this.action$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.scan)((counts, { action, context }) => {
            switch (action) {
                case 'increment':
                    counts[context] = (counts[context] || 0) + 1;
                    return counts;
                case 'decrement':
                    counts[context] = Math.max(0, (counts[context] || 0) - 1);
                    return counts;
                default:
                    return counts;
            }
        }, {}), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.startWith)({}), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.multicast)(() => new rxjs__WEBPACK_IMPORTED_MODULE_5__.ReplaySubject(1)) // Make it hot
        );
        this.loading$ = this.loading();
        this.loadingCountsSub = this
            .loadingCounts$.connect();
    }
    ngOnDestroy() {
        this.loadingCountsSub.unsubscribe();
    }
    loading(context = DEFAULT_CONTEXT) {
        return this.loadingCounts$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.pluck)(context), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(nonZero), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)());
    }
    load(source$, context = DEFAULT_CONTEXT) {
        return source$.pipe((0,_utils_observable__WEBPACK_IMPORTED_MODULE_0__.prepare)(this.incrementLoadingCount(context)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(this.decrementLoadingCount(context)));
    }
    incrementLoadingCount(context) {
        return () => this.action$.next({ action: 'increment', context });
    }
    decrementLoadingCount(context) {
        return () => this.action$.next({ action: 'decrement', context });
    }
}
LoadingService.ɵfac = function LoadingService_Factory(t) { return new (t || LoadingService)(); };
LoadingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({ token: LoadingService, factory: LoadingService.ɵfac, providedIn: 'root' });
function nonZero(value) {
    return (value || 0) !== 0;
}


/***/ }),

/***/ 2671:
/*!*************************************************!*\
  !*** ./src/app/shared/services/rest.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestService": () => (/* binding */ RestService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var _utils_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/decode */ 8108);


class RestService {
    constructor(http, settings, codec, resourcePath) {
        this.http = http;
        this.settings = settings;
        this.codec = codec;
        this.resourcePath = resourcePath;
    }
    get(id, options) {
        return this.http
            .get(`${this.baseUrl}/${id}`, options)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)((0,_utils_decode__WEBPACK_IMPORTED_MODULE_0__.decode)(this.codec)));
    }
    getList(options) {
        return this.http
            .get(`${this.baseUrl}/`, options)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)((0,_utils_decode__WEBPACK_IMPORTED_MODULE_0__.decodeArray)(this.codec)));
    }
    get baseUrl() {
        return `${this.settings.apiUrl}/${this.resourcePath}`;
    }
}


/***/ }),

/***/ 1303:
/*!****************************************************!*\
  !*** ./src/app/shared/services/storage.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const LANGUAGE_KEY = 'uiCulture';
const ACCESS_TOKEN_KEY = 'CLX.LoginToken';
const REFRESH_TOKEN_KEY = 'CLX.RefreshToken';
const TOKEN_EXPIRE_KEY = 'CLX.TokenExpire';
class StorageService {
    getLanguage() {
        return this.getValue(LANGUAGE_KEY);
    }
    getAccessToken() {
        const token = this.getValue(ACCESS_TOKEN_KEY);
        return token ? token.replace(/^\"+|\"+$/g, '') : null;
    }
    getRefreshToken() {
        return this.getValue(REFRESH_TOKEN_KEY);
    }
    setToken(accessToken, refreshToken) {
        this.setValue(ACCESS_TOKEN_KEY, accessToken);
        this.setValue(REFRESH_TOKEN_KEY, refreshToken);
    }
    getTokenExpire() {
        return this.getValue(TOKEN_EXPIRE_KEY);
    }
    getPayload() {
        const token = this.getAccessToken();
        const base64Url = token ? token.split('.')[1] : null;
        const base64 = base64Url
            ? base64Url.replace('-', '+').replace('_', '/')
            : null;
        return JSON.parse(window.atob(base64 ? base64 : ''));
    }
    getValue(key) {
        return sessionStorage.getItem(key) || localStorage.getItem(key);
    }
    setValue(key, value) {
        if (value == null) {
            sessionStorage.removeItem(key);
        }
        else {
            sessionStorage.setItem(key, value);
        }
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
StorageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 622:
/*!*************************************************************!*\
  !*** ./src/app/shared/services/teacher-resource.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherResourceService": () => (/* binding */ TeacherResourceService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _utils_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/decode */ 8108);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rest.service */ 2671);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../settings */ 8029);
/* harmony import */ var _models_teacher_resource_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/teacher-resource.model */ 4743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ 629);










/**
 * Don't use this service to load presence types in
 * components/services, use the `PresenceTypesService` instead, that
 * caches these entries and loads them only once throughout the
 * application.
 */
class TeacherResourceService extends _rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService {
    constructor(http, settings, authService) {
        super(http, settings, _models_teacher_resource_model__WEBPACK_IMPORTED_MODULE_3__.TeacherResource, 'TeacherResources');
        this.authService = authService;
    }
    getTeacherName(id) {
        if (id == null)
            return new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
        let params = {
            //'fields': ["Id", "FullName"].join(','),
            'filter.TeacherId': `=${id}`,
        };
        return this.http.get(`${this.baseUrl}/`, { params: params }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(v => console.log('get  name', v), e => console.log('error1', e)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(v => {
            return (0,_utils_decode__WEBPACK_IMPORTED_MODULE_0__.decodeArray)(this.codec)(v);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(v => console.log('name received'), e => console.log('error2', e)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(v => v[0].FullName));
    }
}
TeacherResourceService.ɵfac = function TeacherResourceService_Factory(t) { return new (t || TeacherResourceService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_settings__WEBPACK_IMPORTED_MODULE_2__.SETTINGS), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService)); };
TeacherResourceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: TeacherResourceService, factory: TeacherResourceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8893:
/*!*****************************************************************!*\
  !*** ./src/app/shared/services/teacher-substitution.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherSubstitutionService": () => (/* binding */ TeacherSubstitutionService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 9361);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 4514);
/* harmony import */ var _utils_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/decode */ 8108);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rest.service */ 2671);
/* harmony import */ var _typeahead_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typeahead-rest.service */ 109);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../settings */ 8029);
/* harmony import */ var _models_teacher_substitution_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/teacher-substitution.model */ 6263);
/* harmony import */ var _models_teacher_resource_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/teacher-resource.model */ 4743);
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/date */ 6316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loading-service */ 2024);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.service */ 629);















/**
 * Don't use this service to load presence types in
 * components/services, use the `PresenceTypesService` instead, that
 * caches these entries and loads them only once throughout the
 * application.
 */
class TeacherSubstitutionService extends _rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService {
    constructor(loadingService, 
    //private location: Location,
    route, http, settings, authService) {
        super(http, settings, _models_teacher_substitution_model__WEBPACK_IMPORTED_MODULE_4__.TeacherSubstitution, 'TeacherSubstitutions');
        this.loadingService = loadingService;
        this.route = route;
        this.authService = authService;
        this.substitutions$ = this.getList();
        this.mySubstitutions$ = this.http.get(`${this.baseUrl}/my`, { params: { 'sort': 'DateFrom.asc' } }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)((0,_utils_decode__WEBPACK_IMPORTED_MODULE_0__.decodeArray)(this.codec)));
        this.typeaheadService = new _typeahead_rest_service__WEBPACK_IMPORTED_MODULE_2__.TypeaheadRestService(http, settings, _models_teacher_resource_model__WEBPACK_IMPORTED_MODULE_5__.TeacherResource, 'TeacherResources', 'FullName', 'TeacherId', 'Acronym');
    }
    //getPaginatedList():PaginatedEntriesService<TeacherSubstitution, TeacherSubstitutionFilter> {
    //  return new PaginatedEntriesService<TeacherSubstitution, TeacherSubstitutionFilter>(this.location, this.loadingService, this.settings, '/teachersubstitutions')
    //}
    getMyList() {
        return this.http.get(`${this.baseUrl}/my`, { params: { 'sort': 'DateFrom.asc' } }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)((0,_utils_decode__WEBPACK_IMPORTED_MODULE_0__.decodeArray)(this.codec)));
    }
    getCurrentList() {
        return this.http.get(`${this.baseUrl}/current`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)((0,_utils_decode__WEBPACK_IMPORTED_MODULE_0__.decodeArray)(this.codec)));
    }
    getAdminList() {
        let date = new Date();
        let date2 = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
        let dateFromISO = new Date(date2.setUTCDate(date2.getUTCDate())).toISOString().split('.')[0];
        return this.http.get(`${this.baseUrl}/`, { params: { limit: 9999, 'filter.IsRevoked': '=0', 'filter.DateTo': `!<${dateFromISO}` } }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)((0,_utils_decode__WEBPACK_IMPORTED_MODULE_0__.decodeArray)(this.codec)));
    }
    edit(substitutionId, dateFrom, dateTo, remarks) {
        let body = {
            'SubstitutionIds': substitutionId ? [substitutionId] : null,
            'DateFrom': (0,_utils_date__WEBPACK_IMPORTED_MODULE_6__.formatISOLocalDate)(dateFrom),
            'DateTo': (0,_utils_date__WEBPACK_IMPORTED_MODULE_6__.formatISOLocalDate)(dateTo),
            'Remarks': remarks
        };
        return this.http.put(`${this.baseUrl}/set`, body, { responseType: "json" }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mapTo)(undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.share)());
    }
    create(holderId, substituteId, from, to, remarks) {
        let body = {
            'HolderId': holderId,
            'SubstituteIds': substituteId ? [substituteId] : null,
            'DateFrom': (0,_utils_date__WEBPACK_IMPORTED_MODULE_6__.formatISOLocalDate)(from),
            'DateTo': (0,_utils_date__WEBPACK_IMPORTED_MODULE_6__.formatISOLocalDate)(to),
            'Remarks': remarks
        };
        return this.http.put(`${this.baseUrl}/new`, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mapTo)(undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.share)());
    }
    delete(substitutionId) {
        let body = {
            'SubsititutionIds': substitutionId ? [substitutionId] : null
        };
        return this.http.put(`${this.baseUrl}/revoke`, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mapTo)(undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.share)());
    }
    start(substitutionId) {
        var _a;
        let oAuthUrl = this.settings.oAuthUrl;
        let webmoduleRedirectUrl = window.location.pathname + window.location.hash;
        let body = {
            'access_token': (_a = this.authService.accessToken) !== null && _a !== void 0 ? _a : "",
        };
        if (this.settings.oAuthRedirectUrl) {
            body['redirect_uri'] = this.settings.oAuthRedirectUrl;
        }
        let params = new URLSearchParams({
            'webModuleRedirectUri': webmoduleRedirectUrl,
        });
        let url = `${oAuthUrl}/Authorization/Substitutions/${substitutionId}/start?${params.toString()}`;
        this.postFormData(url, body);
        return new rxjs__WEBPACK_IMPORTED_MODULE_12__.Observable();
    }
    stop(substitutionId) {
        var _a;
        let oAuthUrl = this.settings.oAuthUrl;
        let webmoduleRedirectUrl = window.location.pathname + window.location.hash;
        let body = {
            'access_token': (_a = this.authService.accessToken) !== null && _a !== void 0 ? _a : "",
        };
        if (this.settings.oAuthRedirectUrl) {
            body['redirect_uri'] = this.settings.oAuthRedirectUrl;
        }
        let params = new URLSearchParams({
            'moduleRedirectUrl': window.location.hash.substring(1),
            'webModuleRedirectUri': webmoduleRedirectUrl,
        });
        let url = `${oAuthUrl}/Authorization/Substitutions/${substitutionId}/stop?${params.toString()}`;
        this.postFormData(url, body);
        return new rxjs__WEBPACK_IMPORTED_MODULE_12__.Observable();
    }
    postFormData(url, data) {
        let formElement = document.createElement('form');
        formElement.setAttribute('target', '_self');
        formElement.setAttribute('action', url);
        formElement.setAttribute('method', 'POST');
        formElement.style.visibility = 'hidden';
        for (let [key, value] of Object.entries(data)) {
            let inputElement = document.createElement('input');
            inputElement.setAttribute('type', 'text');
            inputElement.setAttribute('name', key);
            inputElement.setAttribute('value', value);
            formElement.appendChild(inputElement);
        }
        document.body.appendChild(formElement);
        formElement.submit();
    }
}
TeacherSubstitutionService.ɵfac = function TeacherSubstitutionService_Factory(t) { return new (t || TeacherSubstitutionService)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_loading_service__WEBPACK_IMPORTED_MODULE_7__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_settings__WEBPACK_IMPORTED_MODULE_3__.SETTINGS), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService)); };
TeacherSubstitutionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({ token: TeacherSubstitutionService, factory: TeacherSubstitutionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 109:
/*!***********************************************************!*\
  !*** ./src/app/shared/services/typeahead-rest.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpParams": () => (/* binding */ HttpParams),
/* harmony export */   "TypeaheadRestService": () => (/* binding */ TypeaheadRestService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var io_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! io-ts */ 9450);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/types */ 9975);
/* harmony import */ var _utils_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/decode */ 8108);
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/rest.service */ 2671);





class HttpParams {
}
class TypeaheadRestService extends _services_rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService {
    constructor(http, settings, codec, resourcePath, labelAttr, idAttr = 'Id', additionalLabelAttr = null) {
        super(http, settings, codec, resourcePath);
        this.labelAttr = labelAttr;
        this.idAttr = idAttr;
        this.additionalLabelAttr = additionalLabelAttr;
        this.typeaheadCodec = io_ts__WEBPACK_IMPORTED_MODULE_3__.type((0,_utils_types__WEBPACK_IMPORTED_MODULE_0__.pick)(this.codec.props, [this.idAttr, this.labelAttr]));
    }
    getTypeaheadItems(term, additionalParams) {
        let fields = this.getFields();
        const params = {
            params: {
                fields: fields.join(','),
                [`filter.${this.labelAttr}`]: `~*${term}*`,
            },
        };
        return this.http
            .get(`${this.baseUrl}/`, additionalParams
            ? this.mergeHttpParams(params, additionalParams)
            : params)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)((0,_utils_decode__WEBPACK_IMPORTED_MODULE_1__.decodeArray)(this.typeaheadCodec)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((items) => items.map((i) => {
            let value = i[this.labelAttr];
            if (this.additionalLabelAttr && i[this.additionalLabelAttr]) {
                value = `${value} (${i[this.additionalLabelAttr]})`;
            }
            return { Key: i[this.idAttr], Value: value };
        })));
    }
    getFields() {
        let fields = [this.idAttr, this.labelAttr];
        if (this.additionalLabelAttr) {
            fields.push(this.additionalLabelAttr);
        }
        return fields;
    }
    getTypeaheadItemById(id) {
        let fields = this.getFields();
        return this.http
            .get(`${this.baseUrl}/${id}`, {
            params: {
                fields: fields.join(','),
            },
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)((0,_utils_decode__WEBPACK_IMPORTED_MODULE_1__.decode)(this.typeaheadCodec)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((item) => {
            let value = item[this.labelAttr];
            if (this.additionalLabelAttr && item[this.additionalLabelAttr]) {
                value = `${value} (${item[this.additionalLabelAttr]})`;
            }
            return { Key: item[this.idAttr], Value: value };
        }));
    }
    mergeHttpParams(typeaheadParams, additionalParams) {
        const merged = {
            params: Object.assign(Object.assign({}, typeaheadParams.params), additionalParams.params),
        };
        if (additionalParams.params.fields) {
            merged.params.fields = typeaheadParams.params.fields.concat(',', additionalParams.params.fields);
        }
        return merged;
    }
}


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/avatar/avatar.component */ 7871);
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/spinner/spinner.component */ 2925);
/* harmony import */ var _directives_let_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/let.directive */ 1104);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-infinite-scroll */ 4503);
/* harmony import */ var _rest_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest-auth-interceptor */ 8413);
/* harmony import */ var _rest_error_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rest-error-interceptor */ 3367);
/* harmony import */ var _components_typeahead_typeahead_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/typeahead/typeahead.component */ 6628);
/* harmony import */ var _components_date_select_date_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/date-select/date-select.component */ 2859);
/* harmony import */ var _components_select_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/select/select.component */ 9092);
/* harmony import */ var _pipes_person_email_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/person-email.pipe */ 4316);
/* harmony import */ var _pipes_days_difference_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/days-difference.pipe */ 8266);
/* harmony import */ var _components_resettable_input_resettable_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/resettable-input/resettable-input.component */ 368);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/safe.pipe */ 8246);
/* harmony import */ var _pipes_xss_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/xss.pipe */ 9528);
/* harmony import */ var _pipes_add_space_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/add-space.pipe */ 264);
/* harmony import */ var _components_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/multiselect/multiselect.component */ 8781);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-select/ng-select */ 8660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);

























// Components that will be exported
const components = [
    _directives_let_directive__WEBPACK_IMPORTED_MODULE_2__.LetDirective,
    _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent,
    _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_0__.AvatarComponent,
    _components_typeahead_typeahead_component__WEBPACK_IMPORTED_MODULE_6__.TypeaheadComponent,
    _components_date_select_date_select_component__WEBPACK_IMPORTED_MODULE_7__.DateSelectComponent,
    _components_select_select_component__WEBPACK_IMPORTED_MODULE_8__.SelectComponent,
    _components_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_15__.MultiselectComponent,
    _pipes_person_email_pipe__WEBPACK_IMPORTED_MODULE_9__.PersonEmailPipe,
    _pipes_days_difference_pipe__WEBPACK_IMPORTED_MODULE_10__.DaysDifferencePipe,
    _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_12__.SafePipe,
    _pipes_xss_pipe__WEBPACK_IMPORTED_MODULE_13__.XssPipe,
    _pipes_add_space_pipe__WEBPACK_IMPORTED_MODULE_14__.AddSpacePipe,
];
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HTTP_INTERCEPTORS, useClass: _rest_error_interceptor__WEBPACK_IMPORTED_MODULE_5__.RestErrorInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HTTP_INTERCEPTORS, useClass: _rest_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__.RestAuthInterceptor, multi: true },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule.forChild(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbModule,
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__.InfiniteScrollModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__.NgSelectModule,
        ], _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__.InfiniteScrollModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__.NgSelectModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_directives_let_directive__WEBPACK_IMPORTED_MODULE_2__.LetDirective,
        _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent,
        _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_0__.AvatarComponent,
        _components_typeahead_typeahead_component__WEBPACK_IMPORTED_MODULE_6__.TypeaheadComponent,
        _components_date_select_date_select_component__WEBPACK_IMPORTED_MODULE_7__.DateSelectComponent,
        _components_select_select_component__WEBPACK_IMPORTED_MODULE_8__.SelectComponent,
        _components_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_15__.MultiselectComponent,
        _pipes_person_email_pipe__WEBPACK_IMPORTED_MODULE_9__.PersonEmailPipe,
        _pipes_days_difference_pipe__WEBPACK_IMPORTED_MODULE_10__.DaysDifferencePipe,
        _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_12__.SafePipe,
        _pipes_xss_pipe__WEBPACK_IMPORTED_MODULE_13__.XssPipe,
        _pipes_add_space_pipe__WEBPACK_IMPORTED_MODULE_14__.AddSpacePipe, _components_resettable_input_resettable_input_component__WEBPACK_IMPORTED_MODULE_11__.ResettableInputComponent,
        _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_12__.SafePipe,
        _pipes_xss_pipe__WEBPACK_IMPORTED_MODULE_13__.XssPipe,
        _pipes_add_space_pipe__WEBPACK_IMPORTED_MODULE_14__.AddSpacePipe,
        _components_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_15__.MultiselectComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__.InfiniteScrollModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__.NgSelectModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__.InfiniteScrollModule, _directives_let_directive__WEBPACK_IMPORTED_MODULE_2__.LetDirective,
        _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent,
        _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_0__.AvatarComponent,
        _components_typeahead_typeahead_component__WEBPACK_IMPORTED_MODULE_6__.TypeaheadComponent,
        _components_date_select_date_select_component__WEBPACK_IMPORTED_MODULE_7__.DateSelectComponent,
        _components_select_select_component__WEBPACK_IMPORTED_MODULE_8__.SelectComponent,
        _components_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_15__.MultiselectComponent,
        _pipes_person_email_pipe__WEBPACK_IMPORTED_MODULE_9__.PersonEmailPipe,
        _pipes_days_difference_pipe__WEBPACK_IMPORTED_MODULE_10__.DaysDifferencePipe,
        _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_12__.SafePipe,
        _pipes_xss_pipe__WEBPACK_IMPORTED_MODULE_13__.XssPipe,
        _pipes_add_space_pipe__WEBPACK_IMPORTED_MODULE_14__.AddSpacePipe, _components_resettable_input_resettable_input_component__WEBPACK_IMPORTED_MODULE_11__.ResettableInputComponent,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__.NgSelectModule] }); })();


/***/ }),

/***/ 1261:
/*!*******************************************!*\
  !*** ./src/app/shared/tokens/dom-apis.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NAVIGATOR": () => (/* binding */ NAVIGATOR)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const NAVIGATOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('Navigator API', {
    providedIn: 'root',
    factory: () => navigator,
});


/***/ }),

/***/ 6316:
/*!**************************************!*\
  !*** ./src/app/shared/utils/date.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatISOLocalDate": () => (/* binding */ formatISOLocalDate),
/* harmony export */   "formatISOLocalDateTime": () => (/* binding */ formatISOLocalDateTime),
/* harmony export */   "formatISOUTC": () => (/* binding */ formatISOUTC),
/* harmony export */   "parseISOLocalDate": () => (/* binding */ parseISOLocalDate),
/* harmony export */   "parseISOLocalDateTime": () => (/* binding */ parseISOLocalDateTime)
/* harmony export */ });
/**
 * The api provides dates without timezone;
 * to prevent problems, the date string is parsed manually.
 * See https://stackoverflow.com/questions/33908299/javascript-parse-a-string-to-date-as-local-time-zone/33909265#33909265
 */
function parseISOLocalDateTime(dateString) {
    const dateArray = dateString.split(/\D/).map((d) => Number(d));
    return new Date(dateArray[0], dateArray[1] - 1, dateArray[2], dateArray[3], dateArray[4], dateArray[5]);
}
/**
 * The api provides dates without time;
 * to prevent problems, the date string is parsed manually.
 * See https://stackoverflow.com/questions/33908299/javascript-parse-a-string-to-date-as-local-time-zone/33909265#33909265
 */
function parseISOLocalDate(dateString) {
    const dateArray = dateString.split(/\D/).map((d) => Number(d));
    return new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
}
/**
 * The api provides dates without timezone;
 * to prevent problems, the date string is formatted manually.
 * See https://stackoverflow.com/questions/33908299/javascript-parse-a-string-to-date-as-local-time-zone/33909265#33909265
 */
function formatISOLocalDateTime(date) {
    return (formatISOLocalDate(date) +
        `T${zeroPadding(date.getHours())}:${zeroPadding(date.getMinutes())}:${zeroPadding(date.getSeconds())}`);
}
/**
 * The api provides dates without time;
 * to prevent problems, the date string is formatted manually.
 * See https://stackoverflow.com/questions/33908299/javascript-parse-a-string-to-date-as-local-time-zone/33909265#33909265
 */
function formatISOLocalDate(date) {
    return `${date.getFullYear()}-${zeroPadding(date.getMonth() + 1)}-${zeroPadding(date.getDate())}`;
}
function formatISOUTC(date) {
    return `${date.getUTCFullYear()}-${zeroPadding(date.getUTCMonth() + 1)}-${zeroPadding(date.getUTCDate())}`;
}
function zeroPadding(value) {
    return ('0' + value).slice(-2);
}


/***/ }),

/***/ 8108:
/*!****************************************!*\
  !*** ./src/app/shared/utils/decode.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DecodeError": () => (/* binding */ DecodeError),
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "decodeArray": () => (/* binding */ decodeArray)
/* harmony export */ });
/* harmony import */ var io_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! io-ts */ 9450);
/* harmony import */ var fp_ts_es6_pipeable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fp-ts/es6/pipeable */ 3035);
/* harmony import */ var fp_ts_es6_Either__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fp-ts/es6/Either */ 1633);
/* harmony import */ var io_ts_es6_PathReporter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! io-ts/es6/PathReporter */ 4726);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4139);





class DecodeError extends Error {
    constructor() {
        super(...arguments);
        this.name = 'DecodeError';
    }
}
/**
 * Decode JSON data using the given io-st type (i.e. codec), throws a
 * `DecodeError` if the data is not valid.
 *
 * Usage:
 *   const Foo = t.type({
 *     foo: t.string
 *   });
 *   decode(Foo)({ foo: 'bar' }).subscribe(result => ...)
 *
 * Example using HttpClient:
 *   this.http.get(...).pipe(switchMap(decode(Foo))).subscribe(...)
 */
function decode(codec) {
    return (json) => {
        return (0,fp_ts_es6_pipeable__WEBPACK_IMPORTED_MODULE_0__.pipe)(codec.decode(json), (0,fp_ts_es6_Either__WEBPACK_IMPORTED_MODULE_1__.fold)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(new DecodeError(io_ts_es6_PathReporter__WEBPACK_IMPORTED_MODULE_3__.PathReporter.report((0,fp_ts_es6_Either__WEBPACK_IMPORTED_MODULE_1__.left)(error)).join('\n'))), (data) => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(data)));
    };
}
/**
 * Convenience function, equivalent to calling `decode(t.array(X))`,
 * but without having to import io-ts: `decodeArray(X)`.
 */
function decodeArray(codec) {
    return decode(io_ts__WEBPACK_IMPORTED_MODULE_5__.array(codec));
}


/***/ }),

/***/ 3978:
/*!****************************************!*\
  !*** ./src/app/shared/utils/filter.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isInstanceOf": () => (/* binding */ isInstanceOf),
/* harmony export */   "isTruthy": () => (/* binding */ isTruthy),
/* harmony export */   "longerOrEqual": () => (/* binding */ longerOrEqual),
/* harmony export */   "nonZero": () => (/* binding */ nonZero),
/* harmony export */   "not": () => (/* binding */ not),
/* harmony export */   "notNull": () => (/* binding */ notNull)
/* harmony export */ });
function nonZero(value) {
    return value !== 0;
}
function notNull(arg) {
    return arg !== null;
}
function not(fn) {
    return (arg) => !fn(arg);
}
function longerOrEqual(length) {
    return (value) => value.length >= length;
}
function isTruthy(value) {
    return Boolean(value);
}
function isInstanceOf(type) {
    // tslint:disable-next-line
    return function (value) {
        return value instanceof type;
    };
}


/***/ }),

/***/ 1558:
/*!********************************************!*\
  !*** ./src/app/shared/utils/observable.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "catch404": () => (/* binding */ catch404),
/* harmony export */   "log": () => (/* binding */ log),
/* harmony export */   "prepare": () => (/* binding */ prepare)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8759);



function catch404(returnValue) {
    return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)((error) => {
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse && error.status === 404) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(returnValue || null);
        }
        else {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
        }
    });
}
/**
 * For debugging purposes, logs message an value for each value in the
 * stream, e.g.:
 *   foo$.pipe(log('foo$')).subscribe()
 */
function log(message = null) {
    return (input$) => input$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((x) => (message ? console.log(message, x) : console.log(x))));
}
/**
 * Calls a callback when an observable gets subscribed, e.g.:
 *   foo$.pipe(prepare(() => console.log('subscribed')))
 */
function prepare(callback) {
    return (source) => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.defer)(() => {
        callback();
        return source;
    });
}


/***/ }),

/***/ 9975:
/*!***************************************!*\
  !*** ./src/app/shared/utils/types.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pick": () => (/* binding */ pick)
/* harmony export */ });
/**
 * Equivalent to TypeScript's Pick<T, K>, to be used with io-ts types
 * like this:
 *
 * const Student = t.type({
 *   Id: t.number,
 *   FullName: t.string,
 *   Email: t.string
 * })
 * const PartialStudent = t.type(pick(Student.props, ['Id', 'FullName']))
 *
 * Important note: this solution does not fail for unexisting
 * properties at compile-time, see:
 * https://github.com/gcanti/io-ts/issues/300
 */
function pick(o, keys) {
    return keys.reduce((acc, k) => (Object.assign(Object.assign({}, acc), { [k]: o[k] })), {});
}


/***/ }),

/***/ 1249:
/*!**********************************************!*\
  !*** ./src/app/unauthenticated.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnauthenticatedComponent": () => (/* binding */ UnauthenticatedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 3935);


class UnauthenticatedComponent {
    constructor() { }
    ngOnInit() { }
}
UnauthenticatedComponent.ɵfac = function UnauthenticatedComponent_Factory(t) { return new (t || UnauthenticatedComponent)(); };
UnauthenticatedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnauthenticatedComponent, selectors: [["erz-unauthenticated"]], decls: 4, vars: 3, consts: [[1, "erz-container"], [1, "alert", "alert-danger", "my-3"]], template: function UnauthenticatedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "unauthenticated.message"), " ");
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




__webpack_require__.p =
    window.stellvertretung.settings.scriptsAndAssetsPath + '/';
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map