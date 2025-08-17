import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Tag } from "lucide-react";

const JournalSection = () => {
  const articles = [
    {
      id: 1,
      title: "The Art of Mindful Travel: Finding Sanctuary in Movement",
      excerpt: "Discover how luxury travel can become a transformative practice for personal growth and inner peace.",
      image: "/api/placeholder/400/300",
      category: "Travel",
      readTime: "5 min read",
      date: "December 15, 2024"
    },
    {
      id: 2,
      title: "Creating Your Personal Aura: The Power of Signature Scents",
      excerpt: "Learn how to choose and layer fragrances that express your unique personality and elevate your presence.",
      image: "/api/placeholder/400/300",
      category: "Lifestyle",
      readTime: "4 min read",
      date: "December 12, 2024"
    },
    {
      id: 3,
      title: "Sacred Spaces: Designing a Home That Nurtures Your Soul",
      excerpt: "Transform your living space into a sanctuary with intentional design choices and meaningful objects.",
      image: "/api/placeholder/400/300",
      category: "Home & Design",
      readTime: "6 min read",
      date: "December 10, 2024"
    }
  ];

  return (
    <section className="section-padding bg-gradient-elegant">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-6 text-gradient-luxury">
            The Aura Journal
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in stories of inspiration, beauty, and intentional living. Our journal celebrates the art of luxury lifestyle and the women who embody it.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="card-luxury overflow-hidden hover-lift group animate-fade-in-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img
                  src="/api/placeholder/600/400"
                  alt="Featured article"
                  className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    Lifestyle
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    8 min read
                  </span>
                </div>
                <h3 className="text-display text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                  Elegance Redefined: The Modern Woman's Guide to Authentic Luxury
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Explore what it truly means to live luxuriously in today's world. From mindful consumption to creating meaningful experiences, discover how to cultivate authentic elegance that reflects your values and aspirations.
                </p>
                <Button variant="elegant" className="w-fit group">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="card-luxury overflow-hidden hover-lift group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-foreground">
                  {article.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                  <span>{article.date}</span>
                </div>
                
                <h3 className="text-display text-lg font-semibold mb-3 text-foreground line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="luxury" size="lg" className="group">
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JournalSection;