// Define the translations
const translations = {
    en: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      contact: 'Contact',
      downloadCV: 'Download CV',
      contactMe: 'Contact Me',
      dataAnalysis: 'Professional Data Analysis Services for Mining',
      dataAnalysisDescription: 'I offer professional data analysis services, leveraging my expertise in various tools and programming languages to provide valuable insights.',
      websiteDesign: 'Professional Website Design Services',
      websiteDesignDescription: 'I offer professional website design services, leveraging my expertise in HTML, CSS, JavaScript, React, and WordPress to create stunning and functional websites.',
      pitStopeOptimization: 'Pit and Stope Optimization Services',
      pitStopeOptimizationDescription: 'I provide professional pit and stope optimization services, utilizing my expertise in mining engineering and various software tools.',
      micromineDescription: 'Micromine is a powerful software used in the mining industry for geological modeling, mine design, and resource estimation. With its advanced features and user-friendly interface, it allows mining engineers to efficiently analyze and visualize data, aiding in the decision-making process for optimal mining operations.',
      autocadDescription: 'AutoCAD is a powerful computer-aided design (CAD) software used by professionals in various industries, including engineering, architecture, and construction. With its extensive range of tools and features, AutoCAD allows users to create precise and detailed 2D and 3D models, making it an essential tool for designing and drafting projects.',
      webDevelopmentDescription: 'HTML, CSS, and JavaScript are foundational skills for web development. HTML is used to structure the content of a webpage, CSS is used to style and layout the webpage, and JavaScript is used to add interactivity and dynamic behavior to the webpage.'
    },
    fr: {
      home: 'Accueil',
      about: 'À propos',
      portfolio: 'Portfolio',
      contact: 'Contact',
      downloadCV: 'Télécharger CV',
      contactMe: 'Me Contacter',
      dataAnalysis: 'Services professionnels d\'analyse de données pour l\'industrie minière',
      dataAnalysisDescription: 'Je propose des services professionnels d\'analyse de données, en utilisant mon expertise dans divers outils et langages de programmation pour fournir des informations précieuses.',
      websiteDesign: 'Services professionnels de conception de sites Web',
      websiteDesignDescription: 'Je propose des services professionnels de conception de sites Web, en utilisant mon expertise en HTML, CSS, JavaScript, React et WordPress pour créer des sites Web époustouflants et fonctionnels.',
      pitStopeOptimization: 'Services d\'optimisation des fosses et des chantiers',
      pitStopeOptimizationDescription: 'Je propose des services professionnels d\'optimisation des fosses et des chantiers, en utilisant mon expertise en ingénierie minière et divers outils logiciels.',
      micromineDescription: 'Micromine est un puissant logiciel utilisé dans l\'industrie minière pour la modélisation géologique, la conception de mines et l\'estimation des ressources. Avec ses fonctionnalités avancées et son interface conviviale, il permet aux ingénieurs miniers d\'analyser et de visualiser efficacement les données, aidant ainsi le processus de prise de décision pour des opérations minières optimales.',
      autocadDescription: 'AutoCAD est un puissant logiciel de conception assistée par ordinateur (CAO) utilisé par des professionnels de divers secteurs, notamment l\'ingénierie, l\'architecture et la construction. Avec sa gamme étendue d\'outils et de fonctionnalités, AutoCAD permet aux utilisateurs de créer des modèles 2D et 3D précis et détaillés, ce qui en fait un outil essentiel pour la conception et la réalisation de projets.',
      webDevelopmentDescription: 'HTML, CSS et JavaScript sont des compétences fondamentales pour le développement web. HTML est utilisé pour structurer le contenu d\'une page Web, CSS est utilisé pour styliser et mettre en page la page Web, et JavaScript est utilisé pour ajouter de l\'interactivité et un comportement dynamique à la page Web.'
    },
  };
  
  // Function to switch the language
  function switchLanguage(lang) {
    // Get all elements with the "translate" class
    const elements = document.querySelectorAll('.translate');
  
    // Iterate over the elements and update their text content
    elements.forEach((element) => {
      const key = element.getAttribute('data-key');
      const translation = translations[lang][key];
      element.textContent = translation;
    });
  }
  