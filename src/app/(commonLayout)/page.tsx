import AIConsultationSection from "@/components/modules/home/DoctorConsultant";
import DoctorContainer from "@/components/modules/home/DoctorContainer2";
import Hero from "@/components/modules/home/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <AIConsultationSection></AIConsultationSection>
      <DoctorContainer></DoctorContainer>
    </div>
  );
}
