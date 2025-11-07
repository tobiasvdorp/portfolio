import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const resources = {
  en: {
    translation: {
      // Navbar
      home: "Home",
      aboutMe: "About me",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",

      // Call to action
      Welcome: "Welcome",
      Hi: "Hi",
      "I'm Tobias.": "I'm Tobias.",
      Explore: "Explore",

      // Aboutme
      "About myself.": "About myself.",
      "Limited edition.": "Limited edition.",
      "About Tobias van Dorp": "About Tobias van Dorp",
      "February 7th 2003": "February 7th 2003",
      "Maarn, Utrecht, Netherlands": "Maarn, Utrecht, Netherlands",
      aboutme_description:
        "I'm 22 years old and I've always had an interest in computers, but it wasn't until I started my studies that I realized how much of a nerd I really am. I love combining the technical aspects with creativity to make engaging and functional user interfaces. When I'm not coding, you can usually find me playing with my dog, hanging out with friends or watching science and programming video’s. I'm still exploring my interests, but I'm thrilled to have found a field I'm passionate about.",

      // Technologies
      technologies: "Technologies",
      // Carreer
      "My carreer": "My carreer",
      "Experience points accumulating...": "Experience points accumulating...",
      "HAVO-degree": "HAVO-degree",
      "Juli 2021": "July 2021",
      "Amersfoort, Utrecht": "Amersfoort, Utrecht",
      havo_description:
        "I began my educational path in the Gymnasium program, but later transitioned to the HAVO track. There, I not only earned my diploma but also received the prestigious ",
      "Socrates Award": "Socrates Award",
      havo_description_2:
        "for having the highest score in the entire program. After graduating, I took a gap year to explore my interests and contemplate my future goals.",

      "Bachelor's degree at OpenICT": "Bachelor's degree at OpenICT",
      "September 2022 - now": "September 2022 - now",
      openict_description:
        "Currently, I am enrolled in the OpenICT program at Hogeschool Utrecht. Here, I'm gaining hands-on experience in Agile methodologies, customer requirement mapping, knowledge acquisition, and determining essential skills needed to deliver a product. Unique to our program is its project-based approach: we don't have traditional exams or lectures, allowing us to jump right into real-world applications. This prepares me exceptionally well for a seamless transition into the corporate world upon graduation, as we're already mastering the skills needed in the industry.",

      // Projects
      "Projects.": "Projects.",
      "Click on a card to read more.": "Click on a card to read more.",

      // Project 1
      project1_title: "Portfoliowebsite 1",
      project1_description:
        "From zero coding experience, I self-taught via YouTube and peer guidance to build this portfolio website in just 6 weeks.",
      project1_detailDescription:
        "In my first project at OpenICT, I was tasked with creating a portfolio website. Having never written a single line of code before, I was a complete novice. Over the course of six weeks, I managed to assemble the site through a combination of YouTube tutorials and mini-lessons from classmates. However, about a month into my studies, I found myself dissatisfied with the initial website. As my knowledge grew, I immediately saw opportunities for improvement and decided to take on the project of building my current website, reflecting my evolved skills and better understanding of web development.",

      // Project 2
      project2_title: "Hairdresser website",
      project2_description:
        "In a team of five, I focused on front-end design using Tailwind and learned Git collaboration to build a hairdresser's website.",
      project2_detailDescription:
        "In my second project at OpenICT, I collaborated with a team of five people to build a website for a hairdressing salon. While I focused primarily on the front-end, creating website components was an enjoyable experience. Although the end result may not reflect high technical finesse, the project was an invaluable learning journey for me, especially in the areas of teamwork and collaboration. Through this experience, I gained insights into effective communication, task delegation, and the utilization of Git for collective project management. Additionally, it deepened my understanding of translating a client's needs and expectations into a functional product.",

      // Project 3
      project3_title: "Spark",
      project3_description:
        "I pivoted within the 'Spark' project to build an educational programming game's website, forum, and chatbot using React.",
      project3_detailDescription:
        "My third undertaking was 'Spark', an engaging game designed to teach users the fundamentals of programming in an entertaining manner. Initially, I was assigned to design the game's user interface. However, I soon realized that game development was not my preferred field. Thus, I pivoted and, alongside a team member, began focusing on the creation of the game's website. This venture led me to construct a forum and a chatbot, both implemented using React.",

      // Project 4
      project4_title: "NetworkUSP Inclusive",
      project4_description:
        "I built an accessible website for a network and gained important experience in client communication.",
      project4_detailDescription:
        "My first project for a real client was building an accessible website for Netwerk USP Inclusief (nUSPi), an organization that champions inclusivity. Initially brought on board through a student opportunity at the HU Institute of ICT, I had the unique challenge of translating the organization's mission into a digital platform that could be easily accessed by everyone. Over a series of MS Teams meetings, I learned a lot about client communication—how to effectively listen, condense their requirements, and provide actionable feedback. One key learning area for me was web accessibility. Given nUSPi's focus on inclusivity, I learned about and implemented web standards that would make our digital platform accessible to as many people as possible. After successfully building the website, I prepared a comprehensive handover document containing specific instructions for managing the platform. This empowered the client, nUSPi, to take full ownership and maintain the site independently.",

      // Project 5
      project5_title: "Coaching website",
      project5_description:
        "A user-friendly, fast-performing website built with NextJS and Builder.io for easy content management.",
      project5_detailDescription:
        "For someone in my family, I developed a website using NextJS and Builder.io as the CMS. Lacking technical knowledge, they placed high value on a website that was easy to manage, loaded quickly, and was SEO-friendly. Throughout this project, I gained extensive knowledge on combining Builder.io with NextJS, creating and managing content models, and building reusable components. The result is a website that meets my family member's needs and that they can manage independently without my assistance. Additionally, the website scores very high in terms of loading time, performance, and accessibility. You can view the result by clicking the button below. At the moment my family member is still working on the content, so the website is not yet live.",

      // Skills
      skills_title: "Skills.",
      skills_under: "Power-ups acquired.",
      skills_select: "Select a skill to read more about it.",
      what_isit: "What is it?",
      how_skilled: "How skilled am I?",

      // HTML
      HTML_description:
        "HTML (HyperText Markup Language) is the standard markup language used to create web pages and web applications.",
      HTML_skillLevel:
        "I'm very comfortable with HTML and use it almost daily.",

      // CSS
      CSS_description:
        "CSS (Cascading Style Sheets) is a stylesheet language used for describing the look and formatting of a document written in HTML.",
      CSS_skillLevel:
        "I have a strong foundation in CSS, which enabled me to build this site from the ground up. As I continue to learn, I'm also exploring advanced techniques to further enhance my skill set and bring more sophisticated features to my projects.",

      // React
      React_description:
        "React is a JavaScript library for building user interfaces, especially single-page applications where you need a fast and interactive user experience.",
      React_skillLevel:
        "I'm still getting the hang of React, but I know my way around the basics.",

      // NextJS
      NextJS_description:
        "NextJS is a React framework known for its speed and SEO-friendliness. It allows you to use server-side rendering, static site generation, and API routes.",
      NextJS_skillLevel: `I have a basic understanding of NextJS and have been working with it a lot lately. I find it super interesting to learn how to optimize a website for SEO and performance. I plan to learn more about server-side rendering and static site generation in the future.`,
      // Tailwind CSS
      TailwindCSS_description:
        "TailwindCSS is a utility-first CSS framework that allows for highly customizable designs without leaving your HTML.",
      TailwindCSS_skillLevel:
        "I have a solid grasp of the fundamentals in Tailwind and am proficient in crafting well-designed layouts. As I continue to advance my skills, I'm also delving into more complex concepts to fully leverage the capabilities of the framework.",

      // Elementor
      Elementor_description:
        "Elementor is a drag-and-drop page builder for WordPress, allowing you to create complex layouts without needing to write any code.",
      Elementor_skillLevel:
        "I'm good with Elementor and have built a full website with it. You can see the result in my projects.",

      // Builder.io
      Builderio_description:
        "Builder.io is a headless CMS that allows you to create and manage content for your website. It provides a visual editor that makes it easy to design and update your site without writing code.",
      Builderio_skillLevel:
        "I know the basics of Builder.io and have used it (with NextJS) to build a website. I find it to be a user-friendly tool that streamlines the content creation process and allows for quick updates to the site.",
      // WordPress
      WordPress_description:
        "WordPress is a popular content management system (CMS) that allows you to create and manage websites and blogs without having to code from scratch.",
      WordPress_skillLevel:
        "I've built a full website in WordPress and know the basics pretty well. You can see the result in my projects.",

      // Contact
      getInTouch: "Get in touch.",
      friendRequestAccepted: "Friend request accepted.",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      sendButton: "Send",
      somethingWentWrong: "Something went wrong. Please try again.",
      orFindMeOn: "Or find me on:",
      messageSent: "Message sent! I will get back to you as soon as possible.",
      addMeOnDiscord: "Add me on Discord! My username is:",

      // Settings
      settings: "Settings",
      theme: "Theme",
      animations: "Animations",

      // Destroy
      destroyConfirm:
        "Are you sure you want to destroy this website? (PLEASE DON'T!!!)",
      repairing: "Repairing...",
    },
  },
  nl: {
    translation: {
      // Navbar
      home: "Home",
      aboutMe: "Over mij",
      projects: "Projecten",
      skills: "Vaardigheden",
      contact: "Contact",

      // Call to action
      Welcome: "Welkom",
      Hi: "Hoi",
      "I'm Tobias.": "Ik ben Tobias.",
      Explore: "Ontdekken",

      // Aboutme
      "About myself.": "Over mij.",
      "Limited edition.": "Limited edition.",
      "About Tobias van Dorp": "Over Tobias van Dorp",
      "February 7th 2003": "7 februari 2003",
      "Maarn, Utrecht, Netherlands": "Maarn, Utrecht",
      aboutme_description:
        "Ik heb altijd al interesse gehad in computers, maar pas toen ik aan mijn studie begon, besefte ik wat voor nerd ik eigenlijk ben. Ik vind het geweldig om de technische kant te combineren met creativiteit om boeiende en functionele websites te maken. Als ik niet aan het coderen ben, ben ik meestal met mijn hond aan het spelen, met vrienden aan het chillen of naar video’s over wetenschap en programmeren aan het kijken. Ik ben nog volop mijn interesses aan het verkennen, maar ik ben ontzettend blij dat ik een vakgebied heb gevonden waar ik gepassioneerd over ben.",

      // Carreer
      "My carreer": "Mijn carrière",
      "Experience points accumulating...":
        "Ervaringspunten stapelen zich op...",
      "HAVO-degree": "HAVO-diploma",
      "Juli 2021": "Juli 2021",
      "Amersfoort, Utrecht": "Amersfoort, Utrecht",
      havo_description:
        "Ik ben mijn onderwijstraject begonnen op het Gymnasium, maar stapte later over naar de HAVO. Daar heb ik niet alleen mijn diploma behaald, maar ook de prestigieuze ",
      "Socrates Award": "Socrates Award",
      havo_description_2:
        "voor het behalen van de hoogste eindexamenscores van de hele HAVO. Na de HAVO heb ik een tussenjaar genomen om mijn interesses te verkennen en na te denken over mijn toekomstplannen.",

      "Bachelor's degree at OpenICT": "Bachelor bij OpenICT",
      "September 2022 - now": "September 2022 - nu",
      openict_description:
        "Op dit moment zit ik in mijn vierde jaar van de studie OpenICT aan de Hogeschool Utrecht. Hier doe ik praktijkervaring op in Agile-methodes, het in kaart brengen van klantvereisten, kennisverwerving en het bepalen van essentiële vaardigheden die nodig zijn om een product te leveren. Wat uniek is aan onze studie is de projectmatige aanpak: we hebben geen traditionele examens of colleges, waardoor we direct kunnen duiken in toepassingen uit de echte wereld. Dit bereidt me uitzonderlijk goed voor op een naadloze overgang naar de bedrijfswereld na mijn afstuderen, aangezien we al de vaardigheden beheersen die in de industrie nodig zijn.",

      // Projects
      "Projects.": "Projecten.",
      "Click on a card to read more.": "Klik op een kaart om meer te lezen.",

      // Technologies
      technologies: "Technologieën",

      // Filters
      all: "Alle",
      work: "Werk",
      school: "School",
      hobby: "Hobby",

      // No projects found
      "Oops! No projects found for the selected filters.":
        "Oeps! Er zijn geen projecten gevonden voor de geselecteerde filters.",

      // See the result
      "See the result": "Resultaat bekijken",
      // Project 1
      project1_title: "Portfoliowebsite 1",
      project1_description:
        "Zonder enige programmeerervaring heb ik in 6 weken tijd geleerd om deze portfolio website te bouwen.",
      project1_detailDescription: `In mijn eerste project bij OpenICT kreeg ik de opdracht om een portfoliowebsite te maken. Ik had nog nooit een regel code geschreven, dus ik was een complete beginner. In de loop van zes weken heb ik de site weten te bouwen door een combinatie van YouTube-tutorials en mini-lessen van klasgenoten. Ongeveer een maand nadat klaar was met de portfoliowebsite, was ik al niet meer tevreden met de initiële website. Naarmate mijn kennis groeide, zag ik meteen mogelijkheden voor verbetering en besloot ik het project van het bouwen van mijn huidige website te beginnen waarin mijn geëvolueerde vaardigheden en beter begrip van webontwikkeling tot uiting komen.`,

      // Project 2
      project2_title: "Kapperswebsite",
      project2_description:
        "In een team van vijf heb ik me gericht op front-end design om een website voor een kapsalon te bouwen.",
      project2_detailDescription: `In mijn tweede project bij OpenICT heb ik samengewerkt met een team van vijf personen om een website te bouwen voor een kapsalon. Ik heb me tijdens dat project voornamelijk gericht op het leren van Git en TailwindCSS. Hoewel het eindresultaat misschien geen technisch wonder is, was het project voor mij een ontzettend waardevolle leerervaring, vooral op het gebied van teamwork en samenwerking. Door deze ervaring kreeg ik inzicht in effectieve communicatie en het gebruik van Git voor collectief projectbeheer. Daarnaast verdiepte het mijn begrip van het vertalen van de behoeften en verwachtingen van een klant in een functioneel product.`,

      // Project 3
      project3_title: "Spark",
      project3_description:
        "Ik heb me binnen het project 'Spark' gericht op het bouwen van een website, forum en chatbot met React.",
      project3_detailDescription: `Mijn derde project was 'Spark', een boeiend spel dat is ontworpen om gebruikers de basisprincipes van programmeren op een leuke manier te leren. Aanvankelijk was mijn taak het ontwerpen van de gebruikersinterface van het spel. Ik kwam er echter al snel achter dat game-ontwikkeling niet mijn voorkeursgebied was. Daarom heb ik me gericht op het bouwen van de website van het spel, samen met een teamlid. Deze onderneming leidde me tot de constructie van een forum en een chatbot, beide geïmplementeerd met React.`,

      // Project 4
      project4_title: "NetwerkUSP Inclusief",
      project4_description:
        "Ik heb een toegankelijke website gebouwd voor een netwerk en belangrijke ervaring opgedaan in klantcommunicatie.",
      project4_detailDescription: `Mijn eerste project voor een echte klant was het bouwen van een toegankelijke website voor Netwerk USP Inclusief (nUSPi), een organisatie die zich inzet voor inclusiviteit op het Utrecht Science Park. Ik ben met hen in contact gekomen via een oproep in het ICT-kanaal op Discord en ik had de unieke uitdaging om de missie van de organisatie te vertalen naar een digitaal platform dat door iedereen gemakkelijk kon worden gebruikt. In een reeks Teams-vergaderingen heb ik veel geleerd over klantcommunicatie - hoe ik effectief kan luisteren, hun vereisten kan samenvatten en bruikbare feedback kan geven. Een belangrijk leergebied voor mij was webtoegankelijkheid. Gezien de focus van nUSPi op inclusiviteit, heb ik webstandaarden geleerd en geïmplementeerd die ons digitale platform toegankelijk zouden maken voor zoveel mogelijk mensen. Nadat ik de website met succes had gebouwd, heb ik een uitgebreid overdrachtsdocument opgesteld met specifieke instructies voor het beheren van het platform. Dit stelde de klant, nUSPi, in staat om het platform volledig in eigen beheer te nemen en onafhankelijk te onderhouden.`,

      // Project 5
      project5_title: "Coaching website",
      project5_description:
        "Een gebruiksvriendelijke en snel presterende website gebouwd met NextJS en Builder.io voor eenvoudige contentbeheer.",
      project5_detailDescription:
        "Voor een kennis heb ik een website ontwikkeld met NextJS en Builder.io als CMS. Omdat ze zelf geen technische kennis heeft, hechtte ze veel waarde aan een website die eenvoudig te beheren is, snel laadt en SEO-vriendelijk is. Gedurende dit project heb ik uitgebreide kennis opgedaan over het combineren van Builder.io met NextJS, het creëren en beheren van contentmodellen, en het bouwen van herbruikbare componenten. Het resultaat is een website die voldoet aan de wensen van mijn kennis en die ze zelf kan beheren zonder mijn hulp. Ook scoort de website heel hoog wat betreft laadtijd, prestaties en toegankelijkheid. Je kunt het resultaat bekijken door op de knop hieronder te klikken. Op dit moment is mijn kennis nog bezig met de content, dus de website is nog niet live.",

      // SKILLS
      skills_title: "Vaardigheden.",
      skills_under: "Power-ups verzameld.",
      skills_select: "Selecteer een vaardigheid om er meer over te lezen.",
      what_isit: "Wat is het?",
      how_skilled: "Hoe goed ben ik erin?",

      // HTML
      HTML_description:
        "HTML (HyperText Markup Language) is de standaardtaal die wordt gebruikt om webpagina's en webtoepassingen te maken.",
      HTML_skillLevel:
        "Ik ben zeer comfortabel met HTML en gebruik het bijna dagelijks.",

      // CSS
      CSS_description:
        "CSS (Cascading Style Sheets) is een stylesheettaal die wordt gebruikt om het uiterlijk en de opmaak van een document geschreven in HTML te beschrijven.",
      CSS_skillLevel:
        "Ik heb een sterke basis in CSS. Naarmate ik verder leer, onderzoek ik ook geavanceerde technieken om mijn vaardigheden verder te verbeteren en meer geavanceerde functies aan mijn projecten toe te voegen. Onder andere deze website heb ik gebouwd met plain CSS.",

      // React
      React_description:
        "React is een JavaScript-bibliotheek voor het bouwen van gebruikersinterfaces, met name single-page applicaties waar je een snelle en interactieve gebruikerservaring nodig hebt.",
      React_skillLevel:
        "Ik ben nog steeds bezig met het onder de knie krijgen van React, maar ik ken de basisprincipes.",

      // NextJS
      NextJS_description:
        "NextJS is een React-framework dat bekend staat om zijn snelheid en SEO-vriendelijkheid. Het maakt het mogelijk om server-side rendering, statische sitegeneratie en API-routes te gebruiken.",
      NextJS_skillLevel:
        "Ik heb basiskennis van NextJS en ben er de afgelopen tijd veel mee bezig geweest. Ik vind het super interessant om te leren hoe je een website kunt optimaliseren voor SEO en prestaties. Ik ben van plan om in de toekomst meer te leren over server-side rendering en statische sitegeneratie.",
      // Tailwind CSS
      TailwindCSS_description:
        "TailwindCSS is een utility-first CSS-framework waarmee je zeer aanpasbare ontwerpen kunt maken zonder je HTML te verlaten.",
      TailwindCSS_skillLevel:
        "Ik heb een goede beheersing van de basisprincipes van Tailwind en ben bekwaam in het maken van goed ontworpen lay-outs. Naarmate ik mijn vaardigheden verder ontwikkel, verdiep ik me ook in meer complexe concepten om de mogelijkheden van het framework volledig te benutten.",

      // Elementor
      Elementor_description:
        "Elementor is een drag-and-drop page builder voor WordPress, waarmee je complexe lay-outs kunt maken zonder code te hoeven schrijven.",
      Elementor_skillLevel:
        "Ik kan goed overweg met Elementor en heb er een volledige website mee gebouwd. Je kunt het resultaat zien in mijn projecten.",

      // Builder.io
      Builderio_description:
        "Builder.io is een headless CMS waarmee je content voor je website kunt maken en beheren. Het biedt een visuele editor waarmee je eenvoudig je site kunt ontwerpen en bijwerken zonder code te schrijven.",
      Builderio_skillLevel:
        "Ik ken de basisprincipes van Builder.io en heb het (met NextJS) gebruikt om een website te bouwen. Ik vind het een gebruiksvriendelijke tool die het contentcreatieproces stroomlijnt en snelle updates aan de site mogelijk maakt.",
      // WordPress
      WordPress_description:
        "WordPress is een populair contentmanagementsysteem (CMS) waarmee je websites en blogs kunt maken en beheren zonder vanaf nul te hoeven coderen.",
      WordPress_skillLevel:
        "Ik heb een volledige website gebouwd in WordPress en ken de basisprincipes vrij goed. Je kunt het resultaat zien in mijn projecten.",

      // Contact
      getInTouch: "Contact opnemen.",
      friendRequestAccepted: "Vriendschapsverzoek geaccepteerd.",
      nameLabel: "Naam",
      emailLabel: "E-mail",
      messageLabel: "Bericht",
      sendButton: "Versturen",
      somethingWentWrong: "Er is iets misgegaan. Probeer het opnieuw.",
      orFindMeOn: "Of vind me op:",
      messageSent: "Bericht verzonden! Ik kom zo snel mogelijk bij je terug.",
      addMeOnDiscord: "Voeg me toe op Discord! Mijn gebruikersnaam is:",

      // Settings
      settings: "Instellingen",
      theme: "Thema",
      animations: "Animaties",

      // Destroy
      destroyConfirm:
        "Weet je zeker dat je deze website wilt vernietigen? (DOE HET ALSJEBLIEFT NIET!!!)",
      repairing: "Repareren...",
    },
  },
} as const satisfies Record<string, { translation: Record<string, string> }>;

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;
