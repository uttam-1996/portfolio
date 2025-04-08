import { useState } from "react";
import FadeInSection from "./FadeInSection";

const skills = [
  "Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy",
  "SQL", "MongoDB", "AWS", "Docker", "FastAPI", "React"
];

const tabs = ["Skills", "Experience", "Education", "Certifications"];

export default function About() {
  const [activeTab, setActiveTab] = useState("Skills");

  return (
    <section id="about" className="py-20 px-6 bg-sky-50 text-center">
      <FadeInSection>
        <h2 className="text-3xl font-bold mb-8 text-slate-900">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg text-slate-600 mb-12">
          I'm a passionate Data Scientist and AI Developer with 8+ years of experience
          building enterprise-grade intelligent applications, predictive models, and
          AI-powered systems in financial, healthcare, and e-commerce sectors.
        </p>
      </FadeInSection>

      {/* Tabs */}
      <div className="mb-6 flex justify-center gap-4 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              activeTab === tab
                ? "bg-sky-600 text-white shadow"
                : "bg-white text-slate-700 hover:bg-sky-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <FadeInSection key={activeTab}>
        <div className="mt-8 max-w-4xl mx-auto text-left text-slate-700">
          {activeTab === "Skills" && (
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white border rounded-full text-sm text-slate-700 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          {activeTab === "Experience" && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold">Senior AI Developer – Excelloid Soft Systems</h4>
                <p className="text-sm italic text-slate-500">2019 – Present</p>
                <p>
                  Led AI initiatives for Al Accad Group’s marketing strategy, improving sales
                  through predictive analytics and customer behavior modeling.
                </p>
              </div>
            </div>
          )}

          {activeTab === "Education" && (
            <div>
              <h4 className="text-xl font-bold">M.S. in Computer Science</h4>
              <p className="text-sm italic text-slate-500">XYZ University, 2015 – 2017</p>
            </div>
          )}

          {activeTab === "Certifications" && (
            <ul className="space-y-2 list-disc list-inside">
              <li>TensorFlow Developer Certificate – 2023</li>
              <li>Deep Learning Specialization – Coursera (Andrew Ng)</li>
            </ul>
          )}
        </div>
      </FadeInSection>

      {/* Download Resume */}
      <FadeInSection delay={0.6}>
        <div className="text-center mt-12">
          <a
            href="resume.pdf"
            download
            className="inline-block px-6 py-3 bg-sky-600 text-white rounded-full shadow hover:bg-sky-500 transition"
          >
            Download Resume
          </a>
        </div>
      </FadeInSection>
    </section>
  );
}
