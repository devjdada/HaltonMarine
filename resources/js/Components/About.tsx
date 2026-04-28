import { motion } from "framer-motion";
import { Card } from "@/Components/ui/card";
import { Target, Eye, Award, CheckCircle2, Globe, Users } from "lucide-react";

interface AboutProps {
  settings: Record<string, string>;
  isHomePage?: boolean;
}

const About = ({ settings, isHomePage = false }: AboutProps) => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: settings?.mission_title || "Our Mission",
      text: settings?.mission_description || "Dedicated to offering world-class services through creativity and innovation, delivering effective solutions tailored to meet unique client needs.",
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: settings?.vision_title || "Our Vision",
      text: settings?.vision_description || "To become a front-line participant and recognized leader within the Dredging Services and Marine Industry, setting new benchmarks for quality, safety, and efficiency.",
      gradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: settings?.commitment_title || "Our Commitment",
      text: settings?.commitment_description || "Committed to sustainable development, safeguarding worker health and the environment of local communities through responsible operations and social partnership.",
      gradient: "from-green-500/10 to-emerald-500/10"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -u-translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Globe className="h-4 w-4" />
              <span>Leading Maritime Solutions</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-8 leading-tight">
              {settings?.about_title || "About Halton Marine"}
            </h2>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              {settings?.about_subheading || "Leading Indigenous Excellence"}
            </p>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground/80 leading-relaxed border-l-4 border-primary pl-6 py-2 italic bg-primary/5 rounded-r-lg">
                {settings?.about_description_1}
              </p>
              <p className="text-lg text-muted-foreground/80 leading-relaxed">
                {settings?.about_description_2}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="p-4 rounded-2xl bg-secondary/30 backdrop-blur-sm border border-border/50">
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="p-4 rounded-2xl bg-secondary/30 backdrop-blur-sm border border-border/50">
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Indigenous Owned</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            {...fadeIn} 
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 aspect-video lg:aspect-square">
              <img 
                src={settings?.about_main_image || "https://images.unsplash.com/photo-1541888941255-658866552271?q=80&w=2000&auto=format&fit=crop"}
                alt="Main Excellence"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-4 text-white">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">ISO Certified</div>
                    <div className="text-sm text-white/80">Global Standards, Local Expertise</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative boxes */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sky-500/20 rounded-full -z-10" />
          </motion.div>
        </div>

        {/* Indigenous Excellence Section */}
        {!isHomePage && (
          <div className="group relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 border border-border/50 p-8 md:p-16 mb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                {...fadeIn}
                className="order-2 lg:order-1"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                  <img 
                    src={settings?.about_indigenous_image || "https://images.unsplash.com/photo-1574680676196-932109470132?q=80&w=800&auto=format&fit=crop"}
                    alt="Indigenous Impact"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.2 }}
                className="order-1 lg:order-2 space-y-8"
              >
                <div className="inline-flex py-1 px-4 bg-primary/10 rounded-full text-primary font-semibold text-sm">
                  Local Impact
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-foreground">
                  {settings?.about_indigenous_heading || "Indigenous Excellence & Local Impact"}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {settings?.about_indigenous_text || "We pride ourselves on our deep roots in Nigeria, fostering a culture of indigenous excellence that empowers local communities and drives sustainable growth in the maritime sector."}
                </p>
                <div className="flex gap-4">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-background bg-secondary overflow-hidden">
                        <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="w-full h-full object-cover" />
                      </div>
                    ))}
                    <div className="w-12 h-12 rounded-full border-2 border-background bg-primary flex items-center justify-center text-white text-xs font-bold">
                      +200
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Expert Workforce</div>
                    <div className="text-sm text-muted-foreground">Certified Professionals</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* Vision, Mission, Commitment rearranged */}
        {!isHomePage && (
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className={`h-full p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-none bg-gradient-to-br ${v.gradient}`}>
                  <div className="relative z-10">
                    <div className="mb-6 p-4 bg-background/50 backdrop-blur-sm rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500">
                      {v.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-foreground mb-4">
                      {v.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {v.text}
                    </p>
                  </div>
                  {/* Accent line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-50" />
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
