"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[4439],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},97598:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={description:"Here's what's coming in the next few days, weeks, months, and years!"},l="Roadmap",u={unversionedId:"project-overview/roadmap",id:"project-overview/roadmap",title:"Roadmap",description:"Here's what's coming in the next few days, weeks, months, and years!",source:"@site/../docs/project-overview/roadmap.md",sourceDirName:"project-overview",slug:"/project-overview/roadmap",permalink:"/airbyte/project-overview/roadmap",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/project-overview/roadmap.md",tags:[],version:"current",frontMatter:{description:"Here's what's coming in the next few days, weeks, months, and years!"},sidebar:"mySidebar",previous:{title:"Project Overview",permalink:"/airbyte/project-overview/"},next:{title:"Changelog",permalink:"/airbyte/project-overview/changelog/"}},c={},p=[{value:"Coming within a few days",id:"coming-within-a-few-days",level:2},{value:"Coming within a few weeks / months",id:"coming-within-a-few-weeks--months",level:2},{value:"Coming within a few quarters / years",id:"coming-within-a-few-quarters--years",level:2},{value:"<strong>1. Parity on data consolidation (ELT) in warehouses / databases</strong>",id:"1-parity-on-data-consolidation-elt-in-warehouses--databases",level:3},{value:"<strong>2. Reverse-ETL from warehouses / databases</strong>",id:"2-reverse-etl-from-warehouses--databases",level:3},{value:"<strong>3. Parity with enterprise features: data quality, privacy compliance, customer data consolidation features, etc.</strong>",id:"3-parity-with-enterprise-features-data-quality-privacy-compliance-customer-data-consolidation-features-etc",level:3},{value:"<strong>4. Expand on all data engineering features</strong>",id:"4-expand-on-all-data-engineering-features",level:3}],d={toc:p};function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"roadmap"},"Roadmap"),(0,o.kt)("h2",{id:"coming-within-a-few-days"},"Coming within a few days"),(0,o.kt)("p",null,"Check out our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/milestones"},"Roadmap for Core")," and our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/projects/1"},"Roadmap for Connectors")," on GitHub. You'll see the features we're currently working on or about to. You may also give us insights, by adding your own issues and voting for specific features / integrations."),(0,o.kt)("h2",{id:"coming-within-a-few-weeks--months"},"Coming within a few weeks / months"),(0,o.kt)("p",null,"We understand that we're not \"production-ready\" for a lot of companies yet. In the end, we just got started in July 2020, so we're at the beginning of the journey. Here is a highlight of the main features we are planning on releasing in the next few months:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Landing in April or so:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Airbyte Cloud in NA."),(0,o.kt)("li",{parentName:"ul"},"Improve scheduling performance and migrate completely to Temporal.  "),(0,o.kt)("li",{parentName:"ul"},"Adapt automatically to sources' schema changes."),(0,o.kt)("li",{parentName:"ul"},"Our declarative interface ","(","CLI",")",".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Coming a bit later:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Airbyte Cloud in EU + Asia"),(0,o.kt)("li",{parentName:"ul"},"Support for creating destination connectors with the CDK."),(0,o.kt)("li",{parentName:"ul"},"Credential and secrets vaulting ","(",(0,o.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/issues/837"},"#","837"),")","."),(0,o.kt)("li",{parentName:"ul"},"Webhook connector.")),(0,o.kt)("p",null,'Our goal is to become "production-ready" for any company whatever their data stack, infrastructure, architecture, data volume, and connector needs. ',(0,o.kt)("strong",{parentName:"p"},"If you see anything missing in this list that you would need before deploying us in prod, please talk to us via")," ",(0,o.kt)("a",{parentName:"p",href:"https://slack.airbyte.io"},(0,o.kt)("strong",{parentName:"a"},"Slack"))," ",(0,o.kt)("strong",{parentName:"p"},"or")," ",(0,o.kt)("a",{parentName:"p",href:"mailto:contact@airbyte.io"},(0,o.kt)("strong",{parentName:"a"},"email")),(0,o.kt)("strong",{parentName:"p"},"!")),(0,o.kt)("h2",{id:"coming-within-a-few-quarters--years"},"Coming within a few quarters / years"),(0,o.kt)("p",null,"We also wanted to share with you how we think about the high-level roadmap over the next few months and years. We foresee several high-level phases that we will try to share here."),(0,o.kt)("h3",{id:"1-parity-on-data-consolidation-elt-in-warehouses--databases"},(0,o.kt)("strong",{parentName:"h3"},"1. Parity on data consolidation ","(","ELT",")"," in warehouses / databases")),(0,o.kt)("p",null,"Our first focus is to support batch-type ELT integrations. We feel that we can provide value right away as soon as we support one of the integrations you need. Batch integrations are also easier to build and sustain. So we would rather start with that."),(0,o.kt)("p",null,"Before we move on to the next phase, we want to make sure we are supporting all the major integrations and that we are in a state where we can address the long tail, with the help of the community."),(0,o.kt)("p",null,"We also want to fully integrate with the ecosystem, including Airflow, dbt, Kubernetes, GreatExpectations, Prefect, Dagster, etc., so teams have the ability to fully build the data infrastructure they need."),(0,o.kt)("h3",{id:"2-reverse-etl-from-warehouses--databases"},(0,o.kt)("strong",{parentName:"h3"},"2. Reverse-ETL from warehouses / databases")),(0,o.kt)("p",null,"Some integrations we have in mind are batch distribution integrations, from warehouses to third-party tools. For instance, a use case could be if your marketing team wants to send back the data to your ad platforms, so it can better optimize the campaigns. Another use case could be syncing the consolidated data back to your CRM."),(0,o.kt)("p",null,"It\u2019s not yet clear in our minds when to prioritize those additional integrations. We will have a better idea once we see the feedback we get from the community we build with data consolidation."),(0,o.kt)("h3",{id:"3-parity-with-enterprise-features-data-quality-privacy-compliance-customer-data-consolidation-features-etc"},(0,o.kt)("strong",{parentName:"h3"},"3. Parity with enterprise features: data quality, privacy compliance, customer data consolidation features, etc.")),(0,o.kt)("p",null,"Hopefully, we will have raised a Series-A by then, so we can start focusing on the enterprise edition\u2019s features, in addition to pursuing efforts on addressing the long tail of integrations."),(0,o.kt)("p",null,"Those enterprise features comprise:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hosting and management"),(0,o.kt)("li",{parentName:"ul"},"User and role access management"),(0,o.kt)("li",{parentName:"ul"},"SSO"),(0,o.kt)("li",{parentName:"ul"},"Privacy compliance ","(","GDPR, CCPA, etc",")"),(0,o.kt)("li",{parentName:"ul"},"Customer data consolidation with identity resolution")),(0,o.kt)("h3",{id:"4-expand-on-all-data-engineering-features"},(0,o.kt)("strong",{parentName:"h3"},"4. Expand on all data engineering features")),(0,o.kt)("p",null,"This is when we will start differentiating ourselves in terms of feature coverage with current cloud-based incumbents. Being open-sourced enables us to go faster, but also deeper."),(0,o.kt)("p",null,"We are also thinking about supporting streaming-type integrations, a la Segment."))}h.isMDXComponent=!0}}]);