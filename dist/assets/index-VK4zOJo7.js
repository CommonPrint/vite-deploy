(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();var s={ENV_TITLE:"PRODUCTION",ENV_API_URL:"http://localhost:3300/production/api",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};console.log("RUNNER");console.log("IMPORT.META:",s);document.getElementById("app").innerHTML=`
  <h1>Окружение: PRODUCTION</h1>
  <p>API_URL: http://localhost:3300/production/api</p>
`;