"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useRef } from "react"
import { Button, Card, CardContent, CardHeader } from "./components/UIComponents"

/* Enhanced accent colors for more visual depth */
const ACCENT = "sky-500"

/* ---------------------------- Data (mock) ----------------------------- */

const featuredProjects = [
  {
    name: "Classic Team Realty",
    link: "https://classicteamrealty.com",
    image: "/classic-realty.png",
    description: "A welcoming online experience helping families effortlessly find their next home.",
    tech: ["Instagram Integration", "Custom Listings Search Bar"],
    category: "Web Development",
    featured: true,
  },
  {
    name: "Fromm Scratch",
    link: "https://frommscratch.com",
    image: "/fromm-scratch.png",
    description: "A warm and inviting baking and lifestyle blog by Caroline Fromm.",
    tech: ["Squarespace", "SEO Optimization", "Responsive Design"],
    category: "Web Development",
    featured: true,
  },
  {
    name: "Mitch Harris",
    link: "https://mitchharris.com",
    image: "/mitch-harris-hero.png",
    description: "An online showcase for Mitch Harris highlighting his journey from Navy veteran to MLB pitcher, speaker, and author, while promoting his bestselling new book.",
    tech: ["Book Promotion", "Booking Form"],
    category: "Web Development",
    featured: true,
  },
]

const additionalProjects = [
  {
    name: "Friend Group Leader",
    link: "https://apps.apple.com/us/app/friend-group-leader/id6744416226",
    image: "/friend-group-leader.png",
    description: "A mobile app for generating comedic group photo insights using custom AI analysis.",
    tech: ["1K+ Users", "$400+ Revenue", "React Native", "Firebase"],
    category: "App Development",
    featured: false,
  },
  {
    name: "ROAM Performance",
    link: "https://useroamperformance.com",
    image: "/roam-hero.png",
    description: "A sleek, high-converting SaaS landing page that showcases their real-time goal tracking and custom reward platform.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    category: "Web Development",
    featured: false,
  },
  {
    name: "Safeguard Solutions",
    link: "https://safeguard-property.com",
    image: "/safeguard-hero.png",
    description: "A clean marketing site for Safeguard Property Solutions highlighting their trusted commercial roofing services.",
    tech: ["Squarespace", "SEO Optimization", "Responsive Design"],
    category: "Web Development",
    featured: false,
  },
  {
    name: "Drake Contracting",
    link: "https://drakegc.com",
    image: "/drakegc.png",
    description: "An SEO-optimized and informative website for Drake General Contracting.",
    tech: ["SEO Optimization", "Responsive Design"],
    category: "Web Development",
    featured: false,
  },
  {
    name: "CA Autographs",
    link: "https://ca-autographs.com",
    image: "/ca-autographs.png",
    description: "A compelling website for sports memorabilia and event-planning company, CA Autographs.",
    tech: ["Social Media Integration", "Custom Shop"],
    category: "Web Development",
    featured: false,
  },
  {
    name: "Nashville Maps",
    link: "https://motley-stealer-5b1.notion.site/Nashville-TN-Real-Estate-Listing-Maps-2531d8dcfa7e80c69e4de761e4912f41?source=copy_link",
    image: "/whitley-maps.png",
    description: "Designed two compelling and informative interactive property maps for Nashville, TN real estate listings.",
    tech: ["Figma"],
    category: "UI/UX Design",
    featured: false,
  },
];

const allProjects = [...featuredProjects, ...additionalProjects]

const testimonials = [
  {
    quote: "His design skills are top-notch—clean, beautiful, and exactly what I envisioned!",
    author: "Caroline O.",
    company: "Fromm Scratch",
    avatar: "/fromm-photo.png",
  },
  {
    quote: "Aidan created a specific, elaborate and creative map for me...highly recommend!",
    author: "Chandler W.",
    company: "Chandler Whitley Realty",
    avatar: "/chandler-whitley.png",
  },
]

const stats = [
  { label: "Industries Served", value: "8+", icon: "🏢" },
  { label: "Projects Launched", value: "15", icon: "🚀" },
  { label: "Avg. Traffic Uplift", value: "30%", icon: "📈" },
]

const services = [
  {
    title: "Web Development",
    description: "Custom websites built with modern frameworks",
    icon: "💻",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile applications",
    icon: "📱",
    features: ["iOS & Android", "React Native", "Custom Backend"],
  },
  {
    title: "UI/UX Design",
    description: "Stunning interfaces that users love and convert like crazy",
    icon: "🎨",
    features: ["Figma Prototyping", "User Research", "Brand Identity"],
  },
]

