import "./styles.css";
import React from "react";

const posts = [
  {
    id: 1,
    imgUrl: "/Danismanlik2.jpg",
    text:
      "Pazar Analizi, Rakip Analizi ve Benchmark Çalışmaları, Orijinal Fiyat Karşılaştırmaları, Kampanya Yönetimi, Önerileri, Excess and Obsolite Stok Değerlemesi, Diğer Danışmanlıklar"
  },
  {
    id: 2,
    imgUrl: "/Danismanlik5.jpg",
    text:
      "Rekabet Analizi, Piyasa Bilgilendirme, İnternet Tabanlı Katalog Satış Portalı, Servis Yazılımı, Stok Yönetimi, Süreç Analizi ve İyileştirmeleri, Diğer Danışmanlıklar"
  },
  {
    id: 3,
    imgUrl: "/Danismanlik4.jpg",
    text:
      "Orijinal / Eşdeğer Parça Analizleri, Araç Teknik Bilgileri, Maliyet Yönetimi / Analizleri, Piyasa Analizleri, Hasar Parçaları, Periyodik Bakım Karşılaştırmaları, Diğer Danışmanlık Hizmetleri"
  },
  {
    id: 4,
    imgUrl: "/SparePart5.png",
    text:
      "Otomotiv parçaları konusunda talep eden otomotiv distribütörleri, parça üreticileri ve sigorta şirketlerine pazar araştırmaları, veri ve bilgi sağlayıcılığı ve çeşitli konularda danışmanlık hizmetleri vermektedir."
  }
];

const HomePage = () => {
  return (
    <div className="container">
      {posts.map((post) => (
        <div key={post.id} className="home-section">
          <img
            src={post.imgUrl}
            alt="Resim Açıklaması"
            className="home-image"
          />
          <p className="home-text">{post.text}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
