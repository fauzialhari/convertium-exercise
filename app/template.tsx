'use client'
import ReactFullpage from "@fullpage/react-fullpage";
export default function MainTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactFullpage
      navigation
      credits={{
        enabled: true,
        label: "Made with fullpage.js",
        position: "right",
      }}
      render={() => <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>}
    />
  );
}
