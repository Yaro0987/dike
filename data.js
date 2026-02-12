// ========== PORTFOLIO DATA ==========
// Complete project data with images, ratings, descriptions, and meta properties

const portfolioData = {
  meta: {
    title: "Emmanuel Okwuchukwu · AI Creative & Design Portfolio",
    description: "Creative Graphic Designer and AI Content Specialist. 5+ years experience in prompt engineering, visual design, and creative AI.",
    url: "https://dike-portfolio.netlify.app",
    image: "https://dike-portfolio.netlify.app/assets/dike.png",
    author: "Emmanuel Okwuchukwu"
  },
  
  projects: [
    {
      id: 1,
      title: "Aesthetic Institute",
      shortDesc: "Complete brand identity, social graphics, and AI-generated concepts. Reduced production time by 30%.",
      fullDescription: "A comprehensive rebranding project for Aesthetic Institute, a luxury skincare and wellness brand. The project involved creating a complete visual identity system including logo design, color palette, typography, packaging design, and social media templates. Leveraged Midjourney AI to generate unique pattern designs and visual concepts that were refined in Adobe Illustrator. The new brand identity increased social media engagement by 45% and reduced design production time by 30% through AI-assisted workflows.",
      category: "Brand Identity",
      year: "2023",
      rating: 4.8,
      icon: "brush",
      tags: ["ILLUSTRATOR", "FIGMA", "MIDJOURNEY", "BRANDING", "AI GENERATED"],
      images: [
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800",
        "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800",
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800",
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800"
      ],
      client: "Aesthetic Institute",
      role: "Lead Designer & AI Specialist",
      duration: "3 months",
      deliverables: [
        "Logo & Brand Guidelines",
        "Packaging Design",
        "Social Media Templates",
        "Website Mockups",
        "AI-Generated Pattern Library"
      ],
      results: [
        "30% reduction in production time",
        "45% increase in social engagement",
        "20+ brand assets created"
      ]
    },
    {
      id: 2,
      title: "AI Prompt Library",
      shortDesc: "Custom prompt engineering system for automated content generation. Trained 3 junior staff members.",
      fullDescription: "Developed a comprehensive prompt engineering system for automated content generation across multiple platforms including social media, blog posts, and email marketing. Created a categorized library of 200+ tested prompts optimized for ChatGPT, Midjourney, and DALL-E. Conducted training sessions for 3 junior staff members, enabling them to independently generate high-quality content. The system reduced content creation time by 50% while maintaining brand voice consistency.",
      category: "AI Development",
      year: "2024",
      rating: 5.0,
      icon: "smart_toy",
      tags: ["CHATGPT", "PROMPTING", "WORKFLOW", "TRAINING", "AUTOMATION"],
      images: [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800"
      ],
      client: "Internal Project",
      role: "AI Prompt Engineer & Trainer",
      duration: "2 months",
      deliverables: [
        "200+ Prompt Library",
        "Training Documentation",
        "Workflow Templates",
        "Quality Assurance Guide"
      ],
      results: [
        "50% faster content creation",
        "3 staff members trained",
        "Consistent brand voice"
      ]
    },
    {
      id: 3,
      title: "Portfolio Concept",
      shortDesc: "Responsive UX/UI design from Figma prototype to deployment. Focus on accessibility and conversion.",
      fullDescription: "Designed and developed a responsive portfolio website concept focusing on accessibility and conversion optimization. Created wireframes, high-fidelity mockups, and interactive prototypes in Figma. Implemented WCAG 2.1 AA accessibility standards including proper contrast ratios, keyboard navigation, and screen reader compatibility. The design achieved a 92% Lighthouse accessibility score and increased user engagement by 60% in user testing.",
      category: "UX/UI Design",
      year: "2024",
      rating: 4.5,
      icon: "web",
      tags: ["UX DESIGN", "FIGMA", "RESPONSIVE", "ACCESSIBILITY", "PROTOTYPING"],
      images: [
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800",
        "https://images.unsplash.com/photo-1586717791557-24f8013ac00e?w=800",
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800",
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800"
      ],
      client: "Personal Project",
      role: "UX/UI Designer & Developer",
      duration: "1.5 months",
      deliverables: [
        "Wireframes & User Flows",
        "High-Fidelity Mockups",
        "Interactive Prototype",
        "Accessibility Audit"
      ],
      results: [
        "92% Lighthouse accessibility score",
        "60% increase in user engagement",
        "Mobile-first responsive design"
      ]
    },
    {
      id: 4,
      title: "Social Media Campaign",
      shortDesc: "AI-generated visual content for 30-day Instagram campaign. 200% increase in follower engagement.",
      fullDescription: "Created a 30-day Instagram campaign for a lifestyle brand using AI-generated visuals and copy. Developed a consistent visual aesthetic using Midjourney prompts, then refined in Photoshop. Wrote engaging captions and hashtags optimized with ChatGPT. The campaign resulted in 200% increase in follower engagement and 500+ new followers.",
      category: "Social Media",
      year: "2023",
      rating: 4.7,
      icon: "campaign",
      tags: ["INSTAGRAM", "CONTENT CREATION", "MIDJOURNEY", "COPYWRITING"],
      images: [
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800",
        "https://images.unsplash.com/photo-1611162616305-c69b3037c7bb?w=800",
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800"
      ],
      client: "Lifestyle Brand",
      role: "Content Creator",
      duration: "1 month",
      deliverables: [
        "30 Instagram Posts",
        "Story Templates",
        "Hashtag Strategy",
        "Engagement Report"
      ],
      results: [
        "200% engagement increase",
        "500+ new followers",
        "15% conversion rate"
      ]
    }
  ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
}