// ============================================================
// VDMS CONSULTING — SCRIPT GLOBAL v4
// BUGS CORRIGÉS :
//   - Langue persistante entre pages (localStorage lu EN PREMIER)
//   - Panier s'affiche correctement dans panier.html
//   - Toutes les pages entièrement traduites
//   - Chatbot multilingue
//   - Email Cloudflare obfusqué réparé
// ============================================================

// ── 1. LANGUE — LU IMMÉDIATEMENT (avant tout) ───────────────
// On lit localStorage AVANT de déclarer currentLang pour éviter
// que la valeur par défaut "fr" écrase la valeur sauvegardée.
let currentLang = (function(){
  try { return localStorage.getItem("vdms_lang") || "fr"; }
  catch(e){ return "fr"; }
})();

// ── 2. TRADUCTIONS COMPLÈTES ─────────────────────────────────
const T = {
  fr:{
    // Navigation
    nav_home:"Accueil", nav_products:"Produits", nav_services:"Services",
    nav_cart:"Panier", nav_orders:"Commandes", nav_contracts:"Contrats",
    nav_suppliers:"Fournisseurs", nav_charts:"Graphiques",
    // Topbar
    topbar_msg:"Plateforme B2B e-commerce — Solutions cloud & centralisation des achats",
    topbar_tag:"Version bêta 2026",
    // Hero
    hero_label:"Plateforme B2B · Cloud · E-commerce",
    hero_title:'La plateforme <em>B2B e-commerce</em><br>pour entreprises ambitieuses',
    hero_desc:"VDMS Consulting centralise vos achats, gère vos fournisseurs, optimise vos coûts et pilote vos commandes depuis un seul endroit.",
    hero_btn1:"Voir les produits", hero_btn2:"Nos services",
    // Stats
    stat1_val:"4", stat1_lbl:"Fournisseurs partenaires",
    stat2_val:"50 %", stat2_lbl:"Réduction max (volume)",
    stat3_val:"2 ans", stat3_lbl:"Projection commandes",
    stat4_val:"100 %", stat4_lbl:"Cloud scalable",
    // Features
    features_title:"Fonctionnalités principales",
    feat1_badge:"Catalogue", feat1_title:"Multi-fournisseurs",
    feat1_desc:"Produits Decathlon, Fnac, Darty et Carrefour réunis dans un seul catalogue filtrable.",
    feat2_badge:"Cloud", feat2_title:"Infrastructure scalable",
    feat2_desc:"Simulation cloud public, privé et hybride selon votre charge et votre croissance.",
    feat3_badge:"Services", feat3_title:"Paiement & fidélité",
    feat3_desc:"Abonnements, facturation, financement et livraison intégrés.",
    feat4_badge:"Analyse", feat4_title:"Graphiques marché",
    feat4_desc:"Top 10 achats web, physique, par région, saison et utilité consommateur.",
    btn_see:"Voir →", btn_simulate:"Simuler →", btn_discover:"Découvrir →", btn_explore:"Explorer →",
    // Logique commerciale
    logic_title:"Logique commerciale",
    logic_p1:"À partir de <strong>10 articles</strong>, bénéficiez d'une réduction de <strong>20 %</strong>.",
    logic_p2:"À partir de <strong>20 articles</strong>, réduction <strong>50 %</strong> — idéal B2B.",
    logic_p3:"Options de paiement fractionné, financement et crédit disponibles.",
    btn_cart:"Accéder au panier", btn_contracts:"Gérer les contrats",
    // Footer
    footer_desc:"Plateforme B2B e-commerce — cloud, multi-fournisseurs, centralisation des achats.",
    footer_nav:"Navigation", footer_contact:"Contact",
    footer_legal:"© 2026 VDMS Consulting · Responsable technique : Mickail · Stage BUT R&T",
    // Produits
    search_placeholder:"Rechercher un produit...",
    filter_all:"Tous les fournisseurs",
    weight_all:"Tous les poids", price_all:"Tous les prix",
    add_cart:"+ Ajouter au panier",
    // Panier
    cart_title:"Panier de commande",
    cart_product:"Produit", cart_supplier:"Fournisseur", cart_price:"Prix", cart_action:"Action",
    cart_items:"Articles", cart_gross:"Montant brut", cart_discount:"Réduction", cart_total:"Total final",
    cart_note:"Remises automatiques",
    cart_r1:"≥ 10 articles : −20 %", cart_r2:"≥ 20 articles : −50 %",
    btn_clear:"Vider le panier", btn_order:"Passer la commande →", btn_delete:"Supprimer",
    cart_empty:"Votre panier est vide.",
    // Services
    svc_title:"Services e-commerce", svc_cloud_title:"Offres cloud comparées",
    svc_offer:"Offre", svc_desc:"Description", svc_for:"Idéal pour", svc_status:"Statut",
    // Commandes
    cmd_title:"Commandes, réservations et événements",
    cmd_proj_title:"Projection sur 6 mois",
    cmd_proj_desc:"Anticipez vos commandes futures sur 2 exercices fiscaux.",
    cmd_sim_title:"Simulation infrastructure cloud",
    cmd_users:"Nombre d'utilisateurs simultanés",
    cmd_activity:"Niveau d'activité", cmd_low:"Faible", cmd_med:"Moyenne", cmd_high:"Forte",
    cmd_growth:"Croissance projetée sur 6 mois (%)",
    cmd_period:"Période", cmd_normal:"Normale", cmd_dec:"Décembre (pic +50 %)",
    cmd_projected:"Utilisateurs projetés",
    cmd_public:"Cloud Public / mois", cmd_private:"Cloud Privé / mois", cmd_hybrid:"Cloud Hybride / mois",
    cmd_adjust:"Ajustez les paramètres pour voir la recommandation.",
    // Contrats
    ctr_title:"Contrats en cours et prévisionnels",
    ctr_add:"Ajouter un contact ou client",
    ctr_name:"Nom *", ctr_email:"Email *", ctr_phone:"Téléphone", ctr_address:"Adresse",
    ctr_remark:"Type / remarque", ctr_remark_ph:"Ex : Client PME, fournisseur potentiel...",
    ctr_save:"Enregistrer le contact",
    ctr_contacts:"Contacts enregistrés",
    ctr_saved:"Contact enregistré avec succès.",
    ctr_error:"Nom et email requis.",
    // Fournisseurs
    sup_title:"Nos fournisseurs partenaires",
    sup_strategy:"Stratégie multi-fournisseurs VDMS",
    sup_see:"Voir les produits →",
    // Graphiques
    chart_title:"Graphiques e-commerce France 2025",
    chart_subtitle:"Analyse visuelle : achats web, physiques, régions, saisonnalité, utilité et problèmes consommateurs.",
    util_title:"Utilité consommateur & saturation",
    util_subtitle:"Courbe d'utilité marginale — comment le plaisir évolue avec la quantité achetée",
    // Chatbot
    chat_title:"Assistant VDMS", chat_placeholder:"Posez votre question...", chat_send:"Envoyer",
    chat_welcome:"Bonjour ! Je suis l'assistant VDMS Consulting. Comment puis-je vous aider ?",
  },
  en:{
    nav_home:"Home", nav_products:"Products", nav_services:"Services",
    nav_cart:"Cart", nav_orders:"Orders", nav_contracts:"Contracts",
    nav_suppliers:"Suppliers", nav_charts:"Charts",
    topbar_msg:"B2B e-commerce platform — Cloud solutions & purchase centralisation",
    topbar_tag:"Beta 2026",
    hero_label:"B2B Platform · Cloud · E-commerce",
    hero_title:'The <em>B2B e-commerce</em><br>platform for ambitious companies',
    hero_desc:"VDMS Consulting centralises your purchases, manages suppliers, optimises costs and tracks orders from one place.",
    hero_btn1:"View products", hero_btn2:"Our services",
    stat1_val:"4", stat1_lbl:"Partner suppliers",
    stat2_val:"50 %", stat2_lbl:"Max discount (volume)",
    stat3_val:"2 yrs", stat3_lbl:"Order projection",
    stat4_val:"100 %", stat4_lbl:"Scalable cloud",
    features_title:"Key features",
    feat1_badge:"Catalogue", feat1_title:"Multi-supplier",
    feat1_desc:"Products from Decathlon, Fnac, Darty and Carrefour in one searchable catalogue.",
    feat2_badge:"Cloud", feat2_title:"Scalable infrastructure",
    feat2_desc:"Public, private and hybrid cloud simulation based on your load and growth.",
    feat3_badge:"Services", feat3_title:"Payment & loyalty",
    feat3_desc:"Subscriptions, invoicing, financing and delivery integrated.",
    feat4_badge:"Analysis", feat4_title:"Market charts",
    feat4_desc:"Top 10 web, physical, by region, season and consumer utility.",
    btn_see:"View →", btn_simulate:"Simulate →", btn_discover:"Discover →", btn_explore:"Explore →",
    logic_title:"Business logic",
    logic_p1:"From <strong>10 items</strong>, get a <strong>20 %</strong> discount.",
    logic_p2:"From <strong>20 items</strong>, discount rises to <strong>50 %</strong> — ideal for B2B.",
    logic_p3:"Instalment payment, financing and credit options available.",
    btn_cart:"Go to cart", btn_contracts:"Manage contracts",
    footer_desc:"B2B e-commerce platform — cloud, multi-supplier, professional purchase centralisation.",
    footer_nav:"Navigation", footer_contact:"Contact",
    footer_legal:"© 2026 VDMS Consulting · Technical lead: Mickail · BUT R&T internship",
    search_placeholder:"Search a product...",
    filter_all:"All suppliers",
    weight_all:"All weights", price_all:"All prices",
    add_cart:"+ Add to cart",
    cart_title:"Shopping cart",
    cart_product:"Product", cart_supplier:"Supplier", cart_price:"Price", cart_action:"Action",
    cart_items:"Items", cart_gross:"Gross amount", cart_discount:"Discount", cart_total:"Final total",
    cart_note:"Automatic discounts",
    cart_r1:"≥ 10 items: −20 %", cart_r2:"≥ 20 items: −50 %",
    btn_clear:"Clear cart", btn_order:"Place order →", btn_delete:"Remove",
    cart_empty:"Your cart is empty.",
    svc_title:"E-commerce services", svc_cloud_title:"Cloud offer comparison",
    svc_offer:"Offer", svc_desc:"Description", svc_for:"Best for", svc_status:"Status",
    cmd_title:"Orders, reservations and events",
    cmd_proj_title:"6-month projection",
    cmd_proj_desc:"Anticipate future orders over 2 fiscal years.",
    cmd_sim_title:"Cloud infrastructure simulation",
    cmd_users:"Concurrent users",
    cmd_activity:"Activity level", cmd_low:"Low", cmd_med:"Medium", cmd_high:"High",
    cmd_growth:"Projected growth over 6 months (%)",
    cmd_period:"Period", cmd_normal:"Normal", cmd_dec:"December (peak +50 %)",
    cmd_projected:"Projected users",
    cmd_public:"Public cloud / month", cmd_private:"Private cloud / month", cmd_hybrid:"Hybrid cloud / month",
    cmd_adjust:"Adjust parameters to see the recommendation.",
    ctr_title:"Active and planned contracts",
    ctr_add:"Add a contact or client",
    ctr_name:"Name *", ctr_email:"Email *", ctr_phone:"Phone", ctr_address:"Address",
    ctr_remark:"Type / note", ctr_remark_ph:"E.g.: SME client, potential supplier...",
    ctr_save:"Save contact",
    ctr_contacts:"Saved contacts",
    ctr_saved:"Contact saved successfully.",
    ctr_error:"Name and email are required.",
    sup_title:"Our partner suppliers",
    sup_strategy:"VDMS multi-supplier strategy",
    sup_see:"View products →",
    chart_title:"E-commerce charts — France 2025",
    chart_subtitle:"Visual analysis: web, physical, regions, seasonality, utility and consumer issues.",
    util_title:"Consumer utility & saturation",
    util_subtitle:"Marginal utility curve — how satisfaction evolves with quantity purchased",
    chat_title:"VDMS Assistant", chat_placeholder:"Ask your question...", chat_send:"Send",
    chat_welcome:"Hello! I am the VDMS Consulting assistant. How can I help you?",
  },
  es:{
    nav_home:"Inicio", nav_products:"Productos", nav_services:"Servicios",
    nav_cart:"Carrito", nav_orders:"Pedidos", nav_contracts:"Contratos",
    nav_suppliers:"Proveedores", nav_charts:"Gráficos",
    topbar_msg:"Plataforma e-commerce B2B — Soluciones cloud y centralización de compras",
    topbar_tag:"Beta 2026",
    hero_label:"Plataforma B2B · Cloud · E-commerce",
    hero_title:'La plataforma <em>e-commerce B2B</em><br>para empresas ambiciosas',
    hero_desc:"VDMS centraliza sus compras, gestiona proveedores, optimiza costes y controla pedidos desde un solo lugar.",
    hero_btn1:"Ver productos", hero_btn2:"Nuestros servicios",
    stat1_val:"4", stat1_lbl:"Proveedores asociados",
    stat2_val:"50 %", stat2_lbl:"Descuento máx.",
    stat3_val:"2 años", stat3_lbl:"Proyección pedidos",
    stat4_val:"100 %", stat4_lbl:"Cloud escalable",
    features_title:"Funcionalidades principales",
    feat1_badge:"Catálogo", feat1_title:"Multi-proveedor",
    feat1_desc:"Productos de Decathlon, Fnac, Darty y Carrefour en un catálogo filtrable.",
    feat2_badge:"Cloud", feat2_title:"Infraestructura escalable",
    feat2_desc:"Simulación cloud pública, privada e híbrida.",
    feat3_badge:"Servicios", feat3_title:"Pago y fidelidad",
    feat3_desc:"Suscripciones, facturación, financiación y entrega integradas.",
    feat4_badge:"Análisis", feat4_title:"Gráficos de mercado",
    feat4_desc:"Top 10 web, físico, por región, temporada y utilidad.",
    btn_see:"Ver →", btn_simulate:"Simular →", btn_discover:"Descubrir →", btn_explore:"Explorar →",
    logic_title:"Lógica comercial",
    logic_p1:"A partir de <strong>10 artículos</strong>: descuento del <strong>20 %</strong>.",
    logic_p2:"A partir de <strong>20 artículos</strong>: descuento del <strong>50 %</strong>.",
    logic_p3:"Opciones de pago aplazado, financiación y crédito disponibles.",
    btn_cart:"Ir al carrito", btn_contracts:"Gestionar contratos",
    footer_desc:"Plataforma e-commerce B2B — cloud, multi-proveedor, centralización de compras.",
    footer_nav:"Navegación", footer_contact:"Contacto",
    footer_legal:"© 2026 VDMS Consulting · Responsable técnico: Mickail",
    search_placeholder:"Buscar un producto...",
    filter_all:"Todos los proveedores",
    weight_all:"Todos los pesos", price_all:"Todos los precios",
    add_cart:"+ Añadir al carrito",
    cart_title:"Carrito de compra",
    cart_product:"Producto", cart_supplier:"Proveedor", cart_price:"Precio", cart_action:"Acción",
    cart_items:"Artículos", cart_gross:"Importe bruto", cart_discount:"Descuento", cart_total:"Total final",
    cart_note:"Descuentos automáticos",
    cart_r1:"≥ 10 artículos: −20 %", cart_r2:"≥ 20 artículos: −50 %",
    btn_clear:"Vaciar carrito", btn_order:"Hacer pedido →", btn_delete:"Eliminar",
    cart_empty:"Su carrito está vacío.",
    svc_title:"Servicios e-commerce", svc_cloud_title:"Comparativa cloud",
    svc_offer:"Oferta", svc_desc:"Descripción", svc_for:"Ideal para", svc_status:"Estado",
    cmd_title:"Pedidos, reservas y eventos",
    cmd_proj_title:"Proyección a 6 meses",
    cmd_proj_desc:"Anticipe pedidos futuros durante 2 ejercicios fiscales.",
    cmd_sim_title:"Simulación infraestructura cloud",
    cmd_users:"Usuarios simultáneos",
    cmd_activity:"Nivel de actividad", cmd_low:"Bajo", cmd_med:"Medio", cmd_high:"Alto",
    cmd_growth:"Crecimiento proyectado 6 meses (%)",
    cmd_period:"Período", cmd_normal:"Normal", cmd_dec:"Diciembre (pico +50 %)",
    cmd_projected:"Usuarios proyectados",
    cmd_public:"Cloud público / mes", cmd_private:"Cloud privado / mes", cmd_hybrid:"Cloud híbrido / mes",
    cmd_adjust:"Ajuste los parámetros para ver la recomendación.",
    ctr_title:"Contratos activos y previsionales",
    ctr_add:"Agregar un contacto o cliente",
    ctr_name:"Nombre *", ctr_email:"Email *", ctr_phone:"Teléfono", ctr_address:"Dirección",
    ctr_remark:"Tipo / nota", ctr_remark_ph:"Ej.: Cliente PYME, proveedor potencial...",
    ctr_save:"Guardar contacto",
    ctr_contacts:"Contactos guardados",
    ctr_saved:"Contacto guardado con éxito.",
    ctr_error:"Nombre y email son obligatorios.",
    sup_title:"Nuestros proveedores asociados",
    sup_strategy:"Estrategia multi-proveedor VDMS",
    sup_see:"Ver productos →",
    chart_title:"Gráficos e-commerce — Francia 2025",
    chart_subtitle:"Análisis visual: web, físico, regiones, estacionalidad, utilidad y problemas.",
    util_title:"Utilidad del consumidor y saturación",
    util_subtitle:"Curva de utilidad marginal — cómo evoluciona la satisfacción con la cantidad",
    chat_title:"Asistente VDMS", chat_placeholder:"Haga su pregunta...", chat_send:"Enviar",
    chat_welcome:"¡Hola! Soy el asistente de VDMS Consulting. ¿En qué puedo ayudarle?",
  },
  de:{
    nav_home:"Startseite", nav_products:"Produkte", nav_services:"Dienste",
    nav_cart:"Warenkorb", nav_orders:"Bestellungen", nav_contracts:"Verträge",
    nav_suppliers:"Lieferanten", nav_charts:"Grafiken",
    topbar_msg:"B2B-E-Commerce-Plattform — Cloud-Lösungen & Einkaufszentralisierung",
    topbar_tag:"Beta 2026",
    hero_label:"B2B-Plattform · Cloud · E-Commerce",
    hero_title:'Die <em>B2B-E-Commerce</em>-Plattform<br>für ambitionierte Unternehmen',
    hero_desc:"VDMS zentralisiert Einkäufe, verwaltet Lieferanten, optimiert Kosten und verfolgt Bestellungen.",
    hero_btn1:"Produkte ansehen", hero_btn2:"Unsere Dienste",
    stat1_val:"4", stat1_lbl:"Partnerlieferanten",
    stat2_val:"50 %", stat2_lbl:"Max. Rabatt",
    stat3_val:"2 J.", stat3_lbl:"Bestellprojektion",
    stat4_val:"100 %", stat4_lbl:"Skalierbare Cloud",
    features_title:"Hauptfunktionen",
    feat1_badge:"Katalog", feat1_title:"Multi-Lieferant",
    feat1_desc:"Produkte von Decathlon, Fnac, Darty und Carrefour in einem Katalog.",
    feat2_badge:"Cloud", feat2_title:"Skalierbare Infrastruktur",
    feat2_desc:"Öffentliche, private und hybride Cloud-Simulation.",
    feat3_badge:"Dienste", feat3_title:"Zahlung & Treue",
    feat3_desc:"Abonnements, Rechnungsstellung, Finanzierung und Lieferung.",
    feat4_badge:"Analyse", feat4_title:"Marktgrafiken",
    feat4_desc:"Top 10 Web, physisch, nach Region, Saison und Nutzwert.",
    btn_see:"Ansehen →", btn_simulate:"Simulieren →", btn_discover:"Entdecken →", btn_explore:"Erkunden →",
    logic_title:"Geschäftslogik",
    logic_p1:"Ab <strong>10 Artikeln</strong>: <strong>20 %</strong> Rabatt.",
    logic_p2:"Ab <strong>20 Artikeln</strong>: <strong>50 %</strong> Rabatt.",
    logic_p3:"Ratenzahlung, Finanzierung und Kredit verfügbar.",
    btn_cart:"Zum Warenkorb", btn_contracts:"Verträge verwalten",
    footer_desc:"B2B-E-Commerce-Plattform — Cloud, Multi-Lieferant, Einkaufszentralisierung.",
    footer_nav:"Navigation", footer_contact:"Kontakt",
    footer_legal:"© 2026 VDMS Consulting · Technischer Leiter: Mickail",
    search_placeholder:"Produkt suchen...",
    filter_all:"Alle Lieferanten",
    weight_all:"Alle Gewichte", price_all:"Alle Preise",
    add_cart:"+ In den Warenkorb",
    cart_title:"Warenkorb",
    cart_product:"Produkt", cart_supplier:"Lieferant", cart_price:"Preis", cart_action:"Aktion",
    cart_items:"Artikel", cart_gross:"Bruttobetrag", cart_discount:"Rabatt", cart_total:"Gesamtbetrag",
    cart_note:"Automatische Rabatte",
    cart_r1:"≥ 10 Artikel: −20 %", cart_r2:"≥ 20 Artikel: −50 %",
    btn_clear:"Warenkorb leeren", btn_order:"Bestellen →", btn_delete:"Entfernen",
    cart_empty:"Ihr Warenkorb ist leer.",
    svc_title:"E-Commerce-Dienste", svc_cloud_title:"Cloud-Angebote Vergleich",
    svc_offer:"Angebot", svc_desc:"Beschreibung", svc_for:"Ideal für", svc_status:"Status",
    cmd_title:"Bestellungen, Reservierungen und Ereignisse",
    cmd_proj_title:"6-Monats-Projektion",
    cmd_proj_desc:"Künftige Bestellungen über 2 Geschäftsjahre antizipieren.",
    cmd_sim_title:"Cloud-Infrastruktur-Simulation",
    cmd_users:"Gleichzeitige Benutzer",
    cmd_activity:"Aktivitätsniveau", cmd_low:"Niedrig", cmd_med:"Mittel", cmd_high:"Hoch",
    cmd_growth:"Prognostiziertes Wachstum 6 Monate (%)",
    cmd_period:"Zeitraum", cmd_normal:"Normal", cmd_dec:"Dezember (Spitze +50 %)",
    cmd_projected:"Prognostizierte Benutzer",
    cmd_public:"Öffentliche Cloud / Monat", cmd_private:"Private Cloud / Monat", cmd_hybrid:"Hybride Cloud / Monat",
    cmd_adjust:"Parameter anpassen, um die Empfehlung zu sehen.",
    ctr_title:"Laufende und geplante Verträge",
    ctr_add:"Kontakt oder Kunde hinzufügen",
    ctr_name:"Name *", ctr_email:"E-Mail *", ctr_phone:"Telefon", ctr_address:"Adresse",
    ctr_remark:"Typ / Bemerkung", ctr_remark_ph:"z.B.: KMU-Kunde, potenzieller Lieferant...",
    ctr_save:"Kontakt speichern",
    ctr_contacts:"Gespeicherte Kontakte",
    ctr_saved:"Kontakt erfolgreich gespeichert.",
    ctr_error:"Name und E-Mail sind erforderlich.",
    sup_title:"Unsere Partnerlieferanten",
    sup_strategy:"VDMS Multi-Lieferanten-Strategie",
    sup_see:"Produkte ansehen →",
    chart_title:"E-Commerce-Grafiken — Frankreich 2025",
    chart_subtitle:"Visuelle Analyse: Web, physisch, Regionen, Saisonalität, Nutzwert und Probleme.",
    util_title:"Verbrauchernutzen & Sättigung",
    util_subtitle:"Grenznutzenkurve — wie sich die Zufriedenheit mit der Menge entwickelt",
    chat_title:"VDMS Assistent", chat_placeholder:"Ihre Frage...", chat_send:"Senden",
    chat_welcome:"Hallo! Ich bin der VDMS-Assistent. Wie kann ich Ihnen helfen?",
  },
  zh:{
    nav_home:"首页", nav_products:"产品", nav_services:"服务",
    nav_cart:"购物车", nav_orders:"订单", nav_contracts:"合同",
    nav_suppliers:"供应商", nav_charts:"图表",
    topbar_msg:"B2B电商平台 — 云解决方案与采购集中化",
    topbar_tag:"2026测试版",
    hero_label:"B2B平台 · 云服务 · 电商",
    hero_title:'面向<em>雄心勃勃企业</em>的<br>B2B电商平台',
    hero_desc:"VDMS集中管理采购、供应商、成本优化和订单跟踪。",
    hero_btn1:"查看产品", hero_btn2:"我们的服务",
    stat1_val:"4", stat1_lbl:"合作供应商",
    stat2_val:"50 %", stat2_lbl:"最高折扣",
    stat3_val:"2年", stat3_lbl:"订单预测",
    stat4_val:"100 %", stat4_lbl:"可扩展云",
    features_title:"主要功能",
    feat1_badge:"目录", feat1_title:"多供应商",
    feat1_desc:"汇聚多个供应商产品的可筛选目录。",
    feat2_badge:"云", feat2_title:"可扩展基础设施",
    feat2_desc:"公有云、私有云和混合云模拟。",
    feat3_badge:"服务", feat3_title:"支付与忠诚度",
    feat3_desc:"订阅、开票、融资和交付一体化。",
    feat4_badge:"分析", feat4_title:"市场图表",
    feat4_desc:"线上线下、按地区、季节和消费者效用Top 10。",
    btn_see:"查看 →", btn_simulate:"模拟 →", btn_discover:"了解 →", btn_explore:"探索 →",
    logic_title:"商业逻辑",
    logic_p1:"满<strong>10件</strong>享<strong>20%</strong>折扣。",
    logic_p2:"满<strong>20件</strong>享<strong>50%</strong>折扣。",
    logic_p3:"支持分期付款、融资和信贷。",
    btn_cart:"前往购物车", btn_contracts:"管理合同",
    footer_desc:"B2B电商平台 — 云端、多供应商、企业采购集中化。",
    footer_nav:"导航", footer_contact:"联系",
    footer_legal:"© 2026 VDMS Consulting · 技术负责人：Mickail",
    search_placeholder:"搜索产品...",
    filter_all:"所有供应商",
    weight_all:"所有重量", price_all:"所有价格",
    add_cart:"+ 加入购物车",
    cart_title:"购物车",
    cart_product:"产品", cart_supplier:"供应商", cart_price:"价格", cart_action:"操作",
    cart_items:"商品", cart_gross:"总金额", cart_discount:"折扣", cart_total:"最终合计",
    cart_note:"自动折扣",
    cart_r1:"≥ 10件：−20 %", cart_r2:"≥ 20件：−50 %",
    btn_clear:"清空购物车", btn_order:"提交订单 →", btn_delete:"删除",
    cart_empty:"您的购物车为空。",
    svc_title:"电商服务", svc_cloud_title:"云方案对比",
    svc_offer:"方案", svc_desc:"描述", svc_for:"适合", svc_status:"状态",
    cmd_title:"订单、预订和活动",
    cmd_proj_title:"6个月预测",
    cmd_proj_desc:"预测未来订单，跨2个财年。",
    cmd_sim_title:"云基础设施模拟",
    cmd_users:"同时在线用户数",
    cmd_activity:"活动级别", cmd_low:"低", cmd_med:"中", cmd_high:"高",
    cmd_growth:"预计6个月增长率 (%)",
    cmd_period:"时间段", cmd_normal:"正常", cmd_dec:"12月（峰值 +50 %）",
    cmd_projected:"预测用户数",
    cmd_public:"公有云 / 月", cmd_private:"私有云 / 月", cmd_hybrid:"混合云 / 月",
    cmd_adjust:"调整参数以查看建议。",
    ctr_title:"当前及预期合同",
    ctr_add:"添加联系人或客户",
    ctr_name:"姓名 *", ctr_email:"邮箱 *", ctr_phone:"电话", ctr_address:"地址",
    ctr_remark:"类型 / 备注", ctr_remark_ph:"例如：中小企业客户，潜在供应商...",
    ctr_save:"保存联系人",
    ctr_contacts:"已保存的联系人",
    ctr_saved:"联系人保存成功。",
    ctr_error:"姓名和邮箱为必填项。",
    sup_title:"我们的合作供应商",
    sup_strategy:"VDMS多供应商战略",
    sup_see:"查看产品 →",
    chart_title:"电商图表 — 法国2025",
    chart_subtitle:"可视化分析：线上、线下、地区、季节性、效用和消费者问题。",
    util_title:"消费者效用与饱和度",
    util_subtitle:"边际效用曲线 — 满意度如何随购买数量变化",
    chat_title:"VDMS助手", chat_placeholder:"请输入您的问题...", chat_send:"发送",
    chat_welcome:"您好！我是VDMS Consulting助手，有什么可以帮您？",
  },
  ar:{
    nav_home:"الرئيسية", nav_products:"المنتجات", nav_services:"الخدمات",
    nav_cart:"السلة", nav_orders:"الطلبات", nav_contracts:"العقود",
    nav_suppliers:"الموردون", nav_charts:"الرسوم البيانية",
    topbar_msg:"منصة التجارة الإلكترونية B2B — حلول سحابية ومركزية المشتريات",
    topbar_tag:"نسخة تجريبية 2026",
    hero_label:"منصة B2B · سحابة · تجارة إلكترونية",
    hero_title:'منصة <em>التجارة الإلكترونية B2B</em><br>للشركات الطموحة',
    hero_desc:"تقوم VDMS بمركزة مشترياتك وإدارة الموردين وتحسين التكاليف ومتابعة الطلبات.",
    hero_btn1:"عرض المنتجات", hero_btn2:"خدماتنا",
    stat1_val:"4", stat1_lbl:"موردون شركاء",
    stat2_val:"50 %", stat2_lbl:"أقصى خصم",
    stat3_val:"سنتان", stat3_lbl:"توقعات الطلبات",
    stat4_val:"100 %", stat4_lbl:"سحابة قابلة للتوسع",
    features_title:"الوظائف الرئيسية",
    feat1_badge:"كتالوج", feat1_title:"متعدد الموردين",
    feat1_desc:"منتجات من موردين متعددين في كتالوج واحد قابل للتصفية.",
    feat2_badge:"سحابة", feat2_title:"بنية تحتية قابلة للتوسع",
    feat2_desc:"محاكاة السحابة العامة والخاصة والهجينة.",
    feat3_badge:"خدمات", feat3_title:"الدفع والولاء",
    feat3_desc:"الاشتراكات والفوترة والتمويل والتسليم.",
    feat4_badge:"تحليل", feat4_title:"مخططات السوق",
    feat4_desc:"أفضل 10 ويب وفيزيائي ومنطقة وموسم ومنفعة.",
    btn_see:"عرض →", btn_simulate:"محاكاة →", btn_discover:"اكتشاف →", btn_explore:"استكشاف →",
    logic_title:"المنطق التجاري",
    logic_p1:"من <strong>10 مقالات</strong>: خصم <strong>20 %</strong>.",
    logic_p2:"من <strong>20 مقالة</strong>: خصم <strong>50 %</strong>.",
    logic_p3:"خيارات التقسيط والتمويل والائتمان متاحة.",
    btn_cart:"الذهاب إلى السلة", btn_contracts:"إدارة العقود",
    footer_desc:"منصة B2B للتجارة الإلكترونية — سحابة، متعدد الموردين، مركزية المشتريات.",
    footer_nav:"التنقل", footer_contact:"اتصل بنا",
    footer_legal:"© 2026 VDMS Consulting · المسؤول التقني: Mickail",
    search_placeholder:"ابحث عن منتج...",
    filter_all:"جميع الموردين",
    weight_all:"جميع الأوزان", price_all:"جميع الأسعار",
    add_cart:"+ أضف إلى السلة",
    cart_title:"سلة التسوق",
    cart_product:"المنتج", cart_supplier:"المورد", cart_price:"السعر", cart_action:"الإجراء",
    cart_items:"مقالات", cart_gross:"المبلغ الإجمالي", cart_discount:"الخصم", cart_total:"الإجمالي النهائي",
    cart_note:"خصومات تلقائية",
    cart_r1:"≥ 10 مقالات: −20 %", cart_r2:"≥ 20 مقالة: −50 %",
    btn_clear:"تفريغ السلة", btn_order:"تأكيد الطلب →", btn_delete:"حذف",
    cart_empty:"سلة التسوق فارغة.",
    svc_title:"خدمات التجارة الإلكترونية", svc_cloud_title:"مقارنة العروض السحابية",
    svc_offer:"العرض", svc_desc:"الوصف", svc_for:"مثالي لـ", svc_status:"الحالة",
    cmd_title:"الطلبات والحجوزات والأحداث",
    cmd_proj_title:"توقعات 6 أشهر",
    cmd_proj_desc:"توقع الطلبات المستقبلية على مدى سنتين ماليتين.",
    cmd_sim_title:"محاكاة البنية التحتية السحابية",
    cmd_users:"المستخدمون المتزامنون",
    cmd_activity:"مستوى النشاط", cmd_low:"منخفض", cmd_med:"متوسط", cmd_high:"مرتفع",
    cmd_growth:"النمو المتوقع خلال 6 أشهر (%)",
    cmd_period:"الفترة", cmd_normal:"عادية", cmd_dec:"ديسمبر (ذروة +50 %)",
    cmd_projected:"المستخدمون المتوقعون",
    cmd_public:"السحابة العامة / شهر", cmd_private:"السحابة الخاصة / شهر", cmd_hybrid:"السحابة الهجينة / شهر",
    cmd_adjust:"اضبط المعاملات لرؤية التوصية.",
    ctr_title:"العقود الجارية والمخططة",
    ctr_add:"إضافة جهة اتصال أو عميل",
    ctr_name:"الاسم *", ctr_email:"البريد الإلكتروني *", ctr_phone:"الهاتف", ctr_address:"العنوان",
    ctr_remark:"النوع / ملاحظة", ctr_remark_ph:"مثال: عميل PME، مورد محتمل...",
    ctr_save:"حفظ جهة الاتصال",
    ctr_contacts:"جهات الاتصال المحفوظة",
    ctr_saved:"تم حفظ جهة الاتصال بنجاح.",
    ctr_error:"الاسم والبريد الإلكتروني مطلوبان.",
    sup_title:"موردونا الشركاء",
    sup_strategy:"استراتيجية VDMS متعددة الموردين",
    sup_see:"عرض المنتجات →",
    chart_title:"رسوم بيانية للتجارة الإلكترونية — فرنسا 2025",
    chart_subtitle:"تحليل مرئي: ويب، فيزيائي، مناطق، موسمية، منفعة ومشاكل المستهلكين.",
    util_title:"منفعة المستهلك والتشبع",
    util_subtitle:"منحنى المنفعة الحدية — كيف تتطور الرضا مع الكمية المشتراة",
    chat_title:"مساعد VDMS", chat_placeholder:"اطرح سؤالك...", chat_send:"إرسال",
    chat_welcome:"مرحبًا! أنا مساعد VDMS Consulting. كيف يمكنني مساعدتك؟",
  }
};

