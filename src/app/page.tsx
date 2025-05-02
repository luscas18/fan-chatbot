import { Apresentacao } from "@/components/landing_page/apresentacao";
import { TemplateChat } from "@/components/landing_page/chat/template_chat";
import SobreChat from "@/components/landing_page/sobre_chat";
import Footer from "../components/landing_page/footer";

export default function Home() {
  return (
    <main className="bg-black">
      <Apresentacao/>
      <SobreChat/>
      <TemplateChat/>
      <Footer/>
    </main>
  );
}
