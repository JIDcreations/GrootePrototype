/* ============================================================
   DE GROOTE NV — SERVICE DETAIL PAGE DATA
   ============================================================ */

(function () {
  'use strict';

  if (!document.body.hasAttribute('data-service-detail')) return;

  const services = {
    transport: {
      id: 'transport',
      number: '01',
      label: 'Dienst 01',
      titleHtml: 'Transport',
      titlePlain: 'Transport',
      lead: 'Zwaar, uitzonderlijk of internationaal: wij organiseren transporttrajecten met dezelfde precisie waarmee we ze uitvoeren op de werf.',
      metaDescription: 'Transport op maat voor industriële projecten, uitzonderlijk vervoer en internationale trajecten door De Groote NV.',
      heroImage: 'assets/site-media/8_laden van plaatschaar/ok/031BE157-A506-43F8-A9CA-F40683DA9358.jpg',
      heroAlt: 'Transport van zware industriële machines',
      fullImage: 'assets/site-media/14_transport van transformato/ok/48529772-576E-4CFA-A0B2-22F9FBA479A2.jpg',
      fullAlt: 'Transport van een industriële transformator',
      meta: ['Uitzonderlijk vervoer', 'Internationaal', 'Vergunningen & begeleiding'],
      introTitle: 'Transport met controle over elke stap',
      paragraphs: [
        'Transportprojecten in de industrie vragen meer dan laadvermogen. De juiste route, de juiste vergunningen en de juiste timing bepalen of een traject veilig en efficiënt verloopt. Daarom combineren wij praktisch vakmanschap met een sterk voorbereidende fase.',
        'We stemmen het transport af op de context van uw site, de afmetingen van de lading en de aansluitende montage- of hijswerken. Zo blijft de uitvoering logisch, beheersbaar en afgestemd op het volledige project.'
      ],
      features: [
        {
          title: 'Voortraject',
          text: 'Analyse van route, afmetingen, timing en werfcondities zodat het transport zonder verrassingen kan vertrekken.'
        },
        {
          title: 'Uitvoering',
          text: 'Inzet van het juiste materieel, ervaren chauffeurs en duidelijke werfcoördinatie tijdens het volledige traject.'
        },
        {
          title: 'Aansluiting',
          text: 'Vlotte overdracht naar montage, opslag of hijswerk zodat de volgende projectfase meteen kan starten.'
        }
      ],
      bullets: [
        'Uitzonderlijk transport voor brede, hoge en zware ladingen',
        'Eigen transportmiddelen en gespecialiseerde trailers',
        'Routevoorbereiding en vergunningsaanvragen',
        'Coördinatie met hijs- en montageploegen',
        'Duidelijke communicatie met alle betrokken partijen'
      ],
      gallery: [
        'assets/site-media/8_laden van plaatschaar/ok/031BE157-A506-43F8-A9CA-F40683DA9358.jpg',
        'assets/site-media/14_transport van transformato/ok/48529772-576E-4CFA-A0B2-22F9FBA479A2.jpg',
        'assets/site-media/23_volledige verhuis fabriek/ok/05A0E91B-E576-4265-93BA-D9D63A9B7D7D.jpg'
      ]
    },
    montage: {
      id: 'montage',
      number: '02',
      label: 'Dienst 02',
      titleHtml: 'Montage &amp;<br>demontage',
      titlePlain: 'Montage & demontage',
      lead: 'Wij demonteren, verhuizen en monteren installaties met één ploeg die de technische logica van het volledige traject begrijpt.',
      metaDescription: 'Montage en demontage van industriële installaties door ervaren technici van De Groote NV.',
      heroImage: 'assets/site-media/2_opbouw fabriek in Frankrijk/ok/484B88BE-281C-4EE2-BF5D-839F26CE399D.jpg',
      heroAlt: 'Montage van een industriële installatie',
      fullImage: 'assets/site-media/1_turn key project/ok/5758BAE5-F017-4AC2-B73A-C2B9FCA598AD.jpg',
      fullAlt: 'Turn-key montageproject',
      meta: ['Technische ploegen', 'ATEX mogelijk', 'Van demontage tot opstart'],
      introTitle: 'Technisch vakwerk op de juiste plaats in het project',
      paragraphs: [
        'Montage en demontage zijn zelden geïsoleerde opdrachten. Ze maken deel uit van een groter geheel waarin timing, veiligheid en technische nauwkeurigheid elkaar moeten versterken. Daarom werken wij met eigen technici die vertrouwd zijn met industriële installaties, werfcoördinatie en strakke planningen.',
        'We zorgen niet alleen voor het losmaken en opbouwen van machines, maar ook voor een gecontroleerde overdracht tussen transport, positionering, aansluiting en inbedrijfstelling. Dat houdt het project overzichtelijk en beperkt stilstand.'
      ],
      features: [
        {
          title: 'Demontage',
          text: 'Veilig afbouwen, labelen en voorbereiden van installaties voor transport of interne verplaatsing.'
        },
        {
          title: 'Heropbouw',
          text: 'Nauwkeurige montage op de nieuwe locatie met aandacht voor volgorde, afstelling en werfveiligheid.'
        },
        {
          title: 'Coördinatie',
          text: 'Aansturing tussen techniek, hijswerk en logistiek zodat elk team op het juiste moment kan inpikken.'
        }
      ],
      bullets: [
        'Demontage van bestaande installaties',
        'Montage en inbedrijfstelling op nieuwe locatie',
        'Begeleiding door gecertificeerde technici',
        'Documentatie, markering en werfopvolging',
        'Werken in complexe industriële omgevingen'
      ],
      gallery: [
        'assets/site-media/2_opbouw fabriek in Frankrijk/ok/484B88BE-281C-4EE2-BF5D-839F26CE399D.jpg',
        'assets/site-media/2_opbouw fabriek in Frankrijk/ok/1523DD79-ACE5-499C-9BB3-6D83BD7A375E.jpg',
        'assets/site-media/1_turn key project/ok/5758BAE5-F017-4AC2-B73A-C2B9FCA598AD.jpg'
      ]
    },
    opslag: {
      id: 'opslag',
      number: '03',
      label: 'Dienst 03',
      titleHtml: 'Opslag',
      titlePlain: 'Opslag',
      lead: 'Tijdelijke of langdurige opslag van machines en industriële goederen, met de juiste handling en bescherming vanaf het eerste moment.',
      metaDescription: 'Beveiligde opslag voor industriële machines en projectmateriaal bij De Groote NV.',
      heroImage: 'assets/site-media/23_volledige verhuis fabriek/ok/08D1D69D-8F88-4051-93E2-2EB2B91C68BF.jpg',
      heroAlt: 'Opslag van industrieel materieel',
      fullImage: 'assets/site-media/23_volledige verhuis fabriek/ok/05A0E91B-E576-4265-93BA-D9D63A9B7D7D.jpg',
      fullAlt: 'Gecontroleerde opslag tijdens industriële verhuis',
      meta: ['Beveiligde zones', 'Korte of lange termijn', 'Eigen handlingmaterieel'],
      introTitle: 'Opslag als actieve schakel in uw project',
      paragraphs: [
        'Opslag is vaak geen eindpunt maar een tussenfase. Machines wachten op montage, onderdelen moeten gefaseerd geleverd worden of materiaal moet tijdelijk uit productie gehaald worden. Daarom behandelen wij opslag als een logistieke stap met evenveel aandacht als transport of hijswerk.',
        'We organiseren ontvangst, plaatsing, bescherming en vrijgave op een manier die aansluit op uw planning. Daardoor blijft het materiaal traceerbaar, toegankelijk en klaar voor de volgende projectfase.'
      ],
      features: [
        {
          title: 'Ontvangst',
          text: 'Gecontroleerde binnenkomst, lossing en positionering van machines en projectmateriaal.'
        },
        {
          title: 'Bescherming',
          text: 'Opslagomstandigheden afgestemd op gewicht, afmetingen en gevoeligheid van het materieel.'
        },
        {
          title: 'Vrijgave',
          text: 'Doordachte planning voor uitname en transport zodra het project daar klaar voor is.'
        }
      ],
      bullets: [
        'Beveiligde opslagruimtes binnen en buiten',
        'Geschikt voor zware en volumineuze installaties',
        'In- en uitladen met eigen hijsmiddelen',
        'Toegangscontrole en duidelijke projectregistratie',
        'Flexibele opslagduur en gefaseerde vrijgave'
      ],
      gallery: [
        'assets/site-media/23_volledige verhuis fabriek/ok/08D1D69D-8F88-4051-93E2-2EB2B91C68BF.jpg',
        'assets/site-media/20_tijdelijke ondersteuning/ok/0399FE6D-1D27-4D18-ADFF-08B6629A40DC.jpg',
        'assets/site-media/21_trekken van rotor/ok/19B8556E-B18D-47E0-AD11-31458A67209B.jpg'
      ]
    },
    hijswerk: {
      id: 'hijswerk',
      number: '04',
      label: 'Dienst 04',
      titleHtml: 'Hijswerk',
      titlePlain: 'Hijswerk',
      lead: 'Van gecontroleerde lifts in productiehallen tot complexe multi-crane operaties op uitdagende werven.',
      metaDescription: 'Hijswerk, liftstudies en complexe kraanoperaties voor industriële projecten bij De Groote NV.',
      heroImage: 'assets/site-media/4_wegnemen loopkat/ok/0F35C2C2-4C1C-47D8-BC19-92A50DD553F7.jpg',
      heroAlt: 'Hijswerk met zwaar materieel',
      fullImage: 'assets/site-media/11_plaatsen boom met telescoopkraa/ok/20FA3E8F-D252-4694-AEE9-752AA7B953FA.jpg',
      fullAlt: 'Hijswerk met telescoopkraan',
      meta: ['Liftstudies', 'Complexe operaties', 'Snelle inzet'],
      introTitle: 'Hijswerk waarin voorbereiding het verschil maakt',
      paragraphs: [
        'Sterk hijswerk begint niet op het moment van heffen, maar bij de voorbereiding. Gewicht, draaicirkels, ondergrond, obstakels en sequentie bepalen samen hoe veilig en efficiënt een lift kan verlopen. Daarom werken wij vanuit een heldere technische analyse naar een beheersbare uitvoering.',
        'Of het nu gaat om een éénmalige lift of een gefaseerde operatie over meerdere dagen: we stemmen mensen, materieel en timing zo op elkaar af dat de liftcontrole behouden blijft van begin tot einde.'
      ],
      features: [
        {
          title: 'Studie',
          text: 'Technische voorbereiding met aandacht voor lasten, opstelling, ondergrond en bereik.'
        },
        {
          title: 'Materieel',
          text: 'Selectie van de juiste kranen, hijsbalken en hulpstukken voor elke specifieke lift.'
        },
        {
          title: 'Uitvoering',
          text: 'Duidelijke werfregie tijdens de lift zodat veiligheid en precisie behouden blijven.'
        }
      ],
      bullets: [
        'Autokranen en gespecialiseerd hijsmaterieel',
        'Telescoop- en vakwerkboomkranen',
        'Liftstudies en berekeningen door eigen team',
        'Tandemlifts en meerfasige operaties',
        'Inzetbaar op complexe en moeilijk bereikbare locaties'
      ],
      gallery: [
        'assets/site-media/4_wegnemen loopkat/ok/24CDE436-2A1F-4C89-A0E1-A9FFEE5CF2C0.jpg',
        'assets/site-media/19_montage + plaatsen van windmole/ok/17CE77E1-2765-41B4-AA6E-5CBD44C26D22.jpg',
        'assets/site-media/15_wegnemen interne betonbalk/ok/089A4C5C-BD54-4E16-87D1-F79ECC2A398D.jpg'
      ]
    },
    engineering: {
      id: 'engineering',
      number: '05',
      label: 'Dienst 05',
      titleHtml: 'Engineering',
      titlePlain: 'Engineering',
      lead: 'Technische voorbereiding, maatwerkopstellingen en projectcoördinatie die complexe verplaatsingen uitvoerbaar maken.',
      metaDescription: 'Engineering, stabiliteitsstudies en maatwerkoplossingen voor industriële verhuisprojecten bij De Groote NV.',
      heroImage: 'assets/site-media/25_skidsytemen/ok/18B2BD82-5FC4-4080-ADF6-768ABA0A3D42_1_102_o.jpg',
      heroAlt: 'Engineering en maatwerkopstelling',
      fullImage: 'assets/site-media/21_trekken van rotor/ok/19B8556E-B18D-47E0-AD11-31458A67209B.jpg',
      fullAlt: 'Technische voorbereiding voor een complexe verplaatsing',
      meta: ['Lift- en stabiliteitsstudies', 'Maatwerk', 'Projectcoördinatie'],
      introTitle: 'Engineering die de uitvoering eenvoudiger maakt',
      paragraphs: [
        'Bij complexe industriële verplaatsingen is voorbereiding geen administratieve stap, maar een essentieel deel van de oplossing. Ons engineeringteam vertaalt technische risico’s en randvoorwaarden naar een uitvoerbaar plan op maat van de site, de last en de gewenste timing.',
        'Van tekenwerk en opstellingen tot berekeningen en werkmethodes: we bouwen een technisch kader dat niet alleen veilig is, maar ook praktisch inzetbaar blijft op de vloer.'
      ],
      features: [
        {
          title: 'Analyse',
          text: 'Inventarisatie van lasten, omgeving, tolerantie en uitvoeringsvolgorde voor een technisch onderbouwd plan.'
        },
        {
          title: 'Ontwerp',
          text: 'Maatwerkopstellingen, skidsystemen en hulpmiddelen ontworpen op de concrete toepassing.'
        },
        {
          title: 'Sturing',
          text: 'Engineering die verbonden blijft met de uitvoering en bijstuurt waar nodig tijdens het project.'
        }
      ],
      bullets: [
        'Hijsplan en stabiliteitsstudies',
        'Ontwerp en productie van maatwerkopstellingen',
        'Skid- en rolsystemen voor precisieverplaatsing',
        '3D voorbereiding en technische simulatie',
        'Projectcoördinatie van voorbereiding tot oplevering'
      ],
      gallery: [
        'assets/site-media/25_skidsytemen/ok/18B2BD82-5FC4-4080-ADF6-768ABA0A3D42_1_102_o.jpg',
        'assets/site-media/5_wisselen van PE tank/ok/0A021ACD-A137-4985-8C1E-9EA48B7911F6.jpg',
        'assets/site-media/6_opbouw nieuwe transformator/ok/0EA6816B-BA50-4E96-AFC5-9AC9203CC4F0.jpg'
      ]
    },
    'interne-verplaatsing': {
      id: 'interne-verplaatsing',
      number: '06',
      label: 'Dienst 06',
      titleHtml: 'Interne<br>verplaatsing',
      titlePlain: 'Interne verplaatsing',
      lead: 'Precisieverplaatsingen binnen productiehallen en technische ruimtes, afgestemd op bestaande installaties en lopende activiteiten.',
      metaDescription: 'Interne verplaatsing van machines en installaties met precisie door De Groote NV.',
      heroImage: 'assets/site-media/10_manipulatiewerken/ok/096A2550-A314-4166-97F9-2D0A18E50C32.jpg',
      heroAlt: 'Interne verplaatsing van zware machines',
      fullImage: 'assets/site-media/5_wisselen van PE tank/ok/11529634-84AF-4F4C-AC8D-63B9B3295715.jpg',
      fullAlt: 'Precisieverplaatsing op industriële site',
      meta: ['Millimeterwerk', 'Binnen bestaande sites', 'Minimale stilstand'],
      introTitle: 'Precisiewerk in een beperkte werkomgeving',
      paragraphs: [
        'Interne verplaatsingen vragen een andere aanpak dan klassiek transport. Ruimte is beperkt, doorgangen zijn smal en de impact op lopende productie moet vaak minimaal blijven. Daarom werken we met compacte systemen en een uitvoeringsplan dat vertrekt vanuit de realiteit van de site.',
        'We combineren manipulatiemiddelen, schaarhefwagens, rollbanen of luchtlagers om zware lasten gecontroleerd te verplaatsen, vaak in omgevingen waar elke centimeter telt.'
      ],
      features: [
        {
          title: 'Opmeting',
          text: 'Analyse van doorgangen, hoogtes, vloeren en obstakels om een haalbare route uit te werken.'
        },
        {
          title: 'Manipulatie',
          text: 'Inzet van aangepaste middelen voor gecontroleerde bewegingen in krappe of gevoelige werkomgevingen.'
        },
        {
          title: 'Continuïteit',
          text: 'Planning en uitvoering gericht op beperkte stilstand en maximale beheersing van de werfimpact.'
        }
      ],
      bullets: [
        'Luchtlagers, rollbaansystemen en platformwagens',
        'Laagbouw schaarhefwagens voor beperkte hoogtes',
        'Werkmethode afgestemd op bestaande productieomgeving',
        'Veilige verplaatsing in smalle gangpaden en technische ruimtes',
        'Volledig plan op maat van machine en locatie'
      ],
      gallery: [
        'assets/site-media/10_manipulatiewerken/ok/096A2550-A314-4166-97F9-2D0A18E50C32.jpg',
        'assets/site-media/22_werken diepvries/ok/072EF712-BA98-4D28-8B36-DFDAEDDD1E5D.jpg',
        'assets/site-media/5_wisselen van PE tank/ok/0A021ACD-A137-4985-8C1E-9EA48B7911F6.jpg'
      ]
    },
    kraanverhuur: {
      id: 'kraanverhuur',
      number: '07',
      label: 'Dienst 07',
      titleHtml: 'Kraanverhuur',
      titlePlain: 'Kraanverhuur',
      lead: 'Flexibele inzet van autokranen en telescoopkranen, met de optie om meteen de juiste machinist en werfkennis mee te schakelen.',
      metaDescription: 'Kraanverhuur met of zonder machinist voor industriële en bouwprojecten bij De Groote NV.',
      heroImage: 'assets/site-media/11_plaatsen boom met telescoopkraa/ok/20FA3E8F-D252-4694-AEE9-752AA7B953FA.jpg',
      heroAlt: 'Kraanverhuur voor industriële projecten',
      fullImage: 'assets/site-media/19_montage + plaatsen van windmole/ok/17CE77E1-2765-41B4-AA6E-5CBD44C26D22.jpg',
      fullAlt: 'Kraan op werf voor hijsopdracht',
      meta: ['Met of zonder machinist', 'Snelle planning', 'Gekeurd materieel'],
      introTitle: 'De juiste kraan, correct ingepland',
      paragraphs: [
        'Kraanverhuur draait niet alleen om capaciteit, maar ook om bereik, opstelling, timing en de context van de werf. Daarom bekijken we elke aanvraag vanuit de praktische situatie ter plaatse, zodat de inzet van de kraan klopt vanaf dag één.',
        'U kunt rekenen op materieel dat technisch in orde is, helder ingepland wordt en indien nodig gecombineerd wordt met onze machinisten, hijskennis en projectervaring.'
      ],
      features: [
        {
          title: 'Selectie',
          text: 'Advies over capaciteit, opstelling en reikwijdte zodat het gekozen materieel echt past bij de opdracht.'
        },
        {
          title: 'Planning',
          text: 'Snelle inzetbaarheid en afstemming op de concrete werfplanning, inclusief levervensters en fasering.'
        },
        {
          title: 'Ondersteuning',
          text: 'Mogelijkheid om machinist, hijsadvies of aanvullende coördinatie meteen mee in te schakelen.'
        }
      ],
      bullets: [
        'Verhuur met of zonder machinist',
        'Autokranen en telescoopkranen voor uiteenlopende projecten',
        'Snelle beschikbaarheidscheck en duidelijke planning',
        'Volledig gekeurde en gecertificeerde machines',
        'Combineerbaar met hijswerk, transport en engineering'
      ],
      gallery: [
        'assets/site-media/11_plaatsen boom met telescoopkraa/ok/20FA3E8F-D252-4694-AEE9-752AA7B953FA.jpg',
        'assets/site-media/6_opbouw nieuwe transformator/ok/0EA6816B-BA50-4E96-AFC5-9AC9203CC4F0.jpg',
        'assets/site-media/4_wegnemen loopkat/ok/24CDE436-2A1F-4C89-A0E1-A9FFEE5CF2C0.jpg'
      ]
    }
  };

  const order = [
    'transport',
    'montage',
    'opslag',
    'hijswerk',
    'engineering',
    'interne-verplaatsing',
    'kraanverhuur'
  ];

  const params = new URLSearchParams(window.location.search);
  const selectedId = params.get('service');
  const service = services[selectedId] || services.transport;

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  const setHtml = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = value;
  };

  const setImage = (id, src, alt) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.src = src;
    el.alt = alt;
  };

  document.title = `${service.titlePlain} — De Groote NV`;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute('content', service.metaDescription);

  setText('detail-breadcrumb', service.titlePlain);
  setText('detail-label', service.label);
  setHtml('detail-title', service.titleHtml);
  setText('detail-lead', service.lead);
  setImage('detail-hero-image', service.heroImage, service.heroAlt);
  setImage('detail-full-image', service.fullImage, service.fullAlt);
  setText('detail-intro-title', service.introTitle);
  setText('detail-paragraph-1', service.paragraphs[0]);
  setText('detail-paragraph-2', service.paragraphs[1]);

  const backLink = document.getElementById('detail-back-link');
  if (backLink) backLink.href = `industriele-verhuizing.html#${service.id}`;

  const metaContainer = document.getElementById('detail-meta');
  if (metaContainer) {
    metaContainer.innerHTML = service.meta
      .map(item => `<span class="detail-hero__meta-item">${item}</span>`)
      .join('');
  }

  const featuresContainer = document.getElementById('detail-features');
  if (featuresContainer) {
    featuresContainer.innerHTML = service.features
      .map((feature, index) => `
        <article class="detail-feature-card">
          <div class="detail-feature-card__num">Stap 0${index + 1}</div>
          <h3 class="detail-feature-card__title">${feature.title}</h3>
          <p class="detail-feature-card__text">${feature.text}</p>
        </article>
      `)
      .join('');
  }

  const listContainer = document.getElementById('detail-list');
  if (listContainer) {
    listContainer.innerHTML = service.bullets
      .map(item => `<li>${item}</li>`)
      .join('');
  }

  const galleryContainer = document.getElementById('detail-gallery');
  if (galleryContainer) {
    galleryContainer.innerHTML = service.gallery
      .map(src => `
        <div class="detail-gallery__item">
          <img class="detail-gallery__img" src="${src}" alt="${service.titlePlain}" loading="lazy">
        </div>
      `)
      .join('');
  }

  const sidebarLinks = document.getElementById('detail-sidebar-links');
  if (sidebarLinks) {
    sidebarLinks.innerHTML = order
      .map(id => {
        const item = services[id];
        const activeClass = item.id === service.id ? ' active' : '';
        return `<a href="dienst.html?service=${item.id}" class="detail-sidebar__link${activeClass}">${item.titlePlain}<span>→</span></a>`;
      })
      .join('');
  }
})();
