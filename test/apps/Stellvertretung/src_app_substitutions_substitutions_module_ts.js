"use strict";
(self["webpackChunkstellvertretung"] = self["webpackChunkstellvertretung"] || []).push([["src_app_substitutions_substitutions_module_ts"],{

/***/ 3947:
/*!*************************************!*\
  !*** ./src/app/auth.admin.guard.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthAdminGuard": () => (/* binding */ AuthAdminGuard)
/* harmony export */ });
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/services/auth.service */ 629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);




class AuthAdminGuard {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    canActivate(next, state) {
        if (this.auth.isAuthenticated && this.auth.hasRole(_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.SUBSTITUTE_ADMINISTRATOR_ROLE)) {
            return true;
        }
        else {
            this.router.navigate(['/unauthenticated']);
            return false;
        }
    }
}
AuthAdminGuard.ɵfac = function AuthAdminGuard_Factory(t) { return new (t || AuthAdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AuthAdminGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthAdminGuard, factory: AuthAdminGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 510:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/substitutions/components/page-admin-substitution-create-ad-hoc/page-admin-substitution-create-ad-hoc.component.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageAdminSubstitutionCreateAdHocComponent": () => (/* binding */ PageAdminSubstitutionCreateAdHocComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/teacher-substitution.service */ 8893);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 629);
/* harmony import */ var _substitution_create_ad_hoc_substitution_create_ad_hoc_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../substitution-create-ad-hoc/substitution-create-ad-hoc.component */ 9459);





class PageAdminSubstitutionCreateAdHocComponent {
    constructor(route, router, teacherSubstitutionService, changeDetector, authService) {
        this.route = route;
        this.router = router;
        this.teacherSubstitutionService = teacherSubstitutionService;
        this.changeDetector = changeDetector;
        this.authService = authService;
    }
    ngOnInit() {
    }
    navigateToList() {
        this.router.navigate(['/substitutions/admin']);
    }
}
PageAdminSubstitutionCreateAdHocComponent.ɵfac = function PageAdminSubstitutionCreateAdHocComponent_Factory(t) { return new (t || PageAdminSubstitutionCreateAdHocComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__.TeacherSubstitutionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
PageAdminSubstitutionCreateAdHocComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PageAdminSubstitutionCreateAdHocComponent, selectors: [["erz-page-admin-substitution-create-ad-hoc"]], decls: 2, vars: 0, consts: [[1, "erz-container-limited"], [3, "cancel", "save"]], template: function PageAdminSubstitutionCreateAdHocComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "erz-substitution-create-ad-hoc", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cancel", function PageAdminSubstitutionCreateAdHocComponent_Template_erz_substitution_create_ad_hoc_cancel_1_listener() { return ctx.navigateToList(); })("save", function PageAdminSubstitutionCreateAdHocComponent_Template_erz_substitution_create_ad_hoc_save_1_listener() { return ctx.navigateToList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } }, directives: [_substitution_create_ad_hoc_substitution_create_ad_hoc_component__WEBPACK_IMPORTED_MODULE_2__.SubstitutionCreateAdHocComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWFkbWluLXN1YnN0aXR1dGlvbi1jcmVhdGUtYWQtaG9jLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 0:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/substitutions/components/page-admin-substitution-create/page-admin-substitution-create.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageAdminSubstitutionCreateComponent": () => (/* binding */ PageAdminSubstitutionCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/teacher-substitution.service */ 8893);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 629);
/* harmony import */ var _substitution_create_substitution_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../substitution-create/substitution-create.component */ 6956);





class PageAdminSubstitutionCreateComponent {
    constructor(route, router, teacherSubstitutionService, changeDetector, authService) {
        this.route = route;
        this.router = router;
        this.teacherSubstitutionService = teacherSubstitutionService;
        this.changeDetector = changeDetector;
        this.authService = authService;
    }
    ngOnInit() {
    }
    navigateToList() {
        this.router.navigate(['/substitutions/admin']);
    }
}
PageAdminSubstitutionCreateComponent.ɵfac = function PageAdminSubstitutionCreateComponent_Factory(t) { return new (t || PageAdminSubstitutionCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__.TeacherSubstitutionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
PageAdminSubstitutionCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PageAdminSubstitutionCreateComponent, selectors: [["erz-page-admin-substitution-create"]], decls: 2, vars: 0, consts: [[1, "erz-container-limited"], [3, "cancel", "save"]], template: function PageAdminSubstitutionCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "erz-substitution-create", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cancel", function PageAdminSubstitutionCreateComponent_Template_erz_substitution_create_cancel_1_listener() { return ctx.navigateToList(); })("save", function PageAdminSubstitutionCreateComponent_Template_erz_substitution_create_save_1_listener() { return ctx.navigateToList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } }, directives: [_substitution_create_substitution_create_component__WEBPACK_IMPORTED_MODULE_2__.SubstitutionCreateComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWFkbWluLXN1YnN0aXR1dGlvbi1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7782:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/substitutions/components/page-admin-substitution-edit/page-admin-substitution-edit.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageAdminSubstitutionEditComponent": () => (/* binding */ PageAdminSubstitutionEditComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 4514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/teacher-substitution.service */ 8893);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/spinner/spinner.component */ 2925);
/* harmony import */ var _substitution_edit_substitution_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../substitution-edit/substitution-edit.component */ 3603);







function PageAdminSubstitutionEditComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "erz-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class PageAdminSubstitutionEditComponent {
    constructor(route, router, teacherSubstitutionService, changeDetector) {
        this.route = route;
        this.router = router;
        this.teacherSubstitutionService = teacherSubstitutionService;
        this.changeDetector = changeDetector;
        this.isLoading = true;
    }
    ngOnInit() {
        this.substitution$ = this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(v => {
            this.isLoading = true;
            this.changeDetector.markForCheck();
        }), 
        //delay(100),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(v => v.get('id')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(v => parseInt(v)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(id => this.teacherSubstitutionService.get(id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(v => {
            this.isLoading = false;
            this.changeDetector.markForCheck();
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.share)());
        this.substitution$.subscribe(v => null);
    }
    navigateToList() {
        this.router.navigate(['/substitutions/admin']);
    }
}
PageAdminSubstitutionEditComponent.ɵfac = function PageAdminSubstitutionEditComponent_Factory(t) { return new (t || PageAdminSubstitutionEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__.TeacherSubstitutionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
PageAdminSubstitutionEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PageAdminSubstitutionEditComponent, selectors: [["erz-page-admin-substitution-edit"]], decls: 4, vars: 7, consts: [[4, "ngIf"], [1, "erz-container-limited"], [3, "substitution", "show-holder", "save", "cancel", "delete"]], template: function PageAdminSubstitutionEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PageAdminSubstitutionEditComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "erz-substitution-edit", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("save", function PageAdminSubstitutionEditComponent_Template_erz_substitution_edit_save_2_listener() { return ctx.navigateToList(); })("cancel", function PageAdminSubstitutionEditComponent_Template_erz_substitution_edit_cancel_2_listener() { return ctx.navigateToList(); })("delete", function PageAdminSubstitutionEditComponent_Template_erz_substitution_edit_delete_2_listener() { return ctx.navigateToList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", ctx.isLoading ? "none" : "block");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("substitution", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 5, ctx.substitution$))("show-holder", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent, _substitution_edit_substitution_edit_component__WEBPACK_IMPORTED_MODULE_2__.SubstitutionEditComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWFkbWluLXN1YnN0aXR1dGlvbi1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9492:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/substitutions/components/page-admin-substitution-list/page-admin-substitution-list.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageAdminSubstitutionListComponent": () => (/* binding */ PageAdminSubstitutionListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 629);
/* harmony import */ var src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/teacher-substitution.service */ 8893);
/* harmony import */ var _substitution_list_admin_substitution_list_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../substitution-list-admin/substitution-list-admin.component */ 2655);





class PageAdminSubstitutionListComponent {
    constructor(route, authService, router, teacherSubstitutionService, changeDetector) {
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.teacherSubstitutionService = teacherSubstitutionService;
        this.changeDetector = changeDetector;
        this.editLink = v => ['admin', 'edit', v];
    }
    sortBy(column) {
        this.sortColumn = column;
        this.changeDetector.markForCheck();
    }
    ngOnInit() {
    }
}
PageAdminSubstitutionListComponent.ɵfac = function PageAdminSubstitutionListComponent_Factory(t) { return new (t || PageAdminSubstitutionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_1__.TeacherSubstitutionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
PageAdminSubstitutionListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PageAdminSubstitutionListComponent, selectors: [["erz-page-admin-substitution-list"]], decls: 1, vars: 4, consts: [[3, "filter", "sort-column", "substitutions$", "edit-link"]], template: function PageAdminSubstitutionListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "erz-substitution-list-admin", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("filter", ctx.searchString)("sort-column", ctx.sortColumn)("substitutions$", ctx.teacherSubstitutionService.getAdminList())("edit-link", ctx.editLink);
    } }, directives: [_substitution_list_admin_substitution_list_admin_component__WEBPACK_IMPORTED_MODULE_2__.SubstitutionListAdminComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWFkbWluLXN1YnN0aXR1dGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8852:
/*!*********************************************************************************************************!*\
  !*** ./src/app/substitutions/components/page-substitution-create/page-substitution-create.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageSubstitutionCreateComponent": () => (/* binding */ PageSubstitutionCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/teacher-substitution.service */ 8893);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 629);
/* harmony import */ var _substitution_create_substitution_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../substitution-create/substitution-create.component */ 6956);





class PageSubstitutionCreateComponent {
    constructor(route, router, teacherSubstitutionService, changeDetector, authService) {
        this.route = route;
        this.router = router;
        this.teacherSubstitutionService = teacherSubstitutionService;
        this.changeDetector = changeDetector;
        this.authService = authService;
    }
    ngOnInit() {
    }
    navigateToList() {
        this.router.navigate(['/substitutions/assign']);
    }
}
PageSubstitutionCreateComponent.ɵfac = function PageSubstitutionCreateComponent_Factory(t) { return new (t || PageSubstitutionCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__.TeacherSubstitutionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
PageSubstitutionCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PageSubstitutionCreateComponent, selectors: [["erz-page-substitution-create"]], decls: 2, vars: 1, consts: [[1, "erz-container-limited"], [3, "holderId", "cancel", "save"]], template: function PageSubstitutionCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "erz-substitution-create", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cancel", function PageSubstitutionCreateComponent_Template_erz_substitution_create_cancel_1_listener() { return ctx.navigateToList(); })("save", function PageSubstitutionCreateComponent_Template_erz_substitution_create_save_1_listener() { return ctx.navigateToList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("holderId", ctx.authService.personId);
    } }, directives: [_substitution_create_substitution_create_component__WEBPACK_IMPORTED_MODULE_2__.SubstitutionCreateComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXN1YnN0aXR1dGlvbi1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4475:
/*!*****************************************************************************************************!*\
  !*** ./src/app/substitutions/components/page-substitution-edit/page-substitution-edit.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageSubstitutionEditComponent": () => (/* binding */ PageSubstitutionEditComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 4514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/teacher-substitution.service */ 8893);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/spinner/spinner.component */ 2925);
/* harmony import */ var _substitution_edit_substitution_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../substitution-edit/substitution-edit.component */ 3603);







function PageSubstitutionEditComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "erz-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class PageSubstitutionEditComponent {
    constructor(route, router, teacherSubstitutionService, changeDetector) {
        this.route = route;
        this.router = router;
        this.teacherSubstitutionService = teacherSubstitutionService;
        this.changeDetector = changeDetector;
        this.isLoading = true;
    }
    ngOnInit() {
        this.substitution$ = this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(v => {
            this.isLoading = true;
            this.changeDetector.markForCheck();
        }), 
        //delay(100),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(v => v.get('id')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(v => parseInt(v)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(id => this.teacherSubstitutionService.get(id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(v => {
            this.isLoading = false;
            this.changeDetector.markForCheck();
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.share)());
        this.substitution$.subscribe(v => null);
    }
    navigateToList() {
        this.router.navigate(['/substitutions/assign']);
    }
}
PageSubstitutionEditComponent.ɵfac = function PageSubstitutionEditComponent_Factory(t) { return new (t || PageSubstitutionEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__.TeacherSubstitutionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
PageSubstitutionEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PageSubstitutionEditComponent, selectors: [["erz-page-substitution-edit"]], decls: 4, vars: 6, consts: [[4, "ngIf"], [1, "erz-container-limited"], [3, "substitution", "save", "cancel", "delete"]], template: function PageSubstitutionEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PageSubstitutionEditComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "erz-substitution-edit", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("save", function PageSubstitutionEditComponent_Template_erz_substitution_edit_save_2_listener() { return ctx.navigateToList(); })("cancel", function PageSubstitutionEditComponent_Template_erz_substitution_edit_cancel_2_listener() { return ctx.navigateToList(); })("delete", function PageSubstitutionEditComponent_Template_erz_substitution_edit_delete_2_listener() { return ctx.navigateToList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", ctx.isLoading ? "none" : "block");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("substitution", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, ctx.substitution$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent, _substitution_edit_substitution_edit_component__WEBPACK_IMPORTED_MODULE_2__.SubstitutionEditComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXN1YnN0aXR1dGlvbi1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1750:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/substitutions/components/page-substitution-list-current/page-substitution-list-current.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageSubstitutionListCurrentComponent": () => (/* binding */ PageSubstitutionListCurrentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/teacher-substitution.service */ 8893);
/* harmony import */ var _substitution_list_current_substitution_list_current_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../substitution-list-current/substitution-list-current.component */ 1066);




class PageSubstitutionListCurrentComponent {
    constructor(route, router, teacherSubstitutionService, changeDetector) {
        this.route = route;
        this.router = router;
        this.teacherSubstitutionService = teacherSubstitutionService;
        this.changeDetector = changeDetector;
        this.isLoading = true;
    }
    ngOnInit() {
    }
}
PageSubstitutionListCurrentComponent.ɵfac = function PageSubstitutionListCurrentComponent_Factory(t) { return new (t || PageSubstitutionListCurrentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__.TeacherSubstitutionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef)); };
PageSubstitutionListCurrentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PageSubstitutionListCurrentComponent, selectors: [["erz-page-substitution-list-current"]], decls: 1, vars: 0, template: function PageSubstitutionListCurrentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "erz-substitution-list-current");
    } }, directives: [_substitution_list_current_substitution_list_current_component__WEBPACK_IMPORTED_MODULE_1__.SubstitutionListCurrentComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXN1YnN0aXR1dGlvbi1saXN0LWN1cnJlbnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 9051:
/*!*****************************************************************************************************!*\
  !*** ./src/app/substitutions/components/page-substitution-list/page-substitution-list.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageSubstitutionListComponent": () => (/* binding */ PageSubstitutionListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 629);
/* harmony import */ var src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/teacher-substitution.service */ 8893);
/* harmony import */ var _substitution_list_substitution_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../substitution-list/substitution-list.component */ 6711);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 3935);






const _c0 = function () { return ["create"]; };
class PageSubstitutionListComponent {
    constructor(route, authService, router, 
    //public location: Location,
    teacherSubstitutionService, changeDetector) {
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.teacherSubstitutionService = teacherSubstitutionService;
        this.changeDetector = changeDetector;
    }
    ngOnInit() {
    }
}
PageSubstitutionListComponent.ɵfac = function PageSubstitutionListComponent_Factory(t) { return new (t || PageSubstitutionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_1__.TeacherSubstitutionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
PageSubstitutionListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PageSubstitutionListComponent, selectors: [["erz-page-substitution-list"]], decls: 11, vars: 9, consts: [[1, "bootstrap", "container-fluid", "mt-2"], [1, "bootstrap", "row", "row-bottom-divider"], [1, "bootstrap", "col", "pb-2", "overflow-hidden"], [1, "float-end", "ms-1", "mb-1"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "material-icons"], [3, "substitutions$", "empty-message"]], template: function PageSubstitutionListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4)(5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "erz-substitution-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 4, "page-substitution-list.title-message"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("substitutions$", ctx.teacherSubstitutionService.getMyList())("empty-message", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 6, "page-substitution-list.empty-message"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _substitution_list_substitution_list_component__WEBPACK_IMPORTED_MODULE_2__.SubstitutionListComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXN1YnN0aXR1dGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9459:
/*!*************************************************************************************************************!*\
  !*** ./src/app/substitutions/components/substitution-create-ad-hoc/substitution-create-ad-hoc.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubstitutionCreateAdHocComponent": () => (/* binding */ SubstitutionCreateAdHocComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/teacher-substitution.service */ 8893);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 629);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_typeahead_typeahead_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/typeahead/typeahead.component */ 6628);












