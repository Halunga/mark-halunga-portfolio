const recipes = [
  {
    title: 'Sliceable Vegan Cheddar',
    source: 'Nora Cooks',
    url: 'https://www.noracooks.com/vegan-cheddar-cheese/',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80',
    style: 'Cheddar',
    format: 'hard',
    rating: 4.88,
    reviews: 32,
    minutes: 200,
    diets: ['gluten-free', 'soy-free'],
    ingredients: ['cashews', 'agar', 'nutritional yeast', 'coconut oil'],
    description: 'A firm cashew cheddar that slices for sandwiches and softens well for grilled cheese.',
    verified: 'Public page lists 4.88 stars from 32 ratings and describes the cheese as firm and sliceable.',
    adaptedFrom: 'Adapted from Nora Cooks, with measurements converted for metric and British/Imperial kitchens.',
    ingredientsMetric: [
      '140 g raw cashews',
      '60 ml lemon juice',
      '55 g refined coconut oil',
      '30 g nutritional yeast',
      '8 g cornflour',
      '2 tsp smoked or sweet paprika',
      '1/4 tsp turmeric',
      '1 1/2 tsp fine sea salt',
      '480 ml water, divided',
      '8 g agar agar powder',
    ],
    ingredientsBritish: [
      '5 oz raw cashews',
      '4 tbsp lemon juice',
      '2 oz refined coconut oil',
      '1/2 cup nutritional yeast flakes',
      '1 tbsp cornflour',
      '2 tsp smoked or sweet paprika',
      '1/4 tsp turmeric',
      '1 1/2 tsp fine sea salt',
      '16 fl oz water, divided',
      '1 tbsp agar agar powder',
    ],
    method: [
      'Cover the cashews with boiling water for 5 minutes, then drain.',
      'Blend cashews, lemon juice, coconut oil, nutritional yeast, cornflour, spices, salt, and half the water until completely smooth.',
      'Simmer the remaining water with agar for about 5 minutes, whisking until fully dissolved.',
      'Blend the hot agar mixture into the cashew base, pour into an oiled mold, cool, and chill for at least 3 hours before slicing.',
    ],
  },
  {
    title: 'Nut-Free Shreddable Cheddar',
    source: 'ElaVegan',
    url: 'https://elavegan.com/vegan-cheddar-cheese/',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=900&q=80',
    style: 'Cheddar',
    format: 'hard',
    rating: 5,
    reviews: 12,
    minutes: 170,
    diets: ['nut-free', 'gluten-free', 'soy-free'],
    ingredients: ['coconut milk', 'red pepper', 'agar', 'tahini'],
    description: 'A firmer nut-free cheddar-style block that can be sliced or shredded after chilling.',
    verified: 'Public page lists 5 stars from 12 votes and identifies the recipe as nut-free, sliceable, and shreddable.',
    adaptedFrom: 'Adapted from ElaVegan, converted into metric and British/Imperial measures.',
    ingredientsMetric: [
      '240 ml full-fat coconut milk or other dairy-free milk',
      '1 roasted red pepper, about 100 g',
      '15 g agar powder',
      '3/4-1 tsp salt',
      '1 tsp onion powder',
      '1 tsp garlic powder',
      '1/2 tsp smoked paprika',
      '1/8 tsp turmeric',
      '4 tbsp nutritional yeast',
      '60 g tahini or cashew butter',
      '25 g tomato paste',
      '80 ml olive brine',
      '1 1/2 tbsp tapioca flour',
    ],
    ingredientsBritish: [
      '8 fl oz full-fat coconut milk or other dairy-free milk',
      '1 roasted red pepper, about 3 1/2 oz',
      '2 tbsp agar powder',
      '3/4-1 tsp salt',
      '1 tsp onion powder',
      '1 tsp garlic powder',
      '1/2 tsp smoked paprika',
      '1/8 tsp turmeric',
      '4 tbsp nutritional yeast',
      '2 oz tahini or cashew butter',
      '1 tbsp tomato paste',
      '2 3/4 fl oz olive brine',
      '1 1/2 tbsp tapioca flour',
    ],
    method: [
      'Oil a small loaf mold or bowl before heating the cheese base.',
      'Blend milk, pepper, agar, seasonings, nutritional yeast, tahini, and tomato paste until smooth.',
      'Simmer the mixture for 4 minutes, stirring often so the agar hydrates evenly.',
      'Whisk olive brine with tapioca, add it to the pan, cook 1 minute more, then pour into the mold and chill 2-3 hours.',
    ],
  },
  {
    title: 'Smoked Gouda Block',
    source: 'Vegan Blueberry',
    url: 'https://www.veganblueberry.com/vegan-smoked-gouda-cheese-recipe/',
    image: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=900&q=80',
    style: 'Gouda',
    format: 'hard',
    rating: 4.56,
    reviews: 74,
    minutes: 160,
    diets: ['gluten-free', 'soy-free'],
    ingredients: ['cashews', 'kappa carrageenan', 'tapioca', 'liquid smoke'],
    description: 'A smoky, meltable gouda-style block designed to slice, shred, and use on boards or hot sandwiches.',
    verified: 'Public page lists 4.56 stars from 74 votes and 53 comments.',
    adaptedFrom: 'Adapted from Vegan Blueberry, with metric and British/Imperial equivalents.',
    ingredientsMetric: [
      '70 g raw cashew pieces, rinsed under hot water',
      '55 g refined coconut oil',
      '30 g tapioca flour',
      '1 tbsp nutritional yeast',
      '1 1/2 tbsp kappa carrageenan',
      '1 tbsp lemon juice',
      'Scant 1 tsp sea salt',
      '1 tsp seasoned salt',
      '1 1/2 tsp onion powder',
      '1/2 tsp garlic powder',
      '1 tsp hickory smoke flavor',
      '360 ml just-boiled water',
    ],
    ingredientsBritish: [
      '2 1/2 oz raw cashew pieces, rinsed under hot water',
      '2 oz refined coconut oil',
      '1 oz tapioca flour',
      '1 tbsp nutritional yeast',
      '1 1/2 tbsp kappa carrageenan',
      '1 tbsp lemon juice',
      'Scant 1 tsp sea salt',
      '1 tsp seasoned salt',
      '1 1/2 tsp onion powder',
      '1/2 tsp garlic powder',
      '1 tsp hickory smoke flavor',
      '12 fl oz just-boiled water',
    ],
    method: [
      'Set a heatproof 700 ml mold beside the blender before starting.',
      'Add all ingredients except boiling water to the blender, keeping powders on top of the cashews.',
      'Pour in the just-boiled water and blend immediately until glossy and smooth.',
      'Transfer at once to the mold, chill 2-3 hours, then wrap and rest overnight for the cleanest slices.',
    ],
  },
  {
    title: 'Cashew Provolone Slices',
    source: 'Post Punk Kitchen',
    url: 'https://www.theppk.com/2026/04/vegan-cashew-provolone-recipe/',
    image: 'https://images.unsplash.com/photo-1604908812867-56e1ea6f42aa?auto=format&fit=crop&w=900&q=80',
    style: 'Provolone',
    format: 'hard',
    rating: 0,
    reviews: 0,
    minutes: 270,
    diets: ['soy-free'],
    ingredients: ['cashews', 'tahini', 'miso', 'kappa carrageenan'],
    description: 'A newer sliceable provolone-style cheese built for sandwiches, burgers, and melting.',
    verified: 'Public 2026 recipe from Isa Chandra; page currently has no ratings yet, so it sorts lower by default.',
    adaptedFrom: 'Adapted from Post Punk Kitchen, with converted home-kitchen measurements.',
    ingredientsMetric: [
      '60 ml fresh lemon juice',
      '70 g raw cashews',
      '3 tbsp tahini',
      '2 tbsp nutritional yeast',
      '1 tbsp mellow white miso',
      '3 tbsp melted refined coconut oil',
      '1 1/2 tsp salt',
      '420 ml water',
      '2 tbsp plus 1 tsp tapioca starch',
      '4 1/2 tsp kappa carrageenan',
    ],
    ingredientsBritish: [
      '2 fl oz fresh lemon juice',
      '2 1/2 oz raw cashews',
      '3 tbsp tahini',
      '2 tbsp nutritional yeast',
      '1 tbsp mellow white miso',
      '3 tbsp melted refined coconut oil',
      '1 1/2 tsp salt',
      '14 fl oz water',
      '2 tbsp plus 1 tsp tapioca starch',
      '4 1/2 tsp kappa carrageenan',
    ],
    method: [
      'Blend water, lemon juice, cashews, tahini, nutritional yeast, miso, coconut oil, and salt until very smooth.',
      'Add tapioca and kappa carrageenan, then blend briefly just to combine.',
      'Cook in a saucepan over medium heat, whisking hard, until the mixture boils, thickens, and pulls from the pan.',
      'Pour into an oiled mold, cool 20 minutes, cover, and refrigerate at least 4 hours before slicing.',
    ],
  },
  {
    title: 'Aged Vegan Camembert-Style Wheel',
    source: 'Full of Plants',
    url: 'https://fullofplants.com/vegan-aged-camembert-cheese/',
    image: 'https://images.unsplash.com/photo-1605904771474-11c0fb46a922?auto=format&fit=crop&w=900&q=80',
    style: 'Aged rind',
    format: 'hard',
    rating: 4.92,
    reviews: 299,
    minutes: 20210,
    diets: ['gluten-free', 'soy-free'],
    ingredients: ['cashews', 'probiotic culture', 'penicillium candidum', 'sea salt'],
    description: 'An advanced cultured cashew wheel with a bloomy rind, aged for roughly two weeks.',
    verified: 'Public page lists 4.92 stars from 299 votes and over 1,700 comments.',
    adaptedFrom: 'Adapted from Full of Plants; this one requires cheese cultures and careful sanitation.',
    ingredientsMetric: [
      '600 g raw cashews, soaked overnight',
      '120-150 ml filtered water',
      '8 acidophilus capsules or 1/8 tsp mesophilic culture',
      '1/8 tsp Penicillium Candidum',
      '10-15 g sea salt',
    ],
    ingredientsBritish: [
      '1 lb 5 oz raw cashews, soaked overnight',
      '4-5 fl oz filtered water',
      '8 acidophilus capsules or 1/8 tsp mesophilic culture',
      '1/8 tsp Penicillium Candidum',
      '2 tsp sea salt',
    ],
    method: [
      'Scald the soaked cashews with boiling water for 1-2 minutes, then drain well.',
      'Blend cashews with enough filtered water to form a thick, smooth cream.',
      'Blend in probiotic and Penicillium Candidum briefly, then ferment covered at room temperature for 24-48 hours.',
      'Shape into lined small molds, chill overnight, salt the outside, then age on a clean rack for about 14 days, flipping daily.',
    ],
  },
  {
    title: 'Easy Vegan Nacho Cheese Sauce',
    source: 'Nora Cooks',
    url: 'https://www.noracooks.com/easy-vegan-nacho-cheese-sauce/',
    image: 'https://images.unsplash.com/photo-1513456852971-30d0c8199d4d?auto=format&fit=crop&w=900&q=80',
    style: 'Nacho sauce',
    format: 'quick',
    rating: 4.95,
    reviews: 180,
    minutes: 25,
    diets: ['gluten-free', 'soy-free'],
    ingredients: ['cashews', 'nutritional yeast', 'spices'],
    description: 'A creamy cashew-based nacho sauce built for chips, broccoli, baked potatoes, and quick snack plates.',
    verified: 'Public page lists 4.95 stars from 180 ratings and frames the recipe as vegan.',
  },
  {
    title: 'Vegan Queso',
    source: 'Rainbow Plant Life',
    url: 'https://rainbowplantlife.com/the-best-vegan-queso-ever/',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=80',
    style: 'Queso',
    format: 'quick',
    rating: 5,
    reviews: 139,
    minutes: 20,
    diets: ['gluten-free', 'soy-free'],
    ingredients: ['cashews', 'nutritional yeast', 'taco spices'],
    description: 'A rich blender queso with a modifiable spice level for tacos, burritos, nachos, and tortilla chips.',
    verified: 'Public page lists 5 stars from 139 votes and 231 comments, with vegan positioning throughout.',
  },
  {
    title: 'Vegan Cheese Sauce, Nut Free',
    source: 'Nora Cooks',
    url: 'https://www.noracooks.com/vegan-cheese-sauce/',
    image: 'https://images.unsplash.com/photo-1600335895229-6e75511892c8?auto=format&fit=crop&w=900&q=80',
    style: 'Cheese sauce',
    format: 'quick',
    rating: 4.92,
    reviews: 46,
    minutes: 25,
    diets: ['nut-free', 'gluten-free'],
    ingredients: ['potatoes', 'carrots', 'nutritional yeast'],
    description: 'A silky potato-carrot sauce for nachos, baked potatoes, broccoli, and mac and cheese.',
    verified: 'Public page lists 4.92 stars from 46 ratings and confirms the recipe is vegan and nut-free.',
  },
];

