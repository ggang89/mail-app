import {
  Tailwind,
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Section,
  Text,
} from "@react-email/components";
//import getWeather from "../../api/weather";
type Props = {
  weather: [
    {
      main: "string";
      icon: "string";
    },
  ];
  main: {
    temp: number;
  };
};
export default function WelcomeEmail({ weather }: { weather: Props }) {
  console.log(weather);
  
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#007291",
            },
          },
        },
      }}
    >
      <Html>
        <Head />
        <Body>
          <Container>
            <Heading className="text-center text-3xl">
              Welcome to My Mail Project ✨
            </Heading>

            {/* 날씨 불러오기 ? */}
            <Section>
              <Text className="text-center">
                현재 온도: {weather?.main?.temp}°C
                <br />
              </Text>
            </Section>

            <Section>
              <Text className="text-center text-lg/10 p-4 ">
                Thank you for comming to my project! 🎉
                <br />
                This is a mail project using React mail and Next.js.
                <br />
                If you want to see the more info about the project, please click
                the button below.
              </Text>
            </Section>

            <Button
              href="https://github.com/ggang89/mail-app"
              className="text-center flex justify-center items-center bg-black text-green-300 px-8 py-3 rounded-full hover:bg-indigo-50"
            >
              {/* 왜 hover만 안 먹어? */}
              Go to Project GitPage 🌱
            </Button>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
