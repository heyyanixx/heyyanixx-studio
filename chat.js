/* HEYYANIXX Studio help chat: rule-based, runs only in the browser, sends nothing anywhere. */
(function(){
var MAIL='contact@heyyanixx.de5.net';
var IG='https://www.instagram.com/heyyy.anixx_/';
function mail(subj){return 'mailto:'+MAIL+'?subject='+encodeURIComponent(subj+' – HEYYANIXX Studio')+'&body='+encodeURIComponent('Namaste Anish,\n\nBusiness ka naam: \nShehar: \nKya chahiye: ');}
var HANDOFF_LINKS=[{t:'Instagram DM',u:IG},{t:'Email',u:mail('Website enquiry')}];
var MENU=['packs','delivery','payment','need','demos','refund'];
var LABEL={
 packs:{hi:'Price / packs',en:'Prices / packs'},
 delivery:{hi:'Kitne din me?',en:'How many days?'},
 payment:{hi:'Payment kab?',en:'When do I pay?'},
 need:{hi:'Kya dena hoga?',en:'What do you need?'},
 demos:{hi:'Demo dekhein',en:'See demos'},
 refund:{hi:'Refund',en:'Refund'},
 services:{hi:'Kya banate ho?',en:'What do you make?'},
 maintenance:{hi:'Maintenance plan',en:'Maintenance plan'},
 google:{hi:'Google listing',en:'Google listing'},
 start:{hi:'Shuru karna hai',en:'I want to start'}
};
// Every answer below is taken from what this website already says (home, terms, refund, privacy).
var I={
 greet:{k:['hi','hello','hey','hii','namaste','namaskar','hlo','helo','good morning','good evening'],
  hi:'Namaste! 🙏 Main HEYYANIXX Studio ka help bot hoon. Price, delivery, payment, demo — kuch bhi poochiye. Deal ki baat Anish khud karega.',
  en:'Hi! 🙏 I\'m the HEYYANIXX Studio help bot. Ask about prices, delivery, payment or demos. Anish handles the final deal himself.',
  q:MENU},
 services:{k:['kya banate','kya karte','what do you','services','service','kaam kya','what is heyyanixx','heyyanixx studio kya','about you','what you offer','web app','landing','instagram setup','whatsapp setup','whatsapp business','website banate','banate ho'],
  hi:'HEYYANIXX Studio (Dumka, Jharkhand · online poore India me) ye banata hai:\n• Business website (mobile-friendly, call/WhatsApp/map buttons)\n• Google Business Profile setup\n• WhatsApp Business & Instagram setup\n• Landing pages\n• Simple web apps (booking list, menu/price list, small tools)',
  en:'HEYYANIXX Studio (Dumka, Jharkhand · online across India) makes:\n• Business websites (mobile-friendly, call/WhatsApp/map buttons)\n• Google Business Profile setup\n• WhatsApp Business & Instagram setup\n• Landing pages\n• Simple web apps (booking list, menu/price list, small tools)',
  q:['packs','demos','start']},
 packs:{k:['price','prices','pricing','cost','rate','rates','kitna','kitne ka','kitne paise','paisa','paise','charge','charges','fees','fee','budget','pack','packs','package','plan','plans','basic','pro','rupees','rs','₹','sasta','mehnga','mobile friendly','call button','whatsapp button','map button','buttons','enquiry form','sections','दाम','कीमत','कितना'],
  hi:'Packs (site ke hisaab se):\n• Basic — starting from ₹2,999: 1-page website, mobile-friendly, call/WhatsApp/map buttons, services/timings/photos, 1 round of changes\n• Pro — starting from ₹4,999: up to 5 sections, Google Business Profile setup, WhatsApp Business + Instagram setup, enquiry form + basic SEO, 2 rounds of changes\n• Maintenance — starting from ₹499/month\n\nFinal price kaam ke hisaab se, kaam shuru hone se pehle tay hota hai. Domain/hosting (agar chahiye) actual cost pe, alag se.',
  en:'Packs (as shown on this site):\n• Basic — starting from ₹2,999: 1-page website, mobile-friendly, call/WhatsApp/map buttons, services/timings/photos, 1 round of changes\n• Pro — starting from ₹4,999: up to 5 sections, Google Business Profile setup, WhatsApp Business + Instagram setup, enquiry form + basic SEO, 2 rounds of changes\n• Maintenance — starting from ₹499/month\n\nThe final price depends on the work and is agreed before we start. Domain/hosting (if needed) is charged separately at actual cost.',
  q:['payment','delivery','maintenance','start']},
 delivery:{k:['kitne din','kab tak','kab milega','kab ready','time lagega','time','days','day','din','week','delivery','deliver','how long','fast','jaldi','ready','kitna time'],
  hi:'Website content milne ke baad (text, photos, details) hum 7 din me deliver karne ka aim rakhte hain. Bada project ho toh zyada time lag sakta hai — wo kaam shuru hone se pehle bata diya jaata hai.',
  en:'We aim to deliver your website within 7 days after we receive your content (text, photos, details). Bigger projects may take longer, and you\'re told before work starts.',
  q:['need','payment','start']},
 payment:{k:['payment','pay','advance','pehle paisa','pehle payment','paisa kab','kab dena','approve','approval','pasand','upi','trust','bharosa','guarantee','risk','fraud'],
  hi:'Payment tabhi, jab site pasand aaye. 👍 Pehle website dikhate hain, pack me jitne changes hain wo karte hain, aur aapke approve karne ke baad hi payment lete hain.',
  en:'You pay only if you like the site. 👍 We show you the website first, make the changes included in your pack, and take payment only after you approve it.',
  q:['packs','refund','start']},
 need:{k:['kya dena','kya chahiye','kya bhejna','kya lagega','what do you need','need from me','requirement','requirements','details','photos','photo','content','information','info','documents','timing','timings'],
  hi:'Aapse ye chahiye:\n• Business ka naam aur shehar\n• Services aur prices\n• Timings aur address\n• Photos aur logo (agar hai)\n• Thoda text: aapke business ke baare me\n\nJo bhejein, uska use karne ka haq aapke paas hona chahiye. Content hamesha aapka rehta hai.',
  en:'From you we need:\n• Business name and city\n• Services and prices\n• Timings and address\n• Photos and logo (if you have them)\n• A little text about your business\n\nYou should have the right to use what you send. Your content always stays yours.',
  q:['delivery','packs','start']},
 demos:{k:['demo','demos','sample','samples','example','examples','portfolio','previous work','kaam dikhao','dekhna','show','designs','coaching','clinic','cafe','café','restaurant','doctor','hospital','institute','tuition'],
  hi:'Ye sample designs hain (fictional businesses, asli client projects nahi), taaki aap style dekh sakein:',
  en:'These are sample designs (fictional businesses, not real client projects) so you can see the style:',
  links:[{t:'Coaching demo',u:'demo/coaching/'},{t:'Clinic demo',u:'demo/clinic/'},{t:'Café demo',u:'demo/cafe/'},{t:"Anish's portfolio",u:'https://heyyanixx.sites.tab.bot/'}],
  q:['packs','start']},
 google:{k:['google','maps','map listing','near me','gmb','business profile','listing','search me','seo','rank','ranking','first page','top','#1','number 1','number one','customers','sales','reach'],
  hi:'Google Business Profile setup karte hain (Pro pack me included): address, timings, photos, category — taaki log Google Search aur Maps pe aapko dhoond sakein.\n\nSeedhi baat: Google ranking ya kitne customers/sales aayenge, iska promise hum nahi karte. Profile aur website sahi se bana dete hain.',
  en:'We set up your Google Business Profile (included in the Pro pack): address, timings, photos, category — so people can find you on Google Search and Maps.\n\nHonestly: we don\'t promise any Google ranking or a number of customers/sales. We set up your profile and website properly.',
  q:['packs','start']},
 maintenance:{k:['maintenance','monthly','month','mahina','mahine','update','updates','changes later','baad me change','support','499','cancel'],
  hi:'Maintenance — starting from ₹499/month (optional): price/menu/timing updates, naye photos & offers, small fixes, website up & running check.\n\nMonth to month hai, kabhi bhi cancel kar sakte hain — agle mahine ka charge nahi lagega.',
  en:'Maintenance — starting from ₹499/month (optional): price/menu/timing updates, new photos & offers, small fixes, a check that the website is up and running.\n\nIt\'s month to month; cancel anytime and you won\'t be charged for the next month.',
  q:['packs','start']},
 refund:{k:['refund','money back','paisa wapas','wapas','return','cancel order'],
  hi:'Refund, short me:\n• Payment approve karne ke baad hi hota hai, isliye zyadatar refund ki zarurat nahi padti\n• Paisa diya aur kaam deliver nahi hua? Payment ke 7 din ke andar email karein — har case dekh ke undelivered kaam ka refund\n• Approve + deliver ho chuki website ka refund nahi\n• Maintenance: kabhi bhi cancel, agle mahine ka charge nahi (chalu mahina refund nahi)\n• Domain/hosting pe unke provider ke rules',
  en:'Refunds, in short:\n• Payment is taken only after you approve, so a refund is rarely needed\n• Paid but work not delivered? Email within 7 days of payment — each case is checked and undelivered work is refunded\n• An approved and delivered website is not refundable\n• Maintenance: cancel anytime, no charge next month (current month not refunded)\n• Domain/hosting follow their provider\'s own rules',
  links:[{t:'Full refund policy',u:'refund-policy/'}],
  q:['payment','start']},
 domain:{k:['domain','hosting','host','.com','own website name','apna naam','server'],
  hi:'Domain/hosting pack price me included nahi hai. Agar chahiye, toh actual cost pe alag se — aur kuch bhi khareedne se pehle aapko bataya jaata hai.',
  en:'Domain/hosting isn\'t included in the pack price. If needed, it\'s charged separately at actual cost, and you\'re told before anything is bought.',
  q:['packs','start']},
 own:{k:['own','ownership','malik','kiska','rights','copyright','mera hoga'],
  hi:'Aapka content (naam, logo, text, photos) aapka hai. Full payment ke baad aapke liye bana design aap apne business ke liye use kar sakte hain.',
  en:'Your content (name, logo, text, photos) is yours. After full payment, the design made for you is yours to use for your business.',
  q:['packs','start']},
 where:{k:['where','kahan','kaha','location','dumka','jharkhand','city','shehar','other city','online','visit','meet','milna','india','outside'],
  hi:'HEYYANIXX Studio Dumka, Jharkhand se hai, aur online poore India me kaam karta hai. Pehli baat-cheet visit ya online, dono ho sakti hai.',
  en:'HEYYANIXX Studio is based in Dumka, Jharkhand and works online across India. The first chat can be a visit or online.',
  q:['start','packs']},
 process:{k:['process','steps','kaise hota','how does it work','how it works','kaise kaam','procedure'],
  hi:'4 steps, bas:\n1. Baat-cheet: aapka business aur zaroorat samajhte hain\n2. Demo design: pehle design dikhate hain, aap batayein kya badalna hai\n3. Build: website banti hai, aapke changes ke saath\n4. Launch: website live, Google/WhatsApp setup, aur sab samjha dete hain',
  en:'Just 4 steps:\n1. Chat: we understand your business and needs\n2. Demo design: you see the design first and tell us what to change\n3. Build: the website is made with your changes\n4. Launch: site goes live, Google/WhatsApp setup, and we explain everything',
  q:['delivery','payment','start']},
 founder:{k:['founder','anish','who is','who are you','kaun hai','kaun ho','owner','team','student'],
  hi:'Founder: Anish Kumar, Dumka (Jharkhand), BCA student. AI tools ke saath websites aur apps banata hai. Ek founder, seedhi baat — aap directly Anish se baat karte hain.',
  en:'Founder: Anish Kumar from Dumka (Jharkhand), a BCA student who builds websites and apps with AI tools. One founder, straight talk — you deal with Anish directly.',
  q:['demos','start']},
 language:{k:['language','hindi','english','bhasha'],
  hi:'Website Hinglish, English ya Hindi — jo aapke customers ke liye sahi ho.',
  en:'Your website can be in Hinglish, English or Hindi — whatever suits your customers.',
  q:['packs','start']},
 phone:{k:['phone','phone number','mobile number','contact number','whatsapp number','call number','your number','apna number','number do','calling'],
  hi:'Phone number yahan share nahi hota. Anish se baat ke liye Instagram DM ya email karein — wo khud reply karega.',
  en:'A phone number isn\'t shared here. To reach Anish, send an Instagram DM or an email — he replies himself.',
  links:HANDOFF_LINKS, q:['packs']},
 start:{k:['start','shuru','book','booking','order','hire','talk','baat karni','baat karna','contact','interested','chahiye website','banwana','banwani','bana do','want a website','need a website','like a website','website chahiye','banao','deal','discount','negotiate','kam karo','custom','quote'],
  hi:'Badhiya! 🙌 Iske liye Anish khud reply karega. Apne business ka naam, shehar aur kya chahiye — Instagram DM ya email kar dijiye:',
  en:'Great! 🙌 Anish will reply to this himself. Send your business name, city and what you need by Instagram DM or email:',
  links:HANDOFF_LINKS, q:['packs']},
 thanks:{k:['thanks','thank you','thank u','thx','dhanyavad','shukriya','ok','okay','theek','thik','great','nice','cool'],
  hi:'Shukriya! 🙏 Aur kuch poochna ho toh poochiye, ya seedha Anish ko message karein.',
  en:'Thank you! 🙏 Ask anything else, or message Anish directly.',
  q:['start','packs']}
};
var FALLBACK={
 hi:'Iska pakka jawab mere paas nahi hai — Anish khud reply karega. 🙏 Instagram DM ya email kar dijiye:',
 en:'I don\'t have a sure answer for that — Anish will reply himself. 🙏 Send an Instagram DM or an email:',
 links:HANDOFF_LINKS, q:['packs','demos']};
var HI_WORDS=['kya','hai','hain','kitna','kitne','kaise','kab','kahan','kaha','chahiye','mujhe','mera','meri','aap','karo','karna','karte','din','paisa','paise','nahi','haan','bhai','bhaiya','sir ji','dena','milega','hoga','lagega','wala','wali','banwana','banwani','batao','bataiye','dikhao','dikha','kaun','toh','ka','ki','ke','ko','mein','milta','lagta','kar','do','ho'];
var EN_WORDS=['what','how','is','are','the','can','will','do','does','you','your','my','need','much','many','want','price','days','it','for','of','i','me','a','have','there','when','where','who'];
function norm(s){return (' '+String(s).toLowerCase().replace(/[^\w\u0900-\u097f₹#.\s]/g,' ').replace(/\s+/g,' ')+' ');}
function detectLang(s,cur){
 if(/[\u0900-\u097f]/.test(s))return 'hi';
 var n=norm(s),hits=0;HI_WORDS.forEach(function(w){if(n.indexOf(' '+w+' ')>=0)hits++;});
 var en=0;EN_WORDS.forEach(function(w){if(n.indexOf(' '+w+' ')>=0)en++;});
 if(en>hits)return 'en';
 if(hits>0)return 'hi';
 return cur||'hi';
}
function match(text){
 var n=norm(text),best=null,score=0;
 for(var id in I){var s=0;I[id].k.forEach(function(k){var kk=norm(k);if(n.indexOf(kk)>=0)s+=kk.trim().length>3?2:1;});
  if(id==='start'&&s>0)s+=1; // intent to start/book always goes to Anish
  if((id==='greet'||id==='thanks')&&s>0)s-=0.5;
  if(s>score){score=s;best=id;}}
 return score>0?best:null;
}
function reply(text,lang){
 var id=match(text),it=id?I[id]:FALLBACK,L=lang||'hi';
 return {id:id||'handoff',text:it[L],links:it.links||[],quick:(it.q||[]).map(function(q){return {id:q,label:LABEL[q][L]};})};
}
function replyFor(id,lang){var it=I[id],L=lang||'hi';return {id:id,text:it[L],links:it.links||[],quick:(it.q||[]).map(function(q){return {id:q,label:LABEL[q][L]};})};}
var engine={reply:reply,replyFor:replyFor,detectLang:detectLang,match:match,MENU:MENU,LABEL:LABEL,MAIL:MAIL};
if(typeof module!=='undefined'&&module.exports){module.exports=engine;return;}

/* ---------- UI ---------- */
var lang='hi',root,log,input,opened=false;
function el(tag,cls,txt){var e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e;}
function addMsg(who,text){var m=el('div','hc-msg hc-'+who,text);log.appendChild(m);log.scrollTop=log.scrollHeight;return m;}
function addBot(r){
 var m=addMsg('bot',r.text);
 if(r.links.length){var lw=el('div','hc-links');r.links.forEach(function(l){var a=el('a','hc-link',l.t+' ↗');a.href=l.u;if(/^https?:/.test(l.u)){a.target='_blank';a.rel='noopener';}lw.appendChild(a);});log.appendChild(lw);}
 if(r.quick.length){var qw=el('div','hc-quick');r.quick.forEach(function(q){var b=el('button','hc-q',q.label);b.type='button';b.onclick=function(){ask(q.label,q.id);};qw.appendChild(b);});log.appendChild(qw);}
 log.scrollTop=log.scrollHeight;
}
function ask(text,id){
 if(!text.trim())return;
 addMsg('user',text);
 if(!id)lang=detectLang(text,lang);
 var typing=addMsg('bot hc-typing','…');
 setTimeout(function(){typing.remove();addBot(id?replyFor(id,lang):reply(text,lang));},380);
}
function greet(){addBot(replyFor('greet',lang));}
function toggle(open){
 opened=open===undefined?!opened:open;root.classList.toggle('hc-open',opened);
 if(opened&&!log.childNodes.length)greet();
 if(opened)setTimeout(function(){input.focus({preventScroll:true});},50);
}
function build(){
 root=el('div','hc');root.id='help-chat';
 var fab=el('button','hc-fab');fab.type='button';fab.setAttribute('aria-label','Chat: sawal poochiye');
 fab.innerHTML='<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.2 3.6c-.5.4-1.3.1-1.3-.6V16A2.5 2.5 0 0 1 4 13.5z" fill="currentColor"/></svg><span class="hc-fab-x" aria-hidden="true">✕</span>';
 fab.onclick=function(){toggle();};
 var panel=el('div','hc-panel');panel.setAttribute('role','dialog');panel.setAttribute('aria-label','HEYYANIXX Studio help chat');
 var head=el('div','hc-head');
 head.innerHTML='<div class="hc-av">H</div><div class="hc-ht"><b>HEYYANIXX Help</b><small>Auto-replies · Anish khud reply karega for deals</small></div>';
 var lt=el('button','hc-lang','EN');lt.type='button';lt.title='English / Hinglish';
 lt.onclick=function(){lang=lang==='hi'?'en':'hi';lt.textContent=lang==='hi'?'EN':'HI';addBot(replyFor('greet',lang));};
 var cl=el('button','hc-close','✕');cl.type='button';cl.setAttribute('aria-label','Close chat');cl.onclick=function(){toggle(false);};
 head.appendChild(lt);head.appendChild(cl);
 log=el('div','hc-log');log.setAttribute('aria-live','polite');
 var form=el('form','hc-form');input=el('input','hc-in');input.type='text';input.placeholder='Apna sawal likhiye…';input.setAttribute('aria-label','Your question');input.maxLength=300;
 var send=el('button','hc-send','➤');send.type='submit';send.setAttribute('aria-label','Send');
 form.appendChild(input);form.appendChild(send);
 form.onsubmit=function(e){e.preventDefault();var v=input.value;input.value='';ask(v);};
 var note=el('p','hc-note','Ye bot sirf ready jawab deta hai, aapka message kahin save ya send nahi hota.');
 panel.appendChild(head);panel.appendChild(log);panel.appendChild(form);panel.appendChild(note);
 root.appendChild(panel);root.appendChild(fab);document.body.appendChild(root);
 document.addEventListener('keydown',function(e){if(e.key==='Escape'&&opened)toggle(false);});
 if(location.hash==='#chat')toggle(true);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',build);else build();
window.HeyyChat={open:function(){toggle(true);},close:function(){toggle(false);}};
})();
