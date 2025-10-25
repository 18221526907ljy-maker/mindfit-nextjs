export default function KnowledgeBase() {
  const articles = [
    {
      category: "Fitness",
      title: "Complete Guide to Building Muscle",
      description: "Learn the science-backed methods for effective muscle growth and strength training.",
      readTime: "8 min read"
    },
    {
      category: "Nutrition",
      title: "Meal Prep Basics for Beginners",
      description: "Master the art of meal preparation to save time and stay on track with your nutrition goals.",
      readTime: "6 min read"
    },
    {
      category: "Wellness",
      title: "Managing Stress Through Exercise",
      description: "Discover how regular physical activity can help reduce stress and improve mental health.",
      readTime: "5 min read"
    },
    {
      category: "Recovery",
      title: "The Importance of Rest Days",
      description: "Why rest and recovery are crucial components of any successful fitness program.",
      readTime: "7 min read"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Knowledge Base
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Expert articles and guides to help you make informed decisions about your health
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-neutral-700 hover:border-blue-500 dark:hover:border-blue-500"
            >
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-semibold">
                  {article.category}
                </span>
                <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                  {article.readTime}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">
                {article.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {article.description}
              </p>
              <button className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center gap-2">
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
