import { Card } from "@/components/ui/card";
import { Handshake, Building2 } from "lucide-react";

const strategicPartners = [
  "Cloud Options Limited",
  "Winnep Nigeria Limited",
];

const clients = [
  "NNPC",
  "Nigeria LNG Limited",
  "Total Energies",
  "ExxonMobil",
  "Shell",
  "BP",
  "Chevron",
  "Eni",
  "PetroChina",
  "Petrobras",
  "OPEC",
  "Gazprom",
  "Nasta Energy Oil & Gas Nigeria Limited",
];

const Partners = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Partners & Clientele
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building success through strategic alliances and trusted relationships
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Strategic Partners */}
          <Card className="p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-marine)] transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Handshake className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Strategic Partners
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              We collaborate with industry leaders to enhance our service delivery and 
              technical capabilities:
            </p>
            <div className="space-y-3">
              {strategicPartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg"
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground font-medium">{partner}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* CSR */}
          <Card className="p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-marine)] transition-all bg-primary/5 border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Corporate Social Responsibility
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">Commitment to Safety:</strong> At Halton Marine, 
              safety is a cornerstone of our operations. We are resolutely committed to sustainable 
              development, ensuring our activities safeguard worker health and the environment.
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Community Partnership:</strong> Our CSR strategy 
              is built on social partnership, focusing on open communication, community awareness, 
              and high-impact development programs that contribute to long-term community well-being.
            </p>
          </Card>
        </div>

        {/* Distinguished Clients */}
        <Card className="p-8 shadow-[var(--shadow-card)]">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">
              Distinguished Clientele
            </h3>
          </div>
          <p className="text-muted-foreground mb-6">
            We are proud to have worked with leading national and international organizations 
            in the energy sector:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <span className="text-foreground font-medium text-center">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Partners;
