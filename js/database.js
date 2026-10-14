const database = [
    {
        id: "gw1", law: "Grondwet", article: "Artikel 1", title: "Gelijkheid & Non-discriminatie", inMatrix: true, vh: false, groen: true,
        eis: "De student kan in een praktijksituatie herkennen wanneer sprake is van discriminatie en kan aangeven hoe daar volgens de wet mee omgegaan moet worden. (Grondwet, artikel 1) (T)",
        text: "Allen die zich in Nederland bevinden, worden in gelijke gevallen gelijk behandeld. Discriminatie wegens godsdienst, levensovertuiging, politieke gezindheid, ras, geslacht, handicap, seksuele gerichtheid of op welke grond dan ook, is niet toegestaan.",
        explanation: "Dit is het gelijkheidsbeginsel. Uitgangspunt is dat gelijke gevallen een gelijke behandeling moeten krijgen.",
        connection: "Gekoppeld aan <span class=\"law-link\" onclick=\"searchArticle('44bis')\">Sr art. 44bis</span> en <span class=\"law-link\" onclick=\"searchArticle('137c')\">Sr art. 137c</span>."
    },
    {
        id: "gw12", law: "Grondwet", article: "Artikel 12", title: "Huisrecht", inMatrix: true, vh: false, groen: true,
        eis: "De student kan uitleggen onder welke voorwaarden binnentreden in een woning zonder toestemming van de bewoner is toegestaan. (Grondwet, artikel 12) (B)",
        text: "1. Het binnentreden in een woning zonder toestemming van de bewoner is alleen geoorloofd in de gevallen bij of krachtens de wet bepaald, door hen die daartoe bij of krachtens de wet zijn aangewezen.\n2. Voor het binnentreden overeenkomstig het eerste lid zijn voorafgaande legitimatie en mededeling van het doel van het binnentreden vereist, behoudens bij de wet gestelde uitzonderingen.\n3. Aan de bewoner wordt zo spoedig mogelijk een schriftelijk verslag van het binnentreden verstrekt.",
        explanation: "Op grond van dit artikel mag een woning niet worden betreden tenzij hiervoor redenen zijn die dit toestaan. Zonder toestemming van de bewoner mag je slechts een woning betreden in het geval van hulpverlening.",
        connection: "Gekoppeld aan <span class=\"law-link\" onclick=\"searchArticle('7')\">Politiewet art. 7 lid 2</span> en <span class=\"law-link\" onclick=\"searchArticle('1')\">Awbi art. 1, 2, 7, 9</span>."
    },
    {
        id: "pw7_1", law: "Politiewet 2012", article: "Artikel 7 lid 1", title: "Geweldsaanwending", inMatrix: true, vh: false, groen: true,
        eis: "De student kan in een praktijksituatie beoordelen of het gebruik van geweld of vrijheidsbeperkende middelen door een politieambtenaar rechtmatig is (Politiewet, artikel 7 lid 1) (T)",
        text: "De ambtenaar van politie die is aangesteld voor de uitvoering van de politietaak, is bevoegd in de rechtmatige uitoefening van zijn bediening geweld of vrijheidsbeperkende middelen te gebruiken, wanneer het daarmee beoogde doel dit, mede gelet op de aan het gebruik hiervan verbonden gevaren, rechtvaardigt en dat doel niet op een andere wijze kan worden bereikt. Aan het gebruik van geweld gaat zo mogelijk een waarschuwing vooraf.",
        explanation: "Subsidiariteit en proportionaliteit zijn leidend bij elk geweldoptreden.",
        connection: "Gekoppeld aan <span class=\"law-link\" onclick=\"searchArticle('4')\">Ambtsinstructie art. 4</span>."
    },
    {
        id: "sr41", law: "Wetboek van Strafrecht", article: "Artikel 41", title: "Noodweer & Noodweerexces", inMatrix: true, vh: true, groen: true,
        eis: "De student kan in een praktijksituatie bepalen of er sprake is van noodweer en noodweerexces en welke juridische gevolgen dit heeft. (Sr, artikel 41) (T)",
        text: "1. Niet strafbaar is hij die een feit begaat, geboden door de noodzakelijke verdediging van eigen of eens anders lijf, eerbaarheid of goed tegen ogenblikkelijke, wederrechtelijke aanranding.\n2. Niet strafbaar is de overschrijding van de grenzen van noodzakelijke verdediging, indien zij het onmiddellijk gevolg is geweest van een hevige gemoedsbeweging, door de aanranding veroorzaakt.",
        explanation: "Noodweer = rechtvaardigingsgrond. Noodweerexces = schulduitsluitingsgrond.",
        connection: "Gekoppeld aan <span class=\"law-link\" onclick=\"searchArticle('41')\">Sr art. 41</span>."
    },
    {
        id: "sv53_54", law: "Wetboek van Strafvordering", article: "Artikel 53 & 54", title: "Aanhouding (Heterdaad & Buiten heterdaad)", inMatrix: true, vh: false, groen: true,
        eis: "De student kan benoemen wanneer een verdachte mag worden aangehouden. (Sv, artikel 53 en 54) (K)",
        text: "Art. 53. In geval van ontdekking op heterdaad van een strafbaar feit is eenieder bevoegd de verdachte aan te houden...\nArt. 54. Buiten heterdaad is de opsporingsambtenaar op bevel van de officier van justitie bevoegd de verdachte van een misdrijf waarvoor voorlopige hechtenis is toegestaan aan te houden.",
        explanation: "Heterdaad geeft ieder burger aanhoudingsbevoegdheid. Buiten heterdaad is voorbehouden aan de opsporingsambtenaar op bevel van de (H)OvJ bij VH-feiten.",
        connection: "Gekoppeld aan <span class=\"law-link\" onclick=\"searchArticle('67')\">Sv art. 67</span>."
    },
    {
        id: "sv67", law: "Wetboek van Strafvordering", article: "Artikel 67", title: "Voorlopige hechtenis", inMatrix: true, vh: true, groen: true,
        eis: "De student kan beschrijven voor welke strafbare feiten uit deze toetsmatrijs voorlopige hechtenis is toegestaan. (Sv, art. 67 lid 1 en lid 2) (K)",
        text: "1. Een bevel tot voorlopige hechtenis kan worden gegeven in geval van verdachte van:\na. misdrijven waarop naar de wettelijke omschrijving een gevangenisstraf van vier jaren of meer is gesteld;\nb. de in artikel 67 lid 1 aangewezen specifieke misdrijven.\n2. Verdachten zonder vaste woon- of verblijfplaats in Nederland.",
        explanation: "Grondslag voor inverzekeringstelling, inbewaringstelling en gevangenhouding.",
        connection: "Gekoppeld aan <span class=\"law-link\" onclick=\"searchArticle('57')\">Sv art. 57</span>."
    }
];