function SubstitutionCreateAdHocComponent_div_7_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.getFormControlErrors("Holder"), " ");
} }
function SubstitutionCreateAdHocComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "div", 11)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "erz-typeahead", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function SubstitutionCreateAdHocComponent_div_7_Template_erz_typeahead_valueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.holderId.setValue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SubstitutionCreateAdHocComponent_div_7_div_7_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 5, "substitution-create-ad-hoc.field-holder-label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 7, "substitution-create-ad-hoc.field-holder-placeholder"))("typeaheadService", ctx_r0.teacherSubstitutionService.typeaheadService)("error", ctx_r0.showErrors && ctx_r0.holderId.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.showErrors && ctx_r0.holderId.errors);
} }
function SubstitutionCreateAdHocComponent_div_8_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const errorMessage_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](errorMessage_r9);
} }
function SubstitutionCreateAdHocComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SubstitutionCreateAdHocComponent_div_8_div_2_p_1_Template, 2, 1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const errorMessages_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", errorMessages_r7);
} }
function SubstitutionCreateAdHocComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SubstitutionCreateAdHocComponent_div_8_div_2_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, ctx_r1.errorMessage$));
} }
function SubstitutionCreateAdHocComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 19);
} }
class SubstitutionCreateAdHocComponent {
    constructor(teacherSubstitutionService, authService, translateService, changeDetector, toastr) {
        this.teacherSubstitutionService = teacherSubstitutionService;
        this.authService = authService;
        this.translateService = translateService;
        this.changeDetector = changeDetector;
        this.toastr = toastr;
        this.cancelled = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.dateFrom = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
        this.dateTo = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
        this.remarks = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl();
        this.holderId = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
        this.substituteId = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
        this.serverErrorMessage$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
        this.showErrors = false;
        this.savingActive$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
        this.minStartDate = new Date(Date.now());
        this.saved.subscribe(() => toastr.success(translateService.instant("substitution-create.save-success-message")));
    }
    submit() {
        if (!this.form.valid) {
            console.log("submit ad hoc ERROR");
            this.showErrors = true;
            return;
        }
        console.log("submit ad hoc");
        this.savingActive$.next(true);
        this.teacherSubstitutionService.createAdHoc(this.holderId.value).subscribe(v => {
            console.log('adhoc created', v);
            this.savingActive$.next(false);
            this.saved.emit();
            this.teacherSubstitutionService.startAdHoc(v);
        }, err => {
            this.savingActive$.next(false);
            this.showErrors = true;
            this.serverErrorMessage$.next(err.Issues.map((v) => v.Message));
        });
    }
    cancel() {
        this.cancelled.emit();
    }
    ngOnInit() {
        //this.holderId.setValue(this.authService.personId);
        this.holderId.setValue(this.holderIdInput);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            //'DateFrom': this.dateFrom,
            //'DateTo': this.dateTo,
            //'Substitute': this.substituteId,
            'Holder': this.holderId,
            //'Remarks': this.remarks
        });
        this.clientErrorMessage$ = this.form.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(null), 
        //map(v => this.getAllFormControlErrors()),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(v => []));
        this.errorMessage$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.serverErrorMessage$, this.clientErrorMessage$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(v => { var _a, _b; return ((_a = v[0]) !== null && _a !== void 0 ? _a : []).concat((_b = v[1]) !== null && _b !== void 0 ? _b : []); }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(v => v.length == 0 ? null : v));
    }
    getAllFormControlErrors() {
        return Object.entries(this.form.controls).flatMap(([fieldName, control]) => {
            var _a;
            return Object.entries((_a = control.errors) !== null && _a !== void 0 ? _a : {}).filter(([key, value]) => value).map(([key, value]) => key).map((error) => `${this.translate(["substitution-model", fieldName])}: ${this.translate(['global', 'validation-errors', error])}`);
        });
    }
    getFormControlErrors(fieldName) {
        var _a;
        let control = this.form.get(fieldName);
        if (control == null)
            return [];
        return Object.entries((_a = control.errors) !== null && _a !== void 0 ? _a : {}).filter(([key, value]) => value).map(([key, value]) => key).map((error) => `${this.translate(['global', 'validation-errors', error])}`);
    }
    translate(path) {
        return this.translateService.instant(path.join('.'));
    }
    ngOnChanges(changes) {
        if (changes['substitution'] && this.substitution != null) {
            this.dateFrom.setValue(this.substitution.DateFrom);
            this.dateTo.setValue(this.substitution.DateTo);
            this.holderId.setValue(this.substitution.HolderId);
            this.substituteId.setValue(this.substitution.SubstituteId);
        }
    }
}
SubstitutionCreateAdHocComponent.ɵfac = function SubstitutionCreateAdHocComponent_Factory(t) { return new (t || SubstitutionCreateAdHocComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__.TeacherSubstitutionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService)); };
SubstitutionCreateAdHocComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SubstitutionCreateAdHocComponent, selectors: [["erz-substitution-create-ad-hoc"]], inputs: { holderIdInput: ["holderId", "holderIdInput"], substitution: "substitution" }, outputs: { cancelled: "cancel", saved: "save" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 20, vars: 14, consts: [[3, "ngSubmit"], [1, "bootstrap", "container-fluid"], [1, "row"], [1, "col"], ["class", "bootstrap row", 4, "ngIf"], [1, "bootstrap", "row"], [1, "bootstrap", "col", "mt-3"], [1, "d-flex", "flex-row"], ["type", "button", 1, "btn", "btn-secondary", "ms-auto", "text-light", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "ms-1", "d-flex", "align-items-center"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", "aria-hidden", "true", 4, "ngIf"], [1, "bootstrap", "form-group", "col"], [3, "placeholder", "typeaheadService", "error", "valueChange"], ["class", "invalid-feedback", 4, "ngIf"], [1, "invalid-feedback"], [1, "bootstrap", "col", "mt-1"], ["class", "alert alert-danger mt-2", 4, "ngIf"], [1, "alert", "alert-danger", "mt-2"], [4, "ngFor", "ngForOf"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function SubstitutionCreateAdHocComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function SubstitutionCreateAdHocComponent_Template_form_ngSubmit_0_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SubstitutionCreateAdHocComponent_div_7_Template, 8, 9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, SubstitutionCreateAdHocComponent_div_8_Template, 4, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubstitutionCreateAdHocComponent_Template_button_click_12_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, SubstitutionCreateAdHocComponent_span_16_Template, 1, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 6, "substitution-create-ad-hoc.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.holderIdInput == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 8, "substitution-create-ad-hoc.cancel-button-label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 10, ctx.savingActive$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 12, "substitution-create-ad-hoc.save-button-label"), " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_components_typeahead_typeahead_component__WEBPACK_IMPORTED_MODULE_2__.TypeaheadComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe], styles: ["[_ngcontent-%COMP%]:root {\n  --stellvertretung-primary: #005189;\n  --stellvertretung-primary-hover: #004272;\n  --stellvertretung-secondary: #8a8a8a;\n  --stellvertretung-secondary-hover: #747474;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.form-group[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib290c3RyYXAtdmFyaWFibGVzLnNjc3MiLCJzdWJzdGl0dXRpb24tY3JlYXRlLWFkLWhvYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7RUFBQTtBQTREQTtFQUNJLGtDQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDBDQUFBO0FDM0RKO0FEdUVBOztFQUFBO0FDN0VBO0VBQ0ksc0JBQUE7QUFZSjtBQVZBO0VBQ0kscUJBQUE7QUFhSjtBQVhBO0VBQ0ksY0FBQTtBQWNKIiwiZmlsZSI6InN1YnN0aXR1dGlvbi1jcmVhdGUtYWQtaG9jLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSBcInNhc3M6bWF0aFwiO1xyXG5AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9uc1wiO1xyXG5cclxuLyoqXHJcbiAqIEJvb3RzdHJhcCB2YXJpYWJsZXMgb3ZlcnJpZGVzXHJcbiAqL1xyXG5cclxuLy8gZGlzYWJsZSByZXNwb25zaXplIGZvbnQgc2l6ZXNcclxuJGVuYWJsZS1yZnM6IGZhbHNlO1xyXG5cclxuLy8gY29udGFpbmVyIHBhZGRpbmdcclxuJGNvbnRhaW5lci1wYWRkaW5nLXg6IDEuNXJlbTtcclxuXHJcbi8vIzBkY2FmMCwgIzE3YTJiOFxyXG5cclxuLy8gQ29sb3JzXHJcbiRib2R5LWJnOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiRib2R5LWNvbG9yOiByZ2IoOTYsIDk2LCA5Nik7XHJcbiR5ZWxsb3c6IHJnYigyNTUsIDE2OCwgMjApO1xyXG4kb3JhbmdlOiByZ2IoMjM5LCAxMjQsIDApO1xyXG4kYmx1ZTogcmdiKDY1LCAxMTgsIDE0NSk7XHJcbiR0ZWFsOiByZ2IoMTksIDY5LCA5Nyk7XHJcbiRncmF5OiByZ2IoMTM4LCAxMzgsIDEzOCk7XHJcbiRncmF5LWRhcms6IHJnYig1MSwgNTEsIDUxKTtcclxuJGN5YW46ICMxN2EyYjg7XHJcblxyXG4kYmx1ZTogIzAwNTE4OTtcclxuJGJsdWUtaG92ZXI6ICMwMDQyNzI7XHJcbiRncmF5LWhvdmVyOiByZ2IoMTE2LCAxMTYsIDExNik7XHJcblxyXG4kcHJlc2VudC1jb2xvcjogIzI4YTc0NTtcclxuJGFic2VudC1jb2xvcjogI2RjMzU0NTtcclxuJHVuYXBwcm92ZWQtY29sb3I6ICR5ZWxsb3c7XHJcblxyXG4vLyBGb250XHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcblxyXG4vLyBSb290IEZvbnQgU2l6ZVxyXG4kcm9vdC1mb250LXNpemUtc2NhbGU6IDEuMDsgLy8gcmVsYXRpdmUgdG8gdGhlIHN0YW5kYXJkIDE2cHggZm9udCBzaXplIG9mIGEgYnJvd3NlclxyXG4kZm9udC1zaXplLWJhc2U6IG1hdGguZGl2KDEuMCwgJHJvb3QtZm9udC1zaXplLXNjYWxlKSAqIDFyZW07XHJcbiRyZW0tc2NhbGU6IG1hdGguZGl2KCRmb250LXNpemUtYmFzZSwgMXJlbSk7XHJcbi8vIEFkanVzdCBzcGFjaW5ncyBhbmQgcGFkZGluZ3MgdG8gY29tcGVuc2F0ZSBmb3IgYWRqdXN0ZWQgcm9vdC1mb250LXNjYWxlXHJcbiRzcGFjZXI6ICRmb250LXNpemUtYmFzZTtcclxuJHRhYmxlLWNlbGwtcGFkZGluZy15OiAgICAkcmVtLXNjYWxlICogMC43ICogLjVyZW07XHJcbiR0YWJsZS1jZWxsLXBhZGRpbmcteDogICAgJHJlbS1zY2FsZSAqIDAuNyAqIC41cmVtO1xyXG4kdGFibGUtY2VsbC1wYWRkaW5nLXktc206ICRyZW0tc2NhbGUgKiAwLjcgKiAuMjVyZW07XHJcbiR0YWJsZS1jZWxsLXBhZGRpbmcteC1zbTogJHJlbS1zY2FsZSAqIDAuNyAqIC4yNXJlbTtcclxuJHRhYmxlLWNlbGwtcGFkZGluZy15LW1kOiAkcmVtLXNjYWxlICogMC43ICogLjI1cmVtO1xyXG4kdGFibGUtY2VsbC1wYWRkaW5nLXgtbWQ6ICRyZW0tc2NhbGUgKiAwLjcgKiAuMjVyZW07XHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogJHJlbS1zY2FsZSAqIDAuNyAqIC4zNzVyZW07XHJcbiRpbnB1dC1idG4tcGFkZGluZy14OiAkcmVtLXNjYWxlICogMC43ICogLjc1cmVtO1xyXG5cclxuJGdyaWQtZ3V0dGVyLXdpZHRoOiAkcmVtLXNjYWxlICogMS41cmVtO1xyXG5cclxuLy8gQnV0dG9uc1xyXG4kaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4vLyBJY29uc1xyXG4kZXJ6LWljb24tc2l6ZTogKCRmb250LXNpemUtYmFzZSAqIDEuNDY2NjY2Nik7XHJcblxyXG5AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5cclxuOnJvb3Qge1xyXG4gICAgLS1zdGVsbHZlcnRyZXR1bmctcHJpbWFyeTogI3skYmx1ZX07XHJcbiAgICAtLXN0ZWxsdmVydHJldHVuZy1wcmltYXJ5LWhvdmVyOiAjeyRibHVlLWhvdmVyfTtcclxuICAgIC0tc3RlbGx2ZXJ0cmV0dW5nLXNlY29uZGFyeTogI3skZ3JheX07XHJcbiAgICAtLXN0ZWxsdmVydHJldHVuZy1zZWNvbmRhcnktaG92ZXI6ICN7JGdyYXktaG92ZXJ9O1xyXG59XHJcblxyXG4vLyBEcm9wZG93blxyXG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogJGdyYXktMjAwO1xyXG5cclxuLy8gVGFibGVzXHJcbiR0YWJsZS1oZWFkLWJnOiAkdGFibGUtYm9yZGVyLWNvbG9yO1xyXG4kdGFibGUtaGVhZC1jb2xvcjogJGdyYXktNjAwO1xyXG4kdGFibGUtZ3JvdXAtc2VwYXJhdG9yLWNvbG9yOiAkdGFibGUtYm9yZGVyLWNvbG9yO1xyXG4kdGFibGUtdGgtZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHJcbi8qKlxyXG4gKiBDdXN0b20gVmFyaWFibGVzXHJcbiAqL1xyXG5cclxuLy8gQ3VzdG9tIHZhcmlhYmxlc1xyXG4kZXJ6LWNvbnRhaW5lci1tYXgtd2lkdGg6IDk2MHB4O1xyXG4kZXJ6LWNvbnRhaW5lci1wYWRkaW5nLXg6ICRzcGFjZXI7XHJcbiRlcnotY29udGFpbmVyLXBhZGRpbmcteTogJHNwYWNlcjtcclxuJGVyei1wcmVzZW5jZS1jb250cm9sLWVudHJ5LW1pbi13aWR0aDogNDAwcHg7XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9ib290c3RyYXAtdmFyaWFibGVzXCI7XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAkcmVtLXNjYWxlICogLjc1cmVtO1xyXG59XHJcbi5mb3JtLWdyb3VwID4gbGFiZWwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogJHJlbS1zY2FsZSAqIC41cmVtO1xyXG59XHJcbi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59Il19 */"] });


/***/ }),

/***/ 6956:
/*!***********************************************************************************************!*\
  !*** ./src/app/substitutions/components/substitution-create/substitution-create.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubstitutionCreateComponent": () => (/* binding */ SubstitutionCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 9193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/teacher-substitution.service */ 8893);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 629);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _shared_components_typeahead_typeahead_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/typeahead/typeahead.component */ 6628);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_date_select_date_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/date-select/date-select.component */ 2859);













function SubstitutionCreateComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getFormControlErrors("Substitute"), " ");
} }
function SubstitutionCreateComponent_div_10_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r6.getFormControlErrors("Holder"), " ");
} }
function SubstitutionCreateComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "erz-typeahead", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function SubstitutionCreateComponent_div_10_Template_erz_typeahead_valueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.holderId.setValue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, SubstitutionCreateComponent_div_10_div_7_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 5, "substitution-create.field-holder-label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 7, "substitution-create.field-holder-placeholder"))("typeaheadService", ctx_r1.teacherSubstitutionService.typeaheadService)("error", ctx_r1.showErrors && ctx_r1.holderId.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.showErrors && ctx_r1.holderId.errors);
} }
function SubstitutionCreateComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.getFormControlErrors("DateFrom"), " ");
} }
function SubstitutionCreateComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.getFormControlErrors("DateTo"), " ");
} }
function SubstitutionCreateComponent_div_34_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const errorMessage_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](errorMessage_r12);
} }
function SubstitutionCreateComponent_div_34_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SubstitutionCreateComponent_div_34_div_2_p_1_Template, 2, 1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const errorMessages_r10 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", errorMessages_r10);
} }
function SubstitutionCreateComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SubstitutionCreateComponent_div_34_div_2_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, ctx_r4.errorMessage$));
} }
function SubstitutionCreateComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 24);
} }
class SubstitutionCreateComponent {
    constructor(teacherSubstitutionService, authService, translateService, changeDetector, toastr) {
        this.teacherSubstitutionService = teacherSubstitutionService;
        this.authService = authService;
        this.translateService = translateService;
        this.changeDetector = changeDetector;
        this.toastr = toastr;
        this.cancelled = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.dateFrom = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
        this.dateTo = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
        this.remarks = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl();
        this.holderId = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
        this.substituteId = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
        this.serverErrorMessage$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(null);
        this.showErrors = false;
        this.savingActive$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(false);
        this.minStartDate = new Date(Date.now());
        this.saved.subscribe(() => toastr.success(translateService.instant("substitution-create.save-success-message")));
    }
    submit() {
        if (!this.form.valid) {
            this.showErrors = true;
            return;
        }
        this.savingActive$.next(true);
        this.teacherSubstitutionService.create(this.holderId.value, this.substituteId.value, this.dateFrom.value, this.dateTo.value, this.remarks.value).subscribe(v => {
            this.savingActive$.next(false);
            this.saved.emit();
        }, err => {
            this.savingActive$.next(false);
            this.showErrors = true;
            this.serverErrorMessage$.next(err.Issues.map((v) => v.Message));
        });
    }
    cancel() {
        this.cancelled.emit();
    }
    ngOnInit() {
        //this.holderId.setValue(this.authService.personId);
        this.holderId.setValue(this.holderIdInput);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            'DateFrom': this.dateFrom,
            'DateTo': this.dateTo,
            'Substitute': this.substituteId,
            'Holder': this.holderId,
            'Remarks': this.remarks
        });
        this.clientErrorMessage$ = this.form.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(null), 
        //map(v => this.getAllFormControlErrors()),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(v => []));
        this.errorMessage$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.serverErrorMessage$, this.clientErrorMessage$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(v => { var _a, _b; return ((_a = v[0]) !== null && _a !== void 0 ? _a : []).concat((_b = v[1]) !== null && _b !== void 0 ? _b : []); }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(v => v.length == 0 ? null : v));
    }
    getAllFormControlErrors() {
        return Object.entries(this.form.controls).flatMap(([fieldName, control]) => {
            var _a;
            return Object.entries((_a = control.errors) !== null && _a !== void 0 ? _a : {}).filter(([key, value]) => value).map(([key, value]) => key).map((error) => `${this.translate(["substitution-model", fieldName])}: ${this.translate(['global', 'validation-errors', error])}`);
        });
    }
    getFormControlErrors(fieldName) {
        var _a;
        let control = this.form.get(fieldName);
        if (control == null)
            return [];
        return Object.entries((_a = control.errors) !== null && _a !== void 0 ? _a : {}).filter(([key, value]) => value).map(([key, value]) => key).map((error) => `${this.translate(['global', 'validation-errors', error])}`);
    }
    translate(path) {
        return this.translateService.instant(path.join('.'));
    }
    ngOnChanges(changes) {
        if (changes['substitution'] && this.substitution != null) {
            this.dateFrom.setValue(this.substitution.DateFrom);
            this.dateTo.setValue(this.substitution.DateTo);
            this.holderId.setValue(this.substitution.HolderId);
            this.substituteId.setValue(this.substitution.SubstituteId);
        }
    }
}
SubstitutionCreateComponent.ɵfac = function SubstitutionCreateComponent_Factory(t) { return new (t || SubstitutionCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__.TeacherSubstitutionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService)); };
SubstitutionCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SubstitutionCreateComponent, selectors: [["erz-substitution-create"]], inputs: { holderIdInput: ["holderId", "holderIdInput"], substitution: "substitution" }, outputs: { cancelled: "cancel", saved: "save" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 46, vars: 49, consts: [[3, "ngSubmit"], [1, "bootstrap", "container-fluid"], [1, "bootstrap", "row"], [1, "bootstrap", "form-group", "col"], [3, "placeholder", "typeaheadService", "error", "valueChange"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "bootstrap row", 4, "ngIf"], [1, "bootstrap", "form-group", "col-md-6"], [3, "placeholder", "value", "error", "minDate", "valueChange"], [3, "placeholder", "value", "error", "valueChange"], [1, "bootstrap", "col", "mt-2"], [1, "d-flex", "flex-row"], [1, "me-2"], [1, "material-icons"], ["maxlength", "512", 1, "form-control", 3, "placeholder", "value", "input"], [1, "bootstrap", "col", "mt-3"], ["type", "button", 1, "btn", "btn-secondary", "ms-auto", "text-light", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "ms-1", "d-flex", "align-items-center"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", "aria-hidden", "true", 4, "ngIf"], [1, "invalid-feedback"], [1, "bootstrap", "col", "mt-1"], ["class", "alert alert-danger mt-2", 4, "ngIf"], [1, "alert", "alert-danger", "mt-2"], [4, "ngFor", "ngForOf"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function SubstitutionCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function SubstitutionCreateComponent_Template_form_ngSubmit_0_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "erz-typeahead", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function SubstitutionCreateComponent_Template_erz_typeahead_valueChange_7_listener($event) { return ctx.substituteId.setValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, SubstitutionCreateComponent_div_9_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, SubstitutionCreateComponent_div_10_Template, 8, 9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 2)(12, "div", 7)(13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "erz-date-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function SubstitutionCreateComponent_Template_erz_date_select_valueChange_16_listener($event) { return ctx.dateFrom.setValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, SubstitutionCreateComponent_div_18_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 7)(20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "erz-date-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function SubstitutionCreateComponent_Template_erz_date_select_valueChange_23_listener($event) { return ctx.dateTo.setValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, SubstitutionCreateComponent_div_25_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 2)(27, "div", 10)(28, "div", 11)(29, "div", 12)(30, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function SubstitutionCreateComponent_Template_textarea_input_32_listener($event) { return ctx.remarks.setValue($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, SubstitutionCreateComponent_div_34_Template, 4, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 2)(36, "div", 15)(37, "div", 11)(38, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SubstitutionCreateComponent_Template_button_click_38_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, SubstitutionCreateComponent_span_42_Template, 1, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](43, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 29, "substitution-create.field-substitute-label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 31, "substitution-create.field-substitute-placeholder"))("typeaheadService", ctx.teacherSubstitutionService.typeaheadService)("error", ctx.showErrors && ctx.substituteId.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showErrors && ctx.substituteId.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.holderIdInput == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("has-errors", ctx.showErrors && ctx.dateFrom.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 33, "substitution-create.field-date-from-label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 35, "substitution-create.field-date-from-placeholder"))("value", ctx.dateFrom.value)("error", ctx.showErrors && ctx.dateFrom.errors)("minDate", ctx.minStartDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showErrors && ctx.dateFrom.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("has-errors", ctx.showErrors && ctx.dateFrom.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](22, 37, "substitution-create.field-date-to-label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 39, "substitution-create.field-date-to-placeholder"))("value", ctx.dateTo.value)("error", ctx.showErrors && ctx.dateTo.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showErrors && ctx.dateTo.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("has-errors", ctx.showErrors && ctx.remarks.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](33, 41, "substitution-create.field-remarks-placeholder"))("value", ctx.remarks.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](40, 43, "substitution-create.cancel-button-label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](43, 45, ctx.savingActive$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](45, 47, "substitution-create.save-button-label"), " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _shared_components_typeahead_typeahead_component__WEBPACK_IMPORTED_MODULE_2__.TypeaheadComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_components_date_select_date_select_component__WEBPACK_IMPORTED_MODULE_3__.DateSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe], styles: ["[_ngcontent-%COMP%]:root {\n  --stellvertretung-primary: #005189;\n  --stellvertretung-primary-hover: #004272;\n  --stellvertretung-secondary: #8a8a8a;\n  --stellvertretung-secondary-hover: #747474;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.form-group[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib290c3RyYXAtdmFyaWFibGVzLnNjc3MiLCJzdWJzdGl0dXRpb24tY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOztFQUFBO0FBNERBO0VBQ0ksa0NBQUE7RUFDQSx3Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7QUMzREo7QUR1RUE7O0VBQUE7QUM3RUE7RUFDSSxzQkFBQTtBQVlKO0FBVkE7RUFDSSxxQkFBQTtBQWFKO0FBWEE7RUFDSSxjQUFBO0FBY0oiLCJmaWxlIjoic3Vic3RpdHV0aW9uLWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgXCJzYXNzOm1hdGhcIjtcclxuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnNcIjtcclxuXHJcbi8qKlxyXG4gKiBCb290c3RyYXAgdmFyaWFibGVzIG92ZXJyaWRlc1xyXG4gKi9cclxuXHJcbi8vIGRpc2FibGUgcmVzcG9uc2l6ZSBmb250IHNpemVzXHJcbiRlbmFibGUtcmZzOiBmYWxzZTtcclxuXHJcbi8vIGNvbnRhaW5lciBwYWRkaW5nXHJcbiRjb250YWluZXItcGFkZGluZy14OiAxLjVyZW07XHJcblxyXG4vLyMwZGNhZjAsICMxN2EyYjhcclxuXHJcbi8vIENvbG9yc1xyXG4kYm9keS1iZzogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4kYm9keS1jb2xvcjogcmdiKDk2LCA5NiwgOTYpO1xyXG4keWVsbG93OiByZ2IoMjU1LCAxNjgsIDIwKTtcclxuJG9yYW5nZTogcmdiKDIzOSwgMTI0LCAwKTtcclxuJGJsdWU6IHJnYig2NSwgMTE4LCAxNDUpO1xyXG4kdGVhbDogcmdiKDE5LCA2OSwgOTcpO1xyXG4kZ3JheTogcmdiKDEzOCwgMTM4LCAxMzgpO1xyXG4kZ3JheS1kYXJrOiByZ2IoNTEsIDUxLCA1MSk7XHJcbiRjeWFuOiAjMTdhMmI4O1xyXG5cclxuJGJsdWU6ICMwMDUxODk7XHJcbiRibHVlLWhvdmVyOiAjMDA0MjcyO1xyXG4kZ3JheS1ob3ZlcjogcmdiKDExNiwgMTE2LCAxMTYpO1xyXG5cclxuJHByZXNlbnQtY29sb3I6ICMyOGE3NDU7XHJcbiRhYnNlbnQtY29sb3I6ICNkYzM1NDU7XHJcbiR1bmFwcHJvdmVkLWNvbG9yOiAkeWVsbG93O1xyXG5cclxuLy8gRm9udFxyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gUm9vdCBGb250IFNpemVcclxuJHJvb3QtZm9udC1zaXplLXNjYWxlOiAxLjA7IC8vIHJlbGF0aXZlIHRvIHRoZSBzdGFuZGFyZCAxNnB4IGZvbnQgc2l6ZSBvZiBhIGJyb3dzZXJcclxuJGZvbnQtc2l6ZS1iYXNlOiBtYXRoLmRpdigxLjAsICRyb290LWZvbnQtc2l6ZS1zY2FsZSkgKiAxcmVtO1xyXG4kcmVtLXNjYWxlOiBtYXRoLmRpdigkZm9udC1zaXplLWJhc2UsIDFyZW0pO1xyXG4vLyBBZGp1c3Qgc3BhY2luZ3MgYW5kIHBhZGRpbmdzIHRvIGNvbXBlbnNhdGUgZm9yIGFkanVzdGVkIHJvb3QtZm9udC1zY2FsZVxyXG4kc3BhY2VyOiAkZm9udC1zaXplLWJhc2U7XHJcbiR0YWJsZS1jZWxsLXBhZGRpbmcteTogICAgJHJlbS1zY2FsZSAqIDAuNyAqIC41cmVtO1xyXG4kdGFibGUtY2VsbC1wYWRkaW5nLXg6ICAgICRyZW0tc2NhbGUgKiAwLjcgKiAuNXJlbTtcclxuJHRhYmxlLWNlbGwtcGFkZGluZy15LXNtOiAkcmVtLXNjYWxlICogMC43ICogLjI1cmVtO1xyXG4kdGFibGUtY2VsbC1wYWRkaW5nLXgtc206ICRyZW0tc2NhbGUgKiAwLjcgKiAuMjVyZW07XHJcbiR0YWJsZS1jZWxsLXBhZGRpbmcteS1tZDogJHJlbS1zY2FsZSAqIDAuNyAqIC4yNXJlbTtcclxuJHRhYmxlLWNlbGwtcGFkZGluZy14LW1kOiAkcmVtLXNjYWxlICogMC43ICogLjI1cmVtO1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6ICRyZW0tc2NhbGUgKiAwLjcgKiAuMzc1cmVtO1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteDogJHJlbS1zY2FsZSAqIDAuNyAqIC43NXJlbTtcclxuXHJcbiRncmlkLWd1dHRlci13aWR0aDogJHJlbS1zY2FsZSAqIDEuNXJlbTtcclxuXHJcbi8vIEJ1dHRvbnNcclxuJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuLy8gSWNvbnNcclxuJGVyei1pY29uLXNpemU6ICgkZm9udC1zaXplLWJhc2UgKiAxLjQ2NjY2NjYpO1xyXG5cclxuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbjpyb290IHtcclxuICAgIC0tc3RlbGx2ZXJ0cmV0dW5nLXByaW1hcnk6ICN7JGJsdWV9O1xyXG4gICAgLS1zdGVsbHZlcnRyZXR1bmctcHJpbWFyeS1ob3ZlcjogI3skYmx1ZS1ob3Zlcn07XHJcbiAgICAtLXN0ZWxsdmVydHJldHVuZy1zZWNvbmRhcnk6ICN7JGdyYXl9O1xyXG4gICAgLS1zdGVsbHZlcnRyZXR1bmctc2Vjb25kYXJ5LWhvdmVyOiAjeyRncmF5LWhvdmVyfTtcclxufVxyXG5cclxuLy8gRHJvcGRvd25cclxuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICRncmF5LTIwMDtcclxuXHJcbi8vIFRhYmxlc1xyXG4kdGFibGUtaGVhZC1iZzogJHRhYmxlLWJvcmRlci1jb2xvcjtcclxuJHRhYmxlLWhlYWQtY29sb3I6ICRncmF5LTYwMDtcclxuJHRhYmxlLWdyb3VwLXNlcGFyYXRvci1jb2xvcjogJHRhYmxlLWJvcmRlci1jb2xvcjtcclxuJHRhYmxlLXRoLWZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblxyXG4vKipcclxuICogQ3VzdG9tIFZhcmlhYmxlc1xyXG4gKi9cclxuXHJcbi8vIEN1c3RvbSB2YXJpYWJsZXNcclxuJGVyei1jb250YWluZXItbWF4LXdpZHRoOiA5NjBweDtcclxuJGVyei1jb250YWluZXItcGFkZGluZy14OiAkc3BhY2VyO1xyXG4kZXJ6LWNvbnRhaW5lci1wYWRkaW5nLXk6ICRzcGFjZXI7XHJcbiRlcnotcHJlc2VuY2UtY29udHJvbC1lbnRyeS1taW4td2lkdGg6IDQwMHB4O1xyXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYm9vdHN0cmFwLXZhcmlhYmxlc1wiO1xyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogJHJlbS1zY2FsZSAqIC43NXJlbTtcclxufVxyXG4uZm9ybS1ncm91cCA+IGxhYmVsIHtcclxuICAgIG1hcmdpbi1ib3R0b206ICRyZW0tc2NhbGUgKiAuNXJlbTtcclxufVxyXG4uaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */"] });


/***/ }),

/***/ 3603:
/*!*******************************************************************************************!*\
  !*** ./src/app/substitutions/components/substitution-edit/substitution-edit.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubstitutionEditComponent": () => (/* binding */ SubstitutionEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/teacher-substitution.service */ 8893);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_date_select_date_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/date-select/date-select.component */ 2859);












