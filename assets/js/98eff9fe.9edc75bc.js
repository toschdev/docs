"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294),i=n(6010);const o="tabItem_Ymn6";function a(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,a),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),i=n(7294),o=n(6010),a=n(2389),s=n(7392),p=n(7094),l=n(2466);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:a,values:d,groupId:m,className:g}=e,h=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,s.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===a?a:a??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==f&&!k.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:v}=(0,p.U)(),[N,C]=(0,i.useState)(f),w=[],{blockElementScrollPositionUntilNextRender:R}=(0,l.o5)();if(null!=m){const e=b[m];null!=e&&e!==N&&k.some((t=>t.value===e))&&C(e)}const x=e=>{const t=e.currentTarget,n=w.indexOf(t),r=k[n].value;r!==N&&(R(t),C(r),null!=m&&v(m,String(r)))},I=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}t?.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},g)},k.map((e=>{let{value:t,label:n,attributes:a}=e;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>w.push(e),onKeyDown:I,onClick:x},a,{className:(0,o.Z)("tabs__item",u,a?.className,{"tabs__item--active":N===t})}),n??t)}))),t?(0,i.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,a.Z)();return i.createElement(d,(0,r.Z)({key:String(t)},e))}},4205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905)),o=n(5488),a=n(5162);const s={sidebar_label:"Recipe book tutorial",description:"Build a recipe book rollup with Ignite CLI, Celestia, and Rollkit"},p="\ud83e\udd57 Recipe book rollup",l={unversionedId:"tutorials/recipe-book",id:"tutorials/recipe-book",title:"\ud83e\udd57 Recipe book rollup",description:"Build a recipe book rollup with Ignite CLI, Celestia, and Rollkit",source:"@site/docs/tutorials/recipe-book.mdx",sourceDirName:"tutorials",slug:"/tutorials/recipe-book",permalink:"/docs/tutorials/recipe-book",draft:!1,editUrl:"https://github.com/rollkit/docs/tree/main/docs/tutorials/recipe-book.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Recipe book tutorial",description:"Build a recipe book rollup with Ignite CLI, Celestia, and Rollkit"},sidebar:"docs",previous:{title:"GM world frontend tutorial",permalink:"/docs/tutorials/gm-world-frontend"},next:{title:"How to restart your rollup",permalink:"/docs/tutorials/restart-rollkit-rollup"}},c={},u=[{value:"\ud83d\udcd6 Overview",id:"-overview",level:2},{value:"\ud83d\udcbb Prerequisites",id:"-prerequisites",level:2},{value:"\ud83c\udfd7\xa0Scaffolding your rollup",id:"scaffolding-your-rollup",level:2},{value:"\ud83d\udd25 Use Ignite CLI to scaffold a <code>recipes</code> rollup",id:"-use-ignite-cli-to-scaffold-a-recipes-rollup",level:3},{value:"\ud83d\udc8e Installing Rollkit",id:"-installing-rollkit",level:3},{value:"\ud83d\udcac\xa0Message types",id:"message-types",level:2},{value:"\u2728\xa0Create message types",id:"create-message-types",level:3},{value:"\ud83e\udd3f\xa0Diving deeper into the message code",id:"diving-deeper-into-the-message-code",level:4},{value:"\ud83d\udcd5\xa0Define messages logic",id:"define-messages-logic",level:3},{value:"\ud83d\udd01 Keepers",id:"-keepers",level:2},{value:"\ud83d\udcd7\xa0Define <code>Recipe</code> type and <code>AppendRecipe</code> keeper method",id:"define-recipe-type-and-appendrecipe-keeper-method",level:3},{value:"\ud83d\udcd8\xa0Define keeper methods",id:"define-keeper-methods",level:3},{value:"\ud83c\udf7d\ufe0f\xa0Querying recipes",id:"\ufe0fquerying-recipes",level:2},{value:"\ud83d\udda5 Query recipes",id:"-query-recipes",level:3},{value:"\ud83d\udc69\u200d\ud83c\udf73 Running the recipes rollup",id:"-running-the-recipes-rollup",level:2},{value:"\u2728 Run a Celestia light node",id:"-run-a-celestia-light-node",level:3},{value:"\ud83d\uddde\ufe0f Start the recipes rollup",id:"\ufe0f-start-the-recipes-rollup",level:3},{value:"\u2328\ufe0f\xa0Query your recipes with the CLI",id:"\ufe0fquery-your-recipes-with-the-cli",level:3}],d={toc:u};function m(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-recipe-book-rollup"},"\ud83e\udd57 Recipe book rollup"),(0,i.kt)("h2",{id:"-overview"},"\ud83d\udcd6 Overview"),(0,i.kt)("p",null,"In this tutorial, we are going to build a blockchain\nfor your favorite recipes. The goal of this tutorial\nis to create a Rollkit rollup with a module that allows\nyou to write and read data to and from your application-specific\nblockchain. The end user will be able to submit new\nrecipes and read them from the blockchain."),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/gm-world"},(0,i.kt)("inlineCode",{parentName:"a"},"GM World")," tutorial"),", we defined a\nnew API endpoint and modified a keeper query function\nto return static data. In this tutorial, we will be\nmodifying the state with transactions (Cosmos SDK messages)\nthat are routed to a module and its message handlers, which\nare sent to the ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes")," blockchain."),(0,i.kt)("admonition",{title:"note",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This tutorial will explore developing with Rollkit,\nwhich is still in Alpha stage. If you run into bugs, please write a Github\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rollkit/docs/issues/new"},"Issue ticket"),"\nor let us know in our ",(0,i.kt)("a",{parentName:"p",href:"https://t.me/rollkit"},"Telegram"),".")),(0,i.kt)("admonition",{title:"caution",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"The script for this tutorial is built for Celestia's\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/arabica-devnet"},"Arabica devnet"),".")),(0,i.kt)("h2",{id:"-prerequisites"},"\ud83d\udcbb Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/gm-world"},"GM World tutorial"))),(0,i.kt)("h2",{id:"scaffolding-your-rollup"},"\ud83c\udfd7\xa0Scaffolding your rollup"),(0,i.kt)("h3",{id:"-use-ignite-cli-to-scaffold-a-recipes-rollup"},"\ud83d\udd25 Use Ignite CLI to scaffold a ",(0,i.kt)("inlineCode",{parentName:"h3"},"recipes")," rollup"),(0,i.kt)("p",null,"Run the following command to scaffold your ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes")," chain using Ignite CLI:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ignite scaffold chain recipes --address-prefix recipes\n")),(0,i.kt)("p",null,"Your new ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes")," chain has been scaffolded and\n",(0,i.kt)("inlineCode",{parentName:"p"},"--address-prefix recipes")," allows the address prefix\nto be ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"cosmos"),"."),(0,i.kt)("p",null,"Change into the ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd recipes\n")),(0,i.kt)("h3",{id:"-installing-rollkit"},"\ud83d\udc8e Installing Rollkit"),(0,i.kt)("p",null,"To swap out Tendermint for Rollkit, run the following commands:"),(0,i.kt)(o.Z,{groupId:"network",mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"local-devnet",label:"Local Devnet",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go mod edit -replace github.com/cosmos/cosmos-sdk=github.com/rollkit/cosmos-sdk@v0.46.13-rollkit-v0.9.0-no-fraud-proofs\ngo mod edit -replace github.com/tendermint/tendermint=github.com/rollkit/cometbft@v0.0.0-20230524013049-75272ebaee38\ngo mod tidy\ngo mod download\n"))),(0,i.kt)(a.Z,{value:"arabica",label:"Arabica Devnet",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go mod edit -replace github.com/cosmos/cosmos-sdk=github.com/rollkit/cosmos-sdk@v0.46.13-rollkit-v0.9.0-no-fraud-proofs\ngo mod edit -replace github.com/tendermint/tendermint=github.com/rollkit/cometbft@v0.0.0-20230524013049-75272ebaee38\ngo mod tidy\ngo mod download\n")))),(0,i.kt)("h2",{id:"message-types"},"\ud83d\udcac\xa0Message types"),(0,i.kt)("h3",{id:"create-message-types"},"\u2728\xa0Create message types"),(0,i.kt)("p",null,"Create a message type and its handler with the ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ignite scaffold message createRecipe dish ingredients\n")),(0,i.kt)("p",null,"Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"modify proto/recipes/recipes/tx.proto\nmodify x/recipes/client/cli/tx.go\ncreate x/recipes/client/cli/tx_create_recipe.go\ncreate x/recipes/keeper/msg_server_create_recipe.go\nmodify x/recipes/module_simulation.go\ncreate x/recipes/simulation/create_recipe.go\nmodify x/recipes/types/codec.go\ncreate x/recipes/types/message_create_recipe.go\ncreate x/recipes/types/message_create_recipe_test.go\n\n\ud83c\udf89 Created a message `createRecipe`.\n")),(0,i.kt)("p",null,"Head to your ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes/proto/recipes/recipes/tx.proto")," file\nand you will see the ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgCreateRecipe")," has been created.\nAdd ",(0,i.kt)("inlineCode",{parentName:"p"},"uint64 id = 1;")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgCreateRecipeResponse")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:'title="recipes/proto/recipes/recipes/tx.proto"',title:'"recipes/proto/recipes/recipes/tx.proto"'},"message MsgCreateRecipeResponse {\n  uint64 id = 1;\n}\n")),(0,i.kt)("h4",{id:"diving-deeper-into-the-message-code"},"\ud83e\udd3f\xa0Diving deeper into the message code"),(0,i.kt)("p",null,"Looking further into the message, we can see that\n",(0,i.kt)("inlineCode",{parentName:"p"},"MsgCreateRecipe")," has 3 fields: creator, dish, and ingredients."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:'title="recipes/proto/recipes/recipes/tx.proto"',title:'"recipes/proto/recipes/recipes/tx.proto"'},"message MsgCreateRecipe {\n  string creator = 1;\n  string dish = 2;\n  string ingredients = 3;\n}\n")),(0,i.kt)("p",null,"We can also see that the ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateRecipe")," RPC has already been added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Msg")," service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:'title="recipes/proto/recipes/recipes/tx.proto"',title:'"recipes/proto/recipes/recipes/tx.proto"'},"service Msg {\n  rpc CreateRecipe(MsgCreateRecipe) returns (MsgCreateRecipeResponse);\n}\n")),(0,i.kt)("h3",{id:"define-messages-logic"},"\ud83d\udcd5\xa0Define messages logic"),(0,i.kt)("p",null,"Navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes/x/recipes/keeper/msg_server_create_recipe.go"),".\nFor our recipes chain, we want the dish and ingredients to be written\nto the blockchain\u2019s state as a new recipe. Add the following code to\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateRecipe")," function underneath the imports:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="recipes/x/recipes/keeper/msg_server_create_recipe.go"',title:'"recipes/x/recipes/keeper/msg_server_create_recipe.go"'},"func (k msgServer) CreateRecipe(goCtx context.Context, msg *types.MsgCreateRecipe) (*types.MsgCreateRecipeResponse, error) {\n  // Get the context\n  ctx := sdk.UnwrapSDKContext(goCtx)\n\n  // Create variable of type Recipe\n  var recipe = types.Recipe{\n     Creator: msg.Creator,\n     Dish: msg.Dish,\n     Ingredients: msg.Ingredients,\n  }\n\n  // Add a recipe to the store and get back the ID\n  id := k.AppendRecipe(ctx, recipe)\n\n  // Return the ID of the recipe\n  return &types.MsgCreateRecipeResponse{Id: id}, nil\n}\n")),(0,i.kt)("p",null,"You will see errors in your text editor, which we will resolve in the next step."),(0,i.kt)("h2",{id:"-keepers"},"\ud83d\udd01 Keepers"),(0,i.kt)("h3",{id:"define-recipe-type-and-appendrecipe-keeper-method"},"\ud83d\udcd7\xa0Define ",(0,i.kt)("inlineCode",{parentName:"h3"},"Recipe")," type and ",(0,i.kt)("inlineCode",{parentName:"h3"},"AppendRecipe")," keeper method"),(0,i.kt)("p",null,"Create a file ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes/proto/recipes/recipes/recipe.proto")," and\ndefine the ",(0,i.kt)("inlineCode",{parentName:"p"},"Recipe")," message:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="recipes/proto/recipes/recipes/recipe.proto"',title:'"recipes/proto/recipes/recipes/recipe.proto"'},'syntax = "proto3";\n\npackage recipes.recipes;\n\noption go_package = "recipes/x/recipes/types";\n\nmessage Recipe {\n  string creator = 1;\n  uint64 id = 2;\n  string dish = 3; \n  string ingredients = 4; \n}\n')),(0,i.kt)("h3",{id:"define-keeper-methods"},"\ud83d\udcd8\xa0Define keeper methods"),(0,i.kt)("p",null,"Now you\u2019ll define your ",(0,i.kt)("inlineCode",{parentName:"p"},"AppendRecipe")," keeper method."),(0,i.kt)("p",null,"Create the ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes/x/recipes/keeper/recipe.go")," file. The\n",(0,i.kt)("inlineCode",{parentName:"p"},"AppendRecipe")," function is a placeholder to brainstorm how\nto implement it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="recipes/x/recipes/keeper/recipe.go"',title:'"recipes/x/recipes/keeper/recipe.go"'},'package keeper\n\nimport (\n  "encoding/binary"\n\n  "github.com/cosmos/cosmos-sdk/store/prefix"\n  sdk "github.com/cosmos/cosmos-sdk/types"\n\n  "recipes/x/recipes/types"\n)\n\n// func (k Keeper) AppendRecipe() uint64 {\n//    count := k.GetRecipeCount()\n//    store.Set()\n//    k.SetRecipeCount()\n//    return count\n// }\n')),(0,i.kt)("p",null,"Add these prefixes to the ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes/x/recipes/types/keys.go")," file\nin the ",(0,i.kt)("inlineCode",{parentName:"p"},"const")," and add a comment for your reference:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="recipes/x/recipes/types/keys.go"',title:'"recipes/x/recipes/types/keys.go"'},'const (\n  //...\n\n  // Keep track of the index of recipes  \n  RecipeKey      = "Recipe-value-"\n  RecipeCountKey = "Recipe-count-"\n)\n')),(0,i.kt)("p",null,"Next, implement ",(0,i.kt)("inlineCode",{parentName:"p"},"GetRecipeCount")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes/x/recipes/keeper/recipe.go")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="recipes/x/recipes/keeper/recipe.go"',title:'"recipes/x/recipes/keeper/recipe.go"'},'func (k Keeper) GetRecipeCount(ctx sdk.Context) uint64 {\n  // Get the store using storeKey (which is "recipes") and RecipeCountKey (which is "Recipe-count-")\n  store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.RecipeCountKey))\n  \n  // Convert the RecipeCountKey to bytes\n  byteKey := []byte(types.RecipeCountKey)\n  \n  // Get the value of the count\n  bz := store.Get(byteKey)\n  \n  // Return zero if the count value is not found (for example, it\'s the first recipe)\n  if bz == nil {\n    return 0\n  }\n  \n  // Convert the count into a uint64\n  return binary.BigEndian.Uint64(bz)\n}\n')),(0,i.kt)("p",null,"And then ",(0,i.kt)("inlineCode",{parentName:"p"},"SetRecipeCount"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="recipes/x/recipes/keeper/recipe.go"',title:'"recipes/x/recipes/keeper/recipe.go"'},'func (k Keeper) SetRecipeCount(ctx sdk.Context, count uint64) {\n  // Get the store using storeKey (which is "recipes") and RecipeCountKey (which is "Recipe-count-")\n  store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.RecipeCountKey))\n  \n  // Convert the RecipeCountKey to bytes\n  byteKey := []byte(types.RecipeCountKey)\n  \n  // Convert count from uint64 to string and get bytes\n  bz := make([]byte, 8)\n  binary.BigEndian.PutUint64(bz, count)\n  \n  // Set the value of Recipe-count- to count\n  store.Set(byteKey, bz)\n}\n')),(0,i.kt)("p",null,"Now you\u2019re ready to implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"AppendRecipe")," function at\nthe top of the file above ",(0,i.kt)("inlineCode",{parentName:"p"},"GetRecipeCount")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SetRecipeCount"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="recipes/x/recipes/keeper/recipe.go"',title:'"recipes/x/recipes/keeper/recipe.go"'},"func (k Keeper) AppendRecipe (ctx sdk.Context, recipe types.Recipe) uint64 {\n  // Get the current number of recipes in the store\n  count := k.GetRecipeCount(ctx)\n  \n  // Assign an ID to the recipe based on the number of recipes in the store\n  recipe.Id = count\n  \n  // Get the store\n  store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.RecipeKey))\n  \n  // Convert the recipe ID into bytes\n  byteKey := make([]byte, 8)\n  binary.BigEndian.PutUint64(byteKey, recipe.Id)\n  \n  // Marshal the recipe into bytes\n  appendedValue := k.cdc.MustMarshal(&recipe)\n  \n  // Insert the recipe bytes using recipe ID as a key\n  store.Set(byteKey, appendedValue)\n  \n  // Update the recipe count\n  k.SetRecipeCount(ctx, count+1)\n  return count\n}\n")),(0,i.kt)("p",null,"Now you have implemented all the code required to create\nnew recipes and store them on-chain. When a transaction that\ncontains a message type ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgCreateRecipe")," is broadcast, the\nmessage is routed to the recipes module."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"k.CreateRecipe")," calls ",(0,i.kt)("inlineCode",{parentName:"li"},"AppendRecipe"),", which gets the recipe\ncount, adds a recipe using the count as the ID, increments the\ncount, and returns the ID")),(0,i.kt)("h2",{id:"\ufe0fquerying-recipes"},"\ud83c\udf7d\ufe0f\xa0Querying recipes"),(0,i.kt)("h3",{id:"-query-recipes"},"\ud83d\udda5 Query recipes"),(0,i.kt)("p",null,"In order to query your recipes, scaffold a query with Ignite:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ignite scaffold query dishes --response dish,ingredients\n")),(0,i.kt)("p",null,"A response on a successful scaffold will look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"modify proto/recipes/recipes/query.proto\nmodify x/recipes/client/cli/query.go\ncreate x/recipes/client/cli/query_dishes.go\ncreate x/recipes/keeper/query_dishes.go\n\n\ud83c\udf89 Created a query `dishes`.\n")),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"proto/recipes/recipes/query.proto")," file import:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:'title="proto/recipes/recipes/query.proto"',title:'"proto/recipes/recipes/query.proto"'},'import "recipes/recipes/recipe.proto";\n')),(0,i.kt)("p",null,"Add pagination to the recipe ",(0,i.kt)("em",{parentName:"p"},"request"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:'title="proto/recipes/recipes/query.proto"',title:'"proto/recipes/recipes/query.proto"'},"message QueryDishesRequest {\n  // Adding pagination to request\n  cosmos.base.query.v1beta1.PageRequest pagination = 1;\n}\n")),(0,i.kt)("p",null,"Add pagination to the recipe ",(0,i.kt)("em",{parentName:"p"},"response"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:'title="proto/recipes/recipes/query.proto"',title:'"proto/recipes/recipes/query.proto"'},"message QueryDishesResponse {\n  // Returning a list of recipes\n  repeated Recipe Recipe = 1;\n\n  // Adding pagination to response\n  cosmos.base.query.v1beta1.PageResponse pagination = 2;\n}\n")),(0,i.kt)("p",null,"In order to implement recipe querying logic in\n",(0,i.kt)("inlineCode",{parentName:"p"},"recipes/x/recipes/keeper/query_dishes.go"),",\ndelete the file contents and replace them with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="recipes/x/recipes/keeper/query_dishes.go"',title:'"recipes/x/recipes/keeper/query_dishes.go"'},'package keeper\n\nimport (\n  "context"\n  "github.com/cosmos/cosmos-sdk/store/prefix"\n  sdk "github.com/cosmos/cosmos-sdk/types"\n  "github.com/cosmos/cosmos-sdk/types/query"\n  "google.golang.org/grpc/codes"\n  "google.golang.org/grpc/status"\n\n  "recipes/x/recipes/types"\n)\n\nfunc (k Keeper) Dishes(c context.Context, req *types.QueryDishesRequest) (*types.QueryDishesResponse, error) {\n  // Throw an error if request is nil\n  if req == nil {\n    return nil, status.Error(codes.InvalidArgument, "invalid request")\n  }\n\n  // Define a variable that will store a list of recipes\n  var dishes []*types.Recipe\n\n  // Get context with the information about the environment\n  ctx := sdk.UnwrapSDKContext(c)\n\n  // Get the key-value module store using the store key (in our case store key is "chain")\n  store := ctx.KVStore(k.storeKey)\n\n  // Get the part of the store that keeps recipes (using recipe key, which is "Recipe-value-")\n  recipeStore := prefix.NewStore(store, []byte(types.RecipeKey))\n\n  // Paginate the recipes store based on PageRequest\n  pageRes, err := query.Paginate(recipeStore, req.Pagination, func(key []byte, value []byte) error {\n    var dish types.Recipe\n    if err := k.cdc.Unmarshal(value, &dish); err != nil {\n      return err\n    }\n\n    dishes = append(dishes, &dish)\n\n    return nil\n  })\n\n  // Throw an error if pagination failed\n  if err != nil {\n    return nil, status.Error(codes.Internal, err.Error())\n  }\n\n  // Return a struct containing a list of recipes and pagination info\n  return &types.QueryDishesResponse{Recipe: dishes, Pagination: pageRes}, nil\n}\n')),(0,i.kt)("h2",{id:"-running-the-recipes-rollup"},"\ud83d\udc69\u200d\ud83c\udf73 Running the recipes rollup"),(0,i.kt)("h3",{id:"-run-a-celestia-light-node"},"\u2728 Run a Celestia light node"),(0,i.kt)("p",null,"Follow instructions to install and start your Celestia Data Availalbility\nlayer Light Node selecting the network that you previously used. You can\nfind instructions to install and run the node ",(0,i.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/light-node"},"here"),"."),(0,i.kt)("p",null,"After you have Go and Ignite CLI installed, and your Celestia Light\nNode running on your machine, you're ready to build, test, and launch your own\nsovereign rollup."),(0,i.kt)("p",null,"Be sure you have initialized your node before trying to start it.\nWhen starting your node, remember to enable the gateway.\nYour start command should look similar to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"celestia light start --core.ip consensus-full-arabica-9.celestia-arabica.com --p2p.network arabica\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"light-node.png",src:n(2218).Z,width:"1912",height:"1514"})),(0,i.kt)("h3",{id:"\ufe0f-start-the-recipes-rollup"},"\ud83d\uddde\ufe0f Start the recipes rollup"),(0,i.kt)("p",null,"We have a handy ",(0,i.kt)("inlineCode",{parentName:"p"},"init.sh")," found in this repo\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rollkit/docs/tree/main/docs/scripts/recipes"},"here"),"."),(0,i.kt)("p",null,"We can copy it over to our directory with the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# From inside the `recipes` directory\nwget https://raw.githubusercontent.com/rollkit/docs/main/docs/scripts/recipes/init.sh\n")),(0,i.kt)("p",null,"This copies over our ",(0,i.kt)("inlineCode",{parentName:"p"},"init.sh")," script to initialize our\nRecipes Rollup."),(0,i.kt)("p",null,"You can view the contents of the script to see how we\ninitialize the Recipes Rollup."),(0,i.kt)("p",null,"\ud83d\udfe2 From your project working directory (",(0,i.kt)("inlineCode",{parentName:"p"},"recipes/"),"), start the chain with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bash init.sh\n")),(0,i.kt)("p",null,"With that, we have kickstarted our ",(0,i.kt)("inlineCode",{parentName:"p"},"recipesd")," network!"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"recipe-start.gif",src:n(7257).Z,width:"1888",height:"1536"})),(0,i.kt)("p",null,"Open another teminal instance. Now, create your first\nrecipe in the command line by sending a transaction from ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes-key"),",\nwhen prompted, confirm the transaction by entering ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'recipesd tx recipes create-recipe salad "spinach, mandarin oranges, sliced almonds, smoked gouda, citrus vinagrette" --from recipes-key --keyring-backend test\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"recipes.gif",src:n(9018).Z,width:"1410",height:"1128"})),(0,i.kt)("h3",{id:"\ufe0fquery-your-recipes-with-the-cli"},"\u2328\ufe0f\xa0Query your recipes with the CLI"),(0,i.kt)("p",null,"To query all of the on-chain recipes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"recipesd q recipes dishes\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"query.gif",src:n(4862).Z,width:"1410",height:"1128"})),(0,i.kt)("p",null,"\ud83c\udf89\xa0Congratulations, again! You have now successfully built a recipe book rollup."))}m.isMDXComponent=!0},2218:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/light-node-e9bf84be9327c23a6573c247e5ede7cd.png"},4862:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/query-a6c8042342b2de67304f474de6c0df65.gif"},7257:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/recipe-start-b435769158f76024880099308cda4224.gif"},9018:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/recipes-ed8d74ded258a73a05555483e33b0c01.gif"}}]);