import {
  Card,
  CardContent,

  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Film } from "lucide-react";
import { Camera } from "lucide-react";
export default function About() {
  return (
    <div className="mx-auto max-w-2xl max-x-4xl py-10 px-2">
      <Card className="px-8 py-13 h-[400px]">
        <CardHeader>
          <CardTitle className="italic text-2xl text-center ">
            &quot; 시간을 멈춰 담은 하늘의 스냅샷 &ensp;
            <Film size={33} /> &quot;
          </CardTitle>
        </CardHeader>
        <CardContent className="text-lg/14 flex  ">
          순간의 장면을 담은 스냅샷처럼 📸
          <br />
          순간의 날씨를 담아 보내드립니다 🌥
          <br />
          기억하고 싶은 지금 이 순간을 날씨와 함께 저장하세요.🍃
          <br />
          메일함을 열었을 때, 바람처럼 훅 그날의 온도가 느껴질꺼에요.🌬
        </CardContent>
      </Card>
    </div>
  );
}