function SubstitutionEditComponent_ng_template_0_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 28);
} }
function SubstitutionEditComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 25)(4, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SubstitutionEditComponent_ng_template_0_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const modal_r7 = restoredCtx.$implicit; return modal_r7.dismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SubstitutionEditComponent_ng_template_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SubstitutionEditComponent_ng_template_0_span_8_Template, 1, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, "substitution-edit.confirm-delete-message"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 6, "substitution-edit.confirm-delete-cancel-button-label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 8, ctx_r1.deletingActive$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 10, "substitution-edit.confirm-delete-confirm-button-label"), " ");
} }
function SubstitutionEditComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "h5", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r2.substitution == null ? null : ctx_r2.substitution.Substitute) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "Title", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 3, "substitution-edit.title-holder-prefix"), " ", (tmp_1_0 = ctx_r2.substitution == null ? null : ctx_r2.substitution.Holder) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "Holder", "");
} }
function SubstitutionEditComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "h5", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((tmp_0_0 = ctx_r3.substitution == null ? null : ctx_r3.substitution.Substitute) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "Title");
} }
function SubstitutionEditComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.getFormControlErrors("DateFrom"), " ");
} }
function SubstitutionEditComponent_div_39_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const errorMessage_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](errorMessage_r14);
} }
function SubstitutionEditComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SubstitutionEditComponent_div_39_p_1_Template, 2, 1, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const errorMessages_r12 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", errorMessages_r12);
} }
function SubstitutionEditComponent_span_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 28);
} }
class SubstitutionEditComponent {
    constructor(teacherSubstitutionService, translateService, modalService, changeDetector, toastr) {
        this.teacherSubstitutionService = teacherSubstitutionService;
        this.translateService = translateService;
        this.modalService = modalService;
        this.changeDetector = changeDetector;
        this.toastr = toastr;
        this.showHolder = false;
        this.cancelled = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.deleted = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.id = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl();
        this.dateFrom = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
        this.dateTo = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
        this.remarks = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl();
        this.errorMessage$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable();
        this.serverErrorMessage$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
        this.showErrors = false;
        this.savingActive$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
        this.deletingActive$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
        this.minStartDate = new Date(Date.now());
        this.saved.subscribe(() => toastr.success(translateService.instant("substitution-edit.save-success-message")));
        this.deleted.subscribe(() => toastr.success(translateService.instant("substitution-edit.delete-success-message")));
    }
    submit() {
        if (!this.form.valid) {
            this.showErrors = true;
            return;
        }
        this.savingActive$.next(true);
        this.teacherSubstitutionService.edit(this.id.value, this.dateFrom.value, this.dateTo.value, this.remarks.value).subscribe(v => {
            this.savingActive$.next(false);
            this.saved.emit();
        }, err => {
            this.savingActive$.next(false);
            this.serverErrorMessage$.next(err.Issues.map((v) => v.Message));
        });
    }
    delete() {
        this.deletingActive$.next(true);
        this.teacherSubstitutionService.delete(this.id.value).subscribe(v => {
            this.deletingActive$.next(false);
            this.deleted.emit();
        }, err => {
            this.serverErrorMessage$.next(err.Issues.map((v) => v.Message));
        });
    }
    cancel() {
        this.cancelled.emit();
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            'DateFrom': this.dateFrom,
            'DateTo': this.dateTo,
            'Remarks': this.remarks
        });
        this.clientErrorMessage$ = this.form.statusChanges.pipe(
        //map(v => this.getAllFormControlErrors())
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(v => []));
        this.errorMessage$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this.serverErrorMessage$, this.clientErrorMessage$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(v => { var _a, _b; return ((_a = v[0]) !== null && _a !== void 0 ? _a : []).concat((_b = v[1]) !== null && _b !== void 0 ? _b : []); }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(v => v.length == 0 ? null : v));
    }
    getAllFormControlErrors() {
        return Object.entries(this.form.controls).flatMap(([fieldName, control]) => {
            var _a;
            return Object.entries((_a = control.errors) !== null && _a !== void 0 ? _a : {}).filter(([key, value]) => value).map(([key, value]) => key).map((error) => `${this.translate(["substitution-model", fieldName])}: ${this.translate(['global', 'validation-errors', error])}`);
        });
    }
    getFormControlErrors(fieldName) {
        var _a;
        let control = this.form.get(fieldName);
        if (control == null)
            return [];
        return Object.entries((_a = control.errors) !== null && _a !== void 0 ? _a : {}).filter(([key, value]) => value).map(([key, value]) => key).map((error) => `${this.translate(['global', 'validation-errors', error])}`);
    }
    translate(path) {
        return this.translateService.instant(path.join('.'));
    }
    ngOnChanges(changes) {
        if (changes['substitution'] && this.substitution != null) {
            this.id.setValue(this.substitution.Id);
            this.dateFrom.setValue(this.substitution.DateFrom);
            this.dateTo.setValue(this.substitution.DateTo);
            this.remarks.setValue(this.substitution.Remarks);
        }
    }
    ngOnDestroy() {
        this.modalService.dismissAll();
    }
}
SubstitutionEditComponent.ɵfac = function SubstitutionEditComponent_Factory(t) { return new (t || SubstitutionEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__.TeacherSubstitutionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService)); };
SubstitutionEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SubstitutionEditComponent, selectors: [["erz-substitution-edit"]], inputs: { substitution: "substitution", showHolder: ["show-holder", "showHolder"] }, outputs: { cancelled: "cancel", saved: "save", deleted: "delete" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 52, vars: 47, consts: [["deleteModal", ""], [3, "ngSubmit"], [1, "bootstrap", "container-fluid"], [1, "bootstrap", "row"], [1, "bootstrap", "col"], [1, "d-flex", "flex-row"], [4, "ngIf"], [1, "ms-auto"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "material-icons"], [1, "bootstrap", "form-group", "col-md-6"], [3, "placeholder", "value", "error", "minDate", "valueChange"], ["class", "invalid-feedback", 4, "ngIf"], [3, "placeholder", "value", "error", "valueChange"], [1, "invalid-feedback"], [1, "bootstrap", "col", "mt-2"], [1, "me-2"], ["maxlength", "512", 1, "form-control", 3, "placeholder", "value", "input"], [1, "col", "mt-2"], ["class", "alert alert-danger mt-2", 4, "ngIf"], [1, "bootstrap", "col", "mt-1"], ["type", "button", 1, "btn", "btn-secondary", "ms-auto", "text-light", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "ms-1", "d-flex", "align-items-center"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", "aria-hidden", "true", 4, "ngIf"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", "btn-min-width", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-min-width", "d-flex", "align-items-center", 3, "click"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"], [1, "fw-bold"], [1, "sub-heading"], [1, "alert", "alert-danger", "mt-2"], [4, "ngFor", "ngForOf"]], template: function SubstitutionEditComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SubstitutionEditComponent_ng_template_0_Template, 12, 12, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SubstitutionEditComponent_Template_form_ngSubmit_2_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SubstitutionEditComponent_div_7_Template, 6, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SubstitutionEditComponent_div_8_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7)(10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SubstitutionEditComponent_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); return ctx.modalService.open(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 3)(14, "div", 10)(15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "erz-date-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function SubstitutionEditComponent_Template_erz_date_select_valueChange_18_listener($event) { return ctx.dateFrom.setValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, SubstitutionEditComponent_div_20_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 10)(22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "erz-date-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function SubstitutionEditComponent_Template_erz_date_select_valueChange_25_listener($event) { return ctx.dateTo.setValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 3)(30, "div", 15)(31, "div", 5)(32, "div", 16)(33, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function SubstitutionEditComponent_Template_textarea_input_35_listener($event) { return ctx.remarks.setValue($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 3)(38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, SubstitutionEditComponent_div_39_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](40, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 3)(42, "div", 20)(43, "div", 5)(44, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SubstitutionEditComponent_Template_button_click_44_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, SubstitutionEditComponent_span_48_Template, 1, 0, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](49, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showHolder);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.showHolder);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("has-errors", ctx.showErrors && ctx.dateFrom.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 29, "substitution-edit.field-date-from-label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.showErrors && ctx.dateFrom.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 31, "substitution-edit.field-date-from-placeholder"))("value", ctx.dateFrom.value)("error", ctx.showErrors && ctx.dateFrom.errors)("minDate", ctx.minStartDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showErrors && ctx.dateFrom.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("has-errors", ctx.showErrors && ctx.dateTo.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 33, "substitution-edit.field-date-to-label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.showErrors && ctx.dateTo.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 35, "substitution-edit.field-date-to-placeholder"))("value", ctx.dateTo.value)("error", ctx.showErrors && ctx.dateTo.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getFormControlErrors("DateTo"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("has-errors", ctx.showErrors && ctx.remarks.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](36, 37, "substitution-edit.field-remarks-placeholder"))("value", ctx.remarks.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](40, 39, ctx.errorMessage$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](46, 41, "substitution-edit.cancel-button-label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](49, 43, ctx.savingActive$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](51, 45, "substitution-edit.save-button-label"), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _shared_components_date_select_date_select_component__WEBPACK_IMPORTED_MODULE_1__.DateSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe], styles: ["[_ngcontent-%COMP%]:root {\n  --stellvertretung-primary: #005189;\n  --stellvertretung-primary-hover: #004272;\n  --stellvertretung-secondary: #8a8a8a;\n  --stellvertretung-secondary-hover: #747474;\n}\n\n.sub-heading[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n.error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .error[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border-color: red;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.form-group[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib290c3RyYXAtdmFyaWFibGVzLnNjc3MiLCJzdWJzdGl0dXRpb24tZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7RUFBQTtBQTREQTtFQUNJLGtDQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDBDQUFBO0FDM0RKO0FEdUVBOztFQUFBO0FDN0VBO0VBQ0ksbUJBQUE7QUFZSjtBQVRBOztFQUVJLGlCQUFBO0FBWUo7QUFUQTtFQUNJLHNCQUFBO0FBWUo7QUFWQTtFQUNJLHFCQUFBO0FBYUo7QUFYQTtFQUNJLGNBQUE7QUFjSiIsImZpbGUiOiJzdWJzdGl0dXRpb24tZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgXCJzYXNzOm1hdGhcIjtcclxuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnNcIjtcclxuXHJcbi8qKlxyXG4gKiBCb290c3RyYXAgdmFyaWFibGVzIG92ZXJyaWRlc1xyXG4gKi9cclxuXHJcbi8vIGRpc2FibGUgcmVzcG9uc2l6ZSBmb250IHNpemVzXHJcbiRlbmFibGUtcmZzOiBmYWxzZTtcclxuXHJcbi8vIGNvbnRhaW5lciBwYWRkaW5nXHJcbiRjb250YWluZXItcGFkZGluZy14OiAxLjVyZW07XHJcblxyXG4vLyMwZGNhZjAsICMxN2EyYjhcclxuXHJcbi8vIENvbG9yc1xyXG4kYm9keS1iZzogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4kYm9keS1jb2xvcjogcmdiKDk2LCA5NiwgOTYpO1xyXG4keWVsbG93OiByZ2IoMjU1LCAxNjgsIDIwKTtcclxuJG9yYW5nZTogcmdiKDIzOSwgMTI0LCAwKTtcclxuJGJsdWU6IHJnYig2NSwgMTE4LCAxNDUpO1xyXG4kdGVhbDogcmdiKDE5LCA2OSwgOTcpO1xyXG4kZ3JheTogcmdiKDEzOCwgMTM4LCAxMzgpO1xyXG4kZ3JheS1kYXJrOiByZ2IoNTEsIDUxLCA1MSk7XHJcbiRjeWFuOiAjMTdhMmI4O1xyXG5cclxuJGJsdWU6ICMwMDUxODk7XHJcbiRibHVlLWhvdmVyOiAjMDA0MjcyO1xyXG4kZ3JheS1ob3ZlcjogcmdiKDExNiwgMTE2LCAxMTYpO1xyXG5cclxuJHByZXNlbnQtY29sb3I6ICMyOGE3NDU7XHJcbiRhYnNlbnQtY29sb3I6ICNkYzM1NDU7XHJcbiR1bmFwcHJvdmVkLWNvbG9yOiAkeWVsbG93O1xyXG5cclxuLy8gRm9udFxyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gUm9vdCBGb250IFNpemVcclxuJHJvb3QtZm9udC1zaXplLXNjYWxlOiAxLjA7IC8vIHJlbGF0aXZlIHRvIHRoZSBzdGFuZGFyZCAxNnB4IGZvbnQgc2l6ZSBvZiBhIGJyb3dzZXJcclxuJGZvbnQtc2l6ZS1iYXNlOiBtYXRoLmRpdigxLjAsICRyb290LWZvbnQtc2l6ZS1zY2FsZSkgKiAxcmVtO1xyXG4kcmVtLXNjYWxlOiBtYXRoLmRpdigkZm9udC1zaXplLWJhc2UsIDFyZW0pO1xyXG4vLyBBZGp1c3Qgc3BhY2luZ3MgYW5kIHBhZGRpbmdzIHRvIGNvbXBlbnNhdGUgZm9yIGFkanVzdGVkIHJvb3QtZm9udC1zY2FsZVxyXG4kc3BhY2VyOiAkZm9udC1zaXplLWJhc2U7XHJcbiR0YWJsZS1jZWxsLXBhZGRpbmcteTogICAgJHJlbS1zY2FsZSAqIDAuNyAqIC41cmVtO1xyXG4kdGFibGUtY2VsbC1wYWRkaW5nLXg6ICAgICRyZW0tc2NhbGUgKiAwLjcgKiAuNXJlbTtcclxuJHRhYmxlLWNlbGwtcGFkZGluZy15LXNtOiAkcmVtLXNjYWxlICogMC43ICogLjI1cmVtO1xyXG4kdGFibGUtY2VsbC1wYWRkaW5nLXgtc206ICRyZW0tc2NhbGUgKiAwLjcgKiAuMjVyZW07XHJcbiR0YWJsZS1jZWxsLXBhZGRpbmcteS1tZDogJHJlbS1zY2FsZSAqIDAuNyAqIC4yNXJlbTtcclxuJHRhYmxlLWNlbGwtcGFkZGluZy14LW1kOiAkcmVtLXNjYWxlICogMC43ICogLjI1cmVtO1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6ICRyZW0tc2NhbGUgKiAwLjcgKiAuMzc1cmVtO1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteDogJHJlbS1zY2FsZSAqIDAuNyAqIC43NXJlbTtcclxuXHJcbiRncmlkLWd1dHRlci13aWR0aDogJHJlbS1zY2FsZSAqIDEuNXJlbTtcclxuXHJcbi8vIEJ1dHRvbnNcclxuJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuLy8gSWNvbnNcclxuJGVyei1pY29uLXNpemU6ICgkZm9udC1zaXplLWJhc2UgKiAxLjQ2NjY2NjYpO1xyXG5cclxuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbjpyb290IHtcclxuICAgIC0tc3RlbGx2ZXJ0cmV0dW5nLXByaW1hcnk6ICN7JGJsdWV9O1xyXG4gICAgLS1zdGVsbHZlcnRyZXR1bmctcHJpbWFyeS1ob3ZlcjogI3skYmx1ZS1ob3Zlcn07XHJcbiAgICAtLXN0ZWxsdmVydHJldHVuZy1zZWNvbmRhcnk6ICN7JGdyYXl9O1xyXG4gICAgLS1zdGVsbHZlcnRyZXR1bmctc2Vjb25kYXJ5LWhvdmVyOiAjeyRncmF5LWhvdmVyfTtcclxufVxyXG5cclxuLy8gRHJvcGRvd25cclxuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICRncmF5LTIwMDtcclxuXHJcbi8vIFRhYmxlc1xyXG4kdGFibGUtaGVhZC1iZzogJHRhYmxlLWJvcmRlci1jb2xvcjtcclxuJHRhYmxlLWhlYWQtY29sb3I6ICRncmF5LTYwMDtcclxuJHRhYmxlLWdyb3VwLXNlcGFyYXRvci1jb2xvcjogJHRhYmxlLWJvcmRlci1jb2xvcjtcclxuJHRhYmxlLXRoLWZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblxyXG4vKipcclxuICogQ3VzdG9tIFZhcmlhYmxlc1xyXG4gKi9cclxuXHJcbi8vIEN1c3RvbSB2YXJpYWJsZXNcclxuJGVyei1jb250YWluZXItbWF4LXdpZHRoOiA5NjBweDtcclxuJGVyei1jb250YWluZXItcGFkZGluZy14OiAkc3BhY2VyO1xyXG4kZXJ6LWNvbnRhaW5lci1wYWRkaW5nLXk6ICRzcGFjZXI7XHJcbiRlcnotcHJlc2VuY2UtY29udHJvbC1lbnRyeS1taW4td2lkdGg6IDQwMHB4O1xyXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYm9vdHN0cmFwLXZhcmlhYmxlc1wiO1xyXG5cclxuLnN1Yi1oZWFkaW5nIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5lcnJvciBpbnB1dCxcclxuLmVycm9yIHRleHRhcmVhIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNzVyZW07XHJcbn1cclxuLmZvcm0tZ3JvdXAgPiBsYWJlbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxufVxyXG4uaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */"] });


/***/ }),

/***/ 2655:
/*!*******************************************************************************************************!*\
  !*** ./src/app/substitutions/components/substitution-list-admin/substitution-list-admin.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubstitutionListAdminComponent": () => (/* binding */ SubstitutionListAdminComponent)
/* harmony export */ });
/* harmony import */ var _substitution_list_substitution_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../substitution-list/substitution-list.component */ 6711);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/spinner/spinner.component */ 2925);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-infinite-scroll */ 4503);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 3935);