// ── 3. FONCTIONS LANGUE ──────────────────────────────────────
function t(k){
  const lang = T[currentLang] || T.fr;
  return lang[k] !== undefined ? lang[k] : (T.fr[k] || k);
}

function applyTranslations(){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k = el.getAttribute("data-i18n");
    const v = t(k);
    if(!v) return;
    // Input placeholder
    if((el.tagName==="INPUT"||el.tagName==="TEXTAREA") && el.type!=="submit"){
      el.placeholder = v;
    } else {
      el.innerHTML = v;
    }
  });
  // RTL pour arabe
  document.documentElement.dir = currentLang==="ar" ? "rtl" : "ltr";
  document.documentElement.lang = currentLang;
  // Synchronise TOUS les selects de langue sur la page
  document.querySelectorAll(".lang-select").forEach(s => { s.value = currentLang; });
}

function changeLanguage(lang){
  currentLang = lang;
  try { localStorage.setItem("vdms_lang", lang); } catch(e){}
  applyTranslations();
  afficherPanier();   // re-render avec bons labels
  appliquerFiltres(); // re-render filtres si sur produits
}

// ── 4. PANIER ────────────────────────────────────────────────
let panier  = [];
let clients = [];

// Chargement sécurisé depuis localStorage
try { panier  = JSON.parse(localStorage.getItem("vdms_panier"))  || []; } catch(e){ panier=[]; }
try { clients = JSON.parse(localStorage.getItem("vdms_clients")) || []; } catch(e){ clients=[]; }

