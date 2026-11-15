# Real Drive

Brauzerda (telefon va kompyuterda) ishlaydigan realistik 3D mashina haydash o'yini. Three.js asosida yozilgan.

## Imkoniyatlar

- **Real 3D mashina modellari**, salon ichi bilan birga: Concept R, Dodge Challenger LB, Ferrari F40 LB-Works, Mercedes-Benz E55 AMG va Porsche 911 GT3 R (garajda almashtiriladi)
- **Katta xaritalar**: Aerodrom (2 km uchish yo'lagi, angarlar, drift maydoni) va Trassa (3 km poyga trassasi, davra vaqti va rekord)
- **Kichik joylar**: haqiqiy 360° fotosuratlar (HDRI) yerga proyeksiya qilingan: karyer, maydon va kechki shahar
- **Tyuning**: asosiy rang va bo'yoq turi (metallik, yaltiroq, mat, sadaf), ikkinchi rang, disk rangi, tonirovka, podveska, dvigatel (Stage 1–3), shinalar, neon
- **Haydash**: avtomat uzatmalar qutisi, qo'l tormozi bilan drift, drift ochkolari va rekord, shina izlari, uriladigan konuslar
- **Kameralar**: orqadan, salondan, kapotdan va kino rejimi
- Dvigatel, shina chiyillashi va signal ovozlari

## Boshqaruv

| Kompyuter | Telefon |
|---|---|
| `W` / `S`: gaz, tormoz, orqaga | GAZ / TORMOZ |
| `A` / `D`: rul | ◀ ▶ |
| `Probel`: qo'l tormozi (drift) | QO'L TORMOZ |
| `C`: kamera, `L`: faralar, `H`: signal | yuqoridagi tugmalar |
| `R`: qayta boshlash, `Esc`: menyu | ⏸ |

## Ishga tushirish

Fayllarni lokal server orqali oching (masalan `npx serve .`), keyin brauzerda `index.html`. Three.js CDN orqali yuklanadi.

## Mualliflik

- 3D mashina modeli "Car Concept": © 2024 Darmstadt Graphics Group GmbH, model va teksturalar Eric Chadwick. Litsenziya: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Unity Fan'ning public domain modeli asosida, [Khronos glTF Sample Assets](https://github.com/KhronosGroup/glTF-Sample-Assets/tree/main/Models/CarConcept) to'plamidan olingan.
- 3D model "2015 Dodge Challenger LB★PERFORMANCE": Ddiaz Design, [Sketchfab](https://sketchfab.com/3d-models/2015-dodge-challenger-lbperformance-db846e9b985e4ae4934a5d9b6d1683f2). Litsenziya: [CC BY-NC-SA 4.0](http://creativecommons.org/licenses/by-nc-sa/4.0/) — faqat notijorat maqsadda. Modelga o'zgartirish kiritilmagan; o'yinda rangi almashtiriladi.
- 3D modellar "LB-Works Ferrari F40" (CC BY-NC-SA 4.0), "Mercedes-Benz W211 E55" (CC BY-NC 4.0) va "Porsche 911 GT3 R Rennsport" (CC BY-NC 4.0): vecarz, [Sketchfab](https://sketchfab.com/heynic). Faqat notijorat maqsadda. O'yin uchun modellar soddalashtirilgan (poligonlar kamaytirilgan, teksturalar siqilgan).
- HDRI panoramalar (quarry_01, royal_esplanade, venice_sunset, blouberg_sunrise_2): [Poly Haven](https://polyhaven.com), CC0. three.js misollar to'plami orqali olingan.
