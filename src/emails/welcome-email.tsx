
import { WeatherProps } from "@/lib/weather";
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

type Props = {
  weather: WeatherProps;
  name: string;
  mood: string;
};
// resend 오류 해결 1. 비동기함수를 동기함수로 변경
export default function WelcomeEmail(props: Props) {
  const { weather, name, mood } = props;

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
          <Container className="flex items-center justify-center bg-red-100">
            <Heading className="text-center text-3xl">
              하늘의 기분을 담아 보냅니다.⛅
            </Heading>

            <Section>
              <Text className="text-center text-lg/10 font-bold">
                ☁ 구름 위에서 실시간 중계 ♪🔔
                <br />
                {name}님이 {mood}~일 때, 하늘은 🌡 {weather?.main?.temp}°C
                &ensp;
                {weather?.weather[0].main}
              </Text>
            </Section>

            <Section>
              <Text className="text-center text-base/9 p-4 ">
                안녕하세요. {name}님👋
                <br />
                현재 날씨를 알려주는 메일 프로젝트에 방문해 주셔서 감사합니다.😀
                <br />
                이 프로젝트는 React Email 과 Next.js로 만들었습니다.
                <br />
                프로젝트에 관해 더 자세히 알고 싶으시다면 아래 버튼을 클릭해
                주세요.
              </Text>
            </Section>

            <Button
              href="https://github.com/ggang89/mail-app"
              style={{
                margin: "0 auto",
                display: "block",
                width: "300px",

                textAlign: "center",
                backgroundColor: "black",
                color: "white",
                padding: "10px 30px",
                borderRadius: "30px",
              }}
            >
              Go to Project GitPage 🌱
            </Button>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
