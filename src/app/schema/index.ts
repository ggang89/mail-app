import { z } from "zod";

// 기본적인 객체 스키마 생성 => 유효성검증
// 받아야 하는 값의 형태 정의
export const formSchema = z
  .object({
    name: z.string().trim().min(2, {
      message: "2글자 이상 입력해주세요",
    }),
    email: z.string().trim().email({ message: "이메일을 올바르게 입력해주세요" }),
  })
  

// formSchema의 타입을 추출
// type Schema = {name: string; email:string; password: string; passwordCheck: string;} 와 같다
export type Schema = z.infer<typeof formSchema>;
