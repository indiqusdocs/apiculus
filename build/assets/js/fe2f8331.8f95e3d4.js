"use strict";(self.webpackChunkApiculus=self.webpackChunkApiculus||[]).push([[8659],{26627:(i,n,e)=>{e.r(n),e.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=e(74848),o=e(28453);const s={sidebar_position:4},r="Configuring Automation Policies",c={id:"GettingStarted/PlatformAdministration/ConfiguringAutomationPolicies",title:"Configuring Automation Policies",description:"Apiculus allows service providers to define automation policies and workflows to handle scenarios around invoice reminders, non-payments, and customer identity verification.",source:"@site/docs/GettingStarted/PlatformAdministration/ConfiguringAutomationPolicies.md",sourceDirName:"GettingStarted/PlatformAdministration",slug:"/GettingStarted/PlatformAdministration/ConfiguringAutomationPolicies",permalink:"/docs/GettingStarted/PlatformAdministration/ConfiguringAutomationPolicies",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebar1",previous:{title:"General Platform Settings",permalink:"/docs/GettingStarted/PlatformAdministration/GeneralPlatformSettings"},next:{title:"Branding and Content",permalink:"/docs/category/branding-and-content"}},a={},l=[{value:"Creating an Automation Policy",id:"creating-an-automation-policy",level:2},{value:"Configuring Conditions",id:"configuring-conditions",level:2},{value:"Dunning Conditions",id:"dunning-conditions",level:3},{value:"Trial Conditions",id:"trial-conditions",level:3},{value:"KYC Conditions",id:"kyc-conditions",level:3},{value:"Configuring Actions",id:"configuring-actions",level:2}];function d(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...i.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"configuring-automation-policies",children:"Configuring Automation Policies"})}),"\n",(0,t.jsx)(n.p,{children:"Apiculus allows service providers to define automation policies and workflows to handle scenarios around invoice reminders, non-payments, and customer identity verification."}),"\n",(0,t.jsxs)(n.p,{children:["Navigate to ",(0,t.jsx)(n.strong,{children:"Administration"})," >\xa0",(0,t.jsx)(n.strong,{children:"Settings"})," > ",(0,t.jsx)(n.strong,{children:"Automation"})," to configure automation policies.\r\n",(0,t.jsx)(n.img,{alt:"Configuring Automation Policies",src:e(43824).A+"",width:"1920",height:"869"})]}),"\n",(0,t.jsx)(n.h2,{id:"creating-an-automation-policy",children:"Creating an Automation Policy"}),"\n",(0,t.jsx)(n.p,{children:"Account actions can be automated by creating automation policies that trigger an action based on a trigger condition. These policies can be created globally, which are applied to all new subscriber accounts and can also be overridden for individual accounts."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["To create a new automation policy, click on\xa0",(0,t.jsx)(n.strong,{children:"Add New"})," button.\r\n",(0,t.jsx)(n.img,{alt:"Configuring Automation Policies",src:e(57643).A+"",width:"1920",height:"869"})]}),"\n",(0,t.jsxs)(n.li,{children:["The Create Automation Policy screen opens:\r\n",(0,t.jsx)(n.img,{alt:"Configuring Automation Policies",src:e(83490).A+"",width:"1920",height:"869"})]}),"\n",(0,t.jsxs)(n.li,{children:["Enter the desired ",(0,t.jsx)(n.strong,{children:"Policy Name"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Select the ",(0,t.jsx)(n.strong,{children:"Policy Type"}),". The following are the available options:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Dunning"}),"\n",(0,t.jsx)(n.li,{children:"Trial"}),"\n",(0,t.jsx)(n.li,{children:"KYC"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Configure the ",(0,t.jsx)(n.a,{href:"#configuring-conditions",children:"Conditions"})," and ",(0,t.jsx)(n.a,{href:"#configuring-actions",children:"Actions"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Create"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuring-conditions",children:"Configuring Conditions"}),"\n",(0,t.jsx)(n.p,{children:"The actions are triggered when the configured conditions are met."}),"\n",(0,t.jsxs)(n.p,{children:["Click on\xa0",(0,t.jsx)(n.strong,{children:"Add New Condition"}),"\xa0and select a condition from the drop-down list."]}),"\n",(0,t.jsx)(n.h3,{id:"dunning-conditions",children:"Dunning Conditions"}),"\n",(0,t.jsxs)(n.p,{children:["The following conditions are available when you select ",(0,t.jsx)(n.strong,{children:"Dunning"})," as the ",(0,t.jsx)(n.strong,{children:"Policy Type"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Due date expiry of an invoice"}),"\n",(0,t.jsx)(n.li,{children:"Negative service balance"}),"\n",(0,t.jsx)(n.li,{children:"Service balance below a fixed value"}),"\n",(0,t.jsx)(n.li,{children:"Number of days before the invoice is generated"}),"\n",(0,t.jsx)(n.li,{children:"Number of days upon invoice generation"}),"\n",(0,t.jsx)(n.li,{children:"Service balance as a percentage of the credit limit"}),"\n",(0,t.jsxs)(n.li,{children:["Transaction balance as a percentage of the credit limit\r\n",(0,t.jsx)(n.img,{alt:"Configuring Automation Policies",src:e(38040).A+"",width:"1920",height:"869"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The following is an example of a configured\xa0",(0,t.jsx)(n.strong,{children:"Dunning"}),"\xa0condition trigger that checks for\xa0",(0,t.jsx)(n.strong,{children:"3 days before invoice due date."})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Configuring Automation Policies",src:e(29199).A+"",width:"1920",height:"869"})}),"\n",(0,t.jsx)(n.h3,{id:"trial-conditions",children:"Trial Conditions"}),"\n",(0,t.jsxs)(n.p,{children:["The following conditions are available when you select ",(0,t.jsx)(n.strong,{children:"Trial"})," as the ",(0,t.jsx)(n.strong,{children:"Policy Type"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Account Trial Period Beginning"}),"\n",(0,t.jsx)(n.li,{children:"Account Trial Period Expiry"}),"\n",(0,t.jsx)(n.li,{children:"Subscription Trial Period Beginning"}),"\n",(0,t.jsx)(n.li,{children:"Subscription Trial Period Expiry"}),"\n",(0,t.jsx)(n.li,{children:"Expiry of Selected Trial Programme"}),"\n",(0,t.jsx)(n.li,{children:"On Account Creation (self-sign up or admin-assisted accounts)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Configuring Automation Policies",src:e(7732).A+"",width:"1920",height:"869"})}),"\n",(0,t.jsx)(n.h3,{id:"kyc-conditions",children:"KYC Conditions"}),"\n",(0,t.jsxs)(n.p,{children:["The following conditions are available when you select the ",(0,t.jsx)(n.strong,{children:"KYC"})," as the ",(0,t.jsx)(n.strong,{children:"Policy Type"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"No. of days without account verification."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Configuring Automation Policies",src:e(28861).A+"",width:"1920",height:"869"})}),"\n",(0,t.jsx)(n.h2,{id:"configuring-actions",children:"Configuring Actions"}),"\n",(0,t.jsx)(n.p,{children:"Actions are triggered based on the conditions."}),"\n",(0,t.jsxs)(n.p,{children:["To configure an action, click on ",(0,t.jsx)(n.strong,{children:"Add New Action"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The following are the options available:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Notification via email"}),"\n",(0,t.jsx)(n.li,{children:"Notification via SMS"}),"\n",(0,t.jsx)(n.li,{children:"Notify admin"}),"\n",(0,t.jsx)(n.li,{children:"Suspend account"}),"\n",(0,t.jsx)(n.li,{children:"Restrict account from new purchases"}),"\n",(0,t.jsx)(n.li,{children:"Terminate account and delete all resources"}),"\n",(0,t.jsx)(n.li,{children:"Enroll into Trial Programme"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Configuring Automation Policies",src:e(47654).A+"",width:"1920",height:"869"})}),"\n",(0,t.jsx)(n.p,{children:"For notification actions (email and sms), you can use smart tags to insert dynamic data in the content. The following are the available Smart tags:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Action"}),(0,t.jsx)(n.th,{children:"Smart Tag"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Primary contact name"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"{account_contact_name}"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Organisation name"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"{account_organisation_name}"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Latest invoice number"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"{latest_invoice_number}"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Latest invoice due date"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"{latest_invoice_due_date}"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Latest invoice value"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"{latest_invoice_value}"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Days to trial expiry"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"{trial_expiry_days}"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Trial programme name"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"{trial_programme_name}"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Trial duration"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"{trial_duration}"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Trial discount/benefits"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"{trial_discount}"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Trial start date"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"{trial_start_date}"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Trial end date"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"{trial_end_date}"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"List of open invoices"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"{open_invoices_list}"})})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["The following is an example of a\xa0",(0,t.jsx)(n.strong,{children:"Notify Subscriber on Email"}),"\xa0action using\xa0",(0,t.jsx)(n.strong,{children:"smart tags"}),".\r\n",(0,t.jsx)(n.img,{alt:"Configuring Automation Policies",src:e(75521).A+"",width:"1920",height:"1080"})]})]})}function h(i={}){const{wrapper:n}={...(0,o.R)(),...i.components};return n?(0,t.jsx)(n,{...i,children:(0,t.jsx)(d,{...i})}):d(i)}},43824:(i,n,e)=>{e.d(n,{A:()=>t});const t=e.p+"assets/images/ConfiguringAutomationPolicies1-d62e98513eb85403372024e3f23c864d.png"},57643:(i,n,e)=>{e.d(n,{A:()=>t});const t=e.p+"assets/images/ConfiguringAutomationPolicies2-2caeddd22d22f6dcf5806660a84844a4.png"},83490:(i,n,e)=>{e.d(n,{A:()=>t});const t=e.p+"assets/images/ConfiguringAutomationPolicies3-d85c32328feb2ce01af0cda633cb3208.png"},28861:(i,n,e)=>{e.d(n,{A:()=>t});const t=e.p+"assets/images/ConfiguringAutomationPolicies4-563969b1e654148e784d647b0098f374.png"},7732:(i,n,e)=>{e.d(n,{A:()=>t});const t=e.p+"assets/images/ConfiguringAutomationPolicies5-2c7e2938aa84ba9760644be55dbc7ab5.png"},29199:(i,n,e)=>{e.d(n,{A:()=>t});const t=e.p+"assets/images/ConfiguringAutomationPolicies6-6bba4a02c78bac260c2fefb9a071a279.png"},47654:(i,n,e)=>{e.d(n,{A:()=>t});const t=e.p+"assets/images/ConfiguringAutomationPolicies7-226090f1fc5e888120597267bb5903b9.png"},75521:(i,n,e)=>{e.d(n,{A:()=>t});const t=e.p+"assets/images/ConfiguringAutomationPolicies8-e60ba717f2178a475d2a8f191ad1d6e4.png"},38040:(i,n,e)=>{e.d(n,{A:()=>t});const t=e.p+"assets/images/ConfiguringAutomationPolicies9-83d0f30f05eed4e84bfae09abb151499.png"},28453:(i,n,e)=>{e.d(n,{R:()=>r,x:()=>c});var t=e(96540);const o={},s=t.createContext(o);function r(i){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof i?i(n):{...n,...i}}),[n,i])}function c(i){let n;return n=i.disableParentContext?"function"==typeof i.components?i.components(o):i.components||o:r(i.components),t.createElement(s.Provider,{value:n},i.children)}}}]);