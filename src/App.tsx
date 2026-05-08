import { motion } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Star, 
  PaintBucket, 
  Bath, 
  DoorOpen, 
  Layers, 
  Car, 
  Truck,
  ChevronRight,
  Droplets
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const categories = [
  { name: "Farby", icon: <PaintBucket className="w-8 h-8" />, desc: "Szeroka paleta barw i marek premium." },
  { name: "Płytki Ceramiczne", icon: <Layers className="w-8 h-8" />, desc: "Nowoczesne wzornictwo i trwałość." },
  { name: "Wyposażenie Łazienek", icon: <Bath className="w-8 h-8" />, desc: "Wszystko do Twojej wymarzonej łazienki." },
  { name: "Drzwi i Podłogi", icon: <DoorOpen className="w-8 h-8" />, desc: "Stylowe rozwiązania dla Twojego domu." },
  { name: "Lakiery Samochodowe", icon: <Car className="w-8 h-8" />, desc: "Profesjonalny dobór i najwyższa jakość." },
  { name: "Akcesoria", icon: <Droplets className="w-8 h-8" />, desc: "Niezbędne narzędzia i drobiazgi." },
];

const openingHours = [
  { day: "Poniedziałek", hours: "07:30 - 17:00" },
  { day: "Wtorek", hours: "07:30 - 17:00" },
  { day: "Środa", hours: "07:30 - 17:00" },
  { day: "Czwartek", hours: "07:30 - 17:00" },
  { day: "Piątek", hours: "07:30 - 17:00" },
  { day: "Sobota", hours: "08:00 - 13:00" },
  { day: "Niedziela", hours: "ZAMKNIĘTE", highlight: true },
];

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* Top Bar */}
      <div className="bg-red-950 text-white py-2 px-4 text-sm hidden md:block border-b border-red-900/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <a href="tel:158643744" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
              <Phone size={14} /> 15 864 37 44
            </a>
            <a href="mailto:firmakolor@tlen.pl" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
              <Mail size={14} /> firmakolor@tlen.pl
            </a>
          </div>
          <div className="flex items-center gap-2 text-amber-400">
            <Truck size={14} /> Oferujemy dostawę towaru!
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 overflow-hidden rounded-xl shadow-md">
              <img 
                src="https://i.postimg.cc/1X7ZCkSk/606874669-122106236349174390-1691471917792941813-n.jpg" 
                alt="Logo Kolor" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tighter uppercase leading-none text-red-700">Kolor</h1>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">Hurtownia Farb & Salon Łazienek</p>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-8 font-medium text-sm text-zinc-600">
            <a href="#oferta" className="hover:text-red-600 transition-colors relative group">
              Oferta
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#galeria" className="hover:text-red-600 transition-colors relative group">
              Galeria
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#kontakt" className="hover:text-red-600 transition-colors relative group">
              Kontakt
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
            </a>
          </nav>

          <a 
            href="https://www.facebook.com/profile.php?id=61585231726233" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-orange-200/50 shadow-lg hover:shadow-xl active:scale-95 transition-all"
          >
            <Facebook size={16} /> Facebook
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center overflow-hidden bg-red-950">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://i.postimg.cc/xdVV4yrz/604388613-122096874171184200-3818819578560471960-n.jpg" 
              className="w-full h-full object-cover opacity-60 scale-105"
              alt="Hurtownia Kolor"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-950 via-red-950/40 to-transparent" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <span className="inline-block px-3 py-1 bg-amber-400 text-red-900 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                Witamy w Kolor
              </span>
              <h2 className="text-5xl md:text-7xl font-display font-medium text-white mb-6 leading-[1.1]">
                Jakość, duży wybór i <span className="italic text-amber-400">konkurencyjna cena</span>.
              </h2>
              <p className="text-zinc-100 text-lg md:text-xl mb-10 leading-relaxed font-light">
                Główny profil naszej działalności to sprzedaż farb, płytek ceramicznych, wyposażenia łazienek, drzwi, podłóg oraz lakierów samochodowych.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#oferta" className="bg-amber-400 text-red-900 px-8 py-4 rounded-full font-bold hover:bg-amber-300 transition-colors flex items-center gap-2 group">
                  Zobacz ofertę <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#kontakt" className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors backdrop-blur-sm">
                  Skontaktuj się
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section id="oferta" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-xl">
                <h3 className="text-3xl md:text-4xl font-display font-medium mb-4">Wszystko dla Twojego domu</h3>
                <p className="text-zinc-500 text-lg">Od fundamentów po detale wykończeniowe. Oferujemy sprawdzonych producentów i fachowe doradztwo.</p>
              </div>
              <div className="hidden md:flex gap-2">
                <div className="px-4 py-2 bg-zinc-100 text-zinc-600 rounded-full text-sm font-medium flex items-center gap-2">
                  <Star fill="currentColor" size={12} /> Ponad 100 marek
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((cat, i) => (
                <motion.div 
                  key={cat.name}
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 border border-zinc-100 rounded-3xl hover:border-red-200 hover:shadow-orange-100 hover:shadow-xl transition-all group bg-zinc-50/50"
                  id={`cat-${i}`}
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-red-600 shadow-sm mb-6 group-hover:scale-110 group-hover:text-orange-500 transition-transform">
                    {cat.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{cat.name}</h4>
                  <p className="text-zinc-500 mb-6">{cat.desc}</p>
                  <div className="flex items-center text-sm font-bold text-red-700 group-hover:gap-2 transition-all">
                    Sprawdź detale <ChevronRight size={16} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Image Row */}
        <section id="galeria" className="pb-24 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 h-[600px]">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden group h-full"
            >
              <img 
                src="https://i.postimg.cc/BbVdc2cn/666469466-122122260477174390-2903819955738940767-n.jpg" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Wnętrze salonu łazienek"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            </motion.div>
            
            <div className="grid grid-rows-2 gap-4 h-full">
              <div className="bg-gradient-to-br from-red-700 to-orange-500 rounded-3xl p-12 flex flex-col justify-center text-white relative overflow-hidden group shadow-xl">
                <div className="relative z-10">
                  <h4 className="text-3xl font-display mb-4">Szybka dostawa</h4>
                  <p className="text-white/80 mb-6 max-w-xs text-lg">Oferujemy profesjonalną dostawę towaru własnym transportem oraz przesyłki kurierskie!</p>
                  <Truck className="w-12 h-12 text-zinc-100 opacity-50 group-hover:translate-x-4 transition-transform duration-500" />
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16 blur-3xl" />
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-3xl p-12 flex items-center justify-between group cursor-pointer hover:bg-amber-100 transition-colors">
                <div>
                  <h4 className="text-2xl font-bold mb-2 text-red-900">Opinie klientów</h4>
                  <p className="text-zinc-600 mb-4">Zobacz co mówią o nas inni na Facebooku</p>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61585231726233&sk=reviews" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-bold text-red-700 hover:text-red-800"
                  >
                    Przejdź do Facebook <Facebook size={18} />
                  </a>
                </div>
                <div className="flex gap-1 text-orange-500">
                  <Star fill="currentColor" size={24} />
                  <Star fill="currentColor" size={24} />
                  <Star fill="currentColor" size={24} />
                  <Star fill="currentColor" size={24} />
                  <Star fill="currentColor" size={24} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Hours Section */}
        <section id="kontakt" className="py-24 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-12">
                <div>
                  <h3 className="text-4xl font-display font-medium mb-8">Kontakt</h3>
                  <div className="space-y-6">
                    <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-red-600 shadow-sm shrink-0 border border-red-50">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="text-zinc-500 text-sm font-semibold uppercase tracking-wider mb-1">Adres</p>
                        <p className="text-xl font-medium">Towarowa 26, 28-200 Staszów</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-orange-500 shadow-sm shrink-0 border border-orange-50">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="text-zinc-500 text-sm font-semibold uppercase tracking-wider mb-1">Telefon</p>
                        <p className="text-xl font-medium">15 864 37 44</p>
                        <p className="text-xl font-medium">+48 604 997 901</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-amber-500 shadow-sm shrink-0 border border-amber-50">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-zinc-500 text-sm font-semibold uppercase tracking-wider mb-1">E-mail</p>
                        <p className="text-xl font-medium">firmakolor@tlen.pl</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-red-800">
                    <Clock size={24} /> Godziny otwarcia
                  </h3>
                  <div className="bg-white rounded-3xl overflow-hidden border border-orange-100 shadow-xl">
                    <table className="w-full text-left">
                      <tbody>
                        {openingHours.map((item) => (
                          <tr key={item.day} className="border-b border-orange-50 last:border-0 hover:bg-amber-50/50 transition-colors">
                            <td className="py-4 px-6 font-medium">{item.day}</td>
                            <td className={`py-4 px-6 ${item.highlight ? 'text-red-600 font-bold' : 'text-zinc-600 font-mono'}`}>{item.hours}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="h-full min-h-[400px] lg:min-h-0 rounded-4xl overflow-hidden shadow-2xl border-4 border-white">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2535.1247633197045!2d21.165018477034106!3d50.55044978015789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473d5865614a86ab%3A0xcf7ce38414061efd!2sTowarowa%2026%2C%2028-200%20Stasz%C3%B3w!5e0!3m2!1spl!2spl!4v1778230084091!5m2!1spl!2spl" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Google Kolor Staszów"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-red-950 text-white py-16 border-t border-red-900">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://i.postimg.cc/1X7ZCkSk/606874669-122106236349174390-1691471917792941813-n.jpg" 
                alt="Logo Kolor Footer" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-tighter uppercase leading-none text-red-500">Kolor</h2>
              <p className="text-[9px] text-red-400/60 uppercase tracking-widest font-semibold">Staszów © 2026</p>
            </div>
          </div>
          
          <div className="flex gap-12 text-sm text-red-200/70">
            <a href="#oferta" className="hover:text-amber-400 transition-colors">Oferta</a>
            <a href="#galeria" className="hover:text-amber-400 transition-colors">Galeria</a>
            <a href="#kontakt" className="hover:text-amber-400 transition-colors">Kontakt</a>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://www.facebook.com/profile.php?id=61585231726233" 
              className="w-10 h-10 rounded-full border border-red-800 flex items-center justify-center hover:bg-white hover:text-red-900 transition-all shadow-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
