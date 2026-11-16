(function(){
  "use strict";
  document.querySelectorAll("[data-filter]").forEach(function(button){
    button.addEventListener("click",function(){
      var filter=button.getAttribute("data-filter");
      document.querySelectorAll("[data-filter]").forEach(function(item){var active=item===button;item.classList.toggle("active",active);item.setAttribute("aria-pressed",String(active));});
      document.querySelectorAll("[data-product-card]").forEach(function(card){card.hidden=filter!=="all"&&card.getAttribute("data-profile")!==filter;});
    });
  });
  var dose=document.getElementById("coffee-dose"),ratio=document.getElementById("brew-ratio"),output=document.getElementById("water-output"),caption=document.getElementById("ratio-caption");
  function calculate(){
    if(!dose||!ratio||!output)return;
    var grams=Number(dose.value),parts=Number(ratio.value);
    if(!Number.isFinite(grams)||grams<1){output.innerHTML="— <small>ml</small>";caption.textContent="Enter at least 1 gram of coffee.";return;}
    grams=Math.min(grams,100);dose.value=String(grams);
    var water=Math.round(grams*parts);
    output.innerHTML=water.toLocaleString("en-ZA")+" <small>ml</small>";
    caption.textContent=grams+" g coffee × "+parts+" parts water";
  }
  if(dose&&ratio){dose.addEventListener("input",calculate);ratio.addEventListener("change",calculate);document.querySelectorAll("[data-method]").forEach(function(button){button.addEventListener("click",function(){ratio.value=button.getAttribute("data-method");calculate();var calc=document.querySelector(".calculator-card");if(calc)calc.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"center"});});});calculate();}
  function prepareForm(formId,resultId,summaryId,copyId,heading){
    var form=document.getElementById(formId),result=document.getElementById(resultId),summary=document.getElementById(summaryId),copy=document.getElementById(copyId);
    if(!form||!result||!summary)return;
    var lastText="";
    form.addEventListener("submit",function(event){
      event.preventDefault();if(!form.reportValidity())return;
      var fields=new FormData(form),lines=[heading,"Portfolio demonstration only — no message has been sent.",""];
      fields.forEach(function(value,key){if(String(value).trim())lines.push(key.replace(/-/g," ").replace(/\b\w/g,function(char){return char.toUpperCase();})+": "+String(value).trim());});
      lastText=lines.join("\n");summary.textContent=lastText;result.hidden=false;result.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"nearest"});
    });
    if(copy){copy.addEventListener("click",function(){if(!lastText)return;if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(lastText).then(function(){copy.textContent="Copied ✓";}).catch(function(){summary.focus();});}else{var area=document.createElement("textarea");area.value=lastText;document.body.appendChild(area);area.select();try{document.execCommand("copy");copy.textContent="Copied ✓";}catch(e){copy.textContent="Select the note above";}area.remove();}});}
  }
  prepareForm("wholesale-form","trade-result","trade-summary","copy-trade","FIELDNOTE WHOLESALE ENQUIRY");
  prepareForm("contact-form","contact-result","contact-summary","copy-contact","FIELDNOTE CONTACT NOTE");
  var topic=new URLSearchParams(location.search).get("topic");
  if(topic){var select=document.getElementById("contact-topic");if(select){var match=Array.from(select.options).find(function(option){return option.text.toLowerCase().indexOf(topic.toLowerCase())!==-1||option.value.toLowerCase().indexOf(topic.toLowerCase())!==-1;});if(match)select.value=match.value;}}
})();