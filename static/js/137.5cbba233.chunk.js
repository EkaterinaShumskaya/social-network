"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[137],{9137:function(e,n,r){r.r(n),r.d(n,{default:function(){return O}});var s=r(5671),o=r(3144),t=r(136),a=r(5716),u=r(2177),i=r(6315),l=r(2791),c=r(885),g=r(8433),f=r(184),h=function(e){var n=e.totalUsersCount,r=e.pageSize,s=e.onPageChanged,o=e.currentPage,t=l.useState(r),a=(0,c.Z)(t,2),u=a[0],i=a[1];(0,l.useEffect)((function(){r!==u&&i(r)}),[r]);return(0,f.jsx)(g.Z,{component:"div",labelRowsPerPage:"Users per page:",count:n,page:o-1,onPageChange:function(e,n){s(n+1,u)},rowsPerPage:u,onRowsPerPageChange:function(e){i(parseInt(e.target.value,10)),s(1,parseInt(e.target.value,10))}})},d="User_userCardContainer__DgHPo",p="User_avatar__euR0z",P="User_userInfo__9uCMc",v="User_avatarAndButton__hsE6i",w="User_name__v1hXW",C=r(7806),_=r(2426),m=r(9373),k=function(e){var n=e.user,r=e.followingInProgress,s=e.unfollowThunk,o=e.followThunk,t=n.followed?(0,f.jsx)(m.Z,{size:"small",variant:"contained",color:"secondary",disabled:r.some((function(e){return e===n.id})),onClick:function(){s(n.id)},children:"UNFOLLOW"}):(0,f.jsx)(m.Z,{size:"small",variant:"contained",color:"primary",disabled:r.some((function(e){return e===n.id})),onClick:function(){o(n.id)},children:"FOLLOW"});return(0,f.jsxs)("div",{className:d,children:[(0,f.jsxs)("div",{className:v,children:[(0,f.jsx)(_.OL,{to:"/profile/"+n.id,children:(0,f.jsx)("img",{className:p,alt:"avatar",src:null!==n.photos.large?n.photos.large:C})}),t]}),(0,f.jsxs)("div",{className:P,children:[(0,f.jsx)(_.OL,{to:"/profile/"+n.id,children:(0,f.jsx)("div",{className:w,children:n.name})}),(0,f.jsxs)("div",{children:["Status: ",n.status]})]})]})},j="users_usersContainer__LGyYg",x="users_sidebar__HwuIQ",U="users_usersCards__J4orJ",T=function(e){var n=e.users,r=e.pageSize,s=e.totalUsersCount,o=e.onPageChanged,t=e.followThunk,a=e.unfollowThunk,u=e.followingInProgress,i=e.currentPage;return(0,f.jsx)("div",{className:"app-wrapper-content",children:(0,f.jsxs)("div",{className:j,children:[(0,f.jsx)("div",{className:x}),(0,f.jsxs)("div",{className:U,children:[(0,f.jsx)(h,{currentPage:i,totalUsersCount:s,pageSize:r,onPageChanged:o}),n.map((function(e){return(0,f.jsx)(k,{user:e,followingInProgress:u,followThunk:t,unfollowThunk:a},e.id)}))]})]})})},z=r(7781),I=(0,r(6916).P1)((function(e){return e.users.users}),(function(e){return e})),N=function(e){return e.users.pageSize},S=function(e){return e.users.totalUsersCount},y=function(e){return e.users.currentPage},Z=function(e){return e.users.isFetching},b=function(e){return e.users.followingInProgress},L=function(e){(0,t.Z)(r,e);var n=(0,a.Z)(r);function r(){var e;(0,s.Z)(this,r);for(var o=arguments.length,t=new Array(o),a=0;a<o;a++)t[a]=arguments[a];return(e=n.call.apply(n,[this].concat(t))).onPageChanged=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;e.props.requestUsersThunk(n,r)},e}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){var e=this.props,n=e.currentPage,r=e.pageSize;this.props.requestUsersThunk(n,r)}},{key:"render",value:function(){return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(T,{onPageChanged:this.onPageChanged,users:this.props.users,pageSize:this.props.pageSize,currentPage:this.props.currentPage,totalUsersCount:this.props.totalUsersCount,followThunk:this.props.followThunk,unfollowThunk:this.props.unfollowThunk,followingInProgress:this.props.followingInProgress})})}}]),r}(l.Component),O=(0,z.qC)((0,u.$j)((function(e){return{users:I(e),pageSize:N(e),totalUsersCount:S(e),currentPage:y(e),isFetching:Z(e),followingInProgress:b(e)}}),{setCurrentPage:i.D4,requestUsersThunk:i.l_,followThunk:i.P$,unfollowThunk:i.km}))(L)},7806:function(e,n,r){e.exports=r.p+"static/media/user.ce9d1fe9ebcdc36f6d1f.png"}}]);
//# sourceMappingURL=137.5cbba233.chunk.js.map