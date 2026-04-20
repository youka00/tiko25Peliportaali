document.addEventListener("DOMContentLoaded", () => {
    const translations = {
        fi: {
            navGames: 'Pelit',
            navPodium: 'Podium',
            navClients: 'Asiakkaat',
            heroSub: '25Tikon tekemät pelit :3',
            gamesTitle: 'Pelit',
            websiteBtn: 'Kotisivut',
            trailerBtn: '▶ Katso traileri',
            downloadBtn: 'Lataa tästä!',
            footerText: '25Tiko Peliportaali · 2025',
            podiumtittle: '🏆 Voittajat 🏆',
            gameDescs: [
                // tiko1
                'Soppamies on MUUSA -projektia varten kehitetty arvopohjainen peli, jossa pelaaja löytää itsensä mysteerisestä metsästä. Kaikki väri on kadonnut maailmasta. Kaikki on tasaisen harmaata eikä mikään oikein tunnu miltään. Pelaaja löytää Soppamiehen metsästä, joka antaa hänelle tehtävän sekä lyhdyn. Pelaajan pitää etsiä erilaisia ainesosia ja  värit palautuvat pikku hiljaa takaisin maailmaan. Soppamies keittää sopan hänelle ainesosista ja näin hän löytää taas itsensä.',
                'TrapMouse -peli toimii eräänlaisena testinä selvittääkseen onko pelin pelaaja etsijä, etenijä vai edistäjä. Pelissä ohjaat hiirtä (eläin) ja tehtävänä on päästä labyrintista ulos. Tapoja läpäistä labyrintti on kolme, ja tapa millä läpäiset labyrintin kertoo mihin sijoitut tässä etsijä-etenijä-edistäjä-pyramidissa. Labyrintin läpäisyn jälkeen pelaaja vastaa kymmeneen kysymykseen jotka auttavat määrittämään sijoittumisen e-pyramidissa.',
                'Väistele meteoriitteja, kerää tähtipölyä ja vastaa universumin kysymyksiin. Lumo on Muusa-projektia varten kehitetty avaruusseikkailu, joka vaatii sekä nopeita refleksejä että pysähtymistä omien arvojen äärelle. Matkan varrella kohtaat portteja, joiden kohdalla joudut tekemään valintoja joista jokainen ohjaa sinua lähemmäksi lopuksi paljastuvaa Muusa-rooliasi.',
                'Pyramid of Elements pelissä kerätään labyrintin sisällä avaimia, joilla avataan lukollisia ovia, joista pääsee pyramidin huipulle. Avaimia suojelevat viholliset ja sinun pitää väistellä niitä. Huoneissa voi olla mentorin esittämiä arvokysymyksiä tai vihollisia).  Pelissä päämekaniikka on liikkuminen joystickillä ja boostilla.',
                'Hauskempi ja mielenkiintoisempi tapa pelaajalle arvioida, mitä arvoja hänellä on. Fishing Filosofy on lyhyt ja ytimekäs kalastuspeli, jossa jokainen kala edustaa arvoa, ja pelaajan on arvioitava, kuinka tärkeitä nämä arvot ovat hänelle yksilönä. Kun peli on loppu ja kaikki kalat on pyydystetty, pelaajalle esitetään arvoprofiili, joka näyttää, mitä arvoja hänellä on. Se on viihtyisä elämys, joka on suunniteltu käytettäväksi työelämässä olevien ja sinne siirtyvien MUUSA-mentorointiohjelmaan osallistuvien työkaluna.',
                'Laivakatit laineilla on seikkailupeli, jossa teemana on kissat ja rento tunnelma.Pelissä vastaat kissojen esittämiin kysymyksiin, jotka kartuttavat lopullista pistemäärää joka sitten kertoo lopuksi arvosi. Peli on suunniteltu laajalle pelaajakunnalle, ja kaikki on alusta loppuun itsetehtyä.',
                // tiko2
                '""Kokataan yhdessä" on yhteistyöhön kannustava kahden pelaajan kokkauspeli, jossa voit oppia kokkauksen ja kommunikaation perusteita rauhallisessa ympäristössä. Valitkaa resepti, työskennelkää yhdessä ja nauttikaa pelistä omassa tahdissanne. Ei rangaistuksia tai aikarajoitteita. Pelin tavoite on yksinkertainen: opi ja pidä hauskaa. Tämä on kokkauspeli kaikille!',
                'Jätä kiireinen kaupunki taaksesi ja mene tapaamaan isoisäkissaasi hänen mökillensä, luvassa on hauska ja jännittävä kalastusreissu! Hooked! on peli joka testaa käyttäjän refleksejä kaloilla jotka yrittävät karata, mutta ole varuillasi! Paikalliset ovat huomanneet järveen heitettyjen roskien määrän kasvaneen! Yritä pitää kalat turvassa roskilta samalla kun väistelet niitä itsekin! Jää koukkuun!',
                'Haasta itseäsi tässä klassikon modernissa paluussa!Pajatro on peli, jossa yrität tähdätä pelilaudan tiettyihin osioihin rajallisella määrällä poletteja kerätäksesi pisteitä. Päästäksesi seuraavalle tasolle sinun on ajateltava strategisesti, sillä jokainen liike riippuu sinusta. Luo oma pelityylisi valitsemalla laajasta arsenaalista erilaisia lisävoimia ja etene nopeammin tasojen läpi tässä roguelike arcadepelissä.',
                'Peli näyttää sinulle vihreillä valoilla näppäinten oikean järjestyksen. Kun on sinun vuorosi, muistatko järjestyksen?Jos painat väärin, nappi välähtää punaisena ja muistisi joutuu koetukselle. Elämäsydämet kertovat, montako yritystä sinulla on vielä jäljellä. Kun sydämet loppuvat, pääset yrittämään uudelleen edellisestä tasosta.Memotapin tavoite on yksinkertainen: harjoita muistiasi, haasta itsesi ja palaa pelaamaan yhä uudelleen. ',
                'Puhku on opettavainen videopeli, joka on pelattavissa Android-laitteilla. Peli on suunnattu lapsille ja sen tavoitteena on opettaa sanojen muodostamista, motorisia taitoja ja aakkosia.',
                'Tähtää ja Opi on lapsille suunnattu oppimispeli, jossa ideana on ratkaista ruudulle ilmestyvä laskutoimitus ja osua oikean vastauksen sisältämään maalitauluun. Peli opettaa matematiikkaa, sekä tukee toiminnallisuutta ja koordinaatiokykyä.',
                'Alien Adrift on fysiikkaan perustuva kosketusnäytöllinen peli, jossa et ohjaa avaruusolentoasi vaan kaikkea hänen ympärillään. Lennätä pienet asteroidit pois tieltä, vedä isot painovoiman avulla sivuun, murskaa planeetat kerätäksesi lisäelämiä ja pidä Orlop aisoissa ennen kuin se aiheuttaa vahinkoa. Mitä kauemmin pidät kaaoksen hallinnassa, sitä enemmän pisteitä keräät!',
                'Etsit vaihtelua elämääsi ja ostat epäilyttävän halvan akvaariokaupan laiturin varrelta omituiselta, foliohattuun pukeutuvalta vuokranantajalta. Pian selviää, miksi kauppa oli niin halpa: tämä rakennus on jatkuvien öisten avaruusoliohyökkäysten kohteena.Kauppiaana vietät päiväsi keräten ja ostaen uusia kaloja sekä päivittäen ja ylläpitäen akvaarioitasi. Yöllä puolustat akvaarioitasi muukalaisilta ja suojelet kalojasi ampumalla avaruusolioita laser blasterilla. Peli hyödyntää YETI-tabletin iskunkestävää kosketusnäyttöä, joten voit mätkiä avaruusolioita millä tahansa esineellä.'
            ]
        },
        en: {
            navGames: 'Games',
            navPodium: 'Podium',
            navClients: 'Clients',
            heroSub: 'Games made by 25Tiko :3',
            gamesTitle: 'Games',
            websiteBtn: 'Website',
            trailerBtn: '▶ Watch trailer',
            downloadBtn: 'Download here!',
            footerText: '25Tiko Game Portal · 2025',
            podiumtittle: '🏆 Winners 🏆',
            gameDescs: [
                // tiko1
                'Soppamies is a value-based game developed for the MUSE project, where the player finds themselves in a mysterious forest. All color has disappeared from the world. Everything is a uniform gray, and nothing really feels like anything.In the forest, the player encounters Soppamies, who gives them a task as well as a lantern. The player must search for different ingredients, and little by little, colors begin to return to the world.Soppamies then cooks a soup from the gathered ingredients, and through this, the player is able to rediscover themselves.',
                'MouseTrap game works as a test of sorts to find out wether the player is an explorer, advancer or accelerator. In the game you will guide a mouse (the animal), and the mission is to find your way out of the labyrinth. There are three ways to do it, and the way with which you pass the labyrinth, tells where you will be placed within the explorer-advancer-accelerator-pyramid. After passing the labyrinth, the player will reply to 10 questions which will help determine the final placement on the pyramid.',
                'Dodge meteors, collect stardust and answer the questions of the universe. Lumo is a space adventure developed for the Muusa project, requiring both quick reflexes and a pause to reflect on your own values. Along the way, you will encounter gates where you must make choices, each guiding you closer to the Muusa role revealed at the end.',
                'In the game Pyramid of Elements, you collect keys inside a maze to open locked doors that lead to the top of the pyramid. The keys are guarded by enemies, and you must avoid them. The rooms may contain value-based questions presented by a mentor or enemies. The main gameplay mechanic is movement using a joystick and a boost ability.',
                'A fun and more interesting way for the player to assess what values they hold in life. Fishing Filosofy is a short and sweet fishing game, where every fish represents a value, and the player must self-reflect and assess how important those values are to them as an individual. After the game is done and all fish have been caught, the player is presented with a value profile showing what values they hold. It\'s a cozy experience designed to be used as a tool for those in working life or just entering it participating in the MUUSA mentorship program.  ',
                'Laivakatit Laineilla is an adventure game, where the focus is on cute cats and cozy vibes.In this game you will be answering questions, and your answers rack up points which willbe used to demonstrate your values. The game is made for a wide range of individualsand everything is self-made from the beginning to the end. ',
                // tiko2
                '"Kokataan yhdessä" is a co-operative multiplayer cooking game, where you can learn the basics of cooking and communication in a stress-free environment. Choose the recipe, work together and enjoy the game at your own pace. There are no penalties or time limits. The goal is simple: learn and have fun. This is a cooking game for everyone!',
                'Leave the hustle and bustle of the city behind and join your grandcat at his summer cabin for a fun and exciting fishing trip! Hooked! is a game that tests the user\'s reflexes by having them click on the fish that swim by, but be cautious! Locals have noticed increased quantities of trash falling into the lake! Try to keep the objects from hitting the marine life and avoid them yourself! Get Hooked!',
                'Challenge yourself in this nostalgic game from the 90\'s remade to a digital version!Pajatro is a game where you try to aim for the specific sections on the gameboard with a limited amount of tokens in order to gain points.To reach the next level, you must think strategically as each subsequent step depends on you.Create your own play style by choosing from a vast arsenal of different power-ups and progress faster through levels in this rogue-like arcade game.',
                'The game shows the correct order with green buttons, when it\'s your turn will you remember the orderif you press the wrong button, it flashes red and your memory is put to the test. hearts tell you how many tries you have left. when you run out of hearts, you can try again from the last level.the goal of Memotap is extremely simple: train your memory, challenge yourself and play over and over again. ',
                'Puhku is an educational video game, playable on Android devices. The game is made for children, with the goal of providing educational gameplay. By playing the game, children are taught word formation, motor skills, and the alphabet.',
                'Aim and Learn is an educational game for children. The idea of the game is to solve the math problem that appears on the screen and hit the target containing the correct answer. The game teaches mathematics while also supporting motor skills and coordination. ',
                'Alien Adrift is a physics-based touch game where you don\'t control the alien, you control everything around him. Flick small asteroids out of the way, drag big ones with gravity, smash planets apart to collect bonus lives, and wrangle Orlop before he causes trouble. The longer you keep the chaos under control, the higher your score climbs!',
                'Looking for a change of pace in life, you buy a suspiciously cheap aquarium shop by the pier from an odd eccentric landlord wearing a tinfoil hat.You find out soon why the shop was so cheap, this particular building is the target of persistent nightly alien attacks.As the shopkeeper, you spend your days collecting and buying new fish and upgrading and maintaining your aquariums.By night defend your aquariums from extraterrestrial attack and protect your fish by shooting the aliens with a laser blaster. The game takes advantage of the YETI-tablet\'s impact resistant touch screen since you can smack the aliens with whatever object you want.'
            ]
        }
    };

    let currentLang = 'fi';

    function applyTranslations(lang) {
        const t = translations[lang];

        // Nav link
        const navLinks = document.querySelectorAll('.nav-links a');
        if (navLinks[0]) navLinks[0].textContent = t.navGames;
        if (navLinks[1]) navLinks[1].textContent = t.navPodium;
        if (navLinks[2]) navLinks[2].textContent = t.navClients;

        // Hero
        const heroSub = document.querySelector('.hero-sub');
        if (heroSub) heroSub.textContent = t.heroSub;
        const podiumTitle = document.querySelector('.podium-title');
        if (podiumTitle) podiumTitle.textContent = t.podiumtittle;

        // game tittles
        const gamesTitle = document.querySelector('.Class-Select h2');
        if (gamesTitle) gamesTitle.textContent = t.gamesTitle;

        // game cardsw
        const gameCards = document.querySelectorAll('.game-card');
        gameCards.forEach((card, i) => {
            const desc = card.querySelector('.game-desc');
            if (desc && t.gameDescs[i]) desc.textContent = t.gameDescs[i];

            // Napit
            const teamBtn = card.querySelector('.team-btn');
            const trailerBtn = card.querySelector('.trailer-btn');
            const downloadBtn = card.querySelector('.download-btn');
            if (teamBtn) teamBtn.textContent = t.websiteBtn;
            if (trailerBtn) trailerBtn.innerHTML = t.trailerBtn;
            if (downloadBtn) downloadBtn.textContent = t.downloadBtn;
        });

        // Footer
        const footer = document.querySelector('.footer p');
        if (footer) footer.textContent = t.footerText;

        // Lang napit active-tila
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        currentLang = lang;
    }

    // Lang napit
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            applyTranslations(btn.dataset.lang);
        });
    });
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");

    const section1 = document.getElementById("section1");
    const section2 = document.getElementById("section2");

    btn1.addEventListener("click", () => {
        const isOpen = section1.style.display === "flex";
        section1.style.display = isOpen ? "none" : "flex";
        section2.style.display = "none";
    });

    btn2.addEventListener("click", () => {
        const isOpen = section2.style.display === "flex";
        section2.style.display = isOpen ? "none" : "flex";
        section1.style.display = "none";
    });

    // CONFETTI ON PODIUM SCROLL
    function launchConfetti() {
        const colors = ['#a64dff', '#ff6fd8', '#ffe44d', '#4dffb4', '#4da6ff', '#ff4d4d'];
        for (let i = 0; i < 120; i++) {
            const piece = document.createElement('div');
            piece.style.cssText = `
                position: fixed;
                width: ${Math.random() * 10 + 6}px;
                height: ${Math.random() * 10 + 6}px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
                left: ${Math.random() * 100}vw;
                top: -20px;
                opacity: 1;
                z-index: 9999;
                pointer-events: none;
                transform: rotate(${Math.random() * 360}deg);
            `;
            document.body.appendChild(piece);

            const duration = Math.random() * 2000 + 1500;
            const drift = (Math.random() - 0.5) * 200;

            piece.animate([
                { transform: `translateY(0) translateX(0) rotate(0deg)`, opacity: 1 },
                { transform: `translateY(110vh) translateX(${drift}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
            ], {
                duration,
                easing: 'ease-in',
                fill: 'forwards'
            }).onfinish = () => piece.remove();
        }
    }

    const podium = document.getElementById('podium');
    let confettiFired = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !confettiFired) {
                confettiFired = true;
                launchConfetti();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(podium);

    // HAMBURGER MENU
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navOverlay = document.getElementById('navOverlay');

    hamburgerBtn.addEventListener('click', () => {
        const isOpen = navOverlay.classList.toggle('open');
        hamburgerBtn.classList.toggle('open', isOpen);
        hamburgerBtn.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Nav links
    navOverlay.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');

            navOverlay.classList.remove('open');
            hamburgerBtn.classList.remove('open');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';

            setTimeout(() => {
                const target = document.querySelector(href);
                if (target) {
                    const offset = 350;
                    const top = target.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            }, 350);
        });
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            navOverlay.classList.remove('open');
            hamburgerBtn.classList.remove('open');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
});