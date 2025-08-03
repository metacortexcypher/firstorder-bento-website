"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  emoji: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    title: "About First Order",
    emoji: "🚀",
    items: [
      {
        question: "What is First Order?",
        answer: "First Order is a private founder community where builders come together to share, connect, and build. We're creating a new world for founders — one based on creativity, support, and radical execution."
      },
      {
        question: "Why did you change from Frag Club to First Order?",
        answer: "Frag Club was where it all began. But we've outgrown the name. First Order marks a new identity — symbolic of starting fresh, breaking the old rules, and building from first principles."
      }
    ]
  },
  {
    title: "About Terminl",
    emoji: "🧠",
    items: [
      {
        question: "What is Terminl?",
        answer: "Terminl is our AI-powered community app. Every member gets a personal dashboard and prompt box. You simply type what you need — feedback, introductions, support — and Terminl connects you to the right people inside the community."
      },
      {
        question: "Is Terminl available to the public?",
        answer: "Not yet. We're currently onboarding early members through the website. You'll get access to the WhatsApp core group and early access to Terminl as we roll out the beta."
      },
      {
        question: "How does Terminl understand what I need?",
        answer: "Terminl uses custom-trained AI models to understand intent, context, and community dynamics. Whether you're looking for a D2C founder, a product designer, or someone to roast your landing page, it gets you."
      }
    ]
  },
  {
    title: "Membership",
    emoji: "👥",
    items: [
      {
        question: "Who is this for?",
        answer: "Builders. Early-stage founders. Indie hackers. Solo founders, wanna be entrepreneurs. Anyone building something real or want to build something and willing to help others do the same."
      },
      {
        question: "What happens after I join?",
        answer: "Once you fill the form, you'll be added to our WhatsApp community and flagged for early access to Terminl. We'll soon unify everything inside the app."
      },
      {
        question: "Is it free to join?",
        answer: "Yes, for now. Eventually, we might add a lightweight membership model to keep the community high-signal."
      }
    ]
  },
  {
    title: "Privacy & Trust",
    emoji: "🔐",
    items: [
      {
        question: "Is my data safe with Terminl?",
        answer: "Absolutely. We take privacy seriously. Your data is only used to improve your experience inside the community — never sold or shared."
      },
      {
        question: "How are recommendations generated?",
        answer: "We analyze your input prompts and match them with community member profiles using AI-driven prompt parsing and semantic matching. Nothing creepy — just smart routing."
      }
    ]
  },
  {
    title: "Community & Events",
    emoji: "🌍",
    items: [
      {
        question: "Do you host events or meetups?",
        answer: "Yes. We host spontaneous founder jam sessions, city meetups, and late-night build marathons. Sometimes it's an Airbnb full of laptops and white boarding. Other times, it's just good conversation over coffee or beers"
      },
      {
        question: "How is this community different from others?",
        answer: "We didn't start this community with a Notion doc or a playbook. It started from my late-night Reddit rants about how dead the startup scene felt in Hyderabad. People resonated, replied, and said, \"let's stay in touch.\" So we made a small group. 10 people became 800 in a month purely through word of mouth. That's when we hit pause.\n\nThis isn't a growth-hacked community. It's a group of founders who give a damn. No noise, no show-offs just builders showing up for each other."
      },
      {
        question: "How do I know if something's happening near me?",
        answer: "Members get notified through the WhatsApp group and inside Terminl. You'll always know what's brewing online or offline."
      },
      {
        question: "Do I have to attend events to be part of the community?",
        answer: "Not at all. Most of the magic happens online. Events are optional, just one more way to jam with other builders IRL."
      },
      {
        question: "Can I contribute or help in any way?",
        answer: "Hell yes. Whether it's hosting a meetup, helping someone debug a product, or just being active in chats, this community grows when you give first."
      }
    ]
  }
];

export const FAQSection = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItems(prev => 
      prev.includes(key) 
        ? prev.filter(item => item !== key)
        : [...prev, key]
    );
  };

  const isOpen = (categoryIndex: number, itemIndex: number) => {
    return openItems.includes(`${categoryIndex}-${itemIndex}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">FAQ</h2>
          <p className="text-gray-600 text-sm">Everything you need to know about First Order</p>
        </div>

        <div className="space-y-6">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-3">
              {/* Category Header */}
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-lg">{category.emoji}</span>
                <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
              </div>

              {/* FAQ Items */}
              <div className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors"
                  >
                    <button
                      onClick={() => toggleItem(categoryIndex, itemIndex)}
                      className="w-full px-4 py-3 text-left flex items-center justify-between bg-gray-50/50 hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900 text-sm pr-4">
                        {item.question}
                      </span>
                      {isOpen(categoryIndex, itemIndex) ? (
                        <ChevronUp className="h-4 w-4 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    
                    {isOpen(categoryIndex, itemIndex) && (
                      <div className="px-4 py-3 bg-white border-t border-gray-200">
                        <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