function savePanier(){
  try { localStorage.setItem("vdms_panier", JSON.stringify(panier)); } catch(e){}
}
function saveClients(){
  try { localStorage.setItem("vdms_clients", JSON.stringify(clients)); } catch(e){}
}

function formatPrix(v){ return Number(v).toLocaleString("fr-FR",{minimumFractionDigits:2,maximumFractionDigits:2})+" €"; }

function mettreAJourCompteurPanier(){
  try {
    const stored = localStorage.getItem("vdms_panier");
    if(stored) panier = JSON.parse(stored) || [];
  } catch(e){}
  document.querySelectorAll(".compteur-panier").forEach(el=>{
    el.textContent = panier.length;
  });
}

function showToast(msg, type="success"){
  let el = document.getElementById("vdms-toast");
  if(!el){
    el = document.createElement("div");
    el.id = "vdms-toast";
    el.style.cssText = [
      "position:fixed","bottom:90px","right:24px","z-index:9999",
      "padding:12px 18px","border-radius:8px","font-size:13px","font-weight:600",
      "box-shadow:0 4px 20px rgba(0,0,0,.18)","transition:opacity .35s",
      "max-width:320px","pointer-events:none","opacity:0"
    ].join(";");
    document.body.appendChild(el);
  }
  el.style.background = type==="success" ? "#16a34a" : "#dc2626";
  el.style.color = "#fff";
  el.textContent = msg;
  el.style.opacity = "1";
  clearTimeout(el._t);
  el._t = setTimeout(()=>{ el.style.opacity="0"; }, 3000);
}

