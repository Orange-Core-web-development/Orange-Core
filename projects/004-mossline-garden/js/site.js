(function(){
  var toggle=document.querySelector('.menu-toggle');
  var nav=document.querySelector('.primary-nav');
  if(toggle&&nav){
    toggle.addEventListener('click',function(){
      var open=toggle.getAttribute('aria-expanded')==='true';
      toggle.setAttribute('aria-expanded',String(!open));
      nav.classList.toggle('is-open',!open);
    });
    nav.addEventListener('click',function(event){
      if(event.target.closest('a')){toggle.setAttribute('aria-expanded','false');nav.classList.remove('is-open');}
    });
    document.addEventListener('keydown',function(event){
      if(event.key==='Escape'){toggle.setAttribute('aria-expanded','false');nav.classList.remove('is-open');toggle.focus();}
    });
  }

  var filterButtons=document.querySelectorAll('[data-filter]');
  var plantCards=document.querySelectorAll('.plant-card[data-category]');
  var filterStatus=document.querySelector('.filter-status');
  filterButtons.forEach(function(button){
    button.addEventListener('click',function(){
      var filter=button.getAttribute('data-filter');
      var visible=0;
      filterButtons.forEach(function(item){
        var active=item===button;
        item.classList.toggle('is-active',active);
        item.setAttribute('aria-pressed',String(active));
      });
      plantCards.forEach(function(card){
        var show=filter==='all'||card.getAttribute('data-category')===filter;
        card.hidden=!show;
        if(show){visible+=1;}
      });
      if(filterStatus){filterStatus.textContent='Showing '+visible+' planting role'+(visible===1?'':'s')+'.';}
    });
  });

  var seasonData={
    rainy:{months:'NOVEMBER — APRIL',title:'Observe the rain.',copy:'Review drainage, runoff paths, waterlogging and how new planting settles after rainfall. Protect soil and avoid unnecessary disturbance when ground conditions are unsuitable.',items:['Check surface water movement','Observe plant establishment','Record areas that stay wet']},
    cool:{months:'MAY — AUGUST',title:'Plan the structure.',copy:'Use the cooler, drier period to review paths, edges, soil cover and the long-term layout. Watering needs still depend on exposure, soil and the plants already established.',items:['Review irrigation coverage','Refresh mulch where appropriate','Plan structural work and pruning']},
    hot:{months:'AUGUST — NOVEMBER',title:'Prepare for heat.',copy:'Before the rains return, review water access, exposed planting and the garden’s ability to cope with hot, dry conditions. Avoid promising drought-proof results without a site-specific plan.',items:['Check watering routines','Protect vulnerable new planting','Prepare a realistic rainy-season plan']}
  };
  var seasonButtons=document.querySelectorAll('[data-season]');
  seasonButtons.forEach(function(button){
    button.addEventListener('click',function(){
      var key=button.getAttribute('data-season');
      var data=seasonData[key];
      if(!data){return;}
      seasonButtons.forEach(function(item){
        var active=item===button;
        item.classList.toggle('is-active',active);
        item.setAttribute('aria-pressed',String(active));
      });
      var months=document.getElementById('season-months');
      var title=document.getElementById('season-title');
      var copy=document.getElementById('season-copy');
      var list=document.getElementById('season-list');
      if(months){months.textContent=data.months;}
      if(title){title.textContent=data.title;}
      if(copy){copy.textContent=data.copy;}
      if(list){list.replaceChildren();data.items.forEach(function(text){var li=document.createElement('li');li.textContent=text;list.appendChild(li);});}
    });
  });

  var form=document.getElementById('project-form');
  if(form){
    var output=document.getElementById('brief-output');
    var briefText=document.getElementById('brief-text');
    var status=document.getElementById('form-status');
    var copyButton=document.getElementById('copy-brief');
    var copyStatus=document.getElementById('copy-status');
    form.addEventListener('submit',function(event){
      event.preventDefault();
      if(!form.reportValidity()){return;}
      var data=new FormData(form);
      var lines=[
        'MOSS / LINE — PROJECT NOTE (FICTIONAL DEMO)',
        'Name: '+data.get('name'),
        'Property: '+data.get('property'),
        'Location: '+data.get('location'),
        'Approximate size: '+data.get('size'),
        'Main priority: '+data.get('priority'),
        'Indicative budget: '+data.get('budget'),
        'Additional notes: '+(data.get('notes')||'None supplied'),
        '',
        'This note was generated locally by a portfolio demonstration. It has not been sent.'
      ];
      briefText.value=lines.join('\n');
      output.hidden=false;
      status.textContent='Your project note is ready below. Nothing has been transmitted.';
      output.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'nearest'});
    });
    form.addEventListener('reset',function(){
      window.setTimeout(function(){output.hidden=true;status.textContent='Your answers stay in this browser until you leave or clear the form.';if(copyStatus){copyStatus.textContent='';}},0);
    });
    if(copyButton){
      copyButton.addEventListener('click',function(){
        if(!briefText.value){return;}
        if(navigator.clipboard&&navigator.clipboard.writeText){
          navigator.clipboard.writeText(briefText.value).then(function(){copyStatus.textContent='Copied to clipboard.';}).catch(function(){briefText.select();copyStatus.textContent='Select and copy the text above.';});
        }else{briefText.select();copyStatus.textContent='Select and copy the text above.';}
      });
    }
  }
})();