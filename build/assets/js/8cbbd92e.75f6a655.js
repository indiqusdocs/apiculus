"use strict";(self.webpackChunkApiculus=self.webpackChunkApiculus||[]).push([[5786],{69413:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=i(74848),t=i(28453);const r={sidebar_position:6},o="Configuring Alerts on Windows Instances",a={id:"Subscribers/Compute/WindowsInstances/ConfiguringAlertsonWindowsInstances",title:"Configuring Alerts on Windows Instances",description:"From Operating Windows Instances, navigate into a Windows Instance and access the Alerts tab to view the configured alerts or configure new ones.",source:"@site/docs/Subscribers/Compute/WindowsInstances/ConfiguringAlertsonWindowsInstances.md",sourceDirName:"Subscribers/Compute/WindowsInstances",slug:"/Subscribers/Compute/WindowsInstances/ConfiguringAlertsonWindowsInstances",permalink:"/docs/Subscribers/Compute/WindowsInstances/ConfiguringAlertsonWindowsInstances",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"sidebar2",previous:{title:"Viewing Graphs and Utilisation of Windows Instances",permalink:"/docs/Subscribers/Compute/WindowsInstances/ViewingGraphsandUtilisationofWindowsInstances"},next:{title:"Volume Management with Windows Instances",permalink:"/docs/Subscribers/Compute/WindowsInstances/VolumeManagementwithWindowsInstances"}},d={},c=[];function l(e){const n={a:"a",admonition:"admonition",h1:"h1",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"configuring-alerts-on-windows-instances",children:"Configuring Alerts on Windows Instances"})}),"\n",(0,s.jsxs)(n.p,{children:["From ",(0,s.jsx)(n.a,{href:"AboutWindowsInstances",children:"Operating Windows Instances"}),", navigate into a Windows Instance and access the ",(0,s.jsx)(n.strong,{children:"Alerts"})," tab to view the configured alerts or configure new ones."]}),"\n",(0,s.jsx)(n.p,{children:"Alerts get triggered whenever a configured condition is met. You can create multiple alerts on an instance. Alerts are sent to recipients that you can define and manage."}),"\n",(0,s.jsx)(n.p,{children:"Subscribers can configure alerts for instances running on the Apiculus. Subscribers can define alerts for Instances and configure the email recipients for these alerts using a straightforward and easy-to-use interface."}),"\n",(0,s.jsx)(n.h1,{id:"instance-alerts",children:"Instance Alerts"}),"\n",(0,s.jsx)(n.p,{children:"The Alerts tab can be accessed from the instances details. It will list all the alerts already configured for that particular VM. In addition, it will show the details, i.e.,\xa0ID, the name for the alert,\xa0Parameter, Trigger When, Value, and Reading Duration."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Configuring Alerts on Windows Instances",src:i(58872).A+"",width:"1600",height:"754"})}),"\n",(0,s.jsx)(n.h1,{id:"adding-an-alert",children:"Adding an Alert"}),"\n",(0,s.jsxs)(n.p,{children:["Subscribers can create or add alerts simply by clicking on the\xa0",(0,s.jsx)(n.strong,{children:"Add Alert"}),"\xa0button. The following screen will open up, and the subscriber needs to describe the details of the alert."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Configuring Alerts on Windows Instances",src:i(33363).A+"",width:"1600",height:"740"})}),"\n",(0,s.jsx)(n.p,{children:"The various fields of the add alert page are described below:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Name-\xa0You can define the name for your alert."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Choose parameter -\xa0This option will allow you to define what parameter needs to be monitored to trigger the alert email. Apiculus Cloud supports CPU, RAM, Disk, 1-min Load Average, 5- min Load Average, 15- min Load Average parameter_s."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Trigger when -\xa0This set of options lets you define whether to trigger above or below a custom value."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Value\xa0\u2013 You can define the Value.\xa0"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Reading duration -\xa0This option lets you define the breach window, i.e., the duration for which the breach has to be consistent to trigger the alert email."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Send alert to -Email ids can be added here, or also you can add them by using the configure recipients\xa0"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"1-min Load Average - How many processes were active, executed, or awaiting execution at the last minute."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"5-min Load Average - How many processes were active, executed, or awaiting execution in the last five minutes."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"15-min Load Average - How many processes were active, executed, or awaiting execution in the last fifteen minutes."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"configuring-recipients",children:"Configuring Recipients"}),"\n",(0,s.jsx)(n.p,{children:"This will list and display all the email IDs already configured for the alerts. You can delete the existing ids and add other email ids by following the steps below."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Click on the\xa0",(0,s.jsx)(n.strong,{children:"Configure Recipients"}),"\xa0button."]}),"\n",(0,s.jsxs)(n.li,{children:["Click on\xa0",(0,s.jsx)(n.strong,{children:"+ Add More Recipients"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Add the email ids; multiple ids can be added and separated by (Comma)."}),"\n",(0,s.jsxs)(n.li,{children:["Click on the\xa0",(0,s.jsx)(n.strong,{children:"+"}),"\xa0icon."]}),"\n",(0,s.jsxs)(n.li,{children:["Then click on the\xa0",(0,s.jsx)(n.strong,{children:"Update"}),"\xa0button, and update the recipient's list."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Configuring Alerts on Windows Instances",src:i(82602).A+"",width:"1600",height:"749"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"All the recipients configured will receive all the setup alerts. If no email ID is configured or added, then no email will be sent for the already configured alerts."})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},58872:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ConfiguringAlerts1-8a5604b101b3791cc86f50578d9890cf.png"},33363:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ConfiguringAlerts2-5cb4cf9da254d7d945239278d46eb044.png"},82602:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ConfiguringAlerts3-6f480cdbe3f243194d92ed9249500f25.png"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(96540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);