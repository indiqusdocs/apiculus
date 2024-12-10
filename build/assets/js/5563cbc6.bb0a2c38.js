"use strict";(self.webpackChunkApiculus=self.webpackChunkApiculus||[]).push([[8088],{26172:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=s(74848),t=s(28453);const r={sidebar_position:7},a="IPv4 Addresses and VPC",o={id:"Subscribers/Networking/VirtualPrivateClouds/IPv4AddressesandVPC",title:"IPv4 Addresses and VPC",description:"IPv4 Addresses are an integral part of using VPC networking, and need to be used to access various components of the VPC. By default, a public IPv4 Address is assigned to the VR which can communicate through the internet to transmit traffic to/from the VR. This IPv4 can also be used for configuring remote access (L2TP) and site-to-site (IPSec) VPN connections.",source:"@site/docs/Subscribers/Networking/VirtualPrivateClouds/IPv4AddressesandVPC.md",sourceDirName:"Subscribers/Networking/VirtualPrivateClouds",slug:"/Subscribers/Networking/VirtualPrivateClouds/IPv4AddressesandVPC",permalink:"/docs/Subscribers/Networking/VirtualPrivateClouds/IPv4AddressesandVPC",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"sidebar2",previous:{title:"Managing VPC Instances",permalink:"/docs/Subscribers/Networking/VirtualPrivateClouds/ManagingVPCInstances"},next:{title:"Working with VPN Connections in a VPC",permalink:"/docs/Subscribers/Networking/VirtualPrivateClouds/WorkingwithVPNConnectionsinaVPC"}},d={},l=[{value:"Using Additional IPv4",id:"using-additional-ipv4",level:2},{value:"Configuring Load Balancing\xa0",id:"configuring-load-balancing",level:2},{value:"Configuring Port Forwarding",id:"configuring-port-forwarding",level:2},{value:"Configuring Static NAT",id:"configuring-static-nat",level:2}];function c(e){const n={admonition:"admonition",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"ipv4-addresses-and-vpc",children:"IPv4 Addresses and VPC"})}),"\n",(0,i.jsx)(n.p,{children:"IPv4 Addresses are an integral part of using VPC networking, and need to be used to access various components of the VPC. By default, a public IPv4 Address is assigned to the VR which can communicate through the internet to transmit traffic to/from the VR. This IPv4 can also be used for configuring remote access (L2TP) and site-to-site (IPSec) VPN connections."}),"\n",(0,i.jsx)(n.h2,{id:"using-additional-ipv4",children:"Using Additional IPv4"}),"\n",(0,i.jsx)(n.p,{children:"Primarily, IPv4 Addresses can be used for configuring access and NAT-ing via:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Port forwarding"}),"\n",(0,i.jsx)(n.li,{children:"Load balancing"}),"\n",(0,i.jsx)(n.li,{children:"Static NAT"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"IPv4 Addresses and VPC",src:s(77727).A+"",width:"2880",height:"1800"})}),"\n",(0,i.jsxs)(n.p,{children:["As a first step, a new IPv4 Address needs to be added to the VPC, which can be done using the\xa0",(0,i.jsx)(n.strong,{children:"ADD PUBLIC IPv4 ADDRESS"}),"\xa0button."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Public IPv4 addresses may carry a price which may vary depending on availability of IPv4 addresses in the country of operation, and/or how the service provider has priced them."})}),"\n",(0,i.jsx)(n.h2,{id:"configuring-load-balancing",children:"Configuring Load Balancing\xa0"}),"\n",(0,i.jsxs)(n.p,{children:["Choosing\xa0",(0,i.jsx)(n.strong,{children:"+ Add Load Balancer Rule"})," from the menu will enable this IP address to be used as a load balancer. You\u2019ll be asked the following details to first set this up as a load-balancing IP:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A\xa0",(0,i.jsx)(n.strong,{children:"name"}),"\xa0and\xa0",(0,i.jsx)(n.strong,{children:"description"}),"\xa0for the load balancer rule."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Protocol"}),"\xa0to use for the load balancer."]}),"\n",(0,i.jsxs)(n.li,{children:["The\xa0",(0,i.jsx)(n.strong,{children:"load balancing algorithm"}),"\xa0to use."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Public"}),"\xa0and\xa0",(0,i.jsx)(n.strong,{children:"private"}),"\xa0port mapping."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"IPv4 Addresses and VPC",src:s(76100).A+"",width:"2880",height:"1800"})}),"\n",(0,i.jsx)(n.p,{children:"Once the load balancer rule has been created, you can now go into the load balancer and add (or remove) virtual machines to this rule. To do this, follow these steps:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Click on the\xa0",(0,i.jsx)(n.strong,{children:"Load Balancer Rule"}),"\xa0option next to the IP address listing, which would\u2019ve got enabled now."]}),"\n",(0,i.jsxs)(n.li,{children:["In the dialog box that opens, click on\xa0",(0,i.jsx)(n.strong,{children:"Add/Remove Virtual Machines"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["In the overlay box that opens, you\u2019ll be able to see virtual machines that are part of this load balancer, and the machines that are available to be added to this load balancer. Click on add (or remove) and\xa0",(0,i.jsx)(n.strong,{children:"confirm"}),"\xa0to update the load balancer rule."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"IPv4 Addresses and VPC",src:s(55693).A+"",width:"2880",height:"1800"})}),"\n",(0,i.jsx)(n.p,{children:"To test whether the load balancer has been configured correctly, you can log into the virtual machines that are behind this load balancer individually, create an index.html on each virtual machine (with different content), and access the public IP address directly from your browser. If configured correctly, each browser page refresh should take turns in loading the two index.html pages."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["A load balancer IP rule can only be configured if the tier/subnet type is set up_\xa0",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Public IP"})}),"_."]})}),"\n",(0,i.jsx)(n.h2,{id:"configuring-port-forwarding",children:"Configuring Port Forwarding"}),"\n",(0,i.jsx)(n.p,{children:"A port forwarding rule is required for accessing the virtual machines contained in a VPC. Since virtual machines in a VPC only have a private IP address, a public IP address is required for each virtual machine that you want to access from your terminal."}),"\n",(0,i.jsxs)(n.p,{children:["Choosing\xa0",(0,i.jsx)(n.strong,{children:"+ Add Port Forwarding Rule"}),"\xa0from the IP address menu will enable this IP address to be used as a port-forwarding IP. You\u2019ll be asked the following details to first set this up as a port-forwarding IP:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Protocol"}),"\xa0for port-forwarding."]}),"\n",(0,i.jsxs)(n.li,{children:["The\xa0",(0,i.jsx)(n.strong,{children:"tier"}),"\xa0and the\xa0",(0,i.jsx)(n.strong,{children:"virtual machine"}),"\xa0to port-forward to."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Public"}),"\xa0and\xa0",(0,i.jsx)(n.strong,{children:"private port"}),"\xa0ranges.\xa0",(0,i.jsx)(n.em,{children:"Please note that the"}),"\xa0",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"end ports"})}),"\xa0",(0,i.jsx)(n.em,{children:"should be equal to or greater than the"}),"\xa0",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"start ports"})}),(0,i.jsx)(n.em,{children:"."})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"IPv4 Addresses and VPC",src:s(25714).A+"",width:"2880",height:"1800"})}),"\n",(0,i.jsx)(n.p,{children:"Once the port-forwarding rule has been created, you can now go into the port-fowarding IP address and view details of this rule. To do this, follow these steps:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Click on the\xa0",(0,i.jsx)(n.strong,{children:"Port Forwarding Rule"}),"\xa0option next to the IP address listing, which would\u2019ve been enabled now."]}),"\n",(0,i.jsx)(n.li,{children:"In the dialog box that opens, you can view the virtual machine that this rule has been configured on along with the private and public port range mappings."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To test whether port-forwarding has been configured correctly, you can use the public IP to SSH into the virtual machine that the IP port-forwards to."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Please note that a port-forwarding IP address can be used to configure multiple port-forwarding access rules but with one virtual machine. To port-forward into a different virtual machine, you\u2019ll need to purchase an additional public IP address."})}),"\n",(0,i.jsx)(n.h2,{id:"configuring-static-nat",children:"Configuring Static NAT"}),"\n",(0,i.jsxs)(n.p,{children:["Choosing the\xa0",(0,i.jsx)(n.strong,{children:"Enable Static NAT"})," will allow you to use this public IP as a static translation to any of the contained virtual machines. To use this as a static NAT, choose the virtual machine you want to translate this public IP to in the dialog box that opens and click on\xa0",(0,i.jsx)(n.strong,{children:"enable"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"IPv4 Addresses and VPC",src:s(30907).A+"",width:"2880",height:"1800"})}),"\n",(0,i.jsx)(n.p,{children:"To test whether static NAT has been configured correctly, you can use the public IP to SSH into the virtual machine that the IP is NAT-ing to."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},77727:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/IPv4AddressesandVPC1-cb672ef90b4e0a15e1d77ca4bda7aa84.png"},76100:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/IPv4AddressesandVPC2-559f6bc6c12bf7594fc21a32462ec40c.png"},55693:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/IPv4AddressesandVPC3-b6e81d60faad4d166e5f70d7e83ec83a.png"},25714:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/IPv4AddressesandVPC4-1b506c3197970823f0171b9a145b7e77.png"},30907:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/IPv4AddressesandVPC5-7ac2743da2be9da93b9ca0655b5ce408.png"},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var i=s(96540);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);