const ui = {
  en: {
    pageTitle: 'Vegan Cheese Recipe Finder',
    languageLabel: 'Language',
    heroEyebrow: 'Verified vegan cheese recipes',
    heroTitle: 'Find the best dairy-free cheese recipes in one place.',
    heroText: 'Browse highly rated sauces plus firm, sliceable, grateable, and aged vegan cheeses from trusted recipe sites.',
    controlsLabel: 'Recipe controls',
    searchLabel: 'Search',
    searchPlaceholder: 'cashew, nacho, nut-free...',
    styleLabel: 'Style',
    allStyles: 'All styles',
    dietLabel: 'Diet',
    allDiets: 'All diets',
    nutFree: 'Nut-free',
    glutenFree: 'Gluten-free',
    soyFree: 'Soy-free',
    formatLabel: 'Format',
    allFormats: 'All formats',
    hardSliceable: 'Hard / sliceable',
    quickSauces: 'Quick sauces',
    measuresLabel: 'Measures',
    metric: 'Metric',
    british: 'British / Imperial',
    sortLabel: 'Sort',
    bestVerified: 'Best verified',
    highestRating: 'Highest rating',
    mostReviewed: 'Most reviewed',
    fastest: 'Fastest',
    summaryLabel: 'Recipe summary',
    recipesStat: 'recipes',
    averageRatingStat: 'average rating',
    sourcesStat: 'trusted sources',
    verificationGuide: 'Verification guide',
    verificationTitle: 'Verification',
    verificationText: 'Detailed hard-style recipes are adapted from public source pages and shown with metric plus British/Imperial measurements.',
    checkPublic: 'Public recipe page',
    checkRating: 'Rating or vote count shown',
    checkVegan: 'Vegan ingredients confirmed',
    checkLink: 'Direct source link included',
    checkMeasures: 'Measurements converted for home kitchens',
    libraryEyebrow: 'Recipe library',
    libraryTitle: 'Highest-rated picks',
    reset: 'Reset',
    recipesEmpty: 'No recipes match those filters.',
    metricIngredients: 'Metric ingredients',
    britishIngredients: 'British / Imperial ingredients',
    method: 'Method',
    hardBadge: 'Hard style',
    quickBadge: 'Quick sauce',
    reviews: 'reviews',
    noRatings: 'No ratings yet',
    newLabel: 'New',
    days: 'days',
    hour: 'hr',
    minutes: 'min',
    openSource: 'Open source',
  },
  sv: {
    pageTitle: 'Vegansk ostrecept-sokare',
    languageLabel: 'Sprak',
    heroEyebrow: 'Verifierade veganska ostrecept',
    heroTitle: 'Hitta de basta mjolkfria ostrecepten pa ett stalle.',
    heroText: 'Bladdra bland hogt rankade saser samt fasta, skivbara, rivbara och lagrade veganska ostar fran betrodda receptsidor.',
    controlsLabel: 'Receptkontroller',
    searchLabel: 'Sok',
    searchPlaceholder: 'cashew, nacho, notfri...',
    styleLabel: 'Stil',
    allStyles: 'Alla stilar',
    dietLabel: 'Kost',
    allDiets: 'Alla koster',
    nutFree: 'Notfri',
    glutenFree: 'Glutenfri',
    soyFree: 'Sojafri',
    formatLabel: 'Format',
    allFormats: 'Alla format',
    hardSliceable: 'Fast / skivbar',
    quickSauces: 'Snabba saser',
    measuresLabel: 'Mattan',
    metric: 'Metriskt',
    british: 'Brittiskt / Imperial',
    sortLabel: 'Sortera',
    bestVerified: 'Bast verifierad',
    highestRating: 'Hogst betyg',
    mostReviewed: 'Flest recensioner',
    fastest: 'Snabbast',
    summaryLabel: 'Receptsammanfattning',
    recipesStat: 'recept',
    averageRatingStat: 'snittbetyg',
    sourcesStat: 'betrodda kallor',
    verificationGuide: 'Verifieringsguide',
    verificationTitle: 'Verifiering',
    verificationText: 'Detaljerade recept pa fasta ostar ar anpassade fran offentliga kallsidor och visas med metriska samt brittiska/imperiala matt.',
    checkPublic: 'Offentlig receptsida',
    checkRating: 'Betyg eller rostetal visas',
    checkVegan: 'Veganska ingredienser bekraftade',
    checkLink: 'Direkt lank till kallan',
    checkMeasures: 'Matt omraknade for hemmakok',
    libraryEyebrow: 'Receptbibliotek',
    libraryTitle: 'Hogst rankade val',
    reset: 'Aterstall',
    recipesEmpty: 'Inga recept matchar filtren.',
    metricIngredients: 'Metriska ingredienser',
    britishIngredients: 'Brittiska / Imperial-ingredienser',
    method: 'Metod',
    hardBadge: 'Fast ost',
    quickBadge: 'Snabb sas',
    reviews: 'recensioner',
    noRatings: 'Inga betyg an',
    newLabel: 'Ny',
    days: 'dagar',
    hour: 'tim',
    minutes: 'min',
    openSource: 'Oppna kalla',
  },
  de: {
    pageTitle: 'Vegane Kase-Rezeptsuche',
    languageLabel: 'Sprache',
    heroEyebrow: 'Geprufte vegane Kase-Rezepte',
    heroTitle: 'Finde die besten milchfreien Kase-Rezepte an einem Ort.',
    heroText: 'Durchsuche hoch bewertete Saucen sowie feste, schneidbare, reibbare und gereifte vegane Kasesorten von vertrauenswurdigen Rezeptseiten.',
    controlsLabel: 'Rezeptsteuerung',
    searchLabel: 'Suchen',
    searchPlaceholder: 'Cashew, Nacho, nussfrei...',
    styleLabel: 'Stil',
    allStyles: 'Alle Stile',
    dietLabel: 'Ernahrung',
    allDiets: 'Alle Ernahrungen',
    nutFree: 'Nussfrei',
    glutenFree: 'Glutenfrei',
    soyFree: 'Sojafrei',
    formatLabel: 'Format',
    allFormats: 'Alle Formate',
    hardSliceable: 'Fest / schneidbar',
    quickSauces: 'Schnelle Saucen',
    measuresLabel: 'Masse',
    metric: 'Metrisch',
    british: 'Britisch / Imperial',
    sortLabel: 'Sortieren',
    bestVerified: 'Am besten gepruft',
    highestRating: 'Hochste Bewertung',
    mostReviewed: 'Meiste Bewertungen',
    fastest: 'Am schnellsten',
    summaryLabel: 'Rezeptubersicht',
    recipesStat: 'Rezepte',
    averageRatingStat: 'Durchschnitt',
    sourcesStat: 'vertrauenswurdige Quellen',
    verificationGuide: 'Prufhinweise',
    verificationTitle: 'Prufung',
    verificationText: 'Detaillierte Rezepte fur feste Kasesorten sind aus offentlichen Quellen adaptiert und mit metrischen sowie britisch/imperialen Massen angegeben.',
    checkPublic: 'Offentliche Rezeptseite',
    checkRating: 'Bewertung oder Stimmen sichtbar',
    checkVegan: 'Vegane Zutaten bestatigt',
    checkLink: 'Direkter Quellenlink',
    checkMeasures: 'Mengen fur Hauskuchen umgerechnet',
    libraryEyebrow: 'Rezeptbibliothek',
    libraryTitle: 'Bestbewertete Auswahl',
    reset: 'Zurucksetzen',
    recipesEmpty: 'Keine Rezepte passen zu diesen Filtern.',
    metricIngredients: 'Metrische Zutaten',
    britishIngredients: 'Britische / Imperial-Zutaten',
    method: 'Zubereitung',
    hardBadge: 'Fester Kase',
    quickBadge: 'Schnelle Sauce',
    reviews: 'Bewertungen',
    noRatings: 'Noch keine Bewertungen',
    newLabel: 'Neu',
    days: 'Tage',
    hour: 'Std.',
    minutes: 'Min.',
    openSource: 'Quelle offnen',
  },
  fr: {
    pageTitle: 'Recherche de recettes de fromage vegetal',
    languageLabel: 'Langue',
    heroEyebrow: 'Recettes de fromages vegetaliens verifiees',
    heroTitle: 'Trouvez les meilleures recettes de fromages sans lait au meme endroit.',
    heroText: 'Parcourez des sauces tres bien notees ainsi que des fromages vegetaliens fermes, tranchables, rapables et affines.',
    controlsLabel: 'Commandes des recettes',
    searchLabel: 'Rechercher',
    searchPlaceholder: 'cajou, nacho, sans noix...',
    styleLabel: 'Style',
    allStyles: 'Tous les styles',
    dietLabel: 'Regime',
    allDiets: 'Tous les regimes',
    nutFree: 'Sans noix',
    glutenFree: 'Sans gluten',
    soyFree: 'Sans soja',
    formatLabel: 'Format',
    allFormats: 'Tous les formats',
    hardSliceable: 'Ferme / tranchable',
    quickSauces: 'Sauces rapides',
    measuresLabel: 'Mesures',
    metric: 'Metrique',
    british: 'Britannique / Imperial',
    sortLabel: 'Trier',
    bestVerified: 'Mieux verifie',
    highestRating: 'Meilleure note',
    mostReviewed: 'Le plus commente',
    fastest: 'Le plus rapide',
    summaryLabel: 'Resume des recettes',
    recipesStat: 'recettes',
    averageRatingStat: 'note moyenne',
    sourcesStat: 'sources fiables',
    verificationGuide: 'Guide de verification',
    verificationTitle: 'Verification',
    verificationText: 'Les recettes detaillees de fromages fermes sont adaptees de pages publiques et affichees en mesures metriques et britanniques/imperiales.',
    checkPublic: 'Page de recette publique',
    checkRating: 'Note ou votes affiches',
    checkVegan: 'Ingredients vegetaliens confirmes',
    checkLink: 'Lien direct vers la source',
    checkMeasures: 'Mesures converties pour la cuisine maison',
    libraryEyebrow: 'Bibliotheque de recettes',
    libraryTitle: 'Selections les mieux notees',
    reset: 'Reinitialiser',
    recipesEmpty: 'Aucune recette ne correspond a ces filtres.',
    metricIngredients: 'Ingredients metriques',
    britishIngredients: 'Ingredients britanniques / imperiaux',
    method: 'Methode',
    hardBadge: 'Fromage ferme',
    quickBadge: 'Sauce rapide',
    reviews: 'avis',
    noRatings: 'Pas encore de notes',
    newLabel: 'Nouveau',
    days: 'jours',
    hour: 'h',
    minutes: 'min',
    openSource: 'Ouvrir la source',
  },
  es: {
    pageTitle: 'Buscador de recetas de queso vegano',
    languageLabel: 'Idioma',
    heroEyebrow: 'Recetas verificadas de queso vegano',
    heroTitle: 'Encuentra las mejores recetas de queso sin lacteos en un solo lugar.',
    heroText: 'Explora salsas muy valoradas y quesos veganos firmes, rebanables, rallables y curados de sitios de recetas fiables.',
    controlsLabel: 'Controles de recetas',
    searchLabel: 'Buscar',
    searchPlaceholder: 'anacardo, nacho, sin frutos secos...',
    styleLabel: 'Estilo',
    allStyles: 'Todos los estilos',
    dietLabel: 'Dieta',
    allDiets: 'Todas las dietas',
    nutFree: 'Sin frutos secos',
    glutenFree: 'Sin gluten',
    soyFree: 'Sin soja',
    formatLabel: 'Formato',
    allFormats: 'Todos los formatos',
    hardSliceable: 'Firme / rebanable',
    quickSauces: 'Salsas rapidas',
    measuresLabel: 'Medidas',
    metric: 'Metrico',
    british: 'Britanico / Imperial',
    sortLabel: 'Ordenar',
    bestVerified: 'Mejor verificado',
    highestRating: 'Mayor valoracion',
    mostReviewed: 'Mas reseñas',
    fastest: 'Mas rapido',
    summaryLabel: 'Resumen de recetas',
    recipesStat: 'recetas',
    averageRatingStat: 'valoracion media',
    sourcesStat: 'fuentes fiables',
    verificationGuide: 'Guia de verificacion',
    verificationTitle: 'Verificacion',
    verificationText: 'Las recetas detalladas de quesos firmes estan adaptadas de paginas publicas y se muestran con medidas metricas y britanicas/imperiales.',
    checkPublic: 'Pagina publica de receta',
    checkRating: 'Valoracion o votos visibles',
    checkVegan: 'Ingredientes veganos confirmados',
    checkLink: 'Enlace directo a la fuente',
    checkMeasures: 'Medidas convertidas para cocina domestica',
    libraryEyebrow: 'Biblioteca de recetas',
    libraryTitle: 'Selecciones mejor valoradas',
    reset: 'Restablecer',
    recipesEmpty: 'Ninguna receta coincide con esos filtros.',
    metricIngredients: 'Ingredientes metricos',
    britishIngredients: 'Ingredientes britanicos / imperiales',
    method: 'Metodo',
    hardBadge: 'Queso firme',
    quickBadge: 'Salsa rapida',
    reviews: 'reseñas',
    noRatings: 'Aun sin valoraciones',
    newLabel: 'Nuevo',
    days: 'dias',
    hour: 'h',
    minutes: 'min',
    openSource: 'Abrir fuente',
  },
};

