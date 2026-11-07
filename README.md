# Real Drive

Brauzerda (telefon va kompyuterda) ishlaydigan realistik 3D mashina haydash o'yini. Three.js asosida yozilgan.

## Imkoniyatlar

- **Real 3D mashina modeli**, salon ichi bilan birga (rul, panel, o'rindiqlar)
- **Real joylar**: haqiqiy 360° fotosuratlar (HDRI) yerga proyeksiya qilingan. Joylar: karyer, maydon va kechki shahar
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
- HDRI panoramalar (quarry_01, royal_esplanade, venice_sunset): [Poly Haven](https://polyhaven.com), CC0. three.js misollar to'plami orqali olingan.
