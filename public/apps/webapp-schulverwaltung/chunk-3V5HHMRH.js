import{q as b}from"./chunk-QHPTZGVN.js";import{b as l}from"./chunk-33NXTXD7.js";import{Ac as c,Bc as n,Ed as d,Gc as f,O as s,W as p,Wc as u,Z as o,ac as m,ec as a}from"./chunk-T7QWSMKM.js";var h=f({Id:n,Designation:c,StudentCount:n});var T=(()=>{let t=class t extends l{constructor(r,i){super(r,i,h,"Events")}getStudyCourseEvents(){let r=new m().set("filter.EventTypeId=","1");return this.getList({params:r})}getSubscriptionDetailsDefinitions(r){return this.http.get(`${this.baseUrl}/${r}/SubscriptionDetails`).pipe(s(d(b)))}};t.\u0275fac=function(i){return new(i||t)(o(a),o(u))},t.\u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{T as a};