function ajouterAuPanier(nom, prix, fournisseur, image=""){
  panier.push({ nom, prix:Number(prix), fournisseur, image });
  savePanier();
  mettreAJourCompteurPanier();
  // Actualiser le panier si on est sur panier.html
  afficherPanier();
  showToast("✓ "+nom, "success");
}

function afficherPanier(){
  // Always re-read from localStorage to ensure cross-page consistency
  try {
    const stored = localStorage.getItem("vdms_panier");
    if(stored) panier = JSON.parse(stored) || [];
  } catch(e){}
  
  const body = document.getElementById("panier-body");
  if(!body) return;

  body.innerHTML = "";

  if(panier.length === 0){
    const tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="4" style="text-align:center;color:#94a3b8;padding:32px;font-style:italic">${t("cart_empty")}</td>`;
    body.appendChild(tr);
    // Reset totaux
    const s = id => document.getElementById(id);
    if(s("nb-articles")) s("nb-articles").textContent = "0";
    if(s("total"))       s("total").textContent = formatPrix(0);
    if(s("reduction"))   s("reduction").textContent = formatPrix(0);
    if(s("total-final")) s("total-final").textContent = formatPrix(0);
    return;
  }

  let total = 0;
  // Recréer le tableau pour avoir les bons indices après splice
  panier.forEach((item, i)=>{
    total += item.prix;
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong style="color:#0f172a">${item.nom}</strong></td>
      <td><span class="badge badge-green">${item.fournisseur}</span></td>
      <td><strong>${formatPrix(item.prix)}</strong></td>
      <td>
        <button class="btn-danger" style="cursor:pointer" onclick="supprimerDuPanier(${i})">
          ${t("btn_delete")}
        </button>
      </td>`;
    body.appendChild(tr);
  });

  let red = 0;
  if(panier.length >= 20)      red = total * 0.5;
  else if(panier.length >= 10) red = total * 0.2;
  const fin = total - red;

  const s = id => document.getElementById(id);
  if(s("nb-articles")) s("nb-articles").textContent = panier.length;
  if(s("total"))       s("total").textContent       = formatPrix(total);
  if(s("reduction"))   s("reduction").textContent   = formatPrix(red);
  if(s("total-final")) s("total-final").textContent = formatPrix(fin);
}

