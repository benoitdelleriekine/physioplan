// ════════════════════════════════════════════════════════════
// PROTOCOLES DE RÉÉDUCATION PRÉ-DÉFINIS (basés sur revue de littérature)
// ════════════════════════════════════════════════════════════
const PROTOCOLES = [
  // ─── LCA OPÉRÉ ───
  {
    cat: 'LCA opéré',
    nom: 'LCA — Phase 1 : Réveil musculaire et contrôle de l\'œdème',
    dur: 4, freq: 3,
    obj: 'Récupérer l\'extension complète, contrôler l\'épanchement, réveil quadricipital',
    ctn: 'Mobilisation passive/active, électrostimulation si besoin, isométriques quadriceps, mobilisation rotule, marche avec appui progressif, vélo sans résistance'
  },
  {
    cat: 'LCA opéré',
    nom: 'LCA — Phase 2 : Renforcement et contrôle neuromusculaire',
    dur: 8, freq: 3,
    obj: 'Force quadriceps/ischio-jambiers, proprioception, amplitude complète',
    ctn: 'Presse à cuisses, leg extension léger, squat partiel, step-up, proprioception plateau instable, gainage, vélo avec résistance'
  },
  {
    cat: 'LCA opéré',
    nom: 'LCA — Phase 3 : Renforcement spécifique et préparation course',
    dur: 8, freq: 3, evf: 8,
    obj: 'Force symétrique (LSI >70-90%), réathlétisation douce',
    ctn: 'Squat complet, fentes, gainage dynamique, excentrique ischio-jambiers, initiation course en ligne droite'
  },
  {
    cat: 'LCA opéré',
    nom: 'LCA — Phase 4 : Retour sport-spécifique',
    dur: 8, freq: 3, evf: 8,
    obj: 'Pliométrie, changements de direction, tests symétriques avant validation (délai recommandé 8-12 mois post-op)',
    ctn: 'Sauts/réceptions, agilité, gestes spécifiques au sport, tests de force et de saut avant feu vert'
  },

  // ─── TENDINOPATHIE D'ACHILLE ───
  {
    cat: 'Tendinopathie d\'Achille',
    nom: 'Achille — Phase 1 : Mise en charge initiale',
    dur: 2, freq: 6,
    obj: 'Douleur tolérable, démarrage progressif (type protocole Alfredson)',
    ctn: 'Excentriques mollet genou tendu et fléchi (3x15), étirements doux, marche'
  },
  {
    cat: 'Tendinopathie d\'Achille',
    nom: 'Achille — Phase 2 : Charge progressive lourde',
    dur: 10, freq: 3,
    obj: 'Tolérance à la charge croissante, fonction',
    ctn: 'Excentriques lestés, heavy slow resistance (presse mollet 3x10-15), isométrique complémentaire, vélo'
  },
  {
    cat: 'Tendinopathie d\'Achille',
    nom: 'Achille — Phase 3 : Réathlétisation',
    dur: 6, freq: 3,
    obj: 'Retour course/saut',
    ctn: 'Pliométrie progressive, course progressive, gestes sportifs spécifiques'
  },

  // ─── ENTORSE DE CHEVILLE ───
  {
    cat: 'Entorse de cheville',
    nom: 'Cheville — Phase 1 : Protection et mobilité précoce',
    dur: 2, freq: 3,
    obj: 'Diminuer douleur/œdème, mobilisation précoce protégée, support externe',
    ctn: 'Mobilisation active assistée, pompes de cheville, marche protégée, glaçage'
  },
  {
    cat: 'Entorse de cheville',
    nom: 'Cheville — Phase 2 : Renforcement et proprioception',
    dur: 4, freq: 3,
    obj: 'Force des stabilisateurs, contrôle neuromusculaire',
    ctn: 'Élastique 4 directions, proprioception plateau/bosu, équilibre unipodal yeux fermés, montée/descente escalier'
  },
  {
    cat: 'Entorse de cheville',
    nom: 'Cheville — Phase 3 : Retour à l\'activité',
    dur: 6, freq: 3,
    obj: 'Reprise sport, prévention récidive (entretien proprioceptif jusqu\'à 1 an)',
    ctn: 'Sauts/réceptions, changements de direction, course, poursuite du travail proprioceptif'
  },

  // ─── ÉPICONDYLALGIE (TENNIS ELBOW) ───
  {
    cat: 'Tendinopathie latérale du coude',
    nom: 'Épicondyle — Phase 1 : Mise en charge progressive et excentrique',
    dur: 6, freq: 3,
    obj: 'Douleur, première adaptation tendineuse (programme multimodal)',
    ctn: 'Excentriques extenseurs du poignet (3x15), étirements doux, isométriques poignet, autorééducation gestuelle'
  },
  {
    cat: 'Tendinopathie latérale du coude',
    nom: 'Épicondyle — Phase 2 : Renforcement global et reprise fonctionnelle',
    dur: 6, freq: 3,
    obj: 'Force de préhension, retour aux gestes (sport/travail)',
    ctn: 'Concentrique/excentrique progressif poignet et avant-bras, renforcement chaîne membre supérieur (épaule/scapula), gestes spécifiques progressifs'
  },

  // ─── TENDINOPATHIE D'ÉPAULE ───
  {
    cat: 'Tendinopathie d\'épaule',
    nom: 'Épaule — Phase 1 : Contrôle moteur et douleur',
    dur: 4, freq: 3,
    obj: 'Réduire la douleur, rééducation du contrôle scapulaire',
    ctn: 'Exercices scapulaires (rétraction, dépression), rotation externe légère élastique, mobilité douce, correction posturale'
  },
  {
    cat: 'Tendinopathie d\'épaule',
    nom: 'Épaule — Phase 2 : Renforcement progressif',
    dur: 6, freq: 3,
    obj: 'Force rotateurs externes/internes, abduction, scaption',
    ctn: 'Élastique multi-directions, renforcement deltoïde/coiffe progressif, exercices chaîne fermée légère'
  },
  {
    cat: 'Tendinopathie d\'épaule',
    nom: 'Épaule — Phase 3 : Retour fonctionnel/sportif',
    dur: 6, freq: 3,
    obj: 'Charges plus lourdes, gestes spécifiques',
    ctn: 'Renforcement lourd progressif, pliométrie légère du membre supérieur si sport concerné, gestes sport-spécifiques'
  },
];
