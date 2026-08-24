var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/App.tsx
var App_exports = {};
__export(App_exports, {
  default: () => App
});
module.exports = __toCommonJS(App_exports);
var import_react26 = require("react");

// src/data/products.ts
var BAKERY_PRODUCTS = [
  {
    id: "country-batard",
    name: "Country Batard",
    frenchName: "Pain de Campagne",
    description: "Our flagship sourdough made with stoneground organic heritage flour, wild levain, and French grey sea salt. Crisp blistered crust with an open, custard-like crumb.",
    price: 8.5,
    category: "sourdough",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Baguettes%2C_Paris%2C_France_-_panoramio.jpg/1280px-Baguettes%2C_Paris%2C_France_-_panoramio.jpg",
    tags: ["Best Seller", "36h Ferment", "Signature"],
    dietary: ["Organic", "Vegan", "Signature"],
    ingredients: ["Organic French T65 Flour", "Stoneground Whole Rye", "Wild Yeast Levain", "Guerande Grey Sea Salt", "Filtered Spring Water"],
    flourType: "Stoneground T65 & Heritage Rye",
    fermentationHours: 36,
    hydrationPercentage: 82,
    origin: "Natural Levain Culture since 1912",
    allergens: ["Wheat / Gluten"],
    isOvenFresh: true,
    nextBakeTime: "10:30 AM",
    rating: 4.96,
    reviewsCount: 184,
    isPopular: true,
    canBeSliced: true,
    weightGrams: 850,
    flavorNotes: ["Subtle lactic acidity", "Toasted hazelnuts", "Caramelized crust notes"],
    pairingNotes: "Cultured salted butter, sharp aged Comt\xE9, or roasted garlic confit."
  },
  {
    id: "einkorn-miche",
    name: "Ancient Einkorn Miche",
    frenchName: "Miche au Petit \xC9peautre",
    description: "A deeply nourishing loaf milled from 100% organic Einkorn\u2014the oldest cultivated wheat grain. Rich, nutty, and naturally gentle on sensitive digestion.",
    price: 10.5,
    category: "sourdough",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Boule_de_campagne_01.jpg/1280px-Boule_de_campagne_01.jpg",
    tags: ["Ancient Grain", "Low Gluten", "Stoneground"],
    dietary: ["Ancient Grains", "Organic", "Vegan"],
    ingredients: ["100% Organic Stoneground Einkorn Flour", "Wild Sourdough Culture", "Spring Water", "Celtic Sea Salt"],
    flourType: "100% Organic Whole Grain Einkorn",
    fermentationHours: 42,
    hydrationPercentage: 79,
    origin: "Single-estate biodynamic farm in Provence",
    allergens: ["Wheat (Ancient Low-Gluten Variety)"],
    isOvenFresh: false,
    nextBakeTime: "1:00 PM",
    rating: 4.92,
    reviewsCount: 92,
    isPopular: false,
    canBeSliced: true,
    weightGrams: 900,
    flavorNotes: ["Warm honeyed grain", "Roasted walnuts", "Earthy sweetness"],
    pairingNotes: "Mild goat cheese, fig preserves, or hearty root vegetable soups."
  },
  {
    id: "olive-thyme-sourdough",
    name: "Kalamata Olive & Thyme Sourdough",
    frenchName: "Pain aux Olives et Thym Sauvage",
    description: "Plump sun-ripened Kalamata olives folded with fresh mountain thyme, extra virgin olive oil, and organic wheat levain into a fragrant, tender loaf.",
    price: 9.75,
    category: "sourdough",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Kommissbrot.jpg/1280px-Kommissbrot.jpg",
    tags: ["Herbal & Savory", "Hand-Folded"],
    dietary: ["Vegan", "Organic"],
    ingredients: ["Organic Wheat Flour", "Natural Sourdough Levain", "Hand-Pitted Kalamata Olives", "Fresh Organic Thyme", "First Cold-Pressed Olive Oil", "Sea Salt"],
    flourType: "Organic High-Extraction Wheat",
    fermentationHours: 32,
    hydrationPercentage: 80,
    allergens: ["Wheat / Gluten"],
    isOvenFresh: true,
    nextBakeTime: "11:15 AM",
    rating: 4.88,
    reviewsCount: 116,
    isPopular: true,
    canBeSliced: true,
    weightGrams: 800,
    flavorNotes: ["Briny olive bursts", "Resinous thyme aromatics", "Fruity olive oil finish"],
    pairingNotes: "Dipping into extra virgin olive oil with sea salt, burrata cheese, or charcuterie."
  },
  {
    id: "walnut-fig-levain",
    name: "Roasted Walnut & Black Fig Levain",
    frenchName: "Pain aux Noix et Figues Sauvages",
    description: "Slow-fermented whole wheat sourdough studded with toasted P\xE9rigord walnuts and sweet organic Mission black mission figs.",
    price: 11,
    category: "sourdough",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Home_made_sour_dough_bread.jpg/1280px-Home_made_sour_dough_bread.jpg",
    tags: ["Artisan Special", "Stoneground"],
    dietary: ["Organic", "Vegan"],
    ingredients: ["Organic Stoneground Whole Wheat", "Organic T80 Flour", "Toasted P\xE9rigord Walnuts", "Organic Black Mission Figs", "Wild Levain", "Sea Salt"],
    flourType: "Heritage Wheat & Rye Blend",
    fermentationHours: 36,
    hydrationPercentage: 81,
    allergens: ["Wheat / Gluten", "Tree Nuts (Walnuts)"],
    isOvenFresh: false,
    nextBakeTime: "2:30 PM",
    rating: 4.95,
    reviewsCount: 140,
    isPopular: true,
    canBeSliced: true,
    weightGrams: 750,
    flavorNotes: ["Caramelized fig sweetness", "Deep walnut earthiness", "Rich roasted crust"],
    pairingNotes: "Blue cheese, prosciutto di Parma, or alongside morning espresso."
  },
  {
    id: "classic-croissant",
    name: "Isigny Butter Croissant",
    frenchName: "Croissant au Beurre AOP",
    description: "Hand-laminated through 27 honeycomb layers using Normandy Isigny Sainte-M\xE8re AOP butter. Ultra crisp golden shell with an airy, cloud-like interior.",
    price: 4.75,
    category: "viennoiserie",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Croissant-Petr_Kratochvil.jpg",
    tags: ["Signature", "AOP Butter", "27 Layers"],
    dietary: ["Vegetarian", "Signature"],
    ingredients: ["French T45 Flour", "Isigny Sainte-M\xE8re AOP Cultured Butter (84% butterfat)", "Whole Milk", "Brown Cane Sugar", "Sea Salt", "Slow Ferment Starter"],
    flourType: "French T45 Red Label Pastry Flour",
    fermentationHours: 24,
    allergens: ["Wheat / Gluten", "Dairy / Milk", "Eggs"],
    isOvenFresh: true,
    nextBakeTime: "9:00 AM & 12:00 PM",
    rating: 4.98,
    reviewsCount: 312,
    isPopular: true,
    canBeSliced: false,
    weightGrams: 90,
    flavorNotes: ["Intense cultured butter", "Slight caramelized sweetness", "Shattering flake texture"],
    pairingNotes: "A double shot flat white or fresh strawberry preserves."
  },
  {
    id: "pain-au-chocolat",
    name: "Valrhona Pain au Chocolat",
    frenchName: "Chocolatine Valrhona 66%",
    description: "Double-baton of dark 66% Cara\xEFbe Valrhona single-origin chocolate encased in buttery, caramelized golden laminated pastry.",
    price: 5.5,
    category: "viennoiserie",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Pain_au_chocolat_Luc_Viatour.jpg/1280px-Pain_au_chocolat_Luc_Viatour.jpg",
    tags: ["Valrhona Grand Cru", "Crisp Layers"],
    dietary: ["Vegetarian"],
    ingredients: ["French T45 Pastry Flour", "Normandy AOP Butter", "Valrhona 66% Cara\xEFbe Dark Chocolate Batons", "Whole Milk", "Sea Salt"],
    flourType: "T45 Label Rouge",
    fermentationHours: 24,
    allergens: ["Wheat / Gluten", "Dairy / Milk", "Soy (Lecithin)", "Eggs"],
    isOvenFresh: true,
    nextBakeTime: "9:00 AM & 12:00 PM",
    rating: 4.97,
    reviewsCount: 260,
    isPopular: true,
    canBeSliced: false,
    weightGrams: 105,
    flavorNotes: ["Bittersweet cocoa", "Silky hazelnut undercurrent", "Rich golden butter crust"],
    pairingNotes: "Caf\xE9 cr\xE8me or cold brew with oat milk."
  },
  {
    id: "kouign-amann",
    name: "Brittany Kouign-Amann",
    frenchName: "Kouign-Amann de Douarnenez",
    description: "Traditional Breton pastry layered with salted cultured butter and raw cane sugar, baked to create a lacquered, crunchy caramel shell with a tender, moist heart.",
    price: 5.75,
    category: "viennoiserie",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Kouignamann.JPG/1280px-Kouignamann.JPG",
    tags: ["Caramel Crust", "Breton Heritage"],
    dietary: ["Vegetarian"],
    ingredients: ["French Pastry Flour", "Salted Breton Cultured Butter", "Organic Demerara Cane Sugar", "Natural Yeast", "Fleur de Sel"],
    fermentationHours: 18,
    allergens: ["Wheat / Gluten", "Dairy / Milk"],
    isOvenFresh: true,
    nextBakeTime: "10:00 AM",
    rating: 4.94,
    reviewsCount: 195,
    isPopular: true,
    canBeSliced: false,
    weightGrams: 110,
    flavorNotes: ["Toffee caramel", "Guerande sea salt crisp", "Tender buttery core"],
    pairingNotes: "Artisanal cider, dark roast espresso, or Earl Grey tea."
  },
  {
    id: "cardamom-morning-bun",
    name: "Swedish Cardamom Bun",
    frenchName: "Kardemummabulle Levain",
    description: "Knotted brioche dough infused with freshly crushed green cardamom seeds, brown sugar, and a brush of vanilla orange blossom syrup.",
    price: 5.25,
    category: "viennoiserie",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Cinnamon_roll_in_Stockholm.jpg/1280px-Cinnamon_roll_in_Stockholm.jpg",
    tags: ["Fresh Ground Spice", "Aromatic"],
    dietary: ["Vegetarian"],
    ingredients: ["Organic Wheat Flour", "Cultured Butter", "Fresh Green Cardamom Pods", "Brown Sugar", "Orange Blossom Honey Glaze", "Milk"],
    allergens: ["Wheat / Gluten", "Dairy / Milk", "Eggs"],
    isOvenFresh: false,
    nextBakeTime: "11:00 AM",
    rating: 4.91,
    reviewsCount: 132,
    isPopular: false,
    canBeSliced: false,
    weightGrams: 95,
    flavorNotes: ["Fragrant cardamom burst", "Citrus undertones", "Caramelized knot base"],
    pairingNotes: "Pour-over Ethiopian coffee with floral tasting notes."
  },
  {
    id: "cannele-bordeaux",
    name: "Cannel\xE9 de Bordeaux (Pack of 2)",
    frenchName: "Cannel\xE9s Bordelais Traditionnels",
    description: "Custardy rum and Tahitian vanilla interior enclosed in a deeply caramelized, crisp copper-mold beeswax crust. Baked in authentic French copper molds.",
    price: 7,
    category: "patisserie",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Caneles_stemilion.jpg/1280px-Caneles_stemilion.jpg",
    tags: ["Beeswax Shell", "Aged Rum"],
    dietary: ["Vegetarian", "Signature"],
    ingredients: ["Organic Milk", "Tahitian Vanilla Beans", "Aged Martinique Dark Rum", "Pastry Flour", "Egg Yolks", "Organic Beeswax & Butter Mold Coat"],
    allergens: ["Wheat / Gluten", "Dairy / Milk", "Eggs"],
    isOvenFresh: true,
    nextBakeTime: "11:30 AM",
    rating: 4.99,
    reviewsCount: 220,
    isPopular: true,
    canBeSliced: false,
    weightGrams: 120,
    flavorNotes: ["Smoky dark caramel", "Silky vanilla bean custard", "Warm rum aromatics"],
    pairingNotes: "A glass of dessert wine or espresso macchiato."
  },
  {
    id: "pistachio-raspberry-tart",
    name: "Bronte Pistachio & Raspberry Tartlet",
    frenchName: "Tartelette Pistache de Bronte & Framboises",
    description: "Crisp sweet shortcrust filled with roasted Bronte pistachio frangipane, tart raspberry compote, and topped with fresh organic raspberries and crushed pistachios.",
    price: 8.5,
    category: "patisserie",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Raspberry_tart.jpg/1280px-Raspberry_tart.jpg",
    tags: ["Sicilian Pistachio", "Seasonal"],
    dietary: ["Vegetarian"],
    ingredients: ["Sweet Almond P\xE2te Sabl\xE9e", "Sicilian Bronte Pistachio Paste", "Fresh Organic Raspberries", "Raspberry Coulis", "White Chocolate Pistachio Ganache"],
    allergens: ["Wheat / Gluten", "Dairy / Milk", "Tree Nuts (Pistachio, Almond)", "Eggs"],
    isOvenFresh: false,
    rating: 4.93,
    reviewsCount: 88,
    isPopular: false,
    canBeSliced: false,
    weightGrams: 140,
    flavorNotes: ["Nutty pistachio cream", "Vibrant berry acidity", "Crisp buttery shell"],
    pairingNotes: "Sparkling Champagne or Jasmine green tea."
  },
  {
    id: "sourdough-focaccia-rosemary",
    name: "Heritage Sourdough Focaccia",
    frenchName: "Focaccia au Levain, Romarin & Fleur de Sel",
    description: "Naturally leavened high-hydration focaccia dimpled with cold-pressed Tuscan olive oil, fresh rosemary sprigs, Maldon sea salt flakes, and confit garlic cloves.",
    price: 7.5,
    category: "savory",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Focaccia_with_Crumb.jpg/1280px-Focaccia_with_Crumb.jpg",
    tags: ["High Hydration", "Extra Virgin Olive Oil"],
    dietary: ["Vegan", "Organic"],
    ingredients: ["Organic High-Protein Flour", "Wild Sourdough Levain", "Tuscan Extra Virgin Olive Oil", "Fresh Rosemary", "Confit Garlic", "Maldon Sea Salt Flakes"],
    flourType: "Organic T65 & Semolina",
    fermentationHours: 48,
    hydrationPercentage: 88,
    allergens: ["Wheat / Gluten"],
    isOvenFresh: true,
    nextBakeTime: "11:45 AM",
    rating: 4.94,
    reviewsCount: 165,
    isPopular: true,
    canBeSliced: false,
    weightGrams: 450,
    flavorNotes: ["Golden crispy bottom crust", "Pillowy airy crumb", "Rosemary resin and garlic richness"],
    pairingNotes: "Antipasti boards, sliced in half for sandwich paninis, or dipped in aged balsamic."
  },
  {
    id: "gruyere-leek-danish",
    name: "Aged Gruy\xE8re & Caramelized Leek Galette",
    frenchName: "Feuillet\xE9 aux Poireaux et Gruy\xE8re AOP",
    description: "Flaky laminated pastry crust layered with slow-braised sweet leeks, French thyme, cr\xE8me fra\xEEche, and 18-month cave-aged Swiss Gruy\xE8re AOP.",
    price: 7.25,
    category: "savory",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Quiche.jpg/1280px-Quiche.jpg",
    tags: ["Cave-Aged Cheese", "Savory Warmth"],
    dietary: ["Vegetarian"],
    ingredients: ["Laminated Butter Pastry", "Braised Organic Leeks", "Gruy\xE8re AOP 18-Month", "Cr\xE8me Fra\xEEche", "Black Pepper", "Fresh Thyme"],
    allergens: ["Wheat / Gluten", "Dairy / Milk", "Eggs"],
    isOvenFresh: true,
    nextBakeTime: "12:15 PM",
    rating: 4.9,
    reviewsCount: 104,
    isPopular: false,
    canBeSliced: false,
    weightGrams: 160,
    flavorNotes: ["Sharp nutty cheese melt", "Sweet caramelized leeks", "Golden flaky crust"],
    pairingNotes: "A fresh mixed green salad with Dijon vinaigrette."
  },
  {
    id: "sourdough-starter-kit",
    name: "Maison Levain 100-Year Starter Kit",
    frenchName: "Kit Levain Chef & Bocal Weck",
    description: "A live portion of our historic ancestral sourdough starter in an authentic German Weck glass jar, paired with an artisanal feeding guide, unbleached linen jar cover, and 1kg stoneground organic heritage flour.",
    price: 24,
    category: "provisions",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/13/Pain-poolish1.JPG",
    tags: ["Living Culture", "Craft Kit"],
    dietary: ["Organic", "Vegan"],
    ingredients: ["Live Active Sourdough Culture (Levain)", "Organic Stoneground Whole Rye Flour (1kg)", "German Weck Jar", "Linen Proofing Cover", "Master Sourdough Booklet"],
    allergens: ["Wheat / Gluten"],
    rating: 4.98,
    reviewsCount: 76,
    isPopular: true,
    canBeSliced: false,
    flavorNotes: ["Wild botanical yeasts", "Lactobacillus balance", "Vigorous rise"],
    pairingNotes: "Includes our master baker formula for country batards and sourdough pancakes."
  },
  {
    id: "cultured-sea-salt-butter",
    name: "Artisanal Cultured Sea Salt Butter (250g)",
    frenchName: "Beurre de Baratte Artisanal \xE0 la Fleur de Sel",
    description: "Slow-churned from organic grass-fed cream cultured for 48 hours and blended with coarse Guerande fleur de sel crystals for an unbelievable richness and crunch.",
    price: 9.5,
    category: "provisions",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Beurre_d%27Isigny_2.jpg/1280px-Beurre_d%27Isigny_2.jpg",
    tags: ["48h Cultured", "Grass-Fed"],
    dietary: ["Vegetarian", "Organic"],
    ingredients: ["Pasteurized Organic Cream", "Active Lactic Ferments", "Guerande Fleur de Sel"],
    allergens: ["Dairy / Milk"],
    rating: 4.96,
    reviewsCount: 148,
    isPopular: true,
    canBeSliced: false,
    weightGrams: 250,
    flavorNotes: ["Hazelnut nuances", "Pleasing tangy sharpness", "Mineral salt crunch"],
    pairingNotes: "Generously spread on warm slices of Country Batard or Einkorn Miche."
  }
];
var BAKE_SCHEDULE = [
  {
    id: "b-01",
    name: "Butter Croissants & Pain au Chocolat",
    frenchName: "Viennoiserie du Matin",
    timeLabel: "8:00 AM \u2014 Morning Drop",
    status: "ready",
    batchNumber: "#01",
    temperature: "210\xB0C Deck Hearth",
    category: "Viennoiserie"
  },
  {
    id: "b-02",
    name: "Heritage Country Batards (Organic T65)",
    frenchName: "Pains de Campagne",
    timeLabel: "10:15 AM \u2014 Fresh Out of Oven",
    status: "cooling",
    batchNumber: "#02",
    temperature: "245\xB0C Stone Deck with Steam",
    category: "Sourdough"
  },
  {
    id: "b-03",
    name: "Cannel\xE9s de Bordeaux & Kouign-Amann",
    frenchName: "Sp\xE9cialit\xE9s R\xE9gionales",
    timeLabel: "11:30 AM \u2014 In the Oven",
    status: "baking_now",
    batchNumber: "#03",
    temperature: "230\xB0C Copper Molds",
    category: "Patisserie"
  },
  {
    id: "b-04",
    name: "Rosemary Focaccia & Savory Galettes",
    frenchName: "Fourn\xE9e Sal\xE9e du Midi",
    timeLabel: "12:15 PM \u2014 Lunch Hearth",
    status: "scheduled",
    batchNumber: "#04",
    temperature: "225\xB0C Olive Oil Seasoned",
    category: "Savory"
  },
  {
    id: "b-05",
    name: "Ancient Einkorn & Walnut Fig Miche",
    frenchName: "Grandes Miches de Garde",
    timeLabel: "2:30 PM \u2014 Afternoon Crust",
    status: "scheduled",
    batchNumber: "#05",
    temperature: "240\xB0C Wood-Fired Hearth",
    category: "Sourdough"
  }
];
var CRAFT_PHILOSOPHY = [
  {
    title: "36\u201348h Cold Fermentation",
    subtitle: "Digestibility & Flavor",
    description: "We never rush dough. Extended cold fermentation unlocks bioavailability in the grain, dramatically reduces glycemic impact, and cultivates complex lactic aromas.",
    stat: "48h",
    statLabel: "Max Slow Ferment"
  },
  {
    title: "100% Wild Sourdough Culture",
    subtitle: "Zero Commercial Yeast",
    description: "Every single loaf is leavened exclusively by our active levain culture fed daily with mountain spring water and stoneground organic rye.",
    stat: "0g",
    statLabel: "Commercial Additives"
  },
  {
    title: "Heritage French & Ancient Grains",
    subtitle: "Non-GMO, Stoneground",
    description: "We source biodynamic wheat directly from heritage millers who grind whole grains slowly between granitic stones to preserve the wheat germ and vital oils.",
    stat: "82%",
    statLabel: "Avg. Loaf Hydration"
  },
  {
    title: "Hand-Laminated Isigny Butter",
    subtitle: "27 Flaky Honeycomb Layers",
    description: "Crafted with Normandy Isigny Sainte-M\xE8re AOP butter at 84% fat, each croissant is gently rolled, folded, and shaped strictly by hand in our temperature-controlled pastry room.",
    stat: "27",
    statLabel: "Crisp Butter Layers"
  }
];

// src/components/Navbar.tsx
var import_react2 = require("react");
var import_lucide_react = require("lucide-react");
var import_react3 = require("motion/react");

// src/components/BakeryLogo.tsx
var import_react = __toESM(require("react"), 1);

// src/assets/logo.png
var logo_default = "./logo-4RFIOG6M.png";

