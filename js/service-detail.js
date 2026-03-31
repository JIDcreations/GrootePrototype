/* ============================================================
   DE GROOTE NV — SERVICE DETAIL PAGE DATA
   ============================================================ */

(function () {
  'use strict';

  if (!document.body.hasAttribute('data-service-detail')) return;

  const services = {
    transport: {
      id: 'transport',
      label: 'Dienst 01',
      titleHtml: 'Transport',
      titlePlain: 'Transport',
      lead: 'Zwaar, uitzonderlijk of internationaal: wij organiseren transporttrajecten met dezelfde precisie waarmee we ze uitvoeren op de werf.',
      metaDescription: 'Transport op maat voor industriële projecten, uitzonderlijk vervoer en internationale trajecten door De Groote NV.',
      heroImage: 'assets/site-media/8_laden van plaatschaar/ok/031BE157-A506-43F8-A9CA-F40683DA9358.jpg',
      heroAlt: 'Transport van zware industriële machines',
      introTitle: 'Transport met controle over elke stap',
      paragraphs: [
        'Transportprojecten in de industrie vragen meer dan laadvermogen. De juiste route, de juiste vergunningen en de juiste timing bepalen of een traject veilig en efficiënt verloopt. Daarom combineren wij praktisch vakmanschap met een sterk voorbereidende fase.',
        'We stemmen het transport af op de context van uw site, de afmetingen van de lading en de aansluitende montage- of hijswerken. Zo blijft de uitvoering logisch, beheersbaar en afgestemd op het volledige project.'
      ],
      cardText: 'Uitzonderlijk en internationaal transport, met voorbereiding en uitvoering als één logisch traject.',
      gallery: [
        'assets/site-media/8_laden van plaatschaar/ok/031BE157-A506-43F8-A9CA-F40683DA9358.jpg',
        'assets/site-media/14_transport van transformato/ok/48529772-576E-4CFA-A0B2-22F9FBA479A2.jpg',
        'assets/site-media/23_volledige verhuis fabriek/ok/05A0E91B-E576-4265-93BA-D9D63A9B7D7D.jpg'
      ]
    },
    montage: {
      id: 'montage',
      label: 'Dienst 02',
      titleHtml: 'Montage &amp;<br>demontage',
      titlePlain: 'Montage & demontage',
      lead: 'Wij demonteren, verhuizen en monteren installaties met één ploeg die de technische logica van het volledige traject begrijpt.',
      metaDescription: 'Montage en demontage van industriële installaties door ervaren technici van De Groote NV.',
      heroImage: 'assets/site-media/2_opbouw fabriek in Frankrijk/ok/484B88BE-281C-4EE2-BF5D-839F26CE399D.jpg',
      heroAlt: 'Montage van een industriële installatie',
      introTitle: 'Technisch vakwerk op de juiste plaats in het project',
      paragraphs: [
        'Montage en demontage zijn zelden geïsoleerde opdrachten. Ze maken deel uit van een groter geheel waarin timing, veiligheid en technische nauwkeurigheid elkaar moeten versterken. Daarom werken wij met eigen technici die vertrouwd zijn met industriële installaties, werfcoördinatie en strakke planningen.',
        'We zorgen niet alleen voor het losmaken en opbouwen van machines, maar ook voor een gecontroleerde overdracht tussen transport, positionering, aansluiting en inbedrijfstelling. Dat houdt het project overzichtelijk en beperkt stilstand.'
      ],
      cardText: 'Technisch demonteren, verplaatsen en opnieuw opbouwen met één ploeg die het volledige traject begrijpt.',
      gallery: [
        'assets/site-media/2_opbouw fabriek in Frankrijk/ok/484B88BE-281C-4EE2-BF5D-839F26CE399D.jpg',
        'assets/site-media/2_opbouw fabriek in Frankrijk/ok/1523DD79-ACE5-499C-9BB3-6D83BD7A375E.jpg',
        'assets/site-media/1_turn key project/ok/5758BAE5-F017-4AC2-B73A-C2B9FCA598AD.jpg'
      ]
    },
    opslag: {
      id: 'opslag',
      label: 'Dienst 03',
      titleHtml: 'Opslag',
      titlePlain: 'Opslag',
      lead: 'Tijdelijke of langdurige opslag van machines en industriële goederen, met de juiste handling en bescherming vanaf het eerste moment.',
      metaDescription: 'Beveiligde opslag voor industriële machines en projectmateriaal bij De Groote NV.',
      heroImage: 'assets/site-media/23_volledige verhuis fabriek/ok/08D1D69D-8F88-4051-93E2-2EB2B91C68BF.jpg',
      heroAlt: 'Opslag van industrieel materieel',
      introTitle: 'Opslag als actieve schakel in uw project',
      paragraphs: [
        'Opslag is vaak geen eindpunt maar een tussenfase. Machines wachten op montage, onderdelen moeten gefaseerd geleverd worden of materiaal moet tijdelijk uit productie gehaald worden. Daarom behandelen wij opslag als een logistieke stap met evenveel aandacht als transport of hijswerk.',
        'We organiseren ontvangst, plaatsing, bescherming en vrijgave op een manier die aansluit op uw planning. Daardoor blijft het materiaal traceerbaar, toegankelijk en klaar voor de volgende projectfase.'
      ],
      cardText: 'Beveiligde, flexibele opslag als tussenfase of vaste schakel binnen een groter verhuistraject.',
      gallery: [
        'assets/site-media/23_volledige verhuis fabriek/ok/08D1D69D-8F88-4051-93E2-2EB2B91C68BF.jpg',
        'assets/site-media/20_tijdelijke ondersteuning/ok/0399FE6D-1D27-4D18-ADFF-08B6629A40DC.jpg',
        'assets/site-media/21_trekken van rotor/ok/19B8556E-B18D-47E0-AD11-31458A67209B.jpg'
      ]
    },
    hijswerk: {
      id: 'hijswerk',
      label: 'Dienst 04',
      titleHtml: 'Hijswerk',
      titlePlain: 'Hijswerk',
      lead: 'Van gecontroleerde lifts in productiehallen tot complexe multi-crane operaties op uitdagende werven.',
      metaDescription: 'Hijswerk, liftstudies en complexe kraanoperaties voor industriële projecten bij De Groote NV.',
      heroImage: 'assets/site-media/4_wegnemen loopkat/ok/0F35C2C2-4C1C-47D8-BC19-92A50DD553F7.jpg',
      heroAlt: 'Hijswerk met zwaar materieel',
      introTitle: 'Hijswerk waarin voorbereiding het verschil maakt',
      paragraphs: [
        'Sterk hijswerk begint niet op het moment van heffen, maar bij de voorbereiding. Gewicht, draaicirkels, ondergrond, obstakels en sequentie bepalen samen hoe veilig en efficiënt een lift kan verlopen. Daarom werken wij vanuit een heldere technische analyse naar een beheersbare uitvoering.',
        'Of het nu gaat om een éénmalige lift of een gefaseerde operatie over meerdere dagen: we stemmen mensen, materieel en timing zo op elkaar af dat de liftcontrole behouden blijft van begin tot einde.'
      ],
      cardText: 'Gecontroleerde lifts, sterke voorbereiding en de juiste kraanopstelling voor complexe omstandigheden.',
      gallery: [
        'assets/site-media/4_wegnemen loopkat/ok/24CDE436-2A1F-4C89-A0E1-A9FFEE5CF2C0.jpg',
        'assets/site-media/19_montage + plaatsen van windmole/ok/17CE77E1-2765-41B4-AA6E-5CBD44C26D22.jpg',
        'assets/site-media/15_wegnemen interne betonbalk/ok/089A4C5C-BD54-4E16-87D1-F79ECC2A398D.jpg'
      ]
    },
    engineering: {
      id: 'engineering',
      label: 'Dienst 05',
      titleHtml: 'Engineering',
      titlePlain: 'Engineering',
      lead: 'Technische voorbereiding, maatwerkopstellingen en projectcoördinatie die complexe verplaatsingen uitvoerbaar maken.',
      metaDescription: 'Engineering, stabiliteitsstudies en maatwerkoplossingen voor industriële verhuisprojecten bij De Groote NV.',
      heroImage: 'assets/site-media/25_skidsytemen/ok/18B2BD82-5FC4-4080-ADF6-768ABA0A3D42_1_102_o.jpg',
      heroAlt: 'Engineering en maatwerkopstelling',
      introTitle: 'Engineering die de uitvoering eenvoudiger maakt',
      paragraphs: [
        'Bij complexe industriële verplaatsingen is voorbereiding geen administratieve stap, maar een essentieel deel van de oplossing. Ons engineeringteam vertaalt technische risico’s en randvoorwaarden naar een uitvoerbaar plan op maat van de site, de last en de gewenste timing.',
        'Van tekenwerk en opstellingen tot berekeningen en werkmethodes: we bouwen een technisch kader dat niet alleen veilig is, maar ook praktisch inzetbaar blijft op de vloer.'
      ],
      cardText: 'Technische voorbereiding en maatwerkopstellingen die moeilijke verplaatsingen uitvoerbaar maken.',
      gallery: [
        'assets/site-media/25_skidsytemen/ok/18B2BD82-5FC4-4080-ADF6-768ABA0A3D42_1_102_o.jpg',
        'assets/site-media/5_wisselen van PE tank/ok/0A021ACD-A137-4985-8C1E-9EA48B7911F6.jpg',
        'assets/site-media/6_opbouw nieuwe transformator/ok/0EA6816B-BA50-4E96-AFC5-9AC9203CC4F0.jpg'
      ]
    },
    'interne-verplaatsing': {
      id: 'interne-verplaatsing',
      label: 'Dienst 06',
      titleHtml: 'Interne<br>verplaatsing',
      titlePlain: 'Interne verplaatsing',
      lead: 'Precisieverplaatsingen binnen productiehallen en technische ruimtes, afgestemd op bestaande installaties en lopende activiteiten.',
      metaDescription: 'Interne verplaatsing van machines en installaties met precisie door De Groote NV.',
      heroImage: 'assets/site-media/10_manipulatiewerken/ok/096A2550-A314-4166-97F9-2D0A18E50C32.jpg',
      heroAlt: 'Interne verplaatsing van zware machines',
      introTitle: 'Precisiewerk in een beperkte werkomgeving',
      paragraphs: [
        'Interne verplaatsingen vragen een andere aanpak dan klassiek transport. Ruimte is beperkt, doorgangen zijn smal en de impact op lopende productie moet vaak minimaal blijven. Daarom werken we met compacte systemen en een uitvoeringsplan dat vertrekt vanuit de realiteit van de site.',
        'We combineren manipulatiemiddelen, schaarhefwagens, rollbanen of luchtlagers om zware lasten gecontroleerd te verplaatsen, vaak in omgevingen waar elke centimeter telt.'
      ],
      cardText: 'Millimeterprecisie binnen bestaande sites, met minimale impact op productie en infrastructuur.',
      gallery: [
        'assets/site-media/10_manipulatiewerken/ok/096A2550-A314-4166-97F9-2D0A18E50C32.jpg',
        'assets/site-media/22_werken diepvries/ok/072EF712-BA98-4D28-8B36-DFDAEDDD1E5D.jpg',
        'assets/site-media/5_wisselen van PE tank/ok/0A021ACD-A137-4985-8C1E-9EA48B7911F6.jpg'
      ]
    },
    kraanverhuur: {
      id: 'kraanverhuur',
      label: 'Dienst 07',
      titleHtml: 'Kraanverhuur',
      titlePlain: 'Kraanverhuur',
      lead: 'Flexibele inzet van autokranen en telescoopkranen, met de optie om meteen de juiste machinist en werfkennis mee te schakelen.',
      metaDescription: 'Kraanverhuur met of zonder machinist voor industriële en bouwprojecten bij De Groote NV.',
      heroImage: 'assets/site-media/11_plaatsen boom met telescoopkraa/ok/20FA3E8F-D252-4694-AEE9-752AA7B953FA.jpg',
      heroAlt: 'Kraanverhuur voor industriële projecten',
      introTitle: 'De juiste kraan, correct ingepland',
      paragraphs: [
        'Kraanverhuur draait niet alleen om capaciteit, maar ook om bereik, opstelling, timing en de context van de werf. Daarom bekijken we elke aanvraag vanuit de praktische situatie ter plaatse, zodat de inzet van de kraan klopt vanaf dag één.',
        'U kunt rekenen op materieel dat technisch in orde is, helder ingepland wordt en indien nodig gecombineerd wordt met onze machinisten, hijskennis en projectervaring.'
      ],
      cardText: 'Flexibele kraaninzet met de juiste capaciteit, planning en ondersteuning voor uw werf.',
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
  setText('detail-intro-title', service.introTitle);
  setText('detail-paragraph-1', service.paragraphs[0]);
  setText('detail-paragraph-2', service.paragraphs[1]);

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

  const relatedContainer = document.getElementById('detail-related-services');
  if (relatedContainer) {
    relatedContainer.innerHTML = order
      .filter(id => id !== service.id)
      .map(id => {
        const item = services[id];
        return `
          <a href="dienst.html?service=${item.id}" class="diensten-detail-card">
            <div class="diensten-detail-card__label">${item.label}</div>
            <h3 class="diensten-detail-card__title">${item.titlePlain}</h3>
            <p class="diensten-detail-card__text">${item.cardText}</p>
            <span class="diensten-detail-card__link">Bekijk dienst <span>→</span></span>
          </a>
        `;
      })
      .join('');
  }
})();
