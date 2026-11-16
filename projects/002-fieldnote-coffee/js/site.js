(function(){
  "use strict";
  var KEY="fieldnote-demo-bag-v1";
  var drawer=document.querySelector("[data-bag-drawer]");
  var backdrop=document.querySelector("[data-bag-backdrop]");
  var toast=document.getElementById("site-toast");
  var toastTimer;
  function readBag(){try{return JSON.parse(localStorage.getItem(KEY)||"[]");}catch(e){return [];}}
  function saveBag(items){try{localStorage.setItem(KEY,JSON.stringify(items));}catch(e){}}
  function money(value){return "R"+Number(value||0).toLocaleString("en-ZA");}
  function showToast(message){if(!toast)return;toast.textContent=message;toast.classList.add("is-visible");clearTimeout(toastTimer);toastTimer=setTimeout(function(){toast.classList.remove("is-visible");},2300);}
  function openBag(){if(!drawer)return;drawer.classList.add("is-open");drawer.setAttribute("aria-hidden","false");if(backdrop)backdrop.hidden=false;document.body.classList.add("drawer-open");var close=drawer.querySelector("[data-bag-close]");if(close)close.focus();}
  function closeBag(){if(!drawer)return;drawer.classList.remove("is-open");drawer.setAttribute("aria-hidden","true");if(backdrop)backdrop.hidden=true;document.body.classList.remove("drawer-open");}
  function renderBag(){
    var items=readBag(),count=items.reduce(function(sum,item){return sum+item.qty;},0);
    document.querySelectorAll("[data-bag-count]").forEach(function(el){el.textContent=String(count);});
    var list=document.querySelector("[data-bag-items]"),empty=document.querySelector("[data-bag-empty]"),total=document.querySelector("[data-bag-total]");
    if(!list)return;
    list.textContent="";
    var sum=0;
    items.forEach(function(item,index){
      sum+=item.price*item.qty;
      var row=document.createElement("div");row.className="bag-line";
      var info=document.createElement("div");
      var name=document.createElement("strong");name.textContent=item.name;
      var detail=document.createElement("small");detail.textContent="250 g · "+item.qty+" × "+money(item.price);
      info.appendChild(name);info.appendChild(detail);
      var remove=document.createElement("button");remove.type="button";remove.textContent="Remove";remove.setAttribute("data-remove-index",String(index));
      row.appendChild(info);row.appendChild(remove);list.appendChild(row);
    });
    if(empty)empty.hidden=items.length>0;
    if(total)total.textContent=money(sum);
  }
  function addItem(button){
    var items=readBag(),id=button.getAttribute("data-id"),name=button.getAttribute("data-name"),price=Number(button.getAttribute("data-price"));
    var found=items.find(function(item){return item.id===id;});
    if(found)found.qty+=1;else items.push({id:id,name:name,price:price,qty:1});
    saveBag(items);renderBag();openBag();showToast(name+" added to your sample bag.");
  }
  function copyText(value){
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(value).then(function(){showToast("Copied to clipboard.");}).catch(function(){fallbackCopy(value);});}
    else fallbackCopy(value);
  }
  function fallbackCopy(value){var area=document.createElement("textarea");area.value=value;area.style.position="fixed";area.style.opacity="0";document.body.appendChild(area);area.select();try{document.execCommand("copy");showToast("Copied to clipboard.");}catch(e){showToast("Select and copy the text manually.");}area.remove();}
  document.addEventListener("click",function(event){
    var add=event.target.closest("[data-add]");if(add){addItem(add);return;}
    if(event.target.closest("[data-bag-toggle]")){openBag();return;}
    if(event.target.closest("[data-bag-close]")){closeBag();return;}
    if(event.target===backdrop){closeBag();return;}
    var remove=event.target.closest("[data-remove-index]");if(remove){var items=readBag();items.splice(Number(remove.getAttribute("data-remove-index")),1);saveBag(items);renderBag();return;}
    if(event.target.closest("[data-bag-copy]")){
      var bag=readBag();if(!bag.length){showToast("Your bag is empty.");return;}
      var lines=["FIELDNOTE SAMPLE ORDER NOTE","Portfolio demonstration only — not a real order.",""];
      bag.forEach(function(item){lines.push(item.qty+" × "+item.name+" — "+money(item.price*item.qty));});
      lines.push("Illustrative total: "+money(bag.reduce(function(sum,item){return sum+item.price*item.qty;},0)));
      lines.push("Please confirm actual availability, pricing and delivery before any purchase.");
      copyText(lines.join("\n"));
    }
  });
  var navButton=document.querySelector(".nav-toggle"),nav=document.querySelector(".site-nav");
  if(navButton&&nav){navButton.addEventListener("click",function(){var isOpen=nav.classList.toggle("is-open");navButton.setAttribute("aria-expanded",String(isOpen));navButton.setAttribute("aria-label",isOpen?"Close navigation":"Open navigation");});nav.querySelectorAll("a").forEach(function(link){link.addEventListener("click",function(){nav.classList.remove("is-open");navButton.setAttribute("aria-expanded","false");});});}
  document.addEventListener("keydown",function(event){if(event.key==="Escape")closeBag();});
  var finder=document.getElementById("coffee-finder");
  if(finder){finder.addEventListener("submit",function(event){event.preventDefault();var brew=document.getElementById("finder-brew").value,taste=document.getElementById("finder-taste").value;var product={id:"house04",name:"House No. 04",desc:"A rounded, chocolate-led starting point for espresso and milk drinks."};if(brew==="decaf"){product={id:"soft",name:"Soft Landing",desc:"A mellow decaf concept with caramel, cocoa and dark-plum notes."};}else if(brew==="filter"&&taste==="bright"){product={id:"sidama",name:"Sidama Bloom",desc:"A bright, floral filter coffee with bergamot and ripe-peach notes."};}else if(brew==="filter"||taste==="bright"){product={id:"kivu",name:"Kivu Dawn",desc:"A tea-like, sweet filter coffee with red-currant and honey notes."};}else if(taste==="soft"){product={id:"kivu",name:"Kivu Dawn",desc:"A gentle, sweet cup with a little fruit and a tea-like finish."};}document.getElementById("finder-name").textContent=product.name;document.getElementById("finder-description").textContent=product.desc;document.getElementById("finder-link").href="./coffees.html#"+product.id;document.getElementById("finder-result").hidden=false;});}
  renderBag();
})();