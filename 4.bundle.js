(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{5634:function(e,n,t){"use strict";t.r(n);var i,o,r,s,l,u,c,a,d,p,h,f,b,R,m,S,w,A,g=t(4),y=t.n(g),k=t(10),v=t.n(k),I=t(11),C=t.n(I),D=t(12),F=t.n(D),z=t(13),E=t.n(z),H=t(14),U=t.n(H),O=t(0),j=t.n(O),B=t(5617),_=t(17),L=t(96),P=t.n(L),x=t(5618),J=t.n(x),M=t(5619),q=t.n(M),G=t(5620),K=t.n(G),N=t(5621),Q=t.n(N),T=t(5622),V=t.n(T),W=(t(5623),t(5624)),X=t.n(W),Y=t(5625),Z=t.n(Y),$=function(e,n){return e.pushed_at>n.pushed_at?-1:e.pushed_at<n.pushed_at?1:0},ee=new(i=function e(){var n=this;v()(this,e),Q()(this,"informations",o,this),Q()(this,"repos",r,this),Q()(this,"isLoading",s,this),Q()(this,"error",l,this),Q()(this,"isShowAllBtnDisabled",u,this),Q()(this,"selectedReposAreEmpty",c,this),Q()(this,"filterProjectsInput",a,this),Q()(this,"allReposAreSelected",d,this),Q()(this,"foundedCount",p,this),this.fetchData=function(){var e=K()(q.a.mark(function e(t){var i;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.isLoading=!0,e.next=3,Z()(t);case 3:return i=e.sent,e.abrupt("return",i.data);case 5:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}(),Q()(this,"getUserInfoAndRepos",h,this),Q()(this,"filterRepos",f,this),Q()(this,"selectUserRepo",b,this),Q()(this,"hideSelectedRepos",R,this),Q()(this,"showAllRepos",m,this),Q()(this,"hideSingleRepo",S,this),Q()(this,"selectAllRepos",w,this),this.isEveryRepoIsSelected=function(){return n.repos.every(function(e){return!0===e.isChecked})},this.isOneRepoSelected=function(){return!n.repos.some(function(e){return!0===e.isChecked})},this.checkIsShowAllIsDisabled=function(){return!n.repos.some(function(e){return!0===e.isChecked||!0===e.isFounded||!0===e.isHidden})},this.countIsFounded=function(){return n.repos.filter(function(e){return!!e.isFounded}).length}},o=V()(i.prototype,"informations",[_.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{login:"",email:"",avatar_url:"",name:""}}}),r=V()(i.prototype,"repos",[_.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),s=V()(i.prototype,"isLoading",[_.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),l=V()(i.prototype,"error",[_.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),u=V()(i.prototype,"isShowAllBtnDisabled",[_.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),c=V()(i.prototype,"selectedReposAreEmpty",[_.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),a=V()(i.prototype,"filterProjectsInput",[_.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),d=V()(i.prototype,"allReposAreSelected",[_.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),p=V()(i.prototype,"foundedCount",[_.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),h=V()(i.prototype,"getUserInfoAndRepos",[_.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(n){var t="https://api.github.com/users/".concat(n).concat(""),i="https://api.github.com/users/".concat(n,"/repos").concat("");Promise.all([e.fetchData(t),e.fetchData(i)]).then(function(n){var t=J()(n,2),i=t[0],o=t[1];o.sort($),Object(_.l)(function(){e.informations=i,e.repos=o,e.isLoading=!1,e.error=null})}).catch(function(n){Object(_.l)(function(){e.error=n,e.isLoading=!1})})}}}),f=V()(i.prototype,"filterRepos",[_.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(n){if(e.filterProjectsInput=n,!n)return e.repos=e.repos.map(function(e){return X()({},e,{isFounded:!1})}),e.foundedCount=0,void(e.isShowAllBtnDisabled=e.checkIsShowAllIsDisabled());e.repos=e.repos.map(function(e){return function(n){return n.name.includes(e)||n.description&&n.description.includes(e)?X()({},n,{isFounded:!0}):X()({},n,{isFounded:!1})}}(n)),e.foundedCount=e.countIsFounded()}}}),b=V()(i.prototype,"selectUserRepo",[_.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(n){var t=e.repos,i=t.findIndex(function(e){return function(n){return n.id===e}}(n)),o=t[i],r=t.slice(0,i),s=t.slice(i+1);o.isChecked?e.repos=P()(r).concat([X()({},o,{isChecked:!1})],P()(s)):e.repos=P()(r).concat([X()({},o,{isChecked:!0})],P()(s)),e.selectedReposAreEmpty=e.isOneRepoSelected(),e.allReposAreSelected=e.isEveryRepoIsSelected(),e.isShowAllBtnDisabled=e.checkIsShowAllIsDisabled()}}}),R=V()(i.prototype,"hideSelectedRepos",[_.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.repos=e.repos.map(function(e){return!0===e.isChecked||!0===e.isHidden?X()({},e,{isHidden:!0,isChecked:!1,isFounded:!1}):X()({},e,{isHidden:!1})}),e.isShowAllBtnDisabled=e.checkIsShowAllIsDisabled(),e.selectedReposAreEmpty=e.isOneRepoSelected(),e.allReposAreSelected=e.isEveryRepoIsSelected(),e.foundedCount=e.countIsFounded()}}}),m=V()(i.prototype,"showAllRepos",[_.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.repos=e.repos.map(function(e){return X()({},e,{isHidden:!1,isChecked:!1,isFounded:!1})}),e.selectedReposAreEmpty=e.isOneRepoSelected(),e.filterProjectsInput="",e.allReposAreSelected=e.isEveryRepoIsSelected(),e.isShowAllBtnDisabled=e.checkIsShowAllIsDisabled(),e.foundedCount=e.countIsFounded()}}}),S=V()(i.prototype,"hideSingleRepo",[_.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(n){e.repos=e.repos.map(function(e){return e.id===n?X()({},e,{isHidden:!0,isChecked:!1,isFounded:!1}):e}),e.selectedReposAreEmpty=e.isOneRepoSelected(),e.isShowAllBtnDisabled=e.checkIsShowAllIsDisabled(),e.foundedCount=e.countIsFounded()}}}),w=V()(i.prototype,"selectAllRepos",[_.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var n=e.repos;n.every(function(e){return!0===e.isHidden})||(e.isEveryRepoIsSelected()?e.repos=n.map(function(e){return X()({},e,{isChecked:!1})}):e.repos=n.map(function(e){return X()({},e,{isChecked:!0})}),e.allReposAreSelected=e.isEveryRepoIsSelected(),e.selectedReposAreEmpty=e.isOneRepoSelected(),e.isShowAllBtnDisabled=e.checkIsShowAllIsDisabled())}}}),i);t.d(n,"UserContainer",function(){return ne});var ne=Object(B.a)(A=function(e){function n(){var e,t;v()(this,n);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(t=F()(this,(e=E()(n)).call.apply(e,[this].concat(o)))).handleFilterRepos=function(e){ee.filterRepos(e.target.value)},t.handleSelectUserRepo=function(e){ee.selectUserRepo(e)},t.handleShowAllRepos=function(){ee.showAllRepos()},t.handleHideSelectedRepos=function(){ee.hideSelectedRepos()},t.handleHideSingleRepo=function(e){ee.hideSingleRepo(e)},t.handleSelectAllRepos=function(){ee.selectAllRepos()},t.openSelectedRepos=function(){ee.repos.forEach(function(e){return e.isChecked&&function(e){return window.open(e,"_blank")}(e.html_url)})},t}return U()(n,e),C()(n,[{key:"componentDidMount",value:function(){var e=this.props.match;ee.getUserInfoAndRepos(e.params.user)}},{key:"componentDidUpdate",value:function(e){var n=this.props.match;e.match.params.user!==n.params.user&&ee.getUserInfoAndRepos(n.params.user)}},{key:"render",value:function(){var e=this.props.render,n=this.handleFilterRepos,t=this.handleHideSelectedRepos,i=this.handleHideSingleRepo,o=this.handleSelectAllRepos,r=this.handleSelectUserRepo,s=this.handleShowAllRepos,l=this.openSelectedRepos,u=Object(_.n)(ee),c=u.informations,a=u.repos,d=y()(u,["informations","repos"]);return j.a.createElement(O.Fragment,null,e({informations:c,repos:a,restStore:d,handleFilterRepos:n,handleHideSelectedRepos:t,handleHideSingleRepo:i,handleSelectAllRepos:o,handleSelectUserRepo:r,handleShowAllRepos:s,openSelectedRepos:l}))}}]),n}(O.Component))||A;n.default=ne}}]);