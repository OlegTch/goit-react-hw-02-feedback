(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={thumb:"feedback_thumb__3qTNm",feedbackList:"feedback_feedbackList____ALS",feedbackItem:"feedback_feedbackItem__1SuT-",statisticsItem:"feedback_statisticsItem__1fnbi",notificationItem:"feedback_notificationItem__21shs",feedbackButton:"feedback_feedbackButton__2tbFi",statisticsValue:"feedback_statisticsValue__15xws"}},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);a(10);var s=a(2),c=a.n(s),i=a(4),n=a.n(i),o=(a(15),a(5)),l=a(6),r=a(7),d=a(9),b=a(8),u=a(1),j=a.n(u),h=a(0),m=function(e){var t=e.onGood,a=e.onNeutral,s=e.onBad,c=e.onTotal,i=e.onPositivePercentage;return Object(h.jsxs)("ul",{className:j.a.statisticsList,children:[Object(h.jsx)("li",{className:j.a.statisticsItem,children:Object(h.jsxs)("p",{className:j.a.statisticsText,children:["Good:",Object(h.jsx)("span",{className:j.a.statisticsValue,children:t})]})}),Object(h.jsx)("li",{className:j.a.statisticsItem,children:Object(h.jsxs)("p",{className:j.a.statisticsText,children:["Neutral:",Object(h.jsx)("span",{className:j.a.statisticsValue,children:a})]})}),Object(h.jsx)("li",{className:j.a.statisticsItem,children:Object(h.jsxs)("p",{className:j.a.statisticsText,children:["Bad:",Object(h.jsx)("span",{className:j.a.statisticsValue,children:s})]})}),Object(h.jsx)("li",{className:j.a.statisticsItem,children:Object(h.jsxs)("p",{className:j.a.statisticsText,children:["Total:",Object(h.jsx)("span",{className:j.a.statisticsValue,children:c})]})}),Object(h.jsx)("li",{className:j.a.statisticsItem,children:Object(h.jsxs)("p",{className:j.a.statisticsText,children:["Positive feedback:",Object(h.jsx)("span",{className:j.a.statisticsValue,children:i}),"%"]})})]})},f=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(h.jsx)("ul",{className:j.a.feedbackList,children:t.map((function(e){return Object(h.jsx)("li",{className:j.a.feedbackItem,children:Object(h.jsx)("button",{className:j.a.feedbackButton,type:"button",onClick:function(){return a(e)},children:e})},e)}))})},x=function(e){var t=e.title,a=void 0===t?"":t,s=e.children;return Object(h.jsxs)("section",{children:[a&&Object(h.jsx)("h2",{className:j.a.title,children:a}),s]})},O=function(e){var t=e.message,a=void 0===t?"":t;return Object(h.jsx)("div",{className:j.a.notificationItem,children:a})},k=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleButton=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){var t=0,a=e.state.good;return 0===e.countTotalFeedback()?t:Math.floor(t=100*a/e.countTotalFeedback())},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.countTotalFeedback(),t=this.countPositiveFeedbackPercentage(),a=this.state,s=a.good,c=a.neutral,i=a.bad;return Object(h.jsxs)("div",{className:j.a.thumb,children:[Object(h.jsx)(x,{title:"Please leave feedback",children:Object(h.jsx)(f,{options:["good","neutral","bad"],onLeaveFeedback:this.handleButton})}),Object(h.jsx)(x,{title:"Statistics",children:e>0?Object(h.jsx)(m,{onGood:s,onNeutral:c,onBad:i,onTotal:e,onPositivePercentage:t}):Object(h.jsx)(O,{message:"There is no feedback"})})]})}}]),a}(c.a.Component),N=k;n.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7f26478b.chunk.js.map