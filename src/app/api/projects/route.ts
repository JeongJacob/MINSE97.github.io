const project = [
  {
    name: "pikcha",
    skills: ["React.js", "TypeScript", "Recoil", "Styled-Components", "Axios"],
    github: "https://github.com/codestates-seb/seb41_main_036",
    link: "https://pikcha36.o-r.kr",
    notion:
      "https://codestates.notion.site/36-a37ed733c8b049f2ab8a5677118fbace",
    adminID: "admin@gmail.com",
    adminPW: "@seb!main36",
  },
  {
    name: "nerdnest",
    skills: [
      "React.js",
      "TypeScript",
      "Toast UI Viewer",
      "Styled-Components",
      "Axios",
    ],
    github: "https://github.com/limdumb/NerdNest_FE",
    link: "http://nerdnest.s3-website.ap-northeast-2.amazonaws.com/",
    notion:
      "https://vigorous-scooter-ec8.notion.site/90878d1492824ef88424e3ed4e846093?v=e12d832711274519a20f72432ff279ee",
    adminID: "admin@gmail.com",
    adminPW: "@seb!main36",
  },
  {
    name: "portfolio",
    skills: ["Next.js", "TypeScript", "Scss", "Axios", "Vercel"],
    github: "https://github.com/MINSE97/MINSE97.github.io",
    link: "https://jacob-minse97.vercel.app/",
  },
];

export async function GET() {
  const responseBody = JSON.stringify(project);
  try {
    return new Response(responseBody, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://jacob-minse97.vercel.app",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response("Error occurred", { status: 500 });
  }
}
