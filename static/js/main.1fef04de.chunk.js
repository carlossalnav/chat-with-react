(this.webpackJsonpfirechat=this.webpackJsonpfirechat||[]).push([[0],{50:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(21),i=n.n(c),a=n(23),o=(n(50),n(31)),s=n(20),d=s.a.initializeApp({apiKey:"AIzaSyCHYp-mfpzh2DbxlLvpKgNhvgape7v0SKY",authDomain:"firechat-609f9.firebaseapp.com",projectId:"firechat-609f9",storageBucket:"firechat-609f9.appspot.com",messagingSenderId:"122958299555",appId:"1:122958299555:web:667a7b9a2c1c7abbf31a16"}).firestore(),u=s.a.auth(),l=n(77),p=n(6);var j=function(){var e;return Object(p.jsx)("div",{style:{display:"flex",justifyContent:"center",height:"100vh",alignItems:"center"},children:Object(p.jsx)(l.a,{style:(e={padding:"30px",fontSize:"20px",borderRadius:"0",fontWeight:"600",backgroundColor:"#395dff"},Object(o.a)(e,"borderRadius","10px"),Object(o.a)(e,"color","#E4E4E4"),e),onClick:function(){var e=new s.a.auth.GoogleAuthProvider;u.signInWithPopup(e)},children:"Sign In With Google"})})},f=n(33),h=n.n(f),b=n(41),x=n(78);var g=function(e){var t=e.scroll,n=Object(r.useState)(""),c=Object(a.a)(n,2),i=c[0],o=c[1];function j(){return(j=Object(b.a)(h.a.mark((function e(n){var r,c,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=u.currentUser,c=r.uid,a=r.photoURL,e.next=4,d.collection("messages").add({text:i,photoURL:a,uid:c,createdAt:s.a.firestore.FieldValue.serverTimestamp()});case 4:o(""),t.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsx)("div",{children:Object(p.jsx)("form",{onSubmit:function(e){return j.apply(this,arguments)},children:Object(p.jsxs)("div",{className:"sendMsg",children:[Object(p.jsx)(x.a,{style:{margin:"auto",width:"100%",fontSize:"15px",fontWeight:"550",marginLeft:"5px",marginBottom:"-3px",color:"#E4E4E4"},placeholder:"Message...",type:"text",value:i,onChange:function(e){return o(e.target.value)}}),Object(p.jsx)(l.a,{style:{width:"18%",fontSize:"15px",fontWeight:"550",margin:"4px 5% -13px 5%",maxWidth:"200px",color:"#E4E4E4",backgroundColor:"#395DFF"},type:"submit",children:"Send"})]})})})};var v=function(){return Object(p.jsx)("div",{style:{display:"flex",justifyContent:"center",position:"fixed",width:"100%",left:"0",backgroundColor:"#1E1E1E",top:0,borderBottom:"#2c2f31",zIndex:"10"},children:Object(p.jsx)(l.a,{style:{padding:"20px",fontSize:"15px",borderRadius:"10px",fontWeight:"600",color:"#E4E4E4"},onClick:function(){return u.signOut()},children:"Sign Out"})})};var O=function(){var e=Object(r.useRef)(),t=Object(r.useState)([]),n=Object(a.a)(t,2),c=n[0],i=n[1];return Object(r.useEffect)((function(){d.collection("messages").orderBy("createdAt").limit(50).onSnapshot((function(e){i(e.docs.map((function(e){return e.data()})))}))}),[]),Object(p.jsxs)("div",{children:[Object(p.jsx)(v,{}),Object(p.jsx)("div",{className:"msgs",children:c.map((function(e){var t=e.id,n=e.text,r=e.photoURL,c=e.uid;return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"msg ".concat(c===u.currentUser.uid?"sent":"received"),children:[Object(p.jsx)("img",{src:r,alt:""}),Object(p.jsx)("p",{children:n})]},t)})}))}),Object(p.jsx)(g,{scroll:e}),Object(p.jsx)("div",{ref:e})]})},m=n(42);var y=function(){var e=Object(m.a)(u),t=Object(a.a)(e,1)[0];return Object(p.jsx)("div",{classname:"App",children:t?Object(p.jsx)(O,{}):Object(p.jsx)(j,{})})};i.a.render(Object(p.jsx)(y,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.1fef04de.chunk.js.map