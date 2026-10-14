const translations = {
  fr: {
    // NAV
    'nav.products': 'Produits',
    'nav.how': 'Comment ça marche',
    'nav.tarifs': 'Tarifs',
    'nav.lieux': 'Lieux',
    'nav.pub': 'Publicité',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.cta': 'Devenir Partenaire',
    // NAV (old keys kept for compatibility)
    'nav.solutions': 'Solutions',
    'nav.produits': 'Produits',
    'nav.comment': 'Comment ça marche',

    // FOOTER
    'footer.tagline': 'La batterie de vos clients, c\'est notre affaire.',
    'footer.partner': 'Devenir partenaire',
    'footer.legal': 'Mentions légales',

    // INDEX — hero
    'hero.h1': 'Vos clients ne tomberont plus à court de <span class="bod-hl">batterie.</span>',
    'hero.p': 'Bod installe des stations de location de batteries portables dans votre établissement, gratuitement, sans engagement, personnalisées à vos couleurs.',
    'hero.cta1': 'Installer une station',
    'hero.cta2': 'Comment ça marche',
    'hero.badge.label': 'Installation gratuite',
    'hero.badge.text': 'Station personnalisée à vos couleurs',
    // INDEX — how
    'how.h2': 'Comment ça marche',
    'how.step1.title': 'Scan du QR code',
    'how.step1.text': 'Le client scanne directement sur la station, aucune app à télécharger.',
    'how.step2.title': 'Location de la batterie',
    'how.step2.text': 'Paiement Stripe par carte, <strong>€1 / 30 min</strong>. €30 bloqués en garantie, remboursés au retour.',
    'how.step3.title': 'Retour avant de partir',
    'how.step3.text': 'La batterie est rendue dans la station. La garantie est libérée automatiquement.',
    // INDEX — sectors
    'sectors.h2': 'Secteurs d\'activité',
    'sectors.s1.title': 'Bars & Restaurants',
    'sectors.s1.text': 'Le client qui attend sa batterie rechargée consomme davantage. Résout le "vous avez un câble ?" définitivement.',
    'sectors.s2.title': 'Hôtels',
    'sectors.s2.text': 'Service premium sans coût. Un client qui a rechargé son téléphone à l\'hôtel met 5 étoiles.',
    'sectors.s3.title': 'Centres commerciaux',
    'sectors.s3.text': 'Un client dont le téléphone est mort repart. Un client qui peut recharger reste et continue à consommer.',
    'sectors.s4.title': 'Salles de sport',
    'sectors.s4.text': 'Les membres viennent souvent avec une batterie faible (musique, tracking). Station en accueil ou vestiaires.',
    'sectors.s5.title': 'Événementiel',
    'sectors.s5.text': 'Concerts, festivals, parcs de loisirs. Besoin fort et ponctuel, visibilité maximale pour la marque.',
    'sectors.s6.title': 'Votre établissement',
    'sectors.s6.text': 'Installation gratuite, zéro engagement, station personnalisée à vos couleurs.',
    'sectors.s6.cta': 'Devenir partenaire',
    // INDEX — avantages / cta
    'avantages.h2': 'Zéro risque.<br/>100% service.',
    'noapp.label': 'Zéro friction',
    'noapp.h2': 'Aucune app.<br/>Aucun compte.<br/>Juste recharger.',
    'noapp.p': 'Vos clients scannent, prennent la batterie, et rechargent. Pas d\'inscription, pas de téléchargement, pas de friction — juste un service qui fonctionne en quelques secondes.',
    'noapp.step1': 'Scanner le QR',
    'noapp.step2': 'Prendre la batterie',
    'noapp.step3': 'Redéposer n\'importe où',
    'noapp.c1.title': 'Pas d\'app à télécharger',
    'noapp.c1.text': 'Le service fonctionne directement depuis le navigateur mobile. Aucun espace de stockage, aucune mise à jour.',
    'noapp.c2.title': 'Pas de compte à créer',
    'noapp.c2.text': 'Paiement direct, sans inscription. Le client est opérationnel en moins de 30 secondes.',
    'noapp.c3.title': 'Retour dans n\'importe quelle station',
    'noapp.c3.text': 'La batterie se repose dans n\'importe quelle station du réseau BOD — pas forcément là où elle a été prise.',
    'cta.h2': 'Prêt à électriser<br/>votre établissement ?',
    'cta.p': 'Installation gratuite, station personnalisée à vos couleurs, zéro engagement.',
    'cta.btn': 'Devenir partenaire',

    // TARIFS
    'tarifs.label': 'Tarifs',
    'tarifs.h1': 'Transparent.<br/>Sans <span class="bod-hl">surprise.</span>',
    'tarifs.intro': 'Un modèle simple : gratuit pour l\'établissement, accessible pour l\'utilisateur.',
    'tarifs.user.label': 'Pour vos clients',
    'tarifs.user.sub': 'par tranche de 30 minutes',
    'tarifs.user.f1.title': 'Scan du QR code',
    'tarifs.user.f1.text': 'Aucune application à télécharger. Paiement direct sur le navigateur.',
    'tarifs.user.f2.title': '€30 de caution bloquée',
    'tarifs.user.f2.text': 'Pré-autorisation Stripe remboursée automatiquement au retour de la batterie.',
    'tarifs.user.f3.title': '3 câbles intégrés',
    'tarifs.user.f3.text': 'USB-C, Lightning et Micro-USB. Aucun câble à apporter.',
    'tarifs.user.f4.title': '5 000 mAh',
    'tarifs.user.f4.text': 'Charge complète d\'un iPhone en moins de 2h. La batterie se rend dans n\'importe quelle station BOD.',
    'tarifs.user.note': '<span class="font-bold text-on-surface">Non rendue après 48h ?</span> €30 débités définitivement. La batterie vous appartient.',
    'tarifs.venue.label': 'Pour votre établissement',
    'tarifs.venue.price': 'Gratuit.',
    'tarifs.venue.sub': 'Zéro coût, zéro engagement',
    'tarifs.venue.f1.title': 'Installation et matériel offerts',
    'tarifs.venue.f1.text': 'Station, câbles, configuration. Seule l\'électricité est à votre charge (~€5/mois).',
    'tarifs.venue.f2.title': 'Vos clients restent plus longtemps',
    'tarifs.venue.f2.text': 'Un client qui peut recharger son téléphone ne repart pas. Il commande une autre tournée.',
    'tarifs.venue.f3.title': 'Maintenance incluse',
    'tarifs.venue.f3.text': 'Intervention garantie sous 72h en cas de panne. Vous n\'avez rien à gérer.',
    'tarifs.venue.f4.title': 'Résiliation libre à tout moment',
    'tarifs.venue.f4.text': 'Un email suffit. Récupération du matériel sous 14 jours.',
    'tarifs.venue.cta': 'Devenir partenaire',
    'tarifs.stats.label': 'Ce que les chiffres disent',
    'tarifs.stats.h2': 'La batterie, c\'est un vrai sujet.',
    'tarifs.stats.sub': 'Pour vos clients autant que pour votre établissement.',
    'tarifs.faq.label': 'Questions fréquentes',
    'tarifs.faq.h2': 'FAQ Tarifs',
    'tarifs.faq.q1': 'Est-ce vraiment gratuit pour l\'établissement ?',
    'tarifs.faq.a1': 'Oui. L\'installation, le matériel, la configuration et la maintenance sont entièrement pris en charge par BOD. Votre seule dépense est l\'électricité nécessaire au fonctionnement de la station, soit environ €5 par mois.',
    'tarifs.faq.q2': 'Le tarif de €1 / 30 min peut-il changer ?',
    'tarifs.faq.a2': 'Toute modification tarifaire fait l\'objet d\'une notification 30 jours avant son application. Vous pouvez résilier librement si le nouveau tarif ne vous convient pas.',
    'tarifs.faq.q3': 'Que se passe-t-il si un client part avec la batterie ?',
    'tarifs.faq.a3': 'Les €30 de caution sont débités automatiquement par Stripe après 48h sans retour. L\'établissement n\'a aucune démarche à faire. BOD prend en charge la gestion des litiges et le remplacement des batteries manquantes.',
    'tarifs.faq.q4': 'La station génère-t-elle une consommation électrique importante ?',
    'tarifs.faq.a4': 'Non. La station consomme environ 15W en veille et 30W en charge active. Cela représente moins de €5 par mois sur votre facture électrique.',
    'tarifs.cta.h2': 'Prêt à offrir ce service<br/>à vos clients ?',
    'tarifs.cta.p': 'Installation gratuite, station personnalisée à vos couleurs, zéro engagement.',
    'tarifs.cta.btn': 'Devenir partenaire',

    // STATS (shared)
    'stats.s1': 'des clients ont quitté un lieu à cause d\'une batterie morte',
    'stats.s1.source': 'Source : Powermat Consumer Study',
    'stats.s2': 'de présence en moyenne quand le client peut recharger',
    'stats.s3': 'des clients en bar ou restaurant demande un câble',
    'stats.s3.source': 'Source : IFOP France',

    // LIEUX
    'lieux.label': 'Lieux',
    'lieux.h1': 'BOD arrive bientôt <span class="bod-hl">près de vous.</span>',
    'lieux.intro': 'Notre réseau est en cours de déploiement. Les premières stations seront en ligne dans les prochaines semaines.',
    'lieux.map.label': 'Exemple — à quoi ressemblera la carte',
    'lieux.sheet.title': 'Pas encore de station ici',
    'lieux.sheet.text': 'BOD arrive bientôt. Soyez prévenu dès qu\'une station ouvre près de vous.',
    'lieux.sheet.btn': 'Me prévenir',
    'lieux.sheet.b1': 'Tarifs',
    'lieux.sheet.b2': 'Comment ça marche',
    'lieux.sheet.cta': 'Me prévenir à l\'ouverture',
    'lieux.deploy.label': 'Déploiement',
    'lieux.deploy.h2': 'Comment ça se passe ?',
    'lieux.deploy.sub': 'Le réseau grandit au rythme des partenaires. Chaque établissement signé = une station de plus sur la carte.',
    'lieux.deploy.s1.title': 'Un établissement signe',
    'lieux.deploy.s1.text': 'Un bar, un restaurant, un hôtel devient partenaire. Aucun coût, zéro engagement.',
    'lieux.deploy.s2.title': 'La station est installée',
    'lieux.deploy.s2.text': 'BOD installe, configure et référence la station. En moins de 48h l\'établissement est opérationnel.',
    'lieux.deploy.s3.title': 'Elle apparaît sur la carte',
    'lieux.deploy.s3.text': 'Les utilisateurs trouvent la station, l\'établissement est visible. Le réseau grandit.',
    'lieux.sectors.label': 'Où trouver BOD',
    'lieux.sectors.h2': 'Partout où vous sortez',
    'lieux.cta1.label': 'Utilisateurs',
    'lieux.cta1.h3': 'Soyez alerté<br/>à l\'ouverture.',
    'lieux.cta1.btn': 'Me notifier',
    'lieux.cta2.label': 'Établissements',
    'lieux.cta2.h3': 'Vous gérez un<br/>établissement ?',
    'lieux.cta2.p': 'Installation gratuite. Zéro engagement.<br/>Vos clients sur la carte dès le premier jour.',
    'lieux.cta2.btn': 'Devenir partenaire',

    // CONTACT
    'contact.label': 'Contact',
    'contact.h1': 'Une question ?<br/><span class="bod-hl">On répond.</span>',
    'contact.intro': 'Utilisateur, presse, partenariat — écrivez-nous. Réponse sous 24h.',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Sujet',
    'contact.form.opt1': 'Question générale',
    'contact.form.opt2': 'Devenir partenaire',
    'contact.form.opt3': 'Problème avec une station',
    'contact.form.opt4': 'Presse / Média',
    'contact.form.opt5': 'Autre',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer',
    'contact.sidebar.h2': 'Autres façons de nous joindre',
    'contact.sidebar.email.label': 'Email',
    'contact.sidebar.delay.label': 'Délai de réponse',
    'contact.sidebar.delay.value': 'Moins de 24h',
    'contact.sidebar.hq.label': 'Siège',
    'contact.sidebar.hq.value': 'France',
    'contact.sidebar.venue.h3': 'Vous avez un établissement ?',
    'contact.sidebar.venue.p': 'Déposez directement une demande de partenariat pour une réponse prioritaire.',
    'contact.sidebar.venue.cta': 'Devenir partenaire',
    'contact.sidebar.press.h3': 'Presse & Médias',
    'contact.sidebar.press.p': 'Pour toute demande presse, interview ou partenariat éditorial, écrivez directement à <a href="mailto:bod.chargefr@gmail.com" class="font-semibold text-primary hover:underline">bod.chargefr@gmail.com</a> avec "Presse" en objet.',

    // PRODUITS
    'produits.label': 'Nos stations',
    'produits.h1': 'Un modèle pour chaque <span class="bod-hl">établissement.</span>',
    'produits.intro': 'Basic, Medium ou Maxi — chaque station est gratuite à l\'installation et maintenue par BOD.',
    'produits.cta': 'Demander cette station',
    'produits.basic.badge': 'Compact',
    'produits.basic.name': 'Basic Station',
    'produits.basic.tagline': 'L\'essentiel, bien pensé.',
    'produits.basic.f1': 'Format compact — pose sur comptoir ou fixation murale',
    'produits.basic.f2': 'Idéal pour les flux jusqu\'à 200 personnes/jour',
    'produits.basic.f3': 'Rotation complète en ~1h30',
    'produits.basic.f4': 'Wrap vinyl personnalisé disponible dès 30 €',
    'produits.basic.for': '<span class="font-bold text-on-surface">Pour : </span>Bars, restaurants, salles de sport',
    'produits.medium.popular': 'La plus populaire',
    'produits.medium.name': 'Medium Station',
    'produits.medium.tagline': 'Le bon équilibre.',
    'produits.medium.f1': 'Format comptoir — grand écran',
    'produits.medium.f2': 'Idéal pour les flux de 200 à 600 personnes/jour',
    'produits.medium.f3': 'Rotation complète en ~2h',
    'produits.medium.f4': 'Wrap vinyl personnalisé disponible dès 60 €',
    'produits.medium.for': '<span class="font-bold text-on-surface">Pour : </span>Hôtels, clubs, salles d\'événements, espaces culturels',
    'produits.maxi.badge': 'Grand format',
    'produits.maxi.name': 'Maxi Station',
    'produits.maxi.tagline': 'Pensée pour les grands flux.',
    'produits.maxi.f1': 'Grand format sur pied — présence forte',
    'produits.maxi.f2': 'Conçue pour les flux de 600+ personnes/jour',
    'produits.maxi.f3': 'Rotation continue — jamais en rupture',
    'produits.maxi.f4': 'Wrap vinyl personnalisé disponible dès 120 €',
    'produits.maxi.for': '<span class="font-bold text-white/80">Pour : </span>Aéroports, gares, centres commerciaux, cinémas, grands festivals',
    'produits.wrap.label': 'Personnalisation',
    'produits.wrap.h2': 'La station s\'adapte<br/>à votre univers.',
    'produits.wrap.p': 'Chaque station peut être habillée d\'un wrap vinyl aux couleurs et à l\'identité de votre établissement. Logo, ambiance, code couleur — la station devient une extension naturelle de votre décor.',
    'produits.wrap.f1.title': 'Wrap vinyl full-cover',
    'produits.wrap.f1.text': 'Impression haute résolution, résistant à l\'usage quotidien.',
    'produits.wrap.f2.title': 'Écran BOD standard',
    'produits.wrap.f2.text': 'L\'interface utilisateur reste celle de BOD — garantie, maintenance et cohérence du réseau.',
    'produits.wrap.f3.title': 'Option payante',
    'produits.wrap.f3.text': '30 € (Basic), 60 € (Medium), 120 € (Maxi) — selon la station choisie. Pose incluse.',
    'produits.wrap.visual.title': 'Votre station,<br/>vos couleurs.',
    'produits.wrap.visual.sub': 'L\'écran reste celui de BOD.',
    'produits.wrap.visual.note': 'Pose incluse',
    'produits.wrap.slider.label': 'Exemples d\'installations',
    'produits.wrap.ba.avant': 'Avant',
    'produits.wrap.ba.apres': 'Après',
    'produits.pub.label': 'Écran publicitaire',
    'produits.pub.h2': 'Votre station<br/>parle à vos clients.',
    'produits.pub.intro': 'Chaque station est équipée d\'un écran. Il peut diffuser vos propres contenus ou accueillir des campagnes publicitaires — photos ou vidéos en boucle, ciblées sur vos clients au moment exact où ils rechargent.',
    'produits.pub.own.title': 'Votre contenu',
    'produits.pub.own.text': 'Diffusez vos promotions, événements à venir, menus du jour ou ambiance de marque. Photos ou vidéos, en boucle sur l\'écran de la station.',
    'produits.pub.own.tag': 'Inclus sur demande',
    'produits.pub.network.title': 'Réseau publicitaire BOD',
    'produits.pub.network.text': 'BOD peut gérer la vente d\'espace publicitaire sur vos écrans à des annonceurs locaux ou nationaux. Une source de revenus passifs supplémentaire pour votre établissement.',
    'produits.pub.network.tag': 'Sur devis',
    'produits.pub.cta.title': 'Intéressé par la publicité sur écran ?',
    'produits.pub.cta.sub': 'Parlez-nous de votre projet. On revient vers vous sous 24h.',
    'produits.pub.cta.btn': 'Nous contacter',

    // PAGE PUBLICITÉ
    'pub.label': 'Écran publicitaire',
    'pub.h1': 'Votre station parle à vos <span class="bod-hl">clients.</span>',
    'pub.intro': 'Chaque station BOD est équipée d\'un écran intégré. Diffusez votre propre contenu — ou monétisez cet espace en accueillant des campagnes publicitaires locales ou nationales.',
    'pub.own.tag': 'Inclus sur demande',
    'pub.own.title': 'Votre contenu',
    'pub.own.text': 'Promotions, événements à venir, menu du jour, ambiance de marque. Photos ou vidéos en boucle sur l\'écran de la station, au moment exact où vos clients rechargent leur téléphone.',
    'pub.own.f1': 'Mise à jour à distance',
    'pub.own.f2': 'Photos et vidéos acceptées',
    'pub.own.f3': 'Zéro frais supplémentaires',
    'pub.network.tag': 'Sur devis',
    'pub.network.title': 'Réseau publicitaire BOD',
    'pub.network.text': 'BOD gère la vente d\'espace publicitaire sur vos écrans à des annonceurs locaux ou nationaux. Vous n\'avez rien à faire — vous touchez une part des revenus générés, passivement.',
    'pub.network.f1': 'Revenus passifs pour l\'établissement',
    'pub.network.f2': 'Annonceurs sélectionnés par BOD',
    'pub.network.f3': 'Zéro gestion de votre côté',
    'pub.demo.label': 'En action',
    'pub.how.label': 'Comment ça marche',
    'pub.how.h2': 'Simple pour tout le monde.',
    'pub.how.s1.title': 'Installation',
    'pub.how.s1.text': 'BOD installe la station dans votre établissement. L\'écran est intégré, prêt à diffuser dès le premier jour.',
    'pub.how.s2.title': 'Votre contenu ou le nôtre',
    'pub.how.s2.text': 'Vous nous envoyez vos visuels, on les programme. Ou BOD gère l\'intégralité de l\'affichage avec des annonceurs partenaires.',
    'pub.how.s3.title': 'Vos clients voient, vous gagnez',
    'pub.how.s3.text': 'Chaque client qui recharge est exposé à votre message au moment où il est le plus attentif — téléphone en main, stationnaire.',
    'pub.cta.h2': 'Intéressé par<br/>la publicité sur écran ?',
    'pub.cta.p': 'Parlez-nous de votre projet. On revient vers vous sous 24h.',
    'pub.cta.btn': 'Nous contacter',
    'produits.final.h2': 'Quelle station<br/>pour votre établissement ?',
    'produits.final.p': 'Installation gratuite, zéro engagement.',
    'produits.final.btn': 'Devenir partenaire',
  },

  en: {
    // NAV
    'nav.products': 'Products',
    'nav.how': 'How it works',
    'nav.tarifs': 'Pricing',
    'nav.lieux': 'Locations',
    'nav.pub': 'Advertising',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.cta': 'Become a Partner',
    // NAV (old keys)
    'nav.solutions': 'Solutions',
    'nav.produits': 'Products',
    'nav.comment': 'How it works',

    // FOOTER
    'footer.tagline': 'Your customers\' battery is our business.',
    'footer.partner': 'Become a partner',
    'footer.legal': 'Legal notice',

    // INDEX — hero
    'hero.h1': 'Your customers will never run out of <span class="bod-hl">battery.</span>',
    'hero.p': 'Bod installs portable battery rental stations in your venue, for free, with no commitment, customised to your brand.',
    'hero.cta1': 'Install a station',
    'hero.cta2': 'How it works',
    'hero.badge.label': 'Free installation',
    'hero.badge.text': 'Station customised to your brand',
    // INDEX — how
    'how.h2': 'How it works',
    'how.step1.title': 'Scan the QR code',
    'how.step1.text': 'The customer scans directly on the station, no app required.',
    'how.step2.title': 'Rent the battery',
    'how.step2.text': 'Card payment via Stripe, <strong>€1 / 30 min</strong>. €30 held as deposit, refunded on return.',
    'how.step3.title': 'Return before leaving',
    'how.step3.text': 'The battery is returned to the station. The deposit is released automatically.',
    // INDEX — sectors
    'sectors.h2': 'Industries',
    'sectors.s1.title': 'Bars & Restaurants',
    'sectors.s1.text': 'Customers waiting for their battery to charge spend more. Solves "do you have a cable?" forever.',
    'sectors.s2.title': 'Hotels',
    'sectors.s2.text': 'Premium service at no cost. A guest who charged their phone at your hotel leaves a 5-star review.',
    'sectors.s3.title': 'Shopping Centres',
    'sectors.s3.text': 'A customer whose phone dies leaves. One who can recharge stays and keeps spending.',
    'sectors.s4.title': 'Gyms',
    'sectors.s4.text': 'Members often arrive with low battery (music, tracking). Station at reception or locker rooms.',
    'sectors.s5.title': 'Events',
    'sectors.s5.text': 'Concerts, festivals, leisure parks. High demand at peak moments, maximum brand visibility.',
    'sectors.s6.title': 'Your venue',
    'sectors.s6.text': 'Free installation, no commitment, station customised to your brand.',
    'sectors.s6.cta': 'Become a partner',
    // INDEX — avantages / cta
    'avantages.h2': 'Zero risk.<br/>100% service.',
    'noapp.label': 'Zero friction',
    'noapp.h2': 'No app.<br/>No account.<br/>Just charge.',
    'noapp.p': 'Your customers scan, grab the battery, and charge. No sign-up, no download, no friction — just a service that works in seconds.',
    'noapp.step1': 'Scan the QR',
    'noapp.step2': 'Take the battery',
    'noapp.step3': 'Return anywhere',
    'noapp.c1.title': 'No app to download',
    'noapp.c1.text': 'The service runs directly from the mobile browser. No storage space, no updates.',
    'noapp.c2.title': 'No account to create',
    'noapp.c2.text': 'Direct payment, no sign-up. The customer is ready in under 30 seconds.',
    'noapp.c3.title': 'Return to any station',
    'noapp.c3.text': 'The battery can be returned to any BOD station in the network — not necessarily where it was taken.',
    'cta.h2': 'Ready to power up<br/>your venue?',
    'cta.p': 'Free installation, station customised to your brand, no commitment.',
    'cta.btn': 'Become a partner',

    // TARIFS
    'tarifs.label': 'Pricing',
    'tarifs.h1': 'Transparent.<br/>No <span class="bod-hl">surprises.</span>',
    'tarifs.intro': 'A simple model: free for the venue, affordable for the user.',
    'tarifs.user.label': 'For your customers',
    'tarifs.user.sub': 'per 30-minute block',
    'tarifs.user.f1.title': 'QR code scan',
    'tarifs.user.f1.text': 'No app to download. Payment directly in the browser.',
    'tarifs.user.f2.title': '€30 deposit held',
    'tarifs.user.f2.text': 'Stripe pre-authorisation, automatically released when the battery is returned.',
    'tarifs.user.f3.title': '3 built-in cables',
    'tarifs.user.f3.text': 'USB-C, Lightning and Micro-USB. No cable needed.',
    'tarifs.user.f4.title': '5,000 mAh',
    'tarifs.user.f4.text': 'Full charge of an iPhone in under 2h. The battery can be returned to any BOD station.',
    'tarifs.user.note': '<span class="font-bold text-on-surface">Not returned after 48h?</span> €30 is charged permanently. The battery is yours to keep.',
    'tarifs.venue.label': 'For your venue',
    'tarifs.venue.price': 'Free.',
    'tarifs.venue.sub': 'Zero cost, zero commitment',
    'tarifs.venue.f1.title': 'Installation & equipment included',
    'tarifs.venue.f1.text': 'Station, cables, setup. Your only expense is electricity (~€5/month).',
    'tarifs.venue.f2.title': 'Your customers stay longer',
    'tarifs.venue.f2.text': 'A customer who can charge their phone doesn\'t leave. They order another round.',
    'tarifs.venue.f3.title': 'Maintenance included',
    'tarifs.venue.f3.text': 'Response guaranteed within 72h in case of breakdown. Nothing to manage on your end.',
    'tarifs.venue.f4.title': 'Cancel at any time',
    'tarifs.venue.f4.text': 'One email is all it takes. Equipment collected within 14 days.',
    'tarifs.venue.cta': 'Become a partner',
    'tarifs.stats.label': 'What the numbers say',
    'tarifs.stats.h2': 'Battery life is a real issue.',
    'tarifs.stats.sub': 'For your customers and for your venue.',
    'tarifs.faq.label': 'Frequently asked questions',
    'tarifs.faq.h2': 'Pricing FAQ',
    'tarifs.faq.q1': 'Is it really free for the venue?',
    'tarifs.faq.a1': 'Yes. Installation, equipment, setup and maintenance are entirely covered by BOD. Your only expense is the electricity needed to run the station, around €5 per month.',
    'tarifs.faq.q2': 'Can the €1 / 30 min rate change?',
    'tarifs.faq.a2': 'Any pricing change comes with 30 days\' notice before it takes effect. You can cancel freely if the new rate doesn\'t suit you.',
    'tarifs.faq.q3': 'What happens if a customer leaves with the battery?',
    'tarifs.faq.a3': 'The €30 deposit is automatically charged by Stripe after 48h with no return. The venue has nothing to do. BOD handles disputes and replaces missing batteries.',
    'tarifs.faq.q4': 'Does the station use a lot of electricity?',
    'tarifs.faq.a4': 'No. The station uses around 15W on standby and 30W when actively charging. That\'s less than €5 per month on your electricity bill.',
    'tarifs.cta.h2': 'Ready to offer this service<br/>to your customers?',
    'tarifs.cta.p': 'Free installation, station customised to your brand, no commitment.',
    'tarifs.cta.btn': 'Become a partner',

    // STATS (shared)
    'stats.s1': 'of customers have left a venue because of a dead battery',
    'stats.s1.source': 'Source: Powermat Consumer Study',
    'stats.s2': 'longer average stay when customers can charge',
    'stats.s3': 'of bar and restaurant customers ask for a cable',
    'stats.s3.source': 'Source: IFOP France',

    // LIEUX
    'lieux.label': 'Locations',
    'lieux.h1': 'BOD is coming soon <span class="bod-hl">near you.</span>',
    'lieux.intro': 'Our network is being deployed. The first stations will go live in the coming weeks.',
    'lieux.map.label': 'Example — what the map will look like',
    'lieux.sheet.title': 'No station here yet',
    'lieux.sheet.text': 'BOD is coming soon. Get notified as soon as a station opens near you.',
    'lieux.sheet.btn': 'Notify me',
    'lieux.sheet.b1': 'Pricing',
    'lieux.sheet.b2': 'How it works',
    'lieux.sheet.cta': 'Notify me at launch',
    'lieux.deploy.label': 'Rollout',
    'lieux.deploy.h2': 'How does it work?',
    'lieux.deploy.sub': 'The network grows with each new partner. Every signed venue = one more station on the map.',
    'lieux.deploy.s1.title': 'A venue signs up',
    'lieux.deploy.s1.text': 'A bar, restaurant or hotel becomes a partner. No cost, no commitment.',
    'lieux.deploy.s2.title': 'The station is installed',
    'lieux.deploy.s2.text': 'BOD installs, configures and lists the station. The venue is up and running within 48h.',
    'lieux.deploy.s3.title': 'It appears on the map',
    'lieux.deploy.s3.text': 'Users find the station, the venue gains visibility. The network grows.',
    'lieux.sectors.label': 'Where to find BOD',
    'lieux.sectors.h2': 'Everywhere you go out',
    'lieux.cta1.label': 'Users',
    'lieux.cta1.h3': 'Be notified<br/>at launch.',
    'lieux.cta1.btn': 'Notify me',
    'lieux.cta2.label': 'Venues',
    'lieux.cta2.h3': 'Do you manage<br/>a venue?',
    'lieux.cta2.p': 'Free installation. No commitment.<br/>Your customers on the map from day one.',
    'lieux.cta2.btn': 'Become a partner',

    // CONTACT
    'contact.label': 'Contact',
    'contact.h1': 'Got a question?<br/><span class="bod-hl">We\'ll answer.</span>',
    'contact.intro': 'User, press, partnership — write to us. Reply within 24h.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.opt1': 'General question',
    'contact.form.opt2': 'Become a partner',
    'contact.form.opt3': 'Issue with a station',
    'contact.form.opt4': 'Press / Media',
    'contact.form.opt5': 'Other',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send',
    'contact.sidebar.h2': 'Other ways to reach us',
    'contact.sidebar.email.label': 'Email',
    'contact.sidebar.delay.label': 'Response time',
    'contact.sidebar.delay.value': 'Under 24h',
    'contact.sidebar.hq.label': 'HQ',
    'contact.sidebar.hq.value': 'France',
    'contact.sidebar.venue.h3': 'Do you have a venue?',
    'contact.sidebar.venue.p': 'Submit a partnership request directly for a priority response.',
    'contact.sidebar.venue.cta': 'Become a partner',
    'contact.sidebar.press.h3': 'Press & Media',
    'contact.sidebar.press.p': 'For any press enquiry, interview or editorial partnership, write directly to <a href="mailto:bod.chargefr@gmail.com" class="font-semibold text-primary hover:underline">bod.chargefr@gmail.com</a> with "Press" in the subject line.',

    // PRODUITS
    'produits.label': 'Our stations',
    'produits.h1': 'One model for every <span class="bod-hl">venue.</span>',
    'produits.intro': 'Basic, Medium or Maxi — every station is free to install and maintained by BOD.',
    'produits.cta': 'Request this station',
    'produits.basic.badge': 'Compact',
    'produits.basic.name': 'Basic Station',
    'produits.basic.tagline': 'The essentials, done right.',
    'produits.basic.f1': 'Compact format — counter-top or wall-mounted',
    'produits.basic.f2': 'Ideal for venues with up to 200 visitors/day',
    'produits.basic.f3': 'Full rotation in ~1h30',
    'produits.basic.f4': 'Vinyl wrap available from €30',
    'produits.basic.for': '<span class="font-bold text-on-surface">For: </span>Bars, restaurants, gyms',
    'produits.medium.popular': 'Most popular',
    'produits.medium.name': 'Medium Station',
    'produits.medium.tagline': 'The right balance.',
    'produits.medium.f1': 'Countertop format — large screen',
    'produits.medium.f2': 'Ideal for venues with 200 to 600 visitors/day',
    'produits.medium.f3': 'Full rotation in ~2h',
    'produits.medium.f4': 'Vinyl wrap available from €60',
    'produits.medium.for': '<span class="font-bold text-on-surface">For: </span>Hotels, clubs, event spaces, cultural venues',
    'produits.maxi.badge': 'Large format',
    'produits.maxi.name': 'Maxi Station',
    'produits.maxi.tagline': 'Built for high traffic.',
    'produits.maxi.f1': 'Large floor-standing format — strong presence',
    'produits.maxi.f2': 'Built for venues with 600+ visitors/day',
    'produits.maxi.f3': 'Continuous rotation — never runs out',
    'produits.maxi.f4': 'Vinyl wrap available from €120',
    'produits.maxi.for': '<span class="font-bold text-white/80">For: </span>Airports, train stations, shopping centres, cinemas, large festivals',
    'produits.wrap.label': 'Customisation',
    'produits.wrap.h2': 'The station adapts<br/>to your world.',
    'produits.wrap.p': 'Every station can be wrapped in vinyl matching your venue\'s identity. Logo, colours, ambiance — the station becomes a natural extension of your decor.',
    'produits.wrap.f1.title': 'Full-cover vinyl wrap',
    'produits.wrap.f1.text': 'High-resolution print, built to withstand daily use.',
    'produits.wrap.f2.title': 'Standard BOD screen',
    'produits.wrap.f2.text': 'The user interface stays BOD — warranty, maintenance and network consistency guaranteed.',
    'produits.wrap.f3.title': 'Paid option',
    'produits.wrap.f3.text': '€30 (Basic), €60 (Medium), €120 (Maxi) — depending on the station. Installation included.',
    'produits.wrap.visual.title': 'Your station,<br/>your colours.',
    'produits.wrap.visual.sub': 'The screen stays BOD.',
    'produits.wrap.visual.note': 'Installation included',
    'produits.wrap.slider.label': 'Installation examples',
    'produits.wrap.ba.avant': 'Before',
    'produits.wrap.ba.apres': 'After',
    'produits.pub.label': 'Advertising screen',
    'produits.pub.h2': 'Your station<br/>speaks to your customers.',
    'produits.pub.intro': 'Every station has a screen. It can display your own content or host advertising campaigns — photos or looping videos, reaching your customers at the exact moment they charge.',
    'produits.pub.own.title': 'Your content',
    'produits.pub.own.text': 'Broadcast your promotions, upcoming events, daily menus or brand atmosphere. Photos or videos, on loop on the station screen.',
    'produits.pub.own.tag': 'Available on request',
    'produits.pub.network.title': 'BOD ad network',
    'produits.pub.network.text': 'BOD can manage the sale of advertising space on your screens to local or national brands. An additional passive revenue stream for your venue.',
    'produits.pub.network.tag': 'On quote',
    'produits.pub.cta.title': 'Interested in screen advertising?',
    'produits.pub.cta.sub': 'Tell us about your project. We\'ll get back to you within 24h.',
    'produits.pub.cta.btn': 'Contact us',

    // PAGE PUBLICITÉ (EN)
    'pub.label': 'Advertising screen',
    'pub.h1': 'Your station speaks to your <span class="bod-hl">customers.</span>',
    'pub.intro': 'Every BOD station has an integrated screen. Broadcast your own content — or monetize that space by hosting local or national ad campaigns.',
    'pub.own.tag': 'Available on request',
    'pub.own.title': 'Your content',
    'pub.own.text': 'Promotions, upcoming events, daily menu, brand atmosphere. Photos or videos on loop on the station screen, at the exact moment your customers are charging.',
    'pub.own.f1': 'Remote updates',
    'pub.own.f2': 'Photos and videos supported',
    'pub.own.f3': 'No extra fees',
    'pub.network.tag': 'On quote',
    'pub.network.title': 'BOD ad network',
    'pub.network.text': 'BOD handles the sale of advertising space on your screens to local or national brands. You do nothing — you receive a share of the revenue generated, passively.',
    'pub.network.f1': 'Passive revenue for your venue',
    'pub.network.f2': 'Advertisers curated by BOD',
    'pub.network.f3': 'Zero management on your end',
    'pub.demo.label': 'In action',
    'pub.how.label': 'How it works',
    'pub.how.h2': 'Simple for everyone.',
    'pub.how.s1.title': 'Installation',
    'pub.how.s1.text': 'BOD installs the station in your venue. The screen is built in, ready to broadcast from day one.',
    'pub.how.s2.title': 'Your content or ours',
    'pub.how.s2.text': 'Send us your visuals, we schedule them. Or BOD manages all content with advertising partners.',
    'pub.how.s3.title': 'Your customers see it, you earn',
    'pub.how.s3.text': 'Every customer who charges is exposed to your message when they\'re most attentive — phone in hand, stationary.',
    'pub.cta.h2': 'Interested in<br/>screen advertising?',
    'pub.cta.p': 'Tell us about your project. We\'ll get back to you within 24h.',
    'pub.cta.btn': 'Contact us',
    'produits.final.h2': 'Which station<br/>for your venue?',
    'produits.final.p': 'Free installation, no commitment.',
    'produits.final.btn': 'Become a partner',
  }
};

