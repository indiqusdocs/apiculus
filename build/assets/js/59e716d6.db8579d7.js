"use strict";(self.webpackChunkApiculus=self.webpackChunkApiculus||[]).push([[8382],{82083:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=s(74848),t=s(28453);const o={sidebar_position:2},a="Creating Windows Instances",c={id:"Subscribers/Compute/WindowsInstances/CreatingWindowsInstances",title:"Creating Windows Instances",description:"Before creating a Windows Instance, it is important to plan the architecture, networking and access to the Windows Instances. As a thumb rule:",source:"@site/docs/Subscribers/Compute/WindowsInstances/CreatingWindowsInstances.md",sourceDirName:"Subscribers/Compute/WindowsInstances",slug:"/Subscribers/Compute/WindowsInstances/CreatingWindowsInstances",permalink:"/docs/Subscribers/Compute/WindowsInstances/CreatingWindowsInstances",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar2",previous:{title:"About Windows Instances",permalink:"/docs/Subscribers/Compute/WindowsInstances/AboutWindowsInstances"},next:{title:"Connecting to a Windows Instance",permalink:"/docs/Subscribers/Compute/WindowsInstances/ConnectingtoaWindowsInstance"}},r={},l=[{value:"Creating a Windows Instance on a Basic/Flat/EC Network",id:"creating-a-windows-instance-on-a-basicflatec-network",level:2},{value:"Creating a Windows Instance on a Tiered/Advanced VPC Network",id:"creating-a-windows-instance-on-a-tieredadvanced-vpc-network",level:2}];function d(n){const e={admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"creating-windows-instances",children:"Creating Windows Instances"})}),"\n",(0,i.jsx)(e.p,{children:"Before creating a Windows Instance, it is important to plan the architecture, networking and access to the Windows Instances. As a thumb rule:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"You can use a \u2018Basic/Flat\u2019 (or EC, elastic compute) Windows Instance to get started quickly and set up your Linux Instances behind Apiculus-powered cloud\u2019s global server load balancer (GSLB) and control access by setting up virtual firewall rules; or;"}),"\n",(0,i.jsx)(e.li,{children:"You can use a \u2018tiered\u2019 network (or Advanced VPC, virtual private cloud) Windows Instances to configure advanced networking and application architectures and control access by setting up access control lists."}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"creating-a-windows-instance-on-a-basicflatec-network",children:"Creating a Windows Instance on a Basic/Flat/EC Network"}),"\n",(0,i.jsx)(e.p,{children:"To create a Windows instance on a basic/flat networking zone, follow the below steps:"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["Navigate to\xa0",(0,i.jsx)(e.strong,{children:"Compute > Windows Instances"}),"."]}),"\n",(0,i.jsxs)(e.li,{children:["Click on the\xa0",(0,i.jsx)(e.strong,{children:"+ NEW WINDOWS INSTANCE"}),"\xa0from the top right."]}),"\n",(0,i.jsx)(e.li,{children:"Enter the name for your Windows instance by following the naming convention mentioned below in the helper text."}),"\n",(0,i.jsx)(e.li,{children:"Choose an Availability Zone, which is the geographical region where your Instance will be deployed. The chosen option should be the Basic/Flat/EC-type networking zones from all available AZs."}),"\n",(0,i.jsx)(e.li,{children:"Choose a security group from the available options.\xa0"}),"\n",(0,i.jsxs)(e.li,{children:["Choose an Image to run on your Instance. This can be an operating system or a custom image that is available under\xa0",(0,i.jsx)(e.strong,{children:"MY IMAGES."})]}),"\n",(0,i.jsx)(e.li,{children:"Choose a compute pack from the available compute collections."}),"\n",(0,i.jsx)(e.li,{children:"Choose a Root disk from the available Disk packs, or you can use the free size option to specify the Root Disk."}),"\n",(0,i.jsx)(e.li,{children:"Verify the Estimated Cost of your Windows Instance based on the specifications you have chosen from the Summary and Estimated Costs Section (\xa0Here, both Hourly and Monthly Prices summary will be displayed)."}),"\n",(0,i.jsx)(e.li,{children:"Click on the check box after going through the policies mentioned by your cloud service provider."}),"\n",(0,i.jsxs)(e.li,{children:["Clicking on the BUY HOURLY or BUY MONTHLY button, a confirmation pop-over will open up, and the price summary will be displayed along with the discount codes if you have any in your account.\xa0","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["You can apply any of the discount codes listed by clicking on the\xa0",(0,i.jsx)(e.strong,{children:"APPLY"}),"\xa0button.\xa0"]}),"\n",(0,i.jsxs)(e.li,{children:["You can also remove the applied discount code by clicking the\xa0",(0,i.jsx)(e.strong,{children:"REMOVE"}),"\xa0button.\xa0"]}),"\n",(0,i.jsxs)(e.li,{children:["Clicking on the\xa0",(0,i.jsx)(e.strong,{children:"CANCEL"}),"\xa0button, this action will be canceled."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Click on the\xa0",(0,i.jsx)(e.strong,{children:"CONFIRM"}),"\xa0to create the Windows Instance."]}),"\n"]}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsx)(e.p,{children:"This might take up to 5-8 minutes. You may use the Cloud Console during this time, but it is advised that you do not refresh the browser window."})}),"\n",(0,i.jsxs)(e.p,{children:["Once ready, you\u2019ll be notified of this purchase on your email address on record. The newly created Windows Instances can be accessed from\xa0",(0,i.jsx)(e.strong,{children:"COMPUTE >"}),"\xa0",(0,i.jsx)(e.strong,{children:"Windows Instances"}),"\xa0on the main navigation panel."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Creating Windows Instances",src:s(49720).A+"",width:"1600",height:"755"})}),"\n",(0,i.jsx)(e.h2,{id:"creating-a-windows-instance-on-a-tieredadvanced-vpc-network",children:"Creating a Windows Instance on a Tiered/Advanced VPC Network"}),"\n",(0,i.jsx)(e.p,{children:"To create a Windows instance on an advanced VPC AZ, follow the below steps:"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["Navigate to\xa0",(0,i.jsx)(e.strong,{children:"Compute > Windows"}),"\xa0Instances"]}),"\n",(0,i.jsxs)(e.li,{children:["Click on the\xa0",(0,i.jsx)(e.strong,{children:"+ NEW WINDOWS INSTANCE"}),"\xa0from the top right."]}),"\n",(0,i.jsx)(e.li,{children:"Enter the name for your Windows instance by following the naming convention mentioned below in the helper text."}),"\n",(0,i.jsxs)(e.li,{children:["Choose an Availability Zone, which is the geographical region where your Instance will be deployed. The chosen option should be the\xa0",(0,i.jsx)(e.strong,{children:"advanced VPC"}),"\xa0from all available AZs."]}),"\n",(0,i.jsxs)(e.li,{children:["\xa0Select a VPC network from the\xa0",(0,i.jsx)(e.strong,{children:"Select Network"}),"\xa0Dropdown and select the appropriate tier listed in\xa0",(0,i.jsx)(e.strong,{children:"Select a Network Tier"}),".","\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsx)(e.p,{children:"To add a Windows Instance to a VPC, you need to have a VPC configured with at least one tier."})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Choose an Image to run on your Instance. This can be an operating system or a custom image that is available under\xa0",(0,i.jsx)(e.strong,{children:"MY IMAGES."})]}),"\n",(0,i.jsx)(e.li,{children:"Choose a compute pack from the available compute collections."}),"\n",(0,i.jsx)(e.li,{children:"Choose a Root disk from the available Disk packs, or you can use the free size option to specify the Root Disk."}),"\n",(0,i.jsx)(e.li,{children:"Verify the Estimated Cost of your Windows Instance based on the specifications you have \xa0 chosen from the Summary and Estimated Costs Section (Here, both Hourly and Monthly Prices summary will be displayed)"}),"\n",(0,i.jsx)(e.li,{children:"Click on the check box after going through the policies mentioned by your cloud service provider."}),"\n",(0,i.jsxs)(e.li,{children:["Clicking on the BUY HOURLY or BUY MONTHLY button, a confirmation pop-over will open up, and the price summary will be displayed along with the discount codes if you have any in your account.\xa0","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["You can apply any of the discount codes listed by clicking on the\xa0",(0,i.jsx)(e.strong,{children:"APPLY"}),"\xa0button.\xa0"]}),"\n",(0,i.jsxs)(e.li,{children:["You can also remove the applied discount code by clicking the\xa0",(0,i.jsx)(e.strong,{children:"REMOVE"}),"\xa0button.\xa0"]}),"\n",(0,i.jsxs)(e.li,{children:["Clicking on the\xa0",(0,i.jsx)(e.strong,{children:"CANCEL"}),"\xa0button, this action will be canceled."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Click on the\xa0",(0,i.jsx)(e.strong,{children:"CONFIRM"}),"\xa0to create the Windows Instance."]}),"\n"]}),"\n",(0,i.jsxs)(e.admonition,{type:"note",children:[(0,i.jsx)(e.mdxAdmonitionTitle,{}),(0,i.jsx)(e.p,{children:"This might take up to 5-8 minutes. You may use the Cloud Console during this time, but it is advised that you do not refresh the browser window."})]}),"\n",(0,i.jsxs)(e.p,{children:["Once ready, you\u2019ll be notified of this purchase on your email address on record. The newly created Windows Instances can be accessed from\xa0",(0,i.jsx)(e.strong,{children:"Compute >"}),"\xa0",(0,i.jsx)(e.strong,{children:"Windows Instances"}),"\xa0on the main navigation panel."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Creating Windows Instances",src:s(40563).A+"",width:"1600",height:"751"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Creating Windows Instances",src:s(73450).A+"",width:"1600",height:"753"})})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},49720:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/CreatingWindowsInstances1-e6f664a352348e33a79a5ece3ff45527.png"},40563:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/CreatingWindowsInstances2-8d2f2f5d15fe027ea4cf04ce2552859b.png"},73450:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/CreatingWindowsInstances3-cb62b89a60ca95cb769487dba063118f.png"},28453:(n,e,s)=>{s.d(e,{R:()=>a,x:()=>c});var i=s(96540);const t={},o=i.createContext(t);function a(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);