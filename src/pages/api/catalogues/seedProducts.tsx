import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();

const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;

const stripe = new Stripe(STRIPE_PRIV, {
    apiVersion: '2022-11-15',
});

const kobe5Products = [
    {
        "name": "Nike Kobe 5 Protro Undefeated Hall of Fame",
        "price": 150,
        "description": "Celebrating the Black Mamba's induction into the Naismith Memorial Basketball Hall of Fame, the Undefeated x Zoom Kobe 5 Protro 'Hall Of Fame' emerges in the colors of the only team he ever played for. Built with a mesh base and underlaid by snakeskin-textured leather, the shoe's upper appears in gold, complemented by a purple Swoosh on the right side of both shoes, with pink on the left. The left shoe also includes 24, 10 and 8 on the pink Swoosh as a nod to his NBA and Olympic jersey numbers, while the tongue and heel include mismatched Kobe Bryant and Five Strikes branding. Underfoot, Zoom Air provides cushioning.",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-Protro-Undefeated-Hall-of-Fame-Product.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "Metallic Gold/Field Purple-Multi-Color",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        },
    },
    {
        "name": "Nike Kobe 5 Protro Bruce Lee",
        "price": 150,
        "description": "Released in November 2020, the Zoom Kobe 5 Protro 'Bruce Lee' brings back a 2010 colorway. Inspired by Bruce Lee, whose style and mindset in turn inspired Kobe Bryant, the shoe's upper draws from Lee's jumpsuit in Enter the Dragon. The black and Del Sol look is highlighted by Comet Red scratch marks the forefoot, while Flywire cables support the fit. Underfoot, the two-tone midsole houses Zoom Air in the forefoot for cushioning.",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-Protro-Bruce-Lee-Product.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "Del Sol/Metallic Silver-Comet Red-Black",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 Protro Undefeated What If Pack",
        "price": 390,
        "description": "Part of the What If pack, the Undefeated x Zoom Kobe 5 Protro 'What If Pack' Special Box was designed with the help of the Los Angeles retailer. Inspired by the 1996 NBA Draft, the first shoe looks to the 12 teams that passed on Kobe Bryant that year, incorporating those teams' colors on its construction. The second pays tribute to the team that actually drafted him, the Charlotte Hornets. Metallic gold hits throughout both shoes give the nod to his five titles.",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-Undefated-What-If-Pack-Product.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "Multi-Color/Multi-Color",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 Protro 5 Rings (2020)",
        "price": 150,
        "description": "The Zoom Kobe 5 Protro '5 Rings' pays tribute to Kobe Bryant's championship pedigree with this 2020 release, bringing back a 2010 colorway. The shoe's Los Angeles Lakers-style Concord and Midwest Gold upper features a series of graphics thorughout its construction, all based around the number five. Underfoot, the same two colors mark the gradient midsole, which houses forefoot and heel Zoom Air for cushioning.",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-Protro-5-Rings-Product.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "Concord/Midwest Gold",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 Protro 2K Gamer Exclusive",
        "price": 150,
        "description": "Made available for purchase to players who completed an in-game challege in NBA 2K20, the NBA 2K20 x Kobe 5 Protro 'Chaos Alternate' Gamer Exclusive updates the Kobe 5 'Chaos.' The shoe's upper appears largely similar to its predecessor, although the grey overlays replace the former's white finish. Flywrie cables support the fit, while Volt and iridescent purple accent the look throughout. Underfoot, Air Zoom Turbo provides cushioning.",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-Protro-2K-Gamer-Exclusive-Product.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "Black/Cyber-Dark Grey",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 Protro Bruce Lee Alternate",
        "price": 150,
        "description": "Drawing from a 2010 colorway, the Zoom Kobe 5 Protro 'Alternate Bruce Lee' released in November 2020. A more subdued colorway than its predecessor, the shoe's upper appears primarily in black and white, with Comet Red on the Swoosh outline and scratch marks at the forefoot. A touch of yellow highlights the heel and heel branding, while underfoot, the midsole incorporates Zoom Air in the forefoot.",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-Protro-Bruce-Lee-Alternate-Product",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "White/Black-University Red-Varsity Maize",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 Protro Big Stage/Parade",
        "price": 150,
        "description": "Drawing from the shoe Kobe Bryant wore while winning his fifth and final NBA title, the Kobe 5 Protro 'Big Stage/Parade' 2020 released in February 2020. The look draws from the 'Home' and 'Away' editions of the Kobe 5 'Big Stage,' also borrowing graphics from the 'Parade' PE. Finished in white and meatallic gold, the shoe is cushioned underfoot by Air Zoom Turbo.",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-Protro-Big-Stage-Parade-PE-Product.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "White/Metallic Gold-Black",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 Protro Lakers",
        "price": 150,
        "description": "Releasing for Mamba Week to celebrate Kobe Bryant's legacy, the Zoom Kobe 5 Protro '5x Champ' features inspiration from the championship jackets Bryant received after winning his second and third NBA titles. Built with patent leather, the upper sports a Los Angeles Lakers mix of Court Purple and University Gold, with black throughout. The custom sockliner sports an LA theme.",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-Protro-Lakers-Product.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "Court Purple/University Gold-Black-White",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 Protro Chaos",
        "price": 160,
        "description": "Commemorating its 10th anniversary, the Nike Zoom Kobe 5 Protro resurfaced in December 2019 with its homage to DC Comics supervillain, the Joker. This 'Chaos' variant calls to mind the character's signature suit in a multicolored, mixed-material upper with eye-catching lizard skin textures, speckled laces, and a robust toe cap. Neon green branding hints at the charatcer's hair. The sneaker sports a splattered midsole and vivid rubber outsole.",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-Protro-Chaos-Product.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "White/Cyber-Purple-Red",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 Protro EYBL Girls (2020)",
        "price": 150,
        "description": "Part of a collection that released for Mamba Week, the Zoom Kobe 5 Protro 'EYBL' dropped in August 2020. Inspired by Greek mythology, the shoe's synthetic upper includes a scaly texture modeled after Medusa. The left tongue sports an EYBL logo, with Kobe branding on the right shoe. The collar lining and heel accent the look, while underfoot, Zoom in the midsole provides cushioning.",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-Protro-EYBL-Forest-Green-2020-Product.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "Forest Green/Metallic Red Bronze-Speed Yellow-Forest Green",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 Protro Zebra PE",
        "price": 150,
        "description": "The Zoom Kobe 5 Protro 'DeMar DeRozan' PE is a PE colorway made for San Antonio's DeMar DeRozan. The shoe's neutral look draws from the team's colors, built with lightweight synthetic and acccented by checkerboard and zebra patterns. A black Swoosh and heel counter provide contrast, with the latter also included for stability, while Zoom Air underfoot provides cushioning.",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-PE-Zebra-Product.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "Wolf Grey/White-Black",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 Protro PJ Tucker",
        "price": 150,
        "description": "The P.J. Tucker x Zoom Kobe 5 Protro PE is a special colorway made for the NBA player. The shoe's upper is built with lightweight synthetic, complemented by tonal animal prints throughout. Flywire cables support the fit, while red mesh on the collar accents the design. Kobe Bryant's signature marks the heel counter, and the Swoosh branding includes a dot matrix-style design.",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-Protro-PJ-Tucker-Product.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "Particle Grey/Light Cream-Sail-White",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 Prelude (Finals MVP)",
        "price": 150,
        "description": "Part of Nike's Prelude Pack, the Zoom Kobe 5 'Prelude' features a pop art-inspired colorway that celebrates Kobe Bryant's impact on popular culture. Featuring a colorful upper that gives the impression of being painted-on, the vibrant design is supported by Flywire cables. The gold Swoosh gives the nod to the championship and Finals MVP that Bryant won while wearing the shoe, while the outsole is finished with a glow-in-the-dark application.",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-Prelude-Finals-MVP-Product.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "University Gold/Metallic Gold-Gamma Blue",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 Bruce Lee",
        "price": 150,
        "description": "The Zoom Kobe 5 'Bruce Lee",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-Bruce-Lee-Product.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "Del Sol/Black-Varsity Red",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 Protro EYBL (2020)",
        "price": 150,
        "description": "Nike Kobe 5",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-Protro-EYBL-2020.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "Multi-Color/Black-Orange",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 Miles Davis",
        "price": 155,
        "description": "Paying tribute to the legendary jazz trumpeter, the Zoom Kobe 5 'Miles Davis' emerges with a blue look throughout its performance basketball construction. Built with synthetic leather, the shoe's upper is supported by heat-bonded overlays, with crisscrossing Flywire cables securing the fit. Underfoot, Zoom Air in the forefoot and heel of the injection-molded phylon midsole provides cushioning, giving way to a heartbeat-style traction pattern on the rubber outsole.",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-Miles-Davis.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "Photo Blue/Black-White",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 Black Mamba Collection Fade to Black",
        "price": 150,
        "description": "Dropping in 2016 as part of Nike’s ‘Fade to Black’ collection that celebrates Kobe Bryant’s final NBA season",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-Fade-To-Black-Product.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "Tumbled Grey/Tumbled Grey",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 Lakers",
        "price": 155,
        "description": "Giving the nod to the only NBA franchise Kobe Bryant played for",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-Lakers.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "Black/Del Sol-Varsity Purple",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 Del Sol",
        "price": 155,
        "description": "Nike Kobe 5",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-Del-Sol-Product.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "Black/White-Del Sol",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Zoom Kobe 5 Protro Kay Yow",
        "price": 150,
        "description": "Nike Kobe 5",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Zoom-Kobe-5-Protro-Kay-Yow.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "White/Metallic Silver",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 Ink",
        "price": 155,
        "description": "Nike Kobe 5",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-Ink.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "Ink/Metallic Silver-Black-Ice",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 POP Away",
        "price": 150,
        "description": "Nike Kobe 5",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-POP-Away-Product.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "Black/Chrome-Del Sol-Varsity Purple",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 All-Star",
        "price": 150,
        "description": "Made for Kobe Bryant for the 2010 NBA All-Star Game",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-All-Star-Product.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "Daring Red/Black",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 USA",
        "price": 150,
        "description": "The Zoom Kobe 5 'USA' is a performance basketball shoe with a patriotic look. The shoe's upper features a synthetic construction",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-USA.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "White/Obsidian-Sport Red",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 Lower Merion Aces (Away)",
        "price": 150,
        "description": "The Nike Zoom Kobe 5 ‘Lower Merion Aces’ pays homage to Kobe Bryant’s high school alma mater. Finished in grey and silver with accents in the school’s signature burgundy coloring",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-Lower-Merion-Away.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "Metallic Silver/Team Red-White",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe Aston Martin Pack V/Hyperdunk",
        "price": 300,
        "description": "The 2010 Kobe ‘Aston Martin Pack’ celebrates a viral Nike ad from two years earlier",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-Aston-Martin.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "Anthracite/Black-Sail",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 5 Rings (2010)",
        "price": 150,
        "description": "The Zoom Kobe 5 'Rings' celebrates Kobe Bryant's fifth NBA title with the Los Angeles Lakers. The shoe's upper appears primarily in purple",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-5-Rings-Product.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "Midwest Gold/Concord",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 USC Trojans",
        "price": 155,
        "description": "Nike Kobe 5",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-USC-Trojans.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "Varsity Crimson/University Gold",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 Prelude (Finals MVP) (GS)",
        "price": 150,
        "description": "Nike Kobe 5",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-Prelude-Finals-MVP-Product.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "University Gold/Metallic Gold-Black",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 Dark Knight",
        "price": 150,
        "description": "The Zoom Kobe 5 ‘Dark Knight’ shows off a subdued color scheme inspired by the 2008 Christopher Nolan film of the same name. The low-top’s black synthetic upper is accented with a heat-welded overlay in Neptune Blue",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-Dark-Knight.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "Black/Black-Dark Grey-Neptune Blue",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 Lakers",
        "price": 155,
        "description": "Nike Kobe 5",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-Lakers.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "White/Del Sol-Neutral Grey-Varsity Purple",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 Draft Day",
        "price": 150,
        "description": "Inspired by the infamous draft-day trade that sent the Charlotte Hornets' 13th overall pick to the Los Angeles Lakers in exchange for Vlade Divac",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-Draft-Day.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "White/Varsity Purple-Orion Blue",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 Big Stage Home",
        "price": 150,
        "description": "As the shoe’s name suggests",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-Big-Stage-Home-Product.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "White/Metallic Gold-White",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Zoom Kobe 5 Wolf Grey",
        "price": 150,
        "description": "Nike Kobe 5",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Zoom-Kobe-5-Wolf-Grey.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "Wolf Grey/Red/Black",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Zoom Kobe 5 Duke",
        "price": 150,
        "description": "Nike Kobe 5",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Zoom-Kobe-5-Duke.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "Varsity Royal/White-Black-Metallic Silver",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 China",
        "price": 150,
        "description": "Nike Kobe 5",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-China.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "Comet Red/White/Del Sol",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 Blackout",
        "price": 150,
        "description": "Nike Kobe 5",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-Blackout.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "Black/Black-Metallic Silver-Dark Grey",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Zoom Kobe 5 Inline",
        "price": 150,
        "description": "Nike Kobe 5",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Zoom-Kobe-5-Inline.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "White/Black/Varsity Purple-Del Sol",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 Joker (Chaos)",
        "price": 150,
        "description": "The Nike Zoom Kobe 5 ‘Chaos’ features a design inspired by Heath Ledger’s portrayal of the Joker in the second installment of Christopher Nolan’s Batman trilogy",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-Chaos-Product.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "Purple/Cyber-White-Black",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 Big Stage Away",
        "price": 150,
        "description": "Zoom Kobe 5 'Big Stage Away' puts an allover tribute to Kobe Bryant on the silhouette he wore during the 2010 NBA FInals",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-Big-Stage-Away.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "Black/Metallic Gold-White",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    },
    {
        "name": "Nike Kobe 5 Aston Martin Pack",
        "price": 150,
        "description": "Released in 2016",
        "currency": "USD",
        "image": "./public/assets/images/products/kobe5/Nike-Kobe-5-Aston-Martin.jpg",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "colorway": "Anthracite/Black-Sail",
        "metadata": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe5"
        }
    }
]

const createProduct = async (product: any, sizes: string[]): Promise<any> => {
    const stripeProduct = await stripe.products.create({
        name: product.name,
        description: product.description,
        default_price_data: {
            currency: product.currency,
            unit_amount_decimal: (parseInt(product.price) * 100).toString(),
        },
        images: [product.image],
        shippable: product.shippable,
        statement_descriptor: product.statement_descriptor,
        metadata: {
            brand: product.metadata.brand,
            category: product.metadata.category,
            collection: product.metadata.collection,
            type: "collectible",
            sizes: sizes.join(','),
        },
        // attributes: {
        //     size:
        // }
    });
    return stripeProduct;
};

const sizes_ = ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '12', '13', '14'];

for (const product of [kobe5Products]) {
    createProduct(product, sizes_)
        .then(product => {
            console.log(product);
            console.log(`${product.name}: ${product.id}`);
        })
        .catch(error => {
            console.error(error);

        })
}

