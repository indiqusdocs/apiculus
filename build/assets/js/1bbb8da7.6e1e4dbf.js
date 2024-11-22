"use strict";(self.webpackChunkApiculus=self.webpackChunkApiculus||[]).push([[3646],{17391:(s,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=t(74848),i=t(28453);const r={sidebar_position:4},o="Using Static Password In Autoscale Group\u2019s VMs",a={id:"Subscribers/Compute/Autoscale/UsingStaticPasswordinAutoScaleGroupVMs",title:"Using Static Password In Autoscale Group\u2019s VMs",description:"1. Create a VPC and add a network tier inside the VPC.",source:"@site/docs/Subscribers/Compute/Autoscale/UsingStaticPasswordinAutoScaleGroupVMs.md",sourceDirName:"Subscribers/Compute/Autoscale",slug:"/Subscribers/Compute/Autoscale/UsingStaticPasswordinAutoScaleGroupVMs",permalink:"/docs/Subscribers/Compute/Autoscale/UsingStaticPasswordinAutoScaleGroupVMs",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebar2",previous:{title:"Creating Autoscale Groups",permalink:"/docs/Subscribers/Compute/Autoscale/CreatingAutoscaleGroups"},next:{title:"Networking",permalink:"/docs/category/networking-1"}},c={},d=[];function l(s){const e={code:"code",h1:"h1",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.header,{children:(0,n.jsx)(e.h1,{id:"using-static-password-in-autoscale-groups-vms",children:"Using Static Password In Autoscale Group\u2019s VMs"})}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Create a VPC and add a network tier inside the VPC.\r\n",(0,n.jsx)(e.img,{alt:"Using Static Password In AutoScale Group\u2019s VMs",src:t(86271).A+"",width:"1892",height:"833"})]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Create a Virtual Machine using the standard templates.\r\n",(0,n.jsx)(e.img,{alt:"Using Static Password In AutoScale Group\u2019s VMs",src:t(996).A+"",width:"1895",height:"826"})]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"Launch the console and login with the initial password (Generated at the time of VM Creation)."}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"Run the following commands."}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsxs)(e.li,{children:["Create own password. ",(0,n.jsx)("br",{}),(0,n.jsx)(e.code,{children:"sudo passwd <yourusername>"})," (ubuntu/root)"]}),"\n",(0,n.jsxs)(e.li,{children:["Disable the password expiry. ",(0,n.jsx)("br",{}),(0,n.jsx)(e.code,{children:"sudo chage -I -1 -m 0 -M 99999 -E -1 <yourusername>"})," (ubuntu/root)"]}),"\n",(0,n.jsxs)(e.li,{children:["Ensure password Authentication is enabled (If using SSH).\xa0",(0,n.jsx)("br",{}),(0,n.jsx)(e.code,{children:"sudo vi /etc/ssh/sshd_config"})]}),"\n",(0,n.jsxs)(e.li,{children:["Make sure the following lines are set correctly. ",(0,n.jsx)("br",{}),(0,n.jsx)(e.code,{children:"PasswordAuthentication yes"})]}),"\n",(0,n.jsxs)(e.li,{children:["Restart the SSH Service. ",(0,n.jsx)("br",{}),(0,n.jsx)(e.code,{children:"sudo systemctl restart ssh"})]}),"\n",(0,n.jsxs)(e.li,{children:["Stop the cloud-init service.  ",(0,n.jsx)("br",{}),(0,n.jsx)(e.code,{children:"sudo systemctl stop cloud-init"})]}),"\n",(0,n.jsxs)(e.li,{children:["Uninstall cloud-init. ",(0,n.jsx)("br",{}),(0,n.jsx)(e.code,{children:"sudo apt purge cloud-init -y"}),(0,n.jsx)("br",{}),(0,n.jsx)(e.code,{children:"sudo rm -rf /etc/cloud"})]}),"\n",(0,n.jsxs)(e.li,{children:["Remove cloud-init data and configuration.  ",(0,n.jsx)("br",{}),(0,n.jsx)(e.code,{children:"sudo rm -rf /var/lib/cloud"})," ",(0,n.jsx)("br",{})," ",(0,n.jsx)(e.code,{children:"sudo sed -i '/cloud-init/d' /etc/default/grub"})]}),"\n",(0,n.jsxs)(e.li,{children:["Remove any cloud-init entry from the grub. ",(0,n.jsx)("br",{}),(0,n.jsx)(e.code,{children:"sudo update-grub"})]}),"\n",(0,n.jsxs)(e.li,{children:["Reboot the system. ",(0,n.jsx)("br",{}),(0,n.jsx)(e.code,{children:"sudo reboot"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Stop The VM from the Apiculus portal and create a Root snapshot of that VM.\r\n",(0,n.jsx)(e.img,{alt:"Using Static Password In AutoScale Group\u2019s VMs",src:t(64237).A+"",width:"938",height:"345"})]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Create Image using the Snapshot. (After creation, it will be visible in the ",(0,n.jsx)(e.strong,{children:"My Image"})," section).\r\n",(0,n.jsx)(e.img,{alt:"Using Static Password In AutoScale Group\u2019s VMs",src:t(34258).A+"",width:"919",height:"307"})]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Navigate to the VPC section, purchase an IPv4 address, and create a load balancing rule using the acquired IPv4 address.\r\n",(0,n.jsx)(e.img,{alt:"Using Static Password In AutoScale Group\u2019s VMs",src:t(55803).A+"",width:"943",height:"294"})]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Create the Auto Scale Group using the custom template (",(0,n.jsx)(e.strong,{children:"My Image"}),").\r\n",(0,n.jsx)(e.img,{alt:"Using Static Password In AutoScale Group\u2019s VMs",src:t(58240).A+"",width:"943",height:"442"})]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"You can now log in to the initial VM using the static password (the same one used for the standard VM). Additionally, you can successfully log in to the secondary VM using the same static password."}),"\n"]}),"\n"]})]})}function u(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(l,{...s})}):l(s)}},86271:(s,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/autoscalegrpvm1-51c007975ad076dc84b98f06b9ceb905.png"},996:(s,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/autoscalegrpvm2-065c1a74abd1b00997b10d22505b3244.png"},64237:(s,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/autoscalegrpvm3-0e27b7abcd5687e77c9793f149d66ee2.png"},34258:(s,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/autoscalegrpvm4-6027c22106d85db2a26ffb31e94f378d.png"},55803:(s,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/autoscalegrpvm5-b8a6713685edbc01cce031d90694e8f7.png"},58240:(s,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/autoscalegrpvm6-183479e1f2a3e698c135138126c5dfeb.png"},28453:(s,e,t)=>{t.d(e,{R:()=>o,x:()=>a});var n=t(96540);const i={},r=n.createContext(i);function o(s){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function a(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:o(s.components),n.createElement(r.Provider,{value:e},s.children)}}}]);