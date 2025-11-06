import AIConsultationSection from "@/components/modules/home/DoctorConsultant";
import DoctorContainer from "@/components/modules/home/DoctorContainer2";
import { File } from "@/components/modules/home/File";
import { Footer } from "@/components/modules/home/Footer";
import Hero from "@/components/modules/home/Hero";
import LineCharts from "@/components/modules/home/LineCgarts";
import TwoLevelPieChart from "@/components/modules/home/PieCharts";

export default function Home() {
  return (
    <div>
      <Hero />
      <AIConsultationSection></AIConsultationSection>
      <DoctorContainer></DoctorContainer>
      <File></File>
      <LineCharts></LineCharts>
      <TwoLevelPieChart></TwoLevelPieChart>
      <Footer></Footer>
    </div>
  );
}
