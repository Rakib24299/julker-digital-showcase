import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, Mail, Linkedin } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.jpg";
import project1 from "@/assets/projects/project1.jpg";
import project2 from "@/assets/projects/project2.jpg";
import project3 from "@/assets/projects/project3.jpg";
import { useMemo } from "react";

const GITHUB_USERNAME = "octocat"; // TODO: replace with your GitHub username

const projects = [
  {
    name: "SaaS Analytics Dashboard",
    image: project1,
    description:
      "A modern analytics dashboard with interactive charts, dark UI, and responsive layout.",
    github: "https://github.com/your-username/saas-analytics-dashboard",
    demo: "https://example.com/saas-analytics",
  },
  {
    name: "Developer Tools Suite",
    image: project2,
    description:
      "A collection of productivity tools for developers: snippets, logs, and terminal-inspired UI.",
    github: "https://github.com/your-username/dev-tools-suite",
    demo: "https://example.com/dev-tools",
  },
  {
    name: "AI Insights Platform",
    image: project3,
    description:
      "AI-powered insights with charts, data cards, and a clean, accessible interface.",
    github: "https://github.com/your-username/ai-insights-platform",
    demo: "https://example.com/ai-insights",
  },
];

const Index = () => {
  const year = useMemo(() => new Date().getFullYear(), []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Julker Nain Rakib",
    jobTitle: "Full Stack Developer & AI Enthusiast",
    email: "mailto:thomasedison24299@gmail.com",
    url: "/",
    sameAs: [
      "https://github.com/your-username",
      "https://www.linkedin.com/in/your-username/",
    ],
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container flex h-16 items-center justify-between">
          <a href="#home" className="font-bold tracking-tight text-lg story-link" aria-label="Go to home">
            JR
          </a>
          <ul className="hidden gap-6 md:flex text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-foreground transition-colors">Skills</a></li>
            <li><a href="#projects" className="hover:text-foreground transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
          </ul>
          <div className="hidden md:block">
            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer" aria-label="View GitHub">
              <Button variant="hero" size="sm" className="hover-scale">
                <Github /> GitHub
              </Button>
            </a>
          </div>
        </nav>
      </header>

      <main id="home" className="container">
        <section className="grid gap-10 py-16 md:py-24 lg:grid-cols-2 lg:gap-12 lg:py-28 items-center">
          <div className="space-y-6 animate-enter">
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              Julker Nain Rakib — Full Stack Developer & AI Enthusiast
            </h1>
            <p className="text-lg text-muted-foreground">
              Code | Create | Contribute | Turning ideas into reality, one commit at a time.
            </p>
            <p className="text-muted-foreground">
              Developer & problem solver | Passionate about open source & clean code.
              Building things for the web | Python/JS enthusiast | Learning in public.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer">
                <Button variant="hero" size="lg" className="hover-scale">
                  <Github /> View GitHub
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg" className="hover-scale">
                  <Mail /> Contact Me
                </Button>
              </a>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <img
              src={heroIllustration}
              alt="Hero illustration: modern developer theme with orange-red accent"
              className="w-full rounded-lg border shadow-xl"
              loading="eager"
            />
          </div>
        </section>

        <section id="about" className="scroll-mt-24 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <article className="space-y-4 animate-fade-in">
              <h2 className="text-3xl font-bold">About</h2>
              <p className="text-muted-foreground">
                Current role: Student, Developer.
              </p>
              <p className="text-muted-foreground">
                Skills: Full-Stack Development | JavaScript • React • Node.js • Python.
              </p>
              <p className="text-muted-foreground">
                Interests: Open-source contributor, ML & DevOps curious, building tools to simplify lives.
              </p>
            </article>

            <aside className="space-y-4">
              <h3 className="text-xl font-semibold">GitHub Snapshot</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=dark&title_color=ff4b2b&icon_color=ff4b2b&hide_border=true`}
                  alt="GitHub stats"
                  className="w-full rounded-lg border"
                  loading="lazy"
                />
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=dark&title_color=ff4b2b&hide_border=true`}
                  alt="Top languages"
                  className="w-full rounded-lg border"
                  loading="lazy"
                />
              </div>
            </aside>
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 py-12 md:py-16">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="animate-enter">
              <CardHeader>
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {[
                  "C",
                  "C++",
                  "Python",
                  "HTML",
                  "CSS",
                  "JavaScript",
                ].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground border">
                    {skill}
                  </span>
                ))}
              </CardContent>
            </Card>

            <Card className="animate-enter">
              <CardHeader>
                <CardTitle>Frameworks & Libraries</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {["Django", "Node.js", "React"].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground border">
                    {skill}
                  </span>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 py-12 md:py-16">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Card key={p.name} className="group hover-scale transition-shadow hover:shadow-xl">
                <CardHeader className="p-0">
                  <img
                    src={p.image}
                    alt={`${p.name} screenshot`}
                    className="aspect-video w-full rounded-t-lg object-cover"
                    loading="lazy"
                  />
                </CardHeader>
                <CardContent className="space-y-2 pt-4">
                  <CardTitle>{p.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{p.description}</p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <a href={p.github} target="_blank" rel="noreferrer" className="w-full">
                    <Button variant="outline" className="w-full"><Github /> Code</Button>
                  </a>
                  <a href={p.demo} target="_blank" rel="noreferrer" className="w-full">
                    <Button className="w-full"><ExternalLink /> Live</Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-12 md:py-16">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Get in touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  Email: <a className="story-link" href="mailto:thomasedison24299@gmail.com">thomasedison24299@gmail.com</a>
                </p>
                <p className="flex items-center gap-2">
                  <Github size={18} />
                  <a className="story-link" href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer">
                    github.com/{GITHUB_USERNAME}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Linkedin size={18} />
                  <a className="story-link" href="https://www.linkedin.com/in/your-username/" target="_blank" rel="noreferrer">
                    linkedin.com/in/your-username
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader>
                <CardTitle>Let’s build something great</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Open to internships, collaborations, and interesting problems.
              </CardContent>
              <CardFooter>
                <a href={`mailto:thomasedison24299@gmail.com`}>
                  <Button variant="hero" className="hover-scale"><Mail /> Say Hello</Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>© {year} Julker Nain Rakib. All rights reserved.</p>
          <div className="flex gap-4">
            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/your-username/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin />
            </a>
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};

export default Index;
