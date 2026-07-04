// ============================================================
// VDMS CONSULTING — SCENARIOS MOCK DATA v1
// Objets de simulation pour les 3 workflows B2B
// Générés depuis : vdms_scenarios_mock.drawio
// ============================================================

const VDMS_MOCK = {

  // ──────────────────────────────────────────────────────────
  // SCÉNARIO 1 — TOTALEMENT OPTIMISTE
  // Paiement comptant · Contrat signé · Plateforme stable
  // ──────────────────────────────────────────────────────────
  s1: {
    meta: {
      id: 'S1',
      titre: 'Totalement Optimiste',
      emoji: '✅',
      couleur: '#0F6E56',
      bgColor: '#E1F5EE',
      colorClass: 's1',
      description: 'Paiement comptant · Contrat signé · Plateforme stable · Croissance maîtrisée',
    },

    client: {
      id: 'CLT-2026-0047',
      nom: 'Martin & Associés SAS',
      siret: '82 341 234 500 012',
      forme: 'SAS',
      secteur: 'Technologies de l\'information',
      effectif: 85,
      chiffreAffaires: '4 200 000 €',
      adresse: '12 rue de la République, 75008 Paris',
      contact: {
        nom: 'Julie Martin',
        poste: 'Directrice Administrative & Financière',
        email: 'j.martin@martin-associes.fr',
        tel: '+33 1 44 56 78 90',
      },
      scoring: { note: 'A+', risque: 'Faible', payeur: 'Ponctuel' },
    },

    contrat: {
      id: 'CTR-2026-0047',
      type: 'Cadre annuel',
      montantHT: 45800,
      tva: 9160,
      montantTTC: 54960,
      devise: 'EUR',
      statut: 'Signé ✅',
      dateSig: '15/05/2026',
      dateDebut: '01/06/2026',
      dateFin: '31/05/2027',
      renouvellementAuto: true,
      clauses: [
        'Remise volume ≥ 10 articles : −20 %',
        'Remise volume ≥ 20 articles : −50 %',
        'SLA livraison 48h ouvrées',
        'Garantie pièces 24 mois',
      ],
    },

    commandes: [
      {
        id: 'CMD-2026-0112',
        date: '03/06/2026',
        lignes: [
          { nom: 'PC Portable Pro 15"', qte: 10, prixU: '749 €',  total: '7 490 €' },
          { nom: 'Switch réseau 24 ports', qte: 3, prixU: '320 €', total: '960 €' },
          { nom: 'Imprimante laser Pro', qte: 2,  prixU: '449 €',  total: '898 €' },
        ],
        qteTotale: 15,
        sousTotal: '9 348 €',
        remise: '−20 %',
        totalHT: '7 478 €',
        statut: '✅ Confirmée',
        livraison: '05/06/2026',
      },
      {
        id: 'CMD-2026-0134',
        date: '17/06/2026',
        lignes: [
          { nom: 'Écran 4K 55" Pro', qte: 5, prixU: '899 €', total: '4 495 €' },
          { nom: 'Pack bureau ergonomique', qte: 7, prixU: '349 €', total: '2 443 €' },
        ],
        qteTotale: 12,
        sousTotal: '6 938 €',
        remise: '−20 %',
        totalHT: '5 550 €',
        statut: '✅ Confirmée',
        livraison: '19/06/2026',
      },
    ],

    paiement: {
      mode: 'Comptant',
      provider: 'Stripe',
      methode: 'Carte Visa Business',
      statut: '✅ Entièrement payé',
      transactions: [
        { id: 'TXN-STR-88741', montant: '8 973 €',  date: '03/06/2026', statut: '✅ Réussi', delai: '1,3 s' },
        { id: 'TXN-STR-88932', montant: '6 660 €',  date: '17/06/2026', statut: '✅ Réussi', delai: '0,9 s' },
      ],
    },

    analytiques: {
      kpis: [
        { label: 'Commandes passées',   valeur: '2',       icone: '📦' },
        { label: 'CA généré',           valeur: '15 634 €', icone: '💶' },
        { label: 'Satisfaction client', valeur: '98 %',    icone: '⭐' },
        { label: 'Délai moyen livr.',   valeur: '2,1 j',   icone: '🚚' },
        { label: 'Taux renouvellement', valeur: '95 %',    icone: '🔁' },
        { label: 'Score risque',        valeur: 'FAIBLE',  icone: '🛡️' },
      ],
    },

    etapes: [
      {
        id: 1, label: 'Découverte — Accueil & Qui Sommes-Nous',
        statut: 'ok', tab: 'client', page: 'index.html',
        detail: 'Le client visite l\'accueil et consulte la section Qui Sommes-Nous. Scoring crédit : A+. Formulaire de contact soumis à 14h22.',
      },
      {
        id: 2, label: 'Rendez-vous → Signature du Contrat',
        statut: 'ok', tab: 'contrat', page: 'rendez-vous.html',
        detail: 'RDV réseau confirmé pour le 14/05. Contrat CTR-2026-0047 relu et signé électroniquement le 15/05/2026.',
      },
      {
        id: 3, label: 'Catalogue Produits → Panier',
        statut: 'ok', tab: 'commandes', page: 'produits.html',
        detail: '15 produits sélectionnés en 2 paniers. Remise volume −20 % appliquée automatiquement par le système.',
      },
      {
        id: 4, label: 'Paiement comptant (Stripe / SEPA)',
        statut: 'ok', tab: 'paiement', page: 'panier.html',
        detail: 'Transaction TXN-STR-88741 validée en 1,3 s via Stripe Visa Business. Confirmation e-mail envoyée.',
      },
      {
        id: 5, label: 'Commande confirmée & Suivi',
        statut: 'ok', tab: 'commandes', page: 'commandes.html',
        detail: 'CMD-2026-0112 confirmée. Bon de livraison généré. Livraison planifiée J+2 ouvrés (05/06/2026).',
      },
      {
        id: 6, label: 'Graphiques & Analyse des performances',
        statut: 'ok', tab: 'analytiques', page: 'graphiques.html',
        detail: 'CA : 15 634 €. Satisfaction : 98 %. Renouvellement automatique déclenché pour juin 2027.',
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // SCÉNARIO 2 — RELATIVEMENT OPTIMISTE
  // Paiement fractionné · 30/60/90 jours · Croissance progressive
  // ──────────────────────────────────────────────────────────
  s2: {
    meta: {
      id: 'S2',
      titre: 'Relativement Optimiste',
      emoji: '🔄',
      couleur: '#534AB7',
      bgColor: '#EEEDFE',
      colorClass: 's2',
      description: 'Paiement fractionné Alma/Hokodo · 30/60/90 jours · Contrat signé · Croissance progressive',
    },

    client: {
      id: 'CLT-2026-0063',
      nom: 'Holding BTP Durand & Fils',
      siret: '71 234 512 300 089',
      forme: 'SA',
      secteur: 'Bâtiment & Travaux Publics',
      effectif: 210,
      chiffreAffaires: '12 800 000 €',
      adresse: '8 allée des Chênes, 69006 Lyon',
      contact: {
        nom: 'Éric Durand',
        poste: 'Président Directeur Général',
        email: 'e.durand@btp-durand.fr',
        tel: '+33 4 72 89 34 12',
      },
      scoring: { note: 'B+', risque: 'Modéré', payeur: 'Régulier' },
    },

    contrat: {
      id: 'CTR-2026-0063',
      type: 'Cadre pluriannuel',
      montantHT: 72000,
      tva: 14400,
      montantTTC: 86400,
      devise: 'EUR',
      statut: 'Signé ✅',
      dateSig: '28/04/2026',
      dateDebut: '01/05/2026',
      dateFin: '30/04/2028',
      renouvellementAuto: false,
      clauses: [
        'Paiement fractionné 3× sans frais (Alma)',
        'Délai de paiement : 30 / 60 / 90 jours',
        'Clause de révision tarifaire annuelle (IPC)',
        'Pénalités retard : 1,5 %/mois au-delà de 90j',
      ],
    },

    commandes: [
      {
        id: 'CMD-2026-0201',
        date: '05/05/2026',
        lignes: [
          { nom: 'Vélo électrique urbain',         qte: 20, prixU: '1 199 €', total: '23 980 €' },
          { nom: 'Trottinette électrique 25 km/h', qte: 10, prixU: '799 €',  total: '7 990 €'  },
        ],
        qteTotale: 30,
        sousTotal: '31 970 €',
        remise: '−20 %',
        totalHT: '25 576 €',
        statut: '✅ Confirmée',
        livraison: '10/05/2026',
      },
      {
        id: 'CMD-2026-0245',
        date: '02/06/2026',
        lignes: [
          { nom: 'Tapis de course Pro',          qte: 5,  prixU: '1 299 €', total: '6 495 €' },
          { nom: 'Chaise ergonomique Premium',   qte: 15, prixU: '449 €',  total: '6 735 €' },
        ],
        qteTotale: 20,
        sousTotal: '13 230 €',
        remise: '−20 %',
        totalHT: '10 584 €',
        statut: '🔵 En cours',
        livraison: '08/06/2026',
      },
    ],

    paiement: {
      mode: 'Fractionné 3×',
      provider: 'Alma',
      statut: '⏳ Tranche 1 payée — 2 en attente',
      tranches: [
        { numero: 1, label: 'Tranche 1 — J+30',  montant: '28 800 €', echeance: '01/05/2026', statut: '✅ Payée',      txId: 'ALM-9947812' },
        { numero: 2, label: 'Tranche 2 — J+60',  montant: '28 800 €', echeance: '01/06/2026', statut: '⏳ En attente', txId: '—' },
        { numero: 3, label: 'Tranche 3 — J+90',  montant: '28 800 €', echeance: '01/07/2026', statut: '⏳ En attente', txId: '—' },
      ],
    },

    analytiques: {
      kpis: [
        { label: 'Commandes passées',   valeur: '2',        icone: '📦' },
        { label: 'CA généré (partiel)', valeur: '36 160 €', icone: '💶' },
        { label: 'Tranches payées',     valeur: '1 / 3',    icone: '💳' },
        { label: 'Montant restant',     valeur: '57 600 €', icone: '⏳' },
        { label: 'Prochaine échéance',  valeur: '01/06/26', icone: '📅' },
        { label: 'Score risque',        valeur: 'MODÉRÉ',   icone: '⚠️' },
      ],
    },

    etapes: [
      {
        id: 1, label: 'Découverte — Accueil & Qui Sommes-Nous',
        statut: 'ok', tab: 'client', page: 'index.html',
        detail: 'Consultation du site. Téléchargement de la plaquette commerciale. Prise de contact via le formulaire Qui Sommes-Nous.',
      },
      {
        id: 2, label: 'Contrat + clause paiement fractionné',
        statut: 'ok', tab: 'contrat', page: 'contrats.html',
        detail: 'Contrat CTR-2026-0063 signé le 28/04. Avenant clause fractionné 3× sans frais ajouté. Validation juridique interne.',
      },
      {
        id: 3, label: 'Catalogue Produits → Panier',
        statut: 'ok', tab: 'commandes', page: 'produits.html',
        detail: '30 articles mobilité sélectionnés. Remise volume −20 % appliquée. Panier : 31 970 € → 25 576 € HT.',
      },
      {
        id: 4, label: 'Paiement fractionné (Alma / Hokodo)',
        statut: 'ok', tab: 'paiement', page: 'panier.html',
        detail: '3 tranches de 28 800 € TTC créées via Alma. Prélèvement automatique programmé à J+30, J+60, J+90.',
      },
      {
        id: 5, label: 'Commande confirmée — Suivi des tranches',
        statut: 'ok', tab: 'commandes', page: 'commandes.html',
        detail: 'CMD-2026-0201 confirmée. Tranche 1 (ALM-9947812) payée le 01/05. Livraison effectuée le 10/05.',
      },
      {
        id: 6, label: 'Paiements automatiques — Tranches 2 & 3',
        statut: 'attente', tab: 'paiement', page: 'commandes.html',
        detail: 'Tranche 2 due le 01/06. Prélèvement automatique Alma programmé à J−3 (relance email client envoyée).',
      },
      {
        id: 7, label: 'Graphiques & Analyse trésorerie',
        statut: 'partiel', tab: 'analytiques', page: 'graphiques.html',
        detail: 'CA partiel : 36 160 €. Solde dû : 57 600 €. Projection trésorerie complète à J+90 : 86 400 €.',
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // SCÉNARIO 3 — RELATIVEMENT PESSIMISTE
  // Surcharge · Capacité financière · Risques cyber
  // ──────────────────────────────────────────────────────────
  s3: {
    meta: {
      id: 'S3',
      titre: 'Relativement Pessimiste',
      emoji: '⚠️',
      couleur: '#993C1D',
      bgColor: '#FAECE7',
      colorClass: 's3',
      description: 'Commandes régulières → Surcharge plateforme → Manque de capacité financière → Risques cyber',
    },

    client: {
      id: 'CLT-2026-0029',
      nom: 'LogiGros Distribution SA',
      siret: '53 298 741 200 034',
      forme: 'SA',
      secteur: 'Logistique & Distribution',
      effectif: 540,
      chiffreAffaires: '32 100 000 €',
      adresse: 'ZI Nord, Bâtiment C, 67120 Strasbourg',
      contact: {
        nom: 'Sandra Petit',
        poste: 'Responsable des Achats',
        email: 's.petit@logigros.fr',
        tel: '+33 3 88 47 21 65',
      },
      scoring: { note: 'C', risque: 'Élevé', payeur: 'Irrégulier' },
    },

    contrat: {
      id: 'CTR-2026-0029',
      type: 'Volume annuel garanti',
      montantHT: 180000,
      tva: 36000,
      montantTTC: 216000,
      devise: 'EUR',
      statut: '⚠️ Actif — sous surveillance',
      dateSig: '10/01/2026',
      dateDebut: '01/02/2026',
      dateFin: '31/01/2027',
      renouvellementAuto: true,
      clauses: [
        'Volume garanti : 450 articles / an',
        'Pénalités sous-commande : 5 % du manquant',
        'Clause résiliation pour défaut paiement > 90j',
        'Audit cybersécurité annuel obligatoire',
      ],
    },

    commandes: [
      {
        id: 'CMD-2026-0011 → CMD-2026-0450',
        date: 'Fév — Mai 2026',
        lignes: [
          { nom: 'Commandes phase normale (×450)',  qte: 450, prixU: '~299 €', total: '134 780 €' },
        ],
        qteTotale: 450,
        sousTotal: '134 780 €',
        remise: '−20 %',
        totalHT: '107 824 €',
        statut: '✅ Livrées (phase normale)',
        livraison: 'SLA 48h — Taux : 89 %',
      },
    ],

    paiement: {
      mode: 'Virement SEPA différé',
      provider: 'Banque Populaire Alsace',
      statut: '🔴 12 factures impayées (> 60j)',
      transactions: [
        { id: 'VIR-0047', montant: '24 500 €', date: '01/03/2026', statut: '✅ Réglé',        delai: 'J+28' },
        { id: 'VIR-0089', montant: '31 200 €', date: '02/04/2026', statut: '✅ Réglé',        delai: 'J+31' },
        { id: 'VIR-0112', montant: '28 900 €', date: '05/05/2026', statut: '⚠️ Partiel',      delai: 'J+63' },
        { id: 'VIR-0131', montant: '23 224 €', date: '—',          statut: '🔴 Impayé > 60j', delai: '—'    },
      ],
    },

    alertes: [
      {
        id: 'ALT-001', icone: '⚡', type: 'Surcharge plateforme', niveau: 'Critique',
        date: '04/05/2026',
        message: 'Taux de requêtes : 2 847/min (seuil normal : 1 500). Temps de réponse : 4,2 s. Timeout sur 23 % des paniers.',
        impact: '38 paniers abandonnés — Perte estimée : 4 100 €',
      },
      {
        id: 'ALT-002', icone: '💸', type: 'Capacité financière', niveau: 'Danger',
        date: '10/05/2026',
        message: 'Découvert autorisé −25 000 € atteint. 12 factures impayées > 60 jours. Blocage crédit fournisseur déclenché.',
        impact: 'Approvisionnement bloqué 4 jours ouvrés',
      },
      {
        id: 'ALT-003', icone: '🔓', type: 'Cybersécurité', niveau: 'Critique',
        date: '14/05/2026',
        message: '38 tentatives d\'intrusion / 24h. CVE-2025-1134 non patchée. 217 comptes clients potentiellement exposés.',
        impact: 'CNIL notifiée — Audit en cours — SLA suspendu',
      },
      {
        id: 'ALT-004', icone: '🚨', type: 'Interruption de service', niveau: 'Urgent',
        date: '15/05/2026',
        message: 'API paiement hors ligne 3h 14min. Panier inaccessible pour 100 % des clients. Contrat SLA breached.',
        impact: 'Perte directe estimée : 18 400 € — Remboursements déclenchés',
      },
    ],

    analytiques: {
      kpis: [
        { label: 'Total commandes',       valeur: '450',       icone: '📦' },
        { label: 'CA généré',             valeur: '134 780 €', icone: '💶' },
        { label: 'Pertes estimées',       valeur: '23 840 €',  icone: '📉' },
        { label: 'SLA respecté',          valeur: '61 %',      icone: '📊' },
        { label: 'Incidents critiques',   valeur: '4',         icone: '🚨' },
        { label: 'Score risque',          valeur: 'ÉLEVÉ',     icone: '🔴' },
      ],
    },

    etapes: [
      {
        id: 1, label: 'Contrat signé → Commandes régulières',
        statut: 'ok', tab: 'contrat', page: 'contrats.html',
        detail: 'Contrat CTR-2026-0029 actif depuis février. 450 commandes générées sur 4 mois. Volume mensuel : 112 articles.',
      },
      {
        id: 2, label: 'Croissance des commandes — Phase normale',
        statut: 'ok', tab: 'commandes', page: 'commandes.html',
        detail: 'Croissance : +12 %/mois. Volume passé de 60 à 112 articles mensuels. SLA 48h respecté jusqu\'à la semaine 17.',
      },
      {
        id: 3, label: 'Paiement & Livraison — Tout fonctionne',
        statut: 'ok', tab: 'paiement', page: 'commandes.html',
        detail: 'Taux de livraison à 89 %. 2 virements sur 4 réglés à temps. Satisfaction client : 91 % (semaines 1-17).',
      },
      {
        id: 4, label: 'Montée en charge détectée ⚡',
        statut: 'alerte', tab: 'alertes', page: 'graphiques.html',
        detail: 'ALT-001 : 2 847 req/min détectées (seuil : 1 500). Temps de réponse : 4,2 s. 38 paniers abandonnés.',
      },
      {
        id: 5, label: 'Manque de capacité financière 💸',
        statut: 'danger', tab: 'alertes', page: 'graphiques.html',
        detail: 'ALT-002 : Découvert −25 000 € atteint. 12 factures > 60j impayées. Blocage crédit 4 jours.',
      },
      {
        id: 6, label: 'Vulnérabilités cybersécurité 🔓',
        statut: 'danger', tab: 'alertes', page: 'graphiques.html',
        detail: 'ALT-003 : 38 intrusions/j. CVE-2025-1134 non patchée. 217 comptes exposés. CNIL notifiée.',
      },
      {
        id: 7, label: 'Défaillances & interruptions de service 🚨',
        statut: 'critique', tab: 'analytiques', page: 'graphiques.html',
        detail: 'ALT-004 : API paiement down 3h14. Perte 18 400 €. SLA breached. Intervention d\'urgence déclenchée.',
      },
    ],
  },
};
