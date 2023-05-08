const project = [
  {
    name: "pikcha",
    skills: ["React.js", "TypeScript", "Recoil", "Styled-Components", "Axios"],
    github: "https://github.com/codestates-seb/seb41_main_036",
    link: "https://pikcha36.o-r.kr",
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
    adminID: "admin@gmail.com",
    adminPW: "@seb!main36",
  },
  {
    name: "portfolio",
    skills: ["Next.js", "TypeScript", "Scss", "Axios"],
    github: "https://github.com/MINSE97/MINSE97.github.io",
    link: "https://jacob-minse97.vercel.app/",
  },
];

export async function GET(request: Request) {
  const responseBody = JSON.stringify(project);
  try {
    return new Response(responseBody, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response("Error occurred", { status: 500 });
  }
}