function supprimerDuPanier(i){
  panier.splice(i, 1);
  savePanier();
  afficherPanier();
  mettreAJourCompteurPanier();
}

function viderPanier(){
  panier = [];
  savePanier();
  afficherPanier();
  mettreAJourCompteurPanier();
}

// ── 5. FILTRES PRODUITS ──────────────────────────────────────
function appliquerFiltres(){
  const txt   = (document.getElementById("recherche")?.value || "").toLowerCase();
  const four  = (document.getElementById("filtre-fournisseur")?.value || "tous").toLowerCase();
  const poids = Number(document.getElementById("filtre-poids")?.value || 0);
  const prix  = Number(document.getElementById("filtre-prix")?.value  || 0);

  document.querySelectorAll(".produit-card").forEach(c=>{
    const texte = c.innerText.toLowerCase();
    const cf    = (c.dataset.fournisseur || "").toLowerCase();
    const cp    = Number(c.dataset.poids  || 0);
    const cpx   = Number(c.dataset.prix   || 0);

    const ok = texte.includes(txt)
      && (four==="tous" || cf===four)
      && (poids===0 || cp<=poids)
      && (prix===0  || cpx<=prix);

    c.style.display = ok ? "" : "none";
  });
}

// ── 6. FORMULAIRE CLIENT ─────────────────────────────────────
function enregistrerClient(e){
  e.preventDefault();
  const nom   = document.getElementById("nom")?.value.trim()   || "";
  const email = document.getElementById("email")?.value.trim() || "";
  if(!nom || !email){
    showToast(t("ctr_error"), "error");
    return;
  }
  clients.push({
    nom, email,
    telephone : document.getElementById("telephone")?.value || "",
    adresse   : document.getElementById("adresse")?.value   || "",
    message   : document.getElementById("message")?.value   || "",
    date      : new Date().toLocaleString()
  });
  saveClients();
  const conf = document.getElementById("confirmation-form");
  if(conf){ conf.className="alert alert-success"; conf.textContent=t("ctr_saved"); }
  e.target.reset();
  afficherClients();
}

