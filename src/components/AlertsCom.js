import Alert from "react-bootstrap/Alert";

function AlertsCom() {
  return (
    <Alert variant="primary" className="text-left mt-2">
      <Alert.Heading>Merhaba, sizi görmek güzel!</Alert.Heading>
      <p>
        Sosyalleşmenin etkileyici dünyasına adım atın, insanların anlamlı
        bağlantılar kurduğu ve değerli deneyimler paylaştığı projemize hoş
        geldiniz! Sosyal dünyanın kalbine doğru bu aydınlatıcı yolculukta
        bizimle birlikte olun. Sizin varlığınız sıcak bir şekilde karşılanacak
        ve değerli bulunacaktır!
      </p>
      <hr />
      <p className="mb-0">
        Keşfe çıkalım, bağlantıların geliştiği ve hikayelerin kesiştiği
        etkileyici sosyal dünyanın içinde buluşalım!
      </p>
    </Alert>
  );
}

export default AlertsCom;
