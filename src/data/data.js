const freiwilligendienste = [
  {
    id: 1,
    header: "Yardım Kuruluşlarında Gönüllü Çalışmak",
    name: "Caritas - Freiwilligendienste",
    description:
      "Caritas, dünya genelinde sosyal yardım ve gönüllülük faaliyetleri yapan bir kuruluştur. Almanya'da da etkin olan Caritas, Freiwilligendienst programıyla sosyal hizmet alanında gönüllülere fırsatlar sunar, topluma yardım eder ve toplumsal sorumluluk bilincini artırır.",
    link: "https://www.caritas.de/glossare/freiwilligendienste",
  },
  {
    id: 2,
    name: "Diakoni - Freiwilligendienste",
    link: "https://www.diakonie-portal.de/freiwilligendienste",
    description:
      "Diakoni, kiliselerin sosyal yardım alanında aktif olduğu, dezavantajlı gruplara destek veren, adalet ve sevgi temelli bir toplum hizmetidir. Yardımseverlik, eşitlik ve dayanışmayı teşvik ederek insanlara umut ve iyilik sunar.",
  },
  {
    id: 3,
    name: "Technisches Hilfswerk - Ehrenamtlich engagieren",
    description:
      "Technisches Hilfswerk (THW), Almanya'da halkın güvenliğini sağlayan federal bir kuruluştur. Doğal afetlerde, arama-kurtarma operasyonlarında, teknik olaylarda görev alarak mühendislik ve teknik becerileriyle yardım eder. ",
    link: "https://jetzt.thw.de/",
  },
  {
    id: 4,
    name: "Kızılhaç (Rotes Kreuz)",
    description: "İnsani yardım ve sağlık hizmetleri sağlayan bir kuruluş.",
    link: "https://www.drk.de",
  },
  {
    id: 5,
    name: "Aşevi (Suppenküche)",
    description:
      "Evsizlere ve ihtiyaç sahiplerine ücretsiz yemek dağıtan kuruluşlar.",
    link: "https://www.tafel.de",
  },
  {
    id: 6,
    name: "Sığınma Evleri (Frauenhaus)",
    description:
      "Kadınlara ve çocuklara şiddet mağdurlarına yardım eden kuruluşlar.",
    link: "https://www.frauenhauskoordinierung.de",
  },
];

const kinderbetreuung = [
  {
    id: 1,
    header: "Çocuk Bakıcılığı (Kinderbetreuung)",
    name: "Elterninitiative",
    description:
      "Ebeveynler tarafından oluşturulan yerel inisiyatifler aracılığıyla çocuk bakıcılığı hizmeti sunma.",
    link: "https://www.elterninitiativen.de",
  },
  {
    id: 2,
    name: "Familienzentrum",
    description:
      "Aile odaklı merkezlerde çocuk bakıcılığı ve ebeveyn destek programları.",
    link: "https://www.familienzentrum.de",
  },
];

const seniorenbetreuung = [
  {
    id: 1,
    header: "Yaşlı Bakımı (Seniorenbetreuung)",
    name: "Seniorenheim",
    description:
      "Yaşlı bakım evlerinde gönüllü olarak zaman geçirme ve yardım etme.",
    link: "https://www.bundesverband-seniorenwohnen.de",
  },
  {
    id: 2,
    name: "Seniorenclub",
    description:
      "Yaşlılara sosyal etkileşim ve etkinlikler sağlayan topluluk merkezleri.",
    link: "https://www.senioren-portal.de",
  },
];

const sprachtandem = [
  {
    id: 1,
    header: "Dil Tandemleri (Sprachtandem)",
    name: "Tandem-Partner finden",
    description:
      "Dil öğrenmek isteyenlerle iletişim kurabileceğiniz bir platform.",
    link: "https://www.tandempartner.net",
  },
  {
    id: 2,
    name: "Sprachcafé",
    description:
      "Dil etkinliklerine katılarak insanlarla pratik yapma ve dil becerilerinizi geliştirme.",
    link: "https://www.sprachcafe.org",
  },
];

const hilfefurfluchtlinge = [
  {
    id: 1,
    header: "Mültecilere Yardım (Hilfe für Flüchtlinge)",
    name: "Integrationsprojekte",
    description:
      "Mültecilere entegrasyon süreçlerinde yardımcı olmak için projeler.",
    link: "https://www.integration-in-deutschland.de",
  },
  {
    id: 2,
    name: "Sprachunterricht",
    description: "Mültecilere Almanca öğretme ve dil eğitimi sağlama.",
    link: "https://www.refugeephrasebook.de",
  },
];

const umweltschutzundreinigung = [
  {
    id: 1,
    header:
      "Çevre Koruma ve Temizlik Faaliyetleri (Umweltschutz und Reinigung):",
    name: "Naturschutzprojekte",
    description: "Çevre projelerine katılım ve doğal alanları koruma",
    link: "https://www.bund.net",
  },
  {
    id: 2,
    name: "Clean-Up Aktionen",
    description: "Çevre temizliği etkinliklerine katılma ve atık toplama.",
    link: "https://www.cleanupnetwork.com",
  },
];

const tierheim = [
  {
    id: 1,
    header: "Hayvan Barınaklarında Gönüllü Çalışmak (Tierheim):",
    name: "Tierschutzverein",
    description: "Hayvanları koruma ve barınaklarda gönüllü olarak çalışma",
    link: "https://www.tierschutzverein.de",
  },
  {
    id: 2,
    name: "Pfotentraum",
    description: "Evsiz hayvanlara yardım eden hayvan barınakları.",
    link: "https://www.pfotentraum.de",
  },
];

const sportverein = [
  {
    id: 1,
    header:
      "Spor Kulüplerinde Antrenörlük veya Yönetim Görevleri (Sportverein):",
    name: "Sportverein in deiner Stadt",
    description:
      "Yerel spor kulüplerine katılım ve antrenörlük için iletişim. Örneğin, Berlin'deki spor kulüpleri şeklinde arama yapabilirsiniz.",
  },
];

const allData = {
  freiwilligendienste,
  kinderbetreuung,
  seniorenbetreuung,
  sprachtandem,
  hilfefurfluchtlinge,
  umweltschutzundreinigung,
  tierheim,
  sportverein,
};

export default allData;
