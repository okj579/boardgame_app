(this.webpackJsonpboardgame_app=this.webpackJsonpboardgame_app||[]).push([[0],{106:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=106},109:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),s=a(9),i=a.n(s),c=(a(81),a(12)),l=a(13),u=a(10),h=a(15),d=a(14),m=a(36),p=a(16),g=(a(82),a(146)),v=a(147),b=a(148),y=a(112),f=a(151),E=a(149),j=a(143),O=a(67),k=a(145),C=a(141),w=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.word,t=this.props.guesser,a="";t?a=this.props.guess?t+"'s Rateversuch: "+this.props.guess:t+" muss raten":this.props.guess&&(a="Rateversuch: "+this.props.guess);var n=["Word-card"];return this.props.guess&&(this.props.guessedRight?n.push("Word-card-correct"):n.push("Word-card-wrong")),o.a.createElement("div",{className:n.join(" ")},o.a.createElement("span",null,e),a&&o.a.createElement("span",{className:"Author-tag",style:{color:this.props.color}},a))}}]),a}(o.a.Component);!function(e){e[e.Init=0]="Init",e[e.HintWriting=1]="HintWriting",e[e.HintComparing=2]="HintComparing",e[e.Guessing=3]="Guessing",e[e.Solution=4]="Solution",e[e.End=5]="End"}(n||(n={}));var P=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e={backgroundColor:this.props.color},t={borderTopColor:this.props.color};return o.a.createElement("div",{className:"pencil"},o.a.createElement("div",{className:"body",style:e}),o.a.createElement("div",{className:"nib",style:t}))}}]),a}(o.a.Component),I=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.hint,t=this.props.color,a={color:t},n=this.props.author,r=this.props.showPencil||!this.props.hint,s=["Word-hint"];this.props.duplicate&&s.push("Word-hint-duplicate"),e&&e.length>20?s.push("Word-hint-huge"):e&&e.length>14&&s.push("Word-hint-long");var i=s.join(" ");return o.a.createElement("div",{className:i,style:a},e,r&&o.a.createElement(P,{color:t}),n&&o.a.createElement("span",{className:"Author-tag"},n))}}]),a}(o.a.Component),S=a(150),N=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={value:""},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.submitHint=n.submitHint.bind(Object(u.a)(n)),n.keyPressed=n.keyPressed.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"submitHint",value:function(){this.props.submitHint(this.state.value),this.setState({value:""})}},{key:"keyPressed",value:function(e){"Enter"===e.key&&this.submitHint()}},{key:"render",value:function(){return o.a.createElement("div",{className:"Word-hint-input"},o.a.createElement(S.a,{required:!0,label:this.props.label||"Wort-Hinweis",value:this.state.value,onChange:this.handleChange,onKeyPress:this.keyPressed}),o.a.createElement(C.a,{variant:"contained",color:"primary",disabled:!this.state.value,onClick:this.submitHint},this.props.buttonText||"Hinweis abschicken"))}}]),a}(o.a.Component),G=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.game;return o.a.createElement("div",{className:"Game-progress"},"Runde: ",e.round+1,"/",e.words.length,", Richtige: ",e.correctWords.length,", Falsche: ",e.wrongWords.length)}}]),a}(o.a.Component),W=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).currentUserId=localStorage.getItem("playerId")||"",n.submitHint=n.submitHint.bind(Object(u.a)(n)),n.showHints=n.showHints.bind(Object(u.a)(n)),n.guess=n.guess.bind(Object(u.a)(n)),n.resolveRound=n.resolveRound.bind(Object(u.a)(n)),n.state={},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"submitHint",value:function(e){var t=T(this.props.game,this.currentUserId);if(t){var a={hint:e,author:t};fetch("".concat(x,"/").concat(this.props.game.id,"/hint"),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({hint:a})}).catch(console.log)}}},{key:"showHints",value:function(){fetch("".concat(x,"/").concat(this.props.game.id,"/showHints"),{method:"PUT"}).catch(console.log)}},{key:"guess",value:function(e){fetch("".concat(x,"/").concat(this.props.game.id,"/guess"),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({guess:e})}).catch(console.log)}},{key:"resolveRound",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];fetch("".concat(x,"/").concat(this.props.game.id,"/resolve"),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({countCorrect:e})}).catch(console.log)}},{key:"render",value:function(){var e,t=this,a=this.props.game,r=T(a,this.currentUserId),s=a.currentGuesser?a.currentGuesser:{name:"?",id:"?"},i=r&&r.id===s.id,c=a.phase===n.HintComparing,l=a.phase===n.Guessing,u=a.phase===n.Solution,h=i&&!u?"?":a.currentWord||"",d=a.currentGuess||"",m=a.hints.map((function(e){var t="?";return l?t=i&&e.isDuplicate?"LEIDER DOPPELT":e.hint:c?i||(t=e.hint):u||r&&r.id===e.author.id?t=e.hint:e.hint||(t=""),o.a.createElement(I,{key:e.author.id,hint:t,color:e.author.color,duplicate:e.isDuplicate,author:e.author.name})})),p=o.a.createElement(C.a,{variant:"contained",color:"primary",onClick:function(){return t.resolveRound(!0)}},"Super, weiter geht's");return a.guessedRight||(p=o.a.createElement(C.a,{variant:"contained",onClick:function(){return t.resolveRound(!0)}},"Das z\xe4hlt trotzdem"),e=o.a.createElement(C.a,{variant:"contained",color:"primary",onClick:function(){return t.resolveRound(!1)}},"Leider falsch")),o.a.createElement("div",{className:"Game-field"},o.a.createElement("div",{className:"Current-word"},o.a.createElement(G,{game:a}),o.a.createElement(w,{word:h,guesser:s.name,color:s.color,guess:u?d:"",guessedRight:a.guessedRight}),l&&i&&o.a.createElement(N,{submitHint:this.guess,label:"Rateversuch",buttonText:"Jetzt raten"}),!i&&u&&p,!i&&u&&e),o.a.createElement("div",{className:"Current-hints"},!i&&!l&&!c&&o.a.createElement(N,{submitHint:this.submitHint}),o.a.createElement("div",{className:"WordHint-list"},m),c&&!i&&o.a.createElement(C.a,{variant:"contained",color:"primary",onClick:this.showHints},s.name+" kann losraten!")))}}]),a}(o.a.Component);function T(e,t){return e.players.find((function(e){return e.id===t}))}var H=a(142),R=a(144),U=a(86).default,A=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={words:[]},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.setRandomColor=n.setRandomColor.bind(Object(u.a)(n)),n.addPlayer=n.addPlayer.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"handleChange",value:function(e){if(["name","color"].includes(e.target.name)){var t={id:"",name:this.props.name,color:this.props.color};"name"===e.target.name?t.name=e.target.value:"color"===e.target.name&&(t.color=e.target.value),this.props.updatePlayer(t)}else if(e.target.name.startsWith("word")){var a=parseInt(e.target.name.substr(4)),n=e.target.value;this.setState((function(e,t){var r=e.words;return r[a]=n,{words:r}}))}}},{key:"setRandomColor",value:function(){var e={id:"",name:this.props.name,color:D()};this.props.updatePlayer(e)}},{key:"addPlayer",value:function(){var e={id:"",name:this.props.name,color:this.props.color,enteredWords:this.state.words};this.props.addPlayer(e)}},{key:"render",value:function(){var e=[];e.push(o.a.createElement(y.a,{variant:"subtitle1",key:"heading"},"Gebe ",2," W\xf6rter f\xfcr das Spiel ein"));for(var t=0;t<2;t++)e.push(o.a.createElement(S.a,{required:!0,label:"Wort ".concat(t+1),placeholder:"F\xfcr den Stapel",name:"word".concat(t),key:"word".concat(t),value:this.state.words[t]||"",onChange:this.handleChange}));var a=!this.props.name||this.state.words.length<2||this.state.words.some((function(e){return!e||0===e.length}));return o.a.createElement("div",{className:"New-player"},o.a.createElement(S.a,{required:!0,label:"Spielername",name:"name",value:this.props.name,onChange:this.handleChange,InputProps:{endAdornment:o.a.createElement(H.a,{position:"end"},o.a.createElement(j.a,{style:{color:this.props.color}}))}}),o.a.createElement(S.a,{required:!0,label:"Spielerfarbe",placeholder:"Html-Farbcode",name:"color",value:this.props.color,onChange:this.handleChange,InputProps:{style:{color:this.props.color},endAdornment:o.a.createElement(H.a,{position:"end"},o.a.createElement(R.a,{style:{color:this.props.color}}))}}),o.a.createElement(C.a,{variant:"contained",onClick:this.setRandomColor},"Zufallsfarbe"),e,o.a.createElement(C.a,{variant:"contained",color:"primary",disabled:a,onClick:this.addPlayer},"Mitspielen"))}}]),a}(o.a.Component);function D(){return"#"+new U({dictionary:["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]})(6)}var J=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={name:localStorage.getItem(M)||"",color:localStorage.getItem(q)||D()||"black"},n.addPlayer=n.addPlayer.bind(Object(u.a)(n)),n.setPlayerProps=n.setPlayerProps.bind(Object(u.a)(n)),n.startGame=n.startGame.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"setPlayerProps",value:function(e){this.setState({name:e.name,color:e.color||""})}},{key:"addPlayer",value:function(e){var t=this,a=localStorage.getItem(B)||"";e.id=a,fetch("".concat(x,"/").concat(this.props.game.id,"/addPlayer"),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({player:e})}).then((function(e){return e.json()})).then((function(e){t.setLocalPlayer(e.player),t.setState({color:D()||"black",name:""})})).catch(console.log)}},{key:"setLocalPlayer",value:function(e){localStorage.setItem(B,e.id),localStorage.setItem(M,e.name),e.color&&localStorage.setItem("playerColor",e.color),this.props.setTheme&&e.color&&this.props.setTheme(e.color)}},{key:"startGame",value:function(){fetch("".concat(x,"/").concat(this.props.game.id,"/start"),{method:"PUT"}).then((function(e){})).catch(console.log)}},{key:"render",value:function(){var e=this.props.game.players.map((function(e){return o.a.createElement(I,{key:e.id,hint:e.name,color:e.color})})),t=localStorage.getItem(B)||"",a=!!t&&this.props.game.host===t,n=!!t&&this.props.game.players.findIndex((function(e){return e.id===t}))>-1,r=n||!this.state.name?"?":this.state.name,s=n||!this.state.color?D():this.state.color;return o.a.createElement("div",{className:"Game-lobby"},o.a.createElement("div",{className:"New-player"},!n&&o.a.createElement(A,{name:this.state.name,color:this.state.color,updatePlayer:this.setPlayerProps,addPlayer:this.addPlayer}),a&&o.a.createElement(C.a,{variant:"contained",color:"primary",disabled:this.props.game.players.length<3,onClick:this.startGame},"Spiel beginnen")),o.a.createElement("div",{className:"Player-list"},e,o.a.createElement(I,{hint:r,color:s,showPencil:!0})))}}]),a}(o.a.Component),_=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.game,t=e.correctWords.map((function(e){return o.a.createElement(w,{key:e.word,word:e.word,guess:e.guess,guessedRight:!0})})),a=e.wrongWords.map((function(e){return o.a.createElement(w,{key:e.word,word:e.word,guess:e.guess,guessedRight:!1})}));return o.a.createElement("div",{className:"Game-end-view"},o.a.createElement("div",{className:"Correct-words"},o.a.createElement("h2",null,"Richtig (",e.correctWords.length,")"),t),o.a.createElement("div",{className:"Wrong-words"},o.a.createElement("h2",null,"Falsch (",e.wrongWords.length,")"),a))}}]),a}(o.a.Component),F=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).currentUserId=localStorage.getItem(B)||"",n.allWords=["Ananas","Bauernhof","Clown","Dartscheibe","Elefant","Fussball"],n._interval=void 0,n.createGame=n.createGame.bind(Object(u.a)(n)),n.state={},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.gameId?(this.loadGame(),this._interval=setInterval(this.loadGame.bind(this),2e3)):(this.loadGames(),this._interval=setInterval(this.loadGames.bind(this),2e3))}},{key:"componentWillUnmount",value:function(){clearInterval(this._interval)}},{key:"loadGame",value:function(){var e=this,t=this.props.gameId;t&&fetch("".concat(x,"/").concat(t)).then((function(e){return e.json()})).then((function(t){e.setState({currentGame:t.game})})).catch(console.log)}},{key:"loadGames",value:function(){var e=this;fetch("".concat(x,"/all")).then((function(e){return e.json()})).then((function(t){var a=t.games;a=a.filter((function(t){return 0===t.phase||e.currentUserId&&t.players.findIndex((function(t){return t.id===e.currentUserId}))>-1})),e.setState({allGames:a})})).catch(console.log)}},{key:"createGame",value:function(){var e={id:"",name:"",words:[],players:[],host:"1",round:0,phase:0,hints:[],correctWords:[],wrongWords:[]};fetch("".concat(x,"/add"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({game:e})}).then((function(e){console.log(e)})).catch(console.log)}},{key:"render",value:function(){var e,t,a=this.state.currentGame;return a?e=a.phase===n.Init?o.a.createElement(J,{game:a,setTheme:this.props.setTheme}):a.phase===n.End?o.a.createElement(_,{game:a}):o.a.createElement(W,{game:a}):(this.state.allGames&&(t=this.state.allGames.map((function(e){return o.a.createElement(m.b,{key:e.id,to:"/".concat(e.id)},"Spiele ".concat(e.id))}))),e=o.a.createElement(C.a,{variant:"contained",color:"primary",onClick:this.createGame},"Neues Spiel")),o.a.createElement("div",{className:"Game-content"},e,t)}}]),a}(o.a.Component);var L="justone.okj.name"===window.location.hostname?"":":9000",x=window.location.protocol+"//"+window.location.hostname+L+"/api"+"/games",B="playerId",M="playerName",q="playerColor",z=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={primaryColor:localStorage.getItem(q)||"#43a047"},n.setTheme=n.setTheme.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"setTheme",value:function(e){this.setState({primaryColor:e})}},{key:"render",value:function(){var e=this,t=localStorage.getItem(M),a=Object(O.a)({palette:{primary:{main:this.state.primaryColor},secondary:{main:"#3949ab"}}});return o.a.createElement(m.a,null,o.a.createElement(k.a,{theme:a},o.a.createElement("div",{className:"App"},o.a.createElement(g.a,{position:"sticky"},o.a.createElement(v.a,null,o.a.createElement(m.b,{to:"/",className:"ButtonLink"},o.a.createElement(b.a,{edge:"start",color:"inherit","aria-label":"home"},o.a.createElement(E.a,null))),o.a.createElement(y.a,{variant:"h2",className:"appTitle"},"Nur ein Wort!"),t&&o.a.createElement(f.a,{label:t,icon:o.a.createElement(j.a,null)}))),o.a.createElement(p.c,null,o.a.createElement(p.a,{path:"/:gameId",component:function(t){return o.a.createElement(F,{gameId:t.match.params.gameId,setTheme:e.setTheme})}}),o.a.createElement(p.a,{children:o.a.createElement(F,null)})))))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,t,a){e.exports=a(109)},81:function(e,t,a){},82:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.106b8bad.chunk.js.map