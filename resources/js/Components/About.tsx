import { Card } from "@/Components/ui/card";
import { Target, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Halton Marine
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Leading Indigenous Excellence
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Since our incorporation on February 25, 2014 (RC 1173334), Halton Marine and Dredging Services Ltd. 
              has been committed to excellence in the marine and dredging industry. We are a dynamic and rapidly 
              growing indigenous company making our mark across Nigeria's maritime sector.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our strength lies in our highly skilled and innovative local workforce, combined with a professional 
              management team whose technical expertise ensures every project is completed to the highest standards 
              of quality and client satisfaction.
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-marine)] transition-all border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">Our Mission</h4>
                  <p className="text-muted-foreground">
                    Dedicated to offering world-class services through creativity and innovation, 
                    delivering effective solutions tailored to meet unique client needs.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-marine)] transition-all border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">Our Vision</h4>
                  <p className="text-muted-foreground">
                    To become a front-line participant and recognized leader within the Dredging Services 
                    and Marine Industry, setting new benchmarks for quality, safety, and efficiency.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-marine)] transition-all border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">Our Commitment</h4>
                  <p className="text-muted-foreground">
                    Committed to sustainable development, safeguarding worker health and the environment 
                    of local communities through responsible operations and social partnership.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
