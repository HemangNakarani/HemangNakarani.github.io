import EasyAuthLogo from "../assets/images/easyAuthLogo.webp";
import CanteeniaLogo from "../assets/images/canteenialogo.webp";
import CodersCalendarLogo from "../assets/images/coderscalendarlogo.webp";
const data = [
  {
    name: "Coder's Calendar",
    type: "Android App",
    url: "https://github.com/HemangNakarani/Coders-Calendar",
    github: "https://github.com/HemangNakarani/Coders-Calendar",
    image: CodersCalendarLogo,
    slug: "coders-calendar",
    description:
      "An android app to manage a schedule of programming contests of various competitive programming platforms",
    tech: ["Android", "SQLite", "Google App Script", "SpreadSheet"],
  },
  {
    name: "EasyAuth",
    type: "WebApp",
    url: "https://github.com/ossdaiict/EasyAuth",
    github: "https://github.com/ossdaiict/EasyAuth",
    image: EasyAuthLogo,
    slug: "easy-auth",
    description:
      "easy-to-use REST and JWTbased set of authentication APIs that efficiently handle user registration and authentication for any event or webapp in the backend.",
    tech: ["React Js", "Node Js", "Express Js", "MongoDB"],
  },
  {
    name: "Canteenia (McDA's)",
    type: "WebApp",
    url: "https://github.com/HemangNakarani/Project-Canteen-Backend",
    github: "https://github.com/HemangNakarani/Project-Canteen-Backend",
    image: CanteeniaLogo,
    slug: "canteenia",
    description:
      "A Canteen Automation project targeted to mainly DAIICT Canteens",
    tech: [
      "React Js",
      "SpringBoot",
      "Java",
      "PostgreSQL",
      "AWS",
      "ElasticBeanStalk",
      "AWS CodePipeline",
    ],
  },
];

export function getData() {
  return data;
}