function afficherClients(){
  const body = document.getElementById("clients-body");
  if(!body) return;
  body.querySelectorAll("tr.dyn").forEach(r=>r.remove());
  clients.forEach(c=>{
    const tr = document.createElement("tr");
    tr.className = "dyn";
    tr.innerHTML = `<td><strong>${c.nom}</strong></td><td>${c.email}</td><td>${c.telephone||"-"}</td><td>${c.adresse||"-"}</td><td>${c.date}</td>`;
    body.appendChild(tr);
  });
}

// ── 7. SIMULATION CLOUD ──────────────────────────────────────
function calculerSimulation(){
  const usersEl   = document.getElementById("users");
  const activiteEl= document.getElementById("activite");
  if(!usersEl || !activiteEl) return;
  const users    = Number(usersEl.value) || 0;
  const activite = activiteEl.value;
  const croiss   = Number(document.getElementById("croissance")?.value) || 0;
  const saison   = document.getElementById("saison")?.value || "normale";
  let proj = Math.round(users * (1 + croiss/100));
  if(saison==="decembre") proj = Math.round(proj * 1.5);
  let pub=0, priv=0, hyb=0, reco="";
  if(activite==="faible") { pub=120+proj*1.2; priv=180+proj*0.8; hyb=150+proj*1.0; }
  else if(activite==="moyenne") { pub=180+proj*1.5; priv=260+proj*1.1; hyb=220+proj*1.2; }
  else { pub=250+proj*1.8; priv=420+proj*1.4; hyb=300+proj*1.3; }
  if(proj<100 && activite==="faible") reco="Cloud privé recommandé — activité stable, besoin limité.";
  else if(proj<500) reco="Cloud hybride recommandé — équilibre coût / flexibilité.";
  else reco="Cloud public recommandé — forte montée en charge, scalabilité maximale.";
  const s = id => document.getElementById(id);
  if(s("users-projection")) s("users-projection").textContent = proj;
  if(s("cout-public"))      s("cout-public").textContent      = formatPrix(pub);
  if(s("cout-prive"))       s("cout-prive").textContent       = formatPrix(priv);
  if(s("cout-hybride"))     s("cout-hybride").textContent     = formatPrix(hyb);
  if(s("recommandation-cloud")) s("recommandation-cloud").textContent = reco;
}

// ── 8. MENU MOBILE ───────────────────────────────────────────
function toggleMenu(){
  document.getElementById("nav-menu")?.classList.toggle("open");
}

