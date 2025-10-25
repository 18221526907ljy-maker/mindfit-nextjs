export default function FeatureCarousel() {
  const features = [
    {
      icon: "💪",
      title: "AI-Powered Workouts",
      description: "Get personalized workout plans that adapt to your fitness level, goals, and progress in real-time."
    },
    {
      icon: "🥗",
      title: "Smart Nutrition",
      description: "Receive customized meal plans and nutrition advice tailored to your dietary preferences and fitness goals."
    },
    {
      icon: "🧘",
      title: "Mental Wellness",
      description: "Access guided meditation, stress management techniques, and mindfulness exercises for holistic health."
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description: "Monitor your fitness journey with detailed analytics, charts, and insights powered by AI."
    },
    {
      icon: "🎯",
      title: "Goal Setting",
      description: "Set achievable goals and get intelligent recommendations to help you stay motivated and on track."
    },
    {
      icon: "🤝",
      title: "Community Support",
      description: "Connect with like-minded individuals, share your progress, and get inspired by others' success stories."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive tools and features to help you achieve your health and fitness goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-gradient-to-br from-white to-blue-50 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-neutral-700"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