// src/components/BakeryLogo.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var BakeryLogo = ({
  variant = "crest",
  size = "md",
  className = "",
  theme = "light",
  customLogoUrl = logo_default,
  logoOffsetX = 0,
  logoOffsetY = 4,
  logoZoom = 1.59
}) => {
  const sizeMap = {
    xs: { box: "w-7 h-7", px: 28 },
    sm: { box: "w-10 h-10", px: 40 },
    md: { box: "w-14 h-14", px: 56 },
    lg: { box: "w-24 h-24", px: 96 },
    xl: { box: "w-36 h-36", px: 144 },
    hero: { box: "w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56", px: 224 }
  };
  const logoId = import_react.default.useId().replace(/:/g, "");
  const isDark = theme === "dark";
  const textColor = isDark ? "#FAF7F2" : "#241911";
  if (variant === "monogram") {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        className: `relative inline-flex items-center justify-center rounded-2xl select-none shadow-sm overflow-hidden ${sizeMap[size].box} ${className}`,
        style: {
          background: isDark ? "linear-gradient(145deg, #2D2218 0%, #150E09 100%)" : "linear-gradient(145deg, #241911 0%, #110B07 100%)",
          border: "1px solid rgba(212, 175, 115, 0.4)"
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "svg",
          {
            viewBox: "0 0 100 100",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "w-full h-full p-1",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", { id: `monoGold-${logoId}`, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "0%", stopColor: "#FFF4DE" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "30%", stopColor: "#E5BE7E" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "70%", stopColor: "#C59A58" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "100%", stopColor: "#8C5E20" })
              ] }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "50", cy: "50", r: "45", stroke: `url(#monoGold-${logoId})`, strokeWidth: "1", opacity: "0.75" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "50", cy: "50", r: "41.5", stroke: `url(#monoGold-${logoId})`, strokeWidth: "0.5", strokeDasharray: "1.5 2", opacity: "0.5" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "50,7.5 52,9.5 50,11.5 48,9.5", fill: `url(#monoGold-${logoId})` }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "50,88.5 52,90.5 50,92.5 48,90.5", fill: `url(#monoGold-${logoId})` }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "7.5,50 9.5,52 11.5,50 9.5,48", fill: `url(#monoGold-${logoId})` }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "88.5,50 90.5,52 92.5,50 90.5,48", fill: `url(#monoGold-${logoId})` }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { style: { filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.6))" }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "text",
                  {
                    x: "42",
                    y: "60",
                    textAnchor: "middle",
                    fill: `url(#monoGold-${logoId})`,
                    fontFamily: "'Playfair Display', 'Bodoni MT', 'Didot', Georgia, serif",
                    fontSize: "38",
                    fontWeight: "700",
                    style: { letterSpacing: "-0.06em" },
                    children: "M"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "text",
                  {
                    x: "62",
                    y: "64",
                    textAnchor: "middle",
                    fill: "#FFF8EE",
                    fontFamily: "'Playfair Display', 'Bodoni MT', 'Didot', Georgia, serif",
                    fontSize: "34",
                    fontWeight: "700",
                    opacity: "0.95",
                    style: { letterSpacing: "-0.06em" },
                    children: "L"
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "text",
                {
                  x: "50",
                  y: "81",
                  textAnchor: "middle",
                  fill: `url(#monoGold-${logoId})`,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "6",
                  fontWeight: "800",
                  letterSpacing: "2.2",
                  children: "1912"
                }
              )
            ]
          }
        )
      }
    );
  }
  if (variant === "horizontal" || variant === "wordmark") {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: `inline-flex items-center gap-3.5 select-none ${className}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BakeryLogo, { variant: "monogram", size: "sm", theme }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col text-left", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "span",
          {
            className: "font-serif font-bold text-xl sm:text-2xl tracking-[0.20em] uppercase",
            style: { color: textColor },
            children: "Maison Levain"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex items-center gap-2 mt-0.5", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-[10px] uppercase tracking-[0.32em] font-semibold text-[#C59A58]", children: "Paris \u2022 Depuis 1912" }) })
      ] })
    ] });
  }
  if (customLogoUrl) {
    const scaleFactor = sizeMap[size].px / 224;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `relative inline-flex flex-col items-center justify-center select-none shrink-0 ${className} group`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: `${sizeMap[size].box} rounded-full overflow-hidden drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] bg-white relative`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "img",
        {
          src: customLogoUrl,
          alt: "Maison Levain Custom Logo",
          className: "w-full h-full object-cover",
          style: {
            transform: `scale(${logoZoom}) translate(${logoOffsetX * scaleFactor}px, ${logoOffsetY * scaleFactor}px)`
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full border-[1.5px] sm:border-[2px] border-[#D4A75E]/90 pointer-events-none shadow-[inset_0_0_12px_rgba(212,167,94,0.4)] z-10" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-[3px] sm:inset-[4px] rounded-full border-[0.5px] border-[#D4A75E]/50 pointer-events-none z-10" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-[1px] rounded-full border-[0.5px] border-[#F3D393]/30 pointer-events-none z-10" })
    ] }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `relative inline-flex flex-col items-center justify-center select-none shrink-0 ${className}`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "svg",
    {
      viewBox: "-10 -10 300 300",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: `${sizeMap[size].box} drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02] overflow-visible`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", { id: `heroGoldGrad-${logoId}`, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "0%", stopColor: "#FFFBF0" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "20%", stopColor: "#F3D393" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "50%", stopColor: "#D4A75E" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "80%", stopColor: "#E2BD7A" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "100%", stopColor: "#8A5B1E" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", { id: `champagneGrad-${logoId}`, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "0%", stopColor: "#FFFFFF" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "45%", stopColor: "#FFF4E3" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "100%", stopColor: "#DFCEB7" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", { id: `heroParchment-${logoId}`, cx: "50%", cy: "50%", r: "50%", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "0%", stopColor: isDark ? "#33241A" : "#FFFFFF", stopOpacity: "0.98" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "70%", stopColor: isDark ? "#231810" : "#FAF6F0", stopOpacity: "0.96" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "100%", stopColor: isDark ? "#140C07" : "#EFE4D4", stopOpacity: "0.92" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("filter", { id: `luxuryGlowShadow-${logoId}`, x: "-15%", y: "-15%", width: "130%", height: "130%", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feDropShadow", { dx: "0", dy: "4", stdDeviation: "6", floodColor: "#1C1108", floodOpacity: "0.22" }) })
        ] }),
        customLogoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", { id: `logoClip-${logoId}`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "140", cy: "140", r: "137" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "image",
            {
              href: customLogoUrl,
              xlinkHref: customLogoUrl,
              x: 140 - 140 * logoZoom + logoOffsetX,
              y: 140 - 140 * logoZoom + logoOffsetY,
              width: 280 * logoZoom,
              height: 280 * logoZoom,
              clipPath: `url(#logoClip-${logoId})`,
              preserveAspectRatio: "xMidYMid slice"
            }
          )
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "140", cy: "140", r: "137", fill: "#FFFFFF" }),
        !customLogoUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "140", cy: "140", r: "139.5", fill: "none", stroke: `url(#champagneGrad-${logoId})`, strokeWidth: "0.5", strokeOpacity: "0.5" }),
        !customLogoUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "140", cy: "140", r: "137", fill: "none", stroke: `url(#heroGoldGrad-${logoId})`, strokeWidth: "1.5" }),
        !customLogoUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "140", cy: "140", r: "132", fill: "none", stroke: `url(#heroGoldGrad-${logoId})`, strokeWidth: "0.5", strokeOpacity: "0.4" })
      ]
    }
  ) });
};

// src/components/Navbar.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Navbar = ({
  cartItems,
  customBoxes,
  onOpenCart,
  onOpenBoxBuilder,
  onOpenSchedule,
  onOpenOrderLookup,
  activeSection,
  onNavigate,
  searchQuery,
  onSearchChange
}) => {
  const [isSearchOpen, setIsSearchOpen] = (0, import_react2.useState)(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = (0, import_react2.useState)(false);
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0) + customBoxes.length;
  const totalCartPrice = cartItems.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0) + customBoxes.reduce((acc, box) => acc + box.price, 0);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("header", { className: "sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-3 pb-2 transition-all", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "max-w-7xl mx-auto glass-panel rounded-2xl shadow-sm px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "button",
      {
        id: "nav-brand-logo",
        onClick: () => onNavigate("hero"),
        className: "flex items-center gap-2.5 group focus:outline-none transition-transform active:scale-95",
        title: "Return to Maison Levain Home",
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(BakeryLogo, { size: "sm" })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("nav", { className: "hidden lg:flex items-center gap-1 text-sm font-medium text-[#5E5244]", children: [
      [
        { id: "catalog", label: "Daily Bakes" },
        { id: "grains", label: "Heritage Grains" },
        { id: "pairings", label: "Pairing Room" },
        { id: "craft", label: "Craft & Hydration" },
        { id: "workshops", label: "Atelier Classes" }
      ].map((link) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "button",
        {
          id: `nav-link-${link.id}`,
          onClick: () => onNavigate(link.id),
          className: `relative px-3 py-1.5 rounded-xl transition-colors duration-300 ease-out text-xs font-semibold ${activeSection === link.id ? "text-[#341C02]" : "text-[#5E5244] hover:text-[#341C02] hover:bg-[#F5EFE6]"}`,
          children: [
            activeSection === link.id && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              import_react3.motion.div,
              {
                layoutId: "activeNavBubble",
                className: "absolute inset-0 bg-[#EFE8DC]/80 backdrop-blur-md rounded-xl shadow-[0_1px_3px_rgba(52,28,2,0.03)] border border-[#E5DACD]",
                initial: false,
                transition: { type: "spring", bounce: 0.2, duration: 0.6 }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "relative z-10", children: link.label })
          ]
        },
        link.id
      )),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "button",
        {
          id: "nav-link-box-builder",
          onClick: onOpenBoxBuilder,
          className: "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[#8D4B26] hover:bg-[#F8EFE6] transition-colors text-xs font-bold border border-transparent relative",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.Sparkles, { className: "w-3.5 h-3.5 text-[#C17D44] relative z-10" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "relative z-10", children: "Curate Box" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "button",
          {
            onClick: () => setIsMoreMenuOpen(!isMoreMenuOpen),
            className: `relative flex items-center gap-1 px-3 py-1.5 rounded-xl transition-colors duration-300 ease-out text-xs font-semibold ${["journal", "reviews", "location"].includes(activeSection) || isMoreMenuOpen ? "text-[#341C02]" : "text-[#786C5E] hover:text-[#341C02] hover:bg-[#F5EFE6]"}`,
            children: [
              (["journal", "reviews", "location"].includes(activeSection) || isMoreMenuOpen) && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                import_react3.motion.div,
                {
                  layoutId: "activeNavBubble",
                  className: "absolute inset-0 bg-[#EFE8DC]/80 backdrop-blur-md rounded-xl shadow-[0_1px_3px_rgba(52,28,2,0.03)] border border-[#E5DACD]",
                  initial: false,
                  transition: { type: "spring", bounce: 0.2, duration: 0.6 }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "relative z-10 flex items-center gap-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "Explore" }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.ChevronDown, { className: "w-3 h-3" })
              ] })
            ]
          }
        ),
        isMoreMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "div",
          {
            className: "absolute top-full right-0 mt-2 w-48 bg-[#FAF7F2] rounded-2xl p-2 shadow-xl border border-[#E5DACD] space-y-1 animate-fade-in z-50",
            onMouseLeave: () => setIsMoreMenuOpen(false),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                "button",
                {
                  onClick: () => {
                    onOpenSchedule();
                    setIsMoreMenuOpen(false);
                  },
                  className: "w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-[#341C02] hover:bg-[#EFE8DC] flex items-center gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.Clock, { className: "w-3.5 h-3.5 text-[#C17D44]" }),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "Oven Schedule" })
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                "button",
                {
                  onClick: () => {
                    onNavigate("journal");
                    setIsMoreMenuOpen(false);
                  },
                  className: `w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors ${activeSection === "journal" ? "bg-[#EFE8DC] text-[#341C02]" : "text-[#5E5244] hover:bg-[#F5EFE6] hover:text-[#341C02]"}`,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.BookOpen, { className: "w-3.5 h-3.5 text-[#A8794E]" }),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "Fournil Journal" })
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                "button",
                {
                  onClick: () => {
                    onNavigate("reviews");
                    setIsMoreMenuOpen(false);
                  },
                  className: `w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors ${activeSection === "reviews" ? "bg-[#EFE8DC] text-[#341C02]" : "text-[#5E5244] hover:bg-[#F5EFE6] hover:text-[#341C02]"}`,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.Sparkles, { className: "w-3.5 h-3.5 text-[#8D4B26]" }),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "Reviews & Michelin" })
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                "button",
                {
                  onClick: () => {
                    onNavigate("location");
                    setIsMoreMenuOpen(false);
                  },
                  className: `w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors ${activeSection === "location" ? "bg-[#EFE8DC] text-[#341C02]" : "text-[#5E5244] hover:bg-[#F5EFE6] hover:text-[#341C02]"}`,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.MapPin, { className: "w-3.5 h-3.5 text-[#786C5E]" }),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "Hours & Location" })
                  ]
                }
              )
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex items-center gap-2 sm:gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "relative", children: isSearchOpen ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex items-center bg-[#FAF7F2] border border-[#D9CEBF] rounded-xl px-2.5 py-1.5 shadow-inner", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.Search, { className: "w-4 h-4 text-[#786C5E] mr-1.5 shrink-0" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "input",
          {
            id: "nav-search-input",
            type: "text",
            placeholder: "Search sourdough, croissants...",
            value: searchQuery,
            onChange: (e) => onSearchChange(e.target.value),
            className: "bg-transparent text-xs sm:text-sm text-[#341C02] focus:outline-none w-32 sm:w-44 placeholder:text-[#9E9080]",
            autoFocus: true
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "button",
          {
            onClick: () => {
              setIsSearchOpen(false);
              onSearchChange("");
            },
            className: "text-xs text-[#786C5E] hover:text-[#341C02] px-1",
            children: "\u2715"
          }
        )
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "button",
        {
          id: "nav-search-toggle",
          onClick: () => setIsSearchOpen(true),
          className: "p-2 sm:px-2.5 sm:py-1.5 text-xs font-medium text-[#5E5244] hover:text-[#341C02] hover:bg-[#F2ECE1] rounded-xl transition-colors flex items-center gap-1.5",
          title: "Search Bakery Items",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.Search, { className: "w-4 h-4" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "hidden md:inline", children: "Search" })
          ]
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "button",
        {
          id: "nav-order-lookup-btn",
          onClick: onOpenOrderLookup,
          className: "p-2 sm:px-2.5 sm:py-1.5 text-xs font-medium text-[#5E5244] hover:text-[#341C02] hover:bg-[#F2ECE1] rounded-xl transition-colors flex items-center gap-1.5",
          title: "Track Your Bakery Order",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.ReceiptText, { className: "w-4 h-4 text-[#786C5E]" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "hidden sm:inline", children: "Track" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "button",
        {
          id: "nav-cart-btn",
          onClick: onOpenCart,
          className: "relative flex items-center gap-2 bg-[#341C02] hover:bg-[#43362A] text-[#FAF7F2] px-3.5 sm:px-4 py-2 rounded-xl transition-all shadow-sm active:scale-95",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.ShoppingBag, { className: "w-4 h-4" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "text-xs sm:text-sm font-semibold", children: [
              "Cart ",
              totalCartCount > 0 && `(${totalCartCount})`
            ] }),
            totalCartPrice > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "hidden sm:inline-block text-xs font-medium text-[#D8C7B5] border-l border-white/20 pl-2", children: [
              "$",
              totalCartPrice.toFixed(2)
            ] })
          ]
        }
      )
    ] })
  ] }) });
};

// src/components/Hero.tsx
var import_lucide_react2 = require("lucide-react");
var import_react4 = require("motion/react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Hero = ({
  onOrderNow,
  onOpenBoxBuilder,
  onOpenSchedule
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { id: "hero-section", className: "relative pt-8 sm:pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-[44rem] h-[28rem] bg-[#E8C5A0]/25 rounded-full blur-3xl pointer-events-none -z-10" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "absolute top-48 left-10 w-80 h-80 bg-[#E27D60]/12 rounded-full blur-3xl pointer-events-none -z-10" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "absolute top-48 right-10 w-80 h-80 bg-[#C89666]/12 rounded-full blur-3xl pointer-events-none -z-10" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "max-w-7xl mx-auto space-y-12 sm:space-y-16", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        import_react4.motion.div,
        {
          className: "text-center max-w-4xl mx-auto space-y-6 sm:space-y-8",
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.8, ease: "easeOut" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "flex justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "relative group cursor-pointer", onClick: onOrderNow, title: "Maison Levain Paris", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "absolute -inset-3 bg-gradient-to-r from-[#E5BE7E]/40 via-[#C59A58]/30 to-[#E27D60]/20 rounded-full blur-2xl group-hover:opacity-100 opacity-65 transition-opacity" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                BakeryLogo,
                {
                  variant: "crest",
                  size: "hero",
                  className: "relative z-10"
                }
              )
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-[#8D4B26] shadow-sm", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "flex h-2.5 w-2.5 relative", children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E27D60] opacity-75" }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C15C3D]" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.Flame, { className: "w-3.5 h-3.5 text-[#C15C3D]" }),
                "Deck Hearth #02: Fresh Country Batards cooling now (10:15 AM Batch)"
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "space-y-3.5", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center justify-center gap-3", children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#C59A58]" }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-xs sm:text-sm uppercase tracking-[0.32em] text-[#8C7A68] font-bold font-sans", children: "Paris \u2022 Fournil Artisanal \u2022 Depuis 1912" }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#C59A58]" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h1", { className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#241911] tracking-tight leading-[1.08]", children: "Maison Levain" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-sm sm:text-base md:text-lg text-[#5E5244] max-w-2xl mx-auto font-normal leading-relaxed", children: "Handcrafting slow wild-fermented sourdoughs, French viennoiserie, and bespoke pastries with ancient stoneground bio flours, unhurried 36-hour fermentation, and mountain spring water." })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 max-w-3xl mx-auto pt-1 text-left", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "p-3 rounded-2xl glass-card border border-[#E5DACD] flex items-center gap-2.5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "w-8 h-8 rounded-xl bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.MapPin, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-[10px] uppercase font-bold text-[#8C7A68] tracking-wider", children: "The Fournil" }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-xs font-bold text-[#341C02] truncate", children: "42 Bd Saint-Honor\xE9" })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "p-3 rounded-2xl glass-card border border-[#E5DACD] flex items-center gap-2.5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "w-8 h-8 rounded-xl bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.Clock, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-[10px] uppercase font-bold text-[#8C7A68] tracking-wider", children: "Daily Drops" }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-xs font-bold text-[#341C02] truncate", children: "8:00 AM & 10:15 AM" })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "p-3 rounded-2xl glass-card border border-[#E5DACD] flex items-center gap-2.5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "w-8 h-8 rounded-xl bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.Wheat, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-[10px] uppercase font-bold text-[#8C7A68] tracking-wider", children: "Living Levain" }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-xs font-bold text-[#341C02] truncate", children: "36h Cold Proof" })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "p-3 rounded-2xl glass-card border border-[#E5DACD] flex items-center gap-2.5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "w-8 h-8 rounded-xl bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.Award, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-[10px] uppercase font-bold text-[#8C7A68] tracking-wider", children: "Heritage Guild" }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-xs font-bold text-[#341C02] truncate", children: "100% Bio Organic" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-wrap items-center justify-center gap-3.5 pt-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                "button",
                {
                  id: "hero-order-online-btn",
                  onClick: onOrderNow,
                  className: "bg-[#241911] hover:bg-[#3D2C1F] text-[#FAF7F2] px-7 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2 active:scale-95",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "Order for Pickup or Courier" }),
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.ArrowRight, { className: "w-4 h-4" })
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                "button",
                {
                  id: "hero-box-builder-btn",
                  onClick: onOpenBoxBuilder,
                  className: "glass-card hover:bg-white text-[#341C02] px-6 py-3.5 rounded-xl font-semibold text-sm transition-all border border-[#DFD3C3] flex items-center gap-2 active:scale-95",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.Sparkles, { className: "w-4 h-4 text-[#C17D44]" }),
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "Curate Pastry Box" })
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                "button",
                {
                  id: "hero-schedule-btn",
                  onClick: onOpenSchedule,
                  className: "px-5 py-3.5 rounded-xl text-xs sm:text-sm font-medium text-[#786C5E] hover:text-[#341C02] hover:bg-[#F2ECE1] transition-colors flex items-center gap-1.5",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.Clock, { className: "w-4 h-4 text-[#A8794E]" }),
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "Today's Oven Schedule" })
                  ]
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        import_react4.motion.div,
        {
          className: "relative rounded-3xl overflow-hidden shadow-2xl border border-[#E5DACD] group",
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.8, delay: 0.1, ease: "easeOut" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "aspect-[16/9] sm:aspect-[21/9] w-full relative", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "img",
                {
                  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Belgium_2013_%2811620905224%29.jpg/1280px-Belgium_2013_%2811620905224%29.jpg",
                  alt: "Artisanal French sourdough loaves and croissants in rustic bakery",
                  className: "w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700",
                  referrerPolicy: "no-referrer"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#1C140E]/90 via-[#1C140E]/30 to-transparent" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "absolute bottom-0 inset-x-0 p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "space-y-2 max-w-xl text-white", children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-[#F4D19B] border border-white/10", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.Wheat, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "Stoneground Heritage Grain Collection" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight", children: "Slow-Fermented at 12\xB0C for Deep Umami & Golden Blistered Crusts" }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-xs sm:text-sm text-[#E2D5C5] leading-relaxed hidden sm:block", children: "Each loaf undergoes a gentle 36-hour wild levain fermentation, yielding an open custard-like crumb and digestible, mineral-rich nourishment." })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "glass-panel rounded-2xl p-4 border border-white/20 text-white shrink-0 self-stretch md:self-auto flex items-center justify-between md:flex-col md:items-start gap-4", style: { backgroundColor: "#000000" }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-[10px] uppercase font-bold tracking-widest text-[#F4D19B]", children: "Starter Strain" }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-sm font-bold font-serif", children: "112-Year Mother Culture" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center gap-1.5 text-xs text-[#E2D5C5]", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.ShieldCheck, { className: "w-4 h-4 text-[#82AA57]" }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "Zero Commercial Yeast" })
                ] })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        import_react4.motion.div,
        {
          className: "grid grid-cols-1 md:grid-cols-3 gap-5",
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "glass-card p-6 rounded-3xl border border-[#E5DACD] space-y-3 relative overflow-hidden", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "w-12 h-12 rounded-2xl bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26]", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.Wheat, { className: "w-6 h-6" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "font-serif font-bold text-lg text-[#341C02]", children: "100% Ancient Stoneground Flour" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-xs text-[#786C5E] leading-relaxed", children: "We source unbleached ancient grains (Rouge de Bordeaux, Einkorn, Spelt) milled gently on stone burrs to retain natural wheat germ and antioxidants." })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "glass-card p-6 rounded-3xl border border-[#E5DACD] space-y-3 relative overflow-hidden", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "w-12 h-12 rounded-2xl bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26]", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.Flame, { className: "w-6 h-6" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "font-serif font-bold text-lg text-[#341C02]", children: "Direct Stone Hearth Baking" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-xs text-[#786C5E] leading-relaxed", children: "Baked directly on heavy volcanic refractory stone decks injected with dense steam for dramatic oven spring and caramelised blistered blisters." })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "glass-card p-6 rounded-3xl border border-[#E5DACD] space-y-3 relative overflow-hidden", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "w-12 h-12 rounded-2xl bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26]", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.HeartHandshake, { className: "w-6 h-6" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "font-serif font-bold text-lg text-[#341C02]", children: "Pure Wild Fermentation" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-xs text-[#786C5E] leading-relaxed", children: "Never rushed. Never altered with synthetic enzymes or additives. Just natural wild airborne yeasts and beneficial lactic acid cultures." })
            ] })
          ]
        }
      )
    ] })
  ] });
};

