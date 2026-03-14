export type Project = {
  slug: string;
  name: string;
  date: string;
  summary: string;
  summaryFr: string;
  description: string[];
  descriptionFr: string[];
  technologies: string[];
  features: string[];
  featuresFr: string[];
};

export const projects: Project[] = [
  {
    slug: 'arcade',
    name: 'Arcade',
    date: '2025-01-15',
    summary:
      'C++ plugin-based arcade core loading games/graphics at runtime via dlopen and a shared entryPoint ABI.',
    summaryFr:
      'Noyau Arcade C++ chargeant dynamiquement jeux et bibliotheques graphiques via dlopen et une ABI entryPoint commune.',
    description: [
      'The core discovers .so modules from ./lib, then loads one graphics backend (ncurses / SDL2 / SFML) and one game implementation through interfaces (IGraphic / IGame).',
      'At runtime, modules can be switched from the main loop without rebuilding the binary, which validates the dynamic-loader architecture and interface contracts.',
      'Current state: functional school project with some technical debt (hardcoded input mapping and fragile module filtering), but the dynamic architecture is in place.'
    ],
    descriptionFr: [
      'Le core detecte les modules .so dans ./lib, puis charge un backend graphique (ncurses / SDL2 / SFML) et un jeu via les interfaces IGraphic / IGame.',
      'En execution, les modules peuvent etre changes depuis la boucle principale sans recompilation, ce qui valide l architecture dynamique et les contrats d interface.',
      'Etat actuel : projet fonctionnel, mais avec de la dette technique (mapping d inputs hardcode et filtrage de modules encore fragile).'
    ],
    technologies: ['C++', 'SFML', 'SDL2', 'ncurses'],
    features: [
      'Runtime module loading with dlopen/dlsym',
      'Shared plugin ABI through entryPoint factory symbol',
      'Game/graphics hot-switch in a unified loop',
      'Menu + in-game execution flow with restart and game over handling'
    ],
    featuresFr: [
      'Chargement dynamique des modules via dlopen/dlsym',
      'ABI plugin commune via symbole entryPoint',
      'Switch a chaud des jeux et des libs graphiques dans une boucle unique',
      'Flux menu + execution en jeu avec restart et game over'
    ]
  },
  {
    slug: 'raytracer',
    name: 'Raytracer',
    date: '2024-11-03',
    summary:
      'CPU raytracer in C++ with libconfig scene parsing, multiple primitives, and PPM rendering pipeline (max depth 3).',
    summaryFr:
      'Raytracer CPU en C++ avec parsing de scene via libconfig, plusieurs primitives et pipeline de rendu PPM (profondeur max 3).',
    description: [
      'Scenes are loaded from .cfg files: camera, lights and primitives are parsed and instantiated through a factory layer.',
      'Implemented primitives include spheres, planes, cylinders, cones, triangles, boxes, torus and chessboard with optional reflectivity/transparency/refractive index fields.',
      'The renderer exports Output.ppm and supports optional SFML display; architecture is extensible but parser/error handling still has rough edges.'
    ],
    descriptionFr: [
      'Les scenes sont chargees depuis des fichiers .cfg : camera, lumieres et primitives sont parsees puis instanciees via une couche factory.',
      'Les primitives implementees incluent spheres, plans, cylindres, cones, triangles, boxes, torus et chessboard avec champs optionnels de reflectivite/transparence/indice.',
      'Le rendu exporte Output.ppm et peut etre affiche via SFML en bonus ; l architecture est extensible, mais la gestion des erreurs parser reste a durcir.'
    ],
    technologies: ['C++', 'Rendering', 'Scene Parsing'],
    features: [
      'libconfig-based scene parser',
      'Factory-driven primitive and light creation',
      'Recursive ray depth setup (maxDepth = 3)',
      'PPM output generation with configurable camera/lights'
    ],
    featuresFr: [
      'Parser de scene base sur libconfig',
      'Creation des primitives et lumieres via factory',
      'Configuration de profondeur recursive des rayons (maxDepth = 3)',
      'Generation PPM avec camera/lumieres configurables'
    ]
  },
  {
    slug: 'kablr-linux',
    name: 'KABLR (Linux POC)',
    date: '2026-03-12',
    summary:
      'PipeWire + Qt6 proof of concept validating realtime node routing, virtual sinks, and daemon/UI split architecture.',
    summaryFr:
      'Preuve de concept PipeWire + Qt6 validant le routage temps reel des noeuds, les virtual sinks et une architecture daemon/UI separee.',
    description: [
      'KABLR-Linux is an engineering POC focused on feasibility: realtime PipeWire node enumeration, link creation/destruction and volume control from a visual patchbay.',
      'The project is split into engine, daemon and UI layers; routing continues in daemon context even if the Qt interface stops.',
      'Current state: architecture validated for a future product direction, but still a prototype (no production hardening yet).'
    ],
    descriptionFr: [
      'KABLR-Linux est un POC oriente faisabilite : enumeration temps reel des noeuds PipeWire, creation/suppression de liens et controle de volume depuis un patchbay visuel.',
      'Le projet est separe en couches engine, daemon et UI ; le routage continue dans le daemon meme si l interface Qt est fermee.',
      'Etat actuel : architecture validee pour la suite produit, mais encore au stade prototype (pas de hardening production).'
    ],
    technologies: ['C++', 'PipeWire', 'Qt6', 'CMake'],
    features: [
      'Realtime PipeWire node/port/link discovery',
      'Interactive patchbay routing with Bezier cable UI',
      'Daemon + UI separation with local IPC contract',
      'Virtual sink creation spikes and backend abstraction (future cross-platform)'
    ],
    featuresFr: [
      'Decouverte temps reel des noeuds/ports/liens PipeWire',
      'Routage patchbay interactif avec cables Bezier',
      'Separation daemon + UI avec contrat IPC local',
      'Spikes sur virtual sink et abstraction backend (futur cross-platform)'
    ]
  }
];

export const projectsBySlug = new Map(projects.map((project) => [project.slug, project]));