function SubstitutionListAdminComponent_ng_template_0_span_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u2191");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SubstitutionListAdminComponent_ng_template_0_span_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u2193");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SubstitutionListAdminComponent_ng_template_0_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SubstitutionListAdminComponent_ng_template_0_span_2_span_1_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SubstitutionListAdminComponent_ng_template_0_span_2_span_2_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.sortDirection);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r10.sortDirection);
} }
function SubstitutionListAdminComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubstitutionListAdminComponent_ng_template_0_Template_span_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const column_r9 = restoredCtx.column; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.sortBy(column_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SubstitutionListAdminComponent_ng_template_0_span_2_Template, 3, 2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r9 = ctx.column;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", column_r9.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.sortColumn == column_r9.id);
} }
function SubstitutionListAdminComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "erz-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function SubstitutionListAdminComponent_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubstitutionListAdminComponent_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r15.filter = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function SubstitutionListAdminComponent_50_ng_template_0_Template(rf, ctx) { }
function SubstitutionListAdminComponent_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SubstitutionListAdminComponent_50_ng_template_0_Template, 0, 0, "ng-template");
} }
function SubstitutionListAdminComponent_53_ng_template_0_Template(rf, ctx) { }
function SubstitutionListAdminComponent_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SubstitutionListAdminComponent_53_ng_template_0_Template, 0, 0, "ng-template");
} }
function SubstitutionListAdminComponent_56_ng_template_0_Template(rf, ctx) { }
function SubstitutionListAdminComponent_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SubstitutionListAdminComponent_56_ng_template_0_Template, 0, 0, "ng-template");
} }
function SubstitutionListAdminComponent_59_ng_template_0_Template(rf, ctx) { }
function SubstitutionListAdminComponent_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SubstitutionListAdminComponent_59_ng_template_0_Template, 0, 0, "ng-template");
} }
function SubstitutionListAdminComponent_tr_63_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39)(1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const substitution_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](substitution_r21.Remarks);
} }
const _c0 = function (a1) { return ["edit", a1]; };
function SubstitutionListAdminComponent_tr_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 27)(4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "wbr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, SubstitutionListAdminComponent_tr_63_div_15_Template, 5, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "td", 38)(17, "a", 8)(18, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const substitution_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", substitution_r21.Substitute, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 7, "substitution-list-admin.substitution-holder-prefix"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", substitution_r21.Holder, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 9, substitution_r21.DateFrom), "\u2013");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 11, substitution_r21.DateTo), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", substitution_r21.Remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c0, substitution_r21.Id));
} }
const _c1 = function () { return ["create-ad-hoc"]; };
const _c2 = function () { return ["create"]; };
const _c3 = function (a1, a2, a3) { return { id: "Substitute", label: a1, sortColumn: a2, sortDirection: a3 }; };
const _c4 = function (a0) { return { column: a0 }; };
const _c5 = function (a1, a2, a3) { return { id: "Holder", label: a1, sortColumn: a2, sortDirection: a3 }; };
const _c6 = function (a1, a2, a3) { return { id: "DateFrom", label: a1, sortColumn: a2, sortDirection: a3 }; };
const _c7 = function (a1, a2, a3) { return { id: "Remarks", label: a1, sortColumn: a2, sortDirection: a3 }; };
class SubstitutionListAdminComponent extends _substitution_list_substitution_list_component__WEBPACK_IMPORTED_MODULE_0__.SubstitutionListComponent {
}
SubstitutionListAdminComponent.ɵfac = /*@__PURE__*/ function () { let ɵSubstitutionListAdminComponent_BaseFactory; return function SubstitutionListAdminComponent_Factory(t) { return (ɵSubstitutionListAdminComponent_BaseFactory || (ɵSubstitutionListAdminComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](SubstitutionListAdminComponent)))(t || SubstitutionListAdminComponent); }; }();
SubstitutionListAdminComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SubstitutionListAdminComponent, selectors: [["erz-substitution-list-admin"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 65, vars: 79, consts: [["tableHead", ""], ["class", "bootstrap container-fluid mt-2", 4, "ngIf"], [1, "bootstrap", "container-fluid", "mt-2"], [1, "bootstrap", "row", "row-bottom-divider"], [1, "bootstrap", "col", "d-flex", "flex-row", "pb-2"], [1, "w-100", "d-flex", "align-items-start"], [1, "w-auto", "ms-3"], [1, "btn", "btn-secondary", "text-nowrap", 3, "routerLink"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "material-icons"], [1, "bootstrap", "row"], [1, "bootstrap", "col", "d-flex", "flex-row", "mt-3", "mb-3"], [1, "w-100"], [1, "search-container"], [1, "input-group"], [1, "input-group-text"], ["type", "text", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], ["class", "btn btn-link text-decoration-none clear", "type", "button", 3, "click", 4, "ngIf"], [1, "w-auto", "ms-3", "d-block", "d-md-none"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-bs-toggle", "dropdown", 1, "btn", "btn-light"], [1, "dropdown-menu"], [1, "dropdown-item", "cursor-pointer", 3, "click"], [1, "bootstrap", "col"], [1, "table"], [1, "column-substitute", "ps-0"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "column-holder"], [1, "column-date-range"], [1, "column-remarks"], [1, "column-actions"], ["infiniteScroll", "", 3, "scrolled"], [4, "ngFor", "ngForOf"], [3, "click"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-link", "text-decoration-none", "clear", 3, "click"], [1, "d-md-none"], ["class", "d-flex flex-row d-md-block", 4, "ngIf"], [1, "column-actions", "text-end", "pe-0"], [1, "d-flex", "flex-row", "d-md-block"], [1, "material-icons", "d-md-none", "me-1"]], template: function SubstitutionListAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SubstitutionListAdminComponent_ng_template_0_Template, 3, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SubstitutionListAdminComponent_div_2_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6)(11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 6)(15, "a", 8)(16, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 10)(19, "div", 11)(20, "div", 12)(21, "div", 13)(22, "div", 14)(23, "span", 15)(24, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SubstitutionListAdminComponent_Template_input_ngModelChange_26_listener($event) { return ctx.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, SubstitutionListAdminComponent_button_28_Template, 3, 0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 18)(30, "div", 19)(31, "button", 20)(32, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "import_export");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 21)(35, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubstitutionListAdminComponent_Template_a_click_35_listener() { return ctx.sortBy("Substitute"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubstitutionListAdminComponent_Template_a_click_38_listener() { return ctx.sortBy("Holder"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubstitutionListAdminComponent_Template_a_click_41_listener() { return ctx.sortBy("DateFrom"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 10)(45, "div", 23)(46, "table", 24)(47, "thead")(48, "tr")(49, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, SubstitutionListAdminComponent_50_Template, 1, 0, null, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, SubstitutionListAdminComponent_53_Template, 1, 0, null, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, SubstitutionListAdminComponent_56_Template, 1, 0, null, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, SubstitutionListAdminComponent_59_Template, 1, 0, null, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "tbody", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scrolled", function SubstitutionListAdminComponent_Template_tbody_scrolled_62_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, SubstitutionListAdminComponent_tr_63_Template, 20, 15, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](64, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", ctx.isLoading ? "none" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 29, "substitution-list-admin.count-label"), "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 31, ctx.totalCount$), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](53, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 33, "substitution-list-admin.create-ad-hoc-button-label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](54, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 35, "substitution-list-admin.search-placeholder"))("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.sortColumn == "Substitute");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](37, 37, "substitution-list-admin.column-title-substitute"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.sortColumn == "Holder");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](40, 39, "substitution-list.column-title-holder"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.sortColumn == "DateFrom");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](43, 41, "substitution-list-admin.column-title-date-range"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](59, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](55, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](51, 43, "substitution-list-admin.column-title-substitute"), ctx.sortColumn, ctx.sortDirection)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](65, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](61, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](54, 45, "substitution-list.column-title-holder"), ctx.sortColumn, ctx.sortDirection)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](71, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](67, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](57, 47, "substitution-list-admin.column-title-date-range"), ctx.sortColumn, ctx.sortDirection)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](77, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](73, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](60, 49, "substitution-list-admin.column-title-remarks"), ctx.sortColumn, ctx.sortDirection)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](64, 51, ctx.substitutions$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_2__.InfiniteScrollDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe], styles: ["[_ngcontent-%COMP%]:root {\n  --stellvertretung-primary: #005189;\n  --stellvertretung-primary-hover: #004272;\n  --stellvertretung-secondary: #8a8a8a;\n  --stellvertretung-secondary-hover: #747474;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.table[_ngcontent-%COMP%]   th.column-substitute[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.table[_ngcontent-%COMP%]   th.column-holder[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.table[_ngcontent-%COMP%]   th.column-date-range[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.table[_ngcontent-%COMP%]   th.column-remarks[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.table[_ngcontent-%COMP%]   th.column-actions[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td.column-actions[_ngcontent-%COMP%] {\n  width: 1%;\n}\n.table[_ngcontent-%COMP%]   td.column-remarks[_ngcontent-%COMP%] {\n  white-space: pre-line;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.column-actions) {\n  padding-top: 0.66rem;\n  padding-bottom: 0.66rem;\n}\n\n@media (max-width: 768px) {\n  table.table[_ngcontent-%COMP%], table.table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%] {\n    display: contents;\n  }\n\n  table.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  table.table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: auto min-content;\n    grid-template-rows: auto;\n  }\n\n  .container-fluid[_ngcontent-%COMP%]   table.table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {\n    margin-left: calc(-1 * var(--bs-gutter-x, 1.5rem));\n    margin-right: calc(-1 * var(--bs-gutter-x, 1.5rem));\n    padding-left: var(--bs-gutter-x, 1.5rem);\n    padding-right: var(--bs-gutter-x, 1.5rem);\n  }\n\n  table.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    width: auto;\n  }\n\n  table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.column-actions) {\n    display: block;\n    grid-column: 1;\n    border: none;\n    padding: 0.065rem 0;\n  }\n\n  table.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    \n  }\n\n  table.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    padding: 12px 0;\n    border-bottom: 1px solid #dee2e6;\n  }\n\n  table.table[_ngcontent-%COMP%]   td.column-actions[_ngcontent-%COMP%] {\n    grid-column: 2;\n    grid-row-start: 1;\n    grid-row-end: 3;\n    white-space: nowrap;\n    display: flexbox;\n    flex-direction: row;\n  }\n\n  table.table[_ngcontent-%COMP%]   td.column-substitute[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n\n  .search-container[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n}\n.search-container[_ngcontent-%COMP%] {\n  max-width: 540px;\n}\n@media (max-width: 768px) {\n  .search-container[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n}\nbutton.clear[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  z-index: 3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib290c3RyYXAtdmFyaWFibGVzLnNjc3MiLCJzdWJzdGl0dXRpb24tbGlzdC1hZG1pbi5jb21wb25lbnQuc2NzcyIsIi4uXFxzdWJzdGl0dXRpb24tbGlzdFxcc3Vic3RpdHV0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7O0VBQUE7QUE0REE7RUFDSSxrQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtBQzNESjtBRHVFQTs7RUFBQTtBRTdFQTtFQUNJLGVBQUE7QURZSjtBQ1ZBO0VBQ0ksVUFBQTtBRGFKO0FDWEE7RUFDSSxVQUFBO0FEY0o7QUNaQTtFQUNJLFVBQUE7QURlSjtBQ2JBO0VBQ0ksVUFBQTtBRGdCSjtBQ2RBOztFQUVJLFNBQUE7QURpQko7QUNkQTtFQUNJLHFCQUFBO0FEaUJKO0FDZkE7RUFDSSxtQkFBQTtBRGtCSjtBQ2hCQTtFQUNJLG9CQUFBO0VBQ0EsdUJBQUE7QURtQko7QUNoQkEsdUNBQUE7QUFDQTtFQUNJOztJQUdJLGlCQUFBO0VEa0JOOztFQ2hCRTtJQUNJLGFBQUE7RURtQk47O0VDakJFO0lBQ0ksYUFBQTtJQUNBLHVDQUFBO0lBQ0Esd0JBQUE7RURvQk47O0VDakJFO0lBQ0ksa0RBQUE7SUFDQSxtREFBQTtJQUNBLHdDQUFBO0lBQ0EseUNBQUE7RURvQk47O0VDakJFO0lBQ0ksV0FBQTtFRG9CTjs7RUNsQkU7O0lBRUksY0FBQTtJQUNBLGNBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7RURxQk47O0VDbkJFO0lBQ0ksNkNBQUE7RURzQk47O0VDcEJFO0lBQ0ksZUFBQTtJQUNBLGdDQUFBO0VEdUJOOztFQ3JCRTtJQUNJLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUR3Qk47O0VDdEJFO0lBQ0ksaUJBQUE7RUR5Qk47O0VDdkJFO0lBQ0ksZUFBQTtFRDBCTjtBQUNGO0FBOUdBO0VBQ0ksZ0JBQUE7QUFnSEo7QUE3R0E7RUFDSTtJQUNJLGVBQUE7RUFnSE47QUFDRjtBQTdHQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUErR0oiLCJmaWxlIjoic3Vic3RpdHV0aW9uLWxpc3QtYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwic2FzczptYXRoXCI7XHJcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XHJcblxyXG4vKipcclxuICogQm9vdHN0cmFwIHZhcmlhYmxlcyBvdmVycmlkZXNcclxuICovXHJcblxyXG4vLyBkaXNhYmxlIHJlc3BvbnNpemUgZm9udCBzaXplc1xyXG4kZW5hYmxlLXJmczogZmFsc2U7XHJcblxyXG4vLyBjb250YWluZXIgcGFkZGluZ1xyXG4kY29udGFpbmVyLXBhZGRpbmcteDogMS41cmVtO1xyXG5cclxuLy8jMGRjYWYwLCAjMTdhMmI4XHJcblxyXG4vLyBDb2xvcnNcclxuJGJvZHktYmc6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuJGJvZHktY29sb3I6IHJnYig5NiwgOTYsIDk2KTtcclxuJHllbGxvdzogcmdiKDI1NSwgMTY4LCAyMCk7XHJcbiRvcmFuZ2U6IHJnYigyMzksIDEyNCwgMCk7XHJcbiRibHVlOiByZ2IoNjUsIDExOCwgMTQ1KTtcclxuJHRlYWw6IHJnYigxOSwgNjksIDk3KTtcclxuJGdyYXk6IHJnYigxMzgsIDEzOCwgMTM4KTtcclxuJGdyYXktZGFyazogcmdiKDUxLCA1MSwgNTEpO1xyXG4kY3lhbjogIzE3YTJiODtcclxuXHJcbiRibHVlOiAjMDA1MTg5O1xyXG4kYmx1ZS1ob3ZlcjogIzAwNDI3MjtcclxuJGdyYXktaG92ZXI6IHJnYigxMTYsIDExNiwgMTE2KTtcclxuXHJcbiRwcmVzZW50LWNvbG9yOiAjMjhhNzQ1O1xyXG4kYWJzZW50LWNvbG9yOiAjZGMzNTQ1O1xyXG4kdW5hcHByb3ZlZC1jb2xvcjogJHllbGxvdztcclxuXHJcbi8vIEZvbnRcclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuXHJcbi8vIFJvb3QgRm9udCBTaXplXHJcbiRyb290LWZvbnQtc2l6ZS1zY2FsZTogMS4wOyAvLyByZWxhdGl2ZSB0byB0aGUgc3RhbmRhcmQgMTZweCBmb250IHNpemUgb2YgYSBicm93c2VyXHJcbiRmb250LXNpemUtYmFzZTogbWF0aC5kaXYoMS4wLCAkcm9vdC1mb250LXNpemUtc2NhbGUpICogMXJlbTtcclxuJHJlbS1zY2FsZTogbWF0aC5kaXYoJGZvbnQtc2l6ZS1iYXNlLCAxcmVtKTtcclxuLy8gQWRqdXN0IHNwYWNpbmdzIGFuZCBwYWRkaW5ncyB0byBjb21wZW5zYXRlIGZvciBhZGp1c3RlZCByb290LWZvbnQtc2NhbGVcclxuJHNwYWNlcjogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kdGFibGUtY2VsbC1wYWRkaW5nLXk6ICAgICRyZW0tc2NhbGUgKiAwLjcgKiAuNXJlbTtcclxuJHRhYmxlLWNlbGwtcGFkZGluZy14OiAgICAkcmVtLXNjYWxlICogMC43ICogLjVyZW07XHJcbiR0YWJsZS1jZWxsLXBhZGRpbmcteS1zbTogJHJlbS1zY2FsZSAqIDAuNyAqIC4yNXJlbTtcclxuJHRhYmxlLWNlbGwtcGFkZGluZy14LXNtOiAkcmVtLXNjYWxlICogMC43ICogLjI1cmVtO1xyXG4kdGFibGUtY2VsbC1wYWRkaW5nLXktbWQ6ICRyZW0tc2NhbGUgKiAwLjcgKiAuMjVyZW07XHJcbiR0YWJsZS1jZWxsLXBhZGRpbmcteC1tZDogJHJlbS1zY2FsZSAqIDAuNyAqIC4yNXJlbTtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15OiAkcmVtLXNjYWxlICogMC43ICogLjM3NXJlbTtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXg6ICRyZW0tc2NhbGUgKiAwLjcgKiAuNzVyZW07XHJcblxyXG4kZ3JpZC1ndXR0ZXItd2lkdGg6ICRyZW0tc2NhbGUgKiAxLjVyZW07XHJcblxyXG4vLyBCdXR0b25zXHJcbiRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbi8vIEljb25zXHJcbiRlcnotaWNvbi1zaXplOiAoJGZvbnQtc2l6ZS1iYXNlICogMS40NjY2NjY2KTtcclxuXHJcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XHJcblxyXG46cm9vdCB7XHJcbiAgICAtLXN0ZWxsdmVydHJldHVuZy1wcmltYXJ5OiAjeyRibHVlfTtcclxuICAgIC0tc3RlbGx2ZXJ0cmV0dW5nLXByaW1hcnktaG92ZXI6ICN7JGJsdWUtaG92ZXJ9O1xyXG4gICAgLS1zdGVsbHZlcnRyZXR1bmctc2Vjb25kYXJ5OiAjeyRncmF5fTtcclxuICAgIC0tc3RlbGx2ZXJ0cmV0dW5nLXNlY29uZGFyeS1ob3ZlcjogI3skZ3JheS1ob3Zlcn07XHJcbn1cclxuXHJcbi8vIERyb3Bkb3duXHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAkZ3JheS0yMDA7XHJcblxyXG4vLyBUYWJsZXNcclxuJHRhYmxlLWhlYWQtYmc6ICR0YWJsZS1ib3JkZXItY29sb3I7XHJcbiR0YWJsZS1oZWFkLWNvbG9yOiAkZ3JheS02MDA7XHJcbiR0YWJsZS1ncm91cC1zZXBhcmF0b3ItY29sb3I6ICR0YWJsZS1ib3JkZXItY29sb3I7XHJcbiR0YWJsZS10aC1mb250LXdlaWdodDogbm9ybWFsO1xyXG5cclxuLyoqXHJcbiAqIEN1c3RvbSBWYXJpYWJsZXNcclxuICovXHJcblxyXG4vLyBDdXN0b20gdmFyaWFibGVzXHJcbiRlcnotY29udGFpbmVyLW1heC13aWR0aDogOTYwcHg7XHJcbiRlcnotY29udGFpbmVyLXBhZGRpbmcteDogJHNwYWNlcjtcclxuJGVyei1jb250YWluZXItcGFkZGluZy15OiAkc3BhY2VyO1xyXG4kZXJ6LXByZXNlbmNlLWNvbnRyb2wtZW50cnktbWluLXdpZHRoOiA0MDBweDtcclxuIiwiQGltcG9ydCBcIi4uL3N1YnN0aXR1dGlvbi1saXN0L3N1YnN0aXR1dGlvbi1saXN0LmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG4uc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDU0MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5zZWFyY2gtY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmJ1dHRvbi5jbGVhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDM7XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Jvb3RzdHJhcC12YXJpYWJsZXNcIjtcclxuXHJcbi50YWJsZSB0aCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnRhYmxlIHRoLmNvbHVtbi1zdWJzdGl0dXRlIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbn1cclxuLnRhYmxlIHRoLmNvbHVtbi1ob2xkZXIge1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG4udGFibGUgdGguY29sdW1uLWRhdGUtcmFuZ2Uge1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG4udGFibGUgdGguY29sdW1uLXJlbWFya3Mge1xyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG4udGFibGUgdGguY29sdW1uLWFjdGlvbnMsXHJcbi50YWJsZSB0ZC5jb2x1bW4tYWN0aW9ucyB7XHJcbiAgICB3aWR0aDogMSU7XHJcbn1cclxuXHJcbi50YWJsZSB0ZC5jb2x1bW4tcmVtYXJrcyB7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbn1cclxuLnRhYmxlIHRkIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuLnRhYmxlIHRkOm5vdCguY29sdW1uLWFjdGlvbnMpIHtcclxuICAgIHBhZGRpbmctdG9wOiAkcmVtLXNjYWxlICogMC42NnJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAkcmVtLXNjYWxlICogMC42NnJlbTtcclxufVxyXG5cclxuLypAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oc20pIHsqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHRhYmxlLnRhYmxlLFxyXG4gICAgdGFibGUudGFibGUgPiB0Ym9keVxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgfVxyXG4gICAgdGFibGUudGFibGUgPiB0aGVhZCAge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICB0YWJsZS50YWJsZSA+IHRib2R5ID4gdHIge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIG1pbi1jb250ZW50O1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVyLWZsdWlkIHRhYmxlLnRhYmxlID4gdGJvZHkgPiB0ciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICBjYWxjKC0xICogdmFyKC0tYnMtZ3V0dGVyLXgsIDEuNSAqICRzcGFjZXIpKTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoLTEgKiB2YXIoLS1icy1ndXR0ZXIteCwgMS41ICogJHNwYWNlcikpO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogIHZhcigtLWJzLWd1dHRlci14LCAxLjUgKiAkc3BhY2VyKTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1icy1ndXR0ZXIteCwgMS41ICogJHNwYWNlcik7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGUudGFibGUgdGgge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgdGFibGUudGFibGUgdGQsXHJcbiAgICB0YWJsZS50YWJsZSB0ZDpub3QoLmNvbHVtbi1hY3Rpb25zKSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6ICgwLjA2NXJlbSAqICRyZW0tc2NhbGUpIDA7XHJcbiAgICB9XHJcbiAgICB0YWJsZS50YWJsZSB0cjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgLypib3JkZXItdG9wOiAxcHggc29saWQgJHRhYmxlLWJvcmRlci1jb2xvcjsqL1xyXG4gICAgfVxyXG4gICAgdGFibGUudGFibGUgdHIge1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHRhYmxlLWJvcmRlci1jb2xvcjtcclxuICAgIH1cclxuICAgIHRhYmxlLnRhYmxlIHRkLmNvbHVtbi1hY3Rpb25zIHtcclxuICAgICAgICBncmlkLWNvbHVtbjogMjtcclxuICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgICAgICBncmlkLXJvdy1lbmQ6IDM7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4Ym94O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcbiAgICB0YWJsZS50YWJsZSB0ZC5jb2x1bW4tc3Vic3RpdHV0ZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBub25lO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 1066:
/*!***********************************************************************************************************!*\
  !*** ./src/app/substitutions/components/substitution-list-current/substitution-list-current.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubstitutionListCurrentComponent": () => (/* binding */ SubstitutionListCurrentComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/teacher-substitution.service */ 8893);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 629);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/spinner/spinner.component */ 2925);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 3935);








function SubstitutionListCurrentComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "execute-substitution-list.substitution-inactive-title-message"));
} }
function SubstitutionListCurrentComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "execute-substitution-list.substitution-active-title-message"));
} }
function SubstitutionListCurrentComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "erz-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SubstitutionListCurrentComponent_div_7_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "execute-substitution-list.empty-list-message"));
} }
function SubstitutionListCurrentComponent_div_7_table_3_tr_14_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20)(1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r9.substitution.Remarks);
} }
function SubstitutionListCurrentComponent_div_7_table_3_tr_14_a_15_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 25);
} }
function SubstitutionListCurrentComponent_div_7_table_3_tr_14_a_15_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubstitutionListCurrentComponent_div_7_table_3_tr_14_a_15_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r16.startSubstitution(item_r9.substitution.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SubstitutionListCurrentComponent_div_7_table_3_tr_14_a_15_span_2_Template, 1, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("invisible", !item_r9.isActive)("d-none", !item_r9.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 6, ctx_r11.workingId$) == item_r9.substitution.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 8, "execute-substitution-list.start-button-label"), " ");
} }
function SubstitutionListCurrentComponent_div_7_table_3_tr_14_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "execute-substitution-list.active-label"));
} }
function SubstitutionListCurrentComponent_div_7_table_3_tr_14_a_17_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 25);
} }
function SubstitutionListCurrentComponent_div_7_table_3_tr_14_a_17_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubstitutionListCurrentComponent_div_7_table_3_tr_14_a_17_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r21.stopSubstitution(item_r9.substitution.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SubstitutionListCurrentComponent_div_7_table_3_tr_14_a_17_span_2_Template, 1, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("invisible", !item_r9.isActive)("d-none", !item_r9.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 6, ctx_r13.workingId$) == item_r9.substitution.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 8, "execute-substitution-list.stop-button-label"), " ");
} }
function SubstitutionListCurrentComponent_div_7_table_3_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 10)(2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "wbr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, SubstitutionListCurrentComponent_div_7_table_3_tr_14_div_13_Template, 5, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, SubstitutionListCurrentComponent_div_7_table_3_tr_14_a_15_Template, 6, 10, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, SubstitutionListCurrentComponent_div_7_table_3_tr_14_span_16_Template, 3, 3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, SubstitutionListCurrentComponent_div_7_table_3_tr_14_a_17_Template, 6, 10, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 8, "execute-substitution-list.substitution-holder-prefix"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r9.substitution.Holder, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 10, item_r9.substitution.DateFrom), "\u2013");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 12, item_r9.substitution.DateTo), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r9.substitution.Remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.currentSubstitutionId != item_r9.substitution.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.currentSubstitutionId == item_r9.substitution.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.currentSubstitutionId == item_r9.substitution.Id);
} }
function SubstitutionListCurrentComponent_div_7_table_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 9)(1, "thead")(2, "tr")(3, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, SubstitutionListCurrentComponent_div_7_table_3_tr_14_Template, 18, 14, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const substitutions_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", ctx_r7.isLoading ? "none" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 6, "execute-substitution-list.column-title-holder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 8, "execute-substitution-list.column-title-date-range"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 10, "execute-substitution-list.column-title-remarks"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", substitutions_r4);
} }
function SubstitutionListCurrentComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SubstitutionListCurrentComponent_div_7_ng_template_1_Template, 3, 3, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SubstitutionListCurrentComponent_div_7_table_3_Template, 15, 12, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const substitutions_r4 = ctx.ngIf;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", substitutions_r4.length > 0)("ngIfElse", _r5);
} }
class SubstitutionListCurrentComponent {
    constructor(teacherSubstitutionService, changeDetector, authService) {
        this.teacherSubstitutionService = teacherSubstitutionService;
        this.changeDetector = changeDetector;
        this.authService = authService;
        this.isLoading = true;
        this.currentSubstitutionId = null;
        this.update$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(new Date());
        this.workingId$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(-1);
    }
    ngOnInit() {
        const compare = (a, b) => a == b ? 0 : (a !== null && a !== void 0 ? a : "") > (b !== null && b !== void 0 ? b : "") ? -1 : 1;
        const compareColumns = (a, b, selectors) => {
            for (let [selector, ascending] of selectors) {
                let sort = compare(selector(a), selector(b));
                if (ascending)
                    sort *= -1;
                if (sort != 0) {
                    return sort;
                }
            }
            return 0;
        };
        const createCompareColumnsFunc = (selectors) => (a, b) => compareColumns(a, b, selectors);
        //this.currentSubstitutionId = this.authService.substitutionId;
        this.substitutions$ = this.authService.substitutionId$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(v => this.currentSubstitutionId = v), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(v => this.teacherSubstitutionService.getCurrentList()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(v => Array.from(v).sort(createCompareColumnsFunc([[(w) => this.currentSubstitutionId == w.Id, false], [(w) => w.DateFrom, true]]))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(v => v.map(w => { return { substitution: w, isActive: w.DateFrom < new Date() }; })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(v => {
            //this.currentSubstitutionId = v[0].substitution.Id;
            //v[0].isActive = true;
            this.isLoading = false;
            this.changeDetector.markForCheck();
        }));
    }
    startSubstitution(substitutionId) {
        this.workingId$.next(substitutionId);
        this.teacherSubstitutionService.start(substitutionId).subscribe(v => {
            this.currentSubstitutionId = substitutionId;
            this.changeDetector.markForCheck();
            this.update$.next(new Date());
            this.workingId$.next(-1);
        });
    }
    stopSubstitution(substitutionId) {
        this.workingId$.next(substitutionId);
        this.teacherSubstitutionService.stop(substitutionId).subscribe(v => {
            this.currentSubstitutionId = null;
            this.changeDetector.markForCheck();
            this.update$.next(new Date());
            this.workingId$.next(-1);
        });
    }
}
SubstitutionListCurrentComponent.ɵfac = function SubstitutionListCurrentComponent_Factory(t) { return new (t || SubstitutionListCurrentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__.TeacherSubstitutionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
SubstitutionListCurrentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SubstitutionListCurrentComponent, selectors: [["erz-substitution-list-current"]], decls: 9, vars: 6, consts: [[1, "bootstrap", "container-fluid", "mt-2"], [1, "bootstrap", "row", "row-bottom-divider", "pb-2"], [1, "bootstrap", "col"], [4, "ngIf"], [1, "bootstrap", "row"], ["class", "bootstrap col", 4, "ngIf"], ["empty", ""], ["class", "table", 3, "display", 4, "ngIf", "ngIfElse"], [1, "pt-2"], [1, "table"], [1, "substitution-holder"], [1, "substitution-date-range"], [1, "substitution-remarks"], [1, "substitution-actions"], [4, "ngFor", "ngForOf"], [1, "d-md-none"], ["class", "d-flex flex-row d-md-block", 4, "ngIf"], [1, "substitution-actions", "text-md-end", "text-start"], ["class", "btn btn-primary d-md-inline-block", 3, "invisible", "d-none", "click", 4, "ngIf"], ["class", "active-label text-success me-3", 4, "ngIf"], [1, "d-flex", "flex-row", "d-md-block"], [1, "material-icons", "d-md-none", "me-1"], [1, "btn", "btn-primary", "d-md-inline-block", 3, "click"], [1, "d-flex", "align-items-center"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"], [1, "active-label", "text-success", "me-3"]], template: function SubstitutionListCurrentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SubstitutionListCurrentComponent_span_3_Template, 3, 3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SubstitutionListCurrentComponent_span_4_Template, 3, 3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SubstitutionListCurrentComponent_div_5_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SubstitutionListCurrentComponent_div_7_Template, 4, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentSubstitutionId == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentSubstitutionId != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 4, ctx.substitutions$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__.SpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: ["[_ngcontent-%COMP%]:root {\n  --stellvertretung-primary: #005189;\n  --stellvertretung-primary-hover: #004272;\n  --stellvertretung-secondary: #8a8a8a;\n  --stellvertretung-secondary-hover: #747474;\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.substitution-actions) {\n  padding-top: 0.66rem;\n  padding-bottom: 0.66rem;\n}\ntable[_ngcontent-%COMP%]   th.substitution-holder[_ngcontent-%COMP%] {\n  width: 25%;\n}\ntable[_ngcontent-%COMP%]   th.substitution-date-range[_ngcontent-%COMP%] {\n  width: 20%;\n}\ntable[_ngcontent-%COMP%]   th.substitution-remarks[_ngcontent-%COMP%] {\n  width: 30%;\n}\ntable[_ngcontent-%COMP%]   th.substitution-actions[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td.substitution-actions[_ngcontent-%COMP%] {\n  width: 1%;\n}\n\n@media (max-width: 768px) {\n  table.table[_ngcontent-%COMP%], table.table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%] {\n    display: contents;\n  }\n\n  table.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  table.table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {\n    width: auto;\n    display: grid;\n    grid-template-columns: auto min-content;\n    grid-template-rows: auto;\n    align-items: center;\n  }\n\n  table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.substitution-actions) {\n    display: block;\n    grid-column: 1;\n    border: none;\n    padding: 0.065rem 0;\n    grid-column-start: 1;\n    grid-column-end: 3;\n  }\n\n  table.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    \n  }\n\n  table.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    padding: 12px 0;\n    border-bottom: 1px solid #dee2e6;\n  }\n\n  table.table[_ngcontent-%COMP%]   td.substitution-actions[_ngcontent-%COMP%] {\n    display: contents;\n  }\n\n  table.table[_ngcontent-%COMP%]   td.substitution-actions[_ngcontent-%COMP%]    > .active-label[_ngcontent-%COMP%] {\n    grid-column: 1;\n  }\n\n  table.table[_ngcontent-%COMP%]   td.substitution-actions[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n    grid-column: 2;\n  }\n\n  table.table[_ngcontent-%COMP%]   td.substitution-holder[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n\n  .container-fluid[_ngcontent-%COMP%]   table.table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {\n    margin-left: calc(-1 * var(--bs-gutter-x, 1rem));\n    margin-right: calc(-1 * var(--bs-gutter-x, 1rem));\n    padding-left: var(--bs-gutter-x, 1rem);\n    padding-right: var(--bs-gutter-x, 1rem);\n  }\n}\ntable.table[_ngcontent-%COMP%] {\n  width: 100%;\n}\ntable.table[_ngcontent-%COMP%]   td.substitution-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 3px;\n}\ntable.table[_ngcontent-%COMP%]   td.substitution-actions[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\ntable.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 0;\n}\ntable.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding-right: 0;\n}\n.sidebar-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto min-content;\n  grid-template-rows: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib290c3RyYXAtdmFyaWFibGVzLnNjc3MiLCJzdWJzdGl0dXRpb24tbGlzdC1jdXJyZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOztFQUFBO0FBNERBO0VBQ0ksa0NBQUE7RUFDQSx3Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7QUMzREo7QUR1RUE7O0VBQUE7QUM3RUE7RUFDSSxtQkFBQTtBQVlKO0FBVkE7RUFDSSxvQkFBQTtFQUNBLHVCQUFBO0FBYUo7QUFWQTtFQUNJLFVBQUE7QUFhSjtBQVhBO0VBQ0ksVUFBQTtBQWNKO0FBWkE7RUFDSSxVQUFBO0FBZUo7QUFiQTs7RUFFSSxTQUFBO0FBZ0JKO0FBYkEsdUNBQUE7QUFDQTtFQUNJOztJQUdJLGlCQUFBO0VBZU47O0VBYkU7SUFDSSxhQUFBO0VBZ0JOOztFQWRFO0lBQ0ksV0FBQTtJQUNBLGFBQUE7SUFDQSx1Q0FBQTtJQUNBLHdCQUFBO0lBQ0EsbUJBQUE7RUFpQk47O0VBZkU7SUFDSSxjQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0lBQ0Esa0JBQUE7RUFrQk47O0VBaEJFO0lBQ0ksNkNBQUE7RUFtQk47O0VBakJFO0lBQ0ksZUFBQTtJQUNBLGdDQUFBO0VBb0JOOztFQWxCRTtJQUNJLGlCQUFBO0VBcUJOOztFQW5CRTtJQUNJLGNBQUE7RUFzQk47O0VBcEJFO0lBQ0ksY0FBQTtFQXVCTjs7RUFwQkU7SUFDSSxpQkFBQTtFQXVCTjs7RUFwQkU7SUFDSSxnREFBQTtJQUNBLGlEQUFBO0lBQ0Esc0NBQUE7SUFDQSx1Q0FBQTtFQXVCTjtBQUNGO0FBcEJBO0VBQ0ksV0FBQTtBQXNCSjtBQW5CQTtFQUNJLGdCQUFBO0FBc0JKO0FBcEJBO0VBQ0ksbUJBQUE7QUF1Qko7QUFwQkE7O0VBRUksZUFBQTtBQXVCSjtBQXJCQTs7RUFFSSxnQkFBQTtBQXdCSjtBQXJCQTtFQUNJLGFBQUE7RUFDQSx1Q0FBQTtFQUNBLHdCQUFBO0FBd0JKIiwiZmlsZSI6InN1YnN0aXR1dGlvbi1saXN0LWN1cnJlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwic2FzczptYXRoXCI7XHJcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XHJcblxyXG4vKipcclxuICogQm9vdHN0cmFwIHZhcmlhYmxlcyBvdmVycmlkZXNcclxuICovXHJcblxyXG4vLyBkaXNhYmxlIHJlc3BvbnNpemUgZm9udCBzaXplc1xyXG4kZW5hYmxlLXJmczogZmFsc2U7XHJcblxyXG4vLyBjb250YWluZXIgcGFkZGluZ1xyXG4kY29udGFpbmVyLXBhZGRpbmcteDogMS41cmVtO1xyXG5cclxuLy8jMGRjYWYwLCAjMTdhMmI4XHJcblxyXG4vLyBDb2xvcnNcclxuJGJvZHktYmc6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuJGJvZHktY29sb3I6IHJnYig5NiwgOTYsIDk2KTtcclxuJHllbGxvdzogcmdiKDI1NSwgMTY4LCAyMCk7XHJcbiRvcmFuZ2U6IHJnYigyMzksIDEyNCwgMCk7XHJcbiRibHVlOiByZ2IoNjUsIDExOCwgMTQ1KTtcclxuJHRlYWw6IHJnYigxOSwgNjksIDk3KTtcclxuJGdyYXk6IHJnYigxMzgsIDEzOCwgMTM4KTtcclxuJGdyYXktZGFyazogcmdiKDUxLCA1MSwgNTEpO1xyXG4kY3lhbjogIzE3YTJiODtcclxuXHJcbiRibHVlOiAjMDA1MTg5O1xyXG4kYmx1ZS1ob3ZlcjogIzAwNDI3MjtcclxuJGdyYXktaG92ZXI6IHJnYigxMTYsIDExNiwgMTE2KTtcclxuXHJcbiRwcmVzZW50LWNvbG9yOiAjMjhhNzQ1O1xyXG4kYWJzZW50LWNvbG9yOiAjZGMzNTQ1O1xyXG4kdW5hcHByb3ZlZC1jb2xvcjogJHllbGxvdztcclxuXHJcbi8vIEZvbnRcclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuXHJcbi8vIFJvb3QgRm9udCBTaXplXHJcbiRyb290LWZvbnQtc2l6ZS1zY2FsZTogMS4wOyAvLyByZWxhdGl2ZSB0byB0aGUgc3RhbmRhcmQgMTZweCBmb250IHNpemUgb2YgYSBicm93c2VyXHJcbiRmb250LXNpemUtYmFzZTogbWF0aC5kaXYoMS4wLCAkcm9vdC1mb250LXNpemUtc2NhbGUpICogMXJlbTtcclxuJHJlbS1zY2FsZTogbWF0aC5kaXYoJGZvbnQtc2l6ZS1iYXNlLCAxcmVtKTtcclxuLy8gQWRqdXN0IHNwYWNpbmdzIGFuZCBwYWRkaW5ncyB0byBjb21wZW5zYXRlIGZvciBhZGp1c3RlZCByb290LWZvbnQtc2NhbGVcclxuJHNwYWNlcjogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kdGFibGUtY2VsbC1wYWRkaW5nLXk6ICAgICRyZW0tc2NhbGUgKiAwLjcgKiAuNXJlbTtcclxuJHRhYmxlLWNlbGwtcGFkZGluZy14OiAgICAkcmVtLXNjYWxlICogMC43ICogLjVyZW07XHJcbiR0YWJsZS1jZWxsLXBhZGRpbmcteS1zbTogJHJlbS1zY2FsZSAqIDAuNyAqIC4yNXJlbTtcclxuJHRhYmxlLWNlbGwtcGFkZGluZy14LXNtOiAkcmVtLXNjYWxlICogMC43ICogLjI1cmVtO1xyXG4kdGFibGUtY2VsbC1wYWRkaW5nLXktbWQ6ICRyZW0tc2NhbGUgKiAwLjcgKiAuMjVyZW07XHJcbiR0YWJsZS1jZWxsLXBhZGRpbmcteC1tZDogJHJlbS1zY2FsZSAqIDAuNyAqIC4yNXJlbTtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15OiAkcmVtLXNjYWxlICogMC43ICogLjM3NXJlbTtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXg6ICRyZW0tc2NhbGUgKiAwLjcgKiAuNzVyZW07XHJcblxyXG4kZ3JpZC1ndXR0ZXItd2lkdGg6ICRyZW0tc2NhbGUgKiAxLjVyZW07XHJcblxyXG4vLyBCdXR0b25zXHJcbiRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbi8vIEljb25zXHJcbiRlcnotaWNvbi1zaXplOiAoJGZvbnQtc2l6ZS1iYXNlICogMS40NjY2NjY2KTtcclxuXHJcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XHJcblxyXG46cm9vdCB7XHJcbiAgICAtLXN0ZWxsdmVydHJldHVuZy1wcmltYXJ5OiAjeyRibHVlfTtcclxuICAgIC0tc3RlbGx2ZXJ0cmV0dW5nLXByaW1hcnktaG92ZXI6ICN7JGJsdWUtaG92ZXJ9O1xyXG4gICAgLS1zdGVsbHZlcnRyZXR1bmctc2Vjb25kYXJ5OiAjeyRncmF5fTtcclxuICAgIC0tc3RlbGx2ZXJ0cmV0dW5nLXNlY29uZGFyeS1ob3ZlcjogI3skZ3JheS1ob3Zlcn07XHJcbn1cclxuXHJcbi8vIERyb3Bkb3duXHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAkZ3JheS0yMDA7XHJcblxyXG4vLyBUYWJsZXNcclxuJHRhYmxlLWhlYWQtYmc6ICR0YWJsZS1ib3JkZXItY29sb3I7XHJcbiR0YWJsZS1oZWFkLWNvbG9yOiAkZ3JheS02MDA7XHJcbiR0YWJsZS1ncm91cC1zZXBhcmF0b3ItY29sb3I6ICR0YWJsZS1ib3JkZXItY29sb3I7XHJcbiR0YWJsZS10aC1mb250LXdlaWdodDogbm9ybWFsO1xyXG5cclxuLyoqXHJcbiAqIEN1c3RvbSBWYXJpYWJsZXNcclxuICovXHJcblxyXG4vLyBDdXN0b20gdmFyaWFibGVzXHJcbiRlcnotY29udGFpbmVyLW1heC13aWR0aDogOTYwcHg7XHJcbiRlcnotY29udGFpbmVyLXBhZGRpbmcteDogJHNwYWNlcjtcclxuJGVyei1jb250YWluZXItcGFkZGluZy15OiAkc3BhY2VyO1xyXG4kZXJ6LXByZXNlbmNlLWNvbnRyb2wtZW50cnktbWluLXdpZHRoOiA0MDBweDtcclxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Jvb3RzdHJhcC12YXJpYWJsZXNcIjtcclxuXHJcbnRhYmxlIHRkIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxudGFibGUgdGQ6bm90KC5zdWJzdGl0dXRpb24tYWN0aW9ucykge1xyXG4gICAgcGFkZGluZy10b3A6ICRyZW0tc2NhbGUgKiAwLjY2cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206ICRyZW0tc2NhbGUgKiAwLjY2cmVtO1xyXG59XHJcblxyXG50YWJsZSB0aC5zdWJzdGl0dXRpb24taG9sZGVyIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbn1cclxudGFibGUgdGguc3Vic3RpdHV0aW9uLWRhdGUtcmFuZ2Uge1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG50YWJsZSB0aC5zdWJzdGl0dXRpb24tcmVtYXJrcyB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG59XHJcbnRhYmxlIHRoLnN1YnN0aXR1dGlvbi1hY3Rpb25zLFxyXG50YWJsZSB0ZC5zdWJzdGl0dXRpb24tYWN0aW9ucyB7XHJcbiAgICB3aWR0aDogMSU7XHJcbn1cclxuXHJcbi8qQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHNtKSB7Ki9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICB0YWJsZS50YWJsZSxcclxuICAgIHRhYmxlLnRhYmxlID4gdGJvZHlcclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICAgIH1cclxuICAgIHRhYmxlLnRhYmxlID4gdGhlYWQgIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgdGFibGUudGFibGUgPiB0Ym9keSA+IHRyIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBtaW4tY29udGVudDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIHRhYmxlLnRhYmxlIHRkOm5vdCguc3Vic3RpdHV0aW9uLWFjdGlvbnMpIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBncmlkLWNvbHVtbjogMTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogKDAuMDY1cmVtICogJHJlbS1zY2FsZSkgMDtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbiAgICB9XHJcbiAgICB0YWJsZS50YWJsZSB0cjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgLypib3JkZXItdG9wOiAxcHggc29saWQgJHRhYmxlLWJvcmRlci1jb2xvcjsqL1xyXG4gICAgfVxyXG4gICAgdGFibGUudGFibGUgdHIge1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHRhYmxlLWJvcmRlci1jb2xvcjtcclxuICAgIH1cclxuICAgIHRhYmxlLnRhYmxlIHRkLnN1YnN0aXR1dGlvbi1hY3Rpb25zIHtcclxuICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICAgIH1cclxuICAgIHRhYmxlLnRhYmxlIHRkLnN1YnN0aXR1dGlvbi1hY3Rpb25zID4gLmFjdGl2ZS1sYWJlbCB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgICB9XHJcbiAgICB0YWJsZS50YWJsZSB0ZC5zdWJzdGl0dXRpb24tYWN0aW9ucyA+IC5idG4ge1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAyO1xyXG4gICAgfVxyXG5cclxuICAgIHRhYmxlLnRhYmxlIHRkLnN1YnN0aXR1dGlvbi1ob2xkZXIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXItZmx1aWQgdGFibGUudGFibGUgPiB0Ym9keSA+IHRyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogIGNhbGMoLTEgKiB2YXIoLS1icy1ndXR0ZXIteCwgJHNwYWNlcikpO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogY2FsYygtMSAqIHZhcigtLWJzLWd1dHRlci14LCAkc3BhY2VyKSk7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAgdmFyKC0tYnMtZ3V0dGVyLXgsICRzcGFjZXIpO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLWJzLWd1dHRlci14LCAkc3BhY2VyKTtcclxuICAgIH1cclxufVxyXG5cclxudGFibGUudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRhYmxlLnRhYmxlIHRkLnN1YnN0aXR1dGlvbi1hY3Rpb25zIGEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxufVxyXG50YWJsZS50YWJsZSB0ZC5zdWJzdGl0dXRpb24tYWN0aW9ucyB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG50YWJsZS50YWJsZSB0aDpmaXJzdC1jaGlsZCxcclxudGFibGUudGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcbnRhYmxlLnRhYmxlIHRoOmxhc3QtY2hpbGQsXHJcbnRhYmxlLnRhYmxlIHRkOmxhc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG5cclxuLnNpZGViYXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gbWluLWNvbnRlbnQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 6711:
/*!*******************************************************************************************!*\
  !*** ./src/app/substitutions/components/substitution-list/substitution-list.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubstitutionListComponent": () => (/* binding */ SubstitutionListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 4514);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/teacher-substitution.service */ 8893);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/spinner/spinner.component */ 2925);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-infinite-scroll */ 4503);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 3935);









function SubstitutionListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "erz-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SubstitutionListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.emptyMessage, " ");
} }
function SubstitutionListComponent_tr_19_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17)(1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const substitution_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](substitution_r3.Remarks);
} }
const _c0 = function (a1) { return ["edit", a1]; };
function SubstitutionListComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "wbr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, SubstitutionListComponent_tr_19_div_10_Template, 5, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td", 14)(12, "a", 15)(13, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const substitution_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", substitution_r3.Substitute, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 5, substitution_r3.DateFrom), "\u2013");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 7, substitution_r3.DateTo), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", substitution_r3.Remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, substitution_r3.Id));
} }
const INITIAL_PAGE_SIZE = 50;
class SubstitutionListComponent {
    constructor(teacherSubstitutionService, changeDetector) {
        this.teacherSubstitutionService = teacherSubstitutionService;
        this.changeDetector = changeDetector;
        this.emptyMessage = "";
        this.sortColumn$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
        this.sortDirection$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
        this.filter$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject("");
        this.showHolder = false;
        this.editLinkFunc = v => ['edit', v];
        //get substitutions():Option<ReadonlyArray<TeacherSubstitution>> { return this.substitutionsInput$.value; }
        //set substitutions(v:Option<ReadonlyArray<TeacherSubstitution>>) { this.substitutionsInput$.next(v); this.update$.next(new Date()); }
        //useSubstitutionsInput$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
        this.isLoading = true;
        this.isEmpty = false;
        this.update$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(new Date());
        this.listSize$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(INITIAL_PAGE_SIZE);
        this.totalCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(0);
    }
    get sortColumn() { var _a; return (_a = this.sortColumn$.value) !== null && _a !== void 0 ? _a : ""; }
    set sortColumn(v) {
        this.sortColumn$.next(v);
    }
    get sortDirection() { return this.sortDirection$.value; }
    set sortDirection(v) {
        this.sortDirection$.next(v);
    }
    get filter() { return this.filter$.value; }
    set filter(v) { this.filter$.next(v !== null && v !== void 0 ? v : ""); }
    ngOnInit() {
        this.substitutions$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([
            this.listSize$,
            this.update$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.delay)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(v => { var _a; return (_a = this.substitutionsInput$) !== null && _a !== void 0 ? _a : this.teacherSubstitutionService.getMyList(); }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.share)()),
            this.filter$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(() => this.listSize$.next(INITIAL_PAGE_SIZE)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(v => v.toLowerCase())),
            this.sortColumn$,
            this.sortDirection$
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(v => {
            let [listSize, items, filter, sortColumn, sortDirection] = v;
            const compare = (a, b) => a == b ? 0 : (a !== null && a !== void 0 ? a : "") > (b !== null && b !== void 0 ? b : "") ? -1 : 1;
            const compareColumns = (a, b, columns) => {
                for (let column of columns) {
                    let sort = compare(a[column], b[column]);
                    if (sort != 0) {
                        return sort;
                    }
                }
                return 0;
            };
            const createCompareColumnsFunc = (columns) => (a, b) => compareColumns(a, b, columns);
            if (sortColumn == null) {
                items = Array.from(items).sort(createCompareColumnsFunc(['DateFrom', 'Substitute'])).reverse();
            }
            else {
                let col = sortColumn;
                let itemArray = Array.from(items).sort(createCompareColumnsFunc([col, 'DateFrom', 'Substitute']));
                if (sortDirection) {
                    items = itemArray.reverse();
                }
                else {
                    items = itemArray;
                }
            }
            this.totalCount$.next(items.length);
            return {
                listSize,
                items,
                filter
            };
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(({ listSize, items, filter }) => [listSize, items.filter(w => filter == "" || w.Holder.toLowerCase().includes(filter) || w.Substitute.toLowerCase().includes(filter))]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(v => v[1].slice(0, v[0])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(v => {
            this.isLoading = false;
            this.isEmpty = v.length == 0;
            this.changeDetector.markForCheck();
        }));
    }
    sortBy(column) {
        if (this.sortColumn == column) {
            this.sortDirection = !this.sortDirection;
        }
        else {
            this.sortColumn = column;
            this.sortDirection = true;
        }
        this.changeDetector.markForCheck();
    }
    onScroll() {
        this.listSize$.next(this.listSize$.value + 10);
    }
    deleteSubstitution(substitutionId) {
        this.teacherSubstitutionService.delete(substitutionId).subscribe(v => {
            this.update$.next(new Date());
        });
    }
}
SubstitutionListComponent.ɵfac = function SubstitutionListComponent_Factory(t) { return new (t || SubstitutionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_teacher_substitution_service__WEBPACK_IMPORTED_MODULE_0__.TeacherSubstitutionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
SubstitutionListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SubstitutionListComponent, selectors: [["erz-substitution-list"]], inputs: { emptyMessage: ["empty-message", "emptyMessage"], sortColumn: ["sort-column", "sortColumn"], sortDirection: ["sort-direction", "sortDirection"], filter: "filter", showHolder: ["show-holder", "showHolder"], editLinkFunc: ["edit-link", "editLinkFunc"], substitutionsInput$: ["substitutions$", "substitutionsInput$"] }, decls: 21, vars: 18, consts: [[1, "bootstrap", "container-fluid", "mt-xs-0", "mt-md-2"], ["class", "mt-2", 4, "ngIf"], [1, "bootstrap", "row"], ["class", "bootstrap col", 4, "ngIf"], [1, "bootstrap", "col"], [1, "table"], [1, "column-substitute", "ps-0"], [1, "column-date-range"], [1, "column-remarks"], [1, "column-actions"], ["infiniteScroll", "", 3, "scrolled"], [4, "ngFor", "ngForOf"], [1, "mt-2"], ["class", "d-flex flex-row d-md-block", 4, "ngIf"], [1, "column-actions", "text-end", "pe-0"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "material-icons"], [1, "d-flex", "flex-row", "d-md-block"], [1, "material-icons", "d-md-none", "me-1"]], template: function SubstitutionListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SubstitutionListComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SubstitutionListComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "table", 5)(6, "thead")(7, "tr")(8, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "tbody", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scrolled", function SubstitutionListComponent_Template_tbody_scrolled_18_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, SubstitutionListComponent_tr_19_Template, 15, 11, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", ctx.isLoading ? "none" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isEmpty);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", ctx.isEmpty ? "none" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 10, "substitution-list.column-title-substitute"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 12, "substitution-list.column-title-date-range"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 14, "substitution-list.column-title-remarks"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 16, ctx.substitutions$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_2__.InfiniteScrollDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe], styles: ["[_ngcontent-%COMP%]:root {\n  --stellvertretung-primary: #005189;\n  --stellvertretung-primary-hover: #004272;\n  --stellvertretung-secondary: #8a8a8a;\n  --stellvertretung-secondary-hover: #747474;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.table[_ngcontent-%COMP%]   th.column-substitute[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.table[_ngcontent-%COMP%]   th.column-holder[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.table[_ngcontent-%COMP%]   th.column-date-range[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.table[_ngcontent-%COMP%]   th.column-remarks[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.table[_ngcontent-%COMP%]   th.column-actions[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td.column-actions[_ngcontent-%COMP%] {\n  width: 1%;\n}\n.table[_ngcontent-%COMP%]   td.column-remarks[_ngcontent-%COMP%] {\n  white-space: pre-line;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.column-actions) {\n  padding-top: 0.66rem;\n  padding-bottom: 0.66rem;\n}\n\n@media (max-width: 768px) {\n  table.table[_ngcontent-%COMP%], table.table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%] {\n    display: contents;\n  }\n\n  table.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  table.table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: auto min-content;\n    grid-template-rows: auto;\n  }\n\n  .container-fluid[_ngcontent-%COMP%]   table.table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {\n    margin-left: calc(-1 * var(--bs-gutter-x, 1.5rem));\n    margin-right: calc(-1 * var(--bs-gutter-x, 1.5rem));\n    padding-left: var(--bs-gutter-x, 1.5rem);\n    padding-right: var(--bs-gutter-x, 1.5rem);\n  }\n\n  table.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    width: auto;\n  }\n\n  table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.column-actions) {\n    display: block;\n    grid-column: 1;\n    border: none;\n    padding: 0.065rem 0;\n  }\n\n  table.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    \n  }\n\n  table.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    padding: 12px 0;\n    border-bottom: 1px solid #dee2e6;\n  }\n\n  table.table[_ngcontent-%COMP%]   td.column-actions[_ngcontent-%COMP%] {\n    grid-column: 2;\n    grid-row-start: 1;\n    grid-row-end: 3;\n    white-space: nowrap;\n    display: flexbox;\n    flex-direction: row;\n  }\n\n  table.table[_ngcontent-%COMP%]   td.column-substitute[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n\n  .search-container[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib290c3RyYXAtdmFyaWFibGVzLnNjc3MiLCJzdWJzdGl0dXRpb24tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7RUFBQTtBQTREQTtFQUNJLGtDQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDBDQUFBO0FDM0RKO0FEdUVBOztFQUFBO0FDN0VBO0VBQ0ksZUFBQTtBQVlKO0FBVkE7RUFDSSxVQUFBO0FBYUo7QUFYQTtFQUNJLFVBQUE7QUFjSjtBQVpBO0VBQ0ksVUFBQTtBQWVKO0FBYkE7RUFDSSxVQUFBO0FBZ0JKO0FBZEE7O0VBRUksU0FBQTtBQWlCSjtBQWRBO0VBQ0kscUJBQUE7QUFpQko7QUFmQTtFQUNJLG1CQUFBO0FBa0JKO0FBaEJBO0VBQ0ksb0JBQUE7RUFDQSx1QkFBQTtBQW1CSjtBQWhCQSx1Q0FBQTtBQUNBO0VBQ0k7O0lBR0ksaUJBQUE7RUFrQk47O0VBaEJFO0lBQ0ksYUFBQTtFQW1CTjs7RUFqQkU7SUFDSSxhQUFBO0lBQ0EsdUNBQUE7SUFDQSx3QkFBQTtFQW9CTjs7RUFqQkU7SUFDSSxrREFBQTtJQUNBLG1EQUFBO0lBQ0Esd0NBQUE7SUFDQSx5Q0FBQTtFQW9CTjs7RUFqQkU7SUFDSSxXQUFBO0VBb0JOOztFQWxCRTs7SUFFSSxjQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtFQXFCTjs7RUFuQkU7SUFDSSw2Q0FBQTtFQXNCTjs7RUFwQkU7SUFDSSxlQUFBO0lBQ0EsZ0NBQUE7RUF1Qk47O0VBckJFO0lBQ0ksY0FBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQXdCTjs7RUF0QkU7SUFDSSxpQkFBQTtFQXlCTjs7RUF2QkU7SUFDSSxlQUFBO0VBMEJOO0FBQ0YiLCJmaWxlIjoic3Vic3RpdHV0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwic2FzczptYXRoXCI7XHJcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XHJcblxyXG4vKipcclxuICogQm9vdHN0cmFwIHZhcmlhYmxlcyBvdmVycmlkZXNcclxuICovXHJcblxyXG4vLyBkaXNhYmxlIHJlc3BvbnNpemUgZm9udCBzaXplc1xyXG4kZW5hYmxlLXJmczogZmFsc2U7XHJcblxyXG4vLyBjb250YWluZXIgcGFkZGluZ1xyXG4kY29udGFpbmVyLXBhZGRpbmcteDogMS41cmVtO1xyXG5cclxuLy8jMGRjYWYwLCAjMTdhMmI4XHJcblxyXG4vLyBDb2xvcnNcclxuJGJvZHktYmc6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuJGJvZHktY29sb3I6IHJnYig5NiwgOTYsIDk2KTtcclxuJHllbGxvdzogcmdiKDI1NSwgMTY4LCAyMCk7XHJcbiRvcmFuZ2U6IHJnYigyMzksIDEyNCwgMCk7XHJcbiRibHVlOiByZ2IoNjUsIDExOCwgMTQ1KTtcclxuJHRlYWw6IHJnYigxOSwgNjksIDk3KTtcclxuJGdyYXk6IHJnYigxMzgsIDEzOCwgMTM4KTtcclxuJGdyYXktZGFyazogcmdiKDUxLCA1MSwgNTEpO1xyXG4kY3lhbjogIzE3YTJiODtcclxuXHJcbiRibHVlOiAjMDA1MTg5O1xyXG4kYmx1ZS1ob3ZlcjogIzAwNDI3MjtcclxuJGdyYXktaG92ZXI6IHJnYigxMTYsIDExNiwgMTE2KTtcclxuXHJcbiRwcmVzZW50LWNvbG9yOiAjMjhhNzQ1O1xyXG4kYWJzZW50LWNvbG9yOiAjZGMzNTQ1O1xyXG4kdW5hcHByb3ZlZC1jb2xvcjogJHllbGxvdztcclxuXHJcbi8vIEZvbnRcclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuXHJcbi8vIFJvb3QgRm9udCBTaXplXHJcbiRyb290LWZvbnQtc2l6ZS1zY2FsZTogMS4wOyAvLyByZWxhdGl2ZSB0byB0aGUgc3RhbmRhcmQgMTZweCBmb250IHNpemUgb2YgYSBicm93c2VyXHJcbiRmb250LXNpemUtYmFzZTogbWF0aC5kaXYoMS4wLCAkcm9vdC1mb250LXNpemUtc2NhbGUpICogMXJlbTtcclxuJHJlbS1zY2FsZTogbWF0aC5kaXYoJGZvbnQtc2l6ZS1iYXNlLCAxcmVtKTtcclxuLy8gQWRqdXN0IHNwYWNpbmdzIGFuZCBwYWRkaW5ncyB0byBjb21wZW5zYXRlIGZvciBhZGp1c3RlZCByb290LWZvbnQtc2NhbGVcclxuJHNwYWNlcjogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kdGFibGUtY2VsbC1wYWRkaW5nLXk6ICAgICRyZW0tc2NhbGUgKiAwLjcgKiAuNXJlbTtcclxuJHRhYmxlLWNlbGwtcGFkZGluZy14OiAgICAkcmVtLXNjYWxlICogMC43ICogLjVyZW07XHJcbiR0YWJsZS1jZWxsLXBhZGRpbmcteS1zbTogJHJlbS1zY2FsZSAqIDAuNyAqIC4yNXJlbTtcclxuJHRhYmxlLWNlbGwtcGFkZGluZy14LXNtOiAkcmVtLXNjYWxlICogMC43ICogLjI1cmVtO1xyXG4kdGFibGUtY2VsbC1wYWRkaW5nLXktbWQ6ICRyZW0tc2NhbGUgKiAwLjcgKiAuMjVyZW07XHJcbiR0YWJsZS1jZWxsLXBhZGRpbmcteC1tZDogJHJlbS1zY2FsZSAqIDAuNyAqIC4yNXJlbTtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15OiAkcmVtLXNjYWxlICogMC43ICogLjM3NXJlbTtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXg6ICRyZW0tc2NhbGUgKiAwLjcgKiAuNzVyZW07XHJcblxyXG4kZ3JpZC1ndXR0ZXItd2lkdGg6ICRyZW0tc2NhbGUgKiAxLjVyZW07XHJcblxyXG4vLyBCdXR0b25zXHJcbiRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbi8vIEljb25zXHJcbiRlcnotaWNvbi1zaXplOiAoJGZvbnQtc2l6ZS1iYXNlICogMS40NjY2NjY2KTtcclxuXHJcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XHJcblxyXG46cm9vdCB7XHJcbiAgICAtLXN0ZWxsdmVydHJldHVuZy1wcmltYXJ5OiAjeyRibHVlfTtcclxuICAgIC0tc3RlbGx2ZXJ0cmV0dW5nLXByaW1hcnktaG92ZXI6ICN7JGJsdWUtaG92ZXJ9O1xyXG4gICAgLS1zdGVsbHZlcnRyZXR1bmctc2Vjb25kYXJ5OiAjeyRncmF5fTtcclxuICAgIC0tc3RlbGx2ZXJ0cmV0dW5nLXNlY29uZGFyeS1ob3ZlcjogI3skZ3JheS1ob3Zlcn07XHJcbn1cclxuXHJcbi8vIERyb3Bkb3duXHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAkZ3JheS0yMDA7XHJcblxyXG4vLyBUYWJsZXNcclxuJHRhYmxlLWhlYWQtYmc6ICR0YWJsZS1ib3JkZXItY29sb3I7XHJcbiR0YWJsZS1oZWFkLWNvbG9yOiAkZ3JheS02MDA7XHJcbiR0YWJsZS1ncm91cC1zZXBhcmF0b3ItY29sb3I6ICR0YWJsZS1ib3JkZXItY29sb3I7XHJcbiR0YWJsZS10aC1mb250LXdlaWdodDogbm9ybWFsO1xyXG5cclxuLyoqXHJcbiAqIEN1c3RvbSBWYXJpYWJsZXNcclxuICovXHJcblxyXG4vLyBDdXN0b20gdmFyaWFibGVzXHJcbiRlcnotY29udGFpbmVyLW1heC13aWR0aDogOTYwcHg7XHJcbiRlcnotY29udGFpbmVyLXBhZGRpbmcteDogJHNwYWNlcjtcclxuJGVyei1jb250YWluZXItcGFkZGluZy15OiAkc3BhY2VyO1xyXG4kZXJ6LXByZXNlbmNlLWNvbnRyb2wtZW50cnktbWluLXdpZHRoOiA0MDBweDtcclxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Jvb3RzdHJhcC12YXJpYWJsZXNcIjtcclxuXHJcbi50YWJsZSB0aCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnRhYmxlIHRoLmNvbHVtbi1zdWJzdGl0dXRlIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbn1cclxuLnRhYmxlIHRoLmNvbHVtbi1ob2xkZXIge1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG4udGFibGUgdGguY29sdW1uLWRhdGUtcmFuZ2Uge1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG4udGFibGUgdGguY29sdW1uLXJlbWFya3Mge1xyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG4udGFibGUgdGguY29sdW1uLWFjdGlvbnMsXHJcbi50YWJsZSB0ZC5jb2x1bW4tYWN0aW9ucyB7XHJcbiAgICB3aWR0aDogMSU7XHJcbn1cclxuXHJcbi50YWJsZSB0ZC5jb2x1bW4tcmVtYXJrcyB7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbn1cclxuLnRhYmxlIHRkIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuLnRhYmxlIHRkOm5vdCguY29sdW1uLWFjdGlvbnMpIHtcclxuICAgIHBhZGRpbmctdG9wOiAkcmVtLXNjYWxlICogMC42NnJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAkcmVtLXNjYWxlICogMC42NnJlbTtcclxufVxyXG5cclxuLypAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oc20pIHsqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHRhYmxlLnRhYmxlLFxyXG4gICAgdGFibGUudGFibGUgPiB0Ym9keVxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgfVxyXG4gICAgdGFibGUudGFibGUgPiB0aGVhZCAge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICB0YWJsZS50YWJsZSA+IHRib2R5ID4gdHIge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIG1pbi1jb250ZW50O1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVyLWZsdWlkIHRhYmxlLnRhYmxlID4gdGJvZHkgPiB0ciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICBjYWxjKC0xICogdmFyKC0tYnMtZ3V0dGVyLXgsIDEuNSAqICRzcGFjZXIpKTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoLTEgKiB2YXIoLS1icy1ndXR0ZXIteCwgMS41ICogJHNwYWNlcikpO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogIHZhcigtLWJzLWd1dHRlci14LCAxLjUgKiAkc3BhY2VyKTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1icy1ndXR0ZXIteCwgMS41ICogJHNwYWNlcik7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGUudGFibGUgdGgge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgdGFibGUudGFibGUgdGQsXHJcbiAgICB0YWJsZS50YWJsZSB0ZDpub3QoLmNvbHVtbi1hY3Rpb25zKSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6ICgwLjA2NXJlbSAqICRyZW0tc2NhbGUpIDA7XHJcbiAgICB9XHJcbiAgICB0YWJsZS50YWJsZSB0cjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgLypib3JkZXItdG9wOiAxcHggc29saWQgJHRhYmxlLWJvcmRlci1jb2xvcjsqL1xyXG4gICAgfVxyXG4gICAgdGFibGUudGFibGUgdHIge1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHRhYmxlLWJvcmRlci1jb2xvcjtcclxuICAgIH1cclxuICAgIHRhYmxlLnRhYmxlIHRkLmNvbHVtbi1hY3Rpb25zIHtcclxuICAgICAgICBncmlkLWNvbHVtbjogMjtcclxuICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgICAgICBncmlkLXJvdy1lbmQ6IDM7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4Ym94O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcbiAgICB0YWJsZS50YWJsZSB0ZC5jb2x1bW4tc3Vic3RpdHV0ZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBub25lO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 7559:
/*!********************************************************!*\
  !*** ./src/app/substitutions/substitutions-routing.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubstitutionsRoutingModule": () => (/* binding */ SubstitutionsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _auth_admin_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.admin.guard */ 3947);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.guard */ 2993);
/* harmony import */ var _components_page_admin_substitution_create_page_admin_substitution_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/page-admin-substitution-create/page-admin-substitution-create.component */ 0);
/* harmony import */ var _components_page_admin_substitution_create_ad_hoc_page_admin_substitution_create_ad_hoc_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/page-admin-substitution-create-ad-hoc/page-admin-substitution-create-ad-hoc.component */ 510);
/* harmony import */ var _components_page_admin_substitution_edit_page_admin_substitution_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page-admin-substitution-edit/page-admin-substitution-edit.component */ 7782);
/* harmony import */ var _components_page_admin_substitution_list_page_admin_substitution_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/page-admin-substitution-list/page-admin-substitution-list.component */ 9492);
/* harmony import */ var _components_page_substitution_create_page_substitution_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/page-substitution-create/page-substitution-create.component */ 8852);
/* harmony import */ var _components_page_substitution_edit_page_substitution_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page-substitution-edit/page-substitution-edit.component */ 4475);
/* harmony import */ var _components_page_substitution_list_current_page_substitution_list_current_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page-substitution-list-current/page-substitution-list-current.component */ 1750);
/* harmony import */ var _components_page_substitution_list_page_substitution_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/page-substitution-list/page-substitution-list.component */ 9051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);