// src/components/ProductCatalog.tsx
var import_react7 = require("react");

// src/components/ProductCard.tsx
var import_react5 = require("react");
var import_lucide_react3 = require("lucide-react");
var import_react6 = require("motion/react");
var import_jsx_runtime4 = require("react/jsx-runtime");
var ProductCard = ({
  item,
  onQuickAdd,
  onSelectDetail
}) => {
  const [imgError, setImgError] = (0, import_react5.useState)(false);
  const fallbackImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Home_made_sour_dough_bread.jpg/1280px-Home_made_sour_dough_bread.jpg";
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    import_react6.motion.div,
    {
      id: `product-card-${item.id}`,
      className: "group glass-card rounded-2xl overflow-hidden border border-[#E8DFD1] hover:border-[#D0C0AC] transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1",
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.5, ease: "easeOut" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          "div",
          {
            onClick: () => onSelectDetail(item),
            className: "relative h-56 sm:h-64 w-full overflow-hidden bg-[#EFE8DC] cursor-pointer",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "img",
                {
                  src: imgError ? fallbackImage : item.imageUrl,
                  alt: item.name,
                  onError: () => setImgError(true),
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                  loading: "lazy",
                  referrerPolicy: "no-referrer"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70 group-hover:opacity-80 transition-opacity" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "absolute top-3 left-3 right-3 flex items-start justify-between gap-2 pointer-events-none", children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-wrap gap-1.5", children: [
                  item.isOvenFresh && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "glass-pill px-2.5 py-1 rounded-full text-[11px] font-bold text-[#96381C] bg-[#FFF2ED]/90 shadow-sm flex items-center gap-1", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.Flame, { className: "w-3 h-3 text-[#E27D60]" }),
                    "Oven Fresh"
                  ] }),
                  item.fermentationHours && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "glass-pill px-2.5 py-1 rounded-full text-[11px] font-medium text-[#4A3C2F] bg-white/85 shadow-sm flex items-center gap-1", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.Clock, { className: "w-3 h-3 text-[#A8794E]" }),
                    item.fermentationHours,
                    "h Ferment"
                  ] })
                ] }),
                item.isPopular && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold text-[#FAF7F2] bg-[#341C02]/80 backdrop-blur-sm shadow-sm flex items-center gap-1", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.Sparkles, { className: "w-3 h-3 text-[#E8C5A0]" }),
                  "Signature"
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[2px]", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "bg-[#FAF7F2] text-[#341C02] text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-lg", children: "View Craft Details & Slicing" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "absolute bottom-3 left-3 right-3 flex items-end justify-between text-white pointer-events-none sm:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "font-serif text-lg font-bold drop-shadow", children: [
                "$",
                item.price.toFixed(2)
              ] }) })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
            item.frenchName && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-xs italic text-[#8C7A68] font-serif tracking-wide mb-0.5", children: item.frenchName }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "h3",
              {
                onClick: () => onSelectDetail(item),
                className: "font-serif text-lg sm:text-xl font-bold text-[#341C02] cursor-pointer hover:text-[#8D4B26] transition-colors line-clamp-1",
                children: item.name
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-xs text-[#6B5E4F] mt-1.5 line-clamp-2 leading-relaxed font-normal", children: item.description }),
            item.flavorNotes && item.flavorNotes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex flex-wrap gap-1 mt-2.5", children: item.flavorNotes.slice(0, 2).map((note, idx) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "span",
              {
                className: "text-[10px] px-2 py-0.5 rounded-md bg-[#F4EDE2] text-[#6E5D4C] font-medium",
                children: note
              },
              idx
            )) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "pt-3 border-t border-[#EFE8DC] flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-xs text-[#8C7A68] block", children: "Artisanal Bake" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "font-serif text-lg font-bold text-[#341C02]", children: [
                "$",
                item.price.toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center gap-1.5", children: [
              item.canBeSliced ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "button",
                {
                  id: `customize-btn-${item.id}`,
                  onClick: () => onSelectDetail(item),
                  className: "px-3 py-1.5 text-xs font-semibold text-[#8D4B26] hover:text-[#341C02] bg-[#F7F0E6] hover:bg-[#EFE4D6] rounded-xl transition-colors",
                  children: "Customize"
                }
              ) : null,
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
                "button",
                {
                  id: `quick-add-btn-${item.id}`,
                  onClick: () => onQuickAdd(item),
                  className: "p-2 sm:px-3 sm:py-1.5 bg-[#341C02] hover:bg-[#45372B] text-[#FAF7F2] rounded-xl text-xs font-semibold flex items-center gap-1 transition-all active:scale-95 shadow-sm",
                  title: "Add 1 to Cart",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.Plus, { className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "hidden sm:inline", children: "Add" })
                  ]
                }
              )
            ] })
          ] })
        ] })
      ]
    }
  );
};

// src/components/ProductCatalog.tsx
var import_lucide_react4 = require("lucide-react");
var import_react8 = require("motion/react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var ProductCatalog = ({
  products,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onQuickAdd,
  onSelectDetail,
  onOpenBoxBuilder
}) => {
  const [selectedDietary, setSelectedDietary] = (0, import_react7.useState)("All");
  const [sortBy, setSortBy] = (0, import_react7.useState)("featured");
  const categories = [
    { id: "all", name: "All Daily Bakes", count: products.length, icon: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.Sparkles, { className: "w-3.5 h-3.5" }) },
    { id: "sourdough", name: "Wild Sourdough", count: products.filter((p) => p.category === "sourdough").length, icon: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.Wheat, { className: "w-3.5 h-3.5" }) },
    { id: "viennoiserie", name: "Laminated Viennoiserie", count: products.filter((p) => p.category === "viennoiserie").length, icon: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.Flame, { className: "w-3.5 h-3.5" }) },
    { id: "patisserie", name: "French Patisserie", count: products.filter((p) => p.category === "patisserie").length, icon: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.Cake, { className: "w-3.5 h-3.5" }) },
    { id: "savory", name: "Savory Hearth", count: products.filter((p) => p.category === "savory").length, icon: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.Utensils, { className: "w-3.5 h-3.5" }) },
    { id: "provisions", name: "Pantry & Starters", count: products.filter((p) => p.category === "provisions").length, icon: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.Coffee, { className: "w-3.5 h-3.5" }) }
  ];
  const dietaryTags = ["All", "Organic", "Ancient Grains", "Vegan", "Vegetarian", "Signature"];
  const filteredProducts = products.filter((item) => {
    if (selectedCategory !== "all" && item.category !== selectedCategory) {
      return false;
    }
    if (selectedDietary !== "All") {
      let matchesDietary = item.dietary.includes(selectedDietary) || item.tags.includes(selectedDietary);
      if (selectedDietary === "Vegetarian" && item.dietary.includes("Vegan")) {
        matchesDietary = true;
      }
      if (selectedDietary === "Dairy-Free" && item.dietary.includes("Vegan")) {
        matchesDietary = true;
      }
      if (!matchesDietary) {
        return false;
      }
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchFrench = item.frenchName?.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchIngredients = item.ingredients.some((ing) => ing.toLowerCase().includes(q));
      const matchFlavor = item.flavorNotes?.some((fn) => fn.toLowerCase().includes(q));
      return matchName || matchFrench || matchDesc || matchIngredients || matchFlavor;
    }
    return true;
  });
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price_asc") return a.price - b.price;
    if (sortBy === "price_desc") return b.price - a.price;
    if (sortBy === "ferment") return (b.fermentationHours || 0) - (a.fermentationHours || 0);
    return b.rating - a.rating;
  });
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("section", { id: "catalog-section", className: "py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      import_react8.motion.div,
      {
        className: "space-y-4",
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.6, ease: "easeOut" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex flex-col sm:flex-row sm:items-end justify-between gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "text-xs uppercase tracking-[0.25em] text-[#8D4B26] font-bold", children: "Fournil Selection" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "text-3xl font-serif font-bold text-[#341C02]", children: "Today's Fresh Daily Bakes" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
              "button",
              {
                onClick: onOpenBoxBuilder,
                className: "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#341C02] text-[#FAF7F2] text-xs font-semibold hover:bg-[#45372B] transition-all shadow-sm self-start sm:self-auto",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.Sparkles, { className: "w-3.5 h-3.5 text-[#E8C5A0]" }),
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: "Curate Custom Pastry Box (Save up to 20%)" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none", children: categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
            "button",
            {
              id: `cat-btn-${cat.id}`,
              onClick: () => onSelectCategory(cat.id),
              className: `flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all border ${selectedCategory === cat.id ? "bg-[#341C02] text-[#FAF7F2] border-[#341C02] shadow-md" : "glass-panel text-[#5E5244] border-[#E2D7CA] hover:border-[#C4B29E] hover:text-[#341C02]"}`,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: cat.icon }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: cat.name }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: `text-[10px] px-1.5 py-0.2 rounded-full ${selectedCategory === cat.id ? "bg-white/20 text-white" : "bg-[#EFE8DC] text-[#786C5E]"}`, children: cat.count })
              ]
            },
            cat.id
          )) }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#EAE0D3]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "text-xs font-bold text-[#786C5E] mr-1 hidden sm:inline", children: "Dietary:" }),
              dietaryTags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                "button",
                {
                  onClick: () => setSelectedDietary(tag),
                  className: `px-3 py-1 rounded-xl text-xs font-medium transition-colors ${selectedDietary === tag ? "bg-[#EFE8DC] text-[#341C02] font-bold border border-[#D9CEBF]" : "text-[#6B5E4F] hover:text-[#341C02] hover:bg-[#F5EFE6]"}`,
                  children: tag
                },
                tag
              ))
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "text-xs text-[#786C5E]", children: "Sort by:" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
                "select",
                {
                  value: sortBy,
                  onChange: (e) => setSortBy(e.target.value),
                  className: "text-xs p-1.5 rounded-xl border border-[#D9CEBF] bg-white text-[#341C02] focus:outline-none",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "featured", children: "Featured / Highest Rated" }),
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "price_asc", children: "Price: Low to High" }),
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "price_desc", children: "Price: High to Low" }),
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "ferment", children: "Longest Fermentation (Hours)" })
                  ]
                }
              )
            ] })
          ] })
        ]
      }
    ),
    sortedProducts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      import_react8.motion.div,
      {
        className: "py-16 text-center space-y-5 glass-panel rounded-3xl p-8 max-w-lg mx-auto overflow-hidden relative border border-[#E5DACD]",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "absolute inset-0 opacity-20 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("img", { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Belgium_2013_%2811620905224%29.jpg/1280px-Belgium_2013_%2811620905224%29.jpg", alt: "Bakery Background", className: "w-full h-full object-cover grayscale" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "relative z-10 space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("img", { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Kommissbrot.jpg/1280px-Kommissbrot.jpg", alt: "Empty selection", className: "w-full h-full object-cover" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { className: "font-serif text-xl font-bold text-[#341C02]", children: "No bakery items matched your selection" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "text-xs text-[#786C5E] max-w-xs mx-auto font-medium", children: "Try adjusting your search terms or dietary filters to explore all handcrafted loaves and pastries." }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              "button",
              {
                onClick: () => {
                  onSelectCategory("all");
                  setSelectedDietary("All");
                  onSearchChange("");
                },
                className: "px-6 py-2.5 bg-[#341C02] text-[#FAF7F2] rounded-xl text-xs font-semibold hover:bg-[#43362A] transition-colors shadow-sm",
                children: "Reset All Filters"
              }
            )
          ] })
        ]
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      import_react8.motion.div,
      {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.6, delay: 0.1, ease: "easeOut" },
        children: sortedProducts.map((item) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          ProductCard,
          {
            item,
            onQuickAdd,
            onSelectDetail
          },
          item.id
        ))
      }
    )
  ] });
};

// src/components/TerroirGrainSection.tsx
var import_react9 = require("react");
var import_lucide_react5 = require("lucide-react");
var import_react10 = require("motion/react");
var import_jsx_runtime6 = require("react/jsx-runtime");
var GRAINS = [
  {
    id: "rouge-bordeaux",
    name: "Rouge de Bordeaux T80",
    frenchName: "Bl\xE9 Ancien d'Aquitaine",
    region: "Aquitaine & Charente, France",
    milling: "Slow Astri\xE9 Granite Stone Burrs",
    protein: "13.8%",
    ash: "0.80% (Semi-Complete)",
    flavorNotes: "Warm brioche, hazelnut butter, caramelized crust",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/A_close-up_image_of_wheat_grains.jpg/1280px-A_close-up_image_of_wheat_grains.jpg",
    usedIn: "Heritage Country Batard",
    filterCategory: "sourdough",
    description: "An 18th-century heirloom red winter wheat prized for its sweet baking perfume and nutrient-dense germ."
  },
  {
    id: "petit-epeautre",
    name: "Petit \xC9peautre Einkorn",
    frenchName: "Engrain Sauvage de Provence",
    region: "Haute-Provence Plateau, France",
    milling: "Granite Millstone Cold-Ground",
    protein: "11.5%",
    ash: "1.10% (Whole Ancient Grain)",
    flavorNotes: "Toasted walnuts, honeyed malt, mineral soil",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Triticum-monococcum-ear.JPG/1280px-Triticum-monococcum-ear.JPG",
    usedIn: "Ancient Einkorn Miche",
    filterCategory: "sourdough",
    description: "The ancient mother grain of civilization cultivated since 10,000 BC. Naturally gentle on digestion."
  },
  {
    id: "seigle-lozere",
    name: "Heritage Black Rye T130",
    frenchName: "Seigle Noir de Haute Altitude",
    region: "Loz\xE8re Volcanic Slopes, France",
    milling: "Traditional Watermill Stone Burrs",
    protein: "9.2%",
    ash: "1.30% (Whole Dark Rye)",
    flavorNotes: "Dark cocoa, fermented wild fruits, earthy tang",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Rye_grains_rotated_%28cropped%29.jpg/1280px-Rye_grains_rotated_%28cropped%29.jpg",
    usedIn: "Walnut & Fig Levain & Mother Culture",
    filterCategory: "sourdough",
    description: "Slow-grown mountain rye providing the vigorous lactic acid flora that feeds our 112-year living starter."
  },
  {
    id: "label-rouge-t65",
    name: "French Label Rouge T65",
    frenchName: "Farine de Tradition Fran\xE7aise",
    region: "Beauce Valley, France",
    milling: "Roller & Stone Combination",
    protein: "12.4%",
    ash: "0.65% (French Pastry Standard)",
    flavorNotes: "Golden wheat, fresh cream, shattering crust",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/All-Purpose_Flour_%284107895947%29.jpg/1280px-All-Purpose_Flour_%284107895947%29.jpg",
    usedIn: "Isigny Butter Croissant & Pain au Chocolat",
    filterCategory: "viennoiserie",
    description: "Certified 100% additive-free French wheat delivering unmatched honeycombed alveoli in our viennoiserie."
  }
];
var TerroirGrainSection = ({
  onSelectGrainCategory
}) => {
  const [selectedGrainId, setSelectedGrainId] = (0, import_react9.useState)(GRAINS[0].id);
  const selectedGrain = GRAINS.find((g) => g.id === selectedGrainId) || GRAINS[0];
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { id: "grains-section", className: "py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] border-b border-[#E5DACD] relative overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "absolute top-1/3 right-5 w-80 h-80 bg-[#C89666]/10 rounded-full blur-3xl pointer-events-none -z-10" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "max-w-7xl mx-auto space-y-12", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
        import_react10.motion.div,
        {
          className: "text-center max-w-3xl mx-auto space-y-3",
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.8, ease: "easeOut" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill text-xs font-semibold text-[#8D4B26]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react5.Wheat, { className: "w-3.5 h-3.5 text-[#C17D44]" }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: "L'Origine des Terroirs" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { className: "text-3xl sm:text-4xl font-serif font-bold text-[#341C02]", children: "Single-Estate Heritage Grains & Cold Stone Milling" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-sm sm:text-base text-[#5E5244] leading-relaxed", children: "Industrial white flour removes 80% of wheat nutrition. We partner with biodynamic French grain growers who cultivate heirloom varieties, milled gently without heat to keep every living nutrient alive." })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          import_react10.motion.div,
          {
            className: "lg:col-span-5 space-y-3 flex flex-col justify-center",
            initial: { opacity: 0, x: -30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.8, delay: 0.1, ease: "easeOut" },
            children: GRAINS.map((grain) => {
              const isSelected = selectedGrain.id === grain.id;
              return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
                "button",
                {
                  onClick: () => setSelectedGrainId(grain.id),
                  className: `w-full p-4 rounded-2xl text-left transition-all duration-300 border flex items-center justify-between ${isSelected ? "bg-white border-[#341C02] shadow-md -translate-x-1 sm:-translate-x-2" : "glass-card border-[#E5DACD] hover:bg-white/70 hover:border-[#D0C0AC]"}`,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "text-[10px] uppercase font-bold tracking-widest text-[#8D4B26]", children: grain.frenchName }),
                      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { className: "font-serif font-bold text-base sm:text-lg text-[#341C02]", children: grain.name }),
                      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("p", { className: "text-xs text-[#786C5E] flex items-center gap-1", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react5.MapPin, { className: "w-3 h-3 text-[#A8794E]" }),
                        grain.region
                      ] })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: `w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isSelected ? "bg-[#341C02] text-[#FAF7F2]" : "bg-[#F4EBE1] text-[#786C5E]"}`, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react5.ArrowRight, { className: "w-4 h-4" }) })
                  ]
                },
                grain.id
              );
            })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
          import_react10.motion.div,
          {
            className: "lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-[#E2D7CA] flex flex-col justify-between space-y-6",
            initial: { opacity: 0, x: 30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "space-y-6", children: [
                /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "relative rounded-2xl overflow-hidden h-48 sm:h-56 w-full shadow-inner bg-[#EFE8DC]", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                    import_react10.motion.img,
                    {
                      initial: { opacity: 0, scale: 1.05 },
                      animate: { opacity: 1, scale: 1 },
                      transition: { duration: 0.5 },
                      src: selectedGrain.image,
                      alt: selectedGrain.name,
                      className: "w-full h-full object-cover"
                    },
                    selectedGrain.id
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" }),
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "absolute bottom-4 left-4 right-4 text-white flex items-end justify-between", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "text-xs font-serif italic text-[#E8C5A0]", children: "Estate Origin" }),
                      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h4", { className: "text-xl font-serif font-bold", children: selectedGrain.name })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold border border-white/20", children: "100% Bio Certified" })
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                  import_react10.motion.p,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    className: "text-sm text-[#4A3C2F] leading-relaxed",
                    children: selectedGrain.description
                  },
                  `${selectedGrain.id}-desc`
                ),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 text-center", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "p-3 rounded-xl bg-white border border-[#E8DFD1]", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-[10px] uppercase font-bold text-[#8C7A68]", children: "Natural Protein" }),
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-sm font-serif font-bold text-[#341C02] mt-0.5", children: selectedGrain.protein })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "p-3 rounded-xl bg-white border border-[#E8DFD1]", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-[10px] uppercase font-bold text-[#8C7A68]", children: "Ash & Minerals" }),
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-sm font-serif font-bold text-[#341C02] mt-0.5", children: selectedGrain.ash })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "p-3 rounded-xl bg-white border border-[#E8DFD1]", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-[10px] uppercase font-bold text-[#8C7A68]", children: "Milling Method" }),
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-xs font-bold text-[#341C02] mt-0.5 truncate", children: selectedGrain.milling.split(" ")[0] })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "p-3 rounded-xl bg-white border border-[#E8DFD1]", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-[10px] uppercase font-bold text-[#8C7A68]", children: "Key Bread" }),
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-xs font-bold text-[#8D4B26] mt-0.5 truncate", children: selectedGrain.usedIn.split("&")[0] })
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "p-4 rounded-xl bg-[#FFF9F3] border border-[#F0DFCF] space-y-1", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex items-center gap-1.5 text-xs font-bold text-[#8D4B26]", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react5.Sparkles, { className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: "Aromatics & Crumb Character:" })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("p", { className: "text-xs text-[#6E5D4C] italic font-serif", children: [
                    '"',
                    selectedGrain.flavorNotes,
                    '"'
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "pt-4 border-t border-[#E5DACD] flex flex-col sm:flex-row items-center justify-between gap-4", children: [
                /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "text-xs text-[#786C5E]", children: [
                  "Featured in: ",
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("strong", { className: "text-[#341C02]", children: selectedGrain.usedIn })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
                  "button",
                  {
                    onClick: () => onSelectGrainCategory(selectedGrain.filterCategory),
                    className: "w-full sm:w-auto bg-[#341C02] hover:bg-[#45372B] text-[#FAF7F2] px-5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { children: [
                        "Explore Breads Made with ",
                        selectedGrain.name.split(" ")[0]
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react5.ArrowRight, { className: "w-3.5 h-3.5" })
                    ]
                  }
                )
              ] })
            ]
          }
        )
      ] })
    ] })
  ] });
};

