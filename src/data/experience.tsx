import { ReactNode } from 'react';

interface Experience {
  date: string;
  title: string;
  organization: string;
  description: ReactNode;
}

export const experiences: Experience[] = [
  {
    date: "2019 - Present",
    title: "Pediatric Cardiology Consultant",
    organization: "Aswan Heart Centre, Magdi Yacoub Foundation",
    description: (
      <div className="space-y-2">
        <p>Lead consultant for complex congenital heart defects, responsible for:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Interventional Pediatric Cardiology: Performing approximately 800 cases annually</li>
          <li>Managing busy pediatric cardiology clinic with 35+ complex cases daily</li>
          <li>Conducting pre and post cardiac catheterization follow-ups</li>
          <li>Daily rounds in post-operative pediatric cardiac ICU</li>
        </ul>
      </div>
    )
  },
  {
    date: "2021 - Present",
    title: "Lecturer & Consultant of Pediatrics and Pediatric Cardiology",
    organization: "Faculty of Medicine, Aswan University",
    description: "Teaching and mentoring medical students while conducting research in pediatric cardiology."
  },
  {
    date: "2020 - Present",
    title: "Basic Life Support (BLS) Instructor",
    organization: "American Heart Association (AHA)",
    description: "Certified instructor for Basic Life Support training programs."
  },
  {
    date: "2014 - 2021",
    title: "Assistant Lecturer of Pediatrics and Pediatric Cardiology",
    organization: "Faculty of Medicine, Aswan University",
    description: "Academic teaching and research in pediatric medicine and cardiology."
  },
  {
    date: "2013 - 2014",
    title: "Demonstrator of Pediatrics",
    organization: "Faculty of Medicine, Aswan University",
    description: "Teaching and clinical training of medical students."
  },
  {
    date: "2012 - 2013",
    title: "Specialist Assistant of Pediatrics",
    organization: "Manfalout Maternal and Child Health Hospital",
    description: "Clinical care and management of pediatric patients."
  },
  {
    date: "2009 - 2012",
    title: "Resident of Pediatrics",
    organization: "Asyut University Hospitals",
    description: "Comprehensive training in pediatric medicine and emergency care."
  },
  {
    date: "2008 - 2009",
    title: "Medical Intern",
    organization: "Assiut University Hospitals",
    description: "Rotational internship in various medical departments."
  }
];