import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="bg-background/95 backdrop-blur-sm shadow-[var(--shadow-card)]">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Ready to Start Your Next Project?</CardTitle>
            <CardDescription className="text-center text-lg">Let's work together to bring your vision to life.</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Link to="/contact">
              <Button size="lg">Get in Touch</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
