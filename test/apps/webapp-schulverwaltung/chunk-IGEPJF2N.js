import{n as e}from"./chunk-PXVJ3QLD.js";import{e as p}from"./chunk-Z4YBXGVO.js";import{Md as o,P as i,X as c,_ as s,cd as m,lc as n}from"./chunk-2W7IS4PN.js";var I=(()=>{class t extends p{constructor(a,r){super(a,r,e,"StudyClasses","Number")}getActive(){return this.http.get(`${this.baseUrl}/?filter.IsActive==true`,{headers:{"X-Role-Restriction":"ClassTeacherRole"}}).pipe(i(o(e)))}getActiveFormativeAssessments(){return this.http.get(`${this.baseUrl}/FormativeAssessments?filter.IsActive==true`,{headers:{"X-Role-Restriction":"ClassTeacherRole"}}).pipe(i(o(e)))}static{this.\u0275fac=function(r){return new(r||t)(s(n),s(m))}}static{this.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();export{I as a};