// src/components/PairingGuideSection.tsx
var import_react11 = require("react");
var import_lucide_react6 = require("lucide-react");
var import_react12 = require("motion/react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var PAIRING_PROFILES = [
  {
    itemId: "country-batard",
    itemName: "Country Batard (Pain de Campagne)",
    itemImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/USS_John_C._Stennis_baker.jpg/1280px-USS_John_C._Stennis_baker.jpg",
    frenchTitle: "L'Harmonie Champ\xEAtre",
    cheesePairing: {
      name: "24-Month Cave-Aged Comt\xE9 AOP",
      origin: "Jura Mountains, France",
      description: "The roasted hazelnut notes of Comt\xE9 melt seamlessly with the lactic tang and toasted crust of our wild batard."
    },
    pantryPairing: {
      name: "Beurre de Baratte & Confit Shallots",
      description: "Thick-cut slices slathered with cold-churned Normandy salt butter and slow-simmered rosemary shallot confit."
    },
    beveragePairing: {
      name: "Domaine de la Roman\xE9e Red Burgundy or Filtered Geisha Coffee",
      type: "Pinot Noir / Pour-Over",
      description: "Earthy forest-floor tannins cut through the crisp crust while enhancing the mineral sourdough complexity."
    },
    chefAdvice: "Toast thick 18mm slices over cast iron with grass-fed butter until the edges bronze."
  },
  {
    itemId: "walnut-fig-levain",
    itemName: "Roasted Walnut & Black Fig Levain",
    itemImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Home_made_sour_dough_bread.jpg/1280px-Home_made_sour_dough_bread.jpg",
    frenchTitle: "L'Accord Doux & Rustique",
    cheesePairing: {
      name: "Roquefort AOP Papillon & Aged Goat Ch\xE8vre",
      origin: "Aveyron, France",
      description: "The intense saline blue bite of Roquefort is instantly tamed and balanced by sweet Mission black figs."
    },
    pantryPairing: {
      name: "Lavender Wildflower Honey & Prosciutto di Parma",
      description: "Drizzled with raw Provencal lavender honey and layered with paper-thin 24-month dry-cured ham."
    },
    beveragePairing: {
      name: "Sauternes Dessert Wine or Japanese Hojicha Tea",
      type: "Sweet White / Roasted Green Tea",
      description: "Honeyed stone fruit aromas in Sauternes echo the figs, creating an unforgettable cheese board climax."
    },
    chefAdvice: "Serve at room temperature alongside a charcuterie board with fresh thyme."
  },
  {
    itemId: "classic-croissant",
    itemName: "Isigny Butter Croissant",
    itemImage: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Croissant-Petr_Kratochvil.jpg",
    frenchTitle: "Le Grand Classique Parisien",
    cheesePairing: {
      name: "Triple-Cr\xE8me Brillat-Savarin AOP",
      origin: "Normandy, France",
      description: "Lush, decadent triple-cream cheese matching the 84% butterfat richness of Isigny lamination."
    },
    pantryPairing: {
      name: "Mara des Bois Wild Strawberry Confiture",
      description: "Slow-cooked copper pot strawberry jam with natural pectin for a tart berry counterpoint."
    },
    beveragePairing: {
      name: "Single-Origin Ethiopian Yirgacheffe Flat White",
      type: "Light Roast Espresso & Velvety Milk",
      description: "Bright citrus floral notes in the espresso cut through the shatteringly flaky butter layers."
    },
    chefAdvice: "Enjoy within 3 hours of the 8:00 AM or 12:00 PM morning drop."
  },
  {
    itemId: "sourdough-focaccia-rosemary",
    itemName: "Heritage Sourdough Focaccia",
    itemImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Focaccia_with_Crumb.jpg/1280px-Focaccia_with_Crumb.jpg",
    frenchTitle: "La Table M\xE9diterran\xE9enne",
    cheesePairing: {
      name: "Fresh Stracciatella di Bufala",
      origin: "Puglia, Italy",
      description: "Creamy sweet buffalo shreds dripping over the warm rosemary, sea salt, and confit garlic pockets."
    },
    pantryPairing: {
      name: "25-Year Traditional Balsamic of Modena & EVOO",
      description: "First cold-pressed Tuscan olive oil paired with syrupy aged balsamic vinegar."
    },
    beveragePairing: {
      name: "Crisp Vermentino or Franciacorta Brut",
      type: "Mineral White / Italian Sparkling",
      description: "Crisp saline minerality and lively effervescence highlight the olive oil and blistered bottom crust."
    },
    chefAdvice: "Warm in a hot dry skillet for 90 seconds to re-crisp the olive oil crust."
  }
];
var PairingGuideSection = ({
  products,
  onQuickAdd,
  onOpenItemDetail
}) => {
  const [selectedProfile, setSelectedProfile] = (0, import_react11.useState)(PAIRING_PROFILES[0]);
  const [addedSuccess, setAddedSuccess] = (0, import_react11.useState)(false);
  const matchedProduct = products.find((p) => p.id === selectedProfile.itemId);
  const handleAddMatchingItem = () => {
    if (matchedProduct) {
      onQuickAdd(matchedProduct);
      setAddedSuccess(true);
      setTimeout(() => setAddedSuccess(false), 1500);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("section", { id: "pairings-section", className: "py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F4EDE2]/50 border-b border-[#E5DACD] relative overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "absolute top-1/4 left-1/3 w-96 h-96 bg-[#E8C5A0]/20 rounded-full blur-3xl pointer-events-none -z-10" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "max-w-7xl mx-auto space-y-12", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
        import_react12.motion.div,
        {
          className: "text-center max-w-3xl mx-auto space-y-3",
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.8, ease: "easeOut" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill text-xs font-semibold text-[#8D4B26]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react6.Utensils, { className: "w-3.5 h-3.5 text-[#C17D44]" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: "L'Accord Parfait" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { className: "text-3xl sm:text-4xl font-serif font-bold text-[#341C02]", children: "Sommelier Pairing Guide & Artisanal Tables" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-sm sm:text-base text-[#5E5244] leading-relaxed", children: "Bread is the canvas of the French gastronomic table. Explore our master baker's curated pairings of raw-milk artisan cheeses, biodynamic wines, and estate preserves." })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          import_react12.motion.div,
          {
            className: "lg:col-span-4 space-y-3 flex flex-col justify-center",
            initial: { opacity: 0, x: -30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.8, delay: 0.1, ease: "easeOut" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-xs font-bold uppercase tracking-wider text-[#8C7A68] px-1", children: "Select Signature Loaf / Pastry" }),
              PAIRING_PROFILES.map((profile) => {
                const isSelected = selectedProfile.itemId === profile.itemId;
                return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
                  "button",
                  {
                    onClick: () => setSelectedProfile(profile),
                    className: `w-full p-3.5 rounded-2xl text-left transition-all border flex items-center gap-3.5 ${isSelected ? "bg-white border-[#341C02] shadow-md ring-1 ring-[#341C02]/20" : "glass-card border-[#E5DACD] hover:bg-white/70"}`,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                        "img",
                        {
                          src: profile.itemImage,
                          alt: profile.itemName,
                          className: "w-14 h-14 rounded-xl object-cover shrink-0 shadow-sm",
                          referrerPolicy: "no-referrer"
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "min-w-0 flex-1", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-[10px] uppercase font-bold text-[#8D4B26] tracking-wider", children: profile.frenchTitle }),
                        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "font-serif font-bold text-sm text-[#341C02] truncate", children: profile.itemName.split("(")[0] })
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react6.ChevronRight, { className: `w-4 h-4 shrink-0 ${isSelected ? "text-[#341C02]" : "text-[#A89887]"}` })
                    ]
                  },
                  profile.itemId
                );
              })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          import_react12.motion.div,
          {
            className: "lg:col-span-8 glass-panel rounded-3xl p-6 sm:p-8 border border-[#E2D7CA] flex flex-col justify-between space-y-6 shadow-sm",
            initial: { opacity: 0, x: 30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "space-y-6", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5DACD] pb-4", children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "text-xs italic font-serif text-[#8D4B26]", children: "Sommelier Tasting Notes" }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: "text-2xl font-serif font-bold text-[#341C02]", children: selectedProfile.itemName })
                ] }),
                matchedProduct && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                    "button",
                    {
                      onClick: () => onOpenItemDetail(matchedProduct),
                      className: "px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white border border-[#D9CEBF] text-[#341C02] hover:bg-[#FAF7F2] transition-colors",
                      children: "View Loaf Specs"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                    "button",
                    {
                      onClick: handleAddMatchingItem,
                      className: "px-4 py-1.5 rounded-xl text-xs font-semibold bg-[#341C02] text-[#FAF7F2] hover:bg-[#45372B] transition-all flex items-center gap-1.5 active:scale-95 shadow-sm",
                      children: addedSuccess ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
                        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react6.Check, { className: "w-3.5 h-3.5 text-[#A8D5BA]" }),
                        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: "Added to Basket" })
                      ] }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
                        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react6.Plus, { className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { children: [
                          "Add Loaf ($",
                          matchedProduct.price.toFixed(2),
                          ")"
                        ] })
                      ] })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "p-4 rounded-2xl bg-white border border-[#E8DFD1] space-y-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-center gap-2 text-xs font-bold text-[#8D4B26] uppercase tracking-wider", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react6.Utensils, { className: "w-4 h-4 text-[#C17D44]" }),
                    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: "Fromage Affin\xE9" })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "font-serif font-bold text-sm text-[#341C02]", children: selectedProfile.cheesePairing.name }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-[11px] text-[#8C7A68] font-medium", children: selectedProfile.cheesePairing.origin }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-xs text-[#5E5244] leading-relaxed", children: selectedProfile.cheesePairing.description })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "p-4 rounded-2xl bg-white border border-[#E8DFD1] space-y-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-center gap-2 text-xs font-bold text-[#8D4B26] uppercase tracking-wider", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react6.Sparkles, { className: "w-4 h-4 text-[#C17D44]" }),
                    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: "Gourmet Pantry" })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "font-serif font-bold text-sm text-[#341C02]", children: selectedProfile.pantryPairing.name }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-xs text-[#5E5244] leading-relaxed pt-3", children: selectedProfile.pantryPairing.description })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "p-4 rounded-2xl bg-white border border-[#E8DFD1] space-y-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-center gap-2 text-xs font-bold text-[#8D4B26] uppercase tracking-wider", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react6.Wine, { className: "w-4 h-4 text-[#C17D44]" }),
                    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: "Wine & Roast Accord" })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "font-serif font-bold text-sm text-[#341C02]", children: selectedProfile.beveragePairing.name }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-[11px] text-[#8C7A68] font-medium", children: selectedProfile.beveragePairing.type }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-xs text-[#5E5244] leading-relaxed", children: selectedProfile.beveragePairing.description })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "p-4 rounded-2xl bg-[#FFF9F3] border border-[#F0DFCF] flex items-start gap-3", children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "w-8 h-8 rounded-xl bg-[#F7EBE1] flex items-center justify-center text-[#8D4B26] shrink-0 mt-0.5", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react6.Sparkles, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "space-y-0.5", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-xs font-bold text-[#8D4B26] uppercase tracking-wider", children: "Master Baker's Serving Ritual" }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { className: "text-xs text-[#6E5D4C] leading-relaxed", children: [
                    '"',
                    selectedProfile.chefAdvice,
                    '"'
                  ] })
                ] })
              ] })
            ] })
          }
        )
      ] })
    ] })
  ] });
};

// src/components/ArtisanalCraftSection.tsx
var import_react13 = require("react");
var import_lucide_react7 = require("lucide-react");
var import_react14 = require("motion/react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var ArtisanalCraftSection = () => {
  const [hydrationLevel, setHydrationLevel] = (0, import_react13.useState)(82);
  const getHydrationAnalysis = (lvl) => {
    if (lvl < 75) {
      return {
        crumb: "Dense, uniform sandwich crumb",
        crust: "Thick, firm, golden",
        keeping: "2-3 days freshness",
        description: "Traditional standard bread dough with tight structure."
      };
    } else if (lvl <= 82) {
      return {
        crumb: "Wild, open honeycomb with glistening custardy pockets",
        crust: "Thin, blistered, shattering ear",
        keeping: "5-7 days naturally preserved via lactic acidity",
        description: "Our signature Maison Levain country batard standard."
      };
    } else {
      return {
        crumb: "Extreme high-aeration cloud crumb, pillow-soft",
        crust: "Lacquered, delicate, olive-oil kissed",
        keeping: "Requires high heat deck baking & overnight autolyse",
        description: "Used in our 48h Heritage Rosemary Sourdough Focaccia."
      };
    }
  };
  const analysis = getHydrationAnalysis(hydrationLevel);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("section", { id: "craft-section", className: "py-16 px-4 sm:px-6 lg:px-8 bg-[#F4EDE2]/70 border-y border-[#E5DACD] relative overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "absolute top-1/2 left-10 w-96 h-96 bg-[#E8C5A0]/20 rounded-full blur-3xl pointer-events-none -z-10" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "absolute bottom-10 right-10 w-96 h-96 bg-[#E27D60]/10 rounded-full blur-3xl pointer-events-none -z-10" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "max-w-7xl mx-auto space-y-12", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
        import_react14.motion.div,
        {
          className: "text-center max-w-2xl mx-auto space-y-3",
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.8, ease: "easeOut" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-xs uppercase tracking-[0.25em] text-[#8D4B26] font-bold", children: "Artisanal Philosophy" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { className: "text-3xl sm:text-4xl font-serif font-bold text-[#341C02]", children: "The Alchemy of Time, Flour & Wild Levain" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-sm sm:text-base text-[#5E5244] leading-relaxed", children: "True bread requires no commercial acceleration. We honor the ancestral European tradition of slow-fermentation and stone-milled heritage grains." })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6", children: CRAFT_PHILOSOPHY.map((pillar, idx) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
        import_react14.motion.div,
        {
          className: "glass-card p-6 rounded-2xl border border-[#E5DACD] space-y-4 hover:shadow-lg transition-all duration-300 flex flex-col justify-between",
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-50px" },
          transition: { duration: 0.8, delay: idx * 0.1, ease: "easeOut" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "space-y-3", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "text-[11px] font-bold uppercase tracking-wider text-[#8D4B26]", children: pillar.subtitle }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: "w-7 h-7 rounded-full bg-[#FAF7F2] border border-[#E0D4C5] flex items-center justify-center font-serif text-xs font-bold text-[#341C02]", children: [
                  "0",
                  idx + 1
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "font-serif text-xl font-bold text-[#341C02]", children: pillar.title }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-xs text-[#6B5E4F] leading-relaxed", children: pillar.description })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "pt-4 border-t border-[#EFE8DC] flex items-baseline justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "font-serif text-2xl font-bold text-[#341C02]", children: pillar.stat }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "text-[11px] font-medium text-[#786C5E]", children: pillar.statLabel })
            ] })
          ]
        },
        idx
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        import_react14.motion.div,
        {
          className: "glass-panel p-6 sm:p-8 rounded-3xl border border-[#E2D7CA] shadow-sm",
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
          children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "lg:col-span-6 space-y-5", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#E0D4C5] text-xs font-semibold text-[#8D4B26]", children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_lucide_react7.Droplets, { className: "w-3.5 h-3.5 text-[#C17D44]" }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: "Interactive Baker's Formula" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-2xl font-serif font-bold text-[#341C02]", children: "Why High Hydration Matters in Sourdough" }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("p", { className: "text-xs sm:text-sm text-[#5E5244] leading-relaxed", children: [
                "Hydration is the ratio of water to flour by weight. While commercial bakeries use 60-65% for machine handling, our master bakers hand-fold doughs at ",
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("strong", { children: "80% to 88% hydration" }),
                ", creating our signature custardy, long-lasting open crumb."
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "space-y-3 bg-white p-4 sm:p-5 rounded-2xl border border-[#E2D7CA]", children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "text-xs font-bold uppercase tracking-wider text-[#5E5244]", children: "Dough Hydration Rate" }),
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: "font-serif text-xl font-bold text-[#8D4B26]", children: [
                    hydrationLevel,
                    "% Water-to-Flour"
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                  "input",
                  {
                    type: "range",
                    min: "68",
                    max: "88",
                    step: "1",
                    value: hydrationLevel,
                    onChange: (e) => setHydrationLevel(Number(e.target.value)),
                    className: "w-full h-2 bg-[#EFE8DC] rounded-lg appearance-none cursor-pointer accent-[#341C02]"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex justify-between text-[11px] text-[#786C5E] font-medium", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: "68% (Standard Loaf)" }),
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "font-bold text-[#341C02]", children: "82% (Maison Levain)" }),
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: "88% (Focaccia)" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "lg:col-span-6 space-y-4 bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-[#E2D7CA]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8D4B26]", children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_lucide_react7.Sparkles, { className: "w-3.5 h-3.5 text-[#C17D44]" }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { children: [
                  "Crumb & Texture Analysis (",
                  hydrationLevel,
                  "%)"
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "space-y-3", children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD1]", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-xs font-bold text-[#341C02]", children: "Crumb Structure" }),
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-xs text-[#5E5244] mt-0.5", children: analysis.crumb })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD1]", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-xs font-bold text-[#341C02]", children: "Crust Character" }),
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-xs text-[#5E5244] mt-0.5", children: analysis.crust })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD1]", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-xs font-bold text-[#341C02]", children: "Shelf Life & Flavor" }),
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-xs text-[#5E5244] mt-0.5", children: analysis.keeping })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("p", { className: "text-xs italic text-[#786C5E] font-serif border-t border-[#EAE0D3] pt-3", children: [
                '"',
                analysis.description,
                '"'
              ] })
            ] })
          ] })
        }
      )
    ] })
  ] });
};

// src/components/FournilJournalSection.tsx
var import_lucide_react8 = require("lucide-react");
var import_react15 = require("motion/react");
var import_jsx_runtime9 = require("react/jsx-runtime");
var JOURNAL_MOMENTS = [
  {
    time: "04:15 AM",
    title: "Awakening the 112-Year Mother Culture",
    frenchTitle: "Le R\xE9veil du Levain Chef",
    story: "Before Paris stirs, the fournil air fills with sweet lactic aromas as we refresh our ancestral levain with mountain spring water and stoneground rye.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Dough.jpg/1280px-Dough.jpg",
    craftTag: "Living Levain"
  },
  {
    time: "06:00 AM",
    title: "Hand-Folding High Hydration Batches",
    frenchTitle: "Le Rabattage Artisanal",
    story: "Gentle coil folds every 45 minutes develop exceptional gluten extensibility without degassing delicate wild honeycomb alveoli.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Kneading.jpg/1280px-Kneading.jpg",
    craftTag: "82% Hydration"
  },
  {
    time: "07:45 AM",
    title: "Lame Scoring & High-Steam Hearth Deck",
    frenchTitle: "L'Enfournement & Coup de Lame",
    story: "Using razor-sharp French lames, each loaf is hand-scored with a signature crescent ear before baking at 245\xB0C with saturated steam.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Baguettes%2C_Paris%2C_France_-_panoramio.jpg/1280px-Baguettes%2C_Paris%2C_France_-_panoramio.jpg",
    craftTag: "Volcanic Stone"
  },
  {
    time: "10:00 AM",
    title: 'Cooling & Acoustic Crust "Singing"',
    frenchTitle: "Le Pain qui Chante",
    story: 'As hot loaves rest on wooden willow racks, the caramelized crust crackles softly\u2014a phenomenon French bakers cherish as the "bread singing".',
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Freshly_baked_bread_loaves.jpg/1280px-Freshly_baked_bread_loaves.jpg",
    craftTag: "Open Crumb"
  }
];
var FournilJournalSection = ({
  onOpenSchedule
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("section", { id: "journal-section", className: "py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] border-b border-[#E5DACD] relative overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "max-w-7xl mx-auto space-y-12", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
      import_react15.motion.div,
      {
        className: "flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E5DACD] pb-6",
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.8, ease: "easeOut" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "space-y-3 max-w-2xl", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill text-xs font-semibold text-[#8D4B26]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react8.Camera, { className: "w-3.5 h-3.5 text-[#C17D44]" }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: "La Vie du Fournil" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { className: "text-3xl sm:text-4xl font-serif font-bold text-[#341C02]", children: "A Photographic Dawn in Paris" }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-sm text-[#5E5244] leading-relaxed", children: "Every morning begins in the quiet hours of Saint-Honor\xE9. Step inside our stone hearth bakery and witness the unhurried transformation of wheat and water." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
            "button",
            {
              onClick: onOpenSchedule,
              className: "self-start md:self-auto glass-card hover:bg-white text-[#341C02] px-5 py-2.5 rounded-xl border border-[#DFD3C3] text-xs font-semibold flex items-center gap-2 transition-all shadow-sm active:scale-95 shrink-0",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react8.Clock, { className: "w-4 h-4 text-[#A8794E]" }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: "View Today's Bake Schedule" }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react8.ArrowUpRight, { className: "w-3.5 h-3.5" })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: JOURNAL_MOMENTS.map((moment, idx) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
      import_react15.motion.div,
      {
        className: "group glass-card rounded-2xl overflow-hidden border border-[#E5DACD] hover:border-[#D0C0AC] hover:shadow-xl transition-all duration-500 flex flex-col justify-between",
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.8, delay: idx * 0.1, ease: "easeOut" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "relative h-60 w-full overflow-hidden bg-[#EFE8DC]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              "img",
              {
                src: moment.image,
                alt: moment.title,
                className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700",
                referrerPolicy: "no-referrer"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#1C140E]/80 via-transparent to-transparent" }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-[#341C02] shadow-sm", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react8.Clock, { className: "w-3 h-3 text-[#A8794E]" }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: moment.time })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "absolute bottom-3 left-3 right-3 text-white", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "text-[10px] uppercase font-bold text-[#E8C5A0] tracking-wider block", children: moment.craftTag }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "font-serif font-bold text-base leading-snug", children: moment.frenchTitle })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "p-5 flex-1 flex flex-col justify-between space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h3", { className: "font-serif font-bold text-base text-[#341C02] leading-tight", children: moment.title }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-xs text-[#6B5E4F] leading-relaxed mt-2", children: moment.story })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "pt-3 border-t border-[#EFE8DC] flex items-center justify-between text-[11px] text-[#8C7A68]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: "Maison Levain Fournil" }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { className: "font-bold", children: [
                "Step 0",
                idx + 1
              ] })
            ] })
          ] })
        ]
      },
      idx
    )) })
  ] }) });
};

