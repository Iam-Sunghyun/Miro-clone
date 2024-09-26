# Convex란?

Convex는 서버리스 데이터 플랫폼으로, 프론트엔드 개발자가 복잡한 백엔드 개발을 최소화하면서 데이터베이스 작업을 쉽게 수행할 수 있게 도와주는 오픈소스 백엔드 플랫폼이다.

```
서버리스(Serverless)는 직역하면 "서버가 없다"라는 뜻이 된다.
하지만 정말로 서버가 없는 것을 뜻하는게 아니다. 서비스를 하는데 있어 어찌되었든 저장소는 필요하고 서버는 필요하기 때문이다.
따라서 정확히 말하자면, 서버리스는 서버가 없는 백엔드 라는 뜻이 아닌 우리가 직접 서버를 관리하지 않아 신경 쓸 필요없는 경우를 뜻한다.
```

# Convex 시작하기

**[Convex Next.js Quickstart]**

https://docs.convex.dev/quickstart/nextjs // 3번까지

https://www.convex.dev/

# Convex 장점?

<!-- 간단히 백엔드를 구성할 수 있고 로그 창을 활용해 에러나 API 결과를 확인할 수 있기 때문에 개발 편의성이 좋다. 또한 실시간으로 데이터가 반영되어 결과를 확인하기 용이하다. -->

Convex는 실시간 데이터 동기화, 서버리스 아키텍처, 간편한 데이터 모델링, TypeScript 지원, 보안, 그리고 자동 확장 등의 장점을 통해 프론트엔드 개발자들이 백엔드 작업에 신경 쓰지 않고도 기능을 빠르게 구현하고 관리할 수 있게 해줍니다. 이를 통해 개발 생산성을 높이고, 복잡한 데이터 작업을 간소화할 수 있습니다.

1. 서버리스 아키텍처
   Convex는 완전히 서버리스로 동작하기 때문에, 인프라 관리에 신경 쓸 필요가 없습니다.
   개발자는 백엔드 인프라를 구축하거나 확장하는 부담 없이 데이터와 비즈니스 로직에만 집중할 수 있습니다.
   자동 확장 기능이 있어 트래픽에 따라 자동으로 리소스가 조절되므로, 비용 효율적이고 성능을 최적화할 수 있습니다.
2. 실시간 데이터 동기화
   Convex는 실시간으로 데이터 변경 사항을 클라이언트와 자동으로 동기화합니다.
   이를 통해 사용자에게 최신 데이터를 즉시 제공할 수 있어, 채팅, 공동 작업 도구 등 실시간 기능을 구현하기에 적합합니다.
   프론트엔드 개발자는 별도의 WebSocket 연결이나 복잡한 상태 동기화 로직을 작성하지 않아도 됩니다.
3. 데이터 일관성 및 트랜잭션 지원
   Convex는 ACID 트랜잭션을 지원하기 때문에 데이터 일관성을 유지하기 쉽습니다.
   여러 데이터 변경 작업을 안전하게 하나의 트랜잭션으로 처리할 수 있어 데이터 무결성을 보장합니다.
4. 간편한 데이터 모델링 및 TypeScript 지원
   Convex는 TypeScript를 완벽하게 지원하며, 타입 안전성을 보장합니다.
   클라이언트와 서버 간 데이터 타입이 자동으로 동기화되어 일관성을 유지할 수 있고, 개발자가 타입 관련 오류를 줄일 수 있습니다.
   API 호출과 데이터베이스 쿼리에 TypeScript의 타입 정의를 활용할 수 있어 생산성을 높여줍니다.
5. 빠른 프로토타이핑과 간소화된 백엔드 로직
   Convex는 프론트엔드 코드와 백엔드 코드를 쉽게 연결할 수 있어, 빠르게 프로토타이핑하고 기능을 추가할 수 있습니다.
   백엔드 로직을 함수로 정의하고, 이를 프론트엔드에서 간단하게 호출할 수 있으므로 개발 속도가 크게 향상됩니다.
6. 보안 및 인증
   Convex는 클라이언트 인증과 권한 관리 기능을 제공하여 보안 문제를 쉽게 관리할 수 있습니다.
   데이터에 접근할 수 있는 권한을 함수 레벨에서 제어할 수 있어 보안에 강합니다.
7. 자동 확장 및 성능 최적화
   Convex는 클라우드 인프라에서 자동으로 확장되어 애플리케이션의 성능을 최적화합니다.
   데이터베이스 쿼리와 작업이 확장 가능한 구조로 설계되어 있어 대규모 애플리케이션에도 적합합니다.
8. 관리형 데이터베이스
   Convex는 관리형 데이터베이스를 제공하므로 개발자가 데이터베이스 설정, 백업, 확장, 모니터링 등에 신경 쓸 필요가 없습니다.
   이는 유지 보수에 필요한 시간을 줄여주고 개발에만 집중할 수 있게 해줍니다.