const styleNames = {
  en: {},
  sv: { Cheddar: 'Cheddar', Gouda: 'Gouda', Provolone: 'Provolone', 'Aged rind': 'Lagrad yta', 'Nacho sauce': 'Nachosas', Queso: 'Queso', 'Cheese sauce': 'Ostsas' },
  de: { Cheddar: 'Cheddar', Gouda: 'Gouda', Provolone: 'Provolone', 'Aged rind': 'Gereifte Rinde', 'Nacho sauce': 'Nacho-Sauce', Queso: 'Queso', 'Cheese sauce': 'Kasesauce' },
  fr: { Cheddar: 'Cheddar', Gouda: 'Gouda', Provolone: 'Provolone', 'Aged rind': 'Croute affinee', 'Nacho sauce': 'Sauce nacho', Queso: 'Queso', 'Cheese sauce': 'Sauce fromage' },
  es: { Cheddar: 'Cheddar', Gouda: 'Gouda', Provolone: 'Provolone', 'Aged rind': 'Corteza curada', 'Nacho sauce': 'Salsa nacho', Queso: 'Queso', 'Cheese sauce': 'Salsa de queso' },
};

const recipeText = {
  sv: {
    'Sliceable Vegan Cheddar': {
      title: 'Skivbar vegansk cheddar',
      description: 'En fast cashewcheddar som gar att skiva till mackor och som mjuknar fint i grillad smorgas.',
      verified: 'Offentlig sida visar 4,88 stjarnor fran 32 betyg och beskriver osten som fast och skivbar.',
      adaptedFrom: 'Anpassad fran Nora Cooks, med matt omraknade for metriska och brittiska/imperiala kok.',
    },
    'Nut-Free Shreddable Cheddar': {
      title: 'Notfri rivbar cheddar',
      description: 'Ett fastare notfritt cheddarblock som kan skivas eller rivas efter kylning.',
      verified: 'Offentlig sida visar 5 stjarnor fran 12 roster och beskriver receptet som notfritt, skivbart och rivbart.',
      adaptedFrom: 'Anpassad fran ElaVegan, med metriska och brittiska/imperiala matt.',
    },
    'Smoked Gouda Block': {
      title: 'Rokt gouda-block',
      description: 'Ett rokigt, smaltbart gouda-liknande block for skivor, rivning, ostbrickor och varma mackor.',
      verified: 'Offentlig sida visar 4,56 stjarnor fran 74 roster och 53 kommentarer.',
      adaptedFrom: 'Anpassad fran Vegan Blueberry, med metriska och brittiska/imperiala motsvarigheter.',
    },
    'Cashew Provolone Slices': {
      title: 'Cashew-provolone i skivor',
      description: 'En nyare skivbar provolone-liknande ost for mackor, burgare och smaltning.',
      verified: 'Offentligt recept fran 2026 av Isa Chandra; sidan har annu inga betyg och sorteras darfor lagre.',
      adaptedFrom: 'Anpassad fran Post Punk Kitchen, med omraknade hemmakoksmatt.',
    },
    'Aged Vegan Camembert-Style Wheel': {
      title: 'Lagrad vegansk camembert-liknande ost',
      description: 'Ett avancerat fermenterat cashewhjul med vitmogel-yta, lagrat i ungefar tva veckor.',
      verified: 'Offentlig sida visar 4,92 stjarnor fran 299 roster och over 1 700 kommentarer.',
      adaptedFrom: 'Anpassad fran Full of Plants; detta recept kraver ostkulturer och noggrann hygien.',
    },
    'Easy Vegan Nacho Cheese Sauce': {
      title: 'Enkel vegansk nacho-ostsas',
      description: 'En kramig cashewsas for chips, broccoli, bakad potatis och snabba snackstallrikar.',
      verified: 'Offentlig sida visar 4,95 stjarnor fran 180 betyg och presenterar receptet som veganskt.',
    },
    'Vegan Queso': {
      title: 'Vegansk queso',
      description: 'En fyllig mixersas med justerbar hetta for tacos, burritos, nachos och tortillachips.',
      verified: 'Offentlig sida visar 5 stjarnor fran 139 roster och 231 kommentarer, med vegansk inriktning.',
    },
    'Vegan Cheese Sauce, Nut Free': {
      title: 'Vegansk ostsas, notfri',
      description: 'En len potatis- och morotssas for nachos, bakad potatis, broccoli och mac and cheese.',
      verified: 'Offentlig sida visar 4,92 stjarnor fran 46 betyg och bekraftar att receptet ar veganskt och notfritt.',
    },
  },
  de: {
    'Sliceable Vegan Cheddar': {
      title: 'Schneidbarer veganer Cheddar',
      description: 'Ein fester Cashew-Cheddar, der sich fur Sandwiches schneiden lasst und in gegrillten Toasts gut weich wird.',
      verified: 'Die offentliche Seite zeigt 4,88 Sterne aus 32 Bewertungen und beschreibt den Kase als fest und schneidbar.',
      adaptedFrom: 'Adaptiert von Nora Cooks, mit Mengen fur metrische und britisch/imperiale Kuchen.',
    },
    'Nut-Free Shreddable Cheddar': {
      title: 'Nussfreier reibbarer Cheddar',
      description: 'Ein festerer nussfreier Cheddar-Block, der nach dem Kuhlen geschnitten oder gerieben werden kann.',
      verified: 'Die offentliche Seite zeigt 5 Sterne aus 12 Stimmen und nennt das Rezept nussfrei, schneidbar und reibbar.',
      adaptedFrom: 'Adaptiert von ElaVegan, mit metrischen und britisch/imperialen Massen.',
    },
    'Smoked Gouda Block': {
      title: 'Geraucherter Gouda-Block',
      description: 'Ein rauchiger, schmelzfahiger Gouda-Block zum Schneiden, Reiben, fur Platten oder heisse Sandwiches.',
      verified: 'Die offentliche Seite zeigt 4,56 Sterne aus 74 Stimmen und 53 Kommentare.',
      adaptedFrom: 'Adaptiert von Vegan Blueberry, mit metrischen und britisch/imperialen Entsprechungen.',
    },
    'Cashew Provolone Slices': {
      title: 'Cashew-Provolone-Scheiben',
      description: 'Ein neuerer schneidbarer Provolone-Stil fur Sandwiches, Burger und zum Schmelzen.',
      verified: 'Offentliches Rezept von Isa Chandra aus 2026; die Seite hat noch keine Bewertungen und sortiert daher niedriger.',
      adaptedFrom: 'Adaptiert von Post Punk Kitchen, mit umgerechneten Haushaltsmassen.',
    },
    'Aged Vegan Camembert-Style Wheel': {
      title: 'Gereifter veganer Camembert-Stil',
      description: 'Ein anspruchsvolles kultiviertes Cashew-Rad mit weisser Rinde, etwa zwei Wochen gereift.',
      verified: 'Die offentliche Seite zeigt 4,92 Sterne aus 299 Stimmen und uber 1.700 Kommentare.',
      adaptedFrom: 'Adaptiert von Full of Plants; dieses Rezept braucht Kasekulturen und sorgfaltige Hygiene.',
    },
    'Easy Vegan Nacho Cheese Sauce': {
      title: 'Einfache vegane Nacho-Kasesauce',
      description: 'Eine cremige Cashew-Sauce fur Chips, Brokkoli, Ofenkartoffeln und schnelle Snackteller.',
      verified: 'Die offentliche Seite zeigt 4,95 Sterne aus 180 Bewertungen und rahmt das Rezept als vegan ein.',
    },
    'Vegan Queso': {
      title: 'Veganes Queso',
      description: 'Eine reichhaltige Mixer-Sauce mit anpassbarer Scharfe fur Tacos, Burritos, Nachos und Tortillachips.',
      verified: 'Die offentliche Seite zeigt 5 Sterne aus 139 Stimmen und 231 Kommentare, mit veganer Ausrichtung.',
    },
    'Vegan Cheese Sauce, Nut Free': {
      title: 'Vegane Kasesauce, nussfrei',
      description: 'Eine seidige Kartoffel-Karotten-Sauce fur Nachos, Ofenkartoffeln, Brokkoli und Mac and Cheese.',
      verified: 'Die offentliche Seite zeigt 4,92 Sterne aus 46 Bewertungen und bestatigt vegan und nussfrei.',
    },
  },
  fr: {
    'Sliceable Vegan Cheddar': {
      title: 'Cheddar vegetal tranchable',
      description: 'Un cheddar ferme a base de cajou, facile a trancher pour les sandwichs et bon a fondre en croque.',
      verified: 'La page publique indique 4,88 etoiles sur 32 notes et decrit le fromage comme ferme et tranchable.',
      adaptedFrom: 'Adapte de Nora Cooks, avec mesures converties en metrique et britannique/imperial.',
    },
    'Nut-Free Shreddable Cheddar': {
      title: 'Cheddar rapable sans noix',
      description: 'Un bloc type cheddar sans noix, plus ferme, a trancher ou raper apres refroidissement.',
      verified: 'La page publique indique 5 etoiles sur 12 votes et presente la recette comme sans noix, tranchable et rapable.',
      adaptedFrom: 'Adapte de ElaVegan, avec mesures metriques et britanniques/imperiales.',
    },
    'Smoked Gouda Block': {
      title: 'Bloc de gouda fume',
      description: 'Un bloc type gouda fume et fondant, a trancher, raper, servir sur plateau ou dans des sandwichs chauds.',
      verified: 'La page publique indique 4,56 etoiles sur 74 votes et 53 commentaires.',
      adaptedFrom: 'Adapte de Vegan Blueberry, avec equivalents metriques et britanniques/imperiaux.',
    },
    'Cashew Provolone Slices': {
      title: 'Tranches de provolone de cajou',
      description: 'Un fromage type provolone recent, tranchable, pour sandwichs, burgers et fonte.',
      verified: 'Recette publique 2026 d Isa Chandra; la page n a pas encore de notes et se classe donc plus bas.',
      adaptedFrom: 'Adapte de Post Punk Kitchen, avec mesures de cuisine converties.',
    },
    'Aged Vegan Camembert-Style Wheel': {
      title: 'Meule vegetale type camembert affine',
      description: 'Une meule de cajou cultivee, avancee, avec croute fleurie, affinee environ deux semaines.',
      verified: 'La page publique indique 4,92 etoiles sur 299 votes et plus de 1 700 commentaires.',
      adaptedFrom: 'Adapte de Full of Plants; cette recette demande des cultures fromageres et une hygiene stricte.',
    },
    'Easy Vegan Nacho Cheese Sauce': {
      title: 'Sauce fromage nacho vegetale facile',
      description: 'Une sauce cremeuse a base de cajou pour chips, brocoli, pommes de terre au four et assiettes snack.',
      verified: 'La page publique indique 4,95 etoiles sur 180 notes et presente la recette comme vegetalienne.',
    },
    'Vegan Queso': {
      title: 'Queso vegetal',
      description: 'Une sauce riche au blender, avec niveau de piment modulable, pour tacos, burritos, nachos et tortillas.',
      verified: 'La page publique indique 5 etoiles sur 139 votes et 231 commentaires, avec positionnement vegetal.',
    },
    'Vegan Cheese Sauce, Nut Free': {
      title: 'Sauce fromage vegetale, sans noix',
      description: 'Une sauce soyeuse pomme de terre-carotte pour nachos, pommes de terre, brocoli et mac and cheese.',
      verified: 'La page publique indique 4,92 etoiles sur 46 notes et confirme une recette vegetalienne et sans noix.',
    },
  },
  es: {
    'Sliceable Vegan Cheddar': {
      title: 'Cheddar vegano rebanable',
      description: 'Un cheddar firme de anacardo que se rebana para sandwiches y se ablanda bien en tostadas.',
      verified: 'La pagina publica muestra 4,88 estrellas de 32 valoraciones y describe el queso como firme y rebanable.',
      adaptedFrom: 'Adaptado de Nora Cooks, con medidas convertidas para cocinas metricas y britanicas/imperiales.',
    },
    'Nut-Free Shreddable Cheddar': {
      title: 'Cheddar rallable sin frutos secos',
      description: 'Un bloque tipo cheddar mas firme, sin frutos secos, que se puede rebanar o rallar tras enfriar.',
      verified: 'La pagina publica muestra 5 estrellas de 12 votos y lo identifica como sin frutos secos, rebanable y rallable.',
      adaptedFrom: 'Adaptado de ElaVegan, con medidas metricas y britanicas/imperiales.',
    },
    'Smoked Gouda Block': {
      title: 'Bloque de gouda ahumado',
      description: 'Un bloque estilo gouda ahumado y fundente para rebanar, rallar, tablas o sandwiches calientes.',
      verified: 'La pagina publica muestra 4,56 estrellas de 74 votos y 53 comentarios.',
      adaptedFrom: 'Adaptado de Vegan Blueberry, con equivalencias metricas y britanicas/imperiales.',
    },
    'Cashew Provolone Slices': {
      title: 'Rebanadas de provolone de anacardo',
      description: 'Un queso estilo provolone reciente y rebanable para sandwiches, hamburguesas y fundir.',
      verified: 'Receta publica de 2026 de Isa Chandra; la pagina aun no tiene valoraciones, asi que se ordena mas abajo.',
      adaptedFrom: 'Adaptado de Post Punk Kitchen, con medidas convertidas para cocina casera.',
    },
    'Aged Vegan Camembert-Style Wheel': {
      title: 'Rueda vegana curada estilo camembert',
      description: 'Una rueda avanzada de anacardo cultivado con corteza florida, curada unas dos semanas.',
      verified: 'La pagina publica muestra 4,92 estrellas de 299 votos y mas de 1.700 comentarios.',
      adaptedFrom: 'Adaptado de Full of Plants; requiere cultivos de queso y mucha higiene.',
    },
    'Easy Vegan Nacho Cheese Sauce': {
      title: 'Salsa vegana facil de queso nacho',
      description: 'Una salsa cremosa de anacardo para chips, brocoli, patatas al horno y platos rapidos de picoteo.',
      verified: 'La pagina publica muestra 4,95 estrellas de 180 valoraciones y presenta la receta como vegana.',
    },
    'Vegan Queso': {
      title: 'Queso vegano',
      description: 'Una salsa rica de batidora con picante ajustable para tacos, burritos, nachos y tortillas.',
      verified: 'La pagina publica muestra 5 estrellas de 139 votos y 231 comentarios, con enfoque vegano.',
    },
    'Vegan Cheese Sauce, Nut Free': {
      title: 'Salsa de queso vegana, sin frutos secos',
      description: 'Una salsa sedosa de patata y zanahoria para nachos, patatas, brocoli y mac and cheese.',
      verified: 'La pagina publica muestra 4,92 estrellas de 46 valoraciones y confirma que es vegana y sin frutos secos.',
    },
  },
};

