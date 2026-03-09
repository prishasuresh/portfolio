(function() {
  // ── PAGE ROUTING ──
  function showPage(id) {
    document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
    document.querySelectorAll('.nav-links a').forEach(function(a) { a.classList.remove('active'); });
    document.getElementById('page-' + id).classList.add('active');
    var navEl = document.getElementById('nav-' + id);
    if (navEl) navEl.classList.add('active');
    if (id === 'project') { document.body.classList.add('proj-page-active'); }
    else { document.body.classList.remove('proj-page-active'); }
    window.scrollTo(0, 0);
    setTimeout(triggerReveals, 50);
  }


  // ── PROJECT DATA — edit these to fill in your real projects ──
  var PROJECTS = {
    1: {
      num: 'QUEST_001', type: 'CAMPAIGN', title: 'INDEED',
      tags: ['COPYWRITING','AD SCRIPTS','EXPERIENTIAL MARKETING'],
      slogan: '"Job Just Right" Campaign',
      blurb: 'Indeed tasked my team with creating a <span class=\"hi\">$15M fully-fledged marketing campaign</span> that made their brand top of mind for Gen Z as they entered the workforce. The campaign featured long-form creative showcasing the vast possibilities in the work of job-seeking, and experiential activations that aimed to support Gen Z at every step of the job seeking process, from resume support, to attire selection, to start-up fundraising. Most importantly, the <span class=\"hi\">"Job Just Right"</span> messaging pulls from Goldilocks motifs to emphasize that Indeed offers what Gen Z seeks most: personalization.<br><br><span class=\"proj-role\">Role: Copywriter, Field Marketing Strategist</span>',
      collage: ["images/img_11.jpg", "images/img_12.jpg"], // add image URLs or base64 here
      video: 'https://drive.google.com/file/d/1e1Iihac4PdR2gxCyJ4ITp3qCz4GL_b7f/preview',
      slides: [
        { img: "images/img_13.jpg" },
        { img: "images/img_14.jpg" },
        { img: "images/img_15.jpg" },
        { img: "images/img_16.jpg" },
        { img: "images/img_17.jpg" },
        { img: "images/img_18.jpg" }
,
        { img: "images/img_19.jpg" },
        { img: "images/img_20.jpg" },
        { img: "images/img_21.jpg" },
        { img: "images/img_22.jpg" },
        { img: "images/img_23.jpg" },
        { img: "images/img_24.jpg" },
        { img: "images/img_25.jpg" }
      ]
    },
    2: {
      num: 'QUEST_002', type: 'CAMPAIGN', title: 'TIDE',
      tags: ['COPYWRITING','AD SCRIPTS','EXPERIENTIAL MARKETING','NATIONAL WINNER'],
      slogan: '"It\'s Better on Cold" Campaign',
      blurb: 'Tide\'s newest campaign sought not to promote its own product, but rather, more environmentally friendly laundry habits. Our team was tasked with creating a <span class=\"hi\">$60M sustainability campaign</span> focused on encouraging Gen Z to convert to cold water washing. Based on three key strategic drivers, the campaign offered accessible and humorous creative and large-scale field activations aimed at driving organic buzz on the topic. The "<span class=\"hi\">It\'s Better on Cold</span>" messaging also offered three programmatically delivered sub-slogans targeting each of the key drivers, letting consumers know that cold water washing was Greener, Cheaper, and Cleaner.<br><br><span class=\"proj-role\">Role: Copywriter, Field Marketing Strategist</span>',
      collage: ["images/img_26.jpg", "images/img_27.jpg", "images/img_28.jpg"],
      video: 'https://drive.google.com/file/d/1B5kqTbWUrzPhgpH8LBkVe29urm-1jnh_/preview',
      slides: [
        { img: "images/img_29.jpg" },
        { img: "images/img_30.jpg" },
        { img: "images/img_31.jpg" },
        { img: "images/img_32.jpg" },
        { img: "images/img_33.jpg" },
        { img: "images/img_34.jpg" },
        { img: "images/img_35.jpg" },
        { img: "images/img_36.jpg" },
        { img: "images/img_37.jpg" },
        { img: "images/img_38.jpg" },
        { img: "images/img_39.jpg" },
        { img: "images/img_40.jpg" },
        { img: "images/img_41.jpg" },
      ]
    },
    3: {
      num: 'QUEST_003', type: 'CAMPAIGN', title: 'AT&T',
      tags: ['COPYWRITING','AD SCRIPTS','VIDEO CREATIVE'],
      slogan: '"Connecting Changes Everything" Campaign',
      blurb: 'AT&T wanted not to ideate a new campaign, but to expand on an existing one. We proposed a <span class=\"hi\">$50M extension</span> of their <span class=\"hi\">"Connecting Changes Everything"</span> campaign that places AT&T at the forefront of the meaningful connections we\'ve maintained throughout our lifetimes. The campaign includes emotional long-form and short-form creative showcasing AT&T\'s history and capabilities, emphasizing that AT&T is always, has always, and will always be there.<br><br><span class=\"proj-role\">Role: Copywriting Team Lead, Video Director</span>',
      collage: ["images/img_42.png","images/img_43.png"],
      video: 'https://drive.google.com/file/d/1ZFNP4tf9aDze8oNRsIgJFeGFnAS_pnWC/preview',
      slides: [
        { img: "images/img_44.jpg", title: "PAGE 1" },
        { img: "images/img_45.jpg", title: "PAGE 2" },
        { img: "images/img_46.jpg", title: "PAGE 3" },
        { img: "images/img_47.jpg", title: "PAGE 4" },
        { img: "images/img_48.jpg", title: "PAGE 5" },
        { img: "images/img_49.jpg", title: "PAGE 6" },
        { img: "images/img_50.jpg", title: "PAGE 7" },
        { img: "images/img_51.jpg", title: "PAGE 8" },
        { img: "images/img_52.jpg", title: "PAGE 9" },
        { img: "images/img_53.jpg", title: "PAGE 10" },
        { img: "images/img_54.jpg", title: "PAGE 11" },
        { img: "images/img_55.jpg", title: "PAGE 12" },
        { img: "images/img_56.jpg", title: "PAGE 13" },
      ]
    },
    4: {
      num: 'QUEST_004', type: 'CAMPAIGN', title: 'UJI TIME',
      tags: ['PROJECT MANAGEMENT','BRAND STRATEGY','COPYWRITING'],
      slogan: 'National Expansion Rebrand',
      blurb: 'Uji Time has been known as a hidden gem amongst Bay Area residents for years. Offering house-made soft serve and desserts inspired by a variety of East Asian flavors, Uji Time had a great product. However, as they started eyeing national expansion, they needed <span class=\"hi\">great branding too</span>. My team was tasked with a <span class=\"hi\">full branding overhaul</span>: branding guidelines, OOH assets, creative messaging, and a new website. Mixing East Asian traditions with American branding sensibilities, the result is a brand that\'s as innovative as its product.<br><br><span class=\"proj-role\">Role: Project Manager, Copywriter</span>',
      collage: ["images/uji_collage.png"],
      video: null,
      stratLabel: 'VIEW THE WORK',
      slides: [
        { img: "images/uji_slide_01.png", title: "SLIDE 1" },
        { img: "images/uji_slide_02.png", title: "SLIDE 2" },
        { img: "images/uji_slide_03.png", title: "SLIDE 3" },
        { img: "images/uji_slide_04.png", title: "SLIDE 4" }
      ]
    }
  }

  // Open project page
  document.querySelectorAll('.gif-card').forEach(function(card) {
    card.addEventListener('click', function() {
      var id = parseInt(card.getAttribute('data-project'));
      var p = PROJECTS[id];
      if (!p) return;

      document.getElementById('proj-title').textContent = p.title;
      document.getElementById('proj-slogan').textContent = p.slogan || '';
      document.getElementById('proj-blurb').innerHTML = p.blurb;

      // Tags
      var tagsEl = document.getElementById('proj-tags');
      tagsEl.innerHTML = p.tags.map(function(t){
        return '<span class="proj-tag">'+t+'</span>';
      }).join('');

      // Collage
      var collageEl = document.getElementById('proj-collage');
      function collageSrc(item) { return (item && item.img) ? item.img : item; }
      if (p.collage && p.collage.length === 3) {
        // 3-image layout: featured award photo left, two overlapping mockups right
        collageEl.innerHTML =
          '<div class="collage-3">' +
            '<img class="collage-3-featured" src="'+collageSrc(p.collage[0])+'" alt="award">' +
            '<div class="collage-3-overlap">' +
              '<img class="proj-collage-img" src="'+collageSrc(p.collage[1])+'" alt="mockup 1">' +
              '<img class="proj-collage-img" src="'+collageSrc(p.collage[2])+'" alt="mockup 2">' +
            '</div>' +
          '</div>';
      } else if (p.collage && p.collage.length === 1) {
        collageEl.innerHTML = '<div class="collage-single"><img class="proj-collage-img" src="'+collageSrc(p.collage[0])+'" alt="asset"></div>';
      } else if (p.collage && p.collage.length) {
        collageEl.innerHTML = p.collage.map(function(item, i){
          var extra = (id === 3 && i === 0) ? ' style="aspect-ratio:3/4;object-position:center top;"' : '';
          return '<img class="proj-collage-img" src="'+collageSrc(item)+'"'+extra+' alt="asset '+i+'">';
        }).join('');
      } else {
        collageEl.innerHTML = '<div class="proj-collage-placeholder">[ ASSETS COMING SOON ]</div>';
      }

      // Video
      var videoSection = document.getElementById('proj-video-section');
      var videoWrap = document.getElementById('proj-video-wrap');
      if (p.video) {
        videoSection.style.display = '';
        videoWrap.innerHTML = '<iframe src="'+p.video+'" allowfullscreen></iframe>';
      } else {
        videoSection.style.display = 'none';
      }

      // Strategy carousel
      var stratSection = document.getElementById('proj-strat-section');
      var track = document.getElementById('proj-car-track');
      var dotsEl = document.getElementById('proj-car-dots');
      if (p.slides && p.slides.length) {
        stratSection.style.display = '';
        var stratTitle = document.getElementById('proj-strat-title');
        if (p.stratLabel) {
          var parts = p.stratLabel.split(' ');
          var last = parts.pop();
          stratTitle.innerHTML = parts.join(' ') + ' <span class="ac">' + last + '</span>';
        } else {
          stratTitle.innerHTML = 'READ THE <span class="ac">STRATEGY</span>';
        }
        track.innerHTML = p.slides.map(function(s){
          if (s.img) {
            return '<div class="proj-car-slide proj-car-slide-img"><img src="'+s.img+'" style="width:100%;height:100%;display:block;object-fit:contain;"></div>';
          }
          return '<div class="proj-car-slide"><div class="proj-car-slide-title">'+s.title+'</div><div class="proj-car-slide-body">'+s.body+'</div></div>';
        }).join('');
        dotsEl.innerHTML = p.slides.map(function(s, i){
          return '<button class="proj-car-dot'+(i===0?' active':'')+'" data-i="'+i+'"></button>';
        }).join('');
        // init carousel
        var cur = 0;
        function projGoTo(n) {
          cur = ((n % p.slides.length) + p.slides.length) % p.slides.length;
          track.style.transform = 'translateX(-'+cur*100+'%)';
          dotsEl.querySelectorAll('.proj-car-dot').forEach(function(d,i){ d.classList.toggle('active', i===cur); });
        }
        document.getElementById('proj-car-prev').onclick = function(){ projGoTo(cur-1); };
        document.getElementById('proj-car-next').onclick = function(){ projGoTo(cur+1); };
        dotsEl.querySelectorAll('.proj-car-dot').forEach(function(d){
          d.onclick = function(){ projGoTo(parseInt(d.getAttribute('data-i'))); };
        });
      } else {
        stratSection.style.display = 'none';
      }

      showPage('project');
    });
  });

  // Back button
  document.getElementById('back-btn').addEventListener('click', function() {
    showPage('quests');
  });

  // Wire up all data-page elements after DOM ready
  document.querySelectorAll('[data-page]').forEach(function(el) {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      showPage(el.getAttribute('data-page'));
    });
  });

  // ── CURSOR ──
  var cursor = document.getElementById('cursor');
  var ring   = document.getElementById('cursor-ring');
  var mx=0, my=0, rx=0, ry=0;

  document.addEventListener('mousemove', function(e) {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  (function loop() {
    rx += (mx - rx) * 0.13;
    ry += (my - ry) * 0.13;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(loop);
  })();

  document.addEventListener('mouseover', function(e) {
    var t = e.target.closest('a,button,.work-card,.dnd-stat,.exp-entry');
    if (t) document.body.classList.add('hovering');
  });
  document.addEventListener('mouseout', function(e) {
    var t = e.target.closest('a,button,.work-card,.dnd-stat,.exp-entry');
    if (t) document.body.classList.remove('hovering');
  });

  // ── SPARKLES ──
  var canvas = document.getElementById('sparkle-canvas');
  var ctx    = canvas.getContext('2d');
  function resize() { canvas.width = innerWidth; canvas.height = innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  var sparks = [];
  var COLORS = ['#ffb450','#ff7a30','#ff6eb4','#ffe156','#4cff91'];

  document.addEventListener('mousemove', function(e) {
    if (Math.random() > 0.5) {
      sparks.push({
        x: e.clientX + (Math.random() - 0.5) * 14,
        y: e.clientY + (Math.random() - 0.5) * 14,
        size: Math.floor(Math.random() * 4) + 3,
        alpha: 1,
        vx: (Math.random() - 0.5) * 1.8,
        vy: -Math.random() * 2.2 - 0.4,
        rot: Math.random() < 0.5 ? 0 : Math.PI / 4,
        color: COLORS[Math.floor(Math.random() * COLORS.length)]
      });
    }
  });

  function pixelStar(x, y, r, rot) {
    ctx.save();
    ctx.translate(Math.round(x), Math.round(y));
    ctx.rotate(rot);
    ctx.beginPath();
    for (var i = 0; i < 4; i++) {
      var a = (i / 4) * Math.PI * 2;
      ctx.lineTo(Math.round(Math.cos(a) * r), Math.round(Math.sin(a) * r));
      ctx.lineTo(Math.round(Math.cos(a + Math.PI/4) * r * 0.28), Math.round(Math.sin(a + Math.PI/4) * r * 0.28));
    }
    ctx.closePath();
    ctx.restore();
  }

  (function anim() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = sparks.length - 1; i >= 0; i--) {
      var s = sparks[i];
      s.x += s.vx; s.y += s.vy; s.alpha -= 0.024;
      if (s.alpha <= 0) { sparks.splice(i, 1); continue; }
      ctx.save();
      ctx.globalAlpha = s.alpha;
      ctx.fillStyle   = s.color;
      ctx.shadowColor = s.color;
      ctx.shadowBlur  = 4;
      pixelStar(s.x, s.y, s.size, s.rot);
      ctx.fill();
      ctx.restore();
    }
    requestAnimationFrame(anim);
  })();

  // ── REVEAL ──
  function triggerReveals() {
    var items = document.querySelectorAll('.page.active .reveal:not(.visible)');
    items.forEach(function(el) { el.classList.add('visible'); });
  }
  triggerReveals();
  window.addEventListener('scroll', triggerReveals);

  // Also trigger reveals whenever showPage is called
  var _origShowPage = showPage;
  showPage = function(id) {
    _origShowPage(id);
    setTimeout(function() {
      document.querySelectorAll('.page.active .reveal').forEach(function(el) {
        el.classList.add('visible');
      });
    }, 30);
  };

})();

  // ── PIXEL PEN HERO BACKGROUND ──
  (function() {
    const penCanvas = document.getElementById('hero-portrait');
    if (!penCanvas) return;
    const W = 360, H = 360, PIXEL = 2, RW = W/PIXEL, RH = H/PIXEL;
    const penRenderer = new THREE.WebGLRenderer({ canvas: penCanvas, antialias: false, alpha: true });
    penRenderer.setSize(W, H);
    penRenderer.setPixelRatio(1);
    const rtTarget = new THREE.WebGLRenderTarget(RW, RH, { minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter });
    const penScene = new THREE.Scene();
    const penCamera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    penCamera.position.set(3.5, 3.5, 8);
    penCamera.lookAt(0, 0, 0);
    const PAL = { bodyDark:0x1a1a2e, bodyMid:0x16213e, bodyLight:0x0f3460, gold:0xc8b96e, goldDark:0x8a7a3a, goldLight:0xf0dfa0, nibSilver:0xd4d4d8, nibDark:0x6b6b78, inkBlue:0x2255aa };
    function pmat(color, rough, metal) { return new THREE.MeshStandardMaterial({ color, roughness: rough||0.85, metalness: metal||0, flatShading: true }); }
    const pg = new THREE.Group();
    const addMesh = (geo, mat, px, py, pz, rx, ry, rz) => { const m = new THREE.Mesh(geo, mat); m.position.set(px||0,py||0,pz||0); if(rx) m.rotation.x=rx; if(ry) m.rotation.y=ry; if(rz) m.rotation.z=rz; pg.add(m); return m; };
    addMesh(new THREE.CylinderGeometry(0.22,0.20,1.6,8), pmat(PAL.bodyDark,0.9,0.1), 0,0,2.05, Math.PI/2);
    addMesh(new THREE.SphereGeometry(0.22,8,6,0,Math.PI*2,0,Math.PI/2), pmat(PAL.bodyDark,0.9,0.1), 0,0,2.85, -Math.PI/2);
    addMesh(new THREE.CylinderGeometry(0.235,0.235,0.12,8), pmat(PAL.gold,0.4,0.8), 0,0,1.45, Math.PI/2);
    addMesh(new THREE.BoxGeometry(0.08,0.06,1.5), pmat(PAL.gold,0.4,0.8), 0.24,0,2.1);
    addMesh(new THREE.SphereGeometry(0.1,6,5), pmat(PAL.goldLight,0.3,0.9), 0.24,0,2.85);
    addMesh(new THREE.CylinderGeometry(0.20,0.18,2.8,8), pmat(PAL.bodyMid,0.85,0.05), 0,0,0, Math.PI/2);
    addMesh(new THREE.CylinderGeometry(0.215,0.215,0.1,8), pmat(PAL.gold,0.4,0.8), 0,0,1.35, Math.PI/2);
    addMesh(new THREE.CylinderGeometry(0.21,0.21,0.1,8), pmat(PAL.goldDark,0.45,0.7), 0,0,-1.35, Math.PI/2);
    addMesh(new THREE.CylinderGeometry(0.17,0.14,0.9,8), pmat(PAL.bodyLight,0.95,0), 0,0,-1.85, Math.PI/2);
    addMesh(new THREE.ConeGeometry(0.13,0.9,6), pmat(PAL.nibSilver,0.3,0.9), 0,0,-2.75, -Math.PI/2);
    addMesh(new THREE.SphereGeometry(0.035,5,4), pmat(PAL.goldLight,0.2,1.0), 0,0,-3.18);
    penScene.add(pg);
    penScene.add(new THREE.AmbientLight(0x334466, 0.7));
    const kl = new THREE.DirectionalLight(0xfff0cc, 1.8); kl.position.set(4,6,5); penScene.add(kl);
    const fl = new THREE.DirectionalLight(0x4466aa, 0.5); fl.position.set(-5,2,-3); penScene.add(fl);
    const rl = new THREE.DirectionalLight(0xc8b96e, 0.6); rl.position.set(0,-3,-6); penScene.add(rl);
    const fsScene2 = new THREE.Scene();
    const fsCamera2 = new THREE.OrthographicCamera(-1,1,1,-1,0,1);
    const fsMesh2 = new THREE.Mesh(new THREE.PlaneGeometry(2,2), new THREE.MeshBasicMaterial({ map: rtTarget.texture, transparent: true }));
    fsScene2.add(fsMesh2);
    let penAngle = 0;
    function penLoop() {
      requestAnimationFrame(penLoop);
      penAngle += 0.012;
      pg.rotation.y = penAngle;
      pg.rotation.x = 0;
      pg.rotation.z = 0;
      penRenderer.setRenderTarget(rtTarget);
      penRenderer.setSize(RW, RH);
      penRenderer.render(penScene, penCamera);
      penRenderer.setRenderTarget(null);
      penRenderer.setSize(W, H);
      penRenderer.render(fsScene2, fsCamera2);
    }
    penLoop();
  })();


  // ── CAROUSEL ──
  (function() {
    function initCarousel() {
      var track = document.getElementById('car-track');
      var prevBtn = document.getElementById('car-prev');
      var nextBtn = document.getElementById('car-next');
      var dots = document.querySelectorAll('.car-dot');
      if (!track || !prevBtn) return;
      var total = dots.length;
      var cur = 0;
      function goTo(n) {
        cur = ((n % total) + total) % total;
        track.style.transform = 'translateX(-' + (cur * 100) + '%)';
        dots.forEach(function(d, i) { d.classList.toggle('active', i === cur); });
      }
      prevBtn.addEventListener('click', function() { goTo(cur - 1); });
      nextBtn.addEventListener('click', function() { goTo(cur + 1); });
      dots.forEach(function(d) {
        d.addEventListener('click', function() { goTo(parseInt(d.getAttribute('data-i'))); });
      });
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initCarousel);
    } else {
      initCarousel();
    }
  })();

  // ── NDA TYPING ANIMATION ──
  (function() {
    var el = document.getElementById('nda-typer');
    if (!el) return;
    var phrases = ['Under NDA', 'It was really cool I promise'];
    var pi = 0, ci = 0, deleting = false;
    function tick() {
      var phrase = phrases[pi];
      if (!deleting) {
        el.textContent = phrase.slice(0, ci + 1);
        ci++;
        if (ci === phrase.length) { deleting = true; setTimeout(tick, 1800); return; }
        setTimeout(tick, 80);
      } else {
        el.textContent = phrase.slice(0, ci - 1);
        ci--;
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(tick, 400); return; }
        setTimeout(tick, 45);
      }
    }
    tick();
  })();