const routes = [
    {
        path: 'assign',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        component: _components_page_substitution_list_page_substitution_list_component__WEBPACK_IMPORTED_MODULE_9__.PageSubstitutionListComponent,
    },
    {
        path: 'assign/edit/:id',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        component: _components_page_substitution_edit_page_substitution_edit_component__WEBPACK_IMPORTED_MODULE_7__.PageSubstitutionEditComponent
    },
    {
        path: 'assign/create',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        component: _components_page_substitution_create_page_substitution_create_component__WEBPACK_IMPORTED_MODULE_6__.PageSubstitutionCreateComponent
    },
    {
        path: 'admin/create',
        canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_0__.AuthAdminGuard],
        component: _components_page_admin_substitution_create_page_admin_substitution_create_component__WEBPACK_IMPORTED_MODULE_2__.PageAdminSubstitutionCreateComponent
    },
    {
        path: 'admin/create-ad-hoc',
        canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_0__.AuthAdminGuard],
        component: _components_page_admin_substitution_create_ad_hoc_page_admin_substitution_create_ad_hoc_component__WEBPACK_IMPORTED_MODULE_3__.PageAdminSubstitutionCreateAdHocComponent
    },
    {
        path: 'admin/edit/:id',
        canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_0__.AuthAdminGuard],
        component: _components_page_admin_substitution_edit_page_admin_substitution_edit_component__WEBPACK_IMPORTED_MODULE_4__.PageAdminSubstitutionEditComponent
    },
    {
        path: 'admin',
        canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_0__.AuthAdminGuard],
        component: _components_page_admin_substitution_list_page_admin_substitution_list_component__WEBPACK_IMPORTED_MODULE_5__.PageAdminSubstitutionListComponent
    },
    {
        path: 'execute',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        component: _components_page_substitution_list_current_page_substitution_list_current_component__WEBPACK_IMPORTED_MODULE_8__.PageSubstitutionListCurrentComponent
    },
];
class SubstitutionsRoutingModule {
}
SubstitutionsRoutingModule.ɵfac = function SubstitutionsRoutingModule_Factory(t) { return new (t || SubstitutionsRoutingModule)(); };
SubstitutionsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: SubstitutionsRoutingModule });
SubstitutionsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](SubstitutionsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


/***/ }),