const recipeDetailText = {
  sv: {
    'Sliceable Vegan Cheddar': {
      ingredientsMetric: [
        '140 g raa cashewnotter',
        '60 ml citronjuice',
        '55 g raffinerad kokosolja',
        '30 g naringsjast',
        '8 g majsstarkelse',
        '2 tsk rokt eller sot paprika',
        '1/4 tsk gurkmeja',
        '1 1/2 tsk fint havssalt',
        '480 ml vatten, uppdelat',
        '8 g agar agar-pulver',
      ],
      ingredientsBritish: [
        '5 oz raa cashewnotter',
        '4 msk citronjuice',
        '2 oz raffinerad kokosolja',
        '1/2 cup naringsjastflingor',
        '1 msk majsstarkelse',
        '2 tsk rokt eller sot paprika',
        '1/4 tsk gurkmeja',
        '1 1/2 tsk fint havssalt',
        '16 fl oz vatten, uppdelat',
        '1 msk agar agar-pulver',
      ],
      method: [
        'Tack cashewnotterna med kokande vatten i 5 minuter och hall sedan av.',
        'Mixa cashew, citronjuice, kokosolja, naringsjast, majsstarkelse, kryddor, salt och halften av vattnet helt slatt.',
        'Sjud resten av vattnet med agar i cirka 5 minuter och vispa tills allt ar lost.',
        'Mixa ner den heta agarblandningen i cashewbasen, hall i en oljad form, lat svalna och kyl minst 3 timmar innan du skivar.',
      ],
    },
    'Nut-Free Shreddable Cheddar': {
      ingredientsMetric: [
        '240 ml fullfet kokosmjolk eller annan vaxtbaserad mjolk',
        '1 rostad rod paprika, cirka 100 g',
        '15 g agar-pulver',
        '3/4-1 tsk salt',
        '1 tsk lokpulver',
        '1 tsk vitlokspulver',
        '1/2 tsk rokt paprika',
        '1/8 tsk gurkmeja',
        '4 msk naringsjast',
        '60 g tahini eller cashewsmor',
        '25 g tomatpure',
        '80 ml olivlag',
        '1 1/2 msk tapiokamjol',
      ],
      ingredientsBritish: [
        '8 fl oz fullfet kokosmjolk eller annan vaxtbaserad mjolk',
        '1 rostad rod paprika, cirka 3 1/2 oz',
        '2 msk agar-pulver',
        '3/4-1 tsk salt',
        '1 tsk lokpulver',
        '1 tsk vitlokspulver',
        '1/2 tsk rokt paprika',
        '1/8 tsk gurkmeja',
        '4 msk naringsjast',
        '2 oz tahini eller cashewsmor',
        '1 msk tomatpure',
        '2 3/4 fl oz olivlag',
        '1 1/2 msk tapiokamjol',
      ],
      method: [
        'Olja en liten brodform eller skal innan du varmer ostbasen.',
        'Mixa mjolk, paprika, agar, kryddor, naringsjast, tahini och tomatpure tills slatt.',
        'Sjud blandningen i 4 minuter och ror ofta sa att agaren hydreras jamnt.',
        'Vispa ihop olivlag med tapioka, tillsatt i kastrullen, koka 1 minut till, hall i formen och kyl 2-3 timmar.',
      ],
    },
    'Smoked Gouda Block': {
      ingredientsMetric: [
        '70 g raa cashewbitar, skolja med hett vatten',
        '55 g raffinerad kokosolja',
        '30 g tapiokamjol',
        '1 msk naringsjast',
        '1 1/2 msk kappa carrageenan',
        '1 msk citronjuice',
        'Knappt 1 tsk havssalt',
        '1 tsk kryddsalt',
        '1 1/2 tsk lokpulver',
        '1/2 tsk vitlokspulver',
        '1 tsk hickory-rokessens',
        '360 ml nykokt vatten',
      ],
      ingredientsBritish: [
        '2 1/2 oz raa cashewbitar, skolja med hett vatten',
        '2 oz raffinerad kokosolja',
        '1 oz tapiokamjol',
        '1 msk naringsjast',
        '1 1/2 msk kappa carrageenan',
        '1 msk citronjuice',
        'Knappt 1 tsk havssalt',
        '1 tsk kryddsalt',
        '1 1/2 tsk lokpulver',
        '1/2 tsk vitlokspulver',
        '1 tsk hickory-rokessens',
        '12 fl oz nykokt vatten',
      ],
      method: [
        'Stall fram en varmebestandig form pa cirka 700 ml bredvid mixern.',
        'Lagg alla ingredienser utom kokande vatten i mixern, med pulvren ovanpa cashewnotterna.',
        'Hall i det nykokta vattnet och mixa direkt tills blandningen ar blank och slat.',
        'Hall genast i formen, kyl 2-3 timmar, linda in och lat vila over natten for snyggast skivor.',
      ],
    },
    'Cashew Provolone Slices': {
      ingredientsMetric: [
        '60 ml farsk citronjuice',
        '70 g raa cashewnotter',
        '3 msk tahini',
        '2 msk naringsjast',
        '1 msk ljus miso',
        '3 msk smalt raffinerad kokosolja',
        '1 1/2 tsk salt',
        '420 ml vatten',
        '2 msk plus 1 tsk tapiokastarkelse',
        '4 1/2 tsk kappa carrageenan',
      ],
      ingredientsBritish: [
        '2 fl oz farsk citronjuice',
        '2 1/2 oz raa cashewnotter',
        '3 msk tahini',
        '2 msk naringsjast',
        '1 msk ljus miso',
        '3 msk smalt raffinerad kokosolja',
        '1 1/2 tsk salt',
        '14 fl oz vatten',
        '2 msk plus 1 tsk tapiokastarkelse',
        '4 1/2 tsk kappa carrageenan',
      ],
      method: [
        'Mixa vatten, citronjuice, cashew, tahini, naringsjast, miso, kokosolja och salt tills mycket slatt.',
        'Tillsatt tapioka och kappa carrageenan och mixa kort bara for att blanda.',
        'Koka i kastrull pa medelvarme och vispa kraftigt tills blandningen kokar, tjocknar och slapper fran pannan.',
        'Hall i en oljad form, svalna 20 minuter, tack over och kyl minst 4 timmar innan du skivar.',
      ],
    },
    'Aged Vegan Camembert-Style Wheel': {
      ingredientsMetric: [
        '600 g raa cashewnotter, blotlagda over natten',
        '120-150 ml filtrerat vatten',
        '8 acidophilus-kapslar eller 1/8 tsk mesofil kultur',
        '1/8 tsk Penicillium Candidum',
        '10-15 g havssalt',
      ],
      ingredientsBritish: [
        '1 lb 5 oz raa cashewnotter, blotlagda over natten',
        '4-5 fl oz filtrerat vatten',
        '8 acidophilus-kapslar eller 1/8 tsk mesofil kultur',
        '1/8 tsk Penicillium Candidum',
        '2 tsk havssalt',
      ],
      method: [
        'Skalla de blotlagda cashewnotterna med kokande vatten i 1-2 minuter och hall av val.',
        'Mixa cashew med tillrackligt filtrerat vatten till en tjock, slat cream.',
        'Mixa kort ner probiotika och Penicillium Candidum och fermentera tackt i rumstemperatur 24-48 timmar.',
        'Forma i fodrade sma formar, kyl over natten, salta utsidan och lagra pa rent galler cirka 14 dagar, vand dagligen.',
      ],
    },
  },
  de: {
    'Sliceable Vegan Cheddar': {
      ingredientsMetric: [
        '140 g rohe Cashewkerne',
        '60 ml Zitronensaft',
        '55 g raffiniertes Kokosol',
        '30 g Nahrhefe',
        '8 g Maisstarke',
        '2 TL gerauchertes oder suses Paprikapulver',
        '1/4 TL Kurkuma',
        '1 1/2 TL feines Meersalz',
        '480 ml Wasser, aufgeteilt',
        '8 g Agar-Agar-Pulver',
      ],
      ingredientsBritish: [
        '5 oz rohe Cashewkerne',
        '4 EL Zitronensaft',
        '2 oz raffiniertes Kokosol',
        '1/2 cup Nahrhefeflocken',
        '1 EL Maisstarke',
        '2 TL gerauchertes oder suses Paprikapulver',
        '1/4 TL Kurkuma',
        '1 1/2 TL feines Meersalz',
        '16 fl oz Wasser, aufgeteilt',
        '1 EL Agar-Agar-Pulver',
      ],
      method: [
        'Cashews 5 Minuten mit kochendem Wasser bedecken, dann abgiessen.',
        'Cashews, Zitronensaft, Kokosol, Nahrhefe, Maisstarke, Gewurze, Salz und die Halfte des Wassers ganz glatt mixen.',
        'Das restliche Wasser mit Agar etwa 5 Minuten kocheln lassen und schlagen, bis alles gelost ist.',
        'Die heisse Agar-Mischung in die Cashewbasis mixen, in eine geolte Form giessen, abkuhlen lassen und mindestens 3 Stunden kalt stellen.',
      ],
    },
    'Nut-Free Shreddable Cheddar': {
      ingredientsMetric: [
        '240 ml vollfette Kokosmilch oder andere Pflanzenmilch',
        '1 gerostete rote Paprika, etwa 100 g',
        '15 g Agar-Pulver',
        '3/4-1 TL Salz',
        '1 TL Zwiebelpulver',
        '1 TL Knoblauchpulver',
        '1/2 TL gerauchertes Paprikapulver',
        '1/8 TL Kurkuma',
        '4 EL Nahrhefe',
        '60 g Tahini oder Cashewmus',
        '25 g Tomatenmark',
        '80 ml Olivenlake',
        '1 1/2 EL Tapiokamehl',
      ],
      ingredientsBritish: [
        '8 fl oz vollfette Kokosmilch oder andere Pflanzenmilch',
        '1 gerostete rote Paprika, etwa 3 1/2 oz',
        '2 EL Agar-Pulver',
        '3/4-1 TL Salz',
        '1 TL Zwiebelpulver',
        '1 TL Knoblauchpulver',
        '1/2 TL gerauchertes Paprikapulver',
        '1/8 TL Kurkuma',
        '4 EL Nahrhefe',
        '2 oz Tahini oder Cashewmus',
        '1 EL Tomatenmark',
        '2 3/4 fl oz Olivenlake',
        '1 1/2 EL Tapiokamehl',
      ],
      method: [
        'Eine kleine Kastenform oder Schale einolen, bevor die Kasebasis erhitzt wird.',
        'Milch, Paprika, Agar, Gewurze, Nahrhefe, Tahini und Tomatenmark glatt mixen.',
        'Die Mischung 4 Minuten kocheln lassen und oft ruhren, damit das Agar gleichmassig quillt.',
        'Olivenlake mit Tapioka verquirlen, in den Topf geben, 1 Minute weiterkochen, in die Form giessen und 2-3 Stunden kuhlen.',
      ],
    },
    'Smoked Gouda Block': {
      ingredientsMetric: [
        '70 g rohe Cashewstucke, mit heissem Wasser abgespult',
        '55 g raffiniertes Kokosol',
        '30 g Tapiokamehl',
        '1 EL Nahrhefe',
        '1 1/2 EL Kappa-Carrageen',
        '1 EL Zitronensaft',
        'knapp 1 TL Meersalz',
        '1 TL Wurzsalz',
        '1 1/2 TL Zwiebelpulver',
        '1/2 TL Knoblauchpulver',
        '1 TL Hickory-Raucharoma',
        '360 ml frisch gekochtes Wasser',
      ],
      ingredientsBritish: [
        '2 1/2 oz rohe Cashewstucke, mit heissem Wasser abgespult',
        '2 oz raffiniertes Kokosol',
        '1 oz Tapiokamehl',
        '1 EL Nahrhefe',
        '1 1/2 EL Kappa-Carrageen',
        '1 EL Zitronensaft',
        'knapp 1 TL Meersalz',
        '1 TL Wurzsalz',
        '1 1/2 TL Zwiebelpulver',
        '1/2 TL Knoblauchpulver',
        '1 TL Hickory-Raucharoma',
        '12 fl oz frisch gekochtes Wasser',
      ],
      method: [
        'Eine hitzefeste Form mit etwa 700 ml Fassungsvermogen neben den Mixer stellen.',
        'Alle Zutaten ausser dem kochenden Wasser in den Mixer geben, Pulver oben auf die Cashews.',
        'Das frisch gekochte Wasser hineingiessen und sofort mixen, bis die Masse glanzend und glatt ist.',
        'Sofort in die Form geben, 2-3 Stunden kuhlen, dann einwickeln und uber Nacht ruhen lassen fur saubere Scheiben.',
      ],
    },
    'Cashew Provolone Slices': {
      ingredientsMetric: [
        '60 ml frischer Zitronensaft',
        '70 g rohe Cashewkerne',
        '3 EL Tahini',
        '2 EL Nahrhefe',
        '1 EL helle Misopaste',
        '3 EL geschmolzenes raffiniertes Kokosol',
        '1 1/2 TL Salz',
        '420 ml Wasser',
        '2 EL plus 1 TL Tapiokastarke',
        '4 1/2 TL Kappa-Carrageen',
      ],
      ingredientsBritish: [
        '2 fl oz frischer Zitronensaft',
        '2 1/2 oz rohe Cashewkerne',
        '3 EL Tahini',
        '2 EL Nahrhefe',
        '1 EL helle Misopaste',
        '3 EL geschmolzenes raffiniertes Kokosol',
        '1 1/2 TL Salz',
        '14 fl oz Wasser',
        '2 EL plus 1 TL Tapiokastarke',
        '4 1/2 TL Kappa-Carrageen',
      ],
      method: [
        'Wasser, Zitronensaft, Cashews, Tahini, Nahrhefe, Miso, Kokosol und Salz sehr glatt mixen.',
        'Tapioka und Kappa-Carrageen zugeben und nur kurz untermixen.',
        'In einem Topf bei mittlerer Hitze kraftig schlagen, bis die Masse kocht, andickt und sich vom Topf lost.',
        'In eine geolte Form giessen, 20 Minuten abkuhlen lassen, abdecken und mindestens 4 Stunden kuhlen.',
      ],
    },
    'Aged Vegan Camembert-Style Wheel': {
      ingredientsMetric: [
        '600 g rohe Cashewkerne, uber Nacht eingeweicht',
        '120-150 ml gefiltertes Wasser',
        '8 Acidophilus-Kapseln oder 1/8 TL mesophile Kultur',
        '1/8 TL Penicillium Candidum',
        '10-15 g Meersalz',
      ],
      ingredientsBritish: [
        '1 lb 5 oz rohe Cashewkerne, uber Nacht eingeweicht',
        '4-5 fl oz gefiltertes Wasser',
        '8 Acidophilus-Kapseln oder 1/8 TL mesophile Kultur',
        '1/8 TL Penicillium Candidum',
        '2 TL Meersalz',
      ],
      method: [
        'Die eingeweichten Cashews 1-2 Minuten mit kochendem Wasser uberbruhen und gut abtropfen lassen.',
        'Cashews mit genug gefiltertem Wasser zu einer dicken, glatten Creme mixen.',
        'Probiotikum und Penicillium Candidum kurz einmixen, dann abgedeckt 24-48 Stunden bei Raumtemperatur fermentieren.',
        'In ausgelegte kleine Formen geben, uber Nacht kuhlen, aussen salzen und etwa 14 Tage auf sauberem Gitter reifen lassen, taglich wenden.',
      ],
    },
  },
  fr: {
    'Sliceable Vegan Cheddar': {
      ingredientsMetric: [
        '140 g de noix de cajou crues',
        '60 ml de jus de citron',
        '55 g d huile de coco raffinee',
        '30 g de levure nutritionnelle',
        '8 g de fecule de mais',
        '2 c. a cafe de paprika fume ou doux',
        '1/4 c. a cafe de curcuma',
        '1 1/2 c. a cafe de sel marin fin',
        '480 ml d eau, separee',
        '8 g de poudre d agar-agar',
      ],
      ingredientsBritish: [
        '5 oz de noix de cajou crues',
        '4 c. a soupe de jus de citron',
        '2 oz d huile de coco raffinee',
        '1/2 cup de levure nutritionnelle en flocons',
        '1 c. a soupe de fecule de mais',
        '2 c. a cafe de paprika fume ou doux',
        '1/4 c. a cafe de curcuma',
        '1 1/2 c. a cafe de sel marin fin',
        '16 fl oz d eau, separee',
        '1 c. a soupe de poudre d agar-agar',
      ],
      method: [
        'Couvrir les noix de cajou d eau bouillante pendant 5 minutes, puis egoutter.',
        'Mixer les cajous, le jus de citron, l huile de coco, la levure, la fecule, les epices, le sel et la moitie de l eau jusqu a texture lisse.',
        'Faire fremir le reste de l eau avec l agar environ 5 minutes en fouettant jusqu a dissolution complete.',
        'Mixer le melange chaud d agar dans la base de cajou, verser dans un moule huile, laisser refroidir puis refrigerer au moins 3 heures avant de trancher.',
      ],
    },
    'Nut-Free Shreddable Cheddar': {
      ingredientsMetric: [
        '240 ml de lait de coco entier ou autre lait vegetal',
        '1 poivron rouge roti, environ 100 g',
        '15 g de poudre d agar',
        '3/4-1 c. a cafe de sel',
        '1 c. a cafe de poudre d oignon',
        '1 c. a cafe de poudre d ail',
        '1/2 c. a cafe de paprika fume',
        '1/8 c. a cafe de curcuma',
        '4 c. a soupe de levure nutritionnelle',
        '60 g de tahini ou puree de cajou',
        '25 g de concentre de tomate',
        '80 ml de saumure d olives',
        '1 1/2 c. a soupe de farine de tapioca',
      ],
      ingredientsBritish: [
        '8 fl oz de lait de coco entier ou autre lait vegetal',
        '1 poivron rouge roti, environ 3 1/2 oz',
        '2 c. a soupe de poudre d agar',
        '3/4-1 c. a cafe de sel',
        '1 c. a cafe de poudre d oignon',
        '1 c. a cafe de poudre d ail',
        '1/2 c. a cafe de paprika fume',
        '1/8 c. a cafe de curcuma',
        '4 c. a soupe de levure nutritionnelle',
        '2 oz de tahini ou puree de cajou',
        '1 c. a soupe de concentre de tomate',
        '2 3/4 fl oz de saumure d olives',
        '1 1/2 c. a soupe de farine de tapioca',
      ],
      method: [
        'Huiler un petit moule a cake ou un bol avant de chauffer la base.',
        'Mixer le lait, le poivron, l agar, les epices, la levure, le tahini et le concentre de tomate jusqu a texture lisse.',
        'Faire fremir 4 minutes en remuant souvent pour hydrater l agar uniformement.',
        'Fouetter la saumure avec le tapioca, l ajouter a la casserole, cuire 1 minute de plus, verser dans le moule et refrigerer 2-3 heures.',
      ],
    },
    'Smoked Gouda Block': {
      ingredientsMetric: [
        '70 g de morceaux de cajou crus, rinces a l eau chaude',
        '55 g d huile de coco raffinee',
        '30 g de farine de tapioca',
        '1 c. a soupe de levure nutritionnelle',
        '1 1/2 c. a soupe de kappa carrageenan',
        '1 c. a soupe de jus de citron',
        'un peu moins de 1 c. a cafe de sel marin',
        '1 c. a cafe de sel assaisonne',
        '1 1/2 c. a cafe de poudre d oignon',
        '1/2 c. a cafe de poudre d ail',
        '1 c. a cafe d arome fume hickory',
        '360 ml d eau juste bouillie',
      ],
      ingredientsBritish: [
        '2 1/2 oz de morceaux de cajou crus, rinces a l eau chaude',
        '2 oz d huile de coco raffinee',
        '1 oz de farine de tapioca',
        '1 c. a soupe de levure nutritionnelle',
        '1 1/2 c. a soupe de kappa carrageenan',
        '1 c. a soupe de jus de citron',
        'un peu moins de 1 c. a cafe de sel marin',
        '1 c. a cafe de sel assaisonne',
        '1 1/2 c. a cafe de poudre d oignon',
        '1/2 c. a cafe de poudre d ail',
        '1 c. a cafe d arome fume hickory',
        '12 fl oz d eau juste bouillie',
      ],
      method: [
        'Placer un moule resistant a la chaleur d environ 700 ml pres du blender.',
        'Ajouter tous les ingredients sauf l eau bouillante dans le blender, les poudres sur les cajous.',
        'Verser l eau juste bouillie et mixer aussitot jusqu a obtenir une texture brillante et lisse.',
        'Transferer tout de suite dans le moule, refrigerer 2-3 heures, puis emballer et laisser reposer une nuit pour de belles tranches.',
      ],
    },
    'Cashew Provolone Slices': {
      ingredientsMetric: [
        '60 ml de jus de citron frais',
        '70 g de noix de cajou crues',
        '3 c. a soupe de tahini',
        '2 c. a soupe de levure nutritionnelle',
        '1 c. a soupe de miso blanc doux',
        '3 c. a soupe d huile de coco raffinee fondue',
        '1 1/2 c. a cafe de sel',
        '420 ml d eau',
        '2 c. a soupe plus 1 c. a cafe de fecule de tapioca',
        '4 1/2 c. a cafe de kappa carrageenan',
      ],
      ingredientsBritish: [
        '2 fl oz de jus de citron frais',
        '2 1/2 oz de noix de cajou crues',
        '3 c. a soupe de tahini',
        '2 c. a soupe de levure nutritionnelle',
        '1 c. a soupe de miso blanc doux',
        '3 c. a soupe d huile de coco raffinee fondue',
        '1 1/2 c. a cafe de sel',
        '14 fl oz d eau',
        '2 c. a soupe plus 1 c. a cafe de fecule de tapioca',
        '4 1/2 c. a cafe de kappa carrageenan',
      ],
      method: [
        'Mixer l eau, le jus de citron, les cajous, le tahini, la levure, le miso, l huile de coco et le sel jusqu a texture tres lisse.',
        'Ajouter le tapioca et le kappa carrageenan, puis mixer brievement pour incorporer.',
        'Cuire dans une casserole a feu moyen en fouettant fort jusqu a ebullition, epaississement et decollement de la casserole.',
        'Verser dans un moule huile, laisser refroidir 20 minutes, couvrir et refrigerer au moins 4 heures avant de trancher.',
      ],
    },
    'Aged Vegan Camembert-Style Wheel': {
      ingredientsMetric: [
        '600 g de noix de cajou crues, trempees toute la nuit',
        '120-150 ml d eau filtree',
        '8 capsules d acidophilus ou 1/8 c. a cafe de culture mesophile',
        '1/8 c. a cafe de Penicillium Candidum',
        '10-15 g de sel marin',
      ],
      ingredientsBritish: [
        '1 lb 5 oz de noix de cajou crues, trempees toute la nuit',
        '4-5 fl oz d eau filtree',
        '8 capsules d acidophilus ou 1/8 c. a cafe de culture mesophile',
        '1/8 c. a cafe de Penicillium Candidum',
        '2 c. a cafe de sel marin',
      ],
      method: [
        'Ebouillanter les cajous trempes 1-2 minutes, puis bien egoutter.',
        'Mixer les cajous avec juste assez d eau filtree pour obtenir une creme epaisse et lisse.',
        'Mixer brievement le probiotique et le Penicillium Candidum, puis fermenter couvert a temperature ambiante 24-48 heures.',
        'Former dans de petits moules chemises, refrigerer une nuit, saler l exterieur, puis affiner sur une grille propre environ 14 jours en retournant chaque jour.',
      ],
    },
  },
  es: {
    'Sliceable Vegan Cheddar': {
      ingredientsMetric: [
        '140 g de anacardos crudos',
        '60 ml de zumo de limon',
        '55 g de aceite de coco refinado',
        '30 g de levadura nutricional',
        '8 g de maicena',
        '2 cdta de pimenton ahumado o dulce',
        '1/4 cdta de curcuma',
        '1 1/2 cdta de sal marina fina',
        '480 ml de agua, dividida',
        '8 g de agar agar en polvo',
      ],
      ingredientsBritish: [
        '5 oz de anacardos crudos',
        '4 cda de zumo de limon',
        '2 oz de aceite de coco refinado',
        '1/2 cup de levadura nutricional en copos',
        '1 cda de maicena',
        '2 cdta de pimenton ahumado o dulce',
        '1/4 cdta de curcuma',
        '1 1/2 cdta de sal marina fina',
        '16 fl oz de agua, dividida',
        '1 cda de agar agar en polvo',
      ],
      method: [
        'Cubre los anacardos con agua hirviendo durante 5 minutos y escurre.',
        'Tritura anacardos, limon, aceite de coco, levadura nutricional, maicena, especias, sal y la mitad del agua hasta que quede totalmente liso.',
        'Cuece a fuego suave el agua restante con agar durante unos 5 minutos, batiendo hasta disolver.',
        'Tritura la mezcla caliente de agar con la base de anacardo, vierte en un molde aceitado, enfria y refrigera al menos 3 horas antes de rebanar.',
      ],
    },
    'Nut-Free Shreddable Cheddar': {
      ingredientsMetric: [
        '240 ml de leche de coco entera u otra leche vegetal',
        '1 pimiento rojo asado, unos 100 g',
        '15 g de agar en polvo',
        '3/4-1 cdta de sal',
        '1 cdta de cebolla en polvo',
        '1 cdta de ajo en polvo',
        '1/2 cdta de pimenton ahumado',
        '1/8 cdta de curcuma',
        '4 cda de levadura nutricional',
        '60 g de tahini o mantequilla de anacardo',
        '25 g de concentrado de tomate',
        '80 ml de salmuera de aceitunas',
        '1 1/2 cda de harina de tapioca',
      ],
      ingredientsBritish: [
        '8 fl oz de leche de coco entera u otra leche vegetal',
        '1 pimiento rojo asado, unos 3 1/2 oz',
        '2 cda de agar en polvo',
        '3/4-1 cdta de sal',
        '1 cdta de cebolla en polvo',
        '1 cdta de ajo en polvo',
        '1/2 cdta de pimenton ahumado',
        '1/8 cdta de curcuma',
        '4 cda de levadura nutricional',
        '2 oz de tahini o mantequilla de anacardo',
        '1 cda de concentrado de tomate',
        '2 3/4 fl oz de salmuera de aceitunas',
        '1 1/2 cda de harina de tapioca',
      ],
      method: [
        'Aceita un molde pequeno o bol antes de calentar la base del queso.',
        'Tritura leche, pimiento, agar, especias, levadura nutricional, tahini y tomate hasta que quede liso.',
        'Cuece la mezcla 4 minutos, removiendo a menudo para hidratar bien el agar.',
        'Bate la salmuera con la tapioca, anadela a la olla, cocina 1 minuto mas, vierte en el molde y refrigera 2-3 horas.',
      ],
    },
    'Smoked Gouda Block': {
      ingredientsMetric: [
        '70 g de trozos de anacardo crudo, enjuagados con agua caliente',
        '55 g de aceite de coco refinado',
        '30 g de harina de tapioca',
        '1 cda de levadura nutricional',
        '1 1/2 cda de kappa carrageenan',
        '1 cda de zumo de limon',
        'algo menos de 1 cdta de sal marina',
        '1 cdta de sal sazonada',
        '1 1/2 cdta de cebolla en polvo',
        '1/2 cdta de ajo en polvo',
        '1 cdta de aroma de humo hickory',
        '360 ml de agua recien hervida',
      ],
      ingredientsBritish: [
        '2 1/2 oz de trozos de anacardo crudo, enjuagados con agua caliente',
        '2 oz de aceite de coco refinado',
        '1 oz de harina de tapioca',
        '1 cda de levadura nutricional',
        '1 1/2 cda de kappa carrageenan',
        '1 cda de zumo de limon',
        'algo menos de 1 cdta de sal marina',
        '1 cdta de sal sazonada',
        '1 1/2 cdta de cebolla en polvo',
        '1/2 cdta de ajo en polvo',
        '1 cdta de aroma de humo hickory',
        '12 fl oz de agua recien hervida',
      ],
      method: [
        'Coloca un molde resistente al calor de unos 700 ml junto a la batidora.',
        'Anade todos los ingredientes excepto el agua hirviendo a la batidora, con los polvos encima de los anacardos.',
        'Vierte el agua recien hervida y tritura de inmediato hasta que quede brillante y liso.',
        'Pasa al molde enseguida, refrigera 2-3 horas, envuelve y deja reposar toda la noche para cortes mas limpios.',
      ],
    },
    'Cashew Provolone Slices': {
      ingredientsMetric: [
        '60 ml de zumo de limon fresco',
        '70 g de anacardos crudos',
        '3 cda de tahini',
        '2 cda de levadura nutricional',
        '1 cda de miso blanco suave',
        '3 cda de aceite de coco refinado derretido',
        '1 1/2 cdta de sal',
        '420 ml de agua',
        '2 cda mas 1 cdta de almidon de tapioca',
        '4 1/2 cdta de kappa carrageenan',
      ],
      ingredientsBritish: [
        '2 fl oz de zumo de limon fresco',
        '2 1/2 oz de anacardos crudos',
        '3 cda de tahini',
        '2 cda de levadura nutricional',
        '1 cda de miso blanco suave',
        '3 cda de aceite de coco refinado derretido',
        '1 1/2 cdta de sal',
        '14 fl oz de agua',
        '2 cda mas 1 cdta de almidon de tapioca',
        '4 1/2 cdta de kappa carrageenan',
      ],
      method: [
        'Tritura agua, limon, anacardos, tahini, levadura nutricional, miso, aceite de coco y sal hasta que quede muy liso.',
        'Anade tapioca y kappa carrageenan y tritura brevemente solo para mezclar.',
        'Cocina en una olla a fuego medio, batiendo fuerte, hasta que hierva, espese y se despegue de la olla.',
        'Vierte en un molde aceitado, deja enfriar 20 minutos, cubre y refrigera al menos 4 horas antes de rebanar.',
      ],
    },
    'Aged Vegan Camembert-Style Wheel': {
      ingredientsMetric: [
        '600 g de anacardos crudos, remojados toda la noche',
        '120-150 ml de agua filtrada',
        '8 capsulas de acidophilus o 1/8 cdta de cultivo mesofilo',
        '1/8 cdta de Penicillium Candidum',
        '10-15 g de sal marina',
      ],
      ingredientsBritish: [
        '1 lb 5 oz de anacardos crudos, remojados toda la noche',
        '4-5 fl oz de agua filtrada',
        '8 capsulas de acidophilus o 1/8 cdta de cultivo mesofilo',
        '1/8 cdta de Penicillium Candidum',
        '2 cdta de sal marina',
      ],
      method: [
        'Escalda los anacardos remojados con agua hirviendo 1-2 minutos y escurre bien.',
        'Tritura los anacardos con suficiente agua filtrada hasta obtener una crema espesa y lisa.',
        'Incorpora brevemente el probiotico y Penicillium Candidum, luego fermenta tapado a temperatura ambiente 24-48 horas.',
        'Forma en moldes pequenos forrados, refrigera toda la noche, sala el exterior y cura sobre una rejilla limpia unos 14 dias, girando a diario.',
      ],
    },
  },
};