// src/components/AtelierSection.tsx
var import_react16 = require("react");
var import_lucide_react9 = require("lucide-react");
var import_react17 = require("motion/react");
var import_jsx_runtime10 = require("react/jsx-runtime");
var WORKSHOPS = [
  {
    id: "ws-sourdough-mastery",
    title: "The Art of Wild Levain & 36h Proofing",
    frenchTitle: "Ma\xEEtrise du Levain Sauvage",
    duration: "4.5 Hours",
    level: "All Enthusiasts",
    price: 135,
    seatsTotal: 8,
    seatsLeft: 2,
    dates: "Next Saturday \u2022 9:00 AM - 1:30 PM",
    description: "Learn the foundational physics of sourdough fermentation from scratch. Mix, fold, score, and bake in our authentic stone deck hearths.",
    highlights: [
      "Take home a jar of our 112-year mother levain",
      "Hand-score and bake 2 sourdough batards",
      "French linen proofing banneton & baker lame included",
      "Wine & cheese tasting at the Fournil table"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Dough.jpg/1280px-Dough.jpg"
  },
  {
    id: "ws-viennoiserie-lamination",
    title: "French Viennoiserie & Isigny Butter Lamination",
    frenchTitle: "Laminage & Feuilletage AOP",
    duration: "5.0 Hours",
    level: "Intermediate",
    price: 160,
    seatsTotal: 6,
    seatsLeft: 1,
    dates: "Next Sunday \u2022 8:30 AM - 1:30 PM",
    description: "Master temperature control, 27-layer butter honeycombing, and shaping classic croissants, pain au chocolat, and kouign-amann.",
    highlights: [
      "Laminate dough using Normandy Isigny AOP butter",
      "Learn proper honeycomb crumb proofing techniques",
      "Box of 8 fresh baked viennoiseries to take home",
      "Maison Levain signature pastry apron"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Croissant-Petr_Kratochvil.jpg"
  },
  {
    id: "ws-ancient-grains",
    title: "Ancient Grains & Biodynamic Miche Intensive",
    frenchTitle: "Farines Anciennes & Grandes Miches",
    duration: "6.0 Hours",
    level: "Advanced Home Bakers",
    price: 185,
    seatsTotal: 6,
    seatsLeft: 3,
    dates: "Selected Fridays \u2022 10:00 AM - 4:00 PM",
    description: "Deep dive into low-gluten grains (Einkorn, Spelt, Khorasan Kamut), high hydration handling (88%), and large format stone hearth miche baking.",
    highlights: [
      "Milling grains on stone burr tabletop mills",
      "High-hydration hand mixing without stand mixers",
      "Wood-fired oven heat management & steam technique",
      "Complete 2kg Miche de Garde loaf + flour sack"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Home_made_sour_dough_bread.jpg/1280px-Home_made_sour_dough_bread.jpg"
  }
];
var AtelierSection = () => {
  const [selectedWorkshop, setSelectedWorkshop] = (0, import_react16.useState)(null);
  const [bookedWorkshopId, setBookedWorkshopId] = (0, import_react16.useState)(null);
  const [attendeeName, setAttendeeName] = (0, import_react16.useState)("");
  const [attendeeEmail, setAttendeeEmail] = (0, import_react16.useState)("");
  const [bookingConfirmed, setBookingConfirmed] = (0, import_react16.useState)(false);
  const handleBookSubmit = (e) => {
    e.preventDefault();
    if (!attendeeName || !attendeeEmail || !selectedWorkshop) return;
    setBookingConfirmed(true);
    setTimeout(() => {
      setBookedWorkshopId(selectedWorkshop.id);
      setBookingConfirmed(false);
      setSelectedWorkshop(null);
      setAttendeeName("");
      setAttendeeEmail("");
    }, 1800);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("section", { id: "workshops-section", className: "py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F4EDE2]/70 border-b border-[#E5DACD] relative overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "absolute bottom-10 left-10 w-96 h-96 bg-[#E8C5A0]/20 rounded-full blur-3xl pointer-events-none -z-10" }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "max-w-7xl mx-auto space-y-12", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
        import_react17.motion.div,
        {
          className: "text-center max-w-3xl mx-auto space-y-3",
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.8, ease: "easeOut" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill text-xs font-semibold text-[#8D4B26]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react9.Award, { className: "w-3.5 h-3.5 text-[#C17D44]" }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: "Les Ateliers du Pain" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: "text-3xl sm:text-4xl font-serif font-bold text-[#341C02]", children: "Sourdough Masterclasses & VIP Fournil Atelier" }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-sm sm:text-base text-[#5E5244] leading-relaxed", children: "Step behind the deck ovens with Master Baker Henri Laurent. Intimate workshops limited to 6\u20138 students, immersing you in slow fermentation craft." })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch", children: WORKSHOPS.map((ws, idx) => {
        const isBooked = bookedWorkshopId === ws.id;
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
          import_react17.motion.div,
          {
            className: "glass-card rounded-3xl overflow-hidden border border-[#E5DACD] flex flex-col justify-between hover:shadow-xl transition-all duration-300 group",
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-50px" },
            transition: { duration: 0.8, delay: idx * 0.1, ease: "easeOut" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "relative h-48 w-full overflow-hidden bg-[#EFE8DC]", children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  "img",
                  {
                    src: ws.image,
                    alt: ws.title,
                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                    referrerPolicy: "no-referrer"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-[#8D4B26] shadow-sm", children: [
                  ws.seatsLeft,
                  " ",
                  ws.seatsLeft === 1 ? "Seat Left" : "Seats Left"
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "absolute bottom-3 left-4 right-4 text-white", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "text-[10px] uppercase font-bold text-[#E8C5A0] tracking-wider", children: ws.frenchTitle }),
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { className: "font-serif font-bold text-lg leading-snug", children: ws.title })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "p-6 flex-1 flex flex-col justify-between space-y-4", children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex items-center justify-between text-xs text-[#786C5E] border-b border-[#EFE8DC] pb-3", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex items-center gap-1.5 font-medium", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react9.Clock, { className: "w-3.5 h-3.5 text-[#A8794E]" }),
                      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: ws.duration })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex items-center gap-1.5 font-medium", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react9.Users, { className: "w-3.5 h-3.5 text-[#A8794E]" }),
                      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { children: [
                        "Max ",
                        ws.seatsTotal,
                        " Students"
                      ] })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "font-bold text-[#341C02] bg-[#F4EBE1] px-2 py-0.5 rounded-md text-[10px]", children: ws.level })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-xs text-[#5E5244] leading-relaxed", children: ws.description }),
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "space-y-1.5 pt-1", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-[11px] font-bold uppercase tracking-wider text-[#8C7A68]", children: "Workshop Inclusions:" }),
                    ws.highlights.map((item, idx2) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex items-start gap-2 text-xs text-[#4A3C2F]", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react9.Check, { className: "w-3.5 h-3.5 text-[#82AA57] shrink-0 mt-0.5" }),
                      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "leading-snug", children: item })
                    ] }, idx2))
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "p-2.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD1] text-[11px] font-medium text-[#786C5E] flex items-center gap-2", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react9.Calendar, { className: "w-3.5 h-3.5 text-[#8D4B26]" }),
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: ws.dates })
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "pt-4 border-t border-[#E5DACD] flex items-center justify-between gap-3", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "text-[10px] text-[#8C7A68] block uppercase font-bold", children: "Per Person" }),
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { className: "font-serif text-2xl font-bold text-[#341C02]", children: [
                      "$",
                      ws.price
                    ] })
                  ] }),
                  isBooked ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#EAF5ED] text-[#2D7342] text-xs font-bold border border-[#A8D5BA]", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react9.Check, { className: "w-4 h-4" }),
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: "Reserved" })
                  ] }) : /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                    "button",
                    {
                      onClick: () => setSelectedWorkshop(ws),
                      className: "bg-[#341C02] hover:bg-[#45372B] text-[#FAF7F2] px-5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 active:scale-95 shadow-sm",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: "Reserve Seat" }),
                        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react9.ArrowRight, { className: "w-3.5 h-3.5" })
                      ]
                    }
                  )
                ] })
              ] })
            ]
          },
          ws.id
        );
      }) })
    ] }),
    selectedWorkshop && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 max-w-md w-full border border-[#E5DACD] shadow-2xl space-y-5 relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "text-[10px] uppercase font-bold tracking-wider text-[#8D4B26]", children: "Maison Levain Atelier Reservation" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { className: "text-xl font-serif font-bold text-[#341C02]", children: selectedWorkshop.title }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { className: "text-xs text-[#786C5E]", children: [
          selectedWorkshop.dates,
          " \u2022 $",
          selectedWorkshop.price,
          " per student"
        ] })
      ] }),
      bookingConfirmed ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "p-6 rounded-2xl bg-[#EAF5ED] border border-[#A8D5BA] text-center space-y-2 animate-fade-in", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "w-12 h-12 rounded-full bg-[#2D7342] text-white flex items-center justify-center mx-auto", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react9.Check, { className: "w-6 h-6" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "font-serif font-bold text-lg text-[#2D7342]", children: "Seat Confirmed!" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { className: "text-xs text-[#3E6B48]", children: [
          "We have sent your workshop welcome dossier and preparation notes to ",
          attendeeEmail,
          "."
        ] })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("form", { onSubmit: handleBookSubmit, className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("label", { className: "text-xs font-bold text-[#4A3C2F]", children: "Student Name" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "input",
            {
              type: "text",
              required: true,
              value: attendeeName,
              onChange: (e) => setAttendeeName(e.target.value),
              placeholder: "e.g. Claire Dubois",
              className: "w-full px-3.5 py-2.5 rounded-xl border border-[#D9CEBF] bg-white text-xs text-[#341C02] focus:outline-none focus:ring-2 focus:ring-[#8D4B26]"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("label", { className: "text-xs font-bold text-[#4A3C2F]", children: "Email Address (for welcome kit & syllabus)" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "input",
            {
              type: "email",
              required: true,
              value: attendeeEmail,
              onChange: (e) => setAttendeeEmail(e.target.value),
              placeholder: "claire@example.com",
              className: "w-full px-3.5 py-2.5 rounded-xl border border-[#D9CEBF] bg-white text-xs text-[#341C02] focus:outline-none focus:ring-2 focus:ring-[#8D4B26]"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "p-3 rounded-xl bg-[#FFF9F3] border border-[#F0DFCF] flex items-center gap-2 text-xs text-[#7A4B29]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react9.ShieldCheck, { className: "w-4 h-4 text-[#8D4B26] shrink-0" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: "Free cancellation up to 48 hours prior to the session." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex items-center justify-end gap-2.5 pt-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "button",
            {
              type: "button",
              onClick: () => setSelectedWorkshop(null),
              className: "px-4 py-2.5 rounded-xl text-xs font-semibold text-[#786C5E] hover:text-[#341C02] transition-colors",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
            "button",
            {
              type: "submit",
              className: "bg-[#341C02] hover:bg-[#45372B] text-[#FAF7F2] px-6 py-2.5 rounded-xl text-xs font-semibold transition-all active:scale-95 shadow-md",
              children: [
                "Confirm Booking ($",
                selectedWorkshop.price,
                ")"
              ]
            }
          )
        ] })
      ] })
    ] }) })
  ] });
};

// src/components/ReviewsAndPressSection.tsx
var import_react18 = require("react");
var import_lucide_react10 = require("lucide-react");
var import_react19 = require("motion/react");
var import_jsx_runtime11 = require("react/jsx-runtime");
var PRESS_QUOTES = [
  {
    publication: "Le Guide Michelin",
    badge: "Paris Bakery Selection 2026",
    quote: "Maison Levain represents the pinnacle of French slow-fermentation revival. Their Country Batard delivers a crust so caramelized and a crumb so glistening it sets a new standard for Paris.",
    author: "Gastronomy Editorial Board"
  },
  {
    publication: "Le Figaro \xC9picurien",
    badge: "Best Croissant in Paris",
    quote: "With 27 distinct hand-rolled layers of Isigny AOP butter, biting into their croissant is a moment of pure acoustic and buttery ecstasy.",
    author: "Fran\xE7ois-R\xE9gis Gaudry"
  },
  {
    publication: "Gault & Millau",
    badge: "Artisan of the Year",
    quote: "Henri Laurent treats ancient flours like grand cru grapes. The biodynamic Einkorn miche proves that ancestral nutrition and haute gastronomy belong together.",
    author: "Chef Panel"
  }
];
var CUSTOMER_REVIEWS = [
  {
    id: "rev-1",
    author: "\xC9lodie Fontaine",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1280px-Pierre-Person.jpg",
    role: "Saint-Honor\xE9 Resident",
    rating: 5,
    date: "Yesterday",
    title: "The best sourdough in France, period.",
    comment: "I walk past 4 boulangeries every morning just to reach Maison Levain for the 10:15 AM batard drop. The crumb stays fresh for nearly a full week thanks to their wild fermentation.",
    verifiedItem: "Country Batard (Pain de Campagne)"
  },
  {
    id: "rev-2",
    author: "Marc Vandeberg",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1280px-Pierre-Person.jpg",
    role: "Verified Food Critic",
    rating: 5,
    date: "3 days ago",
    title: "Unbelievable honeycomb structure",
    comment: "The Valrhona pain au chocolat and Brittany Kouign-Amann are masterclasses in lamination. Shattering crusts with zero oily residue.",
    verifiedItem: "Valrhona Pain au Chocolat"
  },
  {
    id: "rev-3",
    author: "Sophie Chen",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1280px-Pierre-Person.jpg",
    role: "Home Sourdough Baker",
    rating: 5,
    date: "1 week ago",
    title: "The 100-Year Starter Kit changed my baking!",
    comment: "The live starter in the Weck jar exploded with bubbles within 4 hours of arrival. My home loaves now have that deep custard crumb and blistered ear I could never achieve before.",
    verifiedItem: "Maison Levain Starter Kit"
  }
];
var ReviewsAndPressSection = () => {
  const [activeTab, setActiveTab] = (0, import_react18.useState)("press");
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("section", { id: "reviews-section", className: "py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] border-b border-[#E5DACD] relative overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "max-w-7xl mx-auto space-y-12", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
      import_react19.motion.div,
      {
        className: "text-center max-w-3xl mx-auto space-y-3",
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.8, ease: "easeOut" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill text-xs font-semibold text-[#8D4B26]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react10.Award, { className: "w-3.5 h-3.5 text-[#C17D44]" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: "La Table des Connaisseurs" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "text-3xl sm:text-4xl font-serif font-bold text-[#341C02]", children: "Critical Acclaim & Verified Gourmand Reviews" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("p", { className: "text-sm sm:text-base text-[#5E5244] leading-relaxed", children: [
            "Rated ",
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("strong", { children: "4.96 / 5.0" }),
            " across 1,200+ Paris patrons, Michelin inspectors, and culinary artisans worldwide."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "inline-flex p-1 rounded-2xl bg-[#EFE8DC] border border-[#DFD3C3] mt-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              "button",
              {
                onClick: () => setActiveTab("press"),
                className: `px-5 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === "press" ? "bg-[#341C02] text-[#FAF7F2] shadow-sm" : "text-[#6E5D4C] hover:text-[#341C02]"}`,
                children: "Gastronomy Press & Michelin Guide"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              "button",
              {
                onClick: () => setActiveTab("reviews"),
                className: `px-5 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === "reviews" ? "bg-[#341C02] text-[#FAF7F2] shadow-sm" : "text-[#6E5D4C] hover:text-[#341C02]"}`,
                children: "Patron Reviews (4.96 \u2605)"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_react19.AnimatePresence, { mode: "wait", children: [
      activeTab === "press" && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        import_react19.motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: { duration: 0.5 },
          className: "grid grid-cols-1 md:grid-cols-3 gap-6",
          children: PRESS_QUOTES.map((press, idx) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
            "div",
            {
              className: "glass-card p-6 sm:p-7 rounded-3xl border border-[#E5DACD] flex flex-col justify-between space-y-5 hover:shadow-xl transition-all duration-300 relative overflow-hidden",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "font-serif font-bold text-lg text-[#341C02]", children: press.publication }),
                    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react10.Quote, { className: "w-6 h-6 text-[#D4A75E] opacity-60" })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "inline-block text-[11px] font-bold text-[#8D4B26] bg-[#F7EFE6] px-2.5 py-0.5 rounded-full", children: press.badge }),
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("p", { className: "text-xs text-[#5E5244] leading-relaxed italic font-serif", children: [
                    '"',
                    press.quote,
                    '"'
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "pt-4 border-t border-[#EFE8DC] flex items-center justify-between text-[11px] text-[#786C5E]", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: press.author }),
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "flex text-[#D4A75E]", children: "\u2605".repeat(5) })
                ] })
              ]
            },
            idx
          ))
        },
        "press"
      ),
      activeTab === "reviews" && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        import_react19.motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: { duration: 0.5 },
          className: "grid grid-cols-1 md:grid-cols-3 gap-6",
          children: CUSTOMER_REVIEWS.map((rev) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
            "div",
            {
              className: "glass-card p-6 rounded-3xl border border-[#E5DACD] flex flex-col justify-between space-y-4 hover:shadow-lg transition-all",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "flex text-[#D4A75E] text-xs", children: "\u2605".repeat(rev.rating) }),
                    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "text-[11px] text-[#8C7A68]", children: rev.date })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "font-serif font-bold text-base text-[#341C02]", children: rev.title }),
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("p", { className: "text-xs text-[#5E5244] leading-relaxed", children: [
                    '"',
                    rev.comment,
                    '"'
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "pt-4 border-t border-[#EFE8DC] space-y-2", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("img", { src: rev.avatar, alt: rev.author, className: "w-8 h-8 rounded-full object-cover border border-[#D9CEBF]" }),
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-xs font-bold text-[#341C02] truncate", children: rev.author }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: "text-[10px] text-[#82AA57] flex items-center gap-1 font-semibold shrink-0", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react10.CheckCircle2, { className: "w-3 h-3" }),
                        "Verified"
                      ] })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("p", { className: "text-[10px] text-[#8C7A68] italic truncate", children: [
                      "Purchased: ",
                      rev.verifiedItem
                    ] })
                  ] })
                ] }) })
              ]
            },
            rev.id
          ))
        },
        "reviews"
      )
    ] })
  ] }) });
};

// src/components/ProductDetailModal.tsx
var import_react20 = require("react");
var import_lucide_react11 = require("lucide-react");
var import_jsx_runtime12 = require("react/jsx-runtime");
var ProductDetailModal = ({
  item,
  isOpen,
  onClose,
  onAddToCart
}) => {
  if (!isOpen || !item) return null;
  const [quantity, setQuantity] = (0, import_react20.useState)(1);
  const [selectedSlicing, setSelectedSlicing] = (0, import_react20.useState)("Whole Loaf");
  const [warmed, setWarmed] = (0, import_react20.useState)(false);
  const [giftBox, setGiftBox] = (0, import_react20.useState)(false);
  const [customNotes, setCustomNotes] = (0, import_react20.useState)("");
  const [addedAnimation, setAddedAnimation] = (0, import_react20.useState)(false);
  const [imageError, setImageError] = (0, import_react20.useState)(false);
  const slicingOptions = [
    "Whole Loaf",
    "Standard Slice (12mm)",
    "Thick Rustic Slice (18mm)",
    "Toast Cut (10mm)"
  ];
  const giftBoxPrice = giftBox ? 2.5 : 0;
  const totalPrice = (item.price + giftBoxPrice) * quantity;
  const handleAdd = () => {
    onAddToCart(
      item,
      quantity,
      item.canBeSliced ? selectedSlicing : void 0,
      warmed,
      giftBox,
      customNotes.trim() || void 0
    );
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      onClose();
    }, 400);
  };
  const fallbackImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Home_made_sour_dough_bread.jpg/1280px-Home_made_sour_dough_bread.jpg";
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-md animate-fade-in", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
    "div",
    {
      id: "product-detail-modal",
      className: "relative w-full max-w-3xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#E5DACD] overflow-hidden my-auto",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          "button",
          {
            id: "close-product-detail-modal",
            onClick: onClose,
            className: "absolute top-4 right-4 z-10 p-2 rounded-full bg-white/85 hover:bg-white text-[#341C02] backdrop-blur-sm shadow-md transition-all active:scale-95",
            children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react11.X, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "md:col-span-5 relative bg-[#EFE8DC] min-h-[260px] md:min-h-[460px] overflow-hidden", children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
              "img",
              {
                src: imageError ? fallbackImage : item.imageUrl,
                alt: item.name,
                onError: () => setImageError(true),
                className: "w-full h-full object-cover",
                referrerPolicy: "no-referrer"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#1C140E]/85 via-black/20 to-transparent" }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "absolute bottom-4 left-4 right-4 text-white", children: [
              item.frenchName && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-xs italic font-serif text-[#E8C5A0]", children: item.frenchName }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "font-serif text-2xl font-bold", children: item.name }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-xs text-[#D8C7B5] mt-1 font-medium", children: item.weightGrams ? `${item.weightGrams}g Hearth Loaf` : "Small-Batch Handcrafted" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "md:col-span-7 p-6 sm:p-8 space-y-5 flex flex-col justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "space-y-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-[11px] font-bold uppercase tracking-wider text-[#8D4B26] bg-[#F7EFE6] px-2.5 py-0.5 rounded-full", children: item.category }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex items-center gap-1 text-xs font-semibold text-[#5E5244]", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { children: [
                      "\u2605 ",
                      item.rating
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { className: "text-[#9E9080]", children: [
                      "(",
                      item.reviewsCount,
                      " reviews)"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", { className: "text-2xl font-serif font-bold text-[#341C02] mt-1.5", children: item.name }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-sm text-[#5E5244] leading-relaxed mt-2", children: item.description })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "grid grid-cols-3 gap-2.5 p-3 rounded-2xl bg-[#F4EDE2] border border-[#E8DFD1] text-center", children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "space-y-0.5", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex items-center justify-center gap-1 text-[11px] text-[#786C5E] font-medium", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react11.Clock, { className: "w-3.5 h-3.5 text-[#A8794E]" }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: "Ferment" })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-xs font-bold text-[#341C02]", children: item.fermentationHours ? `${item.fermentationHours} Hours` : "18 Hours" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "space-y-0.5 border-x border-[#DFD3C3]", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex items-center justify-center gap-1 text-[11px] text-[#786C5E] font-medium", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react11.Droplets, { className: "w-3.5 h-3.5 text-[#A8794E]" }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: "Hydration" })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-xs font-bold text-[#341C02]", children: item.hydrationPercentage ? `${item.hydrationPercentage}%` : "80%" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "space-y-0.5", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex items-center justify-center gap-1 text-[11px] text-[#786C5E] font-medium", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react11.Wheat, { className: "w-3.5 h-3.5 text-[#A8794E]" }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: "Flour" })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-xs font-bold text-[#341C02] truncate px-1", children: item.flourType ? item.flourType.split("&")[0] : "Heritage T65" })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "text-xs space-y-1.5 bg-white p-3.5 rounded-xl border border-[#EAE0D3]", children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("p", { className: "text-[#4A3C2F] font-semibold flex items-center gap-1", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react11.Wheat, { className: "w-3.5 h-3.5 text-[#A8794E]" }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: "Key Ingredients:" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-[#6E5E4F] leading-normal", children: item.ingredients.join(", ") }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "pt-1 flex items-center gap-1 text-[11px] text-[#8C7A68]", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react11.ShieldAlert, { className: "w-3.5 h-3.5 text-[#C17D44]" }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { children: [
                    "Allergens: ",
                    item.allergens.join(", ")
                  ] })
                ] })
              ] }),
              item.pairingNotes && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "text-xs p-3 rounded-xl bg-[#FFF9F3] border border-[#F0DFCF] text-[#7A4B29] flex items-start gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react11.Sparkles, { className: "w-4 h-4 text-[#C17D44] shrink-0 mt-0.5" }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "font-bold", children: "Baker's Pairing: " }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: item.pairingNotes })
                ] })
              ] }),
              item.canBeSliced && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "space-y-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("label", { className: "text-xs font-bold uppercase tracking-wider text-[#5E5244] block", children: "Bread Slicing Preference (Included)" }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "grid grid-cols-2 gap-2", children: slicingOptions.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                  "button",
                  {
                    type: "button",
                    onClick: () => setSelectedSlicing(opt),
                    className: `p-2.5 text-xs rounded-xl font-medium text-left border transition-all ${selectedSlicing === opt ? "bg-[#341C02] text-[#FAF7F2] border-[#341C02] shadow-sm" : "bg-white text-[#4A3C2F] border-[#E2D7CA] hover:border-[#C8B8A6]"}`,
                    children: opt
                  },
                  opt
                )) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "space-y-2 pt-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("label", { className: "text-xs font-bold uppercase tracking-wider text-[#5E5244] block", children: "Finishing Touches" }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("label", { className: "flex items-center gap-2 p-2.5 rounded-xl border border-[#E2D7CA] bg-white cursor-pointer hover:bg-[#FAF6F0] transition-colors", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                      "input",
                      {
                        type: "checkbox",
                        checked: warmed,
                        onChange: (e) => setWarmed(e.target.checked),
                        className: "rounded text-[#341C02] focus:ring-[#8D4B26]"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-[#4A3C2F] font-medium", children: "Oven-Warmed for Immediate Pickup" })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("label", { className: "flex items-center gap-2 p-2.5 rounded-xl border border-[#E2D7CA] bg-white cursor-pointer hover:bg-[#FAF6F0] transition-colors", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                      "input",
                      {
                        type: "checkbox",
                        checked: giftBox,
                        onChange: (e) => setGiftBox(e.target.checked),
                        className: "rounded text-[#341C02] focus:ring-[#8D4B26]"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { className: "text-[#4A3C2F] font-medium flex items-center gap-1", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react11.Gift, { className: "w-3.5 h-3.5 text-[#8D4B26]" }),
                      "Linen Gift Wrap (+$2.50)"
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "pt-4 border-t border-[#E5DACD] space-y-3", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex items-center bg-white border border-[#D9CEBF] rounded-xl p-1 shadow-sm", children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                  "button",
                  {
                    type: "button",
                    onClick: () => setQuantity(Math.max(1, quantity - 1)),
                    className: "p-1.5 hover:bg-[#F2ECE1] rounded-lg text-[#5E5244] transition-colors",
                    children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react11.Minus, { className: "w-4 h-4" })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "px-3 font-serif font-bold text-sm text-[#341C02]", children: quantity }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                  "button",
                  {
                    type: "button",
                    onClick: () => setQuantity(quantity + 1),
                    className: "p-1.5 hover:bg-[#F2ECE1] rounded-lg text-[#5E5244] transition-colors",
                    children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react11.Plus, { className: "w-4 h-4" })
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                "button",
                {
                  id: "modal-add-to-cart-btn",
                  onClick: handleAdd,
                  disabled: addedAnimation,
                  className: "flex-1 bg-[#341C02] hover:bg-[#45372B] text-[#FAF7F2] px-6 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2",
                  children: addedAnimation ? /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react11.Check, { className: "w-4 h-4 text-[#A8D5BA]" }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: "Added to Basket" })
                  ] }) : /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: "Add to Order" }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { className: "text-[#E8C5A0] font-serif", children: [
                      "\u2022 $",
                      totalPrice.toFixed(2)
                    ] })
                  ] })
                }
              )
            ] }) })
          ] })
        ] })
      ]
    }
  ) });
};

