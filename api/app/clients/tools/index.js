const manifest = require('./manifest');

// Structured Tools
const DALLE3 = require('./structured/DALLE3');
const FluxAPI = require('./structured/FluxAPI');
const OpenWeather = require('./structured/OpenWeather');
<<<<<<< HEAD
const StructuredWolfram = require('./structured/Wolfram');
=======

const createYouTubeTools = require('./structured/YouTube');
>>>>>>> main
const StructuredACS = require('./structured/AzureAISearch');
const StructuredSD = require('./structured/StableDiffusion');
const GoogleSearchAPI = require('./structured/GoogleSearch');
const TraversaalSearch = require('./structured/TraversaalSearch');
const createOpenAIImageTools = require('./structured/OpenAIImageTools');
const TavilySearchResults = require('./structured/TavilySearchResults');
<<<<<<< HEAD
const createGeminiImageTool = require('./structured/GeminiImageGen');

=======
const StructuredWPPACSTractor = require('./structured/WoodlandAISearchTractor');
const StructuredWPPACSCases = require('./structured/WoodlandAISearchCases');
const StructuredWPPACSCatalog = require('./structured/WoodlandAISearchCatalog');
const StructuredWPPACSCyclopedia = require('./structured/WoodlandAISearchCyclopedia');
const StructuredWPPACSWebsite = require('./structured/WoodlandAISearchWebsite');
const StructuredWoodlandAIEngineHistory = require('./structured/WoodlandEngineHistory');
const StructuredWoodlandAIProductHistory = require('./structured/WoodlandProductHistory');
>>>>>>> main
module.exports = {
  ...manifest,
  // Structured Tools
  DALLE3,
  FluxAPI,
  OpenWeather,
  StructuredSD,
  StructuredACS,
  GoogleSearchAPI,
  TraversaalSearch,
<<<<<<< HEAD
  StructuredWolfram,
  TavilySearchResults,
  createOpenAIImageTools,
  createGeminiImageTool,
=======

  createYouTubeTools,
  TavilySearchResults,
  createOpenAIImageTools,

  StructuredWPPACSTractor,
  StructuredWPPACSCases,
  StructuredWPPACSCatalog,
  StructuredWPPACSCyclopedia,

  StructuredWoodlandAIEngineHistory,
  StructuredWoodlandAIProductHistory,
  StructuredWPPACSWebsite
>>>>>>> main
};