const searchInput = document.getElementById('searchInput');
const languageSelect = document.getElementById('languageSelect');
const styleFilter = document.getElementById('styleFilter');
const dietFilter = document.getElementById('dietFilter');
const formatFilter = document.getElementById('formatFilter');
const unitSelect = document.getElementById('unitSelect');
const sortSelect = document.getElementById('sortSelect');
const resetBtn = document.getElementById('resetBtn');
const recipeGrid = document.getElementById('recipeGrid');
const recipeCount = document.getElementById('recipeCount');
const averageRating = document.getElementById('averageRating');
const sourceCount = document.getElementById('sourceCount');

let currentLanguage = 'en';

function t(key) {
  return ui[currentLanguage][key] || ui.en[key] || key;
}

function copyFor(recipe, field) {
  return recipeDetailText[currentLanguage]?.[recipe.title]?.[field] || recipeText[currentLanguage]?.[recipe.title]?.[field] || recipe[field];
}

function confidenceScore(recipe) {
  if (recipe.rating === 0 || recipe.reviews === 0) return 0;
  return recipe.rating * 100 + Math.min(recipe.reviews, 180) * 0.7;
}

function formatMinutes(minutes) {
  if (minutes >= 1440) return `${Math.round(minutes / 1440)} ${t('days')}`;
  if (minutes >= 60) return `${Math.round(minutes / 60)} ${t('hour')}`;
  return `${minutes} ${t('minutes')}`;
}