# Clerk로 Authentication 구현하기

Clerk는 사용자 인증 및 관리에 특화된 서비스로, 개발자들이 애플리케이션에 쉽게 인증 기능을 추가할 수 있도록 도와준다.

**[Clerk with Nextjs]**

https://clerk.com/docs/quickstarts/nextjs

# Clerk 장점?

1. 다양한 인증 방법 지원
   Clerk는 이메일/비밀번호, 소셜 로그인(Google, Facebook, GitHub, etc.), WebAuthn(생체 인증), SMS 등 다양한 인증 방법을 제공합니다.
   이러한 다양한 옵션을 통해 사용자의 편의성을 높이고, 애플리케이션의 보안 수준을 향상시킬 수 있습니다.

2. 손쉬운 통합과 빠른 구현
   Clerk는 간단한 JavaScript 및 React SDK를 제공하여 몇 줄의 코드만으로 인증 기능을 쉽게 통합할 수 있습니다.
   Next.js, React, Vue, Svelte, 그리고 기타 프론트엔드 프레임워크와 쉽게 연동되므로 개발 속도가 크게 향상됩니다.
   이러한 손쉬운 통합은 인증 관련 기능을 처음부터 구현하는 데 드는 시간을 절약해 줍니다.

3. 완벽한 세션 관리
   Clerk는 세션 관리를 자동으로 처리하며, 세션 유지, 연장, 만료 등을 간단하게 관리할 수 있습니다.
   클라이언트와 서버 간 세션 상태를 안전하게 관리하고, 만료된 세션을 자동으로 처리해 보안성을 높입니다.

4. 유연한 사용자 관리 및 프로필 기능
   Clerk는 사용자의 프로필 관리 기능을 지원하며, 사용자 정보를 쉽게 업데이트하고 조회할 수 있습니다.
   클라이언트 측에서 사용자 프로필을 쉽게 구성하고 수정할 수 있어, 개인화된 경험을 제공하는 데 유용합니다.
5. 강력한 보안 기능
   Clerk는 보안에 최적화된 인증 기능을 제공하며, 다단계 인증(Multi-Factor Authentication, MFA), 비밀번호 복잡성 정책, WebAuthn 등 다양한 보안 기능을 쉽게 구현할 수 있습니다.
   OAuth, OpenID Connect와 같은 표준을 지원하여 애플리케이션의 보안을 강화할 수 있습니다.
6. 자동화된 이메일 및 SMS 통신
   Clerk는 인증 과정에서 필요한 이메일과 SMS 전송을 자동으로 처리합니다.
   회원가입, 비밀번호 재설정, 이메일 인증 등의 기능을 설정하는 데 드는 시간을 줄여주고, 사용자 경험을 향상시킵니다.
7. 실시간 사용자 대시보드 및 관리 콘솔
   Clerk는 개발자와 관리자를 위한 실시간 사용자 관리 대시보드를 제공합니다.
   관리자 대시보드를 통해 사용자의 로그인 상태, 프로필 정보, 인증 수단 등을 한눈에 확인하고 관리할 수 있습니다.
   이를 통해 사용자 관리를 위한 백오피스 기능을 별도로 개발할 필요가 없습니다.
8. 서버리스 환경 및 다양한 백엔드 지원
   Clerk는 서버리스 환경과 완벽하게 호환되며, Next.js, Vercel, Netlify 등 다양한 서버리스 플랫폼에서 쉽게 통합됩니다.
   백엔드 API와도 손쉽게 연동할 수 있어 전체 애플리케이션의 아키텍처에 유연하게 통합됩니다.
9. 사용자 정의 및 확장성
   Clerk는 다양한 UI 컴포넌트를 제공하며, 이를 커스터마이징하여 애플리케이션에 맞는 사용자 경험을 제공할 수 있습니다.
   React 컴포넌트를 커스터마이징하여 브랜드에 맞는 인증 UI를 생성하거나, 고유한 플로우를 구현할 수 있습니다.
10. 강력한 팀 및 조직 관리 기능
    Clerk는 개인 사용자뿐 아니라 팀과 조직 단위의 사용자 관리 기능을 제공합니다.
    팀 기능을 통해 여러 사용자들이 팀 단위로 로그인하고, 권한을 관리하는 기능을 쉽게 구현할 수 있습니다.
11. 다양한 프레임워크 및 플랫폼 지원
    Clerk는 React, Next.js, Remix, Gatsby 등 다양한 프레임워크를 지원합니다.
    이를 통해 개발 환경에 구애받지 않고 인증 기능을 통합할 수 있습니다.

