"use strict";(self.webpackChunkwebapp_schulverwaltung=self.webpackChunkwebapp_schulverwaltung||[]).push([[917],{9917:(Z,m,o)=>{o.r(m),o.d(m,{MySettingsModule:()=>q});var d=o(6482),p=o(3519),t=o(4650),g=o(9646),N=o(6451),F=o(1135),A=o(7579),f=o(4004),T=o(4782),y=o(3900),b=o(1884),M=o(1365),$=o(5684),v=o(2722),x=o(8746),z=o(8623),l=o(4006),L=o(1443),S=o(6188),O=o(6569),G=o(8029),U=o(5060),J=o(1303);let R=(()=>{class i{constructor(e,n){this.settings=e,this.storage=n,this.currentRoles=null}getNotificationTypes(){return this.getNotificationTypeKeys().map(e=>{if(!(e in this.settings.notificationTypes))throw new Error(`Key '${e}' is missing in 'notificationTypes' setting`);return{key:e,text:this.settings.notificationTypes[e]}})}getNotificationTypeKeys(){return(0,O.Z)(this.settings.notificationTypesAssignments.reduce((e,{roles:n,types:a})=>this.hasAnyRole(n)?[...e,...a]:e,[]))}hasAnyRole(e){return null===this.currentRoles&&(this.currentRoles=(0,U.F)(this.storage.getPayload()?.roles)),this.currentRoles.some(n=>e.includes(n))}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(G.L6),t.LFG(J.V))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var h=o(6895),I=o(1104),Y=o(2925),Q=o(6755);function j(i,s){if(1&i&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&i){const e=s.$implicit;t.xp6(1),t.hij(" ",e," ")}}function B(i,s){if(1&i&&(t.TgZ(0,"div",4),t.YNc(1,j,2,1,"div",5),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.descriptionLines)}}let w=(()=>{class i{constructor(e){this.cd=e,this.id="",this.label="",this.description=null,this.disabled=!1,this.onChange=n=>{},this.onTouched=()=>{},this._value=!1}get value(){return this._value}set value(e){this._value=e,this.onChange(e)}get descriptionLines(){return this.description?this.description.split("\n"):[]}writeValue(e){this._value=e}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.sBO))},i.\u0275cmp=t.Xpm({type:i,selectors:[["erz-my-settings-notifications-toggle"]],inputs:{id:"id",label:"label",description:"description",disabled:"disabled"},features:[t._Bn([{provide:l.JU,useExisting:(0,t.Gpc)(()=>i),multi:!0}])],decls:5,vars:6,consts:[[1,"d-flex","align-items-center"],[1,"flex-fill"],[3,"id","value","disabled","valueChange"],["class","form-text",4,"ngIf"],[1,"form-text"],[4,"ngFor","ngForOf"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"label",1),t._uU(2),t.qZA(),t.TgZ(3,"erz-switch",2),t.NdJ("valueChange",function(c){return n.value=c}),t.qZA()(),t.YNc(4,B,2,1,"div",3)),2&e&&(t.xp6(1),t.uIk("for",n.id),t.xp6(1),t.hij(" ",n.label," "),t.xp6(1),t.Q6J("id",n.id)("value",n.value)("disabled",n.disabled),t.xp6(1),t.Q6J("ngIf",n.description))},dependencies:[h.sg,h.O5,Q.q],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),i})();function E(i,s){1&i&&(t.TgZ(0,"div",6),t._UZ(1,"erz-spinner",7),t.qZA())}function D(i,s){if(1&i&&(t._UZ(0,"erz-my-settings-notifications-toggle",10),t.ALo(1,"async"),t.ALo(2,"async")),2&i){const e=s.$implicit;t.ekj("mt-4",s.index>0),t.Q6J("id","notification-channels-"+e.key)("label",t.lcZ(1,6,e.label))("description",t.lcZ(2,8,e.description))("formControlName",e.key)}}function P(i,s){if(1&i&&(t.TgZ(0,"form",8),t.YNc(1,D,3,10,"erz-my-settings-notifications-toggle",9),t.qZA()),2&i){const e=t.oxw().erzLet,n=t.oxw();t.Q6J("formGroup",e.channelsFormGroup),t.xp6(1),t.Q6J("ngForOf",n.channelsSettings)}}function X(i,s){if(1&i&&(t._UZ(0,"erz-my-settings-notifications-toggle",10),t.ALo(1,"async"),t.ALo(2,"async")),2&i){const e=s.$implicit;t.ekj("mt-4",s.index>0),t.Q6J("id","notification-types-"+e.key)("label",t.lcZ(1,6,e.label))("description",t.lcZ(2,8,e.description))("formControlName",e.key)}}function V(i,s){if(1&i&&(t.TgZ(0,"form",8),t.YNc(1,X,3,10,"erz-my-settings-notifications-toggle",9),t.qZA()),2&i){const e=t.oxw().erzLet,n=t.oxw();t.Q6J("formGroup",e.typesFormGroup),t.xp6(1),t.Q6J("ngForOf",n.typesSettings)}}function K(i,s){if(1&i&&(t.TgZ(0,"div",1)(1,"h2",2)(2,"span"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.YNc(5,E,2,0,"div",3),t.ALo(6,"async"),t.qZA(),t.YNc(7,P,2,2,"form",4),t.TgZ(8,"p",5),t._uU(9),t.ALo(10,"translate"),t.qZA(),t._UZ(11,"hr"),t.YNc(12,V,2,2,"form",4),t.qZA()),2&i){const e=s.erzLet,n=t.oxw();t.xp6(3),t.Oqu(t.lcZ(4,5,"my-settings.notifications.title")),t.xp6(2),t.Q6J("ngIf",t.lcZ(6,7,n.saving$)),t.xp6(2),t.Q6J("ngIf",e.channelsFormGroup),t.xp6(2),t.hij(" ",t.lcZ(10,9,"my-settings.notifications.privacy-hint")," "),t.xp6(3),t.Q6J("ngIf",e.typesFormGroup)}}const W=function(i,s){return{channelsFormGroup:i,typesFormGroup:s}};let H=(()=>{class i{constructor(e,n,a,c,C){this.userSettings=e,this.formBuilder=n,this.toastService=a,this.translate=c,this.notificationTypes=C,this.channelsSettings=[{key:"gui",label:this.translate.get("my-settings.notifications.gui")},{key:"mail",label:this.translate.get("my-settings.notifications.mail")},{key:"phoneMobile",label:this.translate.get("my-settings.notifications.phoneMobile")}],this.typesSettings=this.notificationTypes.getNotificationTypes().map(r=>{const{label:u,description:tt}="fr-CH"===this.translate.currentLang?r.text.fr:r.text.de;return{key:r.key,label:(0,g.of)(u),description:(0,g.of)(tt)}}),this.channelsValue$=this.userSettings.getNotificationChannels(),this.typesValue$=this.userSettings.getNotificationTypesInactive().pipe((0,f.U)(this.typesArrayToRecord.bind(this))),this.channelsFormGroup$=this.channelsValue$.pipe((0,f.U)(r=>this.createFormGroup(this.channelsSettings,r)),(0,T.d)(1)),this.allChannelsInactive$=(0,N.T)(this.channelsValue$,this.channelsFormGroup$.pipe((0,y.w)(r=>r.valueChanges))).pipe((0,f.U)(r=>Object.values(r).every(u=>!u)),(0,b.x)()),this.typesFormGroup$=this.typesValue$.pipe((0,M.M)(this.allChannelsInactive$),(0,f.U)(([r,u])=>this.createFormGroup(this.typesSettings,r,!0,u)),(0,T.d)(1)),this.saving$=new F.X(!1),this.destroy$=new A.x}ngOnInit(){this.userSettings.refetch(),this.allChannelsInactive$.pipe((0,$.T)(1),(0,M.M)(this.typesFormGroup$),(0,v.R)(this.destroy$)).subscribe(([e,n])=>{Object.values(n.controls).forEach(a=>e?a.disable():a.enable())}),this.channelsFormGroup$.pipe((0,v.R)(this.destroy$),(0,y.w)(e=>e.valueChanges)).subscribe(this.saveChannels.bind(this)),this.typesFormGroup$.pipe((0,v.R)(this.destroy$),(0,y.w)(e=>e.valueChanges)).subscribe(this.saveTypes.bind(this))}ngOnDestroy(){this.destroy$.next()}createFormGroup(e,n,a=!1,c=!1){return this.formBuilder.group(e.reduce((C,{key:r})=>({...C,[r]:[{value:n[r]??a,disabled:c}]}),{}))}saveChannels(e){this.saving$.next(!0),this.userSettings.saveNotificationChannels(e).pipe((0,x.x)(()=>this.saving$.next(!1))).subscribe(this.onSaveSuccess.bind(this))}saveTypes(e){this.saving$.next(!0),this.userSettings.saveNotificationTypesInactive(this.typesRecordToArray(e)).pipe((0,x.x)(()=>this.saving$.next(!1))).subscribe(this.onSaveSuccess.bind(this))}onSaveSuccess(){this.toastService.success(this.translate.instant("my-settings.notifications.save-success"))}typesArrayToRecord(e){return this.typesSettings.reduce((a,{key:c})=>({...a,[c]:!e.includes(c)}),{})}typesRecordToArray(e){return Object.keys(e).reduce((a,c)=>e[c]?a:[...a,c],[])}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(z.s),t.Y36(l.QS),t.Y36(L.k),t.Y36(S.sK),t.Y36(R))},i.\u0275cmp=t.Xpm({type:i,selectors:[["erz-my-settings-notifications"]],decls:3,vars:8,consts:[["class","pb-4",4,"erzLet"],[1,"pb-4"],[1,"m-0","pb-3","d-flex","align-items-stretch"],["class","position-relative",4,"ngIf"],[3,"formGroup",4,"ngIf"],[1,"mt-4","form-text"],[1,"position-relative"],[1,"position-absolute","inline","small","d-inline-block","ms-2"],[3,"formGroup"],[3,"id","label","description","formControlName","mt-4",4,"ngFor","ngForOf"],[3,"id","label","description","formControlName"]],template:function(e,n){1&e&&(t.YNc(0,K,13,11,"div",0),t.ALo(1,"async"),t.ALo(2,"async")),2&e&&t.Q6J("erzLet",t.WLB(5,W,t.lcZ(1,1,n.channelsFormGroup$),t.lcZ(2,3,n.typesFormGroup$)))},dependencies:[h.sg,h.O5,l._Y,l.JJ,l.JL,l.sg,l.u,I.e,Y.O,w,h.Ov,S.X$],styles:[".checkbox[_ngcontent-%COMP%]   input.form-check-input[_ngcontent-%COMP%]{position:static!important;margin:0!important}"],changeDetection:0}),i})();const k=[{path:"",component:(()=>{class i{constructor(){}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["erz-my-settings"]],decls:1,vars:0,template:function(e,n){1&e&&t._UZ(0,"router-outlet")},dependencies:[p.lC],changeDetection:0}),i})(),children:[{path:"",component:(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["erz-my-settings-show"]],decls:5,vars:3,consts:[[1,"erz-container","erz-container-limited","erz-container-padding-y"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t._UZ(4,"erz-my-settings-notifications"),t.qZA()),2&e&&(t.xp6(2),t.Oqu(t.lcZ(3,1,"my-settings.title")))},dependencies:[H,S.X$]}),i})()}]}];let _=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[p.Bz.forChild(k),p.Bz]}),i})(),q=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[d.m,_]}),i})()},6569:(Z,m,o)=>{o.d(m,{Z:()=>t});var d=o(2374);const t=function p(g){return g&&g.length?(0,d.Z)(g):[]}}}]);