// src/components/CustomBoxBuilderModal.tsx
var import_react21 = require("react");
var import_lucide_react12 = require("lucide-react");
var import_jsx_runtime13 = require("react/jsx-runtime");
var CustomBoxBuilderModal = ({
  isOpen,
  onClose,
  onAddBoxToCart
}) => {
  if (!isOpen) return null;
  const [boxSize, setBoxSize] = (0, import_react21.useState)(4);
  const [selectedItems, setSelectedItems] = (0, import_react21.useState)([]);
  const [packagingType, setPackagingType] = (0, import_react21.useState)("Artisan Eco-Kraft");
  const [giftMessage, setGiftMessage] = (0, import_react21.useState)("");
  const [added, setAdded] = (0, import_react21.useState)(false);
  const eligiblePastries = BAKERY_PRODUCTS.filter(
    (p) => p.category === "viennoiserie" || p.category === "patisserie"
  );
  const currentCount = selectedItems.reduce((acc, curr) => acc + curr.quantity, 0);
  const remainingSlots = boxSize - currentCount;
  const baseBoxPrice = boxSize === 4 ? 20 : 29.5;
  const ribbonExtra = packagingType === "Heritage Ribbon Gift Box" ? 3.5 : 0;
  const totalPrice = baseBoxPrice + ribbonExtra;
  const handleAddItem = (pastry) => {
    if (currentCount >= boxSize) return;
    setSelectedItems((prev) => {
      const existing = prev.find((i) => i.item.id === pastry.id);
      if (existing) {
        return prev.map(
          (i) => i.item.id === pastry.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { item: pastry, quantity: 1 }];
    });
  };
  const handleRemoveItem = (pastryId) => {
    setSelectedItems((prev) => {
      const existing = prev.find((i) => i.item.id === pastryId);
      if (!existing) return prev;
      if (existing.quantity === 1) {
        return prev.filter((i) => i.item.id !== pastryId);
      }
      return prev.map(
        (i) => i.item.id === pastryId ? { ...i, quantity: i.quantity - 1 } : i
      );
    });
  };
  const handleAddBox = () => {
    if (currentCount !== boxSize) return;
    const newBox = {
      boxId: `box-${Date.now()}`,
      name: boxSize === 4 ? "The Morning Quartet Box (4 Pastries)" : "The Grand Salon Box (6 Pastries)",
      size: boxSize,
      packagingType,
      giftMessage: giftMessage.trim() || void 0,
      items: [...selectedItems],
      price: totalPrice
    };
    onAddBoxToCart(newBox);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 400);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/50 backdrop-blur-md animate-fade-in", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
    "div",
    {
      id: "custom-box-builder-modal",
      className: "relative w-full max-w-4xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#341C02] overflow-hidden my-auto",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "p-6 sm:p-8 bg-[#341C02] text-[#FAF7F2] relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            "button",
            {
              id: "close-box-builder-modal",
              onClick: onClose,
              className: "absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] transition-colors",
              children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react12.X, { className: "w-5 h-5" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex items-center gap-2 text-[#E8C5A0] text-xs uppercase font-bold tracking-widest mb-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react12.Sparkles, { className: "w-4 h-4 text-[#E27D60]" }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { children: "Artisanal Patisserie Curation" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h2", { className: "text-2xl sm:text-3xl font-serif font-bold text-white", children: "Build Your Handcrafted Pastry Box" }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-sm text-[#D8C7B5] mt-1 max-w-lg", children: "Select your favorite freshly laminated viennoiseries and French patisseries. Hand-packed in our signature bakery box." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "grid grid-cols-1 lg:grid-cols-12 max-h-[70vh] overflow-y-auto", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "lg:col-span-5 p-6 sm:p-7 bg-[#F4EDE2] border-r border-[#E5DACD] space-y-6 flex flex-col justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "space-y-5", children: [
              /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("label", { className: "text-xs font-bold uppercase tracking-wider text-[#5E5244] block mb-2", children: "1. Choose Box Capacity" }),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        setBoxSize(4);
                        setSelectedItems([]);
                      },
                      className: `p-3 rounded-2xl text-left border transition-all ${boxSize === 4 ? "bg-[#341C02] text-[#FAF7F2] border-[#341C02] shadow-sm" : "bg-white text-[#4A3C2F] border-[#E2D7CA] hover:border-[#341C02]"}`,
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-xs font-bold font-serif text-base", children: "The Quartet (4)" }),
                        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-[11px] text-[#D8C7B5] mt-0.5", children: "$20.00 \u2022 Save 15%" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        setBoxSize(6);
                        setSelectedItems([]);
                      },
                      className: `p-3 rounded-2xl text-left border transition-all ${boxSize === 6 ? "bg-[#341C02] text-[#FAF7F2] border-[#341C02] shadow-sm" : "bg-white text-[#4A3C2F] border-[#E2D7CA] hover:border-[#341C02]"}`,
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-xs font-bold font-serif text-base", children: "The Grand (6)" }),
                        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-[11px] text-[#D8C7B5] mt-0.5", children: "$29.50 \u2022 Save 20%" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#5E5244] mb-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { children: "2. Box Contents" }),
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("span", { className: remainingSlots === 0 ? "text-[#388E3C]" : "text-[#8D4B26]", children: [
                    currentCount,
                    " / ",
                    boxSize,
                    " filled"
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: `grid gap-2 ${boxSize === 4 ? "grid-cols-2" : "grid-cols-3"}`, children: Array.from({ length: boxSize }).map((_, slotIdx) => {
                  const flattened = [];
                  selectedItems.forEach((si) => {
                    for (let k = 0; k < si.quantity; k++) {
                      flattened.push(si.item);
                    }
                  });
                  const itemInSlot = flattened[slotIdx];
                  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                    "div",
                    {
                      className: `h-24 rounded-2xl border-2 transition-all flex flex-col items-center justify-center p-2 text-center relative overflow-hidden ${itemInSlot ? "bg-white border-[#C9B8A4] shadow-sm" : "border-dashed border-[#D6C5B3] bg-[#FAF7F2]/60"}`,
                      children: itemInSlot ? /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
                        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                          "img",
                          {
                            src: itemInSlot.imageUrl,
                            alt: itemInSlot.name,
                            className: "absolute inset-0 w-full h-full object-cover opacity-20"
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "font-serif text-xs font-bold text-[#341C02] line-clamp-2 relative z-10", children: itemInSlot.name }),
                        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                          "button",
                          {
                            onClick: () => handleRemoveItem(itemInSlot.id),
                            className: "absolute top-1 right-1 p-1 bg-[#341C02]/80 hover:bg-[#8D4B26] text-white rounded-full transition-colors z-20",
                            title: "Remove",
                            children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react12.X, { className: "w-3 h-3" })
                          }
                        )
                      ] }) : /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("span", { className: "text-[11px] text-[#9E9080] font-medium", children: [
                        "Slot ",
                        slotIdx + 1
                      ] })
                    },
                    slotIdx
                  );
                }) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "space-y-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("label", { className: "text-xs font-bold uppercase tracking-wider text-[#5E5244] block", children: "3. Presentation Style" }),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "space-y-1.5 text-xs", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("label", { className: "flex items-center justify-between p-2.5 rounded-xl border border-[#E2D7CA] bg-white cursor-pointer hover:bg-[#FAF6F0]", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                        "input",
                        {
                          type: "radio",
                          name: "packaging",
                          checked: packagingType === "Artisan Eco-Kraft",
                          onChange: () => setPackagingType("Artisan Eco-Kraft"),
                          className: "text-[#341C02] focus:ring-[#8D4B26]"
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-[#4A3C2F] font-semibold", children: "Artisan Eco-Kraft Box" })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-[#786C5E]", children: "Included" })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("label", { className: "flex items-center justify-between p-2.5 rounded-xl border border-[#E2D7CA] bg-white cursor-pointer hover:bg-[#FAF6F0]", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                        "input",
                        {
                          type: "radio",
                          name: "packaging",
                          checked: packagingType === "Heritage Ribbon Gift Box",
                          onChange: () => setPackagingType("Heritage Ribbon Gift Box"),
                          className: "text-[#341C02] focus:ring-[#8D4B26]"
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("span", { className: "text-[#4A3C2F] font-semibold flex items-center gap-1.5", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react12.Gift, { className: "w-3.5 h-3.5 text-[#8D4B26]" }),
                        "Heritage Linen Ribbon & Wax Seal"
                      ] })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-[#8D4B26] font-semibold", children: "+$3.50" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("label", { className: "text-xs font-bold uppercase tracking-wider text-[#5E5244] block", children: "Gift Card Message (Optional)" }),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                  "input",
                  {
                    type: "text",
                    placeholder: "e.g., Happy Birthday Chloe! Enjoy morning pastries.",
                    value: giftMessage,
                    onChange: (e) => setGiftMessage(e.target.value),
                    maxLength: 100,
                    className: "w-full text-xs p-2.5 rounded-xl border border-[#D9CEBF] bg-white focus:outline-none focus:ring-1 focus:ring-[#341C02] text-[#341C02]"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "pt-4 border-t border-[#DFD3C3]", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              "button",
              {
                id: "add-custom-box-btn",
                onClick: handleAddBox,
                disabled: currentCount !== boxSize || added,
                className: `w-full py-3.5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-md ${currentCount === boxSize ? "bg-[#341C02] hover:bg-[#43362A] text-[#FAF7F2] active:scale-95" : "bg-[#D9CEBF] text-[#786C5E] cursor-not-allowed"}`,
                children: added ? /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react12.Check, { className: "w-4 h-4 text-[#A8D5BA]" }),
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { children: "Pastry Box Added to Basket!" })
                ] }) : currentCount === boxSize ? /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { children: "Add Box to Cart" }),
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("span", { className: "text-[#E8C5A0] font-serif", children: [
                    "\u2022 $",
                    totalPrice.toFixed(2)
                  ] })
                ] }) : /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("span", { children: [
                  "Select ",
                  remainingSlots,
                  " more ",
                  remainingSlots === 1 ? "pastry" : "pastries"
                ] })
              }
            ) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h3", { className: "font-serif text-xl font-bold text-[#341C02]", children: "Select Handcrafted Pastries" }),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-xs text-[#786C5E]", children: "Tap plus on any pastry to add to your box slots" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("span", { className: "text-xs bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#E5DACD] text-[#5E5244] font-semibold", children: [
                eligiblePastries.length,
                " Fresh Varieties"
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto pr-1", children: eligiblePastries.map((pastry) => {
              const countInBox = selectedItems.find((i) => i.item.id === pastry.id)?.quantity || 0;
              const isFull = currentCount >= boxSize;
              return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
                "div",
                {
                  className: "p-3 rounded-2xl border border-[#E5DACD] bg-white hover:border-[#CDBDA9] transition-all flex items-center justify-between gap-3 shadow-sm",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex items-center gap-3 min-w-0", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                        "img",
                        {
                          src: pastry.imageUrl,
                          alt: pastry.name,
                          className: "w-14 h-14 rounded-xl object-cover shrink-0"
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "min-w-0", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h4", { className: "font-serif text-sm font-bold text-[#341C02] truncate", children: pastry.name }),
                        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-[11px] text-[#786C5E] truncate", children: pastry.frenchName }),
                        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("span", { className: "text-xs font-semibold text-[#8D4B26]", children: [
                          "$",
                          pastry.price.toFixed(2),
                          " single"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex items-center gap-1 shrink-0", children: [
                      countInBox > 0 && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
                        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                          "button",
                          {
                            type: "button",
                            onClick: () => handleRemoveItem(pastry.id),
                            className: "p-1 rounded-lg bg-[#F4EDE2] hover:bg-[#EAE0D3] text-[#5E5244] transition-colors",
                            children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react12.Minus, { className: "w-3.5 h-3.5" })
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "font-serif font-bold text-xs px-1 text-[#341C02]", children: countInBox })
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                        "button",
                        {
                          type: "button",
                          onClick: () => handleAddItem(pastry),
                          disabled: isFull,
                          className: `p-1.5 rounded-xl transition-all ${isFull ? "bg-[#F2ECE1] text-[#A89C8E] cursor-not-allowed" : "bg-[#341C02] hover:bg-[#45372B] text-[#FAF7F2] active:scale-95"}`,
                          title: "Add to Box",
                          children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react12.Plus, { className: "w-3.5 h-3.5" })
                        }
                      )
                    ] })
                  ]
                },
                pastry.id
              );
            }) }),
            selectedItems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "pt-2 flex items-center justify-between text-xs text-[#786C5E]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("span", { children: [
                "Curated: ",
                selectedItems.map((s) => `${s.quantity}x ${s.item.name}`).join(", ")
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
                "button",
                {
                  onClick: () => setSelectedItems([]),
                  className: "text-[#8D4B26] hover:underline flex items-center gap-1",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react12.Trash2, { className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { children: "Reset" })
                  ]
                }
              )
            ] })
          ] })
        ] })
      ]
    }
  ) });
};

// src/components/BakeScheduleModal.tsx
var import_lucide_react13 = require("lucide-react");
var import_jsx_runtime14 = require("react/jsx-runtime");
var BakeScheduleModal = ({
  isOpen,
  onClose,
  onSelectCategory
}) => {
  if (!isOpen) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/40 backdrop-blur-md animate-fade-in", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    "div",
    {
      id: "bake-schedule-modal",
      className: "relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#E5DACD] overflow-hidden",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "p-6 sm:p-8 bg-[#341C02] text-[#FAF7F2] relative overflow-hidden", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "absolute inset-0 opacity-20 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("img", { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/USS_John_C._Stennis_baker.jpg/1280px-USS_John_C._Stennis_baker.jpg", alt: "Oven", className: "w-full h-full object-cover" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            "button",
            {
              id: "close-schedule-modal",
              onClick: onClose,
              className: "absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] transition-colors",
              children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react13.X, { className: "w-5 h-5" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex items-center gap-2.5 text-[#E8C5A0] text-xs uppercase font-bold tracking-widest mb-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react13.Flame, { className: "w-4 h-4 text-[#E27D60]" }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children: "Deck Oven & Hearth Timetable" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "text-2xl sm:text-3xl font-serif font-bold text-white", children: "Today's Fresh Bake Batches" }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-sm text-[#D8C7B5] mt-1.5 max-w-md", children: "Our stone deck ovens run throughout the morning. Loaves are placed on oak cooling racks for 45 minutes to settle their crumb before slicing." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "p-6 sm:p-8 space-y-4 max-h-[60vh] overflow-y-auto", children: BAKE_SCHEDULE.map((batch) => {
          const isBaking = batch.status === "baking_now";
          const isCooling = batch.status === "cooling";
          const isReady = batch.status === "ready";
          return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
            "div",
            {
              className: `p-4 sm:p-5 rounded-2xl border transition-all ${isBaking ? "bg-[#FFF9F3] border-[#E27D60] shadow-md ring-1 ring-[#E27D60]/20" : isCooling ? "bg-[#F7F3EB] border-[#D6C4B0]" : isReady ? "bg-white border-[#E5DACD]" : "bg-[#FBF9F5] border-[#EFE8DD] opacity-85"}`,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", { className: "text-xs font-bold text-[#8D4B26] uppercase tracking-wider", children: [
                        "Batch ",
                        batch.batchNumber
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "text-xs text-[#9E9080]", children: "\u2022" }),
                      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "text-xs font-semibold text-[#5E5244]", children: batch.category })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h3", { className: "font-serif text-lg font-bold text-[#341C02]", children: batch.name }),
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-xs italic text-[#786C5E] font-serif", children: batch.frenchName })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex sm:flex-col items-end justify-between sm:justify-center gap-2 shrink-0", children: [
                    isBaking && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E27D60]/15 text-[#B84E32] text-xs font-bold animate-pulse", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react13.Flame, { className: "w-3.5 h-3.5" }),
                      "In Oven Deck Now"
                    ] }),
                    isCooling && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E89E3A]/15 text-[#9C6017] text-xs font-bold", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react13.Clock, { className: "w-3.5 h-3.5" }),
                      "Cooling on Racks"
                    ] }),
                    isReady && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#388E3C]/15 text-[#2E7D32] text-xs font-bold", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react13.CheckCircle2, { className: "w-3.5 h-3.5" }),
                      "Fresh on Shelf"
                    ] }),
                    !isBaking && !isCooling && !isReady && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE8DD] text-[#786C5E] text-xs font-semibold", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react13.AlertCircle, { className: "w-3.5 h-3.5" }),
                      "Scheduled"
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "text-[11px] text-[#786C5E] flex items-center gap-1", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react13.Thermometer, { className: "w-3 h-3 text-[#A8794E]" }),
                      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children: batch.temperature })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "mt-3 pt-3 border-t border-[#EAE0D3] flex items-center justify-between text-xs", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", { className: "text-[#5E5244] font-medium flex items-center gap-1.5", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react13.Clock, { className: "w-3.5 h-3.5 text-[#C17D44]" }),
                    batch.timeLabel
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
                    "button",
                    {
                      onClick: () => {
                        onSelectCategory(batch.category.toLowerCase());
                        onClose();
                      },
                      className: "text-[#8D4B26] hover:text-[#341C02] font-semibold flex items-center gap-1 transition-colors",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", { children: [
                          "Browse ",
                          batch.category
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react13.ArrowRight, { className: "w-3.5 h-3.5" })
                      ]
                    }
                  )
                ] })
              ]
            },
            batch.id
          );
        }) }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "p-4 sm:p-6 bg-[#F3ECE1] border-t border-[#E5DACD] text-xs text-[#786C5E] flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { children: "Loaves stay warm for ~3 hours after stone-deck discharge." }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            "button",
            {
              onClick: onClose,
              className: "px-4 py-2 bg-[#341C02] text-[#FAF7F2] rounded-xl font-semibold hover:bg-[#43362A] transition-colors",
              children: "Close Schedule"
            }
          )
        ] })
      ]
    }
  ) });
};