// ── 9. CHATBOT ───────────────────────────────────────────────
const KB = [
  {q:["prix","tarif","coût","cost","price","precio","preis","价格","سعر","remis","discount","rabatt"],
   a:{fr:"Nos tarifs sont modulables selon le volume : −20 % dès 10 articles et −50 % dès 20. Pour un devis personnalisé, utilisez la page Contrats.",en:"Pricing scales with volume: −20 % from 10 items, −50 % from 20. For a custom quote, see the Contracts page.",es:"Precios según volumen: −20 % desde 10 artículos, −50 % desde 20.",de:"Preise nach Volumen: −20 % ab 10 Artikeln, −50 % ab 20.",zh:"价格随数量调整：10件-20%，20件-50%。",ar:"الأسعار تتدرج حسب الحجم: −20% من 10 مقالات، −50% من 20."}},
  {q:["livraison","délai","shipping","delivery","lieferung","配送","توصيل"],
   a:{fr:"Livraison standard 3–5 jours, express 24–48h. VDMS coordonne avec ses partenaires transporteurs.",en:"Standard delivery 3–5 days, express 24–48h. VDMS coordinates with carrier partners.",es:"Entrega estándar 3–5 días, express 24–48h.",de:"Standard-Lieferung 3–5 Tage, Express 24–48h.",zh:"标准配送3–5天，快递24–48小时。",ar:"التسليم العادي 3–5 أيام، السريع 24–48 ساعة."}},
  {q:["fournisseur","supplier","proveedor","lieferant","供应商","المورد","fnac","darty","decathlon","carrefour"],
   a:{fr:"VDMS travaille avec Fnac, Darty, Decathlon et Carrefour Pro. D'autres peuvent être intégrés sur demande.",en:"VDMS works with Fnac, Darty, Decathlon and Carrefour Pro. Others can be added on request.",es:"VDMS trabaja con Fnac, Darty, Decathlon y Carrefour Pro.",de:"VDMS arbeitet mit Fnac, Darty, Decathlon und Carrefour Pro.",zh:"VDMS与Fnac、Darty、Decathlon和Carrefour Pro合作。",ar:"VDMS تعمل مع Fnac وDarty وDecathlon وCarrefour Pro."}},
  {q:["cloud","hébergement","hosting","server","aws","azure","gcp"],
   a:{fr:"VDMS propose cloud public (AWS/Azure/GCP), privé et hybride. Simulez vos coûts dans la page Commandes.",en:"VDMS offers public (AWS/Azure/GCP), private and hybrid cloud. Simulate costs on the Orders page.",es:"VDMS ofrece cloud público, privado e híbrido. Simule costos en Pedidos.",de:"VDMS bietet öffentliche, private und hybride Cloud. Simulation auf der Bestellungsseite.",zh:"VDMS提供公有云、私有云和混合云解决方案。",ar:"VDMS تقدم سحابة عامة وخاصة وهجينة."}},
  {q:["paiement","payment","pago","zahlung","支付","الدفع","stripe","sepa","alma","bnpl"],
   a:{fr:"Carte (Stripe), virement SEPA, et paiement fractionné B2B via Alma ou Hokodo (30/60/90 jours).",en:"Card (Stripe), SEPA transfer, B2B instalment via Alma or Hokodo (30/60/90 days).",es:"Tarjeta (Stripe), SEPA, pago fraccionado B2B vía Alma o Hokodo.",de:"Karte (Stripe), SEPA, B2B-Ratenzahlung via Alma oder Hokodo.",zh:"刷卡（Stripe）、SEPA转账和B2B分期付款（Alma/Hokodo）。",ar:"بطاقة (Stripe) وSEPA والتقسيط B2B عبر Alma أو Hokodo."}},
  {q:["rgpd","gdpr","données","data","sécurité","security","datenschutz"],
   a:{fr:"VDMS est conforme RGPD. Données hébergées en Europe, chiffrées, jamais revendues.",en:"GDPR compliant. Data hosted in Europe, encrypted, never sold.",es:"Cumplimiento RGPD. Datos en Europa, cifrados, nunca vendidos.",de:"DSGVO-konform. Daten in Europa, verschlüsselt, nie verkauft.",zh:"符合GDPR，数据托管于欧洲，加密存储。",ar:"متوافقة مع GDPR. البيانات مستضافة في أوروبا ومشفرة."}},
  {q:["contact","email","téléphone","phone","adresse","vahid"],
   a:{fr:"Contactez-nous : contrats@vdms.fr — Dirigeant : Vahid Mousaei. Formulaire disponible page Contrats.",en:"Contact: contrats@vdms.fr — CEO: Vahid Mousaei. Form available on Contracts page.",es:"Contacto: contrats@vdms.fr — Vahid Mousaei. Formulario en Contratos.",de:"Kontakt: contrats@vdms.fr — Vahid Mousaei. Formular auf Vertragsseite.",zh:"联系我们：contrats@vdms.fr — 总裁：Vahid Mousaei。",ar:"تواصل: contrats@vdms.fr — المدير: Vahid Mousaei."}},
  {q:["utilité","utility","utilidad","nutzwert","效用","منفعة","saturation","chocolate","tablette","panier"],
   a:{fr:"La courbe d'utilité montre comment votre satisfaction diminue avec la quantité (loi de l'utilité marginale décroissante). Consultez le graphique Utilité dans la page Graphiques.",en:"The utility curve shows how satisfaction decreases with quantity (law of diminishing marginal utility). See the Utility chart on the Charts page.",es:"La curva de utilidad muestra cómo la satisfacción disminuye con la cantidad. Ver el gráfico de Utilidad.",de:"Die Nutzenkurve zeigt, wie die Zufriedenheit mit der Menge sinkt. Siehe Nutzengrafik.",zh:"效用曲线显示满意度如何随数量递减（边际效用递减规律）。请查看图表页面的效用图。",ar:"منحنى المنفعة يُظهر كيف تنخفض الرضا مع الكمية (قانون تناقص المنفعة الحدية)."}},
];

function chatbotResponse(msg){
  const m = msg.toLowerCase();
  for(const entry of KB){
    if(entry.q.some(kw => m.includes(kw))){
      return entry.a[currentLang] || entry.a.fr;
    }
  }
  return {
    fr:"Je n'ai pas trouvé de réponse précise. Écrivez-nous à contrats@vdms.fr ou consultez la page Contrats.",
    en:"No precise answer found. Write to contrats@vdms.fr or visit the Contracts page.",
    es:"Sin respuesta precisa. Escríbanos a contrats@vdms.fr o visite Contratos.",
    de:"Keine genaue Antwort. Schreiben Sie uns: contrats@vdms.fr oder besuchen Sie Verträge.",
    zh:"未找到精确答案。请发送邮件至 contrats@vdms.fr。",
    ar:"لم أجد إجابة دقيقة. تواصل معنا على contrats@vdms.fr."
  }[currentLang] || "Contactez-nous à contrats@vdms.fr";
}

