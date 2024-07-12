import{a as Kt}from"./chunk-DDSXVC6O.js";import{a as qt,b as Ut}from"./chunk-UP3NEN2H.js";import{a as Gt}from"./chunk-DZZC2YX2.js";import{a as Vt}from"./chunk-K3EEKOGY.js";import{a as Wt}from"./chunk-XLPJMZ3E.js";import{c as je,d as Oe}from"./chunk-24AFRN2G.js";import{b as jt,d as Nt}from"./chunk-RFO4NYUO.js";import"./chunk-5RDJZAUT.js";import"./chunk-DB66EACG.js";import{A as Ce,B as Qe,L as Rt,M as $t,N as Ft,P as fe,T as Y,U as ue,V as Et,W as Pt,X as Bt,Y as Ht,c as Tt,j as Mt,t as Se,u as Lt,x as Be}from"./chunk-ZK2MNT7Z.js";import{a as kt,e as _e}from"./chunk-AW7CSGKI.js";import{a as Dt,b as Ot}from"./chunk-FTDG26ID.js";import{a as z,c as wt}from"./chunk-SOHFFTKU.js";import{a as gt,b as yt,c as vt,d as ht,e as St,f as Ct,g as It,j as xt,u as te,w as At}from"./chunk-C56YGDXA.js";import{a as le}from"./chunk-UX5TA32W.js";import{$ as x,$a as y,$b as ft,$c as Le,Ab as a,Bb as m,Cb as F,Da as xe,E as B,Eb as he,Fd as me,Ga as b,Gd as D,Hd as w,I as Xe,Ia as l,Id as V,Ja as re,K as Je,L as j,La as it,Lc as Ke,Mb as lt,N as Ze,O as R,Q as et,Qb as Ae,Rb as ae,Sa as c,Sb as K,Ta as d,Ua as S,Uc as _t,Va as k,Vb as Q,Vc as H,W as se,Wa as T,Wb as mt,Ya as X,Yc as Me,Z as O,_a as h,_c as bt,a as qe,ad as Re,e as Ie,ed as $e,f as Ue,fb as st,g as We,gb as rt,gd as Fe,ha as E,hb as ot,ia as P,ib as A,id as Ee,jb as f,jd as Pe,k as q,kb as $,la as tt,lb as g,m as v,mb as J,n as C,oc as ut,pb as at,pc as ke,qb as ct,qc as ce,qd as pe,ra as nt,rb as pt,rc as Te,rd as De,sb as oe,sd as we,tb as M,td as ee,ua as o,ub as Z,va as _,vb as W,w as U,xb as dt,zd as de}from"./chunk-XTHSYQMN.js";var He=(()=>{let i=class i{constructor(e,n,s,p,u,L,I,G){this.fb=e,this.router=n,this.toastService=s,this.translate=p,this.presenceTypesService=u,this.updateService=L,this.storageService=I,this.settings=G,this.formGroup=this.createFormGroup(),this.saving$=new Ue(!1),this.submitted$=new Ue(!1),this.absenceTypes$=C([this.getConfirmationTypes(),this.getHalfDayType()]).pipe(v(([ne,ie])=>ie?[...ne,ie]:ne)),this.absenceTypeIdErrors$=kt(q(this.formGroup),this.submitted$,"absenceTypeId"),this.destroy$=new Ie}ngOnInit(){this.selectedLessonIds$.pipe(B(1),U(Pt)).subscribe(()=>this.navigateBack())}ngOnDestroy(){this.destroy$.next()}onSubmit(){if(this.submitted$.next(!0),this.formGroup.valid){let{absenceTypeId:e}=this.formGroup.value;this.save(e)}}cancel(){this.navigateBack()}getSelectedCount(){return this.selectedLessonIds$.pipe(v(e=>e.length))}getConfirmationTypes(){return this.presenceTypesService.confirmationTypes$.pipe(v(e=>e.filter(n=>n.IsAbsence&&n.Id!==this.settings.halfDayPresenceTypeId)))}getHalfDayType(){return q(null)}createFormGroup(){return this.fb.group({absenceTypeId:[null,bt.required]})}save(e){this.saving$.next(!0),this.selectedLessonIds$.pipe(B(1),R(n=>this.updateService.editLessonPresences(n,[Number(this.storageService.getPayload()?.id_person)],e)),Xe(()=>this.saving$.next(!1))).subscribe(this.onSaveSuccess.bind(this))}onSaveSuccess(){this.toastService.success(this.translate.instant("my-absences.confirm.save-success")),this.navigateBack()}};i.\u0275fac=function(n){return new(n||i)(_(pe),_(ce),_(le),_(me),_(Y),_(ue),_(V),_(_t))},i.\u0275cmp=x({type:i,selectors:[["ng-component"]],decls:0,vars:0,template:function(n,s){},encapsulation:2});let t=i;return t})();var ge=(()=>{let i=class i{constructor(e,n,s){this.settings=e,this.storageService=n,this.studentsService=s,this.studentId$=new We(1),this.lessonAbsences$=this.studentId$.pipe(R(this.loadLessonAbsences.bind(this)),j(1)),this.lessonIncidents$=this.studentId$.pipe(R(this.loadLessonIncidents.bind(this)),j(1)),this.lessonPresences$=this.getLessonPresences(),this.checkableAbsences$=this.getAbsences(this.settings.checkableAbsenceStateId),this.openAbsences$=this.getAbsences(this.settings.unconfirmedAbsenceStateId),this.excusedAbsences$=this.getAbsences(this.settings.excusedAbsenceStateId),this.unexcusedAbsences$=this.getAbsences(this.settings.unexcusedAbsenceStateId),this.incidents$=this.getAbsences(null),this.openLessonAbsences$=C([this.openAbsences$.pipe(U(te)),this.lessonAbsences$]).pipe(v(_e(this.getLessonAbsences.bind(this))),j(1)),this.checkableLessonAbsences$=C([this.checkableAbsences$.pipe(U(te)),this.lessonAbsences$]).pipe(v(_e(this.getLessonAbsences.bind(this))),j(1)),this.excusedLessonAbsences$=C([this.excusedAbsences$.pipe(U(te)),this.lessonAbsences$]).pipe(v(_e(this.getLessonAbsences.bind(this))),j(1)),this.unexcusedLessonAbsences$=C([this.unexcusedAbsences$.pipe(U(te)),this.lessonAbsences$]).pipe(v(_e(this.getLessonAbsences.bind(this))),j(1)),this.incidentsLessonAbsences$=C([this.incidents$.pipe(U(te)),this.lessonIncidents$]).pipe(v(_e(this.getLessonIncidents.bind(this))),j(1)),this.counts$=this.getCounts();let p=this.storageService.getPayload()?.id_person;p&&this.studentId$.next(Number(p))}reset(){this.studentId$.pipe(B(1)).subscribe(e=>this.studentId$.next(e))}getLessonPresences(){return this.getCached(C([this.studentId$,this.lessonAbsences$,this.lessonIncidents$]).pipe(R(([e,n,s])=>this.loadTimetableEntries(e,n,s).pipe(v(p=>this.buildLessonPresences(n,s,p)))),v(Ft)))}getAbsences(e){return this.getCached(this.lessonPresences$.pipe(v(n=>n?.filter(s=>s.ConfirmationStateId===e)||null)))}getLessonAbsences(e,n){let s=e.map(p=>p.LessonRef.Id);return n.filter(p=>s.includes(p.LessonRef.Id))}getLessonIncidents(e,n){let s=e.map(p=>p.LessonRef.Id);return n.filter(p=>s.includes(p.LessonRef.Id))}getCounts(){return C([this.getCount(this.checkableAbsences$),this.getCount(this.openAbsences$),this.getCount(this.excusedAbsences$),this.getCount(this.unexcusedAbsences$),this.getCount(this.incidents$)]).pipe(v(([e,n,s,p,u])=>({checkableAbsences:e,openAbsences:n,excusedAbsences:s,unexcusedAbsences:p,incidents:u,halfDays:null})))}getCached(e){return e.pipe(Ze(null),Je({connector:()=>new We(1)}))}getCount(e){return e.pipe(v(n=>n?.length??null))}loadLessonAbsences(e){return this.studentsService.getLessonAbsences(e)}loadLessonIncidents(e){return this.studentsService.getLessonIncidents(e)}loadTimetableEntries(e,n,s){return this.studentsService.getTimetableEntries(e,{"filter.Id":`;${[...n,...s].map(p=>p.LessonRef.Id).join(";")}`})}buildLessonPresences(e,n,s){return[...e,...n].map(p=>this.buildLessonPresence(p,s)).filter(te)}buildLessonPresence(e,n){let s=n.find(p=>p.Id===e.LessonRef.Id);return s?{Id:"",LessonRef:{Id:e.LessonRef.Id,HRef:e.LessonRef.HRef?e.LessonRef.HRef:null},StudentRef:e.StudentRef,EventRef:{Id:0,HRef:null},TypeRef:e.TypeRef,RegistrationRef:{Id:0,HRef:null},StudyClassRef:{Id:0,HRef:null},ConfirmationStateId:"ConfirmationStateId"in e?e.ConfirmationStateId:null,EventDesignation:s.EventDesignation,HasStudyCourseConfirmationCode:!1,LessonDateTimeFrom:s.From,LessonDateTimeTo:s.To,Comment:null,Date:s.From,Type:e.Type,StudentFullName:e.StudentFullName,StudyClassNumber:"",TeacherInformation:s.EventManagerInformation}:null}};i.\u0275fac=function(n){return new(n||i)(O(H),O(V),O(je))},i.\u0275prov=se({token:i,factory:i.\u0275fac});let t=i;return t})();var fn=t=>({count:t}),un=t=>({"border-top pt-3":t});function _n(t,i){if(t&1&&(c(0,"div",11),f(1),a(2,"translate"),d()),t&2){let r=i.bkdLet;o(),g(" ",F(2,1,r===1?"my-absences.confirm.lesson-selected":"my-absences.confirm.lessons-selected",W(4,fn,r))," ")}}function bn(t,i){if(t&1&&(c(0,"div",17),f(1),a(2,"translate"),d()),t&2){let r=i.$implicit;o(),g(" ",F(2,1,"global.validation-errors."+r.error,r.params)," ")}}function gn(t,i){if(t&1&&(k(0),b(1,bn,3,4,"div",16),a(2,"async"),T()),t&2){let r=y(2);o(),l("ngForOf",m(2,1,r.absenceTypeIdErrors$))}}function yn(t,i){if(t&1&&(c(0,"div",12),S(1,"input",13),a(2,"async"),c(3,"label",14),f(4),d(),b(5,gn,3,3,"ng-container",15),a(6,"async"),d()),t&2){let r,e,n=i.$implicit,s=i.index,p=y();l("ngClass",W(12,un,n.IsHalfDay)),o(),re("is-invalid",((r=(r=m(2,8,p.absenceTypeIdErrors$))==null?null:r.length)!==null&&r!==void 0?r:0)>0),l("id","absence-type-"+s)("value",n.Id),o(2),l("for","absence-type-"+s),o(),g(" ",n.Designation," "),o(),l("ngIf",((e=(e=m(6,10,p.absenceTypes$))==null?null:e.length)!==null&&e!==void 0?e:0)-1===s)}}function vn(t,i){t&1&&(c(0,"div",18)(1,"span",19),f(2,"Loading..."),d()())}var Jt=(()=>{let i=class i extends He{constructor(e,n,s,p,u,L,I,G,ne,ie){super(e,n,s,p,u,L,I,G),this.myAbsencesService=ne,this.selectionService=ie,this.titleKey="my-absences.confirm.title",this.selectedLessonIds$=this.selectionService.selectedIds$.pipe(v(Ve=>de(ee(Ve.map(Ge=>Ge.lessonIds))))),this.confirmationStateId=this.settings.unconfirmedAbsencesRefreshTime}onSaveSuccess(){this.selectionService.clear(),this.myAbsencesService.reset(),super.onSaveSuccess()}navigateBack(){this.router.navigate(["/my-absences"])}};i.\u0275fac=function(n){return new(n||i)(_(pe),_(ce),_(le),_(me),_(Y),_(ue),_(V),_(H),_(ge),_(fe))},i.\u0275cmp=x({type:i,selectors:[["bkd-my-absences-confirm"]],standalone:!0,features:[xe,M],decls:28,vars:35,consts:[[1,"bkd-container","bkd-container-limited"],["class","mb-3 pb-3 border-bottom",4,"bkdLet"],[3,"ngSubmit","formGroup"],[1,"form-group","mb-3","border-bottom"],[1,"form-label"],["class","form-check my-3",3,"ngClass",4,"ngFor","ngForOf"],[1,"remark"],[1,"d-flex","justify-content-end"],["type","button",1,"btn","btn-outline-secondary",3,"click","disabled"],["type","submit",1,"btn","btn-primary","ms-2",3,"disabled"],["class","spinner-border spinner-border-sm align-middle","role","status",4,"ngIf"],[1,"mb-3","pb-3","border-bottom"],[1,"form-check","my-3",3,"ngClass"],["type","radio","formControlName","absenceTypeId",1,"form-check-input",3,"id","value"],[1,"form-check-label",3,"for"],[4,"ngIf"],["class","invalid-feedback mt-4",4,"ngFor","ngForOf"],[1,"invalid-feedback","mt-4"],["role","status",1,"spinner-border","spinner-border-sm","align-middle"],[1,"visually-hidden"]],template:function(n,s){n&1&&(c(0,"div",0)(1,"h1"),f(2),a(3,"translate"),d(),b(4,_n,3,6,"div",1),a(5,"async"),c(6,"form",2),h("ngSubmit",function(){return s.onSubmit()}),c(7,"div",3)(8,"label",4),f(9),a(10,"translate"),a(11,"addSpace"),d(),b(12,yn,7,14,"div",5),a(13,"async"),d(),c(14,"div",6),f(15),a(16,"translate"),d(),c(17,"div",7)(18,"button",8),a(19,"async"),h("click",function(){return s.cancel()}),f(20),a(21,"translate"),d(),c(22,"button",9),a(23,"async"),f(24),a(25,"translate"),b(26,vn,3,0,"div",10),a(27,"async"),d()()()()),n&2&&(o(2),$(m(3,12,s.titleKey)),o(2),l("bkdLet",m(5,14,s.getSelectedCount())),o(2),l("formGroup",s.formGroup),o(3),J("",m(10,16,"my-absences.confirm.choose-presence-type"),"",F(11,18,":",":"),""),o(3),l("ngForOf",m(13,21,s.absenceTypes$)),o(3),g(" ",m(16,23,"my-absences.confirm.remark")," "),o(3),l("disabled",m(19,25,s.saving$)),o(2),g(" ",m(21,27,"my-absences.confirm.cancel")," "),o(2),l("disabled",m(23,29,s.saving$)),o(2),g(" ",m(25,31,"my-absences.confirm.save")," "),o(2),l("ngIf",m(27,33,s.saving$)))},dependencies:[z,De,$e,Me,Fe,Le,Re,we,Ee,Pe,ae,Ae,K,Q,w,D,Oe],changeDetection:0});let t=i;return t})();var ye=(()=>{let i=class i extends Ut{get preventAbsencesAfterStart(){if(this._preventAbsencesAfterStart==null){let e=this.storageService.getPayload()?.instance_id,n=this.settings.preventStudentAbsenceAfterLessonStart;this._preventAbsencesAfterStart=e?n.includes(e):!1}return this._preventAbsencesAfterStart}constructor(e,n,s,p,u,L){super(e,n,L,s,"/my-absences/report"),this.studentsService=p,this.storageService=u}getInitialFilter(){return{dateFrom:null,dateTo:null}}isValidFilter(e){return!!(e.dateFrom||e.dateTo)}loadEntries(e,n,s){let p=this.buildRequestParamsFromFilter(e).set("sort","From.asc");return this.loadingService.load(this.loadTimetableEntries(p).pipe(v(u=>this.filterAbsencesAfterLessonStart(u)),R(u=>C([q(u),this.loadLessonAbsences(u),this.loadLessonDispensations(u)])),v(([u,L,I])=>this.buildLessonPresences(u,L,I)),v(u=>({offset:0,total:u.length,entries:u}))),qt)}filterAbsencesAfterLessonStart(e){return this.preventAbsencesAfterStart?e.filter(n=>n.From.getTime()>=new Date().getTime()):e}buildParamsFromFilter(e){let{dateFrom:n,dateTo:s}=e,p={};return n&&(p.dateFrom=Se(n,"yyyy-MM-dd")),s&&(p.dateTo=Se(s,"yyyy-MM-dd")),p}buildRequestParamsFromFilter(e){let n=new ft;return e.dateFrom&&(n=n.set("filter.From",`>${Se(Lt(e.dateFrom,1),"yyyy-MM-dd")}`)),e.dateTo&&(n=n.set("filter.To",`<${Se(Tt(e.dateTo,1),"yyyy-MM-dd")}`)),n}get studentId(){let e=this.storageService.getPayload()?.id_person;if(e==null)throw new Error("No student id available");return Number(e)}loadTimetableEntries(e){return this.studentsService.getTimetableEntries(this.studentId,e)}loadLessonAbsences(e){return e.length>0?this.studentsService.getLessonAbsences(this.studentId,{"filter.Id":`;${e.map(n=>n.Id).join(";")}`}):q([])}loadLessonDispensations(e){return e.length>0?this.studentsService.getLessonDispensations(this.studentId,{"filter.Id":`;${e.map(n=>n.Id).join(";")}`}):q([])}buildLessonPresences(e,n,s){return e.map(p=>this.buildLessonPresence(p,n,s))}buildLessonPresence(e,n,s){let p=n.find(I=>I.LessonRef.Id===e.Id),u=s.find(I=>I.LessonRef.Id===e.Id),L=this.buildLessonPresenceTypeRef(p,u);return{Id:"",LessonRef:{Id:e.Id,HRef:null},StudentRef:(p||u)?.StudentRef||{Id:this.studentId,HRef:null},EventRef:{Id:0,HRef:null},TypeRef:L,RegistrationRef:{Id:0,HRef:null},StudyClassRef:{Id:0,HRef:null},ConfirmationStateId:p?.ConfirmationStateId||u&&this.settings.excusedAbsenceStateId||null,EventDesignation:e.EventDesignation||"",HasStudyCourseConfirmationCode:!1,LessonDateTimeFrom:e.From||new Date,LessonDateTimeTo:e.To||new Date,Comment:null,Date:e.From||new Date,Type:(p||u)?.Type||null,StudentFullName:(p||u)?.StudentFullName||"",StudyClassNumber:"",TeacherInformation:e.EventManagerInformation}}buildLessonPresenceTypeRef(e,n){return e?qe({},e.TypeRef):n?qe({},n.TypeRef):{Id:null,HRef:null}}};i.\u0275fac=function(n){return new(n||i)(O(lt),O(Ot),O(H),O(je),O(V),O(Wt))},i.\u0275prov=se({token:i,factory:i.\u0275fac});let t=i;return t})();var ve=(()=>{let i=class i extends Rt{constructor(){super(...arguments),this.selectedIds$=this.selection$.pipe(v($t))}};i.\u0275fac=(()=>{let e;return function(s){return(e||(e=tt(i)))(s||i)}})(),i.\u0275prov=se({token:i,factory:i.\u0275fac});let t=i;return t})();var hn=t=>({count:t}),Sn=t=>({"border-top pt-3":t});function Cn(t,i){if(t&1&&(c(0,"div",11),f(1),a(2,"translate"),d()),t&2){let r=i.bkdLet;o(),g(" ",F(2,1,r===1?"my-absences.confirm.lesson-selected":"my-absences.confirm.lessons-selected",W(4,hn,r))," ")}}function In(t,i){if(t&1&&(c(0,"div",17),f(1),a(2,"translate"),d()),t&2){let r=i.$implicit;o(),g(" ",F(2,1,"global.validation-errors."+r.error,r.params)," ")}}function xn(t,i){if(t&1&&(k(0),b(1,In,3,4,"div",16),a(2,"async"),T()),t&2){let r=y(2);o(),l("ngForOf",m(2,1,r.absenceTypeIdErrors$))}}function An(t,i){if(t&1&&(c(0,"div",12),S(1,"input",13),a(2,"async"),c(3,"label",14),f(4),d(),b(5,xn,3,3,"ng-container",15),a(6,"async"),d()),t&2){let r,e,n=i.$implicit,s=i.index,p=y();l("ngClass",W(12,Sn,n.IsHalfDay)),o(),re("is-invalid",((r=(r=m(2,8,p.absenceTypeIdErrors$))==null?null:r.length)!==null&&r!==void 0?r:0)>0),l("id","absence-type-"+s)("value",n.Id),o(2),l("for","absence-type-"+s),o(),g(" ",n.Designation," "),o(),l("ngIf",((e=(e=m(6,10,p.absenceTypes$))==null?null:e.length)!==null&&e!==void 0?e:0)-1===s)}}function kn(t,i){t&1&&(c(0,"div",18)(1,"span",19),f(2,"Loading..."),d()())}var tn=(()=>{let i=class i extends He{constructor(e,n,s,p,u,L,I,G,ne,ie){super(e,n,s,p,u,L,I,G),this.state=ne,this.selectionService=ie,this.titleKey="my-absences.report.title",this.selectedLessonIds$=this.selectionService.selectedIds$.pipe(v(Ve=>de(ee(Ve.map(Ge=>Ge.lessonIds))))),this.confirmationStateId=this.settings.checkableAbsenceStateId}getHalfDayType(){return this.presenceTypesService.getPresenceType(this.settings.halfDayPresenceTypeId).pipe(v(e=>e.Active?e:null))}onSaveSuccess(){this.selectionService.clear(),this.state.resetEntries(),super.onSaveSuccess()}navigateBack(){this.state.queryParams$.pipe(B(1)).subscribe(e=>{this.router.navigate(["/my-absences/report"],{queryParams:e})})}};i.\u0275fac=function(n){return new(n||i)(_(pe),_(ce),_(le),_(me),_(Y),_(ue),_(V),_(H),_(ye),_(ve))},i.\u0275cmp=x({type:i,selectors:[["bkd-my-absences-confirm"]],standalone:!0,features:[xe,M],decls:28,vars:35,consts:[[1,"bkd-container","bkd-container-limited"],["class","mb-3 pb-3 border-bottom",4,"bkdLet"],[3,"ngSubmit","formGroup"],[1,"form-group","mb-3","border-bottom"],[1,"form-label"],["class","form-check my-3",3,"ngClass",4,"ngFor","ngForOf"],[1,"remark"],[1,"d-flex","justify-content-end"],["type","button",1,"btn","btn-outline-secondary",3,"click","disabled"],["type","submit",1,"btn","btn-primary","ms-2",3,"disabled"],["class","spinner-border spinner-border-sm align-middle","role","status",4,"ngIf"],[1,"mb-3","pb-3","border-bottom"],[1,"form-check","my-3",3,"ngClass"],["type","radio","formControlName","absenceTypeId",1,"form-check-input",3,"id","value"],[1,"form-check-label",3,"for"],[4,"ngIf"],["class","invalid-feedback mt-4",4,"ngFor","ngForOf"],[1,"invalid-feedback","mt-4"],["role","status",1,"spinner-border","spinner-border-sm","align-middle"],[1,"visually-hidden"]],template:function(n,s){n&1&&(c(0,"div",0)(1,"h1"),f(2),a(3,"translate"),d(),b(4,Cn,3,6,"div",1),a(5,"async"),c(6,"form",2),h("ngSubmit",function(){return s.onSubmit()}),c(7,"div",3)(8,"label",4),f(9),a(10,"translate"),a(11,"addSpace"),d(),b(12,An,7,14,"div",5),a(13,"async"),d(),c(14,"div",6),f(15),a(16,"translate"),d(),c(17,"div",7)(18,"button",8),a(19,"async"),h("click",function(){return s.cancel()}),f(20),a(21,"translate"),d(),c(22,"button",9),a(23,"async"),f(24),a(25,"translate"),b(26,kn,3,0,"div",10),a(27,"async"),d()()()()),n&2&&(o(2),$(m(3,12,s.titleKey)),o(2),l("bkdLet",m(5,14,s.getSelectedCount())),o(2),l("formGroup",s.formGroup),o(3),J("",m(10,16,"my-absences.confirm.choose-presence-type"),"",F(11,18,":",":"),""),o(3),l("ngForOf",m(13,21,s.absenceTypes$)),o(3),g(" ",m(16,23,"my-absences.confirm.remark")," "),o(3),l("disabled",m(19,25,s.saving$)),o(2),g(" ",m(21,27,"my-absences.confirm.cancel")," "),o(2),l("disabled",m(23,29,s.saving$)),o(2),g(" ",m(25,31,"my-absences.confirm.save")," "),o(2),l("ngIf",m(27,33,s.saving$)))},dependencies:[z,De,$e,Me,Fe,Le,Re,we,Ee,Pe,ae,Ae,K,Q,w,D,Oe],changeDetection:0});let t=i;return t})();var Tn=()=>["/my-absences"],sn=(()=>{let i=class i{constructor(){this.filter={dateFrom:null,dateTo:null},this.filterChange=new nt,this.minDate={year:new Date().getFullYear(),month:new Date().getMonth()+1,day:new Date().getDate()}}updateDateFrom(e){this.filter.dateFrom=e,e&&(this.filter.dateTo=e)}show(){this.filterChange.emit({dateFrom:nn(this.filter.dateFrom),dateTo:nn(this.filter.dateTo)})}};i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=x({type:i,selectors:[["bkd-my-absences-report-header"]],inputs:{filter:"filter"},outputs:{filterChange:"filterChange"},standalone:!0,features:[oe([{provide:Ct,useClass:xt},{provide:It,useClass:Vt}]),M],decls:19,vars:18,consts:[[3,"link"],[1,"filters"],[1,"form-group"],[1,"form-label"],[3,"valueChange","minDate","value"],[1,"buttons"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(n,s){n&1&&(S(0,"bkd-backlink",0),c(1,"h1"),f(2),a(3,"translate"),d(),c(4,"div",1)(5,"div",2)(6,"label",3),f(7),a(8,"translate"),d(),c(9,"bkd-date-select",4),h("valueChange",function(u){return s.updateDateFrom(u)}),d()(),c(10,"div",2)(11,"label",3),f(12),a(13,"translate"),d(),c(14,"bkd-date-select",4),pt("valueChange",function(u){return ct(s.filter.dateTo,u)||(s.filter.dateTo=u),u}),d()(),c(15,"div",5)(16,"button",6),h("click",function(){return s.show()}),f(17),a(18,"translate"),d()()()),n&2&&(l("link",Z(17,Tn)),o(2),$(m(3,9,"my-absences.report.title")),o(5),$(m(8,11,"my-absences.report.header.date-from")),o(2),l("minDate",s.minDate)("value",s.filter.dateFrom),o(3),$(m(13,13,"my-absences.report.header.date-to")),o(2),l("minDate",s.minDate),at("value",s.filter.dateTo),o(3),g(" ",m(18,15,"my-absences.report.header.show")," "))},dependencies:[Ht,Kt,w,D],styles:["[_nghost-%COMP%]{display:block;padding-bottom:1rem;border-bottom:1px solid #dee2e6}.filters[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.form-group[_ngcontent-%COMP%]{flex:1;min-width:20rem;max-width:40rem;margin-right:1rem;margin-bottom:.5rem}.buttons[_ngcontent-%COMP%]{flex:none;margin-top:1.625rem;margin-right:0}@media (max-width: 575.98px){[_nghost-%COMP%]{padding-bottom:0}.buttons[_ngcontent-%COMP%]{width:100%;margin-top:1rem;margin-bottom:1rem}}"],changeDetection:0});let t=i;return t})();function nn(t){return t?Mt(t):null}var Mn=(t,i,r)=>({selection:t,entries:i,loadingPage:r});function Ln(t,i){if(t&1){let r=X();c(0,"div",15)(1,"input",16,6),a(3,"async"),h("change",function(){E(r);let n=y(2).$implicit,s=y(6);return P(s.selectionService.toggle(n))}),d()()}if(t&2){let r=y(2).$implicit,e=y(6);o(),l("checked",m(3,1,e.selectionService.isSelected$(r)))}}function Rn(t,i){if(t&1&&(c(0,"div")(1,"i",20),f(2),d()()),t&2){let r=y().bkdLet;it("checkbox presence-category ",r.category,""),o(2),$(r.icon)}}function $n(t,i){if(t&1&&(k(0),b(1,Ln,4,3,"div",29)(2,Rn,3,4,"ng-template",null,5,he),T()),t&2){let r=i.bkdLet,e=A(3);o(),l("ngIf",!r)("ngIfElse",e)}}function Fn(t,i){if(t&1&&(k(0),f(1),T()),t&2){let r=y().$implicit;o(),g(", ",r.StudyClassNumber,"")}}function En(t,i){if(t&1&&(c(0,"div",31),f(1),d()),t&2){let r=y().bkdLet;o(),g(" ",r," ")}}function Pn(t,i){if(t&1&&(k(0),b(1,En,2,1,"div",30),T()),t&2){let r=i.bkdLet;o(),l("ngIf",r)}}function Dn(t,i){if(t&1){let r=X();c(0,"div",22,4),h("click",function(n){E(r);let s=A(1),p=y(6);return P(p.onRowClick(n,s))}),b(2,$n,4,2,"ng-container",7),a(3,"async"),c(4,"div",23),f(5),b(6,Fn,2,1,"ng-container",12),d(),c(7,"div",24),f(8),a(9,"date"),a(10,"date"),d(),c(11,"div",25),f(12),d(),b(13,Pn,2,1,"ng-container",7),a(14,"async"),c(15,"div",26),f(16),a(17,"date"),d(),c(18,"div",27),f(19),a(20,"bkdDaysDifference"),d(),c(21,"div",28),f(22),a(23,"date"),a(24,"bkdDaysDifference"),d()()}if(t&2){let r=i.$implicit,e=y(6);o(2),l("bkdLet",m(3,11,e.getPresenceCategory(r))),o(3),g(" ",r.EventDesignation,""),o(),l("ngIf",r.StudyClassNumber),o(2),J(" ",F(9,13,r.LessonDateTimeFrom,"HH:mm"),"\u2013",F(10,16,r.LessonDateTimeTo,"HH:mm")," "),o(4),g(" ",r.TeacherInformation," "),o(),l("bkdLet",m(14,19,e.getPresenceTypeDesignation(r))),o(3),g(" ",F(17,21,r.LessonDateTimeFrom,"dd.MM.yyyy")," "),o(3),g(" ",m(20,24,r.LessonDateTimeFrom)," "),o(3),J(" ",F(23,26,r.LessonDateTimeFrom,"dd.MM.yyyy"),", ",m(24,29,r.LessonDateTimeFrom)," ")}}function wn(t,i){if(t&1){let r=X();c(0,"div")(1,"div",14,3),h("click",function(n){E(r);let s=A(2),p=y(5);return P(p.onRowClick(n,s))}),c(3,"div",15)(4,"input",16),a(5,"async"),h("change",function(n){E(r);let s=y(5);return P(s.toggleAll(n.target==null?null:n.target.checked))}),d()(),c(6,"div",17),f(7),a(8,"translate"),d(),c(9,"div",18)(10,"a",19),a(11,"async"),c(12,"i",20),f(13,"edit"),d()()()(),b(14,Dn,25,31,"div",21),d()}if(t&2){let r,e=y(4).bkdLet,n=y();o(4),l("checked",m(5,5,n.allSelected$)),o(3),g(" ",m(8,7,"my-absences.report.list.all")," "),o(3),re("disabled",((r=m(11,9,n.selectionService.selection$))==null?null:r.length)===0),o(4),l("ngForOf",e.entries)}}function Bn(t,i){t&1&&S(0,"bkd-spinner",32)}function jn(t,i){if(t&1&&(c(0,"div",11),b(1,wn,15,11,"div",12)(2,Bn,1,0,"bkd-spinner",13),d()),t&2){let r=y(3).bkdLet;o(),l("ngIf",r.entries&&r.entries.length>0),o(),l("ngIf",r.loadingPage)}}function On(t,i){t&1&&(c(0,"p",33),f(1),a(2,"translate"),d()),t&2&&(o(),g(" ",m(2,1,"my-absences.report.no-entries")," "))}function Nn(t,i){if(t&1&&(k(0),b(1,jn,3,2,"div",10)(2,On,3,3,"ng-template",null,2,he),T()),t&2){let r=A(3),e=y(2).bkdLet;o(),l("ngIf",e.entries&&e.entries.length>0||e.loadingPage)("ngIfElse",r)}}function Hn(t,i){t&1&&S(0,"bkd-spinner")}function Vn(t,i){if(t&1&&(k(0),b(1,Nn,4,2,"ng-container",9),a(2,"async"),b(3,Hn,1,0,"ng-template",null,1,he),T()),t&2){let r=A(4),e=y(2);o(),l("ngIf",m(2,2,e.state.loading$)===!1)("ngIfElse",r)}}function Gn(t,i){t&1&&(c(0,"p",33),f(1),a(2,"translate"),d()),t&2&&(o(),$(m(2,1,"my-absences.report.no-filter")))}function qn(t,i){if(t&1){let r=X();k(0),c(1,"bkd-my-absences-report-header",8),a(2,"async"),h("filterChange",function(n){E(r);let s=y();return P(s.state.setFilter(n))}),d(),b(3,Vn,5,4,"ng-container",9),a(4,"async"),b(5,Gn,3,3,"ng-template",null,0,he),T()}if(t&2){let r=A(6),e=y();o(),l("filter",m(2,3,e.filterFromParams$)),o(2),l("ngIf",m(4,5,e.state.isFilterValid$))("ngIfElse",r)}}var rn=(()=>{let i=class i{constructor(e,n,s,p,u,L){this.state=e,this.selectionService=n,this.route=s,this.scrollPosition=p,this.presenceTypesService=u,this.settings=L,this.filterFromParams$=this.route.queryParams.pipe(v(Un)),this.allSelected$=C([this.selectionService.selection$,this.state.entries$.pipe(R(I=>C(I.map(G=>this.getPresenceType(G)))))]).pipe(v(([I,G])=>I.length>0&&I.length===G.filter(At(Be)).length)),this.destroy$=new Ie}ngOnInit(){this.filterFromParams$.pipe(B(1)).subscribe(e=>this.state.setFilter(e)),this.state.validFilter$.pipe(et(this.destroy$)).subscribe(()=>this.selectionService.clear())}ngAfterViewInit(){this.scrollPosition.restore()}ngOnDestroy(){this.destroy$.next()}getPresenceCategory(e){return this.getPresenceType(e).pipe(v(n=>Be(n)?e.ConfirmationStateId===this.settings.checkableAbsenceStateId?{category:Ce.Unapproved,icon:Qe(Ce.Unapproved)}:{category:Ce.Absent,icon:Qe(Ce.Absent)}:null))}getPresenceTypeDesignation(e){return this.presenceTypesService.displayedTypes$.pipe(v(n=>e.TypeRef.Id&&n.find(s=>s.Id===e.TypeRef.Id)?.Designation||null))}toggleAll(e){C([this.state.entries$.pipe(B(1)),this.presenceTypesService.presenceTypes$.pipe(B(1))]).subscribe(([n,s])=>{let p=s.filter(u=>Be(u)).map(u=>u.Id);this.selectionService.clear(e?n.filter(u=>u.TypeRef.Id==null||!p.includes(u.TypeRef.Id)):null)})}onRowClick(e,n){let s=n.querySelector('input[type="checkbox"]');s&&e.target!==s&&!e.target.closest(".buttons")&&s.click()}getPresenceType(e){return this.presenceTypesService.presenceTypes$.pipe(v(n=>e.TypeRef.Id&&n.find(s=>s.Id===e.TypeRef.Id)||null))}};i.\u0275fac=function(n){return new(n||i)(_(ye),_(ve),_(ut),_(Gt),_(Y),_(H))},i.\u0275cmp=x({type:i,selectors:[["bkd-my-absences-report-list"]],standalone:!0,features:[M],decls:4,vars:11,consts:[["noFilter",""],["loading",""],["noEntries",""],["all",""],["row",""],["categoryIcon",""],["checkbox",""],[4,"bkdLet"],[3,"filterChange","filter"],[4,"ngIf","ngIfElse"],["class","py-3",4,"ngIf","ngIfElse"],[1,"py-3"],[4,"ngIf"],["class","inline",4,"ngIf"],[1,"entries-all",3,"click"],[1,"checkbox"],["type","checkbox",1,"form-check-input",3,"change","checked"],[1,"all"],[1,"buttons"],["routerLink","confirm",1,"edit","btn","btn-primary","btn-icon","me-2"],[1,"material-icons"],["class","entry",3,"click",4,"ngFor","ngForOf"],[1,"entry",3,"click"],[1,"lesson-class"],[1,"time","pe-2"],[1,"teacher"],[1,"date"],[1,"days-ago"],[1,"date-days-ago"],["class","checkbox",4,"ngIf","ngIfElse"],["class","presence-type",4,"ngIf"],[1,"presence-type"],[1,"inline"],[1,"mt-3"]],template:function(n,s){n&1&&(b(0,qn,7,7,"ng-container",7),a(1,"async"),a(2,"async"),a(3,"async")),n&2&&l("bkdLet",dt(7,Mn,m(1,1,s.selectionService.selection$),m(2,3,s.state.entries$),m(3,5,s.state.loadingPage$)))},dependencies:[z,sn,K,Te,ae,wt,Q,mt,w,D,Et],styles:['.entries-all[_ngcontent-%COMP%]{padding:0 0 .5rem 1rem;border-bottom:1px solid #dee2e6;display:grid;grid-template-areas:"checkbox all buttons";grid-template-columns:min-content 1fr min-content}.entry[_ngcontent-%COMP%]{padding:1rem;border-bottom:1px solid #dee2e6;display:grid;grid-template-areas:"checkbox lesson-class time teacher" "checkbox presence-type date days-ago";grid-template-columns:min-content 2fr 1fr 2fr}.entry[_ngcontent-%COMP%]:first-child{padding-top:0}.entries-all[_ngcontent-%COMP%] + .entry[_ngcontent-%COMP%]{padding-top:1rem}.presence-category.absent[_ngcontent-%COMP%]{color:#ea161f}.presence-category.unapproved[_ngcontent-%COMP%]{color:#ffa814}.checkbox[_ngcontent-%COMP%]{grid-area:checkbox;margin:0;padding:.3rem 1rem 0 0}.presence-category[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{display:block;font-size:16px}.entries-all[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{padding-top:.2rem}.checkbox[_ngcontent-%COMP%]   input.form-check-input[_ngcontent-%COMP%]{position:static!important;margin:0!important;display:block}.all[_ngcontent-%COMP%]{grid-area:all}.buttons[_ngcontent-%COMP%]{grid-area:buttons;display:flex}.lesson-class[_ngcontent-%COMP%]{grid-area:lesson-class;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.time[_ngcontent-%COMP%]{grid-area:time}.teacher[_ngcontent-%COMP%]{grid-area:teacher}.presence-type[_ngcontent-%COMP%]{color:#adb5bd;grid-area:presence-type}.date[_ngcontent-%COMP%]{grid-area:date}.days-ago[_ngcontent-%COMP%]{color:#adb5bd;grid-area:days-ago}.date-days-ago[_ngcontent-%COMP%]{grid-area:date-days-ago;display:none}@media (max-width: 750px){.entry[_ngcontent-%COMP%]{grid-template-areas:"checkbox lesson-class" "checkbox teacher" "checkbox date-days-ago" "checkbox time" "checkbox presence-type";grid-template-columns:min-content 1fr}.date-days-ago[_ngcontent-%COMP%]{display:block}.date[_ngcontent-%COMP%], .days-ago[_ngcontent-%COMP%]{display:none}}'],changeDetection:0});let t=i;return t})();function Un(t){return{dateFrom:t.dateFrom?Ke(t.dateFrom):null,dateTo:t.dateTo?Ke(t.dateTo):null}}var on=(()=>{let i=class i{constructor(){}};i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=x({type:i,selectors:[["bkd-my-absences-report"]],standalone:!0,features:[oe([ye,ve]),M],decls:1,vars:0,template:function(n,s){n&1&&S(0,"router-outlet")},dependencies:[ke],changeDetection:0});let t=i;return t})();var Wn=["link"],Kn=()=>["/my-absences/report"],an=(()=>{let i=class i{onClick(){this.link.nativeElement.click()}constructor(){}};i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=x({type:i,selectors:[["bkd-my-absences-report-link"]],viewQuery:function(n,s){if(n&1&&st(Wn,5),n&2){let p;rt(p=ot())&&(s.link=p.first)}},hostBindings:function(n,s){n&1&&h("click",function(u){return s.onClick(u)})},standalone:!0,features:[M],decls:8,vars:5,consts:[["link",""],[1,"m-0"],[1,"btn","btn-link","p-0",3,"routerLink"],[1,"d-flex","align-items-center"],[1,"material-icons"]],template:function(n,s){n&1&&(c(0,"h5",1),f(1),a(2,"translate"),d(),c(3,"a",2,0)(5,"div",3)(6,"i",4),f(7,"keyboard_arrow_right"),d()()()),n&2&&(o(),g(" ",m(2,2,"my-absences.report.title"),`
`),o(2),l("routerLink",Z(4,Kn)))},dependencies:[Te,w,D],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:1rem;cursor:pointer}.btn[_ngcontent-%COMP%]{color:#000;text-decoration:none}"],changeDetection:0});let t=i;return t})();var Qn=t=>({absenceCounts:t}),cn=()=>[];function zn(t,i){}function Yn(t,i){if(t&1&&(k(0),f(1),T()),t&2){let r=y().bkdLet;o(),g("(",r.absenceCounts.checkableAbsences,") ")}}function Xn(t,i){if(t&1&&S(0,"bkd-student-dossier-absences",17),t&2){let r=y(2);l("absences$",r.myAbsencesService.checkableAbsences$)}}function Jn(t,i){if(t&1&&(k(0),f(1),T()),t&2){let r=y().bkdLet;o(),g("(",r.absenceCounts.openAbsences,") ")}}function Zn(t,i){if(t&1&&(S(0,"bkd-student-dossier-absences",18),a(1,"translate"),a(2,"async")),t&2){let r,e=y(2);l("absences$",e.myAbsencesService.openAbsences$)("selectionService",e.absencesSelectionService)("defaultAbsenceSelectionMessage",m(1,4,"my-absences.show.default-absence-selection-message"))("reports",(r=m(2,6,e.openAbsencesReports$))!==null&&r!==void 0?r:Z(8,cn))}}function ei(t,i){if(t&1&&(k(0),f(1),T()),t&2){let r=y().bkdLet;o(),g("(",r.absenceCounts.excusedAbsences,") ")}}function ti(t,i){if(t&1&&S(0,"bkd-student-dossier-absences",17),t&2){let r=y(2);l("absences$",r.myAbsencesService.excusedAbsences$)}}function ni(t,i){if(t&1&&(k(0),f(1),T()),t&2){let r=y().bkdLet;o(),g("(",r.absenceCounts.unexcusedAbsences,") ")}}function ii(t,i){if(t&1&&S(0,"bkd-student-dossier-absences",19),t&2){let r=y(2);l("absences$",r.myAbsencesService.unexcusedAbsences$)("displayPresenceType",!1)}}function si(t,i){if(t&1&&(k(0),f(1),T()),t&2){let r=y().bkdLet;o(),g("(",r.absenceCounts.incidents,") ")}}function ri(t,i){if(t&1&&S(0,"bkd-student-dossier-absences",17),t&2){let r=y(2);l("absences$",r.myAbsencesService.incidents$)}}function oi(t,i){if(t&1){let r=X();c(0,"div",6)(1,"h1"),f(2),a(3,"translate"),d(),c(4,"div",7)(5,"div"),f(6),a(7,"translate"),d(),c(8,"div",8),S(9,"bkd-reports-link",9),a(10,"async"),d()(),c(11,"div",10)(12,"div",11)(13,"div",12),S(14,"bkd-my-absences-report-link"),d(),c(15,"div",13)(16,"div",14),b(17,zn,0,0,"ng-template"),d()()(),c(18,"div",11,0)(20,"div",12)(21,"bkd-student-dossier-entry-header",15),h("click",function(){E(r);let n=A(19);return P(n.toggle())}),f(22),a(23,"translate"),b(24,Yn,2,1,"ng-container",16),d()(),c(25,"div",13)(26,"div",14),b(27,Xn,1,1,"ng-template"),d()()(),c(28,"div",11,1)(30,"div",12)(31,"bkd-student-dossier-entry-header",15),h("click",function(){E(r);let n=A(29);return P(n.toggle())}),f(32),a(33,"translate"),b(34,Jn,2,1,"ng-container",16),d()(),c(35,"div",13)(36,"div",14),b(37,Zn,3,9,"ng-template"),d()()(),c(38,"div",11,2)(40,"div",12)(41,"bkd-student-dossier-entry-header",15),h("click",function(){E(r);let n=A(39);return P(n.toggle())}),f(42),a(43,"translate"),b(44,ei,2,1,"ng-container",16),d()(),c(45,"div",13)(46,"div",14),b(47,ti,1,1,"ng-template"),d()()(),c(48,"div",11,3)(50,"div",12)(51,"bkd-student-dossier-entry-header",15),h("click",function(){E(r);let n=A(49);return P(n.toggle())}),f(52),a(53,"translate"),b(54,ni,2,1,"ng-container",16),d()(),c(55,"div",13)(56,"div",14),b(57,ii,1,2,"ng-template"),d()()(),c(58,"div",11,4)(60,"div",12)(61,"bkd-student-dossier-entry-header",15),h("click",function(){E(r);let n=A(59);return P(n.toggle())}),f(62),a(63,"translate"),b(64,si,2,1,"ng-container",16),d()(),c(65,"div",13)(66,"div",14),b(67,ri,1,1,"ng-template"),d()()()()()}if(t&2){let r,e=i.bkdLet,n=A(19),s=A(29),p=A(39),u=A(49),L=A(59),I=y();o(2),$(m(3,18,"my-absences.title")),o(4),$(m(7,20,"my-absences.description")),o(3),l("reports",(r=m(10,22,I.allAbsencesReports$))!==null&&r!==void 0?r:Z(34,cn)),o(12),l("opened",!n.collapsed),o(),g(" ",m(23,24,"shared.profile.checkable-absences")," "),o(2),l("ngIf",e.absenceCounts.checkableAbsences!==null),o(7),l("opened",!s.collapsed),o(),g(" ",m(33,26,"shared.profile.open-absences")," "),o(2),l("ngIf",e.absenceCounts.openAbsences!==null),o(7),l("opened",!p.collapsed),o(),g(" ",m(43,28,"shared.profile.excused-absences")," "),o(2),l("ngIf",e.absenceCounts.excusedAbsences!==null),o(7),l("opened",!u.collapsed),o(),g(" ",m(53,30,"shared.profile.unexcused-absences")," "),o(2),l("ngIf",e.absenceCounts.unexcusedAbsences!==null),o(7),l("opened",!L.collapsed),o(),g(" ",m(63,32,"shared.profile.incidents")," "),o(2),l("ngIf",e.absenceCounts.incidents!==null)}}var pn=(()=>{let i=class i{constructor(e,n,s){this.reportsService=e,this.myAbsencesService=n,this.absencesSelectionService=s,this.openAbsencesReports$=this.loadOpenAbsencesReports(),this.allAbsencesReports$=this.loadAllAbsencesReports()}loadOpenAbsencesReports(){return C([this.absencesSelectionService.selectedWithoutPresenceType$,this.absencesSelectionService.selectedIds$]).pipe(R(([e,n])=>e.length===0&&n.length>0?this.getOpenAbsencesRecordIds(de(ee(n.map(s=>s.lessonIds)))):q([])),R(e=>this.reportsService.getStudentConfirmationReports(e)),j(1))}loadAllAbsencesReports(){return C([this.myAbsencesService.openLessonAbsences$,this.myAbsencesService.checkableLessonAbsences$,this.myAbsencesService.excusedLessonAbsences$,this.myAbsencesService.unexcusedLessonAbsences$,this.myAbsencesService.incidentsLessonAbsences$]).pipe(v(e=>this.getAllAbsencesRecordIds(ee(e))),R(e=>this.reportsService.getMyAbsencesReports(e)),j(1))}getAllAbsencesRecordIds(e){return e.map(n=>`${n.LessonRef.Id}_${n.RegistrationId}`)}getOpenAbsencesRecordIds(e){return this.myAbsencesService.openLessonAbsences$.pipe(v(n=>n.filter(s=>e.includes(s.LessonRef.Id)).map(s=>`${s.LessonRef.Id}_${s.RegistrationId}`)))}};i.\u0275fac=function(n){return new(n||i)(_(Nt),_(ge),_(fe))},i.\u0275cmp=x({type:i,selectors:[["bkd-my-absences-show"]],standalone:!0,features:[M],decls:2,vars:5,consts:[["checkableAbsences","ngbAccordionItem"],["openAbsences","ngbAccordionItem"],["excusedAbsences","ngbAccordionItem"],["unexcusedAbsences","ngbAccordionItem"],["incidents","ngbAccordionItem"],["class","bkd-container bkd-container-limited",4,"bkdLet"],[1,"bkd-container","bkd-container-limited"],[1,"d-flex","justify-content-between","border-bottom","header"],[1,"ps-3"],[3,"reports"],["ngbAccordion",""],["ngbAccordionItem",""],["ngbAccordionHeader",""],["ngbAccordionCollapse",""],["ngbAccordionBody",""],[3,"click","opened"],[4,"ngIf"],[3,"absences$"],[3,"absences$","selectionService","defaultAbsenceSelectionMessage","reports"],[3,"absences$","displayPresenceType"]],template:function(n,s){n&1&&(b(0,oi,68,35,"div",5),a(1,"async")),n&2&&l("bkdLet",W(3,Qn,m(1,1,s.myAbsencesService.counts$)))},dependencies:[z,Dt,St,ht,vt,an,yt,gt,jt,K,Bt,Q,w,D],styles:[".header[_ngcontent-%COMP%]{padding-bottom:1rem}"],changeDetection:0});let t=i;return t})();var dn=(()=>{let i=class i{constructor(){}};i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=x({type:i,selectors:[["bkd-my-absences"]],standalone:!0,features:[oe([ge,fe]),M],decls:1,vars:0,template:function(n,s){n&1&&S(0,"router-outlet")},dependencies:[ke],changeDetection:0});let t=i;return t})();var sr=[{path:"",component:dn,children:[{path:"",component:pn},{path:"confirm",component:Jt},{path:"report",component:on,children:[{path:"",component:rn,data:{restoreScrollPositionFrom:["/my-absences/report/confirm"]}},{path:"confirm",component:tn}]}]}];export{sr as MY_ABSENCES_ROUTES};