// src/components/CartDrawer.tsx
var import_react22 = require("react");
var import_lucide_react14 = require("lucide-react");
var import_jsx_runtime15 = require("react/jsx-runtime");
var CartDrawer = ({
  isOpen,
  onClose,
  cartItems,
  customBoxes,
  onUpdateQuantity,
  onRemoveItem,
  onRemoveBox,
  onProceedToCheckout,
  fulfillmentType,
  onFulfillmentTypeChange,
  discountCode,
  onApplyDiscountCode,
  discountAmount
}) => {
  const [promoInput, setPromoInput] = (0, import_react22.useState)("");
  const [promoError, setPromoError] = (0, import_react22.useState)("");
  const [promoSuccess, setPromoSuccess] = (0, import_react22.useState)(false);
  if (!isOpen) return null;
  const itemsSubtotal = cartItems.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0
  );
  const boxesSubtotal = customBoxes.reduce((acc, box) => acc + box.price, 0);
  const subtotal = itemsSubtotal + boxesSubtotal;
  const deliveryFee = fulfillmentType === "delivery" ? 4.5 : 0;
  const taxableAmount = Math.max(0, subtotal - discountAmount);
  const tax = taxableAmount * 0.0825;
  const total = taxableAmount + tax + deliveryFee;
  const isEmpty = cartItems.length === 0 && customBoxes.length === 0;
  const handleApplyPromo = (e) => {
    e.preventDefault();
    setPromoError("");
    if (!promoInput.trim()) return;
    const applied = onApplyDiscountCode(promoInput.trim().toUpperCase());
    if (applied) {
      setPromoSuccess(true);
      setPromoError("");
    } else {
      setPromoError('Invalid coupon. Try "BONJOUR10" for 10% off.');
      setPromoSuccess(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-sm animate-fade-in", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "absolute inset-y-0 right-0 max-w-full flex pl-10", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
    "div",
    {
      id: "cart-drawer-panel",
      className: "w-screen max-w-md bg-[#FAF7F2] shadow-2xl border-l border-[#E5DACD] flex flex-col justify-between",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "p-5 sm:p-6 bg-[#341C02] text-[#FAF7F2] flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react14.ShoppingBag, { className: "w-5 h-5 text-[#E8C5A0]" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "font-serif text-xl font-bold text-white", children: "Your Bakery Basket" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("p", { className: "text-[11px] text-[#D8C7B5]", children: [
                cartItems.length + customBoxes.length,
                " unique selections"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            "button",
            {
              id: "close-cart-drawer",
              onClick: onClose,
              className: "p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] transition-colors",
              children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react14.X, { className: "w-5 h-5" })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "flex-1 overflow-y-auto p-5 sm:p-6 space-y-6", children: isEmpty ? /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "py-16 text-center space-y-5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl relative", children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("img", { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Pain_au_chocolat_Luc_Viatour.jpg/1280px-Pain_au_chocolat_Luc_Viatour.jpg", alt: "Empty Basket", className: "w-full h-full object-cover" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "absolute inset-0 bg-black/10" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h3", { className: "font-serif text-lg font-bold text-[#341C02]", children: "Your basket is currently empty" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-xs text-[#786C5E] max-w-xs mx-auto font-medium", children: "Explore our daily sourdough loaves, freshly laminated croissants, or build a custom pastry box." }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            "button",
            {
              onClick: onClose,
              className: "px-6 py-3 bg-[#341C02] text-[#FAF7F2] rounded-xl text-xs font-semibold hover:bg-[#45372B] transition-all shadow-md active:scale-95 mt-2",
              children: "Browse Artisanal Menu"
            }
          )
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "p-1 rounded-xl bg-[#EFE8DC] flex gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
              "button",
              {
                type: "button",
                onClick: () => onFulfillmentTypeChange("pickup"),
                className: `flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${fulfillmentType === "pickup" ? "bg-white text-[#341C02] shadow-sm" : "text-[#6B5E4F] hover:text-[#341C02]"}`,
                children: "Bakery Pickup (Free)"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
              "button",
              {
                type: "button",
                onClick: () => onFulfillmentTypeChange("delivery"),
                className: `flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${fulfillmentType === "delivery" ? "bg-white text-[#341C02] shadow-sm" : "text-[#6B5E4F] hover:text-[#341C02]"}`,
                children: "Courier Delivery ($4.50)"
              }
            )
          ] }),
          customBoxes.map((box) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
            "div",
            {
              className: "p-4 rounded-2xl bg-white border border-[#E5DACD] shadow-sm space-y-2.5 relative",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex items-start justify-between gap-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "space-y-0.5", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#8D4B26]", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react14.Sparkles, { className: "w-3 h-3" }),
                      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: "Curated Box" })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h4", { className: "font-serif text-base font-bold text-[#341C02]", children: box.name }),
                    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-xs text-[#786C5E]", children: box.packagingType })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "text-right", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("span", { className: "font-serif font-bold text-base text-[#341C02]", children: [
                      "$",
                      box.price.toFixed(2)
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                      "button",
                      {
                        onClick: () => onRemoveBox(box.boxId),
                        className: "block text-xs text-[#8D4B26] hover:underline mt-1 ml-auto",
                        children: "Remove"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "p-2.5 rounded-xl bg-[#FAF7F2] text-xs text-[#5E5244] space-y-1", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "font-semibold text-[11px] text-[#786C5E]", children: "Included Pastries:" }),
                  /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("ul", { className: "list-disc list-inside space-y-0.5 text-[11px]", children: box.items.map((i, idx) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("li", { children: [
                    i.quantity,
                    "x ",
                    i.item.name
                  ] }, idx)) }),
                  box.giftMessage && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("p", { className: "text-[11px] italic text-[#8D4B26] pt-1 border-t border-[#EAE0D3]", children: [
                    'Note: "',
                    box.giftMessage,
                    '"'
                  ] })
                ] })
              ]
            },
            box.boxId
          )),
          cartItems.map((cartItem) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
            "div",
            {
              className: "p-3.5 rounded-2xl bg-white border border-[#E5DACD] shadow-sm flex items-start gap-3",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                  "img",
                  {
                    src: cartItem.item.imageUrl,
                    alt: cartItem.item.name,
                    className: "w-16 h-16 rounded-xl object-cover shrink-0"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex-1 min-w-0 space-y-1", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex items-start justify-between gap-1", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h4", { className: "font-serif text-sm font-bold text-[#341C02] truncate", children: cartItem.item.name }),
                    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("span", { className: "font-serif font-bold text-sm text-[#341C02] shrink-0", children: [
                      "$",
                      (cartItem.unitPrice * cartItem.quantity).toFixed(2)
                    ] })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "text-[11px] text-[#786C5E] space-y-0.5", children: [
                    cartItem.selectedSlicing && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("p", { children: [
                      "Slice: ",
                      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "font-medium text-[#4A3C2F]", children: cartItem.selectedSlicing })
                    ] }),
                    cartItem.warmed && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-[#96381C] font-semibold", children: "Oven-Warmed for Pickup" }),
                    cartItem.giftBox && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-[#8D4B26]", children: "Linen Gift Box (+$2.50)" })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex items-center justify-between pt-1", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex items-center bg-[#FAF7F2] border border-[#D9CEBF] rounded-lg p-0.5", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                        "button",
                        {
                          type: "button",
                          onClick: () => onUpdateQuantity(cartItem.id, cartItem.quantity - 1),
                          className: "p-1 hover:bg-[#EFE8DC] rounded text-[#5E5244] transition-colors",
                          children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react14.Minus, { className: "w-3 h-3" })
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "px-2 font-serif font-bold text-xs text-[#341C02]", children: cartItem.quantity }),
                      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                        "button",
                        {
                          type: "button",
                          onClick: () => onUpdateQuantity(cartItem.id, cartItem.quantity + 1),
                          className: "p-1 hover:bg-[#EFE8DC] rounded text-[#5E5244] transition-colors",
                          children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react14.Plus, { className: "w-3 h-3" })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                      "button",
                      {
                        onClick: () => onRemoveItem(cartItem.id),
                        className: "text-[#8D4B26] hover:text-[#341C02] p-1 transition-colors",
                        title: "Remove Item",
                        children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react14.Trash2, { className: "w-3.5 h-3.5" })
                      }
                    )
                  ] })
                ] })
              ]
            },
            cartItem.id
          )),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("form", { onSubmit: handleApplyPromo, className: "pt-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "relative flex-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react14.Tag, { className: "w-3.5 h-3.5 text-[#786C5E] absolute left-3 top-3" }),
                /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                  "input",
                  {
                    type: "text",
                    placeholder: "Promo code (BONJOUR10)",
                    value: promoInput,
                    onChange: (e) => setPromoInput(e.target.value),
                    className: "w-full text-xs pl-8 pr-3 py-2 rounded-xl border border-[#D9CEBF] bg-white text-[#341C02] focus:outline-none focus:ring-1 focus:ring-[#341C02] uppercase"
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                "button",
                {
                  type: "submit",
                  className: "px-3.5 py-2 bg-[#FAF7F2] border border-[#D9CEBF] hover:bg-[#EFE8DC] rounded-xl text-xs font-semibold text-[#341C02] transition-colors",
                  children: "Apply"
                }
              )
            ] }),
            promoError && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-[11px] text-[#C15C3D] mt-1 pl-1", children: promoError }),
            discountAmount > 0 && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("p", { className: "text-[11px] text-[#388E3C] mt-1 pl-1 font-semibold flex items-center gap-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react14.Check, { className: "w-3 h-3" }),
              " Promo applied: -$",
              discountAmount.toFixed(2)
            ] })
          ] })
        ] }) }),
        !isEmpty && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "p-5 sm:p-6 bg-white border-t border-[#E5DACD] space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "space-y-1.5 text-xs text-[#5E5244]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: "Subtotal" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("span", { className: "font-semibold text-[#341C02]", children: [
                "$",
                subtotal.toFixed(2)
              ] })
            ] }),
            discountAmount > 0 && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex justify-between text-[#388E3C]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("span", { children: [
                "Discount (",
                discountCode,
                ")"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("span", { children: [
                "-$",
                discountAmount.toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: fulfillmentType === "delivery" ? "Courier Delivery" : "Bakery Pickup" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: deliveryFee === 0 ? "Free" : `$${deliveryFee.toFixed(2)}` })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: "Estimated Tax (8.25%)" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("span", { children: [
                "$",
                tax.toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex justify-between text-base font-bold text-[#341C02] pt-2 border-t border-[#EFE8DC]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "font-serif", children: "Total" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("span", { className: "font-serif text-lg", children: [
                "$",
                total.toFixed(2)
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
            "button",
            {
              id: "cart-checkout-btn",
              onClick: onProceedToCheckout,
              className: "w-full bg-[#341C02] hover:bg-[#45372B] text-[#FAF7F2] py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 active:scale-95",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: "Proceed to Checkout" }),
                /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react14.ArrowRight, { className: "w-4 h-4" })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("p", { className: "text-[11px] text-center text-[#786C5E] flex items-center justify-center gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react14.Clock, { className: "w-3 h-3 text-[#A8794E]" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: "Ready for pickup within 25\u201340 minutes" })
          ] })
        ] })
      ]
    }
  ) }) });
};

// src/components/CheckoutModal.tsx
var import_react23 = require("react");
var import_lucide_react15 = require("lucide-react");
var import_jsx_runtime16 = require("react/jsx-runtime");
var CheckoutModal = ({
  isOpen,
  onClose,
  cartItems,
  customBoxes,
  fulfillmentType,
  discountAmount,
  onCompleteOrder
}) => {
  if (!isOpen) return null;
  const [customerName, setCustomerName] = (0, import_react23.useState)("Elena Rostova");
  const [email, setEmail] = (0, import_react23.useState)("elena.rostova@example.com");
  const [phone, setPhone] = (0, import_react23.useState)("+1 (555) 382-9104");
  const [scheduledTime, setScheduledTime] = (0, import_react23.useState)("Today \u2022 11:30 AM (Oven Batch #03)");
  const [deliveryAddress, setDeliveryAddress] = (0, import_react23.useState)("742 Evergreen Terrace, Historic District");
  const [orderNotes, setOrderNotes] = (0, import_react23.useState)("Please pack sourdough in paper bread bags if possible.");
  const [paymentMethod, setPaymentMethod] = (0, import_react23.useState)("card");
  const [isProcessing, setIsProcessing] = (0, import_react23.useState)(false);
  const itemsSubtotal = cartItems.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0
  );
  const boxesSubtotal = customBoxes.reduce((acc, box) => acc + box.price, 0);
  const subtotal = itemsSubtotal + boxesSubtotal;
  const deliveryFee = fulfillmentType === "delivery" ? 4.5 : 0;
  const taxableAmount = Math.max(0, subtotal - discountAmount);
  const tax = taxableAmount * 0.0825;
  const total = taxableAmount + tax + deliveryFee;
  const timeSlots = [
    "Today \u2022 10:45 AM (Cooling Batard Batch)",
    "Today \u2022 11:30 AM (Oven Batch #03)",
    "Today \u2022 1:00 PM (Afternoon Hearth)",
    "Tomorrow \u2022 8:00 AM (Warm Morning Viennoiserie)",
    "Tomorrow \u2022 10:15 AM (Morning Sourdough)"
  ];
  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (!customerName || !email || !phone) return;
    setIsProcessing(true);
    const newOrder = {
      id: `ML-${Math.floor(1e5 + Math.random() * 9e5)}`,
      createdAt: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      items: [...cartItems],
      customBoxes: [...customBoxes],
      customerName,
      email,
      phone,
      fulfillmentType,
      scheduledTime,
      deliveryAddress: fulfillmentType === "delivery" ? deliveryAddress : void 0,
      orderNotes: orderNotes.trim() || void 0,
      subtotal,
      tax,
      deliveryFee,
      total,
      paymentMethod,
      status: "confirmed"
    };
    setTimeout(() => {
      setIsProcessing(false);
      onCompleteOrder(newOrder);
    }, 800);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/50 backdrop-blur-md animate-fade-in", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
    "div",
    {
      id: "checkout-modal",
      className: "relative w-full max-w-3xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#E5DACD] overflow-hidden my-auto",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "p-6 sm:p-7 bg-[#341C02] text-[#FAF7F2] relative flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#E8C5A0] mb-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react15.ShieldCheck, { className: "w-4 h-4 text-[#E27D60]" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { children: "Artisanal Bakery Order" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h2", { className: "text-2xl font-serif font-bold text-white", children: "Complete Your Bakery Order" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            "button",
            {
              id: "close-checkout-modal",
              onClick: onClose,
              className: "p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] transition-colors",
              children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react15.X, { className: "w-5 h-5" })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("form", { onSubmit: handleSubmitOrder, className: "p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("h3", { className: "text-xs font-bold uppercase tracking-wider text-[#5E5244] flex items-center gap-1.5", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react15.User, { className: "w-4 h-4 text-[#8D4B26]" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { children: "1. Guest Contact Details" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("label", { className: "text-xs text-[#6B5E4F] block mb-1", children: "Full Name" }),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  "input",
                  {
                    type: "text",
                    required: true,
                    value: customerName,
                    onChange: (e) => setCustomerName(e.target.value),
                    className: "w-full text-xs p-2.5 rounded-xl border border-[#D9CEBF] bg-white text-[#341C02] focus:outline-none focus:ring-1 focus:ring-[#341C02]"
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("label", { className: "text-xs text-[#6B5E4F] block mb-1", children: "Email Address" }),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  "input",
                  {
                    type: "email",
                    required: true,
                    value: email,
                    onChange: (e) => setEmail(e.target.value),
                    className: "w-full text-xs p-2.5 rounded-xl border border-[#D9CEBF] bg-white text-[#341C02] focus:outline-none focus:ring-1 focus:ring-[#341C02]"
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("label", { className: "text-xs text-[#6B5E4F] block mb-1", children: "Phone Number" }),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  "input",
                  {
                    type: "tel",
                    required: true,
                    value: phone,
                    onChange: (e) => setPhone(e.target.value),
                    className: "w-full text-xs p-2.5 rounded-xl border border-[#D9CEBF] bg-white text-[#341C02] focus:outline-none focus:ring-1 focus:ring-[#341C02]"
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "space-y-3 pt-2 border-t border-[#EAE0D3]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("h3", { className: "text-xs font-bold uppercase tracking-wider text-[#5E5244] flex items-center gap-1.5", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react15.Clock, { className: "w-4 h-4 text-[#8D4B26]" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("span", { children: [
                "2. ",
                fulfillmentType === "delivery" ? "Courier Delivery Schedule" : "Bakery Pickup Window"
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("label", { className: "text-xs text-[#6B5E4F] block mb-1", children: "Select Batch / Pickup Time" }),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  "select",
                  {
                    value: scheduledTime,
                    onChange: (e) => setScheduledTime(e.target.value),
                    className: "w-full text-xs p-2.5 rounded-xl border border-[#D9CEBF] bg-white text-[#341C02] focus:outline-none focus:ring-1 focus:ring-[#341C02]",
                    children: timeSlots.map((ts) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("option", { value: ts, children: ts }, ts))
                  }
                )
              ] }),
              fulfillmentType === "delivery" ? /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("label", { className: "text-xs text-[#6B5E4F] block mb-1", children: "Local Delivery Address" }),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  "input",
                  {
                    type: "text",
                    required: true,
                    value: deliveryAddress,
                    onChange: (e) => setDeliveryAddress(e.target.value),
                    className: "w-full text-xs p-2.5 rounded-xl border border-[#D9CEBF] bg-white text-[#341C02] focus:outline-none focus:ring-1 focus:ring-[#341C02]"
                  }
                )
              ] }) : /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "p-2.5 rounded-xl bg-[#F4EDE2] border border-[#E5DACD] text-xs text-[#5E5244] flex items-center gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react15.MapPin, { className: "w-4 h-4 text-[#8D4B26] shrink-0" }),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("span", { children: [
                  "Pick up at: ",
                  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("strong", { children: "Maison Levain, 42 Boulevard Saint-Honor\xE9" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "space-y-3 pt-2 border-t border-[#EAE0D3]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("h3", { className: "text-xs font-bold uppercase tracking-wider text-[#5E5244] flex items-center gap-1.5", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react15.CreditCard, { className: "w-4 h-4 text-[#8D4B26]" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { children: "3. Payment Selection" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("label", { className: `p-3 rounded-xl border flex items-center gap-2.5 cursor-pointer transition-all ${paymentMethod === "card" ? "bg-white border-[#341C02] shadow-sm font-semibold text-[#341C02]" : "bg-white/60 border-[#D9CEBF] text-[#5E5244]"}`, children: [
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  "input",
                  {
                    type: "radio",
                    name: "payment",
                    checked: paymentMethod === "card",
                    onChange: () => setPaymentMethod("card"),
                    className: "text-[#341C02]"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { children: "Credit / Debit Card" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("label", { className: `p-3 rounded-xl border flex items-center gap-2.5 cursor-pointer transition-all ${paymentMethod === "apple_pay" ? "bg-white border-[#341C02] shadow-sm font-semibold text-[#341C02]" : "bg-white/60 border-[#D9CEBF] text-[#5E5244]"}`, children: [
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  "input",
                  {
                    type: "radio",
                    name: "payment",
                    checked: paymentMethod === "apple_pay",
                    onChange: () => setPaymentMethod("apple_pay"),
                    className: "text-[#341C02]"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { children: "Apple Pay / GPay" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("label", { className: `p-3 rounded-xl border flex items-center gap-2.5 cursor-pointer transition-all ${paymentMethod === "pickup_counter" ? "bg-white border-[#341C02] shadow-sm font-semibold text-[#341C02]" : "bg-white/60 border-[#D9CEBF] text-[#5E5244]"}`, children: [
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  "input",
                  {
                    type: "radio",
                    name: "payment",
                    checked: paymentMethod === "pickup_counter",
                    onChange: () => setPaymentMethod("pickup_counter"),
                    className: "text-[#341C02]"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { children: "Pay at Counter" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "space-y-1.5 pt-2 border-t border-[#EAE0D3]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("label", { className: "text-xs font-bold uppercase tracking-wider text-[#5E5244] block", children: "Order Notes / Allergies / Packaging Notes" }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
              "input",
              {
                type: "text",
                value: orderNotes,
                onChange: (e) => setOrderNotes(e.target.value),
                placeholder: "e.g. Leave on porch, keep croissant extra warm, etc.",
                className: "w-full text-xs p-2.5 rounded-xl border border-[#D9CEBF] bg-white text-[#341C02] focus:outline-none focus:ring-1 focus:ring-[#341C02]"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "p-4 rounded-2xl bg-[#F4EDE2] border border-[#E2D7CA] flex flex-col sm:flex-row items-center justify-between gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "text-xs text-[#5E5244]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("p", { children: [
                "Total to Pay: ",
                /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("strong", { className: "font-serif text-lg text-[#341C02] ml-1", children: [
                  "$",
                  total.toFixed(2)
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-[11px] text-[#786C5E]", children: "Includes taxes & packaging" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
              "button",
              {
                id: "confirm-place-order-btn",
                type: "submit",
                disabled: isProcessing,
                className: "w-full sm:w-auto px-8 py-3.5 bg-[#341C02] hover:bg-[#45372B] text-[#FAF7F2] rounded-xl font-semibold text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2",
                children: isProcessing ? /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" }),
                  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { children: "Preparing Order..." })
                ] }) : /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react15.CheckCircle2, { className: "w-4 h-4 text-[#A8D5BA]" }),
                  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { children: "Confirm Bakery Order" })
                ] })
              }
            )
          ] })
        ] })
      ]
    }
  ) });
};

// src/components/OrderConfirmationModal.tsx
var import_lucide_react16 = require("lucide-react");
var import_jsx_runtime17 = require("react/jsx-runtime");
var OrderConfirmationModal = ({
  order,
  isOpen,
  onClose
}) => {
  if (!isOpen || !order) return null;
  const handlePrint = () => {
    window.print();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-md animate-fade-in", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
    "div",
    {
      id: "order-confirmation-modal",
      className: "relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#E5DACD] overflow-hidden my-auto",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "p-6 sm:p-8 bg-[#341C02] text-[#FAF7F2] text-center relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
            "button",
            {
              id: "close-confirmation-modal",
              onClick: onClose,
              className: "absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] transition-colors",
              children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react16.X, { className: "w-5 h-5" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "flex justify-center mb-2", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(BakeryLogo, { size: "md" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "text-xs uppercase tracking-[0.25em] text-[#E8C5A0] font-bold", children: "Order Confirmed & Sent to Bakery" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("h2", { className: "text-2xl sm:text-3xl font-serif font-bold text-white mt-1", children: [
            "Merci, ",
            order.customerName,
            "!"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("p", { className: "text-xs sm:text-sm text-[#D8C7B5] mt-1", children: [
            "Order Reference: ",
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("strong", { className: "text-white font-mono", children: order.id })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "p-4 rounded-2xl bg-[#F4EDE2] border border-[#E2D7CA] space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { className: "font-bold text-[#8D4B26] uppercase tracking-wider flex items-center gap-1.5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react16.ChefHat, { className: "w-4 h-4" }),
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { children: "Live Hearth Status" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "font-semibold text-[#341C02] bg-white px-2.5 py-0.5 rounded-full shadow-xs", children: "In Hearth Preparation" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "grid grid-cols-4 gap-1 text-center text-[10px] sm:text-xs", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "h-1.5 rounded-full bg-[#341C02]" }),
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "font-semibold text-[#341C02]", children: "1. Received" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "h-1.5 rounded-full bg-[#E27D60] animate-pulse" }),
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "font-semibold text-[#8D4B26]", children: "2. Stone Hearth" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "h-1.5 rounded-full bg-[#D9CEBF]" }),
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "text-[#9E9080]", children: "3. Oak Cooling" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "h-1.5 rounded-full bg-[#D9CEBF]" }),
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "text-[#9E9080]", children: "4. Ready" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "p-4 rounded-2xl bg-white border border-[#E5DACD] space-y-1.5", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "flex items-center gap-1.5 text-[#8D4B26] font-bold", children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react16.Clock, { className: "w-4 h-4" }),
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { children: "Scheduled Fulfillment Window" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "font-serif font-bold text-sm text-[#341C02]", children: order.scheduledTime }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "text-[11px] text-[#786C5E]", children: order.fulfillmentType === "pickup" ? "Counter Pickup" : "Courier Delivery" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "p-4 rounded-2xl bg-white border border-[#E5DACD] space-y-1.5", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "flex items-center gap-1.5 text-[#8D4B26] font-bold", children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react16.MapPin, { className: "w-4 h-4" }),
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { children: order.fulfillmentType === "pickup" ? "Bakery Address" : "Delivery Address" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "font-serif font-bold text-sm text-[#341C02]", children: order.fulfillmentType === "pickup" ? "Maison Levain, 42 Blvd Saint-Honor\xE9" : order.deliveryAddress }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("p", { className: "text-[11px] text-[#786C5E]", children: [
                "Contact: ",
                order.phone
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "space-y-3 bg-white p-5 rounded-2xl border border-[#E5DACD]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h3", { className: "text-xs font-bold uppercase tracking-wider text-[#5E5244] border-b border-[#EFE8DC] pb-2", children: "Itemized Bakery Receipt" }),
            order.customBoxes.map((box) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "text-xs flex justify-between py-1 border-b border-[#FAF7F2]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "font-semibold text-[#341C02]", children: box.name }),
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "text-[11px] text-[#786C5E]", children: box.packagingType }),
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "text-[10px] text-[#9E9080]", children: box.items.map((i) => `${i.quantity}x ${i.item.name}`).join(", ") })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { className: "font-serif font-bold", children: [
                "$",
                box.price.toFixed(2)
              ] })
            ] }, box.boxId)),
            order.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "text-xs flex justify-between py-1 border-b border-[#FAF7F2]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("p", { className: "font-semibold text-[#341C02]", children: [
                  it.quantity,
                  "x ",
                  it.item.name
                ] }),
                it.selectedSlicing && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("p", { className: "text-[11px] text-[#786C5E]", children: [
                  "Slicing: ",
                  it.selectedSlicing
                ] }),
                it.warmed && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "text-[11px] text-[#C15C3D]", children: "Oven-Warmed" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { className: "font-serif font-bold", children: [
                "$",
                (it.unitPrice * it.quantity).toFixed(2)
              ] })
            ] }, it.id)),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "pt-2 space-y-1 text-xs text-[#6B5E4F]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { children: "Subtotal" }),
                /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { children: [
                  "$",
                  order.subtotal.toFixed(2)
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { children: "Taxes" }),
                /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { children: [
                  "$",
                  order.tax.toFixed(2)
                ] })
              ] }),
              order.deliveryFee > 0 && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { children: "Courier Delivery" }),
                /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { children: [
                  "$",
                  order.deliveryFee.toFixed(2)
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "flex justify-between text-sm font-bold text-[#341C02] pt-2 border-t border-[#EFE8DC]", children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { className: "font-serif", children: [
                  "Total Paid (",
                  order.paymentMethod.replace("_", " "),
                  ")"
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { className: "font-serif text-base", children: [
                  "$",
                  order.total.toFixed(2)
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5DACD] flex items-center justify-between gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "font-serif font-bold text-sm text-[#341C02]", children: "Express Counter Pickup Pass" }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("p", { className: "text-[11px] text-[#786C5E]", children: [
                "Present this digital receipt or mention order #",
                order.id,
                " at the counter."
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "w-16 h-16 bg-white p-2 rounded-xl border border-[#D9CEBF] shadow-xs flex items-center justify-center shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react16.QrCode, { className: "w-12 h-12 text-[#341C02]" }) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "p-4 sm:p-6 bg-[#F3ECE1] border-t border-[#E5DACD] flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
            "button",
            {
              onClick: handlePrint,
              className: "px-4 py-2.5 rounded-xl border border-[#D9CEBF] bg-white text-xs font-semibold text-[#341C02] hover:bg-[#FAF7F2] transition-colors flex items-center gap-1.5",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react16.Printer, { className: "w-4 h-4" }),
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { children: "Print Receipt" })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
            "button",
            {
              onClick: onClose,
              className: "px-6 py-2.5 bg-[#341C02] text-[#FAF7F2] rounded-xl text-xs font-semibold hover:bg-[#43362A] transition-colors shadow-sm",
              children: "Back to Bakery Menu"
            }
          )
        ] })
      ]
    }
  ) });
};

