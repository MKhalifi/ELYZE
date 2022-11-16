const candidatesList = [
    {
        id: 1,
        firstname: 'Emmanuel',
        lastname: 'Macron',
        bgColor: '#4C9FB9',
        age: 43,
        image: require('../../images/candidates/macron/macron-fixe.png'),
        imageProfile: require('../../images/candidates/macron/macron-profile.png'),
        pictureCredits: "© Europe 1",
        groupe: 'La République en marche',
        firstLinearColor: "#2c3e50",
        secondLinearColor: "#4ca1af",
        work: 'Président de la République',
        favorites: [
            {
                id: 1,
                anecdote: true,
                anecdoteEmoji: '🍔',
                anecdoteText: 'Son péché mignon culinaire : le cordon bleu',
            },
            {
                id: 2,
                anecdote: true,
                anecdoteEmoji: '🎶',
                anecdoteText: 'Sa musique préférée : “L’envie”, Johnny Hallyday',
            },
            {
                id: 3,
                anecdote: true,
                anecdoteEmoji: '💭',
                anecdoteText: 'Son rêve de jeunesse : écrire des romans',
            },
            {
                id: 4,
                anecdote: true,
                anecdoteEmoji: '👨🏻‍🎨',
                anecdoteText: 'Son tableau préféré : Les Demoiselles d’Avignon de Picasso',
            },
            {
                id: 5,
                anecdote: true,
                anecdoteEmoji: '🍿',
                anecdoteText: 'L’un de ses films préférés : Les Tontons flingueurs',
            },
        ],
        studies: "Sciences Po Paris, Université de Nanterre, ENA",
    },
    {
        id: 2,
        firstname: 'Anne',
        lastname: 'Hidalgo',
        bgColor: '#DE5B70',
        age: 62,
        image: require('../../images/candidates/hidalgo/hidalgo-fixe.png'),
        imageProfile: require('../../images/candidates/hidalgo/hidalgo-profile.png'),
        pictureCredits: "© Eric Dessons/JDD/SIPA",
        groupe: 'Parti Socialiste',
        firstLinearColor: "#904e95",
        secondLinearColor: "#e96443",
        work: 'Maire de Paris',
        favorites: [
            {
                id: 1,
                anecdote: true,
                anecdoteEmoji: '🍿',
                anecdoteText: 'Son film préféré : L’étoffe des héros de  Philip Kaufman',
            },
            {
                id: 2,
                anecdote: true,
                anecdoteEmoji: '🇪🇸',
                anecdoteText: 'Son autre nationalité : espagnole',
            },
            {
                id: 3,
                anecdote: true,
                anecdoteEmoji: '📺',
                anecdoteText: 'Sa série préféré : House of Cards',
            },
            {
                id: 4,
                anecdote: true,
                anecdoteEmoji: '😯',
                anecdoteText: 'Son véritable prénom : Ana',
            },
            {
                id: 5,
                anecdote: true,
                anecdoteEmoji: '🕵🏻‍♀️',
                anecdoteText: 'Son ancien métier : inspectrice du travail'
            },
        ],
        studies: "Université Jean-Moulin- Lyon- III",
    },
    {
        id: 3,
        firstname: 'Yannick',
        lastname: 'Jadot',
        bgColor: '#39AC40',
        age: 54,
        image: require('../../images/candidates/jadot/jadot-fixe.png'),
        imageProfile: require('../../images/candidates/jadot/jadot-profile.png'),
        pictureCredits: "© Sebastien SALOM-GOMIS/AFP",
        groupe: 'EELV',
        firstLinearColor: "#56ab2f",
        secondLinearColor: "#a8e063",
        work: 'Député européen',
        favorites: [
            {
                id: 1,
                anecdote: true,
                anecdoteEmoji: '👩‍❤️‍👨',
                anecdoteText: 'Sa compagne : la journaliste d’investigation Isabelle Saporta',
            },
            {
                id: 2,
                anecdote: true,
                anecdoteEmoji: '🔫',
                anecdoteText: 'Ses films préférés : les westerns',
            },
            {
                id: 3,
                anecdote: true,
                anecdoteEmoji: '✊',
                anecdoteText: 'Il a participé à la création du mouvement “La Déferlante” en 1986',
            },
            {
                id: 4,
                anecdote: true,
                anecdoteEmoji: '🍃',
                anecdoteText: 'Son ancienne vie : militant pour l’ONG Greenpeace',
            },
        ],
        studies: "Université Paris Dauphine",
    },
    {
        id: 4,
        firstname: 'Jean-Luc',
        lastname: 'Mélenchon',
        bgColor: '#CC5753',
        age: 70,
        image: require('../../images/candidates/melenchon/melenchon-fixe.png'),
        imageProfile: require('../../images/candidates/melenchon/melenchon-profile.png'),
        pictureCredits: "© MAXPPP / REMY GABALDA",
        groupe: 'La France Insoumise',
        firstLinearColor: "#932525",
        secondLinearColor: "#e74c3c",
        work: 'Député français',
        favorites: [
            {
                id: 1,
                anecdote: true,
                anecdoteEmoji: '🍿',
                anecdoteText: 'Un de ses films préférés : Little Big Man'
            },
            {
                id: 2,
                anecdote: true,
                anecdoteEmoji: '📺',
                anecdoteText: 'Sa série préférée : Un gars, Une fille',
            },
            {
                id: 3,
                anecdote: true,
                anecdoteEmoji: '👨🏻‍🎨',
                anecdoteText: 'Son peintre préféré : Picasso',
            },
            {
                id: 4,
                anecdote: true,
                anecdoteEmoji: '🎼',
                anecdoteText: 'Son compositeur préféré : Mozart',
            },
            {
                id: 5,
                anecdote: true,
                anecdoteEmoji: '🕺🏻',
                anecdoteText: 'Il écoute "Alors on danse" de Stromae avant ses meetings',
            },
        ],
        studies: "Licences de philo et de lettres modernes, Université de Besançon",
    },
    {
        id: 5,
        firstname: 'Nathalie',
        lastname: 'Arthaud',
        bgColor: '#DA3730',
        age: 51,
        image: require('../../images/candidates/arthaud/arthaud-fixe.png'),
        imageProfile: require('../../images/candidates/arthaud/arthaud-profile.png'),
        pictureCredits: "© Le Point, 2021",
        groupe: 'Lutte ouvrière',
        firstLinearColor: "#cb2d3e",
        secondLinearColor: "#ef473a",
        work: 'Professeure',
        favorites: [
            {
                id: 1,
                anecdote: true,
                anecdoteEmoji: '💇‍♀️',
                anecdoteText: 'Son rêve de jeunesse : devenir coiffeuse',
            },
            {
                id: 2,
                anecdote: true,
                anecdoteEmoji: '📚',
                anecdoteText: 'Son auteure préférée : Tracy Chevalier',
            },
            {
                id: 3,
                anecdote: true,
                anecdoteEmoji: '📺',
                anecdoteText: 'Sa série préférée : Un village français',
            },
            {
                id: 4,
                anecdote: true,
                anecdoteEmoji: '🎶',
                anecdoteText: 'Sa chanteuse préférée : Amy Winehouse',
            },
            {
                id: 5,
                anecdote: true,
                anecdoteEmoji: '🍿',
                anecdoteText: 'Son film préféré : Thelma et Louise de Ridley Scott',
            },
        ],
        studies: "Études d’économie-gestion, obtention du CAPES et de l’agrégation d’économie et de gestion",
    },
    {
        id: 8,
        firstname: 'Valérie',
        lastname: 'Pécresse',
        bgColor: '#1F3B73',
        age: 54,
        image: require('../../images/candidates/pecresse/pecresse-fixe.png'),
        imageProfile: require('../../images/candidates/pecresse/pecresse-profile.png'),
        pictureCredits: "© CARINE SCHMITT / HANS LUCAS / AFP",
        groupe: 'Les Républicains',
        firstLinearColor: "#3a6073",
        secondLinearColor: "#3a7bd5",
        work: 'Présidente du Conseil régional d’Île-de-France',
        favorites: [
            {
                id: 1,
                anecdote: true,
                anecdoteEmoji: '🤷🏼‍♀️',
                anecdoteText: 'Son premier lien avec la politique : afin d’apprendre le russe, elle intègre un camp d’été des jeunesses communistes à l’âge de 15 ans',
            },
            {
                id: 2,
                anecdote: true,
                anecdoteEmoji: '🇯🇵',
                anecdoteText: 'Son talent caché : elle parle japonais grâce à son travail en tant que vendeuse à Tokyo durant sa jeunesse',
            },
            {
                id: 3,
                anecdote: true,
                anecdoteEmoji: '📚',
                anecdoteText: 'Son livre préféré : Le Silence de la mer de Vercors',
            },
            {
                id: 4,
                anecdote: true,
                anecdoteEmoji: '😎',
                anecdoteText: 'Son pedigree : elle est arrivée seconde du classement de sortie à l’ENA',
            },
            {
                id: 5,
                anecdote: true,
                anecdoteEmoji: '🗺',
                anecdoteText: 'À 13 ans, elle lisait La Comédie Humaine, soulignait au crayon à papier les adresses nommées, et les visitait ensuite une par une',
            },
        ],
        studies: "HEC Paris, ENA",
    },
    {
        id: 9,
        firstname: 'Philippe',
        lastname: 'Poutou',
        bgColor: '#CD2C2A',
        age: 54,
        image: require('../../images/candidates/poutou/poutou-fixe.png'),
        imageProfile: require('../../images/candidates/poutou/poutou-profile.png'),
        pictureCredits: "© UGO AMEZ/SIPA",
        groupe: 'Nouveau Parti anticapitaliste',
        firstLinearColor: "#7a2828",
        secondLinearColor: "#a73737",
        work: 'Conseiller métropolitain et municipale',
        favorites: [
            {
                id: 1,
                anecdote: true,
                anecdoteEmoji: '🍿',
                anecdoteText: 'Son film préféré : Les Temps modernes de Chaplin',
            },
            {
                id: 2,
                anecdote: true,
                anecdoteEmoji: '📚',
                anecdoteText: 'Son livre préféré : Mon traitre de Sorj Chalandon',
            },
            {
                id: 3,
                anecdote: true,
                anecdoteEmoji: '📺',
                anecdoteText: 'Sa série préférée : Baron Noir'
            },
            {
                id: 4,
                anecdote: true,
                anecdoteEmoji: '🎶',
                anecdoteText: 'Sa musique préférée : Salut à toi de Bérurier Noir'
            },
            {
                id: 5,
                anecdote: true,
                anecdoteEmoji: '👨🏻‍🎨',
                anecdoteText: 'Son artiste préféré : Banksy',
            },
        ],
        studies: null,
    },
    {
        id: 10,
        firstname: 'Jean',
        lastname: 'Lassalle',
        bgColor: '#547BBC',
        age: 66,
        image: require('../../images/candidates/lassalle/lassalle-fixe.png'),
        imageProfile: require('../../images/candidates/lassalle/lassalle-profile.png'),
        pictureCredits: "© POL EMILE / SIPA/SIPA",
        groupe: 'Résistons !',
        firstLinearColor: "#2c3e50",
        secondLinearColor: "#3498db",
        work: 'Député français',
        favorites: [
            {
                id: 1,
                anecdote: true,
                anecdoteEmoji: '🍔',
                anecdoteText: 'En 2006, il a effectué une grève de la faim de 39 jours pour empêcher la délocalisation d’une usine'
            },
            {
                id: 2,
                anecdote: true,
                anecdoteEmoji: '🦺',
                anecdoteText: 'En 2018, il a été condamné à 1600€ d’amende pour avoir porté un gilet jaune à l’Assemblée Nationale'
            },
            {
                id: 3,
                anecdote: true,
                anecdoteEmoji: '🗣',
                anecdoteText: 'Sa langue maternelle : le béarnais (langue régionale occitano-romans du Béarn)'
            },
            {
                id: 4,
                anecdote: true,
                anecdoteEmoji: '🚗',
                anecdoteText: 'Il a repassé deux fois son permis de conduire'
            },
            {
                id: 5,
                anecdote: true,
                anecdoteEmoji: '📺',
                anecdoteText: 'Sa série préférée : Desperate Housewives',
            },
        ],
        studies: "Études de latin et de grec",
    },
    {
        id: 11,
        firstname: 'Nicolas',
        lastname: 'Dupont-Aignan',
        bgColor: '#377EBE',
        age: 60,
        image: require('../../images/candidates/dupont-aignan/dupont-aignan-fixe.png'),
        imageProfile: require('../../images/candidates/dupont-aignan/dupont-aignan-profile.png'),
        pictureCredits: "© AFP",
        groupe: 'Debout la France !',
        firstLinearColor: "#457fca",
        secondLinearColor: "#5691c8",
        work: 'Député français',
        favorites: [
            {
                id: 1,
                anecdote: true,
                anecdoteEmoji: "🏫",
                anecdoteText: "À 13 ans, il milite pour la candidature à la présidentielle de Jacques Chaban-Delmas, et obtient de très mauvaises notes en 4ème",
            },
            {
                id: 2,
                anecdote: true,
                anecdoteEmoji: "📚",
                anecdoteText: "Son livre préféré : Les chênes qu'on abat d'André Malraux",
            },
            {
                id: 3,
                anecdote: true,
                anecdoteEmoji: "📺",
                anecdoteText: "Sa série préférée : Columbo",
            },
            {
                id: 4,
                anecdote: true,
                anecdoteEmoji: "🍿",
                anecdoteText: "Son film préféré : La vie et rien d'autre de Tavernier",
            },
            {
                id: 5,
                anecdote: true,
                anecdoteEmoji: "👨🏻‍💼",
                anecdoteText: "Son parcours : il a travaillé dans les années 90 pour l’ex-candidat Michel Barnier et François Bayrou",
            },
        ],
        studies: "Sciences Po Paris, Université Paris Dauphine, ENA",
    },
    {
        id: 12,
        firstname: 'Marine',
        lastname: 'Le Pen',
        bgColor: '#1C4470',
        age: 53,
        image: require('../../images/candidates/le-pen/le-pen-fixe.png'),
        imageProfile: require('../../images/candidates/le-pen/le-pen-profile.png'),
        pictureCredits: "© Jonathan Grelier / AFP",
        groupe: 'Rassemblement National',
        firstLinearColor: "#525252",
        secondLinearColor: "#3d72b4",
        work: 'Députée française',
        favorites: [
            {
                id: 1,
                anecdote: true,
                anecdoteEmoji: "👨‍👩‍👦‍👦",
                anecdoteText: "Son vrai prénom : Marion (comme sa célèbre nièce)",
            },
            {
                id: 2,
                anecdote: true,
                anecdoteEmoji: '🐈',
                anecdoteText: "Sa passion : les chats (elle en a 11 !)",
            },
            {
                id: 3,
                anecdote: true,
                anecdoteEmoji: '🍿',
                anecdoteText: "Son film préféré : Le Père Noël est une ordure",
            },
            {
                id: 4,
                anecdote: true,
                anecdoteEmoji: '👨🏻‍🎨',
                anecdoteText: "Son peintre préféré : Botticelli",
            },
            {
                id: 5,
                anecdote: true,
                anecdoteEmoji: '📚',
                anecdoteText: "Son livre préféré : La légende des siècles, Victor Hugo",
            },
        ],
        studies: "Université Paris II Panthéon-Assas",
    },
    {
        id: 13,
        firstname: 'Eric',
        lastname: 'Zemmour',
        bgColor: '#08025B',
        age: 63,
        image: require('../../images/candidates/zemmour/zemmour-fixe.png'),
        imageProfile: require('../../images/candidates/zemmour/zemmour-profile.png'),
        pictureCredits: "© RTS",
        groupe: 'Reconquête',
        firstLinearColor: "#000428",
        secondLinearColor: "#004e92",
        work: 'Ancien journaliste',
        favorites: [
            {
                id: 1,
                anecdote: true,
                anecdoteEmoji: "🗞",
                anecdoteText: "Son plus grand succès médiatique : une augmentation de plus de 170% de téléspectateurs pour la chaîne CNews à son arrivée",
            },
            {
                id: 2,
                anecdote: true,
                anecdoteEmoji: "😖",
                anecdoteText: "Son plus grand échec : Il a échoué deux fois au concours de l’ENA (École Nationale d'Administration)",
            },
            {
                id: 3,
                anecdote: true,
                anecdoteEmoji: "🤷🏻‍♂️",
                anecdoteText: "En 1981 et en 1988, Éric Zemmour a voté à gauche en choisissant François Mitterrand",
            },
            {
                id: 4,
                anecdote: true,
                anecdoteEmoji: "📖",
                anecdoteText: "Son premier véritable roman, Le Dandy Rouge, est une biographie romancée du socialiste allemand Ferdinand Lassalle (1825-1864)",
            },
            {
                id: 5,
                anecdote: true,
                anecdoteEmoji: "📚",
                anecdoteText: "Un de ses livres préférés : Guerre et paix, de Léon Tolstoï",
            }
        ],
        studies: "Sciences Po Paris",
    },
    {
        id: 15,
        firstname: 'Fabien',
        lastname: 'Roussel',
        bgColor: '#D02C35',
        age: 52,
        image: require('../../images/candidates/roussel/roussel-fixe.png'),
        imageProfile: require('../../images/candidates/roussel/roussel-profile.png'),
        groupe: 'Parti communiste français',
        pictureCredits: "© Alain Jocard / AFP",
        firstLinearColor: "#e73827",
        secondLinearColor: "#f85032",
        work: 'Secrétaire national du Parti communiste français',
        favorites: [
            {
                id: 1,
                anecdote: true,
                anecdoteEmoji: "📺",
                anecdoteText: "Son début de carrière : journaliste reporter d’image pour France 3 Ardennes",
            },
            {
                id: 2,
                anecdote: true,
                anecdoteEmoji: "🥪",
                anecdoteText: "Son plat favori : la salade de pommes de terre aux harengs",
            },
            {
                id: 3,
                anecdote: true,
                anecdoteEmoji: "👨🏻‍✈️",
                anecdoteText: "Son prénom a été donné en hommage au Colonel Fabien",
            },
            {
                id: 4,
                anecdote: true,
                anecdoteEmoji: "⛺️",
                anecdoteText: "Ses vacances : il pratique le camping en tente en Corse",
            },
            {
                id: 5,
                anecdote: true,
                anecdoteEmoji: "✊",
                anecdoteText: "Son premier combat politique : lutter contre l’apartheid et pour la libération de Nelson Mandela",
            },
        ],
        studies: "CFPJ (études de journalisme)",
    },

];

export default candidatesList;