function populateStyles() {
  const selected = styleFilter.value || 'all';
  styleFilter.replaceChildren();
  const allOption = document.createElement('option');
  allOption.value = 'all';
  allOption.textContent = t('allStyles');
  styleFilter.append(allOption);

  const styles = [...new Set(recipes.map((recipe) => recipe.style))].sort();
  styles.forEach((style) => {
    const option = document.createElement('option');
    option.value = style;
    option.textContent = styleNames[currentLanguage][style] || style;
    styleFilter.append(option);
  });
  styleFilter.value = [...styleFilter.options].some((option) => option.value === selected) ? selected : 'all';
}

function getFilteredRecipes() {
  const query = searchInput.value.trim().toLowerCase();
  const style = styleFilter.value;
  const diet = dietFilter.value;
  const format = formatFilter.value;

  return recipes.filter((recipe) => {
    const searchable = [
      recipe.title,
      recipe.source,
      recipe.style,
      copyFor(recipe, 'title'),
      copyFor(recipe, 'description'),
      recipe.ingredients.join(' '),
      recipe.diets.join(' '),
      recipe.ingredientsMetric?.join(' ') || '',
      recipe.ingredientsBritish?.join(' ') || '',
    ].join(' ').toLowerCase();

    const matchesQuery = !query || searchable.includes(query);
    const matchesStyle = style === 'all' || recipe.style === style;
    const matchesDiet = diet === 'all' || recipe.diets.includes(diet);
    const matchesFormat = format === 'all' || recipe.format === format;
    return matchesQuery && matchesStyle && matchesDiet && matchesFormat;
  });
}