// src/components/OrderLookupModal.tsx
var import_react24 = require("react");
var import_lucide_react17 = require("lucide-react");
var import_jsx_runtime18 = require("react/jsx-runtime");
var OrderLookupModal = ({
  isOpen,
  onClose,
  orders,
  onSelectOrder
}) => {
  const [searchTerm, setSearchTerm] = (0, import_react24.useState)("");
  if (!isOpen) return null;
  const filteredOrders = orders.filter(
    (o) => o.id.toLowerCase().includes(searchTerm.toLowerCase()) || o.email.toLowerCase().includes(searchTerm.toLowerCase()) || o.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/50 backdrop-blur-md animate-fade-in", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
    "div",
    {
      id: "order-lookup-modal",
      className: "relative w-full max-w-xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#341C02] overflow-hidden my-auto",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "p-6 sm:p-7 bg-[#341C02] text-[#FAF7F2] relative flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#E8C5A0] mb-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react17.ReceiptText, { className: "w-4 h-4 text-[#E27D60]" }),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { children: "Track Bakery Order" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h2", { className: "text-2xl font-serif font-bold text-white", children: "Order Lookup & Live Status" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            "button",
            {
              onClick: onClose,
              className: "p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] transition-colors",
              children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react17.X, { className: "w-5 h-5" })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "p-6 sm:p-8 space-y-5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react17.Search, { className: "w-4 h-4 text-[#786C5E] absolute left-3.5 top-3" }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
              "input",
              {
                type: "text",
                placeholder: "Search by Order ID (e.g. ML-123456) or Email...",
                value: searchTerm,
                onChange: (e) => setSearchTerm(e.target.value),
                className: "w-full text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-[#D9CEBF] bg-white text-[#341C02] focus:outline-none focus:ring-1 focus:ring-[#341C02]"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "space-y-3 max-h-[50vh] overflow-y-auto pr-1", children: filteredOrders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "py-12 text-center text-[#786C5E] space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react17.ReceiptText, { className: "w-8 h-8 text-[#A89C8E] mx-auto" }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "text-xs font-semibold", children: "No recent orders found matching search." }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "text-[11px]", children: "Orders placed in this session will appear here." })
          ] }) : filteredOrders.map((ord) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
            "div",
            {
              onClick: () => {
                onSelectOrder(ord);
                onClose();
              },
              className: "p-4 rounded-2xl bg-white border border-[#E5DACD] hover:border-[#341C02] transition-all cursor-pointer shadow-sm hover:shadow-md flex items-center justify-between gap-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "font-mono font-bold text-xs text-[#8D4B26]", children: ord.id }),
                    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-[#EFE8DC] text-[#4A3C2F] font-semibold", children: ord.fulfillmentType === "pickup" ? "Counter Pickup" : "Courier Delivery" })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("p", { className: "font-serif font-bold text-sm text-[#341C02]", children: [
                    ord.customerName,
                    " \u2022 $",
                    ord.total.toFixed(2)
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("p", { className: "text-[11px] text-[#786C5E] flex items-center gap-1", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react17.Clock, { className: "w-3 h-3 text-[#A8794E]" }),
                    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { children: ord.scheduledTime })
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("button", { className: "px-3 py-1.5 rounded-xl bg-[#FAF7F2] text-xs font-semibold text-[#341C02] hover:bg-[#EFE8DC] transition-colors shrink-0", children: "View Receipt" })
              ]
            },
            ord.id
          )) })
        ] })
      ]
    }
  ) });
};

// src/components/BakeryFooter.tsx
var import_react25 = require("react");
var import_lucide_react18 = require("lucide-react");
var import_jsx_runtime19 = require("react/jsx-runtime");
var BakeryFooter = () => {
  const [newsletterEmail, setNewsletterEmail] = (0, import_react25.useState)("");
  const [isSubscribed, setIsSubscribed] = (0, import_react25.useState)(false);
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setIsSubscribed(true);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("footer", { id: "location-section", className: "bg-[#241D17] text-[#FAF7F2] pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-[#3A2F26]", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "max-w-7xl mx-auto space-y-12", children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "p-6 sm:p-8 rounded-3xl bg-[#2E251E] border border-white/10 space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#E8C5A0]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react18.Wheat, { className: "w-4 h-4 text-[#E27D60]" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: "The Master Baker's Sourdough Care Guide" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h3", { className: "font-serif text-2xl font-bold text-white", children: "How to Store & Revive Your Artisanal Loaf" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "text-xs text-[#D8C7B5] bg-white/10 px-3 py-1.5 rounded-full self-start md:self-auto font-medium", children: "Zero Chemical Preservatives" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "p-3.5 rounded-2xl bg-black/20 border border-white/5 space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "font-bold text-[#F4D19B]", children: "1. First 3 Days: Bread Box / Paper" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "text-[#D8C7B5] leading-relaxed", children: "Store cut-side down on a wooden cutting board or in breathable paper. Never store artisanal sourdough in plastic." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "p-3.5 rounded-2xl bg-black/20 border border-white/5 space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "font-bold text-[#F4D19B]", children: "2. Revive in Oven (5 Mins)" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "text-[#D8C7B5] leading-relaxed", children: "Mist the crust lightly with spring water and bake at 180\xB0C (350\xB0F) for 5 minutes. The crust returns to glass-shattering crispness." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "p-3.5 rounded-2xl bg-black/20 border border-white/5 space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "font-bold text-[#F4D19B]", children: "3. Freezing Slices" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "text-[#D8C7B5] leading-relaxed", children: "Slice the entire loaf upon arrival, freeze in an airtight container, and toast slices straight from the freezer for breakfast." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "lg:col-span-4 space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex items-center gap-3.5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(BakeryLogo, { size: "md" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "font-serif font-bold text-2xl tracking-wide text-white block", children: "Maison Levain" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "text-[10px] uppercase font-bold tracking-widest text-[#E8C5A0]", children: "Fournil Artisanal \u2022 Est. 1912" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "text-xs text-[#D8C7B5] leading-relaxed max-w-sm", children: "Handcrafting traditional wild-fermented sourdough, French viennoiserie, and bespoke pastries with heritage flours and unhurried patience." }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex items-center gap-2 text-xs text-[#E8C5A0]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react18.ShieldCheck, { className: "w-4 h-4" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: "Certified Bio-Organic & Traditional French Guild" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "lg:col-span-3 space-y-3 text-xs", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { className: "font-serif font-bold text-base text-white flex items-center gap-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react18.Clock, { className: "w-4 h-4 text-[#E27D60]" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: "Opening Hours & Drops" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("ul", { className: "space-y-1.5 text-[#D8C7B5]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: "Tuesday \u2013 Friday:" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "font-semibold text-white", children: "7:00 AM \u2013 3:30 PM" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: "Saturday \u2013 Sunday:" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "font-semibold text-white", children: "7:30 AM \u2013 4:00 PM" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { className: "flex justify-between text-[#E27D60]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: "Monday:" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: "Fournil Closed (Fermentation Day)" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "text-[11px] text-[#A89C8E] pt-1", children: "*Fresh morning batches arrive at 8:00 AM & 10:15 AM daily." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "lg:col-span-2 space-y-3 text-xs", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { className: "font-serif font-bold text-base text-white flex items-center gap-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react18.MapPin, { className: "w-4 h-4 text-[#E27D60]" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: "The Fournil" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { className: "text-[#D8C7B5] leading-relaxed", children: [
          "42 Boulevard Saint-Honor\xE9",
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("br", {}),
          "Historic Quarter, Suite 104",
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("br", {}),
          "Paris / San Francisco"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "text-[#D8C7B5]", children: "Tel: +1 (555) 382-9104" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "lg:col-span-3 space-y-3 text-xs", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { className: "font-serif font-bold text-base text-white flex items-center gap-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react18.Sparkles, { className: "w-4 h-4 text-[#E27D60]" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: "Weekend Viennoiserie Drops" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "text-[#D8C7B5] leading-relaxed", children: "Get notified of seasonal specials (Pistachio Escargots, Panettone, Fig Tarts) before they sell out." }),
        isSubscribed ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "p-3 rounded-xl bg-white/10 text-xs text-[#A8D5BA] flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react18.Check, { className: "w-4 h-4" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: "Merci! You're on the weekend drop list." })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("form", { onSubmit: handleSubscribe, className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
            "input",
            {
              type: "email",
              required: true,
              placeholder: "Enter your email address",
              value: newsletterEmail,
              onChange: (e) => setNewsletterEmail(e.target.value),
              className: "w-full text-xs p-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-[#9E9080] focus:outline-none focus:ring-1 focus:ring-[#E8C5A0]"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
            "button",
            {
              type: "submit",
              className: "w-full py-2 bg-[#FAF7F2] text-[#341C02] rounded-xl font-semibold hover:bg-white transition-colors",
              children: "Join the Secret Drop List"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E9080]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { children: [
        "\xA9 ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Maison Levain Artisanal Bakery Inc. All rights reserved."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: "Naturally Leavened Since 1912" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: "\u2022" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: "Organic Flours Only" })
      ] })
    ] })
  ] }) });
};

// src/App.tsx
var import_lucide_react19 = require("lucide-react");
var import_jsx_runtime20 = require("react/jsx-runtime");
function App() {
  const [products] = (0, import_react26.useState)(BAKERY_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = (0, import_react26.useState)("all");
  const [searchQuery, setSearchQuery] = (0, import_react26.useState)("");
  const [activeSection, setActiveSection] = (0, import_react26.useState)("catalog");
  const [selectedDetailItem, setSelectedDetailItem] = (0, import_react26.useState)(null);
  const [isBoxBuilderOpen, setIsBoxBuilderOpen] = (0, import_react26.useState)(false);
  const [isScheduleOpen, setIsScheduleOpen] = (0, import_react26.useState)(false);
  const [isCartOpen, setIsCartOpen] = (0, import_react26.useState)(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = (0, import_react26.useState)(false);
  const [isOrderLookupOpen, setIsOrderLookupOpen] = (0, import_react26.useState)(false);
  const [confirmedOrder, setConfirmedOrder] = (0, import_react26.useState)(null);
  const [cartItems, setCartItems] = (0, import_react26.useState)(() => {
    try {
      const saved = localStorage.getItem("maison_levain_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [customBoxes, setCustomBoxes] = (0, import_react26.useState)(() => {
    try {
      const saved = localStorage.getItem("maison_levain_boxes");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [orders, setOrders] = (0, import_react26.useState)(() => {
    try {
      const saved = localStorage.getItem("maison_levain_orders");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [fulfillmentType, setFulfillmentType] = (0, import_react26.useState)("pickup");
  const [discountCode, setDiscountCode] = (0, import_react26.useState)("");
  const [discountAmount, setDiscountAmount] = (0, import_react26.useState)(0);
  const [toastMessage, setToastMessage] = (0, import_react26.useState)(null);
  (0, import_react26.useEffect)(() => {
    localStorage.setItem("maison_levain_cart", JSON.stringify(cartItems));
  }, [cartItems]);
  (0, import_react26.useEffect)(() => {
    localStorage.setItem("maison_levain_boxes", JSON.stringify(customBoxes));
  }, [customBoxes]);
  (0, import_react26.useEffect)(() => {
    localStorage.setItem("maison_levain_orders", JSON.stringify(orders));
  }, [orders]);
  (0, import_react26.useEffect)(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id.replace("-section", "");
            setActiveSection(sectionId);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0
      }
    );
    const sections = [
      "hero",
      "catalog",
      "grains",
      "pairings",
      "craft",
      "workshops",
      "journal",
      "reviews",
      "location"
    ];
    const timeoutId = setTimeout(() => {
      sections.forEach((section) => {
        const element = document.getElementById(`${section}-section`);
        if (element) {
          observer.observe(element);
        }
      });
    }, 100);
    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3e3);
  };
  const handleQuickAdd = (item) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (ci) => ci.itemId === item.id && !ci.selectedSlicing && !ci.warmed && !ci.giftBox && !ci.notes
      );
      if (existing) {
        return prev.map(
          (ci) => ci.id === existing.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [
        ...prev,
        {
          id: `cart-${Date.now()}-${Math.random()}`,
          itemId: item.id,
          item,
          quantity: 1,
          unitPrice: item.price
        }
      ];
    });
    showToast(`Added 1x ${item.name} to basket`);
  };
  const handleDetailedAdd = (item, quantity, slicing, warmed, giftBox, notes) => {
    const giftPrice = giftBox ? 2.5 : 0;
    const unitPrice = item.price + giftPrice;
    setCartItems((prev) => [
      ...prev,
      {
        id: `cart-${Date.now()}-${Math.random()}`,
        itemId: item.id,
        item,
        quantity,
        selectedSlicing: slicing,
        warmed,
        giftBox,
        notes,
        unitPrice
      }
    ]);
    showToast(`Added ${quantity}x ${item.name} to basket`);
  };
  const handleAddCustomBox = (box) => {
    setCustomBoxes((prev) => [...prev, box]);
    showToast(`Added ${box.name} to basket`);
  };
  const handleUpdateQuantity = (cartItemId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCartItems(
      (prev) => prev.map((ci) => ci.id === cartItemId ? { ...ci, quantity: newQty } : ci)
    );
  };
  const handleRemoveItem = (cartItemId) => {
    setCartItems((prev) => prev.filter((ci) => ci.id !== cartItemId));
  };
  const handleRemoveBox = (boxId) => {
    setCustomBoxes((prev) => prev.filter((b) => b.boxId !== boxId));
  };
  const handleApplyDiscount = (code) => {
    if (code === "BONJOUR10" || code === "LEVAIN10") {
      const itemsTotal = cartItems.reduce(
        (acc, item) => acc + item.unitPrice * item.quantity,
        0
      );
      const boxesTotal = customBoxes.reduce((acc, box) => acc + box.price, 0);
      const discount = (itemsTotal + boxesTotal) * 0.1;
      setDiscountCode(code);
      setDiscountAmount(discount);
      return true;
    }
    return false;
  };
  const handleOrderCompleted = (newOrder) => {
    setOrders((prev) => [newOrder, ...prev]);
    setCartItems([]);
    setCustomBoxes([]);
    setDiscountAmount(0);
    setDiscountCode("");
    setIsCheckoutOpen(false);
    setIsCartOpen(false);
    setConfirmedOrder(newOrder);
  };
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    if (sectionId === "catalog") {
      document.getElementById("catalog-section")?.scrollIntoView({ behavior: "smooth" });
    } else if (sectionId === "grains") {
      document.getElementById("grains-section")?.scrollIntoView({ behavior: "smooth" });
    } else if (sectionId === "pairings") {
      document.getElementById("pairings-section")?.scrollIntoView({ behavior: "smooth" });
    } else if (sectionId === "craft") {
      document.getElementById("craft-section")?.scrollIntoView({ behavior: "smooth" });
    } else if (sectionId === "journal") {
      document.getElementById("journal-section")?.scrollIntoView({ behavior: "smooth" });
    } else if (sectionId === "workshops") {
      document.getElementById("workshops-section")?.scrollIntoView({ behavior: "smooth" });
    } else if (sectionId === "reviews") {
      document.getElementById("reviews-section")?.scrollIntoView({ behavior: "smooth" });
    } else if (sectionId === "location") {
      document.getElementById("location-section")?.scrollIntoView({ behavior: "smooth" });
    } else if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const handleSelectGrainCategory = (cat) => {
    setSelectedCategory(cat);
    scrollToSection("catalog");
  };
  const totalItemCount = cartItems.reduce((acc, it) => acc + it.quantity, 0) + customBoxes.length;
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "min-h-screen flex flex-col bg-[#FAF7F2] text-[#341C02] font-sans antialiased relative", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "fixed inset-0 pointer-events-none z-50 mix-blend-multiply opacity-[0.04]", style: { backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' } }),
    toastMessage && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 glass-panel-dark text-[#FAF7F2] px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 text-xs font-semibold animate-fade-in border border-white/10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react19.Check, { className: "w-4 h-4 text-[#A8D5BA]" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: toastMessage })
    ] }),
    totalItemCount > 0 && !isCartOpen && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "fixed bottom-6 right-6 z-30 lg:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
      "button",
      {
        onClick: () => setIsCartOpen(true),
        className: "flex items-center gap-2 bg-[#341C02] text-[#FAF7F2] px-4 py-3 rounded-2xl shadow-2xl font-semibold text-xs border border-white/20 active:scale-95 transition-all",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react19.ShoppingBag, { className: "w-4 h-4 text-[#E8C5A0]" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("span", { children: [
            "Basket (",
            totalItemCount,
            ")"
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      Navbar,
      {
        cartItems,
        customBoxes,
        onOpenCart: () => setIsCartOpen(true),
        onOpenBoxBuilder: () => setIsBoxBuilderOpen(true),
        onOpenSchedule: () => setIsScheduleOpen(true),
        onOpenOrderLookup: () => setIsOrderLookupOpen(true),
        activeSection,
        onNavigate: scrollToSection,
        searchQuery,
        onSearchChange: setSearchQuery
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      Hero,
      {
        onOrderNow: () => scrollToSection("catalog"),
        onOpenBoxBuilder: () => setIsBoxBuilderOpen(true),
        onOpenSchedule: () => setIsScheduleOpen(true)
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("main", { className: "flex-1 space-y-0", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        ProductCatalog,
        {
          products,
          selectedCategory,
          onSelectCategory: setSelectedCategory,
          searchQuery,
          onSearchChange: setSearchQuery,
          onQuickAdd: handleQuickAdd,
          onSelectDetail: (item) => setSelectedDetailItem(item),
          onOpenBoxBuilder: () => setIsBoxBuilderOpen(true)
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        TerroirGrainSection,
        {
          onSelectGrainCategory: handleSelectGrainCategory
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        PairingGuideSection,
        {
          products,
          onQuickAdd: handleQuickAdd,
          onOpenItemDetail: (item) => setSelectedDetailItem(item)
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(ArtisanalCraftSection, {}),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        FournilJournalSection,
        {
          onOpenSchedule: () => setIsScheduleOpen(true)
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(AtelierSection, {}),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(ReviewsAndPressSection, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(BakeryFooter, {}),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      ProductDetailModal,
      {
        item: selectedDetailItem,
        isOpen: Boolean(selectedDetailItem),
        onClose: () => setSelectedDetailItem(null),
        onAddToCart: handleDetailedAdd
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      CustomBoxBuilderModal,
      {
        isOpen: isBoxBuilderOpen,
        onClose: () => setIsBoxBuilderOpen(false),
        onAddBoxToCart: handleAddCustomBox
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      BakeScheduleModal,
      {
        isOpen: isScheduleOpen,
        onClose: () => setIsScheduleOpen(false),
        onSelectCategory: (cat) => {
          setSelectedCategory(cat);
          scrollToSection("catalog");
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      CartDrawer,
      {
        isOpen: isCartOpen,
        onClose: () => setIsCartOpen(false),
        cartItems,
        customBoxes,
        onUpdateQuantity: handleUpdateQuantity,
        onRemoveItem: handleRemoveItem,
        onRemoveBox: handleRemoveBox,
        onProceedToCheckout: () => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        },
        fulfillmentType,
        onFulfillmentTypeChange: setFulfillmentType,
        discountCode,
        onApplyDiscountCode: handleApplyDiscount,
        discountAmount
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      CheckoutModal,
      {
        isOpen: isCheckoutOpen,
        onClose: () => setIsCheckoutOpen(false),
        cartItems,
        customBoxes,
        fulfillmentType,
        discountAmount,
        onCompleteOrder: handleOrderCompleted
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      OrderConfirmationModal,
      {
        order: confirmedOrder,
        isOpen: Boolean(confirmedOrder),
        onClose: () => setConfirmedOrder(null)
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      OrderLookupModal,
      {
        isOpen: isOrderLookupOpen,
        onClose: () => setIsOrderLookupOpen(false),
        orders,
        onSelectOrder: (ord) => setConfirmedOrder(ord)
      }
    )
  ] });
}
