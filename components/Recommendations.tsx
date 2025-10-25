export default function Recommendations() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      image: "👩",
      quote: "MindFit completely transformed my approach to fitness. The AI-powered recommendations are spot-on, and I've never felt better!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Busy Professional",
      image: "👨",
      quote: "As someone with a hectic schedule, MindFit's efficient workout plans and meal prep guides have been a game-changer.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Yoga Instructor",
      image: "👩",
      quote: "The mental wellness features complement my yoga practice perfectly. It's more than just fitness—it's holistic health.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their lives with MindFit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-neutral-700"
            >
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4">{testimonial.image}</div>
                <div>
                  <div className="font-bold text-lg text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
            <div>
              <div className="text-4xl font-bold mb-2">Start Your Journey Today</div>
              <p className="text-blue-100 text-lg">Join our community and transform your life</p>
            </div>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-bold text-lg whitespace-nowrap shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
