(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={thumb:"feedback_thumb__3qTNm",feedbackList:"feedback_feedbackList____ALS",feedbackItem:"feedback_feedbackItem__1SuT-",StatisticsItem:"feedback_StatisticsItem__3iFvg",NotificationItem:"feedback_NotificationItem__1HqGX",feedbackButton:"feedback_feedbackButton__2tbFi",StatisticsValue:"feedback_StatisticsValue__1djNc"}},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);a(10);var c=a(2),s=a.n(c),i=a(4),n=a.n(i),o=(a(15),a(5)),l=a(6),r=a(7),d=a(9),b=a(8),u=a(1),j=a.n(u),h=a(0),m=function(e){var t=e.onGood,a=e.onNeutral,c=e.onBad,s=e.onTotal,i=e.onPositivePercentage;return Object(h.jsxs)("ul",{className:j.a.StatisticsList,children:[Object(h.jsx)("li",{className:j.a.StatisticsItem,children:Object(h.jsxs)("p",{className:j.a.StatisticsText,children:["Good:",Object(h.jsx)("span",{className:j.a.StatisticsValue,children:t})]})}),Object(h.jsx)("li",{className:j.a.StatisticsItem,children:Object(h.jsxs)("p",{className:j.a.StatisticsText,children:["Neutral:",Object(h.jsx)("span",{className:j.a.StatisticsValue,children:a})]})}),Object(h.jsx)("li",{className:j.a.StatisticsItem,children:Object(h.jsxs)("p",{className:j.a.StatisticsText,children:["Bad:",Object(h.jsx)("span",{className:j.a.StatisticsValue,children:c})]})}),Object(h.jsx)("li",{className:j.a.StatisticsItem,children:Object(h.jsxs)("p",{className:j.a.StatisticsText,children:["Total:",Object(h.jsx)("span",{className:j.a.StatisticsValue,children:s})]})}),Object(h.jsx)("li",{className:j.a.StatisticsItem,children:Object(h.jsxs)("p",{className:j.a.StatisticsText,children:["Positive feedback:",Object(h.jsx)("span",{className:j.a.StatisticsValue,children:i}),"%"]})})]})},f=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(h.jsx)("ul",{className:j.a.feedbackList,children:t.map((function(e){return Object(h.jsx)("li",{className:j.a.feedbackItem,children:Object(h.jsx)("button",{className:j.a.feedbackButton,type:"button",onClick:function(){return a(e)},children:e})},e)}))})},x=function(e){var t=e.title,a=void 0===t?"":t,c=e.children;return Object(h.jsxs)("section",{children:[a&&Object(h.jsx)("h2",{className:j.a.title,children:a}),c]})},O=function(e){var t=e.message,a=void 0===t?"":t;return Object(h.jsx)("div",{className:j.a.NotificationItem,children:a})},k=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={good:0,neutral:0,bad:0},e.handleButton=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){var t=0;return 0===e.countTotalFeedback()?t:Math.floor(t=100*e.state.good/e.countTotalFeedback())},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.countTotalFeedback(),t=this.countPositiveFeedbackPercentage();return Object(h.jsxs)("div",{className:j.a.thumb,children:[Object(h.jsx)(x,{title:"Please leave feedback",children:Object(h.jsx)(f,{options:["good","neutral","bad"],onLeaveFeedback:this.handleButton})}),Object(h.jsx)(x,{title:"Statistics",children:e>0?Object(h.jsx)(m,{onGood:this.state.good,onNeutral:this.state.neutral,onBad:this.state.bad,onTotal:e,onPositivePercentage:t}):Object(h.jsx)(O,{message:"There is no feedback"})})]})}}]),a}(s.a.Component),N=k;n.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2acdca09.chunk.js.map