function sortRecipes(recipeList) {
  const sorted = [...recipeList];
  const sortBy = sortSelect.value;

  sorted.sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating || b.reviews - a.reviews;
    if (sortBy === 'reviews') return b.reviews - a.reviews || b.rating - a.rating;
    if (sortBy === 'time') return a.minutes - b.minutes || b.rating - a.rating;
    return confidenceScore(b) - confidenceScore(a);
  });

  return sorted;
}

function renderStats(recipeList) {
  recipeCount.textContent = recipeList.length;
  sourceCount.textContent = new Set(recipeList.map((recipe) => recipe.source)).size;
  const rated = recipeList.filter((recipe) => recipe.rating > 0);
  const average = rated.reduce((sum, recipe) => sum + recipe.rating, 0) / rated.length || 0;
  averageRating.textContent = average.toFixed(1);
}

function renderList(items, ordered = false) {
  const tag = ordered ? 'ol' : 'ul';
  return `<${tag}>${items.map((item) => `<li>${item}</li>`).join('')}</${tag}>`;
}

function renderRecipeDetails(recipe) {
  if (!recipe.ingredientsMetric || !recipe.method) return '';
  const ingredients = unitSelect.value === 'metric' ? copyFor(recipe, 'ingredientsMetric') : copyFor(recipe, 'ingredientsBritish');
  const unitLabel = unitSelect.value === 'metric' ? t('metricIngredients') : t('britishIngredients');

  return `
    <div class="recipe-details">
      <h4>${unitLabel}</h4>
      ${renderList(ingredients)}
      <h4>${t('method')}</h4>
      ${renderList(copyFor(recipe, 'method'), true)}
      <p class="adapted">${copyFor(recipe, 'adaptedFrom')}</p>
    </div>
  `;
}