function getLang() {
  return localStorage.getItem('bod-lang') || 'fr';
}

function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.documentElement.lang = lang;
  localStorage.setItem('bod-lang', lang);
  // Update nav button
  const flagEl = document.getElementById('lang-flag');
  const labelEl = document.getElementById('lang-label');
  if (flagEl) flagEl.textContent = lang === 'fr' ? '🇫🇷' : '🇬🇧';
  if (labelEl) labelEl.textContent = lang === 'fr' ? 'FR' : 'EN';
  // Update modal active state
  document.querySelectorAll('.bod-lang-opt').forEach(btn => {
    const active = btn.getAttribute('data-lang') === lang;
    btn.style.background = active ? '#e6f5c9' : '#f0ede9';
    btn.style.fontWeight = active ? '700' : '500';
    const check = btn.querySelector('.bod-check');
    if (check) check.style.display = active ? 'block' : 'none';
  });
  closeModal();
}

function closeModal() {
  const overlay = document.getElementById('bod-lang-overlay');
  const sheet = document.getElementById('bod-lang-sheet');
  if (!overlay || overlay.style.display === 'none') return;
  sheet.style.transform = 'translateY(100%)';
  sheet.style.opacity = '0';
  setTimeout(() => { overlay.style.display = 'none'; }, 280);
}