/***/ 976:
/*!*******************************************************!*\
  !*** ./src/app/substitutions/substitutions.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubstitutionsModule": () => (/* binding */ SubstitutionsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_substitution_list_substitution_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/substitution-list/substitution-list.component */ 6711);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _substitutions_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./substitutions-routing */ 7559);
/* harmony import */ var _components_substitution_edit_substitution_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/substitution-edit/substitution-edit.component */ 3603);
/* harmony import */ var _components_page_substitution_edit_page_substitution_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page-substitution-edit/page-substitution-edit.component */ 4475);
/* harmony import */ var _components_substitution_create_substitution_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/substitution-create/substitution-create.component */ 6956);
/* harmony import */ var _components_substitution_create_ad_hoc_substitution_create_ad_hoc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/substitution-create-ad-hoc/substitution-create-ad-hoc.component */ 9459);
/* harmony import */ var _components_page_substitution_create_page_substitution_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page-substitution-create/page-substitution-create.component */ 8852);
/* harmony import */ var _components_substitution_list_current_substitution_list_current_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/substitution-list-current/substitution-list-current.component */ 1066);
/* harmony import */ var _components_page_substitution_list_current_page_substitution_list_current_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/page-substitution-list-current/page-substitution-list-current.component */ 1750);
/* harmony import */ var _components_page_admin_substitution_list_page_admin_substitution_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/page-admin-substitution-list/page-admin-substitution-list.component */ 9492);
/* harmony import */ var _components_page_admin_substitution_create_page_admin_substitution_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/page-admin-substitution-create/page-admin-substitution-create.component */ 0);
/* harmony import */ var _components_page_admin_substitution_create_ad_hoc_page_admin_substitution_create_ad_hoc_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/page-admin-substitution-create-ad-hoc/page-admin-substitution-create-ad-hoc.component */ 510);
/* harmony import */ var _components_page_substitution_list_page_substitution_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/page-substitution-list/page-substitution-list.component */ 9051);
/* harmony import */ var _components_page_admin_substitution_edit_page_admin_substitution_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/page-admin-substitution-edit/page-admin-substitution-edit.component */ 7782);
/* harmony import */ var _components_substitution_list_admin_substitution_list_admin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/substitution-list-admin/substitution-list-admin.component */ 2655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);


















