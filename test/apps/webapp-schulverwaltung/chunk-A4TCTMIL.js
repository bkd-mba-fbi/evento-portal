import{a as u}from"./chunk-TCEEBBQP.js";import{a as j}from"./chunk-GWJDWK72.js";import{Jc as t,Kc as d,M as p,Mc as g,Nd as P,Od as n,P as o,Pc as m,Rc as I,Wc as e,X as l,Xc as h,_ as a,ad as b,cd as S,ed as f,n as y,nc as c}from"./chunk-TTJNYD2F.js";var T=(()=>{class i{constructor(r,s){this.http=r,this.settings=s}getWeekdays(){return this.http.get(`${this.baseUrl}/Weekdays`).pipe(o(n(u)),p(1))}getAbsenceConfirmationStates(){return this.http.get(`${this.baseUrl}/AbsenceConfirmationStates`).pipe(o(n(u)),p(1))}getStayPermits(){return this.http.get(`${this.baseUrl}/StayPermits`).pipe(o(n(u)),p(1))}get baseUrl(){return`${this.settings.apiUrl}/DropDownItems`}static{this.\u0275fac=function(s){return new(s||i)(a(c),a(f))}}static{this.\u0275prov=l({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var E=m({Id:d,FormOfAddress:t,Nationality:e(t),AddressLine1:e(t),AddressLine2:e(t),BillingAddress:e(t),Birthdate:e(b),CorrespondenceAddress:e(t),DisplayEmail:e(t),Email:h(t),Email2:h(t),FirstName:e(t),Gender:e(I([g("M"),g("F"),g("X")])),HomeTown:e(t),LastName:e(t),FullName:e(t),Location:e(t),MiddleName:e(t),NativeLanguage:e(t),PhoneMobile:e(t),PhonePrivate:e(t),PhoneBusiness:h(t),SocialSecurityNumber:e(t),StayPermit:e(d),StayPermitExpiry:e(b),Zip:e(t)}),F=m({Id:d,DisplayEmail:e(t),FullName:t});var Z=(()=>{class i extends j{constructor(r,s){super(r,s,E,"Persons"),this.personEmailCodec=m(S(this.codec.props,["Email","FormOfAddress"]))}getListForIds(r){return this.getList({params:{"filter.Id":`;${r.join(";")}`}})}getSummaries(r){return this.http.get(`${this.baseUrl}/`,{params:{"filter.Id":`;${r.join(";")}`,fields:["Id","FullName","DisplayEmail"].join(",")}}).pipe(o(n(F)))}getMyself(r){return this.http.get(`${this.baseUrl}/me`,r).pipe(o(P(this.codec)))}getByIdWithEmailInfos(r){return this.http.get(`${this.baseUrl}/`,{params:{"filter.Id=":r.toString(),fields:["FormOfAddress","Email"].join(",")}}).pipe(o(n(this.personEmailCodec)),y(s=>s[0]))}update(r,s,A,N){let $={PhonePrivate:s,PhoneMobile:A,Email2:N};return this.http.put(`${this.baseUrl}/${r}`,$).pipe(y(()=>{}))}static{this.\u0275fac=function(s){return new(s||i)(a(c),a(f))}}static{this.\u0275prov=l({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();export{T as a,Z as b};