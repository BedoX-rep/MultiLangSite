import { 
  InsertProduct, 
  Product, 
  Testimonial, 
  InsertTestimonial,
  PRODUCT_CATEGORIES
} from "@shared/schema";

// Storage interface
export interface IStorage {
  getAllProducts(): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  getAllTestimonials(): Promise<Testimonial[]>;
  getTestimonial(id: number): Promise<Testimonial | undefined>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private products: Map<number, Product>;
  private testimonials: Map<number, Testimonial>;
  private currentProductId: number;
  private currentTestimonialId: number;

  constructor() {
    this.products = new Map();
    this.testimonials = new Map();
    this.currentProductId = 1;
    this.currentTestimonialId = 1;

    // Initialize with some sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample products
    const sampleProducts: InsertProduct[] = [
      {
        name: "Crystal Frame",
        price: "149.00",
        description: "Elegant crystal frame glasses with blue light filtering",
        imageUrl: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371",
        category: PRODUCT_CATEGORIES.ALL,
        rating: "4.5"
      },
      {
        name: "Montrose Glasses",
        price: "179.00",
        description: "Classic Montrose design with premium materials",
        imageUrl: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67",
        category: PRODUCT_CATEGORIES.MEN,
        rating: "4.0"
      },
      {
        name: "Amber Sunglasses",
        price: "129.00",
        description: "Stylish amber-tinted sunglasses with UV protection",
        imageUrl: "https://images.unsplash.com/photo-1577803645773-f96470509666",
        category: PRODUCT_CATEGORIES.WOMEN,
        rating: "5.0"
      },
      {
        name: "Eco Wood Frames",
        price: "199.00",
        description: "Sustainable wooden frames with premium lenses",
        imageUrl: "https://images.unsplash.com/photo-1612729875065-b9802e5a7c30",
        category: PRODUCT_CATEGORIES.LUXURY,
        rating: "4.5"
      },
      {
        name: "Urban Round",
        price: "159.00",
        description: "Contemporary round frames for the modern professional",
        imageUrl: "https://images.unsplash.com/photo-1633620251099-a60e4cb25450",
        category: PRODUCT_CATEGORIES.MEN,
        rating: "4.0"
      },
      {
        name: "Kids Protection",
        price: "89.00",
        description: "Durable and comfortable frames designed for children",
        imageUrl: "https://images.unsplash.com/photo-1589642380614-1a336c8709f2",
        category: PRODUCT_CATEGORIES.KIDS,
        rating: "4.8"
      }
    ];

    // Sample testimonials
    const sampleTestimonials: InsertTestimonial[] = [
      {
        text: "These glasses have changed how I work. The blue light filtering has eliminated my eye strain completely.",
        author: "Sarah Johnson",
        rating: 5,
        imageUrl: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      {
        text: "The virtual try-on feature saved me so much time. I found my perfect pair on the first try!",
        author: "Michael Chen",
        rating: 5,
        imageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      {
        text: "Outstanding quality and amazing customer service. My new glasses arrived perfectly fitted.",
        author: "Emma Rodriguez",
        rating: 5,
        imageUrl: "https://randomuser.me/api/portraits/women/29.jpg"
      }
    ];

    // Add products
    sampleProducts.forEach(product => this.createProduct(product));
    
    // Add testimonials
    sampleTestimonials.forEach(testimonial => this.createTestimonial(testimonial));
  }

  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    if (category === PRODUCT_CATEGORIES.ALL) {
      return this.getAllProducts();
    }
    
    return Array.from(this.products.values()).filter(
      product => product.category === category
    );
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const newProduct = { ...product, id };
    this.products.set(id, newProduct);
    return newProduct;
  }

  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async getTestimonial(id: number): Promise<Testimonial | undefined> {
    return this.testimonials.get(id);
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const newTestimonial = { ...testimonial, id };
    this.testimonials.set(id, newTestimonial);
    return newTestimonial;
  }
}

export const storage = new MemStorage();