function injectChatbot(){
  if(document.getElementById("vdms-chat-btn")) return;

  // Bubble button
  const btn = document.createElement("button");
  btn.id = "vdms-chat-btn";
  btn.setAttribute("aria-label","Ouvrir le chat VDMS");
  btn.innerHTML = `<span id="chat-btn-icon" style="font-size:24px;transition:transform .3s">💬</span><span id="chat-notif" style="position:absolute;top:2px;right:2px;width:12px;height:12px;background:#ef4444;border-radius:50%;border:2px solid #fff;display:none"></span>`;
  btn.style.cssText = "position:fixed;bottom:24px;right:24px;z-index:8000;width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,#16a34a,#15803d);color:#fff;border:none;font-size:26px;cursor:pointer;box-shadow:0 4px 20px rgba(22,163,74,.5);transition:transform .2s,box-shadow .2s;display:flex;align-items:center;justify-content:center;position:fixed;";
  btn.style.position = "fixed";
  btn.onmouseenter = ()=>{ btn.style.transform="scale(1.08)"; btn.style.boxShadow="0 8px 28px rgba(22,163,74,.65)"; };
  btn.onmouseleave = ()=>{ btn.style.transform="scale(1)";    btn.style.boxShadow="0 4px 20px rgba(22,163,74,.5)"; };

  // Chat window
  const win = document.createElement("div");
  win.id = "vdms-chat-win";
  win.style.cssText = "display:none;position:fixed;bottom:100px;right:24px;z-index:8001;width:360px;background:#fff;border-radius:18px;box-shadow:0 12px 48px rgba(0,0,0,.2);flex-direction:column;overflow:hidden;font-family:inherit;max-height:520px;border:1px solid rgba(0,0,0,.08);animation:chatIn .25s ease;";

  // Inject animation style once
  if(!document.getElementById("vdms-chat-style")){
    const st = document.createElement("style");
    st.id = "vdms-chat-style";
    st.textContent = `
      @keyframes chatIn { from{opacity:0;transform:translateY(16px) scale(.97)} to{opacity:1;transform:translateY(0) scale(1)} }
      #vdms-chat-win .chat-bubble-bot { background:#f1f5f9; color:#0f172a; align-self:flex-start; border-bottom-left-radius:4px; border-radius:14px; }
      #vdms-chat-win .chat-bubble-user { background:linear-gradient(135deg,#16a34a,#15803d); color:#fff; align-self:flex-end; border-bottom-right-radius:4px; border-radius:14px; }
      #chat-input:focus { outline:none; border-color:#16a34a; box-shadow:0 0 0 3px rgba(22,163,74,.12); }
      #chat-send-btn:hover { background:#15803d; }
      .chat-typing { display:flex; gap:4px; padding:8px 12px; align-items:center; }
      .chat-typing span { width:7px; height:7px; background:#94a3b8; border-radius:50%; animation:bounce .9s infinite; }
      .chat-typing span:nth-child(2) { animation-delay:.2s; }
      .chat-typing span:nth-child(3) { animation-delay:.4s; }
      @keyframes bounce { 0%,60%,100%{transform:translateY(0)} 30%{transform:translateY(-6px)} }
      .chat-quick-btn { background:#f0fdf4; border:1.5px solid #bbf7d0; color:#15803d; padding:6px 12px; border-radius:20px; font-size:11px; font-weight:600; cursor:pointer; white-space:nowrap; transition:background .15s; }
      .chat-quick-btn:hover { background:#dcfce7; }
    `;
    document.head.appendChild(st);
  }

  win.innerHTML = `
    <div style="background:linear-gradient(135deg,#0f172a,#1e293b);color:#fff;padding:16px 18px;display:flex;align-items:center;gap:12px;flex-shrink:0">
      <div style="width:38px;height:38px;background:linear-gradient(135deg,#16a34a,#15803d);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">🤖</div>
      <div style="flex:1">
        <div style="font-weight:700;font-size:14px" id="chat-title-lbl">Assistant VDMS</div>
        <div style="font-size:11px;color:#4ade80;display:flex;align-items:center;gap:5px"><span style="width:6px;height:6px;background:#4ade80;border-radius:50%;display:inline-block"></span>En ligne</div>
      </div>
      <button onclick="document.getElementById('vdms-chat-win').style.display='none'" style="background:rgba(255,255,255,.1);border:none;color:#fff;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;flex-shrink:0">✕</button>
    </div>
    <div id="chat-msgs" style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;min-height:200px;max-height:340px;background:#f8fafc"></div>
    <div id="chat-quick-btns" style="padding:10px 14px;display:flex;gap:6px;flex-wrap:wrap;border-top:1px solid #f1f5f9;background:#fff"></div>
    <div style="padding:12px 14px;border-top:1px solid #e2e8f0;display:flex;gap:8px;flex-shrink:0;background:#fff">
      <input id="chat-input" type="text" style="flex:1;padding:10px 14px;border:1.5px solid #e2e8f0;border-radius:24px;font-size:13px;font-family:inherit;background:#f8fafc;color:#0f172a;transition:border-color .2s,box-shadow .2s"/>
      <button id="chat-send-btn" style="background:linear-gradient(135deg,#16a34a,#15803d);color:#fff;border:none;padding:10px 16px;border-radius:24px;font-weight:700;font-size:13px;cursor:pointer;white-space:nowrap;transition:background .2s;flex-shrink:0">→</button>
    </div>`;

  document.body.appendChild(btn);
  document.body.appendChild(win);

  const QUICK = {
    fr:["💰 Tarifs & remises","🚚 Livraison","☁️ Cloud","💳 Paiement"],
    en:["💰 Pricing","🚚 Delivery","☁️ Cloud","💳 Payment"],
    es:["💰 Precios","🚚 Entrega","☁️ Cloud","💳 Pago"],
    de:["💰 Preise","🚚 Lieferung","☁️ Cloud","💳 Zahlung"],
    zh:["💰 价格","🚚 配送","☁️ 云","💳 支付"],
    ar:["💰 الأسعار","🚚 التوصيل","☁️ سحابة","💳 الدفع"]
  };

  function renderQuickBtns(){
    const qDiv = document.getElementById("chat-quick-btns");
    if(!qDiv) return;
    const btns = QUICK[currentLang] || QUICK.fr;
    qDiv.innerHTML = btns.map(b=>`<button class="chat-quick-btn" onclick="sendChatMsg('${b}')">${b}</button>`).join("");
  }

  function addMsg(text, from){
    const d = document.createElement("div");
    d.className = from === "bot" ? "chat-bubble-bot" : "chat-bubble-user";
    d.style.cssText = "max-width:84%;padding:10px 14px;font-size:13px;line-height:1.6;word-break:break-word;";
    d.textContent = text;
    const msgs = document.getElementById("chat-msgs");
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function showTyping(){
    const msgs = document.getElementById("chat-msgs");
    const d = document.createElement("div");
    d.id = "chat-typing";
    d.className = "chat-bubble-bot chat-typing";
    d.innerHTML = "<span></span><span></span><span></span>";
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
  }
  function hideTyping(){ document.getElementById("chat-typing")?.remove(); }

  window.sendChatMsg = function(msg){
    const inp = document.getElementById("chat-input");
    if(!msg){ msg = inp.value.trim(); }
    if(!msg) return;
    if(inp) inp.value = "";
    // Remove quick buttons after first interaction
    const qDiv = document.getElementById("chat-quick-btns");
    if(qDiv) qDiv.style.display = "none";
    addMsg(msg, "user");
    showTyping();
    setTimeout(()=>{
      hideTyping();
      addMsg(chatbotResponse(msg), "bot");
    }, 600 + Math.random()*300);
  };

  function sendMsg(){
    window.sendChatMsg(null);
  }

  btn.onclick = ()=>{
    const isOpen = win.style.display === "flex";
    if(isOpen){
      win.style.display = "none";
      document.getElementById("chat-btn-icon").textContent = "💬";
    } else {
      win.style.display = "flex";
      win.style.flexDirection = "column";
      document.getElementById("chat-btn-icon").textContent = "✕";
      document.getElementById("chat-notif").style.display = "none";
      // Labels
      document.getElementById("chat-title-lbl").textContent = t("chat_title");
      document.getElementById("chat-input").placeholder    = t("chat_placeholder");
      document.getElementById("chat-send-btn").textContent = t("chat_send");
      // Welcome message if empty
      const msgs = document.getElementById("chat-msgs");
      if(msgs.children.length === 0){
        addMsg(t("chat_welcome"), "bot");
        renderQuickBtns();
      }
      document.getElementById("chat-input").focus();
    }
  };

  // Show notification bubble after 3s to invite user to chat
  setTimeout(()=>{
    if(win.style.display !== "flex"){
      const notif = document.getElementById("chat-notif");
      if(notif) notif.style.display = "block";
    }
  }, 3000);

  document.getElementById("chat-send-btn").onclick = sendMsg;
  document.getElementById("chat-input").addEventListener("keydown", e=>{ if(e.key==="Enter") sendMsg(); });
}

// ── 10. INIT ─────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", ()=>{

  // Langue déjà chargée en haut du fichier, on synchronise juste les selects
  document.querySelectorAll(".lang-select").forEach(sel=>{
    sel.value = currentLang;
    // Éviter les doublons d'event
    sel.removeEventListener("change", sel._langHandler||null);
    sel._langHandler = e => changeLanguage(e.target.value);
    sel.addEventListener("change", sel._langHandler);
  });

  // Appliquer les traductions dès le départ
  applyTranslations();

  // Panier
  mettreAJourCompteurPanier();
  afficherPanier();

  // Contacts
  afficherClients();

  // Simulation cloud
  calculerSimulation();

  // Filtres produits
  const r = document.getElementById("recherche");
  const ff = document.getElementById("filtre-fournisseur");
  const fp = document.getElementById("filtre-poids");
  const fpr= document.getElementById("filtre-prix");
  if(r)   r.addEventListener("input", appliquerFiltres);
  if(ff)  ff.addEventListener("change", appliquerFiltres);
  if(fp)  fp.addEventListener("change", appliquerFiltres);
  if(fpr) fpr.addEventListener("change", appliquerFiltres);

  // Formulaire contact
  document.getElementById("form-client")?.addEventListener("submit", enregistrerClient);

  // Simulation inputs
  ["users","activite","croissance","saison"].forEach(id=>{
    const el = document.getElementById(id);
    if(el){
      el.addEventListener("input",  calculerSimulation);
      el.addEventListener("change", calculerSimulation);
    }
  });

  // Réparer les emails obfusqués Cloudflare dans le footer
  document.querySelectorAll(".__cf_email__").forEach(el=>{
    const parent = el.parentElement;
    if(parent && parent.tagName==="A"){
      parent.href = "mailto:contrats@vdms.fr";
      el.textContent = "contrats@vdms.fr";
    }
  });

  // Chatbot
  injectChatbot();
});