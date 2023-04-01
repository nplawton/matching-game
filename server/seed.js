const { Pool } = require('pg');

const pool = require('./dbConn');

pool.query(`INSERT INTO moncard (mon_name, mon_img, descrip, matchFound, flipped) VALUES
    ('Aarakocra', 'https://www.dndbeyond.com/avatars/thumbnails/7/622/420/618/636286750209394240.png', 'Aarakocra are bird-like humanoids with feathers and a beak. Their hands have three fingers and a thumb, and they also have a pair of feathered wings. Aarakocra have lean legs ending in talons. Aarakocra look like large birds from below, until they land. Aarakocra have advantage on saving throws against lightning and thunder damage, as well as against spells or powers that manipulate air, such as gust of wind, wind wall, or an air elementals whirlwind power. Aarakocra have lean, lightweight bodies, typically 80 to 100 pounds. Their skeletons are hollow and fragile. Their wings anchor in a bony chest plate that provides some slight natural protection.', 'false', 'false'),
    ('Aboleth', 'https://www.dndbeyond.com/avatars/thumbnails/30761/774/1000/1000/638061093283829548.png', 'Aboleth underbellies were often orange-pink, while their topsides were typically sea-green. A little bit back from the head were four long tentacles, two sprouting from across each other on the top, and two more of the same on the underbelly. Their heads were roughly triangular-shaped, with a spherical, somewhat beak-like nose. Above the nose were their three eyes, each one set atop the other. Tendrils and a few shorter tentacles dangled from the bottom of the head. Four blue-black slime-secreting orifices lined the bottom of their bodies. Aboleth blood was green and thick, oozing like sap.', 'false', 'false'),
    ('Animated Object, Armor', 'https://www.dndbeyond.com/avatars/thumbnails/31312/506/1000/1000/638084408333616236.png', 'This empty steel shell clamors as it moves, heavy plates banging and grinding against one another like the vengeful spirit of a fallen knight. Ponderous but persistent, this magical guardian is almost always a suit of plate armor.', 'false', 'false'),
    ('Flying Sword', 'https://www.dndbeyond.com/avatars/thumbnails/30761/834/1000/1000/638061095632921781.png', 'Swords (Animated Object), are the most common weapons animated with magic. Axes, clubs, daggers, maces, spears, and even selfloading crossbows are also known to exist in animated object form.', 'false', 'false'),
    ('Rug of Smothering', 'https://www.dndbeyond.com/avatars/thumbnails/30761/845/1000/1000/638061095923531915.png', 'A Rug of Smothering (Animated Object), can be made in many different forms, from a finely woven carpet fit for a queen to a coarse mat in a peasants hovel.', 'false', 'false'),
    ('Ankheg', 'https://www.dndbeyond.com/avatars/thumbnails/30761/865/1000/1000/638061096692582271.png', 'An ankheg resembles an enormous many-legged insect, its long antennae twitching in response to any movement around it. Its legs end in sharp hooks adapted for burrowing and grasping its prey, and its powerful mandibles can snap a small tree in half.', 'false', 'false')
    ON CONFLICT (id) DO NOTHING`)
.then((data) => {
    console.log('Seed Data', data);
})
.catch((error) => {
    console.log('Insert rows failed', error);
})
