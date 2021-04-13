(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{221:function(e,t,n){"use strict";n.d(t,"a",(function(){return Y}));var r=n(70),a=n(0),o=n.n(a),i=n(317),l=n(163),c=n(17),s=n.n(c),m=n(76),u=n(35),f=n(1),p=n(14),d=n(220),g=n(49),h=n(30),b=n(19),v=n(3),y=(n(31),f.a.create({developerButton:{borderRadius:5,borderStyle:"solid",borderWidth:1,borderColor:"#DFDFDF",flexDirection:"row",alignItems:"center",margin:10,padding:10,backgroundColor:"white"},developerImage:{width:75,height:100,marginRight:10},developerInfo:{flexDirection:"column",flexShrink:1},developerName:{fontWeight:"bold",fontSize:18},developerLocation:{fontWeight:"300",fontSize:16},developerRole:{fontStyle:"italic",fontSize:14},developerSkills:{marginTop:10,fontSize:16}})),S=function(e){var t=e.developer,n=e.view;return o.a.createElement(b.a,{style:y.developerButton,onPress:function(){n(t)}},o.a.createElement(h.a,{style:y.developerImage,source:{uri:t.pic}}),o.a.createElement(v.a,{style:y.developerInfo},o.a.createElement(p.a,{style:y.developerName},t.name),o.a.createElement(p.a,{style:y.developerLocation},t.location),o.a.createElement(p.a,{style:y.developerRole},t.role),o.a.createElement(p.a,{style:y.developerSkills},"Skills: ",t.skills.join(", "))))},E=function(e){var t=e.developers,n=e.view;return o.a.createElement(g.a,null,t.map((function(e){return o.a.createElement(S,{key:e.id,view:n,developer:e})})))},x=[{id:0,name:"Mark",role:"Computer Science Student at Northwestern University",location:"Evanston",skills:["Java","Python","Databases"],pic:"https://pbs.twimg.com/profile_images/1422637130/mccigartrophy.jpg",Bio:"1st year CS major @ NU. Open to anything at the moment!"},{id:1,name:"Allison",role:"Computer Science Student at Stanford University",location:"San Francisco",skills:["Golang","C++","Databases"],pic:"https://static.inspiremore.com/wp-content/uploads/2015/04/21050518/beyonce-the-gentlewoman.jpg",Bio:"1st year CS student @ Stanford. Primarily looking for backend roles, but open to anything!"},{id:2,name:"Josh",role:"Computer Science Student at University of Chicago",location:"Chicago",skills:["JavaScript","Python","ML","Databases"],pic:"https://assets.vogue.com/photos/59132f18dc6868483f55b55a/master/w_2560%2Cc_limit/00-lede-the-rock.jpg",Bio:"Junior CS major @ UChicago, looking to hone my ML skills with a relevant project."},{id:3,name:"Michelle",role:"Computer Science Student at Northwestern University",location:"Evanston",skills:["Java","Python","React","Databases"],pic:"https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Fanneglusker%2Ffiles%2F2018%2F12%2FMichelle-Obama-book-cover-shot-e1544143689487-1200x944.jpg",Bio:"2nd year CS major @ NU - particularly interested in the intersection between tech & finance."},{id:4,name:"Evelyn",role:"Computer Science Student at Northwestern University",location:"Evanston",skills:["React","JavaScript","Databases","Firebase"],pic:"https://thefader-res.cloudinary.com/private_images/c_limit,w_1024/c_crop,h_600,w_1019,x_5,y_91,f_auto,q_auto:eco/Taylor-Swift-_-Valheria-Rocha-1050x700_uulkcd/Taylor-Swift-_-Valheria-Rocha-1050x700_uulkcd.jpg",Bio:"Senior CS Major @ NU. Well versed in React/Firebase - looking for a demanding role to apply these skills"},{id:5,name:"Linus",role:"Computer Science Student at Northwestern University",location:"Evanston",skills:["Java","Python","Databases"],pic:"https://cdn.nba.com/manage/2020/10/lebron-james-lakers-687x588.jpg",Bio:"2nd year CS student @ NU. Primarily interested in front-end development."},{id:6,name:"Tiger",role:"Computer Science Student at Northwestern University",location:"Evanston",skills:["Java","JavaScript","Python","ML","Databases"],pic:"https://upload.wikimedia.org/wikipedia/commons/f/f6/Andrew_Yang_by_Gage_Skidmore.jpg",Bio:"Senior CS major @ NU. Open to any type of role: frontend, backend, full-stack, ML/AI, etc."}],k=n(217),C={keys:["location","skills"]},w=f.a.create({container:{flex:1,justifyContent:"center",paddingTop:20,backgroundColor:"#D7EAF9"},bannerStyle:{alignItems:"center",color:"white",backgroundColor:"#cc0000ff",fontSize:28}}),j=function(e){var t,n=e.navigation,r=Object(a.useState)(""),i=s()(r,2),l=i[0],c=i[1],f=Object(a.useState)(x),p=s()(f,2),g=p[0],h=(p[1],Object(a.useState)(g)),b=s()(h,2),v=b[0],y=b[1],S=(t=g,new k.a(t,C));return o.a.createElement(m.a,{style:w.container},o.a.createElement(d.a,{placeholder:"Search for skills/location...",onChangeText:function(e){c(e),y(""===e?g:S.search(e).map((function(e){return e.item})))},value:l,lightTheme:!0}),o.a.createElement(E,{developers:v,view:function(e){n.navigate("DeveloperProfileScreen",{developer:e})}}),o.a.createElement(u.a,{style:"auto",hidden:"false",barStyle:"dark-content"}))},O=f.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},userContainer:{flex:1,alignItems:"center"},h1_text:{fontSize:48,marginBottom:25},h3_text:{fontSize:24,textAlign:"center",marginBottom:20},h4_text:{fontSize:16,textAlign:"center",marginBottom:15}}),B=function(e){e.navigation;return o.a.createElement(v.a,{style:O.container},o.a.createElement(p.a,{h1:!0,style:O.h1_text},"NonProfDev"),o.a.createElement(p.a,{h3:!0,style:O.h3_text},"A simple, intuitive platform to connect non-profit organizations with passionate web developers"),o.a.createElement(p.a,{h3:!0,style:O.h3_text},"Created by the CS 394 Red Team"),o.a.createElement(p.a,{h4:!0,style:O.h4_text},"Benjamin Nober, Chris Song, Jacob Wat, Linus Okoth, Mason Brachmann, Tiger Nie, Zaddeen Benaissa"),o.a.createElement(u.a,{style:"auto"}))},P=function(e){var t=e.label,n=e.value;return o.a.createElement(v.a,{style:_.fieldContainer},o.a.createElement(p.a,{style:_.label},t),o.a.createElement(p.a,{style:_.field},n))},_=f.a.create({container:{flex:1,marginTop:10,marginLeft:"auto",marginRight:"auto",width:"90%"},field:{padding:5,backgroundColor:"white",borderRadius:5,fontSize:18},fieldContainer:{marginTop:10,marginBottom:20},label:{fontWeight:"bold"},developerName:{fontSize:24,marginBottom:10,marginLeft:"auto",marginRight:"auto"},developerImage:{width:200,height:300,marginLeft:"auto",marginRight:"auto",marginBottom:10},connectButton:{margin:30,padding:10,textAlign:"center",backgroundColor:"lightblue"},connectText:{fontSize:22,marginLeft:"auto",marginRight:"auto"}}),D=function(e){var t=e.route,n=e.navigation,a=t.params.developer;return o.a.createElement(m.a,{style:_.container},o.a.createElement(h.a,{style:_.developerImage,source:{uri:a.pic}}),o.a.createElement(p.a,{label:"Name",style:_.developerName}," ",a.name," "),o.a.createElement(r.a,null,o.a.createElement(P,{label:"Location",value:a.location,style:_.developerLocation}),o.a.createElement(P,{label:"Bio",value:a.Bio,style:_.developerBio}),o.a.createElement(P,{label:"Role",value:a.role,style:_.developerRole}),o.a.createElement(P,{label:"Skills",value:a.skills.join(", "),style:_.developerSkills})),o.a.createElement(b.a,{style:_.connectButton,onPress:function(){return function(e){n.navigate("DeveloperContactInfoScreen",{developer:e})}(a)}},o.a.createElement(p.a,{style:_.connectText},"Connect")))},T=n(93),z=f.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},userContainer:{flex:1,alignItems:"center"},h1_text:{fontSize:48,marginBottom:25},h3_text:{fontSize:24,textAlign:"center",marginBottom:20},h4_text:{fontSize:16,textAlign:"center",marginBottom:15},roleButton:{backgroundColor:"white",fontSize:16,color:"pink",margin:15}}),N=function(e){var t=e.navigation;return o.a.createElement(v.a,{style:z.container},o.a.createElement(p.a,{h1:!0,style:z.h1_text},"Welcome to NonProfDev!"),o.a.createElement(p.a,{h3:!0,style:z.h3_text},"A simple, intuitive platform to connect non-profit organizations with passionate developers."),o.a.createElement(p.a,{h3:!0,style:z.h3_text},"Are you a:"),o.a.createElement(v.a,{style:z.roleButton},o.a.createElement(T.a,{title:"Developer",onPress:function(){return t.navigate("DeveloperPreferenceSelectionScreen")}})),o.a.createElement(v.a,{style:z.roleButton},o.a.createElement(T.a,{title:"Non-Profit Organization",onPress:function(){return t.navigate("SearchScreen")}}," ")),o.a.createElement(u.a,{style:"auto"}))},R=n(5),A=n.n(R);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){A()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F={borderRadius:5,margin:10,height:40,minWidth:90,maxWidth:90},M=f.a.create({preferenceButton:I(I({},F),{},{backgroundColor:"#d3d3d3"}),preferenceText:{flex:1,justifyContent:"center",color:"#fff",fontSize:12,textAlign:"center"},preferenceButtonSelected:I(I({},F),{},{backgroundColor:"#004a99"})}),J=function(e){var t=e.select,n=e.buttonText,r=e.isSelected;return o.a.createElement(b.a,{onPress:t,style:M[r?"preferenceButtonSelected":"preferenceButton"]},o.a.createElement(p.a,{style:M.preferenceText},n))};function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var W=f.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},userContainer:{flex:1,alignItems:"center"},h1_text:{fontSize:48,marginBottom:25},h3_text:{fontSize:24,textAlign:"center",marginBottom:20},h4_text:{fontSize:16,textAlign:"center",marginBottom:15},roleButton:{backgroundColor:"white",fontSize:16,color:"pink",margin:15}}),H=function(e){var t=e.navigation,n=Object(a.useState)({pref1:0,pref2:0,pref3:0,pref4:0}),r=s()(n,2),i=r[0],l=r[1],c=function(e,t){var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){A()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},i);n[e]=t,l(n)};return o.a.createElement(v.a,{style:W.container},o.a.createElement(p.a,{h1:!0,style:W.h1_text},"Primary Skillset/Desired Role"),o.a.createElement(J,{select:function(){return c("pref1",0)},buttonText:"Web Design",isSelected:0===i.pref1}," "),o.a.createElement(J,{select:function(){return c("pref1",1)},buttonText:"Web Development",isSelected:1===i.pref1}," "),o.a.createElement(J,{select:function(){return c("pref1",2)},buttonText:"Backend Development",isSelected:2===i.pref1}," "),o.a.createElement(p.a,{h1:!0,style:W.h1_text},"Primary Field of Interest"),o.a.createElement(J,{select:function(){return c("pref2",0)},buttonText:"Community Leadership",isSelected:0===i.pref2}," "),o.a.createElement(J,{select:function(){return c("pref2",1)},buttonText:"Education",isSelected:1===i.pref2}," "),o.a.createElement(J,{select:function(){return c("pref2",2)},buttonText:"Religion",isSelected:2===i.pref2}," "),o.a.createElement(p.a,{h1:!0,style:W.h1_text},"Project Length"),o.a.createElement(J,{select:function(){return c("pref3",0)},buttonText:"One Month or Shorter",isSelected:0===i.pref3}," "),o.a.createElement(J,{select:function(){return c("pref3",1)},buttonText:"1-3 Months (One Quarter)",isSelected:1===i.pref3}," "),o.a.createElement(J,{select:function(){return c("pref3",2)},buttonText:"3+ Months",isSelected:2===i.pref3}," "),o.a.createElement(p.a,{h1:!0,style:W.h1_text},"Weekly Commitment"),o.a.createElement(J,{select:function(){return c("pref4",0)},buttonText:"5 Hours or Fewer",isSelected:0===i.pref4}," "),o.a.createElement(J,{select:function(){return c("pref4",1)},buttonText:"5-10 Hours",isSelected:1===i.pref4}," "),o.a.createElement(J,{select:function(){return c("pref4",2)},buttonText:"10+ Hours",isSelected:2===i.pref4}," "),o.a.createElement(v.a,{style:W.roleButton},o.a.createElement(T.a,{title:"Submit Preferences",onPress:function(){return t.navigate("JobDisplayScreen",{selections:i})}})),o.a.createElement(u.a,{style:"auto"}))},V=function(e){var t=e.label,n=e.value;return o.a.createElement(v.a,{style:G.fieldContainer},o.a.createElement(p.a,{style:G.label},t),o.a.createElement(p.a,{style:G.field},n))},G=f.a.create({container:{flex:1,marginTop:10,marginLeft:"auto",marginRight:"auto",width:"90%"},field:{padding:5,backgroundColor:"white",borderRadius:5,fontSize:18},fieldContainer:{marginTop:10,marginBottom:20},label:{fontWeight:"bold"},developerName:{fontSize:24,marginBottom:10,marginLeft:"auto",marginRight:"auto"},developerImage:{width:200,height:300,marginLeft:"auto",marginRight:"auto",marginBottom:10},connectButton:{margin:30,padding:10,textAlign:"center",backgroundColor:"lightblue"},connectText:{fontSize:22,marginLeft:"auto",marginRight:"auto"}}),q=function(e){var t=e.route,n=(e.navigation,t.params.developer);return o.a.createElement(m.a,{style:G.container},o.a.createElement(p.a,{label:"Name",style:G.developerName},"Contact ",n.name," "),o.a.createElement(r.a,null,o.a.createElement(V,{label:"Messsage",value:n.location,style:G.developerLocation})),o.a.createElement(b.a,{style:G.connectButton},o.a.createElement(p.a,{style:G.connectText},"Send Message")))},Q=Object(i.a)();function Y(){return o.a.createElement(l.a,null,o.a.createElement(Q.Navigator,null,o.a.createElement(Q.Screen,{name:"ChooseAppViewScreen",component:N,options:{title:"About"}}),o.a.createElement(Q.Screen,{name:"DeveloperPreferenceSelectionScreen",component:H,options:{title:"Preference Selection"}}),o.a.createElement(Q.Screen,{name:"SearchScreen",component:j,options:{title:"NonProfDev"}}),o.a.createElement(Q.Screen,{name:"DeveloperProfileScreen",component:D,options:{title:"Developer Profile"}}),o.a.createElement(Q.Screen,{name:"AboutScreen",component:B,options:{title:"About"}}),o.a.createElement(Q.Screen,{name:"DeveloperContactInfoScreen",component:q,options:{title:"Contact Developer"}})))}},231:function(e,t,n){e.exports=n(298)}},[[231,1,2]]]);
//# sourceMappingURL=app.014891ca.chunk.js.map