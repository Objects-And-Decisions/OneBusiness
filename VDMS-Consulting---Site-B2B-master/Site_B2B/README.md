# VDMS-Consulting---Site-B2B
Présentation
Une plateforme B2B e-commerce entièrement développée en HTML/CSS/JS vanilla, sans framework ni dépendance externe. Elle centralise les achats professionnels multi-fournisseurs et propose un ensemble complet d'outils de gestion : catalogue, panier, commandes, contrats, logistique et analyse de marché.
Le principe : un seul interlocuteur, une seule facture, plusieurs fournisseurs — avec remises négociées selon le volume.

Services intégrés

💳 Paiement sécurisé (Stripe, Adyen, SEPA B2B — DSP2/3DS2)
🧾 Facturation PDF automatique (compatible PDP 2026)
🔄 Abonnements & prélèvements SEPA récurrents
🏆 Programme de fidélité & remises progressives
💰 Financement BNPL (Alma, Hokodo — 30/60/90 jours)
🚚 Livraison multi-transporteurs avec suivi en temps réel
☁️ Cloud public, privé et hybride (AWS, Azure, GCP)
🔒 Cybersécurité & conformité RGPD
📊 Monitoring & SLA 24/7

📦 Commandes & Contrats

Suivi des commandes avec statuts (Validée, En attente, Planifié, Livrée)
Gestion des contrats cadres clients
Formulaire d'ajout de contacts/clients
Simulateur cloud : coût mensuel public/privé/hybride selon les paramètres (utilisateurs, activité, croissance, saisonnalité)

📈 Graphiques & Analyse

Top 10 achats web et physique
Analyse par région et par saison
Projection des commandes sur 2 exercices fiscaux

🌐 Internationalisation
Interface disponible en 6 langues avec support RTL :
🇫🇷 Français · 🇬🇧 Anglais · 🇪🇸 Espagnol · 🇩🇪 Allemand · 🇨🇳 Chinois · 🇸🇦 Arabe

🗂️ Structure du projet

vdms-consulting/
│
├── index.html          # Page d'accueil — Hero, stats, fonctionnalités
├── produits.html       # Catalogue filtrable multi-fournisseurs
├── services.html       # Services & offres cloud comparées
├── commandes.html      # Suivi commandes + simulateur cloud
├── contrats.html       # Gestion contrats & contacts clients
├── fournisseurs.html   # Fiches fournisseurs partenaires
├── graphiques.html     # Tableaux de bord & analyses marché
├── panier.html         # Panier d'achat B2B
├── Paiement.html       # Tunnel de paiement
│
├── style.css           # Feuille de styles globale
├── script.js           # Logique JavaScript (i18n, panier, simulateur…)
│
└── Images/             # Assets visuels produits
    ├── pc portable.jpg
    ├── télévision.jpg
    ├── vélo.jpg
    ├── pack bureau.jpg
    ├── Switch.png
    └── Imprimente.jpg

🛠️ Stack technique
TechnologieUsageHTML5Structure sémantique de toutes les pagesCSS3Design responsive, variables CSS, animationsJavaScript (ES6+)Panier, filtres, i18n, simulateur cloudVanilla JSAucun framework — zéro dépendance

📸 Pages principales
PageDescriptionAccueilHero section, statistiques clés, présentation des fonctionnalités et logique commercialeProduits6 références filtrables (fournisseur / prix / poids), ajout au panierServices9 services détaillés + tableau comparatif des offres cloudCommandesTableau de bord commandes + simulateur d'infrastructure cloudContratsGestion des contrats actifs + formulaire d'ajout de contactsFournisseursFiches des 4 partenaires avec stratégie de centralisationGraphiquesAnalyses marché, tendances et projections.
