import{_ as o,K as i,o as e,c as l,b as s,w as a,a5 as n,X as t,O as c,a as d}from"./chunks/framework.497554fc.js";const D=JSON.parse('{"title":"Basic Rollup","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Basic Rollup | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"learn/basic-rollup.md","filePath":"learn/basic-rollup.md","lastUpdated":1707511331000}'),h={name:"learn/basic-rollup.md"},u=t('<h1 id="basic-rollup" tabindex="-1">Basic Rollup <a class="header-anchor" href="#basic-rollup" aria-label="Permalink to &quot;Basic Rollup&quot;">​</a></h1><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h2><p>The User submits a transaction to the Aggregator. After Aggregation, the Rollup Full Node can use the Batch and apply the changes to the state.</p><p>During the Header Production, the Header is generated with some security grantees. The Rollup Light Node can consume the Header and validate those security guarantees.</p><h2 id="diagram" tabindex="-1">Diagram <a class="header-anchor" href="#diagram" aria-label="Permalink to &quot;Diagram&quot;">​</a></h2><p>Here is an example of what this design could look like:</p>',6),p=t('<h2 id="aggregation" tabindex="-1">Aggregation <a class="header-anchor" href="#aggregation" aria-label="Permalink to &quot;Aggregation&quot;">​</a></h2><p>TBD</p><h2 id="header-production" tabindex="-1">Header Production <a class="header-anchor" href="#header-production" aria-label="Permalink to &quot;Header Production&quot;">​</a></h2><p>TBD</p><h2 id="censorship-resistance" tabindex="-1">Censorship Resistance <a class="header-anchor" href="#censorship-resistance" aria-label="Permalink to &quot;Censorship Resistance&quot;">​</a></h2><p>TBD</p><h2 id="liveness" tabindex="-1">Liveness <a class="header-anchor" href="#liveness" aria-label="Permalink to &quot;Liveness&quot;">​</a></h2><p>TBD</p><h2 id="rollup-light-nodes" tabindex="-1">Rollup Light Nodes <a class="header-anchor" href="#rollup-light-nodes" aria-label="Permalink to &quot;Rollup Light Nodes&quot;">​</a></h2><p>TBD</p><h2 id="smallest-trust-minimized-setup" tabindex="-1">Smallest Trust-Minimized Setup <a class="header-anchor" href="#smallest-trust-minimized-setup" aria-label="Permalink to &quot;Smallest Trust-Minimized Setup&quot;">​</a></h2><p>TBD</p>',12);function m(A,g,_,B,b,f){const r=i("Mermaid");return e(),l("div",null,[u,(e(),s(n,null,{default:a(()=>[c(r,{id:"mermaid-18",graph:"graph%20TB%0A%20%20U%5B%22User%22%5D%20--%3E%20T%5B%22Transaction%22%5D%0A%20%20T%20--%3E%20A%5B%22Aggregator%22%5D%0A%20%20%0A%20%20A%20--%3E%20B%5B%22Batch%22%5D%0A%20%20B%20--%3E%20HP%5B%22Header%20Producer%22%5D%0A%20%20B%20--%3E%20FN%5B%22Rollup%20Full%20Node%22%5D%0A%20%20%0A%20%20HP%20--%3E%20H%5B%22Header%2B%22%5D%0A%20%20H%20--%3E%20LN%5B%22Rollup%20Light%20Node%22%5D%0A%0A%20%20style%20U%20stroke%3AcurrentColor%2C%20fill%3A%23FFA07A%0A%20%20style%20FN%20stroke%3AcurrentColor%2C%20fill%3A%2398FB98%0A%20%20style%20LN%20stroke%3AcurrentColor%2C%20fill%3A%23D8BFD8%0A%20%20style%20A%20stroke%3AcurrentColor%2C%20fill%3A%20%2387CEFA%0A%20%20style%20HP%20stroke%3AcurrentColor%2C%20fill%3A%23FA8072%0A"})]),fallback:a(()=>[d(" Loading... ")]),_:1})),p])}const P=o(h,[["render",m]]);export{D as __pageData,P as default};
