"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[181],{948:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var s=n(2791),o="Post_Post__bLsQ5",a=n(184),i=s.memo((function(e){var t=e.Posts.map((function(e){var t=e.id,n=e.text;return(0,a.jsx)("pre",{className:o,children:n},t)}));return(0,a.jsx)("div",{children:t})})),l="ProfileInfo_ProfilePage__VPLr6",c="ProfileInfo_Ava__7scnp",r="ProfileInfo_Name__BFeSS",u="ProfileInfo_AboutMe__KGo1i",d=n(2362),h=n(9439),x=function(e){var t=e.confirmStatusChanges,n=e.cancelStatusChanges,o=e.editMode,i=e.status,l=e.setEditMode,c=e.authUserId,r=e.currentUserId,u=(0,s.useState)(""),d=(0,h.Z)(u,2),x=d[0],m=d[1];(0,s.useEffect)((function(){m(o?i:"")}),[o,i]);return(0,a.jsx)(a.Fragment,{children:o?(0,a.jsx)("input",{type:"text",autoFocus:!0,onBlur:function(){return t(x)},onChange:function(e){m(e.target.value)},value:x,onKeyDown:function(e){return function(e){"Enter"===e.key?t(x):"Escape"===e.key&&n()}(e)}}):(0,a.jsx)("span",{onDoubleClick:function(){+r===c&&l(!o)},children:i||"Show your status here"})})},m=n(2383),p=n(7689),j=n(6326),b=n(5028),v=function(){var e=(0,s.useState)(!1),t=(0,h.Z)(e,2),n=t[0],o=t[1],i=(0,s.useState)(""),l=(0,h.Z)(i,2),c=l[0],r=l[1],u=(0,p.UO)().id,d=(0,j.a)().user;(0,s.useEffect)((function(){(0,m.OW)(u).then((function(e){r(e||"")}))}),[u]);return d?(0,a.jsx)(x,{confirmStatusChanges:function(e){r(e),o(!1),(0,m.yZ)(e)},cancelStatusChanges:function(){o(!1)},editMode:n,status:c,setEditMode:o,authUserId:d.id,currentUserId:u}):(0,a.jsx)(b.Z,{})},f=n(7948),M=n.n(f),A="Modal_Main__MbGev",g="Modal_Forms__07iix",k=function(e){var t=e.setIsModalAvatarOpen,n=e.isModalAvatarOpen,o=e.putNewPhoto;M().setAppElement("#root");var i=(0,s.useState)(""),l=(0,h.Z)(i,2),c=l[0],r=l[1],u=function(){t(!1)};return(0,a.jsxs)(M(),{className:A,isOpen:n,onRequestClose:u,contentLabel:"\u041e\u043a\u043e\u0448\u043a\u043e \u0434\u043b\u044f \u0441\u043c\u0435\u043d\u044b \u0430\u0432\u0430\u0442\u0430\u0440\u0430",children:[(0,a.jsxs)("div",{className:g,children:[(0,a.jsx)("label",{htmlFor:"large",children:"\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0430\u0432\u0430\u0442\u0430\u0440: "}),(0,a.jsx)("input",{name:"large",type:"file",onChange:function(e){var t=new FormData,n=e.target.files[0];t.append("image",n),r(t)}}),(0,a.jsx)("button",{disabled:!c,type:"submit",onClick:function(){o(c)},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]}),(0,a.jsx)("div",{className:g,children:(0,a.jsx)("button",{onClick:u,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})})]})},N=n(6139),y=(0,n(704).Z)({form:"aboutMe"})((function(e){var t=e.isModalAboutMeOpen,n=e.setIsModalAboutMeOpen,s=e.putInfoAboutMe,o=e.handleSubmit;M().setAppElement("#root");var i=function(){n(!1)};return(0,a.jsx)(M(),{className:A,isOpen:t,onRequestClose:i,contentLabel:"\u041e\u043a\u043d\u043e \u0434\u043b\u044f \u0441\u043c\u0435\u043d\u044b \u0438\u043d\u0444\u043e\u0440\u0430\u0446\u0438\u0438 \u043e \u0441\u0435\u0431\u0435",children:(0,a.jsxs)("form",{onSubmit:o((function(e){s(e)})),children:[(0,a.jsxs)("div",{className:g,children:[(0,a.jsx)("label",{htmlFor:"fullName",children:"\u0418\u043c\u044f: "}),(0,a.jsx)(N.Z,{component:"input",name:"fullName",type:"text"})]}),(0,a.jsxs)("div",{className:g,children:[(0,a.jsx)("label",{htmlFor:"lookingForAJob",children:"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443: "}),(0,a.jsx)(N.Z,{component:"input",name:"lookingForAJob",type:"checkbox"})]}),(0,a.jsxs)("div",{className:g,children:[(0,a.jsx)("label",{htmlFor:"lookingForAJobDescription",children:"\u0421\u043c\u043e\u0442\u0440\u044e \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043e \u0440\u0430\u0431\u043e\u0442\u0435:"}),(0,a.jsx)(N.Z,{component:"textarea",name:"lookingForAJobDescription",type:"text"})]}),(0,a.jsxs)("div",{className:g,children:[(0,a.jsx)("label",{htmlFor:"aboutMe",children:"\u041e \u0441\u0435\u0431\u0435: "}),(0,a.jsx)(N.Z,{component:"textarea",name:"aboutMe",type:"text"})]}),(0,a.jsxs)("div",{className:g,children:[(0,a.jsx)("label",{htmlFor:"contacts",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b: "}),(0,a.jsxs)("div",{className:g,children:[(0,a.jsx)("label",{htmlFor:"contacts.facebook",children:"Facebook: "}),(0,a.jsx)(N.Z,{name:"contacts.facebook",component:"input",type:"text",value:null})]}),(0,a.jsxs)("div",{className:g,children:[(0,a.jsx)("label",{htmlFor:"contacts.github",children:"Github: "}),(0,a.jsx)(N.Z,{name:"contacts.github",component:"input",type:"text",value:null})]}),(0,a.jsxs)("div",{className:g,children:[(0,a.jsx)("label",{htmlFor:"contacts.instagram",children:"Instagram: "}),(0,a.jsx)(N.Z,{name:"contacts.instagram",component:"input",type:"text",value:null})]}),(0,a.jsxs)("div",{className:g,children:[(0,a.jsx)("label",{htmlFor:"contacts.mainLink",children:"MainLink: "}),(0,a.jsx)(N.Z,{name:"contacts.mainLink",component:"input",type:"text",value:null})]}),(0,a.jsxs)("div",{className:g,children:[(0,a.jsx)("label",{htmlFor:"contacts.twitter",children:"Twitter: "}),(0,a.jsx)(N.Z,{name:"contacts.twitter",component:"input",type:"text",value:null})]}),(0,a.jsxs)("div",{className:g,children:[(0,a.jsx)("label",{htmlFor:"contacts.vk",children:"VK: "}),(0,a.jsx)(N.Z,{name:"contacts.vk",component:"input",type:"text",value:null})]}),(0,a.jsxs)("div",{className:g,children:[(0,a.jsx)("label",{htmlFor:"contacts.website",children:"Website: "}),(0,a.jsx)(N.Z,{name:"contacts.website",component:"input",type:"text",value:null})]}),(0,a.jsxs)("div",{className:g,children:[(0,a.jsx)("label",{htmlFor:"contacts.youtube",children:"Youtube: "}),(0,a.jsx)(N.Z,{name:"contacts.youtube",component:"input",type:"text",value:null})]})]}),(0,a.jsx)("div",{className:g,children:(0,a.jsx)("button",{type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})}),(0,a.jsx)("div",{className:g,children:(0,a.jsx)("button",{onClick:i,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e"})})]})})})),F=function(e){var t=e.Users,n=e.setIsModalAvatarOpen,s=e.isModalAvatarOpen,o=e.putNewPhoto,i=e.isModalAboutMeOpen,h=e.setIsModalAboutMeOpen,x=e.putInfoAboutMe,m=(e.authUser,e.id);return(0,a.jsxs)("div",{className:l,children:[(0,a.jsxs)("div",{className:c,children:[(0,a.jsx)("img",{src:t.photos.large?t.photos.large:d}),m?null:(0,a.jsx)("button",{onClick:function(){n(!0)},children:"Change ava"}),(0,a.jsx)(k,{setIsModalAvatarOpen:n,isModalAvatarOpen:s,putNewPhoto:o}),(0,a.jsx)("div",{children:(0,a.jsx)(v,{})})]}),(0,a.jsx)("div",{className:r,children:t.fullName}),(0,a.jsxs)("div",{className:u,children:[t.aboutMe,(0,a.jsx)("div",{children:t.contacts.facebook}),(0,a.jsx)("div",{children:t.contacts.website}),(0,a.jsx)("div",{children:t.contacts.vk}),(0,a.jsx)("div",{children:t.contacts.twitter}),(0,a.jsx)("div",{children:t.contacts.instagram}),(0,a.jsx)("div",{children:t.contacts.youtube}),(0,a.jsx)("div",{children:t.contacts.github}),(0,a.jsx)("div",{children:t.contacts.mainLink}),(0,a.jsx)("div",{children:t.lookingForAJob}),(0,a.jsx)("div",{children:t.lookingForAJobDescription}),(0,a.jsx)(y,{isModalAboutMeOpen:i,setIsModalAboutMeOpen:h,putInfoAboutMe:x}),m?null:(0,a.jsx)("button",{onClick:function(){h(!0)},children:"Change info about me"})]})]})},P=n(4672),w=n(5705),I=function(e){var t=e.addPost,n=(0,w.TA)({initialValues:{newPost:""},onSubmit:function(e){t(e),n.resetForm()}});return(0,a.jsxs)("form",{onSubmit:n.handleSubmit,children:[(0,a.jsx)("textarea",{id:"newPost",name:"newPost",type:"text",onChange:n.handleChange,value:n.values.newPost,placeholder:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0441\u0432\u043e\u0439 \u043d\u043e\u0432\u044b\u0439 ShitPost;)"}),(0,a.jsx)("button",{disabled:!n.dirty||n.isSubmitting,type:"submit",children:"Add post"})]})},O=(0,n(8687).$j)((function(e){return{newPostLetter:e.ShitPosts.newPostLetter}}),(function(e){return{addPost:function(t){e((0,P.z4)(t))}}}))(I),_=function(e){var t=e.Users,n=e.Posts,s=e.setIsModalAvatarOpen,o=e.isModalAvatarOpen,l=e.putNewPhoto,c=e.isModalAboutMeOpen,r=e.setIsModalAboutMeOpen,u=e.putInfoAboutMe,d=e.authUser,h=e.id;return t?(0,a.jsxs)("div",{children:[(0,a.jsx)("img",{src:"https://klike.net/uploads/posts/2022-10/1666767724_3-30.jpg"}),(0,a.jsx)(F,{Users:t,setIsModalAvatarOpen:s,isModalAvatarOpen:o,putNewPhoto:l,setIsModalAboutMeOpen:r,isModalAboutMeOpen:c,putInfoAboutMe:u,authUser:d,id:h}),(0,a.jsx)(O,{}),(0,a.jsx)(i,{Posts:n})]}):(0,a.jsx)(b.Z,{})}}}]);
//# sourceMappingURL=181.a885c8e1.chunk.js.map