function openModal() {
  const overlay = document.getElementById('bod-lang-overlay');
  const sheet = document.getElementById('bod-lang-sheet');
  if (!overlay) return;
  overlay.style.display = 'flex';
  requestAnimationFrame(() => {
    sheet.style.transform = 'translateY(0)';
    sheet.style.opacity = '1';
  });
}

function injectModal() {
  const overlay = document.createElement('div');
  overlay.id = 'bod-lang-overlay';
  overlay.style.cssText = 'display:none;position:fixed;inset:0;z-index:300;background:rgba(0,0,0,0.4);align-items:flex-end;justify-content:center;padding-bottom:env(safe-area-inset-bottom,0);';
  overlay.innerHTML = `
    <div id="bod-lang-sheet" style="background:#fbf9f8;border-radius:24px 24px 0 0;padding:0 24px 40px;width:100%;max-width:480px;transform:translateY(100%);opacity:0;transition:transform 0.28s cubic-bezier(0.32,0.72,0,1),opacity 0.28s ease;">
      <div style="padding:14px 0 8px;text-align:center;">
        <div style="width:36px;height:4px;border-radius:4px;background:#d4d0cc;margin:0 auto;"></div>
      </div>
      <p style="font-size:10px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:#9a9690;margin:16px 0 12px;font-family:Inter,sans-serif;">Langue · Language</p>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <button class="bod-lang-opt" data-lang="fr" style="display:flex;align-items:center;gap:14px;padding:15px 18px;border-radius:16px;border:none;cursor:pointer;font-size:15px;font-family:Inter,sans-serif;width:100%;text-align:left;transition:background 0.15s;background:#f0ede9;font-weight:500;">
          <span style="font-size:22px;flex-shrink:0;">🇫🇷</span>
          <span style="color:#1a1a1a;">Français</span>
          <span class="bod-check" style="display:none;margin-left:auto;color:#5a7a00;font-size:18px;font-weight:900;">✓</span>
        </button>
        <button class="bod-lang-opt" data-lang="en" style="display:flex;align-items:center;gap:14px;padding:15px 18px;border-radius:16px;border:none;cursor:pointer;font-size:15px;font-family:Inter,sans-serif;width:100%;text-align:left;transition:background 0.15s;background:#f0ede9;font-weight:500;">
          <span style="font-size:22px;flex-shrink:0;">🇬🇧</span>
          <span style="color:#1a1a1a;">English</span>
          <span class="bod-check" style="display:none;margin-left:auto;color:#5a7a00;font-size:18px;font-weight:900;">✓</span>
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  overlay.querySelectorAll('.bod-lang-opt').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  injectModal();
  applyLang(getLang());
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) langBtn.addEventListener('click', openModal);
});
