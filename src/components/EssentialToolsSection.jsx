import React from "react";
import { motion } from "framer-motion";
import tool1 from '../assets/tools/tool1.png'
import tool2 from '../assets/tools/tool2.png'
import tool3 from '../assets/tools/tool3.png'
import tool4 from '../assets/tools/tool4.png'
import tool5 from '../assets/tools/tool5.png'
import tool6 from '../assets/tools/tool6.png'
import tool7 from '../assets/tools/tool7.png'
import tool8 from '../assets/tools/tool8.png'
const EssentialToolsSection = () => {
  const tools = [
    {
      title: "Payments",
      desc: "Responsibly sourced, secure, and eco-friendly fabrics for a better tomorrow.",
      icon: tool1,
      color: "from-red-400 to-pink-400",
    },
    {
      title: "Analytics",
      desc: "Understand your growth with smart, built-in analytics.",
      icon: tool2
    },
    {
      title: "Newsletters",
      desc: "Build your audience with engaging branded newsletter.",
      icon: tool3
    },
    {
      title: "Pages",
      desc: "Showcase your expertise with a personal profile that sells for you.",
      icon: tool4
    },
    {
      title: "Contact",
      desc: "Organize your contacts and turn them into your most valuable asset.",
      icon: tool5
    },
    {
      title: "Emails",
      desc: "Showcase your expertise with a personal profile that sells for you.",
      icon: tool6
    },
  ];


  // Stagger container for children
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  // Individual card animation
  const item = {
    hidden: { 
      y: 80, 
      opacity: 0 
    },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20
      }
    }
  };

  return (
    <section className="py-20 bg-linear-to-b from-amber-50 to-orange-50">
      <div className="max-w-11/12 mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div 
        initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        className="inline-block px-6 py-2 bg-linear-to-r from-[#BCB3A0] to-[#E0D8C9] text-xs font-bold tracking-widest rounded-full mb-6">
          ESSENTIAL TOOLS
        </motion.div>

        {/* Headline */}
        <motion.h2 
        initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Essential Tools
          <br />
          Zero Distractions
        </motion.h2>

        <motion.p 
         initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
          Create diverse products on the platform and leverage our powerful
          tools to drive sales within and beyond GrowHubs.
        </motion.p>

        {/* Tools Grid */}
        <motion.div 
        variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-100"
            >
              <div className="flex flex-row-reverse justify-between items-center">
                <div
                  className={`w-16 h-16  rounded-2xl  mb-6 flex items-center justify-center`}
                >
                  <img src={tool.icon} alt={tool.title} className="w-10 h-10" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {tool.title}
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed text-left">
                {tool.desc}
              </p>

              <button className="mt-6 text-amber-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn more <span className="text-xl">→</span>
              </button>
            </motion.div>
          ))}

          {/* Special Co-sell Network Card */}
          <motion.div 
          variants={item}
          className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-100 ">
            <div className="flex flex-row-reverse justify-between items-center">
              <div
                className={`w-16 h-16 bg-linear-to-br rounded-2xl  mb-6 flex items-center justify-center`}
              >
                <img src={tool7} alt="icon" className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Co-sell network
              </h3>
            </div>

            <p className="text-gray-600 leading-relaxed text-left">
              Collaborate with others to sell more without ad spend or extra
              effort.
            </p>

            <button className="mt-6 text-amber-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              Learn more <span className="text-xl ">→</span>
            </button>
          </motion.div>

          {/* Enterprise Plan Card */}
          <motion.div 
          variants={item}
          className="lg:col-span-2 bg-linear-to-r from-[#4D5D69] to-[#A16A6B] rounded-3xl p-10 shadow-2xl text-white overflow-hidden relative">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-3xl font-bold mb-4 flex items-center gap-4">
                    <span className="text-5xl bg-linear-to-r from-[#FFD900] via-[#FBFD89] to-[#FFD900] text-transparent bg-clip-text">
                      Enterprise
                    </span>
                    <span className="bg-linear-to-r from-[#FFD900] via-[#FBFD89] to-[#FFD900] text-transparent bg-clip-text text-xl">
                      plan
                    </span>
                  </h3>

                  <div className="hidden lg:block">
                    <img
                      src={tool8}
                      alt="Enterprise"
                    />
                  </div>
                </div>

                <p className="text-white/90 leading-relaxed text-left max-w-2/3">
                  Full white-label platform hosted on a dedicated, auto-scaling
                  server. Includes branding freedom, private content protection,
                  and 24/7 service availability.
                </p>
                <button className="mt-8 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full font-bold hover:bg-white/30 transition block">
                  <span className="bg-linear-to-r from-[#FFD900] via-[#FBFD89] to-[#FFD900] text-transparent bg-clip-text text-xl">Learn More →</span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EssentialToolsSection;
