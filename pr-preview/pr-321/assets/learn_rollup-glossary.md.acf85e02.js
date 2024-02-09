import{_ as a,o as e,c as o,X as t}from"./chunks/framework.497554fc.js";const b=JSON.parse('{"title":"Rollup glossary","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Rollup glossary | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"learn/rollup-glossary.md","filePath":"learn/rollup-glossary.md","lastUpdated":1707511331000}'),r={name:"learn/rollup-glossary.md"},l=t('<h1 id="rollup-glossary" tabindex="-1">Rollup glossary <a class="header-anchor" href="#rollup-glossary" aria-label="Permalink to &quot;Rollup glossary&quot;">​</a></h1><p>A wiki of terms to define different Rollup designs and terminology:</p><h2 id="terminology" tabindex="-1">Terminology <a class="header-anchor" href="#terminology" aria-label="Permalink to &quot;Terminology&quot;">​</a></h2><h3 id="aggregation" tabindex="-1">Aggregation <a class="header-anchor" href="#aggregation" aria-label="Permalink to &quot;Aggregation&quot;">​</a></h3><p>Aggregation is the process of batching transactions into one batch. A batch of transactions consists of one or more transactions.</p><h3 id="based-rollup" tabindex="-1">Based rollup <a class="header-anchor" href="#based-rollup" aria-label="Permalink to &quot;Based rollup&quot;">​</a></h3><p>A based rollup is a rollup that delegates aggregation to a DA-Layer.</p><h3 id="execution" tabindex="-1">Execution <a class="header-anchor" href="#execution" aria-label="Permalink to &quot;Execution&quot;">​</a></h3><p>Execution is the process by which the transactions in the blockchain are processed and their effects are applied to the state of the blockchain.</p><h3 id="header-production" tabindex="-1">Header production <a class="header-anchor" href="#header-production" aria-label="Permalink to &quot;Header production&quot;">​</a></h3><p>Header production is the process of creating the Rollup header backed by specific security properties.</p><h3 id="inclusion" tabindex="-1">Inclusion <a class="header-anchor" href="#inclusion" aria-label="Permalink to &quot;Inclusion&quot;">​</a></h3><p>Inclusion is the process by which a transaction is accepted into the blockchain.</p><h3 id="ordering" tabindex="-1">Ordering <a class="header-anchor" href="#ordering" aria-label="Permalink to &quot;Ordering&quot;">​</a></h3><p>Ordering is the process of arranging transactions in a specific sequence in the blockchain.</p><h3 id="pessimistic-rollup" tabindex="-1">Pessimistic rollup <a class="header-anchor" href="#pessimistic-rollup" aria-label="Permalink to &quot;Pessimistic rollup&quot;">​</a></h3><p>A pessimistic rollup is a rollup that only supports full nodes that replay all the transactions in the rollup to check its validity.</p><h3 id="rollup-block" tabindex="-1">Rollup Block <a class="header-anchor" href="#rollup-block" aria-label="Permalink to &quot;Rollup Block&quot;">​</a></h3><p>A rollup block is a data structure representing the Blockchain at a certain height. It consists of <a href="#rollup-data"><strong>Rollup Data</strong></a> and <a href="#rollup-header"><strong>Rollup Headers</strong></a>.</p><h3 id="rollup-data" tabindex="-1">Rollup Data <a class="header-anchor" href="#rollup-data" aria-label="Permalink to &quot;Rollup Data&quot;">​</a></h3><p>Rollup data is either a batch of transactions or the state difference between transaction batches.</p><h3 id="rollup-header" tabindex="-1">Rollup Header <a class="header-anchor" href="#rollup-header" aria-label="Permalink to &quot;Rollup Header&quot;">​</a></h3><p>is metadata about the block which at minimum includes a commitment to the transactions in that block.</p><h3 id="rollups" tabindex="-1">Rollups <a class="header-anchor" href="#rollups" aria-label="Permalink to &quot;Rollups&quot;">​</a></h3><p>Rollups are blockchains that post their Transaction Data to another blockchain and inherit its consensus and data availability.</p><h3 id="sequencing" tabindex="-1">Sequencing <a class="header-anchor" href="#sequencing" aria-label="Permalink to &quot;Sequencing&quot;">​</a></h3><p>Sequencing is the process of aggregation and header production.</p>',27),i=[l];function n(s,c,h,p,d,u){return e(),o("div",null,i)}const f=a(r,[["render",n]]);export{b as __pageData,f as default};