Clerk는 다양한 인증 방법, 손쉬운 통합, 강력한 보안 기능, 자동화된 이메일/SMS 통신, 실시간 사용자 관리 대시보드 등 풍부한 기능을 제공하여 개발자가 인증과 사용자 관리 기능을 쉽게 구현하고 유지할 수 있도록 도와줍니다. 이러한 장점으로 인해 애플리케이션의 보안 및 사용자 경험을 향상시키면서 개발 생산성을 높일 수 있습니다

# Convex & Clerk 같이 사용하기

튜토리얼 영상과 다른 부분은 문서 참고.

https://docs.convex.dev/auth/clerk

# `<ClerkProvider>`, `<ConvexProviderWithClerk>` 래퍼 컴포넌트로 라우트 보호하기(인증 구현)

컴포넌트 최상위에(루트 레이아웃 위치) 다음 `Provider` 래퍼 컴포넌트로 래핑 해줌으로서 앱 전체에 인증이 필요하도록 만들어 준다. 로그인이 되어있지 않은 상태라면 clerk의 로그인 페이지로 리다이렉트 된다.

※ 주의 : 튜토리얼 영상과 Clerk 문서에서 제공되는 기본 코드는 모든 경로에 대해서 인증으로 보호하지 않는다. 모든 경로를 보호하려면 `middleware.tsx` 파일을 다음과 같이 정의해야 한다. 참고 문서 링크는 `https://clerk.com/docs/references/nextjs/clerk-middleware#protect-all-routes`

```
// /middleware.tsx
// 모든 경로를 인증으로 보호
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
-----------------------------------
// /convex/convex-client-provider.tsx
"use client";

import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

// .env.local 파일에 정의한 clerk url
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({ children }: ConvexClientProviderProps) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
-------------------------------
// /app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ConvexClientProvider } from "@/providers/convex-client-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ConvexClientProvider>{children}</ConvexClientProvider> // 모든 라우트 페이지를 인증으로 보호
      </body>
    </html>
  );
}
```

# `@clerk/clerk-react`, `convex/react` 내장 컴포넌트로 인증 상태 식별

`Clerk`와 `Convex` 래퍼 컴포넌트(`<ConvexClientProvider>`) 하위에서 다음 컴포넌트를 사용해 인증 상태를 식별하고, 로그인 버튼 및 사용자 프로필 버튼을 렌더링 해줄 수 있다.

```
// /app/page.tsx
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

function Home(){
  return (
    <main>
    // 로그인 되지 않았을 때
      <Unauthenticated>
        <SignInButton /> // 로그인 버튼
      </Unauthenticated>
    // 로그인 됐을 때
      <Authenticated>
        <UserButton /> // 사용자 프로필 버튼
        <Content />
      </Authenticated>
    </main>
  );
}

function Content() {
  const messages = useQuery(api.messages.getForCurrentUser);
  return <div>Authenticated content: {messages?.length}</div>;
}

export default App;
```

# `Convex` `<Authenticated>`, `<AuthLoading>` 컴포넌트로 인증 로딩 표시 및 로그아웃 구현

`Convex`, `Clerk` provider 래퍼 컴포넌트 하위에 `convex/react`에서 제공되는 다음 컴포넌트를 렌더링하여 인증 중이거나 인증 되었을때 출력될 컴포넌트를 설정해준다.

- `<Authenticated>` : 인증이 된 경우 자식 요소를 렌더링한다.
- `<AuthLoading>` : 클라이언트가 인증을 사용하지 않거나 인증 중이면 자식을 렌더링한다.

```
// /components/auth/loading.tsx
import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Image
        src="/logo.svg" // 다렉토리 최상위의 public 폴더에서 불러온다
        alt="Logo"
        width={120}
        height={120}
        className="animate-pulse duration-700"
      />
    </div>
  );
};
-----------------------------
// /providers/convex-client-provider.tsx
"use client";

import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";
import { Loading } from "@/components/auth/loading";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

// .env.local 파일에 정의한 clerk url
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({ children }: ConvexClientProviderProps) => {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Authenticated>{children}</Authenticated>
        <AuthLoading>
          <Loading />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
```

# `Clerk` `<UserButton>` 컴포넌트로 로그아웃

`Clerk`의 `@clerk/nextjs`에서 제공되는 `<UserButton>` 컴포넌트를 사용하면 로그인 시 사용자 프로필 아이콘을 렌더링할 수 있으며 로그아웃도 가능해진다.

```
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <div>로그인한 유저 페이지</div>
      <div>
        <UserButton />
      </div>
    </div>
  );
}
```

**[Convex convex/react module `<Authenticated>`, `<AuthLoading>` etc. ]**

https://docs.convex.dev/api/modules/react

**[Convex authentication state (9번)]**

https://docs.convex.dev/auth/clerk
