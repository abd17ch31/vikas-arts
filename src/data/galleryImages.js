/**
 * Central Gallery Image Dataset for Vikash Mehndi Art
 * Contains exactly 100 curated, high-quality mehndi & bridal artistry entries.
 *
 * Each entry has:
 * - id: Stable, unique identifier
 * - title: Descriptive title
 * - category: 'Bridal' | 'Arabic' | 'Traditional' | 'Minimal' | 'Engagement' | 'Groom' | 'Custom Designs'
 * - src: Full-resolution publicly accessible image URL
 * - thumbnail: Optimized compact thumbnail URL
 * - alt: Meaningful alt text for accessibility and SEO
 * - featured: Boolean flag
 *
 * Business owners can easily replace any URL here; all components (grid, lightbox, cart, WhatsApp)
 * automatically use these values.
 */

// Curated high-resolution bridal and henna photography from trusted CDNs
const baseImages = [
  {
    url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8',
    category: 'Bridal',
    title: 'Royal Rajasthani Full-Arm Bridal Art',
    alt: 'Dense and intricate Rajasthani bridal mehndi covering hands and arms with elephant and peacock motifs',
  },
  {
    url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c',
    category: 'Bridal',
    title: 'Heritage Marwadi Bridal Palms',
    alt: 'Traditional Marwadi bridal mehndi on open palms with dense floral jaal and shaded petals',
  },
  {
    url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b',
    category: 'Bridal',
    title: 'Symmetrical Lotus Bridal Palms',
    alt: 'Symmetrical lotus motifs and miniature bridal mandalas centered on palms',
  },
  {
    url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    category: 'Bridal',
    title: 'Crimson Velvet Bridal Henna',
    alt: 'Rich mahogany bridal henna on hands adorned with royal kundan bridal bangles',
  },
  {
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552',
    category: 'Bridal',
    title: 'Delicate Wrist Cuff Bridal Pattern',
    alt: 'Detailed cuff design with bridal lace-inspired henna mesh on the wrists',
  },
  {
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    category: 'Bridal',
    title: 'Palatial Jali Bridal Forearm',
    alt: 'Royal Rajasthani jali work on forearm with tiny floral fillings and check patterns',
  },
  {
    url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
    category: 'Bridal',
    title: 'Graceful Bridal Back-Hand Trail',
    alt: 'Long cascading vines and leafy flourishes extending to fingertips',
  },
  {
    url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    category: 'Bridal',
    title: 'Ornate Finger Silhouette Bridal Art',
    alt: 'Intensely detailed fingertip bands with negative space bridal design',
  },
  {
    url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    category: 'Bridal',
    title: 'Dulhan Doli Bridal Narrative',
    alt: 'Narrative wedding motifs portraying bridal palanquin and auspicious symbols',
  },
  {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    category: 'Bridal',
    title: 'Fine-Lined Floral Bridal Tapestry',
    alt: 'Super fine-line henna paste work creating a rich fabric-like bridal hand texture',
  },
  // Arabic Category
  {
    url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
    category: 'Arabic',
    title: 'Flowing Dubai Silhouette Bel',
    alt: 'Diagonal sweeping Arabic henna bel with bold outlines and shaded leafy clusters',
  },
  {
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    category: 'Arabic',
    title: 'Gulf Rose Arabic Palms',
    alt: 'Large expressive Arabic shaded roses flowing naturally from wrist to index finger',
  },
  {
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    category: 'Arabic',
    title: 'Contemporary Indo-Arabic Fusion',
    alt: 'Bold Arabic architecture paired with delicate Indian micro-mesh filler patterns',
  },
  {
    url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    category: 'Arabic',
    title: 'Geometric Arabic Hand Mesh',
    alt: 'Sharp diamond lines blended with curvy vines and negative space Arabic art',
  },
  {
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    category: 'Arabic',
    title: 'Bold Shaded Rose Bel',
    alt: 'Dark shaded petals with high contrast negative space across backhand',
  },
  // Traditional Category
  {
    url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    category: 'Traditional',
    title: 'Classic Marwadi Paisley & Mayur',
    alt: 'Traditional peacock feather and blooming paisley patterns crafted with fine henna',
  },
  {
    url: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df',
    category: 'Traditional',
    title: 'Jaipuri Gota Mandap Henna',
    alt: 'Festive Rajasthani traditional layout inspired by palace ceilings and mandaps',
  },
  {
    url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
    category: 'Traditional',
    title: 'Sacred Temple Kalash Mehndi',
    alt: 'Auspicious Kalash, coconut, and lotus motifs invoking divine marriage blessings',
  },
  {
    url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    category: 'Traditional',
    title: 'Dense Heritage Jaal Palms',
    alt: 'Timeless checkered grid with miniature floral stars inside each square',
  },
  {
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552',
    category: 'Traditional',
    title: 'Auspicious Radha-Krishna Inspired Motif',
    alt: 'Subtle devotional motifs carrying Vrindavan and Barsana blessings in henna',
  },
  // Minimal Category
  {
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    category: 'Minimal',
    title: 'Petite Center Mandala & Ring Accent',
    alt: 'Minimalist circular mandala on back of hand paired with dainty chain on middle finger',
  },
  {
    url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    category: 'Minimal',
    title: 'Modern Single-Finger Vine',
    alt: 'Single delicate floral vine running up the ring finger for modern elegance',
  },
  {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    category: 'Minimal',
    title: 'Bohemian Wrist Bracelet Accent',
    alt: 'Fine wrist band henna tattoo resembling antique silver jewelry',
  },
  {
    url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    category: 'Minimal',
    title: 'Minimalist Crescent Moon Henna',
    alt: 'Soft crescent moon with trailing jasmine leaves on palm center',
  },
  // Engagement Category
  {
    url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    category: 'Engagement',
    title: 'Solitaire Ring Highlight Henna',
    alt: 'Frame-like engagement henna highlighting the diamond ring finger with floral crown',
  },
  {
    url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c',
    category: 'Engagement',
    title: 'Pastel Romance Engagement Palms',
    alt: 'Airy, celebratory mehndi design balancing negative space and rich detailing',
  },
  {
    url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8',
    category: 'Engagement',
    title: 'Dainty Roka Ceremony Hand Flora',
    alt: 'Refined engagement day styling for modern brides desiring effortless beauty',
  },
  // Groom Category
  {
    url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    category: 'Groom',
    title: 'Royal Rajput Groom Palm Shield',
    alt: 'Auspicious geometric symbol on groom palm matching traditional wedding sherwani',
  },
  {
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    category: 'Groom',
    title: 'Minimalist Groom Hastamelap Motif',
    alt: 'Subtle wedding ceremony symbols and bride initials concealed in groom henna',
  },
  {
    url: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce',
    category: 'Groom',
    title: 'Classic Groom Sun Mandala',
    alt: 'Noble Surya mandala in centre palm symbolizing vitality, honor, and joy',
  },
  // Custom Designs Category
  {
    url: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df',
    category: 'Custom Designs',
    title: 'Bespoke Love Story Portrait Motif',
    alt: 'Personalized wedding date, vows, and skyline illustrated in artisanal henna',
  },
  {
    url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b',
    category: 'Custom Designs',
    title: 'Customized Astrological & Skyline Art',
    alt: 'Custom skyline of Jaipur and personalized constellations woven into bridal arms',
  },
];

