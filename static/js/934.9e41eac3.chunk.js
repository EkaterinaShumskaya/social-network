"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[934],{3934:function(s,t,e){e.r(t),e.d(t,{default:function(){return F}});var n=e(1413),r=e(5671),i=e(3144),u=e(136),o=e(5716),a=e(2791),c=e(2177),d=e(7781),l=e(6407),p="MyPosts_postsBlock__EUhrj",h="MyPosts_posts__vdlLc",f="Post_item__sCWAp",m=e(184),j=function(s){return(0,m.jsx)("div",{children:(0,m.jsxs)("div",{className:f,children:[(0,m.jsx)("img",{src:"https://cspromogame.ru//storage/upload_images/avatars/3884.jpg"}),s.message,(0,m.jsx)("div",{children:s.likesCount})]})})},x=e(6139),v=e(704),k=e(3079),g=e(4186),_=(0,k.D)(10),S=(0,v.Z)({form:"profileAddNewPostForm"})((function(s){return(0,m.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,m.jsx)(x.Z,{component:g.g,name:"newPost",validate:[k.l,_],placeholder:"Send message"}),(0,m.jsx)("div",{children:(0,m.jsx)("button",{children:"Add post"})})]})})),Z=a.memo((function(s){var t=s.myposts.map((function(s){return(0,m.jsx)(j,{id:s.id,message:s.message,likesCount:s.likesCount},s.id)}));return(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:p,children:[(0,m.jsx)("h3",{children:"My post"}),(0,m.jsx)(S,{onSubmit:function(t){s.onAddPost(t.newPost)}})]}),(0,m.jsx)("div",{className:h,children:t})]})})),U=(0,d.qC)((0,c.$j)((function(s){return{myposts:s.profilePage.myposts}}),(function(s){return{onAddPost:function(t){s((0,l.Pi)(t))}}})))(Z),C="ProfileInfo_descriptionBlock__aBVeA",P=e(9496),y=e(885),T=function(s){var t=(0,a.useState)(!1),e=(0,y.Z)(t,2),n=e[0],r=e[1],i=(0,a.useState)(s.status),u=(0,y.Z)(i,2),o=u[0],c=u[1];(0,a.useEffect)((function(){c(s.status)}),[s.status]);return(0,m.jsxs)("div",{children:[!n&&(0,m.jsx)("div",{children:(0,m.jsx)("span",{onDoubleClick:function(){r(!0)},children:s.status||"----"})}),n&&(0,m.jsx)("div",{children:(0,m.jsx)("input",{autoFocus:!0,onBlur:function(){r(!1),s.updateUserStatusThunk(o)},onChange:function(s){c(s.currentTarget.value)},value:o})})]})},b=function(s){return s.profile?(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:C,children:[(0,m.jsx)("img",{src:s.profile.photos.large}),(0,m.jsx)(T,{status:s.status,updateUserStatusThunk:s.updateUserStatusThunk})]}),(0,m.jsx)("div",{children:s.profile.fullName}),(0,m.jsxs)("div",{children:["facebook: ",s.profile.contacts.facebook]})]}):(0,m.jsx)(P.p,{})},N=function(s){return(0,m.jsxs)("div",{children:[(0,m.jsx)(b,(0,n.Z)((0,n.Z)({},s),{},{profile:s.profile,status:s.status,updateUserStatusThunk:s.updateUserStatusThunk})),(0,m.jsx)(U,{})]})},w=e(9723),A=function(s){(0,u.Z)(e,s);var t=(0,o.Z)(e);function e(){return(0,r.Z)(this,e),t.apply(this,arguments)}return(0,i.Z)(e,[{key:"componentDidMount",value:function(){var s=Number(this.props.match.params.userId);s||(s=this.props.authorizedUsersId)||this.props.history.push("/login"),this.props.getUserProfileThunk(s),this.props.getUserStatusThunk(s)}},{key:"render",value:function(){return(0,m.jsx)("div",{children:(0,m.jsx)(N,(0,n.Z)((0,n.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateUserStatusThunk:this.props.updateUserStatusThunk}))})}}]),e}(a.Component),F=(0,d.qC)((0,c.$j)((function(s){var t;return{profile:s.profilePage.profile,status:s.profilePage.status,authorizedUsersId:null===(t=s.auth.data)||void 0===t?void 0:t.id,isAuth:s.auth.isAuth}}),{getUserProfileThunk:l.SO,getUserStatusThunk:l.$S,updateUserStatusThunk:l.Gk}),w.EN)(A)},4186:function(s,t,e){e.d(t,{g:function(){return d}});var n=e(1413),r=e(5987),i=(e(2791),"FormsControls_formControl__r1d3C"),u="FormsControls_error__wlcLU",o=e(184),a=["input","meta"],c=function(s){var t=s.meta,e=t.touched,n=t.error,r=s.children,a=e&&n;return(0,o.jsxs)("div",{className:i+" "+(a?u:""),children:[(0,o.jsx)("div",{children:r}),a&&(0,o.jsx)("span",{children:n})]})},d=function(s){var t=s.input,e=(s.meta,(0,r.Z)(s,a));return(0,o.jsxs)(c,(0,n.Z)((0,n.Z)({},s),{},{children:[" ",(0,o.jsx)("textarea",(0,n.Z)((0,n.Z)({},t),e))," "]}))}},3079:function(s,t,e){e.d(t,{l:function(){return n},D:function(){return r}});var n=function(s){if(!s)return"Field is  required"},r=function(s){return function(t){if(t.length>s)return"Max length is ".concat(s," symbols")}}}}]);
//# sourceMappingURL=934.9e41eac3.chunk.js.map