function renderRecipes(recipeList) {
  recipeGrid.replaceChildren();

  if (recipeList.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'empty';
    empty.textContent = t('recipesEmpty');
    recipeGrid.append(empty);
    return;
  }

  const fragment = document.createDocumentFragment();

  recipeList.forEach((recipe) => {
    const card = document.createElement('article');
    card.className = 'recipe-card';
    const ratingLabel = recipe.rating > 0 ? recipe.rating.toFixed(2) : t('newLabel');
    const reviewLabel = recipe.reviews > 0 ? `${recipe.reviews} ${t('reviews')}` : t('noRatings');
    const styleLabel = styleNames[currentLanguage][recipe.style] || recipe.style;
    const title = copyFor(recipe, 'title');
    card.innerHTML = `
      <img src="${recipe.image}" alt="${title}" loading="lazy">
      <div class="recipe-body">
        <div class="recipe-top">
          <h3>${title}</h3>
          <div class="rating">${ratingLabel}</div>
        </div>
        <div class="meta">
          <span class="pill">${styleLabel}</span>
          <span class="pill">${recipe.format === 'hard' ? t('hardBadge') : t('quickBadge')}</span>
          <span class="pill">${reviewLabel}</span>
          <span class="pill">${formatMinutes(recipe.minutes)}</span>
        </div>
        <p class="description">${copyFor(recipe, 'description')}</p>
        <p class="verify">${copyFor(recipe, 'verified')}</p>
        ${renderRecipeDetails(recipe)}
        <div class="card-actions">
          <span class="source">${recipe.source}</span>
          <a href="${recipe.url}" target="_blank" rel="noreferrer">${t('openSource')}</a>
        </div>
      </div>
    `;
    fragment.append(card);
  });

  recipeGrid.append(fragment);
}

function update() {
  const filtered = getFilteredRecipes();
  const sorted = sortRecipes(filtered);
  renderStats(sorted);
  renderRecipes(sorted);
}

function resetFilters() {
  searchInput.value = '';
  styleFilter.value = 'all';
  dietFilter.value = 'all';
  formatFilter.value = 'all';
  unitSelect.value = 'metric';
  sortSelect.value = 'confidence';
  update();
}

function applyStaticTranslations() {
  document.documentElement.lang = currentLanguage;
  document.title = t('pageTitle');
  searchInput.placeholder = t('searchPlaceholder');
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    element.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    const key = element.getAttribute('data-i18n-aria');
    element.setAttribute('aria-label', t(key));
  });
}

function changeLanguage(language) {
  currentLanguage = ui[language] ? language : 'en';
  languageSelect.value = currentLanguage;
  applyStaticTranslations();
  populateStyles();
  update();
}

populateStyles();
applyStaticTranslations();
update();

[searchInput, styleFilter, dietFilter, formatFilter, unitSelect, sortSelect].forEach((control) => {
  control.addEventListener('input', update);
});

languageSelect.addEventListener('input', () => changeLanguage(languageSelect.value));
resetBtn.addEventListener('click', resetFilters);
