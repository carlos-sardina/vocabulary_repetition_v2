(this.webpackJsonpvocabulary_repetition_v2=this.webpackJsonpvocabulary_repetition_v2||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},79:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),i=n.n(r),c=n(6),o=n.n(c),s=(n(40),n(41),n(42),n(43),n(44),n(45),n(46),n(16)),l=n(9),d=n(2),u="SET_MODAL_STATUS",m=function(e,t){return{type:u,payload:{modalName:e,newStatus:t}}},h={addEditModal:!1,menuModal:!1,repeatTimesModal:!1},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case u:var r=a.modalName;return Object(d.a)(Object(d.a)({},e),{},Object(l.a)({},r,a.newStatus));default:return e}},j="SET_WORDS_LIST",f="SET_SELECTED_WORD",b="SET_AVERAGE_TIMES",g="SET_REPEAT_TIMES",v="ADD_REPRODUCED_TIME",O=function(e){return{type:j,payload:e}},_=function(e){return{type:f,payload:e}},y=function(e){return{type:g,payload:e}},x=function(e){return{type:v,payload:e}},w={words:[],selectedWord:null,studiedAverage:0,repeat_times:null},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case j:return Object(d.a)(Object(d.a)({},e),{},{words:a});case f:return Object(d.a)(Object(d.a)({},e),{},{selectedWord:a});case b:return Object(d.a)(Object(d.a)({},e),{},{studiedAverage:a});case g:return Object(d.a)(Object(d.a)({},e),{},{repeat_times:a});case v:var r=e.words.map((function(e){return e._id===a&&(e.times_played=e.times_played+1),e}));return Object(d.a)(Object(d.a)({},e),{},{words:r});default:return e}},S="SET_PLAYING_ID",C="SET_TOTAL_WORDS",M="SET_ESTIMATED_TIME",T="ADD_ITERATION",N="RESET_DATA",k=function(e){return{type:S,payload:e}},R=function(e){return{type:C,payload:e}},A=function(e){return{type:M,payload:e}},D=function(){return{type:T}},P={playing_id:null,estimatedTime:null,totalWords:null,current:0},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case S:return Object(d.a)(Object(d.a)({},e),{},{playing_id:a});case T:return Object(d.a)(Object(d.a)({},e),{},{current:e.current+1});case M:return Object(d.a)(Object(d.a)({},e),{},{estimatedTime:a});case C:return Object(d.a)(Object(d.a)({},e),{},{totalWords:a});case N:return P;default:return e}},W="SET_LOADER_STATUS",L=function(e){return{type:W,payload:e}},U={isModalVisible:!0},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case W:return{isModalVisible:a};default:return e}},F=Object(s.b)({modalsReducer:p,wordsReducer:E,playerReducer:I,domLoader:V}),K=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),B=Object(s.c)(F,K),G=n(3),q=n(11),H=n(12),J=n(14),X=n(13);n(52);var Y={setModalStatus:m},z=Object(G.b)(null,Y)((function(e){return Object(a.jsxs)("header",{children:[Object(a.jsxs)("span",{children:[" ",Object(a.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_the_United_Nations.svg",alt:"all"}),"Words list"]}),Object(a.jsx)("i",{className:"material-icons",onClick:function(){e.setModalStatus("menuModal",!0)},children:"menu"})]})}));n(53);function Q(e){return e>0&&e<100?"bg_blue":e>=100&&e<200?"bg_yellow":e>=200&&e<400?"bg_red":e>=400&&e<500?"bg_red_str":e>=500&&e<550?"bg_purple":e>=550&&e<600?"bg_purple_str":e>=600?"bg_black":"bg_green"}var Z=n(7),$=n.n(Z),ee=function(e){return new Promise((function(t,n){if(!Array.isArray(e))return n("Not an array");$.a.post("/api/words/setLearned",{words:e}).then((function(e){return t(e)})).catch((function(e){return n(e)}))}))},te=function(e){return new Promise((function(t,n){$.a.patch("/api/words/update/"+e+"/counter").then((function(e){return t(e)})).catch((function(e){return n(e)}))}))},ne=function(){return new Promise((function(e,t){var n;new Promise((function(e,t){$.a.get("/api/words/list/active/"+n).then((function(t){return e(t.data)})).catch((function(e){return t(e)}))})).then((function(e){return B.dispatch(O(e))})).then((function(){return e()})).catch((function(e){return t(e)}))}))},ae=function(e){var t;B.dispatch((t=e.average,{type:b,payload:t})),B.dispatch(y(e.config))},re=function(e,t){return new Promise((function(n,a){var r=window.speechSynthesis,i=r.getVoices(),c=setInterval((function(){if(i.length){clearInterval(c),fe.hidde();var a=new SpeechSynthesisUtterance(e),o=i.filter((function(e){return e.voiceURI===t}))[0];a.voice=o,a.lang=o.lang,r.speak(a),a.onend=function(){return n()}}else i=r.getVoices()}),200)}))},ie=[{name:"English GB",code:"en",img:"https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",google_id_pc:"Google UK English Female",google_id_mobile:"ingl\xe9s Reino Unido"},{name:"\u65e5\u672c\u8a9e",code:"jp",img:"https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg",google_id_pc:"Google \u65e5\u672c\u8a9e",google_id_mobile:"japon\xe9s Jap\xf3n"}],ce=n(23),oe=function(e){return ie.filter((function(t){return e===t.code}))[0][ce.isMobile?"google_id_mobile":"google_id_pc"]},se=function(){return ce.isMobile?"espa\xf1ol Estados Unidos":"Google espa\xf1ol de Estados Unidos"},le=n(15),de=n.n(le),ue=n(34),me=n(33),he={canPlay:!0,play:function(){var e=Object(me.a)(de.a.mark((function e(t){var n,a,r,i,c=this,o=arguments;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=o.length>1&&void 0!==o[1]?o[1]:1,Array.isArray(t)){e.next=3;break}return e.abrupt("return",!1);case 3:this.canPlay=!0,a=[],t.map((function(e){return a.push.apply(a,Object(ue.a)(new Array(n).fill(e)))})),B.dispatch(R(a.length)),je.showPlayer(),r=de.a.mark((function e(t){return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.canPlay){e.next=4;break}return fe.hidde(),c.resetPlayer(),e.abrupt("return","break");case 4:return B.dispatch(k(a[t]._id)),B.dispatch(D()),B.dispatch(x(a[t]._id)),e.next=9,te(a[t]._id);case 9:return e.next=11,new Promise((function(e){var n=performance.now();re(a[t].word,oe(a[t].language)).then((function(){return re(a[t].meaning,se())})).then((function(){var r=performance.now(),i=(a.length-t)*(r-n);return B.dispatch(A(pe.millisToMinutesAndSeconds(i))),e()}))}));case 11:Number(t)+1===a.length&&c.resetPlayer();case 12:case"end":return e.stop()}}),e)})),e.t0=de.a.keys(a);case 10:if((e.t1=e.t0()).done){e.next=18;break}return i=e.t1.value,e.delegateYield(r(i),"t2",13);case 13:if("break"!==e.t2){e.next=16;break}return e.abrupt("break",18);case 16:e.next=10;break;case 18:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),stop:function(){this.canPlay=!1},resetPlayer:function(){je.hiddePlayer(),B.dispatch({type:N})}},pe={millisToMinutesAndSeconds:function(e){var t=Math.floor(e/6e4),n=(e%6e4/1e3).toFixed(0);return t+":"+(n<10?"0":"")+n}},je={showPlayer:function(){document.getElementById("player").style.display="block"},hiddePlayer:function(){var e=document.getElementById("player");e.style.animationName="fadeOutDown",setTimeout((function(){e.style.display="none",e.style.animationName="fadeInUp"}),180)}},fe={element:document.getElementById("ipl-progress-indicator"),hidde:function(){var e=this;this.element&&setTimeout((function(){e.element.classList.add("available"),B.dispatch(L(!1))}),100)},show:function(){this.element&&(this.element.classList.remove("available"),B.dispatch(L(!0)))}};var be=Object(G.b)((function(e){return{playerReducer:e.playerReducer}}),{})((function(e){var t=e.playerReducer,n=t.totalWords,r=t.current,i=t.estimatedTime;return Object(a.jsx)("div",{className:"playing-bar",id:"player",children:Object(a.jsxs)("div",{className:"playing-bar-content",children:[Object(a.jsxs)("span",{children:["Listening ",r,"/",n]}),Object(a.jsxs)("div",{className:"right-container",children:[Object(a.jsxs)("span",{children:["ET: ",null!=i?i+"min.":"calculing..."]}),Object(a.jsx)("i",{className:"material-icons",onClick:function(){fe.show(),he.stop()},children:"stop"})]})]})})}));n(73);function ge(){return Object(a.jsxs)("em",{className:"playing-tooltip",children:[Object(a.jsx)("i",{className:"material-icons",children:"play_arrow"}),"Playing"]})}n(74);var ve={setSelectedWord:_},Oe=Object(G.b)((function(e){return{playerReducer:e.playerReducer}}),ve)((function(e){var t=e.data,n=t._id,r=t.word,i=t.meaning,c=t.times_played,o=t.language,s=c-e.average,l=e.playerReducer.playing_id,d=ie.find((function(e){return e.code===o})).img;return Object(a.jsx)("div",{className:"card-container",onClick:function(){e.setSelectedWord(e.data)},children:Object(a.jsx)("div",{className:"word-item-container",children:Object(a.jsxs)("div",{className:"word-container",children:[Object(a.jsxs)("div",{className:"inline-container",children:[Object(a.jsx)("h3",{children:r}),l===n?Object(a.jsx)(ge,{}):Object(a.jsxs)("h5",{children:[c,"t."]})]}),Object(a.jsxs)("div",{className:"inline-container mt2",children:[Object(a.jsx)("h4",{children:i}),Object(a.jsxs)("div",{className:"flag-avg-container",children:[Object(a.jsx)("img",{src:d,alt:"lang flag"}),Object(a.jsxs)("span",{className:Q(c),children:[1===Math.sign(s)?"+":null,s]})]})]})]})})})}));var _e=Object(G.b)((function(e){return{words:e.wordsReducer.words,average:e.wordsReducer.studiedAverage}}))((function(e){var t=e.words,n=e.average;return Object(a.jsx)("div",{className:"main_content",children:t.map((function(e){return Object(a.jsx)(Oe,{data:e,average:n},e._id)}))})})),ye=n(10);n(75);function xe(e){var t=e.icon,n=e.text,r=e.onClickEvent,i=e.customClass;return Object(a.jsxs)("span",{className:"menuItem",onClick:r,children:[Object(a.jsx)("i",{className:"material-icons "+i,children:t}),Object(a.jsx)("span",{children:n})]})}var we=n(4);var Ee={setModalStatus:m,setWordsList:O},Se=Object(G.b)((function(e){return{isModalOpen:e.modalsReducer.menuModal,words:e.wordsReducer}}),Ee)((function(e){function t(){e.setModalStatus("menuModal",!1)}var n=e.isModalOpen;return Object(a.jsx)(ye.a,{isOpen:n,requestClose:t,position:{alignItems:"flex-start",justifyContent:"flex-end"},classes:{contentClassName:"menu-modal-container"},children:Object(a.jsxs)("div",{className:"menu-modal",children:[Object(a.jsx)(xe,{icon:"add",text:"Create",onClickEvent:function(){t(),e.setModalStatus("addEditModal",!0)}}),Object(a.jsx)(xe,{icon:"bookmark",text:"All to learned",customClass:"smallest",onClickEvent:function(){var n,a;!0===window.confirm("Are you sure?")&&(fe.show(),ee((null===(n=e.words)||void 0===n||null===(a=n.words)||void 0===a?void 0:a.map((function(e){return e._id})))||[]).then((function(){return ne()})).then((function(){t(),fe.hidde(),we.b.info("Moved to learned")})))}}),Object(a.jsx)(xe,{icon:"play_arrow",text:"Study",onClickEvent:function(){fe.show(),t(),he.play(e.words.words,e.words.repeat_times.repeat_times)}}),Object(a.jsx)(xe,{icon:"update",text:"Change times",customClass:"smallest",onClickEvent:function(){t(),e.setModalStatus("repeatTimesModal",!0)}})]})})}));n(76);function Ce(e){var t=e.text,n=e.icon,r=e.bg_color;return Object(a.jsxs)("div",{className:"modal-tag-item "+r,children:[Object(a.jsx)("i",{className:"material-icons",children:n}),Object(a.jsx)("span",{children:t})]})}n(77);function Me(e){var t=e.tagClass,n=e.icon,r=e.text,i=e.onClickEvent;return Object(a.jsxs)("span",{className:"modal-btn "+t,onClick:i,children:[Object(a.jsx)("i",{className:"material-icons",children:n}),r]})}var Te=n(17),Ne=n.n(Te);var ke={setSelectedWord:_,setModalStatus:m},Re=Object(G.b)((function(e){return{word:e.wordsReducer.selectedWord}}),ke)((function(e){function t(t){!0===window.confirm("Are you sure? Delete a word is irreversible")&&function(e){return new Promise((function(t,n){$.a.delete("/api/words/delete/"+e).then((function(e){return t(e)})).catch((function(e){return n(e)}))}))}(t).then((function(e){return ne()})).then((function(){return e.setSelectedWord(null)})).catch((function(e){return we.b.error(e)}))}var n=e.word,r=Ne()(null===n||void 0===n?void 0:n.created),i=Ne.a.utc().format(),c=r.diff(i,"days");return Object(a.jsx)(ye.a,{isOpen:n,requestClose:function(){e.setSelectedWord(null)},classes:{contentClassName:n?"app-modal":"app-modal app-modal-p0"},children:n?Object(a.jsxs)("div",{className:"info-modal",children:[Object(a.jsxs)("div",{className:"word-container",children:[Object(a.jsx)("h3",{children:null===n||void 0===n?void 0:n.word}),Object(a.jsx)("h4",{children:null===n||void 0===n?void 0:n.meaning})]}),Object(a.jsxs)("div",{className:"tag-container",children:[Object(a.jsx)(Ce,{text:"Listened "+(null===n||void 0===n?void 0:n.times_played)+(1===(null===n||void 0===n?void 0:n.times_played)?" time":" times"),icon:"access_time",bg_color:Q(null===n||void 0===n?void 0:n.times_played)}),Object(a.jsx)(Ce,{text:0===c?"Created today":"Created "+c.toString().replace(/\-/g,"")+" days ago",icon:"history",bg_color:"bg_gray"}),Object(a.jsx)(Ce,{text:ie.find((function(e){return e.code===n.language})).name,icon:"public",bg_color:"bg_purple"})]}),Object(a.jsxs)("div",{className:"actions",children:[Object(a.jsx)(Me,{tagClass:"btn_bc_red",icon:"delete",text:"DELETE",onClickEvent:function(){return t(n._id)}}),Object(a.jsx)(Me,{tagClass:"btn_bc_yellow",icon:"edit",text:"EDIT",onClickEvent:function(){return n._id,void e.setModalStatus("addEditModal",!0)}}),Object(a.jsx)(Me,{tagClass:"btn_bc_blue",icon:"record_voice_over",text:"PLAY",onClickEvent:function(){return function(e){fe.show(),he.play([e])}(n)}}),Object(a.jsx)(Me,{tagClass:"btn_bc_green",icon:"save",text:"STORE",onClickEvent:function(){return t=n._id,void ee([t]).then((function(){return ne()})).then((function(){return e.setSelectedWord(null)})).catch((function(e){return we.b.error(e)}));var t}})]})]}):Object(a.jsx)(a.Fragment,{})})})),Ae=function(e){Object(J.a)(n,e);var t=Object(X.a)(n);function n(e){var a;return Object(q.a)(this,n),(a=t.call(this,e)).closeAndResetState=function(){a.props.setModalStatus("addEditModal",!1),a.setState(a.initialState)},a.handleKeyDown=function(e){if("Enter"===e.key||"Return"===e.key){if("image_url"===e.target.name||"meaning"===e.target.name||a.state.wordsMatched.length>0&&"word"===e.target.name)return a.addEditWord(),document.getElementById("word_input").focus();if("word"===e.target.name)return document.getElementById("meaning_input").focus()}},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(l.a)({},n,r)),"word"===n&&r&&function(e){return new Promise((function(t,n){$.a.get("/api/words/match/"+e).then((function(e){return t(e)})).catch((function(e){return n(e)}))}))}(r).then((function(e){return a.setState({wordsMatched:e.data})})).catch((function(e){return we.b.error(e)}))},a.addEditWord=function(){var e=a.state,t=e._id,n=e.word,r=e.meaning,i=e.wordsMatched;return""===n||0===i.length&&""===r?we.b.warn("All fields required"):t?a.editWordHandler():void a.addWordHandler()},a.addWordHandler=function(){var e,t=a.state;t.created=Ne()().utc().format(),function(e){return new Promise((function(t,n){$.a.post("/api/words/create",e).then((function(e){return t(e.status)})).catch((function(e){return n(e)}))}))}(t).then((function(t){return e=t,ne()})).then((function(){var n=201===e?"Created successfully":200===e?"Moved to active":"";a.setState(a.initialState),a.setState({language:t.language}),we.b.success(n)})).catch((function(e){return we.b.error(e)}))},a.editWordHandler=function(){var e;(e=a.state,new Promise((function(t,n){$.a.put("/api/words/update/"+e._id,e).then((function(e){return t(e)})).catch((function(e){return n(e)}))}))).then((function(){return ne()})).then((function(){a.props.setSelectedWord(a.state),a.closeAndResetState()})).catch((function(e){return we.b.error(e)}))},a.initialState={_id:null,word:"",meaning:"",created:null,image_url:"",location:"ACTIVE",language:ie[0].code,times_played:0,wordsMatched:[]},a.state=a.initialState,a}return Object(H.a)(n,[{key:"componentWillReceiveProps",value:function(e){var t=e.word;if(!t)return this.setState(this.initialState);this.setState(t)}},{key:"render",value:function(){var e=this.props.isModalOpen,t=this.state,n=t._id,r=t.word,i=t.meaning,c=t.wordsMatched,o=t.image_url;return Object(a.jsx)(ye.a,{isOpen:e,requestClose:this.closeAndResetState,classes:{contentClassName:"app-modal"},children:Object(a.jsxs)("div",{className:"add-modal",children:[Object(a.jsxs)("div",{className:"word-container",children:[Object(a.jsx)("input",{id:"word_input",autoComplete:"off",className:"japanese",type:"text",placeholder:"Word",lang:"jp",value:r,name:"word",onChange:this.handleChange,onKeyDown:this.handleKeyDown}),Object(a.jsx)("input",{id:"meaning_input",disabled:c.length>0,autoComplete:"off",type:"text",placeholder:"Meaning",lang:"es",value:c.length>0?c[0].meaning:i,name:"meaning",onChange:this.handleChange,onKeyDown:this.handleKeyDown}),Object(a.jsx)("select",{name:"language",onChange:this.handleChange,value:c.length>0?c[0].language:this.state.language,disabled:c.length>0,children:ie.map((function(e){return Object(a.jsx)("option",{value:e.code,children:e.name},e.code)}))}),Object(a.jsx)("input",{id:"image_url",autoComplete:"off",className:"image_url",type:"text",placeholder:"https://image_url.com/image",value:o,name:"image_url",onChange:this.handleChange,onKeyDown:this.handleKeyDown})]}),Object(a.jsx)("div",{className:"match-area",children:c.length>1&&Object(a.jsx)("span",{style:{color:"red"},children:Object(a.jsxs)("em",{children:[c.length," results with same word (POSSIBLE DUPLICATION)"]})})}),Object(a.jsxs)("div",{className:"actions",children:[Object(a.jsx)(Me,{tagClass:"btn_bc_blue",icon:"close",text:"CLOSE",onClickEvent:this.closeAndResetState}),(n&&!c.length>0||!n)&&Object(a.jsx)(Me,{tagClass:"btn_bc_green",icon:n?"save":"backup",text:n?"SAVE":0===c.length?"ADD":"SET ACTIVE",onClickEvent:this.addEditWord})]})]})})}}]),n}(r.Component),De={setModalStatus:m,setSelectedWord:_},Pe=Object(G.b)((function(e){return{isModalOpen:e.modalsReducer.addEditModal,word:e.wordsReducer.selectedWord}}),De)(Ae),Ie=function(e){Object(J.a)(n,e);var t=Object(X.a)(n);function n(e){var a;return Object(q.a)(this,n),(a=t.call(this,e)).closeModal=function(){a.props.setModalStatus("repeatTimesModal",!1)},a.onChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(l.a)({},n,r))},a.updateTimes=function(){var e=a.state,t=e.times,n=e.id;if(!(t=parseInt(t)))return we.b.warn("Not a number");(function(e,t){return new Promise((function(n,a){$.a.post("/api/config/update/"+e,{times:t}).then((function(e){return n(e.data)})).catch((function(e){return a(e)}))}))})(n,t).then((function(e){a.props.setRepeatTimes(e),a.closeModal(),we.b.success("Updated")})).catch((function(e){return we.b.error(e)}))},a.state={id:null,times:null},a}return Object(H.a)(n,[{key:"componentWillReceiveProps",value:function(e){var t=e.timesToRepeat;this.setState({id:t._id,times:String(t.repeat_times)})}},{key:"render",value:function(){var e=this.props.isModalOpen;return Object(a.jsx)(ye.a,{isOpen:e,requestClose:this.closeModal,classes:{contentClassName:"app-modal"},children:Object(a.jsxs)("div",{className:"config-modal",children:[Object(a.jsx)("h2",{children:"Enter how many times do you want to play each word"}),Object(a.jsx)("input",{name:"times",type:"text",value:this.state.times||"",onChange:this.onChange}),Object(a.jsxs)("div",{className:"actions",children:[Object(a.jsx)(Me,{tagClass:"btn_bc_blue",icon:"close",text:"CLOSE",onClickEvent:this.closeModal}),Object(a.jsx)(Me,{tagClass:"btn_bc_green",icon:"save",text:"SAVE",onClickEvent:this.updateTimes})]})]})})}}]),n}(r.Component),We={setModalStatus:m,setRepeatTimes:y},Le=Object(G.b)((function(e){return{isModalOpen:e.modalsReducer.repeatTimesModal,timesToRepeat:e.wordsReducer.repeat_times}}),We)(Ie);function Ue(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Se,{}),Object(a.jsx)(Re,{}),Object(a.jsx)(Pe,{}),Object(a.jsx)(Le,{})]})}n(79);var Ve=Object(G.b)((function(e){return{words:e.wordsReducer.words,playerReducer:e.playerReducer,domLoader:e.domLoader}}))((function(e){var t=e.playerReducer.playing_id,n=t?e.words.find((function(e){return e._id===t})).image_url:null;return n&&!e.domLoader.isModalVisible?Object(a.jsx)("div",{className:"preview_image",children:Object(a.jsx)("div",{className:"img-container",children:Object(a.jsx)("img",{src:n,alt:"xd"})})}):null})),Fe=function(e){Object(J.a)(n,e);var t=Object(X.a)(n);function n(){return Object(q.a)(this,n),t.apply(this,arguments)}return Object(H.a)(n,[{key:"componentDidMount",value:function(){var e;new Promise((function(t,n){$.a.get("/api/config/load/"+e).then((function(e){return t(e.data)})).catch((function(e){return n(e)}))})).then((function(e){return ae(e),ne()})).then((function(){return fe.hidde()}))}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(z,{}),Object(a.jsx)(Ve,{}),Object(a.jsx)(_e,{}),Object(a.jsx)(Ue,{}),Object(a.jsx)("footer",{children:Object(a.jsx)(be,{})})]})}}]),n}(r.Component);n(80);var Ke=function(){return Object(a.jsxs)(G.a,{store:B,children:[Object(a.jsx)(Fe,{}),Object(a.jsx)(we.a,{autoClose:3e3,position:"bottom-right",pauseOnHover:!1,pauseOnFocusLoss:!1})]})};o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(Ke,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.63478edc.chunk.js.map