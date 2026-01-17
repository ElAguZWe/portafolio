'use client'

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/theme-toggle"
import { 
  Code2, 
  Database, 
  Brain, 
  Server, 
  Layout, 
  GitBranch, 
  Mail, 
  Linkedin, 
  Github, 
  Send,
  ExternalLink,
  Cpu,
  Layers,
  Zap,
  Target,
  Menu,
  X,
  MessageCircle
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  // Portfolio Component
  const skills = [
    {
      category: "Backend Development",
      icon: Server,
      items: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "Next.js", level: 88 },
        { name: "RESTful APIs", level: 85 },
        { name: "TypeScript", level: 82 },
      ]
    },
    {
      category: "Database & AI",
      icon: Database,
      items: [
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 78 },
        { name: "MongoDB", level: 75 },
        { name: "Machine Learning", level: 70 },
        { name: "Data Analysis", level: 75 },
      ]
    },
    {
      category: "Frontend Development",
      icon: Layout,
      items: [
        { name: "React", level: 85 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "Tailwind CSS", level: 82 },
        { name: "HTML5/CSS3", level: 85 },
        { name: "Responsive Design", level: 80 },
      ]
    },
    {
      category: "Tools & Others",
      icon: Cpu,
      items: [
        { name: "Git & GitHub", level: 85 },
        { name: "Docker", level: 65 },
        { name: "Linux", level: 75 },
        { name: "API Development", level: 85 },
        { name: "Problem Solving", level: 90 },
      ]
    }
  ]

  const projects = [
    {
      title: "AI-Powered API Platform",
      description: "Plataforma de APIs potenciada con inteligencia artificial para procesamiento de datos en tiempo real. Implementa endpoints RESTful con capacidades de ML para análisis predictivo.",
      technologies: ["Node.js", "Express", "TensorFlow.js", "PostgreSQL"],
      icon: Brain,
      status: "En desarrollo"
    },
    {
      title: "Database Management System",
      description: "Sistema de gestión de bases de datos optimizado para aplicaciones de gran escala. Incluye funcionalidades de backup automático, replicación y optimización de consultas.",
      technologies: ["PostgreSQL", "Node.js", "Docker", "Redis"],
      icon: Database,
      status: "Proyecto académico"
    },
    {
      title: "Full Stack E-Commerce",
      description: "Aplicación web completa de comercio electrónico con carrito de compras, pasarela de pagos integrada y panel administrativo. Arquitectura escalable con microservicios.",
      technologies: ["Next.js", "TypeScript", "Stripe API", "MongoDB"],
      icon: Layout,
      status: "Proyecto personal"
    },
    {
      title: "AI Chat Assistant",
      description: "Asistente conversacional integrado con LLM para soporte al cliente automatizado. Procesamiento de lenguaje natural y respuestas contextuales en tiempo real.",
      technologies: ["Node.js", "Socket.io", "OpenAI API", "Redis"],
      icon: Zap,
      status: "Beta"
    }
  ]

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">EARZ</span>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-sm hover:text-primary transition-colors"
              >
                Sobre mí
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-sm hover:text-primary transition-colors"
              >
                Habilidades
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-sm hover:text-primary transition-colors"
              >
                Proyectos
              </button>
              <ThemeToggle />
              <Button 
                onClick={() => scrollToSection('contact')}
                size="sm"
              >
                Contactar
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-accent"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4 border-t">
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left py-2 px-4 hover:bg-accent rounded-md transition-colors"
              >
                Sobre mí
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="block w-full text-left py-2 px-4 hover:bg-accent rounded-md transition-colors"
              >
                Habilidades
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left py-2 px-4 hover:bg-accent rounded-md transition-colors"
              >
                Proyectos
              </button>
              <div className="flex items-center justify-between py-2 px-4">
                <span className="text-sm">Tema</span>
                <ThemeToggle />
              </div>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full"
              >
                Contactar
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <Badge variant="outline" className="mb-4">
                <Zap className="h-3 w-3 mr-1" />
                Disponible para nuevos proyectos
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                Hola, soy{" "}
                <span className="text-primary">Agustín Rojas</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-6">
                Full Stack Developer enfocado en Backend potenciado con IA
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl">
                Egresado de la Tecnicatura Superior en Desarrollo de Software y Estudiante de la Tecnicatura Superior en Base de Datos e IA 
                en el Instituto Tecnológico Santiago del Estero. 
                Apasionado por crear soluciones innovadoras combinando JavaScript, Node.js y tecnologías de inteligencia artificial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('projects')}
                  className="gap-2"
                >
                  <Target className="h-4 w-4" />
                  Ver Proyectos
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="gap-2"
                >
                  <Send className="h-4 w-4" />
                  Contáctame
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl" />
                <Avatar className="h-64 w-64 sm:h-80 sm:w-80 border-4 border-primary/20">
                  <AvatarImage src="/profile.png" alt="Agustín Rojas" />
                  <AvatarFallback className="text-4xl font-bold">AR</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Sobre Mí</h2>
            <p className="text-muted-foreground text-lg">
              Mi viaje como desarrollador y apasionado de la tecnología
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  Formación Académica
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Técnico Superior en Desarrollo de Software
                  </h3>
                  <p className="text-muted-foreground">
                    Instituto Tecnológico Santiago del Estero
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Egresado
                  </p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Técnico Superior en Base de Datos e IA
                  </h3>
                  <p className="text-muted-foreground">
                    Instituto Tecnológico Santiago del Estero
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Actualmente cursando
                  </p>
                </div>
                <Separator />
                <p className="text-sm">
                  Mi formación académica me permite combinar conocimientos sólidos en desarrollo de software, 
                  gestión de bases de datos con las últimas tecnologías de inteligencia artificial, 
                  creando soluciones innovadoras y escalables.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Enfoque Profesional
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Backend con IA
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Especializado en desarrollar backend robusto potenciado con inteligencia artificial
                  </p>
                </div>
                <Separator />
                <p className="text-sm">
                  Me apasiona crear aplicaciones que combinan el ecosistema JavaScript con capacidades 
                  de IA, desde APIs inteligentes hasta sistemas de análisis de datos automatizados.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 border-2 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardHeader>
              <CardTitle>Tecnologías Preferidas</CardTitle>
              <CardDescription>
                Las herramientas con las que disfruto trabajar día a día
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "TypeScript", "Node.js", "Next.js", "React", "PostgreSQL", "MongoDB", "Python", "TensorFlow", "Docker"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Habilidades Técnicas</h2>
            <p className="text-muted-foreground text-lg">
              Competencias desarrolladas a través de proyectos y formación académica
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((category, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <category.icon className="h-5 w-5 text-primary" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.items.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Proyectos Destacados</h2>
            <p className="text-muted-foreground text-lg">
              Algunos de los proyectos en los que he trabajado
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <project.icon className="h-5 w-5 text-primary" />
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </div>
                    <Badge variant="outline">{project.status}</Badge>
                  </div>
                  <CardDescription className="text-base mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium mb-2">Tecnologías:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contáctame</h2>
            <p className="text-muted-foreground text-lg">
              ¿Tienes un proyecto en mente? ¡Hablemos!
            </p>
          </div>

          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Estoy siempre abierto a discutir nuevos proyectos, oportunidades colaborativas 
                    o simplemente conversar sobre tecnología y desarrollo.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="mailto:e.agustinrz@gmail.com">
                      <Button size="lg" className="gap-2 w-full sm:w-auto">
                        <Mail className="h-4 w-4" />
                        Envíame un correo
                      </Button>
                    </a>
                    <a href="https://www.linkedin.com/in/agusrojas-zanotti" target="_blank" rel="noopener noreferrer">
                      <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </Button>
                    </a>
                    <a href="https://github.com/ElAguZWe" target="_blank" rel="noopener noreferrer">
                      <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                        <Github className="h-4 w-4" />
                        GitHub
                      </Button>
                    </a>
                    <a href="https://wa.me/+5493853004788" target="_blank" rel="noopener noreferrer">
                      <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>

                <Separator />

                <div className="grid sm:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Layers className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1">Full Stack</h3>
                    <p className="text-sm text-muted-foreground">
                      Desarrollo completo de aplicaciones web
                    </p>
                  </div>
                  <div>
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1">AI Integration</h3>
                    <p className="text-sm text-muted-foreground">
                      Soluciones potenciadas con inteligencia artificial
                    </p>
                  </div>
                  <div>
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1">Database Expert</h3>
                    <p className="text-sm text-muted-foreground">
                      Diseño y optimización de bases de datos
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-primary" />
              <span className="font-semibold">Agustín Rojas</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Agustín Rojas. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/ElAguZWe" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/agusrojas-zanotti" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:e.agustinrz@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/+5493853004788" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
