(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{219:function(e,t,n){"use strict";n.d(t,"a",(function(){return I}));var a=n(124),i=n(0),o=n.n(i),r=n(314),l=n(160),c=n(16),s=n.n(c),u=n(105),m=n(44),p=n(1),d=n(18),v=n(218),f=n(47),g=n(29),h=n(24),S=p.a.create({developerButton:{borderRadius:5,borderStyle:"solid",borderWidth:2,justifyContent:"center",margin:10,padding:10}}),E=function(e){var t=e.developer,n=e.view;return o.a.createElement(h.a,{style:S.developerButton,onPress:function(){n(t)}},o.a.createElement(g.a,{source:{uri:"https://www.routeone.com/sites/default/files/default_images/default-person.png"}}),o.a.createElement(d.a,null,t.name),o.a.createElement(d.a,null,t.location),o.a.createElement(d.a,null,t.role),o.a.createElement(d.a,null,t.skills.join(", ")))},b=function(e){var t=e.developers,n=e.view;return o.a.createElement(f.a,null,t.map((function(e){return o.a.createElement(E,{key:e.id,view:n,developer:e})})))},y=[{id:0,name:"John Mwangi",role:"Computer Science Student at Northwestern University",location:"Evanston",skills:["Java","Python","Databases"],pic:"null",Bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum elit in ullamcorper scelerisque."},{id:1,name:"Adam",role:"Computer Science Student at Stanford University",location:"San Francisco",skills:["Golang","C++","Databases"],pic:"null",Bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum elit in ullamcorper scelerisque."},{id:2,name:"Josh",role:"Computer Science Student at University of Chicago",location:"Chicago",skills:["JavaScript","Python","ML","Databases"],pic:"null",Bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum elit in ullamcorper scelerisque."},{id:3,name:"Mason",role:"Computer Science Student at Northwestern University",location:"Evanston",skills:["Java","Python","React","Databases"],pic:"null",Bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum elit in ullamcorper scelerisque."},{id:4,name:"Evan",role:"Computer Science Student at Northwestern University",location:"Evanston",skills:["React","JavaScript","Databases","Firebase"],pic:"null",Bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum elit in ullamcorper scelerisque."},{id:5,name:"Linus",role:"Computer Science Student at Northwestern University",location:"Evanston",skills:["Java","Python","Databases"],pic:"null",Bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum elit in ullamcorper scelerisque."},{id:6,name:"Tiger",role:"Computer Science Student at Northwestern University",location:"Evanston",skills:["Java","JavaScript","Python","ML","Databases"],pic:"null",Bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum elit in ullamcorper scelerisque."}],C=n(215),k={keys:["location","skills"]},w=p.a.create({container:{flex:1,justifyContent:"center",paddingTop:20},bannerStyle:{color:"#888",fontSize:32}}),B=function(e){var t,n=e.navigation,a=Object(i.useState)(""),r=s()(a,2),l=r[0],c=r[1],p=Object(i.useState)(y),d=s()(p,2),f=d[0],g=(d[1],Object(i.useState)(f)),h=s()(g,2),S=h[0],E=h[1],B=(t=f,new C.a(t,k));return o.a.createElement(u.a,{style:w.container},o.a.createElement(v.a,{placeholder:"Search for skill/location...",onChangeText:function(e){c(e),E(B.search(e).map((function(e){return e.item})))},value:l,lightTheme:!0}),o.a.createElement(b,{developers:S,view:function(e){n.navigate("DeveloperProfileScreen",{developer:e})}}),o.a.createElement(m.a,{style:"auto"}))},x=n(3),D=p.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},userContainer:{flex:1,alignItems:"center"},h1_text:{fontSize:48,marginBottom:25},h3_text:{fontSize:24,textAlign:"center",marginBottom:20},h4_text:{fontSize:16,textAlign:"center",marginBottom:15}}),J=function(e){e.navigation;return o.a.createElement(x.a,{style:D.container},o.a.createElement(d.a,{h1:!0,style:D.h1_text},"NonProfDev"),o.a.createElement(d.a,{h3:!0,style:D.h3_text},"A simple, intuitive platform to connect non-profit organizations with passionate web developers"),o.a.createElement(d.a,{h3:!0,style:D.h3_text},"Created by the CS 394 Red Team"),o.a.createElement(d.a,{h4:!0,style:D.h4_text},"Benjamin Nober, Chris Song, Jacob Wat, Linus Okoth, Mason Brachmann, Tiger Nie, Zaddeen Benaissa"),o.a.createElement(m.a,{style:"auto"}))},L=function(e){var t=e.label,n=e.value;return o.a.createElement(x.a,{style:j.fieldContainer},o.a.createElement(d.a,{style:j.label},t),o.a.createElement(d.a,{style:j.field},n))},j=p.a.create({container:{flex:1,alignItems:"center",justifyContent:"center"},field:{padding:5,backgroundColor:"white",borderRadius:5},fieldContainer:{marginTop:10,marginBottom:20},label:{fontWeight:"bold"}}),N=function(e){var t=e.route.params.developer;return o.a.createElement(u.a,{style:j.container},o.a.createElement(a.a,null,o.a.createElement(L,{label:"Name",value:t.name}),o.a.createElement(L,{label:"Location",value:t.location}),o.a.createElement(L,{label:"Role",value:t.role}),o.a.createElement(L,{label:"Skills",value:t.skills.join(", ")})))},P=Object(r.a)();function I(){return o.a.createElement(l.a,null,o.a.createElement(P.Navigator,null,o.a.createElement(P.Screen,{name:"SearchScreen",component:B,options:{title:"NonProfDev"}}),o.a.createElement(P.Screen,{name:"DeveloperProfileScreen",component:N,options:{title:"Developer Profile"}}),o.a.createElement(P.Screen,{name:"AboutScreen",component:J,options:{title:"About"}})))}},229:function(e,t,n){e.exports=n(296)}},[[229,1,2]]]);
//# sourceMappingURL=app.d86d90a0.chunk.js.map