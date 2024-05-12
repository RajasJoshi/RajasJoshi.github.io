AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Embedded Firmware Engineer",
    cardImage: "assets/images/experience-page/flipkart.jpg",
    place: "Acevin Solutions",
    time: "(Aug, 2021 - present)",
    desp: "<li>Designed and developed embedded systems for industrial automation,focusing on gas sensing, energy efficiency, and harvesting solutions.</li> <li>Built scalable, performance-optimized applications for resource-limited embedded systems using MQTT, Socket, and peripheral communication protocols.</li> <li>Architected and created custom kernel-space drivers, Board Support Packages, and Devicetree for various SoCs/SOMs from Qualcomm, NXP and Broadcom.</li><li>Developed modular applications and peripheral drivers for ARM M4/M7 MCUs, utilizing FreeRTOS for real-time responsiveness.</li>",
  },
  {
    title: "Embedded Software Intern",
    cardImage: "assets/images/experience-page/gsoc.png",
    place: "Manleo Designs",
    time: "(May - Aug, 2021)",
    desp: "<li>Developed a cost-effective test solution using a Raspberry Pi to address performance validation challenges of an auto tool setter.</li><li>Enhanced production efficiency and quality control in CNC machining environments.</li>",
  },
  {
    title: "Control System Intern",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "Ishanya Integration",
    time: "(May - July, 2021)",
    desp: "<li>Built a robust digital PID controller using an ESP32 for improved process control.</li><li> The system's fast response time and stability ensure consistent and efficient operation.</li><li> Additional features like acceleration control and serial setpoint control provide enhanced user control.</li>",
  },
  {
    title: "Software Development Intern",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "Indian Institute of Geomagnetism",
    time: "(May - July, 2021)",
    desp: "<li>Designed and implemented a Python software solution to streamline ionospheric data analysis.</li><li> Created an intuitive interface and diverse visualization options to simplify data interpretation and support research in ionospheric physics.</li>",
  },
  {
    title: "Embedded System Intern",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "Acuradyne Systems",
    time: "(Dec, 19 - Jan, 20)",
    desp: "<li>Designed and implemented sensor interfaces (IMU, OLED, Bluetooth) for an STM32F103-based embedded system.</li><li> Collaborated on circuit and PCB design, demonstrating cross-functional skills in embedded development.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

// const volunteership = document.querySelector(".volunteership");
// const volunteershipcards = [
//   {
//     title: "GirlScript Summer Of Code 2020",
//     cardImage: "assets/images/experience-page/1.jpg",
//     description:
//       "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
//   },
//   {
//     title: "StudentCode-in 2020",
//     cardImage: "assets/images/experience-page/2.jpg",
//     description:
//       "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
//   },
//   {
//     title: "PClub Summer Of Code 2020",
//     cardImage: "assets/images/experience-page/3.jpg",
//     description:
//       "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
//   },
//   {
//     title: "Hakin-Codes",
//     cardImage: "assets/images/experience-page/4.jpg",
//     description:
//       "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
//   },
// ];

// const showCards = () => {
//   let output = "";
//   volunteershipcards.forEach(
//     ({ title, cardImage, description }) =>
//       (output += `        
//       <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
//       <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
//       <div class="content">
//           <h2 class="volunteerTitle">${title}</h2><br>
//           <p class="copy">${description}</p></div>
      
//       </div>
//       `)
//   );
//   volunteership.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards);
