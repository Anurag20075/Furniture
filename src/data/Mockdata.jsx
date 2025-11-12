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
  name: "Luxury Floor-to-Ceiling Almirah",
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
}

];

export default mockProducts;
