import { Cat } from "lucide-react";

const mockProducts = [
  // Modular Kitchens
  {
    id: 1,
    name: "Premium Modular Kitchen Set",
    category: "Modular Kitchen",
    customizable: true,
    bestSeller: true,
    description: "Customizable Cabinets | Soft-Close Drawers | Elegant Finish | Space-Optimized Design",
    material: "Engineered Wood & Granite",
    olors: ["walnut", "white", "grey", "beige"],
    image: {
      "src": "/Kitchen/1.jpeg"
    }
  },
  {
    id: 2,
    name: "L-Shaped Modular Kitchen",
    // price: "On Request",
    category: "Modular Kitchen",
    customizable: true,
    bestSeller: true,
    description: "Perfect for corner spaces | Matte Finish | Ample Storage | Soft-Close Hinges",
    material: "Marine Plywood & Quartz Top",
    colors: ["walnut", "white", "grey", "beige"],
    image: {
      "src": "/Kitchen/2.jpeg"
    }
  },
  {
    id: 3,
    name: "U-Shaped Modular Kitchen",
    // price: "On Request",
    category: "Modular Kitchen",
    customizable: true,
    bestSeller: true,
    description: "360° Utility | Durable Countertops | Under-Cabinet Lighting | Modern Aesthetics",
    material: "MDF with Laminate Finish",
    colors: ["teak", "ivory", "charcoal"],
    image: {
      "src": "/Kitchen/3.jpeg"
    }
  },
  {
    id: 4,
    name: "Parallel Modular Kitchen",
    // price: 999.99,
    category: "Modular Kitchen",
    customizable: true,
    bestSeller: false,
    description: "Dual Counter Layout | Efficient Workflow | Elegant Backsplash | LED Task Lighting",
    material: "Solid Wood & Acrylic",
    colors: ["ash grey", "white oak", "black"],
    image: {
      "src": "/Kitchen/4.jpeg"
    }
  },
  {
    id: 5,
    name: "Island Modular Kitchen",
  //  price: "On Request",
    category: "Modular Kitchen",
    customizable: true,
    bestSeller: true,
    description: "Central Island Counter | Built-in Storage | Modern Aesthetic | Great for Open Spaces",
    material: "Teak Wood & Quartz Stone",
    colors: ["natural wood", "white", "stone grey"],
    image: {
      "src": "/Kitchen/5.jpeg"
    }
  },
  {
    id: 6,
    name: "Straight Modular Kitchen",
    // price: "On Request",
    category: "Modular Kitchen",
    customizable: true,
    bestSeller: false,
    description: "Minimalist Layout | Space Saving | Perfect for Apartments | Gloss Finish",
    material: "MDF with Acrylic Coating",
    colors: ["white", "beige", "grey"],
    image: {
      "src": "/Kitchen/6.jpeg"
    }
  },
  {
    id: 7,
    name: "Compact Modular Kitchen",
    // price: "On Request",
    category: "Modular Kitchen",
    customizable: true,
    bestSeller: false,
    description: "Smart Space Design | Ideal for Small Homes | Durable & Stylish Cabinets",
    material: "Pre-laminated Particle Board",
    colors: ["cream", "walnut", "light grey"],
    image: {
      "src": "/Kitchen/7.jpeg"
    }
  },
  {
    id: 8,
    name: "Classic Wooden Modular Kitchen",
    // price: "On Request",
    category: "Modular Kitchen",
    customizable: true,
    bestSeller: true,
    description: "Traditional Wooden Design | Warm Finish | Long-lasting Durability",
    material: "Solid Sheesham Wood",
    colors: ["mahogany", "walnut", "oak"],
    image: {
      "src": "/Kitchen/8.jpeg"
    }
  },
  {
    id: 9,
    name: "Modern Glossy Modular Kitchen",
    // price: "On Request",
    category: "Modular Kitchen",
    customizable: true,
    bestSeller: true,
    description: "High Gloss Finish | Soft Touch Panels | Minimal Handles | Modern Look",
    material: "Acrylic & Marine Plywood",
    colors: ["white", "navy blue", "charcoal black"],
    image: {
      "src": "/Kitchen/9.jpeg"
    }
  },
  {
    id: 10,
    name: "Industrial Style Modular Kitchen",
    // price: "On Request",
    category: "Modular Kitchen",
    customizable: true,
    bestSeller: false,
    description: "Metallic Accents | Concrete Finish | Open Shelving | Urban Look",
    material: "Metal Frame & Laminated Boards",
    colors: ["concrete grey", "black", "rust brown"],
    image: {
      "src": "/Kitchen/10.jpeg"
    }
  },
  {
    id: 11,
    name: "Scandinavian Modular Kitchen",


    // price: 1249.99,
    category: "Modular Kitchen",
    customizable: true,
    bestSeller: true,
    description: "Natural Tones | Bright Interiors | Minimal Design | Compact Storage",
    material: "Birch Wood & Quartz Counter",
    colors: ["white", "light wood", "grey"],
    image: {
      "src": "/Kitchen/11.jpeg"
    }
  },
  {
    id: 12,
    name: "Luxury Modular Kitchen Set",
    // price: 1799.99,
    category: "Modular Kitchen",
    customizable: true,
    bestSeller: true,
    description: "Top-tier Finish | Integrated Appliances | Soft-Close Drawers | Premium Look",
    material: "High Gloss MDF & Granite Countertop",
    colors: ["white gold", "cream", "charcoal"],
    image: {
      "src": "/Kitchen/12.jpeg"
    }
  },
{
  id: 13,
  name: "Modern TV Cabinet",
  // price: 1799.99,
  category: "TV Cabinet",
  customizable: true,
  bestSeller: true,
  description: "Wall-mounted unit with storage | Sleek modern design | Fits up to 75-inch TV | Hidden cable management",
  material: "Engineered Wood & Matte Laminate Finish",
  colors: ["walnut", "white oak", "charcoal black"],
  image: {
    "src": "/Tv_Cabinet/1.jpeg"
  }
},
{
  id: 14,
  name: "Premium Floating TV Cabinet",
  // price: 1799.99,
  category: "TV Cabinet",
  customizable: true,
  bestSeller: true,
  description: "Floating wall design | Integrated LED lighting | Dual drawers for accessories | Modern minimalistic look",
  material: "High Gloss MDF with LED Accents",
  colors: ["white", "ash grey", "dark walnut"],
  image: {
    "src": "/Tv_Cabinet/2.jpeg"
  }
},
{
  id: 15,
  name: "Wooden Entertainment Unit",
  // price: 1799.99,
  category: "TV Cabinet",
  customizable: true,
  bestSeller: true,
  description: "Elegant wooden finish | Spacious shelving | Fits large screens | Timeless design",
  material: "Solid Wood with Veneer Finish",
  colors: ["teak", "mahogany", "natural oak"],
  image: {
    "src": "/Tv_Cabinet/3.jpeg"
  }
},
{
  id: 16,
  name: "Classic TV Stand with Storage",
  // price: 1799.99,
  category: "TV Cabinet",
  customizable: true,
  bestSeller: true,
  description: "Traditional style | Closed storage cabinets | Suitable for living and media rooms",
  material: "Engineered Wood & Glass Doors",
  colors: ["espresso", "white", "walnut"],
  image: {
    "src": "/Tv_Cabinet/4.jpeg"
  }
},
{
  id: 17,
  name: "Luxury LED TV Unit",
  // price: 1799.99,
  category: "TV Cabinet",
  customizable: true,
  bestSeller: true,
  description: "Integrated LED backlight | Soft-close drawers | Wall-mounted elegance | Contemporary design",
  material: "High Gloss MDF & Acrylic Front",
  colors: ["white gold", "smoke grey", "charcoal"],
  image: {
    "src": "/Tv_Cabinet/5.jpeg"
  }
},
{
  id: 18,
  name: "Compact TV Wall Unit",
  // price: 1799.99,
  category: "TV Cabinet",
  customizable: true,
  bestSeller: true,
  description: "Space-saving wall-mounted unit | Cable organizer | Floating shelves | Sleek aesthetic",
  material: "Matte Laminate Finish over Plywood",
  colors: ["ivory", "dark walnut", "ash grey"],
  image: {
    "src": "/Tv_Cabinet/6.jpeg"
  }
},
{
  id: 19,
  name: "Designer Media Console",
  // price: 1799.99,
  category: "TV Cabinet",
  customizable: true,
  bestSeller: true,
  description: "Minimalist open-shelf design | Metal frame support | Ideal for modern apartments",
  material: "Metal & MDF Combination",
  colors: ["black", "oak", "white"],
  image: {
    "src": "/Tv_Cabinet/7.jpeg"
  }
},
{
  id: 20,
  name: "Elegant Wall TV Unit",
  // price: 1799.99,
  category: "TV Cabinet",
  customizable: true,
  bestSeller: true,
  description: "Wall-mountable entertainment center | Multiple storage units | Gloss finish | Premium appeal",
  material: "Gloss Laminate MDF",
  colors: ["cream", "white", "charcoal"],
  image: {
    "src": "/Tv_Cabinet/8.jpeg"
  }
},
{
  id: 21,
  name: "Smart Modular TV Cabinet",
  // price: 1799.99,
  category: "TV Cabinet",
  customizable: true,
  bestSeller: true,
  description: "Modular sections | Smart device space | Adjustable shelves | Durable modern build",
  material: "Engineered Wood with Gloss Panels",
  colors: ["black", "white", "woodgrain"],
  image: {
    "src": "/Tv_Cabinet/9.jpeg"
  }
},
{
  id: 22,
  name: "Luxury Entertainment Wall Unit",
  // price: 1799.99,
  category: "TV Cabinet",
  customizable: true,
  bestSeller: true,
  description: "Luxury wall unit with lighting | Hidden storage | Smooth finish | Statement furniture piece",
  material: "High Gloss MDF & Glass Panels",
  colors: ["white", "walnut", "graphite"],
  image: {
    "src": "/Tv_Cabinet/10.jpeg"
  }
},
{
  id: 23,
  name: "Open Shelf TV Stand",
  // price: 1799.99,
  category: "TV Cabinet",
  customizable: true,
  bestSeller: true,
  description: "Open shelves for console and decor | Airy design | Perfect for compact spaces",
  material: "Solid Wood with Natural Finish",
  colors: ["honey", "natural oak", "dark walnut"],
  image: {
    "src": "/Tv_Cabinet/11.jpeg"
  }
},
{
  id: 24,
  name: "Contemporary TV Wall Set",
  // price: 1799.99,
  category: "TV Cabinet",
  customizable: true,
  bestSeller: true,
  description: "Wall-mounted set with closed cabinets | Smooth soft-close | Elegant geometry",
  material: "MDF & Matte Laminate Finish",
  colors: ["cream", "white gold", "graphite black"],
  image: {
    "src": "/Tv_Cabinet/12.jpeg"
  }
  },
   {
  id: 25,
  name: "Modern Sliding Door Almirah",
  // price: 1799.99,
  category: "Almirah",
  customizable: true,
  bestSeller: true,
  description: "Elegant sliding door design | Smooth track mechanism | Space-saving modern wardrobe",
  material: "Engineered Wood with Matte Laminate Finish",
  colors: ["walnut", "white oak", "charcoal"],
  image: {
    "src": "/Almirah/1.jpeg"
  }
},
{
  id: 26,
  name: "Luxury 3-Door Almirah",
  // price: 1799.99,
  category: "Almirah",
  customizable: true,
  bestSeller: true,
  description: "Three-door wardrobe with mirror panel | Soft-close hinges | Ample storage for clothes and accessories",
  material: "High Gloss MDF with Mirror Finish",
  colors: ["white", "cream", "grey"],
  image: {
    "src": "/Almirah/2.jpeg"
  }
},
{
  id: 27,
  name: "Premium Modular Wardrobe",
  // price: 1799.99,
  category: "Almirah",
  customizable: true,
  bestSeller: true,
  description: "Contemporary modular wardrobe | Customizable interior sections | Sleek minimalist design",
  material: "Matte Laminate MDF & Aluminium Handles",
  colors: ["beige", "cherry brown", "charcoal black"],
  image: {
    "src": "/Almirah/3.jpeg"
  }
},
{
  id: 28,
  name: "Classic Wooden Almirah",
  // price: 1799.99,
  category: "Almirah",
  customizable: true,
  bestSeller: true,
  description: "Traditional solid wood design | Sturdy structure | Ideal for timeless interiors",
  material: "Solid Sheesham Wood with Polished Finish",
  colors: ["mahogany", "teak", "walnut"],
  image: {
    "src": "/Almirah/4.jpeg"
  }
},
{
  id: 29,
  name: "Luxury Mirror Wardrobe",
  // price: 1799.99,
  category: "Almirah",
  customizable: true,
  bestSeller: true,
  description: "Full mirror doors | Spacious compartments | Elegant and functional for modern homes",
  material: "High Gloss MDF & Reflective Glass",
  colors: ["white", "grey", "smoke black"],
  image: {
    "src": "/Almirah/5.jpeg"
  }
},
{
  id: 30,
  name: "Compact Two-Door Almirah",
  // price: 1799.99,
  category: "Almirah",
  customizable: true,
  bestSeller: true,
  description: "Compact yet spacious design | Ideal for small bedrooms | Adjustable shelves",
  material: "Engineered Wood with Matte Finish",
  colors: ["ivory", "walnut", "oak"],
  image: {
    "src": "/Almirah/6.jpeg"
  }
},
{
  id: 31,
  name: "Designer Wardrobe with Drawers",
  // price: 1799.99,
  category: "Almirah",
  customizable: true,
  bestSeller: true,
  description: "Integrated drawers | Dual door design | Premium handles | Elegant storage solution",
  material: "MDF with High Gloss Polish",
  colors: ["cream", "white gold", "charcoal"],
  image: {
    "src": "/Almirah/7.jpeg"
  }
},
{
  id: 32,
  name: "Smart Modular Almirah",
  // price: 1799.99,
  category: "Almirah",
  customizable: true,
  bestSeller: true,
  description: "Modular wardrobe system | Adjustable racks | Efficient space utilization | Durable modern build",
  material: "Engineered Wood with PU Coating",
  colors: ["ash grey", "white", "brown"],
  image: {
    "src": "/Almirah/8.jpeg"
  }
},
{
  id: 33,
  name: "Luxury Hinged Door Wardrobe",
  // price: 1799.99,
  category: "Almirah",
  customizable: true,
  bestSeller: true,
  description: "Hinged door design | Spacious shelves and hanging space | Perfect for modern interiors",
  material: "MDF & Laminate Finish",
  colors: ["teak", "white", "cherry"],
  image: {
    "src": "/Almirah/9.jpeg"
  }
},
{
  id: 34,
  name: "Contemporary Glass Door Almirah",
  // price: 1799.99,
  category: "Almirah",
  customizable: true,
  bestSeller: true,
  description: "Glass panel doors | Built-in lighting | Stylish modern look | Ideal for display storage",
  material: "Glass & MDF Combination",
  colors: ["smoke grey", "white", "black"],
  image: {
    "src": "/Almirah/10.jpeg"
  }
},
{
  id: 35,
  name: "Elegant Wooden Wardrobe",
  // price: 1799.99,
  category: "Almirah",
  customizable: true,
  bestSeller: true,
  description: "Elegant wooden wardrobe with premium polish | Timeless design | Deep shelves and hanging rail",
  material: "Solid Wood with Veneer Coating",
  colors: ["brown", "natural oak", "honey"],
  image: {
    "src": "/Almirah/11.jpeg"
  }
},
{
  id: 36,
  name: "Luxury Floor-to-Fall Ceiling Almirah",
  // price: 1799.99,
  category: "Almirah",
  customizable: true,
  bestSeller: true,
  description: "Full-height almirah | Soft-close doors | Premium finish | Built-in organization options",
  material: "High Gloss MDF & Metal Handles",
  colors: ["white", "cream", "graphite black"],
  image: {
    "src": "/Almirah/12.jpeg"
  }
},
{
  id: 37,
  name: "Premium Wooden Main Door",
  // price: 1799.99,
  category: "Door",
  customizable: true,
  bestSeller: true,
  description: "Elegant solid wood main door | Carved detailing | Polished for durability and style",
  material: "Solid Teak Wood with Lacquer Finish",
  colors: ["walnut", "mahogany", "natural oak"],
  image: {
    "src": "/Door/1.jpeg"
  }
},
{
  id: 38,
  name: "Modern Flush Door",
  // price: 1799.99,
  category: "Door",
  customizable: true,
  bestSeller: true,
  description: "Minimalist flush design | Smooth matte texture | Perfect for contemporary interiors",
  material: "Engineered Wood with Laminate Finish",
  colors: ["white", "ash grey", "dark brown"],
  image: {
    "src": "/Door/2.jpeg"
  }
},
{
  id: 39,
  name: "Designer Panel Door",
  // price: 1799.99,
  category: "Door",
  customizable: true,
  bestSeller: true,
  description: "Classic panel design | Enhanced with veneer finish | Sturdy and elegant construction",
  material: "Hardwood Frame with Veneer Overlay",
  colors: ["oak", "cherry", "walnut"],
  image: {
    "src": "/Door/3.jpeg"
  }
},
{
  id: 40,
  name: "Glass Panel Door",
  // price: 1799.99,
  category: "Door",
  customizable: true,
  bestSeller: true,
  description: "Stylish glass panel inserts | Perfect for modern interiors | Light-enhancing design",
  material: "Wood & Tempered Glass Combination",
  colors: ["white", "smoke grey", "black"],
  image: {
    "src": "/Door/4.jpeg"
  }
},
{
  id: 41,
  name: "Luxury Carved Entrance Door",
  // price: 1799.99,
  category: "Door",
  customizable: true,
  bestSeller: true,
  description: "Intricately carved solid door | Premium polish | Designed for grand entrances",
  material: "Solid Wood with Handcrafted Carving",
  colors: ["teak", "mahogany", "rosewood"],
  image: {
    "src": "/Door/5.jpeg"
  }
},
{
  id: 42,
  name: "Contemporary Interior Door",
  // price: 1799.99,
  category: "Door",
  customizable: true,
  bestSeller: true,
  description: "Smooth sleek design | Ideal for bedrooms and offices | Durable and easy to maintain",
  material: "High-Density Fiberboard with Laminate",
  colors: ["cream", "charcoal", "white"],
  image: {
    "src": "/Door/6.jpeg"
  }
},
{
  id: 43,
  name: "Classic Double Door",
  // price: 1799.99,
  category: "Door",
  customizable: true,
  bestSeller: true,
  description: "Traditional double door style | Rich finish | Adds a royal aesthetic to any home",
  material: "Solid Wood with Gloss Polish",
  colors: ["walnut", "cherry brown", "golden teak"],
  image: {
    "src": "/Door/7.jpeg"
  }
},
{
  id: 44,
  name: "Matte Finish Door",
  // price: 1799.99,
  category: "Door",
  customizable: true,
  bestSeller: true,
  description: "Simple matte surface | Scratch-resistant coating | Suitable for all interiors",
  material: "Engineered Wood with PU Matte Coating",
  colors: ["ash grey", "white", "beige"],
  image: {
    "src": "/Door/8.jpeg"
  }
},
{
  id: 45,
  name: "Glass and Wood Fusion Door",
  // price: 1799.99,
  category: "Door",
  customizable: true,
  bestSeller: true,
  description: "Combination of frosted glass and wood | Adds light and style | Modern minimal look",
  material: "Tempered Glass & Hardwood Frame",
  colors: ["white", "smoke", "charcoal"],
  image: {
    "src": "/Door/9.jpeg"
  }
},
{
  id: 46,
  name: "Veneer Finish Interior Door",
  // price: 1799.99,
  category: "Door",
  customizable: true,
  bestSeller: true,
  description: "Rich veneer texture | Elegant tones | Great for bedrooms and study rooms",
  material: "Engineered Wood with Veneer Sheet",
  colors: ["walnut", "oak", "brown"],
  image: {
    "src": "/Door/10.jpeg"
  }
},
{
  id: 47,
  name: "Modern Sliding Door",
  // price: 1799.99,
  category: "Door",
  customizable: true,
  bestSeller: true,
  description: "Smooth sliding mechanism | Space-saving design | Ideal for wardrobes and partitions",
  material: "Aluminium Frame with Laminate Panel",
  colors: ["white", "grey", "black"],
  image: {
    "src": "/Door/11.jpeg"
  }
},
{
  id: 48,
  name: "Luxury Wooden Main Door",
  // price: 1799.99,
  category: "Door",
  customizable: true,
  bestSeller: true,
  description: "Heavy-duty main entrance door | Decorative moldings | Built for strength and elegance",
  material: "Solid Hardwood with PU Coating",
  colors: ["dark brown", "natural teak", "mahogany"],
  image: {
    "src": "/Door/12.jpeg"
  }
},
{
  id: 49,
  name: "Modern POP Fall Ceiling Design",
  // price: 1799.99,
  category: "Fall Ceiling",
  customizable: true,
  bestSeller: true,
  description: "Elegant POP false Fall Ceiling | Hidden lighting setup | Ideal for living and drawing rooms",
  material: "Gypsum Board & POP Finish",
  colors: ["white", "ivory", "light grey"],
  image: {
    "src": "/Celling/1.jpeg"
  }
},
{
  id: 50,
  name: "Wooden Panel Fall Ceiling",
  // price: 1799.99,
  category: "Fall Ceiling",
  customizable: true,
  bestSeller: true,
  description: "Premium wooden Fall Ceiling panels | Natural finish | Adds warmth to interiors",
  material: "Teak Veneer & MDF Panels",
  colors: ["teak", "walnut", "mahogany"],
  image: {
    "src": "/Celling/2.jpeg"
  }
},
{
  id: 51,
  name: "Luxury False Fall Ceiling with LED",
  // price: 1799.99,
  category: "Fall Ceiling",
  customizable: true,
  bestSeller: true,
  description: "Integrated LED strip lighting | Smooth gypsum finish | Perfect for modern interiors",
  material: "Gypsum Board & Aluminum Frame",
  colors: ["white", "warm white", "cream"],
  image: {
    "src": "/Celling/3.jpeg"
  }
},
// {
//   id: 52,
//   name: "Cove Lighting Fall Ceiling Design",
//   // price: 1799.99,
//   category: "Fall  Ceiling",
//   customizable: true,
//   bestSeller: true,
//   description: "Soft cove lighting edges | Sleek modern design | Enhances room ambiance",
//   material: "POP with Recessed Lighting",
//   colors: ["white", "light gold", "beige"],
//   image: {
//     "src": "/Celling/4.jpeg"
//   }
// },
// {
//   id: 53,
//   name: "Geometric Fall Fall Ceiling Pattern",
//   // price: 1799.99,
//   category: "Fall  Ceiling",
//   customizable: true,
//   bestSeller: true,
//   description: "Geometric false Fall Fall Ceiling layout | Eye-catching symmetry | Great for halls and offices",
//   material: "POP & MDF Combination",
//   colors: ["white", "cream", "grey"],
//   image: {
//     "src": "/Celling/5.jpeg"
//   }
// },
{
  id: 54,
  name: "Luxury Coffered Fall Fall Ceiling",
  // price: 1799.99,
  category: "Fall Ceiling",
  customizable: true,
  bestSeller: true,
  description: "Classic coffered Fall Ceiling | Wooden grid look | Elegant and timeless interior touch",
  material: "MDF Panels & Wooden Beams",
  colors: ["white", "dark walnut", "ivory"],
  image: {
    "src": "/Celling/6.jpeg"
  }
},
{
  id: 55,
  name: "Metallic Finish False Fall Ceiling",
  // price: 1799.99,
  category: "Fall Ceiling",
  customizable: true,
  bestSeller: true,
  description: "Sleek metallic surface | Reflective texture | Perfect for commercial and office interiors",
  material: "Metal Panels with Powder Coating",
  colors: ["silver", "grey", "bronze"],
  image: {
    "src": "/Celling/7.jpeg"
  }
},
{
  id: 56,
  name: "PVC Fall Ceiling Panels",
  // price: 1799.99,
  category: "Fall Ceiling",
  customizable: true,
  bestSeller: true,
  description: "Lightweight PVC panels | Moisture resistant | Suitable for kitchens and bathrooms",
  material: "PVC & Aluminum Trims",
  colors: ["white", "ivory", "light brown"],
  image: {
    "src": "/Celling/8.jpeg"
  }
},
{
  id: 57,
  name: "Minimal POP Fall Ceiling",
  // price: 1799.99,
  category: "Fall Ceiling",
  customizable: true,
  bestSeller: true,
  description: "Clean and minimal false Fall Ceiling | Smooth matte finish | Perfect for modern spaces",
  material: "POP Board with Matte Paint",
  colors: ["white", "cream", "off white"],
  image: {
    "src": "/Celling/9.jpeg"
  }
},
{
  id: 58,
  name: "Layered Fall Ceiling Design",
  // price: 1799.99,
  category: "Fall Ceiling",
  customizable: true,
  bestSeller: true,
  description: "Multi-layered design with light integration | Adds depth and drama to the Fall Ceiling",
  material: "Gypsum Board with LED Lighting",
  colors: ["white", "golden beige", "charcoal"],
  image: {
    "src": "/Celling/10.jpeg"
  }
},
{
  id: 59,
  name: "Wooden Beam Fall Ceiling",
  // price: 1799.99,
  category: "Fall Ceiling",
  customizable: true,
  bestSeller: true,
  description: "Exposed wooden beam design | Rustic appeal | Ideal for villas and living rooms",
  material: "Solid Wood Beams & MDF Base",
  colors: ["brown", "dark walnut", "natural oak"],
  image: {
    "src": "/Celling/11.jpeg"
  }
},
// {
//   id: 60,
//   name: "Luxury Gypsum Fall Ceiling with Chandelier Mount",
//   // price: 1799.99,
//   category: "Fall Ceiling",
//   customizable: true,
//   bestSeller: true,
//   description: "Premium false Fall Ceiling design with chandelier space | Perfect centerpiece for hall or dining area",
//   material: "Gypsum Board with Metal Support Frame",
//   colors: ["white", "cream", "light gold"],
//   image: {
//     "src": "/Celling/12.jpeg"
//   }
// },
{
  id: 61,
  name: "Modern Bedroom Set",
  // price: 1799.99,
  category: "Bedroom",
  customizable: true,
  bestSeller: true,
  description: "Complete modern bedroom setup | Includes bed, side tables & wardrobe | Sleek minimalist design",
  material: "Engineered Wood with Matte Laminate Finish",
  colors: ["walnut", "white", "charcoal"],
  image: {
    "src": "/Bedroom/1.jpeg"
  }
},
{
  id: 62,
  name: "Luxury King Size Bed",
  // price: 1799.99,
  category: "Bedroom",
  customizable: true,
  bestSeller: true,
  description: "Spacious king-size bed | Padded headboard | Elegant and comfortable sleeping experience",
  material: "Solid Wood Frame with Fabric Upholstery",
  colors: ["cream", "grey", "beige"],
  image: {
    "src": "/Bedroom/2.jpeg"
  }
},
{
  id: 63,
  name: "Contemporary Bedroom Interior",
  // price: 1799.99,
  category: "Bedroom",
  customizable: true,
  bestSeller: true,
  description: "Minimalist layout | Wall-mounted storage | Clean lines and modern aesthetics",
  material: "High Gloss MDF & Veneer Finish",
  colors: ["white", "light oak", "charcoal grey"],
  image: {
    "src": "/Bedroom/3.jpeg"
  }
},
{
  id: 64,
  name: "Premium Queen Bed with Side Tables",
  // price: 1799.99,
  category: "Bedroom",
  customizable: true,
  bestSeller: true,
  description: "Elegant queen bed with matching side tables | Soft-close drawers | Luxury feel for any room",
  material: "Engineered Wood & Leatherette Headboard",
  colors: ["brown", "ivory", "tan"],
  image: {
    "src": "/Bedroom/4.jpeg"
  }
},
{
  id: 65,
  name: "Wooden Bedroom Set",
  // price: 1799.99,
  category: "Bedroom",
  customizable: true,
  bestSeller: true,
  description: "Classic solid wood furniture | Warm natural tones | Long-lasting craftsmanship",
  material: "Sheesham Wood with Satin Finish",
  colors: ["teak", "walnut", "honey brown"],
  image: {
    "src": "/Bedroom/5.jpeg"
  }
},
{
  id: 66,
  name: "Luxury Upholstered Bed",
  // price: 1799.99,
  category: "Bedroom",
  customizable: true,
  bestSeller: true,
  description: "Soft fabric upholstered frame | Premium stitching | Adds elegance and comfort to your space",
  material: "Pine Wood & Padded Fabric Upholstery",
  colors: ["beige", "grey", "blue"],
  image: {
    "src": "/Bedroom/6.jpeg"
  }
},
{
  id: 67,
  name: "Designer Bedroom Wardrobe",
  // price: 1799.99,
  category: "Bedroom",
  customizable: true,
  bestSeller: true,
  description: "Spacious wardrobe with mirror panels | Adjustable shelving | Modern dual-tone design",
  material: "MDF with Gloss & Matte Finish Combo",
  colors: ["white", "charcoal", "cream"],
  image: {
    "src": "/Bedroom/7.jpeg"
  }
},
{
  id: 68,
  name: "Minimalist Bedroom Decor",
  // price: 1799.99,
  category: "Bedroom",
  customizable: true,
  bestSeller: true,
  description: "Clean, space-efficient setup | Focus on simplicity and comfort | Ideal for small apartments",
  material: "Engineered Wood with Matte Laminate",
  colors: ["white", "light grey", "ash brown"],
  image: {
    "src": "/Bedroom/8.jpeg"
  }
},
{
  id: 69,
  name: "Smart Modular Bedroom",
  // price: 1799.99,
  category: "Bedroom",
  customizable: true,
  bestSeller: true,
  description: "Integrated storage under bed | Modular wardrobe system | Perfect for compact homes",
  material: "MDF with Hydraulic Lift Bed Frame",
  colors: ["cream", "brown", "grey"],
  image: {
    "src": "/Bedroom/9.jpeg"
  }
},
{
  id: 70,
  name: "Elegant Wooden Bed Frame",
  // price: 1799.99,
  category: "Bedroom",
  customizable: true,
  bestSeller: true,
  description: "Sturdy frame with headboard | Natural wood finish | Crafted for comfort and durability",
  material: "Solid Oak Wood",
  colors: ["natural oak", "walnut", "dark brown"],
  image: {
    "src": "/Bedroom/10.jpeg"
  }
},
{
  id: 71,
  name: "Luxury Bedroom Interior with Lighting",
  // price: 1799.99,
  category: "Bedroom",
  customizable: true,
  bestSeller: true,
  description: "Warm lighting design | Custom wall paneling | Plush furnishings | Elegant ambiance",
  material: "High Gloss MDF & LED Integration",
  colors: ["cream", "white gold", "mocha"],
  image: {
    "src": "/Bedroom/11.jpeg"
  }
},
{
  id: 72,
  name: "Classic Bedroom Furniture Set",
  // price: 1799.99,
  category: "Bedroom",
  customizable: true,
  bestSeller: true,
  description: "Includes bed, wardrobe, and dresser | Traditional style | Rich finish and durable build",
  material: "Solid Wood with Veneer Polish",
  colors: ["mahogany", "teak", "walnut"],
  image: {
    "src": "/Bedroom/12.jpeg"
  }
},
{
  id: 73,
  name: "Modern Sliding Window",
  // price: 1799.99,
  category: "Window",
  customizable: true,
  bestSeller: true,
  description: "Smooth sliding glass window | Easy operation | Perfect for balconies and living rooms",
  material: "UPVC Frame with Toughened Glass",
  colors: ["white", "grey", "dark brown"],
  image: {
    "src": "/Window/1.jpeg"
  }
},
{
  id: 74,
  name: "Casement Window Design",
  // price: 1799.99,
  category: "Window",
  customizable: true,
  bestSeller: true,
  description: "Classic casement opening | Airtight sealing | Energy-efficient and durable design",
  material: "Aluminum Frame with Double-Glazed Glass",
  colors: ["silver", "white", "black"],
  image: {
    "src": "/Window/2.jpeg"
  }
},
{
  id: 75,
  name: "Bay Window with Seating",
  // price: 1799.99,
  category: "Window",
  customizable: true,
  bestSeller: true,
  description: "Elegant bay window with seating ledge | Adds charm and space | Perfect for bedrooms or lounges",
  material: "Hardwood Frame & Tempered Glass",
  colors: ["oak", "walnut", "white"],
  image: {
    "src": "/Window/3.jpeg"
  }
},
{
  id: 76,
  name: "Fixed Glass Window",
  // price: 1799.99,
  category: "Window",
  customizable: true,
  bestSeller: true,
  description: "Fixed-frame design for natural light | Ideal for scenic views | Low maintenance glass setup",
  material: "UPVC Frame with Laminated Glass",
  colors: ["white", "black", "grey"],
  image: {
    "src": "/Window/4.jpeg"
  }
},
{
  id: 77,
  name: "French Window Set",
  // price: 1799.99,
  category: "Window",
  customizable: true,
  bestSeller: true,
  description: "Elegant French-style windows | Full glass panels for light and openness | Adds luxury to interiors",
  material: "Teak Wood Frame with Clear Glass",
  colors: ["teak", "white", "cream"],
  image: {
    "src": "/Window/5.jpeg"
  }
},
{
  id: 78,
  name: "Sliding Window with Mosquito Net",
  // price: 1799.99,
  category: "Window",
  customizable: true,
  bestSeller: true,
  description: "Smooth dual-rail system | Built-in insect screen | Sturdy and stylish for modern homes",
  material: "Aluminum Frame & Mesh Panel",
  colors: ["black", "white", "grey"],
  image: {
    "src": "/Window/6.jpeg"
  }
},
];
export default mockProducts;