class SubstitutionsModule {
}
SubstitutionsModule.ɵfac = function SubstitutionsModule_Factory(t) { return new (t || SubstitutionsModule)(); };
SubstitutionsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: SubstitutionsModule });
SubstitutionsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _substitutions_routing__WEBPACK_IMPORTED_MODULE_2__.SubstitutionsRoutingModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](SubstitutionsModule, { declarations: [_components_substitution_list_substitution_list_component__WEBPACK_IMPORTED_MODULE_0__.SubstitutionListComponent,
        _components_substitution_list_current_substitution_list_current_component__WEBPACK_IMPORTED_MODULE_8__.SubstitutionListCurrentComponent,
        _components_substitution_list_admin_substitution_list_admin_component__WEBPACK_IMPORTED_MODULE_15__.SubstitutionListAdminComponent,
        _components_substitution_edit_substitution_edit_component__WEBPACK_IMPORTED_MODULE_3__.SubstitutionEditComponent,
        _components_substitution_create_substitution_create_component__WEBPACK_IMPORTED_MODULE_5__.SubstitutionCreateComponent,
        _components_substitution_create_ad_hoc_substitution_create_ad_hoc_component__WEBPACK_IMPORTED_MODULE_6__.SubstitutionCreateAdHocComponent,
        _components_page_substitution_edit_page_substitution_edit_component__WEBPACK_IMPORTED_MODULE_4__.PageSubstitutionEditComponent,
        _components_page_substitution_create_page_substitution_create_component__WEBPACK_IMPORTED_MODULE_7__.PageSubstitutionCreateComponent,
        _components_page_substitution_list_current_page_substitution_list_current_component__WEBPACK_IMPORTED_MODULE_9__.PageSubstitutionListCurrentComponent,
        _components_page_admin_substitution_list_page_admin_substitution_list_component__WEBPACK_IMPORTED_MODULE_10__.PageAdminSubstitutionListComponent,
        _components_page_admin_substitution_create_page_admin_substitution_create_component__WEBPACK_IMPORTED_MODULE_11__.PageAdminSubstitutionCreateComponent,
        _components_page_admin_substitution_create_ad_hoc_page_admin_substitution_create_ad_hoc_component__WEBPACK_IMPORTED_MODULE_12__.PageAdminSubstitutionCreateAdHocComponent,
        _components_page_admin_substitution_edit_page_admin_substitution_edit_component__WEBPACK_IMPORTED_MODULE_14__.PageAdminSubstitutionEditComponent,
        _components_page_substitution_list_page_substitution_list_component__WEBPACK_IMPORTED_MODULE_13__.PageSubstitutionListComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _substitutions_routing__WEBPACK_IMPORTED_MODULE_2__.SubstitutionsRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_substitutions_substitutions_module_ts.js.map