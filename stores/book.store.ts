export const useBookStore = defineStore('bookStore', {
  state: () => ({
    books: [
      {
        id: 'digital-natives',
        title: 'Parenting Digital Natives',
        author: 'Aubrey Richards',
        image: '/imgs/book/digital_natives.webp',
        description: `In today’s digital age, parenting has evolved into a complex balancing act. Parenting Digital Natives by Aubrey Richards offers practical insights and strategies to help you manage technology effectively while fostering healthy family connections.`,
        insights: [
          'Balancing Screen Time: Learn how to set realistic limits and create a balanced approach to screen time that supports both learning and well-being.',
          'Promoting Digital Literacy: Equip your children with the skills they need to navigate the digital world safely and responsibly.',
          'Building Strong Family Bonds: Discover ways to reconnect as a family, even in the midst of tech-driven lifestyles.',
          'Empowering Parental Guidance: Gain confidence in guiding your children through the challenges and opportunities of the digital era.',
        ],
        cta: 'Take the first step towards empowering your family in the digital age. Order Parenting Digital Natives today and start building a healthier, more connected home environment.'
      },
      {
        id: 'palm-tree',
        title: 'The Allure of The Oil Palm Tree',
        author: 'Aubrey Richards',
        image: '/imgs/book/palm_tree.webp',
        description: `Palm oil is everywhere — from your favorite snacks to cosmetics, and even biofuels. But how did this versatile ingredient become so ubiquitous? In The Allure of the Oil Palm Tree, Aubrey Richards takes readers on a journey through the rise of palm oil, exploring its origins, global influence, and the complex environmental and social issues it raises.

This book is more than just a story about an oil; it’s a deep dive into the economic, cultural, and ecological forces that have shaped our relationship with one of the world’s most controversial crops.`,
        insights: [
          'Historical Insight: Trace the journey of palm oil from its discovery in West Africa to its global dominance today.',
          'Environmental Impact: Understand the challenges and controversies surrounding palm oil production, including deforestation and biodiversity loss.',
          'Economic Powerhouse: Explore how palm oil became a cornerstone of international trade and development.',
          'Cultural Significance: Learn about the role of palm oil in various cuisines and traditions around the world.',
          'Sustainability Solutions: Discover emerging efforts to make palm oil production more sustainable and ethical.'
        ],
        benefits: [
          'Gain Clarity on a Complex Issue: Navigate the often-conflicting narratives surrounding palm oil with balanced, informed insights.',
          'Understand Global Interdependence: See how palm oil connects people, economies, and ecosystems across continents.',
          'Inspire Action: Equip yourself with knowledge to make more informed choices as a consumer and advocate for change.',
          'Appreciate Nature’s Gifts: Celebrate the remarkable properties of the oil palm tree while reflecting on its broader impact.'
        ],
        cta: 'Discover the true story behind one of the world’s most influential crops. Order The Allure of the Oil Palm Tree today and deepen your understanding of this global phenomenon.'
      },
      {
        id: 'mental-overload',
        title: 'A Practical Guide to Tackling Mental Overload and Creating Balance in Your Home',
        author: 'Helena Grant',
        image: '/imgs/book/mental_overload.webp',
        description: `In today’s fast-paced world, managing the demands of home, work, and family can feel overwhelming. Mental Overload and Creating Balance in Your Home by Helena Grant offers a step-by-step approach to breaking free from the cycle of stress, pressure, and exhaustion. Whether you’re juggling multiple responsibilities or simply looking to create a more peaceful environment, this book provides practical strategies to help you regain control and find balance.`,
        insights: [
          '9 Proven Steps to Transform Your Life: Discover actionable techniques to reduce mental clutter and simplify your daily routine.',
          'Personalized Strategies: Tailored advice to fit your unique lifestyle and challenges.',
          'Real-Life Examples: Inspiring stories and case studies that show how others have achieved balance.',
          'Mindfulness and Self-Care: Learn how to prioritize your well-being while managing household responsibilities.',
          'Tools for Long-Term Success: Techniques to maintain balance even during busy periods.'
        ],
        benefits: [
          'Stop Feeling Overwhelmed: Gain clarity on what truly matters and let go of unnecessary stress.',
          'Create a Calmer Home Environment: Build routines and systems that promote harmony for you and your family.',
          'Improve Relationships: Reduce tension and foster deeper connections with loved ones.',
          'Boost Productivity: Achieve more without feeling burned out.',
          'Enhance Overall Well-Being: Prioritize self-care and mental health as part of your daily life.'
        ],
        cta: 'Stop feeling overwhelmed and start creating a calmer, more balanced home. Order Mental Overload and Creating Balance in Your Home today and take the first step toward a healthier, more peaceful life.'
      }
    ]
  }),

  actions: {
    getBookById(id: string) {
      return this.books.find(book => book.id === id);
    }
  }
});
