(this.webpackJsonpvocabulary_repetition_v2=this.webpackJsonpvocabulary_repetition_v2||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),i=n(6),o=n.n(i),s=(n(40),n(41),n(42),n(43),n(44),n(45),n(46),n(16)),l=n(9),u=n(2),d="SET_MODAL_STATUS",p=function(e,t){return{type:d,payload:{modalName:e,newStatus:t}}},j={addEditModal:!1,menuModal:!1,repeatTimesModal:!1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case d:var c=a.modalName;return Object(u.a)(Object(u.a)({},e),{},Object(l.a)({},c,a.newStatus));default:return e}},b="SET_WORDS_LIST",m="SET_SELECTED_WORD",f="SET_AVERAGE_TIMES",g="SET_REPEAT_TIMES",O="ADD_REPRODUCED_TIME",v=function(e){return{type:b,payload:e}},x=function(e){return{type:m,payload:e}},_=function(e){return{type:g,payload:e}},y=function(e){return{type:O,payload:e}},w={words:[],selectedWord:null,studiedAverage:0,repeat_times:null},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case b:return Object(u.a)(Object(u.a)({},e),{},{words:a});case m:return Object(u.a)(Object(u.a)({},e),{},{selectedWord:a});case f:return Object(u.a)(Object(u.a)({},e),{},{studiedAverage:a});case g:return Object(u.a)(Object(u.a)({},e),{},{repeat_times:a});case O:var c=e.words.map((function(e){return e._id===a&&(e.times_played=e.times_played+1),e}));return Object(u.a)(Object(u.a)({},e),{},{words:c});default:return e}},E="SET_LANGUAGE",C=function(e){return{type:E,payload:e}},T={language:null},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case E:return{language:a};default:return e}},k="SET_PLAYING_ID",N="SET_TOTAL_WORDS",R="SET_ESTIMATED_TIME",A="ADD_ITERATION",P="RESET_DATA",W=function(e){return{type:k,payload:e}},D=function(e){return{type:N,payload:e}},I=function(e){return{type:R,payload:e}},L=function(){return{type:A}},U={playing_id:null,estimatedTime:null,totalWords:null,current:0},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case k:return Object(u.a)(Object(u.a)({},e),{},{playing_id:a});case A:return Object(u.a)(Object(u.a)({},e),{},{current:e.current+1});case R:return Object(u.a)(Object(u.a)({},e),{},{estimatedTime:a});case N:return Object(u.a)(Object(u.a)({},e),{},{totalWords:a});case P:return U;default:return e}},F=Object(s.b)({modalsReducer:h,wordsReducer:S,languageReducer:M,playerReducer:V}),G=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),q=Object(s.c)(F,G),B=n(3),H=n(10),J=n(11),X=n(14),K=n(13);n(52);var Y={setModalStatus:p},z=Object(B.b)((function(e){return{language:e.languageReducer.language}}),Y)((function(e){var t=e.language;return Object(a.jsxs)("header",{children:[Object(a.jsxs)("span",{children:[" ",Object(a.jsx)("img",{src:t.img,alt:t.code})," ",t.name]}),Object(a.jsx)("i",{className:"material-icons",onClick:function(){e.setModalStatus("menuModal",!0)},children:"menu"})]})}));n(53);function Q(e){return e>0&&e<100?"bg_blue":e>=100&&e<200?"bg_yellow":e>=200&&e<400?"bg_red":e>=400&&e<500?"bg_red_str":e>=500&&e<550?"bg_purple":e>=550&&e<600?"bg_purple_str":e>=600?"bg_black":"bg_green"}var Z=n(7),$=n.n(Z),ee=function(e){return new Promise((function(t,n){$.a.patch("/api/words/update/"+e+"/counter").then((function(e){return t(e)})).catch((function(e){return n(e)}))}))},te=function(e){return new Promise((function(t,n){(function(e){return new Promise((function(t,n){$.a.get("/api/words/list/active/"+e).then((function(e){return t(e.data)})).catch((function(e){return n(e)}))}))})(e).then((function(e){return q.dispatch(v(e))})).then((function(){return t()})).catch((function(e){return n(e)}))}))},ne=function(e){var t;q.dispatch((t=e.average,{type:f,payload:t})),q.dispatch(_(e.config))},ae=n(17),ce=function(e,t){return new Promise((function(n,a){var c=window.speechSynthesis,r=c.getVoices(),i=new SpeechSynthesisUtterance(e);r.length&&(i.voice=r.filter((function(e){return(ae.isMobile?e.lang:e.voiceURI)===t}))[0],c.speak(i)),i.onend=function(){return n()}}))},re=function(){return window.speechSynthesis},ie=[{name:"English",code:"en",img:"https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",google_id_pc:"Google US English",google_id_mobile:"en-US"},{name:"\u65e5\u672c\u8a9e",code:"jp",img:"https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg",google_id_pc:"Google \u65e5\u672c\u8a9e",google_id_mobile:"jp-JP"},{name:"All",code:"all",img:"https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_the_United_Nations.svg"}],oe=function(e){return ie.filter((function(t){return e===t.code}))[0][ae.isMobile?"google_id_mobile":"google_id_pc"]},se=function(){return ae.isMobile?"es-US":"Google espa\xf1ol de Estados Unidos"},le=n(15),ue=n.n(le),de=n(34),pe=n(33),je={canPlay:!0,play:function(){var e=Object(pe.a)(ue.a.mark((function e(t){var n,a,c,r,i=this,o=arguments;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=o.length>1&&void 0!==o[1]?o[1]:1,Array.isArray(t)){e.next=3;break}return e.abrupt("return",!1);case 3:this.canPlay=!0,a=[],t.map((function(e){return a.push.apply(a,Object(de.a)(new Array(n).fill(e)))})),q.dispatch(D(a.length)),be.showPlayer(),c=ue.a.mark((function e(t){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.canPlay){e.next=4;break}return me.hidde(),i.resetPlayer(),e.abrupt("return","break");case 4:return q.dispatch(W(a[t]._id)),q.dispatch(L()),q.dispatch(y(a[t]._id)),e.next=9,ee(a[t]._id);case 9:return e.next=11,new Promise((function(e){var n=performance.now();ce(a[t].word,oe(a[t].language)).then((function(){return ce(a[t].meaning,se())})).then((function(){var c=performance.now(),r=(a.length-t)*(c-n);return q.dispatch(I(he.millisToMinutesAndSeconds(r))),e()}))}));case 11:Number(t)+1===a.length&&i.resetPlayer();case 12:case"end":return e.stop()}}),e)})),e.t0=ue.a.keys(a);case 10:if((e.t1=e.t0()).done){e.next=18;break}return r=e.t1.value,e.delegateYield(c(r),"t2",13);case 13:if("break"!==e.t2){e.next=16;break}return e.abrupt("break",18);case 16:e.next=10;break;case 18:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),stop:function(){this.canPlay=!1},resetPlayer:function(){be.hiddePlayer(),q.dispatch({type:P})}},he={millisToMinutesAndSeconds:function(e){var t=Math.floor(e/6e4),n=(e%6e4/1e3).toFixed(0);return t+":"+(n<10?"0":"")+n}},be={showPlayer:function(){document.getElementById("player").style.display="block"},hiddePlayer:function(){var e=document.getElementById("player");e.style.animationName="fadeOutDown",setTimeout((function(){e.style.display="none",e.style.animationName="fadeInUp"}),180)}},me={element:document.getElementById("ipl-progress-indicator"),hidde:function(){var e=this;this.element&&setTimeout((function(){e.element.classList.add("available")}),100)},show:function(){this.element&&this.element.classList.remove("available")}};var fe=Object(B.b)((function(e){return{playerReducer:e.playerReducer}}),{})((function(e){var t=e.playerReducer,n=t.totalWords,c=t.current,r=t.estimatedTime;return Object(a.jsx)("div",{className:"playing-bar",id:"player",children:Object(a.jsxs)("div",{className:"playing-bar-content",children:[Object(a.jsxs)("span",{children:["Listening ",c,"/",n]}),Object(a.jsxs)("div",{className:"right-container",children:[Object(a.jsxs)("span",{children:["ET: ",null!=r?r+"min.":"calculing..."]}),Object(a.jsx)("i",{className:"material-icons",onClick:function(){me.show(),je.stop()},children:"stop"})]})]})})}));n(73);function ge(){return Object(a.jsxs)("em",{className:"playing-tooltip",children:[Object(a.jsx)("i",{className:"material-icons",children:"play_arrow"}),"Playing"]})}n(74);var Oe={setSelectedWord:x},ve=Object(B.b)((function(e){return{playerReducer:e.playerReducer}}),Oe)((function(e){var t=e.data,n=t._id,c=t.word,r=t.meaning,i=t.times_played,o=i-e.average,s=e.playerReducer.playing_id;return Object(a.jsx)("div",{className:"card-container",onClick:function(){e.setSelectedWord(e.data)},children:Object(a.jsx)("div",{className:"word-item-container",children:Object(a.jsxs)("div",{className:"word-container",children:[Object(a.jsxs)("div",{className:"inline-container",children:[Object(a.jsx)("h3",{children:c}),s===n?Object(a.jsx)(ge,{}):Object(a.jsxs)("h5",{children:[i,"t."]})]}),Object(a.jsxs)("div",{className:"inline-container mt2",children:[Object(a.jsx)("h4",{children:r}),Object(a.jsxs)("span",{className:Q(i),children:[1===Math.sign(o)?"+":null,o]})]})]})})})}));var xe=Object(B.b)((function(e){return{words:e.wordsReducer.words,average:e.wordsReducer.studiedAverage}}))((function(e){var t=e.words,n=e.average;return Object(a.jsx)("div",{className:"main_content",children:t.map((function(e){return Object(a.jsx)(ve,{data:e,average:n},e._id)}))})})),_e=n(12);n(75);function ye(e){var t=e.icon,n=e.text,c=e.onClickEvent,r=e.customClass;return Object(a.jsxs)("span",{className:"menuItem",onClick:c,children:[Object(a.jsx)("i",{className:"material-icons "+r,children:t}),Object(a.jsx)("span",{children:n})]})}var we={setModalStatus:p,setLanguage:C,setWordsList:v},Se=Object(B.b)((function(e){return{isModalOpen:e.modalsReducer.menuModal,language:e.languageReducer.language,words:e.wordsReducer}}),we)((function(e){function t(){e.setModalStatus("menuModal",!1)}var n=e.isModalOpen,c=e.language;return Object(a.jsx)(_e.a,{isOpen:n,requestClose:t,position:{alignItems:"flex-start",justifyContent:"flex-end"},classes:{contentClassName:"menu-modal-container"},children:Object(a.jsxs)("div",{className:"menu-modal",children:["all"===c.code?null:Object(a.jsx)(ye,{icon:"add",text:"Create",onClickEvent:function(){t(),e.setModalStatus("addEditModal",!0)}}),Object(a.jsx)(ye,{icon:"play_arrow",text:"Study",onClickEvent:function(){re(),me.show(),t(),setTimeout((function(){me.hidde(),je.play(e.words.words,e.words.repeat_times.repeat_times)}),1300)}}),Object(a.jsx)(ye,{icon:"update",text:"Change times",customClass:"smallest",onClickEvent:function(){t(),e.setModalStatus("repeatTimesModal",!0)}}),Object(a.jsx)(ye,{icon:"public",text:"Switch Language",customClass:"smallest",onClickEvent:function(){t(),e.setWordsList([]),e.setLanguage(null)}})]})})}));n(76);function Ee(e){var t=e.text,n=e.icon,c=e.bg_color;return Object(a.jsxs)("div",{className:"modal-tag-item "+c,children:[Object(a.jsx)("i",{className:"material-icons",children:n}),Object(a.jsx)("span",{children:t})]})}n(77);function Ce(e){var t=e.tagClass,n=e.icon,c=e.text,r=e.onClickEvent;return Object(a.jsxs)("span",{className:"modal-btn "+t,onClick:r,children:[Object(a.jsx)("i",{className:"material-icons",children:n}),c]})}var Te=n(18),Me=n.n(Te),ke=n(4);var Ne={setSelectedWord:x,setModalStatus:p},Re=Object(B.b)((function(e){return{word:e.wordsReducer.selectedWord,language:e.languageReducer.language}}),Ne)((function(e){var t=!0;function n(t){!0===window.confirm("Are you sure? Delete a word is irreversible")&&function(e){return new Promise((function(t,n){$.a.delete("/api/words/delete/"+e).then((function(e){return t(e)})).catch((function(e){return n(e)}))}))}(t).then((function(t){return te(e.language.code)})).then((function(){return e.setSelectedWord(null)})).catch((function(e){return ke.b.error(e)}))}function c(t){(function(e){return new Promise((function(t,n){$.a.put("/api/words/setLearned/"+e).then((function(e){return t(e)})).catch((function(e){return n(e)}))}))})(t).then((function(){return te(e.language.code)})).then((function(){return e.setSelectedWord(null)})).catch((function(e){return ke.b.error(e)}))}var r=e.word,i=Me()(null===r||void 0===r?void 0:r.created),o=Me.a.utc().format(),s=i.diff(o,"days");return Object(a.jsx)(_e.a,{isOpen:r,requestClose:function(){e.setSelectedWord(null)},classes:{contentClassName:r?"app-modal":"app-modal app-modal-p0"},children:r?Object(a.jsxs)("div",{className:"info-modal",children:[Object(a.jsxs)("div",{className:"word-container",children:[Object(a.jsx)("h3",{children:null===r||void 0===r?void 0:r.word}),Object(a.jsx)("h4",{children:null===r||void 0===r?void 0:r.meaning})]}),Object(a.jsxs)("div",{className:"tag-container",children:[Object(a.jsx)(Ee,{text:"Listened "+(null===r||void 0===r?void 0:r.times_played)+(1===(null===r||void 0===r?void 0:r.times_played)?" time":" times"),icon:"access_time",bg_color:Q(null===r||void 0===r?void 0:r.times_played)}),Object(a.jsx)(Ee,{text:0===s?"Created today":"Created "+s.toString().replace(/\-/g,"")+" days ago",icon:"history",bg_color:"bg_gray"})]}),Object(a.jsxs)("div",{className:"actions",children:[Object(a.jsx)(Ce,{tagClass:"btn_bc_red",icon:"delete",text:"DELETE",onClickEvent:function(){return n(r._id)}}),Object(a.jsx)(Ce,{tagClass:"btn_bc_yellow",icon:"edit",text:"EDIT",onClickEvent:function(){return r._id,void e.setModalStatus("addEditModal",!0)}}),Object(a.jsx)(Ce,{tagClass:"btn_bc_blue",icon:"record_voice_over",text:"PLAY",onClickEvent:function(){return function(e){me.show(),re(),setTimeout((function(){t=!1,me.hidde(),je.play([e])}),t?600:200)}(r)}}),Object(a.jsx)(Ce,{tagClass:"btn_bc_green",icon:"save",text:"STORE",onClickEvent:function(){return c(r._id)}})]})]}):Object(a.jsx)(a.Fragment,{})})})),Ae=function(e){Object(X.a)(n,e);var t=Object(K.a)(n);function n(e){var a;return Object(H.a)(this,n),(a=t.call(this,e)).closeAndResetState=function(){a.props.setModalStatus("addEditModal",!1),a.setState(a.initialState)},a.handleKeyDown=function(e){"Enter"!==e.key&&"Return"!==e.key||a.addEditWord()},a.handleChange=function(e){var t=e.target,n=t.name,c=t.value;a.setState(Object(l.a)({},n,c)),"word"===n&&c&&function(e){return new Promise((function(t,n){$.a.get("/api/words/match/"+e).then((function(e){return t(e)})).catch((function(e){return n(e)}))}))}(c).then((function(e){return a.setState({wordsMatched:e.data})})).catch((function(e){return ke.b.error(e)}))},a.addEditWord=function(){var e=a.state,t=e._id,n=e.word,c=e.meaning,r=e.wordsMatched;return""===n||0===r.length&&""===c?ke.b.warn("All fields required"):t?a.editWordHandler():void a.addWordHandler()},a.addWordHandler=function(){var e,t=a.state;t.created=Me()().utc().format(),t.language=a.props.language.code,function(e){return new Promise((function(t,n){$.a.post("/api/words/create",e).then((function(e){return t(e.status)})).catch((function(e){return n(e)}))}))}(t).then((function(t){return e=t,te(a.props.language.code)})).then((function(){var t=201===e?"Created successfully":200===e?"Moved to active":"";document.getElementById("word_input").focus(),a.setState(a.initialState),ke.b.success(t)})).catch((function(e){return ke.b.error(e)}))},a.editWordHandler=function(){var e;(e=a.state,new Promise((function(t,n){$.a.put("/api/words/update/"+e._id,e).then((function(e){return t(e)})).catch((function(e){return n(e)}))}))).then((function(){return te(a.props.language.code)})).then((function(){a.props.setSelectedWord(a.state),a.closeAndResetState()})).catch((function(e){return ke.b.error(e)}))},a.initialState={_id:null,word:"",meaning:"",created:null,location:"ACTIVE",language:null,times_played:0,wordsMatched:[]},a.state=a.initialState,a}return Object(J.a)(n,[{key:"componentWillReceiveProps",value:function(e){var t=e.word;if(!t)return this.setState(this.initialState);this.setState(t)}},{key:"render",value:function(){var e=this.props.isModalOpen,t=this.state,n=t._id,c=t.word,r=t.meaning,i=t.wordsMatched;return Object(a.jsx)(_e.a,{isOpen:e,requestClose:this.closeAndResetState,classes:{contentClassName:"app-modal"},children:Object(a.jsxs)("div",{className:"add-modal",children:[Object(a.jsxs)("div",{className:"word-container",children:[Object(a.jsx)("input",{id:"word_input",autoComplete:"off",className:"japanese",type:"text",placeholder:"Word",lang:"jp",value:c,name:"word",onChange:this.handleChange}),Object(a.jsx)("input",{disabled:i.length>0,autoComplete:"off",type:"text",placeholder:"Meaning",lang:"es",value:r,name:"meaning",onChange:this.handleChange,onKeyDown:this.handleKeyDown})]}),Object(a.jsx)("div",{className:"match-area",children:i.map((function(e){return Object(a.jsxs)("span",{children:[e.word,": ",Object(a.jsx)("em",{children:e.meaning})]},e._id)}))}),Object(a.jsxs)("div",{className:"actions",children:[Object(a.jsx)(Ce,{tagClass:"btn_bc_blue",icon:"close",text:"CLOSE",onClickEvent:this.closeAndResetState}),Object(a.jsx)(Ce,{tagClass:"btn_bc_green",icon:n?"save":"backup",text:n?"SAVE":0===i.length?"ADD":"SET ACTIVE",onClickEvent:this.addEditWord})]})]})})}}]),n}(c.Component),Pe={setModalStatus:p,setSelectedWord:x},We=Object(B.b)((function(e){return{isModalOpen:e.modalsReducer.addEditModal,word:e.wordsReducer.selectedWord,language:e.languageReducer.language}}),Pe)(Ae),De=function(e){Object(X.a)(n,e);var t=Object(K.a)(n);function n(e){var a;return Object(H.a)(this,n),(a=t.call(this,e)).closeModal=function(){a.props.setModalStatus("repeatTimesModal",!1)},a.onChange=function(e){var t=e.target,n=t.name,c=t.value;a.setState(Object(l.a)({},n,c))},a.updateTimes=function(){var e=a.state,t=e.times,n=e.id;if(!(t=parseInt(t)))return ke.b.warn("Not a number");(function(e,t){return new Promise((function(n,a){$.a.post("/api/config/update/"+e,{times:t}).then((function(e){return n(e.data)})).catch((function(e){return a(e)}))}))})(n,t).then((function(e){a.props.setRepeatTimes(e),a.closeModal(),ke.b.success("Updated")})).catch((function(e){return ke.b.error(e)}))},a.state={id:null,times:null},a}return Object(J.a)(n,[{key:"componentWillReceiveProps",value:function(e){var t=e.timesToRepeat;this.setState({id:t._id,times:String(t.repeat_times)})}},{key:"render",value:function(){var e=this.props.isModalOpen;return Object(a.jsx)(_e.a,{isOpen:e,requestClose:this.closeModal,classes:{contentClassName:"app-modal"},children:Object(a.jsxs)("div",{className:"config-modal",children:[Object(a.jsx)("h2",{children:"Enter how many times do you want to play each word"}),Object(a.jsx)("input",{name:"times",type:"text",value:this.state.times||"",onChange:this.onChange}),Object(a.jsxs)("div",{className:"actions",children:[Object(a.jsx)(Ce,{tagClass:"btn_bc_blue",icon:"close",text:"CLOSE",onClickEvent:this.closeModal}),Object(a.jsx)(Ce,{tagClass:"btn_bc_green",icon:"save",text:"SAVE",onClickEvent:this.updateTimes})]})]})})}}]),n}(c.Component),Ie={setModalStatus:p,setRepeatTimes:_},Le=Object(B.b)((function(e){return{isModalOpen:e.modalsReducer.repeatTimesModal,timesToRepeat:e.wordsReducer.repeat_times}}),Ie)(De);function Ue(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Se,{}),Object(a.jsx)(Re,{}),Object(a.jsx)(We,{}),Object(a.jsx)(Le,{})]})}var Ve=function(e){Object(X.a)(n,e);var t=Object(K.a)(n);function n(){return Object(H.a)(this,n),t.apply(this,arguments)}return Object(J.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(z,{}),Object(a.jsx)(xe,{}),Object(a.jsx)(Ue,{}),Object(a.jsx)("footer",{children:Object(a.jsx)(fe,{})})]})}}]),n}(c.Component);n(79);function Fe(e){var t=e.data,n=e.onClickEvent;return Object(a.jsxs)("div",{className:"language-item",onClick:n,children:[Object(a.jsx)("img",{src:t.img,alt:t.code}),Object(a.jsx)("h1",{children:t.name})]})}n(80);var Ge={setLanguage:C},qe=Object(B.b)(null,Ge)((function(e){function t(t){var n;(n=t.code,new Promise((function(e,t){$.a.get("/api/config/load/"+n).then((function(t){return e(t.data)})).catch((function(e){return t(e)}))}))).then((function(n){return ne(n),e.setLanguage(t),te(t.code)})).catch((function(e){return ke.b.error(e)}))}return Object(a.jsx)("div",{className:"welcomeScreen",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h2",{children:"Select a language"}),Object(a.jsx)("div",{className:"language-list",children:ie.map((function(e){return Object(a.jsx)(Fe,{data:e,onClickEvent:function(){return t(e)}},e.code)}))})]})})})),Be=function(e){Object(X.a)(n,e);var t=Object(K.a)(n);function n(){return Object(H.a)(this,n),t.apply(this,arguments)}return Object(J.a)(n,[{key:"componentDidMount",value:function(){me.hidde(),setTimeout((function(){console.log(window.speechSynthesis)}),1e3),setTimeout((function(){console.log(window.speechSynthesis.getVoices())}),2e3)}},{key:"render",value:function(){return this.props.language?Object(a.jsx)(Ve,{}):Object(a.jsx)(qe,{})}}]),n}(c.Component),He=Object(B.b)((function(e){return{language:e.languageReducer.language}}))(Be);n(81);var Je=function(){return Object(a.jsxs)(B.a,{store:q,children:[Object(a.jsx)(He,{}),Object(a.jsx)(ke.a,{autoClose:3e3,position:"bottom-right",pauseOnHover:!1,pauseOnFocusLoss:!1})]})};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(Je,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.9dfee280.chunk.js.map