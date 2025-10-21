
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Helmet } from "react-helmet-async";
import { seo } from "@/lib/seo";
import { careers } from "@/lib/careers-data";
import { Button } from "@/components/ui/button";
import careersImage from "@/assets/contact.png";

const CareersPage = () => {
  const handleApplyClick = (jobTitle: string) => {
    const subject = `Job Application: ${jobTitle}`;
    const body = `Dear Halton Marine Hiring Team,\n\nI am writing to apply for the ${jobTitle} position. Please find my resume attached.\n\nSincerely,\n[Your Name]`
    window.location.href = `mailto:careers@haltonmarine.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{seo.careers.title}</title>
        <meta name="description" content={seo.careers.description} />
      </Helmet>
      <Navbar />
      <PageHero title="Careers" image={careersImage} />
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Job Openings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careers.map((job) => (
            <div key={job.id} className="border p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{job.title}</h3>
              <p className="text-gray-600 mb-4">{job.location}</p>
              <p className="mb-4">{job.description}</p>
              <h4 className="font-semibold mb-2">Requirements:</h4>
              <ul className="list-disc list-inside mb-4">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
              <Button onClick={() => handleApplyClick(job.title)}>Apply Now</Button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CareersPage;
