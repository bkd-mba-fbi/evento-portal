import{b as P}from"./chunk-DTYYCJHM.js";import{d as F}from"./chunk-G6EB45SC.js";import{C as b,D as S,F as p,Fd as x,H as c,Hd as g,K as u,M as n,R as y,X as l,f as o,g as h,n as s,o as f,w as a,x as m,za as v}from"./chunk-2W7IS4PN.js";var R="page",L=(()=>{class r{constructor(t,i,$,j,E){this.location=t,this.loadingService=i,this.sortService=$,this.settings=j,this.loading$=this.loadingService.loading$,this.loadingPage$=this.loadingService.loading(R),this.sorting$=this.sortService.sorting$,this.filter$=new h(this.getInitialFilter()),this.isFilterValid$=this.filter$.pipe(s(this.isValidFilter.bind(this))),this.validFilter$=this.filter$.pipe(m(this.isValidFilter.bind(this)),c(g),n(1)),this.resetEntries$=new o,this.nextPage$=new o,this.page$=a(this.nextPage$.pipe(s(()=>"next")),a(this.resetEntries$,this.validFilter$,this.sorting$).pipe(s(()=>"reset"))).pipe(u((e,d)=>d==="next"?e+1:0,0)),this.offset$=this.page$.pipe(s(e=>e*this.settings.paginationLimit)),this.pageResult$=f([this.validFilter$,this.sorting$,this.offset$]).pipe(S(10),b(F(this.loadEntries.bind(this))),n(1)),this.entries$=a(a(this.resetEntries$,this.validFilter$,this.sorting$).pipe(s(()=>({action:"reset"}))),this.pageResult$.pipe(s(e=>e.offset===0?{action:"reset",entries:e.entries}:{action:"append",entries:e.entries}))).pipe(u(this.entriesActionReducer.bind(this),[]),n(1)),this.total$=this.pageResult$.pipe(s(({total:e})=>e)),this.hasMore$=this.pageResult$.pipe(s(({offset:e,total:d})=>e<d-this.settings.paginationLimit)),this.queryParams$=this.filter$.pipe(s(this.buildParamsFromFilter.bind(this))),this.queryParamsString$=this.queryParams$.pipe(s(P)),this.destroy$=new o,this.queryParamsString$.pipe(y(this.destroy$)).subscribe(e=>this.location.replaceState(E,e)),this.sortService.setSorting(this.getInitialSorting())}ngOnDestroy(){this.destroy$.next()}setFilter(t){this.filter$.next(x(t))}nextPage(){this.hasMore$.pipe(p(1)).subscribe(t=>{t&&this.nextPage$.next()})}resetEntries(){this.resetEntries$.next()}getInitialSorting(){return null}entriesActionReducer(t,i){switch(i.action){case"append":return[...t,...i.entries];case"reset":return i.entries?i.entries:[];default:return t}}static{this.\u0275fac=function(i){v()}}static{this.\u0275prov=l({token:r,factory:r.\u0275fac})}}return r})();var M=(()=>{class r{getSortingChar$(t){return this.sorting$.pipe(s(i=>i&&t===i.key?i.ascending?"\u2193":"\u2191":""))}constructor(){this.sortingSubject$=new h(null),this.sorting$=this.sortingSubject$.asObservable().pipe(c(g),n(1))}setSorting(t){this.sortingSubject$.next(t)}toggleSorting(t){this.sorting$.pipe(p(1)).subscribe(i=>{let $=i&&i.key===t?!i.ascending:!0;this.sortingSubject$.next({key:t,ascending:$})})}static{this.\u0275fac=function(i){return new(i||r)}}static{this.\u0275prov=l({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();export{R as a,L as b,M as c};