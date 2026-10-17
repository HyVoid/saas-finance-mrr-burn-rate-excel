[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Modèle Excel de Contrôle Financier Hebdomadaire B2B SaaS, Burn Rate et Écarts de MRR (Analyseur NRR, GRR et BvA)
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/42ffbf57-1f2d-4985-baf0-5556376a1749" />

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
![Platform: Browser + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-2563EB)
![Tool Type: SaaS FP&A & Variance Control](https://img.shields.io/badge/Tool-SaaS%20FP%26A%20%26%20Variance%20Control-0F766E)

**Un classeur de contrôle financier hebdomadaire pour B2B SaaS, un suiveur du rythme de consommation de trésorerie MTD et un analyseur d'écarts en cascade MRR/ARR. Conçu pour les PDG de SaaS soutenus par du capital-risque, les CFO fractionnaires et les analystes FP&A afin d'auditer la Rétention Nette de Revenus (NRR), la Rétention Brute de Revenus (GRR), la conversion de l'entonnoir de vente démo-à-signature et les coûts de paie entièrement chargés avant la clôture comptable de fin de mois—disponible comme simulateur gratuit dans le navigateur (sans inscription) et comme modèle Microsoft Excel téléchargeable.**

> **Accédez aux outils hebdomadaires de FP&A et de contrôle des écarts pour SaaS**
>
> - 🌐 **[Lancez le simulateur gratuit de Burn et d'écarts de MRR pour SaaS dans le navigateur](https://hyvoid.github.io/saas-finance-mrr-burn-rate-excel/)** — Explorez le tableau de bord hebdomadaire des KPI SaaS, testez les alertes de rythme de burn de trésorerie MTD et examinez la mécanique de la cascade MRR en ligne, sans installation ni inscription.
> - 📥 **[Téléchargez le classeur hebdomadaire de contrôle financier SaaS (.xlsx)](https://theseusworkshop.com/l/ilgrvh?utm_source=github&utm_medium=GitHub%20README)** — Obtenez le modèle de tableur complet pour les revues financières récurrentes du lundi, la réconciliation hors ligne de données multi-systèmes (`QuickBooks`, `Stripe`, `Salesforce`, `Gusto`, `Deel`) et le suivi formel de la clôture Budget vs Réel (BvA) de fin de mois.
>



---

## Métriques clés B2B SaaS et angles morts financiers avant clôture résolus

Attendre 15 à 20 jours après la fin du mois que des comptables externes clôturent le grand livre est trop lent pour l'exécution des B2B SaaS soutenues par du capital-risque. Ce moteur d'aide à la décision unifie les signaux hebdomadaires de facturation, de CRM et de paie dans un livre opérationnel auditable. Voici comment le modèle relie les **points de douleur de la gestion financière SaaS** aux **KPI automatisés de FP&A et de rétention** :

| Point de douleur du contrôle financier SaaS | Mécanisme hebdomadaire d'engagement et d'écart | Métriques clés SaaS et FP&A suivies |
| :--- | :--- | :--- |
| **Dépassement du burn de trésorerie en cours de mois** | Compare les dépenses engagées Mois à Date (MTD) au budget mensuel approuvé et au pourcentage de temps calendaire écoulé pour signaler les dépenses excessives en cours de mois. | Burn net de trésorerie MTD ($), objectif mensuel de burn (base de 150 k$), rythme de burn vs mois écoulé (%), écart BvA en dollars/percentages |
| **Mouvements MRR et ARR de premier niveau opaques** | Décompose le revenu récurrent agrégé en un pont MRR à 4 parties pour que les pics d'expansion ne masquent jamais le churn sous-jacent des clients. | MRR Nouveaux Business, MRR Expansion, MRR Contraction (déclassement), MRR Churn, ARR Net Nouveau |
| **Détérioration cachée des cohortes et des logos clients** | Sépare la croissance de revenus portée par l'expansion de l'érosion de la base via des références institutionnelles de rétention distinctes. | Rétention Brute de Revenus (`GRR %`), Rétention Nette de Revenus (`NRR %` vs. cible de 105 %), churn mensuel de logos clients (`%` vs. plafond de 2 %) |
| **Pipeline CRM déconnecté des prévisions de revenus** | Relie l'activité de démos en haut de l'entonnoir aux ARR signés pour déterminer si les manques de revenus proviennent du volume de leads ou de l'exécution commerciale. | Démos réservées, démos réalisées, deals signés, taux de conversion démo-à-signature (`%` vs. référence de 20 %), écart de prévision |
| **Coûts de personnel entièrement chargés non affectés** | Consolide la paie nationale et des contractors EOR avec les cotisations patronales et avantages par département (`R&D`, `S&M`, `G&A`). | Coût de personnel entièrement chargé par département, rapport salaire de base vs charges patronales/avantages |
| **Écarts multi-systèmes sans propriétaire et fuite d'OpEx** | Oriente les écarts significatifs entre systèmes (seuil `>5%`) vers un registre d'exceptions et de réduction de coûts avec responsables. | Signaux de réconciliation multi-systèmes, responsables d'actions désignés, économies OpEx mensuelles projetées ($), statut de mise en œuvre |

---

## Tutoriel pas à pas : comment mener un audit financier et KPI hebdomadaire SaaS

Le classeur établit une **cadence opérationnelle FP&A hebdomadaire le lundi** : configurez une fois vos références SaaS approuvées par le conseil, déposez les exports CSV hebdomadaires de votre stack facturation/CRM/RH, traitez les exceptions signalées et réconciliez avec les réalisations formelles de la clôture mensuelle.

### Étape 1 : Configurer les références SaaS, les objectifs de burn et les seuils d'écart
Ouvrez l'onglet `Settings & Benchmarks` pour établir votre gouvernance de reporting et vos seuils d'alerte :

- **Contrôles de reporting et de liquidité :** Définissez la date de coupure du reporting hebdomadaire, la devise de base, l'objectif mensuel approuvé de burn net (référence par défaut : `$150,000/month`) et le seuil de matérialité d'écart (référence par défaut : `5%`).
- **Cibles institutionnelles de KPI SaaS :** Définissez votre référence cible de **Rétention Nette de Revenus (NRR)** (par défaut : `105%`), le plafond maximal de **Churn mensuel de logos** (par défaut : `2.0%`) et la cible de **Conversion démo-à-signature** (par défaut : `20%`).

*(Remarque : Les paramètres de référence sont des valeurs opérationnelles illustratives. Remplacez-les par les cibles de votre plan opérationnel annuel [AOP] approuvé par le conseil.)*

### Étape 2 : Importer les instantanés hebdomadaires depuis la facturation, la comptabilité, le CRM et la paie
Exportez des tables CSV/XLSX ponctuelles depuis votre stack B2B SaaS existant et collez-les dans les feuilles de saisie standardisées (en conservant les horodatages d'extraction et les dates de coupure) :

- **Comptabilité et facturation des abonnements (`QuickBooks` + `Stripe`) :** Instantanés de dépenses du grand livre, cycles de factures et journaux de mouvements MRR des abonnements.
- **CRM et gestion des contrats (`Salesforce` + `PandaDoc`) :** Démos commerciales réservées/réalisées, prévisions de pipeline et valeurs de contrats signés.
- **SIRH et paie mondiale (`Gusto` + `Deel`) :** Effectifs par département, salaires de base, cotisations patronales, avantages et factures de contractors EOR internationaux.

### Étape 3 : Auditer le tableau de bord exécutif hebdomadaire et la file d'exceptions
Accédez aux vues `Executive Dashboard` et `KPI Variance` pour inspecter la santé opérationnelle avant les points de direction du lundi :

1. **Contrôle du rythme de burn MTD :** Vérifiez si les dépenses mensuelles cumulées dépassent le temps calendaire écoulé (par ex. 60 % du budget consommé à 45 % du mois écoulé).
2. **Audit de la cascade MRR et de la rétention :** Examinez les MRR Nouveau, Expansion, Contraction et Churn aux côtés de `GRR` et `NRR` pour vérifier l'adhérence du produit cœur.
3. **Routage des exceptions et actions de coûts :** Enquêtez sur tout écart multi-systèmes dépassant votre seuil de `5%` avant de considérer les chiffres comme prêts pour la décision, et désignez des responsables départementaux aux initiatives documentées de réduction d'OpEx.

### Étape 4 : Réconcilier avec les réalisations clôturées de fin de mois et opérationnaliser dans Excel
Exécutez les étapes 2–3 chaque semaine. Une fois que votre cabinet comptable externe ou votre contrôleur interne publie la **clôture formelle mensuelle ou trimestrielle GAAP/IFRS**, saisissez les chiffres clôturés dans l'onglet `Reconciliation Workflow` pour mesurer la précision des estimations et resserrer les hypothèses hebdomadaires d'engagement futures.

> 📊 **Prêt à éliminer l'angle mort de 20 jours de fin de mois dans vos opérations SaaS ?** 
> Après avoir exploré la disposition des KPI dans le **[Simulateur gratuit de contrôle financier SaaS dans le navigateur](https://hyvoid.github.io/saas-finance-mrr-burn-rate-excel/)**, téléchargez le **[Classeur Excel réutilisable hebdomadaire de finance et d'écarts SaaS (.xlsx)](https://theseusworkshop.com/l/ilgrvh?utm_source=github&utm_medium=GitHub%20README)** pour connecter vos exports Stripe, QuickBooks, Salesforce et Gusto/Deel en direct, suivre les responsables des économies et tenir un registre hebdomadaire auditable pour le conseil.

---

## Pourquoi j'ai construit ce cadre de contrôle financier hebdomadaire SaaS

Une startup B2B SaaS soutenue par du capital-risque peut recevoir des états financiers mensuels propres vérifiés par un CPA et prendre malgré tout des décisions opérationnelles hebdomadaires catastrophiques.

La cause profonde est la **latence de l'information** : les comptables externes et les équipes comptables clôturent généralement les livres 15 à 25 jours après la fin du mois, alors qu'un PDG de SaaS et son équipe exécutive prennent des engagements d'embauche, de marketing et de fournisseurs chaque lundi. Un solde bancaire brut ignore les passifs engagés ; un graphique de revenus Stripe ignore le burn de trésorerie QuickBooks ; et un rapport de pipeline Salesforce ignore le churn.

### 1. Le piège intra-mois « 45 % du temps écoulé vs 60 % consommé »
Prenons une entreprise SaaS de Série A opérant avec un **objectif mensuel approuvé de burn net de 150 000 $**.

Au jour 14 du mois (**45 % du mois écoulé**), les dépenses MTD s'élèvent à **90 000 $**. Considéré isolément, 90 000 $ reste 60 000 $ sous le plafond mensuel—un suiveur naïf affiche donc le vert. En réalité, l'entreprise a déjà consommé **60 % de son enveloppe mensuelle de burn** avec plus de la moitié du mois restante. En signalant le **rythme de burn par rapport au temps écoulé**, la direction peut geler les dépenses discrétionnaires cloud/marketing ou suspendre les recrutements non critiques *en cours de mois*, plutôt que de découvrir un dépassement budgétaire de 40 000 $ trois semaines après la clôture du mois.

### 2. Le piège de la « croissance nette du MRR » masquant un churn brut élevé
Le même défaut de visibilité se produit dans le revenu récurrent. Le MRR vedette peut croître de 15 000 $ en une semaine parce que deux comptes enterprise ont effectué une mise à niveau (`Expansion MRR`), masquant le fait que dix clients mid-market ont résilié (`Logo Churn` et `Contraction MRR`). Se fier uniquement à l'ARR Net Nouveau masque l'érosion du product-market fit jusqu'à ce que l'expansion inévitablement ralentisse.

J'ai construit cet analyseur comme un **flux de travail FP&A productisé**—reliant l'ingestion de données multi-systèmes, la validation statistique, la décomposition en cascade du MRR, la responsabilisation des actions de coûts et la réconciliation comptable post-clôture dans un modèle répétable.

---

## Clôture comptable mensuelle vs moteur de contrôle financier hebdomadaire SaaS

| Dimension finance et opérations SaaS | Attendre la clôture comptable de fin de mois et des tableaux de bord cloisonnés | Contrôle financier hebdomadaire et analyseur d'écarts SaaS (cet outil) |
| :--- | :--- | :--- |
| **Latence de visibilité financière** | La direction attend 2–3 semaines après la fin du mois pour obtenir des états formels avant de repérer les pics d'OpEx ou l'érosion du runway. | Les estimations opérationnelles hebdomadaires en engagement font émerger des signaux de risque précoces, adossées à la réconciliation de fin de mois avec les réalisations clôturées. |
| **Contrôle du rythme du burn rate de trésorerie** | Les dépenses MTD sont vues comme une somme forfaitaire en dollars sans mesurer la vitesse de consommation par rapport aux jours calendaires écoulés. | Compare le **burn net MTD à la fois à la cible budgétaire de 150 k$ et au % du mois écoulé** pour détecter les dépassements de rythme en cours de mois. |
| **Attribution du revenu récurrent (MRR/ARR)** | Les tableaux de bord de revenus de premier niveau mélangent nouvelles ventes et upsells avec les déclassements, masquant la dégradation sous-jacente des cohortes. | Scinde le revenu récurrent en une **cascade MRR stricte : MRR Nouveaux Business, Expansion, Contraction et Churn**. |
| **Qualité de rétention et churn clients** | La croissance nette du revenu est prise pour la santé du client, négligeant le churn élevé de logos parmi les cohortes cœur. | Suit la **Rétention Brute de Revenus (GRR), la Rétention Nette de Revenus (NRR vs. 105 %) et le churn de logos (vs. plafond de 2 %)** côte à côte. |
| **Audit de l'entonnoir de vente et de la conversion des démos** | Démos réservées, démos réalisées, contrats PandaDoc signés et prévisions de revenus résident dans des vues CRM déconnectées. | Relie **démos réservées $\rightarrow$ démos réalisées $\rightarrow$ deals signés** pour auditer la référence de conversion démo-à-signature de `20%`. |
| **Responsabilisation des écarts multi-systèmes et d'OpEx** | Les écarts entre Stripe, QuickBooks et Gusto/Deel restent inexpliqués, et les engagements de réduction de coûts manquent de suivi. | Impose un **flux de travail d'exception d'écart de 5 %** et assigne à chaque action de réduction de coûts un responsable, une cible en dollars et un statut. |

---

## À qui est destiné ce classeur SaaS FP&A : rôles et flux de travail

Cette trousse de contrôle financier bi-format (Navigateur + Excel) est conçue pour les opérateurs B2B SaaS et les professionnels de la finance gérant des données opérationnelles distribuées :

- **PDG, fondateurs et COO de SaaS soutenus par du capital-risque (Seed à Série B) :** Établissez une source unique de vérité pour les réunions de direction du lundi. Utilisez le **tableau de bord exécutif SaaS hebdomadaire** pour surveiller le rythme de burn de trésorerie, la santé NRR/GRR et la vélocité de l'entonnoir de vente des semaines avant que votre comptable externe ne livre les états financiers de fin de mois.
- **CFO fractionnaires, directeurs financiers et analystes SaaS FP&A :** Standardisez le reporting hebdomadaire multi-clients ou interne sans payer plus de 30 000 $/an pour un logiciel FP&A d'entreprise. Utilisez le **modèle Excel d'écart budget vs réel (BvA) SaaS** pour réconcilier les estimations opérationnelles hebdomadaires avec les réalisations comptables clôturées GAAP/IFRS.
- **VP Sales, responsables RevOps et Customer Success :** Alignez l'exécution GTM sur les cibles financières. Utilisez le **suiveur de pont MRR et de conversion d'entonnoir** pour séparer le glissement des démos en haut d'entonnoir (`Booked vs. Completed Demos`) des problèmes de rétention en aval (`Contraction vs. Logo Churn`).
- **Responsables budgétaires Ingénierie, Produit et départements :** Obtenez une visibilité claire sur les **coûts de personnel entièrement chargés** (combinant paie nationale et contractors EOR internationaux) et suivez les initiatives assignées de réduction d'OpEx de la proposition aux économies mensuelles réalisées.
- **Investisseurs SaaS, partenaires opérationnels et conseillers du conseil :** Déployez un **modèle de reporting de portefeuille** léger et répétable dans les sociétés du portefeuille en amorçage pour inculquer la discipline financière et auditer les hypothèses de runway de trésorerie.

---

## Cas d'usage sectoriels et scénarios SaaS de longue traîne

Que vous exploitiez une entreprise logicielle en product-led growth (PLG) ou une plateforme B2B SaaS enterprise en vente directe, ce classeur résout les défis de reporting multi-systèmes à forte friction :

### 1. Réconcilier le stack B2B SaaS moderne (QuickBooks + Stripe + Salesforce + PandaDoc + Gusto + Deel)
Les entreprises SaaS en amorçage fonctionnent rarement sur un ERP monolithique unique. La facturation vit dans **Stripe**, la comptabilité dans **QuickBooks**, le pipeline dans **Salesforce**, les bons de commande signés dans **PandaDoc**, la paie américaine tourne sur **Gusto** et les contractors mondiaux passent par **Deel**. Ce classeur fournit des tables de saisie standardisées pour joindre ces six flux de données exacts en une vue hebdomadaire cohérente de P&L et de KPI—en signalant les enregistrements non mappés ou les écarts multi-systèmes (`>5%`) avant qu'ils ne corrompent les décisions exécutives.

### 2. Préservation de trésorerie en cours de mois et suivi de la réduction d'OpEx
Dans le cadre d'initiatives d'extension de runway ou de réductions de burn imposées par le conseil, couper des dépenses sur le papier est facile—les réaliser en trésorerie est difficile. Le **Registre des actions de réduction de coûts** intégré oblige chaque économie proposée (par ex. rightsizing d'infrastructure cloud, consolidation de licences SaaS, report d'embauches) à porter un responsable de département nommé, un impact mensuel estimé en dollars et un statut d'exécution (`Proposed`, `In Progress`, `Realized`).

### 3. Relier les estimations flash hebdomadaires aux clôtures comptables externalisées de fin de mois
La plupart des startups Seed et Série A s'appuient sur des cabinets de tenue de livres externalisés qui clôturent avec un décalage de 15 à 30 jours. En associant les **estimations opérationnelles flash hebdomadaires** à un **flux de réconciliation post-clôture des réalisations**, les équipes financières peuvent mesurer où les engagements hebdomadaires ont dévié des états comptables formels—améliorant continuellement la précision des estimations au fil du temps.

---

### Périmètre opérationnel et avertissement de gouvernance
*Cet outil est un modèle hebdomadaire d'aide à la décision opérationnelle et un analyseur d'écarts FP&A—non un grand livre (GL) légal, ni un pipeline ETL automatisé, ni un moteur de reconnaissance de revenus GAAP/IFRS, ni un remplacement d'ERP d'entreprise. Il s'appuie sur des instantanés périodiques CSV/feuilles exportés des systèmes sources et exige que les utilisateurs vérifient les mappages de champs, les horodatages de coupure et les hypothèses d'engagement. Les indicateurs calculés doivent passer la revue d'exceptions avant de motiver des engagements financiers contraignants.*

---

## À propos du créateur

Je construis des outils opérationnels d'aide à la décision, légers et inspectables, pour des flux de travail professionnels à forts enjeux où les signaux critiques se perdent entre plateformes SaaS et feuilles de calcul déconnectées. La question d'ingénierie centrale est simple : **quelles métriques financières, de revenus et opérationnelles exactes doivent se trouver au même endroit le lundi matin pour prendre la prochaine décision de gestion en toute confiance ?**

## Détails techniques

<details>
<summary>Pour les relecteurs techniques, les praticiens Excel et les collaborateurs</summary>

### Architecture du classeur

Le classeur suit un flux de données contrôlé :

**Configuration → Saisies standardisées → Calcul et réconciliation → Analyse KPI → Tableau de bord exécutif et actions correctives → Calibration sur les réalisations clôturées.**

La conception de référence contient sept feuilles de calcul.

| Feuille de calcul | Responsabilité | Sorties principales |
|---|---|---|
| `01_Executive_Dashboard` | Vue de décision exécutive | Statut de burn, ARR, MRR, rétention, préparation des données, exceptions significatives et actions de coûts |
| `02_Settings_Params` | Configuration centrale | Date de reporting, devise, objectif de burn, seuil d'écart, références de performance et dictionnaires de dimensions |
| `03_Weekly_Data_Input` | Ingestion des données sources | Quatre tables de saisie standardisées pour finances, mouvements MRR, activité commerciale et effectifs |
| `04_Calculation_Engine` | Calcul et réconciliation | Burn, MRR, ARR, rétention, métriques d'entonnoir, rémunération par département et signaux d'exception |
| `05_KPI_Analysis` | Analyse opérationnelle | Cinq vues analytiques couvrant finances, revenu récurrent, rétention, ventes et coûts de personnel |
| `06_Exceptions_CostActions` | Gouvernance des exceptions | Explications des écarts, statut de revue, responsables de réduction de coûts, économies attendues et statut des actions |
| `07_Estimate_vs_Actual` | Calibration post-clôture | Revenus, dépenses et burn net estimés vs clôturés, et précision historique des estimations |

#### Tables de saisie

Les quatre tables de saisie principales sont :

- `Table_Inp_Finance` : `Report_Week_Ending`, `Source_System_Name`, `Batch_Timestamp`, `GL_Category`, `Accrual_Rev_Est` et `Accrual_Exp_Est`.
- `Table_Inp_Waterfall` : `Customer_ID`, `Contract_Start_Date`, `Starting_MRR`, `New_MRR_Amount`, `Expansion_MRR_Amount`, `Contraction_MRR_Amount` et `Churn_MRR_Amount`, ainsi que les métadonnées de période de reporting et de source.
- `Table_Inp_Sales` : `Demos_Booked_Count`, `Demos_Held_Count`, `Closed_Won_Count` et `Forecast_Pipeline_Val`, ainsi que les métadonnées de période de reporting et de source.
- `Table_Inp_Headcount` : `Employee_ID`, `Department_Name`, `Hire_Date`, `Termination_Date`, `Base_Salary_Paid` et `Taxes_Benefits_Paid`, ainsi que les métadonnées de période de reporting et de source.

La conception référence également `Table_Exceptions_Log`, `Table_Cost_Actions` et une table de réconciliation nommée `Table_Reconcile`.

Les Tables Excel sont utilisées afin que les enregistrements récemment ajoutés soient inclus dans les calculs par références structurées sans copier manuellement les formules dans chaque colonne.

#### Flux de données et frontières de contrôle

| Étape | Entrée ou dépendance | Contrôle requis |
|---|---|---|
| Configuration | Date de reporting, devise, cibles, seuils | Paramètres centralisés et valeurs de dimensions validées |
| Ingestion de données | Exports périodiques des systèmes sources | Identité de la source, horodatage d'extraction, coupure de reporting cohérente |
| Calcul | Tables standardisées et paramètres nommés | Alignement des périodes, contrôles arithmétiques, ratios protégés, réconciliation inter-sources |
| Analyse | Métriques opérationnelles calculées | Comparaisons réel-cible et signaux d'exception explicites |
| Gestion des actions | Exceptions et décisions de gestion | Explications écrites, responsables nommés, économies estimées, statut d'exécution |
| Calibration | Résultats financiers clôturés officiels | Comparaison alignée sur les périodes avec les estimations antérieures et ajustements documentés |

Le tableau de bord exécutif est une couche de présentation, non une surface de saisie. Le moteur de calcul doit être protégé et masqué en usage courant. Configuration, saisies brutes, sorties analytiques et actions de gestion restent séparées afin qu'un relecteur puisse distinguer ce qui a été importé, ce qui a été calculé et ce qui a été décidé.

### Trois pièges qui prennent même les équipes financières SaaS expérimentées

#### Piège 1 : Traiter le burn du mois en cours comme un chiffre statique

**Décision :** Continuer à dépenser au rythme actuel parce que le burn MTD reste sous la limite mensuelle.

**Hypothèse fautive :** Être sous le budget mensuel signifie que les dépenses sont sous contrôle.

Supposons que l'objectif mensuel de burn net soit de 150 000 $. À 45 % du mois écoulé, le burn net estimé a déjà atteint 90 000 $.

| Mesure | Valeur |
|---|---:|
| Objectif mensuel de burn | $150,000 |
| Progression du mois écoulé | 45% |
| Burn net estimé MTD | $90,000 |
| Budget consommé | 60% |
| Progression du burn moins progression du temps | +15 points de pourcentage |

L'estimation a consommé 60 % de l'enveloppe mensuelle alors que seulement 45 % du mois s'est écoulé.

L'erreur consiste à confondre le **budget restant** avec la **trajectoire de dépense**. L'entreprise n'a pas nécessairement dépassé son objectif mensuel, mais elle consomme l'enveloppe plus vite que le calendrier n'avance.

**Approche corrigée :** Examiner à la fois l'écart budgétaire absolu et la progression du burn par rapport à la progression du mois écoulé. Enquêter sur les dépenses inhabituelles, les engagements d'embauche, l'usage d'infrastructure et les autres changements de dépenses significatifs avant de décider d'intervenir.

<details>
<summary>Référence des formules : trajectoire de burn et écart budgétaire</summary>

```excel
=MTD_Cumulative_Burn / Param_Burn_Target
```

```excel
=MTD_Cumulative_Burn - Param_Burn_Target
```

```excel
=(MTD_Cumulative_Burn / Param_Burn_Target)
 - Param_Month_Progress_Pct
```

Interprétation :

- Un écart budgétaire positif indique un burn supérieur à la cible.
- Un écart de trajectoire positif indique que la proportion de budget consommée dépasse la proportion configurée de mois écoulé.
- La comparaison de trajectoire est un signal d'alerte précoce, non une prévision de trésorerie complète. Elle suppose que le pourcentage de progression configuré constitue une base de comparaison raisonnable.

</details>

#### Piège 2 : Confondre la croissance du MRR avec une rétention saine

**Décision :** Rapporter une bonne santé client parce que le MRR final est supérieur au MRR initial.

**Hypothèse fautive :** La croissance nette du revenu récurrent signifie que la base de clients existante est stable.

Considérons une période de reporting illustrative avec les mouvements suivants :

| Composante MRR | Montant |
|---|---:|
| MRR initial | $100,000 |
| MRR nouveau | $12,000 |
| MRR expansion | $8,000 |
| MRR contraction | $5,000 |
| MRR churn | $10,000 |
| MRR final | $105,000 |

Le MRR final augmente de 5 000 $, soit 5 %. Cela paraît positif vu isolément.

Cependant, la contraction et le churn retirent ensemble 15 000 $ de la base initiale. La rétention brute de revenus qui en résulte est de 85 %, tandis que la rétention nette de revenus est de 93 % selon les hypothèses de mouvement ci-dessus.

La distinction importe car l'acquisition de nouveaux clients peut compenser les pertes sans réparer le problème de rétention sous-jacent.

**Approche corrigée :** Examiner le GRR et le NRR aux côtés de la cascade MRR. Le GRR isole la contraction et le churn dans la base de clients initiale. Le NRR prend en compte en outre l'expansion au sein de cette base. Le MRR nouveau doit être rapporté séparément plutôt que d'être utilisé pour masquer la détérioration de la rétention.

<details>
<summary>Référence des formules : cascade MRR et rétention</summary>

```excel
Ending_MRR =
    Starting_MRR
    + New_MRR_Amount
    + Expansion_MRR_Amount
    - Contraction_MRR_Amount
    - Churn_MRR_Amount
```

```excel
GRR =
    (Starting_MRR - Contraction_MRR_Amount - Churn_MRR_Amount)
    / Starting_MRR
```

```excel
NRR =
    (Starting_MRR + Expansion_MRR_Amount
     - Contraction_MRR_Amount - Churn_MRR_Amount)
    / Starting_MRR
```

Pour l'exemple illustratif :

- GRR = ($100,000 − $5,000 − $10,000) / $100,000 = 85%.
- NRR = ($100,000 + $8,000 − $5,000 − $10,000) / $100,000 = 93%.

Ce sont des illustrations simplifiées au niveau de la période. La mise en œuvre doit définir des cohortes de clients cohérentes, le calendrier des mouvements et les périodes de reporting avant d'utiliser ces taux pour un reporting de performance formel.

</details>

#### Piège 3 : Traiter un écart multi-systèmes comme une simple différence de reporting

**Décision :** Accepter un chiffre de revenus rapporté parce qu'il paraît plausible et que le tableau de bord calcule sans erreur.

**Hypothèse fautive :** Un calcul réussi prouve que les données sources concordent.

Supposons que le système de facturation rapporte 100 000 $ tandis que l'estimation comptable rapporte 94 000 $ pour la même base de comparaison. La différence est de 6 000 $, soit environ 6,38 % du montant de comparaison de 94 000 $.

Cet écart dépasse un seuil de 5 %. Il peut refléter du calendrier, des remboursements, de la classification, des imports incomplets, des enregistrements en double ou un mappage incorrect. Le pourcentage seul n'établit pas la cause.

**Approche corrigée :** Confirmer que les deux chiffres couvrent la même période de reporting, la même devise, la même population de transactions et la même base comptable. Puis documenter l'explication, réviser le résultat et escalader les différences non résolues avant que les chiffres ne servent aux décisions de gestion.

<details>
<summary>Référence des formules : écart inter-sources</summary>

```excel
=IFERROR(
    ABS([@Primary_Amount]-[@Crosscheck_Amount])
    / ABS([@Crosscheck_Amount]),
    0
)
```

```excel
=IF(
    [@Variance_Pct] > Param_Variance_Threshold,
    "FLAGGED",
    "PASS"
)
```

Le dénominateur de comparaison doit être défini de manière cohérente. Si le montant de contre-vérification est nul ou manquant, le résultat ne devrait pas devenir silencieusement un écart nul vérifié. Les mises en œuvre en production devraient distinguer les cas de dénominateur nul et de référence manquante d'un véritable passage.

</details>

### Scénario d'exemple

L'exemple résolu suivant illustre comment une revue de gestion hebdomadaire peut combiner les métriques de référence. Les chiffres sont illustratifs, non des résultats d'entreprise.

Supposons qu'une entreprise B2B SaaS servant des agences d'assurance ait un objectif mensuel de burn net de 150 000 $. À la coupure de reporting, le classeur montre :

| Indicateur | Résultat illustratif | Interprétation initiale |
|---|---:|---|
| Burn net du mois en cours | $90,000 | 60 % de l'objectif mensuel consommé |
| Progression du mois écoulé | 45% | Le burn court devant le temps écoulé |
| MRR initial | $100,000 | Base récurrente de référence |
| MRR nouveau | $12,000 | Contribution des nouveaux clients |
| MRR expansion | $8,000 | Croissance des clients existants |
| MRR contraction | $5,000 | Perte liée au déclassement |
| MRR churn | $10,000 | Revenu récurrent perdu |
| MRR final | $105,000 | Augmentation nette de $5,000 |
| GRR | 85% | Contraction et churn significatifs |
| NRR | 93% | Le revenu des clients existants a baissé net de l'expansion |
| Démos réservées | 100 | Volume d'entrée de l'entonnoir |
| Démos réalisées | 70 | Taux de réalisation de 70 % |
| Clients signés | 14 | Taux réalisation-à-signature de 20 % |

La première question de gestion est de savoir si la trajectoire de burn actuelle est cohérente avec le plan de dépenses approuvé. La deuxième est de savoir si l'augmentation du MRR est soutenue par une rétention saine ou dépend fortement des nouveaux business. La troisième est de savoir si l'entonnoir de vente convertit suffisamment de démonstrations réalisées en clients pour soutenir la croissance future.

Ces métriques n'établissent pas automatiquement une cause. Elles identifient où la direction doit enquêter. L'analyste doit valider les instantanés sources, vérifier les écarts significatifs et déterminer si les changements observés reflètent le calendrier, la performance opérationnelle ou des problèmes de qualité de données.

La décision qui en résulte peut impliquer une revue ciblée des dépenses, une enquête sur la rétention client, une revue de la conversion commerciale ou une combinaison de ces actions. Chaque problème significatif doit avoir un responsable et un suivi documenté plutôt que de s'achever en une observation de tableau de bord.

### Référence des formules

Les formules ci-dessous représentent les calculs principaux de la conception de référence. Elles supposent que les paramètres nommés et les tables structurées ont été créés, que la période de reporting est cohérente et que les données sources ont passé les contrôles pertinents.

<details>
<summary>Calculs financiers : burn net hebdomadaire et du mois en cours</summary>

**Objectif :** Estimer la position de burn opérationnelle avant la clôture comptable formelle.

Burn net de la période de reporting en cours :

```excel
=LET(
    current_rev,
        SUMIFS(
            Table_Inp_Finance[Accrual_Rev_Est],
            Table_Inp_Finance[Report_Week_Ending],
            Param_Report_Date
        ),
    current_exp,
        SUMIFS(
            Table_Inp_Finance[Accrual_Exp_Est],
            Table_Inp_Finance[Report_Week_Ending],
            Param_Report_Date
        ),
    current_exp-current_rev
)
```

Burn net du mois en cours :

```excel
=LET(
    month_start,
        EOMONTH(Param_Report_Date,-1)+1,
    mtd_rev,
        SUMIFS(
            Table_Inp_Finance[Accrual_Rev_Est],
            Table_Inp_Finance[Report_Week_Ending],">="&month_start,
            Table_Inp_Finance[Report_Week_Ending],"<="&Param_Report_Date
        ),
    mtd_exp,
        SUMIFS(
            Table_Inp_Finance[Accrual_Exp_Est],
            Table_Inp_Finance[Report_Week_Ending],">="&month_start,
            Table_Inp_Finance[Report_Week_Ending],"<="&Param_Report_Date
        ),
    mtd_exp-mtd_rev
)
```

**Note de mise en œuvre :** L'expression du mois en cours suppose que chaque montant de période de reporting inclus représente un montant additif pour cette période. Si les exports sources contiennent des instantanés cumulatifs, ils doivent être transformés ou dédupliqués avant agrégation pour éviter le double comptage.

</details>

<details>
<summary>Revenu récurrent : MRR final et ARR</summary>

**Objectif :** Réconcilier les mouvements de revenu récurrent et dériver un indicateur de run-rate annualisé.

```excel
=LET(
    start_mrr,
        SUMIFS(
            Table_Inp_Waterfall[Starting_MRR],
            Table_Inp_Waterfall[Report_Week_Ending],
            Param_Report_Date
        ),
    new_mrr,
        SUMIFS(
            Table_Inp_Waterfall[New_MRR_Amount],
            Table_Inp_Waterfall[Report_Week_Ending],
            Param_Report_Date
        ),
    exp_mrr,
        SUMIFS(
            Table_Inp_Waterfall[Expansion_MRR_Amount],
            Table_Inp_Waterfall[Report_Week_Ending],
            Param_Report_Date
        ),
    con_mrr,
        SUMIFS(
            Table_Inp_Waterfall[Contraction_MRR_Amount],
            Table_Inp_Waterfall[Report_Week_Ending],
            Param_Report_Date
        ),
    churn_mrr,
        SUMIFS(
            Table_Inp_Waterfall[Churn_MRR_Amount],
            Table_Inp_Waterfall[Report_Week_Ending],
            Param_Report_Date
        ),
    start_mrr+new_mrr+exp_mrr-con_mrr-churn_mrr
)
```

```excel
=Ending_MRR*12
```

L'ARR ici est un run rate de MRR annualisé, non un revenu annuel reconnu ni une prévision de revenus.

</details>

<details>
<summary>Rétention et churn clients</summary>

**Objectif :** Séparer la rétention de revenus de l'attrition du nombre de clients.

```excel
=IF(
    Starting_MRR=0,
    NA(),
    (Starting_MRR+Expansion_MRR_Amount
     -Contraction_MRR_Amount-Churn_MRR_Amount)
    /Starting_MRR
)
```

```excel
=IF(
    Starting_MRR=0,
    NA(),
    (Starting_MRR-Contraction_MRR_Amount-Churn_MRR_Amount)
    /Starting_MRR
)
```

```excel
=IF(
    Opening_Customer_Count=0,
    NA(),
    Churned_Customer_Count/Opening_Customer_Count
)
```

La conception de référence utilise parfois zéro comme repli lorsqu'un dénominateur est nul. Pour un rapport de gestion, un état explicite d'indisponibilité est généralement plus sûr car zéro peut être pris pour un résultat mesuré. Le classeur de production devrait appliquer une politique cohérente et l'afficher clairement.

</details>

<details>
<summary>Entonnoir de vente et écart de prévision</summary>

**Objectif :** Identifier la perte de conversion entre la réservation de démonstrations, la présence et les résultats signés.

```excel
=IF(
    Demos_Booked_Count=0,
    NA(),
    Demos_Held_Count/Demos_Booked_Count
)
```

```excel
=IF(
    Demos_Held_Count=0,
    NA(),
    Closed_Won_Count/Demos_Held_Count
)
```

```excel
=IF(
    Forecast_Pipeline_Val=0,
    NA(),
    (Closed_Won_Count-Forecast_Pipeline_Val)
    /Forecast_Pipeline_Val
)
```

L'expression finale n'est appropriée que si le champ de prévision et le champ de réel utilisent la même unité. Si la prévision représente une valeur de pipeline monétaire mais que les réels représentent des comptages de clients, ils ne doivent pas être comparés directement. La conception source doit trancher si `Forecast_Pipeline_Val` représente des gains attendus ou une valeur monétaire avant la mise en œuvre.

</details>

<details>
<summary>Coûts de personnel et analyse par département</summary>

**Objectif :** Agréger salaires et coûts patronaux par département, puis calculer la part du département dans la rémunération totale.

```excel
=SUMIFS(
    Table_Inp_Headcount[Base_Salary_Paid],
    Table_Inp_Headcount[Department_Name],
    [@Department_Name],
    Table_Inp_Headcount[Report_Week_Ending],
    Param_Report_Date
)
+
SUMIFS(
    Table_Inp_Headcount[Taxes_Benefits_Paid],
    Table_Inp_Headcount[Department_Name],
    [@Department_Name],
    Table_Inp_Headcount[Report_Week_Ending],
    Param_Report_Date
)
```

Liste dynamique des départements :

```excel
=SORT(
    UNIQUE(
        FILTER(
            Table_Inp_Headcount[Department_Name],
            Table_Inp_Headcount[Department_Name]<>""
        )
    )
)
```

Part de rémunération du département :

```excel
=IF(
    Total_Compensation=0,
    NA(),
    Department_Total_Comp/Total_Compensation
)
```

Le coût de rémunération et les effectifs doivent utiliser des définitions de période compatibles. Diviser un montant de paie de période partielle par un effectif ponctuel peut produire une moyenne trompeuse si la base de reporting n'est pas documentée.

</details>

<details>
<summary>Listes dynamiques d'exceptions et synthèses des actions de coûts</summary>

**Objectif :** Maintenir visibles les écarts significatifs et les actions de coûts non résolues sans filtrer manuellement à chaque cycle de reporting.

Filtrer les enregistrements au-dessus du seuil configuré :

```excel
=FILTER(
    Table_Exceptions_Log,
    Table_Exceptions_Log[Variance_Pct]>Param_Variance_Threshold,
    "No material exceptions"
)
```

Synthétiser les économies mensuelles estimées des actions pas encore marquées comme réalisées :

```excel
=SUMIFS(
    Table_Cost_Actions[Monthly_Savings_Est],
    Table_Cost_Actions[Action_Status],
    "<>Realized"
)
```

Le total des économies est une estimation de pipeline, non des économies réalisées. Les rapports doivent distinguer les actions proposées, approuvées, en cours et réalisées, et éviter de traiter une estimation non vérifiée comme un bénéfice de trésorerie confirmé.

</details>

### Règles de validation

Le classeur n'est fiable que par les données et définitions qui l'alimentent. Les contrôles suivants décrivent le comportement de production attendu.

| Champ ou contrôle | Règle de validation | Comportement d'erreur attendu |
|---|---|---|
| Date de coupure de reporting | Utiliser une date valide cohérente avec la période de reporting visée | Signaler les périodes manquantes ou non concordantes |
| Système source | Sélectionner un nom de système source reconnu | Rejeter ou signaler les valeurs non mappées |
| Horodatage d'extraction | Conserver l'heure d'extraction de l'instantané source | Signaler les métadonnées de traçabilité manquantes |
| Devise et montants | Utiliser une devise et une représentation numérique cohérentes dans chaque comparaison | Signaler les devises incompatibles ou valeurs mal formées |
| Enregistrements financiers | Distinguer l'activité de période des instantanés cumulatifs | Empêcher l'agrégation dupliquée de périodes |
| Mouvements MRR | Saisir contraction et churn comme magnitudes de perte non négatives selon la convention documentée | Signaler les mouvements négatifs ou incohérents |
| Réconciliation MRR | Contrôler le MRR initial plus nouveau et expansion moins contraction et churn contre le MRR final | Signaler les différences de réconciliation inexpliquées |
| Ratios de rétention | Exiger un dénominateur de MRR initial valide et positif | Afficher indisponible plutôt que sous-entendre un zéro vérifié |
| Entonnoir de vente | Les démonstrations réalisées ne doivent pas dépasser les réservations pour des cohortes comparables ; les comptages signés exigent une base d'attribution cohérente | Signaler les comptages impossibles et les périodes incohérentes |
| Comparaison de prévisions | Prévision et réel doivent utiliser la même unité et la même base de mesure | Bloquer ou signaler les comparaisons incompatibles |
| Enregistrements employés | Valider les identifiants, mappages de départements, dates d'embauche et de fin | Signaler les identités en double et les dates de cycle de vie invalides |
| Rémunération | Valider les montants numériques, l'alignement des périodes et la devise cohérente | Signaler les données de coûts manquantes ou incohérentes |
| Écart inter-sources | Comparer des périodes, populations et bases de mesure équivalentes | Orienter les différences significatives vers une explication |
| Seuil d'écart | Référencer le seuil configuré plutôt que d'incruster un pourcentage fixe dans les formules | Recalculer les signaux dépendants quand le paramètre change |
| Propriété des actions de coûts | Exiger un responsable nommé et un statut documenté pour les actions suivies | Signaler les enregistrements d'action incomplets |
| Rapport d'économies | Séparer les économies attendues des réalisées | Empêcher que des estimations de pipeline soient rapportées comme résultats confirmés |
| Réconciliation aux réels clôturés | Comparer les résultats officiels aux estimations pour la même période et la même base comptable | Enregistrer les différences absolues et relatives pour revue |
| Tableaux dynamiques | Garder les plages de débordement dégagées et préserver la structure de table attendue | Résoudre les conditions `#SPILL!` avant de se fier aux sorties concernées |
| Traçabilité des sources | Conserver l'identité de la source, la période de reporting et l'horodatage de lot | Traiter la traçabilité manquante comme une exception de revue |

</details>

## Logique métier et méthodologie

L'outil est construit autour d'un principe de gestion pratique : **la surveillance financière n'est utile que lorsqu'elle change ce que la direction peut voir, examiner et sur quoi agir avant la prochaine clôture comptable formelle.**

Plutôt que de traiter la finance, la rétention client, les ventes et les coûts de personnel comme des fonctions de reporting isolées, le cadre les relie en un processus de décision récurrent. Chaque méthode adresse un échec spécifique dans la façon dont l'information opérationnelle est communément examinée.

- **Surveillance financière fondée sur les périodes :** Les estimations hebdomadaires en engagement offrent une vue plus précoce du burn net qu'une clôture de fin de mois retardée. Comparer le montant consommé à la fois à l'objectif mensuel et à la progression du mois écoulé aide à distinguer un solde gérable d'une trajectoire de dépense insoutenable.

- **Analyse des mouvements de revenu récurrent :** Séparer nouveaux business, expansion, contraction et churn empêche la croissance nette du MRR de masquer la détérioration parmi les clients existants. La direction peut distinguer la performance d'acquisition de la qualité de rétention et prioriser l'action corrective pertinente.

- **Diagnostics de conversion et de rétention :** GRR, NRR, churn de logos, présence aux démonstrations et conversion réalisation-à-signature mesurent différentes étapes de la performance de l'activité. Ensemble, elles aident à déterminer si une faiblesse se concentre sur la rétention client, la qualité des leads, l'exécution commerciale ou la base de clients sous-jacente.

- **Gestion des exceptions par seuils :** Les différences significatives entre enregistrements sources comparables sont signalées pour investigation. Le seuil est un déclencheur de revue, non une preuve d'erreur. Les explications écrites et le statut d'approbation rendent les écarts non résolus visibles au lieu de les laisser disparaître dans des totaux agrégés.

- **Propriété des actions et calibration post-clôture :** Les propositions de réduction de coûts reçoivent des responsables, des échéances, des économies estimées et des états d'exécution. Une fois les résultats financiers officiels disponibles, les estimations antérieures sont comparées aux réels clôturés afin que les erreurs d'estimation récurrentes puissent être identifiées et le reporting futur amélioré.

Le flux de travail qui en résulte relie la preuve opérationnelle à une décision, la décision à une action responsabilisée et l'action à une revue ultérieure. Il n'élimine pas l'incertitude ni ne remplace le jugement professionnel. Il crée un moyen répétable de gérer l'incertitude avant que l'information retardée ne devienne un passif opérationnel.

## Procédure d'exploitation

Le calendrier opérationnel de référence est conçu pour livrer la revue de gestion d'ici la fin de journée du lundi, heure de l'Est.

| Échéance cible | Activité | Rôle responsable | Preuve d'achèvement |
|---|---|---|---|
| Lundi, 10h00 | Mettre à jour la date de coupure de reporting et les hypothèses de progression du mois | Analyste financier | Période de reporting correcte et paramètres approuvés |
| Lundi, 11h30 | Importer les instantanés financiers, clients, ventes et paie | Analyste financier ou opérateur de données | Enregistrements sources ajoutés avec dates et métadonnées appropriées |
| Lundi, 14h00 | Vérifier la préparation des modules et enquêter sur les écarts significatifs | Analyste financier | Entrées manquantes résolues et écarts majeurs expliqués |
| Lundi, 16h30 | Réviser les KPI et mettre à jour les actions de réduction de coûts | Analyste financier et responsables de départements | Responsables, estimations d'économies, échéances et statuts enregistrés |
| Lundi, 18h00 | Réviser et diffuser le tableau de bord exécutif | PDG, directeur financier ou propriétaire de reporting désigné | Vue de gestion finale partagée ou exportée |

Ces échéances sont des cibles opérationnelles de référence, non des garanties d'ordonnancement automatisées. Les organisations doivent les adapter à la disponibilité des systèmes sources, aux exigences d'approbation internes et au calendrier réel de reporting.

### Rôles et responsabilités

- **Analyste financier :** Maintient les paramètres de reporting, importe les instantanés de données, enquête sur les écarts, documente les explications d'écarts et enregistre les réels clôturés officiels.
- **Responsables de départements :** Révisent les KPI pertinents, expliquent les changements significatifs et assument les actions approuvées de réduction de coûts.
- **PDG et comité exécutif :** Révisent la position de burn, challengent les exceptions significatives et décident quelles actions correctives nécessitent une intervention.
- **Équipe comptable externe :** Fournit les résultats mensuels ou trimestriels officiels utilisés pour calibrer les estimations opérationnelles antérieures.

### Maintenance des données

- Saisissez les enregistrements sources uniquement dans les tables de saisie désignées.
- Conservez les dates de reporting, les identifiants de source et les horodatages d'extraction.
- Ajoutez les enregistrements à la fin de la Table Excel concernée afin que les références structurées s'étendent normalement.
- Mettez à jour les dictionnaires de dimensions avant d'introduire de nouveaux systèmes sources ou noms de départements.
- Évitez de modifier manuellement les cellules de calcul protégées, les en-têtes de table, les plages nommées ou les zones de débordement des tableaux dynamiques.
- Réconciliez les estimations avec les résultats financiers officiels en utilisant des périodes de reporting et des définitions comptables cohérentes.

## Compatibilité et limites d'exploitation

| Domaine | Exigence de référence | Considération opérationnelle |
|---|---|---|
| Version d'Excel | Microsoft 365 recommandé ; Excel 2021 ou ultérieur comme minimum de référence | Les fonctions de tableaux dynamiques telles que `LET`, `FILTER`, `UNIQUE`, `SORT`, `HSTACK` et `VSTACK` peuvent ne pas fonctionner dans les versions antérieures d'Excel. Confirmez la disponibilité des fonctions dans l'environnement cible. |
| Volume de données | Limite recommandée d'environ 50 000 lignes par table de saisie | Les tables plus volumineuses peuvent augmenter la latence de calcul. La conception de référence recommande d'archiver les enregistrements historiques clôturés quand les volumes croissent substantiellement. |
| Collaboration | OneDrive for Business ou SharePoint | Préservez les noms de table, en-têtes, plages nommées et structures de calcul lors de l'édition collaborative. |
| Google Sheets | La migration est possible avec adaptation des formules | Les références structurées Excel telles que `Table[Field]` doivent être traduites. Le comportement des formules et des tableaux dynamiques doit être retesté après migration. |
| Intégration des sources | Instantanés périodiques des systèmes métier existants | La synchronisation directe par API n'est pas établie par la conception de ce classeur. Les données importées exigent un mappage de source et une validation. |

La version navigateur et la version Excel sont des formats de livraison distincts. La disponibilité d'une application HTML publiée, d'une démo en direct, d'un classeur téléchargeable ou d'une page d'achat dépend des liens réels de déploiement et de distribution configurés par le propriétaire du projet.

## Dépannage

<details>
<summary>Les tableaux dynamiques renvoient #SPILL!</summary>

**Cause probable :** Des valeurs existantes, des cellules fusionnées ou d'autres obstructions occupent la plage de débordement attendue.

**Résolution :**

1. Sélectionnez la cellule contenant l'erreur.
2. Inspectez la plage de débordement indiquée par Excel.
3. Supprimez le contenu involontaire ou résolvez les conflits de cellules fusionnées dans cette plage.
4. Recalculez et confirmez que le tableau résultant couvre la zone attendue.

N'effacez pas les cellules de calcul de manière indiscriminée. Vérifiez que tout contenu supprimé n'est pas une entrée requise ou une formule.

</details>

<details>
<summary>Les nouvelles données ne changent pas le tableau de bord</summary>

**Causes probables :** La date de coupure de reporting n'a pas été mise à jour, les enregistrements importés utilisent des dates incohérentes, les données ont été collées hors de la table prévue ou le calcul d'Excel est réglé sur manuel.

**Résolution :**

1. Vérifiez la date de reporting dans `02_Settings_Params`.
2. Confirmez que les enregistrements récemment importés appartiennent à cette période de reporting.
3. Vérifiez que les lignes sont dans la Table Excel concernée.
4. Vérifiez le mode de calcul d'Excel et recalculez si nécessaire.
5. Confirmez que les métriques du tableau de bord concernées référencent la table de saisie et la période attendues.

</details>

<details>
<summary>Changer le seuil d'écart n'a pas l'effet attendu</summary>

**Cause probable :** Le pourcentage a été saisi avec la mauvaise échelle, ou la formule concernée ne référence pas le paramètre nommé prévu.

Par exemple, 8 % doit être saisi comme `8%` ou `0.08`, pas `8`.

**Résolution :** Vérifiez la valeur du paramètre stocké, la plage nommée `Param_Variance_Threshold` et les formules qui pilotent les signaux d'exception. Confirmez que la comparaison utilise le seuil prévu de manière cohérente.

</details>

<details>
<summary>Les symboles de devise sont incorrects</summary>

**Cause probable :** Le paramètre global d'affichage de devise n'a pas été mis à jour, ou certaines cellules de sortie utilisent un format de devise fixe.

**Résolution :** Mettez à jour `Param_Currency_Symbol` dans la zone de configuration et inspectez les formules d'affichage et formats de nombre concernés.

**Important :** Changer un symbole de devise ne convertit pas les montants entre devises. Une véritable conversion de devise exige des données de taux de change et une méthodologie de conversion explicite.

</details>

<details>
<summary>Les formules renvoient #N/A, #VALUE! ou des valeurs zéro inattendues</summary>

**Causes probables :** Correspondances sources manquantes, texte dans des colonnes numériques, identifiants incohérents, dates invalides ou dénominateurs nuls.

**Résolution :**

1. Vérifiez les lignes sources et confirmez que les champs numériques contiennent des nombres et non du texte.
2. Vérifiez que les identifiants clients et employés concordent dans les enregistrements pertinents.
3. Confirmez que la période de reporting et les mappages de sources sont cohérents.
4. Inspectez les protections de dénominateurs et la logique de gestion d'erreurs.
5. Distinguez un zéro véritable de données manquantes ou d'un calcul impossible.

Une formule de gestion d'erreurs ne devrait pas convertir chaque calcul invalide en un zéro d'apparence plausible. Là où les données sont incomplètes ou un dénominateur indisponible, la couche de reporting devrait rendre cette limite visible.

</details>

## Périmètre de mise en œuvre et feuille de route

### Livrables de la mise en œuvre de référence

La conception spécifie :

1. Sept feuilles de calcul coordonnées pour la configuration, l'ingestion de données, les calculs, l'analyse, le reporting de gestion, le suivi des actions et la calibration des estimations.
2. Quatre tables de saisie sources standardisées couvrant finances, mouvements MRR, activité commerciale et coûts de personnel.
3. Paramètres de configuration centralisés et dictionnaires de dimensions.
4. Un cadre de calcul pour burn, MRR, ARR, rétention, conversion commerciale et coûts de rémunération.
5. Revue des écarts significatifs et suivi des actions de réduction de coûts.
6. Un processus post-clôture pour comparer les estimations opérationnelles aux résultats comptables officiels.
7. Une procédure opérationnelle hebdomadaire répétable et un guide de dépannage.

Il s'agit de spécifications de mise en œuvre. L'exhaustivité, l'exactitude et le comportement réels d'un classeur ou d'une application navigateur livrés doivent être vérifiés contre les artefacts et cas de test correspondants avant publication.

### Développements futurs

- **Semaines 1–4 :** Exécutez le flux de travail Excel sur des cycles de reporting hebdomadaires répétés. Validez les définitions de KPI, l'alignement des périodes, les mappages de sources et les procédures de revue de gestion.
- **Mois 2–3 :** Évaluez la collaboration en ligne et l'extraction de sources assistée par IA. Envisagez la migration vers Google Sheets ou un autre environnement collaboratif seulement après avoir validé la compatibilité des formules et les exigences de gouvernance.
- **Mois 6 et au-delà :** Si les volumes de clients et de transactions dépassent la capacité du classeur, envisagez de déplacer le traitement intensif en calcul vers SQL ou Python tout en conservant une interface compacte de reporting exécutif.

La voie de migration préserve la logique métier et les définitions de données plutôt que de considérer le tableur lui-même comme la frontière permanente du système.

## Autres outils de cette série

Explorez d'autres outils d'aide à la décision légers et cadres analytiques associés :

- [HyVoid sur GitHub](https://github.com/HyVoid) — modèles de tableurs supplémentaires et outils opérationnels.
- [Theseus Workshop](https://github.com/HyVoid) — cadres analytiques réutilisables pour la planification d'entreprise, le contrôle financier et la prise de décision opérationnelle.

## Licence

Ce projet est destiné à être distribué sous la **Licence Apache 2.0**.

Consultez le fichier [LICENSE](LICENSE) pour les termes complets de la licence. Avant publication, assurez-vous que le dépôt contient le texte correct de la Apache License 2.0 et que la désignation de licence correspond aux termes de distribution réels de chaque artefact inclus.