/* ----------------------------- Component ------------------------------ */

export default function EnhancedLandingPage() {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const viewAllButtonRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null);

  const categories = ["All", "Web Development", "App Development", "UI/UX Design"]

  const filteredProjects =
    selectedCategory === "All" ? allProjects : allProjects.filter((project) => project.category === selectedCategory)

  const displayedProjects = showAllProjects ? filteredProjects : featuredProjects

  const handleViewAllProjects = () => {
  if (!showAllProjects) {
    setIsTransitioning(true);
    setShowAllProjects(true);
    setSelectedCategory("All");

    // wait for React commit + browser paint, then scroll
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (projectsRef.current) {
          const y = projectsRef.current.offsetTop + 120; // push a bit below the top
          window.scrollTo({ top: y, behavior: "smooth" });
        }
        setIsTransitioning(false);
      });
    });
  } else {
    setIsTransitioning(true);
    viewAllButtonRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => {
      setShowAllProjects(false);
      setSelectedCategory("All");
      setIsTransitioning(false);
    }, 300);
  }
};

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col overflow-x-hidden">
      {/* ───────────────────────── Navbar ────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
        <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          <Link href="#" className="group flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-sky-600 rounded-lg flex items-center justify-center text-white font-bold text-sm transform group-hover:rotate-12 transition-transform duration-300">
              K
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Made by Kane
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#projects" className="text-slate-600 hover:text-sky-600 transition-colors font-medium">
              Work
            </Link>
            <Link href="#services" className="text-slate-600 hover:text-sky-600 transition-colors font-medium">
              Services
            </Link>
            <Link href="#about" className="text-slate-600 hover:text-sky-600 transition-colors font-medium">
              About
            </Link>
          </div>
          <Button asChild size="sm" className="shadow-lg hover:shadow-xl transition-shadow">
            <Link href="https://calendly.com/kaneaidan12/made-by-kane-chat">Book Free Consult</Link>
          </Button>
        </nav>
      </header>

      <section className="relative isolate overflow-hidden min-h-[90vh] flex items-center w-full">
        {/* Enhanced gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-indigo-50" />

        {/* Animated background elements - Mobile friendly */}
        <div className="absolute -top-20 -left-20 md:-top-40 md:-left-40 w-60 h-60 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-sky-200 to-sky-300 opacity-30 blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-20 -right-20 md:-bottom-40 md:-right-40 w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-indigo-200 to-purple-300 opacity-20 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-br from-sky-100 to-indigo-100 opacity-20 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Floating elements */}
        <div
          className="absolute top-20 right-20 w-4 h-4 bg-sky-400 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-32 left-20 w-3 h-3 bg-indigo-400 rounded-full animate-bounce"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-bounce"
          style={{ animationDelay: "2.5s" }}
        />

        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 py-20 gap-6 md:gap-8 max-w-6xl mx-auto w-full">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-sky-200 text-sky-700 text-sm font-medium mb-4 shadow-lg">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Available for new projects
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-tight max-w-5xl">
            <span className="block">Digital Products</span>
            <span className="block bg-gradient-to-r from-sky-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
              Built to Impress
            </span>
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl text-slate-600 leading-relaxed font-light">
            High‑performing websites & apps that earn trust, rank higher, and convert visitors into loyal customers.
          </p>

          <div className="flex gap-6 flex-wrap justify-center mt-8">
            <Button
              size="lg"
              asChild
              className="shadow-2xl hover:shadow-sky-500/25 hover:scale-105 transition-all duration-300"
            >
              <Link href="#projects">See My Work</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="backdrop-blur-sm bg-white/70 hover:bg-white/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Link href="#contact">Free Strategy Call</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-12 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              <span>5.0 Client Rating</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-300" />
            <div>15+ Projects Delivered</div>
            <div className="hidden sm:block w-px h-4 bg-slate-300" />
            <div>100% Client Satisfaction</div>
          </div>
        </div>
      </section>

      {/* ─────────────────────── Services ────────────────────────── */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              What I Do Best
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Specialized services designed to elevate your digital presence and drive real business results.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-slate-50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-slate-900">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center justify-center gap-2 text-sm text-slate-500">
                        <div className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────── Projects ────────────────────────── */}
      <section id="projects" ref={projectsRef} className="bg-gradient-to-br from-slate-50 to-sky-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-700 ${isTransitioning ? "opacity-50 transform translate-y-2" : "opacity-100 transform translate-y-0"}`}
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              {showAllProjects ? "All Projects" : "Featured Projects"}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {showAllProjects
                ? "Explore my complete portfolio of digital solutions across various industries."
                : "Real results for real businesses. Each project tells a story of growth and success."}
            </p>
          </div>

          {/* Category Filter - Only show when viewing all projects */}
          <div
            className={`transition-all duration-700 overflow-hidden ${
              showAllProjects && !isTransitioning ? "max-h-32 opacity-100 mb-12" : "max-h-0 opacity-0 mb-0"
            }`}
          >
            <div className="flex flex-wrap justify-center gap-3 py-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-sky-500 text-white shadow-lg"
                      : "bg-white text-slate-600 hover:bg-sky-50 hover:text-sky-600 shadow-sm"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div
            className={`grid gap-10 transition-all duration-700 ${
              showAllProjects ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-3"
            } ${isTransitioning ? "opacity-50 transform translate-y-4" : "opacity-100 transform translate-y-0"}`}
          >
            {displayedProjects.map((project, index) => (
              <Card
                key={project.name}
                className="group hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  transitionDelay: isTransitioning ? "0ms" : `${index * 50}ms`,
                }}
              >
                <CardHeader className="p-0 relative overflow-hidden">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        width={600}
                        height={400}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-xl text-slate-900">{project.name}</h3>
                    <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-sky-100 text-sky-700 text-xs rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full group-hover:bg-sky-50 transition-colors bg-transparent"
                  >
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      Visit Site ↗
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Show More/Less Button */}
          <div ref={viewAllButtonRef} className="text-center mt-16">
            <Button
              onClick={handleViewAllProjects}
              disabled={isTransitioning}
              size="lg"
              variant="outline"
              className={`shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ${
                isTransitioning ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {showAllProjects ? (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                  Show Featured Only
                </>
              ) : (
                <>
                  View All Projects
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* ──────────────────────── Stats ─────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {stats.map((stat, index) => (
              <div key={stat.label} className="group" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <p className="text-6xl font-black mb-2 bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="uppercase tracking-wider text-sm text-slate-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────── Testimonials ─────────────────────── */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-24 px-6 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sky-500/20 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">Client Success Stories</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Don't just take my word for it. Here's what clients say about working together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={60}
                      height={60}
                      className="rounded-full border-2 border-white/20"
                    />
                    <div>
                      <div className="font-semibold text-lg">{testimonial.author}</div>
                      <div className="text-sky-300 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                  <blockquote className="text-lg leading-relaxed italic">"{testimonial.quote}"</blockquote>
                  <div className="flex text-yellow-400 mt-4">⭐⭐⭐⭐⭐</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── CTA ──────────────────────────── */}
      <section
        id="contact"
        className="py-28 px-6 bg-gradient-to-br from-sky-600 to-indigo-700 text-white relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent" />
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">Ready to impress your customers?</h2>
          <p className="text-xl md:text-2xl text-sky-100 max-w-2xl mx-auto leading-relaxed">
            Book a free 15‑minute call and discover how we can grow your business with a website or app that truly
            shines.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <Button
              size="lg"
              asChild
              variant="secondary"
              className="bg-white text-sky-600 hover:bg-slate-50 shadow-2xl hover:shadow-white/25 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
            >
              <Link href="https://calendly.com/kaneaidan12/made-by-kane-chat">Book a Call →</Link>
            </Button>
            <div className="flex items-center gap-2 text-sky-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Usually responds within 2 hours</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8 mt-16 text-sky-200 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No commitment required
            </div>
            <div className="w-px h-4 bg-sky-300" />
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              100% confidential
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── Footer ────────────────────────── */}
      <footer className="py-12 bg-slate-900 text-slate-400 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-sky-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                K
              </div>
              <span className="text-xl font-bold text-white">Made by Kane</span>
            </div>

            <div className="flex items-center gap-8">
              <Link href="#projects" className="hover:text-sky-400 transition-colors">
                Work
              </Link>
              <Link href="#services" className="hover:text-sky-400 transition-colors">
                Services
              </Link>
              <Link href="#contact" className="hover:text-sky-400 transition-colors">
                Contact
              </Link>
            </div>

            <div className="text-sm">© {new Date().getFullYear()} Made by Kane. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}