(() => {
  const key = "portfolio-language";
  const id = {
    "Full-Stack Engineer":"Engineer Full-Stack","Work":"Karya","Capabilities":"Keahlian","Experience":"Pengalaman","Archive":"Arsip","Contact":"Kontak","View CV":"Lihat CV","View Curriculum Vitae":"Lihat Curriculum Vitae","Open PDF":"Buka PDF","Download":"Unduh","Open CV":"Buka CV","PDF Resume":"Resume PDF","Open CV in Browser":"Buka CV di Browser","Download CV":"Unduh CV","Explore My Work":"Jelajahi Karya Saya","Selected Work":"Karya Pilihan","My Role":"Peran Saya","Live Production":"Produksi Aktif","Open Website":"Buka Website","Problem":"Masalah","Solution":"Solusi","Tech Stack":"Teknologi","Engineering Highlights":"Sorotan Engineering","View Live Site":"Lihat Situs","View Source":"Lihat Source","Engineering Capabilities":"Kemampuan Engineering","Primary Stack":"Stack Utama","Ecosystem & Tools":"Ekosistem & Tools","Engineering Focus":"Fokus Engineering","AI ENGINEERING EDGE":"KEUNGGULAN AI ENGINEERING","INPUT":"MASUKAN","INTELLIGENCE":"KECERDASAN","KNOWLEDGE":"PENGETAHUAN","INTEGRATION":"INTEGRASI","PRODUCT":"PRODUK","EDUCATION & CREDENTIALS":"PENDIDIKAN & KREDENSIAL","PRIMARY EDUCATION":"PENDIDIKAN UTAMA","ACHIEVEMENT":"PENCAPAIAN","PROFESSIONAL EDUCATION":"PENDIDIKAN PROFESIONAL","Selected Certifications":"Sertifikasi Pilihan","More Selected Work":"Karya Pilihan Lainnya","Organization / Area":"Organisasi / Bidang","Engineering Workflow":"Alur Kerja Engineering","Technology":"Teknologi","Project Archive":"Arsip Proyek","Explore more of my engineering work.":"Jelajahi lebih banyak karya engineering saya.","28 Projects":"28 Proyek","Research + Production":"Riset + Produksi","Reset filters":"Atur ulang filter","Project Index":"Indeks Proyek","Professional":"Profesional","No projects found":"Proyek tidak ditemukan","Try a different keyword or category.":"Coba kata kunci atau kategori lain.","Project Classification":"Klasifikasi Proyek","Explore Project":"Jelajahi Proyek","GitHub Repository":"Repositori GitHub","Visit Website":"Kunjungi Website","Contact Me":"Hubungi Saya","Profile":"Profil",
    "I build production-ready digital products.":"Saya membangun produk digital yang siap digunakan.","Products I've built and shipped.":"Produk yang telah saya bangun dan rilis.","Tools I use to build reliable software.":"Tools yang saya gunakan untuk membangun software andal.","AI integrated into real software.":"AI yang terintegrasi ke software nyata.","Have a project or opportunity? Let’s build something useful.":"Punya proyek atau peluang? Mari bangun sesuatu yang bermanfaat.","PDF preview is unavailable in this browser.":"Pratinjau PDF tidak tersedia di browser ini.","Search projects, technologies or domains...":"Cari proyek, teknologi, atau bidang...","Search projects":"Cari proyek","Project categories":"Kategori proyek"
  };
  const attrs=["title","placeholder","aria-label","alt"];
  let applying=false;
  function apply(lang){
    if(applying)return;
    applying=true;
    document.documentElement.lang=lang;
    const dict=lang==="id"?id:{};
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT), nodes=[];
    while(walker.nextNode())nodes.push(walker.currentNode);
    nodes.forEach(node=>{const parent=node.parentElement;if(!parent||/^(SCRIPT|STYLE)$/i.test(parent.tagName))return;const source=parent.dataset.i18nSource??node.nodeValue;const text=source.trim(),translated=dict[text],next=translated?source.replace(text,translated):source;parent.dataset.i18nSource=source;if(node.nodeValue!==next)node.nodeValue=next});
    document.querySelectorAll("[title],[placeholder],[aria-label],[alt]").forEach(el=>attrs.forEach(attr=>{if(!el.hasAttribute(attr))return;const data=`i18n${attr.replace(/(^|-)\w/g,part=>part.replace("-","").toUpperCase())}`,source=el.dataset[data]??el.getAttribute(attr),next=dict[source]||source;el.dataset[data]=source;if(el.getAttribute(attr)!==next)el.setAttribute(attr,next)}));
    applying=false;
  }
  window.portfolioI18n={apply,language:()=>localStorage.getItem(key)||"en"};
  document.addEventListener("DOMContentLoaded",()=>{apply(window.portfolioI18n.language());new MutationObserver(()=>apply(window.portfolioI18n.language())).observe(document.body,{childList:true,subtree:true})});
  window.addEventListener("message",event=>{if(event.data?.type==="portfolio-language"){localStorage.setItem(key,event.data.language);apply(event.data.language)}});
})();