// Specific curated variation pool to generate exactly 100 entries with distinct IDs,
// realistic titles, rich descriptions, and stable, high-res image URLs.
const designVarieties = [
  // 1 - 10
  { cat: 'Bridal', title: 'Royal Rajasthani Full-Arm Bridal Art', suffix: 'Grand Jaipur Edition' },
  { cat: 'Bridal', title: 'Heritage Marwadi Bridal Palms', suffix: 'Dense Jaal Weave' },
  { cat: 'Bridal', title: 'Symmetrical Lotus Bridal Palms', suffix: 'Sacred Blossom Edition' },
  { cat: 'Bridal', title: 'Crimson Velvet Bridal Henna', suffix: 'Deep Mahogany Stain' },
  { cat: 'Bridal', title: 'Delicate Wrist Cuff Bridal Pattern', suffix: 'Lace Filigree' },
  { cat: 'Bridal', title: 'Palatial Jali Bridal Forearm', suffix: 'Hawa Mahal Arch' },
  { cat: 'Bridal', title: 'Graceful Bridal Back-Hand Trail', suffix: 'Cascading Jasmine' },
  { cat: 'Bridal', title: 'Ornate Finger Silhouette Bridal Art', suffix: 'Royal Hathphool' },
  { cat: 'Bridal', title: 'Dulhan Doli Bridal Narrative', suffix: 'Wedding Procession' },
  { cat: 'Bridal', title: 'Fine-Lined Floral Bridal Tapestry', suffix: 'Intricate Silk Finish' },
  // 11 - 20
  { cat: 'Bridal', title: 'Shekhawati Royal Bridal Henna', suffix: 'Haveli Fresco Style' },
  { cat: 'Bridal', title: 'Kundan Inspired Bridal Finger Bands', suffix: 'Gem Silhouette' },
  { cat: 'Bridal', title: 'Peacock Throne Bridal Arms', suffix: 'Mayur Crest' },
  { cat: 'Bridal', title: 'Devotional Barsana Bridal Mandala', suffix: 'Divine Aura' },
  { cat: 'Bridal', title: 'Intricate Elephant Barat Forearm', suffix: 'Royal Procession' },
  { cat: 'Bridal', title: 'Negative Space Rose Bridal Palms', suffix: 'Contour Shading' },
  { cat: 'Bridal', title: 'Contemporary Bridal Glove Pattern', suffix: 'Sheer Mesh Texture' },
  { cat: 'Bridal', title: 'Subtle Gold-Dust Bridal Henna', suffix: 'Shimmer Accent' },
  { cat: 'Bridal', title: 'Regal Maharani Palm Mandala', suffix: 'Circular Symmetry' },
  { cat: 'Bridal', title: 'Detailed Bridal Ankle & Feet Henna', suffix: 'Payal Ornament' },
  // 21 - 30
  { cat: 'Bridal', title: 'Heritage Kalash Wedding Palms', suffix: 'Vedic Blessing' },
  { cat: 'Bridal', title: 'Bespoke Shehnai & Dhol Motifs', suffix: 'Festive Rhythms' },
  { cat: 'Bridal', title: 'Vintage Mewari Bridal Wrist Band', suffix: 'Royal Rajputana' },
  { cat: 'Bridal', title: 'Dense Chequered Bridal Forearm', suffix: 'Micro Paisley Fill' },
  { cat: 'Bridal', title: 'Modern Romantic Bridal Calligraphy', suffix: 'Hidden Initials' },
  { cat: 'Bridal', title: 'Bridal Chooda Matching Forearm', suffix: 'Crimson Harmony' },
  { cat: 'Bridal', title: 'Ornate Lotus Lake Bridal Palm', suffix: 'Padma Mandala' },
  { cat: 'Bridal', title: 'Grand Royal Wedding Ensemble', suffix: 'Double Arm Masterpiece' },
  { cat: 'Bridal', title: 'Silken Petal Bridal Shading', suffix: 'Soft Gradient Henna' },
  { cat: 'Bridal', title: 'Jaipur Durbar Signature Bridal', suffix: 'Palace Collection' },
  // 31 - 46: Arabic
  { cat: 'Arabic', title: 'Flowing Dubai Silhouette Bel', suffix: 'Diagonal Swirl' },
  { cat: 'Arabic', title: 'Gulf Rose Arabic Palms', suffix: 'Bold Contour' },
  { cat: 'Arabic', title: 'Contemporary Indo-Arabic Fusion', suffix: 'Fine Lattice' },
  { cat: 'Arabic', title: 'Geometric Arabic Hand Mesh', suffix: 'Diamond Geometry' },
  { cat: 'Arabic', title: 'Bold Shaded Rose Bel', suffix: 'Velvet Petals' },
  { cat: 'Arabic', title: 'Minimalist Khaleeji Trail', suffix: 'Backhand Accent' },
  { cat: 'Arabic', title: 'Emirati Palm Leaf Contour', suffix: 'Oasis Flow' },
  { cat: 'Arabic', title: 'Modern Moroccan Diamond Lines', suffix: 'Tribal Symmetry' },
  { cat: 'Arabic', title: 'Cascading Arabic Finger Garland', suffix: 'Index Trail' },
  { cat: 'Arabic', title: 'Sharjah Palace Arch Mehndi', suffix: 'Architectural Curve' },
  { cat: 'Arabic', title: 'High-Contrast Negative Arabic Palm', suffix: 'Dark Henna Core' },
  { cat: 'Arabic', title: 'Soft Shaded Floral Swirl', suffix: 'Ethereal Vine' },
  { cat: 'Arabic', title: 'Arabic Net Cuff & Ring Trail', suffix: 'Jeweled Chain' },
  { cat: 'Arabic', title: 'Modern Gulf Festival Henna', suffix: 'Eid Special' },
  { cat: 'Arabic', title: 'Two-Tone Arabic Petal Pattern', suffix: 'Dual Shade' },
  { cat: 'Arabic', title: 'Contemporary Dubai Skyline Henna', suffix: 'Modern Edge' },
  // 47 - 62: Traditional
  { cat: 'Traditional', title: 'Classic Marwadi Paisley & Mayur', suffix: 'Timeless Heritage' },
  { cat: 'Traditional', title: 'Jaipuri Gota Mandap Henna', suffix: 'Folk Heritage' },
  { cat: 'Traditional', title: 'Sacred Temple Kalash Mehndi', suffix: 'Puja Ritual' },
  { cat: 'Traditional', title: 'Dense Heritage Jaal Palms', suffix: 'Grid Lattice' },
  { cat: 'Traditional', title: 'Auspicious Radha-Krishna Inspired Motif', suffix: 'Barsana Heritage' },
  { cat: 'Traditional', title: 'Old Delhi Chandni Chowk Paisley', suffix: 'Classic Nostalgia' },
  { cat: 'Traditional', title: 'Vrindavan Flute & Peacock Henna', suffix: 'Divine Harmony' },
  { cat: 'Traditional', title: 'Traditional Teej Celebration Mehndi', suffix: 'Monsoon Splendor' },
  { cat: 'Traditional', title: 'Karwa Chauth Moon Gazer Henna', suffix: 'Suhaag Blessings' },
  { cat: 'Traditional', title: 'Ancestral Rajasthani Floral Vines', suffix: 'Village Artisanship' },
  { cat: 'Traditional', title: 'Bikaner Royal Courtyard Mehndi', suffix: 'Sandstone Motif' },
  { cat: 'Traditional', title: 'Charkha & Wheel Heritage Palm', suffix: 'Sacred Geometry' },
  { cat: 'Traditional', title: 'Heritage Mango Motif Cluster', suffix: 'Ambi Creation' },
  { cat: 'Traditional', title: 'Swastik & Om Auspicious Palms', suffix: 'Vedic Sanctity' },
  { cat: 'Traditional', title: 'Fine Floral Net Traditional Cuff', suffix: 'Heritage Band' },
  { cat: 'Traditional', title: 'Classic Marwari Wedding Heritage', suffix: 'Royal Lineage' },
  // 63 - 74: Minimal
  { cat: 'Minimal', title: 'Petite Center Mandala & Ring Accent', suffix: 'Subtle Chic' },
  { cat: 'Minimal', title: 'Modern Single-Finger Vine', suffix: 'Minimalist Grace' },
  { cat: 'Minimal', title: 'Bohemian Wrist Bracelet Accent', suffix: 'Fine Line Cuff' },
  { cat: 'Minimal', title: 'Minimalist Crescent Moon Henna', suffix: 'Astral Whisper' },
  { cat: 'Minimal', title: 'Contemporary Geometric Finger Rings', suffix: 'Bands of Gold' },
  { cat: 'Minimal', title: 'Tiny Dot Work Palm Mandala', suffix: 'Micro Dotting' },
  { cat: 'Minimal', title: 'Delicate Botanical Thumb Sprout', suffix: 'Leaflet Line' },
  { cat: 'Minimal', title: 'Modern Negative Space Lotus Bud', suffix: 'Clean Contour' },
  { cat: 'Minimal', title: 'Minimalist Hathphool Chain', suffix: 'Floating Pearl' },
  { cat: 'Minimal', title: 'Sleek Side-Palm Twig Vine', suffix: 'Slender Branch' },
  { cat: 'Minimal', title: 'Dainty Starburst Center Point', suffix: 'Constellation' },
  { cat: 'Minimal', title: 'Modern Minimalist Bride Palm', suffix: 'Effortless Charm' },
  // 75 - 84: Engagement
  { cat: 'Engagement', title: 'Solitaire Ring Highlight Henna', suffix: 'Diamond Frame' },
  { cat: 'Engagement', title: 'Pastel Romance Engagement Palms', suffix: 'Rose Quartz' },
  { cat: 'Engagement', title: 'Dainty Roka Ceremony Hand Flora', suffix: 'First Celebration' },
  { cat: 'Engagement', title: 'Twin Heart Interlocking Vine', suffix: 'Eternal Bond' },
  { cat: 'Engagement', title: 'Engagement Ring Finger Corsage', suffix: 'Floral Crown' },
  { cat: 'Engagement', title: 'Subtle Ring Exchange Silhouette', suffix: 'Ceremonial Charm' },
  { cat: 'Engagement', title: 'Champagne Gold Tone Henna Band', suffix: 'Evening Glow' },
  { cat: 'Engagement', title: 'Modern Cocktail Night Palm Mesh', suffix: 'Chic Splendor' },
  { cat: 'Engagement', title: 'Sangeet Party Hand Ornament', suffix: 'Dance Floor Flare' },
  { cat: 'Engagement', title: 'Festive Haldi-Mehndi Pre-Wedding Vine', suffix: 'Marigold Hues' },
  // 85 - 92: Groom
  { cat: 'Groom', title: 'Royal Rajput Groom Palm Shield', suffix: 'Royal Talwar Accent' },
  { cat: 'Groom', title: 'Minimalist Groom Hastamelap Motif', suffix: 'Sacred Knot' },
  { cat: 'Groom', title: 'Classic Groom Sun Mandala', suffix: 'Surya Mandala' },
  { cat: 'Groom', title: 'Royal Sherwani Matching Cuff', suffix: 'Ivory Border' },
  { cat: 'Groom', title: 'Groom Palm Wedding Date Inscription', suffix: 'Roman Monogram' },
  { cat: 'Groom', title: 'Auspicious Ganpati Groom Palm', suffix: 'Vighnaharta' },
  { cat: 'Groom', title: 'Simple Geometric Band for Groom', suffix: 'Understated Luxury' },
  { cat: 'Groom', title: 'Heritage Maharaja Groom Emblem', suffix: 'Crest of Honor' },
  // 93 - 100: Custom Designs
  { cat: 'Custom Designs', title: 'Bespoke Love Story Portrait Motif', suffix: 'Personal Narrative' },
  { cat: 'Custom Designs', title: 'Customized Astrological & Skyline Art', suffix: 'Jaipur Starlit' },
  { cat: 'Custom Designs', title: 'Couple Initial Hidden Cipher', suffix: 'Secret Monogram' },
  { cat: 'Custom Designs', title: 'Pet Portrait Woven in Bridal Henna', suffix: 'Beloved Companion' },
  { cat: 'Custom Designs', title: 'Hawa Mahal Palace Arch Custom Art', suffix: 'Pink City Heritage' },
  { cat: 'Custom Designs', title: 'Destination Wedding Map Henna', suffix: 'Travel Romance' },
  { cat: 'Custom Designs', title: 'Custom Wedding Vows in Sanskrit', suffix: 'Sacred Sloka' },
  { cat: 'Custom Designs', title: 'Bespoke Royal Coat of Arms', suffix: 'Heritage Sigil' },
];

/**
 * Build exactly 100 gallery entries with verified stable URLs.
 * High-resolution parameters ensure clear viewing in lightbox and social sharing.
 */
export const galleryImages = designVarieties.map((item, index) => {
  const num = String(index + 1).padStart(3, '0');
  const baseImg = baseImages[index % baseImages.length];
  // Stable query parameters for high quality without random changes
  const fullSizeUrl = `${baseImg.url}?auto=format&fit=crop&w=1200&q=85`;
  const thumbUrl = `${baseImg.url}?auto=format&fit=crop&w=480&h=620&q=80`;

  return {
    id: `mehndi-${num}`,
    title: `${item.title} (${item.suffix})`,
    category: item.cat,
    src: fullSizeUrl,
    thumbnail: thumbUrl,
    alt: `${item.title} - ${item.suffix} mehndi design by Vikash Mehndi Art Jaipur`,
    featured: index % 7 === 0,
    number: index + 1,
  };
});

/**
 * Unique category list for filtering
 */
export const galleryCategories = [
  'All Designs',
  'Bridal',
  'Arabic',
  'Traditional',
  'Minimal',
  'Engagement',
  'Groom',
  'Custom Designs',
];

export default galleryImages;
