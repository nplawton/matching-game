const { Pool } = require('pg');

const pool = require('./dbConn');

pool.query(`INSERT INTO moncard (mon_name, mon_image, dexcrip) VALUES
    ('Aarakocra', 'https://www.dndbeyond.com/avatars/thumbnails/7/622/420/618/636286750209394240.png', 'Aarakocra are bird-like humanoids with feathers and a beak. Their hands have three fingers and a thumb, and they also have a pair of feathered wings. Aarakocra have lean legs ending in talons. Aarakocra look like large birds from below, until they land. Aarakocra have advantage on saving throws against lightning and thunder damage, as well as against spells or powers that manipulate air, such as gust of wind, wind wall, or an air elementals whirlwind power. Aarakocra have lean, lightweight bodies, typically 80 to 100 pounds. Their skeletons are hollow and fragile. Their wings anchor in a bony chest plate that provides some slight natural protection.'),
    ('Aboleth', 'https://www.dndbeyond.com/avatars/thumbnails/30761/774/1000/1000/638061093283829548.png', 'Aboleth underbellies were often orange-pink, while their topsides were typically sea-green. A little bit back from the head were four long tentacles, two sprouting from across each other on the top, and two more of the same on the underbelly. Their heads were roughly triangular-shaped, with a spherical, somewhat beak-like nose. Above the nose were their three eyes, each one set atop the other. Tendrils and a few shorter tentacles dangled from the bottom of the head. Four blue-black slime-secreting orifices lined the bottom of their bodies. Aboleth blood was green and thick, oozing like sap.'),
    ('Animated Object, Armor', 'https://www.dndbeyond.com/avatars/thumbnails/31312/506/1000/1000/638084408333616236.png', 'This empty steel shell clamors as it moves, heavy plates banging and grinding against one another like the vengeful spirit of a fallen knight. Ponderous but persistent, this magical guardian is almost always a suit of plate armor.'),
    ('Animated Object, Flying Sword', 'https://www.dndbeyond.com/avatars/thumbnails/30761/834/1000/1000/638061095632921781.png', 'Swords are the most common weapons animated with magic. Axes, clubs, daggers, maces, spears, and even selfloading crossbows are also known to exist in animated object form.'),
    ('Animated Object, Rug of Smothering', 'https://www.dndbeyond.com/avatars/thumbnails/30761/845/1000/1000/638061095923531915.png', 'A rug of smothering can be made in many different forms, from a finely woven carpet fit for a queen to a coarse mat in a peasants hovel.'),
    ('Ankheg', 'https://www.dndbeyond.com/avatars/thumbnails/30761/865/1000/1000/638061096692582271.png', 'An ankheg resembles an enormous many-legged insect, its long antennae twitching in response to any movement around it. Its legs end in sharp hooks adapted for burrowing and grasping its prey, and its powerful mandibles can snap a small tree in half.'),
    ('Azer', 'https://www.dndbeyond.com/avatars/thumbnails/30761/873/1000/1000/638061096972302413.png', 'In appearance and manner, an azer resembles a male dwarf, but this is a facade. Beneath its metalliclooking skin, an azer is a being of fire , which outwardly manifests in its fiery hair and beard.'),
    ('Banshee', 'https://www.dndbeyond.com/avatars/thumbnails/30761/972/1000/1000/638061101973584758.png', 'Banshees appear as luminous, wispy forms that vaguely recall their mortal features. A banshees face is wreathed in a wild tangle of hair, its body clad in wispy rags that flutter and stream around it.'),
    ('Basilisk', 'https://www.dndbeyond.com/avatars/thumbnails/30761/974/1000/1000/638061102119934833.png', 'Basilisks had eight legs, which they crawled upon. Basilisks came in a variety of colors from dark gray to dark orange, although they also commonly had a dull brown body with a yellowish underbelly. Basilisks possessed a single row of bony spines that lined their backs and a few had a curved horn atop their noses. Basilisk eyes were, however, the most notable feature, glowing with a pale green light.'),
    ('Behir', 'https://www.dndbeyond.com/avatars/thumbnails/30761/978/1000/1000/638061102241924981.png', 'A behirs monstrous form resembles a combination of centipede and crocodile. Its scaled hide ranges from ultramarine to deep blue in color, fading to pale blue on its underside.'),
    ('Beholder', 'https://www.dndbeyond.com/attachments/thumbnails/3/918/250/209/636288206263978085.jpg', 'A beholders spheroid body levitates at all times, and its great bulging eye sits above a wide, toothy maw, while the smaller eyestalks that crown its body twist and turn to keep its foes in sight. When a beholder sleeps, it closes its central eye but leaves its smaller eyes open and alert.'),
    ('Beholder, Death Tyrant', 'https://vignette.wikia.nocookie.net/forgottenrealms/images/b/b6/245beholder5eundead.jpg/revision/latest?cb=20171011164609', 'A death tyrant appears as a massive, naked skull, with a pinpoint of red light gleaming in its hollow eye socket. With its eyestalks rotted away, ten spectral eyes hover above the creature and glare in all directions.'),
    ('Beholder, Spectator', 'https://www.dndbeyond.com/avatars/thumbnails/30761/998/1000/1000/638061102728373114.png', 'A spectator is a lesser beholder that is summoned from another plane of existence by a magical ritual, the components of which include four beholder eyestalks that are consumed by the rituals magic. Appropriately, a spectator has four eyes talks, two on each side of the wide eye at the center of its four-foot diameter body.'),
    ('Blight, Twig', 'https://www.dndbeyond.com/avatars/thumbnails/16/464/1000/1000/636376286997771487.png', 'Twig blights can root in soil, which they do when living prey are scarce. While rooted, they resemble woody shrubs. When it pulls its roots free of the ground to move, a twig blights branches twist together to form a humanoid-looking body with a head and limbs.'),
    ('Blight, Vine', 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/466/1000/1000/636376287271000215.png', 'Appearing as masses of slithering creepers, vine blights hide in undergrowth and wait for prey to draw near. By animating the plants a round them, vine blights entangle and hinder their foes before attacking.'),
    ('Blight, Needle', 'https://angrygolem-games.com/wp-content/uploads/2021/04/needle-blight.jpg', 'In the shadows of a forest, needle blights might be taken at a distance for shuffling, hunched humanoids. Up close, these creatures reveal themselves as horrid plants whose conifer-like needles grow across their bodies in quivering clumps.'),
    ('Bugbear', 'https://www.dndbeyond.com/avatars/thumbnails/31312/871/1000/1000/638084425511165687.png', 'Bugbears resemble hairy, feral goblins standing seven feet tall. They take their name from their noses and claws, which are similar to those of bears.'),
    ('Bugbear Chief', 'http://www.worldanvil.com/media/cache/cover/uploads/images/497a2de99d5cfb07107d77c61f65f082.jpg', 'Bugbears resemble hairy, feral goblins standing seven feet tall. They take their name from their noses and claws, which are similar to those of bears.'),
    ('Bulette', 'https://www.dndbeyond.com/avatars/thumbnails/30762/8/1000/1000/638061103017271419.png', 'Around the head and rear, this armor was a blue-brown color, while in-between the hue might range from gray-blue to blue-green. Areas around the eyes were slightly darkened, with the eyes themselves being a yellow color with blue-green pupils. A bulettes body was covered in thick, layered plates. Its head is bullet-shaped, similar to that of a shark, with a massive mouth. It has stumpy but powerful legs.'),
    ('Bullywug', 'https://www.aidedd.org/dnd/images/bullywug.jpg', 'Bullywugs have green, gray, or mottled yellow skin that shifts through shades of gray, green, and brown, allowing them to blend in with their surroundings.'),
    ('Cambion', 'https://www.aidedd.org/dnd/images/cambion.jpg', 'A cambion is the offspring of a fiend (usually a succubus or incubus) and a humanoid (usually a human). Cambions inherit aspects of both parents, but their horns, leathery wings, and sinewy tails are hallmarks of their otherworldly parentage.'),
    ('Carrion Crawler', 'https://www.aidedd.org/dnd/images/carrion-crawler.jpg', 'Carrion crawlers were large, pale yellow, and greenish aberrations whose appearance was akin to a three- to four-foot-long centipede. Crawlers possessed eight long tentacles protruding from the sides of their heads, allowing them to stun prey. Carrion crawlers also had two eye stalks, through which they could perceive their surroundings even in the darkest caverns. Additionally, carrion crawlers had a highly developed sense of smell.'),
    ('Centaur', 'https://www.dndbeyond.com/avatars/thumbnails/30762/233/1000/1000/638061114013567234.png', 'A centaur has the body of a great horse topped by a humanoid torso, head, and arms.'),
    ('Chimera', 'https://www.dndbeyond.com/avatars/thumbnails/30762/236/1000/1000/638061114170787382.png', 'A typical specimen has the hindquarters of a large goat, the forequarters of a lion, and the leathery wings of a dragon, along with the heads of all three of those creatures. The monster likes to surprise its victims, swooping down from the sky arid engulfing prey with its fiery breath before landing.'),
    ('Chuul', 'https://www.dndbeyond.com/avatars/thumbnails/30762/240/1000/1000/638061114295167448.png', 'Chuuls have been described as a horrible mix of crustacean, insect, and serpent, but most closely resembled an 8 feet tall yellow-green lobster, weighing around 650 pounds with four long legs, two large claws, a strong protective exoskeleton, a fan-like tail, and a mass of paralysis-causing tentacles around its mouth'),
    ('Deva', 'https://www.dndbeyond.com/avatars/thumbnails/30761/784/1000/1000/638061093601900776.png', 'Devas are angels that act as divine messengers or agents to the Material Plane, the Shadowfell, and the Feywild and that can assume a form appropriate to the realm they are sent to. A deva can take any shape, although it prefers to appear to mortals as an innocuous humanoid or animal. When circumstances require that it cast off its guise, a deva is a beautiful humanoid-like creature with silvery skin. Its hair and eyes gleam with an unearthly luster, and large feathery wings unfurl from its shoulder blades.'),
    ('Planetar', 'https://www.dndbeyond.com/avatars/thumbnails/30761/799/1000/1000/638061094132481081.png', 'Planetars are muscular and hairless and have opalescent green skin and white-feathered wings. They tower over most humanoids, brandishing immense swords with grace.'),
    ('Solar', 'https://www.dndbeyond.com/avatars/thumbnails/30761/809/1000/1000/638061094428241214.png', 'The Solar resembles a towering, powerfully built human with brilliant topaz eyes, silvery (or golden) skin, and gleaming white wings.')
    ON CONFLICT (id) DO NOTHING`)
.then((data) => {
    console.log('Seed Data', data);
})
.catch((error) => {
    console.log('Insert rows failed', error);
})
